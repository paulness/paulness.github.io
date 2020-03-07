webpackJsonp([0x99056c52170e],{797:function(n,a){n.exports={data:{post:{id:"/root/project/content/posts/2018-04-03--zig-zag-leetcode/index.md absPath of file >>> MarkdownRemark",html:'<p>The <a href="https://leetcode.com/problems/zigzag-conversion/">ZigZag conversion problem</a> appears on Leetcode.com. In summary, you are provided a string whereby letters have been written into that string in a zig-zag formation across multiple lines. You must know which letters are part of this formation and output them as you are reading them from left to right.</p>\n<h2>Leetcode Requirement</h2>\n<p>The string “PAYPALISHIRING” is written in a zigzag pattern on a given number of rows like this: (you may want to display this pattern in a fixed font for better legibility)</p>\n<div class="gatsby-highlight">\n      <pre class="language-text"><code class="language-text">  P   A   H   N\n   A P L S I I G\n    Y   I   R</code></pre>\n      </div>\n<p>And then read line by line: “PAHNAPLSIIGYIR”\nWrite the code that will take a string and make this conversion given a number of rows:</p>\n<div class="gatsby-highlight">\n      <pre class="language-text"><code class="language-text">string convert(string text, int nRows);\nconvert(&quot;PAYPALISHIRING&quot;, 3) should return &quot;PAHNAPLSIIGYIR&quot;.</code></pre>\n      </div>\n<h2>Writing letters in ZigZag formation</h2>\n<p>To understand how to read letters written in ZigZag formation, it may also be helpful to know how to write letters in a ZigZag formation yourself. For example, if somebody tells you to write GEEKSFORGEEKS in ZigZag formation across three lines, you would output.</p>\n<div class="gatsby-highlight">\n      <pre class="language-text"><code class="language-text">G   S   G   S\n E K F R E K\n  E   O   E </code></pre>\n      </div>\n<p>and across 10 lines</p>\n<div class="gatsby-highlight">\n      <pre class="language-text"><code class="language-text">G\n E\n  E\n   K\n    S\n     F       S\n      O     K\n       R   E\n        G E\n         E</code></pre>\n      </div>\n<p>See below for some additional examples.</p>\n<div class="gatsby-highlight">\n      <pre class="language-text"><code class="language-text">&quot;ABC&quot; with 2 rows = ACB\nA C\n B\n\n&quot;ABCDE&quot; with 2 rows = ACEBD\nA C E\n B D\n\n&quot;ABCDE&quot; with 3 rows = AEBDC\nA   E\n B D\n  C\n\nReading down to the bottom and then back up the zig-zag we get the values we inserted in order.\nHowever, reading left to right then down we get the expected output: AEBDC</code></pre>\n      </div>\n<h2>Erroneous characters not part of the zig-zag write</h2>\n<p>In the LeetCode exercise, you’ve been asked to read the characters originally written in a ZigZag formation. However, you are also being asked to ignore characters that are not in the right positions and should not be included in the output.</p>\n<p>For example, read the characters left to right but only the characters that originally written in the ZigZag formation.</p>\n<div class="gatsby-highlight">\n      <pre class="language-text"><code class="language-text">&quot;ABCDE&quot; was originally written into 3 rows. The X should be ignored = \nA X E\n B D\n  C</code></pre>\n      </div>\n<p>The correct output here is AEBDC, because the X was never part of the ZigZag pattern.</p>\n<h2>Source Code - Accepted in LeetCode</h2>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code class="language-javascript"><span class="token comment">/**\n * @param {string} s\n * @param {number} numRows\n * @return {string}\n */</span>\n<span class="token keyword">var</span> <span class="token function-variable function">convert</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span>s<span class="token punctuation">,</span> numRows<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> <span class="token function">flattenZigZagString</span><span class="token punctuation">(</span>s<span class="token punctuation">,</span> numRows<span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\n\n\n<span class="token keyword">function</span> <span class="token function">flattenZigZagString</span><span class="token punctuation">(</span>s<span class="token punctuation">,</span> numRows<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">if</span> <span class="token punctuation">(</span>s<span class="token punctuation">.</span>length <span class="token operator">==</span> <span class="token number">0</span> <span class="token operator">||</span> numRows <span class="token operator">==</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token keyword">return</span> s<span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n\n    <span class="token comment">//initialize array</span>\n    <span class="token keyword">var</span> rowArray <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Array</span><span class="token punctuation">(</span>numRows<span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">var</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> numRows<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        rowArray<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n\n    <span class="token comment">//initialize variables</span>\n    <span class="token keyword">var</span> row <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>\n    <span class="token keyword">var</span> itemsToSkipOnThisRow <span class="token operator">=</span> row<span class="token punctuation">;</span>\n    <span class="token keyword">var</span> down<span class="token punctuation">;</span>\n\n    <span class="token comment">//read the string left to right, with each consecutive char considered on the next or previous row, scanning up and down each time</span>\n    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">var</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> s<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token keyword">var</span> currentChar <span class="token operator">=</span> s<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">;</span>\n\n        <span class="token comment">//add the char at this index, ignore blank spots</span>\n        <span class="token keyword">if</span> <span class="token punctuation">(</span>currentChar <span class="token operator">!==</span> <span class="token string">\' \'</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n            rowArray<span class="token punctuation">[</span>row<span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>s<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token punctuation">}</span>\n\n        <span class="token keyword">if</span> <span class="token punctuation">(</span>row <span class="token operator">==</span> numRows<span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n            down <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span>\n        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>row <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n            down <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>\n        <span class="token punctuation">}</span>\n\n        down <span class="token operator">?</span> row<span class="token operator">++</span> <span class="token punctuation">:</span> row<span class="token operator">--</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n\n    <span class="token keyword">return</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">.</span>concat<span class="token punctuation">.</span><span class="token function">apply</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span> rowArray<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span><span class="token string">""</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre>\n      </div>',fields:{slug:"/zig-zag-leetcode/",prefix:"2018-04-03"},frontmatter:{title:"ZigZag conversion algorithm",subTitle:"A dive into the ZigZag letter conversion on Leetcode.com. Letters initially are written in a zig-zag formation and must be read back from left to right.",cover:{childImageSharp:{resize:{src:"/static/zigzag-78e45368dfd1279da52bb166c2c1b48c-160fa.png"}}}}},author:{id:"/root/project/content/parts/author.md absPath of file >>> MarkdownRemark",html:"<p><strong>Paul S. Ness</strong> Software engineer with seven years of experience in a variety of industries such travel, payments, medical and publishing.</p>"},footnote:{id:"/root/project/content/parts/footnote.md absPath of file >>> MarkdownRemark",html:""},site:{siteMetadata:{facebook:{appId:""}}}},pathContext:{slug:"/zig-zag-leetcode/"}}}});
//# sourceMappingURL=path---zig-zag-leetcode-73360f018bebe337f726.js.map