"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[20863],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>f});var n=r(67294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var d=n.createContext({}),c=function(e){var t=n.useContext(d),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},l=function(e){var t=c(e.components);return n.createElement(d.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,a=e.originalType,d=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),p=c(r),m=i,f=p["".concat(d,".").concat(m)]||p[m]||u[m]||a;return r?n.createElement(f,o(o({ref:t},l),{},{components:r})):n.createElement(f,o({ref:t},l))}));function f(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=r.length,o=new Array(a);o[0]=m;var s={};for(var d in t)hasOwnProperty.call(t,d)&&(s[d]=t[d]);s.originalType=e,s[p]="string"==typeof e?e:i,o[1]=s;for(var c=2;c<a;c++)o[c]=r[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},88828:(e,t,r)=>{r.d(t,{Z:()=>a});var n=r(67294),i=r(35742);function a(e){let{title:t}=e;return n.createElement(i.Z,null,n.createElement("title",null,t))}},98856:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>m,frontMatter:()=>o,metadata:()=>d,toc:()=>l});var n=r(87462),i=(r(67294),r(3905)),a=r(88828);const o={title:"insiders",description:"The Insiders page allows users to retrieve the 15 most recent insider transactions for a given stock, including the date of the transaction, the insider involved, the number of shares traded, the type of transaction, and the average price. You can run this command by entering '/dd insiders ticker:<ticker>'.",keywords:["insiders command","recent insider transactions","stock information","shares traded","transaction type","average price"]},s=void 0,d={unversionedId:"bot/reference/discord/duedilligence/insiders",id:"bot/reference/discord/duedilligence/insiders",title:"insiders",description:"The Insiders page allows users to retrieve the 15 most recent insider transactions for a given stock, including the date of the transaction, the insider involved, the number of shares traded, the type of transaction, and the average price. You can run this command by entering '/dd insiders ticker:<ticker>'.",source:"@site/content/bot/reference/discord/duedilligence/insiders.md",sourceDirName:"bot/reference/discord/duedilligence",slug:"/bot/reference/discord/duedilligence/insiders",permalink:"/bot/reference/discord/duedilligence/insiders",draft:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/bot/reference/discord/duedilligence/insiders.md",tags:[],version:"current",lastUpdatedBy:"montezdesousa",lastUpdatedAt:1709061006,formattedLastUpdatedAt:"Feb 27, 2024",frontMatter:{title:"insiders",description:"The Insiders page allows users to retrieve the 15 most recent insider transactions for a given stock, including the date of the transaction, the insider involved, the number of shares traded, the type of transaction, and the average price. You can run this command by entering '/dd insiders ticker:<ticker>'.",keywords:["insiders command","recent insider transactions","stock information","shares traded","transaction type","average price"]},sidebar:"tutorialSidebar",previous:{title:"financials",permalink:"/bot/reference/discord/duedilligence/financials"},next:{title:"instholdings",permalink:"/bot/reference/discord/duedilligence/instholdings"}},c={},l=[{value:"Usage",id:"usage",level:3},{value:"Parameters",id:"parameters",level:2},{value:"Examples",id:"examples",level:2}],p={toc:l},u="wrapper";function m(e){let{components:t,...r}=e;return(0,i.kt)(u,(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)(a.Z,{title:"duedilligence: insiders - Discord Reference | OpenBB Bot Docs",mdxType:"HeadTitle"}),(0,i.kt)("p",null,"This command allows the user to retrieve the 15 most recent insider transactions for a given stock. It will provide information such as the date of the transaction, the company insider involved, the number of shares traded, the type of transaction (buy/sell), and the average price of the transaction."),(0,i.kt)("h3",{id:"usage"},"Usage"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python",metastring:"wordwrap",wordwrap:!0},"/dd insiders ticker\n")),(0,i.kt)("hr",null),(0,i.kt)("h2",{id:"parameters"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Name"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"),(0,i.kt)("th",{parentName:"tr",align:null},"Optional"),(0,i.kt)("th",{parentName:"tr",align:null},"Choices"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"ticker"),(0,i.kt)("td",{parentName:"tr",align:null},"Stock Ticker"),(0,i.kt)("td",{parentName:"tr",align:null},"False"),(0,i.kt)("td",{parentName:"tr",align:null},"None")))),(0,i.kt)("hr",null),(0,i.kt)("h2",{id:"examples"},"Examples"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"/dd insiders ticker:AMD\n")),(0,i.kt)("hr",null))}m.isMDXComponent=!0}}]);