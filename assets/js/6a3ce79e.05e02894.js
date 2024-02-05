"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[18213],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>g});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=c(n),u=r,g=d["".concat(l,".").concat(u)]||d[u]||m[u]||o;return n?a.createElement(g,s(s({ref:t},p),{},{components:n})):a.createElement(g,s({ref:t},p))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,s=new Array(o);s[0]=u;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[d]="string"==typeof e?e:r,s[1]=i;for(var c=2;c<o;c++)s[c]=n[c];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},88828:(e,t,n)=>{n.d(t,{Z:()=>o});var a=n(67294),r=n(35742);function o(e){let{title:t}=e;return a.createElement(r.Z,null,a.createElement("title",null,t))}},35794:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>s,metadata:()=>l,toc:()=>p});var a=n(87462),r=(n(67294),n(3905)),o=n(88828);const s={title:"Government",description:"This documentation pages describes the government trading menu hwere users can access the reported trades of elected officials, lobbyist activity, awarded contracts, and general spending of the United States Treasury Department.",keywords:["government","government trading","lobbyist activity","awarded contracts","treasury","representatives","senate","the house","congress"]},i=void 0,l={unversionedId:"terminal/menus/stocks/gov",id:"terminal/menus/stocks/gov",title:"Government",description:"This documentation pages describes the government trading menu hwere users can access the reported trades of elected officials, lobbyist activity, awarded contracts, and general spending of the United States Treasury Department.",source:"@site/content/terminal/menus/stocks/gov.md",sourceDirName:"terminal/menus/stocks",slug:"/terminal/menus/stocks/gov",permalink:"/terminal/menus/stocks/gov",draft:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/terminal/menus/stocks/gov.md",tags:[],version:"current",lastUpdatedBy:"montezdesousa",lastUpdatedAt:1707152475,formattedLastUpdatedAt:"Feb 5, 2024",frontMatter:{title:"Government",description:"This documentation pages describes the government trading menu hwere users can access the reported trades of elected officials, lobbyist activity, awarded contracts, and general spending of the United States Treasury Department.",keywords:["government","government trading","lobbyist activity","awarded contracts","treasury","representatives","senate","the house","congress"]},sidebar:"tutorialSidebar",previous:{title:"Fundamental Analysis",permalink:"/terminal/menus/stocks/fa"},next:{title:"Insider Trading",permalink:"/terminal/menus/stocks/ins"}},c={},p=[{value:"Usage",id:"usage",level:2},{value:"Lasttrades",id:"lasttrades",level:3},{value:"Toplobbying",id:"toplobbying",level:3},{value:"Lobbying",id:"lobbying",level:3},{value:"Lastcontracts",id:"lastcontracts",level:3}],d={toc:p},m="wrapper";function u(e){let{components:t,...n}=e;return(0,r.kt)(m,(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)(o.Z,{title:"Government - Stocks - Data Available | OpenBB Terminal Docs",mdxType:"HeadTitle"}),(0,r.kt)("p",null,"The features in this menu are intended to show the reported trades of elected officials, lobbyist activity, awarded contracts, and general spending of the United States Treasury Department. This menu only covers the USA, or companies that trade on US exchanges. The information in this menu is compiled by ",(0,r.kt)("a",{href:"https://www.quiverquant.com/",target:"_blank",rel:"noreferrer noopener"},"QuiverQuant"),". "),(0,r.kt)("h2",{id:"usage"},"Usage"),(0,r.kt)("p",null,"Enter the menu from ",(0,r.kt)("inlineCode",{parentName:"p"},"/stocks")," with ",(0,r.kt)("inlineCode",{parentName:"p"},"gov"),", or via the absolute path:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-console"},"/stocks/gov\n")),(0,r.kt)("p",null,"The menu is divided into two sections. Features under the ",(0,r.kt)("inlineCode",{parentName:"p"},"Explore")," do not depend on individual tickers, while the commands listed under ",(0,r.kt)("inlineCode",{parentName:"p"},"Ticker")," do. "),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://github.com/OpenBB-finance/OpenBBTerminal/assets/85772166/51be579a-7fa0-4ef8-b04c-f2f06c9ef099",alt:"Screenshot 2023-11-01 at 11 18 40\u202fAM"})),(0,r.kt)("p",null,"A symbol can be set by using ",(0,r.kt)("inlineCode",{parentName:"p"},"load"),"."),(0,r.kt)("h3",{id:"lasttrades"},"Lasttrades"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"lasttrades")," command displays the most recent purchase and sale disclosures by representatives."),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://github.com/OpenBB-finance/OpenBBTerminal/assets/85772166/7fe9823e-bdc0-4cb6-8a74-8634f407c145",alt:"Screenshot 2023-11-01 at 11 23 48\u202fAM"})),(0,r.kt)("h3",{id:"toplobbying"},"Toplobbying"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"toplobbying")," shows which public companies are spending the most on lobbying efforts."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-console"},"/stocks/gov/toplobbying --limit 1\n")),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://github.com/OpenBB-finance/OpenBBTerminal/assets/85772166/9b2564b2-f503-454a-adc4-f397d1b940f2",alt:"Screenshot 2023-11-01 at 11 29 33\u202fAM"})),(0,r.kt)("h3",{id:"lobbying"},"Lobbying"),(0,r.kt)("p",null,"For descriptions of each lobbying event from a company, load a ticker and then use the ",(0,r.kt)("inlineCode",{parentName:"p"},"lobbying")," command."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-console"},"/stocks/gov/load lmt/lobbying --limit 1\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-console"},"2023-10-05: LOCKHEED MARTIN CORPORATION $50000\n\nTax matters impacting Lockheed Martin Corporation.\n\nDefense issues impacting Lockheed Martin Corporation.\n\nH.R.2670/S.2226 - National Defense Authorization Act for Fiscal Year 2024.\n\nDefense Appropriations.\n")),(0,r.kt)("h3",{id:"lastcontracts"},"Lastcontracts"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"lastcontracts")," is a list of the most recently awarded government contracts."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-console"},"/stocks/gov/lastcontracts --limit \n")),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://github.com/OpenBB-finance/OpenBBTerminal/assets/85772166/b290c8db-a1b5-4f6c-bea2-65cf16eae3e7",alt:"Screenshot 2023-11-01 at 12 27 34\u202fPM"})))}u.isMDXComponent=!0}}]);