(self.webpackChunkcyscale_gatsby=self.webpackChunkcyscale_gatsby||[]).push([[2265],{15043:function(t,e,r){"use strict";r.d(e,{Z:function(){return i}});var n=r(67294),o=r(14160),a=r(46488),l=r(61422),s=r(38032),c=r(70917);function i(t){var e;let{authors:r,categories:i,date:u,permalink:d,title:f,description:m,featuredimage:p}=t;const g=n.useRef();return(0,c.tZ)("div",{role:"link",tabIndex:0,onClick:()=>g.current.click(),onKeyDown:t=>(13===t.code||32===t.code)&&g.current.click(),className:"rounded-xl shadow-lg bg-white block overflow-hidden group h-full cursor-pointer"},p&&(0,c.tZ)("div",{className:"relative overflow-hidden",style:{paddingBottom:"56.2%"}},(0,c.tZ)("div",{className:"absolute top-0 left-0"},(0,c.tZ)(s.G,{image:null==p||null===(e=p.childImageSharp)||void 0===e?void 0:e.gatsbyImageData,alt:f,imgStyle:{borderTopLeftRadius:"0.75rem",borderTopRightRadius:"0.75rem"}}))),(0,c.tZ)("div",{className:"p-5 flex flex-col"},(0,c.tZ)(a.Z,{date:u,categories:i}),(0,c.tZ)(o.rU,{ref:g,to:"/blog/"+d+"/"},(0,c.tZ)("h2",{className:"text-lg my-4 leading-tight font-medium group-hover:text-primary transition-all h-16 font-montserrat"},f)),(0,c.tZ)("div",{className:"mt-auto"},(0,c.tZ)(l.Z,{author:r,title:f,description:m,permalink:d}))))}},71244:function(t,e,r){"use strict";var n=r(35161),o=r.n(n),a=(r(67294),r(14160)),l=r(15043),s=r(39008),c=r(94184),i=r.n(c),u=r(70917);e.Z=t=>{var e;let{bg:r,blog:n}=t;const c=(0,a.K2)("2199015418"),d=null==c||null===(e=c.allMarkdownRemark)||void 0===e?void 0:e.edges;return(0,u.tZ)("div",{className:i()({"mt-0 py-12":!n,"bg-lightGrey ":"transparent"!==r,"bg-transparent":"transparent"===r})},(0,u.tZ)("div",{className:"container max-w-7xl m-auto"},(0,u.tZ)(s.X2,{className:"gap-4 lg:gap-8"},o()(d,((t,e)=>{let{node:r}=t;return(0,u.tZ)("div",{key:e,className:"col-span-12 md:col-span-6 lg:col-span-4"},(0,u.tZ)(l.Z,r.frontmatter))}))),!n&&(0,u.tZ)("div",{className:"block w-full mt-50px text-center"},(0,u.tZ)("div",{className:"mt-6 mx-auto w-auto flex justify-center"},(0,u.tZ)(a.rU,{to:"/blog/",className:"gradientBgBtn max-w-md text-base font-medium rounded text-white uppercase text-center py-5 px-12 no-underline"},"Read more about cloud security")))))}},39727:function(t,e,r){"use strict";r(67294);var n=r(14160),o=r(71244),a=r(70917);e.Z=()=>(0,a.tZ)("div",{className:"col-span-12"},(0,a.tZ)("h1",{className:"text-center text-xl lg:text-4xl text-blue font-montserrat font-bold py-8 lg:py-10"},"Thanks for contacting us, we will be in touch soon!"),(0,a.tZ)("h2",{className:"text-center text-base lg:text-lg font-montserrat font-bold my-4"},"Discover more about our product:"),(0,a.tZ)("p",{className:"text-center"}," ",(0,a.tZ)(n.rU,{className:"text-base lg:text-lg underline font-montserrat",to:"/products/cloud-security-posture-management/"},"Cloud Security Posture Management"))," ",(0,a.tZ)("p",{className:"text-center mt-1"}," ",(0,a.tZ)(n.rU,{className:"text-base lg:text-lg underline font-montserrat",to:"/products/security-knowledge-graph/"},"Security Knowledge Graph"))," ",(0,a.tZ)("p",{className:"text-center pb-12 mt-1"}," ",(0,a.tZ)(n.rU,{className:"text-base lg:text-lg underline font-montserrat",to:"/use-cases/cloud-compliance-and-auditing/"},"Compliance & Auditing"," ")),(0,a.tZ)(o.Z,{bg:"transparent"}))},66119:function(t,e,r){"use strict";var n=r(67294),o=r(66261);e.Z=t=>{let{formId:e,target:r}=t;const{0:a,1:l}=(0,n.useState)(!1),s=t=>{"hsFormCallback"===t.data.type&&"onFormSubmitted"===t.data.eventName&&t.data.id===e&&(l(!a),o.NY.scrollToTop())};return(0,n.useEffect)((()=>(setTimeout((()=>{var t;window&&window.hbspt&&(null===(t=window.hbspt.forms)||void 0===t||t.create({portalId:"5413427",formId:e,target:r}))}),600),window.addEventListener("message",s),()=>{window.removeEventListener("message",s)})),[]),{formSubmitted:a}}},62705:function(t,e,r){var n=r(55639).Symbol;t.exports=n},44239:function(t,e,r){var n=r(62705),o=r(89607),a=r(2333),l=n?n.toStringTag:void 0;t.exports=function(t){return null==t?void 0===t?"[object Undefined]":"[object Null]":l&&l in Object(t)?o(t):a(t)}},27561:function(t,e,r){var n=r(67990),o=/^\s+/;t.exports=function(t){return t?t.slice(0,n(t)+1).replace(o,""):t}},31957:function(t,e,r){var n="object"==typeof r.g&&r.g&&r.g.Object===Object&&r.g;t.exports=n},89607:function(t,e,r){var n=r(62705),o=Object.prototype,a=o.hasOwnProperty,l=o.toString,s=n?n.toStringTag:void 0;t.exports=function(t){var e=a.call(t,s),r=t[s];try{t[s]=void 0;var n=!0}catch(c){}var o=l.call(t);return n&&(e?t[s]=r:delete t[s]),o}},2333:function(t){var e=Object.prototype.toString;t.exports=function(t){return e.call(t)}},55639:function(t,e,r){var n=r(31957),o="object"==typeof self&&self&&self.Object===Object&&self,a=n||o||Function("return this")();t.exports=a},67990:function(t){var e=/\s/;t.exports=function(t){for(var r=t.length;r--&&e.test(t.charAt(r)););return r}},13218:function(t){t.exports=function(t){var e=typeof t;return null!=t&&("object"==e||"function"==e)}},37005:function(t){t.exports=function(t){return null!=t&&"object"==typeof t}},33448:function(t,e,r){var n=r(44239),o=r(37005);t.exports=function(t){return"symbol"==typeof t||o(t)&&"[object Symbol]"==n(t)}},14841:function(t,e,r){var n=r(27561),o=r(13218),a=r(33448),l=/^[-+]0x[0-9a-f]+$/i,s=/^0b[01]+$/i,c=/^0o[0-7]+$/i,i=parseInt;t.exports=function(t){if("number"==typeof t)return t;if(a(t))return NaN;if(o(t)){var e="function"==typeof t.valueOf?t.valueOf():t;t=o(e)?e+"":e}if("string"!=typeof t)return 0===t?t:+t;t=n(t);var r=s.test(t);return r||c.test(t)?i(t.slice(2),r?2:8):l.test(t)?NaN:+t}},44405:function(t,e,r){"use strict";r.d(e,{w_:function(){return i}});var n=r(67294),o={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},a=n.createContext&&n.createContext(o),l=function(){return l=Object.assign||function(t){for(var e,r=1,n=arguments.length;r<n;r++)for(var o in e=arguments[r])Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t},l.apply(this,arguments)},s=function(t,e){var r={};for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&e.indexOf(n)<0&&(r[n]=t[n]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(n=Object.getOwnPropertySymbols(t);o<n.length;o++)e.indexOf(n[o])<0&&Object.prototype.propertyIsEnumerable.call(t,n[o])&&(r[n[o]]=t[n[o]])}return r};function c(t){return t&&t.map((function(t,e){return n.createElement(t.tag,l({key:e},t.attr),c(t.child))}))}function i(t){return function(e){return n.createElement(u,l({attr:l({},t.attr)},e),c(t.child))}}function u(t){var e=function(e){var r,o=t.attr,a=t.size,c=t.title,i=s(t,["attr","size","title"]),u=a||e.size||"1em";return e.className&&(r=e.className),t.className&&(r=(r?r+" ":"")+t.className),n.createElement("svg",l({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},e.attr,o,i,{className:r,style:l(l({color:t.color||e.color},e.style),t.style),height:u,width:u,xmlns:"http://www.w3.org/2000/svg"}),c&&n.createElement("title",null,c),t.children)};return void 0!==a?n.createElement(a.Consumer,null,(function(t){return e(t)})):e(o)}}}]);
//# sourceMappingURL=6abb1833b9e74c19d184326c6ddc2dfcab976097-a15e005dfd3c5d2871ba.js.map