"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[34394],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>u});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),d=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=d(e.components);return n.createElement(l.Provider,{value:t},e.children)},f="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),f=d(r),m=o,u=f["".concat(l,".").concat(m)]||f[m]||p[m]||a;return r?n.createElement(u,i(i({ref:t},s),{},{components:r})):n.createElement(u,i({ref:t},s))}));function u(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=m;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c[f]="string"==typeof e?e:o,i[1]=c;for(var d=2;d<a;d++)i[d]=r[d];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},62872:(e,t,r)=>{r.d(t,{Z:()=>c});var n=r(39960),o=r(86010),a=r(67294),i=r(16550);function c(e){let{title:t,url:r,description:c,command:l}=e;const{pathname:d}=(0,i.TH)(),s=d.replace(/\/v\d+/,"");return a.createElement(n.Z,{className:(0,o.Z)("rounded border-2 !no-underline border-grey-600 p-6 cursor-pointer relative overflow-hidden hover:shadow-2xl hover:-translate-y-2 transform transition-all duration-300 ease-in-out font-bold shadow-2xl",{header_docs_terminal:s.startsWith("/terminal"),"bg-gradient-to-r from-[#541c12] to-[rgba(84, 29, 19, 1)]":s.startsWith("/sdk")||s.startsWith("/platform"),"bg-gradient-to-r from-grey-800 to-purple-800":s.startsWith("/bot"),header_docs:!(s.startsWith("/terminal")||s.startsWith("/sdk")||s.startsWith("/platform")||s.startsWith("/bot"))}),to:r},a.createElement("div",{className:"absolute top-0 right-0 left-0 bottom-0 bg-gradient-to-t from-black to-transparent"}),a.createElement("p",{className:"py-2 font-bold text-lg my-0"},t,""),c?a.createElement("p",{className:"text-grey-200 text-xs mt-2 mb-0"},c):null)}},80562:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>d,contentTitle:()=>c,default:()=>m,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var n=r(87462),o=(r(67294),r(3905)),a=r(62872);const i={},c="forex",l={unversionedId:"terminal/reference/forex/index",id:"terminal/reference/forex/index",title:"forex",description:"<ReferenceCard",source:"@site/content/terminal/reference/forex/index.mdx",sourceDirName:"terminal/reference/forex",slug:"/terminal/reference/forex/",permalink:"/terminal/reference/forex/",draft:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/terminal/reference/forex/index.mdx",tags:[],version:"current",lastUpdatedBy:"montezdesousa",lastUpdatedAt:1713550349,formattedLastUpdatedAt:"Apr 19, 2024",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"which",permalink:"/terminal/reference/forecast/which"},next:{title:"candle",permalink:"/terminal/reference/forex/candle"}},d={},s=[],f={toc:s},p="wrapper";function m(e){let{components:t,...r}=e;return(0,o.kt)(p,(0,n.Z)({},f,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"forex"},"forex"),(0,o.kt)("ul",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 -ml-6"},(0,o.kt)(a.Z,{title:"Oanda",description:"calendar, cancel, candles, closetrade, from, list, order, orderbook, pending, positionbook, positions, price, summary, to, trades",url:"forex/oanda",mdxType:"ReferenceCard"}),(0,o.kt)(a.Z,{title:"Qa",description:"acf, bw, cdf, cusum, decompose, hist, kurtosis, line, load, normality, pick, qqplot, quantile, raw, rolling, skew, spread, summary, unitroot",url:"forex/qa",mdxType:"ReferenceCard"}),(0,o.kt)(a.Z,{title:"Ta",description:"ad, adx, aroon, bbands, cci, cg, donchian, ema, fib, fisher, load, macd, obv, rsi, sma, stoch, zlma",url:"forex/ta",mdxType:"ReferenceCard"}),(0,o.kt)(a.Z,{title:"candle",description:"This documentation is for the 'candle' function used to show loaded fx",url:"forex/candle",mdxType:"ReferenceCard"}),(0,o.kt)(a.Z,{title:"fwd",description:"A documentation page for the 'fwd' command which provides forward rates",url:"forex/fwd",mdxType:"ReferenceCard"}),(0,o.kt)(a.Z,{title:"load",description:"This page documents how to load historical exchange rate data from Alpha",url:"forex/load",mdxType:"ReferenceCard"}),(0,o.kt)(a.Z,{title:"quote",description:"This documentation page provides information regarding the usage and",url:"forex/quote",mdxType:"ReferenceCard"})))}m.isMDXComponent=!0}}]);