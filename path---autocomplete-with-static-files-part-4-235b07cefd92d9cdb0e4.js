webpackJsonp([0xbd9e31595bcb],{779:function(n,s){n.exports={data:{post:{id:"/home/paul-ssd/Git Repositories/gatsby-starter-personal-blog/content/posts/2017-11-23--autocomplete-with-static-files-part-4/index.md absPath of file >>> MarkdownRemark",html:'<p>This post finalizes the autocomplete series, you will be creating a textbox with autocomplete. The autocomplete will retrieve its data from pre-generated static files in a folder on a web server, as opposed to a server API with searching capabilities.</p>\n<h3>Dynamic content vs static content</h3>\n<p>On a traditional web server when a user searches for JO, something similar to the following will occur:</p>\n<ol>\n<li>Request would be made to the server</li>\n<li>Query string value would be extracted, by server side website/API code</li>\n<li>Database queries would be made to find records starting with JO</li>\n<li>Any results would be returned back to the user</li>\n</ol>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code class="language-javascript"><span class="token keyword">var</span> userSearchedFor <span class="token operator">=</span> <span class="token string">"JO"</span><span class="token punctuation">;</span>\n<span class="token keyword">var</span> normalUrl <span class="token operator">=</span>\n<span class="token string">"http://www.javaserver.com/searchCustomer?name="</span> <span class="token operator">+</span> <span class="token function">encodeURIComponent</span><span class="token punctuation">(</span>userSearchedFor<span class="token punctuation">.</span><span class="token function">toUpperCase</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre>\n      </div>\n<p>With static file autocomplete, the flow is as follows:</p>\n<ol>\n<li>Request made to server</li>\n<li>We are looking for a file called JO or JO.json</li>\n<li>If the file exists we return the file contents, which have already been prepared for us</li>\n<li>If it doesn’t exist (404), we must assume there are no results for JO.</li>\n</ol>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code class="language-javascript"><span class="token keyword">var</span> userSearchedFor <span class="token operator">=</span> <span class="token string">"JO"</span><span class="token punctuation">;</span>\n<span class="token keyword">var</span> searchUrl <span class="token operator">=</span>\n<span class="token string">"http://your-server.com/static-autocomplete-files/customers/"</span> <span class="token operator">+</span> <span class="token function">encodeURIComponent</span><span class="token punctuation">(</span>userSearchedFor<span class="token punctuation">.</span><span class="token function">toUpperCase</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token string">\'.json\'</span><span class="token punctuation">;</span>\n</code></pre>\n      </div>\n<h3>Demo in action</h3>\n<iframe src="https://rawgit.com/paulness/AutocompleteUsageWithStaticFiles/master/index.htm" style="width:100%; border:0; border-radius: 4px; overflow:hidden;" sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"></iframe>\n<h3>Snippet source code</h3>\n<p><a href="https://github.com/paulness/AutocompleteUsageWithStaticFiles">Edit on GitHub</a></p>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code class="language-javascript">    <span class="token operator">&lt;</span>link rel<span class="token operator">=</span><span class="token string">"stylesheet"</span> href<span class="token operator">=</span><span class="token string">"autocomplete/auto-complete.css"</span> <span class="token operator">/</span><span class="token operator">></span>\n    <span class="token operator">&lt;</span>div<span class="token operator">></span>\n        <span class="token operator">&lt;</span>label <span class="token keyword">for</span><span class="token operator">=</span><span class="token string">"txt-autocomplete"</span><span class="token operator">></span>Start typing<span class="token punctuation">:</span> <span class="token operator">&lt;</span><span class="token operator">/</span>label<span class="token operator">></span>\n        <span class="token operator">&lt;</span>input id<span class="token operator">=</span><span class="token string">"txt-autocomplete"</span> <span class="token operator">/</span><span class="token operator">></span>\n    <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>\n    <span class="token operator">&lt;</span>script src<span class="token operator">=</span><span class="token string">"autocomplete/auto-complete.min.js"</span><span class="token operator">></span><span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">></span>\n    <span class="token operator">&lt;</span>script<span class="token operator">></span>\n        <span class="token keyword">var</span> xhr<span class="token punctuation">;</span>\n        <span class="token keyword">new</span> <span class="token class-name">autoComplete</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n            selector<span class="token punctuation">:</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">\'txt-autocomplete\'</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n            minChars<span class="token punctuation">:</span> <span class="token number">1</span><span class="token punctuation">,</span>\n            delay<span class="token punctuation">:</span> <span class="token number">0</span><span class="token punctuation">,</span>\n            source<span class="token punctuation">:</span> <span class="token keyword">function</span> <span class="token punctuation">(</span>term<span class="token punctuation">,</span> response<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n                <span class="token keyword">try</span> <span class="token punctuation">{</span> xhr<span class="token punctuation">.</span><span class="token function">abort</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">e</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token punctuation">}</span>\n                xhr <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">XMLHttpRequest</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n                xhr<span class="token punctuation">.</span><span class="token function">open</span><span class="token punctuation">(</span><span class="token string">"GET"</span><span class="token punctuation">,</span> <span class="token string">"autocomplete/results/"</span> <span class="token operator">+</span> term<span class="token punctuation">.</span><span class="token function">toUpperCase</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token string">".json"</span><span class="token punctuation">,</span> <span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n                xhr<span class="token punctuation">.</span><span class="token function-variable function">onload</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n                    <span class="token keyword">if</span> <span class="token punctuation">(</span>xhr<span class="token punctuation">.</span>status <span class="token operator">==</span> <span class="token number">200</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n                        <span class="token function">response</span><span class="token punctuation">(</span>JSON<span class="token punctuation">.</span><span class="token function">parse</span><span class="token punctuation">(</span>xhr<span class="token punctuation">.</span>responseText<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n                    <span class="token punctuation">}</span>\n                <span class="token punctuation">}</span>\n                xhr<span class="token punctuation">.</span><span class="token function">send</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n            <span class="token punctuation">}</span><span class="token punctuation">,</span>\n            renderItem<span class="token punctuation">:</span> <span class="token keyword">function</span> <span class="token punctuation">(</span>item<span class="token punctuation">,</span> search<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n                <span class="token keyword">return</span> <span class="token string">\'&lt;div class="autocomplete-suggestion" data-countryregion="\'</span> <span class="token operator">+</span> item<span class="token punctuation">.</span>additionalInfo<span class="token punctuation">.</span>region <span class="token operator">+</span> <span class="token string">\'">\'</span> <span class="token operator">+</span> item<span class="token punctuation">.</span>results <span class="token operator">+</span> <span class="token string">\'&lt;/div>\'</span><span class="token punctuation">;</span>\n            <span class="token punctuation">}</span><span class="token punctuation">,</span>\n            onSelect<span class="token punctuation">:</span> <span class="token keyword">function</span> <span class="token punctuation">(</span>e<span class="token punctuation">,</span> term<span class="token punctuation">,</span> item<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n                <span class="token function">alert</span><span class="token punctuation">(</span><span class="token string">\'You have selected \'</span> <span class="token operator">+</span> item<span class="token punctuation">.</span>innerHTML <span class="token operator">+</span> <span class="token string">\'. Which is in the region: \'</span> <span class="token operator">+</span> item<span class="token punctuation">.</span><span class="token function">getAttribute</span><span class="token punctuation">(</span><span class="token string">\'data-countryregion\'</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n            <span class="token punctuation">}</span>\n        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">></span>\n</code></pre>\n      </div>\n<p>Dependencies:</p>\n<ul>\n<li><a href="https://goodies.pixabay.com/javascript/auto-complete/demo.html">AutoCompleteJs</a></li>\n</ul>',fields:{slug:"/autocomplete-with-static-files-part-4/",prefix:"2017-11-23"},frontmatter:{title:"Autocomplete with static files [4/4] - Implementing autocomplete with generated static files",subTitle:"At this stage we should have already have generated our 'data source' of autocomplete JSON files. We can now finally implement a working text box with autocomplete functionality, that consumes these files.",cover:{childImageSharp:{resize:{src:"/static/demo-in-action-4c5d082bc75c4eb6a75de681c6c2ed0c-ada8c.jpg"}}}}},author:{id:"/home/paul-ssd/Git Repositories/gatsby-starter-personal-blog/content/parts/author.md absPath of file >>> MarkdownRemark",html:"<p><strong>Paul S. Ness</strong> Software engineer with seven years of experience in a variety of industries such travel, payments, medical and publishing.</p>"},footnote:{id:"/home/paul-ssd/Git Repositories/gatsby-starter-personal-blog/content/parts/footnote.md absPath of file >>> MarkdownRemark",html:""},site:{siteMetadata:{facebook:{appId:"445996885830237"}}}},pathContext:{slug:"/autocomplete-with-static-files-part-4/"}}}});
//# sourceMappingURL=path---autocomplete-with-static-files-part-4-235b07cefd92d9cdb0e4.js.map