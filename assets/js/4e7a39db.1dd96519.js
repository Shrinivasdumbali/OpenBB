"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[1625],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=s(n),d=a,f=u["".concat(p,".").concat(d)]||u[d]||m[d]||i;return n?r.createElement(f,o(o({ref:t},c),{},{components:n})):r.createElement(f,o({ref:t},c))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[u]="string"==typeof e?e:a,o[1]=l;for(var s=2;s<i;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},88828:(e,t,n)=>{n.d(t,{Z:()=>i});var r=n(67294),a=n(35742);function i(e){let{title:t}=e;return r.createElement(a.Z,null,r.createElement("title",null,t))}},49671:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>d,frontMatter:()=>o,metadata:()=>p,toc:()=>c});var r=n(87462),a=(n(67294),n(3905)),i=n(88828);const o={title:"Decentralized Finance (DeFi)",description:"This doc provides information on the DeFi sub-menu, within the Crypto menu of the OpenBB Terminal.",keywords:["Cryptocurrency","Decentralized Finance","DeFi","tvl","pancakeswap","sushiswap","dApps information","tokens","stats","pairs","gdapps","stvl","crypto menu"]},l=void 0,p={unversionedId:"terminal/menus/crypto/defi",id:"terminal/menus/crypto/defi",title:"Decentralized Finance (DeFi)",description:"This doc provides information on the DeFi sub-menu, within the Crypto menu of the OpenBB Terminal.",source:"@site/content/terminal/menus/crypto/defi.md",sourceDirName:"terminal/menus/crypto",slug:"/terminal/menus/crypto/defi",permalink:"/terminal/menus/crypto/defi",draft:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/terminal/menus/crypto/defi.md",tags:[],version:"current",lastUpdatedBy:"Danglewood",lastUpdatedAt:1711376839,formattedLastUpdatedAt:"Mar 25, 2024",frontMatter:{title:"Decentralized Finance (DeFi)",description:"This doc provides information on the DeFi sub-menu, within the Crypto menu of the OpenBB Terminal.",keywords:["Cryptocurrency","Decentralized Finance","DeFi","tvl","pancakeswap","sushiswap","dApps information","tokens","stats","pairs","gdapps","stvl","crypto menu"]},sidebar:"tutorialSidebar",previous:{title:"Due Diligence",permalink:"/terminal/menus/crypto/dd"},next:{title:"Discovery",permalink:"/terminal/menus/crypto/disc"}},s={},c=[{value:"Usage",id:"usage",level:2},{value:"ldapps",id:"ldapps",level:3},{value:"stvl",id:"stvl",level:3}],u={toc:c},m="wrapper";function d(e){let{components:t,...n}=e;return(0,a.kt)(m,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)(i.Z,{title:"DeFi - Crypto - Menus | OpenBB Terminal Docs",mdxType:"HeadTitle"}),(0,a.kt)("p",null,"The DeFi sub-menu sports a small collection of functions, with data largely coming from DeFi Llama."),(0,a.kt)("h2",{id:"usage"},"Usage"),(0,a.kt)("p",null,"Enter the menu with:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-console"},"/crypto/defi\n")),(0,a.kt)("h3",{id:"ldapps"},"ldapps"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"ldapps")," command will return a list of DeFi apps.  Use the ",(0,a.kt)("inlineCode",{parentName:"p"},"--limit")," argument to increase the number of results returned."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-console"},"/crypto/defi/ldapps --limit 1000\n")),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://github.com/OpenBB-finance/OpenBBTerminal/assets/85772166/20e20089-080d-4172-a305-2d9ce364e1e9",alt:"Screenshot 2023-10-31 at 9 12 46\u202fAM"})),(0,a.kt)("h3",{id:"stvl"},"stvl"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"stvl")," is a time series representing the total value locked across the DeFi space.  Use the ",(0,a.kt)("inlineCode",{parentName:"p"},"--limit")," argument here for the number of days to look back."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-console"},"/crypto/defi/stvl --limit 1000\n")),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://github.com/OpenBB-finance/OpenBBTerminal/assets/85772166/41e67090-1db5-4ea9-946d-71887672b85a",alt:"Screenshot 2023-10-31 at 9 49 36\u202fAM"})))}d.isMDXComponent=!0}}]);