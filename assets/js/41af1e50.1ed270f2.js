"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[75531],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>f});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=o.createContext({}),c=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=c(e.components);return o.createElement(s.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=c(n),m=r,f=p["".concat(s,".").concat(m)]||p[m]||d[m]||i;return n?o.createElement(f,a(a({ref:t},u),{},{components:n})):o.createElement(f,a({ref:t},u))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,a=new Array(i);a[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:r,a[1]=l;for(var c=2;c<i;c++)a[c]=n[c];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},88828:(e,t,n)=>{n.d(t,{Z:()=>i});var o=n(67294),r=n(35742);function i(e){let{title:t}=e;return o.createElement(r.Z,null,o.createElement("title",null,t))}},80502:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>m,frontMatter:()=>a,metadata:()=>s,toc:()=>u});var o=n(87462),r=(n(67294),n(3905)),i=n(88828);const a={title:"Expectations For Contributors",sidebar_position:1,description:"This guide outlines the expectations for contributors to the OpenBB Platform. It covers aspects such as use cases, documentation, code quality, testing, performance, and collaboration. Whether you're enhancing functionality, building extensions, or contributing code.",keywords:["OpenBB Platform","Open source","Python interface","REST API","Code contribution","Documentation","Code quality","Testing","Performance optimization","Collaboration","Use cases","OpenBB extensions"]},l=void 0,s={unversionedId:"platform/development/contributor-guidelines/expecations_for_contributors",id:"platform/development/contributor-guidelines/expecations_for_contributors",title:"Expectations For Contributors",description:"This guide outlines the expectations for contributors to the OpenBB Platform. It covers aspects such as use cases, documentation, code quality, testing, performance, and collaboration. Whether you're enhancing functionality, building extensions, or contributing code.",source:"@site/content/platform/development/contributor-guidelines/expecations_for_contributors.md",sourceDirName:"platform/development/contributor-guidelines",slug:"/platform/development/contributor-guidelines/expecations_for_contributors",permalink:"/platform/development/contributor-guidelines/expecations_for_contributors",draft:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/platform/development/contributor-guidelines/expecations_for_contributors.md",tags:[],version:"current",lastUpdatedBy:"Danglewood",lastUpdatedAt:1710625624,formattedLastUpdatedAt:"Mar 16, 2024",sidebarPosition:1,frontMatter:{title:"Expectations For Contributors",sidebar_position:1,description:"This guide outlines the expectations for contributors to the OpenBB Platform. It covers aspects such as use cases, documentation, code quality, testing, performance, and collaboration. Whether you're enhancing functionality, building extensions, or contributing code.",keywords:["OpenBB Platform","Open source","Python interface","REST API","Code contribution","Documentation","Code quality","Testing","Performance optimization","Collaboration","Use cases","OpenBB extensions"]},sidebar:"tutorialSidebar",previous:{title:"Introduction",permalink:"/platform/development/contributor-guidelines/"},next:{title:"HTTP Requests",permalink:"/platform/development/contributor-guidelines/http_requests"}},c={},u=[],p={toc:u},d="wrapper";function m(e){let{components:t,...n}=e;return(0,r.kt)(d,(0,o.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)(i.Z,{title:"Expectations For Contributors - Contributor Guidelines - Development | OpenBB Platform Docs",mdxType:"HeadTitle"}),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Use Cases:"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Ensure that your contributions directly enhance the OpenBB Platform's functionality or extension ecosystem."))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Documentation:"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"All code contributions should come with relevant documentation, including the purpose of the contribution, how it works, and any changes it makes to existing functionalities."),(0,r.kt)("li",{parentName:"ul"},"Update any existing documentation if your contribution alters the behavior of the OpenBB Platform."))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Code Quality:"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Your code should adhere strictly to the OpenBB Platform's coding standards and conventions."),(0,r.kt)("li",{parentName:"ul"},"Ensure clarity, maintainability, and proper organization in your code."))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Testing:"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"All contributions must be thoroughly tested to avoid introducing bugs to the OpenBB Platform."),(0,r.kt)("li",{parentName:"ul"},"Contributions should include relevant automated tests (unit and integration), and any new feature should come with its test cases."))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Performance:"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Your contributions should be optimized for performance and should not degrade the overall efficiency of the OpenBB Platform."),(0,r.kt)("li",{parentName:"ul"},"Address any potential bottlenecks and ensure scalability."))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Collaboration:"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Engage actively with the OpenBB development team to ensure that your contributions align with the platform's roadmap and standards."),(0,r.kt)("li",{parentName:"ul"},"Welcome feedback and be open to making revisions based on reviews and suggestions from the community.")))))}m.isMDXComponent=!0}}]);