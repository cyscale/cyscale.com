"use strict";(self.webpackChunkcyscale_gatsby=self.webpackChunkcyscale_gatsby||[]).push([[5060],{86301:function(t,e,a){function s(){return s=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var a=arguments[e];for(var s in a)Object.prototype.hasOwnProperty.call(a,s)&&(t[s]=a[s])}return t},s.apply(this,arguments)}a.d(e,{Z:function(){return n}});var i=function(){var t="undefined"!=typeof window&&window._hsq?window._hsq:[],e=function(){t.push(["trackPageView"])};return{setContentType:function(e){t.push(["setContentType",e])},setPathPageView:function(a){t.push(["setPath",a]),e()},setTrackPageView:e,setIdentity:function(e,a){t.push(["identify",s({email:e},a)])},setTrackEvent:function(e){var a=e.eventId,s=e.value;t.push(["trackEvent",{id:a,value:s}])}}};function n(t){let{pageName:e}=t;const{setIdentity:a,setContentType:s}=i();if("undefined"!=typeof window){const t=localStorage.getItem("user-email");t&&a(t)}s("blog-detail"===e?"blog-post":"standard-page")}},33926:function(t,e,a){var s=a(67294),i=a(32687),n=a(67156),o=a(80414),M=a(26040),l=a(86301),c=a(17631),u=a(44410),r=a(52468),d=a(35533),w=a(95030),y=a(86363),L=a(70917);e.Z=t=>{let{children:e,title:a,description:m,pageName:N,location:g,banner:j}=t;(0,l.Z)({pageName:N});const{0:D,1:h}=(0,s.useState)(!1),{cookies:p,cookiesBanner:Z,setCookiesBanner:x}=(0,d.Z)();return(0,L.tZ)(u.Z,null,(0,L.tZ)(M.Z.Provider,{value:{location:g}},(0,L.tZ)(i.Z,{title:a,description:m,pageName:N,location:g,banner:j}),(0,L.tZ)(o.Z.Provider,{value:{sticker:D,setSticker:h}},(0,L.tZ)(y.Z,{pageName:N,location:g})),(0,L.tZ)("main",null,e),(0,L.tZ)(n.default,{pageUri:null==g?void 0:g.pathname,pageName:N}),!0!==Boolean(p[w.VB])&&(0,L.tZ)(c.Z,{cookiesBanner:Z,setCookiesBanner:x,pageName:N}),(0,L.tZ)(r.Z,null)))}},80414:function(t,e,a){const s=a(67294).createContext({sticker:!1,setSticker:()=>{}});e.Z=s},8468:function(t,e,a){a.r(e),a.d(e,{default:function(){return w}});var s=a(67294),i=a(33926),n=a(64593),o=a(39008),M=a(70917);function l(){return(0,M.tZ)("div",null,(0,M.tZ)("p",{className:"leading-normal text-gray font-bold mb-4"},"© ",(new Date).getFullYear()," Cyscale Limited"),(0,M.tZ)("p",{className:"leading-relaxed text-gray font-normal mb-2 text-sm"},"Registered in England and Wales",(0,M.tZ)("br",null),"Company number: 13695269",(0,M.tZ)("br",null),"The Broadgate Tower, 20 Primrose Street, London, EC2A 2RS",(0,M.tZ)("br",null)),(0,M.tZ)("a",{href:"https://www.google.com/maps/place/Cyscale/@51.5209922,-0.0811234,17z",className:"uppercase text-blue underline hover:no-underline hover:text-red font-medium text-sm"},"View map"),(0,M.tZ)("div",{className:"mt-16"},(0,M.tZ)("div",{className:"flex space-x-4 justify-start items-center"},(0,M.tZ)("a",{href:"https://www.linkedin.com/company/cyscale"},(0,M.tZ)("img",{width:20,height:20,src:"data:image/svg+xml;base64,PHN2ZyBpZD0iZzU4OTEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgd2lkdGg9IjI4LjAxNiIgaGVpZ2h0PSIyOC4wMTYiIHZpZXdCb3g9IjAgMCAyOC4wMTYgMjguMDE2Ij4KICA8cGF0aCBpZD0iUGF0aF8xMzEiIGRhdGEtbmFtZT0iUGF0aCAxMzEiIGQ9Ik0xMzUuNiw3MDcuMzNIMTE0LjU5YTMuNTA3LDMuNTA3LDAsMCwwLTMuNSwzLjV2MjEuMDA5YTMuNTA3LDMuNTA3LDAsMCwwLDMuNSwzLjVIMTM1LjZhMy41MDcsMy41MDcsMCwwLDAsMy41LTMuNVY3MTAuODM0QTMuNTA3LDMuNTA3LDAsMCwwLDEzNS42LDcwNy4zM1pNMTE5LjEyLDczMS4yMTloLTQuNjkyVjcxNy4xMDVoNC42OTJabS0yLjM0Ny0xNi4wNGgtLjAzMmEyLjY4MSwyLjY4MSwwLDEsMSwuMDMyLDBabTE5LjI2MiwxNi4wNGgtNC42OTJ2LTcuNTVjMC0xLjktLjY3OS0zLjE5My0yLjM3NS0zLjE5M2EyLjU3MiwyLjU3MiwwLDAsMC0yLjQwOCwxLjcxNSwzLjIxMiwzLjIxMiwwLDAsMC0uMTU0LDEuMTQ0djcuODgzaC00LjY5MnMuMDYzLTEyLjc5MSwwLTE0LjExNGg0LjY5MnYyYTQuNjUyLDQuNjUyLDAsMCwxLDQuMjI3LTIuMzMxYzMuMDg5LDAsNS40LDIuMDE1LDUuNCw2LjM1MloiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0xMTEuMDg2IC03MDcuMzMpIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiLz4KPC9zdmc+Cg==",alt:"linkedin"})),(0,M.tZ)("a",{href:"https://www.twitter.com/cyscale"},(0,M.tZ)("img",{width:20,height:20,src:"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzNS4zOTciIGhlaWdodD0iMjguNzYiIHZpZXdCb3g9IjAgMCAzNS4zOTcgMjguNzYiPgogIDxwYXRoIGlkPSJQYXRoXzIxNiIgZGF0YS1uYW1lPSJQYXRoIDIxNiIgZD0iTTE2My40MDksNzM1Ljg3OGMxMy4zNTYsMCwyMC42NjMtMTEuMDY1LDIwLjY2My0yMC42NjMsMC0uMzE0LDAtLjYyNy0uMDIxLS45MzdhMTQuODE2LDE0LjgxNiwwLDAsMCwzLjYyMy0zLjc2LDE0LjQ3MSwxNC40NzEsMCwwLDEtNC4xNzIsMS4xNDMsNy4yNzgsNy4yNzgsMCwwLDAsMy4xOTMtNC4wMTYsMTQuNTUyLDE0LjU1MiwwLDAsMS00LjYxMSwxLjc2Miw3LjI2OSw3LjI2OSwwLDAsMC0xMi4zNzYsNi42MjMsMjAuNjI0LDIwLjYyNCwwLDAsMS0xNC45NjYtNy41ODYsNy4zLDcuMywwLDAsMCwyLjI0OSw5LjY5Myw3LjIwOCw3LjIwOCwwLDAsMS0zLjMtLjkwN3YuMDkxYTcuMjg2LDcuMjg2LDAsMCwwLDUuODI2LDcuMTIsNy4yNjYsNy4yNjYsMCwwLDEtMy4yNzkuMTI1LDcuMjg1LDcuMjg1LDAsMCwwLDYuNzg0LDUuMDQzLDE0LjYsMTQuNiwwLDAsMS0xMC43NDgsMy4wMSwyMC41NjUsMjAuNTY1LDAsMCwwLDExLjEzMiwzLjI1NiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTE1Mi4yNzcgLTcwNy4xMTgpIi8+Cjwvc3ZnPgo=",alt:"twitter"})),(0,M.tZ)("a",{href:"https://www.facebook.com/cyscale"},(0,M.tZ)("img",{width:20,height:20,src:"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyOC4wMTYiIGhlaWdodD0iMjguMDE2IiB2aWV3Qm94PSIwIDAgMjguMDE2IDI4LjAxNiI+CiAgPHBhdGggaWQ9IlBhdGhfMjE3IiBkYXRhLW5hbWU9IlBhdGggMjE3IiBkPSJNMjIyLjI2Niw3MDcuMzNhMy40MjUsMy40MjUsMCwwLDEsMy40MjMsMy40MjN2MjEuMTdhMy40MjUsMy40MjUsMCwwLDEtMy40MjMsMy40MjNIMjE2LjQ0VjcyNC43OWgzLjY0NGwuNjkzLTQuNTJIMjE2LjQ0di0yLjkzNWEyLjI2LDIuMjYsMCwwLDEsMi41NDktMi40NDJoMS45NzF2LTMuODQ5YTI0LjAyOCwyNC4wMjgsMCwwLDAtMy41LS4zMDVjLTMuNTcyLDAtNS45MDgsMi4xNjYtNS45MDgsNi4wODZ2My40NDZoLTMuOTd2NC41MmgzLjk3djEwLjU1NkgyMDEuMWEzLjQyNSwzLjQyNSwwLDAsMS0zLjQyMy0zLjQyM3YtMjEuMTdhMy40MjUsMy40MjUsMCwwLDEsMy40MjMtMy40MjNaIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMTk3LjY3MyAtNzA3LjMzKSIgZmlsbC1ydWxlPSJldmVub2RkIi8+Cjwvc3ZnPgo=",alt:"facebook"})))))}var c=a(83786),u=a(94184),r=a.n(u),d=a(54668);var w=t=>{let{location:e}=t;const{0:a,1:u}=(0,s.useState)(!0),{loadingForm:w}=(0,c.Z)(),y=t=>{"hsFormCallback"===t.data.type&&"onFormSubmitted"===t.data.eventName&&"c29fe5d0-179d-4bff-a8ac-36790a48a6c2"===t.data.id&&u(!a)};return(0,s.useEffect)((()=>(setTimeout((()=>{window&&window.hbspt&&window.hbspt.forms.create({portalId:"5413427",formId:"c29fe5d0-179d-4bff-a8ac-36790a48a6c2",target:"#contact-form"})}),600),window.addEventListener("message",y),()=>{window.removeEventListener("message",y)})),[]),(0,M.tZ)(i.Z,{location:e,pageName:"ContactUs",title:"Contact us - Cyscale",description:"We are always happy to assist with more information about us or our product which covers cloud security, kubernetes security and hybrid multi-cloud environments."},(0,M.tZ)(n.q,null,(0,M.tZ)("script",{charset:"utf-8",type:"text/javascript",src:"//js.hsforms.net/forms/shell.js"})),(0,M.tZ)("div",{className:"hidden","data-template-key":!0},"hardcoded-pages"),(0,M.tZ)("div",{className:"hidden","data-permalink":!0},"/contact-us"),(0,M.tZ)("div",{className:"hidden","data-title":!0},"Contact us - Cyscale"),(0,M.tZ)("div",{className:"hidden","data-description":!0},"We are always happy to assist with more information about us or our product which covers cloud security, kubernetes security and hybrid multi-cloud environments."),(0,M.tZ)("div",{className:"hidden","data-category":!0},"website"),(0,M.tZ)("div",{className:"bg-lightGreyEEE"},(0,M.tZ)(o.W2,null,(0,M.tZ)(o.$0,null,(0,M.tZ)(o.X2,null,(0,M.tZ)("div",{className:"col-span-12 lg:col-span-6 order-2 lg:order-1"},(0,M.tZ)("div",{className:"mt-16 pt-12 lg:pt-24 max-w-lg mx-auto lg:mx-0 bg-pricing"},(0,M.tZ)("h1",{className:"font-semibold font-montserrat text-4xl lg:text-6xl text-blue mb-12 lg:mb-32 hidden lg:block"},"Contact"),(0,M.tZ)("p",{className:"leading-normal text-gray font-bold mb-8"},"For support, email us at"," ",(0,M.tZ)("a",{href:"mailto:support@cyscale.com",className:"text-blue underline hover:no-underline hover:text-red font-medium"},"support@cyscale.com")),(0,M.tZ)(l,null))),(0,M.tZ)("div",{className:"col-span-12 lg:col-span-6 order-1 lg:order-2"},(0,M.tZ)("div",{className:r()({"rounded-lg mt-6 lg:mt-0 lg:rounded-xl lg:pt-6 pb-0 px-0 lg:px-12 max-w-lg mx-auto lg:mr-0 lg:ml-auto relative":!0,"lg:bg-white lg:shadow-lg":a})},a&&(0,M.tZ)("div",null," ",(0,M.tZ)("h2",{className:"font-semibold text-4xl lg:text-2xl leading-normal text-primary mb-1"},"How can we help you?"),(0,M.tZ)("p",{className:"text-base text-gray leading-normal mt-4 mb-4"},"We are always happy to assist with more information about us or our product. Just fill out the form below and we will get back to you."," ")),w&&(0,M.tZ)(d.Z,{minHeight:510}),a&&(0,M.tZ)("div",{style:{minHeight:510},id:"contact-form",className:r()({hidden:w})}),!a&&(0,M.tZ)("div",{style:{minHeight:645},className:"flex justify-center items-center"},(0,M.tZ)("h1",{className:"text-blue text-2xl sm:text-4xl font-semibold text-center pb-40"},"Thanks for contacting us, ",(0,M.tZ)("br",{className:"block sm:hidden"})," we will be in touch soon!")))))))))}}}]);
//# sourceMappingURL=component---src-pages-contact-us-js-b0fe00b427d8b7558af2.js.map