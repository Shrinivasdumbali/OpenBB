"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[64316],{3905:(e,r,t)=>{t.d(r,{Zo:()=>l,kt:()=>p});var n=t(67294);function d(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function s(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){d(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function i(e,r){if(null==e)return{};var t,n,d=function(e,r){if(null==e)return{};var t,n,d={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(d[t]=e[t]);return d}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(d[t]=e[t])}return d}var c=n.createContext({}),o=function(e){var r=n.useContext(c),t=r;return e&&(t="function"==typeof e?e(r):s(s({},r),e)),t},l=function(e){var r=o(e.components);return n.createElement(c.Provider,{value:r},e.children)},m="mdxType",k={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},y=n.forwardRef((function(e,r){var t=e.components,d=e.mdxType,a=e.originalType,c=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),m=o(t),y=d,p=m["".concat(c,".").concat(y)]||m[y]||k[y]||a;return t?n.createElement(p,s(s({ref:r},l),{},{components:t})):n.createElement(p,s({ref:r},l))}));function p(e,r){var t=arguments,d=r&&r.mdxType;if("string"==typeof e||d){var a=t.length,s=new Array(a);s[0]=y;var i={};for(var c in r)hasOwnProperty.call(r,c)&&(i[c]=r[c]);i.originalType=e,i[m]="string"==typeof e?e:d,s[1]=i;for(var o=2;o<a;o++)s[o]=t[o];return n.createElement.apply(null,s)}return n.createElement.apply(null,t)}y.displayName="MDXCreateElement"},26515:(e,r,t)=>{t.d(r,{Z:()=>c});var n=t(39960),d=t(86010),a=t(67294),s=t(16550),i=t(48334);function c(e){let{title:r,url:t,description:c,command:o}=e;const{pathname:l}=(0,s.TH)(),m=l.replace(/\/v\d+/,""),k=!m.includes("/reference")&&!m.includes("/widgets-library/")&&!m.includes("/data_models");return a.createElement(n.Z,{className:(0,d.Z)("rounded border-2 hover:!text-black dark:hover:!text-white !no-underline p-6 cursor-pointer relative overflow-hidden hover:-translate-y-2 transform transition-all duration-300 ease-in-out font-bold shadow-md",{"hover:bg-[#669DCB] border-[#669DCB] dark:hover:bg-[#004A87] dark:border-[#004A87]":m.startsWith("/terminal")||m.startsWith("/pro"),"hover:bg-[#b186bb] border-[#b186bb] dark:hover:bg-[#3a204f] dark:border-[#3a204f]":m.startsWith("/bot"),"hover:bg-[#F5B166] border-[#F5B166] dark:hover:bg-[#511d11] dark:border-[#511d11]":m.startsWith("/sdk")||m.startsWith("/platform"),"hover:bg-[#16A34A] border-[#16A34A] dark:hover:bg-[#14532D] dark:border-[#14532D]":m.startsWith("/excel"),header_docs:!(m.startsWith("/terminal")||m.startsWith("/pro")||m.startsWith("/excel")||m.startsWith("/sdk")||m.startsWith("/platform")||m.startsWith("/bot"))}),to:t},a.createElement("div",{className:"absolute top-0 right-0 left-0 bottom-0"}),a.createElement("div",{className:"flex items-center"},a.createElement("p",{className:"py-2 font-bold text-lg my-0"},r,""),k&&a.createElement(i.Z,{className:"ml-auto mr-4"})),c?a.createElement("p",{className:"text-grey-900 dark:text-grey-200 text-xs font-medium mt-2 mb-0"},c):null)}},60195:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>o,contentTitle:()=>i,default:()=>y,frontMatter:()=>s,metadata:()=>c,toc:()=>l});var n=t(87462),d=(t(67294),t(3905)),a=t(26515);const s={},i="keys",c={unversionedId:"sdk/reference/keys/index",id:"sdk/reference/keys/index",title:"keys",description:"Commands",source:"@site/content/sdk/reference/keys/index.mdx",sourceDirName:"sdk/reference/keys",slug:"/sdk/reference/keys/",permalink:"/sdk/reference/keys/",draft:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/sdk/reference/keys/index.mdx",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"price",permalink:"/sdk/reference/crypto/price"},next:{title:"av",permalink:"/sdk/reference/keys/av"}},o={},l=[{value:"Commands",id:"commands",level:3}],m={toc:l},k="wrapper";function y(e){let{components:r,...t}=e;return(0,d.kt)(k,(0,n.Z)({},m,t,{components:r,mdxType:"MDXLayout"}),(0,d.kt)("h1",{id:"keys"},"keys"),(0,d.kt)("h3",{id:"commands"},"Commands"),(0,d.kt)("ul",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 -ml-6"},(0,d.kt)(a.Z,{title:"Av",description:"Set Alpha Vantage key",url:"/sdk/reference/keys/av",command:!0,mdxType:"ReferenceCard"}),(0,d.kt)(a.Z,{title:"Binance",description:"Set Binance key",url:"/sdk/reference/keys/binance",command:!0,mdxType:"ReferenceCard"}),(0,d.kt)(a.Z,{title:"Bitquery",description:"Set Bitquery key",url:"/sdk/reference/keys/bitquery",command:!0,mdxType:"ReferenceCard"}),(0,d.kt)(a.Z,{title:"Biztoc",description:"Set BizToc key",url:"/sdk/reference/keys/biztoc",command:!0,mdxType:"ReferenceCard"}),(0,d.kt)(a.Z,{title:"Cmc",description:"Set Coinmarketcap key",url:"/sdk/reference/keys/cmc",command:!0,mdxType:"ReferenceCard"}),(0,d.kt)(a.Z,{title:"Coinbase",description:"Set Coinbase key",url:"/sdk/reference/keys/coinbase",command:!0,mdxType:"ReferenceCard"}),(0,d.kt)(a.Z,{title:"Coinglass",description:"Set Coinglass key.",url:"/sdk/reference/keys/coinglass",command:!0,mdxType:"ReferenceCard"}),(0,d.kt)(a.Z,{title:"Cpanic",description:"Set Cpanic key.",url:"/sdk/reference/keys/cpanic",command:!0,mdxType:"ReferenceCard"}),(0,d.kt)(a.Z,{title:"Databento",description:"Set DataBento key",url:"/sdk/reference/keys/databento",command:!0,mdxType:"ReferenceCard"}),(0,d.kt)(a.Z,{title:"Degiro",description:"Set Degiro key",url:"/sdk/reference/keys/degiro",command:!0,mdxType:"ReferenceCard"}),(0,d.kt)(a.Z,{title:"Eodhd",description:"Set Eodhd key.",url:"/sdk/reference/keys/eodhd",command:!0,mdxType:"ReferenceCard"}),(0,d.kt)(a.Z,{title:"Ethplorer",description:"Set Ethplorer key.",url:"/sdk/reference/keys/ethplorer",command:!0,mdxType:"ReferenceCard"}),(0,d.kt)(a.Z,{title:"Finnhub",description:"Set Finnhub key",url:"/sdk/reference/keys/finnhub",command:!0,mdxType:"ReferenceCard"}),(0,d.kt)(a.Z,{title:"Fmp",description:"Set Financial Modeling Prep key",url:"/sdk/reference/keys/fmp",command:!0,mdxType:"ReferenceCard"}),(0,d.kt)(a.Z,{title:"Fred",description:"Set FRED key",url:"/sdk/reference/keys/fred",command:!0,mdxType:"ReferenceCard"}),(0,d.kt)(a.Z,{title:"Get Keys Info",description:"Get info on available APIs to use in set_keys.",url:"/sdk/reference/keys/get_keys_info",command:!0,mdxType:"ReferenceCard"}),(0,d.kt)(a.Z,{title:"Github",description:"Set GitHub key.",url:"/sdk/reference/keys/github",command:!0,mdxType:"ReferenceCard"}),(0,d.kt)(a.Z,{title:"Glassnode",description:"Set Glassnode key.",url:"/sdk/reference/keys/glassnode",command:!0,mdxType:"ReferenceCard"}),(0,d.kt)(a.Z,{title:"Messari",description:"Set Messari key.",url:"/sdk/reference/keys/messari",command:!0,mdxType:"ReferenceCard"}),(0,d.kt)(a.Z,{title:"Mykeys",description:"Get currently set API keys.",url:"/sdk/reference/keys/mykeys",command:!0,mdxType:"ReferenceCard"}),(0,d.kt)(a.Z,{title:"News",description:"Set News key",url:"/sdk/reference/keys/news",command:!0,mdxType:"ReferenceCard"}),(0,d.kt)(a.Z,{title:"Oanda",description:"Set Oanda key",url:"/sdk/reference/keys/oanda",command:!0,mdxType:"ReferenceCard"}),(0,d.kt)(a.Z,{title:"Polygon",description:"Set Polygon key",url:"/sdk/reference/keys/polygon",command:!0,mdxType:"ReferenceCard"}),(0,d.kt)(a.Z,{title:"Quandl",description:"Set Quandl key",url:"/sdk/reference/keys/quandl",command:!0,mdxType:"ReferenceCard"}),(0,d.kt)(a.Z,{title:"Reddit",description:"Set Reddit key",url:"/sdk/reference/keys/reddit",command:!0,mdxType:"ReferenceCard"}),(0,d.kt)(a.Z,{title:"Rh",description:"Set Robinhood key",url:"/sdk/reference/keys/rh",command:!0,mdxType:"ReferenceCard"}),(0,d.kt)(a.Z,{title:"Santiment",description:"Set Santiment key.",url:"/sdk/reference/keys/santiment",command:!0,mdxType:"ReferenceCard"}),(0,d.kt)(a.Z,{title:"Set Keys",description:"Set API keys in bundle.",url:"/sdk/reference/keys/set_keys",command:!0,mdxType:"ReferenceCard"}),(0,d.kt)(a.Z,{title:"Smartstake",description:"Set Smartstake key.",url:"/sdk/reference/keys/smartstake",command:!0,mdxType:"ReferenceCard"}),(0,d.kt)(a.Z,{title:"Stocksera",description:"Set Stocksera key.",url:"/sdk/reference/keys/stocksera",command:!0,mdxType:"ReferenceCard"}),(0,d.kt)(a.Z,{title:"Tokenterminal",description:"Set Token Terminal key.",url:"/sdk/reference/keys/tokenterminal",command:!0,mdxType:"ReferenceCard"}),(0,d.kt)(a.Z,{title:"Tradier",description:"Set Tradier key",url:"/sdk/reference/keys/tradier",command:!0,mdxType:"ReferenceCard"}),(0,d.kt)(a.Z,{title:"Ultima",description:"Set Ultima Insights key",url:"/sdk/reference/keys/ultima",command:!0,mdxType:"ReferenceCard"}),(0,d.kt)(a.Z,{title:"Walert",description:"Set Walert key",url:"/sdk/reference/keys/walert",command:!0,mdxType:"ReferenceCard"})))}y.isMDXComponent=!0}}]);