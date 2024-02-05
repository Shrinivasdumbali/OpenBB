"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[21986],{3905:(e,r,t)=>{t.d(r,{Zo:()=>l,kt:()=>u});var n=t(67294);function i(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function s(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function o(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?s(Object(t),!0).forEach((function(r){i(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function c(e,r){if(null==e)return{};var t,n,i=function(e,r){if(null==e)return{};var t,n,i={},s=Object.keys(e);for(n=0;n<s.length;n++)t=s[n],r.indexOf(t)>=0||(i[t]=e[t]);return i}(e,r);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)t=s[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var a=n.createContext({}),d=function(e){var r=n.useContext(a),t=r;return e&&(t="function"==typeof e?e(r):o(o({},r),e)),t},l=function(e){var r=d(e.components);return n.createElement(a.Provider,{value:r},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},f=n.forwardRef((function(e,r){var t=e.components,i=e.mdxType,s=e.originalType,a=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),p=d(t),f=i,u=p["".concat(a,".").concat(f)]||p[f]||m[f]||s;return t?n.createElement(u,o(o({ref:r},l),{},{components:t})):n.createElement(u,o({ref:r},l))}));function u(e,r){var t=arguments,i=r&&r.mdxType;if("string"==typeof e||i){var s=t.length,o=new Array(s);o[0]=f;var c={};for(var a in r)hasOwnProperty.call(r,a)&&(c[a]=r[a]);c.originalType=e,c[p]="string"==typeof e?e:i,o[1]=c;for(var d=2;d<s;d++)o[d]=t[d];return n.createElement.apply(null,o)}return n.createElement.apply(null,t)}f.displayName="MDXCreateElement"},26515:(e,r,t)=>{t.d(r,{Z:()=>a});var n=t(39960),i=t(86010),s=t(67294),o=t(16550),c=t(48334);function a(e){let{title:r,url:t,description:a,command:d}=e;const{pathname:l}=(0,o.TH)(),p=l.replace(/\/v\d+/,""),m=!p.includes("/reference")&&!p.includes("/widgets-library/")&&!p.includes("/data_models");return s.createElement(n.Z,{className:(0,i.Z)("rounded border-2 hover:!text-black dark:hover:!text-white !no-underline p-6 cursor-pointer relative overflow-hidden hover:-translate-y-2 transform transition-all duration-300 ease-in-out font-bold shadow-md",{"hover:bg-[#669DCB] border-[#669DCB] dark:hover:bg-[#004A87] dark:border-[#004A87]":p.startsWith("/terminal")||p.startsWith("/pro"),"hover:bg-[#b186bb] border-[#b186bb] dark:hover:bg-[#3a204f] dark:border-[#3a204f]":p.startsWith("/bot"),"hover:bg-[#F5B166] border-[#F5B166] dark:hover:bg-[#511d11] dark:border-[#511d11]":p.startsWith("/sdk")||p.startsWith("/platform"),"hover:bg-[#16A34A] border-[#16A34A] dark:hover:bg-[#14532D] dark:border-[#14532D]":p.startsWith("/excel"),header_docs:!(p.startsWith("/terminal")||p.startsWith("/pro")||p.startsWith("/excel")||p.startsWith("/sdk")||p.startsWith("/platform")||p.startsWith("/bot"))}),to:t},s.createElement("div",{className:"absolute top-0 right-0 left-0 bottom-0"}),s.createElement("div",{className:"flex items-center"},s.createElement("p",{className:"py-2 font-bold text-lg my-0"},r,""),m&&s.createElement(c.Z,{className:"ml-auto mr-4"})),a?s.createElement("p",{className:"text-grey-900 dark:text-grey-200 text-xs font-medium mt-2 mb-0"},a):null)}},51980:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>d,contentTitle:()=>c,default:()=>f,frontMatter:()=>o,metadata:()=>a,toc:()=>l});var n=t(87462),i=(t(67294),t(3905)),s=t(26515);const o={},c="Insiders",a={unversionedId:"terminal/reference/stocks/ins/index",id:"terminal/reference/stocks/ins/index",title:"Insiders",description:"Commands",source:"@site/content/terminal/reference/stocks/ins/index.mdx",sourceDirName:"terminal/reference/stocks/ins",slug:"/terminal/reference/stocks/ins/",permalink:"/terminal/reference/stocks/ins/",draft:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/terminal/reference/stocks/ins/index.mdx",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"topsells",permalink:"/terminal/reference/stocks/gov/topsells"},next:{title:"act",permalink:"/terminal/reference/stocks/ins/act"}},d={},l=[{value:"Commands",id:"commands",level:3}],p={toc:l},m="wrapper";function f(e){let{components:r,...t}=e;return(0,i.kt)(m,(0,n.Z)({},p,t,{components:r,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"insiders"},"Insiders"),(0,i.kt)("h3",{id:"commands"},"Commands"),(0,i.kt)("ul",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 -ml-6"},(0,i.kt)(s.Z,{title:"Act",description:"Prints insider activity over time [Source: Business Insider]",url:"/terminal/reference/stocks/ins/act",command:!0,mdxType:"ReferenceCard"}),(0,i.kt)(s.Z,{title:"Blcp",description:"Print latest CEO/CFO purchases 25k. [Source: OpenInsider]",url:"/terminal/reference/stocks/ins/blcp",command:!0,mdxType:"ReferenceCard"}),(0,i.kt)(s.Z,{title:"Blcs",description:"Print latest CEO/CFO sales 100k. [Source: OpenInsider]",url:"/terminal/reference/stocks/ins/blcs",command:!0,mdxType:"ReferenceCard"}),(0,i.kt)(s.Z,{title:"Blip",description:"Print latest insider purchases 25k. [Source: OpenInsider]",url:"/terminal/reference/stocks/ins/blip",command:!0,mdxType:"ReferenceCard"}),(0,i.kt)(s.Z,{title:"Blis",description:"Print latest insider sales 100k. [Source: OpenInsider]",url:"/terminal/reference/stocks/ins/blis",command:!0,mdxType:"ReferenceCard"}),(0,i.kt)(s.Z,{title:"Blop",description:"Print latest officer purchases 25k. [Source: OpenInsider]",url:"/terminal/reference/stocks/ins/blop",command:!0,mdxType:"ReferenceCard"}),(0,i.kt)(s.Z,{title:"Blos",description:"Print latest officer sales 100k. [Source: OpenInsider]",url:"/terminal/reference/stocks/ins/blos",command:!0,mdxType:"ReferenceCard"}),(0,i.kt)(s.Z,{title:"Filter",description:"Print open insider filtered data using loaded preset. [Source: OpenInsider]",url:"/terminal/reference/stocks/ins/filter",command:!0,mdxType:"ReferenceCard"}),(0,i.kt)(s.Z,{title:"Lcb",description:"Print latest cluster buys. [Source: OpenInsider]",url:"/terminal/reference/stocks/ins/lcb",command:!0,mdxType:"ReferenceCard"}),(0,i.kt)(s.Z,{title:"Lins",description:"Prints information about inside traders. The following fields are expected: Date, Relationship, Transaction,...",url:"/terminal/reference/stocks/ins/lins",command:!0,mdxType:"ReferenceCard"}),(0,i.kt)(s.Z,{title:"Lip",description:"Print latest insider purchases. [Source: OpenInsider]",url:"/terminal/reference/stocks/ins/lip",command:!0,mdxType:"ReferenceCard"}),(0,i.kt)(s.Z,{title:"Lis",description:"Print latest insider sales. [Source: OpenInsider]",url:"/terminal/reference/stocks/ins/lis",command:!0,mdxType:"ReferenceCard"}),(0,i.kt)(s.Z,{title:"Lit",description:"Print latest insider trading. [Source: OpenInsider]",url:"/terminal/reference/stocks/ins/lit",command:!0,mdxType:"ReferenceCard"}),(0,i.kt)(s.Z,{title:"Load",description:"Load stock ticker to perform analysis on. When the data source is yf, an Indian ticker can be loaded by using...",url:"/terminal/reference/stocks/ins/load",command:!0,mdxType:"ReferenceCard"}),(0,i.kt)(s.Z,{title:"Lpsb",description:"Print latest penny stock buys. [Source: OpenInsider]",url:"/terminal/reference/stocks/ins/lpsb",command:!0,mdxType:"ReferenceCard"}),(0,i.kt)(s.Z,{title:"Set",description:"Set preset from under presets folder.",url:"/terminal/reference/stocks/ins/set",command:!0,mdxType:"ReferenceCard"}),(0,i.kt)(s.Z,{title:"Stats",description:"Open insider filtered data using selected ticker. [Source: OpenInsider]",url:"/terminal/reference/stocks/ins/stats",command:!0,mdxType:"ReferenceCard"}),(0,i.kt)(s.Z,{title:"Tippm",description:"Print top insider purchases of the month. [Source: OpenInsider]",url:"/terminal/reference/stocks/ins/tippm",command:!0,mdxType:"ReferenceCard"}),(0,i.kt)(s.Z,{title:"Tippw",description:"Print top insider purchases of the week. [Source: OpenInsider]",url:"/terminal/reference/stocks/ins/tippw",command:!0,mdxType:"ReferenceCard"}),(0,i.kt)(s.Z,{title:"Tipt",description:"Print top insider purchases of the day. [Source: OpenInsider]",url:"/terminal/reference/stocks/ins/tipt",command:!0,mdxType:"ReferenceCard"}),(0,i.kt)(s.Z,{title:"Tispm",description:"Print top insider sales of the month. [Source: OpenInsider]",url:"/terminal/reference/stocks/ins/tispm",command:!0,mdxType:"ReferenceCard"}),(0,i.kt)(s.Z,{title:"Tispw",description:"Print top insider sales of the week. [Source: OpenInsider]",url:"/terminal/reference/stocks/ins/tispw",command:!0,mdxType:"ReferenceCard"}),(0,i.kt)(s.Z,{title:"Tist",description:"Print top insider sales of the day. [Source: OpenInsider]",url:"/terminal/reference/stocks/ins/tist",command:!0,mdxType:"ReferenceCard"}),(0,i.kt)(s.Z,{title:"Toppm",description:"Print top officer purchases of the month. [Source: OpenInsider]",url:"/terminal/reference/stocks/ins/toppm",command:!0,mdxType:"ReferenceCard"}),(0,i.kt)(s.Z,{title:"Toppw",description:"Print top officer purchases of the week. [Source: OpenInsider]",url:"/terminal/reference/stocks/ins/toppw",command:!0,mdxType:"ReferenceCard"}),(0,i.kt)(s.Z,{title:"Topt",description:"Print top officer purchases of the day. [Source: OpenInsider]",url:"/terminal/reference/stocks/ins/topt",command:!0,mdxType:"ReferenceCard"}),(0,i.kt)(s.Z,{title:"View",description:"View available presets under presets folder.",url:"/terminal/reference/stocks/ins/view",command:!0,mdxType:"ReferenceCard"})))}f.isMDXComponent=!0}}]);