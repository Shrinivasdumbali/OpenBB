"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[47151],{3905:(e,r,t)=>{t.d(r,{Zo:()=>p,kt:()=>f});var n=t(67294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function c(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function o(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?c(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function i(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},c=Object.keys(e);for(n=0;n<c.length;n++)t=c[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)t=c[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=n.createContext({}),d=function(e){var r=n.useContext(s),t=r;return e&&(t="function"==typeof e?e(r):o(o({},r),e)),t},p=function(e){var r=d(e.components);return n.createElement(s.Provider,{value:r},e.children)},l="mdxType",m={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},u=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,c=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),l=d(t),u=a,f=l["".concat(s,".").concat(u)]||l[u]||m[u]||c;return t?n.createElement(f,o(o({ref:r},p),{},{components:t})):n.createElement(f,o({ref:r},p))}));function f(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var c=t.length,o=new Array(c);o[0]=u;var i={};for(var s in r)hasOwnProperty.call(r,s)&&(i[s]=r[s]);i.originalType=e,i[l]="string"==typeof e?e:a,o[1]=i;for(var d=2;d<c;d++)o[d]=t[d];return n.createElement.apply(null,o)}return n.createElement.apply(null,t)}u.displayName="MDXCreateElement"},26515:(e,r,t)=>{t.d(r,{Z:()=>s});var n=t(39960),a=t(86010),c=t(67294),o=t(16550),i=t(48334);function s(e){let{title:r,url:t,description:s,command:d}=e;const{pathname:p}=(0,o.TH)(),l=p.replace(/\/v\d+/,""),m=!l.includes("/reference")&&!l.includes("/widgets-library/")&&!l.includes("/data_models");return c.createElement(n.Z,{className:(0,a.Z)("rounded border-2 hover:!text-black dark:hover:!text-white !no-underline p-6 cursor-pointer relative overflow-hidden hover:-translate-y-2 transform transition-all duration-300 ease-in-out font-bold shadow-md",{"hover:bg-[#669DCB] border-[#669DCB] dark:hover:bg-[#004A87] dark:border-[#004A87]":l.startsWith("/terminal")||l.startsWith("/pro"),"hover:bg-[#b186bb] border-[#b186bb] dark:hover:bg-[#3a204f] dark:border-[#3a204f]":l.startsWith("/bot"),"hover:bg-[#F5B166] border-[#F5B166] dark:hover:bg-[#511d11] dark:border-[#511d11]":l.startsWith("/sdk")||l.startsWith("/platform"),"hover:bg-[#16A34A] border-[#16A34A] dark:hover:bg-[#14532D] dark:border-[#14532D]":l.startsWith("/excel"),header_docs:!(l.startsWith("/terminal")||l.startsWith("/pro")||l.startsWith("/excel")||l.startsWith("/sdk")||l.startsWith("/platform")||l.startsWith("/bot"))}),to:t},c.createElement("div",{className:"absolute top-0 right-0 left-0 bottom-0"}),c.createElement("div",{className:"flex items-center"},c.createElement("p",{className:"py-2 font-bold text-lg my-0"},r,""),m&&c.createElement(i.Z,{className:"ml-auto mr-4"})),s?c.createElement("p",{className:"text-grey-900 dark:text-grey-200 text-xs font-medium mt-2 mb-0"},s):null)}},28423:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>d,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var n=t(87462),a=(t(67294),t(3905)),c=t(26515);const o={},i="Discovery",s={unversionedId:"terminal/reference/crypto/disc/index",id:"terminal/reference/crypto/disc/index",title:"Discovery",description:"Commands",source:"@site/content/terminal/reference/crypto/disc/index.mdx",sourceDirName:"terminal/reference/crypto/disc",slug:"/terminal/reference/crypto/disc/",permalink:"/terminal/reference/crypto/disc/",draft:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/terminal/reference/crypto/disc/index.mdx",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"web",permalink:"/terminal/reference/crypto/dd/web"},next:{title:"dapp_categories",permalink:"/terminal/reference/crypto/disc/dapp_categories"}},d={},p=[{value:"Commands",id:"commands",level:3}],l={toc:p},m="wrapper";function u(e){let{components:r,...t}=e;return(0,a.kt)(m,(0,n.Z)({},l,t,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"discovery"},"Discovery"),(0,a.kt)("h3",{id:"commands"},"Commands"),(0,a.kt)("ul",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 -ml-6"},(0,a.kt)(c.Z,{title:"Dapp_Categories",description:"Shows available dapp categories [Source: https://dappradar.com/]",url:"/terminal/reference/crypto/disc/dapp_categories",command:!0,mdxType:"ReferenceCard"}),(0,a.kt)(c.Z,{title:"Dapp_Chains",description:"Shows available dapp chains [Source: https://dappradar.com/]",url:"/terminal/reference/crypto/disc/dapp_chains",command:!0,mdxType:"ReferenceCard"}),(0,a.kt)(c.Z,{title:"Dapp_Metrics",description:"Shows dapp metrics [Source: https://dappradar.com/] Accepts --dappId argument to specify the dapp --chain...",url:"/terminal/reference/crypto/disc/dapp_metrics",command:!0,mdxType:"ReferenceCard"}),(0,a.kt)(c.Z,{title:"Dapps",description:"Shows available decentralized applications [Source: https://dappradar.com/] Accepts --chain argument to filter by...",url:"/terminal/reference/crypto/disc/dapps",command:!0,mdxType:"ReferenceCard"}),(0,a.kt)(c.Z,{title:"Defi_Chains",description:"Shows DeFi chains [Source: https://dappradar.com/]",url:"/terminal/reference/crypto/disc/defi_chains",command:!0,mdxType:"ReferenceCard"}),(0,a.kt)(c.Z,{title:"Fees",description:"Cryptos where users pay most fees on [Source: CryptoStats]",url:"/terminal/reference/crypto/disc/fees",command:!0,mdxType:"ReferenceCard"}),(0,a.kt)(c.Z,{title:"Gainers",description:"Shows Largest Gainers - coins which gain the most in given period. You can use parameter --interval to set which...",url:"/terminal/reference/crypto/disc/gainers",command:!0,mdxType:"ReferenceCard"}),(0,a.kt)(c.Z,{title:"Losers",description:"Shows Largest Losers - coins which price dropped the most in given period You can use parameter --interval to set...",url:"/terminal/reference/crypto/disc/losers",command:!0,mdxType:"ReferenceCard"}),(0,a.kt)(c.Z,{title:"Nft_Mktp",description:"Shows NFT marketplaces [Source: https://dappradar.com/] Accepts --chain to filter by blockchain --sortby {name,...",url:"/terminal/reference/crypto/disc/nft_mktp",command:!0,mdxType:"ReferenceCard"}),(0,a.kt)(c.Z,{title:"Nft_Mktp_Chains",description:"Shows NFT marketplace chains [Source: https://dappradar.com/]",url:"/terminal/reference/crypto/disc/nft_mktp_chains",command:!0,mdxType:"ReferenceCard"}),(0,a.kt)(c.Z,{title:"Search",description:"Search over CoinPaprika API You can display only N number of results with --limit parameter. You can sort data by...",url:"/terminal/reference/crypto/disc/search",command:!0,mdxType:"ReferenceCard"}),(0,a.kt)(c.Z,{title:"Tokens",description:"Shows chains that support tokens [Source: https://dappradar.com/]",url:"/terminal/reference/crypto/disc/tokens",command:!0,mdxType:"ReferenceCard"}),(0,a.kt)(c.Z,{title:"Top",description:"Display N coins from the data source, if the data source is CoinGecko it can receive a category as argument (-c...",url:"/terminal/reference/crypto/disc/top",command:!0,mdxType:"ReferenceCard"}),(0,a.kt)(c.Z,{title:"Trending",description:"Discover trending coins (Top-7) on CoinGecko in the last 24 hours",url:"/terminal/reference/crypto/disc/trending",command:!0,mdxType:"ReferenceCard"})))}u.isMDXComponent=!0}}]);