"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[18714],{3905:(e,t,r)=>{r.d(t,{Zo:()=>i,kt:()=>d});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),s=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},i=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,i=c(e,["components","mdxType","originalType","parentName"]),m=s(r),f=a,d=m["".concat(p,".").concat(f)]||m[f]||u[f]||o;return r?n.createElement(d,l(l({ref:t},i),{},{components:r})):n.createElement(d,l({ref:t},i))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,l=new Array(o);l[0]=f;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c[m]="string"==typeof e?e:a,l[1]=c;for(var s=2;s<o;s++)l[s]=r[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},88828:(e,t,r)=>{r.d(t,{Z:()=>o});var n=r(67294),a=r(35742);function o(e){let{title:t}=e;return n.createElement(a.Z,null,n.createElement("title",null,t))}},34888:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>c,default:()=>f,frontMatter:()=>l,metadata:()=>p,toc:()=>i});var n=r(87462),a=(r(67294),r(3905)),o=r(88828);const l={title:"compfees",description:"Learn how to retrieve the Protocol fees over time for your projects using the compfees command. Understand its usage, parameters, and see examples.",keywords:["compfees command","Protocol fees","btc","eth","usage","parameters","examples"]},c=void 0,p={unversionedId:"bot/reference/telegram/crypto/compfees",id:"bot/reference/telegram/crypto/compfees",title:"compfees",description:"Learn how to retrieve the Protocol fees over time for your projects using the compfees command. Understand its usage, parameters, and see examples.",source:"@site/content/bot/reference/telegram/crypto/compfees.md",sourceDirName:"bot/reference/telegram/crypto",slug:"/bot/reference/telegram/crypto/compfees",permalink:"/bot/reference/telegram/crypto/compfees",draft:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/bot/reference/telegram/crypto/compfees.md",tags:[],version:"current",lastUpdatedBy:"montezdesousa",lastUpdatedAt:1707152475,formattedLastUpdatedAt:"Feb 5, 2024",frontMatter:{title:"compfees",description:"Learn how to retrieve the Protocol fees over time for your projects using the compfees command. Understand its usage, parameters, and see examples.",keywords:["compfees command","Protocol fees","btc","eth","usage","parameters","examples"]},sidebar:"tutorialSidebar",previous:{title:"bio",permalink:"/bot/reference/telegram/crypto/bio"},next:{title:"defi",permalink:"/bot/reference/telegram/crypto/defi"}},s={},i=[{value:"Usage",id:"usage",level:3},{value:"Parameters",id:"parameters",level:2},{value:"Examples",id:"examples",level:2}],m={toc:i},u="wrapper";function f(e){let{components:t,...r}=e;return(0,a.kt)(u,(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)(o.Z,{title:"crypto: compfees - Telegram Reference | OpenBB Bot Docs",mdxType:"HeadTitle"}),(0,a.kt)("p",null,"This command allows users to retrieve the Protocol fees over time for the given project."),(0,a.kt)("h3",{id:"usage"},"Usage"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python",metastring:"wordwrap",wordwrap:!0},"/compfees projects\n")),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"parameters"},"Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Name"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"),(0,a.kt)("th",{parentName:"tr",align:null},"Optional"),(0,a.kt)("th",{parentName:"tr",align:null},"Choices"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"projects"),(0,a.kt)("td",{parentName:"tr",align:null},"Comma separated list of protocols (e.g., btc,eth)"),(0,a.kt)("td",{parentName:"tr",align:null},"False"),(0,a.kt)("td",{parentName:"tr",align:null},"None")))),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"examples"},"Examples"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"/compfees doge\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"/compfees projects: btc,eth\n")),(0,a.kt)("hr",null))}f.isMDXComponent=!0}}]);