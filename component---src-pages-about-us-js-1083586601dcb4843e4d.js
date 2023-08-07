"use strict";(self.webpackChunkcyscale_gatsby=self.webpackChunkcyscale_gatsby||[]).push([[4539],{44669:function(t,e,a){function l(){return l=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var a=arguments[e];for(var l in a)Object.prototype.hasOwnProperty.call(a,l)&&(t[l]=a[l])}return t},l.apply(this,arguments)}a.d(e,{Z:function(){return r}});var s=function(){var t="undefined"!=typeof window&&window._hsq?window._hsq:[],e=function(){t.push(["trackPageView"])};return{setContentType:function(e){t.push(["setContentType",e])},setPathPageView:function(a){t.push(["setPath",a]),e()},setTrackPageView:e,setIdentity:function(e,a){t.push(["identify",l({email:e},a)])},setTrackEvent:function(e){var a=e.eventId,l=e.value;t.push(["trackEvent",{id:a,value:l}])}}};function r(t){var e=t.pageName,a=s(),l=a.setIdentity,r=a.setContentType;if("undefined"!=typeof window){var n=localStorage.getItem("user-email");n&&l(n)}r("blog-detail"===e?"blog-post":"standard-page")}},33926:function(t,e,a){var l=a(67294),s=a(81164),r=a(82224),n=a(80414),i=a(26040),o=a(44669),m=a(62554),c=a(62319),d=a(38593),u=a(35533),g=a(95030),Z=a(97233),b=a(4382);e.Z=function(t){var e=t.children,a=t.title,p=t.description,h=t.pageName,A=t.location,x=t.banner;(0,o.Z)({pageName:h});var f=(0,l.useState)(!1),y=f[0],N=f[1],I=(0,u.Z)(),w=I.cookies,C=I.cookiesBanner,v=I.setCookiesBanner;return(0,b.tZ)(c.Z,null,(0,b.tZ)(i.Z.Provider,{value:{location:A}},(0,b.tZ)(s.Z,{title:a,description:p,pageName:h,location:A,banner:x}),(0,b.tZ)(n.Z.Provider,{value:{sticker:y,setSticker:N}},(0,b.tZ)(Z.Z,{pageName:h,location:A})),(0,b.tZ)("main",null,e),(0,b.tZ)(r.default,{pageUri:null==A?void 0:A.pathname,pageName:h}),!0!==Boolean(w[g.VB])&&(0,b.tZ)(m.Z,{cookiesBanner:C,setCookiesBanner:v,pageName:h}),(0,b.tZ)(d.Z,null)))}},80414:function(t,e,a){var l=a(67294).createContext({sticker:!1,setSticker:function(){}});e.Z=l},24896:function(t,e,a){a.r(e),a.d(e,{default:function(){return f}});var l=a(67294),s=a(97985),r=a(55971),n=a(39008),i=a(33926),o="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iNTQiIGhlaWdodD0iMjYuOTk1IiB2aWV3Qm94PSIwIDAgNTQgMjYuOTk1Ij4KICA8ZGVmcz4KICAgIDxsaW5lYXJHcmFkaWVudCBpZD0ibGluZWFyLWdyYWRpZW50IiB4MT0iLTAuNzc2IiB5MT0iMC41NyIgeDI9IjEuMDQyIiB5Mj0iMC41NyIgZ3JhZGllbnRVbml0cz0ib2JqZWN0Qm91bmRpbmdCb3giPgogICAgICA8c3RvcCBvZmZzZXQ9IjAuMTA3IiBzdG9wLWNvbG9yPSIjMGYyNmFhIi8+CiAgICAgIDxzdG9wIG9mZnNldD0iMC44OCIgc3RvcC1jb2xvcj0iI2ZmNGE1NiIvPgogICAgPC9saW5lYXJHcmFkaWVudD4KICAgIDxsaW5lYXJHcmFkaWVudCBpZD0ibGluZWFyLWdyYWRpZW50LTIiIHgxPSIwLjIyNSIgeTE9IjAuNTciIHgyPSIyLjA0MyIgeTI9IjAuNTciIHhsaW5rOmhyZWY9IiNsaW5lYXItZ3JhZGllbnQiLz4KICA8L2RlZnM+CiAgPGcgaWQ9Ikdyb3VwXzM0NyIgZGF0YS1uYW1lPSJHcm91cCAzNDciIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAgMCkiPgogICAgPGcgaWQ9Ikdyb3VwXzM0NSIgZGF0YS1uYW1lPSJHcm91cCAzNDUiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDI3LjAwNikiPgogICAgICA8cGF0aCBpZD0iUGF0aF8yMjAiIGRhdGEtbmFtZT0iUGF0aCAyMjAiIGQ9Ik0xNDMxLjctMTMxMC4yMDd2LTkuMzQzYTI3LjAyNSwyNy4wMjUsMCwwLDAtMjYuOTk0LDI3aDkuMzQzQTE3LjY3MiwxNy42NzIsMCwwLDEsMTQzMS43LTEzMTAuMjA3WiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTE0MDQuNzAxIDEzMTkuNTUpIiBmaWxsPSJ1cmwoI2xpbmVhci1ncmFkaWVudCkiLz4KICAgIDwvZz4KICAgIDxnIGlkPSJHcm91cF8zNDYiIGRhdGEtbmFtZT0iR3JvdXAgMzQ2Ij4KICAgICAgPHBhdGggaWQ9IlBhdGhfMjIxIiBkYXRhLW5hbWU9IlBhdGggMjIxIiBkPSJNMTI0OC4yODMtMTMxOS41NXY5LjM0M2ExNy42NzIsMTcuNjcyLDAsMCwxLDE3LjY1MiwxNy42NTJoOS4zNDJBMjcuMDI1LDI3LjAyNSwwLDAsMCwxMjQ4LjI4My0xMzE5LjU1WiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTEyNDguMjgzIDEzMTkuNTUpIiBmaWxsPSJ1cmwoI2xpbmVhci1ncmFkaWVudC0yKSIvPgogICAgPC9nPgogIDwvZz4KPC9zdmc+Cg==",m=a(4382),c=function(){return(0,m.tZ)(l.Fragment,null,(0,m.tZ)("div",{className:"overflow-x-hidden"},(0,m.tZ)("div",{className:"max-w-1366px mx-auto px-8 lg:px-0 py-20 lg:py-32"},(0,m.tZ)("div",{className:"grid grid-cols-1 lg:grid-cols-4 gap-12 lg:gap-6 lg:border-t-8 lg:border-aboutBorder relative aboutHistory"},(0,m.tZ)("div",{className:"border-t-8 border-aboutBorder lg:border-none"},(0,m.tZ)("div",{className:"-mt-10 lg:-mt-14 hidden lg:block"},(0,m.tZ)("img",{src:o,className:"w-37px lg:mb-4",alt:"cyscale-logo-symbols",loading:"lazy"}),(0,m.tZ)("span",{className:"block w-36px h-36px rounded-full bg-white border-8 border-aboutBorder"})),(0,m.tZ)("p",{className:"text-black text-base mt-8"},(0,m.tZ)("strong",null,"2019:")),(0,m.tZ)("p",{className:"text-sm text-grey2 mt-8 new-line"},"We started development for our CSPM solution: Cyscale Cloud Platform.")),(0,m.tZ)("div",{className:"border-t-8 border-aboutBorder lg:border-none"},(0,m.tZ)("div",{className:"-mt-10 lg:-mt-16 hidden lg:block"},(0,m.tZ)("img",{src:o,className:"w-37px lg:mb-6",alt:"cyscale-logo-symbols",loading:"lazy"}),(0,m.tZ)("span",{className:"block w-36px h-36px rounded-full bg-white border-8 border-aboutBorder"})),(0,m.tZ)("p",{className:"text-black text-base mt-8"},(0,m.tZ)("strong",null,"2020:")),(0,m.tZ)("p",{className:"text-sm text-grey2 mt-8 new-line"},'Cyscale was named "The Best Technology Startup in 2020" in the InnovX accelerator program. In addition, the European Union awarded the company with the Seal of Excellence for innovation in cloud security. We set the record on'," ",(0,m.tZ)("a",{className:"text-blue",href:"https://seedblink.com/",target:"_blank",rel:"noopener noreferrer"},"Seedblink")," ","by raising $430k in just 4 hours.")),(0,m.tZ)("div",{className:"border-t-8 border-aboutBorder lg:border-none"},(0,m.tZ)("div",{className:"-mt-10 lg:-mt-20 hidden lg:block"},(0,m.tZ)("img",{src:o,className:"w-37px lg:mb-10",alt:"cyscale-logo-symbols",loading:"lazy"}),(0,m.tZ)("span",{className:"block w-36px h-36px rounded-full bg-white border-8 border-aboutBorder"})),(0,m.tZ)("p",{className:"text-black text-base mt-8"},(0,m.tZ)("strong",null,"2021:")),(0,m.tZ)("p",{className:"text-sm text-grey2 mt-8"},"Cyscale Cloud Platform empowers Security teams worldwide to take the correct approach and implement a strong Cloud Security Program.")),(0,m.tZ)("div",{className:"border-t-8 border-aboutBorder lg:border-none"},(0,m.tZ)("div",{className:"-mt-10 lg:-mt-24 hidden lg:block"},(0,m.tZ)("img",{src:o,className:"w-37px lg:mb-14",alt:"cyscale-logo-symbols",loading:"lazy"}),(0,m.tZ)("span",{className:"block w-36px h-36px rounded-full bg-white border-8 border-aboutBorder"})),(0,m.tZ)("p",{className:"text-black text-base mt-8"},(0,m.tZ)("strong",null,"2022:")),(0,m.tZ)("p",{className:"text-sm text-grey2 mt-8"},"Cyscale raises $3.5M in a new seed round led by"," ",(0,m.tZ)("a",{className:"text-blue",href:"https://www.notion.vc/",target:"_blank",rel:"noopener noreferrer"},"Notion Capital"),","," ",(0,m.tZ)("a",{className:"text-blue",href:"https://seedcamp.com/",target:"_blank",rel:"noopener noreferrer"},"Seedcamp"),", and"," ",(0,m.tZ)("a",{className:"text-blue",href:"https://gapminder.vc",target:"_blank",rel:"noopener noreferrer"},"GapMinder"),"."),(0,m.tZ)("p",{className:"text-sm text-grey2 mt-8"},"Our team is growing fast. The Security Knowledge Graph™ helps more and more organizations understand their digital footprint, enabling them to secure and protect their most valuable assets."))))))},d=a(36062),u=a(36747),g=a(2075),Z=a(71082),b=a(93723);var p={name:"1kgw753",styles:"@media (max-width: 639px){width:3.125rem;margin:0 auto;}width:6.25rem"},h=function(t){var e=t.imageData,a=t.titleSm,l=t.titleLg,s=t.company,r=t.classes;return(0,m.tZ)("div",{className:"col-span-12 sm:col-span-6 lg:col-span-4 sm:mx-auto "+r},(0,m.tZ)("div",{className:"grid grid-cols-5 sm:grid-cols-3 gap-0 sm:gap-4 items-start sm:items-center"},(0,m.tZ)(b.G,{className:"col-span-1",alt:"",image:e,css:p}),(0,m.tZ)("div",{className:"text-left col-span-4 sm:col-span-2"},(0,m.tZ)("p",{className:"font-montserrat text-sm sm:text-lg font-bold hidden sm:block"},l),(0,m.tZ)("p",{className:"font-hind text-xs sm:text-base hidden sm:block"},s),(0,m.tZ)("p",{className:"font-montserrat text-sm font-bold block sm:hidden"},a),(0,m.tZ)("p",{className:"font-hind text-xs block sm:hidden"},s))))};var A={name:"fvvrqm",styles:"padding:0.625rem 2.5rem"},x={name:"cz0g3j",styles:"margin-top:3rem;margin-left:0;@media (min-width: 520px){margin-left:3rem;}@media (min-width: 570px){margin-top:auto;margin-bottom:auto;}"},f=function(t){var e=t.location,a=(0,Z.K2)("2502211611");return(0,m.tZ)(i.Z,{location:e,pageName:"aboutUs",title:"About us - Cyscale",description:"Together, we draw broad industry expertise to create powerful cybersecurity solutions for our customers that automate and mitigate cloud security issues."},(0,m.tZ)("div",{className:"bg-lightGrey"},(0,m.tZ)("div",{className:"max-w-7xl m-auto pl-8 pr-8 pt-28 lg:pt-44 pb-12 lg:pb-28"},(0,m.tZ)(n.X2,null,(0,m.tZ)("div",{className:"col-span-12 md:col-span-6 "},(0,m.tZ)("div",{className:"xl:ml-auto max-w-full 2xl:ml-0 2xl:mr-0"},(0,m.tZ)("h1",{className:"font-semibold font-montserrat text-3xl lg:text-5xl leading-normal text-primary mt-2 lg:mt-20"},"Our Mission"),(0,m.tZ)("p",{className:"text-base lg:text-lg pt-2 lg:pt-10  leading-loose"},"To help companies of all sizes to start, improve and maintain their Cloud Security Program based on the industry best practices. Reducing the risk"," ",(0,m.tZ)("br",{className:"hidden xl:block"})," of security breaches when migrating or developing solutions in the cloud should be a constant priority and responsibility. We can ensure that this task will not be overwhelming for you."))),(0,m.tZ)("div",{className:"col-span-12 md:col-span-6"},(0,m.tZ)("div",{className:"max-w-xs sm:max-w-none"},(0,m.tZ)(b.G,{image:a.team.childImageSharp.gatsbyImageData,alt:"Cyscale Team"})))))),(0,m.tZ)(n.W2,null,(0,m.tZ)(n.$0,null,(0,m.tZ)(n.X2,null,(0,m.tZ)("div",{className:"col-span-12"},(0,m.tZ)("h2",{id:"start",className:"text-blue font-montserrat sm:text-3xl text-4xl font-bold leading-normal mb-6 sectionTitle"},"How this story started")),(0,m.tZ)("div",{className:"col-span-12 md:col-span-6"},(0,m.tZ)("p",{className:"max-w-lg  leading-loose"},"As more companies moved their business applications and data to the cloud, many lacked the knowledge or human resources required to mitigate security risks associated with this accelerated cloud adoption.")),(0,m.tZ)("div",{className:"col-span-12 md:col-span-6"},(0,m.tZ)("p",{className:"max-w-lg  leading-loose"},"Being on the front line as cybersecurity experts, the founders (Ovidiu, Manuela, and Andrei) have realized the struggle these companies face and started working on a solution to help them handle their Cloud Security better and more efficiently. And so... Cyscale was born."))))),(0,m.tZ)("div",{className:"-mt-24 lg:mt-0 lg:pl-8 xl:pl-0"},(0,m.tZ)(c,null)),(0,m.tZ)("div",{className:"gradientBG"},(0,m.tZ)(d.Z,{description:"Start improving your Cloud Security Posture",btnText:"TRY CYSCALE FOR FREE",btnLink:"/free-trial",icon:u.Z,sectionName:"aboutUsGetStarted"})),(0,m.tZ)("div",{className:"relative"},(0,m.tZ)("div",{className:"bg-gray absolute bottom-0 mb-20 lg:mb-24 left-0 w-full hidden sm:block",style:{height:115,zIndex:-1}}),(0,m.tZ)(n.W2,{id:"leadership"},(0,m.tZ)(n.$0,null,(0,m.tZ)("div",{className:"mb-10"},(0,m.tZ)("h2",{className:"font-semibold font-montserrat text-blue sm:text-3xl text-4xl leading-normal mb-6 text-center"},"Our Leadership")),(0,m.tZ)(n.X2,{className:"max-w-4xl mx-auto md:gap-8"},(0,m.tZ)("div",{className:"col-span-6 sm:col-span-4"},(0,m.tZ)(s.t6,{className:"rounded-md shadow-md mb-4",alt:"Ovidiu Cical - Founder & CEO"}),(0,m.tZ)("strong",{className:"text-black sm:text-white"},"Ovidiu Cical"),(0,m.tZ)("br",null),(0,m.tZ)("a",{href:"https://www.linkedin.com/in/ovidiucical",className:"flex text-sm text-black sm:text-white hover:underline",rel:"noopener noreferrer",target:"_blank"},(0,m.tZ)(r.ltd,{className:"text-sm sm:text-lg mt-1 sm:mt-0"}),(0,m.tZ)("span",{className:"ml-1 sm:ml-2"},"Founder & CEO"))),(0,m.tZ)("div",{className:"col-span-6 sm:col-span-4"},(0,m.tZ)(s.vV,{className:"rounded-md shadow-md mb-4",alt:"Manuela Țicudean - Founder & COO"}),(0,m.tZ)("strong",{className:"text-black sm:text-white"},"Manuela Țicudean"),(0,m.tZ)("br",null),(0,m.tZ)("a",{href:"https://www.linkedin.com/in/manuela-ticudean-88a01b81/",className:"flex text-sm text-black sm:text-white hover:underline",rel:"noopener noreferrer",target:"_blank"},(0,m.tZ)(r.ltd,{className:"text-sm sm:text-lg mt-1 sm:mt-0"}),(0,m.tZ)("span",{className:"ml-1 sm:ml-2"},"Founder & COO"))),(0,m.tZ)("div",{className:"col-span-6 sm:col-span-4"},(0,m.tZ)(s.Kp,{className:"rounded-md shadow-md mb-4",alt:"Andy Leaver - VP Ops in Residence"}),(0,m.tZ)("strong",{className:"text-black sm:text-white"},"Andy Leaver"),(0,m.tZ)("br",null),(0,m.tZ)("a",{href:"https://www.linkedin.com/in/aleaver/",className:"flex text-sm text-black sm:text-white hover:underline",rel:"noopener noreferrer",target:"_blank"},(0,m.tZ)(r.ltd,{className:"text-sm sm:text-lg mt-1 sm:mt-0"}),(0,m.tZ)("span",{className:"ml-1 sm:ml-2"},"VP Ops in Residence"))))))),(0,m.tZ)(n.W2,{className:"relative",id:"backed-by"},(0,m.tZ)(n.$0,null,(0,m.tZ)("h2",{className:"font-semibold font-montserrat text-blue sm:text-3xl text-4xl leading-normal mb-6 text-center"},"Backed by"),(0,m.tZ)("div",{className:"flex justify-center flex-wrap"},(0,m.tZ)("a",{className:"text-blue",href:"https://www.notion.vc/",target:"_blank",rel:"noopener noreferrer"},(0,m.tZ)(s.yC,null)),(0,m.tZ)("a",{className:"text-blue",href:"https://seedcamp.com/",target:"_blank",rel:"noopener noreferrer"},(0,m.tZ)(s.er,null)),(0,m.tZ)("a",{className:"text-blue",href:"https://gapminder.vc/",target:"_blank",rel:"noopener noreferrer"},(0,m.tZ)(s.iC,null)),(0,m.tZ)("a",{className:"text-blue",href:"https://seedblink.com/",target:"_blank",rel:"noopener noreferrer"},(0,m.tZ)(s.Uz,null))))),(0,m.tZ)(n.W2,{className:"relative",id:"technical-partners"},(0,m.tZ)("div",null,(0,m.tZ)("h2",{className:"font-semibold font-montserrat text-blue sm:text-3xl text-4xl leading-normal mb-6 text-center"},"Technical Partners"),(0,m.tZ)("div",{className:"flex justify-center flex-wrap mt-12"},(0,m.tZ)("div",{className:"my-auto"},(0,m.tZ)("a",{href:"https://aws.amazon.com/startups/startup-programs/",target:"_blank",rel:"noopener noreferrer"},(0,m.tZ)(b.G,{image:a.awsStartup.childImageSharp.gatsbyImageData,alt:"AWS Startup Programs"}))),(0,m.tZ)("div",{className:"ml-12"},(0,m.tZ)("a",{href:"https://aws.amazon.com/partners/",target:"_blank",rel:"noopener noreferrer"},(0,m.tZ)(b.G,{image:a.aws.childImageSharp.gatsbyImageData,alt:"AWS Partner"}))),(0,m.tZ)("div",{css:x},(0,m.tZ)("a",{href:"https://www.microsoft.com/azure/partners",target:"_blank",rel:"noopener noreferrer"},(0,m.tZ)(b.G,{image:a.microsoft.childImageSharp.gatsbyImageData,alt:"Microsoft Partner"})))))),(0,m.tZ)(n.W2,{className:"relative",id:"team"},(0,m.tZ)(n.$0,null,(0,m.tZ)(n.X2,{className:"md:gap-8"},(0,m.tZ)("div",{className:"col-span-12"},(0,m.tZ)("h2",{className:"font-semibold font-montserrat text-blue sm:text-3xl text-4xl leading-normal mb-6 text-center"},"Our Team")),g.Z.filter((function(t){var e=t.leader,a=t.photo;return!e&&a})).sort((function(t,e){return t.order-e.order})).map((function(t){var e=t.photo,a=t.name,s=t.position,n=t.linkedin;return(0,m.tZ)("div",{className:"col-span-6 md:col-span-4 lg:col-span-3"},(0,m.tZ)("div",{className:"mx-auto max-w-xs pt-4"},l.cloneElement(e,Object.assign({},e.props,{alt:a+" - "+s,className:"rounded-md shadow-md"})),(0,m.tZ)("div",{className:"mt-4"},(0,m.tZ)("strong",null,a),(0,m.tZ)("br",null),(0,m.tZ)("a",{href:n,className:"text-sm flex hover:text-primary mt-1 text-neutral-600",rel:"noopener noreferrer",target:"_blank"},(0,m.tZ)(r.ltd,{className:"text-lg"}),(0,m.tZ)("span",{className:"ml-2"},s)))))}))))),(0,m.tZ)(n.W2,{className:"relative",id:"certifications"},(0,m.tZ)("h2",{className:"font-semibold font-montserrat text-blue sm:text-3xl text-4xl leading-normal mb-6 text-center"},"Our Certifications"),(0,m.tZ)(n.X2,{className:"mt-12 sm:mt-24"},(0,m.tZ)(h,{imageData:a.azureSolutionsArchitect.childImageSharp.gatsbyImageData,titleSm:(0,m.tZ)(l.Fragment,null,"Microsoft Certified: Azure",(0,m.tZ)("br",null)," Solutions Architect Expert"),titleLg:(0,m.tZ)(l.Fragment,null,"Microsoft Certified:",(0,m.tZ)("br",null)," Azure Solutions",(0,m.tZ)("br",null)," Architect Expert"),company:"Microsoft"}),(0,m.tZ)(h,{imageData:a.azureSecurityEngineer.childImageSharp.gatsbyImageData,titleSm:(0,m.tZ)(l.Fragment,null,"Microsoft Certified: Azure",(0,m.tZ)("br",null)," Security Engineer"),titleLg:(0,m.tZ)(l.Fragment,null,"Microsoft Certified:",(0,m.tZ)("br",null)," Azure Security",(0,m.tZ)("br",null)," Engineer"),company:"Microsoft",classes:"mt-2 sm:mt-0"}),(0,m.tZ)(h,{imageData:a.az303.childImageSharp.gatsbyImageData,titleSm:(0,m.tZ)(l.Fragment,null," ","AZ-303: Microsoft: Azure",(0,m.tZ)("br",null)," Architect Technologies"),titleLg:(0,m.tZ)(l.Fragment,null,"AZ-303: Microsoft",(0,m.tZ)("br",null)," Azure Architect",(0,m.tZ)("br",null)," Technologies"),company:"Microsoft",classes:"mt-2 sm:mt-12 lg:mt-0"}),(0,m.tZ)(h,{imageData:a.az304.childImageSharp.gatsbyImageData,titleSm:(0,m.tZ)(l.Fragment,null,"AZ-304: Microsoft: Azure",(0,m.tZ)("br",null)," Architect Design"),titleLg:(0,m.tZ)(l.Fragment,null,"AZ-304: Microsoft",(0,m.tZ)("br",null)," Azure Architect",(0,m.tZ)("br",null)," Design"),company:"Microsoft",classes:"mt-2 sm:mt-12"}),(0,m.tZ)(h,{imageData:a.azureFundamentals.childImageSharp.gatsbyImageData,titleSm:(0,m.tZ)(l.Fragment,null," ","Microsoft Certified: Azure",(0,m.tZ)("br",null)," Fundamentals"),titleLg:(0,m.tZ)(l.Fragment,null,"Microsoft Certified:",(0,m.tZ)("br",null)," Azure",(0,m.tZ)("br",null)," Fundamentals"),company:"Microsoft",classes:"mt-2 sm:mt-12"}),(0,m.tZ)(h,{imageData:a.securityCompliance.childImageSharp.gatsbyImageData,titleSm:(0,m.tZ)(l.Fragment,null,"Security, Compliance,",(0,m.tZ)("br",null)," and Identity Fundamentals"),titleLg:(0,m.tZ)(l.Fragment,null,"Security, Compliance,",(0,m.tZ)("br",null)," and Identity",(0,m.tZ)("br",null)," Fundamentals"),company:"Microsoft",classes:"mt-2 sm:mt-12"}),(0,m.tZ)(h,{imageData:a.azureRed.childImageSharp.gatsbyImageData,titleSm:(0,m.tZ)(l.Fragment,null,"Certified Azure Red Team",(0,m.tZ)("br",null)," Professional (CARTP)"),titleLg:(0,m.tZ)(l.Fragment,null,"Certified Azure Red",(0,m.tZ)("br",null)," Team Professional",(0,m.tZ)("br",null)," (CARTP)"),company:"Altered Security",classes:"mt-2 sm:mt-12"}),(0,m.tZ)(h,{imageData:a.awsSolutionsArchitectProfessional.childImageSharp.gatsbyImageData,titleSm:(0,m.tZ)(l.Fragment,null,"AWS Certified Solutions",(0,m.tZ)("br",null)," Architect – Professional"),titleLg:(0,m.tZ)(l.Fragment,null,"AWS Certified",(0,m.tZ)("br",null)," Solutions Architect –",(0,m.tZ)("br",null)," Professional"),company:(0,m.tZ)(l.Fragment,null,"Amazon Web Services Training",(0,m.tZ)("br",null)," and Certification"),classes:"mt-2 sm:mt-12"}),(0,m.tZ)(h,{imageData:a.awsSolutionsArchitectAssociate.childImageSharp.gatsbyImageData,titleSm:(0,m.tZ)(l.Fragment,null,"AWS Certified Solutions",(0,m.tZ)("br",null)," Architect – Associate"),titleLg:(0,m.tZ)(l.Fragment,null,"AWS Certified",(0,m.tZ)("br",null)," Solutions Architect –",(0,m.tZ)("br",null)," Associate"),company:(0,m.tZ)(l.Fragment,null,"Amazon Web Services Training",(0,m.tZ)("br",null)," and Certification"),classes:"mt-2 sm:mt-12"}),(0,m.tZ)(h,{imageData:a.terraform.childImageSharp.gatsbyImageData,titleSm:(0,m.tZ)(l.Fragment,null,"HashiCorp Certified: ",(0,m.tZ)("br",null)," Terraform Associate (002)"),titleLg:(0,m.tZ)(l.Fragment,null,"HashiCorp Certified:",(0,m.tZ)("br",null)," Terraform Associate",(0,m.tZ)("br",null)," (002)"),company:"HashiCorp",classes:"mt-2 sm:mt-12"}),(0,m.tZ)(h,{imageData:a.googleCloud.childImageSharp.gatsbyImageData,titleSm:(0,m.tZ)(l.Fragment,null,"Google Cloud Certified",(0,m.tZ)("br",null)," Associate Cloud Engineer"),titleLg:(0,m.tZ)(l.Fragment,null,"Google Cloud",(0,m.tZ)("br",null)," Certified Associate",(0,m.tZ)("br",null)," Cloud Engineer"),company:"Google Cloud",classes:"mt-2 sm:mt-12"}),(0,m.tZ)(h,{imageData:a.neo4j.childImageSharp.gatsbyImageData,titleSm:"Neo4j Certified Professional",titleLg:(0,m.tZ)(l.Fragment,null,"Neo4j Certified",(0,m.tZ)("br",null)," Professional"),company:"Neo4j Certification",classes:"mt-2 sm:mt-12"}),(0,m.tZ)(h,{imageData:a.ccna.childImageSharp.gatsbyImageData,titleSm:(0,m.tZ)(l.Fragment,null,"CCNA (Cisco Certified",(0,m.tZ)("br",null)," Network Associate)"),titleLg:(0,m.tZ)(l.Fragment,null,"CCNA (Cisco",(0,m.tZ)("br",null)," Certified Network",(0,m.tZ)("br",null)," Associate)"),company:"Cisco",classes:"mt-2 sm:mt-12"}),(0,m.tZ)(h,{imageData:a.kubernetesAdministrator.childImageSharp.gatsbyImageData,titleSm:(0,m.tZ)(l.Fragment,null,"Certified ",(0,m.tZ)("br",null)," Kubernetes Administrator"),titleLg:(0,m.tZ)(l.Fragment,null,"Certified ",(0,m.tZ)("br",null)," Kubernetes ",(0,m.tZ)("br",null)," Administrator"),company:"CNCF",classes:"mt-2 sm:mt-12"}))),(0,m.tZ)(n.W2,null,(0,m.tZ)(n.$0,null,(0,m.tZ)("div",{className:"pb-12"},(0,m.tZ)(n.X2,null,(0,m.tZ)("div",{className:"col-span-12"},(0,m.tZ)("h2",{className:"font-semibold font-montserrat text-blue sm:text-3xl text-4xl leading-normal mb-6 text-center"},"Join the Team")),(0,m.tZ)("div",{className:"col-span-12 flex justify-center"},(0,m.tZ)(Z.rU,{to:"/careers/",css:A,className:"mx-auto bg-gradient-to-r md:mx-0 from-blue to-red hover:from-red hover:to-blue block font-medium rounded text-white uppercase text-center no-underline hover:no-underline max-w-sm lg:inline-block font-hind"},"See our open positions")))))))}},36747:function(t,e){e.Z="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAALcAAACECAMAAADlXkquAAABL1BMVEUAAAD///////////////////////////////////////////8AAAD///////////////////////////////////////8AAAD///8AAAD///////////////////////////////////////////8AAAD///////////////////////////////////////////////////////8AAAD///8AAAD///////////////////////////////////////////8AAAD///8AAAD///8AAAD///////8AAAD///////////8AAAD///8AAAAAAAD///////8AAAD///8AAAD///////8AAAAAAAAAAAD///8AAAAAAAAAAAAAAAAAAAAAAAAAAAD///8AAAD9vY9wAAAAY3RSTlMAEQz15bv5wiYU7YgR6QL7BOGZXURP8Z9wBs1tOR2AZpAhe1gG+9ivYVIwpaCdadK0qUA16MTAuKsYxr6yd3M9LSMMCLMqIgrjzsCVhVZLN/Hc1ZWLSijJhXNiRzIrmnc829Uuh/W3AAAIDUlEQVR42tTaaVPaUBQG4BfiUqgJWBGLBUFwwX0BKShYRcW11dbault78v9/Q6ct5CQkhptoE/p8ckaGeTlz7rk3F/BSUrHFzEp1Y3S9t7yQzc3u4z+wnZ7rIaPI+klsB90skF4ja/H5YQVdarYcIRuDb7uyYZLvqRM5G0SXqcyRiJ4cuonyNk6CNl6ha4TekzgpjS4Rk8mR+e7o8nwfOfQ9BP+NkUl4OjuzVQlCCYyvpjOj5un4eRt+y5jG9MmsAoNArtpHRrK/q9Nc7d4YrITGwm2fLgU/vSOD/gKeEqzFSW8qBP/EDK0rD8FOaoX0jqLwS0o2tEgFHcwYmuUEPomukU4Wnb2aIp1P8EeNWCQNEYE1YnIAfhiXSNM3DDH7G8SO4YdlYnmICo6SJpKE926I1SAudECadXivnzTLcKLQR5oYvBYjzUEAjmySZg1e6yXNMJxRdC3+Ad4aJ00VThUifBaHt8ZIswXHeMeXgvCSMkgtZTi3xQXPw0sF0hTgQlXXZV7KUssS3BimlngUHuLd+h3ciMq+TJQJ3jpScGWBWsbgnVl+bIE7OWqZhndyzz7ShfjZ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"}}]);
//# sourceMappingURL=component---src-pages-about-us-js-1083586601dcb4843e4d.js.map