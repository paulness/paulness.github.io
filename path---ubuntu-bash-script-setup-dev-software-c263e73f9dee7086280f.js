webpackJsonp([0x6e1758cf1364],{792:function(n,t){n.exports={data:{post:{id:"/home/paul-ssd/Git Repositories/gatsby-starter-personal-blog/content/posts/2017-10-24--ubuntu-bash-script-setup-dev-software/index.md absPath of file >>> MarkdownRemark",html:'<blockquote>\n<p>Get your development environment up and running quickly!</p>\n</blockquote>\n<p>In the post we will go through an automated bash script, which will turn your fresh Ubuntu install into a fully fledged development machine within no time. This script I have tested on Ubuntu 16.04.3 as of Nov-13-2017. You’ll get a chance to un-check the software that you are not interested in. I’ve included a range of software for you to choose from.</p>\n<p>It is as simple as:</p>\n<ol>\n<li>Download <a href="http://mirrors.bloomu.edu/ubuntu-releases/16.04.3/ubuntu-16.04.3-desktop-amd64.iso">Ubuntu 16.04.3</a> and install it, if you do not already have Ubuntu installed</li>\n<li>Copy the file <a href="https://gist.github.com/paulness/73238d84996cb8fc21aff644218a49a2">post_install.sh</a> to your Ubuntu desktop open a terminal in your desktop and run the below command.</li>\n<li>Open the terminal</li>\n</ol>\n<p>\n  <a\n    class="gatsby-resp-image-link"\n    href="/static/ubuntu-running-post-install-script-right-click-to-open-terminal-6fd8100a660a104147275d7d810efc34-6a965.png"\n    style="display: block"\n    target="_blank"\n    rel="noopener"\n  >\n  \n  <span\n    class="gatsby-resp-image-wrapper"\n    style="position: relative; display: block; ; max-width: 800px; margin-left: auto; margin-right: auto;"\n  >\n    <span\n      class="gatsby-resp-image-background-image"\n      style="padding-bottom: 66.75105485232068%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAANCAIAAAAmMtkJAAAACXBIWXMAABJ0AAASdAHeZh94AAADC0lEQVQoz2OoCS5wt7dxdXN0dLC2szF1dLSyszW3szGzB5GmdrYWdrZmQIaDvaW9nbm9lUm3l8tMH6fJHpbTva0Y5mZ3dFVXTe/vmNXfMWPapJ6a8hmT+2fPmjZj6oS5c2fPmNg1c0r/nNkzJnc2zZ07c860yZucbPZZ6Bxz0T/lpsPQnJDyePf6H6d3/Dqz8/+vrxcXzaopLmhqrCnMTmluaX59++LfLx/+/////u6Fv39+//nxY0+w7xYz7b3Ohoc99BiqYoovX7j05OnjN2/eABWd3L/NxtrU3s7SxFjP08Plxrnj3z5//Pv3z+PL5379/Pnj8+edAV5bzXR2OxgcctNjqKhuuH75yts3r9+/ewvUfGr3eicHKzdXBwc7y8AAn8cPH/7/BwLfv3wGyv78/GWHv89mM70dtkZ7nfQZukpKrl649O7dW4jmCycP+3i5eHm62NqYB/h7vXz5EigI1AzEQMaPz1+2+vutN9HfamOyw9aQYVZM3LWLl96+ff3x/Tug9M3bt7y9XD3cnaytTP2xaP682TdgjbHRRmuzzTamDLPyii+dOf/w4YMnjx/9//f/xvXr3p4uQQHenh5OwYG+L1+8AOr5++fvvz9/gYzvHz+t9wlcYWi6xsJyk60lQ09O4+P7Dz98ePf6NciS69evOTvZ+ni7AmPb09PlBVgzwuYvX9Z4hy7WN19hbrvBzoFhQn7rozsPPrx99+r5i5/ffjy896Cns727va2+pgrIePPy1fcvXz+9//D5w8evn7+8e/ZiuUf4PB2bZRZOa+xcGCJU/aqti2psSyutCutsStocKyd7N03zbZjlXzfHv2qqW94kx5TJjonTneJnucTOdYmeZew5W995kYX7MmsPBgcm4zTpmFTJ6BSJ6FTJqHTJiCyJsHzJsBKp0HKZoFqF4GblwDZV/y41n151rwmaHpN1PWYYeMy38Flg4c2QaBSeLh+XIR8PQVkKcTmKMflK0SXK0ZUq0XVq0Y3qEa0aYR1aIV3aQb06Af3aPlMN/WaZBcw28wcAm0CyUkJpe7YAAAAASUVORK5CYII=\'); background-size: cover; display: block;"\n    >\n      <img\n        class="gatsby-resp-image-image"\n        style="width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px transparent;"\n        alt="Right click and open a terminal in the Desktop folder"\n        title=""\n        src="/static/ubuntu-running-post-install-script-right-click-to-open-terminal-6fd8100a660a104147275d7d810efc34-48538.png"\n        srcset="/static/ubuntu-running-post-install-script-right-click-to-open-terminal-6fd8100a660a104147275d7d810efc34-bed0f.png 200w,\n/static/ubuntu-running-post-install-script-right-click-to-open-terminal-6fd8100a660a104147275d7d810efc34-5fd34.png 400w,\n/static/ubuntu-running-post-install-script-right-click-to-open-terminal-6fd8100a660a104147275d7d810efc34-48538.png 800w,\n/static/ubuntu-running-post-install-script-right-click-to-open-terminal-6fd8100a660a104147275d7d810efc34-6a965.png 1185w"\n        sizes="(max-width: 800px) 100vw, 800px"\n      />\n    </span>\n  </span>\n  \n  </a>\n    </p>\n<p>And run the commands</p>\n<div class="gatsby-highlight">\n      <pre class="language-bash"><code class="language-bash"><span class="token comment"># ensure the line endings are unix (after downloading from GIT)</span>\n<span class="token function">sudo</span> <span class="token function">sed</span> -i -e <span class="token string">\'s/\\r$//\'</span> post_install.sh\n\n<span class="token comment"># execute the script</span>\n<span class="token function">sudo</span> <span class="token function">chmod</span> +x post_install.sh<span class="token punctuation">;</span> <span class="token function">sudo</span> ./post_install.sh\n</code></pre>\n      </div>\n<p>This is what you’ll see in the terminal right before you execute the script</p>\n<p>\n  <a\n    class="gatsby-resp-image-link"\n    href="/static/ubuntu-running-post-install-script-fd2314c96bce6f48c87197ec393a6e0f-b70ec.png"\n    style="display: block"\n    target="_blank"\n    rel="noopener"\n  >\n  \n  <span\n    class="gatsby-resp-image-wrapper"\n    style="position: relative; display: block; ; max-width: 800px; margin-left: auto; margin-right: auto;"\n  >\n    <span\n      class="gatsby-resp-image-background-image"\n      style="padding-bottom: 63.83333333333333%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAANCAIAAAAmMtkJAAAACXBIWXMAABJ0AAASdAHeZh94AAACvUlEQVQoz3WN209SAQDGz1MBraT0ISTlchAOcDhw4NwvcJIzQVDBMhGTREFFEFFKo3nJ2yjDdM50S6fpzJk5SzNz2UttPfVXhb30kG2/ffv2bb99wFTvZBwLj3QM93ti3WQoybakuVCaaeyj6gYYX5b1DvOeHC8+YYVRjh/nmFlRWA56F3z8op8DZjOFHJQq+PPTjqGRW7EpMJbXtc9Bba/g1lXk3ibauGOve2cVP6CuYwd3TFKnlOOMQn7eRn55YCDbnRmwxLsMoRgdSjojKWc47QqlnXcTpC9Fe9NMTYZ2D9JChuTGSGaPJI9Y/ISzn7msPzwIkO0c6ofiDTo3B6HVZtKpxwUjx6jtmALGlBZMiRAVKFFhM5UaRaVplyCOaOKEtX/lrd9FBOgbm+lDemrLOVuZ2l4KovIqVA5jciNWYsSuQcXEz7vBLjf6bpp3CPIjRR6z2BcW/eayAi8mJgaQTuEqbbykQiQ6i0RrkWjgYkr/gsi00GWNeEO/TdAHJH1IE59ZxymHAm/SmYdQm3CdMUtV1is6RAb+i1UGmiRasdSwhbHvCfaAoor+JwYDNnKjWTjqKqHOZdnFsk0Gmv/I6w5+B+f3CGafpA4ZClgame+3xF0lBCxV22Q660UUd7MEdJdCq6hryyG8xfhdnD3geOB5drIfiQty0ixV/+dZa7uiNUs1Yhm0YnNvoO5Nu7CNufY5N1DIvxzEE9HylmZFQ1gRjCiCUUUgpqzvqvAnKr0pVU1GLWY11Y9AYVwvLFu8r601azZxExd3WS+wsbAxaO9JKKNJVUdSFU2roll19LEmOgK2T+juT+vDzwyhgrFp3nxnEQ4swv4lS+0K4lnHfVu0H8j3zfToIt3KSHdFkQeJyrZeVWtaHc5qwjlt6yjY8rSqeVrflDc0zhqDc6aGBVP9kqVuFQ+sEYHf1QTYX4VjhicAAAAASUVORK5CYII=\'); background-size: cover; display: block;"\n    >\n      <img\n        class="gatsby-resp-image-image"\n        style="width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px transparent;"\n        alt="Terminal just before executing the script"\n        title=""\n        src="/static/ubuntu-running-post-install-script-fd2314c96bce6f48c87197ec393a6e0f-48538.png"\n        srcset="/static/ubuntu-running-post-install-script-fd2314c96bce6f48c87197ec393a6e0f-bed0f.png 200w,\n/static/ubuntu-running-post-install-script-fd2314c96bce6f48c87197ec393a6e0f-5fd34.png 400w,\n/static/ubuntu-running-post-install-script-fd2314c96bce6f48c87197ec393a6e0f-48538.png 800w,\n/static/ubuntu-running-post-install-script-fd2314c96bce6f48c87197ec393a6e0f-b70ec.png 1200w"\n        sizes="(max-width: 800px) 100vw, 800px"\n      />\n    </span>\n  </span>\n  \n  </a>\n    </p>\n<p>And once you press enter, you’ll see text streaming down</p>\n<p>\n  <a\n    class="gatsby-resp-image-link"\n    href="/static/ubuntu-running-post-install-script-underway-20359217582b2eba26519537ceca2d61-ac231.png"\n    style="display: block"\n    target="_blank"\n    rel="noopener"\n  >\n  \n  <span\n    class="gatsby-resp-image-wrapper"\n    style="position: relative; display: block; ; max-width: 800px; margin-left: auto; margin-right: auto;"\n  >\n    <span\n      class="gatsby-resp-image-background-image"\n      style="padding-bottom: 66.18887015177066%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAANCAIAAAAmMtkJAAAACXBIWXMAABJ0AAASdAHeZh94AAADAklEQVQozxWP208TeRiG52KTVeLhzgNonc5v2k7pMKdO59xpO21n2k7LQBlri9BCoYWWWjksCC5dRQMBN56BbNxs1rAb1sSNGokndG/WxAv/Ksfky5vn5sn7ftCNwuIEW1xJZCeDFycYu87mG6GBFtc/y2fnxcySlFpR9OtSbFVSbyrKmixsm8mdrPYoLe2aEvRg5PaasPRva3NTWurAtXXv5JZv7H7vyDZefELZe8HBfcZ8RsZfMJEDVjrk+EOe/iSTXxLEVx2HrhWqbawxh80sYJNXAsU2XZhn7EU2v8JZq5zZYfUOE73FqhucfFeSH4bFPSX0XqE/aeTnFAEt2+1ZpLHgnmqDciGUshR9KGJmhYSTlmwYTCTNRnVGjRNyBONoF1nz4h8V6lAl/9cJ6OrsctGbL2KD44h9kchkArEsHk+iskXrKSzicNqvGt6wcpahjqK+H5Byt+9DOPhWpv7TSGi9dbWCliqeYg0UC5SZJbUcmcgEov100sSjDieAKJ2lmZM+qgv4j4LKOf8bOXQgBd+pNLRrD8+C+gJotkBliEiZRCxHxJMe2dFyhGZgqubmxVOEeJpgjnn8P4LRnt7XEv9SZA+UELRba8+AahupN5GKTWdytGbRScMXHmAMy5mAxwyvIp+hxDMkc/y7fLk78EKQnvPCa1WCtuqdGbTack80wZiNm7lA0iJ0R3Z+zvijJq6FuxmnOXjCR3eBwBEw0o0/49R/OOWVGoF+qf7URKtNd3UarqQpURNIneY1IKbwSAwVFRfLnyb6jqGBLqSvC2BHkPJ54q9g7G8u9lxNQJs/bzjNzQvjU+fLBW/S7lMueeJl2Kwg6Qlg1IDe8CZrcLjmkqZgYRrmbmLyH3Rijzf2ZQN6vHy34R6fOld25EbPWKtnbM5VWYRHr7tHOkhpDS2se4bu+PP3egce4rntPnOHSP9Gpf4Usk8FE5pLTdddo47p3He4cLkJD1+BS/Pu0jVkeBUt3fAUbnvtDSy/hVm/9vbfC2R36P4n3MDvnPUNq6jnRTFdWlcAAAAASUVORK5CYII=\'); background-size: cover; display: block;"\n    >\n      <img\n        class="gatsby-resp-image-image"\n        style="width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px transparent;"\n        alt="Script in progress"\n        title=""\n        src="/static/ubuntu-running-post-install-script-underway-20359217582b2eba26519537ceca2d61-48538.png"\n        srcset="/static/ubuntu-running-post-install-script-underway-20359217582b2eba26519537ceca2d61-bed0f.png 200w,\n/static/ubuntu-running-post-install-script-underway-20359217582b2eba26519537ceca2d61-5fd34.png 400w,\n/static/ubuntu-running-post-install-script-underway-20359217582b2eba26519537ceca2d61-48538.png 800w,\n/static/ubuntu-running-post-install-script-underway-20359217582b2eba26519537ceca2d61-ac231.png 1186w"\n        sizes="(max-width: 800px) 100vw, 800px"\n      />\n    </span>\n  </span>\n  \n  </a>\n    </p>\n<p>You’ll see this prompt window, you may un-check software you do not wish to install. The themes I have unchecked by default since I prefer the default theme in Ubuntu.</p>\n<p>\n  <a\n    class="gatsby-resp-image-link"\n    href="/static/ubuntu-running-post-install-script-prompt-2525aaaa80d10f3932f13891d071d028-267a4.png"\n    style="display: block"\n    target="_blank"\n    rel="noopener"\n  >\n  \n  <span\n    class="gatsby-resp-image-wrapper"\n    style="position: relative; display: block; ; max-width: 800px; margin-left: auto; margin-right: auto;"\n  >\n    <span\n      class="gatsby-resp-image-background-image"\n      style="padding-bottom: 66.38655462184873%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAANCAIAAAAmMtkJAAAACXBIWXMAABJ0AAASdAHeZh94AAADJElEQVQozwEZA+b8AIBbeGY4X4BKUms6Wmk1Wmw4WG86V243UHA2THM4Snc5SHo7Rnw6Qn05PoE6PIM7OZJJQ5ZLQZRJO5lLOwCNYYR8NHOpaIaLQnl7IGWDJWSHJl+NKlyULFiaL1WhM1GmMkyoMESuMkC0NTu6Nze7NzG8Oy/FRC7KRiwAdlpkbSlmcSVrcydlbSpXai5TbzBTczJQdzNNezVKezNEei4+fjA7gTI4hjQ2izg2njw1tzswu0Evw0guAHVXcG0mZXEjZmcbWoFtfqSroKKjnZugnJyhnZacmpKYlJ6imp+jm56imqaooJKenWQ/SbY3LLo/MMJGLgBxd3xuKmdyJGdjGFiUiZ3Y4NTP08u+xMK5wL+ks7q4wsTT2M/T18/R1c3c3tW/zMlgPEmzNi24PTK9QS8Ah3BzbyhkcSRoYxhZkIOX0dnNyczFw8O6vby0vsK5zc/Hys3Gys7GyMzE09XMuMO/YDtIsDUvtDw0tz0xAJhaXW8mYHEkaWIYWZCDmNLazsrOxsHCvLu8trW7tL7Cu8PHwMrOxsrOxtTWzbnEwF87Sa0zMrA6N7M7NACWbHVsJ2BwJGdjGFqPgpjQ2M3IzMW9wLq6u7WwtK66v7jJzcbJzcbHy8XS1My3w79dOkqoMjWsODqyPDoAi2uBaydibSNkYRdblYib3eHT1NTL0NHGu8K5x8vE09TK0dPJ1NbL09bL29zTwsrEXTlKoy84qDc9rz0/AIBoeGspY2wiYmQZXGxniYianYWQloSSl3GEj3yMlYaTmICNk4OQloORl4qWnHiNllg4TaAuO6U3Qqs9RACLf4ltLGRqH2FoHl5VIFtLH1ZQH1ZSIFRYJFRYJFFZJE9dJk5eJkxhJ0pjKEhkKkh/LkWcMEOiN0emO0gAlX2QayhjZxteZx1eah1dbx9cdCBceSFcfSFbgSNZhSVWiCZTjChRkCpOlCxMlixJlSxIlzBInzhMoDhLAHFMamUgXGccXmcdXmYeXmgfXWogW20hWnEiWnYjWnskWn8lWIImVYQoU4gpUYoqT40qTZQwTpk2UJo2T/RSZ7QufGa2AAAAAElFTkSuQmCC\'); background-size: cover; display: block;"\n    >\n      <img\n        class="gatsby-resp-image-image"\n        style="width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px transparent;"\n        alt="Choosing software to install"\n        title=""\n        src="/static/ubuntu-running-post-install-script-prompt-2525aaaa80d10f3932f13891d071d028-48538.png"\n        srcset="/static/ubuntu-running-post-install-script-prompt-2525aaaa80d10f3932f13891d071d028-bed0f.png 200w,\n/static/ubuntu-running-post-install-script-prompt-2525aaaa80d10f3932f13891d071d028-5fd34.png 400w,\n/static/ubuntu-running-post-install-script-prompt-2525aaaa80d10f3932f13891d071d028-48538.png 800w,\n/static/ubuntu-running-post-install-script-prompt-2525aaaa80d10f3932f13891d071d028-267a4.png 1190w"\n        sizes="(max-width: 800px) 100vw, 800px"\n      />\n    </span>\n  </span>\n  \n  </a>\n    </p>\n<p>After pressing OK to install the software, you’ll see more prompts, type appropriate passwords, accept license agreements, accept certificates and choose the obvious options along the way to ensure all software is installed.\n\n  <a\n    class="gatsby-resp-image-link"\n    href="/static/ubuntu-running-post-install-script-prompt-2-ad023302d1e2771afdef69beeae1538e-ac231.png"\n    style="display: block"\n    target="_blank"\n    rel="noopener"\n  >\n  \n  <span\n    class="gatsby-resp-image-wrapper"\n    style="position: relative; display: block; ; max-width: 800px; margin-left: auto; margin-right: auto;"\n  >\n    <span\n      class="gatsby-resp-image-background-image"\n      style="padding-bottom: 66.02023608768971%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAANCAIAAAAmMtkJAAAACXBIWXMAABJ0AAASdAHeZh94AAAC9klEQVQoz13L508aARjH8fs32rQiZTgRUOGOcVAUXKCI1OIp4Dg5NucBIkPrVlQUqzZVa1q7tEltWnBy4iSoJDZp4qv+N702adI0+bx4nl/yBSYNYaewO9rUhkNmJ7+jr7LdJzD4KnT+isaQQD0I1o2KasZAxYQQjkKSWRG4qpRv1Eo3asHNeiEQMw0PCf1b1mgUDoRp6BgLnWab54uMK6Vtazz923LdB37DNrfqS7k8KRCnQJCEyo8lvKySm6vlAP06k5tt9eRjBLMH5yEuyECIDD6RPiBqHhBrBsCakEAxCMpHIHhSLJmGxetSwZGEl1ZwM3VlgK+V8LAwgoG5GWbscZe9xePQeayNTovagTbYzSrLb8peSpcK66x3BySqAxGHlPEuVGWAFw/gbGsfw2qnGQf0wXh4ec6/EPMvxIm5BXwmTsQWvbHFgefx4NJSeGU+uPpM2pgEOYdw+YmCC0zZPTjLQrBs2H1kMRjL3WUvrk8uc6dXt+eZm9NM7vT69iL3I3v1/fLu5206exaRqb8KePvSykOYD7xoeeph9vQxbZb77Qv+2dTx0W4isZdM7iYT+7u7FDKVIo+ODvf3s5cXib2DkEy9U1mREIN7UgGwiOIuZjfOtFrutS+F41c3mROSPDtJn52m02QqTZLn1P3HVeYyeXAYkjVu8wU7kDgJi4EZNOJioy46aqd1elu840NTI8Hx0dDEP6h3nBqnhqYH+yf6Ic17vugTCH+TyYFIl9fJRp30HhutEwUtvQoXKrOjcorjPxa5E1MRfmHTa670I1j1GVYCseFZKnbQuq0PzD10BGUhGKvNxjY4C1vdhfq+Yp2vRBsobQpy1JGyhgi3bopT/YqnfAfVbknqgLg36mB0UaX1IcXkyDPiNKOfZgzRjUOPkFGmYYL1JFqgmyvSxos1yyUNK5z6l7z6N5BmE9IArupejGb6G5tteSZHfoebjhB0JMBABpnIMMswxm6dLNBHi3Rzxdr5Ys0KX7smbF4Xan8BByVC2dT7SH4AAAAASUVORK5CYII=\'); background-size: cover; display: block;"\n    >\n      <img\n        class="gatsby-resp-image-image"\n        style="width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px transparent;"\n        alt="Typing MySQL server password"\n        title=""\n        src="/static/ubuntu-running-post-install-script-prompt-2-ad023302d1e2771afdef69beeae1538e-48538.png"\n        srcset="/static/ubuntu-running-post-install-script-prompt-2-ad023302d1e2771afdef69beeae1538e-bed0f.png 200w,\n/static/ubuntu-running-post-install-script-prompt-2-ad023302d1e2771afdef69beeae1538e-5fd34.png 400w,\n/static/ubuntu-running-post-install-script-prompt-2-ad023302d1e2771afdef69beeae1538e-48538.png 800w,\n/static/ubuntu-running-post-install-script-prompt-2-ad023302d1e2771afdef69beeae1538e-ac231.png 1186w"\n        sizes="(max-width: 800px) 100vw, 800px"\n      />\n    </span>\n  </span>\n  \n  </a>\n    </p>\n<p>When you are done you’ll have a range of software on your computer to help you with development.</p>\n<p>Credits:\n<a href="https://github.com/KingsleyOmon-Edo/">Original bash script credit to KingsleyOmon-Edo</a></p>',fields:{slug:"/ubuntu-bash-script-setup-dev-software/",prefix:"2017-10-24"},frontmatter:{title:"Ubuntu 16.04.3 (x64) bash script for developers after fresh install",subTitle:"I've put together a bash script with some awesome tools and software that I use daily. This script will install a huge range of development and productivity software from VirtualBox, Visual Studio Extensions to DupeGuru on Ubuntu.",cover:{childImageSharp:{resize:{src:"/static/ubuntu-logo-76dfc91ab7fc328d37bbde66293c5b8b-ada8c.jpg"}}}}},author:{id:"/home/paul-ssd/Git Repositories/gatsby-starter-personal-blog/content/parts/author.md absPath of file >>> MarkdownRemark",html:"<p><strong>Paul S. Ness</strong> Software engineer with seven years of experience in a variety of industries such travel, payments, medical and publishing.</p>"},footnote:{id:"/home/paul-ssd/Git Repositories/gatsby-starter-personal-blog/content/parts/footnote.md absPath of file >>> MarkdownRemark",html:""},site:{siteMetadata:{facebook:{appId:"445996885830237"}}}},pathContext:{slug:"/ubuntu-bash-script-setup-dev-software/"}}}});
//# sourceMappingURL=path---ubuntu-bash-script-setup-dev-software-c263e73f9dee7086280f.js.map