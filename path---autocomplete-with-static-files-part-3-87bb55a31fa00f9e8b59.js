webpackJsonp([48994784501250],{784:function(n,s){n.exports={data:{post:{id:"/home/paul-ssd/Git Repositories/gatsby-starter-personal-blog/content/posts/2017-11-22--autocomplete-with-static-files-part-3/index.md absPath of file >>> MarkdownRemark",html:'<p>In this post we will be building an autocomplete static file generator in JavaScript. With the following characteristics:</p>\n<ul>\n<li>Input: 1 x CSV</li>\n<li>\n<p>Output: 1 x ZIP archive, containing many files</p>\n<ul>\n<li>One .json file for every search term with results</li>\n</ul>\n</li>\n</ul>\n<h2>Transformation details</h2>\n<p>This application will be transforming the input CSV such that:</p>\n<ul>\n<li>One column in the CSV will be designated as the column to be searched on</li>\n<li>All partial search terms that lead to results, will be saved as separate files. The name of each file will be the partial search term</li>\n<li>Within each of those files will contain the entire list of results for that search term</li>\n</ul>\n<p>An example transformation is shown below:</p>\n<p><strong>CSV</strong></p>\n<div class="gatsby-highlight">\n      <pre class="language-csv"><code class="language-csv">Andrew Smith, Basketball\nAdam Smith, Netball</code></pre>\n      </div>\n<p><strong>JSON</strong></p>\n<div class="gatsby-highlight">\n      <pre class="language-text"><code class="language-text">A.JSON\n[{ name: Andrew Smith, Sport: Basketball }, { name: Adam Smith, Sport: Netball }]\n\nAD.JSON\n[{ name: Adam Smith, Sport: Netball }]</code></pre>\n      </div>\n<h2>Building the solution</h2>\n<h3>The data structure that will hold the information</h3>\n<p>We will be using a Trie to hold the words/result, any node of the tree can have children and therefore is capable of being the head of the Trie aka ‘a Trie itself’. See the code below:</p>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code class="language-javascript"><span class="token keyword">class</span> <span class="token class-name">PrefixTreeNode</span> <span class="token punctuation">{</span>\n    <span class="token function">constructor</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token keyword">this</span><span class="token punctuation">.</span>children <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>\n        <span class="token keyword">this</span><span class="token punctuation">.</span>endWord <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>\n        <span class="token keyword">this</span><span class="token punctuation">.</span>value <span class="token operator">=</span> value<span class="token punctuation">;</span>\n        <span class="token keyword">this</span><span class="token punctuation">.</span>additionalInfo <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre>\n      </div>\n<h3>Adding methods</h3>\n<p>We will want to add two methods to the Trie. We could add them to the existing class however, to keep the code cleaner we will extend the PrefixTreeNode class</p>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code class="language-javascript"><span class="token keyword">class</span> <span class="token class-name">PrefixTree</span> <span class="token keyword">extends</span> <span class="token class-name">PrefixTreeNode</span> <span class="token punctuation">{</span>\n    <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token keyword">super</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n\n    <span class="token function">addWord</span><span class="token punctuation">(</span>word<span class="token punctuation">,</span> additionalInfo<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token comment">//adds a new word to the trie</span>\n    <span class="token punctuation">}</span>\n\n    <span class="token function">getAllFullWords</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token comment">//gets all the words and associated data from the trie</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre>\n      </div>\n<h3>Method that adds words to the trie data structure</h3>\n<p>The first method addWord will insert one word and its associated data into the Trie. The algorithm in Pseudocode is as follows:</p>\n<p>Start with the head of the Trie.</p>\n<div class="gatsby-highlight">\n      <pre class="language-text"><code class="language-text">:addWordToTrie\nDoes the the next level of the trie contain the first letter of the word?\n    If it doesn&#39;t, add the first letter of the word (as a new node) into that level.\n\nIs the remaining word only one letter long?\n    We have reached the endWord, please mark the node as such, save associated data\n    DONE\n\nIs the remaining word more than one letter long?\n    :Add remaining portion of the word to the trie :addWordToTrie\n    REPEAT/RECURSIVE</code></pre>\n      </div>\n<p>And in JavaScript</p>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code class="language-javascript"><span class="token function">addWord</span><span class="token punctuation">(</span>word<span class="token punctuation">,</span> additionalInfo<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">const</span> <span class="token function-variable function">addWordHelper</span> <span class="token operator">=</span> <span class="token punctuation">(</span>node<span class="token punctuation">,</span> str<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>node<span class="token punctuation">.</span>children<span class="token punctuation">[</span>str<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n            node<span class="token punctuation">.</span>children<span class="token punctuation">[</span>str<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">PrefixTreeNode</span><span class="token punctuation">(</span>str<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token punctuation">}</span>\n\n        <span class="token keyword">if</span> <span class="token punctuation">(</span>str<span class="token punctuation">.</span>length <span class="token operator">===</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n            node<span class="token punctuation">.</span>children<span class="token punctuation">[</span>str<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">.</span>endWord <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span> <span class="token comment">//set the end word, even if a longer word exists already</span>\n            node<span class="token punctuation">.</span>children<span class="token punctuation">[</span>str<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">.</span>additionalInfo <span class="token operator">=</span> additionalInfo<span class="token punctuation">;</span>\n        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>str<span class="token punctuation">.</span>length <span class="token operator">></span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n            <span class="token function">addWordHelper</span><span class="token punctuation">(</span>node<span class="token punctuation">.</span>children<span class="token punctuation">[</span>str<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">,</span> str<span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token punctuation">}</span>\n    <span class="token punctuation">}</span><span class="token punctuation">;</span>\n    <span class="token function">addWordHelper</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">,</span> word<span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre>\n      </div>\n<h3>Method that gets all the information out of the Trie</h3>\n<p>We need a method that gets us all node paths (partial words) from the Trie that ultimately lead to full words. Pseudocode is as follows:</p>\n<p>Start with the top of the trie. Once the method is fully done, the hashTable allValidLettersCombinations should be full. Each hashKey would be a filename and the file’s contents would be full words.</p>\n<div class="gatsby-highlight">\n      <pre class="language-text"><code class="language-text">Array savedLettersSoFar\nHashtable allValidLettersCombinations \n\n:currentNode\nIf there is a letter on currentNode\n    Save that letter to the array savedLettersSoFar\n\nIf currentNode is an &#39;endWord&#39;\n    Get all previous letters and their sequential combinations/permutations\n    For every combination, save that whole word into the hash allValidLettersCombinations\n\nIf the currentNode has children nodes\nFor every childnode\nCreate a new copy of Array savedLettersSoFar and REPEAT the above</code></pre>\n      </div>\n<p>And now in JavaScript</p>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code class="language-javascript"><span class="token function">getAllFullWords</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">const</span> <span class="token function-variable function">getAllSeqentialPermutations</span> <span class="token operator">=</span> <span class="token punctuation">(</span>strArray<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n        <span class="token keyword">var</span> permutations <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>\n        <span class="token keyword">var</span> partialStringSoFar <span class="token operator">=</span> <span class="token string">\'\'</span><span class="token punctuation">;</span>\n        strArray<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span>s <span class="token operator">=></span> <span class="token punctuation">{</span>\n            partialStringSoFar <span class="token operator">+=</span> s<span class="token punctuation">;</span>\n            permutations<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>partialStringSoFar<span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token keyword">return</span> permutations<span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n\n    <span class="token keyword">var</span> nodePaths <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>\n    <span class="token keyword">const</span> <span class="token function-variable function">traverse</span> <span class="token operator">=</span> <span class="token punctuation">(</span>n<span class="token punctuation">,</span> nodesOnThisPath<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n        <span class="token keyword">if</span> <span class="token punctuation">(</span>n<span class="token punctuation">.</span>value<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n            nodesOnThisPath<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>n<span class="token punctuation">.</span>value<span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n            <span class="token keyword">if</span> <span class="token punctuation">(</span>n<span class="token punctuation">.</span>endWord<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n                <span class="token keyword">var</span> permutations <span class="token operator">=</span> <span class="token function">getAllSeqentialPermutations</span><span class="token punctuation">(</span>nodesOnThisPath<span class="token punctuation">)</span><span class="token punctuation">;</span>\n                permutations<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span>p <span class="token operator">=></span> <span class="token punctuation">{</span>\n                    <span class="token keyword">if</span> <span class="token punctuation">(</span>nodePaths<span class="token punctuation">[</span>p<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n                        nodePaths<span class="token punctuation">[</span>p<span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n                            results<span class="token punctuation">:</span> nodesOnThisPath<span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span><span class="token string">\'\'</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n                            additionalInfo<span class="token punctuation">:</span> n<span class="token punctuation">.</span>additionalInfo\n                        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n                    <span class="token punctuation">}</span>\n                    <span class="token keyword">else</span> <span class="token punctuation">{</span>\n                        nodePaths<span class="token punctuation">[</span>p<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">{</span>\n                            results<span class="token punctuation">:</span> nodesOnThisPath<span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span><span class="token string">\'\'</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n                            additionalInfo<span class="token punctuation">:</span> n<span class="token punctuation">.</span>additionalInfo\n                        <span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">;</span>\n                    <span class="token punctuation">}</span>\n                <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n            <span class="token punctuation">}</span>\n        <span class="token punctuation">}</span>\n\n        <span class="token keyword">if</span> <span class="token punctuation">(</span>n<span class="token punctuation">.</span>children<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n            <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> k <span class="token keyword">in</span> n<span class="token punctuation">.</span>children<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n                <span class="token function">traverse</span><span class="token punctuation">(</span>n<span class="token punctuation">.</span>children<span class="token punctuation">[</span>k<span class="token punctuation">]</span><span class="token punctuation">,</span> nodesOnThisPath<span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n            <span class="token punctuation">}</span>\n        <span class="token punctuation">}</span>\n    <span class="token punctuation">}</span><span class="token punctuation">;</span>\n\n    <span class="token function">traverse</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token keyword">return</span> nodePaths<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre>\n      </div>\n<h3>Source code for the Trie class</h3>\n<iframe style="width:100%; border:0; border-radius: 4px; overflow:hidden;" src="https://rawgit.com/paulness/AutocompleteStaticFileGeneratorHtml/master/js/prefixTrie.js"></iframe>\n<h3>Source code for saving the Trie data to files</h3>\n<iframe style="width:100%; border:0; border-radius: 4px; overflow:hidden;" src="https://rawgit.com/paulness/AutocompleteStaticFileGeneratorHtml/master/js/index.js"></iframe>\n<h3>All source code</h3>\n<p><a href="https://github.com/paulness/AutocompleteStaticFileGeneratorHtml">Edit on GitHub</a></p>\n<h2>Demonstration</h2>\n<p>Usage:</p>\n<ul>\n<li>Upload any CSV with headers, one of the headers must be named “name” using the tool below</li>\n<li>Download the ZIP file of results</li>\n<li>Upload contents of ZIP file to a folder on your own web server</li>\n</ul>\n<iframe src="https://rawgit.com/paulness/AutocompleteStaticFileGeneratorHtml/master/index.htm" style="width:100%; border:0; border-radius: 4px; overflow:hidden;" sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"></iframe>',fields:{slug:"/autocomplete-with-static-files-part-3/",prefix:"2017-11-22"},frontmatter:{title:"Autocomplete with static files [3/4] - Building an autocomplete static file generator",subTitle:"In this post we will be implementing an autocomplete static file generator, using the principles, learned in the past two articles in this series. Also within this post is a working demo which produces static autocomplete JSON files for a CSV.",cover:{childImageSharp:{resize:{src:"/static/autocomplete-visualization-2804ca7ed3e499ebf88e109a4ce44040-ada8c.jpg"}}}}},author:{id:"/home/paul-ssd/Git Repositories/gatsby-starter-personal-blog/content/parts/author.md absPath of file >>> MarkdownRemark",html:"<p><strong>Paul S. Ness</strong> Software engineer with seven years of experience in a variety of industries such travel, payments, medical and publishing.</p>"},footnote:{id:"/home/paul-ssd/Git Repositories/gatsby-starter-personal-blog/content/parts/footnote.md absPath of file >>> MarkdownRemark",html:""},site:{siteMetadata:{facebook:{appId:""}}}},pathContext:{slug:"/autocomplete-with-static-files-part-3/"}}}});
//# sourceMappingURL=path---autocomplete-with-static-files-part-3-87bb55a31fa00f9e8b59.js.map