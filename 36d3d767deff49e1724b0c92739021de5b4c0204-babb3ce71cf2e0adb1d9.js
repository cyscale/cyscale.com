"use strict";(self.webpackChunkcyscale_gatsby=self.webpackChunkcyscale_gatsby||[]).push([[5212,6062],{36062:function(e,t,n){n.r(t);var a=n(67294),r=n(4382);t.default=function(e){var t=e.description,n=e.btnText,l=e.btnLink,i=e.sectionName,o=e.icon,c=e.icon2,s=e.ExternalLink,u=e.btnComponent;return(0,r.tZ)("div",{className:"block w-full pt-40 pb-40 sm:pt-92px sm:pb-92px"},(0,r.tZ)("div",{className:"max-w-1366px m-auto pl-20px pr-20px md:pl-40px md:pr-40px lg:pl-60px lg:pr-60px xl:pl-80px xl:pr-80px 2xl:pl-80px 2xl:pr-80px"},(0,r.tZ)("div",{className:i&&"getStartedFooter"===i?"grid grid-cols-1 lg:grid-cols-2 gap-6":"text-center"},(0,r.tZ)("div",null,(0,r.tZ)("div",{className:"block w-full  "+("aboutUsGetStarted"!==i&&("RemoteWork"===i?null:"md:w-96"))+" m-auto text-white text-24px leading-normal text-center "+(i&&"getStartedFooter"===i?"sm:text-left":"")},!!o&&(0,r.tZ)("img",{src:o,alt:"icon",className:"mb-30px mx-auto "+(i&&"getStartedFooter"===i?"sm:m-0 h-28":"")}),(0,r.tZ)("p",{className:("aboutUsGetStarted"===i?"md:w-xs mx-auto":"")+" "+("dataSecFoot"===i?"uppercase font-bold":"cloudDataSecurity"===i?"font-bold":"")+" mb-54px mt-30px sm:pr-0 sm:pl-0 font-montserrat new-line "},t),u?a.cloneElement(u,{className:"inline-block min-w-289px text-16px font-medium rounded bg-white text-black uppercase text-center pt-21px pb-21px pl-49px pr-49px no-underline transition-all duration-300 border border-black hover:border-black border-solid hover:bg-black hover:text-white hover:no-underline blackBorder cursor-pointer"}):(0,r.tZ)("a",{href:l,target:s?"_blank":"_self",rel:"noopener noreferrer",className:"inline-block min-w-289px text-16px font-medium rounded bg-white text-black uppercase text-center pt-21px pb-21px pl-49px pr-49px no-underline transition-all duration-300 border border-black hover:border-black border-solid hover:bg-black hover:text-white hover:no-underline blackBorder"},n))),i&&"getStartedFooter"===i?(0,r.tZ)("div",null,(0,r.tZ)("div",{className:"block w-full md:w-96 mx-auto sm:m-auto text-white text-24px leading-normal text-center sm:text-left mt-20px sm:mt-0px"},(0,r.tZ)("img",{src:c,alt:"icon",className:"hidden sm:block mb-30px "+(i&&"getStartedFooter"===i?"h-28":"mx-auto")}),(0,r.tZ)("p",{className:"hidden sm:block mb-19px font-montserrat"},"Learn all the ways Cyscale can help you keep security risks in check"),(0,r.tZ)("a",{href:"/request-demo/",className:"inline-block min-w-289px text-16px font-medium rounded text-white uppercase text-center pt-21px pb-21px pl-49px pr-49px no-underline transition-all duration-300 border border-white hover:border-black border-solid hover:bg-black hover:text-white hover:no-underline"},"BOOK YOUR DEMO"))):(0,r.tZ)(a.Fragment,null))))}},39008:function(e,t,n){n.d(t,{$0:function(){return d},W2:function(){return u},X2:function(){return s}});var a=n(87462),r=n(63366),l=(n(67294),n(4382)),i=["children","className"],o=["children","className"],c=["children","className"],s=function(e){var t=e.children,n=e.className,o=void 0===n?"":n,c=(0,r.Z)(e,i);return(0,l.tZ)("div",(0,a.Z)({},c,{className:"grid grid-cols-12 gap-4 "+o}),t)},u=function(e){var t=e.children,n=e.className,i=(0,r.Z)(e,o);return(0,l.tZ)("div",(0,a.Z)({},i,{className:"container max-w-7xl m-auto px-4 lg:px-8 "+n||0}),t)},d=function(e){var t=e.children,n=e.className,i=(0,r.Z)(e,c);return(0,l.tZ)("section",(0,a.Z)({},i,{className:"pt-24 pb-24 lg:pt-32 lg:pb-32 "+n||0}),t)}},9488:function(e,t,n){n.d(t,{Z:function(){return _}});var a=n(67294),r=n(76303);function l(e){return function(t){return!!t.type&&t.type.tabsRole===e}}var i=l("Tab"),o=l("TabList"),c=l("TabPanel");function s(){return s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},s.apply(this,arguments)}function u(e,t){return a.Children.map(e,(function(e){return null===e?null:function(e){return i(e)||o(e)||c(e)}(e)?t(e):e.props&&e.props.children&&"object"==typeof e.props.children?(0,a.cloneElement)(e,s({},e.props,{children:u(e.props.children,t)})):e}))}function d(e,t){return a.Children.forEach(e,(function(e){null!==e&&(i(e)||c(e)?t(e):e.props&&e.props.children&&"object"==typeof e.props.children&&(o(e)&&t(e),d(e.props.children,t)))}))}function p(e){var t,n,a="";if("string"==typeof e||"number"==typeof e)a+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=p(e[t]))&&(a&&(a+=" "),a+=n);else for(t in e)e[t]&&(a&&(a+=" "),a+=t);return a}var m=function(){for(var e,t,n=0,a="";n<arguments.length;)(e=arguments[n++])&&(t=p(e))&&(a&&(a+=" "),a+=t);return a},f=0;function b(){return"react-tabs-"+f++}function x(e){var t=0;return d(e,(function(e){i(e)&&t++})),t}var v,g=["children","className","disabledTabClassName","domRef","focus","forceRenderTabPanel","onSelect","selectedIndex","selectedTabClassName","selectedTabPanelClassName","environment","disableUpDownKeys"];function h(){return h=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},h.apply(this,arguments)}function N(e){return e&&"getAttribute"in e}function y(e){return N(e)&&e.getAttribute("data-rttab")}function Z(e){return N(e)&&"true"===e.getAttribute("aria-disabled")}var w=function(e){var t=(0,a.useRef)([]),n=(0,a.useRef)([]),r=(0,a.useRef)([]),l=(0,a.useRef)();function s(t,n){t<0||t>=f()||(0,e.onSelect)(t,e.selectedIndex,n)}function d(e){for(var t=f(),n=e+1;n<t;n++)if(!Z(N(n)))return n;for(var a=0;a<e;a++)if(!Z(N(a)))return a;return e}function p(e){for(var t=e;t--;)if(!Z(N(t)))return t;for(t=f();t-- >e;)if(!Z(N(t)))return t;return e}function f(){return x(e.children)}function N(e){return t.current["tabs-"+e]}function w(e){var t=e.target;do{if(C(t)){if(Z(t))return;return void s([].slice.call(t.parentNode.children).filter(y).indexOf(t),e)}}while(null!=(t=t.parentNode))}function C(e){if(!y(e))return!1;var t=e.parentElement;do{if(t===l.current)return!0;if(t.getAttribute("data-rttabs"))break;t=t.parentElement}while(t);return!1}e.children;var I=e.className,k=(e.disabledTabClassName,e.domRef),D=(e.focus,e.forceRenderTabPanel,e.onSelect,e.selectedIndex,e.selectedTabClassName,e.selectedTabPanelClassName,e.environment,e.disableUpDownKeys,function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,g));return a.createElement("div",h({},D,{className:m(I),onClick:w,onKeyDown:function(t){var n=e.direction,a=e.disableUpDownKeys;if(C(t.target)){var r=e.selectedIndex,l=!1,i=!1;"Space"!==t.code&&32!==t.keyCode&&"Enter"!==t.code&&13!==t.keyCode||(l=!0,i=!1,w(t)),"ArrowLeft"!==t.code&&37!==t.keyCode&&(a||38!==t.keyCode&&"ArrowUp"!==t.code)?"ArrowRight"!==t.code&&39!==t.keyCode&&(a||40!==t.keyCode&&"ArrowDown"!==t.code)?35===t.keyCode||"End"===t.code?(r=function(){for(var e=f();e--;)if(!Z(N(e)))return e;return null}(),l=!0,i=!0):36!==t.keyCode&&"Home"!==t.code||(r=function(){for(var e=f(),t=0;t<e;t++)if(!Z(N(t)))return t;return null}(),l=!0,i=!0):(r="rtl"===n?p(r):d(r),l=!0,i=!0):(r="rtl"===n?d(r):p(r),l=!0,i=!0),l&&t.preventDefault(),i&&s(r,t)}},ref:function(e){l.current=e,k&&k(e)},"data-rttabs":!0}),function(){var l=0,s=e.children,d=e.disabledTabClassName,p=e.focus,m=e.forceRenderTabPanel,x=e.selectedIndex,g=e.selectedTabClassName,h=e.selectedTabPanelClassName,y=e.environment;n.current=n.current||[],r.current=r.current||[];for(var Z=n.current.length-f();Z++<0;)n.current.push(b()),r.current.push(b());return u(s,(function(e){var s=e;if(o(e)){var f=0,b=!1;null==v&&function(e){var t=e||("undefined"!=typeof window?window:void 0);try{v=!(void 0===t||!t.document||!t.document.activeElement)}catch(n){v=!1}}(y);var Z=y||("undefined"!=typeof window?window:void 0);v&&Z&&(b=a.Children.toArray(e.props.children).filter(i).some((function(e,t){return Z.document.activeElement===N(t)}))),s=(0,a.cloneElement)(e,{children:u(e.props.children,(function(e){var l="tabs-"+f,i=x===f,o={tabRef:function(e){t.current[l]=e},id:n.current[f],panelId:r.current[f],selected:i,focus:i&&(p||b)};return g&&(o.selectedClassName=g),d&&(o.disabledClassName=d),f++,(0,a.cloneElement)(e,o)}))})}else if(c(e)){var w={id:r.current[l],tabId:n.current[l],selected:x===l};m&&(w.forceRender=m),h&&(w.selectedClassName=h),l++,s=(0,a.cloneElement)(e,w)}return s}))}())};w.defaultProps={className:"react-tabs",focus:!1};var C=w;function I(){return I=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},I.apply(this,arguments)}var k=function(e){var t=e.children,n=e.defaultFocus,r=e.defaultIndex,l=e.focusTabOnClick,i=e.onSelect,o=(0,a.useState)(n),c=o[0],s=o[1],u=(0,a.useState)(function(e){return null===e.selectedIndex?1:0}(e)),d=u[0],p=(0,a.useState)(1===d?r||0:null),m=p[0],f=p[1];if((0,a.useEffect)((function(){s(!1)}),[]),1===d){var b=x(t);(0,a.useEffect)((function(){if(null!=m){var e=Math.max(0,b-1);f(Math.min(m,e))}}),[b])}var v=I({},e);return v.focus=c,v.onSelect=function(e,t,n){"function"==typeof i&&!1===i(e,t,n)||(l&&s(!0),1===d&&f(e))},null!=m&&(v.selectedIndex=m),delete v.defaultFocus,delete v.defaultIndex,delete v.focusTabOnClick,a.createElement(C,v,t)};k.defaultProps={defaultFocus:!1,focusTabOnClick:!0,forceRenderTabPanel:!1,selectedIndex:null,defaultIndex:null,environment:null,disableUpDownKeys:!1},k.tabsRole="Tabs";var D=k,M=["children","className"];function S(){return S=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},S.apply(this,arguments)}var T=function(e){var t=e.children,n=e.className,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,M);return a.createElement("ul",S({},r,{className:m(n),role:"tablist"}),t)};T.tabsRole="TabList",T.defaultProps={className:"react-tabs__tab-list"};var P=T,R=["children","className","disabled","disabledClassName","focus","id","panelId","selected","selectedClassName","tabIndex","tabRef"];function O(){return O=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},O.apply(this,arguments)}var E="react-tabs__tab",j={className:E,disabledClassName:E+"--disabled",focus:!1,id:null,panelId:null,selected:!1,selectedClassName:E+"--selected"},A=function(e){var t,n=(0,a.useRef)(),r=e.children,l=e.className,i=e.disabled,o=e.disabledClassName,c=e.focus,s=e.id,u=e.panelId,d=e.selected,p=e.selectedClassName,f=e.tabIndex,b=e.tabRef,x=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,R);return(0,a.useEffect)((function(){d&&c&&n.current.focus()}),[d,c]),a.createElement("li",O({},x,{className:m(l,(t={},t[p]=d,t[o]=i,t)),ref:function(e){n.current=e,b&&b(e)},role:"tab",id:s,"aria-selected":d?"true":"false","aria-disabled":i?"true":"false","aria-controls":u,tabIndex:f||(d?"0":null),"data-rttab":!0}),r)};A.tabsRole="Tab",A.defaultProps=j;var G=A,U=["children","className","forceRender","id","selected","selectedClassName","tabId"];function z(){return z=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},z.apply(this,arguments)}var F="react-tabs__tab-panel",L={className:F,forceRender:!1,selectedClassName:"react-tabs__tab-panel--selected"},H=function(e){var t,n=e.children,r=e.className,l=e.forceRender,i=e.id,o=e.selected,c=e.selectedClassName,s=e.tabId,u=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,U);return a.createElement("div",z({},u,{className:m(r,(t={},t[c]=o,t)),role:"tabpanel",id:i,"aria-labelledby":s}),l||o?n:null)};H.tabsRole="TabPanel",H.defaultProps=L;var K=H,W=n(4382),_=function(e){var t=e.sectionTitle,n=e.data,l=e.id,i=(0,a.useState)(0),o=i[0],c=i[1];function s(){1===o?c(0):2===o?c(1):0===o&&c(2)}function u(){0===o?c(1):1===o?c(2):2===o&&c(0)}return(0,W.tZ)(a.Fragment,null,(0,W.tZ)("div",{className:"block w-full bg-white pt-12",id:l},(0,W.tZ)("div",{className:"max-w-1366px m-auto pl-20px pr-20px md:pl-40px md:pr-40px lg:pl-60px lg:pr-60px xl:pl-80px xl:pr-80px 2xl:pl-80px 2xl:pr-80px"},(0,W.tZ)("h2",{className:"font-semibold  text-blue text-30px md:text-60px mt-25px mb-25px md:mt-50px md:mb-50px font-montserrat"},t))),(0,W.tZ)("div",{className:"block featuredProducts overflow-hidden w-full pb-12 bg-white featureTabs"},(0,W.tZ)(D,{selectedIndex:o,onSelect:function(e){return c(e)}},(0,W.tZ)(P,null,n.map((function(e,t){return(0,W.tZ)(G,{key:t},(0,W.tZ)("span",{className:"font-montserrat"},e.tabTitle))}))),n.map((function(e,t){return(0,W.tZ)(K,{forceRender:!0,key:t},(0,W.tZ)("div",{className:"max-w-1366px relative m-auto pl-20px pr-20px md:pl-40px md:pr-40px lg:pl-60px lg:pr-60px xl:pl-80px xl:pr-80px 2xl:pl-80px 2xl:pr-80px"},(0,W.tZ)("div",{className:"mt-32 mb-16"},(0,W.tZ)(r.default,{headingText:e.sectionTitle,description:e.sectionDescription,pageName:"CSPMPage"})),(0,W.tZ)("div",{className:"featureSlider justify-evenly flex items-center"},(0,W.tZ)("div",{className:"flex-initial"},(0,W.tZ)("button",{type:"button","aria-label":"left",className:"outline-none focus:outline-none",tabIndex:t,onKeyDown:s,onClick:s},(0,W.tZ)("img",{src:"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI1NC4zODEiIGhlaWdodD0iMTAzLjEwNSIgdmlld0JveD0iMCAwIDU0LjM4MSAxMDMuMTA1Ij4KICA8cGF0aCBpZD0iUGF0aF8yMjMiIGRhdGEtbmFtZT0iUGF0aCAyMjMiIGQ9Ik05MDAuNTI0LTE2ODEuNzU5LDg1MC4zODYtMTczMS45bDUwLjEzOC01MC4xMzgiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC04NDcuNTU4IDE3ODMuNDUpIiBmaWxsPSJub25lIiBzdHJva2U9IiNhYWEiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIgc3Ryb2tlLXdpZHRoPSI0Ii8+Cjwvc3ZnPgo=",className:"m-auto cursor-pointer",alt:"left icon"}))),(0,W.tZ)("div",{style:{width:"100%",maxWidth:960}},(0,W.tZ)("div",{className:"max-w-5xl m-auto"},a.cloneElement(e.featureImage))),(0,W.tZ)("div",{className:"flex-initial"},(0,W.tZ)("button",{type:"button","aria-label":"right",className:"outline-none focus:outline-none",tabIndex:t,onKeyDown:u,onClick:u},(0,W.tZ)("img",{src:"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI1NC4zODEiIGhlaWdodD0iMTAzLjEwNSIgdmlld0JveD0iMCAwIDU0LjM4MSAxMDMuMTA1Ij4KICA8cGF0aCBpZD0iUGF0aF8yMjQiIGRhdGEtbmFtZT0iUGF0aCAyMjQiIGQ9Ik05MDAuNTI0LTE2ODEuNzU5LDg1MC4zODYtMTczMS45bDUwLjEzOC01MC4xMzgiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDkwMS45MzggLTE2ODAuMzQ0KSByb3RhdGUoMTgwKSIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjYWFhIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIHN0cm9rZS13aWR0aD0iNCIvPgo8L3N2Zz4K",className:"m-auto cursor-pointer",alt:"right icon"}))))))}))),(0,W.tZ)("div",{className:"flex space-x-8 mt-45px justify-center pagination"},(0,W.tZ)("button",{type:"button","aria-label":"0",tabIndex:"-1",onKeyDown:function(){return c(0)},onClick:function(){return c(0)},className:"outline-none "+(0===o&&"active")}),(0,W.tZ)("button",{type:"button","aria-label":"1",tabIndex:"-2",onKeyDown:function(){return c(1)},onClick:function(){return c(1)},className:"outline-none "+(1===o&&"active")}),(0,W.tZ)("button",{type:"button","aria-label":"2",tabIndex:"-3",onKeyDown:function(){return c(2)},onClick:function(){return c(2)},className:"outline-none "+(2===o&&"active")}))))}},72982:function(e,t,n){n.d(t,{A:function(){return m},F8:function(){return s},Y9:function(){return d},pC:function(){return u},q1:function(){return p},rE:function(){return c}});var a=n(87462),r=(n(67294),n(71082)),l=n(37059),i=n(4382);function o(e){return function(t){return(0,i.tZ)(r.i1,{query:"3595730132",render:function(n){return(0,i.tZ)(e,(0,a.Z)({},t,{imageData:n}))}})}}var c=o((function(e){return(0,i.tZ)(l.G,{image:e.imageData.policiesCSPM.childImageSharp.gatsbyImageData,alt:" Policies view with compliance score"})})),s=o((function(e){return(0,i.tZ)(l.G,{image:e.imageData.inventoryCSPM.childImageSharp.gatsbyImageData,alt:"Inventory view with assets and risk information"})})),u=o((function(e){return(0,i.tZ)(l.G,{image:e.imageData.alertsCSPM.childImageSharp.gatsbyImageData,alt:"Alerts view"})})),d=o((function(e){return(0,i.tZ)(l.G,{image:e.imageData.inventoryGraph.childImageSharp.gatsbyImageData,alt:"Graph view"})})),p=o((function(e){return(0,i.tZ)(l.G,{image:e.imageData.inventoryGroupedAssets.childImageSharp.gatsbyImageData,alt:"Inventory view with assets and risk information"})})),m=o((function(e){return(0,i.tZ)(l.G,{image:e.imageData.dashboardCSPM.childImageSharp.gatsbyImageData,alt:"Dashboard view with multi-cloud environments"})}))},76303:function(e,t,n){n.r(t);var a=n(67294),r=n(73554),l=n(69931),i=n.n(l),o=n(4382);t.default=function(e){var t=e.headingText,n=e.description,l=e.subText,c=e.pageName,s=e.section;return(0,o.tZ)(a.Fragment,null,(0,o.tZ)("div",{className:"grid grid-cols-1 "+("aboutUs"===c||"dataSecurity"===c||"cloudCompliance"===c?"lg:grid-cols-2":"lg:grid-cols-3")+" "+(c&&"CSPMPage"===c?"gap-4 lg:gap-x-52":"gap-4")+" "+(c&&"RemoteWork"===c?"items-center":null)},(0,o.tZ)("div",null,(0,o.tZ)("h2",{className:"font-semibold text-blue text-34px leading-normal "+("dataSecurity"===c?"lg:max-w-md":"cloudCompliance"===c?null:"lg:max-w-sm")+" "+(s&&"complianceAutoUpdates"===s?"lg:pr-32":null)+" font-montserrat sectionTitle new-line"},t),!!l&&(0,o.tZ)("p",{className:"text-black text-16px mt-12 lg:mt-32 capitalize"},l),!!s&&"complianceGovern"===s&&(0,o.tZ)("img",{src:r.Z,alt:"Govern all cloud entities from a single dashboard",className:"w-auto h-auto mt-8 mx-auto lg:mx-0"})),(0,o.tZ)("div",{className:"CSPMPage"===c||"cloudCompliance"===c||"aboutUs"===c||"dataSecurity"===c?"hidden":"hidden lg:block"}),!!n&&(0,o.tZ)("div",{className:c&&"CSPMPage"===c?"lg:col-span-2":""},(0,o.tZ)("p",{className:i()({"text-block text-16px leading-normal new-line mt-8":!0,"pb-6 sm:pb-0":"complianceGovern"===s})},n),"Reveal & curb hidden costs"===t&&(0,o.tZ)("ul",{className:"text-16px list-disc ml-30px"},(0,o.tZ)("li",{className:"mt-30px"},"identify and delete unused or forgotten cloud resources that generate costly invoices from cloud providers"),(0,o.tZ)("li",{className:"mt-30px"},"spend significantly less time managing and integrating assets"),(0,o.tZ)("li",{className:"mt-30px"},"scale without having to make new hires"),(0,o.tZ)("li",{className:"mt-30px"},"avoid fines for data breaches and lack of compliance."))),"RemoteWork"===c&&(0,o.tZ)("div",{className:"hidden lg:inline-flex"},(0,o.tZ)("img",{src:r.Z,alt:"Use the Cyscale Cloud Platform to",className:"w-auto h-auto ml-auto"}))))}},11015:function(e,t,n){t.Z=n.p+"static/hero-CSPM-bg-7892d54884600e0f43ee47d187d16bf6.svg"}}]);
//# sourceMappingURL=36d3d767deff49e1724b0c92739021de5b4c0204-babb3ce71cf2e0adb1d9.js.map