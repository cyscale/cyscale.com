"use strict";(self.webpackChunkcyscale_gatsby=self.webpackChunkcyscale_gatsby||[]).push([[1298,9531,268,3281],{33926:function(M,I,j){var N=j(67294),i=j(2900),g=j(82224),D=j(80414),z=j(26040),c=j(44669),u=j(62554),y=j(62319),e=j(38593),a=j(35533),n=j(95030),T=j(97233),Z=j(4382);I.Z=function(M){var I=M.children,j=M.title,l=M.description,L=M.pageName,x=M.location,A=M.banner;(0,c.Z)({pageName:L});var t=(0,N.useState)(!1),S=t[0],d=t[1],E=(0,a.Z)(),C=E.cookies,o=E.cookiesBanner,b=E.setCookiesBanner;return(0,Z.tZ)(y.Z,null,(0,Z.tZ)(z.Z.Provider,{value:{location:x}},(0,Z.tZ)(i.Z,{title:j,description:l,pageName:L,location:x,banner:A}),(0,Z.tZ)(D.Z.Provider,{value:{sticker:S,setSticker:d}},(0,Z.tZ)(T.Z,{pageName:L,location:x})),(0,Z.tZ)("main",null,I),(0,Z.tZ)(g.default,{pageUri:null==x?void 0:x.pathname,pageName:L}),!0!==Boolean(C[n.VB])&&(0,Z.tZ)(u.Z,{cookiesBanner:o,setCookiesBanner:b,pageName:L}),(0,Z.tZ)(e.Z,null)))}},6862:function(M,I,j){var N=j(67294);I.Z=function(){var M=(0,N.useState)(!0),I=M[0],j=M[1],i=(0,N.useRef)(null),g=(0,N.useRef)(null);return(0,N.useEffect)((function(){var M=function(){if(i.current&&g.current){var M=i.current.getBoundingClientRect(),I=g.current.getBoundingClientRect();j(I.top<=M.top)}};return window.addEventListener("scroll",M),function(){window.removeEventListener("scroll",M)}}),[]),{isTop:I,parentRef:i,stickyRef:g}}},53669:function(M,I){I.Z="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTIuMjUgMTJDMi4yNSA2LjYyMzkgNi42MjM5IDIuMjUgMTIgMi4yNUMxNy4zNzYxIDIuMjUgMjEuNzUgNi42MjM5IDIxLjc1IDEyQzIxLjc1IDE3LjM3NjEgMTcuMzc2MSAyMS43NSAxMiAyMS43NUM2LjYyMzkgMjEuNzUgMi4yNSAxNy4zNzYxIDIuMjUgMTJaIiBmaWxsPSIjQjRCN0JEIi8+CjxyZWN0IHg9IjYiIHk9IjExIiB3aWR0aD0iMTIiIGhlaWdodD0iMiIgZmlsbD0id2hpdGUiLz4KPC9zdmc+Cg=="},94063:function(M,I){I.Z="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjYiIGhlaWdodD0iNTEiIHZpZXdCb3g9IjAgMCA2NiA1MSIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0zMi44NTQxIDExLjc0ODVDMjguNTQ5NSAxMS43NDg1IDI1LjA3NTkgMTUuMTkzOSAyNS4wNzU5IDE5LjQ2MzVWMjEuMTE4NEgyMC40NDY5QzE2Ljk3NjYgMjEuMTE4NCAxNC4xNDg5IDIzLjkyMyAxNC4xNDg5IDI3LjM2NTFDMTQuMTQ4OSAzMC44MDcxIDE2Ljk3NjYgMzMuNjExOCAyMC40NDY5IDMzLjYxMThINDMuODM1QzQ3LjM3NDcgMzMuNjExOCA1MC4xMzMgMzEuMDMzOCA1MC4xMzMgMjcuNjU4N0g1Mi43NzAyQzUyLjc3MDIgMzIuNjEyNCA0OC42OTIzIDM2LjIyNzUgNDMuODM1IDM2LjIyNzVIMjAuNDQ2OUMxNS41MjAxIDM2LjIyNzUgMTEuNTExNyAzMi4yNTE4IDExLjUxMTcgMjcuMzY1MUMxMS41MTE3IDIyLjQ3ODQgMTUuNTIwMSAxOC41MDI2IDIwLjQ0NjkgMTguNTAyNkgyMi40ODI5QzIyLjk3MDEgMTMuMjQwNiAyNy40MTk3IDkuMTMyODEgMzIuODU0MSA5LjEzMjgxQzM4LjYxNTMgOS4xMzI4MSA0My4yNjk2IDEzLjc0OTMgNDMuMjY5NiAxOS40NjM1VjIxLjE0NTJINDAuNjMyNFYxOS40NjM1QzQwLjYzMjQgMTUuMTkzOSAzNy4xNTg4IDExLjc0ODUgMzIuODU0MSAxMS43NDg1WiIgZmlsbD0id2hpdGUiLz4KPHBhdGggZD0iTTYwLjM4NzEgMjEuMTJWMTguNTAzOUM1Ni4xODg2IDE4LjUwMzkgNTIuNzcwNSAyMS44OTQxIDUyLjc3MDUgMjYuMDU4NUg1NS40MDgxQzU1LjQwODEgMjMuMzM1NiA1Ny42NDE5IDIxLjEyIDYwLjM4NzEgMjEuMTJaIiBmaWxsPSJ1cmwoI3BhaW50MF9saW5lYXJfMjM3N181MDk4KSIvPgo8cGF0aCBkPSJNNDUuMTI2MiAxOC41MDM5VjIxLjEyQzQ3Ljg3MTQgMjEuMTIgNTAuMTA1MyAyMy4zMzU2IDUwLjEwNTMgMjYuMDU4NUg1Mi43NDI4QzUyLjc2OTcgMjEuODk0MSA0OS4zMjQ4IDE4LjUwMzkgNDUuMTI2MiAxOC41MDM5WiIgZmlsbD0idXJsKCNwYWludDFfbGluZWFyXzIzNzdfNTA5OCkiLz4KPGRlZnM+CjxsaW5lYXJHcmFkaWVudCBpZD0icGFpbnQwX2xpbmVhcl8yMzc3XzUwOTgiIHgxPSIyNy45NzkzIiB5MT0iMjEuNjIzOSIgeDI9IjU5LjczNjQiIHkyPSIyMi4yODczIiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+CjxzdG9wIG9mZnNldD0iMC4xMDY5IiBzdG9wLWNvbG9yPSIjMEYyNkFBIi8+CjxzdG9wIG9mZnNldD0iMC44ODAzIiBzdG9wLWNvbG9yPSIjRkY0QTU2Ii8+CjwvbGluZWFyR3JhZGllbnQ+CjxsaW5lYXJHcmFkaWVudCBpZD0icGFpbnQxX2xpbmVhcl8yMzc3XzUwOTgiIHgxPSI0My4yMjc1IiB5MT0iMjIuMjc2NSIgeDI9IjU5LjczNTkiIHkyPSIyMi4yNzY1IiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+CjxzdG9wIHN0b3AtY29sb3I9IiNCQjQwOTgiLz4KPHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjRkY0QTU2Ii8+CjwvbGluZWFyR3JhZGllbnQ+CjwvZGVmcz4KPC9zdmc+Cg=="},81356:function(M,I){I.Z="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzc4IiBoZWlnaHQ9IjM4MiIgdmlld0JveD0iMCAwIDM3OCAzODIiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxwYXRoIGQ9Ik0zODIgMzgyTDM4MiAyNDkuMzA1QzI0My45NDQgMjQ5LjMwNSAxMzIuNjk1IDEzNi43MTYgMTMyLjY5NSAtNC4zOTk2MWUtMDVMLTQuMjcxNjZlLTA1IC0zLjQ5MjY4ZS0wNUMtMS45MTg1ZS0wNSAyMTAuNDM1IDE3MC4yMjUgMzgyIDM4MiAzODJaIiBmaWxsPSJ1cmwoI3BhaW50MF9saW5lYXJfMTAzNV8yMjE5KSIvPgo8ZGVmcz4KPGxpbmVhckdyYWRpZW50IGlkPSJwYWludDBfbGluZWFyXzEwMzVfMjIxOSIgeDE9Ijc4NS44MyIgeTE9IjQ2OS4wOTYiIHgyPSItMTI3LjkxNSIgeTI9Ii0wLjAwMDUwNjg0NyIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiPgo8c3RvcCBvZmZzZXQ9IjAuMTA2OSIgc3RvcC1jb2xvcj0iIzBGMjZBQSIvPgo8c3RvcCBvZmZzZXQ9IjAuODgwMyIgc3RvcC1jb2xvcj0iI0ZGNEE1NiIvPgo8L2xpbmVhckdyYWRpZW50Pgo8L2RlZnM+Cjwvc3ZnPgo="},73554:function(M,I,j){I.Z=j.p+"static/remote-work-heading-image-3cb8c5d50e228f8e56b9687b4c599d6d.png"},98034:function(M,I){I.Z="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTEyIDIuMjVDNi42MjM5IDIuMjUgMi4yNSA2LjYyMzkgMi4yNSAxMkMyLjI1IDE3LjM3NjEgNi42MjM5IDIxLjc1IDEyIDIxLjc1QzE3LjM3NjEgMjEuNzUgMjEuNzUgMTcuMzc2MSAyMS43NSAxMkMyMS43NSA2LjYyMzkgMTcuMzc2MSAyLjI1IDEyIDIuMjVaTTEwLjIxODcgMTYuODkyOEw2LjQ0MDYyIDEyLjY5NDJMNy41NTU3OCAxMS42OTA2TDEwLjE4MDggMTQuNjA3MkwxNi40MDYyIDcuMTkzNDRMMTcuNTU2NiA4LjE1NjI1TDEwLjIxODcgMTYuODkyOFoiIGZpbGw9IiMzOEFGRjEiLz4KPC9zdmc+Cg=="}}]);
//# sourceMappingURL=component---src-pages-case-studies-smart-fintech-js-038ad9a5869b3da21d78.js.map