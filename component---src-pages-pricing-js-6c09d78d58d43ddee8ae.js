(self.webpackChunkcyscale_gatsby=self.webpackChunkcyscale_gatsby||[]).push([[9401],{86301:function(M,I,N){"use strict";function j(){return j=Object.assign||function(M){for(var I=1;I<arguments.length;I++){var N=arguments[I];for(var j in N)Object.prototype.hasOwnProperty.call(N,j)&&(M[j]=N[j])}return M},j.apply(this,arguments)}N.d(I,{Z:function(){return e}});var i=function(){var M="undefined"!=typeof window&&window._hsq?window._hsq:[],I=function(){M.push(["trackPageView"])};return{setContentType:function(I){M.push(["setContentType",I])},setPathPageView:function(N){M.push(["setPath",N]),I()},setTrackPageView:I,setIdentity:function(I,N){M.push(["identify",j({email:I},N)])},setTrackEvent:function(I){var N=I.eventId,j=I.value;M.push(["trackEvent",{id:N,value:j}])}}};function e(M){let{pageName:I}=M;const{setIdentity:N,setContentType:j}=i();if("undefined"!=typeof window){const M=localStorage.getItem("user-email");M&&N(M)}j("blog-detail"===I?"blog-post":"standard-page")}},33926:function(M,I,N){"use strict";var j=N(67294),i=N(22588),e=N(46299),D=N(80414),g=N(26040),c=N(86301),t=N(17631),n=N(44410),z=N(52468),a=N(35533),u=N(95030),y=N(86363),o=N(64593),s=N(70917);I.Z=M=>{let{children:I,title:N,description:l,pageName:A,location:T,banner:r,noIndex:d,blogDetails:Z}=M;(0,c.Z)({pageName:A});const{0:L,1:O}=(0,j.useState)(!1),{cookies:b,cookiesBanner:C,setCookiesBanner:x}=(0,a.Z)();return(0,s.tZ)(n.Z,null,(0,s.tZ)(g.Z.Provider,{value:{location:T}},(0,s.tZ)(i.Z,{title:N,description:l,pageName:A,location:T,banner:r,blogDetails:Z}),(0,s.tZ)(o.q,null,d&&(0,s.tZ)("meta",{name:"robots",content:"noindex"}),d&&(0,s.tZ)("meta",{name:"robots",content:"nofollow"})),(0,s.tZ)(D.Z.Provider,{value:{sticker:L,setSticker:O}},(0,s.tZ)(y.Z,{pageName:A,location:T})),(0,s.tZ)("main",null,I),(0,s.tZ)(e.default,{pageUri:null==T?void 0:T.pathname,pageName:A}),!0!==Boolean(b[u.VB])&&(0,s.tZ)(t.Z,{cookiesBanner:C,setCookiesBanner:x,pageName:A}),(0,s.tZ)(z.Z,null)))}},80414:function(M,I,N){"use strict";const j=N(67294).createContext({sticker:!1,setSticker:()=>{}});I.Z=j},51317:function(M,I,N){"use strict";N(67294);var j=N(70917);var i={name:"je8g23",styles:"pointer-events:none"},e={name:"1wtczig",styles:"&:hover .tooltip-content{opacity:100;pointer-events:auto;}"};I.Z=()=>(0,j.tZ)("span",{className:"underline",css:e},"assets",(0,j.tZ)("span",{className:"tooltip-content absolute top-full left-0 w-full mt-1 p-2 bg-black text-white text-sm rounded shadow-lg opacity-0 transition ease-in-out duration-200 font-hind",css:i},"Every cloud resource in your environment counts as an asset and is factored into the Security Knowlege Graph. The entire data is used as a basis for security analysis, including IAM entities (users, groups, policies, etc.), compute instances, disks, VPCs, storage and more. We will clarify your assets on a discovery call before you are charged."))},83153:function(M){M.exports=(()=>{"use strict";var M={d:(I,N)=>{for(var j in N)M.o(N,j)&&!M.o(I,j)&&Object.defineProperty(I,j,{enumerable:!0,get:N[j]})},o:(M,I)=>Object.prototype.hasOwnProperty.call(M,I)},I={};function N(M,I){var N=Object.keys(M);if(Object.getOwnPropertySymbols){var j=Object.getOwnPropertySymbols(M);I&&(j=j.filter((function(I){return Object.getOwnPropertyDescriptor(M,I).enumerable}))),N.push.apply(N,j)}return N}function j(M){for(var I=1;I<arguments.length;I++){var j=null!=arguments[I]?arguments[I]:{};I%2?N(Object(j),!0).forEach((function(I){i(M,I,j[I])})):Object.getOwnPropertyDescriptors?Object.defineProperties(M,Object.getOwnPropertyDescriptors(j)):N(Object(j)).forEach((function(I){Object.defineProperty(M,I,Object.getOwnPropertyDescriptor(j,I))}))}return M}function i(M,I,N){return I in M?Object.defineProperty(M,I,{value:N,enumerable:!0,configurable:!0,writable:!0}):M[I]=N,M}M.d(I,{default:()=>Z});var e="Sal was not initialised! Probably it is used in SSR.",D="Your browser does not support IntersectionObserver!\nGet a polyfill from here:\nhttps://github.com/w3c/IntersectionObserver/tree/master/polyfill",g={root:null,rootMargin:"0% 50%",threshold:.5,animateClassName:"sal-animate",disabledClassName:"sal-disabled",enterEventName:"sal:in",exitEventName:"sal:out",selector:"[data-sal]",once:!0,disabled:!1},c=[],t=null,n=function(M){M&&M!==g&&(g=j(j({},g),M))},z=function(M){M.classList.remove(g.animateClassName)},a=function(M,I){var N=new CustomEvent(M,{bubbles:!0,detail:I});I.target.dispatchEvent(N)},u=function(){document.body.classList.add(g.disabledClassName)},y=function(){t.disconnect(),t=null},o=function(){return g.disabled||"function"==typeof g.disabled&&g.disabled()},s=function(M,I){M.forEach((function(M){var N=M.target,j=void 0!==N.dataset.salRepeat,i=void 0!==N.dataset.salOnce,e=j||!(i||g.once);M.intersectionRatio>=g.threshold?(function(M){M.target.classList.add(g.animateClassName),a(g.enterEventName,M)}(M),e||I.unobserve(N)):e&&function(M){z(M.target),a(g.exitEventName,M)}(M)}))},l=function(){var M=[].filter.call(document.querySelectorAll(g.selector),(function(M){return!function(M){return M.classList.contains(g.animateClassName)}(M,g.animateClassName)}));return M.forEach((function(M){return t.observe(M)})),M},A=function(){u(),y()},T=function(){document.body.classList.remove(g.disabledClassName),t=new IntersectionObserver(s,{root:g.root,rootMargin:g.rootMargin,threshold:g.threshold}),c=l()},r=function(){var M=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};y(),Array.from(document.querySelectorAll(g.selector)).forEach(z),n(M),T()},d=function(){var M=l();c.push(M)};const Z=function(){if(n(arguments.length>0&&void 0!==arguments[0]?arguments[0]:g),"undefined"==typeof window)return console.warn(e),{elements:c,disable:A,enable:T,reset:r,update:d};if(!window.IntersectionObserver)throw u(),Error(D);return o()?u():T(),{elements:c,disable:A,enable:T,reset:r,update:d}};return I.default})()},18403:function(M,I){"use strict";I.Z="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTgiIGhlaWdodD0iMTgiIHZpZXdCb3g9IjAgMCAxOCAxOCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGcgY2xpcC1wYXRoPSJ1cmwoI2NsaXAwXzIzOTJfNDMxMSkiPgo8cGF0aCBkPSJNMTYuMTQ1IDIuNTcxOTRDMTUuODczIDIuMjk4OTQgMTUuNDI3IDIuMjk4OTQgMTUuMTU1IDIuNTcxOTRMNi45MiAxMC44MDQ5TDIuNjc5IDYuNTM0OTRDMi40MDcgNi4yNjA5NCAxLjk2NCA2LjI2MDk0IDEuNjkgNi41MzQ5NEwwLjIwNCA4LjAxOTk0Qy0wLjA2OCA4LjI5MDk0IC0wLjA2OCA4LjczNjk0IDAuMjA0IDkuMDA5OTRMNi40MjEgMTUuMjY3OUM2LjY5MyAxNS41Mzg5IDcuMTM2IDE1LjUzODkgNy40MTEgMTUuMjY3OUwxNy42MyA1LjA0Nzk0QzE3LjkwNiA0Ljc3NDk0IDE3LjkwNiA0LjMyNzk0IDE3LjYzIDQuMDUzOTRMMTYuMTQ1IDIuNTcxOTRaIiBmaWxsPSIjMzNDOUFFIi8+CjwvZz4KPGRlZnM+CjxjbGlwUGF0aCBpZD0iY2xpcDBfMjM5Ml80MzExIj4KPHJlY3Qgd2lkdGg9IjE3LjgzNyIgaGVpZ2h0PSIxNy44MzciIGZpbGw9IndoaXRlIi8+CjwvY2xpcFBhdGg+CjwvZGVmcz4KPC9zdmc+Cg=="},47647:function(M,I){"use strict";I.Z="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjYiIGhlaWdodD0iNDgiIHZpZXdCb3g9IjAgMCA2NiA0OCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTQ1Ljc5MjggMTEuNjAxMlY4QzQwLjA4MTkgOCAzNS40MjU4IDEyLjY1NjEgMzUuNDI1OCAxOC4zNjdIMzkuMDI3QzM5LjAyNyAxNC42MjA0IDQyLjA4MjUgMTEuNjAxMiA0NS43OTI4IDExLjYwMTJaIiBmaWxsPSJ1cmwoI3BhaW50MF9saW5lYXJfMjU3OV80NDM0KSIvPgo8cGF0aCBkPSJNMjUuMDYyNSA4VjExLjYwMTJDMjguODA5MiAxMS42MDEyIDMxLjgyODQgMTQuNjU2NyAzMS44Mjg0IDE4LjM2N0gzNS40Mjk1QzM1LjQyOTUgMTIuNjU2MSAzMC43NzM1IDggMjUuMDYyNSA4WiIgZmlsbD0idXJsKCNwYWludDFfbGluZWFyXzI1NzlfNDQzNCkiLz4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0zLjU2NDMzIDExLjkzNjNMMjIuMTgxMSAxMS42MzcxTDIyLjEyMzkgOC4wNzMyNEwwIDguNDI4OFYyNy42NDI4QzAgMzIuMjQ0NSAyLjE3NDQ0IDM3LjIzMTYgNS45MzU5MyA0MC4xMTU0TDUuOTkxOTcgNDAuMTU4M0wxNy4zNTQ1IDQ3LjUxOTlMMjguNzM3NCA0MC4wOTExTDI4Ljc4MDkgNDAuMDU4N0MzMy4xMjI1IDM2LjgzMjQgMzUuNTM4NSAzMi42MjM1IDM1LjUzODUgMjcuNDk3M1YyMS4zMTM1SDMxLjk3NDJWMjcuNDk3M0MzMS45NzQyIDMxLjMwNDUgMzAuMjU2OSAzNC41MDU5IDI2LjY5NzUgMzcuMTY2MUwxNy4zNDc0IDQzLjI2ODNMOC4wNTExOCAzNy4yNDU0QzUuMjk2MDggMzUuMTAwOSAzLjU2NDMzIDMxLjIzODkgMy41NjQzMyAyNy42NDI4VjExLjkzNjNaIiBmaWxsPSJibGFjayIvPgo8ZGVmcz4KPGxpbmVhckdyYWRpZW50IGlkPSJwYWludDBfbGluZWFyXzI1NzlfNDQzNCIgeDE9IjIyLjQ3NzkiIHkxPSIxMy4xNzk0IiB4Mj0iNDQuOTE3MyIgeTI9IjEzLjE3OTQiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIj4KPHN0b3Agb2Zmc2V0PSIwLjEwNjkiIHN0b3AtY29sb3I9IiMwRjI2QUEiLz4KPHN0b3Agb2Zmc2V0PSIwLjg4MDMiIHN0b3AtY29sb3I9IiNGRjRBNTYiLz4KPC9saW5lYXJHcmFkaWVudD4KPGxpbmVhckdyYWRpZW50IGlkPSJwYWludDFfbGluZWFyXzI1NzlfNDQzNCIgeDE9IjIyLjQ4MTYiIHkxPSIxMy4xNzk0IiB4Mj0iNDQuOTIxIiB5Mj0iMTMuMTc5NCIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiPgo8c3RvcCBvZmZzZXQ9IjAuMTA2OSIgc3RvcC1jb2xvcj0iIzBGMjZBQSIvPgo8c3RvcCBvZmZzZXQ9IjAuODgwMyIgc3RvcC1jb2xvcj0iI0ZGNEE1NiIvPgo8L2xpbmVhckdyYWRpZW50Pgo8L2RlZnM+Cjwvc3ZnPgo="},54194:function(M,I){"use strict";I.Z="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjkxIiBoZWlnaHQ9IjE2NyIgdmlld0JveD0iMCAwIDI5MSAxNjciIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxnIGNsaXAtcGF0aD0idXJsKCNjbGlwMF8zODc3XzE1ODA1KSI+CjxwYXRoIGQ9Ik0yOTEuMDAxIDU3LjYxMDRWMEMxOTkuMjAyIDAgMTI0LjUyOSA3NC42NzI0IDEyNC41MjkgMTY2LjQ3MUgxODIuMTRDMTgyLjE1NiAxMDYuNDQgMjMwLjk4NSA1Ny42MTA0IDI5MS4wMDEgNTcuNjEwNFoiIGZpbGw9InVybCgjcGFpbnQwX2xpbmVhcl8zODc3XzE1ODA1KSIvPgo8cGF0aCBkPSJNLTQyIDBWNTcuNjEwNEMxOC4wMzE3IDU3LjYxMDQgNjYuODYwOCAxMDYuNDQgNjYuODYwOCAxNjYuNDcxSDEyNC40NzFDMTI0LjQ3MSA3NC42ODg1IDQ5Ljc5ODkgMCAtNDIgMFoiIGZpbGw9InVybCgjcGFpbnQxX2xpbmVhcl8zODc3XzE1ODA1KSIvPgo8L2c+CjxkZWZzPgo8bGluZWFyR3JhZGllbnQgaWQ9InBhaW50MF9saW5lYXJfMzg3N18xNTgwNSIgeDE9Ii04My40OTM2IiB5MT0iODMuMjIzNCIgeDI9IjI3Ni43OSIgeTI9IjgzLjIyMzQiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIj4KPHN0b3Agb2Zmc2V0PSIwLjEwNjkiIHN0b3AtY29sb3I9IiMwRjI2QUEiLz4KPHN0b3Agb2Zmc2V0PSIwLjg4MDMiIHN0b3AtY29sb3I9IiNGRjRBNTYiLz4KPC9saW5lYXJHcmFkaWVudD4KPGxpbmVhckdyYWRpZW50IGlkPSJwYWludDFfbGluZWFyXzM4NzdfMTU4MDUiIHgxPSItODMuNDg3MSIgeTE9IjgzLjIzOTUiIHgyPSIyNzYuNzk3IiB5Mj0iODMuMjM5NSIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiPgo8c3RvcCBvZmZzZXQ9IjAuMTA2OSIgc3RvcC1jb2xvcj0iIzBGMjZBQSIvPgo8c3RvcCBvZmZzZXQ9IjAuODgwMyIgc3RvcC1jb2xvcj0iI0ZGNEE1NiIvPgo8L2xpbmVhckdyYWRpZW50Pgo8Y2xpcFBhdGggaWQ9ImNsaXAwXzM4NzdfMTU4MDUiPgo8cmVjdCB3aWR0aD0iMjkxIiBoZWlnaHQ9IjE2NyIgZmlsbD0id2hpdGUiLz4KPC9jbGlwUGF0aD4KPC9kZWZzPgo8L3N2Zz4K"},11620:function(M,I,N){"use strict";I.Z=N.p+"static/hero-pricing-ad76c11f81ea20f2f7abcd337fe3828e.png"},25062:function(M,I){"use strict";I.Z="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNCIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDE0IDE2IiBmaWxsPSJub25lIj4KICAgIDxnIGNsaXAtcGF0aD0idXJsKCNjbGlwMF81NjA2XzQyNjY0KSI+CiAgICAgICAgPHBhdGggZD0iTTEzLjcwNDcgMy4yOTI5N0MxNC4wOTUzIDMuNjgzNTkgMTQuMDk1MyA0LjMxNzk3IDEzLjcwNDcgNC43MDg1OUw1LjcwNDY5IDEyLjcwODZDNS4zMTQwNiAxMy4wOTkyIDQuNjc5NjkgMTMuMDk5MiA0LjI4OTA2IDEyLjcwODZMMC4yODkwNjMgOC43MDg1OUMtMC4xMDE1NjMgOC4zMTc5NyAtMC4xMDE1NjMgNy42ODM1OSAwLjI4OTA2MyA3LjI5Mjk3QzAuNjc5Njg4IDYuOTAyMzQgMS4zMTQwNiA2LjkwMjM0IDEuNzA0NjkgNy4yOTI5N0w0Ljk5ODQ0IDEwLjU4MzZMMTIuMjkyMiAzLjI5Mjk3QzEyLjY4MjggMi45MDIzNCAxMy4zMTcyIDIuOTAyMzQgMTMuNzA3OCAzLjI5Mjk3SDEzLjcwNDdaIiBmaWxsPSIjMEYyNkFBIi8+CiAgICA8L2c+CiAgICA8ZGVmcz4KICAgICAgICA8Y2xpcFBhdGggaWQ9ImNsaXAwXzU2MDZfNDI2NjQiPgogICAgICAgICAgICA8cmVjdCB3aWR0aD0iMTQiIGhlaWdodD0iMTYiIGZpbGw9IndoaXRlIi8+CiAgICAgICAgPC9jbGlwUGF0aD4KICAgIDwvZGVmcz4KPC9zdmc+Cg=="},66478:function(M,I){"use strict";I.Z="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjYiIGhlaWdodD0iNDgiIHZpZXdCb3g9IjAgMCA2NiA0OCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik00LjQ0NTg5IDI2LjI3NTdDMy43NjAyNSAyNi43NTM1IDMuNTY0MzMgMjcuMjQzIDMuNTY0MzMgMjcuNTg2M1Y0MS44ODgyQzMuNTY0MzMgNDIuMjI0NCAzLjc1NzI1IDQyLjcxNDUgNC40MzgzOCA0My4xOTM1QzUuMTEzMiA0My42Njc5IDYuMTQzMTkgNDQuMDIwNSA3LjM3NDcxIDQ0LjAyMDVIMzAuMDAwNkMzMS4yMzIyIDQ0LjAyMDUgMzIuMjYyMSA0My42Njc5IDMyLjkzNyA0My4xOTM1QzMzLjYxODEgNDIuNzE0NSAzMy44MTEgNDIuMjI0NCAzMy44MTEgNDEuODg4MlYyNy41ODYzQzMzLjgxMSAyNy4yNTAxIDMzLjYxODEgMjYuNzU5OSAzMi45MzcgMjYuMjgxQzMyLjI2MjEgMjUuODA2NSAzMS4yMzIyIDI1LjQ1NCAzMC4wMDA2IDI1LjQ1NEg3LjM3NDcxQzYuMTU5MDkgMjUuNDU0IDUuMTI2NTcgMjUuODAxNSA0LjQ0NTg5IDI2LjI3NTdaTTIuNDA4MTggMjMuMzUxM0MzLjc1NjE3IDIyLjQxMjEgNS41MTk5MiAyMS44ODk2IDcuMzc0NzEgMjEuODg5NkgzMC4wMDA2QzMxLjg3NjEgMjEuODg5NiAzMy42NDI0IDIyLjQxOTggMzQuOTg3MSAyMy4zNjUzQzM2LjMyNTUgMjQuMzA2MyAzNy4zNzUzIDI1Ljc3MzQgMzcuMzc1MyAyNy41ODYzVjQxLjg4ODJDMzcuMzc1MyA0My43MDExIDM2LjMyNTUgNDUuMTY4MSAzNC45ODcxIDQ2LjEwOTJDMzMuNjQyNCA0Ny4wNTQ3IDMxLjg3NjEgNDcuNTg0OCAzMC4wMDA2IDQ3LjU4NDhINy4zNzQ3MUM1LjQ5OTI3IDQ3LjU4NDggMy43MzI5OSA0Ny4wNTQ3IDIuMzg4MjggNDYuMTA5MkMxLjA0OTg4IDQ1LjE2ODIgMCA0My43MDExIDAgNDEuODg4MlYyNy41ODYzQzAgMjUuNzU0OCAxLjA2NTE1IDI0LjI4NzEgMi40MDgxOCAyMy4zNTEzWiIgZmlsbD0iYmxhY2siLz4KPHBhdGggZD0iTTQwLjMwNDUgNy42MDExOVY0QzM0LjU5MzYgNCAyOS45Mzc1IDguNjU2MDggMjkuOTM3NSAxNC4zNjdIMzMuNTM4N0MzMy41Mzg3IDEwLjY1NjcgMzYuNTU3OSA3LjYwMTE5IDQwLjMwNDUgNy42MDExOVoiIGZpbGw9InVybCgjcGFpbnQwX2xpbmVhcl8yNTc5XzQ0MjkpIi8+CjxwYXRoIGQ9Ik0xOS41NzAzIDQuMDM2MTNWNy42MzczMUMyMy4zMTcgNy42MzczMSAyNi4zMzYyIDEwLjY5MjkgMjYuMzM2MiAxNC40MDMySDI5LjkzNzRDMjkuOTM3NCA4LjY5MjIxIDI1LjI4MTMgNC4wMzYxMyAxOS41NzAzIDQuMDM2MTNaIiBmaWxsPSJ1cmwoI3BhaW50MV9saW5lYXJfMjU3OV80NDI5KSIvPgo8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTI2LjMwMDggMjMuNzg4NVYxNi40MDQzSDI5Ljg2NTFWMjMuNzg4NUgyNi4zMDA4WiIgZmlsbD0iYmxhY2siLz4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0xNy42NDM0IDcuNjAwOTZDMTQuMzY2MyA3LjYwMDk2IDExLjY3NzYgMTAuMjY0MiAxMS42Nzc2IDEzLjU2NjhWMjMuNzg4M0g4LjExMzI4VjEzLjU2NjhDOC4xMTMyOCA4LjI4NDc3IDEyLjQwODcgNC4wMzY2MiAxNy42NDM0IDQuMDM2NjJWNy42MDA5NloiIGZpbGw9ImJsYWNrIi8+CjxkZWZzPgo8bGluZWFyR3JhZGllbnQgaWQ9InBhaW50MF9saW5lYXJfMjU3OV80NDI5IiB4MT0iMTYuOTg3IiB5MT0iOS4yMSIgeDI9IjM5LjQyNjUiIHkyPSI5LjIxIiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+CjxzdG9wIG9mZnNldD0iMC4xMDY5IiBzdG9wLWNvbG9yPSIjMEYyNkFBIi8+CjxzdG9wIG9mZnNldD0iMC44ODAzIiBzdG9wLWNvbG9yPSIjRkY0QTU2Ii8+CjwvbGluZWFyR3JhZGllbnQ+CjxsaW5lYXJHcmFkaWVudCBpZD0icGFpbnQxX2xpbmVhcl8yNTc5XzQ0MjkiIHgxPSIxNi45ODY4IiB5MT0iOS4yMDk3NiIgeDI9IjM5LjQyNjQiIHkyPSI5LjIwOTc2IiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+CjxzdG9wIG9mZnNldD0iMC4xMDY5IiBzdG9wLWNvbG9yPSIjMEYyNkFBIi8+CjxzdG9wIG9mZnNldD0iMC44ODAzIiBzdG9wLWNvbG9yPSIjRkY0QTU2Ii8+CjwvbGluZWFyR3JhZGllbnQ+CjwvZGVmcz4KPC9zdmc+Cg=="},64348:function(M,I){"use strict";I.Z="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjYiIGhlaWdodD0iNDgiIHZpZXdCb3g9IjAgMCA2NiA0OCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGcgY2xpcC1wYXRoPSJ1cmwoI2NsaXAwXzI1NzlfNDQyNCkiPgo8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTI5LjA2NDMgMTQuNTY0M0MyMy4yNDY0IDE0LjU2NDMgMTguNTUxNiAxOS4yNTkxIDE4LjU1MTYgMjUuMDc3MVYyNy4zMzIySDEyLjI5NTJDNy42MDQ4OCAyNy4zMzIyIDMuNzgzMDggMzEuMTU0IDMuNzgzMDggMzUuODQ0M0MzLjc4MzA4IDQwLjUzNDYgNy42MDQ4OCA0NC4zNTY0IDEyLjI5NTIgNDQuMzU2NEg0My45MDU2QzQ4LjY4OTggNDQuMzU2NCA1Mi40MTc3IDQwLjg0MzQgNTIuNDE3NyAzNi4yNDQ0SDU1Ljk4MjFDNTUuOTgyMSA0Mi45OTQ2IDUwLjQ3MDYgNDcuOTIwOCA0My45MDU2IDQ3LjkyMDhIMTIuMjk1MkM1LjYzNjM1IDQ3LjkyMDggMC4yMTg3NSA0Mi41MDMxIDAuMjE4NzUgMzUuODQ0M0MwLjIxODc1IDI5LjE4NTQgNS42MzYzNSAyMy43Njc4IDEyLjI5NTIgMjMuNzY3OEgxNS4wNDdDMTUuNzA1NSAxNi41OTc0IDIxLjcxOTQgMTEgMjkuMDY0MyAxMUMzNi44NTA4IDExIDQzLjE0MTUgMTcuMjkwNiA0My4xNDE1IDI1LjA3NzFWMjcuMzY4OEgzOS41NzcxVjI1LjA3NzFDMzkuNTc3MSAxOS4yNTkxIDM0Ljg4MjMgMTQuNTY0MyAyOS4wNjQzIDE0LjU2NDNaIiBmaWxsPSJibGFjayIvPgo8cGF0aCBkPSJNNjYuMjc0OCAyNy4zMzI0VjIzLjc2NzZDNjAuNjAwMiAyMy43Njc2IDU1Ljk4MDUgMjguMzg3MyA1NS45ODA1IDM0LjA2MTlINTkuNTQ1M0M1OS41NDUzIDMwLjM1MTYgNjIuNTY0NSAyNy4zMzI0IDY2LjI3NDggMjcuMzMyNFoiIGZpbGw9InVybCgjcGFpbnQwX2xpbmVhcl8yNTc5XzQ0MjQpIi8+CjxwYXRoIGQ9Ik00NS42NTIzIDIzLjc2NzZWMjcuMzMyNEM0OS4zNjI3IDI3LjMzMjQgNTIuMzgxOCAzMC4zNTE2IDUyLjM4MTggMzQuMDYxOUg1NS45NDY2QzU1Ljk4MyAyOC4zODczIDUxLjMyNjkgMjMuNzY3NiA0NS42NTIzIDIzLjc2NzZaIiBmaWxsPSJ1cmwoI3BhaW50MV9saW5lYXJfMjU3OV80NDI0KSIvPgo8L2c+CjxkZWZzPgo8bGluZWFyR3JhZGllbnQgaWQ9InBhaW50MF9saW5lYXJfMjU3OV80NDI0IiB4MT0iNDMuMDgzNSIgeTE9IjI4LjkwODMiIHgyPSI2NS4zOTU3IiB5Mj0iMjguOTA4MyIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiPgo8c3RvcCBvZmZzZXQ9IjAuMTA2OSIgc3RvcC1jb2xvcj0iIzBGMjZBQSIvPgo8c3RvcCBvZmZzZXQ9IjAuODgwMyIgc3RvcC1jb2xvcj0iI0ZGNEE1NiIvPgo8L2xpbmVhckdyYWRpZW50Pgo8bGluZWFyR3JhZGllbnQgaWQ9InBhaW50MV9saW5lYXJfMjU3OV80NDI0IiB4MT0iNDMuMDg2MSIgeTE9IjI4LjkwODMiIHgyPSI2NS4zOTgyIiB5Mj0iMjguOTA4MyIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiPgo8c3RvcCBvZmZzZXQ9IjAuMTA2OSIgc3RvcC1jb2xvcj0iIzBGMjZBQSIvPgo8c3RvcCBvZmZzZXQ9IjAuODgwMyIgc3RvcC1jb2xvcj0iI0ZGNEE1NiIvPgo8L2xpbmVhckdyYWRpZW50Pgo8Y2xpcFBhdGggaWQ9ImNsaXAwXzI1NzlfNDQyNCI+CjxyZWN0IHdpZHRoPSI2NiIgaGVpZ2h0PSI0OCIgZmlsbD0id2hpdGUiLz4KPC9jbGlwUGF0aD4KPC9kZWZzPgo8L3N2Zz4K"}}]);
//# sourceMappingURL=component---src-pages-pricing-js-6c09d78d58d43ddee8ae.js.map