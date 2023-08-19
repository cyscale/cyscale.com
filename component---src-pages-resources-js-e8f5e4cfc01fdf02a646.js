"use strict";(self.webpackChunkcyscale_gatsby=self.webpackChunkcyscale_gatsby||[]).push([[834],{86301:function(e,t,a){function n(){return n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},n.apply(this,arguments)}a.d(t,{Z:function(){return o}});var l=function(){var e="undefined"!=typeof window&&window._hsq?window._hsq:[],t=function(){e.push(["trackPageView"])};return{setContentType:function(t){e.push(["setContentType",t])},setPathPageView:function(a){e.push(["setPath",a]),t()},setTrackPageView:t,setIdentity:function(t,a){e.push(["identify",n({email:t},a)])},setTrackEvent:function(t){var a=t.eventId,n=t.value;e.push(["trackEvent",{id:a,value:n}])}}};function o(e){let{pageName:t}=e;const{setIdentity:a,setContentType:n}=l();if("undefined"!=typeof window){const e=localStorage.getItem("user-email");e&&a(e)}n("blog-detail"===t?"blog-post":"standard-page")}},97268:function(e,t,a){a.d(t,{Z:function(){return p}});var n=a(67294);var l=()=>{(0,n.useLayoutEffect)((()=>{const e=window.getComputedStyle(document.body).overflow;return document.body.style.overflow="hidden",()=>document.body.style.overflow=e}),[])},o=a(8133);var s=(e,t,a)=>{const l=(0,n.useCallback)((n=>{let{key:l}=n;"Escape"===l&&l===e&&(t.current.pause(),a(!1))}),[e,t,a]);(0,n.useEffect)((()=>(window.addEventListener("keydown",l),()=>{window.removeEventListener("keydown",l)})),[l])},r=a(2816),i=a(13103);var c=()=>{const{0:e,1:t}=(0,n.useState)(i.G6||(0,i.IN)()?(0,i.T8)():"undefined"!=typeof window&&window.screen.orientation.type||null);return(0,n.useEffect)((()=>{const e=()=>t(i.G6||(0,i.IN)()?(0,i.T8)():window.screen.orientation.type);return window.addEventListener("orientationchange",e),()=>window.removeEventListener("orientationchange",e)}),[]),e},d=a(94184),u=a.n(d),m=a(87912);var g=function(e,t){(0,n.useEffect)((()=>{const a=a=>{Object.keys(e.current||{}).length!==Object.keys(a.target||{}).length&&null!==e&&t(a)};return document.addEventListener("mousedown",a),document.addEventListener("touchstart",a),()=>{document.removeEventListener("mousedown",a),document.removeEventListener("touchstart",a)}}),[e,t])},h=a(70917);var p=e=>{let{setModal:t,videoUrl:a}=e;const i=n.useRef(null),d=(0,n.useRef)(null),p=c(),v=(0,m.Z)("(max-height: 420px)");g(i,(()=>{null!==i&&i.current.pause(),t(!1)})),l(),s("Escape",i,t);return(0,h.tZ)("div",{className:"w-screen h-screen fixed top-0 left-0 right-0 bottom-0 cursor-default object-contain",style:{zIndex:102}},(0,h.tZ)(r.ZP,null,(0,h.tZ)("div",{className:"flex justify-center items-center",style:{height:"100vh"}},(0,h.tZ)("div",{ref:d,className:u()("relative",{"max-w-6xl":!("landscape-primary"===p&&v),"max-w-2xl":"landscape-primary"===p&&v})},(0,h.tZ)("button",{type:"button",className:"top-6 right-6 inline-block absolute cursor-pointer z-40",onClick:()=>{i.current.pause(),t(!1)},tabIndex:"0"},(0,h.tZ)("img",{src:o.Z,alt:"toggle menu",width:15,height:15})),(0,h.tZ)("video",{width:"auto",height:"auto",autoPlay:!0,controls:!0,tabIndex:"2",ref:i},(0,h.tZ)("source",{src:a,type:"video/mp4"}),"Your browser does not support the video tag.")))))}},33926:function(e,t,a){var n=a(67294),l=a(32687),o=a(67156),s=a(80414),r=a(26040),i=a(86301),c=a(17631),d=a(44410),u=a(52468),m=a(35533),g=a(95030),h=a(86363),p=a(70917);t.Z=e=>{let{children:t,title:a,description:v,pageName:Z,location:f,banner:w}=e;(0,i.Z)({pageName:Z});const{0:x,1:y}=(0,n.useState)(!1),{cookies:b,cookiesBanner:N,setCookiesBanner:k}=(0,m.Z)();return(0,p.tZ)(d.Z,null,(0,p.tZ)(r.Z.Provider,{value:{location:f}},(0,p.tZ)(l.Z,{title:a,description:v,pageName:Z,location:f,banner:w}),(0,p.tZ)(s.Z.Provider,{value:{sticker:x,setSticker:y}},(0,p.tZ)(h.Z,{pageName:Z,location:f})),(0,p.tZ)("main",null,t),(0,p.tZ)(o.default,{pageUri:null==f?void 0:f.pathname,pageName:Z}),!0!==Boolean(b[g.VB])&&(0,p.tZ)(c.Z,{cookiesBanner:N,setCookiesBanner:k,pageName:Z}),(0,p.tZ)(u.Z,null)))}},80414:function(e,t,a){const n=a(67294).createContext({sticker:!1,setSticker:()=>{}});t.Z=n},61422:function(e,t,a){a.d(t,{Z:function(){return c}});var n=a(13311),l=a.n(n),o=a(67294),s=a(2075),r=a(18994),i=a(70917);function c(e){let{author:t,permalink:a,title:n}=e;const c=l()(s.Z,(e=>{let{name:a}=e;return a===t}))||t;return(0,i.tZ)("div",null,"string"==typeof c?(0,i.tZ)("span",{className:"text-xs text-black  h-7 block py-1"},"By ",(0,i.tZ)("strong",null,c)):(0,i.tZ)("div",{className:"flex justify-between items-center"},(0,i.tZ)("div",{className:"flex items-center"},(0,i.tZ)("div",{className:"h-7 w-7 mr-2 rounded-full border-digital border"},o.cloneElement(c.photo,{...c.photo.props,className:"rounded-full overflow-hidden relative z-10",alt:"Author image"})),(0,i.tZ)("span",{className:"text-xs text-black font-montserrat"},"By ",(0,i.tZ)("strong",null,c.name))),(0,i.tZ)(r.Z,{title:n,permalink:a})))}},98515:function(e,t,a){a.d(t,{Z:function(){return d}});var n=a(67294),l=a(14160),o=a(46488),s=a(61422),r=a(38032),i=a(70917);var c={name:"f2ladt",styles:"height:14rem"};function d(e){var t;let{authors:a,categories:d,date:u,permalink:m,title:g,description:h,featuredimage:p,duration:v}=e;const Z=n.useRef();return(0,i.tZ)("div",{role:"link",tabIndex:0,onClick:()=>v>150?null:Z.current.click(),onKeyDown:e=>(13===e.code||32===e.code)&&Z.current.click(),className:"rounded-xl shadow-lg bg-white block overflow-hidden group h-full cursor-pointer",draggable:!1,style:{userSelect:"none",WebkitUserSelect:"none",MozUserSelect:"none",msUserSelect:"none"}},p&&(0,i.tZ)("div",{className:"relative overflow-hidden",style:{paddingBottom:"56.2%"}},(0,i.tZ)("div",{className:"absolute top-0 left-0"},(0,i.tZ)(r.G,{image:null==p||null===(t=p.childImageSharp)||void 0===t?void 0:t.gatsbyImageData,alt:g,imgStyle:{borderTopLeftRadius:"0.75rem",borderTopRightRadius:"0.75rem"},draggable:!1}))),(0,i.tZ)("div",{className:"p-5 flex flex-col",css:c},(0,i.tZ)(o.Z,{date:u,categories:d}),(0,i.tZ)(l.rU,{ref:Z,to:"/blog/"+m+"/",draggable:!1}),(0,i.tZ)("h2",{className:"text-lg my-4 leading-tight font-medium group-hover:text-primary transition-all h-16 font-montserrat"},g),(0,i.tZ)("div",{className:"mt-auto"},(0,i.tZ)(s.Z,{author:a,title:g,description:h,permalink:m}))))}},46488:function(e,t,a){a.d(t,{Z:function(){return s}});a(67294);var n=a(13103),l=a(65822),o=a(70917);function s(e){let{categories:t,date:a}=e;return(0,o.tZ)("div",{className:"flex justify-between items-start"},(0,o.tZ)("span",null,(0,o.tZ)(l.Z,{categories:t})),(0,o.tZ)("span",{className:"text-xs text-black text-opacity-70 pt-1 font-montserrat"},(0,n.p6)(a)))}},52467:function(e,t,a){var n=a(67294),l=a(14160),o=a(38032),s=a(89919),r=a(70917);var i={name:"h5d6e6",styles:"max-width:calc(100% - 0.25rem)"};t.Z=()=>{const e=(0,l.K2)("2903505129"),t=[{image:e.csm.childImageSharp.gatsbyImageData,alt:"Cloud Storage Misconfigurations",text:"Cloud Storage Misconfigurations",link:"/whitepaper/cloud-storage-misconfigurations/"},{image:e.cc.childImageSharp.gatsbyImageData,alt:"Cloud Compliance in 2023 An In-depth Guide",text:"Cloud Compliance in 2023 An In-depth Guide",link:"/whitepaper/the-complete-guide-to-cloud-compliance/"},{image:e.ebook.childImageSharp.gatsbyImageData,alt:"Data Security in the Cloud A Comprehensive Guide",text:"Data Security in the Cloud A Comprehensive Guide",link:"https://cta-service-cms2.hubspot.com/web-interactives/public/v1/track/redirect?encryptedPayload=AVxigLKcdzdjs3ubIU5XI1ozY9QJ9YF2yD%2BsoZJAk2vNcR0qYhDoYVmmHNu5VA5Avb9E7Sr%2BRbNjqakYxt0DJ%2B1qbaeIfqdLwOEW0Tl%2FYSlNPTCQfjQ%3D&webInteractiveContentId=127064433808&portalId=5413427"}];return(0,r.tZ)(n.Fragment,null,(0,r.tZ)("div",{className:"absolute mt-4 lg:mt-0 z-10",css:i},(0,r.tZ)("div",{className:"flex flex-nowrap gap-2 overflow-x-scroll scrollbar-hide z-10"},t.map(((e,t)=>"Data Security in the Cloud A Comprehensive Guide"===e.text?(0,r.tZ)("div",{className:"py-4",key:t},(0,r.tZ)("a",{href:e.link,className:"w-48 m-2 block"},(0,r.tZ)(o.G,{image:e.image,alt:e.alt}),(0,r.tZ)("p",{className:"mt-2 text-white font-hind text-base group-hover:underline"},e.text),(0,r.tZ)("div",{className:"flex mt-1"},(0,r.tZ)("img",{src:s.Z,alt:"",width:15}),(0,r.tZ)("p",{className:"font-montserrat text-xs text-white font-bold ml-2 group-hover:underline"},"Download")))):(0,r.tZ)("div",{className:"py-4",key:t},(0,r.tZ)(l.rU,{to:e.link,className:"w-48 m-2 block"},(0,r.tZ)(o.G,{image:e.image,alt:e.alt}),(0,r.tZ)("p",{className:"mt-2 text-white font-hind text-base group-hover:underline"},e.text),(0,r.tZ)("div",{className:"flex mt-1"},(0,r.tZ)("img",{src:s.Z,alt:"",width:15}),(0,r.tZ)("p",{className:"font-montserrat text-xs text-white font-bold ml-2 group-hover:underline"},"Download")))))))))}},46342:function(e,t,a){var n=a(67294),l=a(14160),o=a(38032),s=a(89919),r=a(70917);var i={name:"h5d6e6",styles:"max-width:calc(100% - 0.25rem)"};t.Z=()=>{const e=(0,l.K2)("4104958613"),t=[{image:e.awsCheatSheet.childImageSharp.gatsbyImageData,alt:"AWS Cloud Security Cheat Sheet",text:(0,r.tZ)(n.Fragment,null,"AWS Cloud Security",(0,r.tZ)("br",null)," Cheat Sheet"),link:"/resources/aws-cloud-security-cheat-sheet.pdf"},{image:e.azureCheatSheet.childImageSharp.gatsbyImageData,alt:"Azure Cloud Security Cheat Sheet",text:(0,r.tZ)(n.Fragment,null,"Azure Cloud Security",(0,r.tZ)("br",null)," Cheat Sheet"),link:"/resources/azure-cloud-security-cheat-sheet.pdf"},{image:e.googleCheatSheet.childImageSharp.gatsbyImageData,alt:"Google Cloud Security Cheat Sheet",text:(0,r.tZ)(n.Fragment,null,"Google Cloud Security",(0,r.tZ)("br",null)," Cheat Sheet"),link:"/resources/google-cloud-security-cheat-sheet.pdf"}];return(0,r.tZ)(n.Fragment,null,(0,r.tZ)("div",{className:"absolute mt-4 lg:mt-0 z-10",css:i},(0,r.tZ)("div",{className:"flex flex-nowrap gap-2 overflow-x-scroll scrollbar-hide z-10"},t.map(((e,t)=>(0,r.tZ)("div",{className:"py-4",key:t},(0,r.tZ)(l.rU,{to:e.link,className:"w-48 m-2 block"},(0,r.tZ)(o.G,{image:e.image,alt:e.alt,className:"rounded"}),(0,r.tZ)("p",{className:"mt-2 text-white font-hind text-base group-hover:underline"},e.text),(0,r.tZ)("div",{className:"flex mt-1"},(0,r.tZ)("img",{src:s.Z,alt:"",width:15}),(0,r.tZ)("p",{className:"font-montserrat text-xs text-white font-bold ml-2 group-hover:underline"},"Download")))))))))}},59865:function(e,t,a){a(67294);var n=a(14160),l=a(38032),o=a(70917);var s={name:"1aslf6p",styles:"position:absolute;top:50%;left:50%;transform:translate(-50%, -50%)"},r={name:"1k70tir",styles:"max-width:calc(100% + 0.9rem)"};t.Z=e=>{let{slides:t}=e;return(0,o.tZ)("div",{className:"absolute mt-4 lg:mt-0 z-10",css:r},(0,o.tZ)("div",{className:"flex flex-nowrap gap-2 overflow-x-scroll scrollbar-hide z-10"},t.map(((e,t)=>(0,o.tZ)("div",{className:"py-4",key:t},"RequestDemo"!==e.text?(0,o.tZ)(n.rU,{to:e.link,className:"w-72 m-2 block"},(0,o.tZ)(l.G,{image:e.image,alt:e.alt,className:"rounded-md"}),(0,o.tZ)("p",{className:"mt-2 font-hind text-base group-hover:underline"},e.text)):(0,o.tZ)(n.rU,{to:e.link,className:"w-72 m-2 block relative"},(0,o.tZ)(l.G,{image:e.image,alt:e.alt,className:"rounded-md"}),(0,o.tZ)("p",{className:"font-hind text-base text-blue text-center w-72",css:s},e.cardText)))))))}},56473:function(e,t,a){var n=a(87462),l=a(35161),o=a.n(l),s=(a(67294),a(14160)),r=a(98515),i=a(70917);var c={name:"1k70tir",styles:"max-width:calc(100% + 0.9rem)"};t.Z=e=>{var t;let{duration:a}=e;const l=(0,s.K2)("2064318328");return(0,i.tZ)("div",{className:"absolute mt-4 lg:mt-0 z-10",css:c},(0,i.tZ)("div",{className:"flex flex-nowrap gap-2 overflow-x-scroll scrollbar-hide z-10"},o()(null==l||null===(t=l.allMarkdownRemark)||void 0===t?void 0:t.edges,((e,t)=>{let{node:l}=e;return(0,i.tZ)("div",{className:"py-4",key:t},(0,i.tZ)("div",{className:"w-72 lg:w-96 m-2 rounded-lg shadow-lg"},(0,i.tZ)(r.Z,(0,n.Z)({},l.frontmatter,{duration:a}))))}))))}},16003:function(e,t,a){a(67294);var n=a(70917);t.Z=e=>{let{children:t,modal:a,setModal:l}=e;return(0,n.tZ)("div",{onClick:()=>{l(!a)},onKeyPress:()=>{},tabIndex:"0",role:"button",className:"hover:underline"},t)}},33384:function(e,t,a){a(67294);var n=a(97268),l=a(38032),o=a(86759),s=a(70917);const r={name:"va9xmh",styles:"border:1px solid #f0f1f2"};var i={name:"1k70tir",styles:"max-width:calc(100% + 0.9rem)"};t.Z=e=>{let{slides:t}=e;return(0,s.tZ)("div",{className:"absolute mt-4 lg:mt-0 z-10",css:i},(0,s.tZ)("div",{className:"flex flex-nowrap gap-2 overflow-x-scroll scrollbar-hide z-10"},t.map(((e,a)=>(0,s.tZ)("div",{className:"py-4",key:a},(0,s.tZ)("div",{onClick:()=>{e.setModal(!t.modal)},onKeyPress:()=>{},tabIndex:"0",role:"button",className:"hover:underline w-72"}," ",(0,s.tZ)(l.G,{image:e.image,alt:e.alt,className:"rounded-md",css:r}),(0,s.tZ)("p",{className:"font-hind font-medium text-lg mt-2"},e.text)),e.modal&&(0,s.tZ)("div",{className:"modal-overlay"}),(0,s.tZ)(o.Z,{in:e.modal,timeout:300,classNames:"video",unmountOnExit:!0},(0,s.tZ)(n.Z,{setModal:e.setModal,videoUrl:e.videoUrl})))))))}},1336:function(e,t){t.Z="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGNsYXNzPSJoLTYgdy02IiBmaWxsPSJub25lIiB2aWV3Qm94PSIwIDAgMjQgMjQiIHN0cm9rZT0iIzAwMDAwMCI+CiAgPHBhdGggc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2Utd2lkdGg9IjIiIGQ9Ik05IDVsNyA3LTcgNyIgLz4KPC9zdmc+"},89919:function(e,t){t.Z="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGNsYXNzPSJoLTUgdy01IiB2aWV3Qm94PSIwIDAgMjAgMjAiIGZpbGw9IiNGRkZGRkYiPgogIDxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgZD0iTTEyLjI5MyA1LjI5M2ExIDEgMCAwMTEuNDE0IDBsNCA0YTEgMSAwIDAxMCAxLjQxNGwtNCA0YTEgMSAwIDAxLTEuNDE0LTEuNDE0TDE0LjU4NiAxMUgzYTEgMSAwIDExMC0yaDExLjU4NmwtMi4yOTMtMi4yOTNhMSAxIDAgMDEwLTEuNDE0eiIgY2xpcC1ydWxlPSJldmVub2RkIiAvPgo8L3N2Zz4="}}]);
//# sourceMappingURL=component---src-pages-resources-js-e8f5e4cfc01fdf02a646.js.map