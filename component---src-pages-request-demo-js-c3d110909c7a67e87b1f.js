(self.webpackChunkcyscale_gatsby=self.webpackChunkcyscale_gatsby||[]).push([[883,8367],{86301:function(e,t,a){"use strict";function n(){return n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},n.apply(this,arguments)}a.d(t,{Z:function(){return o}});var i=function(){var e="undefined"!=typeof window&&window._hsq?window._hsq:[],t=function(){e.push(["trackPageView"])};return{setContentType:function(t){e.push(["setContentType",t])},setPathPageView:function(a){e.push(["setPath",a]),t()},setTrackPageView:t,setIdentity:function(t,a){e.push(["identify",n({email:t},a)])},setTrackEvent:function(t){var a=t.eventId,n=t.value;e.push(["trackEvent",{id:a,value:n}])}}};function o(e){let{pageName:t}=e;const{setIdentity:a,setContentType:n}=i();if("undefined"!=typeof window){const e=localStorage.getItem("user-email");e&&a(e)}n("blog-detail"===t?"blog-post":"standard-page")}},26901:function(e,t,a){"use strict";var n=a(67294),i=a(14160),o=a(38032),s=a(70917);t.Z=()=>{const e=(0,i.K2)("3745998487");return(0,s.tZ)(n.Fragment,null,(0,s.tZ)(o.G,{alt:"",image:e.aws.childImageSharp.gatsbyImageData}),(0,s.tZ)(o.G,{alt:"",image:e.azure.childImageSharp.gatsbyImageData}),(0,s.tZ)(o.G,{alt:"",image:e.gc.childImageSharp.gatsbyImageData}),(0,s.tZ)(o.G,{alt:"",image:e.alibaba.childImageSharp.gatsbyImageData})," ",(0,s.tZ)(o.G,{alt:"",image:e.okta.childImageSharp.gatsbyImageData}),(0,s.tZ)(o.G,{alt:"",image:e.googleCloud.childImageSharp.gatsbyImageData}),(0,s.tZ)(o.G,{alt:"",image:e.azureAD.childImageSharp.gatsbyImageData}))}},62970:function(e,t,a){"use strict";a.d(t,{Z:function(){return f}});var n=a(67294),i=a(2816),o=a(8133),s=a(94184),r=a.n(s);var l=()=>{const{0:e,1:t}=(0,n.useState)(!0),a=(0,n.useCallback)((a=>{"readyForConsentListener"===a.data&&t(!e)}),[e]);return(0,n.useEffect)((()=>(window.addEventListener("message",a),()=>{window.removeEventListener("message",a)})),[a]),{loadingMeetings:e}};var c=()=>{(0,n.useEffect)((()=>{const e=document.createElement("script");return e.src="https://static.hsappstatic.net/MeetingsEmbed/ex/MeetingsEmbedCode.js",e.type="text/javascript",document.body.appendChild(e),()=>document.body.removeChild(e)}),[])},d=a(56788),m=a(47793),u=a(70917);var g={name:"1vmhb22",styles:"top:2.5rem;right:2rem;@media (min-width: 630px) and (max-width: 768px){right:7rem;}@media (min-width: 416px) and (max-width: 630px){right:calc(((100vw - 400px) / 2) + 20px);}"},b={name:"p051lc",styles:"height:53.125rem;@media screen and (max-width: 639px){height:100vh;background-color:white;}"},p={name:"bir560",styles:"@media screen and (min-width: 639px){height:40rem;z-index:102;}"};var f=e=>{let{calendarModal:t,setCalendarModal:a}=e;const s=(0,n.useRef)(null),{loadingMeetings:f}=l();return c(),(0,d.Z)(),(0,m.a)(s,t,a),(0,u.tZ)("div",{ref:s,className:"bg-white sm:bg-transparent relative w-full sm:max-w-xl md:max-w-2xl lg:max-w-3xl sm:rounded-lg",role:"dialog","aria-modal":"true",css:p},(0,u.tZ)(i.ZP,null,(0,u.tZ)("div",{className:"overflow-x-auto",css:b},(0,u.tZ)("div",null,(0,u.tZ)("div",{className:r()({hidden:f,"meetings-iframe-container relative":!0}),"data-src":"https://meetings.hubspot.com/barry-lyne/cyscale-cloud-platform-demo?embed=true"},!f&&(0,u.tZ)("button",{type:"button",className:"inline-block absolute cursor-pointer",onClick:()=>a(!t),css:g},(0,u.tZ)("img",{src:o.Z,alt:"toggle menu",width:15,height:15})))))))}},33926:function(e,t,a){"use strict";var n=a(70917),i=a(67294),o=a(11196),s=a(43081),r=a(80414),l=a(26040),c=a(86301),d=a(98432),m=a(44410),u=a(52468),g=a(35533),b=a(95030),p=a(52356),f=a(64593),h=a(14160);t.Z=e=>{let{children:t,title:a,description:w,pageName:y,location:x,banner:Z,noIndex:v,blogDetails:I}=e;(0,c.Z)({pageName:y});const{0:N,1:M}=(0,i.useState)(!1),{cookies:j,cookiesBanner:D,setCookiesBanner:k}=(0,g.Z)(),C=(0,h.K2)("1117504136");return(0,n.tZ)(m.Z,null,(0,n.tZ)(l.Z.Provider,{value:{location:x}},(0,n.tZ)(o.Z,{title:a,description:w,pageName:y,location:x,banner:Z,blogDetails:I}),(0,n.tZ)(f.q,null,v&&(0,n.tZ)("meta",{name:"robots",content:"noindex"}),v&&(0,n.tZ)("meta",{name:"robots",content:"nofollow"})),(0,n.tZ)(r.Z.Provider,{value:{sticker:N,setSticker:M}},(0,n.tZ)(p.Z,{pageName:y,location:x})),(0,n.tZ)("main",{css:(0,n.iv)("@media (min-width: 1024px){padding-top:",C.markdownRemark.frontmatter.enabled?"2rem":"0rem",";}","")},t),(0,n.tZ)(s.default,{pageUri:null==x?void 0:x.pathname,pageName:y}),!0!==Boolean(j[b.VB])&&(0,n.tZ)(d.Z,{cookiesBanner:D,setCookiesBanner:k,pageName:y}),(0,n.tZ)(u.Z,null)))}},80414:function(e,t,a){"use strict";const n=a(67294).createContext({sticker:!1,setSticker:()=>{}});t.Z=n},71089:function(e,t,a){"use strict";a.r(t);var n=a(67294),i=a(33926),o=a(94184),s=a.n(o),r=a(62970),l=a(83786),c=a(54668),d=a(95506),m=a(39008),u=a(13739),g=a(26901),b=a(64593),p=a(70917);var f={name:"1frchjr",styles:"height:100vh;background-color:rgba(0, 0, 0, 0.5);backdrop-filter:blur(10px)"},h={name:"1bw2jlg",styles:"background-color:rgba(255, 255, 255, 0.6);backdrop-filter:blur(5px);z-index:1"},w={name:"8ma7ar",styles:"color:#747474"},y={name:"10emcha",styles:"color:#484848"},x={name:"10emcha",styles:"color:#484848"},Z={name:"5130cv",styles:"font-size:2rem;@media (min-width: 1024px){&:after{content:'';display:block;width:40%;height:6px;margin-top:16px;background-image:linear-gradient(to right, #0f26aa, #ff4a56);}}"};t.default=e=>{let{location:t}=e;const{0:a,1:o}=(0,n.useState)(!1),{loadingForm:v}=(0,l.Z)();return(0,n.useEffect)((()=>{setTimeout((()=>{var e;window&&window.hbspt&&(null===(e=window.hbspt.forms)||void 0===e||e.create({portalId:"5413427",formId:"c2d8e2e6-6edb-43d2-9052-350e7f00d1f6",target:"#meeting-form"}))}),600)}),[]),(0,p.tZ)(i.Z,{location:t,pageName:"RequestDemo",title:"See Cyscale Automated Cloud Security in Action",description:"Cloud infrastructure security can be complex, but we can show you that it doesn't have to be!"},(0,p.tZ)(b.q,null,(0,p.tZ)("script",{charset:"utf-8",type:"text/javascript",src:"//js.hsforms.net/forms/shell.js"})),(0,p.tZ)("div",{className:"hidden","data-template-key":!0},"hardcoded-pages"),(0,p.tZ)("div",{className:"hidden","data-permalink":!0},"/request-demo"),(0,p.tZ)("div",{className:"hidden","data-title":!0},"See Cyscale Automated Cloud Security in Action"),(0,p.tZ)("div",{className:"hidden","data-description":!0},"Cloud infrastructure security can be complex, but we can show you that it doesn't have to be!"),(0,p.tZ)("div",{className:"hidden","data-category":!0},"website"),(0,p.tZ)("div",{className:"bg-zircon pt-32 pb-10 lg:pb-28 lg:pt-44 relative"},(0,p.tZ)(m.W2,null,(0,p.tZ)(m.X2,null,(0,p.tZ)("div",{className:"col-span-12 lg:col-span-6"},(0,p.tZ)("div",{className:"lg:mt-4 pt-2 md:pt-8 lg:pt-4 max-w-2xl mx-auto lg:mx-0"},(0,p.tZ)("h1",{className:"text-center lg:text-left text-blue mb-8 font-montserrat font-bold",css:Z},"Get a Demo"),(0,p.tZ)("p",{className:"text-center lg:text-left text-base lg:text-lg max-w-xl mx-auto lg:mx-0 font-hind",css:x},"We know cloud security can be complex, but if you give us a few minutes we can show you that it doesn't have to be!")," ",(0,p.tZ)("p",{className:"text-center lg:text-left text-base lg:text-lg max-w-xl mx-auto lg:mx-0 mt-4 font-hind",css:y},"Leave your details here and we'll get back to you today,",(0,p.tZ)("br",{className:"hidden sm:block"})," or if you have a preferred time you can"," ",(0,p.tZ)("span",{className:"underline cursor-pointer text-blue",onClick:()=>o(!a),onKeyDown:()=>{},tabIndex:"0",role:"button"},"book directly into our calendar"),"."),(0,p.tZ)("p",{className:"font-hind text-base mt-12 text-left sm:text-center lg:text-left",css:w},"Integrations"),(0,p.tZ)("div",{className:"mt-2 mx-0 sm:mx-auto lg:mx-0 max-w-sm"},(0,p.tZ)("div",{className:"flex space-x-3"},(0,p.tZ)(g.Z,null))))),(0,p.tZ)("div",{className:"col-span-12 lg:col-span-6",id:"apply-now"},(0,p.tZ)("div",{className:"rounded-xl shadow-lg mt-6 lg:mt-0 py-4 lg:pt-12 pb-0 px-8 md:px-12 max-w-lg mx-auto lg:mr-0 lg:ml-auto relative",css:h,id:"form"},(0,p.tZ)("h2",{className:"font-semibold text-2xl sm:text-3xl lg:text-2xl leading-normal mb-8 mt-8 lg:mt-0 font-montserrat"},"Book a live demo"),v&&(0,p.tZ)(c.Z,{minHeight:310}),(0,p.tZ)("div",{style:{minHeight:310},id:"meeting-form",className:s()("pb-4",{hidden:v})}))))),(0,p.tZ)("div",{className:"absolute bottom-0 right-0 "},(0,p.tZ)("div",{className:"hidden lg:block lg:max-w-2xl"},(0,p.tZ)("img",{src:u.Z,alt:""})))),(0,p.tZ)(d.default,{disableAnimation:!0,subtitle:"You’re in good company",backgroundColor:"#fff"}),a&&(0,p.tZ)("div",{className:"w-screen h-screen fixed top-0 left-0 right-0 bottom-0",style:{zIndex:102}},(0,p.tZ)("div",{className:"sm:flex sm:justify-center sm:items-center",css:f},(0,p.tZ)(r.Z,{setCalendarModal:o,calendarModal:a}))))}},83153:function(e){e.exports=(()=>{"use strict";var e={d:(t,a)=>{for(var n in a)e.o(a,n)&&!e.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:a[n]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t)},t={};function a(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function n(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}e.d(t,{default:()=>v});var o="Sal was not initialised! Probably it is used in SSR.",s="Your browser does not support IntersectionObserver!\nGet a polyfill from here:\nhttps://github.com/w3c/IntersectionObserver/tree/master/polyfill",r={root:null,rootMargin:"0% 50%",threshold:.5,animateClassName:"sal-animate",disabledClassName:"sal-disabled",enterEventName:"sal:in",exitEventName:"sal:out",selector:"[data-sal]",once:!0,disabled:!1},l=[],c=null,d=function(e){e&&e!==r&&(r=n(n({},r),e))},m=function(e){e.classList.remove(r.animateClassName)},u=function(e,t){var a=new CustomEvent(e,{bubbles:!0,detail:t});t.target.dispatchEvent(a)},g=function(){document.body.classList.add(r.disabledClassName)},b=function(){c.disconnect(),c=null},p=function(){return r.disabled||"function"==typeof r.disabled&&r.disabled()},f=function(e,t){e.forEach((function(e){var a=e.target,n=void 0!==a.dataset.salRepeat,i=void 0!==a.dataset.salOnce,o=n||!(i||r.once);e.intersectionRatio>=r.threshold?(function(e){e.target.classList.add(r.animateClassName),u(r.enterEventName,e)}(e),o||t.unobserve(a)):o&&function(e){m(e.target),u(r.exitEventName,e)}(e)}))},h=function(){var e=[].filter.call(document.querySelectorAll(r.selector),(function(e){return!function(e){return e.classList.contains(r.animateClassName)}(e,r.animateClassName)}));return e.forEach((function(e){return c.observe(e)})),e},w=function(){g(),b()},y=function(){document.body.classList.remove(r.disabledClassName),c=new IntersectionObserver(f,{root:r.root,rootMargin:r.rootMargin,threshold:r.threshold}),l=h()},x=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};b(),Array.from(document.querySelectorAll(r.selector)).forEach(m),d(e),y()},Z=function(){var e=h();l.push(e)};const v=function(){if(d(arguments.length>0&&void 0!==arguments[0]?arguments[0]:r),"undefined"==typeof window)return console.warn(o),{elements:l,disable:w,enable:y,reset:x,update:Z};if(!window.IntersectionObserver)throw g(),Error(s);return p()?g():y(),{elements:l,disable:w,enable:y,reset:x,update:Z}};return t.default})()},13739:function(e,t){"use strict";t.Z="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzA3IiBoZWlnaHQ9IjYxMyIgdmlld0JveD0iMCAwIDMwNyA2MTMiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxnIGNsaXAtcGF0aD0idXJsKCNjbGlwMF81ODYzXzI2MzE5KSI+CjxwYXRoIGQ9Ik0xMDYuMzkgMC42OTEwNDZMMC40OTk5ODcgMC42OTEwNTFDMC40OTk5OTQgMTY5LjQyMSAxMzcuNzUxIDMwNi42NzIgMzA2LjQ4MSAzMDYuNjcyTDMwNi40ODEgMjAwLjc4MUMxOTYuMTQgMjAwLjc1MiAxMDYuMzkgMTExLjAwMiAxMDYuMzkgMC42OTEwNDZaIiBmaWxsPSJ1cmwoI3BhaW50MF9saW5lYXJfNTg2M18yNjMxOSkiLz4KPHBhdGggZD0iTTAuNSA2MTIuNzY2TDEwNi4zOSA2MTIuNzY2QzEwNi4zOSA1MDIuNDI1IDE5Ni4xNCA0MTIuNjc1IDMwNi40ODEgNDEyLjY3NUwzMDYuNDgxIDMwNi43ODVDMTM3Ljc4IDMwNi43ODUgMC40OTk5OTMgNDQ0LjAzNiAwLjUgNjEyLjc2NloiIGZpbGw9InVybCgjcGFpbnQxX2xpbmVhcl81ODYzXzI2MzE5KSIvPgo8L2c+CjxkZWZzPgo8bGluZWFyR3JhZGllbnQgaWQ9InBhaW50MF9saW5lYXJfNTg2M18yNjMxOSIgeDE9IjE1My40NjgiIHkxPSI2ODkuMDI2IiB4Mj0iMTUzLjQ2OCIgeTI9IjI2LjgwOTkiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIj4KPHN0b3Agb2Zmc2V0PSIwLjEwNjkiIHN0b3AtY29sb3I9IiMwRjI2QUEiLz4KPHN0b3Agb2Zmc2V0PSIwLjg4MDMiIHN0b3AtY29sb3I9IiNGRjRBNTYiLz4KPC9saW5lYXJHcmFkaWVudD4KPGxpbmVhckdyYWRpZW50IGlkPSJwYWludDFfbGluZWFyXzU4NjNfMjYzMTkiIHgxPSIxNTMuNDk4IiB5MT0iNjg5LjAyMSIgeDI9IjE1My40OTgiIHkyPSIyNi44MDQ0IiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+CjxzdG9wIG9mZnNldD0iMC4xMDY5IiBzdG9wLWNvbG9yPSIjMEYyNkFBIi8+CjxzdG9wIG9mZnNldD0iMC44ODAzIiBzdG9wLWNvbG9yPSIjRkY0QTU2Ii8+CjwvbGluZWFyR3JhZGllbnQ+CjxjbGlwUGF0aCBpZD0iY2xpcDBfNTg2M18yNjMxOSI+CjxyZWN0IHdpZHRoPSI2MTMiIGhlaWdodD0iMzA2LjUiIGZpbGw9IndoaXRlIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgwLjUgNjEzKSByb3RhdGUoLTkwKSIvPgo8L2NsaXBQYXRoPgo8L2RlZnM+Cjwvc3ZnPgo="}}]);
//# sourceMappingURL=component---src-pages-request-demo-js-c3d110909c7a67e87b1f.js.map