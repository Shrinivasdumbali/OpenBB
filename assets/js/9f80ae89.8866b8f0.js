"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[53480],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=c(n),d=o,f=m["".concat(l,".").concat(d)]||m[d]||u[d]||i;return n?r.createElement(f,a(a({ref:t},p),{},{components:n})):r.createElement(f,a({ref:t},p))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[m]="string"==typeof e?e:o,a[1]=s;for(var c=2;c<i;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},88828:(e,t,n)=>{n.d(t,{Z:()=>i});var r=n(67294),o=n(35742);function i(e){let{title:t}=e;return r.createElement(o.Z,null,r.createElement("title",null,t))}},86460:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>d,frontMatter:()=>a,metadata:()=>l,toc:()=>p});var r=n(87462),o=(n(67294),n(3905)),i=n(88828);const a={title:"ipolist",description:"The ipolist page provides information on viewing the 10 most recent and upcoming IPOs, including the company name, the IPO date, and the stock exchange. It serves as a tool for users to stay informed about new investment opportunities.",keywords:["ipolist","IPOs","Initial Public Offerings","stock exchange","investment opportunities","new companies","upcoming IPOs"]},s=void 0,l={unversionedId:"bot/reference/telegram/discovery/ipolist",id:"bot/reference/telegram/discovery/ipolist",title:"ipolist",description:"The ipolist page provides information on viewing the 10 most recent and upcoming IPOs, including the company name, the IPO date, and the stock exchange. It serves as a tool for users to stay informed about new investment opportunities.",source:"@site/content/bot/reference/telegram/discovery/ipolist.md",sourceDirName:"bot/reference/telegram/discovery",slug:"/bot/reference/telegram/discovery/ipolist",permalink:"/bot/reference/telegram/discovery/ipolist",draft:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/bot/reference/telegram/discovery/ipolist.md",tags:[],version:"current",lastUpdatedBy:"montezdesousa",lastUpdatedAt:1709061006,formattedLastUpdatedAt:"Feb 27, 2024",frontMatter:{title:"ipolist",description:"The ipolist page provides information on viewing the 10 most recent and upcoming IPOs, including the company name, the IPO date, and the stock exchange. It serves as a tool for users to stay informed about new investment opportunities.",keywords:["ipolist","IPOs","Initial Public Offerings","stock exchange","investment opportunities","new companies","upcoming IPOs"]},sidebar:"tutorialSidebar",previous:{title:"holidays",permalink:"/bot/reference/telegram/discovery/holidays"},next:{title:"pop",permalink:"/bot/reference/telegram/discovery/pop"}},c={},p=[{value:"Usage",id:"usage",level:3},{value:"Parameters",id:"parameters",level:2},{value:"Examples",id:"examples",level:2}],m={toc:p},u="wrapper";function d(e){let{components:t,...n}=e;return(0,o.kt)(u,(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)(i.Z,{title:"discovery: ipolist - Telegram Reference | OpenBB Bot Docs",mdxType:"HeadTitle"}),(0,o.kt)("p",null,"This command allows the user to view 10 of the most recent and upcoming Initial Public Offerings (IPOs) including the company name, the IPO date, and the stock exchange. This information can help users stay up-to-date with the latest IPOs, and provide them with opportunities to invest in new companies."),(0,o.kt)("h3",{id:"usage"},"Usage"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python",metastring:"wordwrap",wordwrap:!0},"/ipolist\n")),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"parameters"},"Parameters"),(0,o.kt)("p",null,"This command has no parameters"),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"examples"},"Examples"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"/ipolist\n")),(0,o.kt)("hr",null))}d.isMDXComponent=!0}}]);