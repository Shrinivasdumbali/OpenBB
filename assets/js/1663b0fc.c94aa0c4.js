"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[51871],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>f});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},l=Object.keys(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var c=a.createContext({}),d=function(e){var t=a.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=d(e.components);return a.createElement(c.Provider,{value:t},e.children)},s="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,l=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),s=d(r),m=n,f=s["".concat(c,".").concat(m)]||s[m]||u[m]||l;return r?a.createElement(f,o(o({ref:t},p),{},{components:r})):a.createElement(f,o({ref:t},p))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=r.length,o=new Array(l);o[0]=m;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[s]="string"==typeof e?e:n,o[1]=i;for(var d=2;d<l;d++)o[d]=r[d];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},88828:(e,t,r)=>{r.d(t,{Z:()=>l});var a=r(67294),n=r(35742);function l(e){let{title:t}=e;return a.createElement(n.Z,null,a.createElement("title",null,t))}},61511:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>d,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>c,toc:()=>p});var a=r(87462),n=(r(67294),r(3905)),l=r(88828);const o={title:"update",description:"This page provides description and usage of the 'update' command within the context of active alerts. It includes details on how to change the condition of an active alert, specifically for price alerts.",keywords:["Update command","Price alert","Active alerts","Update condition","Deactivate alert"]},i=void 0,c={unversionedId:"bot/reference/discord/alerts/update",id:"bot/reference/discord/alerts/update",title:"update",description:"This page provides description and usage of the 'update' command within the context of active alerts. It includes details on how to change the condition of an active alert, specifically for price alerts.",source:"@site/content/bot/reference/discord/alerts/update.md",sourceDirName:"bot/reference/discord/alerts",slug:"/bot/reference/discord/alerts/update",permalink:"/bot/reference/discord/alerts/update",draft:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/bot/reference/discord/alerts/update.md",tags:[],version:"current",lastUpdatedBy:"montezdesousa",lastUpdatedAt:1709061006,formattedLastUpdatedAt:"Feb 27, 2024",frontMatter:{title:"update",description:"This page provides description and usage of the 'update' command within the context of active alerts. It includes details on how to change the condition of an active alert, specifically for price alerts.",keywords:["Update command","Price alert","Active alerts","Update condition","Deactivate alert"]},sidebar:"tutorialSidebar",previous:{title:"list",permalink:"/bot/reference/discord/alerts/list"},next:{title:"autopost",permalink:"/bot/reference/discord/autopost/"}},d={},p=[{value:"Usage",id:"usage",level:3},{value:"Parameters",id:"parameters",level:2},{value:"Examples",id:"examples",level:2}],s={toc:p},u="wrapper";function m(e){let{components:t,...r}=e;return(0,n.kt)(u,(0,a.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)(l.Z,{title:"alerts: update - Discord Reference | OpenBB Bot Docs",mdxType:"HeadTitle"}),(0,n.kt)("p",null,"This command allows the user to update the condition on an active alert, such as changing the value of a price alert. The command will update the alert with the new condition and keep the alert active until it is manually deactivated or the alert's condition is met."),(0,n.kt)("h3",{id:"usage"},"Usage"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-python",metastring:"wordwrap",wordwrap:!0},"/alerts update alerts condition price\n")),(0,n.kt)("hr",null),(0,n.kt)("h2",{id:"parameters"},"Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Name"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"),(0,n.kt)("th",{parentName:"tr",align:null},"Optional"),(0,n.kt)("th",{parentName:"tr",align:null},"Choices"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"alerts"),(0,n.kt)("td",{parentName:"tr",align:null},"Your active alerts"),(0,n.kt)("td",{parentName:"tr",align:null},"False"),(0,n.kt)("td",{parentName:"tr",align:null},"None")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"condition"),(0,n.kt)("td",{parentName:"tr",align:null},"Update condition for alert"),(0,n.kt)("td",{parentName:"tr",align:null},"False"),(0,n.kt)("td",{parentName:"tr",align:null},"Equal or Above (above or equal), Equal or Below (below or equal)")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"price"),(0,n.kt)("td",{parentName:"tr",align:null},"Update alert to this price"),(0,n.kt)("td",{parentName:"tr",align:null},"False"),(0,n.kt)("td",{parentName:"tr",align:null},"None")))),(0,n.kt)("hr",null),(0,n.kt)("h2",{id:"examples"},"Examples"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"/alerts update alerts: condition: price:\n")),(0,n.kt)("hr",null))}m.isMDXComponent=!0}}]);