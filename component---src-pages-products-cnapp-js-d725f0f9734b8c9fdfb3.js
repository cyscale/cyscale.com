"use strict";(self.webpackChunkcyscale_gatsby=self.webpackChunkcyscale_gatsby||[]).push([[3281],{44669:function(M,j,t){function N(){return N=Object.assign||function(M){for(var j=1;j<arguments.length;j++){var t=arguments[j];for(var N in t)Object.prototype.hasOwnProperty.call(t,N)&&(M[N]=t[N])}return M},N.apply(this,arguments)}t.d(j,{Z:function(){return I}});function I(M){var j,t,I=M.pageName,u=(j="undefined"!=typeof window&&window._hsq?window._hsq:[],{setContentType:function(M){j.push(["setContentType",M])},setPathPageView:function(M){j.push(["setPath",M]),t()},setTrackPageView:t=function(){j.push(["trackPageView"])},setIdentity:function(M,t){j.push(["identify",N({email:M},t)])},setTrackEvent:function(M){var t=M.eventId,N=M.value;j.push(["trackEvent",{id:t,value:N}])}}),a=u.setIdentity,L=u.setContentType;if("undefined"!=typeof window){var D=localStorage.getItem("user-email");D&&a(D)}L("blog-detail"===I?"blog-post":"standard-page")}},16966:function(M,j,t){t(67294);var N=t(4382);j.Z=function(M){var j=M.text,t=M.alignLeft;return(0,N.tZ)("button",{css:[!t&&{marginLeft:"auto",marginRight:"auto"},"",""],className:"bg-gradient-to-r md:mx-0 from-blue to-red hover:from-red hover:to-blue block font-medium rounded text-white uppercase text-center py-4 px-8 no-underline hover:no-underline max-w-sm lg:inline-block"},j)}},42529:function(M,j,t){t(67294);var N=t(4382);var I={name:"1jazxpb",styles:"padding-top:0.938rem;padding-bottom:0.938rem;display:none;@media (min-width: 641px){display:inline-block;}"};j.Z=function(M){var j=M.text;return(0,N.tZ)("button",{className:"blackBorder mx-auto md:mx-0 font-medium rounded text-black uppercase text-center px-8 no-underline transition-all duration-300 hover:border-black hover:bg-black hover:text-white blackBorder hover:no-underline",css:I},j)}},33926:function(M,j,t){var N=t(67294),I=t(12625),u=t(94985),a=t(80414),L=t(26040),D=t(44669),e=t(71596),s=t(62319),i=t(1461),g=t(35533),l=t(95030),y=t(21292),w=t(4382);j.Z=function(M){var j=M.children,t=M.title,A=M.description,z=M.pageName,c=M.location,o=M.banner;(0,D.Z)({pageName:z});var n=(0,N.useState)(!1),x=n[0],C=n[1],m=(0,g.Z)(),T=m.cookies,r=m.cookiesBanner,d=m.setCookiesBanner;return(0,w.tZ)(s.Z,null,(0,w.tZ)(L.Z.Provider,{value:{location:c}},(0,w.tZ)(I.Z,{title:t,description:A,pageName:z,location:c,banner:o}),(0,w.tZ)(a.Z.Provider,{value:{sticker:x,setSticker:C}},(0,w.tZ)(y.Z,{pageName:z,location:c})),(0,w.tZ)("main",null,j),(0,w.tZ)(u.default,{pageUri:null==c?void 0:c.pathname,pageName:z}),!0!==Boolean(T[l.V])&&(0,w.tZ)(e.Z,{cookiesBanner:r,setCookiesBanner:d,pageName:z}),(0,w.tZ)(i.Z,null)))}},80414:function(M,j,t){var N=t(67294).createContext({sticker:!1,setSticker:function(){}});j.Z=N},38942:function(M,j,t){t.r(j),t.d(j,{default:function(){return o}});t(67294);var N=t(33926),I=t(39008),u=t(1597),a=t(16966),L=t(42529),D=t(37059),e="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik05LjA2OTgxIDExLjM2MzFDMTAuNTU1OCA3LjQ4NDcgMTQuMzE4OSAzLjc1IDIwIDMuNzVDMjYuMTIwMyAzLjc1IDMxLjI1MzcgOC4xMzE5MyAzMi4zNjI3IDE1LjEwNzVDMzMuOTU0OCAxNS4zNDUzIDM1LjYzMzEgMTUuOTQ3OCAzNy4wMTkxIDE3LjAwNzZDMzguNzU0MyAxOC4zMzQ2IDQwIDIwLjM2MzcgNDAgMjMuMTI1QzQwIDI3Ljc1NDIgMzYuMDQ5OSAzMC45MDY4IDMxLjY5NDUgMzEuMDAzN0wzMS42Mzg5IDI4LjUwNDNDMzQuOTI4NSAyOC40MzExIDM3LjUgMjYuMTE5OSAzNy41IDIzLjEyNUMzNy41IDIxLjIxMjkgMzYuNjc1NCAxOS44OTIgMzUuNTAwNCAxOC45OTM1QzM0LjI4NTIgMTguMDY0MiAzMi42Njc0IDE3LjU3NTUgMzEuMTg1IDE3LjQ5ODNDMzAuNTY4MSAxNy40NjYyIDMwLjA2NzEgMTYuOTg4MiAzMC4wMDYxIDE2LjM3MzVDMjkuMzY4MiA5Ljk0ODAxIDI0Ljk5MyA2LjI1IDIwIDYuMjVDMTUuMjc2NiA2LjI1IDEyLjIxIDkuNTM0NjMgMTEuMTk1OCAxMi44NjQyQzExLjA0ODggMTMuMzQ2NyAxMC42MjYyIDEzLjY5MzYgMTAuMTI0NCAxMy43NDM4QzUuOTIwNSAxNC4xNjQyIDIuNSAxNy4wMzg4IDIuNSAyMS41OTYyQzIuNSAyNS4zNDgzIDUuMjU0MDcgMjguNTA0IDguMzMzMzMgMjguNTA0VjMxLjAwNEMzLjQ5NTY2IDMxLjAwNCAwIDI2LjMxODMgMCAyMS41OTYyQzAgMTUuNzg0NyA0LjIyNTkyIDEyLjE2NTUgOS4wNjk4MSAxMS4zNjMxWiIgZmlsbD0iIzBGMjZBQSIvPgo8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTE2LjE2OTggMTIuODM2NUMxNy4xODU2IDExLjgyMDcgMTguNTYzNCAxMS4yNSAyMCAxMS4yNUMyMS40MzY2IDExLjI1IDIyLjgxNDMgMTEuODIwNyAyMy44MzAxIDEyLjgzNjVDMjQuODQ2IDEzLjg1MjMgMjUuNDE2NiAxNS4yMzAxIDI1LjQxNjYgMTYuNjY2N1YyMS42MTQ2QzI1LjQxNjYgMjIuMzA0OSAyNC44NTcgMjIuODY0NiAyNC4xNjY2IDIyLjg2NDZDMjMuNDc2MyAyMi44NjQ2IDIyLjkxNjYgMjIuMzA0OSAyMi45MTY2IDIxLjYxNDZWMTYuNjY2N0MyMi45MTY2IDE1Ljg5MzEgMjIuNjA5NCAxNS4xNTEzIDIyLjA2MjQgMTQuNjA0M0MyMS41MTU0IDE0LjA1NzMgMjAuNzczNSAxMy43NSAyMCAxMy43NUMxOS4yMjY0IDEzLjc1IDE4LjQ4NDYgMTQuMDU3MyAxNy45Mzc2IDE0LjYwNDNDMTcuMzkwNiAxNS4xNTEzIDE3LjA4MzMgMTUuODkzMSAxNy4wODMzIDE2LjY2NjdWMjEuNjE0NkMxNy4wODMzIDIyLjMwNDkgMTYuNTIzNyAyMi44NjQ2IDE1LjgzMzMgMjIuODY0NkMxNS4xNDMgMjIuODY0NiAxNC41ODMzIDIyLjMwNDkgMTQuNTgzMyAyMS42MTQ2VjE2LjY2NjdDMTQuNTgzMyAxNS4yMzAxIDE1LjE1NCAxMy44NTIzIDE2LjE2OTggMTIuODM2NVoiIGZpbGw9IiMwNDdGRkUiLz4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0xNC4xNjY3IDIzLjY5NzlDMTMuMjM4MyAyMy42OTc5IDEyLjkxNjcgMjQuMjc2MSAxMi45MTY3IDI0LjUwNjhWMzIuMDU1OEMxMi45MTY3IDMyLjI4NjQgMTMuMjM4MyAzMi44NjQ2IDE0LjE2NjcgMzIuODY0NkgyNS44MzM0QzI2Ljc2MTcgMzIuODY0NiAyNy4wODM0IDMyLjI4NjQgMjcuMDgzNCAzMi4wNTU4VjI0LjUwNjhDMjcuMDgzNCAyNC4yNzYxIDI2Ljc2MTcgMjMuNjk3OSAyNS44MzM0IDIzLjY5NzlIMTQuMTY2N1pNMTAuNDE2NyAyNC41MDY4QzEwLjQxNjcgMjIuNDYzMyAxMi4zMzM2IDIxLjE5NzkgMTQuMTY2NyAyMS4xOTc5SDI1LjgzMzRDMjcuNjY2NCAyMS4xOTc5IDI5LjU4MzQgMjIuNDYzMyAyOS41ODM0IDI0LjUwNjhWMzIuMDU1OEMyOS41ODM0IDM0LjA5OTMgMjcuNjY2NCAzNS4zNjQ2IDI1LjgzMzQgMzUuMzY0NkgxNC4xNjY3QzEyLjMzMzYgMzUuMzY0NiAxMC40MTY3IDM0LjA5OTMgMTAuNDE2NyAzMi4wNTU4VjI0LjUwNjhaIiBmaWxsPSIjMDQ3RkZFIi8+Cjwvc3ZnPgo=",s="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik05LjA2OTgxIDExLjM2MzFDMTAuNTU1OCA3LjQ4NDcgMTQuMzE4OSAzLjc1IDIwIDMuNzVDMjYuMTIwMyAzLjc1IDMxLjI1MzcgOC4xMzE5MyAzMi4zNjI3IDE1LjEwNzVDMzMuOTU0OCAxNS4zNDUzIDM1LjYzMzEgMTUuOTQ3OCAzNy4wMTkxIDE3LjAwNzZDMzguNzU0MyAxOC4zMzQ2IDQwIDIwLjM2MzcgNDAgMjMuMTI1QzQwIDI3Ljc1NDIgMzYuMDQ5OSAzMC45MDY4IDMxLjY5NDUgMzEuMDAzN0wzMS42Mzg5IDI4LjUwNDNDMzQuOTI4NSAyOC40MzExIDM3LjUgMjYuMTE5OSAzNy41IDIzLjEyNUMzNy41IDIxLjIxMjkgMzYuNjc1NCAxOS44OTIgMzUuNTAwNCAxOC45OTM1QzM0LjI4NTIgMTguMDY0MiAzMi42Njc0IDE3LjU3NTUgMzEuMTg1IDE3LjQ5ODNDMzAuNTY4MSAxNy40NjYyIDMwLjA2NzEgMTYuOTg4MiAzMC4wMDYxIDE2LjM3MzVDMjkuMzY4MiA5Ljk0ODAxIDI0Ljk5MyA2LjI1IDIwIDYuMjVDMTUuMjc2NiA2LjI1IDEyLjIxIDkuNTM0NjMgMTEuMTk1OCAxMi44NjQyQzExLjA0ODggMTMuMzQ2NyAxMC42MjYyIDEzLjY5MzYgMTAuMTI0NCAxMy43NDM4QzUuOTIwNSAxNC4xNjQyIDIuNSAxNy4wMzg4IDIuNSAyMS41OTYyQzIuNSAyNS4zNDgzIDUuMjU0MDcgMjguNTA0IDguMzMzMzMgMjguNTA0VjMxLjAwNEMzLjQ5NTY2IDMxLjAwNCAwIDI2LjMxODMgMCAyMS41OTYyQzAgMTUuNzg0NyA0LjIyNTkyIDEyLjE2NTUgOS4wNjk4MSAxMS4zNjMxWiIgZmlsbD0iIzBGMjZBQSIvPgo8cGF0aCBkPSJNMjAuNjYwMSAzMS4wNDIzQzIwLjQ0NTggMzEuMDU4MiAyMC4yMjk1IDMxLjA2NjEgMjAuMDExMSAzMS4wNjYxQzE5Ljc0NTUgMzEuMDY2MSAxOS40ODMgMzEuMDU0IDE5LjIyMzUgMzEuMDMxMUMxNy45Mzk4IDMwLjkxNzMgMTYuNjk1OCAzMC41Mjc0IDE1LjU3NjggMjkuODg4MUMxNC40NTc4IDI5LjI0ODggMTMuNDkwMiAyOC4zNzUyIDEyLjc0MDMgMjcuMzI3MUMxMi43MjA1IDI3LjI5OSAxMi42OTM5IDI3LjI3NjMgMTIuNjYzIDI3LjI2MTJDMTIuNjMyMSAyNy4yNDYxIDEyLjU5NzggMjcuMjM5MSAxMi41NjM1IDI3LjI0MDlDMTIuNTI5MSAyNy4yNDI2IDEyLjQ5NTcgMjcuMjUzMSAxMi40NjY1IDI3LjI3MTNDMTIuNDM3MyAyNy4yODk1IDEyLjQxMzIgMjcuMzE0OCAxMi4zOTY1IDI3LjM0NDlMOC43NDAyMyAzMy45MTZDOC42MDEwOSAzNC4xNjk5IDguNTc5MjYgMzQuNDc0NiA4LjcyNjAyIDM0LjcyMjRDOC44MDI0MSAzNC44NDUzIDguOTA4ODQgMzQuOTQ2NyA5LjAzNTI2IDM1LjAxN0M5LjE2MTY5IDM1LjA4NzQgOS4zMDM5NSAzNS4xMjQ0IDkuNDQ4NjMgMzUuMTI0NkgxMy40MDk2QzEzLjU0NzUgMzUuMTE5NSAxMy42ODQ0IDM1LjE1MTMgMTMuODA2IDM1LjIxNjdDMTMuOTI3NSAzNS4yODIyIDE0LjAyOTUgMzUuMzc4OCAxNC4xMDEyIDM1LjQ5NjhMMTYuMDY0NCAzOC43ODA4QzE2LjEzNjMgMzguOTAyNyAxNi4yMzgyIDM5LjAwNCAxNi4zNjA1IDM5LjA3NTJDMTYuNDgyNyAzOS4xNDYzIDE2LjYyMTIgMzkuMTg0OCAxNi43NjI3IDM5LjE4NzFDMTcuMDY0MyAzOS4xNzAzIDE3LjM3NjYgMzguOTc0MyAxNy41MDIgMzguNjk5NkwyMC44NTkyIDMxLjMyODdDMjAuODczNyAzMS4yOTY3IDIwLjg3OTYgMzEuMjYxNCAyMC44NzY0IDMxLjIyNjRDMjAuODczMiAzMS4xOTE0IDIwLjg2MSAzMS4xNTc5IDIwLjg0MDkgMzEuMTI5QzIwLjgyMDkgMzEuMTAwMSAyMC43OTM3IDMxLjA3NyAyMC43NjIgMzEuMDYxOEMyMC43MzAzIDMxLjA0NjYgMjAuNjk1MiAzMS4wMzk5IDIwLjY2MDEgMzEuMDQyM1YzMS4wNDIzWiIgZmlsbD0iIzA0N0ZGRSIvPgo8cGF0aCBkPSJNMzEuMjU1MSAzMy45MDAyTDI3LjYyMjcgMjcuMzQwOEMyNy42MDU5IDI3LjMxMSAyNy41ODE5IDI3LjI4NiAyNy41NTI5IDI3LjI2OEMyNy41MjM4IDI3LjI0OTkgMjcuNDkwNyAyNy4yMzk1IDI3LjQ1NjYgMjcuMjM3N0MyNy40MjI1IDI3LjIzNTkgMjcuMzg4NCAyNy4yNDI3IDI3LjM1NzYgMjcuMjU3NUMyNy4zMjY4IDI3LjI3MjQgMjcuMzAwMyAyNy4yOTQ3IDI3LjI4MDQgMjcuMzIyNUMyNi4yODE1IDI4LjcyMjEgMjQuOTAxMSAyOS44MDQ4IDIzLjMwMzggMzAuNDQxNUMyMy4xMDc2IDMwLjUxODggMjIuOTQ5IDMwLjY2ODkgMjIuODYwOSAzMC44NjA1TDIwLjk4OTIgMzQuOTc4OEMyMC45NjUxIDM1LjAzMTQgMjAuOTUyNiAzNS4wODg2IDIwLjk1MjYgMzUuMTQ2NEMyMC45NTI2IDM1LjIwNDIgMjAuOTY1MSAzNS4yNjE0IDIwLjk4OTIgMzUuMzE0TDIyLjUyNjMgMzguNjk1NUMyMi42NTA3IDM4Ljk3MDIgMjIuOTYyNSAzOS4xNzA4IDIzLjI2MzYgMzkuMTg3NkMyMy40MDUyIDM5LjE4NDEgMjMuNTQzNSAzOS4xNDQzIDIzLjY2NTMgMzkuMDcyMUMyMy43ODcxIDM4Ljk5OTkgMjMuODg4MyAzOC44OTc3IDIzLjk1OTMgMzguNzc1MkwyNS45MTU5IDM1LjQ5NThDMjYuMDYyNyAzNS4yNDk1IDI2LjMyODggMzUuMTIzNSAyNi42MTU3IDM1LjEyNTFIMzAuNjE1N0MzMC45NTQ1IDM1LjEyNTEgMzEuMjEwOSAzNC45NDgzIDMxLjMyNjcgMzQuNjE3MkMzMS4zNjc0IDM0LjQ5OTcgMzEuMzgyIDM0LjM3NDcgMzEuMzY5NyAzNC4yNTA5QzMxLjM1NzMgMzQuMTI3MSAzMS4zMTgyIDM0LjAwNzQgMzEuMjU1MSAzMy45MDAyVjMzLjkwMDJaIiBmaWxsPSIjMDQ3RkZFIi8+CjxwYXRoIGQ9Ik0yMC4wMTMxIDI0LjU2NEMyMS4zNTk2IDI0LjU2NCAyMi40NTExIDIzLjQ3MjcgMjIuNDUxMSAyMi4xMjY1QzIyLjQ1MTEgMjAuNzgwMyAyMS4zNTk2IDE5LjY4OSAyMC4wMTMxIDE5LjY4OUMxOC42NjY2IDE5LjY4OSAxNy41NzUxIDIwLjc4MDMgMTcuNTc1MSAyMi4xMjY1QzE3LjU3NTEgMjMuNDcyNyAxOC42NjY2IDI0LjU2NCAyMC4wMTMxIDI0LjU2NFoiIGZpbGw9IiMwNDdGRkUiLz4KPHBhdGggZD0iTTIwLjAxMzEgMTQuODEyNkMxNS45ODAxIDE0LjgxMjYgMTIuNzAwNyAxOC4wOTI1IDEyLjcwMDcgMjIuMTI1MUMxMi43MDA3IDI2LjE1NzYgMTUuOTgxNiAyOS40Mzc2IDIwLjAxMzEgMjkuNDM3NkMyNC4wNDQ3IDI5LjQzNzYgMjcuMzI1NiAyNi4xNTcxIDI3LjMyNTYgMjIuMTI1MUMyNy4zMjU2IDE4LjA5MyAyNC4wNDU3IDE0LjgxMjYgMjAuMDEzMSAxNC44MTI2Wk0yMC4wMTMxIDI2LjE4NzZDMTkuMjA5NyAyNi4xODc2IDE4LjQyNDIgMjUuOTQ5MyAxNy43NTYxIDI1LjUwMjlDMTcuMDg4MSAyNS4wNTY1IDE2LjU2NzQgMjQuNDIyIDE2LjI1OTkgMjMuNjc5N0MxNS45NTI0IDIyLjkzNzQgMTUuODcyIDIyLjEyMDYgMTYuMDI4NyAyMS4zMzI1QzE2LjE4NTUgMjAuNTQ0NSAxNi41NzI0IDE5LjgyMDYgMTcuMTQwNSAxOS4yNTI0QzE3LjcwODcgMTguNjg0MyAxOC40MzI1IDE4LjI5NzQgMTkuMjIwNiAxOC4xNDA2QzIwLjAwODYgMTcuOTgzOSAyMC44MjU1IDE4LjA2NDMgMjEuNTY3OCAxOC4zNzE4QzIyLjMxMDEgMTguNjc5MyAyMi45NDQ2IDE5LjIgMjMuMzkxIDE5Ljg2ODFDMjMuODM3NCAyMC41MzYxIDI0LjA3NTYgMjEuMzIxNiAyNC4wNzU2IDIyLjEyNTFDMjQuMDc0MyAyMy4yMDIxIDIzLjY0NTkgMjQuMjM0NiAyMi44ODQzIDI0Ljk5NjJDMjIuMTIyNyAyNS43NTc4IDIxLjA5MDIgMjYuMTg2MiAyMC4wMTMxIDI2LjE4NzZWMjYuMTg3NloiIGZpbGw9IiMwNDdGRkUiLz4KPC9zdmc+Cg==",i="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik05LjA2OTgxIDExLjM2MzFDMTAuNTU1OCA3LjQ4NDcgMTQuMzE5IDMuNzUgMjAgMy43NUMyNi4xMjAzIDMuNzUgMzEuMjUzNyA4LjEzMTkzIDMyLjM2MjcgMTUuMTA3NUMzMy45NTQ4IDE1LjM0NTMgMzUuNjMzMSAxNS45NDc4IDM3LjAxOTEgMTcuMDA3NkMzOC43NTQzIDE4LjMzNDYgNDAgMjAuMzYzNyA0MCAyMy4xMjVDNDAgMjcuNzU0MiAzNi4wNDk5IDMwLjkwNjggMzEuNjk0NSAzMS4wMDM3TDMxLjYzODkgMjguNTA0M0MzNC45Mjg1IDI4LjQzMTEgMzcuNSAyNi4xMTk5IDM3LjUgMjMuMTI1QzM3LjUgMjEuMjEyOSAzNi42NzU0IDE5Ljg5MiAzNS41MDA0IDE4Ljk5MzVDMzQuMjg1MiAxOC4wNjQyIDMyLjY2NzQgMTcuNTc1NSAzMS4xODUgMTcuNDk4M0MzMC41NjgxIDE3LjQ2NjIgMzAuMDY3MSAxNi45ODgyIDMwLjAwNjEgMTYuMzczNUMyOS4zNjgyIDkuOTQ4MDEgMjQuOTkzIDYuMjUgMjAgNi4yNUMxNS4yNzY2IDYuMjUgMTIuMjEgOS41MzQ2MyAxMS4xOTU4IDEyLjg2NDJDMTEuMDQ4OCAxMy4zNDY3IDEwLjYyNjIgMTMuNjkzNiAxMC4xMjQ0IDEzLjc0MzhDNS45MjA1IDE0LjE2NDIgMi41IDE3LjAzODggMi41IDIxLjU5NjJDMi41IDI1LjM0ODMgNS4yNTQwNyAyOC41MDQgOC4zMzMzNCAyOC41MDRWMzEuMDA0QzMuNDk1NjYgMzEuMDA0IDkuNTM2NzRlLTA3IDI2LjMxODMgOS41MzY3NGUtMDcgMjEuNTk2MkM5LjUzNjc0ZS0wNyAxNS43ODQ3IDQuMjI1OTIgMTIuMTY1NSA5LjA2OTgxIDExLjM2MzFaIiBmaWxsPSIjMEYyNkFBIi8+CjxwYXRoIGQ9Ik0yOC4yNSAyNS43NUMyOC4yNSAyNy4xMzA3IDI3LjEzMDcgMjguMjUgMjUuNzUgMjguMjVDMjQuMzY5MyAyOC4yNSAyMy4yNSAyNy4xMzA3IDIzLjI1IDI1Ljc1QzIzLjI1IDI0LjM2OTMgMjQuMzY5MyAyMy4yNSAyNS43NSAyMy4yNUMyNy4xMzA3IDIzLjI1IDI4LjI1IDI0LjM2OTMgMjguMjUgMjUuNzVaIiBzdHJva2U9IiMwNDdGRkUiIHN0cm9rZS13aWR0aD0iMi41IiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiLz4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0xMy43NSAyN0MxNC40NDA0IDI3IDE1IDI2LjQ0MDQgMTUgMjUuNzVDMTUgMjUuMDU5NiAxNC40NDA0IDI0LjUgMTMuNzUgMjQuNUMxMy4wNTk2IDI0LjUgMTIuNSAyNS4wNTk2IDEyLjUgMjUuNzVDMTIuNSAyNi40NDA0IDEzLjA1OTYgMjcgMTMuNzUgMjdaTTE3LjUgMjUuNzVDMTcuNSAyNy44MjExIDE1LjgyMTEgMjkuNSAxMy43NSAyOS41QzExLjY3ODkgMjkuNSAxMCAyNy44MjExIDEwIDI1Ljc1QzEwIDIzLjY3ODkgMTEuNjc4OSAyMiAxMy43NSAyMkMxNS44MjExIDIyIDE3LjUgMjMuNjc4OSAxNy41IDI1Ljc1WiIgZmlsbD0iIzA0N0ZGRSIvPgo8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTIyLjc1IDE3QzIzLjQ0MDQgMTcgMjQgMTYuNDQwNCAyNCAxNS43NUMyNCAxNS4wNTk2IDIzLjQ0MDQgMTQuNSAyMi43NSAxNC41QzIyLjA1OTYgMTQuNSAyMS41IDE1LjA1OTYgMjEuNSAxNS43NUMyMS41IDE2LjQ0MDQgMjIuMDU5NiAxNyAyMi43NSAxN1pNMjYuNSAxNS43NUMyNi41IDE3LjgyMTEgMjQuODIxMSAxOS41IDIyLjc1IDE5LjVDMjAuNjc4OSAxOS41IDE5IDE3LjgyMTEgMTkgMTUuNzVDMTkgMTMuNjc4OSAyMC42Nzg5IDEyIDIyLjc1IDEyQzI0LjgyMTEgMTIgMjYuNSAxMy42Nzg5IDI2LjUgMTUuNzVaIiBmaWxsPSIjMDQ3RkZFIi8+CjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNMjIuNzUgMzdDMjMuNDQwNCAzNyAyNCAzNi40NDA0IDI0IDM1Ljc1QzI0IDM1LjA1OTYgMjMuNDQwNCAzNC41IDIyLjc1IDM0LjVDMjIuMDU5NiAzNC41IDIxLjUgMzUuMDU5NiAyMS41IDM1Ljc1QzIxLjUgMzYuNDQwNCAyMi4wNTk2IDM3IDIyLjc1IDM3Wk0yNi41IDM1Ljc1QzI2LjUgMzcuODIxMSAyNC44MjExIDM5LjUgMjIuNzUgMzkuNUMyMC42Nzg5IDM5LjUgMTkgMzcuODIxMSAxOSAzNS43NUMxOSAzMy42Nzg5IDIwLjY3ODkgMzIgMjIuNzUgMzJDMjQuODIxMSAzMiAyNi41IDMzLjY3ODkgMjYuNSAzNS43NVoiIGZpbGw9IiMwNDdGRkUiLz4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0yMyAyN0gxNlYyNC41SDIzVjI3WiIgZmlsbD0iIzA0N0ZGRSIvPgo8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTIwIDM1TDE0IDI5TDE1Ljc2NzggMjcuMjMyMkwyMS43Njc4IDMzLjIzMjJMMjAgMzVaIiBmaWxsPSIjMDQ3RkZFIi8+CjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNMTUgMjNMMjAgMTdMMjEuOTIwNiAxOC42MDA1TDE2LjkyMDYgMjQuNjAwNUwxNSAyM1oiIGZpbGw9IiMwNDdGRkUiLz4KPC9zdmc+Cg==",g=t(82397),l=t(54768),y=t(49419),w=t(4382);var A={name:"okd5w0",styles:"font-size:1.75rem;line-height:2.188rem"},z={name:"19rdciu",styles:"@media (max-width: 768px){font-size:1.75rem;}font-size:2rem"},c={name:"8zzge8",styles:"background-color:#f3f8ff"},o=function(M){var j=M.location,t=(0,u.K2)("2257634238");return(0,w.tZ)(N.Z,{location:j,pageName:"CNAPP",title:"CNAPP: Cloud-Native Application Security and Compliance Solution - Cyscale",description:"Protect your cloud-native applications with CNAPP. Ensure security and compliance with our all-in-one solution for multi-cloud environments. Start today!"},(0,w.tZ)("div",{className:"bg-cnapp pt-8"},(0,w.tZ)(I.W2,null,(0,w.tZ)("div",{className:"py-16 md:py-24 lg:pt-24 lg:pb-16"},(0,w.tZ)(I.X2,null,(0,w.tZ)("div",{className:"col-span-12 lg:col-span-6 order-last lg:order-first"},(0,w.tZ)("div",{className:"lg:mt-16 pt-4 max-w-xl mx-auto lg:mx-0"},(0,w.tZ)("h1",{className:"text-left text-blue leading-normal lg:leading-normal mb-16 font-montserrat font-bold",css:z},"CNAPP: Robust ",(0,w.tZ)("br",null)," Cloud-Native Application Protection Platform"),(0,w.tZ)("p",{className:"text-left text-base lg:text-lg mb-8 leading-relaxed font-bold"},"Achieve true cloud-native transformation with Cyscale."),(0,w.tZ)("p",{className:"text-left text-base lg:text-lg mb-2 leading-relaxed"},"Get maximum cloud native security with our ultimate CNAPP solution. Protect your entire stack, VMs, containers, and serverless, on any cloud environment and confidently accelerate innovation."),(0,w.tZ)("div",{className:"flex mt-8 justify-start"},(0,w.tZ)(u.rU,{to:"/free-trial"},(0,w.tZ)(a.Z,{text:"Start Free Trial"})),(0,w.tZ)(u.rU,{to:"/request-demo",className:"ml-4"},(0,w.tZ)(L.Z,{text:"Request Demo"}))))))))),(0,w.tZ)(I.W2,null,(0,w.tZ)("div",{className:"py-8 md:py-12 lg:py-20"},(0,w.tZ)("div",{className:"sm:grid sm:grid-cols-12 sm:gap-12"},(0,w.tZ)("div",{className:"col-span-12 lg:col-span-6"},(0,w.tZ)("div",{className:"mx-auto lg:mx-0 max-w-xl lg:max-w-md"},(0,w.tZ)("h2",{className:"font-bold text-primary leading-normal border-title-partly font-montserrat lg:mt-3",css:A},"Unlock the power of our CNAPP platform with its ",(0,w.tZ)("br",null)," key features"))),(0,w.tZ)("div",{className:"col-span-12 lg:col-span-6 mt-8 lg:mt-0 sm:mt-0"},(0,w.tZ)("div",{className:"mx-auto max-w-xl lg:mx-0 lg:max-w-2xl"},(0,w.tZ)(D.G,{image:t.dashboard.childImageSharp.gatsbyImageData,alt:"Dashboard view"})))))),(0,w.tZ)(I.W2,null,(0,w.tZ)(I.X2,{className:"mt-16 gap-0 lg:gap-8"},(0,w.tZ)("div",{className:"col-span-12 lg:col-span-3 mx-auto max-w-xl lg:max-w-lg lg:mx-0"},(0,w.tZ)("img",{src:e,alt:""}),(0,w.tZ)("h2",{className:"font-montserrat text-base font-bold text-blue mt-3"},"CSPM"),(0,w.tZ)("p",{className:"text-sm mt-4 text-gray"},"Gain continuous visibility and comprehensive Cloud Security Posture Management over multi-cloud environments to identify misconfigurations, ultimately securing your cloud from data breaches and leaks. Scan, monitor, and remediate across AWS, Azure, Google Cloud, Alibaba Cloud to ensure the best security for your cloud infrastructure.")),(0,w.tZ)("div",{className:"col-span-12 lg:col-span-3 mx-auto max-w-xl lg:max-w-lg  lg:mx-0"},(0,w.tZ)("img",{src:i,alt:""}),(0,w.tZ)("h2",{className:"font-montserrat text-base font-bold text-blue mt-3"},"Contextual Analysis"),(0,w.tZ)("p",{className:"text-sm mt-4 text-gray"},"Cloud asset misconfigurations are analyzed in context, automatically correlating issues that affect compute, data storage and identity assets, determining their real impact on data security and helping you prioritize remediation efforts in the most effective way.")),(0,w.tZ)("div",{className:"col-span-12 lg:col-span-3 mx-auto max-w-xl lg:max-w-lg  lg:mx-0 mt-8 lg:mt-0"},(0,w.tZ)("img",{src:s,alt:"",height:40,width:40}),(0,w.tZ)("h2",{className:"font-montserrat text-base font-bold text-blue mt-3"},"Compliance and Governance"),(0,w.tZ)("p",{className:"text-sm mt-4 text-gray"},"Enable your organization to adhere to industry and regulatory standards, such as PCI-DSS, HIPAA, SOC 2 and many others. Auditing and reporting capabilities will help with internal and external audits.")),(0,w.tZ)("div",{className:"col-span-12 lg:col-span-3 mx-auto max-w-xl lg:max-w-lg  lg:mx-0 mt-8 lg:mt-0"},(0,w.tZ)("img",{src:s,alt:""}),(0,w.tZ)("h2",{className:"font-montserrat text-base font-bold text-blue mt-3"},"Data Security"),(0,w.tZ)("p",{className:"text-sm mt-4 text-gray"},"Keep track of your organization's security posture with Cyscale's inventory of cloud data stores and their contextual security analysis tools. Using these security tools, you can protect your most important data assets, avoid breaches, and be prepared for audits."))),(0,w.tZ)(I.X2,{className:"my-16 gap-0 lg:gap-8"},(0,w.tZ)("div",{className:"col-span-12 lg:col-span-3 mx-auto max-w-xl lg:max-w-lg  lg:mx-0"},(0,w.tZ)("img",{src:e,alt:""}),(0,w.tZ)("h2",{className:"font-montserrat text-base font-bold text-blue mt-3"},"CIEM"),(0,w.tZ)("p",{className:"text-sm mt-4 text-gray"},"Easily perform access reviews and keep track of users, access levels, effective permissions, as well as IAM asset misconfigurations. Understand identities and permissions even in the most complex multi-cloud environments.")),(0,w.tZ)("div",{className:"col-span-12 lg:col-span-3 mx-auto max-w-xl lg:max-w-lg  lg:mx-0"},(0,w.tZ)("img",{src:i,alt:""}),(0,w.tZ)("h2",{className:"font-montserrat text-base font-bold text-blue mt-3"},"CWPP"),(0,w.tZ)("p",{className:"text-sm mt-4 text-gray"},"A contextual analysis of cloud misconfigurations and vulnerabilities in instances, images, containers and functions helps security teams guard your entire application stack on any cloud environment.")),(0,w.tZ)("div",{className:"col-span-12 lg:col-span-3 mx-auto max-w-xl lg:max-w-lg  lg:mx-0 mt-8 lg:mt-0"},(0,w.tZ)("img",{src:"data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik05LjA2OTgxIDExLjM2MzFDMTAuNTU1OCA3LjQ4NDcgMTQuMzE4OSAzLjc1IDIwIDMuNzVDMjYuMTIwMyAzLjc1IDMxLjI1MzcgOC4xMzE5MyAzMi4zNjI3IDE1LjEwNzVDMzMuOTU0OCAxNS4zNDUzIDM1LjYzMzEgMTUuOTQ3OCAzNy4wMTkxIDE3LjAwNzZDMzguNzU0MyAxOC4zMzQ2IDQwIDIwLjM2MzcgNDAgMjMuMTI1QzQwIDI3Ljc1NDIgMzYuMDQ5OSAzMC45MDY4IDMxLjY5NDUgMzEuMDAzN0wzMS42Mzg5IDI4LjUwNDNDMzQuOTI4NSAyOC40MzExIDM3LjUgMjYuMTE5OSAzNy41IDIzLjEyNUMzNy41IDIxLjIxMjkgMzYuNjc1NCAxOS44OTIgMzUuNTAwNCAxOC45OTM1QzM0LjI4NTIgMTguMDY0MiAzMi42Njc0IDE3LjU3NTUgMzEuMTg1IDE3LjQ5ODNDMzAuNTY4MSAxNy40NjYyIDMwLjA2NzEgMTYuOTg4MiAzMC4wMDYxIDE2LjM3MzVDMjkuMzY4MiA5Ljk0ODAxIDI0Ljk5MyA2LjI1IDIwIDYuMjVDMTUuMjc2NiA2LjI1IDEyLjIxIDkuNTM0NjMgMTEuMTk1OCAxMi44NjQyQzExLjA0ODggMTMuMzQ2NyAxMC42MjYyIDEzLjY5MzYgMTAuMTI0NCAxMy43NDM4QzUuOTIwNSAxNC4xNjQyIDIuNSAxNy4wMzg4IDIuNSAyMS41OTYyQzIuNSAyNS4zNDgzIDUuMjU0MDcgMjguNTA0IDguMzMzMzMgMjguNTA0VjMxLjAwNEMzLjQ5NTY2IDMxLjAwNCAwIDI2LjMxODMgMCAyMS41OTYyQzAgMTUuNzg0NyA0LjIyNTkyIDEyLjE2NTUgOS4wNjk4MSAxMS4zNjMxWiIgZmlsbD0iIzBGMjZBQSIvPgo8cmVjdCB4PSIxMSIgeT0iMzAiIHdpZHRoPSI3IiBoZWlnaHQ9IjciIGZpbGw9IiMwNDdGRkUiLz4KPHJlY3QgeD0iMTEiIHk9IjE5IiB3aWR0aD0iNyIgaGVpZ2h0PSI3IiBmaWxsPSIjMDQ3RkZFIi8+CjxyZWN0IHg9IjIyIiB5PSIzMCIgd2lkdGg9IjciIGhlaWdodD0iNyIgZmlsbD0iIzA0N0ZGRSIvPgo8cmVjdCB4PSIyNS41IiB5PSIxNy41NTAzIiB3aWR0aD0iNyIgaGVpZ2h0PSI3IiB0cmFuc2Zvcm09InJvdGF0ZSg0NSAyNS41IDE3LjU1MDMpIiBmaWxsPSIjMDQ3RkZFIi8+Cjwvc3ZnPgo=",alt:"",height:40,width:40}),(0,w.tZ)("h2",{className:"font-montserrat text-base font-bold text-blue mt-3"},"Container Security"),(0,w.tZ)("p",{className:"text-sm mt-4 text-gray"},"Get visibility over container-based applications and corresponding cloud infrastructure. Know where containers are running in the cloud, complete with a contextual analysis of vulnerabilities, misconfigurations, networking and access.")),(0,w.tZ)("div",{className:"col-span-12 lg:col-span-3 mx-auto max-w-xl lg:max-w-lg  lg:mx-0 mt-8 lg:mt-0"},(0,w.tZ)("img",{src:"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI3LjIuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHZpZXdCb3g9IjAgMCA0MCA0MCIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNDAgNDA7IiB4bWw6c3BhY2U9InByZXNlcnZlIj4KPHN0eWxlIHR5cGU9InRleHQvY3NzIj4KCS5zdDB7ZmlsbDojMEYyNkFBO30KCS5zdDF7ZmlsbDojMDQ3RkZFO30KPC9zdHlsZT4KPGc+Cgk8cGF0aCBjbGFzcz0ic3QwIiBkPSJNMTIuOSwzOC43Yy0wLjYsMC0xLjEtMC4xLTEuNi0wLjRjLTAuNS0wLjItMC45LTAuNi0xLjMtMUwxLjEsMjYuM0MxLDI2LjIsMC45LDI2LjEsMC45LDI2CgkJYy0wLjMtMC40LTAuNS0wLjktMC41LTEuNGMtMC4xLTAuNS0wLjEtMSwwLTEuNUwzLjUsOS4zYzAuMS0wLjUsMC40LTEuMSwwLjctMS41QzQuNiw3LjQsNSw3LDUuNSw2LjhsMTIuOC02LjIKCQljMC40LTAuMiwwLjktMC4zLDEuNC0wLjRsMCwwbDAsMGMwLDAsMCwwLDAsMGMwLjYsMCwxLjIsMC4xLDEuOCwwLjRsMTIuOCw2LjJjMC41LDAuMiwwLjksMC42LDEuMywxYzAuMywwLjQsMC42LDAuOSwwLjcsMS41CgkJbDMuMiwxMy44YzAuMSwwLjUsMC4xLDEuMSwwLDEuNmMtMC4xLDAuNS0wLjQsMS4xLTAuNywxLjVMMzAsMzcuM2MtMC4zLDAuNC0wLjgsMC44LTEuMywxYy0wLjUsMC4yLTEsMC40LTEuNiwwLjRMMTIuOSwzOC43egoJCSBNMjAsMi44QzIwLDIuOCwyMCwyLjgsMjAsMi44TDIwLDIuOGMtMC4yLDAtMC40LDAtMC41LDAuMUw2LjYsOS4xQzYuNSw5LjEsNi4zLDkuMiw2LjIsOS40QzYuMSw5LjUsNiw5LjcsNiw5LjlMMi44LDIzLjcKCQljMCwwLjIsMCwwLjMsMCwwLjVzMC4xLDAuMywwLjIsMC40YzAsMCwwLDAuMSwwLjEsMC4xbDguOSwxMS4xYzAuMSwwLjEsMC4zLDAuMywwLjQsMC4zYzAuMiwwLjEsMC4zLDAuMSwwLjUsMC4xbDE0LjMsMAoJCWMwLjIsMCwwLjQsMCwwLjUtMC4xYzAuMi0wLjEsMC4zLTAuMiwwLjQtMC4zTDM3LDI0LjdjMC4xLTAuMSwwLjItMC4zLDAuMi0wLjVjMC0wLjIsMC0wLjMsMC0wLjVMMzQsOS45YzAtMC4yLTAuMS0wLjMtMC4yLTAuNQoJCWMtMC4xLTAuMS0wLjMtMC4zLTAuNC0wLjNMMjAuNSwyLjlDMjAuNCwyLjgsMjAuMiwyLjgsMjAsMi44eiIvPgo8L2c+CjxwYXRoIGNsYXNzPSJzdDEiIGQ9Ik0yMCw2LjJjLTAuNCwwLTAuOCwwLjQtMC44LDAuOWMwLDAsMCwwLDAsMGMwLDAuMSwwLDAuMSwwLDAuMmMwLDAuMywwLjEsMC41LDAuMSwwLjdjMC4xLDAuNSwwLjEsMSwwLjEsMS40CgljMCwwLjItMC4xLDAuMy0wLjIsMC40bDAsMC4zYy0wLjUsMC0wLjksMC4xLTEuNCwwLjJjLTIsMC41LTMuNywxLjUtNSwyLjljLTAuMS0wLjEtMC4yLTAuMi0wLjMtMC4yYy0wLjEsMC0wLjMsMC4xLTAuNSwwCgljLTAuMy0wLjItMC43LTAuNi0xLTAuOWMtMC4yLTAuMi0wLjMtMC40LTAuNS0wLjVjMCwwLTAuMS0wLjEtMC4yLTAuMWMtMC4yLTAuMS0wLjQtMC4yLTAuNS0wLjJjLTAuMiwwLTAuNSwwLjEtMC42LDAuMwoJYy0wLjMsMC4zLTAuMiwwLjgsMC4yLDEuMWMwLDAsMCwwLDAsMGMwLjEsMCwwLjEsMC4xLDAuMiwwLjFjMC4yLDAuMiwwLjQsMC4yLDAuNiwwLjRjMC41LDAuMywwLjgsMC41LDEuMSwwLjgKCWMwLjEsMC4xLDAuMSwwLjMsMC4yLDAuNGwwLjIsMC4yYy0xLjMsMi0xLjksNC40LTEuNiw3bC0wLjMsMC4xYy0wLjEsMC4xLTAuMiwwLjMtMC4zLDAuM2MtMC40LDAuMS0wLjgsMC4yLTEuNCwwLjIKCWMtMC4zLDAtMC41LDAtMC43LDAuMWMtMC4xLDAtMC4xLDAtMC4yLDBjMCwwLDAsMCwwLDBjMCwwLDAsMCwwLDBjLTAuNSwwLjEtMC43LDAuNS0wLjcsMC45YzAuMSwwLjQsMC41LDAuNywxLDAuNmMwLDAsMCwwLDAsMAoJYzAsMCwwLDAsMCwwYzAuMSwwLDAuMSwwLDAuMiwwYzAuMy0wLjEsMC41LTAuMiwwLjctMC4zYzAuNS0wLjIsMC45LTAuMywxLjMtMC40YzAuMiwwLDAuNCwwLjEsMC40LDAuMmwwLjMtMC4xCgljMC44LDIuNCwyLjQsNC4zLDQuNCw1LjZsLTAuMSwwLjNjMC4xLDAuMSwwLjEsMC4zLDAuMSwwLjRjLTAuMSwwLjQtMC40LDAuOC0wLjcsMS4zYy0wLjEsMC4yLTAuMywwLjQtMC40LDAuNgoJYzAsMC4xLTAuMSwwLjEtMC4xLDAuMmMtMC4yLDAuNC0wLjEsMC45LDAuMywxLjFjMC40LDAuMiwwLjksMCwxLjEtMC40YzAsMCwwLDAsMCwwYzAsMCwwLDAsMCwwYzAtMC4xLDAuMS0wLjEsMC4xLTAuMgoJYzAuMS0wLjMsMC4xLTAuNSwwLjItMC43YzAuMi0wLjUsMC4zLTEsMC42LTEuNGMwLjEtMC4xLDAuMi0wLjEsMC4zLTAuMmwwLjItMC4zYzEuOCwwLjcsMy44LDAuOSw1LjgsMC40YzAuNS0wLjEsMC45LTAuMiwxLjMtMC40CgljMCwwLjEsMC4xLDAuMywwLjIsMC4zYzAuMSwwLDAuMywwLjEsMC40LDAuMmMwLjIsMC40LDAuNCwwLjgsMC41LDEuM2MwLjEsMC4yLDAuMSwwLjUsMC4yLDAuN2MwLDAuMSwwLjEsMC4xLDAuMSwwLjIKCWMwLjIsMC40LDAuNywwLjYsMS4xLDAuNGMwLjQtMC4yLDAuNS0wLjcsMC4zLTEuMWMwLTAuMS0wLjEtMC4xLTAuMS0wLjJjLTAuMS0wLjItMC4zLTAuNC0wLjQtMC42Yy0wLjMtMC41LTAuNS0wLjgtMC43LTEuMgoJYy0wLjEtMC4yLDAtMC4zLDAuMS0wLjVjMCwwLTAuMS0wLjItMC4xLTAuM2MyLjEtMS4zLDMuNy0zLjMsNC40LTUuNmMwLjEsMCwwLjMsMCwwLjMsMC4xYzAuMS0wLjEsMC4yLTAuMiwwLjQtMC4yCgljMC40LDAuMSwwLjgsMC4yLDEuMywwLjRjMC4yLDAuMSwwLjQsMC4yLDAuNywwLjNjMC4xLDAsMC4xLDAsMC4yLDBjMCwwLDAsMCwwLDBjMCwwLDAsMCwwLDBjMC41LDAuMSwwLjktMC4yLDEtMC42CgljMC4xLTAuNC0wLjItMC44LTAuNy0wLjljLTAuMSwwLTAuMiwwLTAuMi0wLjFjLTAuMy0wLjEtMC41LDAtMC43LTAuMWMtMC41LTAuMS0xLTAuMS0xLjQtMC4yYy0wLjItMC4xLTAuMy0wLjMtMC4zLTAuM2wtMC4zLTAuMQoJYzAuMi0xLjIsMC4xLTIuNC0wLjItMy42Yy0wLjMtMS4yLTAuOC0yLjMtMS40LTMuM2MwLjEtMC4xLDAuMi0wLjIsMC4zLTAuMmMwLTAuMSwwLTAuMywwLjEtMC40YzAuMy0wLjMsMC43LTAuNSwxLjEtMC44CgljMC4yLTAuMSwwLjQtMC4yLDAuNi0wLjRjMCwwLDAuMS0wLjEsMC4yLTAuMWMwLjQtMC4zLDAuNS0wLjgsMC4yLTEuMWMtMC4zLTAuMy0wLjgtMC40LTEuMS0wLjFjLTAuMSwwLTAuMSwwLjEtMC4yLDAuMQoJYy0wLjIsMC4yLTAuMywwLjQtMC41LDAuNWMtMC40LDAuNC0wLjcsMC43LTEsMC45Yy0wLjEsMC4xLTAuNCwwLjEtMC41LDAuMWwtMC4zLDAuMmMtMS43LTEuOC0zLjktMi45LTYuNC0zLjFjMC0wLjEsMC0wLjMsMC0wLjMKCWMtMC4xLTAuMS0wLjItMC4yLTAuMy0wLjRjMC0wLjQsMC0wLjksMC4xLTEuNGMwLTAuMywwLjEtMC41LDAuMS0wLjdjMC0wLjEsMC0wLjIsMC0wLjJDMjAuOCw2LjYsMjAuNCw2LjIsMjAsNi4yeiBNMTksMTIuMmwtMC4yLDQKCWwwLDBjMCwwLjQtMC4zLDAuNy0wLjcsMC43Yy0wLjEsMC0wLjMsMC0wLjQtMC4xbDAsMGwtMy4zLTIuNGMxLTEsMi4zLTEuNywzLjgtMi4xQzE4LjUsMTIuMywxOC44LDEyLjIsMTksMTIuMnogTTIxLDEyLjIKCWMxLjcsMC4yLDMuNCwxLDQuNiwyLjJsLTMuMywyLjNsMCwwYy0wLjMsMC4yLTAuNywwLjItMC45LTAuMWMtMC4xLTAuMS0wLjEtMC4zLTAuMS0wLjRsMCwwTDIxLDEyLjJ6IE0xMy4yLDE1LjlsMywyLjdsMCwwCgljMC4zLDAuMiwwLjMsMC42LDAuMSwwLjljLTAuMSwwLjEtMC4yLDAuMi0wLjQsMC4ybDAsMEwxMi4xLDIxQzExLjksMTkuMiwxMi4zLDE3LjQsMTMuMiwxNS45eiBNMjYuOCwxNmMwLjQsMC43LDAuOCwxLjUsMSwyLjQKCWMwLjIsMC45LDAuMiwxLjcsMC4yLDIuNkwyNCwxOS44bDAsMGMtMC4zLTAuMS0wLjYtMC41LTAuNS0wLjhjMC0wLjEsMC4xLTAuMywwLjItMC40bDAsMEwyNi44LDE2eiBNMTkuNCwxOC45aDEuMmwwLjgsMUwyMS4xLDIxCglMMjAsMjEuNkwxOC45LDIxbC0wLjMtMS4yTDE5LjQsMTguOXogTTIzLjMsMjIuMmMwLjEsMCwwLjEsMCwwLjIsMGwwLDBsNCwwLjdjLTAuNiwxLjctMS43LDMuMS0zLjIsNGwtMS42LTMuOGwwLDAKCWMtMC4xLTAuMywwLTAuNywwLjMtMC45QzIzLjIsMjIuMiwyMy4zLDIyLjIsMjMuMywyMi4yeiBNMTYuNiwyMi4yYzAuMywwLDAuNiwwLjIsMC43LDAuNWMwLDAuMSwwLDAuMywwLDAuNGwwLDBsLTEuNSwzLjcKCWMtMS40LTAuOS0yLjYtMi4zLTMuMi00bDQtMC43bDAsMEMxNi41LDIyLjIsMTYuNiwyMi4yLDE2LjYsMjIuMnogTTIwLDIzLjhjMC4xLDAsMC4yLDAsMC4zLDAuMWMwLjEsMC4xLDAuMiwwLjIsMC4zLDAuM2gwbDIsMy41CgljLTAuMywwLjEtMC41LDAuMi0wLjgsMC4yYy0xLjUsMC4zLTMsMC4yLTQuMy0wLjJsMi0zLjVoMEMxOS41LDI0LDE5LjcsMjMuOCwyMCwyMy44eiIvPgo8L3N2Zz4K",alt:"",height:40,width:40}),(0,w.tZ)("h2",{className:"font-montserrat text-base font-bold text-blue mt-3"},"Kubernetes Security"),(0,w.tZ)("p",{className:"text-sm mt-4 text-gray"},"A complete inventory for your Kubernetes clusters, either managed or unmanaged, and continuous scanning for vulnerabilities in the cluster components and container images that are used.")))),(0,w.tZ)("div",{css:c},(0,w.tZ)(I.W2,null,(0,w.tZ)("div",{className:"py-8 md:py-12 lg:py-20"},(0,w.tZ)("div",{className:"sm:grid sm:grid-cols-12 sm:gap-4"},(0,w.tZ)("div",{className:"col-span-12 lg:col-span-7 lg:pr-16 mt-8 sm:mt-0  hidden lg:block"},(0,w.tZ)("div",{className:"mx-auto max-w-xl lg:mx-0 lg:max-w-2xl"},(0,w.tZ)(D.G,{image:t.inventory.childImageSharp.gatsbyImageData,alt:"Inventory view",className:"shadow-lg"}))),(0,w.tZ)("div",{className:"col-span-12 lg:col-span-5"},(0,w.tZ)("div",{className:"mx-auto lg:mx-0 max-w-xl lg:max-w-lg"},(0,w.tZ)("h2",{className:" text-primary border-title-partly font-montserrat lg:mt-3",css:A},(0,w.tZ)("span",{className:"font-bold"},"Real-time Cloud Security"),(0,w.tZ)("br",null)," with Contextual Analysis"," ")),(0,w.tZ)("div",{className:"mx-auto lg:mx-0 max-w-xl lg:max-w-lg"},(0,w.tZ)("p",{className:"text-base text-gray pt-12 pb-2"},"Our CNAPP platform is designed to give you complete visibility and control over your cloud environment. By analyzing cloud configuration, workload, and identity, it identifies the most critical attack vectors that pose a threat to your business, rather than overwhelming you with numerous alerts for vulnerabilities, permissions, and exposed services."),(0,w.tZ)("p",{className:"text-base text-gray py-2"},"With our platform, you can prioritize and address the most significant risks, ensuring the security and integrity of your cloud infrastructure and applications."))),(0,w.tZ)("div",{className:"col-span-12 lg:col-span-7 mt-8 sm:mt-0 block lg:hidden"},(0,w.tZ)("div",{className:"mx-auto max-w-xl lg:mt-8 lg:mx-0 lg:max-w-2xl"},(0,w.tZ)(D.G,{image:t.inventory.childImageSharp.gatsbyImageData,alt:"Inventory view",className:"shadow-lg"}))))))),(0,w.tZ)("div",{className:"py-16"},(0,w.tZ)(I.W2,{id:"align-entities"},(0,w.tZ)("div",{className:"grid grid-cols-1 lg:grid-cols-3 gap-4"},(0,w.tZ)("div",{className:"col-span-1"},(0,w.tZ)("h2",{className:"font-semibold font-montserrat text-blue leading-normal lg:max-w-sm null sectionTitle new-line max-w-xl mx-auto",css:A},"Align teams & tasks",(0,w.tZ)("span",{className:"block w-full font-normal"},"Govern all cloud entities from a single dashboard")),(0,w.tZ)("p",{className:"leading-normal text-base max-w-xl mx-auto my-12 block lg:hidden"},"Consolidate all the key elements of cloud compliance in an easy-to-use dashboard. Replace cloud portals with our Cloud Platform - the hub for a sweeping overview of your"," ",(0,w.tZ)("br",{className:"hidden lg:block"}),(0,w.tZ)("a",{href:"/products/cloud-security-posture-management/",className:"text-base text-blue underline hover:no-underline hover:text-red"},"cloud security posture"),"."),(0,w.tZ)("p",{className:"max-w-xl text-base mx-auto leading-normal mb-12 block lg:hidden"},"Implement, manage, and monitor security policies and controls for single cloud and multi-cloud environments through reliable automation."),(0,w.tZ)("p",{className:"leading-normal text-base max-w-xl mx-auto block lg:hidden"},"Demonstrate compliance for multiple projects with read-only dashboard access or reports (CSV, PDF) you can share with internal stakeholders, prospects, or customers."),(0,w.tZ)("img",{src:g.Z,alt:"Govern all cloud entities from a single dashboard",className:"w-auto h-auto mt-8 mx-auto lg:mx-0"})),(0,w.tZ)("div",{className:"col-span-2 hidden lg:block"},(0,w.tZ)("p",{className:"leading-normal text-base max-w-xl lg:max-w-2xl mx-auto mb-24"},"Consolidate all the key elements of cloud compliance in an easy-to-use dashboard.",(0,w.tZ)("br",{className:"hidden lg:block"}),"Replace cloud portals with our Cloud Platform - the hub for a sweeping overview of your"," ",(0,w.tZ)("br",{className:"hidden lg:block"}),(0,w.tZ)("a",{href:"/products/cloud-security-posture-management/",className:"text-base text-blue underline hover:no-underline hover:text-red"},"cloud security posture"),"."),(0,w.tZ)("p",{className:"max-w-xl lg:max-w-2xl text-base mx-auto leading-normal mb-24"},"Implement, manage, and monitor security policies and controls for single cloud",(0,w.tZ)("br",{className:"hidden lg:block"}),"and multi-cloud environments through reliable automation."),(0,w.tZ)("p",{className:"max-w-xl lg:max-w-2xl text-base mx-auto leading-normal"},"Demonstrate compliance for multiple projects with read-only dashboard access or",(0,w.tZ)("br",{className:"hidden lg:block"})," reports (CSV, PDF) you can share with internal stakeholders, prospects, or customers."))))),(0,w.tZ)("div",{className:"bg-gradient-to-b from-selago to-white relative z-10",id:"confidence"},(0,w.tZ)("img",{src:l.Z,width:300,className:"hidden md:block absolute top-0 right-0 m-0 z-20",alt:""}),(0,w.tZ)(I.W2,null,(0,w.tZ)("div",{className:"py-8 md:py-12 lg:py-20"},(0,w.tZ)("div",{className:"max-w-xl mx-auto lg:mx-0 lg:max-w-sm mb-20"},(0,w.tZ)("h2",{className:"text-3xl font-bold text-primary leading-normal border-title-partly montserrat-font"},"100% Confidence with ",(0,w.tZ)("br",null)," your Cloud Compliance")),(0,w.tZ)("div",{className:"max-w-xl mx-auto lg:mx-0 lg:max-w-3xl"},(0,w.tZ)(I.X2,{className:"lg:gap-20"},(0,w.tZ)("div",{className:"col-span-12 lg:col-span-6"},(0,w.tZ)("p",{className:"leading-normal text-base text-gray mb-6"},(0,w.tZ)("strong",{className:"montserrat-font"},"Meet industry regulations"),(0,w.tZ)("br",null),"Protect sensitive data and comply with strict industry regulations in your organisation. Cyscale automatically runs all critical compliance checks and finds data at-risk.")),(0,w.tZ)("div",{className:"col-span-12 lg:col-span-6"},(0,w.tZ)("p",{className:"leading-normal text-base text-gray mb-6"},(0,w.tZ)("strong",{className:"montserrat-font"},"PCI-DSS, SOC 2, GDPR, and more"),(0,w.tZ)("br",null),"Cyscale offers a wide range of benchmarks and frameworks, including: CIS, ISO27001, PCI-DSS, NIST, SOC 2, GDPR.")),(0,w.tZ)("div",{className:"col-span-12 lg:col-span-6"},(0,w.tZ)("p",{className:"leading-normal text-base text-gray mb-6"},(0,w.tZ)("strong",{className:"montserrat-font"},"Built-in compliance templates"),(0,w.tZ)("br",null),"You can either use policy templates as a basis for your custom policies, or create them from scratch.")),(0,w.tZ)("div",{className:"col-span-12 lg:col-span-6"},(0,w.tZ)("p",{className:"leading-normal text-base text-gray mb-6"},(0,w.tZ)("strong",{className:"montserrat-font"},"500+ out-of-the-box security controls"),(0,w.tZ)("br",null),"Onboard teams in 30 minutes and coordinate efforts to apply 500+ out-of-the-box security controls."))))))),(0,w.tZ)(I.W2,null,(0,w.tZ)("div",{className:"md:pt-12 pb-24"},(0,w.tZ)("div",{className:"flex h-48 flex-col items-center"},(0,w.tZ)("img",{src:y.Z,alt:""}),(0,w.tZ)("h1",{className:"text-center px-2 mt-4 mb-2 montserrat-font font-semibold"},"Elevate your cloud security game with CNAPP"," "),(0,w.tZ)("p",null,"Start seeing value & saving money in minutes"),(0,w.tZ)("div",{className:"mt-10 w-auto inline-block"},(0,w.tZ)(u.rU,{className:"gradientBgBtn w-full block text-sm font-medium rounded text-white text-center py-4 px-12 hover:no-underline no-underline",to:"/request-demo"},"Request Live Demo"))))))}},49419:function(M,j){j.Z="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODYiIGhlaWdodD0iNjciIHZpZXdCb3g9IjAgMCA4NiA2NyIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik00Mi44MDk4IDE1LjQzNjNDMzcuMjAwOCAxNS40MzYzIDMyLjY3NDUgMTkuOTYyNiAzMi42NzQ1IDI1LjU3MTZWMjcuNzQ1N0gyNi42NDI4QzIyLjEyMDkgMjcuNzQ1NyAxOC40MzY0IDMxLjQzMDMgMTguNDM2NCAzNS45NTIyQzE4LjQzNjQgNDAuNDc0MSAyMi4xMjA5IDQ0LjE1ODcgMjYuNjQyOCA0NC4xNTg3SDU3LjExODJDNjEuNzMwNiA0NC4xNTg3IDY1LjMyNDcgNDAuNzcxOCA2NS4zMjQ3IDM2LjMzOEg2OC43NjFDNjguNzYxIDQyLjg0NTggNjMuNDQ3NCA0Ny41OTUgNTcuMTE4MiA0Ny41OTVIMjYuNjQyOEMyMC4yMjMxIDQ3LjU5NSAxNSA0Mi4zNzIgMTUgMzUuOTUyMkMxNSAyOS41MzI0IDIwLjIyMzEgMjQuMzA5NCAyNi42NDI4IDI0LjMwOTRIMjkuMjk1OEMyOS45MzA2IDE3LjM5NjQgMzUuNzI4NiAxMiA0Mi44MDk4IDEyQzUwLjMxNjcgMTIgNTYuMzgxNSAxOC4wNjQ3IDU2LjM4MTUgMjUuNTcxNlYyNy43ODFINTIuOTQ1MVYyNS41NzE2QzUyLjk0NTEgMTkuOTYyNiA0OC40MTg5IDE1LjQzNjMgNDIuODA5OCAxNS40MzYzWiIgZmlsbD0iYmxhY2siLz4KPHBhdGggZD0iTTc4LjY4NjQgMjcuNzQ3NFYyNC4zMTA1QzczLjIxNTYgMjQuMzEwNSA2OC43NjE3IDI4Ljc2NDQgNjguNzYxNyAzNC4yMzUySDcyLjE5ODVDNzIuMTk4NSAzMC42NTgxIDc1LjEwOTMgMjcuNzQ3NCA3OC42ODY0IDI3Ljc0NzRaIiBmaWxsPSJ1cmwoI3BhaW50MF9saW5lYXJfOTE5XzEwOTYpIi8+CjxwYXRoIGQ9Ik01OC44MDA4IDI0LjMxMDVWMjcuNzQ3NEM2Mi4zNzc5IDI3Ljc0NzQgNjUuMjg4NiAzMC42NTgxIDY1LjI4ODYgMzQuMjM1Mkg2OC43MjU0QzY4Ljc2MDUgMjguNzY0NCA2NC4yNzE2IDI0LjMxMDUgNTguODAwOCAyNC4zMTA1WiIgZmlsbD0idXJsKCNwYWludDFfbGluZWFyXzkxOV8xMDk2KSIvPgo8ZGVmcz4KPGxpbmVhckdyYWRpZW50IGlkPSJwYWludDBfbGluZWFyXzkxOV8xMDk2IiB4MT0iMzYuNDU4IiB5MT0iMjguNDA5MyIgeDI9Ijc3LjgzODgiIHkyPSIyOS4yNjY3IiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+CjxzdG9wIG9mZnNldD0iMC4xMDY5IiBzdG9wLWNvbG9yPSIjMEYyNkFBIi8+CjxzdG9wIG9mZnNldD0iMC44ODAzIiBzdG9wLWNvbG9yPSIjRkY0QTU2Ii8+CjwvbGluZWFyR3JhZGllbnQ+CjxsaW5lYXJHcmFkaWVudCBpZD0icGFpbnQxX2xpbmVhcl85MTlfMTA5NiIgeDE9IjU2LjMyNjciIHkxPSIyOS4yNjY3IiB4Mj0iNzcuODM3NiIgeTI9IjI5LjI2NjciIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIj4KPHN0b3Agc3RvcC1jb2xvcj0iI0JCNDA5OCIvPgo8c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiNGRjRBNTYiLz4KPC9saW5lYXJHcmFkaWVudD4KPC9kZWZzPgo8L3N2Zz4K"},54768:function(M,j){j.Z="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzc4IiBoZWlnaHQ9IjM4MiIgdmlld0JveD0iMCAwIDM3OCAzODIiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxwYXRoIGQ9Ik0zODIgMzgyTDM4MiAyNDkuMzA1QzI0My45NDQgMjQ5LjMwNSAxMzIuNjk1IDEzNi43MTYgMTMyLjY5NSAtNC4zOTk2MWUtMDVMLTQuMjcxNjZlLTA1IC0zLjQ5MjY4ZS0wNUMtMS45MTg1ZS0wNSAyMTAuNDM1IDE3MC4yMjUgMzgyIDM4MiAzODJaIiBmaWxsPSJ1cmwoI3BhaW50MF9saW5lYXJfMTAzNV8yMjE5KSIvPgo8ZGVmcz4KPGxpbmVhckdyYWRpZW50IGlkPSJwYWludDBfbGluZWFyXzEwMzVfMjIxOSIgeDE9Ijc4NS44MyIgeTE9IjQ2OS4wOTYiIHgyPSItMTI3LjkxNSIgeTI9Ii0wLjAwMDUwNjg0NyIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiPgo8c3RvcCBvZmZzZXQ9IjAuMTA2OSIgc3RvcC1jb2xvcj0iIzBGMjZBQSIvPgo8c3RvcCBvZmZzZXQ9IjAuODgwMyIgc3RvcC1jb2xvcj0iI0ZGNEE1NiIvPgo8L2xpbmVhckdyYWRpZW50Pgo8L2RlZnM+Cjwvc3ZnPgo="},82397:function(M,j,t){j.Z=t.p+"static/remote-work-heading-image-3cb8c5d50e228f8e56b9687b4c599d6d.png"}}]);
//# sourceMappingURL=component---src-pages-products-cnapp-js-d725f0f9734b8c9fdfb3.js.map