"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[4571],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>f});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function d(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=o.createContext({}),p=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},s=function(e){var t=p(e.components);return o.createElement(l.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,s=d(e,["components","mdxType","originalType","parentName"]),c=p(n),m=r,f=c["".concat(l,".").concat(m)]||c[m]||u[m]||i;return n?o.createElement(f,a(a({ref:t},s),{},{components:n})):o.createElement(f,a({ref:t},s))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,a=new Array(i);a[0]=m;var d={};for(var l in t)hasOwnProperty.call(t,l)&&(d[l]=t[l]);d.originalType=e,d[c]="string"==typeof e?e:r,a[1]=d;for(var p=2;p<i;p++)a[p]=n[p];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},88828:(e,t,n)=>{n.d(t,{Z:()=>i});var o=n(67294),r=n(35742);function i(e){let{title:t}=e;return o.createElement(r.Z,null,o.createElement("title",null,t))}},39836:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>d,default:()=>m,frontMatter:()=>a,metadata:()=>l,toc:()=>s});var o=n(87462),r=(n(67294),n(3905)),i=n(88828);const a={title:"How To Guides",sidebar_position:1,description:"The pages in this section outline different processes for building with the OpenBB Platform. Guides cover adding data, toolkit and OBBject extensions.",keywords:["OpenBB Platform","Open source","Python interface","REST API","contribution","contributing","documentation","code","provider","data","endpoint","existing","OpenBB extensions","OpenBB provider","standard model","provider model","how to","new","template"]},d=void 0,l={unversionedId:"platform/development/how-to/index",id:"platform/development/how-to/index",title:"How To Guides",description:"The pages in this section outline different processes for building with the OpenBB Platform. Guides cover adding data, toolkit and OBBject extensions.",source:"@site/content/platform/development/how-to/index.md",sourceDirName:"platform/development/how-to",slug:"/platform/development/how-to/",permalink:"/platform/development/how-to/",draft:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/platform/development/how-to/index.md",tags:[],version:"current",lastUpdatedBy:"montezdesousa",lastUpdatedAt:1713550349,formattedLastUpdatedAt:"Apr 19, 2024",sidebarPosition:1,frontMatter:{title:"How To Guides",sidebar_position:1,description:"The pages in this section outline different processes for building with the OpenBB Platform. Guides cover adding data, toolkit and OBBject extensions.",keywords:["OpenBB Platform","Open source","Python interface","REST API","contribution","contributing","documentation","code","provider","data","endpoint","existing","OpenBB extensions","OpenBB provider","standard model","provider model","how to","new","template"]},sidebar:"tutorialSidebar",previous:{title:"OBBject",permalink:"/platform/development/obbject"},next:{title:"How To Add A Data Provider To An Existing Endpoint",permalink:"/platform/development/how-to/add_data_to_existing_endpoint"}},p={},s=[],c={toc:s},u="wrapper";function m(e){let{components:t,...n}=e;return(0,r.kt)(u,(0,o.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)(i.Z,{title:"How To Guides - Developer - Development | OpenBB Platform Docs",mdxType:"HeadTitle"}),(0,r.kt)("p",null,"The pages in this section provide practical examples for getting started building with, or contributing to, the OpenBB Platform."),(0,r.kt)("p",null,"Topics covered include:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"how-to/add_data_provider_extension"},"Creating a new data provider extension")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"how-to/add_obbject_extension"},"Extending the OBBject class")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"how-to/add_data_to_existing_endpoint"},"Add new data to an existing endpoint")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"how-to/add_toolkit_extension"},"Build a new router path")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"how-to/add_endpoint_to_existing_provider#how-to-build-a-standard-model"},"How to make a new standard model"))))}m.isMDXComponent=!0}}]);