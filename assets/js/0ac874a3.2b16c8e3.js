"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[50551],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>f});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),i=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},p=function(e){var t=i(e.components);return n.createElement(s.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),m=i(a),d=r,f=m["".concat(s,".").concat(d)]||m[d]||u[d]||o;return a?n.createElement(f,l(l({ref:t},p),{},{components:a})):n.createElement(f,l({ref:t},p))}));function f(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,l=new Array(o);l[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c[m]="string"==typeof e?e:r,l[1]=c;for(var i=2;i<o;i++)l[i]=a[i];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},88828:(e,t,a)=>{a.d(t,{Z:()=>o});var n=a(67294),r=a(35742);function o(e){let{title:t}=e;return n.createElement(r.Z,null,n.createElement("title",null,t))}},75083:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>i,contentTitle:()=>c,default:()=>d,frontMatter:()=>l,metadata:()=>s,toc:()=>p});var n=a(87462),r=(a(67294),a(3905)),o=a(88828);const l={title:"fama_coe",description:"Learn how to use Fama and French to determine the cost of equity for a company with our Fama_Coe tool. Find the Python source code and understand its parameters and returns.",keywords:["Fama and French","cost of equity","company financial analysis","Python source code","Fama_Coe tool","OpenBB stocks","ticker symbol analysis","stock's Fama French coefficient"]},c=void 0,s={unversionedId:"sdk/reference/stocks/fa/fama_coe",id:"sdk/reference/stocks/fa/fama_coe",title:"fama_coe",description:"Learn how to use Fama and French to determine the cost of equity for a company with our Fama_Coe tool. Find the Python source code and understand its parameters and returns.",source:"@site/content/sdk/reference/stocks/fa/fama_coe.md",sourceDirName:"sdk/reference/stocks/fa",slug:"/sdk/reference/stocks/fa/fama_coe",permalink:"/sdk/reference/stocks/fa/fama_coe",draft:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/sdk/reference/stocks/fa/fama_coe.md",tags:[],version:"current",lastUpdatedBy:"Danglewood",lastUpdatedAt:1711376839,formattedLastUpdatedAt:"Mar 25, 2024",frontMatter:{title:"fama_coe",description:"Learn how to use Fama and French to determine the cost of equity for a company with our Fama_Coe tool. Find the Python source code and understand its parameters and returns.",keywords:["Fama and French","cost of equity","company financial analysis","Python source code","Fama_Coe tool","OpenBB stocks","ticker symbol analysis","stock's Fama French coefficient"]},sidebar:"tutorialSidebar",previous:{title:"est",permalink:"/sdk/reference/stocks/fa/est"},next:{title:"fama_raw",permalink:"/sdk/reference/stocks/fa/fama_raw"}},i={},p=[{value:"Parameters",id:"parameters",level:2},{value:"Returns",id:"returns",level:2}],m={toc:p},u="wrapper";function d(e){let{components:t,...a}=e;return(0,r.kt)(u,(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)(o.Z,{title:"stocks.fa.fama_coe - Reference | OpenBB SDK Docs",mdxType:"HeadTitle"}),(0,r.kt)("p",null,"Use Fama and French to get the cost of equity for a company"),(0,r.kt)("p",null,"Source Code: [",(0,r.kt)("a",{parentName:"p",href:"https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/stocks/fundamental_analysis/dcf_model.py#L300"},"link"),"]"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python",metastring:"wordwrap",wordwrap:!0},"openbb.stocks.fa.fama_coe(symbol: str)\n")),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"parameters"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"),(0,r.kt)("th",{parentName:"tr",align:null},"Optional"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"symbol"),(0,r.kt)("td",{parentName:"tr",align:null},"str"),(0,r.kt)("td",{parentName:"tr",align:null},"The ticker symbol to be analyzed"),(0,r.kt)("td",{parentName:"tr",align:null},"None"),(0,r.kt)("td",{parentName:"tr",align:null},"False")))),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"returns"},"Returns"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"float"),(0,r.kt)("td",{parentName:"tr",align:null},"The stock's Fama French coefficient")))),(0,r.kt)("hr",null))}d.isMDXComponent=!0}}]);