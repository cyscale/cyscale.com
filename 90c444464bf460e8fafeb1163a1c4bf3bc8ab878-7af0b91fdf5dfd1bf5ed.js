(self.webpackChunkcyscale_gatsby=self.webpackChunkcyscale_gatsby||[]).push([[6661],{44669:function(t,e,a){"use strict";function n(){return n=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var a=arguments[e];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(t[n]=a[n])}return t},n.apply(this,arguments)}a.d(e,{Z:function(){return i}});var r=function(){var t="undefined"!=typeof window&&window._hsq?window._hsq:[],e=function(){t.push(["trackPageView"])};return{setContentType:function(e){t.push(["setContentType",e])},setPathPageView:function(a){t.push(["setPath",a]),e()},setTrackPageView:e,setIdentity:function(e,a){t.push(["identify",n({email:e},a)])},setTrackEvent:function(e){var a=e.eventId,n=e.value;t.push(["trackEvent",{id:a,value:n}])}}};function i(t){var e=t.pageName,a=r(),n=a.setIdentity,i=a.setContentType;if("undefined"!=typeof window){var o=localStorage.getItem("user-email");o&&n(o)}i("blog-detail"===e?"blog-post":"standard-page")}},33926:function(t,e,a){"use strict";var n=a(67294),r=a(2900),i=a(82224),o=a(80414),s=a(26040),l=a(44669),c=a(62554),u=a(62319),g=a(38593),d=a(35533),m=a(95030),N=a(97233),Z=a(4382);e.Z=function(t){var e=t.children,a=t.title,f=t.description,p=t.pageName,v=t.location,x=t.banner;(0,l.Z)({pageName:p});var h=(0,n.useState)(!1),y=h[0],b=h[1],M=(0,d.Z)(),D=M.cookies,k=M.cookiesBanner,I=M.setCookiesBanner;return(0,Z.tZ)(u.Z,null,(0,Z.tZ)(s.Z.Provider,{value:{location:v}},(0,Z.tZ)(r.Z,{title:a,description:f,pageName:p,location:v,banner:x}),(0,Z.tZ)(o.Z.Provider,{value:{sticker:y,setSticker:b}},(0,Z.tZ)(N.Z,{pageName:p,location:v})),(0,Z.tZ)("main",null,e),(0,Z.tZ)(i.default,{pageUri:null==v?void 0:v.pathname,pageName:p}),!0!==Boolean(D[m.VB])&&(0,Z.tZ)(c.Z,{cookiesBanner:k,setCookiesBanner:I,pageName:p}),(0,Z.tZ)(g.Z,null)))}},80414:function(t,e,a){"use strict";var n=a(67294).createContext({sticker:!1,setSticker:function(){}});e.Z=n},61422:function(t,e,a){"use strict";a.d(e,{Z:function(){return c}});var n=a(13311),r=a.n(n),i=a(67294),o=a(2075),s=a(18994),l=a(4382);function c(t){var e=t.author,a=t.permalink,n=t.title,c=r()(o.Z,(function(t){return t.name===e}))||e;return(0,l.tZ)("div",null,"string"==typeof c?(0,l.tZ)("span",{className:"text-xs text-black  h-7 block py-1"},"By ",(0,l.tZ)("strong",null,c)):(0,l.tZ)("div",{className:"flex justify-between items-center"},(0,l.tZ)("div",{className:"flex items-center"},(0,l.tZ)("div",{className:"h-7 w-7 mr-2 rounded-full border-digital border"},i.cloneElement(c.photo,Object.assign({},c.photo.props,{className:"rounded-full overflow-hidden relative z-10",alt:"Author image"}))),(0,l.tZ)("span",{className:"text-xs text-black font-montserrat"},"By ",(0,l.tZ)("strong",null,c.name))),(0,l.tZ)(s.Z,{title:n,permalink:a})))}},15043:function(t,e,a){"use strict";a.d(e,{Z:function(){return c}});var n=a(67294),r=a(71082),i=a(46488),o=a(61422),s=a(93723),l=a(4382);function c(t){var e,a=t.authors,c=t.categories,u=t.date,g=t.permalink,d=t.title,m=t.description,N=t.featuredimage,Z=n.useRef();return(0,l.tZ)("div",{role:"link",tabIndex:0,onClick:function(){return Z.current.click()},onKeyDown:function(t){return(13===t.code||32===t.code)&&Z.current.click()},className:"rounded-xl shadow-lg bg-white block overflow-hidden group h-full cursor-pointer"},N&&(0,l.tZ)("div",{className:"relative overflow-hidden",style:{paddingBottom:"56.2%"}},(0,l.tZ)("div",{className:"absolute top-0 left-0"},(0,l.tZ)(s.G,{image:null==N||null===(e=N.childImageSharp)||void 0===e?void 0:e.gatsbyImageData,alt:d,imgStyle:{borderTopLeftRadius:"0.75rem",borderTopRightRadius:"0.75rem"}}))),(0,l.tZ)("div",{className:"p-5 flex flex-col"},(0,l.tZ)(i.Z,{date:u,categories:c}),(0,l.tZ)(r.rU,{ref:Z,to:"/blog/"+g+"/"},(0,l.tZ)("h2",{className:"text-lg my-4 leading-tight font-medium group-hover:text-primary transition-all h-16 font-montserrat"},d)),(0,l.tZ)("div",{className:"mt-auto"},(0,l.tZ)(o.Z,{author:a,title:d,description:m,permalink:g}))))}},46488:function(t,e,a){"use strict";a.d(e,{Z:function(){return o}});a(67294);var n=a(13103),r=a(65822),i=a(4382);function o(t){var e=t.categories,a=t.date;return(0,i.tZ)("div",{className:"flex justify-between items-start"},(0,i.tZ)("span",null,(0,i.tZ)(r.Z,{categories:e})),(0,i.tZ)("span",{className:"text-xs text-black text-opacity-70 pt-1 font-montserrat"},(0,n.p6)(a)))}},7278:function(t,e,a){"use strict";a.d(e,{Z:function(){return j}});var n=a(69579),r=a.n(n),i=a(35161),o=a.n(i),s=a(67294),l=a(33926),c=a(39008),u=a(87462),g=a(63366),d=a(69931),m=a.n(d),N=a(71082),Z=a(4382),f=["children","active","className"];function p(t){var e=t.children,a=t.active,n=t.className,r=(0,g.Z)(t,f);return(0,Z.tZ)(N.rU,(0,u.Z)({className:m()("px-4 py-2 rounded-full shadow-sm bg-white bg-opacity-50 text-black text-opacity-70 text-sm","hover:bg-opacity-100 hover:text-opacity-100 transition-all",{"bg-opacity-100 text-opacity-100 text-primary":a},n)},r),e)}var v=a(61422),x=a(46488),h=a(93723);function y(t){var e=t.authors,a=t.categories,n=(t.description,t.date),r=t.permalink,i=t.title,o=t.featuredimage,l=s.useRef();return(0,Z.tZ)("div",{role:"link",tabIndex:0,onClick:function(){return l.current.click()},onKeyDown:function(t){return(13===t.code||32===t.code)&&l.current.click()},className:"rounded-xl shadow-lg bg-white block overflow-hidden group cursor-pointer"},(0,Z.tZ)("div",{className:"grid grid-cols-12"},(0,Z.tZ)("div",{className:"col-span-4 p-5 flex flex-col justify-between min-h-72 lg:min-h-100"},(0,Z.tZ)(x.Z,{date:n,categories:a}),(0,Z.tZ)(N.rU,{to:"/blog/"+r+"/",ref:l},(0,Z.tZ)("h2",{className:"text-xl lg:text-3xl leading-tight font-medium group-hover:text-primary transition-all font-montserrat"},i)),(0,Z.tZ)(v.Z,{author:e,title:i,permalink:r})),(0,Z.tZ)("div",{className:"col-span-8"},(0,Z.tZ)(h.G,{image:o.childImageSharp.gatsbyImageData,alt:i}))))}var b=a(15043),M=a(93433),D="...",k=function(t,e){var a=e-t+1;return Array.from({length:a},(function(e,a){return a+t}))};var I={name:"1sy0m6e",styles:"height:2.5rem;width:2.5rem"},w=function(t){var e=t.numPages,a=t.currentPage,n=t.limit,r=t.prevPagePath,i=t.nextPagePath,o=t.getPageNumberPath,l=t.isFirst,c=t.isLast,u=function(t){var e=t.totalCount,a=t.pageSize,n=t.siblingCount,r=void 0===n?1:n,i=t.currentPage;return(0,s.useMemo)((function(){var t=Math.ceil(e/a);if(r+5>=t)return k(1,t);var n=Math.max(i-r,1),o=Math.min(i+r,t),s=n>2,l=o<t-2,c=1,u=t;if(!s&&l){var g=k(1,3+2*r);return[].concat((0,M.Z)(g),[D,t])}if(s&&!l){var d=k(t-(3+2*r)+1,t);return[c,D].concat((0,M.Z)(d))}if(s&&l){var m=k(n,o);return[c,D].concat((0,M.Z)(m),[D,u])}}),[e,a,r,i])}({currentPage:a,totalCount:e*n,siblingCount:1,pageSize:n});return(0,Z.tZ)(s.Fragment,null,e>=2&&(0,Z.tZ)("div",{className:"flex justify-center mb-20"},(0,Z.tZ)("div",{className:"flex justify-between"},!l&&(0,Z.tZ)(N.rU,{to:r,rel:"prev",className:"bg-transparent text-grey2 flex justify-center items-center rounded-md hover:bg-grey3",css:I},(0,Z.tZ)("img",{src:"data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0xNi4xNzA1IDQuNDU0NzVDMTYuNjA5OCA0Ljg5NDA5IDE2LjYwOTggNS42MDY0IDE2LjE3MDUgNi4wNDU3NEwxMC4yMTYgMTIuMDAwMkwxNi4xNzA1IDE3Ljk1NDdDMTYuNjA5OCAxOC4zOTQxIDE2LjYwOTggMTkuMTA2NCAxNi4xNzA1IDE5LjU0NTdDMTUuNzMxMiAxOS45ODUxIDE1LjAxODggMTkuOTg1MSAxNC41Nzk1IDE5LjU0NTdMNy44Mjk1IDEyLjc5NTdDNy4zOTAxNyAxMi4zNTY0IDcuMzkwMTcgMTEuNjQ0MSA3LjgyOTUgMTEuMjA0N0wxNC41Nzk1IDQuNDU0NzVDMTUuMDE4OCA0LjAxNTQxIDE1LjczMTIgNC4wMTU0MSAxNi4xNzA1IDQuNDU0NzVaIiBmaWxsPSJibGFjayIvPgo8L3N2Zz4K",alt:""})),u.map((function(t){return t===D?(0,Z.tZ)("p",{className:"flex items-center mx-0.5 sm:mx-2",key:t+1},(0,Z.tZ)("span",null,"•••")):(0,Z.tZ)(N.rU,{key:t+1,to:o(t-1),className:m()("flex justify-center items-center mx-0.5 sm:mx-2",{"bg-white rounded-md":a===t,"bg-transparent rounded-md hover:bg-grey3":a!==t}),css:I},(0,Z.tZ)("span",null,t))})),!c&&(0,Z.tZ)(N.rU,{to:i,rel:"next",className:"bg-transparent flex justify-center items-center rounded-md hover:bg-grey3",css:I},(0,Z.tZ)("img",{src:"data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik03LjgyOTUgNC40NTQ3NUM4LjI2ODg0IDQuMDE1NDEgOC45ODExNSA0LjAxNTQxIDkuNDIwNDkgNC40NTQ3NUwxNi4xNzA1IDExLjIwNDdDMTYuNjA5OCAxMS42NDQxIDE2LjYwOTggMTIuMzU2NCAxNi4xNzA1IDEyLjc5NTdMOS40MjA0OSAxOS41NDU3QzguOTgxMTUgMTkuOTg1MSA4LjI2ODg0IDE5Ljk4NTEgNy44Mjk1IDE5LjU0NTdDNy4zOTAxNyAxOS4xMDY0IDcuMzkwMTcgMTguMzk0MSA3LjgyOTUgMTcuOTU0N0wxMy43ODQgMTIuMDAwMkw3LjgyOTUgNi4wNDU3NEM3LjM5MDE3IDUuNjA2NCA3LjM5MDE3IDQuODk0MDkgNy44Mjk1IDQuNDU0NzVaIiBmaWxsPSJibGFjayIvPgo8L3N2Zz4K",alt:""})))))},j=function(t){var e=t.data,a=t.seoTitle,n=t.seoDescription,i=t.location,s=t.categoriesList,u=t.category,g=t.prevPagePath,d=t.nextPagePath,m=t.currentPage,N=t.getPageNumberPath,f=t.numPages,v=t.limit,x=1===m,h=m===f,M=function(t,e){var a=[],n=null;return null==t||t.map((function(t){var e;return!0===(null==t||null===(e=t.frontmatter)||void 0===e?void 0:e.featuredpost)&&null===n?n=t:a.push(t),null})),n||(n=a[0],delete a[0]),e?{posts:a,featuredPost:n}:{posts:t}}(e.allMarkdownRemark.edges.map((function(t){return t.node})),x),D=M.posts,k=M.featuredPost;return(0,Z.tZ)("div",{className:"bg-lightGrey2"},(0,Z.tZ)(l.Z,{title:a,description:n,pageName:"blog",location:i},(0,Z.tZ)(c.W2,null,(0,Z.tZ)(c.$0,null,(0,Z.tZ)("h1",{className:"text-3xl font-medium mb-4"},"Welcome to the Cyscale blog"),(0,Z.tZ)("div",{className:"overflow-x-auto py-2 -mx-8 md:mx-0 pl-8 md:pl-0 hide-scrollbar max-w-screen"},(0,Z.tZ)(p,{className:"mr-2",to:"/blog/",active:"All"===u},"All"),o()(s,(function(t){return(0,Z.tZ)(p,{className:"mr-2 last:mr-0",active:u===t,to:"/blog/"+t.toLowerCase()+"/",key:t},t)}))),(0,Z.tZ)(c.X2,{className:"mt-8 gap-4 lg:gap-8"},x&&(0,Z.tZ)("div",{className:"col-span-12",id:"what in the world are you talking about?"},(0,Z.tZ)("div",{className:"hidden md:block"},D&&(0,Z.tZ)(y,k.frontmatter)),(0,Z.tZ)("div",{className:"block md:hidden"},k&&(0,Z.tZ)(b.Z,k.frontmatter))),x&&(0,Z.tZ)("div",{className:"col-span-12 md:col-span-6"},D[0]&&(0,Z.tZ)(b.Z,D[0].frontmatter)),x&&(0,Z.tZ)("div",{className:"col-span-12 md:col-span-6"},D[1]&&(0,Z.tZ)(b.Z,D[1].frontmatter)),o()(r()(D,x?D.length-2:D.length+1),(function(t,e){return(0,Z.tZ)("div",{className:"col-span-12 md:col-span-6 lg:col-span-4",key:e},t&&(0,Z.tZ)(b.Z,t.frontmatter))}))))),(0,Z.tZ)(w,{numPages:f,currentPage:m,limit:v,prevPagePath:g,nextPagePath:d,getPageNumberPath:N,isFirst:x,isLast:h})))}},14259:function(t){t.exports=function(t,e,a){var n=-1,r=t.length;e<0&&(e=-e>r?0:r+e),(a=a>r?r:a)<0&&(a+=r),r=e>a?0:a-e>>>0,e>>>=0;for(var i=Array(r);++n<r;)i[n]=t[n+e];return i}},69579:function(t,e,a){var n=a(14259),r=a(40554);t.exports=function(t,e,a){var i=null==t?0:t.length;return i?(e=a||void 0===e?1:r(e),n(t,(e=i-e)<0?0:e,i)):[]}}}]);
//# sourceMappingURL=90c444464bf460e8fafeb1163a1c4bf3bc8ab878-7af0b91fdf5dfd1bf5ed.js.map