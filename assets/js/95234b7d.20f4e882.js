"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[3956],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>d});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),p=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},g=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),m=p(r),g=a,d=m["".concat(s,".").concat(g)]||m[g]||u[g]||l;return r?n.createElement(d,i(i({ref:t},c),{},{components:r})):n.createElement(d,i({ref:t},c))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,i=new Array(l);i[0]=g;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[m]="string"==typeof e?e:a,i[1]=o;for(var p=2;p<l;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}g.displayName="MDXCreateElement"},88828:(e,t,r)=>{r.d(t,{Z:()=>l});var n=r(67294),a=r(35742);function l(e){let{title:t}=e;return n.createElement(a.Z,null,n.createElement("title",null,t))}},63334:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>g,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var n=r(87462),a=(r(67294),r(3905)),l=r(88828);const i={title:"hma",description:"The page covers the Hull Moving Average (HMA) - a moving average that is more responsive to current price activity while maintaining smoothness. It explains the usage, parameters (such as n_length and n_offset) and gives a visual representation.",keywords:["Hull Moving Average","HMA","Moving Average","price activity","curve smoothness","n_length","n_offset","algorithm parameters"]},o=void 0,s={unversionedId:"terminal/reference/crypto/ta/hma",id:"terminal/reference/crypto/ta/hma",title:"hma",description:"The page covers the Hull Moving Average (HMA) - a moving average that is more responsive to current price activity while maintaining smoothness. It explains the usage, parameters (such as n_length and n_offset) and gives a visual representation.",source:"@site/content/terminal/reference/crypto/ta/hma.md",sourceDirName:"terminal/reference/crypto/ta",slug:"/terminal/reference/crypto/ta/hma",permalink:"/terminal/reference/crypto/ta/hma",draft:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/terminal/reference/crypto/ta/hma.md",tags:[],version:"current",lastUpdatedBy:"Danglewood",lastUpdatedAt:1710625624,formattedLastUpdatedAt:"Mar 16, 2024",frontMatter:{title:"hma",description:"The page covers the Hull Moving Average (HMA) - a moving average that is more responsive to current price activity while maintaining smoothness. It explains the usage, parameters (such as n_length and n_offset) and gives a visual representation.",keywords:["Hull Moving Average","HMA","Moving Average","price activity","curve smoothness","n_length","n_offset","algorithm parameters"]},sidebar:"tutorialSidebar",previous:{title:"fisher",permalink:"/terminal/reference/crypto/ta/fisher"},next:{title:"kc",permalink:"/terminal/reference/crypto/ta/kc"}},p={},c=[{value:"Usage",id:"usage",level:3},{value:"Parameters",id:"parameters",level:2}],m={toc:c},u="wrapper";function g(e){let{components:t,...r}=e;return(0,a.kt)(u,(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)(l.Z,{title:"crypto /ta/hma - Reference | OpenBB Terminal Docs",mdxType:"HeadTitle"}),(0,a.kt)("p",null,"The Hull Moving Average solves the age old dilemma of making a moving average more responsive to current price activity whilst maintaining curve smoothness. In fact the HMA almost eliminates lag altogether and manages to improve smoothing at the same time."),(0,a.kt)("h3",{id:"usage"},"Usage"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python",metastring:"wordwrap",wordwrap:!0},"hma [-l N_LENGTH] [-o N_OFFSET]\n")),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"parameters"},"Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Name"),(0,a.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"),(0,a.kt)("th",{parentName:"tr",align:null},"Default"),(0,a.kt)("th",{parentName:"tr",align:null},"Optional"),(0,a.kt)("th",{parentName:"tr",align:null},"Choices"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"n_length"),(0,a.kt)("td",{parentName:"tr",align:null},"-l  --length"),(0,a.kt)("td",{parentName:"tr",align:null},"Window lengths. Multiple values indicated as comma separated values."),(0,a.kt)("td",{parentName:"tr",align:null},"10, 20"),(0,a.kt)("td",{parentName:"tr",align:null},"True"),(0,a.kt)("td",{parentName:"tr",align:null},"None")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"n_offset"),(0,a.kt)("td",{parentName:"tr",align:null},"-o  --offset"),(0,a.kt)("td",{parentName:"tr",align:null},"offset"),(0,a.kt)("td",{parentName:"tr",align:null},"0"),(0,a.kt)("td",{parentName:"tr",align:null},"True"),(0,a.kt)("td",{parentName:"tr",align:null},"range(0, 100)")))),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/46355364/154310988-2e97c166-a3b9-49ae-abcd-2c1b37309072.png",alt:"hma"})),(0,a.kt)("hr",null))}g.isMDXComponent=!0}}]);