(self.webpackChunkcyscale_gatsby=self.webpackChunkcyscale_gatsby||[]).push([[900,8367],{86301:function(t,e,a){"use strict";function n(){return n=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var a=arguments[e];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(t[n]=a[n])}return t},n.apply(this,arguments)}a.d(e,{Z:function(){return i}});var r=function(){var t="undefined"!=typeof window&&window._hsq?window._hsq:[],e=function(){t.push(["trackPageView"])};return{setContentType:function(e){t.push(["setContentType",e])},setPathPageView:function(a){t.push(["setPath",a]),e()},setTrackPageView:e,setIdentity:function(e,a){t.push(["identify",n({email:e},a)])},setTrackEvent:function(e){var a=e.eventId,n=e.value;t.push(["trackEvent",{id:a,value:n}])}}};function i(t){let{pageName:e}=t;const{setIdentity:a,setContentType:n}=r();if("undefined"!=typeof window){const t=localStorage.getItem("user-email");t&&a(t)}n("blog-detail"===e?"blog-post":"standard-page")}},33926:function(t,e,a){"use strict";var n=a(70917),r=a(67294),i=a(11196),l=a(46299),s=a(80414),o=a(26040),c=a(86301),d=a(98432),m=a(44410),u=a(52468),g=a(35533),N=a(95030),p=a(52356),Z=a(64593),x=a(14160);e.Z=t=>{let{children:e,title:a,description:f,pageName:v,location:h,banner:b,noIndex:y,blogDetails:D}=t;(0,c.Z)({pageName:v});const{0:M,1:I}=(0,r.useState)(!1),{cookies:k,cookiesBanner:w,setCookiesBanner:j}=(0,g.Z)(),T=(0,x.K2)("1117504136");return(0,n.tZ)(m.Z,null,(0,n.tZ)(o.Z.Provider,{value:{location:h}},(0,n.tZ)(i.Z,{title:a,description:f,pageName:v,location:h,banner:b,blogDetails:D}),(0,n.tZ)(Z.q,null,y&&(0,n.tZ)("meta",{name:"robots",content:"noindex"}),y&&(0,n.tZ)("meta",{name:"robots",content:"nofollow"})),(0,n.tZ)(s.Z.Provider,{value:{sticker:M,setSticker:I}},(0,n.tZ)(p.Z,{pageName:v,location:h})),(0,n.tZ)("main",{css:(0,n.iv)("@media (min-width: 1024px){padding-top:",T.markdownRemark.frontmatter.enabled?"2rem":"0rem",";}","")},e),(0,n.tZ)(l.default,{pageUri:null==h?void 0:h.pathname,pageName:v}),!0!==Boolean(k[N.VB])&&(0,n.tZ)(d.Z,{cookiesBanner:w,setCookiesBanner:j,pageName:v}),(0,n.tZ)(u.Z,null)))}},80414:function(t,e,a){"use strict";const n=a(67294).createContext({sticker:!1,setSticker:()=>{}});e.Z=n},22407:function(t,e,a){"use strict";var n=a(67294),r=a(14160),i=a(38032),l=a(94184),s=a.n(l),o=a(89583),c=a(70917);var d={name:"2mqvd6",styles:"width:6.25rem;height:6.25rem"};e.Z=t=>{var e,a;let{author:l,authorPage:m}=t;const u=(0,r.K2)("4068795820"),g=null===(e=u.allMarkdownRemark.edges.find((t=>t.node.frontmatter.name===l)))||void 0===e?void 0:e.node.frontmatter,N={"ovidiu-cical":u.ovidiu,"manuela-ticudean":u.manuela,"andrei-stefanie":u.andrei,"sabrina-lupsan":u.sabrina},p={...g,imageData:null===(a=N[null==g?void 0:g.slug])||void 0===a?void 0:a.childImageSharp.gatsbyImageData};return"Virginia Mitea"===l?null:(0,c.tZ)(n.Fragment,null,p&&(0,c.tZ)("div",{className:s()({"bg-zircon rounded-2xl p-4":!0,"mt-6":!m})},(0,c.tZ)("div",{className:"grid grid-cols-12 gap-x-6"},(0,c.tZ)("div",{className:"col-span-12 md:col-span-2"},(0,c.tZ)("div",{className:"flex justify-center"},(0,c.tZ)(r.rU,{to:"/blog/"+p.slug+"/",className:"transition-transform hover:scale-[1.1]"},(0,c.tZ)(i.G,{image:p.imageData,className:"rounded-full border-digital border",imgStyle:{borderRadius:"50%"},css:d,alt:""})))),(0,c.tZ)("div",{className:"col-span-12 md:col-span-10 mt-8 md:mt-0"},(0,c.tZ)("div",{className:"flex justify-center md:justify-start"},(0,c.tZ)(r.rU,{className:s()({"font-montserrat text-2xl font-bold":!0,underline:!m}),to:"/blog/"+p.slug+"/"},p.name),(0,c.tZ)("a",{href:p.linkedin,className:"flex text-sm text-black sm:text-white hover:underline ml-1",rel:"noopener noreferrer",target:"_blank"},(0,c.tZ)(o.ltd,{size:30,color:"#079BEE"}))),(0,c.tZ)("p",{className:"font-montserrat text-lg text-center md:text-left"},p.position),(0,c.tZ)("p",{className:"mt-6 font-hind font-base"},p.description)))))}},15043:function(t,e,a){"use strict";a.d(e,{Z:function(){return c}});var n=a(67294),r=a(14160),i=a(46488),l=a(61422),s=a(38032),o=a(70917);function c(t){var e;let{authors:a,categories:c,date:d,permalink:m,title:u,description:g,featuredimage:N}=t;const p=n.useRef();return(0,o.tZ)("div",{role:"link",tabIndex:0,onClick:()=>p.current.click(),onKeyDown:t=>(13===t.code||32===t.code)&&p.current.click(),className:"rounded-xl shadow-lg bg-white block overflow-hidden group h-full cursor-pointer"},N&&(0,o.tZ)("div",{className:"relative overflow-hidden",style:{paddingBottom:"56.2%"}},(0,o.tZ)("div",{className:"absolute top-0 left-0"},(0,o.tZ)(s.G,{image:null==N||null===(e=N.childImageSharp)||void 0===e?void 0:e.gatsbyImageData,alt:u,imgStyle:{borderTopLeftRadius:"0.75rem",borderTopRightRadius:"0.75rem"}}))),(0,o.tZ)("div",{className:"p-5 flex flex-col"},(0,o.tZ)(i.Z,{date:d,categories:c}),(0,o.tZ)(r.rU,{ref:p,to:"/blog/"+m+"/"},(0,o.tZ)("h2",{className:"text-lg my-4 leading-tight font-medium group-hover:text-primary transition-all h-16 font-montserrat"},u)),(0,o.tZ)("div",{className:"mt-auto"},(0,o.tZ)(l.Z,{author:a,title:u,description:g,permalink:m}))))}},65142:function(t,e,a){"use strict";a.d(e,{Z:function(){return j}});var n=a(69579),r=a.n(n),i=a(35161),l=a.n(i),s=a(67294),o=a(33926),c=a(39008),d=a(87462),m=a(94184),u=a.n(m),g=a(14160),N=a(70917);function p(t){let{children:e,active:a,className:n,...r}=t;return(0,N.tZ)(g.rU,(0,d.Z)({className:u()("px-4 py-2 rounded-full shadow-sm bg-white bg-opacity-50 text-black text-opacity-70 text-sm","hover:bg-opacity-100 hover:text-opacity-100 transition-all whitespace-nowrap",{"bg-opacity-100 text-opacity-100 text-primary":a},n)},r),e)}var Z=a(61422),x=a(46488),f=a(38032);function v(t){let{authors:e,categories:a,description:n,date:r,permalink:i,title:l,featuredimage:o}=t;const c=s.useRef();return(0,N.tZ)("div",{role:"link",tabIndex:0,onClick:()=>c.current.click(),onKeyDown:t=>(13===t.code||32===t.code)&&c.current.click(),className:"rounded-xl shadow-lg bg-white block overflow-hidden group cursor-pointer"},(0,N.tZ)("div",{className:"grid grid-cols-12"},(0,N.tZ)("div",{className:"col-span-4 p-5 flex flex-col justify-between min-h-72 lg:min-h-100"},(0,N.tZ)(x.Z,{date:r,categories:a}),(0,N.tZ)(g.rU,{to:"/blog/"+i+"/",ref:c},(0,N.tZ)("h2",{className:"text-xl lg:text-3xl leading-tight font-medium group-hover:text-primary transition-all font-montserrat"},l)),(0,N.tZ)(Z.Z,{author:e,title:l,permalink:i})),(0,N.tZ)("div",{className:"col-span-8"},(0,N.tZ)(f.G,{image:o.childImageSharp.gatsbyImageData,alt:l}))))}var h=a(15043),b=a(15785);const y="...",D=(t,e)=>{let a=e-t+1;return Array.from({length:a},((e,a)=>a+t))};const M={name:"1sy0m6e",styles:"height:2.5rem;width:2.5rem"};var I=t=>{let{numPages:e,currentPage:a,limit:n,prevPagePath:r,nextPagePath:i,getPageNumberPath:l,isFirst:o,isLast:c}=t;const d=(t=>{let{totalCount:e,pageSize:a,siblingCount:n=1,currentPage:r}=t;return(0,s.useMemo)((()=>{const t=Math.ceil(e/a);if(n+5>=t)return D(1,t);const i=Math.max(r-n,1),l=Math.min(r+n,t),s=i>2,o=l<t-2,c=1,d=t;if(!s&&o){let e=D(1,3+2*n);return[].concat((0,b.Z)(e),[y,t])}if(s&&!o){let e=D(t-(3+2*n)+1,t);return[c,y].concat((0,b.Z)(e))}if(s&&o){let t=D(i,l);return[c,y].concat((0,b.Z)(t),[y,d])}}),[e,a,n,r])})({currentPage:a,totalCount:e*n,siblingCount:1,pageSize:n});return(0,N.tZ)(s.Fragment,null,e>=2&&(0,N.tZ)("div",{className:"flex justify-center mb-20"},(0,N.tZ)("div",{className:"flex justify-between"},!o&&(0,N.tZ)(g.rU,{to:r,rel:"prev",className:"bg-transparent text-grey2 flex justify-center items-center rounded-md hover:bg-grey3",css:M},(0,N.tZ)("img",{src:"data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0xNi4xNzA1IDQuNDU0NzVDMTYuNjA5OCA0Ljg5NDA5IDE2LjYwOTggNS42MDY0IDE2LjE3MDUgNi4wNDU3NEwxMC4yMTYgMTIuMDAwMkwxNi4xNzA1IDE3Ljk1NDdDMTYuNjA5OCAxOC4zOTQxIDE2LjYwOTggMTkuMTA2NCAxNi4xNzA1IDE5LjU0NTdDMTUuNzMxMiAxOS45ODUxIDE1LjAxODggMTkuOTg1MSAxNC41Nzk1IDE5LjU0NTdMNy44Mjk1IDEyLjc5NTdDNy4zOTAxNyAxMi4zNTY0IDcuMzkwMTcgMTEuNjQ0MSA3LjgyOTUgMTEuMjA0N0wxNC41Nzk1IDQuNDU0NzVDMTUuMDE4OCA0LjAxNTQxIDE1LjczMTIgNC4wMTU0MSAxNi4xNzA1IDQuNDU0NzVaIiBmaWxsPSJibGFjayIvPgo8L3N2Zz4K",alt:""})),d.map((t=>t===y?(0,N.tZ)("p",{className:"flex items-center mx-0.5 sm:mx-2",key:t+1},(0,N.tZ)("span",null,"•••")):(0,N.tZ)(g.rU,{key:t+1,to:l(t-1),className:u()("flex justify-center items-center mx-0.5 sm:mx-2",{"bg-white rounded-md":a===t,"bg-transparent rounded-md hover:bg-grey3":a!==t}),css:M},(0,N.tZ)("span",null,t)))),!c&&(0,N.tZ)(g.rU,{to:i,rel:"next",className:"bg-transparent flex justify-center items-center rounded-md hover:bg-grey3",css:M},(0,N.tZ)("img",{src:"data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik03LjgyOTUgNC40NTQ3NUM4LjI2ODg0IDQuMDE1NDEgOC45ODExNSA0LjAxNTQxIDkuNDIwNDkgNC40NTQ3NUwxNi4xNzA1IDExLjIwNDdDMTYuNjA5OCAxMS42NDQxIDE2LjYwOTggMTIuMzU2NCAxNi4xNzA1IDEyLjc5NTdMOS40MjA0OSAxOS41NDU3QzguOTgxMTUgMTkuOTg1MSA4LjI2ODg0IDE5Ljk4NTEgNy44Mjk1IDE5LjU0NTdDNy4zOTAxNyAxOS4xMDY0IDcuMzkwMTcgMTguMzk0MSA3LjgyOTUgMTcuOTU0N0wxMy43ODQgMTIuMDAwMkw3LjgyOTUgNi4wNDU3NEM3LjM5MDE3IDUuNjA2NCA3LjM5MDE3IDQuODk0MDkgNy44Mjk1IDQuNDU0NzVaIiBmaWxsPSJibGFjayIvPgo8L3N2Zz4K",alt:""})))))},k=a(13103),w=a(22407);var j=t=>{let{data:e,seoTitle:a,seoDescription:n,location:i,categoriesList:s,category:d,heading:m,prevPagePath:g,nextPagePath:Z,currentPage:x,getPageNumberPath:f,numPages:b,limit:y,author:D}=t;const M=1===x,j=x===b,{posts:T,featuredPost:A}=((t,e)=>{const a=[];let n=null;return null==t||t.map((t=>{var e;return!0===(null==t||null===(e=t.frontmatter)||void 0===e?void 0:e.featuredpost)&&null===n?n=t:a.push(t),null})),n||(n=a[0],delete a[0]),e?{posts:a,featuredPost:n}:{posts:t}})(e.allMarkdownRemark.edges.map((t=>t.node)),M);return(0,N.tZ)("div",{className:"bg-lightGrey2"},(0,N.tZ)(o.Z,{title:a,description:n,pageName:"blog",location:i},D&&(0,N.tZ)("div",{className:"bg-zircon pt-24 lg:pt32 pb-10"},(0,N.tZ)("div",{className:"mx-auto max-w-4xl"},(0,N.tZ)(w.Z,{author:D,authorPage:!0}))),(0,N.tZ)(c.W2,null,(0,N.tZ)("div",{className:u()({"pb-24 lg:pb-32":!0,"pt-24 lg:pt-32":!D})},!D&&(0,N.tZ)("h1",{className:"text-3xl font-medium mb-4"},m),!D&&(0,N.tZ)("div",{className:"overflow-x-auto py-2 -mx-8 md:mx-0 pl-8 md:pl-0 hide-scrollbar max-w-screen"},(0,N.tZ)(p,{className:"mr-2",to:"/blog/",active:"All"===d},"All"),l()(s,(t=>(0,N.tZ)(p,{className:"mr-2 last:mr-0",active:d===t,to:"/blog/"+(0,k.KI)(t)+"/",key:t},t)))),(0,N.tZ)(c.X2,{className:"mt-8 gap-4 lg:gap-8"},M&&(0,N.tZ)("div",{className:"col-span-12"},(0,N.tZ)("div",{className:"hidden md:block"},T&&(0,N.tZ)(v,A.frontmatter)),(0,N.tZ)("div",{className:"block md:hidden"},A&&(0,N.tZ)(h.Z,A.frontmatter))),M&&(0,N.tZ)("div",{className:"col-span-12 md:col-span-6"},T[0]&&(0,N.tZ)(h.Z,T[0].frontmatter)),M&&(0,N.tZ)("div",{className:"col-span-12 md:col-span-6"},T[1]&&(0,N.tZ)(h.Z,T[1].frontmatter)),l()(r()(T,M?T.length-2:T.length+1),((t,e)=>(0,N.tZ)("div",{className:"col-span-12 md:col-span-6 lg:col-span-4",key:e},t&&(0,N.tZ)(h.Z,t.frontmatter))))))),(0,N.tZ)(I,{numPages:b,currentPage:x,limit:y,prevPagePath:g,nextPagePath:Z,getPageNumberPath:f,isFirst:M,isLast:j})))}},14259:function(t){t.exports=function(t,e,a){var n=-1,r=t.length;e<0&&(e=-e>r?0:r+e),(a=a>r?r:a)<0&&(a+=r),r=e>a?0:a-e>>>0,e>>>=0;for(var i=Array(r);++n<r;)i[n]=t[n+e];return i}},69579:function(t,e,a){var n=a(14259),r=a(40554);t.exports=function(t,e,a){var i=null==t?0:t.length;return i?(e=a||void 0===e?1:r(e),n(t,(e=i-e)<0?0:e,i)):[]}}}]);
//# sourceMappingURL=77a9af56a42868ff472f32f96a5601ae02f024f9-bd14bd26a5a7514f1aca.js.map