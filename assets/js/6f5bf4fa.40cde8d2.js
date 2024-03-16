"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[17348],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>g});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=r.createContext({}),m=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},d=function(e){var t=m(e.components);return r.createElement(s.Provider,{value:t},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,s=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),u=m(a),p=n,g=u["".concat(s,".").concat(p)]||u[p]||c[p]||i;return a?r.createElement(g,l(l({ref:t},d),{},{components:a})):r.createElement(g,l({ref:t},d))}));function g(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,l=new Array(i);l[0]=p;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[u]="string"==typeof e?e:n,l[1]=o;for(var m=2;m<i;m++)l[m]=a[m];return r.createElement.apply(null,l)}return r.createElement.apply(null,a)}p.displayName="MDXCreateElement"},88828:(e,t,a)=>{a.d(t,{Z:()=>i});var r=a(67294),n=a(35742);function i(e){let{title:t}=e;return r.createElement(n.Z,null,r.createElement("title",null,t))}},21609:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>m,contentTitle:()=>o,default:()=>p,frontMatter:()=>l,metadata:()=>s,toc:()=>d});var r=a(87462),n=(a(67294),a(3905)),i=a(88828);const l={title:"ueat",description:"The ueat page provides a means to display the number of unique ethereum addresses which made a transaction in a given time interval. It provides options to limit or sort data and to set time intervals. Statistics such as average, medium, and maximum gas prices are available and data can be displayed in reverse or sorted order.",keywords:["ueat","ethereum","transaction","time interval","unique addresses","bitquery","sort","average gas price","medium gas price","maximum gas price","raw data","reverse flag"]},o=void 0,s={unversionedId:"terminal/reference/crypto/onchain/ueat",id:"terminal/reference/crypto/onchain/ueat",title:"ueat",description:"The ueat page provides a means to display the number of unique ethereum addresses which made a transaction in a given time interval. It provides options to limit or sort data and to set time intervals. Statistics such as average, medium, and maximum gas prices are available and data can be displayed in reverse or sorted order.",source:"@site/content/terminal/reference/crypto/onchain/ueat.md",sourceDirName:"terminal/reference/crypto/onchain",slug:"/terminal/reference/crypto/onchain/ueat",permalink:"/terminal/reference/crypto/onchain/ueat",draft:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/terminal/reference/crypto/onchain/ueat.md",tags:[],version:"current",lastUpdatedBy:"Danglewood",lastUpdatedAt:1710625624,formattedLastUpdatedAt:"Mar 16, 2024",frontMatter:{title:"ueat",description:"The ueat page provides a means to display the number of unique ethereum addresses which made a transaction in a given time interval. It provides options to limit or sort data and to set time intervals. Statistics such as average, medium, and maximum gas prices are available and data can be displayed in reverse or sorted order.",keywords:["ueat","ethereum","transaction","time interval","unique addresses","bitquery","sort","average gas price","medium gas price","maximum gas price","raw data","reverse flag"]},sidebar:"tutorialSidebar",previous:{title:"tx",permalink:"/terminal/reference/crypto/onchain/tx"},next:{title:"whales",permalink:"/terminal/reference/crypto/onchain/whales"}},m={},d=[{value:"Usage",id:"usage",level:3},{value:"Parameters",id:"parameters",level:2}],u={toc:d},c="wrapper";function p(e){let{components:t,...a}=e;return(0,n.kt)(c,(0,r.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)(i.Z,{title:"crypto /onchain/ueat - Reference | OpenBB Terminal Docs",mdxType:"HeadTitle"}),(0,n.kt)("p",null,"Display number of unique ethereum addresses which made a transaction in given time interval, ","[Source: https://graphql.bitquery.io/]"),(0,n.kt)("h3",{id:"usage"},"Usage"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-python",metastring:"wordwrap",wordwrap:!0},"ueat [-l LIMIT] [-s {date,uniqueSenders,transactions,averageGasPrice,mediumGasPrice,maximumGasPrice}] [-i {day,month,week}] [-r]\n")),(0,n.kt)("hr",null),(0,n.kt)("h2",{id:"parameters"},"Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Name"),(0,n.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"),(0,n.kt)("th",{parentName:"tr",align:null},"Default"),(0,n.kt)("th",{parentName:"tr",align:null},"Optional"),(0,n.kt)("th",{parentName:"tr",align:null},"Choices"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"limit"),(0,n.kt)("td",{parentName:"tr",align:null},"-l  --limit"),(0,n.kt)("td",{parentName:"tr",align:null},"display N number records. (Maximum available time period is 90 days.Depending on chosen time period, display N records will be recalculated. E.g.For interval: month, and number: 10, period of calculation equals to 300, but because of max days limit: 90, it will only return last 3 months (3 records)."),(0,n.kt)("td",{parentName:"tr",align:null},"10"),(0,n.kt)("td",{parentName:"tr",align:null},"True"),(0,n.kt)("td",{parentName:"tr",align:null},"range(1, 90)")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"sortby"),(0,n.kt)("td",{parentName:"tr",align:null},"-s  --sort"),(0,n.kt)("td",{parentName:"tr",align:null},"Sort by given column."),(0,n.kt)("td",{parentName:"tr",align:null},"date"),(0,n.kt)("td",{parentName:"tr",align:null},"True"),(0,n.kt)("td",{parentName:"tr",align:null},"date, uniqueSenders, transactions, averageGasPrice, mediumGasPrice, maximumGasPrice")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"interval"),(0,n.kt)("td",{parentName:"tr",align:null},"-i  --interval"),(0,n.kt)("td",{parentName:"tr",align:null},"Time interval in which ethereum address made transaction. month, week or day. Maximum time period is 90 days (3 months, 14 weeks)"),(0,n.kt)("td",{parentName:"tr",align:null},"day"),(0,n.kt)("td",{parentName:"tr",align:null},"True"),(0,n.kt)("td",{parentName:"tr",align:null},"day, month, week")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"reverse"),(0,n.kt)("td",{parentName:"tr",align:null},"-r  --reverse"),(0,n.kt)("td",{parentName:"tr",align:null},"Data is sorted in descending order by default. Reverse flag will sort it in an ascending way. Only works when raw data is displayed."),(0,n.kt)("td",{parentName:"tr",align:null},"False"),(0,n.kt)("td",{parentName:"tr",align:null},"True"),(0,n.kt)("td",{parentName:"tr",align:null},"None")))),(0,n.kt)("hr",null))}p.isMDXComponent=!0}}]);