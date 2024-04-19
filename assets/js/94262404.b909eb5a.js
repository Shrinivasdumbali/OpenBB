"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[91312],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>m});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),l=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},d="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=l(r),p=o,m=d["".concat(c,".").concat(p)]||d[p]||f[p]||a;return r?n.createElement(m,i(i({ref:t},u),{},{components:r})):n.createElement(m,i({ref:t},u))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=p;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[d]="string"==typeof e?e:o,i[1]=s;for(var l=2;l<a;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},62872:(e,t,r)=>{r.d(t,{Z:()=>s});var n=r(39960),o=r(86010),a=r(67294),i=r(16550);function s(e){let{title:t,url:r,description:s,command:c}=e;const{pathname:l}=(0,i.TH)(),u=l.replace(/\/v\d+/,"");return a.createElement(n.Z,{className:(0,o.Z)("rounded border-2 !no-underline border-grey-600 p-6 cursor-pointer relative overflow-hidden hover:shadow-2xl hover:-translate-y-2 transform transition-all duration-300 ease-in-out font-bold shadow-2xl",{header_docs_terminal:u.startsWith("/terminal"),"bg-gradient-to-r from-[#541c12] to-[rgba(84, 29, 19, 1)]":u.startsWith("/sdk")||u.startsWith("/platform"),"bg-gradient-to-r from-grey-800 to-purple-800":u.startsWith("/bot"),header_docs:!(u.startsWith("/terminal")||u.startsWith("/sdk")||u.startsWith("/platform")||u.startsWith("/bot"))}),to:r},a.createElement("div",{className:"absolute top-0 right-0 left-0 bottom-0 bg-gradient-to-t from-black to-transparent"}),a.createElement("p",{className:"py-2 font-bold text-lg my-0"},t,""),s?a.createElement("p",{className:"text-grey-200 text-xs mt-2 mb-0"},s):null)}},22988:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>p,frontMatter:()=>i,metadata:()=>c,toc:()=>u});var n=r(87462),o=(r(67294),r(3905)),a=r(62872);const i={},s="futures",c={unversionedId:"terminal/reference/futures/index",id:"terminal/reference/futures/index",title:"futures",description:"<ReferenceCard",source:"@site/content/terminal/reference/futures/index.mdx",sourceDirName:"terminal/reference/futures",slug:"/terminal/reference/futures/",permalink:"/terminal/reference/futures/",draft:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/terminal/reference/futures/index.mdx",tags:[],version:"current",lastUpdatedBy:"montezdesousa",lastUpdatedAt:1713550349,formattedLastUpdatedAt:"Apr 19, 2024",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"sector",permalink:"/terminal/reference/funds/sector"},next:{title:"curve",permalink:"/terminal/reference/futures/curve"}},l={},u=[],d={toc:u},f="wrapper";function p(e){let{components:t,...r}=e;return(0,o.kt)(f,(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"futures"},"futures"),(0,o.kt)("ul",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 -ml-6"},(0,o.kt)(a.Z,{title:"curve",description:"Documentation page for the 'curve' command in Python, used to display",url:"futures/curve",mdxType:"ReferenceCard"}),(0,o.kt)(a.Z,{title:"historical",description:"This documentation page provides the user with instructions on how to",url:"futures/historical",mdxType:"ReferenceCard"}),(0,o.kt)(a.Z,{title:"search",description:"A detailed guide on how to use the search feature in YahooFinance for",url:"futures/search",mdxType:"ReferenceCard"})))}p.isMDXComponent=!0}}]);