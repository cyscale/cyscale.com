(self.webpackChunkcyscale_gatsby=self.webpackChunkcyscale_gatsby||[]).push([[1264],{72950:function(t,e,r){"use strict";r.d(e,{Z:function(){return i}});var o=r(67294),n=r(73383),a=r.p+"static/banner-arrow-down-80d2cc096848a81e3163231fa2d0f0cc.svg",l=r(4382);var s={name:"fvvrqm",styles:"padding:0.625rem 2.5rem"};function i(t){var e=t.to,r=t.pageName,i=t.btnText;return(0,l.tZ)(o.Fragment,null,r&&"jobDetails"===r?(0,l.tZ)(n.rU,{className:"mt-24px w-full sm:w-auto",to:e,smooth:!0,duration:500},(0,l.tZ)("button",{type:"button",css:s,className:"gradientBgBtn w-full sm:min-w-232px block text-16px font-medium rounded text-white uppercase text-center hover:no-underline no-underline"},i)):(0,l.tZ)(n.rU,{className:"scroll-button pulse cursor-pointer",to:e,smooth:!0,duration:500},(0,l.tZ)("span",null,(0,l.tZ)("img",{src:a,alt:"down arrow icon",className:"mx-auto"}))))}},89165:function(t,e,r){"use strict";r.r(e),r.d(e,{default:function(){return x}});var o=r(67294),n=r(33926),a=r(81204),l=r(71082),s=r(4382),i={hybrid:"Hybrid (Remote or in Office)",remote:"Remote","in-office":"Only in Office"},u={"full-time":"Full Time (8h)","part-time":"Part Time (4h)",contract:"As contractor"},p=function(t){var e=t.data;return(0,s.tZ)("div",{className:"jobs"},e.frontmatter.disabled&&(0,s.tZ)("div",{className:"shadow-lg rounded-lg p-6 text-gray"},"This job is disabled. Please check the list of"," ",(0,s.tZ)(l.rU,{className:"text-primary",to:"/careers/"},"available jobs"),"."),(0,s.tZ)("div",{className:"shadow-lg bg-white rounded-lg p-6 mt-6"},(0,s.tZ)("ul",null,e.frontmatter.location&&(0,s.tZ)("li",null,"Job location: ",e.frontmatter.location),e.frontmatter.workType&&(0,s.tZ)("li",null,"Work type: ",i[e.frontmatter.workType]),e.frontmatter.department&&(0,s.tZ)("li",null,"Department: ",e.frontmatter.department),e.frontmatter.employmentType&&(0,s.tZ)("li",null,"Employment type: ",u[e.frontmatter.employmentType]),e.frontmatter.skills&&(0,s.tZ)("li",null,"Skills: ",e.frontmatter.skills),e.frontmatter.experience&&(0,s.tZ)("li",null,"Experience: ",e.frontmatter.experience))),(0,s.tZ)("p",{className:"text-2xl uppercase mb-50px text-blue leading-normal"},e.title),(0,s.tZ)(a.D,{skipHtml:!0},e&&(null==e?void 0:e.rawMarkdownBody)))},m=r(89862),c=r(72950),f=r(39008),d=function(t){var e=t.data,r=t.jobs;return(0,s.tZ)(o.Fragment,null,(0,s.tZ)("div",{className:"bg-lightGreyEEE pt-48 pb-8"},(0,s.tZ)(f.W2,null,(0,s.tZ)("h1",{className:"text-primary text-5xl font-semibold mb-20"},e.frontmatter.title),!e.frontmatter.disabled&&(0,s.tZ)("div",{className:"max-w-xs"},(0,s.tZ)(c.Z,{pageName:"jobDetails",btnText:"Apply",to:"applyForm"})))),(0,s.tZ)(f.W2,null,(0,s.tZ)("div",{className:"py-12 lg:py-16"},(0,s.tZ)(p,{data:e})),(0,s.tZ)("div",{className:"py-12 lg:py-16"},e.frontmatter.disabled?(0,s.tZ)("div",{className:"mb-12"}):(0,s.tZ)(m.Z,{jobTitle:e.frontmatter.title,jobs:r}))))},x=function(t){var e=t.pageContext,r=t.location,o=e.alldata,a=e.jobs,l=o.frontmatter;return(0,s.tZ)(n.Z,{location:r,pageName:"jobDetails",title:(l.seoTitle||l.title)+" - Cyscale",description:l.seoDescription||l.description},(0,s.tZ)(d,{data:o,jobs:a}))}},73897:function(t){t.exports=function(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,o=new Array(e);r<e;r++)o[r]=t[r];return o},t.exports.__esModule=!0,t.exports.default=t.exports},63405:function(t,e,r){var o=r(73897);t.exports=function(t){if(Array.isArray(t))return o(t)},t.exports.__esModule=!0,t.exports.default=t.exports},79498:function(t){t.exports=function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)},t.exports.__esModule=!0,t.exports.default=t.exports},42281:function(t){t.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")},t.exports.__esModule=!0,t.exports.default=t.exports},861:function(t,e,r){var o=r(63405),n=r(79498),a=r(86116),l=r(42281);t.exports=function(t){return o(t)||n(t)||a(t)||l()},t.exports.__esModule=!0,t.exports.default=t.exports},95036:function(t,e,r){var o=r(18698).default;t.exports=function(t,e){if("object"!==o(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,e||"default");if("object"!==o(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)},t.exports.__esModule=!0,t.exports.default=t.exports},64062:function(t,e,r){var o=r(18698).default,n=r(95036);t.exports=function(t){var e=n(t,"string");return"symbol"===o(e)?e:String(e)},t.exports.__esModule=!0,t.exports.default=t.exports},86116:function(t,e,r){var o=r(73897);t.exports=function(t,e){if(t){if("string"==typeof t)return o(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?o(t,e):void 0}},t.exports.__esModule=!0,t.exports.default=t.exports}}]);
//# sourceMappingURL=component---src-template-career-template-js-83ba6cd459420694c866.js.map