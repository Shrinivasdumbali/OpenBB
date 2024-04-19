"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[9606],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>m});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var i=n.createContext({}),p=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},c=function(e){var t=p(e.components);return n.createElement(i.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(r),f=o,m=u["".concat(i,".").concat(f)]||u[f]||d[f]||a;return r?n.createElement(m,s(s({ref:t},c),{},{components:r})):n.createElement(m,s({ref:t},c))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,s=new Array(a);s[0]=f;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l[u]="string"==typeof e?e:o,s[1]=l;for(var p=2;p<a;p++)s[p]=r[p];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},88828:(e,t,r)=>{r.d(t,{Z:()=>a});var n=r(67294),o=r(35742);function a(e){let{title:t}=e;return n.createElement(o.Z,null,n.createElement("title",null,t))}},18613:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>f,frontMatter:()=>s,metadata:()=>i,toc:()=>c});var n=r(87462),o=(r(67294),r(3905)),a=r(88828);const s={title:"tops",description:"The page offers comprehensive details about the command 'ETF tops' which enables users to fetch the top ETFs for the day, sorted by gainers, losers, or active. The sort option is optional with default sort set to gainers.",keywords:["ETF tops","ETF gainers","ETF losers","active ETFs","ETF sorting"]},l=void 0,i={unversionedId:"bot/reference/telegram/etf/tops",id:"bot/reference/telegram/etf/tops",title:"tops",description:"The page offers comprehensive details about the command 'ETF tops' which enables users to fetch the top ETFs for the day, sorted by gainers, losers, or active. The sort option is optional with default sort set to gainers.",source:"@site/content/bot/reference/telegram/etf/tops.md",sourceDirName:"bot/reference/telegram/etf",slug:"/bot/reference/telegram/etf/tops",permalink:"/bot/reference/telegram/etf/tops",draft:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/bot/reference/telegram/etf/tops.md",tags:[],version:"current",lastUpdatedBy:"montezdesousa",lastUpdatedAt:1713550349,formattedLastUpdatedAt:"Apr 19, 2024",frontMatter:{title:"tops",description:"The page offers comprehensive details about the command 'ETF tops' which enables users to fetch the top ETFs for the day, sorted by gainers, losers, or active. The sort option is optional with default sort set to gainers.",keywords:["ETF tops","ETF gainers","ETF losers","active ETFs","ETF sorting"]},sidebar:"tutorialSidebar",previous:{title:"holdings",permalink:"/bot/reference/telegram/etf/holdings"},next:{title:"flow",permalink:"/bot/reference/telegram/flow/"}},p={},c=[{value:"Usage",id:"usage",level:3},{value:"Parameters",id:"parameters",level:2},{value:"Examples",id:"examples",level:2}],u={toc:c},d="wrapper";function f(e){let{components:t,...r}=e;return(0,o.kt)(d,(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)(a.Z,{title:"etf: tops - Telegram Reference | OpenBB Bot Docs",mdxType:"HeadTitle"}),(0,o.kt)("p",null,"This command returns the top ETFs for the day - sorted by gainers, losers, or active."),(0,o.kt)("h3",{id:"usage"},"Usage"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python",metastring:"wordwrap",wordwrap:!0},"/etf tops [sort]\n")),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"parameters"},"Parameters"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Name"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"),(0,o.kt)("th",{parentName:"tr",align:null},"Optional"),(0,o.kt)("th",{parentName:"tr",align:null},"Choices"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"sort"),(0,o.kt)("td",{parentName:"tr",align:null},"Possible sort options to run. If not provided, defaults to gainers"),(0,o.kt)("td",{parentName:"tr",align:null},"True"),(0,o.kt)("td",{parentName:"tr",align:null},"gainers, losers, active")))),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"examples"},"Examples"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"/etf tops\n")),(0,o.kt)("hr",null))}f.isMDXComponent=!0}}]);