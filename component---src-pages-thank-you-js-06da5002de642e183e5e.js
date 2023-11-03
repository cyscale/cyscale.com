"use strict";(self.webpackChunkcyscale_gatsby=self.webpackChunkcyscale_gatsby||[]).push([[6184,8367],{86301:function(t,e,a){function n(){return n=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var a=arguments[e];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(t[n]=a[n])}return t},n.apply(this,arguments)}a.d(e,{Z:function(){return o}});var l=function(){var t="undefined"!=typeof window&&window._hsq?window._hsq:[],e=function(){t.push(["trackPageView"])};return{setContentType:function(e){t.push(["setContentType",e])},setPathPageView:function(a){t.push(["setPath",a]),e()},setTrackPageView:e,setIdentity:function(e,a){t.push(["identify",n({email:e},a)])},setTrackEvent:function(e){var a=e.eventId,n=e.value;t.push(["trackEvent",{id:a,value:n}])}}};function o(t){let{pageName:e}=t;const{setIdentity:a,setContentType:n}=l();if("undefined"!=typeof window){const t=localStorage.getItem("user-email");t&&a(t)}n("blog-detail"===e?"blog-post":"standard-page")}},33926:function(t,e,a){var n=a(67294),l=a(22588),o=a(46299),i=a(80414),r=a(26040),s=a(86301),c=a(17631),u=a(44410),d=a(52468),m=a(35533),g=a(95030),Z=a(86363),p=a(64593),x=a(70917);e.Z=t=>{let{children:e,title:a,description:M,pageName:I,location:N,banner:f,noIndex:y,blogDetails:v}=t;(0,s.Z)({pageName:I});const{0:b,1:h}=(0,n.useState)(!1),{cookies:k,cookiesBanner:j,setCookiesBanner:w}=(0,m.Z)();return(0,x.tZ)(u.Z,null,(0,x.tZ)(r.Z.Provider,{value:{location:N}},(0,x.tZ)(l.Z,{title:a,description:M,pageName:I,location:N,banner:f,blogDetails:v}),(0,x.tZ)(p.q,null,y&&(0,x.tZ)("meta",{name:"robots",content:"noindex"}),y&&(0,x.tZ)("meta",{name:"robots",content:"nofollow"})),(0,x.tZ)(i.Z.Provider,{value:{sticker:b,setSticker:h}},(0,x.tZ)(Z.Z,{pageName:I,location:N})),(0,x.tZ)("main",null,e),(0,x.tZ)(o.default,{pageUri:null==N?void 0:N.pathname,pageName:I}),!0!==Boolean(k[g.VB])&&(0,x.tZ)(c.Z,{cookiesBanner:j,setCookiesBanner:w,pageName:I}),(0,x.tZ)(d.Z,null)))}},80414:function(t,e,a){const n=a(67294).createContext({sticker:!1,setSticker:()=>{}});e.Z=n},61422:function(t,e,a){a.d(e,{Z:function(){return c}});var n=a(13311),l=a.n(n),o=a(67294),i=a(2075),r=a(18994),s=a(70917);function c(t){let{author:e,permalink:a,title:n}=t;const c=l()(i.Z,(t=>{let{name:a}=t;return a===e}))||e;return(0,s.tZ)("div",null,"string"==typeof c?(0,s.tZ)("span",{className:"text-xs text-black  h-7 block py-1"},"By ",(0,s.tZ)("strong",null,c)):(0,s.tZ)("div",{className:"flex justify-between items-center"},(0,s.tZ)("div",{className:"flex items-center"},(0,s.tZ)("div",{className:"h-7 w-7 mr-2 rounded-full border-digital border"},o.cloneElement(c.photo,{...c.photo.props,className:"rounded-full overflow-hidden relative z-10",alt:"Author image"})),(0,s.tZ)("span",{className:"text-xs text-black font-montserrat"},"By ",(0,s.tZ)("strong",null,c.name))),(0,s.tZ)(r.Z,{title:n,permalink:a})))}},15043:function(t,e,a){a.d(e,{Z:function(){return c}});var n=a(67294),l=a(14160),o=a(46488),i=a(61422),r=a(38032),s=a(70917);function c(t){var e;let{authors:a,categories:c,date:u,permalink:d,title:m,description:g,featuredimage:Z}=t;const p=n.useRef();return(0,s.tZ)("div",{role:"link",tabIndex:0,onClick:()=>p.current.click(),onKeyDown:t=>(13===t.code||32===t.code)&&p.current.click(),className:"rounded-xl shadow-lg bg-white block overflow-hidden group h-full cursor-pointer"},Z&&(0,s.tZ)("div",{className:"relative overflow-hidden",style:{paddingBottom:"56.2%"}},(0,s.tZ)("div",{className:"absolute top-0 left-0"},(0,s.tZ)(r.G,{image:null==Z||null===(e=Z.childImageSharp)||void 0===e?void 0:e.gatsbyImageData,alt:m,imgStyle:{borderTopLeftRadius:"0.75rem",borderTopRightRadius:"0.75rem"}}))),(0,s.tZ)("div",{className:"p-5 flex flex-col"},(0,s.tZ)(o.Z,{date:u,categories:c}),(0,s.tZ)(l.rU,{ref:p,to:"/blog/"+d+"/"},(0,s.tZ)("h2",{className:"text-lg my-4 leading-tight font-medium group-hover:text-primary transition-all h-16 font-montserrat"},m)),(0,s.tZ)("div",{className:"mt-auto"},(0,s.tZ)(i.Z,{author:a,title:m,description:g,permalink:d}))))}},98515:function(t,e,a){a.d(e,{Z:function(){return u}});var n=a(67294),l=a(14160),o=a(46488),i=a(61422),r=a(38032),s=a(70917);var c={name:"f2ladt",styles:"height:14rem"};function u(t){var e;let{authors:a,categories:u,date:d,permalink:m,title:g,description:Z,featuredimage:p,duration:x}=t;const M=n.useRef();return(0,s.tZ)("div",{role:"link",tabIndex:0,onClick:()=>x>150?null:M.current.click(),onKeyDown:t=>(13===t.code||32===t.code)&&M.current.click(),className:"rounded-xl shadow-lg bg-white block overflow-hidden group h-full cursor-pointer",draggable:!1,style:{userSelect:"none",WebkitUserSelect:"none",MozUserSelect:"none",msUserSelect:"none"}},p&&(0,s.tZ)("div",{className:"relative overflow-hidden",style:{paddingBottom:"56.2%"}},(0,s.tZ)("div",{className:"absolute top-0 left-0"},(0,s.tZ)(r.G,{image:null==p||null===(e=p.childImageSharp)||void 0===e?void 0:e.gatsbyImageData,alt:g,imgStyle:{borderTopLeftRadius:"0.75rem",borderTopRightRadius:"0.75rem"},draggable:!1}))),(0,s.tZ)("div",{className:"p-5 flex flex-col",css:c},(0,s.tZ)(o.Z,{date:d,categories:u}),(0,s.tZ)(l.rU,{ref:M,to:"/blog/"+m+"/",draggable:!1}),(0,s.tZ)("h2",{className:"text-lg my-4 leading-tight font-medium group-hover:text-primary transition-all h-16 font-montserrat"},g),(0,s.tZ)("div",{className:"mt-auto"},(0,s.tZ)(i.Z,{author:a,title:g,description:Z,permalink:m}))))}},46488:function(t,e,a){a.d(e,{Z:function(){return i}});a(67294);var n=a(13103),l=a(65822),o=a(70917);function i(t){let{categories:e,date:a}=t;return(0,o.tZ)("div",{className:"flex justify-between items-start"},(0,o.tZ)("span",null,(0,o.tZ)(l.Z,{categories:e})),(0,o.tZ)("span",{className:"text-xs text-black text-opacity-70 pt-1 font-montserrat"},(0,n.p6)(a)))}},71244:function(t,e,a){var n=a(35161),l=a.n(n),o=(a(67294),a(14160)),i=a(15043),r=a(39008),s=a(94184),c=a.n(s),u=a(70917);e.Z=t=>{var e;let{bg:a}=t;const n=(0,o.K2)("2199015418"),s=null==n||null===(e=n.allMarkdownRemark)||void 0===e?void 0:e.edges;return(0,u.tZ)("div",{className:c()({"mt-0 py-12":!0,"bg-lightGrey ":"transparent"!==a,"bg-transparent":"transparent"===a})},(0,u.tZ)("div",{className:"container max-w-7xl m-auto"},(0,u.tZ)(r.X2,{className:"gap-4 lg:gap-8"},l()(s,((t,e)=>{let{node:a}=t;return(0,u.tZ)("div",{key:e,className:"col-span-12 md:col-span-6 lg:col-span-4"},(0,u.tZ)(i.Z,a.frontmatter))}))),(0,u.tZ)("div",{className:"block w-full mt-50px text-center"},(0,u.tZ)("div",{className:"mt-6 mx-auto w-auto flex justify-center"},(0,u.tZ)(o.rU,{to:"/blog/",className:"gradientBgBtn max-w-md text-base font-medium rounded text-white uppercase text-center py-5 px-12 no-underline"},"Read more about cloud security")))))}},39379:function(t,e,a){a.r(e),a.d(e,{default:function(){return p}});a(67294);var n=a(33926),l=a(39008),o=a(14160),i=a(71244),r=a(87462),s=a(35161),c=a.n(s),u=a(98515),d=a(70917);var m={name:"1jbroe5",styles:"max-width:calc(100% + 1rem)"};var g=t=>{var e;let{duration:a}=t;const n=(0,o.K2)("2199015418");return(0,d.tZ)("div",{className:"absolute mt-4 lg:mt-0 z-10",css:m},(0,d.tZ)("div",{className:"flex flex-nowrap gap-2 overflow-x-scroll scrollbar-hide z-10"},c()(null==n||null===(e=n.allMarkdownRemark)||void 0===e?void 0:e.edges,((t,e)=>{let{node:n}=t;return(0,d.tZ)("div",{className:"py-4",key:e},(0,d.tZ)("div",{className:"w-72 lg:w-96 m-2 rounded-lg shadow-lg"},(0,d.tZ)(u.Z,(0,r.Z)({},n.frontmatter,{duration:a}))))}))))};var Z={name:"1pxnjis",styles:"margin-bottom:27rem"};var p=t=>{let{location:e}=t;return(0,d.tZ)(n.Z,{location:e,pageName:"ThankYou",title:"Thank you! - Cyscale",description:"Thank you!",noIndex:!0},(0,d.tZ)("div",{className:"pt-24 pb-24 lg:pt-32 lg:pb-32 bg-lightGrey2"},(0,d.tZ)(l.W2,null,(0,d.tZ)("div",{className:"bg-white rounded-md pt-12 pb-24 px-1"},(0,d.tZ)("img",{src:"data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTQ0IiBoZWlnaHQ9Ijg2IiB2aWV3Qm94PSIwIDAgMTQ0IDg2IiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTI3IDE0LjA2MjVIODguODk0VjIwLjM5MzJIMzMuMzMwN1Y2My4wMzU0SDEwNS43NTdWMzcuMTkxN0gxMTIuMDg4VjY5LjM2NjFIMjdWMTQuMDYyNVoiIGZpbGw9ImJsYWNrIi8+CjxwYXRoIGQ9Ik0xMzAuNTcgMjAuMzk2MlYxNEMxMjAuNDI2IDE0IDExMi4xNTYgMjIuMjY5OCAxMTIuMTU2IDMyLjQxMzNIMTE4LjU1MkMxMTguNDg4IDI1LjgyMzIgMTIzLjkxNSAyMC4zOTYyIDEzMC41NyAyMC4zOTYyWiIgZmlsbD0idXJsKCNwYWludDBfbGluZWFyXzU1MzZfMjE2ODUpIi8+CjxwYXRoIGQ9Ik05My43NDIyIDE0LjA3MDNWMjAuNDY2NUMxMDAuMzk3IDIwLjQ2NjUgMTA1Ljc1OSAyNS44OTM2IDEwNS43NTkgMzIuNDgzNkgxMTIuMTU1QzExMi4xNTUgMjIuMjc1NSAxMDMuODg2IDE0LjA3MDMgOTMuNzQyMiAxNC4wNzAzWiIgZmlsbD0idXJsKCNwYWludDFfbGluZWFyXzU1MzZfMjE2ODUpIi8+CjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNMjguMjMwNSAxOS43Mjk2TDMyLjA5OTUgMTQuNzE4OEw2OS41NzUxIDQzLjY1NDhMODguOTYxMSAyOC42NzQ4TDkyLjgzMiAzMy42ODQyTDY5LjU3NjYgNTEuNjU0M0wyOC4yMzA1IDE5LjcyOTZaIiBmaWxsPSJibGFjayIvPgo8ZGVmcz4KPGxpbmVhckdyYWRpZW50IGlkPSJwYWludDBfbGluZWFyXzU1MzZfMjE2ODUiIHgxPSI4OS4xMjM1IiB5MT0iMjMuMjQ0OSIgeDI9IjEyOC45NzkiIHkyPSIyMy4yNDQ5IiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+CjxzdG9wIG9mZnNldD0iMC4xMDY5IiBzdG9wLWNvbG9yPSIjMEYyNkFBIi8+CjxzdG9wIG9mZnNldD0iMC44ODAzIiBzdG9wLWNvbG9yPSIjRkY0QTU2Ii8+CjwvbGluZWFyR3JhZGllbnQ+CjxsaW5lYXJHcmFkaWVudCBpZD0icGFpbnQxX2xpbmVhcl81NTM2XzIxNjg1IiB4MT0iODkuMTIyOCIgeTE9IjIzLjI1MDYiIHgyPSIxMjguOTc4IiB5Mj0iMjMuMjUwNiIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiPgo8c3RvcCBvZmZzZXQ9IjAuMTA2OSIgc3RvcC1jb2xvcj0iIzBGMjZBQSIvPgo8c3RvcCBvZmZzZXQ9IjAuODgwMyIgc3RvcC1jb2xvcj0iI0ZGNEE1NiIvPgo8L2xpbmVhckdyYWRpZW50Pgo8L2RlZnM+Cjwvc3ZnPgo=",alt:"",className:"block mx-auto"}),(0,d.tZ)("h1",{className:"text-center text-xl lg:text-4xl text-blue font-montserrat font-bold mt-8 lg:mt-10"},"Thank you for contacting us, our team will be in touch shortly."),(0,d.tZ)("p",{className:"text-lg lg:text-2xl font-montserrat text-center mt-4"},"If you have any further questions in the meantime, you can reach out to us via email:"," ",(0,d.tZ)("a",{href:"mailto:contact@cyscale.com",className:"underline text-blue"},"contact@cyscale.com"))," "),(0,d.tZ)("p",{className:"text-lg lg:text-2xl font-montserrat text-center mt-24"},"Stay on top of the fast-moving world of cloud infrastructure security with our guide:"," "),(0,d.tZ)(o.rU,{to:"/blog/cloud-security-challenges/",className:"text-lg lg:text-2xl font-montserrat text-center underline block mt-2 mb-12 text-blue font-bold"},"Top 10 Cloud Security Challenges: Threats, Vulnerabilities, and Solutions"),(0,d.tZ)("div",{className:"hidden lg:block"},(0,d.tZ)(i.Z,{bg:"transparent"})),(0,d.tZ)("div",{className:"block lg:hidden",css:Z},(0,d.tZ)("div",{className:"relative"},(0,d.tZ)(g,null))))))}}}]);
//# sourceMappingURL=component---src-pages-thank-you-js-06da5002de642e183e5e.js.map