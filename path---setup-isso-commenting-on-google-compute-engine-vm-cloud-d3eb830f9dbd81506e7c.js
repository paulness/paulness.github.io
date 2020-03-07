webpackJsonp([0xd6d6809fb0ca],{794:function(n,a){n.exports={data:{post:{id:"/root/project/content/posts/2018-04-10--setup-isso-commenting-on-google-compute-engine-vm-cloud/index.md absPath of file >>> MarkdownRemark",html:'<p><a href="https://posativ.org/isso/">Isso commenting</a> is an open source application that is a superior “in-place replacement” for Disqus and Facebook comments. Internally it is built with Python and SQLite. We will be running it inside a Docker container on the Google Compute Container Optimized OS. After completing the instructions in this guide, you’ll just include a snippet on your site to get Isso comments working on your site.</p>\n<blockquote>\n<p>Let crack on to get tracking-free / ad-free commenting functionality on your site!</p>\n</blockquote>\n<h2>Set up the VM instance</h2>\n<p>Go to the <a href="https://console.cloud.google.com/compute/instances">Google Console for Instances</a> and click create instance. The configuration should match the following screenshot, and the price should be free!</p>\n<p>\n  <a\n    class="gatsby-resp-image-link"\n    href="/static/setup-cloud-vm-f1-micro-free-448ac9f13f70d887c21dfbdb8ed4c03b-4d083.jpg"\n    style="display: block"\n    target="_blank"\n    rel="noopener"\n  >\n  \n  <span\n    class="gatsby-resp-image-wrapper"\n    style="position: relative; display: block; ; max-width: 483px; margin-left: auto; margin-right: auto;"\n  >\n    <span\n      class="gatsby-resp-image-background-image"\n      style="padding-bottom: 204.55486542443063%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAApABQDASIAAhEBAxEB/8QAGQAAAwEBAQAAAAAAAAAAAAAAAAECAwQF/8QAFgEBAQEAAAAAAAAAAAAAAAAAAAEC/9oADAMBAAIQAxAAAAH1XtWpyHQQ2qlgAp40MyD/xAAbEAACAgMBAAAAAAAAAAAAAAAAAgMQARMxQf/aAAgBAQABBQLShojMwx21t3NNbHox/8QAFxEAAwEAAAAAAAAAAAAAAAAAAAERIP/aAAgBAwEBPwGIiz//xAAXEQADAQAAAAAAAAAAAAAAAAAAARIg/9oACAECAQE/AaZTz//EABcQAAMBAAAAAAAAAAAAAAAAAAAxMkD/2gAIAQEABj8CQicH/8QAHxAAAQMEAwEAAAAAAAAAAAAAAAERMRAhQVFxodHw/9oACAEBAAE/IUjOzuPvRockLbYnNDCziEh/mpIwpI//2gAMAwEAAgADAAAAEOAvAMAP/8QAFhEBAQEAAAAAAAAAAAAAAAAAYQAg/9oACAEDAQE/EAgz/8QAFxEAAwEAAAAAAAAAAAAAAAAAAAFhIP/aAAgBAgEBPxCrKvP/xAAiEAEAAgIBAwUBAAAAAAAAAAABABEhMXFBUdEQgZGhscH/2gAIAQEAAT8Qom3LdvmFW33H9hzXR3eY1aunO4ZbGaeIqGi3klr3eRlqcQih726Zhgr5mniIEX9Qb6lTTxD6H008T//Z\'); background-size: cover; display: block;"\n    >\n      <img\n        class="gatsby-resp-image-image"\n        style="width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px transparent;"\n        alt="Configuration of VM"\n        title=""\n        src="/static/setup-cloud-vm-f1-micro-free-448ac9f13f70d887c21dfbdb8ed4c03b-4d083.jpg"\n        srcset="/static/setup-cloud-vm-f1-micro-free-448ac9f13f70d887c21dfbdb8ed4c03b-06ee9.jpg 200w,\n/static/setup-cloud-vm-f1-micro-free-448ac9f13f70d887c21dfbdb8ed4c03b-4998d.jpg 400w,\n/static/setup-cloud-vm-f1-micro-free-448ac9f13f70d887c21dfbdb8ed4c03b-4d083.jpg 483w"\n        sizes="(max-width: 483px) 100vw, 483px"\n      />\n    </span>\n  </span>\n  \n  </a>\n    </p>\n<p>You should now have a free tier VM set up in the Google Cloud console. See the screenshot below, where you see instance-1 is fully set up and running.</p>\n<p>\n  <a\n    class="gatsby-resp-image-link"\n    href="/static/instance-vm-c8110efbcd62d369e22acb03a34db08e-4aa88.jpg"\n    style="display: block"\n    target="_blank"\n    rel="noopener"\n  >\n  \n  <span\n    class="gatsby-resp-image-wrapper"\n    style="position: relative; display: block; ; max-width: 800px; margin-left: auto; margin-right: auto;"\n  >\n    <span\n      class="gatsby-resp-image-background-image"\n      style="padding-bottom: 42.4643584521385%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAIABQDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAX/xAAVAQEBAAAAAAAAAAAAAAAAAAAAAf/aAAwDAQACEAMQAAABsCwD/8QAFhAAAwAAAAAAAAAAAAAAAAAAAAMS/9oACAEBAAEFAoWQshZ//8QAFhEBAQEAAAAAAAAAAAAAAAAAABEB/9oACAEDAQE/AZiP/8QAFhEAAwAAAAAAAAAAAAAAAAAAAAER/9oACAECAQE/Aays/8QAFxAAAwEAAAAAAAAAAAAAAAAAAAExMv/aAAgBAQAGPwKIyiI//8QAFxABAAMAAAAAAAAAAAAAAAAAAQAQEf/aAAgBAQABPyEyrll//9oADAMBAAIAAwAAABBwD//EABcRAQADAAAAAAAAAAAAAAAAAAARUWH/2gAIAQMBAT8QwQp//8QAFREBAQAAAAAAAAAAAAAAAAAAAGH/2gAIAQIBAT8Qss//xAAaEAACAgMAAAAAAAAAAAAAAAABEQAhUYGx/9oACAEBAAE/EEF9YEDWvQjA5if/2Q==\'); background-size: cover; display: block;"\n    >\n      <img\n        class="gatsby-resp-image-image"\n        style="width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px transparent;"\n        alt="Google Cloud Instance Shown"\n        title=""\n        src="/static/instance-vm-c8110efbcd62d369e22acb03a34db08e-78f2b.jpg"\n        srcset="/static/instance-vm-c8110efbcd62d369e22acb03a34db08e-dce19.jpg 200w,\n/static/instance-vm-c8110efbcd62d369e22acb03a34db08e-c1413.jpg 400w,\n/static/instance-vm-c8110efbcd62d369e22acb03a34db08e-78f2b.jpg 800w,\n/static/instance-vm-c8110efbcd62d369e22acb03a34db08e-4aa88.jpg 982w"\n        sizes="(max-width: 800px) 100vw, 800px"\n      />\n    </span>\n  </span>\n  \n  </a>\n    </p>\n<h2>Set up a reserved static IP address</h2>\n<p><a href="https://console.cloud.google.com/networking/addresses/list">Click here</a> to set up a reserved static IP address for the VM instance you created. The IP that I have set up is <strong>35.231.171.45</strong> as displayed below.</p>\n<p>\n  <a\n    class="gatsby-resp-image-link"\n    href="/static/staticip-0bbfe2a574d5b75f849994f59d896521-8f116.png"\n    style="display: block"\n    target="_blank"\n    rel="noopener"\n  >\n  \n  <span\n    class="gatsby-resp-image-wrapper"\n    style="position: relative; display: block; ; max-width: 770px; margin-left: auto; margin-right: auto;"\n  >\n    <span\n      class="gatsby-resp-image-background-image"\n      style="padding-bottom: 32.72727272727273%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAHCAYAAAAIy204AAAACXBIWXMAAAsSAAALEgHS3X78AAABGUlEQVQoz62Qy07DMBBF/W+FJQJWIMRvtKx4bHj8GlILrYjUplQqJKAUCRrXTvyKk4vtlIgP6EhHc2func2Q45tPnD9kOLnNcHqX4ex+Bb87vEpxdJ3i4DLF3kXS0esn2Pd60OreYEu/9ckk/sJLvMIoSjGMPvA4eUe0+MYyk3iacwxnDONXjmen/TxPS4xijvHC6YRjuqSYvW22UBApGGylUBmJSgsowYHawJe1DWzd4K+aptX/Vn7yTgcRUsMYg82Goaosfta5Yw0pFfI8h1QahTAQZYmicJQClNJwo7UJNz6rXM7PhJcGta3AOQ+hoihQumNrbehCCDDGoZ3nfaVUyDLGQpdSoq7rAKU5iA/ssojWuvvPLvgFYkUG8gO6FdwAAAAASUVORK5CYII=\'); background-size: cover; display: block;"\n    >\n      <img\n        class="gatsby-resp-image-image"\n        style="width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px transparent;"\n        alt="Static IP setup screen"\n        title=""\n        src="/static/staticip-0bbfe2a574d5b75f849994f59d896521-8f116.png"\n        srcset="/static/staticip-0bbfe2a574d5b75f849994f59d896521-31a6c.png 200w,\n/static/staticip-0bbfe2a574d5b75f849994f59d896521-11f7f.png 400w,\n/static/staticip-0bbfe2a574d5b75f849994f59d896521-8f116.png 770w"\n        sizes="(max-width: 770px) 100vw, 770px"\n      />\n    </span>\n  </span>\n  \n  </a>\n    </p>\n<h3>Setting up firewall settings</h3>\n<p>Open up the <a href="https://console.cloud.google.com/networking/firewalls/list">Firewall rules</a> in the Google Cloud console. You need to open the ingress port tcp:30000 for Isso use. See below for example.</p>\n<p>\n  <a\n    class="gatsby-resp-image-link"\n    href="/static/open-port-for-isso-00b25a680b71070fe182d777ea7a1dfb-4875c.png"\n    style="display: block"\n    target="_blank"\n    rel="noopener"\n  >\n  \n  <span\n    class="gatsby-resp-image-wrapper"\n    style="position: relative; display: block; ; max-width: 800px; margin-left: auto; margin-right: auto;"\n  >\n    <span\n      class="gatsby-resp-image-background-image"\n      style="padding-bottom: 43.67816091954023%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAJCAYAAAAywQxIAAAACXBIWXMAAAsSAAALEgHS3X78AAABOklEQVQoz41Sy5KEIBDz//9xTnOZhwICgiiY7bSDu1W7h7UqpXan0wk63G43pJTwfr8xTROAAyEdcLHBJz431AbYUBFzw7ZtiuM4/sTgZ4eyrsg5q3AMEcsiiOHEkgQLat102fdwQ2u/MUxWhlKGtU4cjnDOKYz1SHlFWivKVlXkP9fwMglh2TGaqC45t5Uijnq8okQ+s19rvVyukuxExlqaLBaHjLfvO4wxeD6fCDEihHDBGqtCjB2l18+QM+yzxp61M6IczxDCKTiOIx6PB7yQnLO6gNFfsoQ1772+k1skAUXneRZRr4LKE87AJg+TRRKuCJ84dNAFih5FVXBG658e5/l+CRoz4X6/iwuxHsMVh05J5h/AhYxPUIS1Dis83n845LBV4vr5jbpDPTfh7duuH6h/cc52dIdf0bW8G5ZHsNcAAAAASUVORK5CYII=\'); background-size: cover; display: block;"\n    >\n      <img\n        class="gatsby-resp-image-image"\n        style="width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px transparent;"\n        alt="Open port 30000"\n        title=""\n        src="/static/open-port-for-isso-00b25a680b71070fe182d777ea7a1dfb-48538.png"\n        srcset="/static/open-port-for-isso-00b25a680b71070fe182d777ea7a1dfb-bed0f.png 200w,\n/static/open-port-for-isso-00b25a680b71070fe182d777ea7a1dfb-5fd34.png 400w,\n/static/open-port-for-isso-00b25a680b71070fe182d777ea7a1dfb-48538.png 800w,\n/static/open-port-for-isso-00b25a680b71070fe182d777ea7a1dfb-4875c.png 870w"\n        sizes="(max-width: 800px) 100vw, 800px"\n      />\n    </span>\n  </span>\n  \n  </a>\n    </p>\n<p>Next, you will need to open up the egress port tcp:2525 for outbound mail notifications. See below for example.</p>\n<p>\n  <a\n    class="gatsby-resp-image-link"\n    href="/static/open-port-for-smtp-842f5eb6cc224f34c0be7b0f29d8a12a-7c7d1.png"\n    style="display: block"\n    target="_blank"\n    rel="noopener"\n  >\n  \n  <span\n    class="gatsby-resp-image-wrapper"\n    style="position: relative; display: block; ; max-width: 645px; margin-left: auto; margin-right: auto;"\n  >\n    <span\n      class="gatsby-resp-image-background-image"\n      style="padding-bottom: 33.17829457364341%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAHCAYAAAAIy204AAAACXBIWXMAAAsSAAALEgHS3X78AAABGUlEQVQoz4VR2ZKEMAj0/z/TLcdj1CREYy7TC8w6r0tJpVNC02m6fd/gnEPf9xiGAbuxkKCz4mfJML7ibQt2KvChIuUbiynYqKLeDVcISCmhtaZ9nZCVUnBdF2KMyIwlSuXi1PgEUml6FwL+ENPNWXHft/bW+sGSnZBEJiMieO81ZcghmBycNfrPOgL5E6QCsg59VDFSLKmE0jCOI5Z54pwxTbOer9eE98bkxwHnE+jIqkiUPFwP6XPvjM+sMPATEgz7FGL9Fj7z/4sPaVPW7gyRPSgwxsC4AGMPlJyROUW5PFFt+XuJqA28CLFFRGzbxrUF1vMeWEyXUtQJ67pCsPfsl7XfYsEPiQyVBUidkIuXRF4FDWxPYhG/FAggtEwEKdYAAAAASUVORK5CYII=\'); background-size: cover; display: block;"\n    >\n      <img\n        class="gatsby-resp-image-image"\n        style="width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px transparent;"\n        alt="Open port 2525"\n        title=""\n        src="/static/open-port-for-smtp-842f5eb6cc224f34c0be7b0f29d8a12a-7c7d1.png"\n        srcset="/static/open-port-for-smtp-842f5eb6cc224f34c0be7b0f29d8a12a-6b74a.png 200w,\n/static/open-port-for-smtp-842f5eb6cc224f34c0be7b0f29d8a12a-a347d.png 400w,\n/static/open-port-for-smtp-842f5eb6cc224f34c0be7b0f29d8a12a-7c7d1.png 645w"\n        sizes="(max-width: 645px) 100vw, 645px"\n      />\n    </span>\n  </span>\n  \n  </a>\n    </p>\n<h2>Set up DNS records on your domains</h2>\n<p>Set up a subdomain A record <strong>comments.yourdomain.com</strong> that points to your new static IP address. Shown below are my settings set up on Google Domains.</p>\n<p>\n  <a\n    class="gatsby-resp-image-link"\n    href="/static/set-up-dns-a-record-04c1417d7bf9a9e08ba06c919bd268ba-28890.png"\n    style="display: block"\n    target="_blank"\n    rel="noopener"\n  >\n  \n  <span\n    class="gatsby-resp-image-wrapper"\n    style="position: relative; display: block; ; max-width: 800px; margin-left: auto; margin-right: auto;"\n  >\n    <span\n      class="gatsby-resp-image-background-image"\n      style="padding-bottom: 5.31062124248497%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAABCAYAAADeko4lAAAACXBIWXMAAAsSAAALEgHS3X78AAAAO0lEQVQI1x2KgQZAQQgE3///aom4dynVnhrWWOYzM4gIMhPdjYhYz3d3DPfebcZDVW0zIyKoKv5zwMx4YNpN+Uc3g6UAAAAASUVORK5CYII=\'); background-size: cover; display: block;"\n    >\n      <img\n        class="gatsby-resp-image-image"\n        style="width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px transparent;"\n        alt="Subdomain A record"\n        title=""\n        src="/static/set-up-dns-a-record-04c1417d7bf9a9e08ba06c919bd268ba-48538.png"\n        srcset="/static/set-up-dns-a-record-04c1417d7bf9a9e08ba06c919bd268ba-bed0f.png 200w,\n/static/set-up-dns-a-record-04c1417d7bf9a9e08ba06c919bd268ba-5fd34.png 400w,\n/static/set-up-dns-a-record-04c1417d7bf9a9e08ba06c919bd268ba-48538.png 800w,\n/static/set-up-dns-a-record-04c1417d7bf9a9e08ba06c919bd268ba-28890.png 998w"\n        sizes="(max-width: 800px) 100vw, 800px"\n      />\n    </span>\n  </span>\n  \n  </a>\n    </p>\n<h2>Setting up email notifications for new comments</h2>\n<p>You will want notification when somebody comments on a post on your website. <a href="https://cloud.google.com/compute/docs/tutorials/sending-mail/">Google Cloud prohibits instances sending mail on SMTP ports 25, 587, and 465</a> making it quite difficult to use most SMTP services. We will, therefore, be using Mailgun on port 2525 instead.</p>\n<p>The steps are as follows:</p>\n<ul>\n<li>Create a free <a href="https://www.mailgun.com/google">Mailgun account</a></li>\n<li>Add a <a href="https://app.mailgun.com/app/domains">domain in Mailgun</a>. Use the format: email.yourdomain.com</li>\n<li>Complete the Mailgun domain verification process. Add all the DNS A records, TXT records and other records that Mailgun requires. See the Mailgun verification settings<sup>1</sup> and corrosponding Google Domain setup<sup>2</sup>.</li>\n<li>Add an <a href="https://app.mailgun.com/app/account/authorized">authorized recipient</a> for which email address you want to be sent comment notifications</li>\n<li>Keep a Mailgun open as you will use the details later on</li>\n</ul>\n<p><em>1 - Mailgun verification</em>\n\n  <a\n    class="gatsby-resp-image-link"\n    href="/static/mail-gun-verification-settings-eb03484f15d2c6ae735daeb01a54a01a-d4e04.png"\n    style="display: block"\n    target="_blank"\n    rel="noopener"\n  >\n  \n  <span\n    class="gatsby-resp-image-wrapper"\n    style="position: relative; display: block; ; max-width: 800px; margin-left: auto; margin-right: auto;"\n  >\n    <span\n      class="gatsby-resp-image-background-image"\n      style="padding-bottom: 62.44573082489146%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAMCAYAAABiDJ37AAAACXBIWXMAAAsTAAALEwEAmpwYAAABf0lEQVQoz5VTS04DMQwNB+JISFyDBQu4AuIGLBBbFkhIIBZU7LrlEm2n80kmX5vnNNNGZSqBpSc7v+cXO1ExRB7HcQ+tNQ99T8MwsMAYE8WYOYOIBAkW4D3mvPiCqFo/srGWvXOsjeaQz2ajAvbec6LEfzGlg2MXAicQOZDK4RCCSGBkFMWfGL8BXxC6wJmFtfYb++6x5xpzN9h3C1wBL6rzlm3wmRDXy6QACVkReq5gCM5Usb7vL9WMYc+Fwl0yGRRwPHgSL2pB/or4GfEHIErf4ZdQeYe1R8RPBQ9QvFRY4LZtebPZ8Hq95gZ+u8W4HWjVdJSI/2WqcejqaDh41DGluiHZUMOIhNLRutNpNCaIYVwjqmBbdtbgmmhCaUQNeUZd1+Vy0M4kMeGKlLu/O0PTfjUn+5h06vjc2vG8kse7kto1TYb34WR9aoJTyZXIFtL8Q8rvGKpYrhoPj31PUkrwuynketZDl0nwvvL3k1pPGeUFCHGtRkogAqZEtcIf4DqHY42v9WAAAAAASUVORK5CYII=\'); background-size: cover; display: block;"\n    >\n      <img\n        class="gatsby-resp-image-image"\n        style="width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px transparent;"\n        alt="Mailgun verification"\n        title=""\n        src="/static/mail-gun-verification-settings-eb03484f15d2c6ae735daeb01a54a01a-48538.png"\n        srcset="/static/mail-gun-verification-settings-eb03484f15d2c6ae735daeb01a54a01a-bed0f.png 200w,\n/static/mail-gun-verification-settings-eb03484f15d2c6ae735daeb01a54a01a-5fd34.png 400w,\n/static/mail-gun-verification-settings-eb03484f15d2c6ae735daeb01a54a01a-48538.png 800w,\n/static/mail-gun-verification-settings-eb03484f15d2c6ae735daeb01a54a01a-b70ec.png 1200w,\n/static/mail-gun-verification-settings-eb03484f15d2c6ae735daeb01a54a01a-d4e04.png 1382w"\n        sizes="(max-width: 800px) 100vw, 800px"\n      />\n    </span>\n  </span>\n  \n  </a>\n    </p>\n<p><em>2 - Corrosponding settings in Google Domains</em>\n\n  <a\n    class="gatsby-resp-image-link"\n    href="/static/dns-settings-for-mailgun-818cf4ef316eca527bd141a85d835817-43de0.png"\n    style="display: block"\n    target="_blank"\n    rel="noopener"\n  >\n  \n  <span\n    class="gatsby-resp-image-wrapper"\n    style="position: relative; display: block; ; max-width: 800px; margin-left: auto; margin-right: auto;"\n  >\n    <span\n      class="gatsby-resp-image-background-image"\n      style="padding-bottom: 34.375%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAHCAYAAAAIy204AAAACXBIWXMAAAsTAAALEwEAmpwYAAABA0lEQVQoz32QW0oFMRBEw+XuxR+/ZODuwF25Fb/EfbiceWbej2TSbVVMQGSwISTd1amcjhnHUQ/nlBFC0HmeVUT0PE/d911YX9dV2raVqqpkmibx3gt0amK7TkvU2VOWpRoabtumOWiIC9E8G27bKk3TqO17HYYx9jjnAqSzR62ua4GHYFdDkc00pQkblmUBJQyPnX4CY7XWCnSPnEWfAbquExByCo2Ex3EoxsDLA4nUY9Q8PkhjgvoXXn/BsQDZM7QC6xX5G3ISx28gnNGL4B+myCTv5iLQ95R0jh8vsaj/LJ8e+KQBjnecb1j3lD+SHuQnrgl/RSb8SAY3QnBPhMVfwm/mu/PzCz4VTQAAAABJRU5ErkJggg==\'); background-size: cover; display: block;"\n    >\n      <img\n        class="gatsby-resp-image-image"\n        style="width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px transparent;"\n        alt="DNS settings in Google Domains"\n        title=""\n        src="/static/dns-settings-for-mailgun-818cf4ef316eca527bd141a85d835817-48538.png"\n        srcset="/static/dns-settings-for-mailgun-818cf4ef316eca527bd141a85d835817-bed0f.png 200w,\n/static/dns-settings-for-mailgun-818cf4ef316eca527bd141a85d835817-5fd34.png 400w,\n/static/dns-settings-for-mailgun-818cf4ef316eca527bd141a85d835817-48538.png 800w,\n/static/dns-settings-for-mailgun-818cf4ef316eca527bd141a85d835817-43de0.png 992w"\n        sizes="(max-width: 800px) 100vw, 800px"\n      />\n    </span>\n  </span>\n  \n  </a>\n    </p>\n<h2>Setting up your Isso.conf configuration file</h2>\n<p>Please familiarize yourself with the Isso configuration options by looking at the <a href="https://posativ.org/isso/docs/configuration/server/">official documentation</a> on this subject. </p>\n<p>I have included the contents of an  <strong>isso.conf</strong> configuration file, for you to use as a template. Once completed it will be set up for email notifications and logging to a file, outside of the Docker container. <strong>Please replace the values as mentioned in the inline comments.</strong></p>\n<p>Please leave the file paths alone as these will be defined later when you run container.</p>\n<div class="gatsby-highlight">\n      <pre class="language-yaml"><code class="language-yaml"><span class="token punctuation">[</span>general<span class="token punctuation">]</span>\n \ndbpath = /db/comments.db <span class="token comment"># database location, do not change /db/ is a docker volume variable not a path</span>\n <span class="token comment"># your website or blog (not the location of Isso!)</span>\n <span class="token comment"># you can add multiple hosts for local development</span>\n <span class="token comment"># or SSL connections. There is no wildcard to allow</span>\n <span class="token comment"># any domain.</span>\nhost =\n    http<span class="token punctuation">:</span>//yourdomain.com/\n    http<span class="token punctuation">:</span>//www.yourdomain.com/\n    https<span class="token punctuation">:</span>//yourdomain.com/\n    https<span class="token punctuation">:</span>//www.yourdomain.com/\n    http<span class="token punctuation">:</span>//localhost<span class="token punctuation">:</span><span class="token number">8000 </span><span class="token comment">#your local website development web address</span>\nnotify = smtp\nlog<span class="token punctuation">-</span>file=/db/log.txt <span class="token comment"># the log file will be saved to your docker volume /db/, do not change path</span>\n\n<span class="token punctuation">[</span>server<span class="token punctuation">]</span>\nlisten = http<span class="token punctuation">:</span>//0.0.0.0<span class="token punctuation">:</span>8080/ <span class="token comment"># inside the docker instance the commenting server will run on 8080, do not change</span>\n\n<span class="token punctuation">[</span>smtp<span class="token punctuation">]</span>\nusername = postmaster@email.yourdomain.com <span class="token comment"># Your own Default SMTP Login in Mailgun here</span>\npassword = yourpassword <span class="token comment"># Your own Default Password in Mailgun here</span>\nhost = smtp.mailgun.org <span class="token comment"># SMTP Hostname in MailGun</span>\nport = 2525 <span class="token comment"># SMTP Port in MailGun</span>\nsecurity = none <span class="token comment"># Authentication not required in MailGun</span>\nto = admin@yourdomain.com <span class="token comment"># The email you want to recieve the notification on</span>\nfrom = postmaster@email.yourdomain.com <span class="token comment"># Your own Default SMTP Login in Mailgun here</span>\ntimeout = 10\n\n<span class="token punctuation">[</span>guard<span class="token punctuation">]</span>\nenabled = true\nratelimit = 2\ndirect<span class="token punctuation">-</span>reply = 30\nreply<span class="token punctuation">-</span>to<span class="token punctuation">-</span>self = true\nrequire<span class="token punctuation">-</span>author = false\nrequire<span class="token punctuation">-</span>email = false\n</code></pre>\n      </div>\n<h2>Deploying the Isso commenting software to the VM</h2>\n<p>Go back to the <a href="https://console.cloud.google.com/compute/instances">Google Console</a> and start up an SSH session to the VM by clicking the SSH button. You should see a screen below.</p>\n<p>\n  <a\n    class="gatsby-resp-image-link"\n    href="/static/ssh-instance-1-e31174560201a7e126054e44491df429-afe6e.png"\n    style="display: block"\n    target="_blank"\n    rel="noopener"\n  >\n  \n  <span\n    class="gatsby-resp-image-wrapper"\n    style="position: relative; display: block; ; max-width: 800px; margin-left: auto; margin-right: auto;"\n  >\n    <span\n      class="gatsby-resp-image-background-image"\n      style="padding-bottom: 78.44444444444444%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAQCAYAAAAWGF8bAAAACXBIWXMAAAsTAAALEwEAmpwYAAACXUlEQVQ4y5WSW28SURSF518IPhlg5sxQU1FpgQL9If4QBSxUqgWZtpQObbE11oCkpLHxDfXFPjUt+OyDmpjw0FTCJZRbh9vM9pzDJaL1wiRf1prbmrWzh4lJTyEakyC2E4XtbQmexaKwtRkBSQrD7s4WPN/dBmkjDKHQMoTXxNZ6WGxH1lcoG5HVAf1zco/xrvrePVl7lPYFvG+9S+70wuP76QW/O70UWEz7A973ofXl12dn3+69OTxYXBGDh36/b9/jcac8nocYT8rlcqceuFypYDC4HxLFA8ZwQ/PRZNRk7t7UZGamtRkz5pZRmzFNaQjZaUGTQfprH5BB+5XVX++KQd/lq8RLORrdlPf2XsiJREKOx+NyMpmkMHduG8FhM4LTjpnDYD+PdZ5cs/bVbp0Cu0UAqxnBl8+f4G8HY5hFCjuDFIOVVwyzvMKakYKmBcUkCIqAOIXnkSIIqCfw2CNOPT4+VnvdrtpqtVRFUdQu9oRer6d2Oh2V4XgEHPodxGHlOAz2qO9ZloXT01PAL0OxWARZlsfa4Q8Ag/CDV8EhjgahgfbDOcAN4bJ5Cfl8HiqVCuBWgBtS2u02MFe1ow1pS27kh4FHR0dwUbmA8/Pv0Gg0oFar/0QNNxy+/A9GI5+c0JFLpRJtNzxUVaVMFog5wYFkvEKhAFXciIw5DJ44kBsE4g1DAS+lXC7T5ZBQEtZfyoQjZ7NZ2qZer0Oz2aRBY//hpA3JUqrVKuRyOTo2CSXhZEFEJw60WCzgcDhgzmaj6nQ6x2D+N2zo9Xo96HS6kf7KxA2J53n+j/wAqOLChjWwDXEAAAAASUVORK5CYII=\'); background-size: cover; display: block;"\n    >\n      <img\n        class="gatsby-resp-image-image"\n        style="width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px transparent;"\n        alt="Screenshot SSH"\n        title=""\n        src="/static/ssh-instance-1-e31174560201a7e126054e44491df429-48538.png"\n        srcset="/static/ssh-instance-1-e31174560201a7e126054e44491df429-bed0f.png 200w,\n/static/ssh-instance-1-e31174560201a7e126054e44491df429-5fd34.png 400w,\n/static/ssh-instance-1-e31174560201a7e126054e44491df429-48538.png 800w,\n/static/ssh-instance-1-e31174560201a7e126054e44491df429-afe6e.png 900w"\n        sizes="(max-width: 800px) 100vw, 800px"\n      />\n    </span>\n  </span>\n  \n  </a>\n    </p>\n<p>Now you will need to upload the configuration file to the default home user folder and execute the following commands. This will create the folders that the container will use and move our configuration file to where it is going to be expected.</p>\n<div class="gatsby-highlight">\n      <pre class="language-bash"><code class="language-bash"><span class="token function">sudo</span> <span class="token function">mkdir</span> /var/lib/docker/isso\n<span class="token function">sudo</span> <span class="token function">mkdir</span> /var/lib/docker/isso/db\n<span class="token function">sudo</span> <span class="token function">mkdir</span> /var/lib/docker/isso/conf\n<span class="token function">mv</span> isso.conf /var/lib/docker/isso/conf/isso.conf\n</code></pre>\n      </div>\n<p>Now pull the prebuilt Isso docker container into your VM instance.</p>\n<div class="gatsby-highlight">\n      <pre class="language-bash"><code class="language-bash">docker pull wonderfall/isso\n</code></pre>\n      </div>\n<p>You should be able to run the docker container with the following command. It will be listening on port 30000.</p>\n<div class="gatsby-highlight">\n      <pre class="language-bash"><code class="language-bash">docker run --name isso -p 30000:8080 \\\n             --restart<span class="token operator">=</span>always \\\n             -e USERID<span class="token operator">=</span>1000 -e GROUPID<span class="token operator">=</span>1000 \\\n             -v /var/lib/docker/isso/config:/config \\\n             -v /var/lib/docker/isso/db:/db \\\n             -d wonderfall/isso\n</code></pre>\n      </div>\n<p>You will never really have to look inside the Docker container, it will log errors to a file outside of the container. It can be treated like a black box.</p>\n<h2>Testing the ISSO server from the outside world</h2>\n<p>Test your Isso server is running and accessible with your subdomain. For example <a href="http://comments.paulsness.com:30000">http://comments.paulsness.com:30000</a></p>\n<p>If you have followed all the instructions above, everything should be set up correctly. You should get a page that looks like the following.</p>\n<p>\n  <a\n    class="gatsby-resp-image-link"\n    href="/static/bad-query-page-72b5a592ce9b2bcc9ad61e3b0008ea52-43c95.png"\n    style="display: block"\n    target="_blank"\n    rel="noopener"\n  >\n  \n  <span\n    class="gatsby-resp-image-wrapper"\n    style="position: relative; display: block; ; max-width: 237px; margin-left: auto; margin-right: auto;"\n  >\n    <span\n      class="gatsby-resp-image-background-image"\n      style="padding-bottom: 47.25738396624473%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAJCAYAAAAywQxIAAAACXBIWXMAAAsSAAALEgHS3X78AAABlUlEQVQoz5WR204aURSG5zkbvW5EBUYbY3vTNBU0vdWLxhgS6xOgjYW2HAYVi8HGGaixjiaUk4JhpjrAIAhf96Zpr5Ton6zsrH34D2srrtum0WjQub3lHyzRO80WTcfBsmwei8FggPI9s8OzsXE2t6MY+hGGkWPhzWtyxz/ZWA/xYm6eZFJD0zTS6T0+R6Ps7qXJZg+Jxb6ipVLsaAk+fooOSZXMbhyvz08gGERV/Tyf8IhV5eT0nNDaeyanvLxbWmTu5SsWg2/x+bxMTvvxeDzMzM6ysryM6ldZDX34S3hVv+RI1ymXy+TzeUqlError29u+FUoUCwWMU2TWv2Ki3KBQCDAjxOT87MzqtUqtVqdSqUi3lcYSEKeiFarNXqGDx2MQr/fv7eGkV3XpS7iOOJHbcvC/n1Np9PBbbeHPywdNUU5YgSWbdPr9f6L3iesmOYpW5tbHHzbJ/ElQiQSIZZIkc2k2c/q5AyDcDiMlogRjyexhOCoFIq02u12hyXV28KNHLTs7+76yAS2cCbvSbdybxThHwmgjJvjK8xmAAAAAElFTkSuQmCC\'); background-size: cover; display: block;"\n    >\n      <img\n        class="gatsby-resp-image-image"\n        style="width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px transparent;"\n        alt="Bad Request Page"\n        title=""\n        src="/static/bad-query-page-72b5a592ce9b2bcc9ad61e3b0008ea52-43c95.png"\n        srcset="/static/bad-query-page-72b5a592ce9b2bcc9ad61e3b0008ea52-09d93.png 200w,\n/static/bad-query-page-72b5a592ce9b2bcc9ad61e3b0008ea52-43c95.png 237w"\n        sizes="(max-width: 237px) 100vw, 237px"\n      />\n    </span>\n  </span>\n  \n  </a>\n    </p>\n<h2>Inserting comment snippet on your site</h2>\n<p>Now all you need to do is insert the following snippet on your own website. Just be sure to change <strong>‘yourdomain’</strong> to your actual domain.</p>\n<p>Pure HTML</p>\n<div class="gatsby-highlight">\n      <pre class="language-html"><code class="language-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">data-isso</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>http://comments.yourdomain.com:30000/<span class="token punctuation">"</span></span>\n        <span class="token attr-name">data-isso-css</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>true<span class="token punctuation">"</span></span>\n        <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>http://comments.yourdomain.com:30000/js/embed.min.js<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token script language-javascript"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>section</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>isso-thread<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>section</span><span class="token punctuation">></span></span>\n</code></pre>\n      </div>\n<p>or if you are using React</p>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code class="language-javascript"><span class="token keyword">class</span> <span class="token class-name">PostComments</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span> <span class="token punctuation">{</span>\n  <span class="token function">componentDidMount</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">const</span> scriptElem <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">createElement</span><span class="token punctuation">(</span><span class="token string">\'script\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    scriptElem<span class="token punctuation">.</span>type <span class="token operator">=</span> <span class="token string">\'text/javascript\'</span><span class="token punctuation">;</span>\n    scriptElem<span class="token punctuation">.</span><span class="token function">setAttribute</span><span class="token punctuation">(</span><span class="token string">\'data-isso\'</span><span class="token punctuation">,</span> <span class="token string">\'http://comments.yourdomain.com:30000/\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    scriptElem<span class="token punctuation">.</span><span class="token function">setAttribute</span><span class="token punctuation">(</span><span class="token string">\'data-isso-css\'</span><span class="token punctuation">,</span> <span class="token string">\'true\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    scriptElem<span class="token punctuation">.</span><span class="token function">setAttribute</span><span class="token punctuation">(</span><span class="token string">\'src\'</span><span class="token punctuation">,</span> <span class="token string">\'http://comments.yourdomain.com:30000/js/embed.min.js\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    scriptElem<span class="token punctuation">.</span><span class="token keyword">async</span> <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>\n\n    <span class="token keyword">const</span> sectionElem <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">createElement</span><span class="token punctuation">(</span><span class="token string">\'section\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    sectionElem<span class="token punctuation">.</span>id <span class="token operator">=</span> <span class="token string">\'isso-thread\'</span><span class="token punctuation">;</span>\n    <span class="token keyword">this</span><span class="token punctuation">.</span>instance<span class="token punctuation">.</span><span class="token function">appendChild</span><span class="token punctuation">(</span>scriptElem<span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token keyword">this</span><span class="token punctuation">.</span>instance<span class="token punctuation">.</span><span class="token function">appendChild</span><span class="token punctuation">(</span>sectionElem<span class="token punctuation">)</span>\n  <span class="token punctuation">}</span>\n\n  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">const</span> <span class="token punctuation">{</span> classes<span class="token punctuation">,</span> post<span class="token punctuation">,</span> slug <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>props<span class="token punctuation">;</span>\n\n    <span class="token keyword">return</span> <span class="token operator">&lt;</span>div id<span class="token operator">=</span><span class="token string">"post-comments"</span> className<span class="token operator">=</span><span class="token punctuation">{</span>classes<span class="token punctuation">.</span>postComments<span class="token punctuation">}</span> ref<span class="token operator">=</span><span class="token punctuation">{</span>el <span class="token operator">=></span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>instance <span class="token operator">=</span> el<span class="token punctuation">)</span><span class="token punctuation">}</span> <span class="token operator">/</span><span class="token operator">></span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre>\n      </div>\n<h2>Troubleshooting</h2>\n<p>Checking the log file for errors, such as if you are not receiving email notifications</p>\n<div class="gatsby-highlight">\n      <pre class="language-bash"><code class="language-bash"><span class="token comment"># To exit the less command press either the "q" or "Q" keys.</span>\n<span class="token comment"># To scroll down press the down key</span>\n\n<span class="token function">less</span> /var/lib/docker/isso/db/log.txt\n</code></pre>\n      </div>\n<p>Restarting the docker container, after making configuration changes</p>\n<div class="gatsby-highlight">\n      <pre class="language-bash"><code class="language-bash"><span class="token comment"># Check the currently running containers</span>\ndocker <span class="token function">ps</span>\n\n<span class="token comment"># Check the stopped containers</span>\ndocker <span class="token function">ps</span> -a\n\n<span class="token comment"># Example start of a container</span>\ndocker start <span class="token operator">&lt;</span>containerid<span class="token operator">></span>\n\n<span class="token comment"># Example stop of a container</span>\ndocker stop <span class="token operator">&lt;</span>containerid<span class="token operator">></span>\n</code></pre>\n      </div>\n<h2>Manually backup/download comments database</h2>\n<p>Use the file download feature in SSH with the following file</p>\n<div class="gatsby-highlight">\n      <pre class="language-bash"><code class="language-bash">/var/lib/docker/isso/db/comments.db\n</code></pre>\n      </div>',
fields:{slug:"/setup-isso-commenting-on-google-compute-engine-vm-cloud/",prefix:"2018-04-10"},frontmatter:{title:"Setup Isso comments on your website today",subTitle:"This guide goes through everything you need to get the open source commenting software Isso running on your website for completely free with Google Cloud.",cover:{childImageSharp:{resize:{src:"/static/comments-icon-174d9a333c638834ddafb5eed16ee07b-ada8c.jpeg"}}}}},author:{id:"/root/project/content/parts/author.md absPath of file >>> MarkdownRemark",html:"<p><strong>Paul S. Ness</strong> Software engineer with seven years of experience in a variety of industries such travel, payments, medical and publishing.</p>"},footnote:{id:"/root/project/content/parts/footnote.md absPath of file >>> MarkdownRemark",html:""},site:{siteMetadata:{facebook:{appId:""}}}},pathContext:{slug:"/setup-isso-commenting-on-google-compute-engine-vm-cloud/"}}}});
//# sourceMappingURL=path---setup-isso-commenting-on-google-compute-engine-vm-cloud-d3eb830f9dbd81506e7c.js.map