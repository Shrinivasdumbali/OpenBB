"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[91089],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>g});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},u="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,c=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),u=p(n),m=a,g=u["".concat(c,".").concat(m)]||u[m]||s[m]||l;return n?r.createElement(g,o(o({ref:t},d),{},{components:n})):r.createElement(g,o({ref:t},d))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=m;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[u]="string"==typeof e?e:a,o[1]=i;for(var p=2;p<l;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},88828:(e,t,n)=>{n.d(t,{Z:()=>l});var r=n(67294),a=n(35742);function l(e){let{title:t}=e;return r.createElement(a.Z,null,r.createElement("title",null,t))}},22471:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>c,toc:()=>d});var r=n(87462),a=(n(67294),n(3905)),l=n(88828);const o={title:"tv",description:"This section of the page is a guide on using the function to display token volume on different Decentralized Exchanges. It includes parameters such as the currency of the displayed trade amount and options to sort data.",keywords:["decentralized exchanges","token volume","ERC20 token","trade amount","sort by column","data sorting"]},i=void 0,c={unversionedId:"terminal/reference/crypto/onchain/tv",id:"terminal/reference/crypto/onchain/tv",title:"tv",description:"This section of the page is a guide on using the function to display token volume on different Decentralized Exchanges. It includes parameters such as the currency of the displayed trade amount and options to sort data.",source:"@site/content/terminal/reference/crypto/onchain/tv.md",sourceDirName:"terminal/reference/crypto/onchain",slug:"/terminal/reference/crypto/onchain/tv",permalink:"/terminal/reference/crypto/onchain/tv",draft:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/terminal/reference/crypto/onchain/tv.md",tags:[],version:"current",lastUpdatedBy:"Danglewood",lastUpdatedAt:1711376839,formattedLastUpdatedAt:"Mar 25, 2024",frontMatter:{title:"tv",description:"This section of the page is a guide on using the function to display token volume on different Decentralized Exchanges. It includes parameters such as the currency of the displayed trade amount and options to sort data.",keywords:["decentralized exchanges","token volume","ERC20 token","trade amount","sort by column","data sorting"]},sidebar:"tutorialSidebar",previous:{title:"ttcp",permalink:"/terminal/reference/crypto/onchain/ttcp"},next:{title:"tx",permalink:"/terminal/reference/crypto/onchain/tx"}},p={},d=[{value:"Usage",id:"usage",level:3},{value:"Parameters",id:"parameters",level:2}],u={toc:d},s="wrapper";function m(e){let{components:t,...n}=e;return(0,a.kt)(s,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)(l.Z,{title:"crypto /onchain/tv - Reference | OpenBB Terminal Docs",mdxType:"HeadTitle"}),(0,a.kt)("p",null,"Display token volume on different Decentralized Exchanges. ","[Source: https://graphql.bitquery.io/]"),(0,a.kt)("h3",{id:"usage"},"Usage"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python",metastring:"wordwrap",wordwrap:!0},"tv -c COIN [-vs {ETH,USD,BTC,USDT}] [-l LIMIT] [-s {exchange,trades,tradeAmount}] [-r]\n")),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"parameters"},"Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Name"),(0,a.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"),(0,a.kt)("th",{parentName:"tr",align:null},"Default"),(0,a.kt)("th",{parentName:"tr",align:null},"Optional"),(0,a.kt)("th",{parentName:"tr",align:null},"Choices"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"coin"),(0,a.kt)("td",{parentName:"tr",align:null},"-c  --coin"),(0,a.kt)("td",{parentName:"tr",align:null},"ERC20 token symbol or address."),(0,a.kt)("td",{parentName:"tr",align:null},"None"),(0,a.kt)("td",{parentName:"tr",align:null},"False"),(0,a.kt)("td",{parentName:"tr",align:null},"None")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"vs"),(0,a.kt)("td",{parentName:"tr",align:null},"-vs  --vs"),(0,a.kt)("td",{parentName:"tr",align:null},"Currency of displayed trade amount."),(0,a.kt)("td",{parentName:"tr",align:null},"USD"),(0,a.kt)("td",{parentName:"tr",align:null},"True"),(0,a.kt)("td",{parentName:"tr",align:null},"ETH, USD, BTC, USDT")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"limit"),(0,a.kt)("td",{parentName:"tr",align:null},"-l  --limit"),(0,a.kt)("td",{parentName:"tr",align:null},"display N number records"),(0,a.kt)("td",{parentName:"tr",align:null},"10"),(0,a.kt)("td",{parentName:"tr",align:null},"True"),(0,a.kt)("td",{parentName:"tr",align:null},"None")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"sortby"),(0,a.kt)("td",{parentName:"tr",align:null},"-s  --sort"),(0,a.kt)("td",{parentName:"tr",align:null},"Sort by given column."),(0,a.kt)("td",{parentName:"tr",align:null},"trades"),(0,a.kt)("td",{parentName:"tr",align:null},"True"),(0,a.kt)("td",{parentName:"tr",align:null},"exchange, trades, tradeAmount")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"reverse"),(0,a.kt)("td",{parentName:"tr",align:null},"-r  --reverse"),(0,a.kt)("td",{parentName:"tr",align:null},"Data is sorted in descending order by default. Reverse flag will sort it in an ascending way. Only works when raw data is displayed."),(0,a.kt)("td",{parentName:"tr",align:null},"False"),(0,a.kt)("td",{parentName:"tr",align:null},"True"),(0,a.kt)("td",{parentName:"tr",align:null},"None")))),(0,a.kt)("hr",null))}m.isMDXComponent=!0}}]);