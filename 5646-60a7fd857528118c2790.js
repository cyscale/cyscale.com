(self.webpackChunkcyscale_gatsby=self.webpackChunkcyscale_gatsby||[]).push([[5646],{5566:function(t,e,r){"use strict";r.d(e,{w_:function(){return i}});var n=r(67294),a={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},o=n.createContext&&n.createContext(a),l=function(){return l=Object.assign||function(t){for(var e,r=1,n=arguments.length;r<n;r++)for(var a in e=arguments[r])Object.prototype.hasOwnProperty.call(e,a)&&(t[a]=e[a]);return t},l.apply(this,arguments)},s=function(t,e){var r={};for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&e.indexOf(n)<0&&(r[n]=t[n]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(n=Object.getOwnPropertySymbols(t);a<n.length;a++)e.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(t,n[a])&&(r[n[a]]=t[n[a]])}return r};function c(t){return t&&t.map((function(t,e){return n.createElement(t.tag,l({key:e},t.attr),c(t.child))}))}function i(t){return function(e){return n.createElement(u,l({attr:l({},t.attr)},e),c(t.child))}}function u(t){var e=function(e){var r,a=t.attr,o=t.size,c=t.title,i=s(t,["attr","size","title"]),u=o||e.size||"1em";return e.className&&(r=e.className),t.className&&(r=(r?r+" ":"")+t.className),n.createElement("svg",l({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},e.attr,a,i,{className:r,style:l(l({color:t.color||e.color},e.style),t.style),height:u,width:u,xmlns:"http://www.w3.org/2000/svg"}),c&&n.createElement("title",null,c),t.children)};return void 0!==o?n.createElement(o.Consumer,null,(function(t){return e(t)})):e(a)}},39008:function(t,e,r){"use strict";r.d(e,{$0:function(){return d},W2:function(){return u},X2:function(){return i}});var n=r(87462),a=r(63366),o=(r(67294),r(4382)),l=["children","className"],s=["children","className"],c=["children","className"],i=function(t){var e=t.children,r=t.className,s=void 0===r?"":r,c=(0,a.Z)(t,l);return(0,o.tZ)("div",(0,n.Z)({},c,{className:"grid grid-cols-12 gap-4 "+s}),e)},u=function(t){var e=t.children,r=t.className,l=(0,a.Z)(t,s);return(0,o.tZ)("div",(0,n.Z)({},l,{className:"container max-w-7xl m-auto px-4 lg:px-8 "+r||0}),e)},d=function(t){var e=t.children,r=t.className,l=(0,a.Z)(t,c);return(0,o.tZ)("section",(0,n.Z)({},l,{className:"pt-24 pb-24 lg:pt-32 lg:pb-32 "+r||0}),e)}},61422:function(t,e,r){"use strict";r.d(e,{Z:function(){return i}});var n=r(13311),a=r.n(n),o=r(67294),l=r(2075),s=r(18994),c=r(4382);function i(t){var e=t.author,r=t.permalink,n=t.title,i=a()(l.Z,(function(t){return t.name===e}))||e;return(0,c.tZ)("div",null,"string"==typeof i?(0,c.tZ)("span",{className:"text-xs text-black  h-7 block py-1"},"By ",(0,c.tZ)("strong",null,i)):(0,c.tZ)("div",{className:"flex justify-between items-center"},(0,c.tZ)("div",{className:"flex items-center"},(0,c.tZ)("div",{className:"h-7 w-7 mr-2 rounded-full border-digital border"},o.cloneElement(i.photo,Object.assign({},i.photo.props,{className:"rounded-full overflow-hidden relative z-10",alt:"Author image"}))),(0,c.tZ)("span",{className:"text-xs text-black"},"By ",(0,c.tZ)("strong",null,i.name))),(0,c.tZ)(s.Z,{title:n,permalink:r})))}},15043:function(t,e,r){"use strict";r.d(e,{Z:function(){return i}});var n=r(67294),a=r(71082),o=r(46488),l=r(61422),s=r(37059),c=r(4382);function i(t){var e,r=t.authors,i=t.categories,u=t.date,d=t.permalink,m=t.title,p=t.description,f=t.featuredimage,v=n.useRef();return(0,c.tZ)("div",{role:"link",tabIndex:0,onClick:function(){return v.current.click()},onKeyDown:function(t){return(13===t.code||32===t.code)&&v.current.click()},className:"rounded-xl shadow-lg bg-white block overflow-hidden group h-full cursor-pointer"},f&&(0,c.tZ)("div",{className:"relative overflow-hidden",style:{paddingBottom:"56.2%"}},(0,c.tZ)("div",{className:"absolute top-0 left-0"},(0,c.tZ)(s.G,{image:null==f||null===(e=f.childImageSharp)||void 0===e?void 0:e.gatsbyImageData,alt:m}))),(0,c.tZ)("div",{className:"p-5"},(0,c.tZ)(o.Z,{date:u,categories:i}),(0,c.tZ)(a.rU,{ref:v,to:"/blog/"+d+"/"},(0,c.tZ)("h2",{className:"text-lg my-4 leading-tight font-medium group-hover:text-primary transition-all h-16"},m)),(0,c.tZ)("div",{className:"mt-auto"},(0,c.tZ)(l.Z,{author:r,title:m,description:p,permalink:d}))))}},46488:function(t,e,r){"use strict";r.d(e,{Z:function(){return l}});r(67294);var n=r(13103),a=r(65822),o=r(4382);function l(t){var e=t.categories,r=t.date;return(0,o.tZ)("div",{className:"flex justify-between items-start"},(0,o.tZ)("span",null,(0,o.tZ)(a.Z,{categories:e})),(0,o.tZ)("span",{className:"text-xs text-black text-opacity-70 pt-1"},(0,n.p6)(r)))}},71244:function(t,e,r){"use strict";r.r(e);var n=r(35161),a=r.n(n),o=(r(67294),r(71082)),l=r(15043),s=r(39008),c=r(69931),i=r.n(c),u=r(4382);e.default=function(t){var e,r=t.bg,n=(0,o.K2)("3515318582"),c=null==n||null===(e=n.allMarkdownRemark)||void 0===e?void 0:e.edges;return(0,u.tZ)("div",{className:i()({"mt-0 py-12":!0,"bg-lightGrey ":"transparent"!==r,"bg-transparent":"transparent"===r})},(0,u.tZ)(s.W2,null,(0,u.tZ)(s.X2,{className:"gap-4 lg:gap-8"},a()(c,(function(t,e){var r=t.node;return(0,u.tZ)("div",{key:e,className:"col-span-12 md:col-span-6 lg:col-span-4"},(0,u.tZ)(l.Z,r.frontmatter))}))),(0,u.tZ)("div",{className:"block w-full mt-50px text-center"},(0,u.tZ)("div",{className:"mt-6 mx-auto w-auto flex justify-center"},(0,u.tZ)(o.rU,{to:"/blog/",className:"gradientBgBtn max-w-md text-base font-medium rounded text-white uppercase text-center py-5 px-12 no-underline"},"Read more about cloud security")))))}},18698:function(t){function e(r){return t.exports=e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},t.exports.__esModule=!0,t.exports.default=t.exports,e(r)}t.exports=e,t.exports.__esModule=!0,t.exports.default=t.exports}}]);
//# sourceMappingURL=5646-60a7fd857528118c2790.js.map