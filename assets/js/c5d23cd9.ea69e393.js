"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[60934],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>b});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=a.createContext({}),c=function(e){var t=a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},d=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=c(r),m=n,b=u["".concat(l,".").concat(m)]||u[m]||p[m]||o;return r?a.createElement(b,i(i({ref:t},d),{},{components:r})):a.createElement(b,i({ref:t},d))}));function b(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:n,i[1]=s;for(var c=2;c<o;c++)i[c]=r[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},88828:(e,t,r)=>{r.d(t,{Z:()=>o});var a=r(67294),n=r(35742);function o(e){let{title:t}=e;return a.createElement(n.Z,null,a.createElement("title",null,t))}},26515:(e,t,r)=>{r.d(t,{Z:()=>l});var a=r(39960),n=r(86010),o=r(67294),i=r(16550),s=r(48334);function l(e){let{title:t,url:r,description:l,command:c}=e;const{pathname:d}=(0,i.TH)(),u=d.replace(/\/v\d+/,""),p=!u.includes("/reference")&&!u.includes("/widgets-library/")&&!u.includes("/data_models");return o.createElement(a.Z,{className:(0,n.Z)("rounded border-2 hover:!text-black dark:hover:!text-white !no-underline p-6 cursor-pointer relative overflow-hidden hover:-translate-y-2 transform transition-all duration-300 ease-in-out font-bold shadow-md",{"hover:bg-[#669DCB] border-[#669DCB] dark:hover:bg-[#004A87] dark:border-[#004A87]":u.startsWith("/terminal")||u.startsWith("/pro"),"hover:bg-[#b186bb] border-[#b186bb] dark:hover:bg-[#3a204f] dark:border-[#3a204f]":u.startsWith("/bot"),"hover:bg-[#F5B166] border-[#F5B166] dark:hover:bg-[#511d11] dark:border-[#511d11]":u.startsWith("/sdk")||u.startsWith("/platform"),"hover:bg-[#16A34A] border-[#16A34A] dark:hover:bg-[#14532D] dark:border-[#14532D]":u.startsWith("/excel"),header_docs:!(u.startsWith("/terminal")||u.startsWith("/pro")||u.startsWith("/excel")||u.startsWith("/sdk")||u.startsWith("/platform")||u.startsWith("/bot"))}),to:r},o.createElement("div",{className:"absolute top-0 right-0 left-0 bottom-0"}),o.createElement("div",{className:"flex items-center"},o.createElement("p",{className:"py-2 font-bold text-lg my-0"},t,""),p&&o.createElement(s.Z,{className:"ml-auto mr-4"})),l?o.createElement("p",{className:"text-grey-900 dark:text-grey-200 text-xs font-medium mt-2 mb-0"},l):null)}},72997:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>d,contentTitle:()=>l,default:()=>b,frontMatter:()=>s,metadata:()=>c,toc:()=>u});var a=r(87462),n=(r(67294),r(3905)),o=r(26515),i=r(88828);const s={title:"Outputs"},l=void 0,c={unversionedId:"terminal/usage/outputs/index",id:"terminal/usage/outputs/index",title:"Outputs",description:"<NewReferenceCard",source:"@site/content/terminal/usage/outputs/index.mdx",sourceDirName:"terminal/usage/outputs",slug:"/terminal/usage/outputs/",permalink:"/terminal/usage/outputs/",draft:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/terminal/usage/outputs/index.mdx",tags:[],version:"current",lastUpdatedBy:"Danglewood",lastUpdatedAt:1711376839,formattedLastUpdatedAt:"Mar 25, 2024",frontMatter:{title:"Outputs"},sidebar:"tutorialSidebar",previous:{title:"Custom Data",permalink:"/terminal/usage/data/custom-data"},next:{title:"Interactive Tables",permalink:"/terminal/usage/outputs/interactive-tables"}},d={},u=[],p={toc:u},m="wrapper";function b(e){let{components:t,...r}=e;return(0,n.kt)(m,(0,a.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)(i.Z,{title:"Outputs - Usage | OpenBB Terminal Docs",mdxType:"HeadTitle"}),(0,n.kt)("ul",{className:"grid grid-cols-1 gap-4 -ml-6"},(0,n.kt)(o.Z,{title:"Interactive Tables",description:"Understand how to sort, filter, hide columns, display more rows or export data on our tables",url:"outputs/interactive-tables",mdxType:"NewReferenceCard"}),(0,n.kt)(o.Z,{title:"Interactive Charts",description:"Explore how to overlay charts, change titles, draw lines, add text and much more on our charts",url:"outputs/interactive-charts",mdxType:"NewReferenceCard"}),(0,n.kt)(o.Z,{title:"Export data",description:"Exporty any dataset of your choice as csv,jpg or png, and also the naming to be exported",url:"outputs/export-data",mdxType:"NewReferenceCard"})))}b.isMDXComponent=!0}}]);