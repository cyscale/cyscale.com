"use strict";(self.webpackChunkcyscale_gatsby=self.webpackChunkcyscale_gatsby||[]).push([[834],{44669:function(e,t,n){function a(){return a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},a.apply(this,arguments)}n.d(t,{Z:function(){return i}});var o=function(){var e="undefined"!=typeof window&&window._hsq?window._hsq:[],t=function(){e.push(["trackPageView"])};return{setContentType:function(t){e.push(["setContentType",t])},setPathPageView:function(n){e.push(["setPath",n]),t()},setTrackPageView:t,setIdentity:function(t,n){e.push(["identify",a({email:t},n)])},setTrackEvent:function(t){var n=t.eventId,a=t.value;e.push(["trackEvent",{id:n,value:a}])}}};function i(e){var t=e.pageName,n=o(),a=n.setIdentity,i=n.setContentType;if("undefined"!=typeof window){var r=localStorage.getItem("user-email");r&&a(r)}i("blog-detail"===t?"blog-post":"standard-page")}},97268:function(e,t,n){n.d(t,{Z:function(){return g}});var a=n(67294),o=function(){(0,a.useLayoutEffect)((function(){var e=window.getComputedStyle(document.body).overflow;return document.body.style.overflow="hidden",function(){return document.body.style.overflow=e}}),[])},i=n(77954),r=function(e,t,n){var o=(0,a.useCallback)((function(a){var o=a.key;"Escape"===o&&o===e&&(t.current.pause(),n(!1))}),[e,t,n]);(0,a.useEffect)((function(){return window.addEventListener("keydown",o),function(){window.removeEventListener("keydown",o)}}),[o])},l=n(6905),s=n(13103),c=function(){var e=(0,a.useState)(s.G6||(0,s.IN)()?(0,s.T8)():"undefined"!=typeof window&&window.screen.orientation.type||null),t=e[0],n=e[1];return(0,a.useEffect)((function(){var e=function(){return n(s.G6||(0,s.IN)()?(0,s.T8)():window.screen.orientation.type)};return window.addEventListener("orientationchange",e),function(){return window.removeEventListener("orientationchange",e)}}),[]),t},u=n(69931),d=n.n(u),m=n(87912);var f=function(e,t){(0,a.useEffect)((function(){var n=function(n){Object.keys(e.current||{}).length!==Object.keys(n.target||{}).length&&null!==e&&t(n)};return document.addEventListener("mousedown",n),document.addEventListener("touchstart",n),function(){document.removeEventListener("mousedown",n),document.removeEventListener("touchstart",n)}}),[e,t])},v=n(4382),g=function(e){var t=e.setModal,n=e.videoUrl,s=a.useRef(null),u=(0,a.useRef)(null),g=c(),p=(0,m.Z)("(max-height: 420px)");f(s,(function(){null!==s&&s.current.pause(),t(!1)})),o(),r("Escape",s,t);return(0,v.tZ)("div",{className:"w-screen h-screen fixed top-0 left-0 right-0 bottom-0 cursor-default object-contain",style:{zIndex:102}},(0,v.tZ)(l.ZP,null,(0,v.tZ)("div",{className:"flex justify-center items-center",style:{height:"100vh"}},(0,v.tZ)("div",{ref:u,className:d()("relative",{"max-w-6xl":!("landscape-primary"===g&&p),"max-w-2xl":"landscape-primary"===g&&p})},(0,v.tZ)("button",{type:"button",className:"top-6 right-6 inline-block absolute cursor-pointer z-40",onClick:function(){s.current.pause(),t(!1)},tabIndex:"0"},(0,v.tZ)("img",{src:i.Z,alt:"toggle menu",width:15,height:15})),(0,v.tZ)("video",{width:"auto",height:"auto",autoPlay:!0,controls:!0,tabIndex:"2",ref:s},(0,v.tZ)("source",{src:n,type:"video/mp4"}),"Your browser does not support the video tag.")))))}},33926:function(e,t,n){var a=n(67294),o=n(81164),i=n(82224),r=n(80414),l=n(26040),s=n(44669),c=(n(62554),n(62319)),u=n(38593),d=n(35533),m=n(97233),f=n(4382);t.Z=function(e){var t=e.children,n=e.title,v=e.description,g=e.pageName,p=e.location,Z=e.banner;(0,s.Z)({pageName:g});var h=(0,a.useState)(!1),w=h[0],y=h[1],x=(0,d.Z)();x.cookies,x.cookiesBanner,x.setCookiesBanner;return(0,f.tZ)(c.Z,null,(0,f.tZ)(l.Z.Provider,{value:{location:p}},(0,f.tZ)(o.Z,{title:n,description:v,pageName:g,location:p,banner:Z}),(0,f.tZ)(r.Z.Provider,{value:{sticker:w,setSticker:y}},(0,f.tZ)(m.Z,{pageName:g,location:p})),(0,f.tZ)("main",null,t),(0,f.tZ)(i.default,{pageUri:null==p?void 0:p.pathname,pageName:g}),(0,f.tZ)(u.Z,null)))}},80414:function(e,t,n){var a=n(67294).createContext({sticker:!1,setSticker:function(){}});t.Z=a},61422:function(e,t,n){n.d(t,{Z:function(){return c}});var a=n(13311),o=n.n(a),i=n(67294),r=n(2075),l=n(18994),s=n(4382);function c(e){var t=e.author,n=e.permalink,a=e.title,c=o()(r.Z,(function(e){return e.name===t}))||t;return(0,s.tZ)("div",null,"string"==typeof c?(0,s.tZ)("span",{className:"text-xs text-black  h-7 block py-1"},"By ",(0,s.tZ)("strong",null,c)):(0,s.tZ)("div",{className:"flex justify-between items-center"},(0,s.tZ)("div",{className:"flex items-center"},(0,s.tZ)("div",{className:"h-7 w-7 mr-2 rounded-full border-digital border"},i.cloneElement(c.photo,Object.assign({},c.photo.props,{className:"rounded-full overflow-hidden relative z-10",alt:"Author image"}))),(0,s.tZ)("span",{className:"text-xs text-black font-montserrat"},"By ",(0,s.tZ)("strong",null,c.name))),(0,s.tZ)(l.Z,{title:a,permalink:n})))}},98515:function(e,t,n){n.d(t,{Z:function(){return u}});var a=n(67294),o=n(71082),i=n(46488),r=n(61422),l=n(93723),s=n(4382);var c={name:"f2ladt",styles:"height:14rem"};function u(e){var t,n=e.authors,u=e.categories,d=e.date,m=e.permalink,f=e.title,v=e.description,g=e.featuredimage,p=e.duration,Z=a.useRef();return(0,s.tZ)("div",{role:"link",tabIndex:0,onClick:function(){return p>150?null:Z.current.click()},onKeyDown:function(e){return(13===e.code||32===e.code)&&Z.current.click()},className:"rounded-xl shadow-lg bg-white block overflow-hidden group h-full cursor-pointer",draggable:!1,style:{userSelect:"none",WebkitUserSelect:"none",MozUserSelect:"none",msUserSelect:"none"}},g&&(0,s.tZ)("div",{className:"relative overflow-hidden",style:{paddingBottom:"56.2%"}},(0,s.tZ)("div",{className:"absolute top-0 left-0"},(0,s.tZ)(l.G,{image:null==g||null===(t=g.childImageSharp)||void 0===t?void 0:t.gatsbyImageData,alt:f,imgStyle:{borderTopLeftRadius:"0.75rem",borderTopRightRadius:"0.75rem"},draggable:!1}))),(0,s.tZ)("div",{className:"p-5 flex flex-col",css:c},(0,s.tZ)(i.Z,{date:d,categories:u}),(0,s.tZ)(o.rU,{ref:Z,to:"/blog/"+m+"/",draggable:!1}),(0,s.tZ)("h2",{className:"text-lg my-4 leading-tight font-medium group-hover:text-primary transition-all h-16 font-montserrat"},f),(0,s.tZ)("div",{className:"mt-auto"},(0,s.tZ)(r.Z,{author:n,title:f,description:v,permalink:m}))))}},46488:function(e,t,n){n.d(t,{Z:function(){return r}});n(67294);var a=n(13103),o=n(65822),i=n(4382);function r(e){var t=e.categories,n=e.date;return(0,i.tZ)("div",{className:"flex justify-between items-start"},(0,i.tZ)("span",null,(0,i.tZ)(o.Z,{categories:t})),(0,i.tZ)("span",{className:"text-xs text-black text-opacity-70 pt-1 font-montserrat"},(0,a.p6)(n)))}},52467:function(e,t,n){var a=n(67294),o=n(71082),i=n(93723),r=n(10138),l=n(4382);var s={name:"h5d6e6",styles:"max-width:calc(100% - 0.25rem)"};t.Z=function(){var e=(0,o.K2)("2903505129"),t=[{image:e.csm.childImageSharp.gatsbyImageData,alt:"Cloud Storage Misconfigurations",text:"Cloud Storage Misconfigurations",link:"/whitepaper/cloud-storage-misconfigurations/"},{image:e.cc.childImageSharp.gatsbyImageData,alt:"Cloud Compliance in 2023 An In-depth Guide",text:"Cloud Compliance in 2023 An In-depth Guide",link:"/whitepaper/the-complete-guide-to-cloud-compliance/"},{image:e.ebook.childImageSharp.gatsbyImageData,alt:"Data Security in the Cloud A Comprehensive Guide",text:"Data Security in the Cloud A Comprehensive Guide",link:"/resources/data-security-e-book.pdf/"}];return(0,l.tZ)(a.Fragment,null,(0,l.tZ)("div",{className:"absolute mt-4 lg:mt-0 z-10",css:s},(0,l.tZ)("div",{className:"flex flex-nowrap gap-2 overflow-x-scroll scrollbar-hide z-10"},t.map((function(e,t){return(0,l.tZ)("div",{className:"py-4",key:t},(0,l.tZ)(o.rU,{to:e.link,className:"w-48 m-2 block"},(0,l.tZ)(i.G,{image:e.image,alt:e.alt}),(0,l.tZ)("p",{className:"mt-2 text-white font-hind text-base group-hover:underline"},e.text),(0,l.tZ)("div",{className:"flex mt-1"},(0,l.tZ)("img",{src:r.Z,alt:"",width:15}),(0,l.tZ)("p",{className:"font-montserrat text-xs text-white font-bold ml-2 group-hover:underline"},"Download"))))})))))}},59865:function(e,t,n){n(67294);var a=n(71082),o=n(93723),i=n(4382);var r={name:"1aslf6p",styles:"position:absolute;top:50%;left:50%;transform:translate(-50%, -50%)"},l={name:"1k70tir",styles:"max-width:calc(100% + 0.9rem)"};t.Z=function(e){var t=e.slides;return(0,i.tZ)("div",{className:"absolute mt-4 lg:mt-0 z-10",css:l},(0,i.tZ)("div",{className:"flex flex-nowrap gap-2 overflow-x-scroll scrollbar-hide z-10"},t.map((function(e,t){return(0,i.tZ)("div",{className:"py-4",key:t},"RequestDemo"!==e.text?(0,i.tZ)(a.rU,{to:e.link,className:"w-72 m-2 block"},(0,i.tZ)(o.G,{image:e.image,alt:e.alt,className:"rounded-md"}),(0,i.tZ)("p",{className:"mt-2 font-hind text-base group-hover:underline"},e.text)):(0,i.tZ)(a.rU,{to:e.link,className:"w-72 m-2 block relative"},(0,i.tZ)(o.G,{image:e.image,alt:e.alt,className:"rounded-md"}),(0,i.tZ)("p",{className:"font-hind text-base text-blue text-center w-72",css:r},e.cardText)))}))))}},56473:function(e,t,n){var a=n(87462),o=n(35161),i=n.n(o),r=(n(67294),n(71082)),l=n(98515),s=n(4382);var c={name:"1k70tir",styles:"max-width:calc(100% + 0.9rem)"};t.Z=function(e){var t,n=e.duration,o=(0,r.K2)("2064318328");return(0,s.tZ)("div",{className:"absolute mt-4 lg:mt-0 z-10",css:c},(0,s.tZ)("div",{className:"flex flex-nowrap gap-2 overflow-x-scroll scrollbar-hide z-10"},i()(null==o||null===(t=o.allMarkdownRemark)||void 0===t?void 0:t.edges,(function(e,t){var o=e.node;return(0,s.tZ)("div",{className:"py-4",key:t},(0,s.tZ)("div",{className:"w-72 lg:w-96 m-2 rounded-lg shadow-lg"},(0,s.tZ)(l.Z,(0,a.Z)({},o.frontmatter,{duration:n}))))}))))}},16003:function(e,t,n){n(67294);var a=n(4382);t.Z=function(e){var t=e.children,n=e.modal,o=e.setModal;return(0,a.tZ)("div",{onClick:function(){o(!n)},onKeyPress:function(){},tabIndex:"0",role:"button",className:"hover:underline"},t)}},33384:function(e,t,n){n(67294);var a=n(97268),o=n(93723),i=n(45073),r=n(4382);var l={name:"va9xmh",styles:"border:1px solid #f0f1f2"},s={name:"1k70tir",styles:"max-width:calc(100% + 0.9rem)"};t.Z=function(e){var t=e.slides;return(0,r.tZ)("div",{className:"absolute mt-4 lg:mt-0 z-10",css:s},(0,r.tZ)("div",{className:"flex flex-nowrap gap-2 overflow-x-scroll scrollbar-hide z-10"},t.map((function(e,n){return(0,r.tZ)("div",{className:"py-4",key:n},(0,r.tZ)("div",{onClick:function(){e.setModal(!t.modal)},onKeyPress:function(){},tabIndex:"0",role:"button",className:"hover:underline w-72"}," ",(0,r.tZ)(o.G,{image:e.image,alt:e.alt,className:"rounded-md",css:l}),(0,r.tZ)("p",{className:"font-hind font-medium text-lg mt-2"},e.text)),e.modal&&(0,r.tZ)("div",{className:"modal-overlay"}),(0,r.tZ)(i.Z,{in:e.modal,timeout:300,classNames:"video",unmountOnExit:!0},(0,r.tZ)(a.Z,{setModal:e.setModal,videoUrl:e.videoUrl})))}))))}},82790:function(e,t){t.Z="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGNsYXNzPSJoLTYgdy02IiBmaWxsPSJub25lIiB2aWV3Qm94PSIwIDAgMjQgMjQiIHN0cm9rZT0iIzAwMDAwMCI+CiAgPHBhdGggc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2Utd2lkdGg9IjIiIGQ9Ik05IDVsNyA3LTcgNyIgLz4KPC9zdmc+"},10138:function(e,t){t.Z="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGNsYXNzPSJoLTUgdy01IiB2aWV3Qm94PSIwIDAgMjAgMjAiIGZpbGw9IiNGRkZGRkYiPgogIDxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgZD0iTTEyLjI5MyA1LjI5M2ExIDEgMCAwMTEuNDE0IDBsNCA0YTEgMSAwIDAxMCAxLjQxNGwtNCA0YTEgMSAwIDAxLTEuNDE0LTEuNDE0TDE0LjU4NiAxMUgzYTEgMSAwIDExMC0yaDExLjU4NmwtMi4yOTMtMi4yOTNhMSAxIDAgMDEwLTEuNDE0eiIgY2xpcC1ydWxlPSJldmVub2RkIiAvPgo8L3N2Zz4="}}]);
//# sourceMappingURL=component---src-pages-resources-js-8a62cab10b515ca1a2b7.js.map