"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[91312],{3905:(e,r,t)=>{t.d(r,{Zo:()=>u,kt:()=>p});var n=t(67294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function c(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=n.createContext({}),l=function(e){var r=n.useContext(s),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},u=function(e){var r=l(e.components);return n.createElement(s.Provider,{value:r},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},f=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),d=l(t),f=a,p=d["".concat(s,".").concat(f)]||d[f]||m[f]||o;return t?n.createElement(p,i(i({ref:r},u),{},{components:t})):n.createElement(p,i({ref:r},u))}));function p(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=f;var c={};for(var s in r)hasOwnProperty.call(r,s)&&(c[s]=r[s]);c.originalType=e,c[d]="string"==typeof e?e:a,i[1]=c;for(var l=2;l<o;l++)i[l]=t[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}f.displayName="MDXCreateElement"},26515:(e,r,t)=>{t.d(r,{Z:()=>s});var n=t(39960),a=t(86010),o=t(67294),i=t(16550),c=t(48334);function s(e){let{title:r,url:t,description:s,command:l}=e;const{pathname:u}=(0,i.TH)(),d=u.replace(/\/v\d+/,""),m=!d.includes("/reference")&&!d.includes("/widgets-library/")&&!d.includes("/data_models");return o.createElement(n.Z,{className:(0,a.Z)("rounded border-2 hover:!text-black dark:hover:!text-white !no-underline p-6 cursor-pointer relative overflow-hidden hover:-translate-y-2 transform transition-all duration-300 ease-in-out font-bold shadow-md",{"hover:bg-[#669DCB] border-[#669DCB] dark:hover:bg-[#004A87] dark:border-[#004A87]":d.startsWith("/terminal")||d.startsWith("/pro"),"hover:bg-[#b186bb] border-[#b186bb] dark:hover:bg-[#3a204f] dark:border-[#3a204f]":d.startsWith("/bot"),"hover:bg-[#F5B166] border-[#F5B166] dark:hover:bg-[#511d11] dark:border-[#511d11]":d.startsWith("/sdk")||d.startsWith("/platform"),"hover:bg-[#16A34A] border-[#16A34A] dark:hover:bg-[#14532D] dark:border-[#14532D]":d.startsWith("/excel"),header_docs:!(d.startsWith("/terminal")||d.startsWith("/pro")||d.startsWith("/excel")||d.startsWith("/sdk")||d.startsWith("/platform")||d.startsWith("/bot"))}),to:t},o.createElement("div",{className:"absolute top-0 right-0 left-0 bottom-0"}),o.createElement("div",{className:"flex items-center"},o.createElement("p",{className:"py-2 font-bold text-lg my-0"},r,""),m&&o.createElement(c.Z,{className:"ml-auto mr-4"})),s?o.createElement("p",{className:"text-grey-900 dark:text-grey-200 text-xs font-medium mt-2 mb-0"},s):null)}},22988:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>l,contentTitle:()=>c,default:()=>f,frontMatter:()=>i,metadata:()=>s,toc:()=>u});var n=t(87462),a=(t(67294),t(3905)),o=t(26515);const i={},c="Futures",s={unversionedId:"terminal/reference/futures/index",id:"terminal/reference/futures/index",title:"Futures",description:"Commands",source:"@site/content/terminal/reference/futures/index.mdx",sourceDirName:"terminal/reference/futures",slug:"/terminal/reference/futures/",permalink:"/terminal/reference/futures/",draft:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/terminal/reference/futures/index.mdx",tags:[],version:"current",lastUpdatedBy:"montezdesousa",lastUpdatedAt:1709061006,formattedLastUpdatedAt:"Feb 27, 2024",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"type",permalink:"/terminal/reference/econometrics/type"},next:{title:"curve",permalink:"/terminal/reference/futures/curve"}},l={},u=[{value:"Commands",id:"commands",level:3}],d={toc:u},m="wrapper";function f(e){let{components:r,...t}=e;return(0,a.kt)(m,(0,n.Z)({},d,t,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"futures"},"Futures"),(0,a.kt)("h3",{id:"commands"},"Commands"),(0,a.kt)("ul",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 -ml-6"},(0,a.kt)(o.Z,{title:"Curve",description:"Display futures curve. [Source: YahooFinance]",url:"/terminal/reference/futures/curve",command:!0,mdxType:"ReferenceCard"}),(0,a.kt)(o.Z,{title:"Historical",description:"Display futures historical. [Source: YahooFinance]",url:"/terminal/reference/futures/historical",command:!0,mdxType:"ReferenceCard"}),(0,a.kt)(o.Z,{title:"Search",description:"Search futures. [Source: YahooFinance]",url:"/terminal/reference/futures/search",command:!0,mdxType:"ReferenceCard"})))}f.isMDXComponent=!0}}]);