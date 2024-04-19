"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[96052],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>m});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},d=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),p=c(r),f=a,m=p["".concat(l,".").concat(f)]||p[f]||u[f]||o;return r?n.createElement(m,i(i({ref:t},d),{},{components:r})):n.createElement(m,i({ref:t},d))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=f;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:a,i[1]=s;for(var c=2;c<o;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},62872:(e,t,r)=>{r.d(t,{Z:()=>s});var n=r(39960),a=r(86010),o=r(67294),i=r(16550);function s(e){let{title:t,url:r,description:s,command:l}=e;const{pathname:c}=(0,i.TH)(),d=c.replace(/\/v\d+/,"");return o.createElement(n.Z,{className:(0,a.Z)("rounded border-2 !no-underline border-grey-600 p-6 cursor-pointer relative overflow-hidden hover:shadow-2xl hover:-translate-y-2 transform transition-all duration-300 ease-in-out font-bold shadow-2xl",{header_docs_terminal:d.startsWith("/terminal"),"bg-gradient-to-r from-[#541c12] to-[rgba(84, 29, 19, 1)]":d.startsWith("/sdk")||d.startsWith("/platform"),"bg-gradient-to-r from-grey-800 to-purple-800":d.startsWith("/bot"),header_docs:!(d.startsWith("/terminal")||d.startsWith("/sdk")||d.startsWith("/platform")||d.startsWith("/bot"))}),to:r},o.createElement("div",{className:"absolute top-0 right-0 left-0 bottom-0 bg-gradient-to-t from-black to-transparent"}),o.createElement("p",{className:"py-2 font-bold text-lg my-0"},t,""),s?o.createElement("p",{className:"text-grey-200 text-xs mt-2 mb-0"},s):null)}},47920:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>f,frontMatter:()=>i,metadata:()=>l,toc:()=>d});var n=r(87462),a=(r(67294),r(3905)),o=r(62872);const i={},s="alerts",l={unversionedId:"bot/reference/discord/alerts/index",id:"bot/reference/discord/alerts/index",title:"alerts",description:"<ReferenceCard",source:"@site/content/bot/reference/discord/alerts/index.mdx",sourceDirName:"bot/reference/discord/alerts",slug:"/bot/reference/discord/alerts/",permalink:"/bot/reference/discord/alerts/",draft:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/bot/reference/discord/alerts/index.mdx",tags:[],version:"current",lastUpdatedBy:"montezdesousa",lastUpdatedAt:1713550349,formattedLastUpdatedAt:"Apr 19, 2024",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"OpenBB Discord Reference",permalink:"/bot/reference/discord/"},next:{title:"create",permalink:"/bot/reference/discord/alerts/create"}},c={},d=[],p={toc:d},u="wrapper";function f(e){let{components:t,...r}=e;return(0,a.kt)(u,(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"alerts"},"alerts"),(0,a.kt)("ul",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 -ml-6"},(0,a.kt)(o.Z,{title:"create",description:"This command creates an alert for a given symbol (ex. BTCUSD) that will notify the user when the price is equal...",url:"/bot/reference/discord/alerts/create",mdxType:"ReferenceCard"}),(0,a.kt)(o.Z,{title:"delete",description:"This command allows the user to delete an active alert they have set.",url:"/bot/reference/discord/alerts/delete",mdxType:"ReferenceCard"}),(0,a.kt)(o.Z,{title:"list",description:"This command allows the user to view a list of all their active alerts. It displays each alert along with its...",url:"/bot/reference/discord/alerts/list",mdxType:"ReferenceCard"}),(0,a.kt)(o.Z,{title:"update",description:"This command allows the user to update the condition on an active alert, such as changing the value of a price...",url:"/bot/reference/discord/alerts/update",mdxType:"ReferenceCard"})))}f.isMDXComponent=!0}}]);