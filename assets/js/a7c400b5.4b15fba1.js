"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[76093],{3905:(e,r,t)=>{t.d(r,{Zo:()=>c,kt:()=>m});var o=t(67294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function n(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function s(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?n(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):n(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function i(e,r){if(null==e)return{};var t,o,a=function(e,r){if(null==e)return{};var t,o,a={},n=Object.keys(e);for(o=0;o<n.length;o++)t=n[o],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(o=0;o<n.length;o++)t=n[o],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var d=o.createContext({}),l=function(e){var r=o.useContext(d),t=r;return e&&(t="function"==typeof e?e(r):s(s({},r),e)),t},c=function(e){var r=l(e.components);return o.createElement(d.Provider,{value:r},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var r=e.children;return o.createElement(o.Fragment,{},r)}},f=o.forwardRef((function(e,r){var t=e.components,a=e.mdxType,n=e.originalType,d=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),p=l(t),f=a,m=p["".concat(d,".").concat(f)]||p[f]||u[f]||n;return t?o.createElement(m,s(s({ref:r},c),{},{components:t})):o.createElement(m,s({ref:r},c))}));function m(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var n=t.length,s=new Array(n);s[0]=f;var i={};for(var d in r)hasOwnProperty.call(r,d)&&(i[d]=r[d]);i.originalType=e,i[p]="string"==typeof e?e:a,s[1]=i;for(var l=2;l<n;l++)s[l]=t[l];return o.createElement.apply(null,s)}return o.createElement.apply(null,t)}f.displayName="MDXCreateElement"},88828:(e,r,t)=>{t.d(r,{Z:()=>n});var o=t(67294),a=t(35742);function n(e){let{title:r}=e;return o.createElement(a.Z,null,o.createElement("title",null,r))}},71929:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>l,contentTitle:()=>i,default:()=>f,frontMatter:()=>s,metadata:()=>d,toc:()=>c});var o=t(87462),a=(t(67294),t(3905)),n=t(88828);const s={title:"borrowed",description:"Learn how to use the borrowed command to track the history of borrowed shares and associated fees. Useful for traders and investors for comparing broker fees and tracking share borrowing over time.",keywords:["Stock trading","Share borrowing","Stock ticker","Investors","Traders","Borrowed shares","Broker fees"]},i=void 0,d={unversionedId:"bot/reference/discord/short_data/borrowed",id:"bot/reference/discord/short_data/borrowed",title:"borrowed",description:"Learn how to use the borrowed command to track the history of borrowed shares and associated fees. Useful for traders and investors for comparing broker fees and tracking share borrowing over time.",source:"@site/content/bot/reference/discord/short_data/borrowed.md",sourceDirName:"bot/reference/discord/short_data",slug:"/bot/reference/discord/short_data/borrowed",permalink:"/bot/reference/discord/short_data/borrowed",draft:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/bot/reference/discord/short_data/borrowed.md",tags:[],version:"current",lastUpdatedBy:"Danglewood",lastUpdatedAt:1711376839,formattedLastUpdatedAt:"Mar 25, 2024",frontMatter:{title:"borrowed",description:"Learn how to use the borrowed command to track the history of borrowed shares and associated fees. Useful for traders and investors for comparing broker fees and tracking share borrowing over time.",keywords:["Stock trading","Share borrowing","Stock ticker","Investors","Traders","Borrowed shares","Broker fees"]},sidebar:"tutorialSidebar",previous:{title:"short_data",permalink:"/bot/reference/discord/short_data/"},next:{title:"hsi",permalink:"/bot/reference/discord/short_data/hsi"}},l={},c=[{value:"Usage",id:"usage",level:3},{value:"Parameters",id:"parameters",level:2},{value:"Examples",id:"examples",level:2}],p={toc:c},u="wrapper";function f(e){let{components:r,...t}=e;return(0,a.kt)(u,(0,o.Z)({},p,t,{components:r,mdxType:"MDXLayout"}),(0,a.kt)(n.Z,{title:"short_data: borrowed - Discord Reference | OpenBB Bot Docs",mdxType:"HeadTitle"}),(0,a.kt)("p",null,"This command allows the user to view the history of borrowed shares available and fees associated with the stock with the ticker symbol. This can be a useful tool for traders and investors to track changes in share borrowing over time and to compare fees charged by different brokers."),(0,a.kt)("h3",{id:"usage"},"Usage"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python",metastring:"wordwrap",wordwrap:!0},"/sh borrowed ticker\n")),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"parameters"},"Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Name"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"),(0,a.kt)("th",{parentName:"tr",align:null},"Optional"),(0,a.kt)("th",{parentName:"tr",align:null},"Choices"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"ticker"),(0,a.kt)("td",{parentName:"tr",align:null},"Stock Ticker"),(0,a.kt)("td",{parentName:"tr",align:null},"False"),(0,a.kt)("td",{parentName:"tr",align:null},"None")))),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"examples"},"Examples"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"/sh borrowed ticker:AMD\n")),(0,a.kt)("hr",null))}f.isMDXComponent=!0}}]);