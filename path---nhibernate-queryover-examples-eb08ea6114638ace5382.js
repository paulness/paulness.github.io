webpackJsonp([0x93e76b9e4aa0],{791:function(e,t){e.exports={data:{post:{id:"/root/project/content/posts/2017-10-26--nhibernate-queryover-examples/index.md absPath of file >>> MarkdownRemark",html:'<p>Real world usage examples, showcasing the power of the strongly typed database query language NHibernate QueryOver.</p>\n<p>If you’d like to read up more about the benefits of NHibernate, ORM and QueryOver generally please read the following articles.</p>\n<ul>\n<li><a href="http://www.andrewwhitaker.com/queryover-series/">QueryOver series by Andrew Whitaker</a></li>\n<li><a href="http://nhibernate.info/doc/">Official NHibernate documentation</a></li>\n</ul>\n<p>Examples</p>\n<h3>1. ReadOnly usage</h3>\n<p>ReadOnly is a safety measure that you can apply to NHibernate queries. I highly recommend you use this property when you do not intend to perform database updates/inserts. Take the following example:</p>\n<div class="gatsby-highlight">\n      <pre class="language-c#"><code class="language-c#">Customer customerAndOrders =\n            NHibernateSession.QueryOver&lt;Customer&gt;()\n            .Fetch(n =&gt; n.Orders).Eager\n            .Where(n =&gt; n.CustomerId == navbarId)\n            .SingleOrDefault()\n            .ReadOnly(); //this is where you set ReadOnly()\n\n//modifications to the objects will NOT be automatically propagated to the database\nNastyMethodThatModifiesData(customerAndOrders);\nNastyMethodThatModifiesData(customerAndOrders.Orders);</code></pre>\n      </div>\n<p>There are some caveats to ReadOnly in NHibernate, I recommend that you read more on the subject <a href="http://nhibernate.info/doc/nhibernate-reference/readonly.html">here</a>.</p>\n<h3>2. Transforming</h3>\n<p>Using the inbuilt DistinctRootEntity transformer, we can safely transform duplicate rows originating from left joins (one to many or many to many). The results after the transform are correctly nested C# objects.</p>\n<div class="gatsby-highlight">\n      <pre class="language-c#"><code class="language-c#">IList&lt;NavBarItem&gt; navBarItemsForNavBar =\n        NHibernateSession.QueryOver&lt;NavbarItem&gt;()\n        .Where(n =&gt; n.NavbarId == navbarId)\n        .Fetch(n =&gt; n.Section).Eager //one section per navBarItem\n        .Fetch(n =&gt; n.Images).Eager //multiple images per navBarItem\n        .TransformUsing(Transformers.DistinctRootEntity) //this is the transform\n        .ReadOnly().List();\n\n//The client actually wants to sort the images within each NavBarItem entry, in this case we sort this nested content in code.\n//ReadOnly() is set already for safety to prevent any updates/inserts occurring as a result of the sorting\nnavBarList.ForEach(ni =&gt; ni.Images = ni.Images.OrderBy(c =&gt; c.Position).ToList());</code></pre>\n      </div>\n<h3>3. Projecting and inner joins with multiple criteria/conditions</h3>\n<p>This below query shows both of the following.</p>\n<ul>\n<li>Inner joins with additional conditions, part of join criteria. In this example, we are getting all the GroupTests and Reviews by just the reviewIds</li>\n<li>Projecting/selecting only a few properties instead many unneeded columns, using the AliasToBean transformer</li>\n</ul>\n<div class="gatsby-highlight">\n      <pre class="language-c#"><code class="language-c#">GroupTestDo groupTestDo = null;\nReviewDo reviewDo = null;\nreturn\n    NHibernateSession.QueryOver&lt;GroupTestReviewDo&gt;()\n        .Inner.JoinAlias(r =&gt; r.Reviews, () =&gt; reviewDo, r =&gt; r.Id.IsIn(reviewIds))\n        .Inner.JoinQueryOver(g =&gt; g.GroupTests, () =&gt; groupTestDo, gt =&gt; gt.IsPublished)\n        .OrderBy(gt =&gt; gt.Title).Asc\n        .SelectList(list =&gt;\n            list.Select(() =&gt; groupTestDo.Id).WithAlias(() =&gt; groupTestDo.Id)\n            .Select(() =&gt; groupTestDo.Title).WithAlias(() =&gt; groupTestDo.Title))\n    .TransformUsing(Transformers.AliasToBean&lt;GroupTestDo&gt;())\n    .List&lt;GroupTestDo&gt;();</code></pre>\n      </div>\n<h3>4. Eager fetching down two levels</h3>\n<p>In this example, we are attempting to retrieve all the ListingCategories and the Categories for each of those ListingCategories. Doing this all in the same query using the Fetch Eager.</p>\n<div class="gatsby-highlight">\n      <pre class="language-c#"><code class="language-c#">if (fetchListingCategories) {\nquery = query.Fetch(c =&gt; c.ListingCategories).Eager\n        .Fetch(c =&gt; c.ListingCategories[0].Categories).Eager;\n}</code></pre>\n      </div>\n<p>The two fetch commands, translate to the following in SQL:</p>\n<div class="gatsby-highlight">\n      <pre class="language-sql"><code class="language-sql"><span class="token keyword">left</span> <span class="token keyword">outer</span> <span class="token keyword">join</span> ListingCategory listingcat4_\n    <span class="token keyword">on</span> this_<span class="token punctuation">.</span>ListingId <span class="token operator">=</span> listingcat4_<span class="token punctuation">.</span>ListingId\n<span class="token keyword">left</span> <span class="token keyword">outer</span> <span class="token keyword">join</span> Category categorydo5_\n    <span class="token keyword">on</span> listingcat4_<span class="token punctuation">.</span>CategoryId <span class="token operator">=</span> categorydo5_<span class="token punctuation">.</span>CategoryId\n</code></pre>\n      </div>\n<p>You can learn more about nHibernate fetching strategies <a href="http://nhibernate.info/doc/nhibernate-reference/performance.html">here</a>. </p>\n<h3>6. Subqueries</h3>\n<p>Subqueries are very useful for retrieving data in some cases.</p>\n<div class="gatsby-highlight">\n      <pre class="language-c#"><code class="language-c#">//This is a nHibernate LINQ lambda expression only\nvar groupTestReviewsIdsDetachedQuery = QueryOver.Of&lt;GroupTestReviewDo&gt;()\n        .Where(gtr =&gt; gtr.GroupTestId == groupTestId)\n        .Select(Projections.Distinct(Projections.Property&lt;GroupTestReviewDo&gt;(p =&gt; p.ReviewId)));\n\n//The expression defined above will be used in the below database query.\nvar reviews =\n        NHibernateSession.QueryOver&lt;ReviewDo&gt;()\n        .WithSubquery.WhereProperty(r =&gt; r.Id).In(groupTestReviewsIdsDetachedQuery)\n        .Where(r =&gt; r.IsPublished)\n        .Fetch(r =&gt; r.ProductDo).Eager\n        .OrderBy(r =&gt; r.Title).Asc\n        .ReadOnly().List();</code></pre>\n      </div>\n<p>You can read more on NHibernate subqueries <a href="http://www.andrewwhitaker.com/blog/2014/10/24/queryover-series-part-8-working-with-subqueries/">here</a>.</p>\n<h3>7. Refactoring legacy loop code to use NHibernate Future Query / multiple result sets</h3>\n<p>In this example, imagine we encounter some pre-existing legacy code that executes a database select statement within a for loop. This results in unnecessary round trips to the database, e.g., connecting, executing query, returning results, NHibernate automatically transforming results to C# classes etc.</p>\n<p>Database queries in loops are generally discouraged.</p>\n<div class="gatsby-highlight">\n      <pre class="language-c#"><code class="language-c#">private IEnumerable&lt;ListingCategoryDo&gt; GetMostRecentListingCategoriesByListing(List&lt;Listing&gt; listingResults)\n{\n    for (int i = 0; i &lt; listingResults.Count; i++)\n    {\n        var listing = listingResults[i];\n        ListingCategoryDo topListingCategoryForListing =\n                    NHibernateSession.CreateQuery(&quot;FROM ListingCategoryDo l WHERE l.ListingId = :listingId ORDER BY l.PublishDate DESC&quot;)\n                        .SetParameter(&quot;listingId&quot;, listingId)\n                        .SetReadOnly(true)\n                        .SetMaxResults(1)\n                        .UniqueResult&lt;ListingCategoryDo&gt;();\n\n        yield return topListingCategoryForListing;\n    }\n}\n\n//this will hit the database (n times)\n//n round-trips will be made (n = listingResults.Count)\nList&lt;ListingCategoryDo&gt; mostRecentListingCategoriesForListings = GetMostRecentListingCategoriesByListing(listingResults).ToList();</code></pre>\n      </div>\n<p>Fortunately, we can refactor the above query code quite easily, to perform a batch SELECT command, that will return multiple result sets.</p>\n<p>In the below example: the for loop is only generating the batch SQL behind the scenes. The database round-trip happens once, on demand after the entire loop is complete. Improving efficiency drastically.</p>\n<div class="gatsby-highlight">\n      <pre class="language-c#"><code class="language-c#">private IEnumerable&lt;IFutureValue&lt;ListingCategoryDo&gt;&gt; GetMostRecentListingCategoriesByListing(List&lt;Listing&gt; listingResults)\n{\n    for (int i = 0; i &lt; listingResults.Count; i++)\n    {\n        var listing = listingResults[i];\n        IFutureValue&lt;ListingCategoryDo&gt; topListingCategoryForListing =\n                NHibernateSession.CreateQuery(&quot;FROM ListingCategoryDo l WHERE l.ListingId = :listingId ORDER BY l.PublishDate DESC&quot;)\n                    .SetParameter(&quot;listingId&quot;, listingId)\n                    .SetReadOnly(true)\n                    .SetMaxResults(1)\n                    .UniqueResult&lt;ListingCategoryDo&gt;();\n\n        yield return topListingCategoryForListing;\n    }\n}\n\n//this will set up all the SQL select statements\nvar mostRecentListingCategoriesForListingsFuture = GetMostRecentListingCategoriesByListing(listingResults).ToList(); \n\n//this will perform the database query with multiple result sets\nvar mostRecentListingCategoriesForListings = mostRecentListingCategoriesForListingsFuture.Select(fq =&gt; fq.Value).ToList();</code></pre>\n      </div>\n<p>You can read more about future queries <a href="https://ayende.com/blog/3979/nhibernate-futures">here</a></p>\n<p>I think that we can all benefit from using type-safe queries with NHibernate, let me know in the comments if you have any questions on how to implement something using QueryOver and NHibernate.</p>',fields:{slug:"/nhibernate-queryover-examples/",prefix:"2017-10-26"},frontmatter:{title:"NHibernate QueryOver examples using the C# library",subTitle:"QueryOver is a powerful wrapper for the NHibernate ORM Criteria API. It is type-safe with a familiar syntax to Lambda expressions and LINQ. This post covers a nice range of real-world usage examples.",cover:{childImageSharp:{resize:{src:"/static/AdobeStock_125269092-2e77c1febc46c05c294a6266ca2e93aa-ada8c.jpeg"}}}}},author:{id:"/root/project/content/parts/author.md absPath of file >>> MarkdownRemark",html:"<p><strong>Paul S. Ness</strong> Software engineer with seven years of experience in a variety of industries such travel, payments, medical and publishing.</p>"},footnote:{id:"/root/project/content/parts/footnote.md absPath of file >>> MarkdownRemark",html:""},site:{siteMetadata:{facebook:{appId:""}}}},pathContext:{slug:"/nhibernate-queryover-examples/"}}}});
//# sourceMappingURL=path---nhibernate-queryover-examples-eb08ea6114638ace5382.js.map