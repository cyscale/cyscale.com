"use strict";(self.webpackChunkcyscale_gatsby=self.webpackChunkcyscale_gatsby||[]).push([[6008],{61422:function(t,e,a){a.d(e,{Z:function(){return i}});var l=a(13311),n=a.n(l),s=a(67294),r=a(2075),o=a(18994),c=a(70917);function i(t){let{author:e,permalink:a,title:l}=t;const i=n()(r.Z,(t=>{let{name:a}=t;return a===e}))||e;return(0,c.tZ)("div",null,"string"==typeof i?(0,c.tZ)("span",{className:"text-xs text-black  h-7 block py-1"},"By ",(0,c.tZ)("strong",null,i)):(0,c.tZ)("div",{className:"flex justify-between items-center"},(0,c.tZ)("div",{className:"flex items-center"},(0,c.tZ)("div",{className:"h-7 w-7 mr-2 rounded-full border-digital border"},s.cloneElement(i.photo,{...i.photo.props,className:"rounded-full overflow-hidden relative z-10",alt:"Author image"})),(0,c.tZ)("span",{className:"text-xs text-black font-montserrat"},"By ",(0,c.tZ)("strong",null,i.name))),(0,c.tZ)(o.Z,{title:l,permalink:a})))}},15043:function(t,e,a){a.d(e,{Z:function(){return i}});var l=a(67294),n=a(14160),s=a(46488),r=a(61422),o=a(38032),c=a(70917);function i(t){var e;let{authors:a,categories:i,date:m,permalink:d,title:u,description:g,featuredimage:p}=t;const N=l.useRef();return(0,c.tZ)("div",{role:"link",tabIndex:0,onClick:()=>N.current.click(),onKeyDown:t=>(13===t.code||32===t.code)&&N.current.click(),className:"rounded-xl shadow-lg bg-white block overflow-hidden group h-full cursor-pointer"},p&&(0,c.tZ)("div",{className:"relative overflow-hidden",style:{paddingBottom:"56.2%"}},(0,c.tZ)("div",{className:"absolute top-0 left-0"},(0,c.tZ)(o.G,{image:null==p||null===(e=p.childImageSharp)||void 0===e?void 0:e.gatsbyImageData,alt:u,imgStyle:{borderTopLeftRadius:"0.75rem",borderTopRightRadius:"0.75rem"}}))),(0,c.tZ)("div",{className:"p-5 flex flex-col"},(0,c.tZ)(s.Z,{date:m,categories:i}),(0,c.tZ)(n.rU,{ref:N,to:"/blog/"+d+"/"},(0,c.tZ)("h2",{className:"text-lg my-4 leading-tight font-medium group-hover:text-primary transition-all h-16 font-montserrat"},u)),(0,c.tZ)("div",{className:"mt-auto"},(0,c.tZ)(r.Z,{author:a,title:u,description:g,permalink:d}))))}},46488:function(t,e,a){a.d(e,{Z:function(){return r}});a(67294);var l=a(13103),n=a(65822),s=a(70917);function r(t){let{categories:e,date:a}=t;return(0,s.tZ)("div",{className:"flex justify-between items-start"},(0,s.tZ)("span",null,(0,s.tZ)(n.Z,{categories:e})),(0,s.tZ)("span",{className:"text-xs text-black text-opacity-70 pt-1 font-montserrat"},(0,l.p6)(a)))}},71244:function(t,e,a){var l=a(35161),n=a.n(l),s=(a(67294),a(14160)),r=a(15043),o=a(39008),c=a(94184),i=a.n(c),m=a(70917);e.Z=t=>{var e;let{bg:a}=t;const l=(0,s.K2)("2199015418"),c=null==l||null===(e=l.allMarkdownRemark)||void 0===e?void 0:e.edges;return(0,m.tZ)("div",{className:i()({"mt-0 py-12":!0,"bg-lightGrey ":"transparent"!==a,"bg-transparent":"transparent"===a})},(0,m.tZ)("div",{className:"container max-w-7xl m-auto"},(0,m.tZ)(o.X2,{className:"gap-4 lg:gap-8"},n()(c,((t,e)=>{let{node:a}=t;return(0,m.tZ)("div",{key:e,className:"col-span-12 md:col-span-6 lg:col-span-4"},(0,m.tZ)(r.Z,a.frontmatter))}))),(0,m.tZ)("div",{className:"block w-full mt-50px text-center"},(0,m.tZ)("div",{className:"mt-6 mx-auto w-auto flex justify-center"},(0,m.tZ)(s.rU,{to:"/blog/",className:"gradientBgBtn max-w-md text-base font-medium rounded text-white uppercase text-center py-5 px-12 no-underline"},"Read more about cloud security")))))}},39727:function(t,e,a){a(67294);var l=a(14160),n=a(71244),s=a(70917);e.Z=()=>(0,s.tZ)("div",{className:"col-span-12"},(0,s.tZ)("h1",{className:"text-center text-xl lg:text-4xl text-blue font-montserrat font-bold py-8 lg:py-10"},"Thanks for contacting us, we will be in touch soon!"),(0,s.tZ)("h2",{className:"text-center text-base lg:text-lg font-montserrat font-bold my-4"},"Discover more about our product:"),(0,s.tZ)("p",{className:"text-center"}," ",(0,s.tZ)(l.rU,{className:"text-base lg:text-lg underline font-montserrat",to:"/products/cloud-security-posture-management/"},"Cloud Security Posture Management"))," ",(0,s.tZ)("p",{className:"text-center mt-1"}," ",(0,s.tZ)(l.rU,{className:"text-base lg:text-lg underline font-montserrat",to:"/products/security-knowledge-graph/"},"Security Knowledge Graph"))," ",(0,s.tZ)("p",{className:"text-center pb-12 mt-1"}," ",(0,s.tZ)(l.rU,{className:"text-base lg:text-lg underline font-montserrat",to:"/use-cases/cloud-compliance-and-auditing/"},"Compliance & Auditing"," ")),(0,s.tZ)(n.Z,{bg:"transparent"}))},66119:function(t,e,a){var l=a(67294),n=a(66261);e.Z=t=>{let{formId:e,target:a}=t;const{0:s,1:r}=(0,l.useState)(!1),o=t=>{"hsFormCallback"===t.data.type&&"onFormSubmitted"===t.data.eventName&&t.data.id===e&&(r(!s),n.NY.scrollToTop())};return(0,l.useEffect)((()=>(setTimeout((()=>{var t;window&&window.hbspt&&(null===(t=window.hbspt.forms)||void 0===t||t.create({portalId:"5413427",formId:e,target:a}))}),600),window.addEventListener("message",o),()=>{window.removeEventListener("message",o)})),[]),{formSubmitted:s}}},35696:function(t,e,a){a.r(e),a.d(e,{default:function(){return N}});a(67294);var l=a(39008),n=a(83786),s=a(94184),r=a.n(s),o=a(54668),c=a(22646),i=a(66119),m=a(39727),d=a(69671),u="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTgiIGhlaWdodD0iMTgiIHZpZXdCb3g9IjAgMCAxOCAxOCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0xNS4wNDY5IDguNDM2NTJDMTUuMzU4MSA4Ljc0NzcyIDE1LjM1ODEgOS4yNTIyNyAxNS4wNDY5IDkuNTYzNDdMOS45ODQzOCAxNC42MjZDOS42NzMxOCAxNC45MzcyIDkuMTY4NjIgMTQuOTM3MiA4Ljg1NzQyIDE0LjYyNkM4LjU0NjIzIDE0LjMxNDggOC41NDYyMyAxMy44MTAyIDguODU3NDIgMTMuNDk5TDEzLjM1NjQgOUw4Ljg1NzQyIDQuNTAwOThDOC41NDYyMyA0LjE4OTc4IDguNTQ2MjMgMy42ODUyMiA4Ljg1NzQyIDMuMzc0MDJDOS4xNjg2MiAzLjA2MjgyIDkuNjczMTggMy4wNjI4MyA5Ljk4NDM4IDMuMzc0MDJMMTUuMDQ2OSA4LjQzNjUyWiIgZmlsbD0iIzBGMjZBQSIvPgo8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTE0LjU3NzYgOUMxNC41Nzc2IDkuNDQwMSAxNC4yMjA5IDkuNzk2ODcgMTMuNzgwOCA5Ljc5Njg3TDMuNTE1MTQgOS43OTY4N0MzLjA3NTA0IDkuNzk2ODcgMi43MTgyNyA5LjQ0MDEgMi43MTgyNyA5QzIuNzE4MjcgOC41NTk5IDMuMDc1MDQgOC4yMDMxMiAzLjUxNTE0IDguMjAzMTJMMTMuNzgwOCA4LjIwMzEyQzE0LjIyMDkgOC4yMDMxMiAxNC41Nzc2IDguNTU5OSAxNC41Nzc2IDlaIiBmaWxsPSIjMEYyNkFBIi8+Cjwvc3ZnPgo=",g=a(70917);var p={name:"50u48n",styles:"margin-left:1.6rem"};var N=t=>{let{location:e}=t;const{loadingForm:a}=(0,n.Z)(),{formSubmitted:s}=(0,i.Z)({formId:"7a731caa-e393-44a1-a205-4080e4e3ab6f",target:"#playground-form"});return(0,g.tZ)(c.Z,{location:e,pageName:"Playground",title:"Playground Account Access - Cyscale",description:"Get access to a playground account, fully featured and populated with data."},(0,g.tZ)("div",{className:"hidden","data-template-key":!0},"hardcoded-pages"),(0,g.tZ)("div",{className:"hidden","data-permalink":!0},"/playground/"),(0,g.tZ)("div",{className:"hidden","data-title":!0},"Playground Account Access - Cyscale"),(0,g.tZ)("div",{className:"hidden","data-description":!0},"Get access to a playground account, fully featured and populated with data."),(0,g.tZ)("div",{className:"hidden","data-category":!0},"website"),(0,g.tZ)("div",{className:"bg-hero-campaigns-iam-security",css:d.f9},(0,g.tZ)("div",{className:"py-28 lg:py-32"},(0,g.tZ)("div",{className:"container max-w-7xl m-auto px-8"},(0,g.tZ)(l.X2,null,!s&&(0,g.tZ)("div",{className:"col-span-12 lg:col-span-6 "},(0,g.tZ)("div",{className:"max-w-lg lg:max-w-xl mx-auto lg:mx-0"},(0,g.tZ)("h2",{className:"text-3xl lg:text-5xl text-left text-blue font-bold mt-8 lg:mt-0 font-montserrat"},"Get access to the Playground Account"),(0,g.tZ)("p",{className:"text-left text-base font-medium max-w-md lg:max-w-xl mt-8 font-montserrat"},"We are happy to send you the connection details for the Cyscale Playground Account. Fill out the form and we will be in touch shortly."),(0,g.tZ)("p",{className:"text-left text-base font-medium max-w-md font-montserrat"})," ",(0,g.tZ)("div",null,(0,g.tZ)("p",{className:"text-base font-bold max-w-md font-montserrat mt-8"},"The Playground Account is fully featured:"," "),(0,g.tZ)("div",{className:"flex mt-2"},(0,g.tZ)("img",{src:u,alt:""})," ",(0,g.tZ)("p",{className:"ml-2 text-sm"},"Asset inventory")),(0,g.tZ)("div",{className:"flex mt-2"},(0,g.tZ)("img",{src:u,alt:""})," ",(0,g.tZ)("p",{className:"ml-2 text-sm"},"Security assessment")),(0,g.tZ)("div",{className:"flex mt-2"},(0,g.tZ)("img",{src:u,alt:""})," ",(0,g.tZ)("p",{className:"ml-2 text-sm"},"Compliance score")),(0,g.tZ)("div",{className:"flex mt-2"},(0,g.tZ)("p",{className:"text-sm",css:p},"and many more..."))))),s?(0,g.tZ)(m.Z,null):(0,g.tZ)("div",{className:"col-span-12 lg:col-span-6"},(0,g.tZ)("div",{className:"bg-white rounded-lg mt-6 lg:mt-0 lg:rounded-xl shadow-lg  pt-6 pb-0 px-4 md:px-12 max-w-lg mx-auto lg:mr-0 lg:ml-auto relative",style:{backgroundColor:"rgba(255, 255, 255, 0.6)",backdropFilter:"blur(5px)"}},(0,g.tZ)("h2",{className:"font-bold text-xl lg:text-2xl leading-normal mb-2 font-montserrat"},"Request Access"),a&&(0,g.tZ)(o.Z,{minHeight:355}),(0,g.tZ)("div",{style:{minHeight:355},id:"playground-form",className:r()({hidden:a})}))))))))}},44405:function(t,e,a){a.d(e,{w_:function(){return i}});var l=a(67294),n={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},s=l.createContext&&l.createContext(n),r=function(){return r=Object.assign||function(t){for(var e,a=1,l=arguments.length;a<l;a++)for(var n in e=arguments[a])Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t},r.apply(this,arguments)},o=function(t,e){var a={};for(var l in t)Object.prototype.hasOwnProperty.call(t,l)&&e.indexOf(l)<0&&(a[l]=t[l]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols){var n=0;for(l=Object.getOwnPropertySymbols(t);n<l.length;n++)e.indexOf(l[n])<0&&Object.prototype.propertyIsEnumerable.call(t,l[n])&&(a[l[n]]=t[l[n]])}return a};function c(t){return t&&t.map((function(t,e){return l.createElement(t.tag,r({key:e},t.attr),c(t.child))}))}function i(t){return function(e){return l.createElement(m,r({attr:r({},t.attr)},e),c(t.child))}}function m(t){var e=function(e){var a,n=t.attr,s=t.size,c=t.title,i=o(t,["attr","size","title"]),m=s||e.size||"1em";return e.className&&(a=e.className),t.className&&(a=(a?a+" ":"")+t.className),l.createElement("svg",r({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},e.attr,n,i,{className:a,style:r(r({color:t.color||e.color},e.style),t.style),height:m,width:m,xmlns:"http://www.w3.org/2000/svg"}),c&&l.createElement("title",null,c),t.children)};return void 0!==s?l.createElement(s.Consumer,null,(function(t){return e(t)})):e(n)}}}]);
//# sourceMappingURL=component---src-pages-playground-js-d19d4be1dd297f60ed8a.js.map