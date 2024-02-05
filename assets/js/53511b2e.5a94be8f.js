"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[12414],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>f});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var p=a.createContext({}),m=function(e){var t=a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=m(e.components);return a.createElement(p.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),c=m(r),u=n,f=c["".concat(p,".").concat(u)]||c[u]||d[u]||o;return r?a.createElement(f,i(i({ref:t},s),{},{components:r})):a.createElement(f,i({ref:t},s))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=u;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[c]="string"==typeof e?e:n,i[1]=l;for(var m=2;m<o;m++)i[m]=r[m];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}u.displayName="MDXCreateElement"},88828:(e,t,r)=>{r.d(t,{Z:()=>o});var a=r(67294),n=r(35742);function o(e){let{title:t}=e;return a.createElement(n.Z,null,a.createElement("title",null,t))}},86704:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>m,contentTitle:()=>l,default:()=>u,frontMatter:()=>i,metadata:()=>p,toc:()=>s});var a=r(87462),n=(r(67294),r(3905)),o=r(88828);const i={title:"set",description:"This documentation page provides an understanding of the different portfolio optimization models available. It explains how to use the set command in Python to select a model from a list, including maxsharpe, minrisk, maxutil, and others.",keywords:["portfolio optimization models","set command","maxsharpe","minrisk","maxutil","maxret","maxdiv","maxdecorr","ef","riskparity","relriskparity","hrp","herc","nco"]},l=void 0,p={unversionedId:"terminal/reference/portfolio/po/parameters/set",id:"terminal/reference/portfolio/po/parameters/set",title:"set",description:"This documentation page provides an understanding of the different portfolio optimization models available. It explains how to use the set command in Python to select a model from a list, including maxsharpe, minrisk, maxutil, and others.",source:"@site/content/terminal/reference/portfolio/po/parameters/set.md",sourceDirName:"terminal/reference/portfolio/po/parameters",slug:"/terminal/reference/portfolio/po/parameters/set",permalink:"/terminal/reference/portfolio/po/parameters/set",draft:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/terminal/reference/portfolio/po/parameters/set.md",tags:[],version:"current",lastUpdatedBy:"montezdesousa",lastUpdatedAt:1707152475,formattedLastUpdatedAt:"Feb 5, 2024",frontMatter:{title:"set",description:"This documentation page provides an understanding of the different portfolio optimization models available. It explains how to use the set command in Python to select a model from a list, including maxsharpe, minrisk, maxutil, and others.",keywords:["portfolio optimization models","set command","maxsharpe","minrisk","maxutil","maxret","maxdiv","maxdecorr","ef","riskparity","relriskparity","hrp","herc","nco"]},sidebar:"tutorialSidebar",previous:{title:"save",permalink:"/terminal/reference/portfolio/po/parameters/save"},next:{title:"blacklitterman",permalink:"/terminal/reference/portfolio/po/blacklitterman"}},m={},s=[{value:"Usage",id:"usage",level:3},{value:"Parameters",id:"parameters",level:2}],c={toc:s},d="wrapper";function u(e){let{components:t,...r}=e;return(0,n.kt)(d,(0,a.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)(o.Z,{title:"portfolio /po/parameters/set - Reference | OpenBB Terminal Docs",mdxType:"HeadTitle"}),(0,n.kt)("p",null,"Select one of the portfolio optimization models"),(0,n.kt)("h3",{id:"usage"},"Usage"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-python",metastring:"wordwrap",wordwrap:!0},"set -m {maxsharpe,minrisk,maxutil,maxret,maxdiv,maxdecorr,ef,riskparity,relriskparity,hrp,herc,nco}\n")),(0,n.kt)("hr",null),(0,n.kt)("h2",{id:"parameters"},"Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Name"),(0,n.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"),(0,n.kt)("th",{parentName:"tr",align:null},"Default"),(0,n.kt)("th",{parentName:"tr",align:null},"Optional"),(0,n.kt)("th",{parentName:"tr",align:null},"Choices"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"model"),(0,n.kt)("td",{parentName:"tr",align:null},"-m  --model"),(0,n.kt)("td",{parentName:"tr",align:null},"Frequency used to calculate returns"),(0,n.kt)("td",{parentName:"tr",align:null},"None"),(0,n.kt)("td",{parentName:"tr",align:null},"False"),(0,n.kt)("td",{parentName:"tr",align:null},"maxsharpe, minrisk, maxutil, maxret, maxdiv, maxdecorr, ef, riskparity, relriskparity, hrp, herc, nco")))),(0,n.kt)("hr",null))}u.isMDXComponent=!0}}]);