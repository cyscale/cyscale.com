(self.webpackChunkcyscale_gatsby=self.webpackChunkcyscale_gatsby||[]).push([[6661],{44669:function(t,e,a){"use strict";function n(){return n=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var a=arguments[e];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(t[n]=a[n])}return t},n.apply(this,arguments)}a.d(e,{Z:function(){return r}});function r(t){var e,a,r=t.location,i=t.pageName,o=(e="undefined"!=typeof window&&window._hsq?window._hsq:[],{setContentType:function(t){e.push(["setContentType",t])},setPathPageView:function(t){e.push(["setPath",t]),a()},setTrackPageView:a=function(){e.push(["trackPageView"])},setIdentity:function(t,a){e.push(["identify",n({email:t},a)])},setTrackEvent:function(t){var a=t.eventId,n=t.value;e.push(["trackEvent",{id:a,value:n}])}}),s=o.setPathPageView,l=o.setIdentity,c=o.setContentType;if("undefined"!=typeof window){var u=localStorage.getItem("user-email");u&&l(u)}c("blog-detail"===i?"blog-post":"standard-page"),s(r.pathname)}},33926:function(t,e,a){"use strict";var n=a(67294),r=a(4850),i=a(94985),o=a(80414),s=a(26040),l=a(44669),c=a(71596),u=a(62319),g=a(1461),m=a(35533),d=a(95030),N=a(21292),Z=a(4382);e.Z=function(t){var e=t.children,a=t.title,p=t.description,f=t.pageName,x=t.location,v=t.banner;(0,l.Z)({location:x,pageName:f});var M=(0,n.useState)(!1),h=M[0],y=M[1],D=(0,m.Z)(),b=D.cookies,I=D.cookiesBanner,k=D.setCookiesBanner;return(0,Z.tZ)(u.Z,null,(0,Z.tZ)(s.Z.Provider,{value:{location:x}},(0,Z.tZ)(r.Z,{title:a,description:p,pageName:f,location:x,banner:v}),(0,Z.tZ)(o.Z.Provider,{value:{sticker:h,setSticker:y}},(0,Z.tZ)(N.Z,{pageName:f,location:x})),(0,Z.tZ)("main",null,e),(0,Z.tZ)(i.default,{pageUri:null==x?void 0:x.pathname,pageName:f}),!0!==Boolean(b[d.V])&&(0,Z.tZ)(c.Z,{cookiesBanner:I,setCookiesBanner:k,pageName:f}),(0,Z.tZ)(g.Z,null)))}},80414:function(t,e,a){"use strict";var n=a(67294).createContext({sticker:!1,setSticker:function(){}});e.Z=n},94410:function(t,e,a){"use strict";a.d(e,{Z:function(){return w}});var n=a(69579),r=a.n(n),i=a(35161),o=a.n(i),s=a(67294),l=a(33926),c=a(39008),u=a(87462),g=a(63366),m=a(69931),d=a.n(m),N=a(1597),Z=a(4382),p=["children","active","className"];function f(t){var e=t.children,a=t.active,n=t.className,r=(0,g.Z)(t,p);return(0,Z.tZ)(N.rU,(0,u.Z)({className:d()("px-4 py-2 rounded-full shadow-sm bg-white bg-opacity-50 text-black text-opacity-70 text-sm","hover:bg-opacity-100 hover:text-opacity-100 transition-all",{"bg-opacity-100 text-opacity-100 text-primary":a},n)},r),e)}var x=a(61422),v=a(46488),M=a(37059);function h(t){var e=t.authors,a=t.categories,n=(t.description,t.date),r=t.permalink,i=t.title,o=t.featuredimage,l=s.useRef();return(0,Z.tZ)("div",{role:"link",tabIndex:0,onClick:function(){return l.current.click()},onKeyDown:function(t){return(13===t.code||32===t.code)&&l.current.click()},className:"rounded-xl shadow-lg bg-white block overflow-hidden group cursor-pointer"},(0,Z.tZ)("div",{className:"grid grid-cols-12"},(0,Z.tZ)("div",{className:"col-span-4 p-5 flex flex-col justify-between min-h-72 lg:min-h-100"},(0,Z.tZ)(v.Z,{date:n,categories:a}),(0,Z.tZ)(N.rU,{to:"/blog/"+r+"/",ref:l},(0,Z.tZ)("h2",{className:"text-xl lg:text-3xl leading-tight font-medium group-hover:text-primary transition-all"},i)),(0,Z.tZ)(x.Z,{author:e,title:i,permalink:r})),(0,Z.tZ)("div",{className:"col-span-8"},(0,Z.tZ)(M.G,{image:o.childImageSharp.gatsbyImageData,alt:i}))))}var y=a(15043),D=a(93433),b="...",I=function(t,e){var a=e-t+1;return Array.from({length:a},(function(e,a){return a+t}))};var k={name:"1sy0m6e",styles:"height:2.5rem;width:2.5rem"},j=function(t){var e=t.numPages,a=t.currentPage,n=t.limit,r=t.prevPagePath,i=t.nextPagePath,o=t.getPageNumberPath,l=t.isFirst,c=t.isLast,u=function(t){var e=t.totalCount,a=t.pageSize,n=t.siblingCount,r=void 0===n?1:n,i=t.currentPage;return(0,s.useMemo)((function(){var t=Math.ceil(e/a);if(r+5>=t)return I(1,t);var n=Math.max(i-r,1),o=Math.min(i+r,t),s=n>2,l=o<t-2,c=1,u=t;if(!s&&l){var g=I(1,3+2*r);return[].concat((0,D.Z)(g),[b,t])}if(s&&!l){var m=I(t-(3+2*r)+1,t);return[c,b].concat((0,D.Z)(m))}if(s&&l){var d=I(n,o);return[c,b].concat((0,D.Z)(d),[b,u])}}),[e,a,r,i])}({currentPage:a,totalCount:e*n,siblingCount:1,pageSize:n});return(0,Z.tZ)(s.Fragment,null,e>=2&&(0,Z.tZ)("div",{className:"flex justify-center mb-20"},(0,Z.tZ)("div",{className:"flex justify-between"},!l&&(0,Z.tZ)(N.rU,{to:r,rel:"prev",className:"bg-transparent text-grey2 flex justify-center items-center rounded-md hover:bg-grey3",css:k},(0,Z.tZ)("img",{src:"data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0xNi4xNzA1IDQuNDU0NzVDMTYuNjA5OCA0Ljg5NDA5IDE2LjYwOTggNS42MDY0IDE2LjE3MDUgNi4wNDU3NEwxMC4yMTYgMTIuMDAwMkwxNi4xNzA1IDE3Ljk1NDdDMTYuNjA5OCAxOC4zOTQxIDE2LjYwOTggMTkuMTA2NCAxNi4xNzA1IDE5LjU0NTdDMTUuNzMxMiAxOS45ODUxIDE1LjAxODggMTkuOTg1MSAxNC41Nzk1IDE5LjU0NTdMNy44Mjk1IDEyLjc5NTdDNy4zOTAxNyAxMi4zNTY0IDcuMzkwMTcgMTEuNjQ0MSA3LjgyOTUgMTEuMjA0N0wxNC41Nzk1IDQuNDU0NzVDMTUuMDE4OCA0LjAxNTQxIDE1LjczMTIgNC4wMTU0MSAxNi4xNzA1IDQuNDU0NzVaIiBmaWxsPSJibGFjayIvPgo8L3N2Zz4K",alt:""})),u.map((function(t){return t===b?(0,Z.tZ)("p",{className:"flex items-center mx-0.5 sm:mx-2",key:t+1},(0,Z.tZ)("span",null,"•••")):(0,Z.tZ)(N.rU,{key:t+1,to:o(t-1),className:d()("flex justify-center items-center mx-0.5 sm:mx-2",{"bg-white rounded-md":a===t,"bg-transparent rounded-md hover:bg-grey3":a!==t}),css:k},(0,Z.tZ)("span",null,t))})),!c&&(0,Z.tZ)(N.rU,{to:i,rel:"next",className:"bg-transparent flex justify-center items-center rounded-md hover:bg-grey3",css:k},(0,Z.tZ)("img",{src:"data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik03LjgyOTUgNC40NTQ3NUM4LjI2ODg0IDQuMDE1NDEgOC45ODExNSA0LjAxNTQxIDkuNDIwNDkgNC40NTQ3NUwxNi4xNzA1IDExLjIwNDdDMTYuNjA5OCAxMS42NDQxIDE2LjYwOTggMTIuMzU2NCAxNi4xNzA1IDEyLjc5NTdMOS40MjA0OSAxOS41NDU3QzguOTgxMTUgMTkuOTg1MSA4LjI2ODg0IDE5Ljk4NTEgNy44Mjk1IDE5LjU0NTdDNy4zOTAxNyAxOS4xMDY0IDcuMzkwMTcgMTguMzk0MSA3LjgyOTUgMTcuOTU0N0wxMy43ODQgMTIuMDAwMkw3LjgyOTUgNi4wNDU3NEM3LjM5MDE3IDUuNjA2NCA3LjM5MDE3IDQuODk0MDkgNy44Mjk1IDQuNDU0NzVaIiBmaWxsPSJibGFjayIvPgo8L3N2Zz4K",alt:""})))))},w=function(t){var e=t.data,a=t.seoTitle,n=t.seoDescription,i=t.location,s=t.categoriesList,u=t.category,g=t.prevPagePath,m=t.nextPagePath,d=t.currentPage,N=t.getPageNumberPath,p=t.numPages,x=t.limit,v=1===d,M=d===p,D=function(t,e){var a=[],n=null;return null==t||t.map((function(t){var e;return!0===(null==t||null===(e=t.frontmatter)||void 0===e?void 0:e.featuredpost)&&null===n?n=t:a.push(t),null})),n||(n=a[0],delete a[0]),e?{posts:a,featuredPost:n}:{posts:t}}(e.allMarkdownRemark.edges.map((function(t){return t.node})),v),b=D.posts,I=D.featuredPost;return(0,Z.tZ)("div",{className:"bg-lightGrey2"},(0,Z.tZ)(l.Z,{title:a,description:n,pageName:"blog",location:i},(0,Z.tZ)(c.W2,null,(0,Z.tZ)(c.$0,null,(0,Z.tZ)("h1",{className:"text-3xl font-medium mb-4"},"Welcome to the Cyscale blog"),(0,Z.tZ)("div",{className:"overflow-x-auto py-2 -mx-8 md:mx-0 pl-8 md:pl-0 hide-scrollbar max-w-screen"},(0,Z.tZ)(f,{className:"mr-2",to:"/blog/",active:"All"===u},"All"),o()(s,(function(t){return(0,Z.tZ)(f,{className:"mr-2 last:mr-0",active:u===t,to:"/blog/"+t.toLowerCase()+"/",key:t},t)}))),(0,Z.tZ)(c.X2,{className:"mt-8 gap-4 lg:gap-8"},v&&(0,Z.tZ)("div",{className:"col-span-12",id:"what in the world are you talking about?"},(0,Z.tZ)("div",{className:"hidden md:block"},b&&(0,Z.tZ)(h,I.frontmatter)),(0,Z.tZ)("div",{className:"block md:hidden"},I&&(0,Z.tZ)(y.Z,I.frontmatter))),v&&(0,Z.tZ)("div",{className:"col-span-12 md:col-span-6"},b[0]&&(0,Z.tZ)(y.Z,b[0].frontmatter)),v&&(0,Z.tZ)("div",{className:"col-span-12 md:col-span-6"},b[1]&&(0,Z.tZ)(y.Z,b[1].frontmatter)),o()(r()(b,v?b.length-2:b.length+1),(function(t,e){return(0,Z.tZ)("div",{className:"col-span-12 md:col-span-6 lg:col-span-4",key:e},t&&(0,Z.tZ)(y.Z,t.frontmatter))}))))),(0,Z.tZ)(j,{numPages:p,currentPage:d,limit:x,prevPagePath:g,nextPagePath:m,getPageNumberPath:N,isFirst:v,isLast:M})))}},14259:function(t){t.exports=function(t,e,a){var n=-1,r=t.length;e<0&&(e=-e>r?0:r+e),(a=a>r?r:a)<0&&(a+=r),r=e>a?0:a-e>>>0,e>>>=0;for(var i=Array(r);++n<r;)i[n]=t[n+e];return i}},69579:function(t,e,a){var n=a(14259),r=a(40554);t.exports=function(t,e,a){var i=null==t?0:t.length;return i?(e=a||void 0===e?1:r(e),n(t,(e=i-e)<0?0:e,i)):[]}}}]);
//# sourceMappingURL=90c444464bf460e8fafeb1163a1c4bf3bc8ab878-16588f0fccc8c3e74eba.js.map