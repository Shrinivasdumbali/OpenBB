"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[50572],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>h});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var p=n.createContext({}),u=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},l=function(e){var t=u(e.components);return n.createElement(p.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),c=u(r),f=o,h=c["".concat(p,".").concat(f)]||c[f]||d[f]||a;return r?n.createElement(h,s(s({ref:t},l),{},{components:r})):n.createElement(h,s({ref:t},l))}));function h(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,s=new Array(a);s[0]=f;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[c]="string"==typeof e?e:o,s[1]=i;for(var u=2;u<a;u++)s[u]=r[u];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},88828:(e,t,r)=>{r.d(t,{Z:()=>a});var n=r(67294),o=r(35742);function a(e){let{title:t}=e;return n.createElement(o.Z,null,n.createElement("title",null,t))}},98985:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>f,frontMatter:()=>s,metadata:()=>p,toc:()=>l});var n=r(87462),o=(r(67294),r(3905)),a=r(88828);const s={title:"Bugs, Support, and Feedback",sidebar_position:6,description:"This page provides information on how to deal with bugs, get support, and provide feedback for the OpenBB Terminal. It includes details on the release process for patches, how to report a bug, and ways to request new features or provide suggestions for improvements.",keywords:["bug reporting","support","feedback","patches","GitHub","open source platform","investors","feature request","machine learning"]},i=void 0,p={unversionedId:"sdk/faqs/bugs_support_feedback",id:"sdk/faqs/bugs_support_feedback",title:"Bugs, Support, and Feedback",description:"This page provides information on how to deal with bugs, get support, and provide feedback for the OpenBB Terminal. It includes details on the release process for patches, how to report a bug, and ways to request new features or provide suggestions for improvements.",source:"@site/content/sdk/faqs/bugs_support_feedback.md",sourceDirName:"sdk/faqs",slug:"/sdk/faqs/bugs_support_feedback",permalink:"/sdk/faqs/bugs_support_feedback",draft:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/sdk/faqs/bugs_support_feedback.md",tags:[],version:"current",lastUpdatedBy:"montezdesousa",lastUpdatedAt:1707152475,formattedLastUpdatedAt:"Feb 5, 2024",sidebarPosition:6,frontMatter:{title:"Bugs, Support, and Feedback",sidebar_position:6,description:"This page provides information on how to deal with bugs, get support, and provide feedback for the OpenBB Terminal. It includes details on the release process for patches, how to report a bug, and ways to request new features or provide suggestions for improvements.",keywords:["bug reporting","support","feedback","patches","GitHub","open source platform","investors","feature request","machine learning"]},sidebar:"tutorialSidebar",previous:{title:"Data and Sources",permalink:"/sdk/faqs/data_sources"},next:{title:"Developer Issues",permalink:"/sdk/faqs/developer_issues"}},u={},l=[],c={toc:l},d="wrapper";function f(e){let{components:t,...r}=e;return(0,o.kt)(d,(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)(a.Z,{title:"Bugs, Support, and Feedback - Faqs | OpenBB SDK Docs",mdxType:"HeadTitle"}),(0,o.kt)("p",null,"When an error is encountered, it is always a good idea to check the open issues on ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/OpenBB-finance/OpenBBTerminal/issues"},"GitHub"),". There may be a workaround solution for the specific problem until a patch is released."),(0,o.kt)("details",null,(0,o.kt)("summary",null,"How often are patches for bugs released?"),(0,o.kt)("p",null,"The installer versions are packaged approximately every two-weeks. Those working with a cloned GitHub version can checkout the Develop branch to get the latest fixes and releases before they are pushed to the main branch."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-console"},"git checkout develop\n"))),(0,o.kt)("details",null,(0,o.kt)("summary",null,"How do I report a bug?"),(0,o.kt)("p",null,"First, search the open issues for another report. If one already exists, attach any relevant information and screenshots as a comment. If one does not exist, start one with this ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/OpenBB-finance/OpenBBTerminal/issues/new?assignees=&labels=type%3Abug&template=bug_report.md&title=%5BBug%5D"},"link"))),(0,o.kt)("details",null,(0,o.kt)("summary",null,"How can I get help with OpenBB Terminal?"),(0,o.kt)("p",null,"You can get help with OpenBB Terminal by joining our ",(0,o.kt)("a",{parentName:"p",href:"https://openbb.co/discord"},"Discord server")," or contact us in our support form ",(0,o.kt)("a",{parentName:"p",href:"https://openbb.co/support"},"here"),".")),(0,o.kt)("details",null,(0,o.kt)("summary",null,"How can I give feedback about the OpenBB Terminal, or request specific functionality?"),(0,o.kt)("p",null,"Being an open source platform that wishes to tailor to the needs of any type of investor, we highly encourage anyone to share with us their experience and/or how we can further improve the OpenBB Terminal. This can be anything from a very small bug, a new feature, or the implementation of a highly advanced Machine Learning model."),(0,o.kt)("p",null,"You are able to directly send us information about a bug or a question/suggestion from inside the terminal by using the ",(0,o.kt)("inlineCode",{parentName:"p"},"support")," command which is available everywhere in the terminal. Here you can select which command you want to report a bug on, ask a question or make a suggestion. After entering ",(0,o.kt)("inlineCode",{parentName:"p"},"support"),", when you press ",(0,o.kt)("inlineCode",{parentName:"p"},"ENTER")," (\u23ce), you are taken to the Support form which is automatically filled with your input. You are only required to include the type (e.g. bug, suggestion or question) and message in the form, although this can also be set directly from inside the terminal (see ",(0,o.kt)("inlineCode",{parentName:"p"},"support -h"),")."),(0,o.kt)("p",null,"Alternatively, you can contact us via the following routes:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"If you notice that a feature is missing inside the terminal, please fill in the ",(0,o.kt)("a",{parentName:"li",href:"https://openbb.co/request-a-feature"},"Request a Feature")," form."),(0,o.kt)("li",{parentName:"ul"},"If you wish to report a bug, have a question/suggestion or anything else, please fill in the ",(0,o.kt)("a",{parentName:"li",href:"https://openbb.co/support"},"Support")," form."),(0,o.kt)("li",{parentName:"ul"},"If you wish to speak to us directly, please contact us on ",(0,o.kt)("a",{parentName:"li",href:"https://openbb.co/discord"},"Discord"),"."))))}f.isMDXComponent=!0}}]);