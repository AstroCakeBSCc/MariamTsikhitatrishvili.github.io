(function(e){function t(t){for(var l,i,s=t[0],c=t[1],r=t[2],d=0,f=[];d<s.length;d++)i=s[d],Object.prototype.hasOwnProperty.call(o,i)&&o[i]&&f.push(o[i][0]),o[i]=0;for(l in c)Object.prototype.hasOwnProperty.call(c,l)&&(e[l]=c[l]);u&&u(t);while(f.length)f.shift()();return n.push.apply(n,r||[]),a()}function a(){for(var e,t=0;t<n.length;t++){for(var a=n[t],l=!0,i=1;i<a.length;i++){var c=a[i];0!==o[c]&&(l=!1)}l&&(n.splice(t--,1),e=s(s.s=a[0]))}return e}var l={},o={app:0},n=[];function i(e){return s.p+"js/"+({about:"about"}[e]||e)+"."+{about:"cebc5610"}[e]+".js"}function s(t){if(l[t])return l[t].exports;var a=l[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,s),a.l=!0,a.exports}s.e=function(e){var t=[],a=o[e];if(0!==a)if(a)t.push(a[2]);else{var l=new Promise((function(t,l){a=o[e]=[t,l]}));t.push(a[2]=l);var n,c=document.createElement("script");c.charset="utf-8",c.timeout=120,s.nc&&c.setAttribute("nonce",s.nc),c.src=i(e);var r=new Error;n=function(t){c.onerror=c.onload=null,clearTimeout(d);var a=o[e];if(0!==a){if(a){var l=t&&("load"===t.type?"missing":t.type),n=t&&t.target&&t.target.src;r.message="Loading chunk "+e+" failed.\n("+l+": "+n+")",r.name="ChunkLoadError",r.type=l,r.request=n,a[1](r)}o[e]=void 0}};var d=setTimeout((function(){n({type:"timeout",target:c})}),12e4);c.onerror=c.onload=n,document.head.appendChild(c)}return Promise.all(t)},s.m=e,s.c=l,s.d=function(e,t,a){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(s.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var l in e)s.d(a,l,function(t){return e[t]}.bind(null,l));return a},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/",s.oe=function(e){throw console.error(e),e};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],r=c.push.bind(c);c.push=t,c=c.slice();for(var d=0;d<c.length;d++)t(c[d]);var u=r;n.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},"256c":function(e,t,a){},"56d7":function(e,t,a){"use strict";a.r(t);a("e260"),a("e6cf"),a("cca6"),a("a79d");var l=a("7a23"),o={class:"no-bottom no-top",id:"content"};function n(e,t,a,n,i,s){var c=Object(l["x"])("templateHeader"),r=Object(l["x"])("router-view"),d=Object(l["x"])("mainSlide"),u=Object(l["x"])("sectionIntro"),f=Object(l["x"])("templateFooter");return Object(l["r"])(),Object(l["e"])(l["a"],null,[Object(l["i"])(c),Object(l["i"])(r),Object(l["f"])("div",o,[Object(l["i"])(d),Object(l["i"])(u)]),Object(l["i"])(f)],64)}var i={class:"transparent header-light scroll-light"},s={class:"container"},c={class:"row"},r={class:"col-md-12"},d={class:"de-flex sm-pt10"},u={class:"de-flex-col"},f={class:"de-flex-col"},b={id:"logo"},h=Object(l["f"])("img",{alt:"",class:"logo",src:"images/logo-light.png"},null,-1),p=Object(l["f"])("img",{alt:"",class:"logo-2",src:"images/logo.png"},null,-1),m=[h,p],v=Object(l["f"])("div",{class:"de-flex-col"},[Object(l["f"])("input",{id:"quick_search",class:"xs-hide",name:"quick_search",placeholder:"search item here...",type:"text"})],-1),g={class:"de-flex-col header-col-mid"},j=Object(l["g"])('<ul id="mainmenu"><li><a href="index.html">Home<span></span></a><ul><li><a href="03_grey-index.html">New: Homepage Grey</a></li><li><a href="index.html">Homepage 1</a></li><li><a href="index-2.html">Homepage 2</a></li><li><a href="index-3.html">Homepage 3</a></li><li><a href="index-4.html">Homepage 4</a></li></ul></li><li><a href="explore.html">Explore<span></span></a><ul><li><a href="explore.html">Explore</a></li><li><a href="explore-2.html">Explore 2</a></li><li><a href="collection.html">Collections</a></li><li><a href="item-details.html">Item Details</a></li></ul></li><li><a href="#">Pages<span></span></a><ul><li><a href="author.html">Author</a></li><li><a href="wallet.html">Wallet</a></li><li><a href="create.html">Create</a></li><li><a href="news.html">News</a></li><li><a href="gallery.html">Gallery</a></li><li><a href="login.html">Login</a></li><li><a href="login-2.html">Login 2</a></li><li><a href="register.html">Register</a></li><li><a href="contact.html">Contact Us</a></li></ul></li><li><a href="activity.html">Activity<span></span></a></li><li><a href="#">Elements<span></span></a><ul><li><a href="icons-elegant.html">Elegant Icons</a></li><li><a href="icons-etline.html">Etline Icons</a></li><li><a href="icons-font-awesome.html">Font Awesome Icons</a></li><li><a href="accordion.html">Accordion</a></li><li><a href="alerts.html">Alerts</a></li><li><a href="counters.html">Counters</a></li><li><a href="modal.html">Modal</a></li><li><a href="popover.html">Popover</a></li><li><a href="pricing-table.html">Pricing Table</a></li><li><a href="progress-bar.html">Progress Bar</a></li><li><a href="tabs.html">Tabs</a></li><li><a href="tooltips.html">Tooltips</a></li></ul></li></ul>',1),O={class:"menu_side_area"},w=Object(l["f"])("i",{class:"icon_wallet_alt"},null,-1),x=Object(l["f"])("span",null,"Connect Wallet",-1),y=[w,x],k=Object(l["f"])("i",{class:"icon_wallet_alt"},null,-1),_=Object(l["f"])("span",null,"Sign Out",-1),I=[k,_],A={key:2,style:{"font-size":"11px","margin-left":"5px"}},C=Object(l["f"])("span",{id:"menu-btn"},null,-1);function S(e,t,a,o,n,h){return Object(l["r"])(),Object(l["e"])("header",i,[Object(l["f"])("div",s,[Object(l["f"])("div",c,[Object(l["f"])("div",r,[Object(l["f"])("div",d,[Object(l["f"])("div",u,[Object(l["f"])("div",f,[Object(l["f"])("div",b,[Object(l["f"])("a",{onClick:t[0]||(t[0]=function(){return h.test&&h.test.apply(h,arguments)}),href:"#"},m)])]),v]),Object(l["f"])("div",g,[j,Object(l["f"])("div",O,[e.$store.state.auth.token?Object(l["d"])("",!0):(Object(l["r"])(),Object(l["e"])("a",{key:0,onClick:t[1]||(t[1]=function(){return h.testMetamask&&h.testMetamask.apply(h,arguments)}),class:"btn-main"},y)),e.$store.state.auth.token?(Object(l["r"])(),Object(l["e"])("a",{key:1,onClick:t[2]||(t[2]=function(){return h.logoutMetamask&&h.logoutMetamask.apply(h,arguments)}),class:"btn-main"},I)):Object(l["d"])("",!0),e.$store.state.auth.token?(Object(l["r"])(),Object(l["e"])("small",A,Object(l["z"])(e.$store.state.auth.publicAddress.substring(0,8))+"...",1)):Object(l["d"])("",!0),C])])])])])])])}var M=a("5530"),P=a("bc3a"),U=a.n(P),H=a("5502"),T={name:"templateHeader",data:function(){return{displayToken:null}},methods:Object(M["a"])(Object(M["a"])({},Object(H["b"])({signIn:"auth/signIn",login:"auth/login"})),{},{testMetamask:function(){this.signIn(),console.log(this.$store.publicAddress)},logoutMetamask:function(){this.$store.commit("auth/logout")},test:function(){console.log(this.$store.state.auth.token)}})};T.render=S;var E=T,q={class:"footer-light"},F=Object(l["f"])("div",{class:"container"},[Object(l["f"])("div",{class:"row"},[Object(l["f"])("div",{class:"col-md-3 col-sm-6 col-xs-1"},[Object(l["f"])("div",{class:"widget"},[Object(l["f"])("h5",null,"Marketplace"),Object(l["f"])("ul",null,[Object(l["f"])("li",null,[Object(l["f"])("a",{href:"#"},"All NFTs")]),Object(l["f"])("li",null,[Object(l["f"])("a",{href:"#"},"Art")]),Object(l["f"])("li",null,[Object(l["f"])("a",{href:"#"},"Music")]),Object(l["f"])("li",null,[Object(l["f"])("a",{href:"#"},"Domain Names")]),Object(l["f"])("li",null,[Object(l["f"])("a",{href:"#"},"Virtual World")]),Object(l["f"])("li",null,[Object(l["f"])("a",{href:"#"},"Collectibles")])])])]),Object(l["f"])("div",{class:"col-md-3 col-sm-6 col-xs-1"},[Object(l["f"])("div",{class:"widget"},[Object(l["f"])("h5",null,"Resources"),Object(l["f"])("ul",null,[Object(l["f"])("li",null,[Object(l["f"])("a",{href:"#"},"Help Center")]),Object(l["f"])("li",null,[Object(l["f"])("a",{href:"#"},"Partners")]),Object(l["f"])("li",null,[Object(l["f"])("a",{href:"#"},"Suggestions")]),Object(l["f"])("li",null,[Object(l["f"])("a",{href:"#"},"Discord")]),Object(l["f"])("li",null,[Object(l["f"])("a",{href:"#"},"Docs")]),Object(l["f"])("li",null,[Object(l["f"])("a",{href:"#"},"Newsletter")])])])]),Object(l["f"])("div",{class:"col-md-3 col-sm-6 col-xs-1"},[Object(l["f"])("div",{class:"widget"},[Object(l["f"])("h5",null,"Community"),Object(l["f"])("ul",null,[Object(l["f"])("li",null,[Object(l["f"])("a",{href:"#"},"Community")]),Object(l["f"])("li",null,[Object(l["f"])("a",{href:"#"},"Documentation")]),Object(l["f"])("li",null,[Object(l["f"])("a",{href:"#"},"Brand Assets")]),Object(l["f"])("li",null,[Object(l["f"])("a",{href:"#"},"Blog")]),Object(l["f"])("li",null,[Object(l["f"])("a",{href:"#"},"Forum")]),Object(l["f"])("li",null,[Object(l["f"])("a",{href:"#"},"Mailing List")])])])]),Object(l["f"])("div",{class:"col-md-3 col-sm-6 col-xs-1"},[Object(l["f"])("div",{class:"widget"},[Object(l["f"])("h5",null,"Newsletter"),Object(l["f"])("p",null,"Signup for our newsletter to get the latest news in your inbox."),Object(l["f"])("form",{action:"blank.php",class:"row form-dark",id:"form_subscribe",method:"post",name:"form_subscribe"},[Object(l["f"])("div",{class:"col text-center"},[Object(l["f"])("input",{class:"form-control",id:"txt_subscribe",name:"txt_subscribe",placeholder:"enter your email",type:"text"}),Object(l["h"])(),Object(l["f"])("a",{href:"#",id:"btn-subscribe"},[Object(l["f"])("i",{class:"arrow_right bg-color-secondary"})]),Object(l["f"])("div",{class:"clearfix"})])]),Object(l["f"])("div",{class:"spacer-10"}),Object(l["f"])("small",null,"Your email is safe with us. We don't spam.")])])])],-1),N=Object(l["g"])('<div class="subfooter"><div class="container"><div class="row"><div class="col-md-12"><div class="de-flex"><div class="de-flex-col"><a href="index.html"><img alt="" class="f-logo" src="images/logo.png"><span class="copy">© Copyright 2021 - Gigaland by Designesia</span></a></div><div class="de-flex-col"><div class="social-icons"><a href="#"><i class="fa fa-facebook fa-lg"></i></a><a href="#"><i class="fa fa-twitter fa-lg"></i></a><a href="#"><i class="fa fa-linkedin fa-lg"></i></a><a href="#"><i class="fa fa-pinterest fa-lg"></i></a><a href="#"><i class="fa fa-rss fa-lg"></i></a></div></div></div></div></div></div></div>',1),D=[F,N];function L(e,t,a,o,n,i){return Object(l["r"])(),Object(l["e"])("footer",q,D)}var $={name:"templateFooter"};$.render=L;var R=$,W=Object(l["g"])('<div id="top"></div><section id="section-hero" aria-label="section" class="no-top no-bottom vh-100" data-bgimage="url(images/background/bg-shape-1.jpg) bottom"><div class="v-center"><div class="container"><div class="row align-items-center"><div class="col-md-6"><div class="spacer-single"></div><h6 class="wow fadeInUp" data-wow-delay=".5s"><span class="text-uppercase id-color-2">Gigaland Market</span></h6><div class="spacer-10"></div><h1 class="wow fadeInUp" data-wow-delay=".75s">Create, sell or collect digital items.</h1><p class="wow fadeInUp lead" data-wow-delay="1s"> Unit of data stored on a digital ledger, called a blockchain, that certifies a digital asset to be unique and therefore not interchangeable</p><div class="spacer-10"></div><a href="explore.html" class="btn-main wow fadeInUp lead" data-wow-delay="1.25s">Explore</a><div class="mb-sm-30"></div></div><div class="col-md-6 xs-hide"><img src="images/misc/nft.png" class="lazy img-fluid wow fadeIn" data-wow-delay="1.25s" alt=""></div></div></div></div></section>',2);function z(e,t,a,l,o,n){return W}var G={};G.render=z;var B=G,J={id:"section-intro",class:"no-top no-bottom"},V=Object(l["g"])('<div class="container"><div class="row"><div class="col-lg-4 col-md-6 mb-sm-30"><div class="feature-box f-boxed style-3"><i class="wow fadeInUp bg-color-2 i-boxed icon_wallet"></i><div class="text"><h4 class="wow fadeInUp">Set up your wallet</h4><p class="wow fadeInUp" data-wow-delay=".25s">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem.</p></div><i class="wm icon_wallet"></i></div></div><div class="col-lg-4 col-md-6 mb-sm-30"><div class="feature-box f-boxed style-3"><i class="wow fadeInUp bg-color-2 i-boxed icon_cloud-upload_alt"></i><div class="text"><h4 class="wow fadeInUp">Add your NFT&#39;s</h4><p class="wow fadeInUp" data-wow-delay=".25s">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem.</p></div><i class="wm icon_cloud-upload_alt"></i></div></div><div class="col-lg-4 col-md-6 mb-sm-30"><div class="feature-box f-boxed style-3"><i class="wow fadeInUp bg-color-2 i-boxed icon_tags_alt"></i><div class="text"><h4 class="wow fadeInUp">Sell your NFT&#39;s</h4><p class="wow fadeInUp" data-wow-delay=".25s">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem.</p></div><i class="wm icon_tags_alt"></i></div></div></div></div>',1),Y=[V];function K(e,t,a,o,n,i){return Object(l["r"])(),Object(l["e"])("section",J,Y)}var Q={};Q.render=K;var X=Q,Z={components:{templateHeader:E,templateFooter:R,mainSlide:B,sectionIntro:X},data:function(){return{token:null}},methods:{}};a("d23b");Z.render=n;var ee=Z,te=(a("d3b7"),a("3ca3"),a("ddb0"),a("6c02"));function ae(e,t,a,l,o,n){return null}Object(l["u"])("data-v-1dfc7223");var le={class:"hello"},oe=Object(l["g"])('<p data-v-1dfc7223> For a guide and recipes on how to configure / customize this project,<br data-v-1dfc7223> check out the <a href="https://cli.vuejs.org" target="_blank" rel="noopener" data-v-1dfc7223>vue-cli documentation</a>. </p><h3 data-v-1dfc7223>Installed CLI Plugins</h3><ul data-v-1dfc7223><li data-v-1dfc7223><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-babel" target="_blank" rel="noopener" data-v-1dfc7223>babel</a></li><li data-v-1dfc7223><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-router" target="_blank" rel="noopener" data-v-1dfc7223>router</a></li><li data-v-1dfc7223><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-vuex" target="_blank" rel="noopener" data-v-1dfc7223>vuex</a></li></ul><h3 data-v-1dfc7223>Essential Links</h3><ul data-v-1dfc7223><li data-v-1dfc7223><a href="https://vuejs.org" target="_blank" rel="noopener" data-v-1dfc7223>Core Docs</a></li><li data-v-1dfc7223><a href="https://forum.vuejs.org" target="_blank" rel="noopener" data-v-1dfc7223>Forum</a></li><li data-v-1dfc7223><a href="https://chat.vuejs.org" target="_blank" rel="noopener" data-v-1dfc7223>Community Chat</a></li><li data-v-1dfc7223><a href="https://twitter.com/vuejs" target="_blank" rel="noopener" data-v-1dfc7223>Twitter</a></li><li data-v-1dfc7223><a href="https://news.vuejs.org" target="_blank" rel="noopener" data-v-1dfc7223>News</a></li></ul><h3 data-v-1dfc7223>Ecosystem</h3><ul data-v-1dfc7223><li data-v-1dfc7223><a href="https://router.vuejs.org" target="_blank" rel="noopener" data-v-1dfc7223>vue-router</a></li><li data-v-1dfc7223><a href="https://vuex.vuejs.org" target="_blank" rel="noopener" data-v-1dfc7223>vuex</a></li><li data-v-1dfc7223><a href="https://github.com/vuejs/vue-devtools#vue-devtools" target="_blank" rel="noopener" data-v-1dfc7223>vue-devtools</a></li><li data-v-1dfc7223><a href="https://vue-loader.vuejs.org" target="_blank" rel="noopener" data-v-1dfc7223>vue-loader</a></li><li data-v-1dfc7223><a href="https://github.com/vuejs/awesome-vue" target="_blank" rel="noopener" data-v-1dfc7223>awesome-vue</a></li></ul>',7);function ne(e,t,a,o,n,i){return Object(l["r"])(),Object(l["e"])("div",le,[Object(l["f"])("h1",null,Object(l["z"])(a.msg),1),oe])}Object(l["s"])();var ie={name:"HelloWorld",props:{msg:String}};a("c7ad");ie.render=ne,ie.__scopeId="data-v-1dfc7223";var se=ie,ce={name:"Home",components:{HelloWorld:se}};ce.render=ae;var re=ce,de=[{path:"/",name:"Home",component:re},{path:"/about",name:"About",component:function(){return a.e("about").then(a.bind(null,"f820"))}}],ue=Object(te["a"])({history:Object(te["b"])("/"),routes:de}),fe=ue,be=a("1da1"),he=(a("96cf"),{namespaced:!0,state:{publicAddress:"",token:null,user:null},mutations:{setToken:function(e,t){e.token=t.token,console.log(t)},logout:function(e){e.token=null,e.publicAddress=null},setAddress:function(e,t){e.publicAddress=t}},actions:{signIn:function(e){var t=this;return Object(be["a"])(regeneratorRuntime.mark((function a(){var l,o,n,i;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return e.commit,l=e.dispatch,a.next=3,ethereum.request({method:"eth_requestAccounts"});case 3:return o=a.sent,n=o[0],a.next=7,U.a.get("https://api.nftslab.io/api/v1/authenticate/"+n);case 7:i=a.sent,t.nonce=i.data.nonce,t.publicAddress=n,t.commit("auth/setAddress",n),console.log("nonce:"),console.log(t.nonce),ethereum.request({method:"personal_sign",params:[t.nonce,n]}).then((function(e){t.signature=e,console.log(t.signature),l("login"),t.login()})).catch((function(e){}));case 14:case"end":return a.stop()}}),a)})))()},login:function(e){var t=this;return Object(be["a"])(regeneratorRuntime.mark((function a(){var l;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return e.commit,l={signature:t.signature,nonce:t.nonce},console.log("signature:"),console.log(l),a.next=6,U.a.post("https://api.nftslab.io/api/v1/login/"+t.publicAddress,l).then((function(e){console.log("response:"),console.log(e.data),e.data.token.length>0&&t.commit({type:"auth/setToken",token:e.data.token})}));case 6:a.sent;case 7:case"end":return a.stop()}}),a)})))()}}}),pe=Object(H["a"])({state:{test:null},mutations:{},actions:{},modules:{auth:he}});Object(l["c"])(ee).use(pe).use(fe).mount("#wrapper")},"99a0":function(e,t,a){},c7ad:function(e,t,a){"use strict";a("256c")},d23b:function(e,t,a){"use strict";a("99a0")}});
//# sourceMappingURL=app.41025e55.js.map