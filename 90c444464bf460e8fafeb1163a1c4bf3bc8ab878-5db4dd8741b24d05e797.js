(self.webpackChunkcyscale_gatsby=self.webpackChunkcyscale_gatsby||[]).push([[6661],{86301:function(t,e,a){"use strict";function n(){return n=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var a=arguments[e];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(t[n]=a[n])}return t},n.apply(this,arguments)}a.d(e,{Z:function(){return l}});var r=function(){var t="undefined"!=typeof window&&window._hsq?window._hsq:[],e=function(){t.push(["trackPageView"])};return{setContentType:function(e){t.push(["setContentType",e])},setPathPageView:function(a){t.push(["setPath",a]),e()},setTrackPageView:e,setIdentity:function(e,a){t.push(["identify",n({email:e},a)])},setTrackEvent:function(e){var a=e.eventId,n=e.value;t.push(["trackEvent",{id:a,value:n}])}}};function l(t){let{pageName:e}=t;const{setIdentity:a,setContentType:n}=r();if("undefined"!=typeof window){const t=localStorage.getItem("user-email");t&&a(t)}n("blog-detail"===e?"blog-post":"standard-page")}},33926:function(t,e,a){"use strict";var n=a(67294),r=a(6325),l=a(67156),i=a(80414),o=a(26040),s=a(86301),c=a(17631),u=a(44410),m=a(52468),g=a(35533),d=a(95030),N=a(86363),Z=a(64593),p=a(70917);e.Z=t=>{let{children:e,title:a,description:x,pageName:f,location:h,banner:v,noIndex:y}=t;(0,s.Z)({pageName:f});const{0:b,1:M}=(0,n.useState)(!1),{cookies:D,cookiesBanner:I,setCookiesBanner:k}=(0,g.Z)();return(0,p.tZ)(u.Z,null,(0,p.tZ)(o.Z.Provider,{value:{location:h}},(0,p.tZ)(r.Z,{title:a,description:x,pageName:f,location:h,banner:v}),(0,p.tZ)(Z.q,null,y&&(0,p.tZ)("meta",{name:"robots",content:"noindex"}),y&&(0,p.tZ)("meta",{name:"robots",content:"nofollow"})),(0,p.tZ)(i.Z.Provider,{value:{sticker:b,setSticker:M}},(0,p.tZ)(N.Z,{pageName:f,location:h})),(0,p.tZ)("main",null,e),(0,p.tZ)(l.default,{pageUri:null==h?void 0:h.pathname,pageName:f}),!0!==Boolean(D[d.VB])&&(0,p.tZ)(c.Z,{cookiesBanner:I,setCookiesBanner:k,pageName:f}),(0,p.tZ)(m.Z,null)))}},80414:function(t,e,a){"use strict";const n=a(67294).createContext({sticker:!1,setSticker:()=>{}});e.Z=n},61422:function(t,e,a){"use strict";a.d(e,{Z:function(){return c}});var n=a(13311),r=a.n(n),l=a(67294),i=a(2075),o=a(18994),s=a(70917);function c(t){let{author:e,permalink:a,title:n}=t;const c=r()(i.Z,(t=>{let{name:a}=t;return a===e}))||e;return(0,s.tZ)("div",null,"string"==typeof c?(0,s.tZ)("span",{className:"text-xs text-black  h-7 block py-1"},"By ",(0,s.tZ)("strong",null,c)):(0,s.tZ)("div",{className:"flex justify-between items-center"},(0,s.tZ)("div",{className:"flex items-center"},(0,s.tZ)("div",{className:"h-7 w-7 mr-2 rounded-full border-digital border"},l.cloneElement(c.photo,{...c.photo.props,className:"rounded-full overflow-hidden relative z-10",alt:"Author image"})),(0,s.tZ)("span",{className:"text-xs text-black font-montserrat"},"By ",(0,s.tZ)("strong",null,c.name))),(0,s.tZ)(o.Z,{title:n,permalink:a})))}},15043:function(t,e,a){"use strict";a.d(e,{Z:function(){return c}});var n=a(67294),r=a(14160),l=a(46488),i=a(61422),o=a(38032),s=a(70917);function c(t){var e;let{authors:a,categories:c,date:u,permalink:m,title:g,description:d,featuredimage:N}=t;const Z=n.useRef();return(0,s.tZ)("div",{role:"link",tabIndex:0,onClick:()=>Z.current.click(),onKeyDown:t=>(13===t.code||32===t.code)&&Z.current.click(),className:"rounded-xl shadow-lg bg-white block overflow-hidden group h-full cursor-pointer"},N&&(0,s.tZ)("div",{className:"relative overflow-hidden",style:{paddingBottom:"56.2%"}},(0,s.tZ)("div",{className:"absolute top-0 left-0"},(0,s.tZ)(o.G,{image:null==N||null===(e=N.childImageSharp)||void 0===e?void 0:e.gatsbyImageData,alt:g,imgStyle:{borderTopLeftRadius:"0.75rem",borderTopRightRadius:"0.75rem"}}))),(0,s.tZ)("div",{className:"p-5 flex flex-col"},(0,s.tZ)(l.Z,{date:u,categories:c}),(0,s.tZ)(r.rU,{ref:Z,to:"/blog/"+m+"/"},(0,s.tZ)("h2",{className:"text-lg my-4 leading-tight font-medium group-hover:text-primary transition-all h-16 font-montserrat"},g)),(0,s.tZ)("div",{className:"mt-auto"},(0,s.tZ)(i.Z,{author:a,title:g,description:d,permalink:m}))))}},46488:function(t,e,a){"use strict";a.d(e,{Z:function(){return i}});a(67294);var n=a(13103),r=a(65822),l=a(70917);function i(t){let{categories:e,date:a}=t;return(0,l.tZ)("div",{className:"flex justify-between items-start"},(0,l.tZ)("span",null,(0,l.tZ)(r.Z,{categories:e})),(0,l.tZ)("span",{className:"text-xs text-black text-opacity-70 pt-1 font-montserrat"},(0,n.p6)(a)))}},65142:function(t,e,a){"use strict";a.d(e,{Z:function(){return k}});var n=a(69579),r=a.n(n),l=a(35161),i=a.n(l),o=a(67294),s=a(33926),c=a(39008),u=a(87462),m=a(94184),g=a.n(m),d=a(14160),N=a(70917);function Z(t){let{children:e,active:a,className:n,...r}=t;return(0,N.tZ)(d.rU,(0,u.Z)({className:g()("px-4 py-2 rounded-full shadow-sm bg-white bg-opacity-50 text-black text-opacity-70 text-sm","hover:bg-opacity-100 hover:text-opacity-100 transition-all",{"bg-opacity-100 text-opacity-100 text-primary":a},n)},r),e)}var p=a(61422),x=a(46488),f=a(38032);function h(t){let{authors:e,categories:a,description:n,date:r,permalink:l,title:i,featuredimage:s}=t;const c=o.useRef();return(0,N.tZ)("div",{role:"link",tabIndex:0,onClick:()=>c.current.click(),onKeyDown:t=>(13===t.code||32===t.code)&&c.current.click(),className:"rounded-xl shadow-lg bg-white block overflow-hidden group cursor-pointer"},(0,N.tZ)("div",{className:"grid grid-cols-12"},(0,N.tZ)("div",{className:"col-span-4 p-5 flex flex-col justify-between min-h-72 lg:min-h-100"},(0,N.tZ)(x.Z,{date:r,categories:a}),(0,N.tZ)(d.rU,{to:"/blog/"+l+"/",ref:c},(0,N.tZ)("h2",{className:"text-xl lg:text-3xl leading-tight font-medium group-hover:text-primary transition-all font-montserrat"},i)),(0,N.tZ)(p.Z,{author:e,title:i,permalink:l})),(0,N.tZ)("div",{className:"col-span-8"},(0,N.tZ)(f.G,{image:s.childImageSharp.gatsbyImageData,alt:i}))))}var v=a(15043),y=a(15785);const b="...",M=(t,e)=>{let a=e-t+1;return Array.from({length:a},((e,a)=>a+t))};const D={name:"1sy0m6e",styles:"height:2.5rem;width:2.5rem"};var I=t=>{let{numPages:e,currentPage:a,limit:n,prevPagePath:r,nextPagePath:l,getPageNumberPath:i,isFirst:s,isLast:c}=t;const u=(t=>{let{totalCount:e,pageSize:a,siblingCount:n=1,currentPage:r}=t;return(0,o.useMemo)((()=>{const t=Math.ceil(e/a);if(n+5>=t)return M(1,t);const l=Math.max(r-n,1),i=Math.min(r+n,t),o=l>2,s=i<t-2,c=1,u=t;if(!o&&s){let e=M(1,3+2*n);return[].concat((0,y.Z)(e),[b,t])}if(o&&!s){let e=M(t-(3+2*n)+1,t);return[c,b].concat((0,y.Z)(e))}if(o&&s){let t=M(l,i);return[c,b].concat((0,y.Z)(t),[b,u])}}),[e,a,n,r])})({currentPage:a,totalCount:e*n,siblingCount:1,pageSize:n});return(0,N.tZ)(o.Fragment,null,e>=2&&(0,N.tZ)("div",{className:"flex justify-center mb-20"},(0,N.tZ)("div",{className:"flex justify-between"},!s&&(0,N.tZ)(d.rU,{to:r,rel:"prev",className:"bg-transparent text-grey2 flex justify-center items-center rounded-md hover:bg-grey3",css:D},(0,N.tZ)("img",{src:"data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0xNi4xNzA1IDQuNDU0NzVDMTYuNjA5OCA0Ljg5NDA5IDE2LjYwOTggNS42MDY0IDE2LjE3MDUgNi4wNDU3NEwxMC4yMTYgMTIuMDAwMkwxNi4xNzA1IDE3Ljk1NDdDMTYuNjA5OCAxOC4zOTQxIDE2LjYwOTggMTkuMTA2NCAxNi4xNzA1IDE5LjU0NTdDMTUuNzMxMiAxOS45ODUxIDE1LjAxODggMTkuOTg1MSAxNC41Nzk1IDE5LjU0NTdMNy44Mjk1IDEyLjc5NTdDNy4zOTAxNyAxMi4zNTY0IDcuMzkwMTcgMTEuNjQ0MSA3LjgyOTUgMTEuMjA0N0wxNC41Nzk1IDQuNDU0NzVDMTUuMDE4OCA0LjAxNTQxIDE1LjczMTIgNC4wMTU0MSAxNi4xNzA1IDQuNDU0NzVaIiBmaWxsPSJibGFjayIvPgo8L3N2Zz4K",alt:""})),u.map((t=>t===b?(0,N.tZ)("p",{className:"flex items-center mx-0.5 sm:mx-2",key:t+1},(0,N.tZ)("span",null,"•••")):(0,N.tZ)(d.rU,{key:t+1,to:i(t-1),className:g()("flex justify-center items-center mx-0.5 sm:mx-2",{"bg-white rounded-md":a===t,"bg-transparent rounded-md hover:bg-grey3":a!==t}),css:D},(0,N.tZ)("span",null,t)))),!c&&(0,N.tZ)(d.rU,{to:l,rel:"next",className:"bg-transparent flex justify-center items-center rounded-md hover:bg-grey3",css:D},(0,N.tZ)("img",{src:"data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik03LjgyOTUgNC40NTQ3NUM4LjI2ODg0IDQuMDE1NDEgOC45ODExNSA0LjAxNTQxIDkuNDIwNDkgNC40NTQ3NUwxNi4xNzA1IDExLjIwNDdDMTYuNjA5OCAxMS42NDQxIDE2LjYwOTggMTIuMzU2NCAxNi4xNzA1IDEyLjc5NTdMOS40MjA0OSAxOS41NDU3QzguOTgxMTUgMTkuOTg1MSA4LjI2ODg0IDE5Ljk4NTEgNy44Mjk1IDE5LjU0NTdDNy4zOTAxNyAxOS4xMDY0IDcuMzkwMTcgMTguMzk0MSA3LjgyOTUgMTcuOTU0N0wxMy43ODQgMTIuMDAwMkw3LjgyOTUgNi4wNDU3NEM3LjM5MDE3IDUuNjA2NCA3LjM5MDE3IDQuODk0MDkgNy44Mjk1IDQuNDU0NzVaIiBmaWxsPSJibGFjayIvPgo8L3N2Zz4K",alt:""})))))};var k=t=>{let{data:e,seoTitle:a,seoDescription:n,location:l,categoriesList:o,category:u,prevPagePath:m,nextPagePath:g,currentPage:d,getPageNumberPath:p,numPages:x,limit:f}=t;const y=1===d,b=d===x,{posts:M,featuredPost:D}=((t,e)=>{const a=[];let n=null;return null==t||t.map((t=>{var e;return!0===(null==t||null===(e=t.frontmatter)||void 0===e?void 0:e.featuredpost)&&null===n?n=t:a.push(t),null})),n||(n=a[0],delete a[0]),e?{posts:a,featuredPost:n}:{posts:t}})(e.allMarkdownRemark.edges.map((t=>t.node)),y);return(0,N.tZ)("div",{className:"bg-lightGrey2"},(0,N.tZ)(s.Z,{title:a,description:n,pageName:"blog",location:l},(0,N.tZ)(c.W2,null,(0,N.tZ)(c.$0,null,(0,N.tZ)("h1",{className:"text-3xl font-medium mb-4"},"Welcome to the Cyscale blog"),(0,N.tZ)("div",{className:"overflow-x-auto py-2 -mx-8 md:mx-0 pl-8 md:pl-0 hide-scrollbar max-w-screen"},(0,N.tZ)(Z,{className:"mr-2",to:"/blog/",active:"All"===u},"All"),i()(o,(t=>(0,N.tZ)(Z,{className:"mr-2 last:mr-0",active:u===t,to:"/blog/"+t.toLowerCase()+"/",key:t},t)))),(0,N.tZ)(c.X2,{className:"mt-8 gap-4 lg:gap-8"},y&&(0,N.tZ)("div",{className:"col-span-12",id:"what in the world are you talking about?"},(0,N.tZ)("div",{className:"hidden md:block"},M&&(0,N.tZ)(h,D.frontmatter)),(0,N.tZ)("div",{className:"block md:hidden"},D&&(0,N.tZ)(v.Z,D.frontmatter))),y&&(0,N.tZ)("div",{className:"col-span-12 md:col-span-6"},M[0]&&(0,N.tZ)(v.Z,M[0].frontmatter)),y&&(0,N.tZ)("div",{className:"col-span-12 md:col-span-6"},M[1]&&(0,N.tZ)(v.Z,M[1].frontmatter)),i()(r()(M,y?M.length-2:M.length+1),((t,e)=>(0,N.tZ)("div",{className:"col-span-12 md:col-span-6 lg:col-span-4",key:e},t&&(0,N.tZ)(v.Z,t.frontmatter))))))),(0,N.tZ)(I,{numPages:x,currentPage:d,limit:f,prevPagePath:m,nextPagePath:g,getPageNumberPath:p,isFirst:y,isLast:b})))}},14259:function(t){t.exports=function(t,e,a){var n=-1,r=t.length;e<0&&(e=-e>r?0:r+e),(a=a>r?r:a)<0&&(a+=r),r=e>a?0:a-e>>>0,e>>>=0;for(var l=Array(r);++n<r;)l[n]=t[n+e];return l}},69579:function(t,e,a){var n=a(14259),r=a(40554);t.exports=function(t,e,a){var l=null==t?0:t.length;return l?(e=a||void 0===e?1:r(e),n(t,(e=l-e)<0?0:e,l)):[]}}}]);
//# sourceMappingURL=90c444464bf460e8fafeb1163a1c4bf3bc8ab878-5db4dd8741b24d05e797.js.map