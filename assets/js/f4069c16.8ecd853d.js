"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[25519],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>u});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),l=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},d=function(e){var t=l(e.components);return n.createElement(s.Provider,{value:t},e.children)},p="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),p=l(r),m=a,u=p["".concat(s,".").concat(m)]||p[m]||f[m]||i;return r?n.createElement(u,o(o({ref:t},d),{},{components:r})):n.createElement(u,o({ref:t},d))}));function u(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=m;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c[p]="string"==typeof e?e:a,o[1]=c;for(var l=2;l<i;l++)o[l]=r[l];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},62872:(e,t,r)=>{r.d(t,{Z:()=>c});var n=r(39960),a=r(86010),i=r(67294),o=r(16550);function c(e){let{title:t,url:r,description:c,command:s}=e;const{pathname:l}=(0,o.TH)(),d=l.replace(/\/v\d+/,"");return i.createElement(n.Z,{className:(0,a.Z)("rounded border-2 !no-underline border-grey-600 p-6 cursor-pointer relative overflow-hidden hover:shadow-2xl hover:-translate-y-2 transform transition-all duration-300 ease-in-out font-bold shadow-2xl",{header_docs_terminal:d.startsWith("/terminal"),"bg-gradient-to-r from-[#541c12] to-[rgba(84, 29, 19, 1)]":d.startsWith("/sdk")||d.startsWith("/platform"),"bg-gradient-to-r from-grey-800 to-purple-800":d.startsWith("/bot"),header_docs:!(d.startsWith("/terminal")||d.startsWith("/sdk")||d.startsWith("/platform")||d.startsWith("/bot"))}),to:r},i.createElement("div",{className:"absolute top-0 right-0 left-0 bottom-0 bg-gradient-to-t from-black to-transparent"}),i.createElement("p",{className:"py-2 font-bold text-lg my-0"},t,""),c?i.createElement("p",{className:"text-grey-200 text-xs mt-2 mb-0"},c):null)}},95653:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>c,default:()=>m,frontMatter:()=>o,metadata:()=>s,toc:()=>d});var n=r(87462),a=(r(67294),r(3905)),i=r(62872);const o={},c="etf",s={unversionedId:"terminal/reference/etf/index",id:"terminal/reference/etf/index",title:"etf",description:"<ReferenceCard",source:"@site/content/terminal/reference/etf/index.mdx",sourceDirName:"terminal/reference/etf",slug:"/terminal/reference/etf/",permalink:"/terminal/reference/etf/",draft:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/terminal/reference/etf/index.mdx",tags:[],version:"current",lastUpdatedBy:"montezdesousa",lastUpdatedAt:1713550349,formattedLastUpdatedAt:"Apr 19, 2024",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"ycrv",permalink:"/terminal/reference/economy/ycrv"},next:{title:"candle",permalink:"/terminal/reference/etf/candle"}},l={},d=[],p={toc:d},f="wrapper";function m(e){let{components:t,...r}=e;return(0,a.kt)(f,(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"etf"},"etf"),(0,a.kt)("ul",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 -ml-6"},(0,a.kt)(i.Z,{title:"Disc",description:"active, decliners, gainers",url:"etf/disc",mdxType:"ReferenceCard"}),(0,a.kt)(i.Z,{title:"Screener",description:"sbc, screen, set, view",url:"etf/screener",mdxType:"ReferenceCard"}),(0,a.kt)(i.Z,{title:"Ta",description:"ad, adosc, adx, aroon, atr, bbands, cci, cg, clenow, demark, donchian, ema, fib, fisher, hma, kc, macd, obv, rsi, sma, stoch, vwap, wma, zlma",url:"etf/ta",mdxType:"ReferenceCard"}),(0,a.kt)(i.Z,{title:"candle",description:"This documentation is for the 'candle' function that shows historical",url:"etf/candle",mdxType:"ReferenceCard"}),(0,a.kt)(i.Z,{title:"compare",description:"A documentation page for the 'compare' function used in StockAnalysis.",url:"etf/compare",mdxType:"ReferenceCard"}),(0,a.kt)(i.Z,{title:"load",description:"This page provides a guide on how to load an Exchange Traded Fund (ETF)",url:"etf/load",mdxType:"ReferenceCard"}),(0,a.kt)(i.Z,{title:"news",description:"The page provides information on how to print the latest news about ETF",url:"etf/news",mdxType:"ReferenceCard"}),(0,a.kt)(i.Z,{title:"overview",description:"The page provides a detailed overview of selected ETFs including information",url:"etf/overview",mdxType:"ReferenceCard"}),(0,a.kt)(i.Z,{title:"pir",description:"Create comprehensive ETF excel reports using the passive investor ETF",url:"etf/pir",mdxType:"ReferenceCard"}),(0,a.kt)(i.Z,{title:"search",description:"Learn how to search for ETFs by name using the FinanceDatabase or StockAnalysis.com.",url:"etf/search",mdxType:"ReferenceCard"}),(0,a.kt)(i.Z,{title:"summary",description:"This documentation page provides a summary of how to print an ETF description",url:"etf/summary",mdxType:"ReferenceCard"}),(0,a.kt)(i.Z,{title:"weights",description:"The page details the usage of the 'weights' parameter in viewing ETF",url:"etf/weights",mdxType:"ReferenceCard"})))}m.isMDXComponent=!0}}]);