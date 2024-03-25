"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[71347],{3905:(t,e,a)=>{a.d(e,{Zo:()=>p,kt:()=>f});var n=a(67294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function o(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?o(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function l(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},o=Object.keys(t);for(n=0;n<o.length;n++)a=o[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(n=0;n<o.length;n++)a=o[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var d=n.createContext({}),s=function(t){var e=n.useContext(d),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},p=function(t){var e=s(t.components);return n.createElement(d.Provider,{value:e},t.children)},m="mdxType",c={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},u=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,o=t.originalType,d=t.parentName,p=l(t,["components","mdxType","originalType","parentName"]),m=s(a),u=r,f=m["".concat(d,".").concat(u)]||m[u]||c[u]||o;return a?n.createElement(f,i(i({ref:e},p),{},{components:a})):n.createElement(f,i({ref:e},p))}));function f(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var o=a.length,i=new Array(o);i[0]=u;var l={};for(var d in e)hasOwnProperty.call(e,d)&&(l[d]=e[d]);l.originalType=t,l[m]="string"==typeof t?t:r,i[1]=l;for(var s=2;s<o;s++)i[s]=a[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},88828:(t,e,a)=>{a.d(e,{Z:()=>o});var n=a(67294),r=a(35742);function o(t){let{title:e}=t;return n.createElement(r.Z,null,n.createElement("title",null,e))}},23687:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>s,contentTitle:()=>l,default:()=>u,frontMatter:()=>i,metadata:()=>d,toc:()=>p});var n=a(87462),r=(a(67294),a(3905)),o=a(88828);const i={title:"commands add",description:"This documentation page provides in-depth insight on how to use the 'add' command in the context of autoposting with OpenBB bot. It gives details of usage, parameters and even provides a few illustrative examples.",keywords:["OpenBB bot","autopost commands","autoposting","commands add","usage parameters","automated notifications"]},l=void 0,d={unversionedId:"bot/reference/discord/autopost/add",id:"bot/reference/discord/autopost/add",title:"commands add",description:"This documentation page provides in-depth insight on how to use the 'add' command in the context of autoposting with OpenBB bot. It gives details of usage, parameters and even provides a few illustrative examples.",source:"@site/content/bot/reference/discord/autopost/add.md",sourceDirName:"bot/reference/discord/autopost",slug:"/bot/reference/discord/autopost/add",permalink:"/bot/reference/discord/autopost/add",draft:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/bot/reference/discord/autopost/add.md",tags:[],version:"current",lastUpdatedBy:"Danglewood",lastUpdatedAt:1711376839,formattedLastUpdatedAt:"Mar 25, 2024",frontMatter:{title:"commands add",description:"This documentation page provides in-depth insight on how to use the 'add' command in the context of autoposting with OpenBB bot. It gives details of usage, parameters and even provides a few illustrative examples.",keywords:["OpenBB bot","autopost commands","autoposting","commands add","usage parameters","automated notifications"]},sidebar:"tutorialSidebar",previous:{title:"autopost",permalink:"/bot/reference/discord/autopost/"},next:{title:"list",permalink:"/bot/reference/discord/autopost/list"}},s={},p=[{value:"Usage",id:"usage",level:3},{value:"Parameters",id:"parameters",level:2},{value:"Examples",id:"examples",level:2}],m={toc:p},c="wrapper";function u(t){let{components:e,...a}=t;return(0,r.kt)(c,(0,n.Z)({},m,a,{components:e,mdxType:"MDXLayout"}),(0,r.kt)(o.Z,{title:"autopost: commands add - Discord Reference | OpenBB Bot Docs",mdxType:"HeadTitle"}),(0,r.kt)("p",null,'This command allows the user to add an autopost command to a channel. It allows the user to receive notifications from OpenBB bot in the channel without having to manually query them. This can be used for all commands that appear in the list when you run "autopost commands add"'),(0,r.kt)("h3",{id:"usage"},"Usage"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python",metastring:"wordwrap",wordwrap:!0},"/autopost commands add cmd interval [start_time] [stop_time]\n")),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"parameters"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Optional"),(0,r.kt)("th",{parentName:"tr",align:null},"Choices"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"cmd"),(0,r.kt)("td",{parentName:"tr",align:null},"Pick the command you want to assign for autoposting"),(0,r.kt)("td",{parentName:"tr",align:null},"False"),(0,r.kt)("td",{parentName:"tr",align:null},"List of commands that allow auto posting")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"interval"),(0,r.kt)("td",{parentName:"tr",align:null},"How oftern to post the autopost command"),(0,r.kt)("td",{parentName:"tr",align:null},"False"),(0,r.kt)("td",{parentName:"tr",align:null},"5m, 15m, 30m, 1hr, 2hr, 4hr, 6hr")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"start_time"),(0,r.kt)("td",{parentName:"tr",align:null},"Time to start the autopost command - ex. If I want to start at 8am I do 8"),(0,r.kt)("td",{parentName:"tr",align:null},"True"),(0,r.kt)("td",{parentName:"tr",align:null},"24hr time")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"stop_time"),(0,r.kt)("td",{parentName:"tr",align:null},"Time to stop the autopost command - ex. If I want to stop at 6pm I do 18"),(0,r.kt)("td",{parentName:"tr",align:null},"True"),(0,r.kt)("td",{parentName:"tr",align:null},"24hr time")))),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"examples"},"Examples"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"/autopost commands add cmd:/cm interval:1 Hour\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"/autopost commands add cmd: /cm interval: 1 Hour start_time: 9 stop_time: 10\n")))}u.isMDXComponent=!0}}]);