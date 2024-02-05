"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[31056],{3905:(t,e,r)=>{r.d(e,{Zo:()=>c,kt:()=>k});var n=r(67294);function a(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function i(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function o(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?i(Object(r),!0).forEach((function(e){a(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function l(t,e){if(null==t)return{};var r,n,a=function(t,e){if(null==t)return{};var r,n,a={},i=Object.keys(t);for(n=0;n<i.length;n++)r=i[n],e.indexOf(r)>=0||(a[r]=t[r]);return a}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(n=0;n<i.length;n++)r=i[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(a[r]=t[r])}return a}var p=n.createContext({}),s=function(t){var e=n.useContext(p),r=e;return t&&(r="function"==typeof t?t(e):o(o({},e),t)),r},c=function(t){var e=s(t.components);return n.createElement(p.Provider,{value:e},t.children)},d="mdxType",m={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},u=n.forwardRef((function(t,e){var r=t.components,a=t.mdxType,i=t.originalType,p=t.parentName,c=l(t,["components","mdxType","originalType","parentName"]),d=s(r),u=a,k=d["".concat(p,".").concat(u)]||d[u]||m[u]||i;return r?n.createElement(k,o(o({ref:e},c),{},{components:r})):n.createElement(k,o({ref:e},c))}));function k(t,e){var r=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var i=r.length,o=new Array(i);o[0]=u;var l={};for(var p in e)hasOwnProperty.call(e,p)&&(l[p]=e[p]);l.originalType=t,l[d]="string"==typeof t?t:a,o[1]=l;for(var s=2;s<i;s++)o[s]=r[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},88828:(t,e,r)=>{r.d(e,{Z:()=>i});var n=r(67294),a=r(35742);function i(t){let{title:e}=t;return n.createElement(a.Z,null,n.createElement("title",null,e))}},29816:(t,e,r)=>{r.r(e),r.d(e,{assets:()=>s,contentTitle:()=>l,default:()=>u,frontMatter:()=>o,metadata:()=>p,toc:()=>c});var n=r(87462),a=(r(67294),r(3905)),i=r(88828);const o={title:"hist",description:"Learn how to use the 'op hist' command to retrieve the historical price of options given certain parameters such as ticker, expiry, strike, option type and interval for the past x number of days in chart format. Includes examples and descriptions of the parameters.",keywords:["Stock Ticker","Expiration Date","Option Strike Price","Calls or Puts","Chart Minute Interval","Past Days to Display","op hist command","historical price of options","chart format"]},l=void 0,p={unversionedId:"bot/reference/discord/options/hist",id:"bot/reference/discord/options/hist",title:"hist",description:"Learn how to use the 'op hist' command to retrieve the historical price of options given certain parameters such as ticker, expiry, strike, option type and interval for the past x number of days in chart format. Includes examples and descriptions of the parameters.",source:"@site/content/bot/reference/discord/options/hist.md",sourceDirName:"bot/reference/discord/options",slug:"/bot/reference/discord/options/hist",permalink:"/bot/reference/discord/options/hist",draft:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/bot/reference/discord/options/hist.md",tags:[],version:"current",lastUpdatedBy:"montezdesousa",lastUpdatedAt:1707152475,formattedLastUpdatedAt:"Feb 5, 2024",frontMatter:{title:"hist",description:"Learn how to use the 'op hist' command to retrieve the historical price of options given certain parameters such as ticker, expiry, strike, option type and interval for the past x number of days in chart format. Includes examples and descriptions of the parameters.",keywords:["Stock Ticker","Expiration Date","Option Strike Price","Calls or Puts","Chart Minute Interval","Past Days to Display","op hist command","historical price of options","chart format"]},sidebar:"tutorialSidebar",previous:{title:"highiv",permalink:"/bot/reference/discord/options/highiv"},next:{title:"indexpc",permalink:"/bot/reference/discord/options/indexpc"}},s={},c=[{value:"Usage",id:"usage",level:3},{value:"Parameters",id:"parameters",level:2},{value:"Examples",id:"examples",level:2}],d={toc:c},m="wrapper";function u(t){let{components:e,...r}=t;return(0,a.kt)(m,(0,n.Z)({},d,r,{components:e,mdxType:"MDXLayout"}),(0,a.kt)(i.Z,{title:"options: hist - Discord Reference | OpenBB Bot Docs",mdxType:"HeadTitle"}),(0,a.kt)("p",null,"This command allows the user to retrieve the historical price of options for the given parameters of a ticker, expiry, strike , option type, and interval for the past x days in a chart format."),(0,a.kt)("h3",{id:"usage"},"Usage"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python",metastring:"wordwrap",wordwrap:!0},"/op hist ticker expiry strike opt_type interval [past_days]\n")),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"parameters"},"Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Name"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"),(0,a.kt)("th",{parentName:"tr",align:null},"Optional"),(0,a.kt)("th",{parentName:"tr",align:null},"Choices"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"ticker"),(0,a.kt)("td",{parentName:"tr",align:null},"Stock Ticker"),(0,a.kt)("td",{parentName:"tr",align:null},"False"),(0,a.kt)("td",{parentName:"tr",align:null},"None")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"expiry"),(0,a.kt)("td",{parentName:"tr",align:null},"Expiration Date YYYY-MM-DD format"),(0,a.kt)("td",{parentName:"tr",align:null},"False"),(0,a.kt)("td",{parentName:"tr",align:null},"None")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"strike"),(0,a.kt)("td",{parentName:"tr",align:null},"Option Strike Price"),(0,a.kt)("td",{parentName:"tr",align:null},"False"),(0,a.kt)("td",{parentName:"tr",align:null},"None")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"opt_type"),(0,a.kt)("td",{parentName:"tr",align:null},"Calls or Puts"),(0,a.kt)("td",{parentName:"tr",align:null},"False"),(0,a.kt)("td",{parentName:"tr",align:null},"Calls, Puts")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"interval"),(0,a.kt)("td",{parentName:"tr",align:null},"Chart Minute Interval, 1440 for Daily"),(0,a.kt)("td",{parentName:"tr",align:null},"False"),(0,a.kt)("td",{parentName:"tr",align:null},"15 (15), 30 (30), 60 (60), 1440 (1440)")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"past_days"),(0,a.kt)("td",{parentName:"tr",align:null},"Past Days to Display. Default: 5"),(0,a.kt)("td",{parentName:"tr",align:null},"True"),(0,a.kt)("td",{parentName:"tr",align:null},"None")))),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"examples"},"Examples"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"/op hist ticker:AMD expiry:2022-07-29 strike:80 opt_type:Calls interval:15 past_days:5\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"/op hist ticker:AMD expiry:2022-07-29 strike:80 opt_type:Calls interval:15\n")),(0,a.kt)("hr",null))}u.isMDXComponent=!0}}]);