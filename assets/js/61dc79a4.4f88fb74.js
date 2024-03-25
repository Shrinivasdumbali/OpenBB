"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[83522],{3905:(e,r,t)=>{t.d(r,{Zo:()=>l,kt:()=>u});var n=t(67294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function s(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function i(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=n.createContext({}),d=function(e){var r=n.useContext(c),t=r;return e&&(t="function"==typeof e?e(r):s(s({},r),e)),t},l=function(e){var r=d(e.components);return n.createElement(c.Provider,{value:r},e.children)},m="mdxType",p={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},f=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),m=d(t),f=o,u=m["".concat(c,".").concat(f)]||m[f]||p[f]||a;return t?n.createElement(u,s(s({ref:r},l),{},{components:t})):n.createElement(u,s({ref:r},l))}));function u(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var a=t.length,s=new Array(a);s[0]=f;var i={};for(var c in r)hasOwnProperty.call(r,c)&&(i[c]=r[c]);i.originalType=e,i[m]="string"==typeof e?e:o,s[1]=i;for(var d=2;d<a;d++)s[d]=t[d];return n.createElement.apply(null,s)}return n.createElement.apply(null,t)}f.displayName="MDXCreateElement"},26515:(e,r,t)=>{t.d(r,{Z:()=>c});var n=t(39960),o=t(86010),a=t(67294),s=t(16550),i=t(48334);function c(e){let{title:r,url:t,description:c,command:d}=e;const{pathname:l}=(0,s.TH)(),m=l.replace(/\/v\d+/,""),p=!m.includes("/reference")&&!m.includes("/widgets-library/")&&!m.includes("/data_models");return a.createElement(n.Z,{className:(0,o.Z)("rounded border-2 hover:!text-black dark:hover:!text-white !no-underline p-6 cursor-pointer relative overflow-hidden hover:-translate-y-2 transform transition-all duration-300 ease-in-out font-bold shadow-md",{"hover:bg-[#669DCB] border-[#669DCB] dark:hover:bg-[#004A87] dark:border-[#004A87]":m.startsWith("/terminal")||m.startsWith("/pro"),"hover:bg-[#b186bb] border-[#b186bb] dark:hover:bg-[#3a204f] dark:border-[#3a204f]":m.startsWith("/bot"),"hover:bg-[#F5B166] border-[#F5B166] dark:hover:bg-[#511d11] dark:border-[#511d11]":m.startsWith("/sdk")||m.startsWith("/platform"),"hover:bg-[#16A34A] border-[#16A34A] dark:hover:bg-[#14532D] dark:border-[#14532D]":m.startsWith("/excel"),header_docs:!(m.startsWith("/terminal")||m.startsWith("/pro")||m.startsWith("/excel")||m.startsWith("/sdk")||m.startsWith("/platform")||m.startsWith("/bot"))}),to:t},a.createElement("div",{className:"absolute top-0 right-0 left-0 bottom-0"}),a.createElement("div",{className:"flex items-center"},a.createElement("p",{className:"py-2 font-bold text-lg my-0"},r,""),p&&a.createElement(i.Z,{className:"ml-auto mr-4"})),c?a.createElement("p",{className:"text-grey-900 dark:text-grey-200 text-xs font-medium mt-2 mb-0"},c):null)}},29308:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>d,contentTitle:()=>i,default:()=>f,frontMatter:()=>s,metadata:()=>c,toc:()=>l});var n=t(87462),o=(t(67294),t(3905)),a=t(26515);const s={},i="OpenBB SDK Reference",c={unversionedId:"sdk/reference/index",id:"sdk/reference/index",title:"OpenBB SDK Reference",description:"Menus",source:"@site/content/sdk/reference/index.mdx",sourceDirName:"sdk/reference",slug:"/sdk/reference/",permalink:"/sdk/reference/",draft:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/sdk/reference/index.mdx",tags:[],version:"current",lastUpdatedBy:"Danglewood",lastUpdatedAt:1711376839,formattedLastUpdatedAt:"Mar 25, 2024",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Technical Analysis",permalink:"/sdk/data-available/ta"},next:{title:"keys",permalink:"/sdk/reference/keys/"}},d={},l=[{value:"Menus",id:"menus",level:3},{value:"Commands",id:"commands",level:3}],m={toc:l},p="wrapper";function f(e){let{components:r,...t}=e;return(0,o.kt)(p,(0,n.Z)({},m,t,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"openbb-sdk-reference"},"OpenBB SDK Reference"),(0,o.kt)("h3",{id:"menus"},"Menus"),(0,o.kt)("ul",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 -ml-6"},(0,o.kt)(a.Z,{title:"Keys",description:"quandl, news, messari, binance, databento, cmc, tradier, smartstake, mykeys, av, get_keys_info, biztoc, bitquery,...",url:"/sdk/reference/keys",mdxType:"ReferenceCard"}),(0,o.kt)(a.Z,{title:"Alt",description:"hn, get_region_stats, get_estate_sales, get_towns_sold_prices, search, github_data, ross, _make_request, summary,...",url:"/sdk/reference/alt",mdxType:"ReferenceCard"}),(0,o.kt)(a.Z,{title:"Forex",description:"fwd, get_currency_list, quote, load, candle",url:"/sdk/reference/forex",mdxType:"ReferenceCard"}),(0,o.kt)(a.Z,{title:"Futures",description:"search, historical, curve",url:"/sdk/reference/futures",mdxType:"ReferenceCard"}),(0,o.kt)(a.Z,{title:"Forecast",description:"rename, autoselect, mstl, delta, theta, whisper, regr, rwd, plot, clean, anom, nhits, show, desc, tft, atr,...",url:"/sdk/reference/forecast",mdxType:"ReferenceCard"}),(0,o.kt)(a.Z,{title:"Funds",description:"search, holdings, sector, historical, load, carbon, exclusion",url:"/sdk/reference/funds",mdxType:"ReferenceCard"}),(0,o.kt)(a.Z,{title:"Stocks",description:"search, quote, load, tob, process_candle, candle, open, closed, check_if_open, all, exchange, ulc, asc, losers,...",url:"/sdk/reference/stocks",mdxType:"ReferenceCard"}),(0,o.kt)(a.Z,{title:"Economy",description:"indices, ccpi, events, glbonds, future, gdp, usdli, available_indices, debt, usbonds, perfmap, macro, revenue,...",url:"/sdk/reference/economy",mdxType:"ReferenceCard"}),(0,o.kt)(a.Z,{title:"Econometrics",description:"panel, root, vif, granger, clean, re, options, comparison, fe, get_regression_data, load, bols, norm, fdols,...",url:"/sdk/reference/econometrics",mdxType:"ReferenceCard"}),(0,o.kt)(a.Z,{title:"Etf",description:"compare, news, holdings, symbols, weights, etf_by_category, etf_by_name, load, ln, overview, candle, ld, mover",url:"/sdk/reference/etf",mdxType:"ReferenceCard"}),(0,o.kt)(a.Z,{title:"Portfolio",description:"rsort, yret, bench, maxdd, show, om, rsharpe, holdv, mret, dret, distr, summary, holdp, rbeta, load, rvol, var,...",url:"/sdk/reference/portfolio",mdxType:"ReferenceCard"}),(0,o.kt)(a.Z,{title:"Fixedincome",description:"moody, spot, cp, sofr, projection, ameribor, iorb, sonia, tbffr, tmc, estr, dwpcr, fed, usrates, icespread,...",url:"/sdk/reference/fixedincome",mdxType:"ReferenceCard"}),(0,o.kt)(a.Z,{title:"Ta",description:"wma, macd, bbands, rvol_hodges_tompkins, rvol_garman_klass, aroon, vwap, obv, rvol_yang_zhang, cci, zlma, atr,...",url:"/sdk/reference/ta",mdxType:"ReferenceCard"}),(0,o.kt)(a.Z,{title:"Crypto",description:"price, find, chart, load, candle, apy, il, dapp_chains, coins, losers, fees, tokens, coins_for_given_exchange,...",url:"/sdk/reference/crypto",mdxType:"ReferenceCard"}),(0,o.kt)(a.Z,{title:"Qa",description:"unitroot, quantile, sortino, cdf, normality, sharpe, bw, line, qqplot, omega, spread, summary, rolling, var,...",url:"/sdk/reference/qa",mdxType:"ReferenceCard"})),(0,o.kt)("h3",{id:"commands"},"Commands"),(0,o.kt)("ul",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 -ml-6"},(0,o.kt)(a.Z,{title:"Login",description:"Login and load user info.",url:"/sdk/reference/login",command:!0,mdxType:"ReferenceCard"}),(0,o.kt)(a.Z,{title:"Logout",description:"Logout and clear session.",url:"/sdk/reference/logout",command:!0,mdxType:"ReferenceCard"}),(0,o.kt)(a.Z,{title:"News",description:"Access news from either feedparser or biztoc for a given term or from specified sources",url:"/sdk/reference/news",command:!0,mdxType:"ReferenceCard"}),(0,o.kt)(a.Z,{title:"Whoami",description:"Display user info.",url:"/sdk/reference/whoami",command:!0,mdxType:"ReferenceCard"})))}f.isMDXComponent=!0}}]);