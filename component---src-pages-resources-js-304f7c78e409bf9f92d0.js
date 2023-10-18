"use strict";(self.webpackChunkcyscale_gatsby=self.webpackChunkcyscale_gatsby||[]).push([[834,8367],{86301:function(e,t,a){function n(){return n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},n.apply(this,arguments)}a.d(t,{Z:function(){return l}});var o=function(){var e="undefined"!=typeof window&&window._hsq?window._hsq:[],t=function(){e.push(["trackPageView"])};return{setContentType:function(t){e.push(["setContentType",t])},setPathPageView:function(a){e.push(["setPath",a]),t()},setTrackPageView:t,setIdentity:function(t,a){e.push(["identify",n({email:t},a)])},setTrackEvent:function(t){var a=t.eventId,n=t.value;e.push(["trackEvent",{id:a,value:n}])}}};function l(e){let{pageName:t}=e;const{setIdentity:a,setContentType:n}=o();if("undefined"!=typeof window){const e=localStorage.getItem("user-email");e&&a(e)}n("blog-detail"===t?"blog-post":"standard-page")}},64366:function(e,t,a){a.d(t,{Z:function(){return p}});var n=a(67294),o=a(56788),l=a(8133);var r=(e,t,a)=>{const o=(0,n.useCallback)((n=>{let{key:o}=n;"Escape"===o&&o===e&&(t.current.pause(),a(!1))}),[e,t,a]);(0,n.useEffect)((()=>(window.addEventListener("keydown",o),()=>{window.removeEventListener("keydown",o)})),[o])},s=a(2816),i=a(13103);var c=()=>{const{0:e,1:t}=(0,n.useState)(i.G6||(0,i.IN)()?(0,i.T8)():"undefined"!=typeof window&&window.screen.orientation.type||null);return(0,n.useEffect)((()=>{const e=()=>t(i.G6||(0,i.IN)()?(0,i.T8)():window.screen.orientation.type);return window.addEventListener("orientationchange",e),()=>window.removeEventListener("orientationchange",e)}),[]),e},d=a(94184),u=a.n(d),m=a(87912);var g=function(e,t){(0,n.useEffect)((()=>{const a=a=>{Object.keys(e.current||{}).length!==Object.keys(a.target||{}).length&&null!==e&&t(a)};return document.addEventListener("mousedown",a),document.addEventListener("touchstart",a),()=>{document.removeEventListener("mousedown",a),document.removeEventListener("touchstart",a)}}),[e,t])},h=a(70917);var p=e=>{let{setModal:t,videoUrl:a}=e;const i=n.useRef(null),d=(0,n.useRef)(null),p=c(),Z=(0,m.Z)("(max-height: 420px)");g(i,(()=>{null!==i&&i.current.pause(),t(!1)})),(0,o.Z)(),r("Escape",i,t);return(0,h.tZ)("div",{className:"w-screen h-screen fixed top-0 left-0 right-0 bottom-0 cursor-default object-contain",style:{zIndex:102}},(0,h.tZ)(s.ZP,null,(0,h.tZ)("div",{className:"flex justify-center items-center",style:{height:"100vh"}},(0,h.tZ)("div",{ref:d,className:u()("relative",{"max-w-6xl":!("landscape-primary"===p&&Z),"max-w-2xl":"landscape-primary"===p&&Z})},(0,h.tZ)("button",{type:"button",className:"top-6 right-6 inline-block absolute cursor-pointer z-40",onClick:()=>{i.current.pause(),t(!1)},tabIndex:"0"},(0,h.tZ)("img",{src:l.Z,alt:"toggle menu",width:15,height:15})),(0,h.tZ)("video",{width:"auto",height:"auto",autoPlay:!0,controls:!0,tabIndex:"2",ref:i},(0,h.tZ)("source",{src:a,type:"video/mp4"}),"Your browser does not support the video tag.")))))}},33926:function(e,t,a){var n=a(67294),o=a(56477),l=a(46299),r=a(80414),s=a(26040),i=a(86301),c=a(17631),d=a(44410),u=a(52468),m=a(35533),g=a(95030),h=a(86363),p=a(64593),Z=a(70917);t.Z=e=>{let{children:t,title:a,description:v,pageName:f,location:w,banner:x,noIndex:y}=e;(0,i.Z)({pageName:f});const{0:b,1:N}=(0,n.useState)(!1),{cookies:k,cookiesBanner:I,setCookiesBanner:C}=(0,m.Z)();return(0,Z.tZ)(d.Z,null,(0,Z.tZ)(s.Z.Provider,{value:{location:w}},(0,Z.tZ)(o.Z,{title:a,description:v,pageName:f,location:w,banner:x}),(0,Z.tZ)(p.q,null,y&&(0,Z.tZ)("meta",{name:"robots",content:"noindex"}),y&&(0,Z.tZ)("meta",{name:"robots",content:"nofollow"})),(0,Z.tZ)(r.Z.Provider,{value:{sticker:b,setSticker:N}},(0,Z.tZ)(h.Z,{pageName:f,location:w})),(0,Z.tZ)("main",null,t),(0,Z.tZ)(l.default,{pageUri:null==w?void 0:w.pathname,pageName:f}),!0!==Boolean(k[g.VB])&&(0,Z.tZ)(c.Z,{cookiesBanner:I,setCookiesBanner:C,pageName:f}),(0,Z.tZ)(u.Z,null)))}},80414:function(e,t,a){const n=a(67294).createContext({sticker:!1,setSticker:()=>{}});t.Z=n},61422:function(e,t,a){a.d(t,{Z:function(){return c}});var n=a(13311),o=a.n(n),l=a(67294),r=a(2075),s=a(18994),i=a(70917);function c(e){let{author:t,permalink:a,title:n}=e;const c=o()(r.Z,(e=>{let{name:a}=e;return a===t}))||t;return(0,i.tZ)("div",null,"string"==typeof c?(0,i.tZ)("span",{className:"text-xs text-black  h-7 block py-1"},"By ",(0,i.tZ)("strong",null,c)):(0,i.tZ)("div",{className:"flex justify-between items-center"},(0,i.tZ)("div",{className:"flex items-center"},(0,i.tZ)("div",{className:"h-7 w-7 mr-2 rounded-full border-digital border"},l.cloneElement(c.photo,{...c.photo.props,className:"rounded-full overflow-hidden relative z-10",alt:"Author image"})),(0,i.tZ)("span",{className:"text-xs text-black font-montserrat"},"By ",(0,i.tZ)("strong",null,c.name))),(0,i.tZ)(s.Z,{title:n,permalink:a})))}},98515:function(e,t,a){a.d(t,{Z:function(){return d}});var n=a(67294),o=a(14160),l=a(46488),r=a(61422),s=a(38032),i=a(70917);var c={name:"f2ladt",styles:"height:14rem"};function d(e){var t;let{authors:a,categories:d,date:u,permalink:m,title:g,description:h,featuredimage:p,duration:Z}=e;const v=n.useRef();return(0,i.tZ)("div",{role:"link",tabIndex:0,onClick:()=>Z>150?null:v.current.click(),onKeyDown:e=>(13===e.code||32===e.code)&&v.current.click(),className:"rounded-xl shadow-lg bg-white block overflow-hidden group h-full cursor-pointer",draggable:!1,style:{userSelect:"none",WebkitUserSelect:"none",MozUserSelect:"none",msUserSelect:"none"}},p&&(0,i.tZ)("div",{className:"relative overflow-hidden",style:{paddingBottom:"56.2%"}},(0,i.tZ)("div",{className:"absolute top-0 left-0"},(0,i.tZ)(s.G,{image:null==p||null===(t=p.childImageSharp)||void 0===t?void 0:t.gatsbyImageData,alt:g,imgStyle:{borderTopLeftRadius:"0.75rem",borderTopRightRadius:"0.75rem"},draggable:!1}))),(0,i.tZ)("div",{className:"p-5 flex flex-col",css:c},(0,i.tZ)(l.Z,{date:u,categories:d}),(0,i.tZ)(o.rU,{ref:v,to:"/blog/"+m+"/",draggable:!1}),(0,i.tZ)("h2",{className:"text-lg my-4 leading-tight font-medium group-hover:text-primary transition-all h-16 font-montserrat"},g),(0,i.tZ)("div",{className:"mt-auto"},(0,i.tZ)(r.Z,{author:a,title:g,description:h,permalink:m}))))}},46488:function(e,t,a){a.d(t,{Z:function(){return r}});a(67294);var n=a(13103),o=a(65822),l=a(70917);function r(e){let{categories:t,date:a}=e;return(0,l.tZ)("div",{className:"flex justify-between items-start"},(0,l.tZ)("span",null,(0,l.tZ)(o.Z,{categories:t})),(0,l.tZ)("span",{className:"text-xs text-black text-opacity-70 pt-1 font-montserrat"},(0,n.p6)(a)))}},52467:function(e,t,a){var n=a(67294),o=a(14160),l=a(38032),r=a(89919),s=a(70917);var i={name:"h5d6e6",styles:"max-width:calc(100% - 0.25rem)"};t.Z=()=>{const e=(0,o.K2)("2903505129"),t=[{image:e.csm.childImageSharp.gatsbyImageData,alt:"Cloud Storage Misconfigurations",text:"Cloud Storage Misconfigurations",link:"/whitepaper/cloud-storage-misconfigurations/"},{image:e.cc.childImageSharp.gatsbyImageData,alt:"Cloud Compliance in 2023 An In-depth Guide",text:"Cloud Compliance in 2023 An In-depth Guide",link:"/whitepaper/the-complete-guide-to-cloud-compliance/"},{image:e.ebook.childImageSharp.gatsbyImageData,alt:"Data Security in the Cloud A Comprehensive Guide",text:"Data Security in the Cloud A Comprehensive Guide",link:"https://cta-service-cms2.hubspot.com/web-interactives/public/v1/track/redirect?encryptedPayload=AVxigLKcdzdjs3ubIU5XI1ozY9QJ9YF2yD%2BsoZJAk2vNcR0qYhDoYVmmHNu5VA5Avb9E7Sr%2BRbNjqakYxt0DJ%2B1qbaeIfqdLwOEW0Tl%2FYSlNPTCQfjQ%3D&webInteractiveContentId=127064433808&portalId=5413427"}];return(0,s.tZ)(n.Fragment,null,(0,s.tZ)("div",{className:"absolute mt-4 lg:mt-0 z-10",css:i},(0,s.tZ)("div",{className:"flex flex-nowrap gap-2 overflow-x-scroll scrollbar-hide z-10"},t.map(((e,t)=>"Data Security in the Cloud A Comprehensive Guide"===e.text?(0,s.tZ)("div",{className:"py-4",key:t},(0,s.tZ)("a",{href:e.link,className:"w-48 m-2 block"},(0,s.tZ)(l.G,{image:e.image,alt:e.alt}),(0,s.tZ)("p",{className:"mt-2 text-white font-hind text-base group-hover:underline"},e.text),(0,s.tZ)("div",{className:"flex mt-1"},(0,s.tZ)("img",{src:r.Z,alt:"",width:15}),(0,s.tZ)("p",{className:"font-montserrat text-xs text-white font-bold ml-2 group-hover:underline"},"Download")))):(0,s.tZ)("div",{className:"py-4",key:t},(0,s.tZ)(o.rU,{to:e.link,className:"w-48 m-2 block"},(0,s.tZ)(l.G,{image:e.image,alt:e.alt}),(0,s.tZ)("p",{className:"mt-2 text-white font-hind text-base group-hover:underline"},e.text),(0,s.tZ)("div",{className:"flex mt-1"},(0,s.tZ)("img",{src:r.Z,alt:"",width:15}),(0,s.tZ)("p",{className:"font-montserrat text-xs text-white font-bold ml-2 group-hover:underline"},"Download")))))))))}},46342:function(e,t,a){var n=a(67294),o=a(14160),l=a(38032),r=a(89919),s=a(70917);var i={name:"h5d6e6",styles:"max-width:calc(100% - 0.25rem)"};t.Z=()=>{const e=(0,o.K2)("4104958613"),t=[{image:e.awsCheatSheet.childImageSharp.gatsbyImageData,alt:"AWS Cloud Security Cheat Sheet",text:(0,s.tZ)(n.Fragment,null,"AWS Cloud Security",(0,s.tZ)("br",null)," Cheat Sheet"),link:"/resources/aws-cloud-security-cheat-sheet.pdf"},{image:e.azureCheatSheet.childImageSharp.gatsbyImageData,alt:"Azure Cloud Security Cheat Sheet",text:(0,s.tZ)(n.Fragment,null,"Azure Cloud Security",(0,s.tZ)("br",null)," Cheat Sheet"),link:"/resources/azure-cloud-security-cheat-sheet.pdf"},{image:e.googleCheatSheet.childImageSharp.gatsbyImageData,alt:"Google Cloud Security Cheat Sheet",text:(0,s.tZ)(n.Fragment,null,"Google Cloud Security",(0,s.tZ)("br",null)," Cheat Sheet"),link:"/resources/google-cloud-security-cheat-sheet.pdf"}];return(0,s.tZ)(n.Fragment,null,(0,s.tZ)("div",{className:"absolute mt-4 lg:mt-0 z-10",css:i},(0,s.tZ)("div",{className:"flex flex-nowrap gap-2 overflow-x-scroll scrollbar-hide z-10"},t.map(((e,t)=>(0,s.tZ)("div",{className:"py-4",key:t},(0,s.tZ)(o.rU,{to:e.link,className:"w-48 m-2 block"},(0,s.tZ)(l.G,{image:e.image,alt:e.alt,className:"rounded"}),(0,s.tZ)("p",{className:"mt-2 text-white font-hind text-base group-hover:underline"},e.text),(0,s.tZ)("div",{className:"flex mt-1"},(0,s.tZ)("img",{src:r.Z,alt:"",width:15}),(0,s.tZ)("p",{className:"font-montserrat text-xs text-white font-bold ml-2 group-hover:underline"},"Download")))))))))}},59865:function(e,t,a){a(67294);var n=a(14160),o=a(38032),l=a(70917);var r={name:"1aslf6p",styles:"position:absolute;top:50%;left:50%;transform:translate(-50%, -50%)"},s={name:"1k70tir",styles:"max-width:calc(100% + 0.9rem)"};t.Z=e=>{let{slides:t}=e;return(0,l.tZ)("div",{className:"absolute mt-4 lg:mt-0 z-10",css:s},(0,l.tZ)("div",{className:"flex flex-nowrap gap-2 overflow-x-scroll scrollbar-hide z-10"},t.map(((e,t)=>{const a="RequestDemo"===e.text,s="w-72 m-2 block "+(a?"relative":""),i="font-hind text-base "+(a?"text-blue text-center w-72":"group-hover:underline mt-2"),c=a?r:null;return(0,l.tZ)("div",{className:"py-4",key:t},(0,l.tZ)(n.rU,{to:e.link,className:s},(0,l.tZ)(o.G,{image:e.image,alt:e.alt,className:"rounded-md"}),(0,l.tZ)("p",{className:i,css:c},a?e.cardText:e.text)))}))))}},56473:function(e,t,a){var n=a(87462),o=a(35161),l=a.n(o),r=(a(67294),a(14160)),s=a(98515),i=a(70917);var c={name:"1k70tir",styles:"max-width:calc(100% + 0.9rem)"};t.Z=e=>{var t;let{duration:a}=e;const o=(0,r.K2)("2064318328");return(0,i.tZ)("div",{className:"absolute mt-4 lg:mt-0 z-10",css:c},(0,i.tZ)("div",{className:"flex flex-nowrap gap-2 overflow-x-scroll scrollbar-hide z-10"},l()(null==o||null===(t=o.allMarkdownRemark)||void 0===t?void 0:t.edges,((e,t)=>{let{node:o}=e;return(0,i.tZ)("div",{className:"py-4",key:t},(0,i.tZ)("div",{className:"w-72 lg:w-96 m-2 rounded-lg shadow-lg"},(0,i.tZ)(s.Z,(0,n.Z)({},o.frontmatter,{duration:a}))))}))))}},16003:function(e,t,a){a(67294);var n=a(70917);t.Z=e=>{let{children:t,modal:a,setModal:o}=e;return(0,n.tZ)("div",{onClick:()=>{o(!a)},onKeyPress:()=>{},tabIndex:"0",role:"button",className:"hover:underline"},t)}},33384:function(e,t,a){a(67294);var n=a(64366),o=a(38032),l=a(86759),r=a(70917);const s={name:"va9xmh",styles:"border:1px solid #f0f1f2"};var i={name:"1k70tir",styles:"max-width:calc(100% + 0.9rem)"};t.Z=e=>{let{slides:t}=e;return(0,r.tZ)("div",{className:"absolute mt-4 lg:mt-0 z-10",css:i},(0,r.tZ)("div",{className:"flex flex-nowrap gap-2 overflow-x-scroll scrollbar-hide z-10"},t.map(((e,a)=>(0,r.tZ)("div",{className:"py-4",key:a},(0,r.tZ)("div",{onClick:()=>{e.setModal(!t.modal)},onKeyDown:()=>{},tabIndex:"0",role:"button",className:"hover:underline w-72"}," ",(0,r.tZ)(o.G,{image:e.image,alt:e.alt,className:"rounded-md",css:s}),(0,r.tZ)("p",{className:"font-hind font-medium text-lg mt-2"},e.text)),e.modal&&(0,r.tZ)("div",{className:"modal-overlay"}),(0,r.tZ)(l.Z,{in:e.modal,timeout:300,classNames:"video",unmountOnExit:!0},(0,r.tZ)(n.Z,{setModal:e.setModal,videoUrl:e.videoUrl})))))))}},56788:function(e,t,a){var n=a(67294);t.Z=()=>{(0,n.useLayoutEffect)((()=>{const e=window.getComputedStyle(document.body).overflow;return document.body.style.overflow="hidden",()=>document.body.style.overflow=e}),[])}},1336:function(e,t){t.Z="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGNsYXNzPSJoLTYgdy02IiBmaWxsPSJub25lIiB2aWV3Qm94PSIwIDAgMjQgMjQiIHN0cm9rZT0iIzAwMDAwMCI+CiAgPHBhdGggc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2Utd2lkdGg9IjIiIGQ9Ik05IDVsNyA3LTcgNyIgLz4KPC9zdmc+"},89919:function(e,t){t.Z="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGNsYXNzPSJoLTUgdy01IiB2aWV3Qm94PSIwIDAgMjAgMjAiIGZpbGw9IiNGRkZGRkYiPgogIDxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgZD0iTTEyLjI5MyA1LjI5M2ExIDEgMCAwMTEuNDE0IDBsNCA0YTEgMSAwIDAxMCAxLjQxNGwtNCA0YTEgMSAwIDAxLTEuNDE0LTEuNDE0TDE0LjU4NiAxMUgzYTEgMSAwIDExMC0yaDExLjU4NmwtMi4yOTMtMi4yOTNhMSAxIDAgMDEwLTEuNDE0eiIgY2xpcC1ydWxlPSJldmVub2RkIiAvPgo8L3N2Zz4="}}]);
//# sourceMappingURL=component---src-pages-resources-js-304f7c78e409bf9f92d0.js.map