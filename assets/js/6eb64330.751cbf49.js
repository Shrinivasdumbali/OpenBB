"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[47179],{3905:(t,e,r)=>{r.d(e,{Zo:()=>p,kt:()=>f});var a=r(67294);function n(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function l(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,a)}return r}function i(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?l(Object(r),!0).forEach((function(e){n(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function o(t,e){if(null==t)return{};var r,a,n=function(t,e){if(null==t)return{};var r,a,n={},l=Object.keys(t);for(a=0;a<l.length;a++)r=l[a],e.indexOf(r)>=0||(n[r]=t[r]);return n}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)r=l[a],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(n[r]=t[r])}return n}var d=a.createContext({}),s=function(t){var e=a.useContext(d),r=e;return t&&(r="function"==typeof t?t(e):i(i({},e),t)),r},p=function(t){var e=s(t.components);return a.createElement(d.Provider,{value:e},t.children)},u="mdxType",c={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},m=a.forwardRef((function(t,e){var r=t.components,n=t.mdxType,l=t.originalType,d=t.parentName,p=o(t,["components","mdxType","originalType","parentName"]),u=s(r),m=n,f=u["".concat(d,".").concat(m)]||u[m]||c[m]||l;return r?a.createElement(f,i(i({ref:e},p),{},{components:r})):a.createElement(f,i({ref:e},p))}));function f(t,e){var r=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var l=r.length,i=new Array(l);i[0]=m;var o={};for(var d in e)hasOwnProperty.call(e,d)&&(o[d]=e[d]);o.originalType=t,o[u]="string"==typeof t?t:n,i[1]=o;for(var s=2;s<l;s++)i[s]=r[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},88828:(t,e,r)=>{r.d(e,{Z:()=>l});var a=r(67294),n=r(35742);function l(t){let{title:e}=t;return a.createElement(n.Z,null,a.createElement("title",null,e))}},70007:(t,e,r)=>{r.r(e),r.d(e,{assets:()=>s,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>d,toc:()=>p});var a=r(87462),n=(r(67294),r(3905)),l=r(88828);const i={title:"ftd",description:"Documentation and usage guide for the 'ftd' function that prints the latest fails-to-deliver data sourced from SEC. It allows users to specify date range, volume of data and offers raw data print.",keywords:["fails-to-deliver data","SEC source","ftd","datetime parameter","raw data","data print","data analysis"]},o=void 0,d={unversionedId:"terminal/reference/stocks/dps/ftd",id:"terminal/reference/stocks/dps/ftd",title:"ftd",description:"Documentation and usage guide for the 'ftd' function that prints the latest fails-to-deliver data sourced from SEC. It allows users to specify date range, volume of data and offers raw data print.",source:"@site/content/terminal/reference/stocks/dps/ftd.md",sourceDirName:"terminal/reference/stocks/dps",slug:"/terminal/reference/stocks/dps/ftd",permalink:"/terminal/reference/stocks/dps/ftd",draft:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/terminal/reference/stocks/dps/ftd.md",tags:[],version:"current",lastUpdatedBy:"montezdesousa",lastUpdatedAt:1707152475,formattedLastUpdatedAt:"Feb 5, 2024",frontMatter:{title:"ftd",description:"Documentation and usage guide for the 'ftd' function that prints the latest fails-to-deliver data sourced from SEC. It allows users to specify date range, volume of data and offers raw data print.",keywords:["fails-to-deliver data","SEC source","ftd","datetime parameter","raw data","data print","data analysis"]},sidebar:"tutorialSidebar",previous:{title:"dpotc",permalink:"/terminal/reference/stocks/dps/dpotc"},next:{title:"hsi",permalink:"/terminal/reference/stocks/dps/hsi"}},s={},p=[{value:"Usage",id:"usage",level:3},{value:"Parameters",id:"parameters",level:2}],u={toc:p},c="wrapper";function m(t){let{components:e,...r}=t;return(0,n.kt)(c,(0,a.Z)({},u,r,{components:e,mdxType:"MDXLayout"}),(0,n.kt)(l.Z,{title:"stocks /dps/ftd - Reference | OpenBB Terminal Docs",mdxType:"HeadTitle"}),(0,n.kt)("p",null,"Prints latest fails-to-deliver data. ","[Source: SEC]"),(0,n.kt)("h3",{id:"usage"},"Usage"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-python",metastring:"wordwrap",wordwrap:!0},"ftd [-s START] [-e END] [-n N_NUM] [--raw]\n")),(0,n.kt)("hr",null),(0,n.kt)("h2",{id:"parameters"},"Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Name"),(0,n.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"),(0,n.kt)("th",{parentName:"tr",align:null},"Default"),(0,n.kt)("th",{parentName:"tr",align:null},"Optional"),(0,n.kt)("th",{parentName:"tr",align:null},"Choices"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"start"),(0,n.kt)("td",{parentName:"tr",align:null},"-s  --start"),(0,n.kt)("td",{parentName:"tr",align:null},"start of datetime to see FTD"),(0,n.kt)("td",{parentName:"tr",align:null},"2023-12-07"),(0,n.kt)("td",{parentName:"tr",align:null},"True"),(0,n.kt)("td",{parentName:"tr",align:null},"None")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"end"),(0,n.kt)("td",{parentName:"tr",align:null},"-e  --end"),(0,n.kt)("td",{parentName:"tr",align:null},"end of datetime to see FTD"),(0,n.kt)("td",{parentName:"tr",align:null},"2024-02-05"),(0,n.kt)("td",{parentName:"tr",align:null},"True"),(0,n.kt)("td",{parentName:"tr",align:null},"None")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"n_num"),(0,n.kt)("td",{parentName:"tr",align:null},"-n  --num"),(0,n.kt)("td",{parentName:"tr",align:null},"number of latest fails-to-deliver being printed"),(0,n.kt)("td",{parentName:"tr",align:null},"0"),(0,n.kt)("td",{parentName:"tr",align:null},"True"),(0,n.kt)("td",{parentName:"tr",align:null},"None")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"raw"),(0,n.kt)("td",{parentName:"tr",align:null},"--raw"),(0,n.kt)("td",{parentName:"tr",align:null},"Print raw data."),(0,n.kt)("td",{parentName:"tr",align:null},"False"),(0,n.kt)("td",{parentName:"tr",align:null},"True"),(0,n.kt)("td",{parentName:"tr",align:null},"None")))),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/46355364/154075166-a5a84604-e8ec-46d5-a990-8ca3d928c662.png",alt:"ftd"})),(0,n.kt)("hr",null))}m.isMDXComponent=!0}}]);