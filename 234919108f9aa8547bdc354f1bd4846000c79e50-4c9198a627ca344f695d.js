"use strict";(self.webpackChunkcyscale_gatsby=self.webpackChunkcyscale_gatsby||[]).push([[7317],{95506:function(e,t,a){a.r(t);var s=a(70917),i=a(67294),n=a(39008),l=a(4790),o=a(14160),c=a(38032),m=a(46520),r=a(83153),d=a.n(r);const u={name:"1exc1sr",styles:"color:#38aff1"},I={name:"a07gmx",styles:"font-size:2rem"};var g={name:"o7mly9",styles:"color:#0f26aa;&:hover{color:#0b175a;}"},M={name:"d3v9zr",styles:"overflow:hidden"},b={name:"jluln1",styles:"font-size:1.75rem;@media (max-width: 1024px){font-size:1.625rem;}"};t.default=e=>{let{disableAnimation:t,subtitle:a="Trusted by companies worldwide",backgroundColor:r="#f5f9ff"}=e;const{0:y,1:h}=(0,i.useState)(0),Z=(0,o.K2)("3800171419"),{0:N,1:f}=(0,i.useState)(!1),{0:p,1:v}=(0,i.useState)(!0),x=[{image:Z.bays.childImageSharp.gatsbyImageData,alt:"Cover Bays Consulting",title:"“It’s been great at identifying blind spots”: Bays Consulting achieves 50% productivity gain with Cyscale",quote:"“Exceptionally helpful when doing access reviews; I’m using the platform monthly and it simply automates my work!”",employee:"James Hawkes",employeeImage:Z.james.childImageSharp.gatsbyImageData,position:(0,s.tZ)(i.Fragment,null,"Head of Delivery at",(0,s.tZ)("br",{className:"block md:hidden"})," Bays Consulting"),link:"/case-studies/bays-consulting/"},{image:Z.smartFintech.childImageSharp.gatsbyImageData,alt:"Mobile Payment Smart Fintech",title:"Smart Fintech uses Cyscale to gain IAM visibility and ensure cloud security and compliance",quote:"“The platform helps me with IAM visibility a lot: I can understand who has access and why. When a person leaves the company, I can detect if their permissions remain hanging.”",employee:"Alex Cociu",employeeImage:Z.alex.childImageSharp.gatsbyImageData,position:(0,s.tZ)(i.Fragment,null,"Risk and Compliance Officer at",(0,s.tZ)("br",{className:"block md:hidden"})," Smart Fintech"),link:"/case-studies/smart-fintech/"}];return(0,i.useEffect)((()=>{d()({once:!1})}),[]),(0,s.tZ)("div",{className:"pt-24 pb-24 lg:pt-32 lg:pb-32",css:(0,s.iv)("background-color:",r,";","")},(0,s.tZ)(n.W2,null,(0,s.tZ)("h2",{className:"text-center text-blue font-montserrat font-bold pb-12",css:b},a),(0,s.tZ)(l.Z,{autoSlide:p,setAutoSlide:v,curr:y,setCurr:h},x.map(((e,a)=>(0,s.tZ)("div",{key:a,className:"grid grid-cols-12 gap-x-5",css:M,onMouseEnter:()=>v(!1),onMouseLeave:()=>v(!0),role:"button",tabIndex:y===a?0:-1,onClick:()=>{},onKeyDown:()=>{}},(0,s.tZ)("div",{className:"col-span-12 lg:col-span-6 mx-auto lg:mx-0 lg:mt-8","data-sal":t?"undefined":"slide-right"},(0,s.tZ)(o.rU,{to:e.link,tabIndex:y===a?0:-1},(0,s.tZ)(c.G,{image:e.image,className:"max-w-xl",alt:e.alt}))),(0,s.tZ)("div",{className:"col-span-12 lg:col-span-6 mx-auto lg:mx-0 max-w-xl mt-8 lg:mt-0","data-sal":t?"undefined":"slide-left"},(0,s.tZ)("p",{className:"font-montserrat text-base font-bold mt-4",css:u},"CASE STUDY"),(0,s.tZ)(o.rU,{to:e.link,tabIndex:y===a?0:-1},(0,s.tZ)("h2",{className:"font-montserrat text-blue font-bold mt-2 hover:underline",css:I},e.title)),(0,s.tZ)("p",{className:"mt-3 text-base font-hind font-normal"},e.quote),(0,s.tZ)("div",{className:"flex mt-3 px-2"},(0,s.tZ)(c.G,{image:e.employeeImage,alt:e.employee}),(0,s.tZ)("div",{className:"ml-4 mt-1"},(0,s.tZ)("p",{className:"font-hind text-base font-bold"},e.employee),(0,s.tZ)("p",{className:"font-hind text-base"},e.position))),(0,s.tZ)(o.rU,{to:e.link,onMouseEnter:()=>f(!0),onMouseLeave:()=>f(!1),tabIndex:y===a?0:-1,className:"font-hind text-base font-bold mt-6 hover:underline block",css:g},(0,s.tZ)(m.Z,{fillColor:N?"#0b175a":"#0F26AA",marginTop:"-0.1rem"}),"Read the case study"))))))))}},4790:function(e,t,a){a.d(t,{Z:function(){return o}});var s=a(70917),i=a(67294);const n={name:"3nulw8",styles:"&:hover{transform:scale(1.2);}"};var l={name:"1d3w5wq",styles:"width:100%"};var o=e=>{let{children:t,autoSlide:a=!0,autoSlideInterval:o=2500,setAutoSlide:c,cspmCarousel:m,curr:r,setCurr:d}=e;const u=(0,i.useRef)(),I=(0,i.useRef)(0),g=(0,i.useRef)(0),{0:M,1:b}=(0,i.useState)(0),y=()=>d((e=>0===e?t.length-1:e-1)),h=()=>d((e=>e===t.length-1?0:e+1));return(0,i.useEffect)((()=>{u.current&&b(u.current.offsetWidth)}),[]),(0,i.useEffect)((()=>{if(!a)return;const e=setInterval(h,o);return()=>clearInterval(e)}),[a,o,h]),(0,s.tZ)("div",{className:"overflow-hidden relative pb-10",css:l,ref:u},(0,s.tZ)("div",{className:"flex transition-transform ease-out duration-500",css:(0,s.iv)("transform:translateX(-",r*(100/t.length),"%);width:",100*t.length,"%;",""),onTouchStart:e=>{I.current=e.targetTouches[0].clientX},onTouchMove:e=>{g.current=e.targetTouches[0].clientX},onTouchEnd:()=>{I.current-g.current>75&&h(),I.current-g.current<-75&&y()}},t.map(((e,a)=>(0,s.tZ)("div",{key:a,style:{width:m?100/t.length+"%":M}},e)))),(0,s.tZ)("div",{className:"absolute -bottom-2 right-0"},(0,s.tZ)("button",{onClick:y,onMouseEnter:()=>c(!1),onMouseLeave:()=>c(!0)},(0,s.tZ)("img",{src:"data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTE5LjQ4MjggMjYuMjVMMTMuMjgxMiAyMEwxOS40ODI4IDEzLjc1IiBzdHJva2U9IiMwRjI2QUEiIHN0cm9rZS13aWR0aD0iMS41IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KPHBhdGggZD0iTTE0LjE0MzEgMjBIMjYuNzE4OCIgc3Ryb2tlPSIjMEYyNkFBIiBzdHJva2Utd2lkdGg9IjEuNSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+CjxwYXRoIGQ9Ik0zNSAyMEMzNSAxMS43MTg3IDI4LjI4MTIgNSAyMCA1QzExLjcxODcgNSA1IDExLjcxODcgNSAyMEM1IDI4LjI4MTIgMTEuNzE4NyAzNSAyMCAzNUMyOC4yODEyIDM1IDM1IDI4LjI4MTIgMzUgMjBaIiBzdHJva2U9IiMwRjI2QUEiIHN0cm9rZS13aWR0aD0iMS41IiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiLz4KPC9zdmc+Cg==",alt:"",css:n})),(0,s.tZ)("button",{onClick:h,className:"ml-2",onMouseEnter:()=>c(!1),onMouseLeave:()=>c(!0)},(0,s.tZ)("img",{src:"data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTIwLjUxNzEgMjYuMjVMMjYuNzE4NiAyMEwyMC41MTcxIDEzLjc1IiBzdHJva2U9IiMwRjI2QUEiIHN0cm9rZS13aWR0aD0iMS41IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KPHBhdGggZD0iTTI1Ljg1NyAyMEgxMy4yODEyIiBzdHJva2U9IiMwRjI2QUEiIHN0cm9rZS13aWR0aD0iMS41IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KPHBhdGggZD0iTTIwIDM1QzI4LjI4MTIgMzUgMzUgMjguMjgxMiAzNSAyMEMzNSAxMS43MTg3IDI4LjI4MTIgNSAyMCA1QzExLjcxODcgNSA1IDExLjcxODcgNSAyMEM1IDI4LjI4MTIgMTEuNzE4NyAzNSAyMCAzNVoiIHN0cm9rZT0iIzBGMjZBQSIgc3Ryb2tlLXdpZHRoPSIxLjUiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIvPgo8L3N2Zz4K",alt:"",css:n}))))}}}]);
//# sourceMappingURL=234919108f9aa8547bdc354f1bd4846000c79e50-4c9198a627ca344f695d.js.map