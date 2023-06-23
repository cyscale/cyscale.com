"use strict";(self.webpackChunkcyscale_gatsby=self.webpackChunkcyscale_gatsby||[]).push([[834],{44669:function(e,t,n){function a(){return a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},a.apply(this,arguments)}n.d(t,{Z:function(){return i}});var o=function(){var e="undefined"!=typeof window&&window._hsq?window._hsq:[],t=function(){e.push(["trackPageView"])};return{setContentType:function(t){e.push(["setContentType",t])},setPathPageView:function(n){e.push(["setPath",n]),t()},setTrackPageView:t,setIdentity:function(t,n){e.push(["identify",a({email:t},n)])},setTrackEvent:function(t){var n=t.eventId,a=t.value;e.push(["trackEvent",{id:n,value:a}])}}};function i(e){var t=e.pageName,n=o(),a=n.setIdentity,i=n.setContentType;if("undefined"!=typeof window){var r=localStorage.getItem("user-email");r&&a(r)}i("blog-detail"===t?"blog-post":"standard-page")}},97268:function(e,t,n){n.d(t,{Z:function(){return v}});var a=n(67294),o=function(){(0,a.useLayoutEffect)((function(){var e=window.getComputedStyle(document.body).overflow;return document.body.style.overflow="hidden",function(){return document.body.style.overflow=e}}),[])},i=n(77954),r=function(e,t,n){var o=(0,a.useCallback)((function(a){var o=a.key;"Escape"===o&&o===e&&(t.current.pause(),n(!1))}),[e,t,n]);(0,a.useEffect)((function(){return window.addEventListener("keydown",o),function(){window.removeEventListener("keydown",o)}}),[o])},c=n(48858),u=n(13103),s=function(){var e=(0,a.useState)(u.G6||(0,u.IN)()?(0,u.T8)():"undefined"!=typeof window&&window.screen.orientation.type||null),t=e[0],n=e[1];return(0,a.useEffect)((function(){var e=function(){return n(u.G6||(0,u.IN)()?(0,u.T8)():window.screen.orientation.type)};return window.addEventListener("orientationchange",e),function(){return window.removeEventListener("orientationchange",e)}}),[]),t},l=n(69931),d=n.n(l),m=n(87912);var g=function(e,t){(0,a.useEffect)((function(){var n=function(n){Object.keys(e.current||{}).length!==Object.keys(n.target||{}).length&&null!==e&&t(n)};return document.addEventListener("mousedown",n),document.addEventListener("touchstart",n),function(){document.removeEventListener("mousedown",n),document.removeEventListener("touchstart",n)}}),[e,t])},f=n(4382),v=function(e){var t=e.setModal,n=e.videoUrl,u=a.useRef(null),l=(0,a.useRef)(null),v=s(),p=(0,m.Z)("(max-height: 420px)");g(u,(function(){null!==u&&u.current.pause(),t(!1)})),o(),r("Escape",u,t);return(0,f.tZ)("div",{className:"w-screen h-screen fixed top-0 left-0 right-0 bottom-0 cursor-default object-contain",style:{zIndex:102}},(0,f.tZ)(c.ZP,null,(0,f.tZ)("div",{className:"flex justify-center items-center",style:{height:"100vh"}},(0,f.tZ)("div",{ref:l,className:d()("relative",{"max-w-6xl":!("landscape-primary"===v&&p),"max-w-2xl":"landscape-primary"===v&&p})},(0,f.tZ)("button",{type:"button",className:"top-6 right-6 inline-block absolute cursor-pointer z-40",onClick:function(){u.current.pause(),t(!1)},tabIndex:"0"},(0,f.tZ)("img",{src:i.Z,alt:"toggle menu",width:15,height:15})),(0,f.tZ)("video",{width:"auto",height:"auto",autoPlay:!0,controls:!0,tabIndex:"2",ref:u},(0,f.tZ)("source",{src:n,type:"video/mp4"}),"Your browser does not support the video tag.")))))}},33926:function(e,t,n){var a=n(67294),o=n(81164),i=n(82224),r=n(80414),c=n(26040),u=n(44669),s=n(62554),l=n(62319),d=n(38593),m=n(35533),g=n(95030),f=n(97233),v=n(4382);t.Z=function(e){var t=e.children,n=e.title,p=e.description,w=e.pageName,h=e.location,y=e.banner;(0,u.Z)({pageName:w});var Z=(0,a.useState)(!1),I=Z[0],b=Z[1],x=(0,m.Z)(),k=x.cookies,N=x.cookiesBanner,C=x.setCookiesBanner;return(0,v.tZ)(l.Z,null,(0,v.tZ)(c.Z.Provider,{value:{location:h}},(0,v.tZ)(o.Z,{title:n,description:p,pageName:w,location:h,banner:y}),(0,v.tZ)(r.Z.Provider,{value:{sticker:I,setSticker:b}},(0,v.tZ)(f.Z,{pageName:w,location:h})),(0,v.tZ)("main",null,t),(0,v.tZ)(i.default,{pageUri:null==h?void 0:h.pathname,pageName:w}),!0!==Boolean(k[g.VB])&&(0,v.tZ)(s.Z,{cookiesBanner:N,setCookiesBanner:C,pageName:w}),(0,v.tZ)(d.Z,null)))}},80414:function(e,t,n){var a=n(67294).createContext({sticker:!1,setSticker:function(){}});t.Z=a},52467:function(e,t,n){var a=n(67294),o=n(71082),i=n(37059),r=n(10138),c=n(4382);var u={name:"h5d6e6",styles:"max-width:calc(100% - 0.25rem)"};t.Z=function(){var e=(0,o.K2)("2903505129"),t=[{image:e.csm.childImageSharp.gatsbyImageData,alt:"Cloud Storage Misconfigurations",text:"Cloud Storage Misconfigurations",link:"/whitepaper/cloud-storage-misconfigurations/"},{image:e.cc.childImageSharp.gatsbyImageData,alt:"Cloud Compliance in 2023 An In-depth Guide",text:"Cloud Compliance in 2023 An In-depth Guide",link:"/whitepaper/the-complete-guide-to-cloud-compliance/"},{image:e.ebook.childImageSharp.gatsbyImageData,alt:"Data Security in the Cloud A Comprehensive Guide",text:"Data Security in the Cloud A Comprehensive Guide",link:"/resources/data-security-e-book.pdf/"}];return(0,c.tZ)(a.Fragment,null,(0,c.tZ)("div",{className:"absolute mt-4 lg:mt-0 z-10",css:u},(0,c.tZ)("div",{className:"flex flex-nowrap gap-2 overflow-x-scroll scrollbar-hide z-10"},t.map((function(e,t){return(0,c.tZ)("div",{className:"py-4",key:t},(0,c.tZ)(o.rU,{to:e.link,className:"w-48 m-2 block"},(0,c.tZ)(i.G,{image:e.image,alt:e.alt}),(0,c.tZ)("p",{className:"mt-2 text-white font-hind text-base group-hover:underline"},e.text),(0,c.tZ)("div",{className:"flex mt-1"},(0,c.tZ)("img",{src:r.Z,alt:"",width:15}),(0,c.tZ)("p",{className:"font-montserrat text-xs text-white font-bold ml-2 group-hover:underline"},"Download"))))})))))}},16003:function(e,t,n){n(67294);var a=n(4382);t.Z=function(e){var t=e.children,n=e.modal,o=e.setModal;return(0,a.tZ)("div",{onClick:function(){o(!n)},onKeyPress:function(){},tabIndex:"0",role:"button",className:"hover:underline"},t)}},82790:function(e,t){t.Z="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGNsYXNzPSJoLTYgdy02IiBmaWxsPSJub25lIiB2aWV3Qm94PSIwIDAgMjQgMjQiIHN0cm9rZT0iIzAwMDAwMCI+CiAgPHBhdGggc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2Utd2lkdGg9IjIiIGQ9Ik05IDVsNyA3LTcgNyIgLz4KPC9zdmc+"},10138:function(e,t){t.Z="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGNsYXNzPSJoLTUgdy01IiB2aWV3Qm94PSIwIDAgMjAgMjAiIGZpbGw9IiNGRkZGRkYiPgogIDxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgZD0iTTEyLjI5MyA1LjI5M2ExIDEgMCAwMTEuNDE0IDBsNCA0YTEgMSAwIDAxMCAxLjQxNGwtNCA0YTEgMSAwIDAxLTEuNDE0LTEuNDE0TDE0LjU4NiAxMUgzYTEgMSAwIDExMC0yaDExLjU4NmwtMi4yOTMtMi4yOTNhMSAxIDAgMDEwLTEuNDE0eiIgY2xpcC1ydWxlPSJldmVub2RkIiAvPgo8L3N2Zz4="}}]);
//# sourceMappingURL=component---src-pages-resources-js-7b3aab519c2bb762dc3d.js.map