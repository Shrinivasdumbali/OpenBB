"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[46754],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>h});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var i=n.createContext({}),c=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(i.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(r),m=o,h=u["".concat(i,".").concat(m)]||u[m]||d[m]||a;return r?n.createElement(h,s(s({ref:t},p),{},{components:r})):n.createElement(h,s({ref:t},p))}));function h(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,s=new Array(a);s[0]=m;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l[u]="string"==typeof e?e:o,s[1]=l;for(var c=2;c<a;c++)s[c]=r[c];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},88828:(e,t,r)=>{r.d(t,{Z:()=>a});var n=r(67294),o=r(35742);function a(e){let{title:t}=e;return n.createElement(o.Z,null,n.createElement("title",null,t))}},68279:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>m,frontMatter:()=>s,metadata:()=>i,toc:()=>p});var n=r(87462),o=(r(67294),r(3905)),a=r(88828);const s={title:"technical",description:"Learn how to use the command for retrieving stock screener results based on your choice of a technical signal. Provides information on how to use technical signals like Top Gainers, Top Losers, Most Active, among others.",keywords:["stock screener","technical signal","Top Gainers","Top Losers","Most Active","Most Volatile","Relative Volatility","Oversold (RSI 30)","Overbought (RSI 70)","Golden Cross","Death Cross","New 52week High","New 52week Low","Unusual Volume"]},l=void 0,i={unversionedId:"bot/reference/discord/screeners/technical",id:"bot/reference/discord/screeners/technical",title:"technical",description:"Learn how to use the command for retrieving stock screener results based on your choice of a technical signal. Provides information on how to use technical signals like Top Gainers, Top Losers, Most Active, among others.",source:"@site/content/bot/reference/discord/screeners/technical.md",sourceDirName:"bot/reference/discord/screeners",slug:"/bot/reference/discord/screeners/technical",permalink:"/bot/reference/discord/screeners/technical",draft:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/bot/reference/discord/screeners/technical.md",tags:[],version:"current",lastUpdatedBy:"montezdesousa",lastUpdatedAt:1707152475,formattedLastUpdatedAt:"Feb 5, 2024",frontMatter:{title:"technical",description:"Learn how to use the command for retrieving stock screener results based on your choice of a technical signal. Provides information on how to use technical signals like Top Gainers, Top Losers, Most Active, among others.",keywords:["stock screener","technical signal","Top Gainers","Top Losers","Most Active","Most Volatile","Relative Volatility","Oversold (RSI 30)","Overbought (RSI 70)","Golden Cross","Death Cross","New 52week High","New 52week Low","Unusual Volume"]},sidebar:"tutorialSidebar",previous:{title:"pm_all",permalink:"/bot/reference/discord/screeners/pm_all"},next:{title:"short_data",permalink:"/bot/reference/discord/short_data/"}},c={},p=[{value:"Usage",id:"usage",level:3},{value:"Parameters",id:"parameters",level:2},{value:"Examples",id:"examples",level:2}],u={toc:p},d="wrapper";function m(e){let{components:t,...r}=e;return(0,o.kt)(d,(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)(a.Z,{title:"screeners: technical - Discord Reference | OpenBB Bot Docs",mdxType:"HeadTitle"}),(0,o.kt)("p",null,"This command allows the user to retrieve stock screener results according to the chosen technical signal."),(0,o.kt)("h3",{id:"usage"},"Usage"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python",metastring:"wordwrap",wordwrap:!0},"/scr technical signal\n")),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"parameters"},"Parameters"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Name"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"),(0,o.kt)("th",{parentName:"tr",align:null},"Optional"),(0,o.kt)("th",{parentName:"tr",align:null},"Choices"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"signal"),(0,o.kt)("td",{parentName:"tr",align:null},"screener preset"),(0,o.kt)("td",{parentName:"tr",align:null},"False"),(0,o.kt)("td",{parentName:"tr",align:null},"Top Gainers (gainers), Top Losers (losers), Most Active (most_active), Most Volatile (most_volatile), Relative Volatility (relative_volatility), Oversold (RSI  30) (oversold), Overbought (RSI  70) (overbought), Golden Cross (golden_cross), Death Cross (death_cross), New 52week High (new_w52high), New 52week Low (new_w52low), Unusual Volume (unusual_volume)")))),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"examples"},"Examples"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"/scr technical signal:Top Gainers\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"/scr technical signal:Death Cross\n")),(0,o.kt)("hr",null))}m.isMDXComponent=!0}}]);