"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[84517],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>g});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),s=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},d=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),p=s(r),m=o,g=p["".concat(c,".").concat(m)]||p[m]||u[m]||a;return r?n.createElement(g,l(l({ref:t},d),{},{components:r})):n.createElement(g,l({ref:t},d))}));function g(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,l=new Array(a);l[0]=m;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[p]="string"==typeof e?e:o,l[1]=i;for(var s=2;s<a;s++)l[s]=r[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},88828:(e,t,r)=>{r.d(t,{Z:()=>a});var n=r(67294),o=r(35742);function a(e){let{title:t}=e;return n.createElement(o.Z,null,n.createElement("title",null,t))}},26515:(e,t,r)=>{r.d(t,{Z:()=>c});var n=r(39960),o=r(86010),a=r(67294),l=r(16550),i=r(48334);function c(e){let{title:t,url:r,description:c,command:s}=e;const{pathname:d}=(0,l.TH)(),p=d.replace(/\/v\d+/,""),u=!p.includes("/reference")&&!p.includes("/widgets-library/")&&!p.includes("/data_models");return a.createElement(n.Z,{className:(0,o.Z)("rounded border-2 hover:!text-black dark:hover:!text-white !no-underline p-6 cursor-pointer relative overflow-hidden hover:-translate-y-2 transform transition-all duration-300 ease-in-out font-bold shadow-md",{"hover:bg-[#669DCB] border-[#669DCB] dark:hover:bg-[#004A87] dark:border-[#004A87]":p.startsWith("/terminal")||p.startsWith("/pro"),"hover:bg-[#b186bb] border-[#b186bb] dark:hover:bg-[#3a204f] dark:border-[#3a204f]":p.startsWith("/bot"),"hover:bg-[#F5B166] border-[#F5B166] dark:hover:bg-[#511d11] dark:border-[#511d11]":p.startsWith("/sdk")||p.startsWith("/platform"),"hover:bg-[#16A34A] border-[#16A34A] dark:hover:bg-[#14532D] dark:border-[#14532D]":p.startsWith("/excel"),header_docs:!(p.startsWith("/terminal")||p.startsWith("/pro")||p.startsWith("/excel")||p.startsWith("/sdk")||p.startsWith("/platform")||p.startsWith("/bot"))}),to:r},a.createElement("div",{className:"absolute top-0 right-0 left-0 bottom-0"}),a.createElement("div",{className:"flex items-center"},a.createElement("p",{className:"py-2 font-bold text-lg my-0"},t,""),u&&a.createElement(i.Z,{className:"ml-auto mr-4"})),c?a.createElement("p",{className:"text-grey-900 dark:text-grey-200 text-xs font-medium mt-2 mb-0"},c):null)}},85690:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>d,contentTitle:()=>c,default:()=>g,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var n=r(87462),o=(r(67294),r(3905)),a=r(26515),l=r(88828);const i={title:"Changelog"},c=void 0,s={unversionedId:"bot/changelog/index",id:"bot/changelog/index",title:"Changelog",description:"<NewReferenceCard",source:"@site/content/bot/changelog/index.mdx",sourceDirName:"bot/changelog",slug:"/bot/changelog/",permalink:"/bot/changelog/",draft:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/bot/changelog/index.mdx",tags:[],version:"current",lastUpdatedBy:"Danglewood",lastUpdatedAt:1710625624,formattedLastUpdatedAt:"Mar 16, 2024",frontMatter:{title:"Changelog"},sidebar:"tutorialSidebar",previous:{title:"topshortvol",permalink:"/bot/reference/telegram/short_data/topshortvol"},next:{title:"Current - v2.0.0",permalink:"/bot/changelog/version2_0_0"}},d={},p=[],u={toc:p},m="wrapper";function g(e){let{components:t,...r}=e;return(0,o.kt)(m,(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)(l.Z,{title:"Changelog | OpenBB Bot Docs",mdxType:"HeadTitle"}),(0,o.kt)("ul",{className:"grid grid-cols-1 gap-4 -ml-6"},(0,o.kt)(a.Z,{title:"Current - v2.0.0",url:"changelog/version2_0_0",mdxType:"NewReferenceCard"}),(0,o.kt)(a.Z,{title:"v1.0.8",url:"changelog/version1_0_8",mdxType:"NewReferenceCard"}),(0,o.kt)(a.Z,{title:"v1.0.7",url:"changelog/version1_0_7",mdxType:"NewReferenceCard"}),(0,o.kt)(a.Z,{title:"v1.0.6",url:"changelog/version1_0_6",mdxType:"NewReferenceCard"}),(0,o.kt)(a.Z,{title:"v1.0.5",url:"changelog/version1_0_5",mdxType:"NewReferenceCard"}),(0,o.kt)(a.Z,{title:"v1.0.4",url:"changelog/version1_0_4",mdxType:"NewReferenceCard"}),(0,o.kt)(a.Z,{title:"v1.0.3",url:"changelog/version1_0_3",mdxType:"NewReferenceCard"}),(0,o.kt)(a.Z,{title:"v1.0.2",url:"changelog/version1_0_2",mdxType:"NewReferenceCard"}),(0,o.kt)(a.Z,{title:"v1.0.1",url:"changelog/version1_0_1",mdxType:"NewReferenceCard"}),(0,o.kt)(a.Z,{title:"v1.0.0",url:"changelog/version1_0_0",mdxType:"NewReferenceCard"})))}g.isMDXComponent=!0}}]);