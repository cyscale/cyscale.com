(self.webpackChunkcyscale_gatsby=self.webpackChunkcyscale_gatsby||[]).push([[9678,8367],{23810:function(e,t,n){"use strict";n.d(t,{ZP:function(){return v}});var i=n(67294),a=n(63366),r=n(87462);function o(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var s=n(51721),c=n(59864),u=n(8679),l=n.n(u);function M(e,t){if(!e){var n=new Error("loadable: "+t);throw n.framesToPop=1,n.name="Invariant Violation",n}}var N=i.createContext();var g={initialChunks:{}},I="PENDING",d="REJECTED";var j=function(e){return e};function f(e){var t=e.defaultResolveComponent,n=void 0===t?j:t,u=e.render,f=e.onLoad;function D(e,t){void 0===t&&(t={});var j=function(e){return"function"==typeof e?{requireAsync:e,resolve:function(){},chunkName:function(){}}:e}(e),D={};function m(e){return t.cacheKey?t.cacheKey(e):j.resolve?j.resolve(e):"static"}function y(e,i,a){var r=t.resolveComponent?t.resolveComponent(e,i):n(e);if(t.resolveComponent&&!(0,c.isValidElementType)(r))throw new Error("resolveComponent returned something that is not a React component!");return l()(a,r,{preload:!0}),r}var p,z,b=function(e){var t=m(e),n=D[t];return n&&n.status!==d||((n=j.requireAsync(e)).status=I,D[t]=n,n.then((function(){n.status="RESOLVED"}),(function(t){console.error("loadable-components: failed to asynchronously load component",{fileName:j.resolve(e),chunkName:j.chunkName(e),error:t?t.message:t}),n.status=d}))),n},h=function(e){function n(n){var i;return(i=e.call(this,n)||this).state={result:null,error:null,loading:!0,cacheKey:m(n)},M(!n.__chunkExtractor||j.requireSync,"SSR requires `@loadable/babel-plugin`, please install it"),n.__chunkExtractor?(!1===t.ssr||(j.requireAsync(n).catch((function(){return null})),i.loadSync(),n.__chunkExtractor.addChunk(j.chunkName(n))),o(i)):(!1!==t.ssr&&(j.isReady&&j.isReady(n)||j.chunkName&&g.initialChunks[j.chunkName(n)])&&i.loadSync(),i)}(0,s.Z)(n,e),n.getDerivedStateFromProps=function(e,t){var n=m(e);return(0,r.Z)({},t,{cacheKey:n,loading:t.loading||t.cacheKey!==n})};var i=n.prototype;return i.componentDidMount=function(){this.mounted=!0;var e=this.getCache();e&&e.status===d&&this.setCache(),this.state.loading&&this.loadAsync()},i.componentDidUpdate=function(e,t){t.cacheKey!==this.state.cacheKey&&this.loadAsync()},i.componentWillUnmount=function(){this.mounted=!1},i.safeSetState=function(e,t){this.mounted&&this.setState(e,t)},i.getCacheKey=function(){return m(this.props)},i.getCache=function(){return D[this.getCacheKey()]},i.setCache=function(e){void 0===e&&(e=void 0),D[this.getCacheKey()]=e},i.triggerOnLoad=function(){var e=this;f&&setTimeout((function(){f(e.state.result,e.props)}))},i.loadSync=function(){if(this.state.loading)try{var e=y(j.requireSync(this.props),this.props,w);this.state.result=e,this.state.loading=!1}catch(t){console.error("loadable-components: failed to synchronously load component, which expected to be available",{fileName:j.resolve(this.props),chunkName:j.chunkName(this.props),error:t?t.message:t}),this.state.error=t}},i.loadAsync=function(){var e=this,t=this.resolveAsync();return t.then((function(t){var n=y(t,e.props,w);e.safeSetState({result:n,loading:!1},(function(){return e.triggerOnLoad()}))})).catch((function(t){return e.safeSetState({error:t,loading:!1})})),t},i.resolveAsync=function(){var e=this.props,t=(e.__chunkExtractor,e.forwardedRef,(0,a.Z)(e,["__chunkExtractor","forwardedRef"]));return b(t)},i.render=function(){var e=this.props,n=e.forwardedRef,i=e.fallback,o=(e.__chunkExtractor,(0,a.Z)(e,["forwardedRef","fallback","__chunkExtractor"])),s=this.state,c=s.error,l=s.loading,M=s.result;if(t.suspense&&(this.getCache()||this.loadAsync()).status===I)throw this.loadAsync();if(c)throw c;var N=i||t.fallback||null;return l?N:u({fallback:N,result:M,options:t,props:(0,r.Z)({},o,{ref:n})})},n}(i.Component),v=(z=function(e){return i.createElement(N.Consumer,null,(function(t){return i.createElement(p,Object.assign({__chunkExtractor:t},e))}))},(p=h).displayName&&(z.displayName=p.displayName+"WithChunkExtractor"),z),w=i.forwardRef((function(e,t){return i.createElement(v,Object.assign({forwardedRef:t},e))}));return w.displayName="Loadable",w.preload=function(e){w.load(e)},w.load=function(e){return b(e)},w}return{loadable:D,lazy:function(e,t){return D(e,(0,r.Z)({},t,{suspense:!0}))}}}var D=f({defaultResolveComponent:function(e){return e.__esModule?e.default:e.default||e},render:function(e){var t=e.result,n=e.props;return i.createElement(t,n)}}),m=D.loadable,y=D.lazy,p=f({onLoad:function(e,t){e&&t.forwardedRef&&("function"==typeof t.forwardedRef?t.forwardedRef(e):t.forwardedRef.current=e)},render:function(e){var t=e.result,n=e.props;return n.children?n.children(t):null}}),z=p.loadable,b=p.lazy;var h=m;h.lib=z,y.lib=b;var v=h},86301:function(e,t,n){"use strict";function i(){return i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e},i.apply(this,arguments)}n.d(t,{Z:function(){return r}});var a=function(){var e="undefined"!=typeof window&&window._hsq?window._hsq:[],t=function(){e.push(["trackPageView"])};return{setContentType:function(t){e.push(["setContentType",t])},setPathPageView:function(n){e.push(["setPath",n]),t()},setTrackPageView:t,setIdentity:function(t,n){e.push(["identify",i({email:t},n)])},setTrackEvent:function(t){var n=t.eventId,i=t.value;e.push(["trackEvent",{id:n,value:i}])}}};function r(e){let{pageName:t}=e;const{setIdentity:n,setContentType:i}=a();if("undefined"!=typeof window){const e=localStorage.getItem("user-email");e&&n(e)}i("blog-detail"===t?"blog-post":"standard-page")}},26901:function(e,t,n){"use strict";var i=n(67294),a=n(14160),r=n(38032),o=n(70917);t.Z=()=>{const e=(0,a.K2)("3745998487");return(0,o.tZ)(i.Fragment,null,(0,o.tZ)(r.G,{alt:"",image:e.aws.childImageSharp.gatsbyImageData}),(0,o.tZ)(r.G,{alt:"",image:e.azure.childImageSharp.gatsbyImageData}),(0,o.tZ)(r.G,{alt:"",image:e.gc.childImageSharp.gatsbyImageData}),(0,o.tZ)(r.G,{alt:"",image:e.alibaba.childImageSharp.gatsbyImageData})," ",(0,o.tZ)(r.G,{alt:"",image:e.okta.childImageSharp.gatsbyImageData}),(0,o.tZ)(r.G,{alt:"",image:e.googleCloud.childImageSharp.gatsbyImageData}),(0,o.tZ)(r.G,{alt:"",image:e.azureAD.childImageSharp.gatsbyImageData}))}},75845:function(e,t,n){"use strict";n.d(t,{Z:function(){return v}});var i=n(70917),a=n(67294),r=n(38032),o=n(14160),s=n(15785),c=n(74316),u=n(23279),l=n.n(u);var M=e=>{let{tooltipText:t,isVisible:n,position:a="left"}=e;return(0,i.tZ)("span",{css:(0,i.iv)("display:",n?"block":"none",";width:12.5rem;border-radius:0.375rem;padding:0.313rem;position:absolute;top:100%;","left"===a?"left: 50%;":"right: 400%;"," transform:","left"===a?"translateX(-50%)":"translateX(50%)",";opacity:",n?1:0,";transition:opacity 0.5s linear;z-index:101;",""),className:"text-sm text-white bg-black font-hind"},t)};const N=(0,c.Z)("div",{target:"elig4rg0"})({name:"yuco3g",styles:"position:absolute;border-radius:9999px"});var g={name:"1svo38z",styles:"z-index:100"};const I=e=>{let{tooltipText:t,position:n,wrapperStyle:r,useDebounce:o=!1}=e;const{0:c,1:u}=(0,a.useState)(!1),I=l()(u,150),d=e=>{o?I(e):u(e)};return(0,a.useEffect)((()=>()=>{I.cancel()}),[I]),(0,i.tZ)("div",{css:r,onMouseEnter:()=>d(!0),onMouseLeave:()=>d(!1)},(0,i.tZ)("div",{className:"relative flex items-center justify-center w-6 h-6"},(0,i.tZ)(N,{css:["height:1.25rem;width:1.25rem;cursor:pointer;--tw-bg-opacity:1;background-color:rgb(15 38 170 / var(--tw-bg-opacity));:hover{height:1.5rem;width:1.5rem;}",g,"",""]}),(0,s.Z)(Array(3)).map(((e,t)=>(0,i.tZ)(N,{key:t,css:["height:1.75rem;width:1.75rem;@keyframes pulse{50%{opacity:0.7;transform:scale(1.5);}0%, 100%{transform:scale(1);opacity:0.5;}}animation:pulse 2s infinite ease-in-out;--tw-ring-offset-shadow:var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);--tw-ring-shadow:var(--tw-ring-inset) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color);box-shadow:var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000);",(0,i.iv)("animation:pulse ",2*(t+1),"s infinite ease-in-out;border-color:rgba(173, 216, 230, ",.3*(3-t),");animation-delay:",.5*t,"s;","","",""),"",""]}))),(0,i.tZ)(M,{tooltipText:t,isVisible:c,position:n})))};var d=a.memo(I),j=n(13103),f=n(87912);var D={name:"efjcx7",styles:"position:absolute;top:65%;right:8%;z-index:100;padding:0.625rem"},m={name:"zevogn",styles:"position:absolute;top:65%;left:38%;z-index:100;padding:0.625rem"},y={name:"lv1003",styles:"position:absolute;top:25%;right:8%;padding:0.625rem"},p={name:"1hgh9fr",styles:"position:absolute;top:24%;right:36%;padding:0.625rem"},z={name:"1vvikrq",styles:"position:absolute;top:12%;left:30%"},b={name:"va9xmh",styles:"border:1px solid #f0f1f2"},h={name:"eizbex",styles:"perspective:1000px;-webkit-perspective:1000px;perspective-origin:center;-webkit-perspective-origin:center;position:relative"};var v=()=>{const e=(0,o.K2)("3255802792"),t=.8505,{0:n,1:s}=(0,a.useState)(t),{0:c,1:u}=(0,a.useState)(11.96),{0:l,1:M}=(0,a.useState)(!1),N=(0,a.useRef)(),g=(0,f.Z)("(max-width: 1280px)");(0,a.useEffect)((()=>{if(j.G6||g)return M(!0),s(1),void u(0);const e=()=>{if(l)return;const e=N.current.getBoundingClientRect();let n=Math.max(0,Math.min(1,(window.innerHeight-e.top)/window.innerHeight));n=Math.min(1,1.5*n);const i=Math.min(1,t+(1-t)*n),a=11.96*(1-n);s(i),u(a),1===i&&M(!0)};return e(),window.addEventListener("scroll",e),()=>window.removeEventListener("scroll",e)}),[l]);const I="scale("+n+") rotateX("+c+"deg)";return(0,i.tZ)("div",{ref:N,css:h},(0,i.tZ)("div",{css:(0,i.iv)("will-change:transform;transform:",I,";transform-style:preserve-3d;transition:transform 0.7s ease-out;position:relative;","")},(0,i.tZ)(r.G,{className:"w-full h-auto rounded-2xl shadow-2xl",image:e.heroImage.childImageSharp.gatsbyImageData,alt:"Interactive Cyscale Dashboard",css:b}),(0,i.tZ)("div",{css:z},(0,i.tZ)(d,{tooltipText:(0,i.tZ)(a.Fragment,null,(0,i.tZ)("span",{className:"text-base px-1 mb-2 inline-block"},"Security score"),(0,i.tZ)("span",{className:"px-1 inline-block"},"At-a-glance understanding of your current cloud security posture"))})),(0,i.tZ)(d,{tooltipText:(0,i.tZ)(a.Fragment,null,(0,i.tZ)("span",{className:"text-base px-1 mb-2 inline-block"},"Attack path graph"),(0,i.tZ)("span",{className:"px-1 inline-block"},"Visual representation of attack paths and vulnerable assets")),wrapperStyle:p}),(0,i.tZ)(d,{tooltipText:(0,i.tZ)(a.Fragment,null,(0,i.tZ)("span",{className:"text-base px-1 mb-2 inline-block"},"High-risk misconfigurations"),(0,i.tZ)("span",{className:"px-1 inline-block"},"Automatically fix high-risk misconfigurations affecting multiple assets. Fix these and fix 80% of your issues!")),position:"right",wrapperStyle:y}),(0,i.tZ)(d,{tooltipText:(0,i.tZ)(a.Fragment,null,(0,i.tZ)("span",{className:"text-base px-1 mb-2 inline-block"},"Compliance"),(0,i.tZ)("span",{className:"px-1 inline-block"},"Out of the box support for a wide range of compliance frameworks and customizable policies")),wrapperStyle:m,useDebounce:!0}),(0,i.tZ)(d,{tooltipText:(0,i.tZ)(a.Fragment,null,(0,i.tZ)("span",{className:"text-base px-1 mb-2 inline-block"},"Public resources"),(0,i.tZ)("span",{className:"px-1 inline-block"},"Keep track of publicly accessible resources. Some are supposed to be public. Some aren’t!")),position:"right",wrapperStyle:D,useDebounce:!0})))}},16966:function(e,t,n){"use strict";n(67294);var i=n(70917);var a={name:"fvvrqm",styles:"padding:0.625rem 2.5rem"};t.Z=e=>{let{text:t,alignLeft:n}=e;return(0,i.tZ)("button",{css:[!n&&{marginLeft:"auto",marginRight:"auto"},a,"",""],className:"bg-gradient-to-r from-[#0F26AA] to-[#FF4A56] hover:from-[#FF4A56] hover:to-[#0F26AA] block font-medium rounded text-white uppercase text-center no-underline hover:no-underline max-w-sm lg:inline-block font-hind"},t)}},66303:function(e,t,n){"use strict";n.d(t,{Z:function(){return j}});var i=n(67294),a=n(56788),r=n(8133),o=n(61583);var s=(e,t,n)=>{const a=(0,i.useCallback)((i=>{let{key:a}=i;"Escape"===a&&a===e&&(t.current.pause(),n(!1))}),[e,t,n]);(0,i.useEffect)((()=>(window.addEventListener("keydown",a),()=>{window.removeEventListener("keydown",a)})),[a])},c=n(2816),u=n(13103);var l=()=>{const{0:e,1:t}=(0,i.useState)(u.G6||(0,u.IN)()?(0,u.T8)():"undefined"!=typeof window&&window.screen.orientation.type||null);return(0,i.useEffect)((()=>{const e=()=>t(u.G6||(0,u.IN)()?(0,u.T8)():window.screen.orientation.type);return window.addEventListener("orientationchange",e),()=>window.removeEventListener("orientationchange",e)}),[]),e},M=n(94184),N=n.n(M),g=n(87912),I=n(37452),d=n(70917);var j=e=>{let{setModal:t,videoUrl:n,greyCloseButton:u}=e;const M=i.useRef(null),j=(0,i.useRef)(null),f=l(),D=(0,g.Z)("(max-height: 420px)");(0,I.Z)(M,(()=>{null!==M&&M.current.pause(),t(!1)})),(0,a.Z)(),s("Escape",M,t);return(0,d.tZ)("div",{className:"w-screen h-screen fixed top-0 left-0 right-0 bottom-0 cursor-default object-contain",style:{zIndex:102}},(0,d.tZ)(c.ZP,null,(0,d.tZ)("div",{className:"flex justify-center items-center",style:{height:"100vh"}},(0,d.tZ)("div",{ref:j,className:N()("relative",{"max-w-6xl":!("landscape-primary"===f&&D),"max-w-2xl":"landscape-primary"===f&&D})},(0,d.tZ)("button",{type:"button",className:"top-6 right-6 inline-block absolute cursor-pointer z-40",onClick:()=>{M.current.pause(),t(!1)},tabIndex:"0"},(0,d.tZ)("img",{src:u?o.Z:r.Z,alt:"toggle menu",width:15,height:15})),(0,d.tZ)("video",{width:"auto",height:"auto",autoPlay:!0,controls:!0,tabIndex:"2",ref:M},(0,d.tZ)("source",{src:n,type:"video/mp4"}),"Your browser does not support the video tag.")))))}},33926:function(e,t,n){"use strict";var i=n(70917),a=n(67294),r=n(11196),o=n(43081),s=n(80414),c=n(26040),u=n(86301),l=n(98432),M=n(44410),N=n(52468),g=n(35533),I=n(95030),d=n(52356),j=n(64593),f=n(14160);t.Z=e=>{let{children:t,title:n,description:D,pageName:m,location:y,banner:p,noIndex:z,blogDetails:b}=e;(0,u.Z)({pageName:m});const{0:h,1:v}=(0,a.useState)(!1),{cookies:w,cookiesBanner:T,setCookiesBanner:x}=(0,g.Z)(),Z=(0,f.K2)("1117504136");return(0,i.tZ)(M.Z,null,(0,i.tZ)(c.Z.Provider,{value:{location:y}},(0,i.tZ)(r.Z,{title:n,description:D,pageName:m,location:y,banner:p,blogDetails:b}),(0,i.tZ)(j.q,null,z&&(0,i.tZ)("meta",{name:"robots",content:"noindex"}),z&&(0,i.tZ)("meta",{name:"robots",content:"nofollow"})),(0,i.tZ)(s.Z.Provider,{value:{sticker:h,setSticker:v}},(0,i.tZ)(d.Z,{pageName:m,location:y})),(0,i.tZ)("main",{css:(0,i.iv)("@media (min-width: 1024px){padding-top:",Z.markdownRemark.frontmatter.enabled?"2rem":"0rem",";}","")},t),(0,i.tZ)(o.default,{pageUri:null==y?void 0:y.pathname,pageName:m}),!0!==Boolean(w[I.VB])&&(0,i.tZ)(l.Z,{cookiesBanner:T,setCookiesBanner:x,pageName:m}),(0,i.tZ)(N.Z,null)))}},80414:function(e,t,n){"use strict";const i=n(67294).createContext({sticker:!1,setSticker:()=>{}});t.Z=i},62705:function(e,t,n){var i=n(55639).Symbol;e.exports=i},44239:function(e,t,n){var i=n(62705),a=n(89607),r=n(2333),o=i?i.toStringTag:void 0;e.exports=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":o&&o in Object(e)?a(e):r(e)}},27561:function(e,t,n){var i=n(67990),a=/^\s+/;e.exports=function(e){return e?e.slice(0,i(e)+1).replace(a,""):e}},31957:function(e,t,n){var i="object"==typeof n.g&&n.g&&n.g.Object===Object&&n.g;e.exports=i},89607:function(e,t,n){var i=n(62705),a=Object.prototype,r=a.hasOwnProperty,o=a.toString,s=i?i.toStringTag:void 0;e.exports=function(e){var t=r.call(e,s),n=e[s];try{e[s]=void 0;var i=!0}catch(c){}var a=o.call(e);return i&&(t?e[s]=n:delete e[s]),a}},2333:function(e){var t=Object.prototype.toString;e.exports=function(e){return t.call(e)}},55639:function(e,t,n){var i=n(31957),a="object"==typeof self&&self&&self.Object===Object&&self,r=i||a||Function("return this")();e.exports=r},67990:function(e){var t=/\s/;e.exports=function(e){for(var n=e.length;n--&&t.test(e.charAt(n)););return n}},23279:function(e,t,n){var i=n(13218),a=n(7771),r=n(14841),o=Math.max,s=Math.min;e.exports=function(e,t,n){var c,u,l,M,N,g,I=0,d=!1,j=!1,f=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function D(t){var n=c,i=u;return c=u=void 0,I=t,M=e.apply(i,n)}function m(e){var n=e-g;return void 0===g||n>=t||n<0||j&&e-I>=l}function y(){var e=a();if(m(e))return p(e);N=setTimeout(y,function(e){var n=t-(e-g);return j?s(n,l-(e-I)):n}(e))}function p(e){return N=void 0,f&&c?D(e):(c=u=void 0,M)}function z(){var e=a(),n=m(e);if(c=arguments,u=this,g=e,n){if(void 0===N)return function(e){return I=e,N=setTimeout(y,t),d?D(e):M}(g);if(j)return clearTimeout(N),N=setTimeout(y,t),D(g)}return void 0===N&&(N=setTimeout(y,t)),M}return t=r(t)||0,i(n)&&(d=!!n.leading,l=(j="maxWait"in n)?o(r(n.maxWait)||0,t):l,f="trailing"in n?!!n.trailing:f),z.cancel=function(){void 0!==N&&clearTimeout(N),I=0,c=g=u=N=void 0},z.flush=function(){return void 0===N?M:p(a())},z}},13218:function(e){e.exports=function(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)}},37005:function(e){e.exports=function(e){return null!=e&&"object"==typeof e}},33448:function(e,t,n){var i=n(44239),a=n(37005);e.exports=function(e){return"symbol"==typeof e||a(e)&&"[object Symbol]"==i(e)}},7771:function(e,t,n){var i=n(55639);e.exports=function(){return i.Date.now()}},14841:function(e,t,n){var i=n(27561),a=n(13218),r=n(33448),o=/^[-+]0x[0-9a-f]+$/i,s=/^0b[01]+$/i,c=/^0o[0-7]+$/i,u=parseInt;e.exports=function(e){if("number"==typeof e)return e;if(r(e))return NaN;if(a(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=a(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=i(e);var n=s.test(e);return n||c.test(e)?u(e.slice(2),n?2:8):o.test(e)?NaN:+e}},83153:function(e){e.exports=(()=>{"use strict";var e={d:(t,n)=>{for(var i in n)e.o(n,i)&&!e.o(t,i)&&Object.defineProperty(t,i,{enumerable:!0,get:n[i]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t)},t={};function n(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function i(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?n(Object(i),!0).forEach((function(t){a(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):n(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}e.d(t,{default:()=>z});var r="Sal was not initialised! Probably it is used in SSR.",o="Your browser does not support IntersectionObserver!\nGet a polyfill from here:\nhttps://github.com/w3c/IntersectionObserver/tree/master/polyfill",s={root:null,rootMargin:"0% 50%",threshold:.5,animateClassName:"sal-animate",disabledClassName:"sal-disabled",enterEventName:"sal:in",exitEventName:"sal:out",selector:"[data-sal]",once:!0,disabled:!1},c=[],u=null,l=function(e){e&&e!==s&&(s=i(i({},s),e))},M=function(e){e.classList.remove(s.animateClassName)},N=function(e,t){var n=new CustomEvent(e,{bubbles:!0,detail:t});t.target.dispatchEvent(n)},g=function(){document.body.classList.add(s.disabledClassName)},I=function(){u.disconnect(),u=null},d=function(){return s.disabled||"function"==typeof s.disabled&&s.disabled()},j=function(e,t){e.forEach((function(e){var n=e.target,i=void 0!==n.dataset.salRepeat,a=void 0!==n.dataset.salOnce,r=i||!(a||s.once);e.intersectionRatio>=s.threshold?(function(e){e.target.classList.add(s.animateClassName),N(s.enterEventName,e)}(e),r||t.unobserve(n)):r&&function(e){M(e.target),N(s.exitEventName,e)}(e)}))},f=function(){var e=[].filter.call(document.querySelectorAll(s.selector),(function(e){return!function(e){return e.classList.contains(s.animateClassName)}(e,s.animateClassName)}));return e.forEach((function(e){return u.observe(e)})),e},D=function(){g(),I()},m=function(){document.body.classList.remove(s.disabledClassName),u=new IntersectionObserver(j,{root:s.root,rootMargin:s.rootMargin,threshold:s.threshold}),c=f()},y=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};I(),Array.from(document.querySelectorAll(s.selector)).forEach(M),l(e),m()},p=function(){var e=f();c.push(e)};const z=function(){if(l(arguments.length>0&&void 0!==arguments[0]?arguments[0]:s),"undefined"==typeof window)return console.warn(r),{elements:c,disable:D,enable:m,reset:y,update:p};if(!window.IntersectionObserver)throw g(),Error(o);return d()?g():m(),{elements:c,disable:D,enable:m,reset:y,update:p}};return t.default})()},28206:function(e,t){"use strict";t.Z="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTYiIGhlaWdodD0iNTIiIHZpZXdCb3g9IjAgMCA1NiA0OCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTU2IDQuMzM2NjZWMEM0OS4xMjI2IDAgNDMuNTE1NiA1LjYwNyA0My41MTU2IDEyLjQ4NDNINDcuODUyM0M0Ny44NTIzIDcuOTcyNDUgNTEuNTMxOSA0LjMzNjY2IDU2IDQuMzM2NjZaIiBmaWxsPSJ1cmwoI3BhaW50MF9saW5lYXJfNTU0OF8yOTgxNSkiLz4KPHBhdGggZD0iTTMxLjAzNTIgMFY0LjMzNjY2QzM1LjU0NyA0LjMzNjY2IDM5LjE4MjggOC4wMTYyNSAzOS4xODI4IDEyLjQ4NDNINDMuNTE5NUM0My41MTk1IDUuNjA3IDM3LjkxMjUgMCAzMS4wMzUyIDBaIiBmaWxsPSJ1cmwoI3BhaW50MV9saW5lYXJfNTU0OF8yOTgxNSkiLz4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik01LjE0Nzc2IDQuNzM3OThMMjcuNTY2NyA0LjM3NzY3TDI3LjQ5NzcgMC4wODU5Mzc1TDAuODU1NDY5IDAuNTE0MTE4VjIzLjY1MjNDMC44NTU0NjkgMjkuMTkzNyAzLjQ3NCAzNS4xOTkzIDguMDAzNzEgMzguNjcyMUw4LjA3MTE5IDM4LjcyMzhMMjEuNzU0MyA0Ny41ODg5TDM1LjQ2MiAzOC42NDI4TDM1LjUxNDQgMzguNjAzOUM0MC43NDI3IDM0LjcxODYgNDMuNjUyMSAyOS42NTAxIDQzLjY1MjEgMjMuNDc3MVYxNi4wMzAzSDM5LjM1OThWMjMuNDc3MUMzOS4zNTk4IDI4LjA2MTcgMzcuMjkxOSAzMS45MTY5IDMzLjAwNTUgMzUuMTIwNUwyMS43NDU3IDQyLjQ2OUwxMC41NTEgMzUuMjE2QzcuMjMzMTcgMzIuNjMzNSA1LjE0Nzc2IDI3Ljk4MjggNS4xNDc3NiAyMy42NTIzVjQuNzM3OThaIiBmaWxsPSJibGFjayIvPgo8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTMyLjkxNTEgMTYuNjU1OEwxOS4wMzE1IDMwLjk0OThMMTEuMzE1NSAyMi42NDM4TDE0LjAyODcgMjAuMTIzM0wxOS4wOTEzIDI1LjU3MzFMMzAuMjU4NyAxNC4wNzU3TDMyLjkxNTEgMTYuNjU1OFoiIGZpbGw9ImJsYWNrIi8+CjxkZWZzPgo8bGluZWFyR3JhZGllbnQgaWQ9InBhaW50MF9saW5lYXJfNTU0OF8yOTgxNSIgeDE9IjI3LjkyMzMiIHkxPSI2LjIzNzI2IiB4Mj0iNTQuOTQ1NiIgeTI9IjYuMjM3MjYiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIj4KPHN0b3Agb2Zmc2V0PSIwLjEwNjkiIHN0b3AtY29sb3I9IiMwRjI2QUEiLz4KPHN0b3Agb2Zmc2V0PSIwLjg4MDMiIHN0b3AtY29sb3I9IiNGRjRBNTYiLz4KPC9saW5lYXJHcmFkaWVudD4KPGxpbmVhckdyYWRpZW50IGlkPSJwYWludDFfbGluZWFyXzU1NDhfMjk4MTUiIHgxPSIyNy45MjcxIiB5MT0iNi4yMzcyNiIgeDI9IjU0Ljk0OTQiIHkyPSI2LjIzNzI2IiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+CjxzdG9wIG9mZnNldD0iMC4xMDY5IiBzdG9wLWNvbG9yPSIjMEYyNkFBIi8+CjxzdG9wIG9mZnNldD0iMC44ODAzIiBzdG9wLWNvbG9yPSIjRkY0QTU2Ii8+CjwvbGluZWFyR3JhZGllbnQ+CjwvZGVmcz4KPC9zdmc+Cg=="},95385:function(e,t){"use strict";t.Z="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTkiIGhlaWdodD0iNTIiIHZpZXdCb3g9IjAgMCA1OSA1MiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTU4LjU4MDYgNC4xNDU0OVYwQzUxLjk4MTYgMCA0Ni42MDk0IDUuMzcyMjIgNDYuNjA5NCAxMS45NzEySDUwLjc1NDlDNTAuNzU0OSA3LjY1NjQ3IDU0LjI2NTkgNC4xNDU0OSA1OC41ODA2IDQuMTQ1NDlaIiBmaWxsPSJ1cmwoI3BhaW50MF9saW5lYXJfNTU0OF8yOTc4OCkiLz4KPHBhdGggZD0iTTM0LjU5NzcgMFY0LjE0NTQ5QzM4LjkxMjQgNC4xNDU0OSA0Mi40MjMzIDcuNjU2NDcgNDIuNDIzMyAxMS45NzEySDQ2LjU2ODhDNDYuNjExMSA1LjM3MjIyIDQxLjE5NjYgMCAzNC41OTc3IDBaIiBmaWxsPSJ1cmwoI3BhaW50MV9saW5lYXJfNTU0OF8yOTc4OCkiLz4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0yOS4wOTcyIDAuNDM1OTg2QzI4LjczNiAwLjQxNjI0OCAyOC4zNzIxIDAuNDA2MjUgMjguMDA2IDAuNDA2MjVDMTcuMTMzOSAwLjQwNjI1IDguMzIwMzEgOS4yMTk4MSA4LjMyMDMxIDIwLjA5MTlDOC4zMjAzMSAzMC45NjQgMTcuMTMzOSAzOS43Nzc1IDI4LjAwNiAzOS43Nzc1QzM4Ljg3OCAzOS43Nzc1IDQ3LjY5MTYgMzAuOTY0IDQ3LjY5MTYgMjAuMDkxOUM0Ny42OTE2IDE4LjcxNDkgNDcuNTUwMiAxNy4zNzA5IDQ3LjI4MTIgMTYuMDczN0g0Mi45MzRDNDMuMjc4IDE3LjM1NSA0My40NjE1IDE4LjcwMiA0My40NjE1IDIwLjA5MTlDNDMuNDYxNSAyOC42Mjc4IDM2LjU0MTggMzUuNTQ3NCAyOC4wMDYgMzUuNTQ3NEMxOS40NzAxIDM1LjU0NzQgMTIuNTUwNCAyOC42Mjc4IDEyLjU1MDQgMjAuMDkxOUMxMi41NTA0IDExLjU1NiAxOS40NzAxIDQuNjM2MzQgMjguMDA2IDQuNjM2MzRDMjguMzcyOCA0LjYzNjM0IDI4LjczNjcgNC42NDkxMyAyOS4wOTcyIDQuNjc0MjdWMC40MzU5ODZaIiBmaWxsPSJibGFjayIvPgo8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTE0LjE4MzEgMzguMTAwNEwzLjI5MzE2IDUxLjYwODFMMCA0OC45NTMxTDEwLjg4OTkgMzUuNDQ1NEwxNC4xODMxIDM4LjEwMDRaIiBmaWxsPSJibGFjayIvPgo8ZGVmcz4KPGxpbmVhckdyYWRpZW50IGlkPSJwYWludDBfbGluZWFyXzU1NDhfMjk3ODgiIHgxPSIzMS42MTE1IiB5MT0iNS45NzgxNCIgeDI9IjU3LjU1ODIiIHkyPSI1Ljk3ODE0IiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+CjxzdG9wIG9mZnNldD0iMC4xMDY5IiBzdG9wLWNvbG9yPSIjMEYyNkFBIi8+CjxzdG9wIG9mZnNldD0iMC44ODAzIiBzdG9wLWNvbG9yPSIjRkY0QTU2Ii8+CjwvbGluZWFyR3JhZGllbnQ+CjxsaW5lYXJHcmFkaWVudCBpZD0icGFpbnQxX2xpbmVhcl81NTQ4XzI5Nzg4IiB4MT0iMzEuNjEzNCIgeTE9IjUuOTc4MTQiIHgyPSI1Ny41NiIgeTI9IjUuOTc4MTQiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIj4KPHN0b3Agb2Zmc2V0PSIwLjEwNjkiIHN0b3AtY29sb3I9IiMwRjI2QUEiLz4KPHN0b3Agb2Zmc2V0PSIwLjg4MDMiIHN0b3AtY29sb3I9IiNGRjRBNTYiLz4KPC9saW5lYXJHcmFkaWVudD4KPC9kZWZzPgo8L3N2Zz4K"},57397:function(e,t){"use strict";t.Z="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNzIiIGhlaWdodD0iNTIiIHZpZXdCb3g9IjAgMCA3MiA1MSIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGcgY2xpcC1wYXRoPSJ1cmwoI2NsaXAwXzU1NzJfMzQwMzIpIj4KPHBhdGggZD0iTTcyLjQ1NiA0Ljk5ODE5VjFDNjYuMDkxNSAxIDYwLjkxMDIgNi4xODEzMyA2MC45MTAyIDEyLjU0NThINjQuOTA4NEM2NC45MDg0IDguMzg0NDIgNjguMjk0NiA0Ljk5ODE5IDcyLjQ1NiA0Ljk5ODE5WiIgZmlsbD0idXJsKCNwYWludDBfbGluZWFyXzU1NzJfMzQwMzIpIi8+CjxwYXRoIGQ9Ik00OS4zMjQyIDFWNC45OTgxOUM1My40ODU2IDQuOTk4MTkgNTYuODcxOCA4LjM4NDQyIDU2Ljg3MTggMTIuNTQ1OEg2MC44N0M2MC45MTA4IDYuMTgxMzMgNTUuNjg4NyAxIDQ5LjMyNDIgMVoiIGZpbGw9InVybCgjcGFpbnQxX2xpbmVhcl81NTcyXzM0MDMyKSIvPgo8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTI3LjA3MTggMTEuNjc5N0MzMS40NTkgMTEuNjc5NyAzNS4wMTU2IDE1LjIzNjMgMzUuMDE1NiAxOS42MjM2TDM1LjAxNTYgNDAuNzg5NkMzNS4wMTU2IDQ1LjE3NjkgMzEuNDU5IDQ4LjczMzUgMjcuMDcxOCA0OC43MzM1QzIyLjY4NDUgNDguNzMzNSAxOS4xMjc5IDQ1LjE3NjkgMTkuMTI3OSA0MC43ODk2TDE5LjEyNzkgMTkuNjIzNkMxOS4xMjc5IDE1LjIzNjMgMjIuNjg0NSAxMS42Nzk3IDI3LjA3MTggMTEuNjc5N1pNMzAuOTM1OCAxOS42MjM2QzMwLjkzNTggMTcuNDg5NSAyOS4yMDU4IDE1Ljc1OTUgMjcuMDcxOCAxNS43NTk1QzI0LjkzNzcgMTUuNzU5NSAyMy4yMDc3IDE3LjQ4OTUgMjMuMjA3NyAxOS42MjM2TDIzLjIwNzcgNDAuNzg5NkMyMy4yMDc3IDQyLjkyMzcgMjQuOTM3NyA0NC42NTM3IDI3LjA3MTggNDQuNjUzN0MyOS4yMDU4IDQ0LjY1MzcgMzAuOTM1OCA0Mi45MjM3IDMwLjkzNTggNDAuNzg5NkwzMC45MzU4IDE5LjYyMzZaIiBmaWxsPSJibGFjayIvPgo8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTcuOTk2NSAyMS42NjQxQzQuMTEwODcgMjEuNjY0MSAwLjk2MDkzOCAyNC44MTQgMC45NjA5MzggMjguNjk5NkwwLjk2MDkzOCA0MS42OTFDMC45NjA5MzggNDUuNTc2NiA0LjExMDg3IDQ4LjcyNjUgNy45OTY1IDQ4LjcyNjVDMTEuODgyMSA0OC43MjY1IDE1LjAzMjEgNDUuNTc2NiAxNS4wMzIxIDQxLjY5MUwxNS4wMzIxIDI4LjY5OTZDMTUuMDMyMSAyNC44MTQgMTEuODgyMSAyMS42NjQxIDcuOTk2NSAyMS42NjQxWk01LjA0MDczIDI4LjY5OTZDNS4wNDA3MyAyNy4wNjcyIDYuMzY0MDcgMjUuNzQzOSA3Ljk5NjUgMjUuNzQzOUM5LjYyODkzIDI1Ljc0MzkgMTAuOTUyMyAyNy4wNjcyIDEwLjk1MjMgMjguNjk5NkwxMC45NTIzIDQxLjY5MUMxMC45NTIzIDQzLjMyMzQgOS42Mjg5MyA0NC42NDY3IDcuOTk2NSA0NC42NDY3QzYuMzY0MDcgNDQuNjQ2NyA1LjA0MDczIDQzLjMyMzQgNS4wNDA3MyA0MS42OTFMNS4wNDA3MyAyOC42OTk2WiIgZmlsbD0iYmxhY2siLz4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik00Ni41OTkxIDEuMzgyODFDNDIuMjQwMSAyLjg4ODU1IDM5LjEwOTQgNy4wMjgwOSAzOS4xMDk0IDExLjg5ODlWMzcuNjA2NUMzOS4xMDk0IDQzLjc0OTUgNDQuMDg5MyA0OC43Mjk1IDUwLjIzMjMgNDguNzI5NUM1Ni4zNzUzIDQ4LjcyOTUgNjEuMzU1MiA0My43NDk1IDYxLjM1NTIgMzcuNjA2NVYxNi40NDA0SDU3LjI3NTVWMzcuNjA2NUM1Ny4yNzU1IDQxLjQ5NjMgNTQuMTIyMSA0NC42NDk3IDUwLjIzMjMgNDQuNjQ5N0M0Ni4zNDI1IDQ0LjY0OTcgNDMuMTg5MiA0MS40OTYzIDQzLjE4OTIgMzcuNjA2NUw0My4xODkyIDExLjg5ODlDNDMuMTg5MiA5LjMzODI1IDQ0LjU1NTYgNy4wOTY4IDQ2LjU5OTEgNS44NjM5MVYxLjM4MjgxWiIgZmlsbD0iYmxhY2siLz4KPC9nPgo8ZGVmcz4KPGxpbmVhckdyYWRpZW50IGlkPSJwYWludDBfbGluZWFyXzU1NzJfMzQwMzIiIHgxPSI0Ni40NDUyIiB5MT0iNi43NjU3MiIgeDI9IjcxLjQ3IiB5Mj0iNi43NjU3MiIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiPgo8c3RvcCBvZmZzZXQ9IjAuMTA2OSIgc3RvcC1jb2xvcj0iIzBGMjZBQSIvPgo8c3RvcCBvZmZzZXQ9IjAuODgwMyIgc3RvcC1jb2xvcj0iI0ZGNEE1NiIvPgo8L2xpbmVhckdyYWRpZW50Pgo8bGluZWFyR3JhZGllbnQgaWQ9InBhaW50MV9saW5lYXJfNTU3Ml8zNDAzMiIgeDE9IjQ2LjQ0NiIgeTE9IjYuNzY1NzIiIHgyPSI3MS40NzA2IiB5Mj0iNi43NjU3MiIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiPgo8c3RvcCBvZmZzZXQ9IjAuMTA2OSIgc3RvcC1jb2xvcj0iIzBGMjZBQSIvPgo8c3RvcCBvZmZzZXQ9IjAuODgwMyIgc3RvcC1jb2xvcj0iI0ZGNEE1NiIvPgo8L2xpbmVhckdyYWRpZW50Pgo8Y2xpcFBhdGggaWQ9ImNsaXAwXzU1NzJfMzQwMzIiPgo8cmVjdCB3aWR0aD0iNzIiIGhlaWdodD0iNTEiIGZpbGw9IndoaXRlIi8+CjwvY2xpcFBhdGg+CjwvZGVmcz4KPC9zdmc+Cg=="}}]);
//# sourceMappingURL=component---src-pages-index-js-f67241c4acc1575e6866.js.map