"use strict";(self.webpackChunkcyscale_gatsby=self.webpackChunkcyscale_gatsby||[]).push([[4188],{86301:function(M,I,N){function i(){return i=Object.assign||function(M){for(var I=1;I<arguments.length;I++){var N=arguments[I];for(var i in N)Object.prototype.hasOwnProperty.call(N,i)&&(M[i]=N[i])}return M},i.apply(this,arguments)}N.d(I,{Z:function(){return g}});var t=function(){var M="undefined"!=typeof window&&window._hsq?window._hsq:[],I=function(){M.push(["trackPageView"])};return{setContentType:function(I){M.push(["setContentType",I])},setPathPageView:function(N){M.push(["setPath",N]),I()},setTrackPageView:I,setIdentity:function(I,N){M.push(["identify",i({email:I},N)])},setTrackEvent:function(I){var N=I.eventId,i=I.value;M.push(["trackEvent",{id:N,value:i}])}}};function g(M){let{pageName:I}=M;const{setIdentity:N,setContentType:i}=t();if("undefined"!=typeof window){const M=localStorage.getItem("user-email");M&&N(M)}i("blog-detail"===I?"blog-post":"standard-page")}},30146:function(M,I,N){N.d(I,{Z:function(){return c}});var i=N(67294),t=N(66261),g=N(42994),e=N(70917);function c(M){let{to:I,pageName:N,btnText:c}=M;return(0,e.tZ)(i.Fragment,null,(0,e.tZ)(t.rU,{className:"scroll-button-startups cursor-pointer",to:I,smooth:!0,duration:500},(0,e.tZ)("span",null,(0,e.tZ)("img",{src:g.Z,alt:"down arrow icon",className:"mx-auto",height:20,width:20,style:{marginRight:"0.8rem",marginTop:"1.1rem"}}))))}},33926:function(M,I,N){var i=N(67294),t=N(6325),g=N(67156),e=N(80414),c=N(26040),j=N(86301),n=N(17631),D=N(44410),z=N(52468),a=N(35533),u=N(95030),C=N(86363),A=N(64593),T=N(70917);I.Z=M=>{let{children:I,title:N,description:o,pageName:y,location:l,banner:Z,noIndex:x}=M;(0,j.Z)({pageName:y});const{0:s,1:d}=(0,i.useState)(!1),{cookies:L,cookiesBanner:m,setCookiesBanner:r}=(0,a.Z)();return(0,T.tZ)(D.Z,null,(0,T.tZ)(c.Z.Provider,{value:{location:l}},(0,T.tZ)(t.Z,{title:N,description:o,pageName:y,location:l,banner:Z}),(0,T.tZ)(A.q,null,x&&(0,T.tZ)("meta",{name:"robots",content:"noindex"}),x&&(0,T.tZ)("meta",{name:"robots",content:"nofollow"})),(0,T.tZ)(e.Z.Provider,{value:{sticker:s,setSticker:d}},(0,T.tZ)(C.Z,{pageName:y,location:l})),(0,T.tZ)("main",null,I),(0,T.tZ)(g.default,{pageUri:null==l?void 0:l.pathname,pageName:y}),!0!==Boolean(L[u.VB])&&(0,T.tZ)(n.Z,{cookiesBanner:m,setCookiesBanner:r,pageName:y}),(0,T.tZ)(z.Z,null)))}},80414:function(M,I,N){const i=N(67294).createContext({sticker:!1,setSticker:()=>{}});I.Z=i},50992:function(M,I){I.Z="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODYiIGhlaWdodD0iNjciIHZpZXdCb3g9IjAgMCA4NiA2NyIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik00Mi44MDk4IDE1LjQzNjNDMzcuMjAwOCAxNS40MzYzIDMyLjY3NDUgMTkuOTYyNiAzMi42NzQ1IDI1LjU3MTZWMjcuNzQ1N0gyNi42NDI4QzIyLjEyMDkgMjcuNzQ1NyAxOC40MzY0IDMxLjQzMDMgMTguNDM2NCAzNS45NTIyQzE4LjQzNjQgNDAuNDc0MSAyMi4xMjA5IDQ0LjE1ODcgMjYuNjQyOCA0NC4xNTg3SDU3LjExODJDNjEuNzMwNiA0NC4xNTg3IDY1LjMyNDcgNDAuNzcxOCA2NS4zMjQ3IDM2LjMzOEg2OC43NjFDNjguNzYxIDQyLjg0NTggNjMuNDQ3NCA0Ny41OTUgNTcuMTE4MiA0Ny41OTVIMjYuNjQyOEMyMC4yMjMxIDQ3LjU5NSAxNSA0Mi4zNzIgMTUgMzUuOTUyMkMxNSAyOS41MzI0IDIwLjIyMzEgMjQuMzA5NCAyNi42NDI4IDI0LjMwOTRIMjkuMjk1OEMyOS45MzA2IDE3LjM5NjQgMzUuNzI4NiAxMiA0Mi44MDk4IDEyQzUwLjMxNjcgMTIgNTYuMzgxNSAxOC4wNjQ3IDU2LjM4MTUgMjUuNTcxNlYyNy43ODFINTIuOTQ1MVYyNS41NzE2QzUyLjk0NTEgMTkuOTYyNiA0OC40MTg5IDE1LjQzNjMgNDIuODA5OCAxNS40MzYzWiIgZmlsbD0iYmxhY2siLz4KPHBhdGggZD0iTTc4LjY4NjQgMjcuNzQ3NFYyNC4zMTA1QzczLjIxNTYgMjQuMzEwNSA2OC43NjE3IDI4Ljc2NDQgNjguNzYxNyAzNC4yMzUySDcyLjE5ODVDNzIuMTk4NSAzMC42NTgxIDc1LjEwOTMgMjcuNzQ3NCA3OC42ODY0IDI3Ljc0NzRaIiBmaWxsPSJ1cmwoI3BhaW50MF9saW5lYXJfOTE5XzEwOTYpIi8+CjxwYXRoIGQ9Ik01OC44MDA4IDI0LjMxMDVWMjcuNzQ3NEM2Mi4zNzc5IDI3Ljc0NzQgNjUuMjg4NiAzMC42NTgxIDY1LjI4ODYgMzQuMjM1Mkg2OC43MjU0QzY4Ljc2MDUgMjguNzY0NCA2NC4yNzE2IDI0LjMxMDUgNTguODAwOCAyNC4zMTA1WiIgZmlsbD0idXJsKCNwYWludDFfbGluZWFyXzkxOV8xMDk2KSIvPgo8ZGVmcz4KPGxpbmVhckdyYWRpZW50IGlkPSJwYWludDBfbGluZWFyXzkxOV8xMDk2IiB4MT0iMzYuNDU4IiB5MT0iMjguNDA5MyIgeDI9Ijc3LjgzODgiIHkyPSIyOS4yNjY3IiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+CjxzdG9wIG9mZnNldD0iMC4xMDY5IiBzdG9wLWNvbG9yPSIjMEYyNkFBIi8+CjxzdG9wIG9mZnNldD0iMC44ODAzIiBzdG9wLWNvbG9yPSIjRkY0QTU2Ii8+CjwvbGluZWFyR3JhZGllbnQ+CjxsaW5lYXJHcmFkaWVudCBpZD0icGFpbnQxX2xpbmVhcl85MTlfMTA5NiIgeDE9IjU2LjMyNjciIHkxPSIyOS4yNjY3IiB4Mj0iNzcuODM3NiIgeTI9IjI5LjI2NjciIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIj4KPHN0b3Agc3RvcC1jb2xvcj0iI0JCNDA5OCIvPgo8c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiNGRjRBNTYiLz4KPC9saW5lYXJHcmFkaWVudD4KPC9kZWZzPgo8L3N2Zz4K"},23425:function(M,I){I.Z="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTYiIGhlaWdodD0iMzUiIHZpZXdCb3g9IjAgMCA1NiAzNSIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTMyLjMxMzggMC4xNjQwNjJMMTguODAzMyAzNC41NjcxSDBMMTguNjY0IDAuMTY0MDYySDMyLjMxMzhaTTU1Ljg1MjggMC4xNjQwNjJMNDMuMTc3OSAzNC41NjcxSDI1LjQ4ODlMNDIuMjAzIDAuMTY0MDYySDU1Ljg1MjhaIiBmaWxsPSJ1cmwoI3BhaW50MF9saW5lYXJfNTM2N18yMTkxNSkiLz4KPGRlZnM+CjxsaW5lYXJHcmFkaWVudCBpZD0icGFpbnQwX2xpbmVhcl81MzY3XzIxOTE1IiB4MT0iLTcuNSIgeTE9IjI4IiB4Mj0iNjAuNSIgeTI9IjEwIiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+CjxzdG9wLz4KPHN0b3Agb2Zmc2V0PSIwLjM1OTM3NSIgc3RvcC1jb2xvcj0iIzBGMjZBQSIvPgo8c3RvcCBvZmZzZXQ9IjAuODgwMyIgc3RvcC1jb2xvcj0iI0ZGNEE1NiIvPgo8L2xpbmVhckdyYWRpZW50Pgo8L2RlZnM+Cjwvc3ZnPgo="},42994:function(M,I){I.Z="data:image/svg+xml;base64,PCFET0NUWVBFIHN2ZyBQVUJMSUMgIi0vL1czQy8vRFREIFNWRyAyMDAxMDkwNC8vRU4iICJodHRwOi8vd3d3LnczLm9yZy9UUi8yMDAxL1JFQy1TVkctMjAwMTA5MDQvRFREL3N2ZzEwLmR0ZCI+CjxzdmcgdmVyc2lvbj0iMS4wIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0NzhweCIgaGVpZ2h0PSIzOTVweCIgdmlld0JveD0iMCAwIDQ3ODAgMzk1MCIgcHJlc2VydmVBc3BlY3RSYXRpbz0ieE1pZFlNaWQgbWVldCI+CjxnIGlkPSJsYXllcjEiIGZpbGw9IiMwMDAwMDAiIHN0cm9rZT0ibm9uZSI+CiA8cGF0aCBkPSJNMjA2MyAzNjEzIGwtMTEyIC00NCAtOTkgLTEwNyBjLTg3IC05NSAtMTE0IC0xMzQgLTIzMyAtMzM3IC03MyAtMTI2IC00MjAgLTY4OCAtNzcxIC0xMjQ4IC03NDggLTExOTcgLTY5MCAtMTA3NyAtNjQzIC0xMzA2IDE1IC03NSAzMyAtMTQ4IDQwIC0xNjIgNyAtMTUgNDEgLTYxIDc2IC0xMDMgbDYzIC03NiAxMDkgLTM2IDEwOSAtMzYgMTcxNyA3IDE3MTYgNyA3NiAzOCBjMTAxIDUxIDE0MCAxMDggMTg4IDI3MiBsMzQgMTE3IC0zMyAxMzMgYy0yOCAxMTMgLTQ2IDE2MCAtMTIxIDMwOSAtNzIgMTQ0IC0xNDUgMjYzIC00MTEgNjY1IC0xNzggMjY5IC00OTEgNzM0IC02OTQgMTAzNCAtMjA0IDMwMCAtMzk5IDU5MCAtNDM0IDY0NSAtODUgMTM0IC0xNjIgMjIyIC0yMDMgMjMxIC0xOCAzIC0zNiAxMCAtNDIgMTQgLTIwIDE1IC0xMDUgMzAgLTE2MiAyOSAtNDQgLTEgLTg2IC0xMiAtMTcwIC00NnoiLz4KIDwvZz4KCjwvc3ZnPg=="}}]);
//# sourceMappingURL=component---src-pages-automated-security-for-startups-js-08b01b0bbd2846b4c3ae.js.map