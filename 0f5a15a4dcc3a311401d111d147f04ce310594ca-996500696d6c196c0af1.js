"use strict";(self.webpackChunkcyscale_gatsby=self.webpackChunkcyscale_gatsby||[]).push([[8314],{23810:function(a,e,t){t.d(e,{ZP:function(){return C}});var n=t(67294),r=t(63366),i=t(87462);function l(a){if(void 0===a)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return a}var o=t(51721),s=t(59864),c=t(8679),m=t.n(c);function u(a,e){if(!a){var t=new Error("loadable: "+e);throw t.framesToPop=1,t.name="Invariant Violation",t}}var d=n.createContext();var g={initialChunks:{}},p="PENDING",h="REJECTED";var f=function(a){return a};function b(a){var e=a.defaultResolveComponent,t=void 0===e?f:e,c=a.render,b=a.onLoad;function y(a,e){void 0===e&&(e={});var f=function(a){return"function"==typeof a?{requireAsync:a,resolve:function(){},chunkName:function(){}}:a}(a),y={};function Z(a){return e.cacheKey?e.cacheKey(a):f.resolve?f.resolve(a):"static"}function I(a,n,r){var i=e.resolveComponent?e.resolveComponent(a,n):t(a);if(e.resolveComponent&&!(0,s.isValidElementType)(i))throw new Error("resolveComponent returned something that is not a React component!");return m()(r,i,{preload:!0}),i}var v,x,S=function(a){var e=Z(a),t=y[e];return t&&t.status!==h||((t=f.requireAsync(a)).status=p,y[e]=t,t.then((function(){t.status="RESOLVED"}),(function(e){console.error("loadable-components: failed to asynchronously load component",{fileName:f.resolve(a),chunkName:f.chunkName(a),error:e?e.message:e}),t.status=h}))),t},D=function(a){function t(t){var n;return(n=a.call(this,t)||this).state={result:null,error:null,loading:!0,cacheKey:Z(t)},u(!t.__chunkExtractor||f.requireSync,"SSR requires `@loadable/babel-plugin`, please install it"),t.__chunkExtractor?(!1===e.ssr||(f.requireAsync(t).catch((function(){return null})),n.loadSync(),t.__chunkExtractor.addChunk(f.chunkName(t))),l(n)):(!1!==e.ssr&&(f.isReady&&f.isReady(t)||f.chunkName&&g.initialChunks[f.chunkName(t)])&&n.loadSync(),n)}(0,o.Z)(t,a),t.getDerivedStateFromProps=function(a,e){var t=Z(a);return(0,i.Z)({},e,{cacheKey:t,loading:e.loading||e.cacheKey!==t})};var n=t.prototype;return n.componentDidMount=function(){this.mounted=!0;var a=this.getCache();a&&a.status===h&&this.setCache(),this.state.loading&&this.loadAsync()},n.componentDidUpdate=function(a,e){e.cacheKey!==this.state.cacheKey&&this.loadAsync()},n.componentWillUnmount=function(){this.mounted=!1},n.safeSetState=function(a,e){this.mounted&&this.setState(a,e)},n.getCacheKey=function(){return Z(this.props)},n.getCache=function(){return y[this.getCacheKey()]},n.setCache=function(a){void 0===a&&(a=void 0),y[this.getCacheKey()]=a},n.triggerOnLoad=function(){var a=this;b&&setTimeout((function(){b(a.state.result,a.props)}))},n.loadSync=function(){if(this.state.loading)try{var a=I(f.requireSync(this.props),this.props,A);this.state.result=a,this.state.loading=!1}catch(e){console.error("loadable-components: failed to synchronously load component, which expected to be available",{fileName:f.resolve(this.props),chunkName:f.chunkName(this.props),error:e?e.message:e}),this.state.error=e}},n.loadAsync=function(){var a=this,e=this.resolveAsync();return e.then((function(e){var t=I(e,a.props,A);a.safeSetState({result:t,loading:!1},(function(){return a.triggerOnLoad()}))})).catch((function(e){return a.safeSetState({error:e,loading:!1})})),e},n.resolveAsync=function(){var a=this.props,e=(a.__chunkExtractor,a.forwardedRef,(0,r.Z)(a,["__chunkExtractor","forwardedRef"]));return S(e)},n.render=function(){var a=this.props,t=a.forwardedRef,n=a.fallback,l=(a.__chunkExtractor,(0,r.Z)(a,["forwardedRef","fallback","__chunkExtractor"])),o=this.state,s=o.error,m=o.loading,u=o.result;if(e.suspense&&(this.getCache()||this.loadAsync()).status===p)throw this.loadAsync();if(s)throw s;var d=n||e.fallback||null;return m?d:c({fallback:d,result:u,options:e,props:(0,i.Z)({},l,{ref:t})})},t}(n.Component),C=(x=function(a){return n.createElement(d.Consumer,null,(function(e){return n.createElement(v,Object.assign({__chunkExtractor:e},a))}))},(v=D).displayName&&(x.displayName=v.displayName+"WithChunkExtractor"),x),A=n.forwardRef((function(a,e){return n.createElement(C,Object.assign({forwardedRef:e},a))}));return A.displayName="Loadable",A.preload=function(a){A.load(a)},A.load=function(a){return S(a)},A}return{loadable:y,lazy:function(a,e){return y(a,(0,i.Z)({},e,{suspense:!0}))}}}var y=b({defaultResolveComponent:function(a){return a.__esModule?a.default:a.default||a},render:function(a){var e=a.result,t=a.props;return n.createElement(e,t)}}),Z=y.loadable,I=y.lazy,v=b({onLoad:function(a,e){a&&e.forwardedRef&&("function"==typeof e.forwardedRef?e.forwardedRef(a):e.forwardedRef.current=a)},render:function(a){var e=a.result,t=a.props;return t.children?t.children(e):null}}),x=v.loadable,S=v.lazy;var D=Z;D.lib=x,I.lib=S;var C=D},74703:function(a,e,t){t.d(e,{Gm:function(){return y},IK:function(){return u},Jr:function(){return m},MN:function(){return b},RS:function(){return d},_s:function(){return s},bV:function(){return c},dF:function(){return I},j4:function(){return g},or:function(){return Z},qp:function(){return h},rQ:function(){return v},tV:function(){return p},yd:function(){return f}});var n=t(87462),r=(t(67294),t(14160)),i=t(38032),l=t(70917);function o(a){return e=>{const t=(0,r.K2)("890789562");return(0,l.tZ)(a,(0,n.Z)({},e,{imageData:t}))}}o((a=>(0,l.tZ)(i.G,{image:a.imageData.cyscaleSecurityKnowledgeGraph.childImageSharp.gatsbyImageData,alt:"Security Knowledge Graph™"}))),o((a=>(0,l.tZ)(i.G,{image:a.imageData.cloudNativeDigitalAssetsInventory.childImageSharp.gatsbyImageData,alt:"Real-time cloud inventor"}))),o((a=>(0,l.tZ)(i.G,{image:a.imageData.remoteWorkWftCompliance.childImageSharp.gatsbyImageData,alt:"Remote work compliance"}))),o((a=>(0,l.tZ)(i.G,{image:a.imageData.automatedEvidenceCollectionDataGathering.childImageSharp.gatsbyImageData,alt:"Automated evidence collection"})));const s=o((a=>(0,l.tZ)(i.G,{image:a.imageData.iso27001ComplianceAudit.childImageSharp.gatsbyImageData,alt:"ISO 27001 Compliance Audit"}))),c=o((a=>(0,l.tZ)(i.G,{image:a.imageData.aicpaSoc2ComplianceAudit.childImageSharp.gatsbyImageData,alt:"AICPA SOC 2 Compliance Audit"}))),m=o((a=>(0,l.tZ)(i.G,{image:a.imageData.cisBenchmarksCloudCompliance.childImageSharp.gatsbyImageData,alt:"CIS Benchmarks Cloud Compliance"}))),u=o((a=>(0,l.tZ)(i.G,{image:a.imageData.euEuropeanGdprCompliance.childImageSharp.gatsbyImageData,alt:"EU European GDPR Compliance"}))),d=o((a=>(0,l.tZ)(i.G,{image:a.imageData.usHipaaHealthInsurancePortabilityAccountabilityAct.childImageSharp.gatsbyImageData,alt:"US HIPAA health Insurance Portability Accountability Act"}))),g=o((a=>(0,l.tZ)(i.G,{image:a.imageData.pciDssComplianceHome.childImageSharp.gatsbyImageData,alt:"PCI DSS Payment Card Industry Data Security Standard"}))),p=o((a=>(0,l.tZ)(i.G,{image:a.imageData.nistCompliance.childImageSharp.gatsbyImageData,alt:"NIST National Institute of Standards and Technology"}))),h=o((a=>(0,l.tZ)(i.G,{image:a.imageData.iso27001ComplianceAuditSmall.childImageSharp.gatsbyImageData,alt:"ISO 27001 Compliance Audit"}))),f=o((a=>(0,l.tZ)(i.G,{image:a.imageData.aicpaSoc2ComplianceAuditSmall.childImageSharp.gatsbyImageData,alt:"AICPA SOC 2 Compliance Audit"}))),b=o((a=>(0,l.tZ)(i.G,{image:a.imageData.cisBenchmarksCloudComplianceSmall.childImageSharp.gatsbyImageData,alt:"CIS Benchmarks Cloud Compliance"}))),y=o((a=>(0,l.tZ)(i.G,{image:a.imageData.euEuropeanGdprComplianceSmall.childImageSharp.gatsbyImageData,alt:"EU European GDPR Compliance"}))),Z=o((a=>(0,l.tZ)(i.G,{image:a.imageData.usHipaaHealthInsurancePortabilityAccountabilityActSmall.childImageSharp.gatsbyImageData,alt:"US HIPAA health Insurance Portability Accountability Act"}))),I=o((a=>(0,l.tZ)(i.G,{image:a.imageData.pciDssComplianceSmall.childImageSharp.gatsbyImageData,alt:"PCI DSS Payment Card Industry Data Security Standard"}))),v=o((a=>(0,l.tZ)(i.G,{image:a.imageData.nistComplianceSmall.childImageSharp.gatsbyImageData,alt:"NIST National Institute of Standards and Technology"})));o((a=>(0,l.tZ)(i.G,{image:a.imageData.docker.childImageSharp.gatsbyImageData,alt:"Integration Docker Container"}))),o((a=>(0,l.tZ)(i.G,{image:a.imageData.oracle.childImageSharp.gatsbyImageData,alt:"Integration Oracle Cloud Infrastructure OCI Security"}))),o((a=>(0,l.tZ)(i.G,{image:a.imageData.snyk.childImageSharp.gatsbyImageData,alt:"Integration Snyk Source Code Vulnerability Management"}))),o((a=>(0,l.tZ)(i.G,{image:a.imageData.teams.childImageSharp.gatsbyImageData,alt:"Notifications and Collaboration Microsoft Teams"}))),o((a=>(0,l.tZ)(i.G,{image:a.imageData.aws.childImageSharp.gatsbyImageData,alt:"Amazon Web Services (AWS)"}))),o((a=>(0,l.tZ)(i.G,{image:a.imageData.github.childImageSharp.gatsbyImageData,alt:"Github Source Code"}))),o((a=>(0,l.tZ)(i.G,{image:a.imageData.gitlab.childImageSharp.gatsbyImageData,alt:"Gitlab Source Code"}))),o((a=>(0,l.tZ)(i.G,{image:a.imageData.kubernetes.childImageSharp.gatsbyImageData,alt:"Kubernetes Cluster (k8s)"}))),o((a=>(0,l.tZ)(i.G,{image:a.imageData.azure.childImageSharp.gatsbyImageData,alt:"Microsoft Azure Cloud"}))),o((a=>(0,l.tZ)(i.G,{image:a.imageData.gcp.childImageSharp.gatsbyImageData,alt:"Google Cloud Platform (GCP)"}))),o((a=>(0,l.tZ)(i.G,{image:a.imageData.alibaba.childImageSharp.gatsbyImageData,alt:"Alibaba Aliyun"}))),o((a=>(0,l.tZ)(i.G,{image:a.imageData.slack.childImageSharp.gatsbyImageData,alt:"Notifications and Collaboration Slack"}))),o((a=>(0,l.tZ)(i.G,{image:a.imageData.jamf.childImageSharp.gatsbyImageData,alt:"Jamf Enterprise Endpoint Management"}))),o((a=>(0,l.tZ)(i.G,{image:a.imageData.snowflake.childImageSharp.gatsbyImageData,alt:"Snowflake Cloud Data Security"}))),o((a=>(0,l.tZ)(i.G,{image:a.imageData.veracode.childImageSharp.gatsbyImageData,alt:"Veracode Appsec Vulnerability"}))),o((a=>(0,l.tZ)(i.G,{image:a.imageData.jira.childImageSharp.gatsbyImageData,alt:"Jira Confluence Atlassian Remote Work"}))),o((a=>(0,l.tZ)(i.G,{image:a.imageData.crowdstrike.childImageSharp.gatsbyImageData,alt:"Crowdstrike Cloud Endpoint Protection"}))),o((a=>(0,l.tZ)(i.G,{image:a.imageData.jumpcloud.childImageSharp.gatsbyImageData,alt:"Jumpcloud Identity Provider"}))),o((a=>(0,l.tZ)(i.G,{image:a.imageData.tenable.childImageSharp.gatsbyImageData,alt:"Tenable Vulnerability Management"}))),o((a=>(0,l.tZ)(i.G,{image:a.imageData.okta.childImageSharp.gatsbyImageData,alt:"Okta Cloud Identity"}))),o((a=>(0,l.tZ)(i.G,{image:a.imageData.vmware.childImageSharp.gatsbyImageData,alt:"Vmware"}))),o((a=>(0,l.tZ)(i.G,{image:a.imageData.gsuite.childImageSharp.gatsbyImageData,alt:"Google Workspaces"})))},38439:function(a,e,t){t.d(e,{Z:function(){return s}});var n=t(67294),r=t(66261),i=t.p+"static/banner-arrow-down-80d2cc096848a81e3163231fa2d0f0cc.svg",l=t(70917);var o={name:"fvvrqm",styles:"padding:0.625rem 2.5rem"};function s(a){let{to:e,pageName:t,btnText:s}=a;return(0,l.tZ)(n.Fragment,null,t&&"jobDetails"===t?(0,l.tZ)(r.rU,{className:"mt-24px w-full sm:w-auto",to:e,smooth:!0,duration:500},(0,l.tZ)("button",{type:"button",css:o,className:"bg-gradient-to-r from-[#0F26AA] to-[#FF4A56] hover:from-[#FF4A56] hover:to-[#0F26AA] w-full sm:min-w-232px block text-16px font-medium rounded text-white uppercase text-center hover:no-underline no-underline"},s)):(0,l.tZ)(r.rU,{className:"scroll-button pulse cursor-pointer",to:e,smooth:!0,duration:500},(0,l.tZ)("span",null,(0,l.tZ)("img",{src:i,alt:"down arrow icon",className:"mx-auto"}))))}},42529:function(a,e,t){t(67294);var n=t(70917);const r={name:"1doqjb8",styles:"padding:0.625rem 2.5rem;display:none;border:thin solid #ffffff;&:hover{background-color:transparent;border:thin solid #0f26aa;}@media (min-width: 641px){display:inline-block;}"};e.Z=a=>{let{text:e}=a;return(0,n.tZ)("button",{className:"bg-white mx-auto md:mx-0 font-medium rounded text-blue uppercase text-center no-underline transition-all duration-100 hover:no-underline font-hind",css:r},e)}},67726:function(a,e,t){t.d(e,{Z:function(){return G}});var n=t(67294),r=t(77694),i=t(80414),l=t(38439),o=t(74703),s=t(86363),c=t(14160),m=t(94184),u=t.n(m),d=t(16966),g=t(42529),p=t(13103),h=t(38032),f=t(70917);const b={name:"s2okk4",styles:"@media (min-width: 641px) and (max-width: 1024px){display:none;}"};var y={name:"hxjttr",styles:"display:none;@media (min-width: 1302px){display:block;}"};var Z=a=>{let{heroBG:e,bannerTitle:t,bannerDescription:r,bannerBtn1Text:m,bannerBtn1Link:Z,bannerBtn1LinkInternal:I,bannerBtn2Text:v,bannerBtn2Link:x,pageName:S,blogDataTitle:D,location:C}=a;const{0:A,1:k}=(0,n.useState)(!1),w="\n    heroBg\n    top-0\n    w-full\n    bg-no-repeat\n    relative\n    pt-28\n    "+S+"\n    "+(A?"pt-105px":"")+"\n    "+("CSPMPage"===S?"pb-64px":"pb-20px")+"\n    "+("SKGPage"===S||"jobDetails"===S||"RemoteWork"===S||"ComplianceAuditing"===S?"bg-lightGreyEEE":"bg-cover")+"\n    "+("HomePage"===S?"heroBgHome":""),G=e?{backgroundImage:"url("+e+")"}:null,N=(0,c.K2)("3787895154");return(0,f.tZ)(i.Z.Provider,{value:{sticker:A,setSticker:k}},(0,f.tZ)("div",{className:w,style:G},(0,f.tZ)(s.Z,{pageName:S,location:C}),(0,f.tZ)("div",{className:"max-w-1366px mx-auto pl-20px pr-20px md:pl-40px md:pr-40px lg:pl-60px lg:pr-60px xl:pl-80px xl:pr-80px 2xl:pl-80px 2xl:pr-80px "},"blog-detail"===S||"blogs"===S?(0,f.tZ)("div",{className:"flex mt-44"},(0,f.tZ)("div",{className:"mx-auto w-full xl:w-2/4"},(0,f.tZ)("h1",{className:"font-semibold text-34px text-blue leading-normal otherPages sectionTitle"},D||"Cyscale Blog"))):(0,f.tZ)(n.Fragment,null,(0,f.tZ)("div",{className:"flex flex-col lg:flex-row lg:items-center space-y-6 lg:space-y-0 lg:space-x-6"},(0,f.tZ)("div",{className:"w-full lg:w-3/5 "+("RemoteWork"===S?"order-2 lg:order-1":"ComplianceAuditing"===S||"HomePage"===S?null:"header-padding")},(0,f.tZ)("h1",{className:u()({"font-semibold text-blue text-38px sm:text-30px md:text-60px leading-normal sm:leading-normal sm:mt-20 new-line":!0,"font-montserrat":"HomePage"!==S})},"SKGPage"===S?(0,f.tZ)("span",null,"Security ",(0,f.tZ)("br",null),"Knowledge Graph™"):t),(0,f.tZ)("div",{className:"mt-24px sm:mt-64px"},(0,f.tZ)("p",{className:"text-black text-16px new-line "+("RemoteWork"===S||"ComplianceAuditing"===S?null:"HomePage"===S?"block":"hidden sm:block")},"SKGPage"===S?(0,f.tZ)("span",null,"Many tools promise less data to deal with and stronger aggregation. But even when they deliver, it's not enough to make your job easier.",(0,f.tZ)("br",null),(0,f.tZ)("br",null),"That's why we built the Security Knowledge Graph™. Because you deserve a cloud security platform that surfaces crucial issues based on deep understanding of all your interlinked assets.",(0,f.tZ)("br",null),(0,f.tZ)("br",null),"Go far beyond the limits of list-based inventories."):"HomePage"===S?(0,f.tZ)("span",null,"Map, secure, and monitor your cloud assets across platforms in under 5 minutes. ",(0,f.tZ)("br",null)," ",(0,f.tZ)("br",null)," Optimize operations and costs with an agentless CSPM solution that uses our Security Knowledge Graph™ to ensure scalable, consistent protection and governance."):"ComplianceAuditing"===S?(0,f.tZ)("span",null,"Compliance toolbox for cloud-native and cloud-first organizations.",(0,f.tZ)("br",null),(0,f.tZ)("br",null),"The Cyscale Cloud Platform gives you full visibility across cloud and data repos,"," ",(0,f.tZ)("br",{css:y}),"from app-level to your overall compliance posture."," "):r)),(0,f.tZ)("div",{className:"flex flex-wrap flex-row justify-start space-x-0 md:space-x-4 "+("ComplianceAuditing"===S?"sm:mt-40px":"mt-40px")},m&&Z&&("jobDetails"===S?(0,f.tZ)(l.Z,{pageName:"jobDetails",btnText:m,to:"applyForm"}):(0,f.tZ)("div",{className:"mt-24px w-full sm:w-auto"},"ComplianceAuditing"===S&&(0,f.tZ)("div",{className:"flex flex-row mb-4 items-center justify-between lg:hidden flex-wrap lg:space-x-2 mb-8 lg:mb-0"},(0,f.tZ)(o.qp,null),(0,f.tZ)(o.yd,null),(0,f.tZ)(o.MN,null),(0,f.tZ)(o.Gm,null),(0,f.tZ)(o.or,null),(0,f.tZ)(o.dF,null),(0,f.tZ)(o.rQ,null)),I?(0,f.tZ)(c.rU,{to:Z},(0,f.tZ)(d.Z,{text:m,alignLeft:!0})):(0,f.tZ)("a",{href:Z,target:"_blank",rel:"noopener noreferrer",className:"gradientBgBtn w-full sm:min-w-232px block text-16px font-medium rounded text-white uppercase text-center pt-21px pb-21px pl-49px pr-49px hover:no-underline no-underline"},m))),!!S&&(0,p.G2)(S)&&(0,f.tZ)("div",{className:"mt-24px mb-4  w-full sm:w-auto hidden sm:inline-block",css:["ComplianceAuditing"===S&&b,"",""]},(0,f.tZ)(c.rU,{to:x,className:"sm:ml-4 md:ml-0"},(0,f.tZ)(g.Z,{text:v}))))),"ComplianceAuditing"===S&&(0,f.tZ)("div",{className:"lg:pt-14"},(0,f.tZ)(h.G,{image:N.image.childImageSharp.gatsbyImageData,alt:"Cloud security and visibility for remote work setups",className:"lg:mx-auto max-w-md xl:max-w-2xl  h-auto hidden lg:block"})),"RemoteWork"===S&&(0,f.tZ)("div",{className:"lg:pt-14 order-1 lg:order-2"},(0,f.tZ)("img",{src:"data:image/webp;base64,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",alt:"Cloud security and visibility for remote work setups",className:"mx-auto w-40 lg:w-auto h-auto"})))),"blog-detail"===S||"jobDetails"===S||"blogs"===S||"author-page"===S?null:(0,f.tZ)("div",{className:"w-full text-center "+("HomePage"===S?"mt-10 sm:mt-0":"")+" "+("HomePage"!==S?"hidden sm:":"")+"inline-block relative py-2"},(0,f.tZ)(l.Z,{to:"start"})))))},I=t(26040),v=t(86301),x=t(17631),S=t(44410),D=t(23810),C=t(52468),A=t(35533),k=t(95030);const w=(0,D.ZP)((()=>Promise.all([t.e(5445),t.e(8532)]).then(t.bind(t,67156))));var G=a=>{let{children:e,title:t,location:i,description:l,heroBG:o,bannerTitle:s,bannerDescription:c,bannerBtn1Text:m,bannerBtn1Link:u,bannerBtn1LinkInternal:d,bannerBtn2Text:g,bannerBtn2Link:p,pageName:h,banner:b,blogDataTitle:y}=a;n.useEffect((()=>{window.dataLayer=window.dataLayer||[],window.dataLayer.push({event:"optimize.activate"})}),[]),(0,v.Z)({pageName:h});const{cookies:D,cookiesBanner:G,setCookiesBanner:N}=(0,A.Z)();return(0,f.tZ)("div",null,(0,f.tZ)(S.Z,null,(0,f.tZ)(I.Z.Provider,{value:{location:i}},(0,f.tZ)(r.Z,{title:t,description:l,pageName:h,banner:b,location:i}),h&&"ContactUs"===h||"Pricing"===h||"aboutUs"===h||"termsOfUse"===h||"privacyPolicy"===h||"SecurityPolicy"===h||"dataSecurity"===h||"blog"===h?(0,f.tZ)(n.Fragment,null):(0,f.tZ)(Z,{heroBG:o,bannerTitle:s,bannerDescription:c,bannerBtn1Text:m,bannerBtn1Link:u,bannerBtn1LinkInternal:d,bannerBtn2Text:g,bannerBtn2Link:p,pageName:h,blogDataTitle:y,location:i}),(0,f.tZ)("main",null,(0,f.tZ)("div",null,e)),(0,f.tZ)(w,{pageUri:null==i?void 0:i.pathname,pageName:h}),!0!==Boolean(D[k.VB])&&(0,f.tZ)(x.Z,{cookiesBanner:G,setCookiesBanner:N,pageName:h}),(0,f.tZ)(C.Z,null))))}}}]);
//# sourceMappingURL=0f5a15a4dcc3a311401d111d147f04ce310594ca-996500696d6c196c0af1.js.map