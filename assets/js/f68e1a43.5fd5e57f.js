"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[8871],{3905:(e,r,t)=>{t.d(r,{Zo:()=>d,kt:()=>u});var n=t(67294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function c(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=n.createContext({}),l=function(e){var r=n.useContext(s),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},d=function(e){var r=l(e.components);return n.createElement(s.Provider,{value:r},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},f=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),p=l(t),f=a,u=p["".concat(s,".").concat(f)]||p[f]||m[f]||o;return t?n.createElement(u,i(i({ref:r},d),{},{components:t})):n.createElement(u,i({ref:r},d))}));function u(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=f;var c={};for(var s in r)hasOwnProperty.call(r,s)&&(c[s]=r[s]);c.originalType=e,c[p]="string"==typeof e?e:a,i[1]=c;for(var l=2;l<o;l++)i[l]=t[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}f.displayName="MDXCreateElement"},26515:(e,r,t)=>{t.d(r,{Z:()=>s});var n=t(39960),a=t(86010),o=t(67294),i=t(16550),c=t(48334);function s(e){let{title:r,url:t,description:s,command:l}=e;const{pathname:d}=(0,i.TH)(),p=d.replace(/\/v\d+/,""),m=!p.includes("/reference")&&!p.includes("/widgets-library/")&&!p.includes("/data_models");return o.createElement(n.Z,{className:(0,a.Z)("rounded border-2 hover:!text-black dark:hover:!text-white !no-underline p-6 cursor-pointer relative overflow-hidden hover:-translate-y-2 transform transition-all duration-300 ease-in-out font-bold shadow-md",{"hover:bg-[#669DCB] border-[#669DCB] dark:hover:bg-[#004A87] dark:border-[#004A87]":p.startsWith("/terminal")||p.startsWith("/pro"),"hover:bg-[#b186bb] border-[#b186bb] dark:hover:bg-[#3a204f] dark:border-[#3a204f]":p.startsWith("/bot"),"hover:bg-[#F5B166] border-[#F5B166] dark:hover:bg-[#511d11] dark:border-[#511d11]":p.startsWith("/sdk")||p.startsWith("/platform"),"hover:bg-[#16A34A] border-[#16A34A] dark:hover:bg-[#14532D] dark:border-[#14532D]":p.startsWith("/excel"),header_docs:!(p.startsWith("/terminal")||p.startsWith("/pro")||p.startsWith("/excel")||p.startsWith("/sdk")||p.startsWith("/platform")||p.startsWith("/bot"))}),to:t},o.createElement("div",{className:"absolute top-0 right-0 left-0 bottom-0"}),o.createElement("div",{className:"flex items-center"},o.createElement("p",{className:"py-2 font-bold text-lg my-0"},r,""),m&&o.createElement(c.Z,{className:"ml-auto mr-4"})),s?o.createElement("p",{className:"text-grey-900 dark:text-grey-200 text-xs font-medium mt-2 mb-0"},s):null)}},34473:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>l,contentTitle:()=>c,default:()=>f,frontMatter:()=>i,metadata:()=>s,toc:()=>d});var n=t(87462),a=(t(67294),t(3905)),o=t(26515);const i={},c="Reference",s={unversionedId:"platform/reference/index",id:"platform/reference/index",title:"Reference",description:"<ReferenceCard",source:"@site/content/platform/reference/index.mdx",sourceDirName:"platform/reference",slug:"/platform/reference/",permalink:"/platform/reference/",draft:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/platform/reference/index.mdx",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Commitment of Traders",permalink:"/platform/usage/explanation/commitment_of_traders"},next:{title:"Technical",permalink:"/platform/reference/technical/"}},l={},d=[],p={toc:d},m="wrapper";function f(e){let{components:r,...t}=e;return(0,a.kt)(m,(0,n.Z)({},p,t,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"reference"},"Reference"),(0,a.kt)("ul",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 -ml-6"},(0,a.kt)(o.Z,{title:"Commodity",description:"lbma_fixing",url:"/platform/reference/commodity",mdxType:"ReferenceCard"}),(0,a.kt)(o.Z,{title:"Crypto",description:"search, historical",url:"/platform/reference/crypto",mdxType:"ReferenceCard"}),(0,a.kt)(o.Z,{title:"Currency",description:"search, snapshots, reference_rates, historical",url:"/platform/reference/currency",mdxType:"ReferenceCard"}),(0,a.kt)(o.Z,{title:"Derivatives",description:"chains, unusual, historical, curve",url:"/platform/reference/derivatives",mdxType:"ReferenceCard"}),(0,a.kt)(o.Z,{title:"Econometrics",description:"residual_autocorrelation, panel_first_difference, unit_root, ols_regression, panel_fmac, panel_between, causality, panel_pooled,...",url:"/platform/reference/econometrics",mdxType:"ReferenceCard"}),(0,a.kt)(o.Z,{title:"Economy",description:"money_measures, fred_search, calendar, fred_series, unemployment, short_term_interest_rate, fred_regional, risk_premium,...",url:"/platform/reference/economy",mdxType:"ReferenceCard"}),(0,a.kt)(o.Z,{title:"Equity",description:"profile, search, screener, market_snapshots, otc, ipo, splits, dividend,...",url:"/platform/reference/equity",mdxType:"ReferenceCard"}),(0,a.kt)(o.Z,{title:"Etf",description:"equity_exposure, holdings, price_performance, historical, countries, search, sectors, holdings_performance,...",url:"/platform/reference/etf",mdxType:"ReferenceCard"}),(0,a.kt)(o.Z,{title:"Fixedincome",description:"sofr, iorb, estr, dpcredit, effr, effr_forecast, ecb, ameribor,...",url:"/platform/reference/fixedincome",mdxType:"ReferenceCard"}),(0,a.kt)(o.Z,{title:"Index",description:"sp500_multiples, market, constituents, search, snapshots, available, sectors, historical",url:"/platform/reference/index",mdxType:"ReferenceCard"}),(0,a.kt)(o.Z,{title:"News",description:"company, world",url:"/platform/reference/news",mdxType:"ReferenceCard"}),(0,a.kt)(o.Z,{title:"Quantitative",description:"capm, normality, unitroot_test, summary, kurtosis, stdev, quantile, mean,...",url:"/platform/reference/quantitative",mdxType:"ReferenceCard"}),(0,a.kt)(o.Z,{title:"Regulators",description:"rss_litigation, cik_map, sic_search, schema_files, institutions_search, symbol_map, cot, cot_search",url:"/platform/reference/regulators",mdxType:"ReferenceCard"}),(0,a.kt)(o.Z,{title:"Technical",description:"vwap, adosc, macd, rsi, hma, fisher, obv, kc,...",url:"/platform/reference/technical",mdxType:"ReferenceCard"})))}f.isMDXComponent=!0}}]);