"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[54014],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>f});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=c(n),m=a,f=p["".concat(s,".").concat(m)]||p[m]||d[m]||i;return n?r.createElement(f,o(o({ref:t},u),{},{components:n})):r.createElement(f,o({ref:t},u))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:a,o[1]=l;for(var c=2;c<i;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},88828:(e,t,n)=>{n.d(t,{Z:()=>i});var r=n(67294),a=n(35742);function i(e){let{title:t}=e;return r.createElement(a.Z,null,r.createElement("title",null,t))}},30422:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>m,frontMatter:()=>o,metadata:()=>s,toc:()=>u});var r=n(87462),a=(n(67294),n(3905)),i=n(88828);const o={title:"ad",description:"An in-depth explanation of Accumulation/Distribution Line (AD), its interpretation, and usage. The page also provides a Python script for the indicator and describes its parameters.",keywords:["Accumulation/Distribution Line (AD)","AD Indicator","Close Location Value","CLV","Stock Market Indicator","Python Script","b_use_open","On Balance Volume (OBV)","Volume Times"]},l=void 0,s={unversionedId:"terminal/reference/stocks/ta/ad",id:"terminal/reference/stocks/ta/ad",title:"ad",description:"An in-depth explanation of Accumulation/Distribution Line (AD), its interpretation, and usage. The page also provides a Python script for the indicator and describes its parameters.",source:"@site/content/terminal/reference/stocks/ta/ad.md",sourceDirName:"terminal/reference/stocks/ta",slug:"/terminal/reference/stocks/ta/ad",permalink:"/terminal/reference/stocks/ta/ad",draft:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/terminal/reference/stocks/ta/ad.md",tags:[],version:"current",lastUpdatedBy:"montezdesousa",lastUpdatedAt:1709061006,formattedLastUpdatedAt:"Feb 27, 2024",frontMatter:{title:"ad",description:"An in-depth explanation of Accumulation/Distribution Line (AD), its interpretation, and usage. The page also provides a Python script for the indicator and describes its parameters.",keywords:["Accumulation/Distribution Line (AD)","AD Indicator","Close Location Value","CLV","Stock Market Indicator","Python Script","b_use_open","On Balance Volume (OBV)","Volume Times"]},sidebar:"tutorialSidebar",previous:{title:"Technical Analysis",permalink:"/terminal/reference/stocks/ta/"},next:{title:"adosc",permalink:"/terminal/reference/stocks/ta/adosc"}},c={},u=[{value:"Usage",id:"usage",level:3},{value:"Parameters",id:"parameters",level:2}],p={toc:u},d="wrapper";function m(e){let{components:t,...n}=e;return(0,a.kt)(d,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)(i.Z,{title:"stocks /ta/ad - Reference | OpenBB Terminal Docs",mdxType:"HeadTitle"}),(0,a.kt)("p",null,"The Accumulation/Distribution Line is similar to the On Balance Volume (OBV), which sums the volume times +1/-1 based on whether the close is higher than the previous close. The Accumulation/Distribution indicator, however multiplies the volume by the close location value (CLV). The CLV is based on the movement of the issue within a single bar and can be +1, -1 or zero. The Accumulation/Distribution Line is interpreted by looking for a divergence in the direction of the indicator relative to price. If the Accumulation/Distribution Line is trending upward it indicates that the price may follow. Also, if the Accumulation/Distribution Line becomes flat while the price is still rising (or falling) then it signals an impending flattening of the price."),(0,a.kt)("h3",{id:"usage"},"Usage"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python",metastring:"wordwrap",wordwrap:!0},"ad [--open]\n")),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"parameters"},"Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Name"),(0,a.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"),(0,a.kt)("th",{parentName:"tr",align:null},"Default"),(0,a.kt)("th",{parentName:"tr",align:null},"Optional"),(0,a.kt)("th",{parentName:"tr",align:null},"Choices"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"b_use_open"),(0,a.kt)("td",{parentName:"tr",align:null},"--open"),(0,a.kt)("td",{parentName:"tr",align:null},"uses open value of stock"),(0,a.kt)("td",{parentName:"tr",align:null},"False"),(0,a.kt)("td",{parentName:"tr",align:null},"True"),(0,a.kt)("td",{parentName:"tr",align:null},"None")))),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/46355364/154309283-9512c6c0-dda3-4348-9350-105238676479.png",alt:"ad"})),(0,a.kt)("hr",null))}m.isMDXComponent=!0}}]);