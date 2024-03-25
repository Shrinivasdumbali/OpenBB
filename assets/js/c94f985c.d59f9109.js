"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[83549],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>c});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},m=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},d="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),d=s(n),u=a,c=d["".concat(p,".").concat(u)]||d[u]||f[u]||o;return n?r.createElement(c,l(l({ref:t},m),{},{components:n})):r.createElement(c,l({ref:t},m))}));function c(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=u;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[d]="string"==typeof e?e:a,l[1]=i;for(var s=2;s<o;s++)l[s]=n[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},88828:(e,t,n)=>{n.d(t,{Z:()=>o});var r=n(67294),a=n(35742);function o(e){let{title:t}=e;return r.createElement(a.Z,null,r.createElement("title",null,t))}},98650:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>l,metadata:()=>p,toc:()=>m});var r=n(87462),a=(n(67294),n(3905)),o=n(88828);const l={title:"file",description:"This page provides detailed information on the functionality and usage of the 'Load portfolio optimization engine from file' method in the OpenBB Terminal application. Examples and parameters are discussed extensively to ensure user familiarity with the method.",keywords:["portfolio optimization","load portfolio","PoEngine","parameters","examples","maxsharpe","risk_free_rate"]},i=void 0,p={unversionedId:"sdk/reference/portfolio/po/file",id:"sdk/reference/portfolio/po/file",title:"file",description:"This page provides detailed information on the functionality and usage of the 'Load portfolio optimization engine from file' method in the OpenBB Terminal application. Examples and parameters are discussed extensively to ensure user familiarity with the method.",source:"@site/content/sdk/reference/portfolio/po/file.md",sourceDirName:"sdk/reference/portfolio/po",slug:"/sdk/reference/portfolio/po/file",permalink:"/sdk/reference/portfolio/po/file",draft:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/sdk/reference/portfolio/po/file.md",tags:[],version:"current",lastUpdatedBy:"Danglewood",lastUpdatedAt:1711376839,formattedLastUpdatedAt:"Mar 25, 2024",frontMatter:{title:"file",description:"This page provides detailed information on the functionality and usage of the 'Load portfolio optimization engine from file' method in the OpenBB Terminal application. Examples and parameters are discussed extensively to ensure user familiarity with the method.",keywords:["portfolio optimization","load portfolio","PoEngine","parameters","examples","maxsharpe","risk_free_rate"]},sidebar:"tutorialSidebar",previous:{title:"ef",permalink:"/sdk/reference/portfolio/po/ef"},next:{title:"herc",permalink:"/sdk/reference/portfolio/po/herc"}},s={},m=[{value:"Parameters",id:"parameters",level:2},{value:"Returns",id:"returns",level:2},{value:"Examples",id:"examples",level:2}],d={toc:m},f="wrapper";function u(e){let{components:t,...n}=e;return(0,a.kt)(f,(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)(o.Z,{title:"portfolio.po.file - Reference | OpenBB SDK Docs",mdxType:"HeadTitle"}),(0,a.kt)("p",null,"Load portfolio optimization engine from file"),(0,a.kt)("p",null,"Source Code: [",(0,a.kt)("a",{parentName:"p",href:"https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/portfolio/portfolio_optimization/po_model.py#L106"},"link"),"]"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python",metastring:"wordwrap",wordwrap:!0},"openbb.portfolio.po.file(portfolio_engine: portfolio_optimization.po_engine.PoEngine, parameters_file_path: str)\n")),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"parameters"},"Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Name"),(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"),(0,a.kt)("th",{parentName:"tr",align:null},"Default"),(0,a.kt)("th",{parentName:"tr",align:null},"Optional"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"portfolio_engine"),(0,a.kt)("td",{parentName:"tr",align:null},"PoEngine"),(0,a.kt)("td",{parentName:"tr",align:null},"Portfolio optimization engine, by default None",(0,a.kt)("br",null),"Use ",(0,a.kt)("inlineCode",{parentName:"td"},"portfolio.po.load")," to load a portfolio engine"),(0,a.kt)("td",{parentName:"tr",align:null},"None"),(0,a.kt)("td",{parentName:"tr",align:null},"False")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"parameters_file_path"),(0,a.kt)("td",{parentName:"tr",align:null},"str"),(0,a.kt)("td",{parentName:"tr",align:null},"Parameters file full path, by default None"),(0,a.kt)("td",{parentName:"tr",align:null},"None"),(0,a.kt)("td",{parentName:"tr",align:null},"False")))),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"returns"},"Returns"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Dict"),(0,a.kt)("td",{parentName:"tr",align:null},"Loaded parameters")))),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"examples"},"Examples"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'from openbb_terminal.sdk import openbb\np = openbb.portfolio.po.load(symbols_file_path="~/openbb_terminal/miscellaneous/portfolio_examples/allocation/60_40_Portfolio.xlsx")\np.get_params()\n')),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"{}\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'parameters = openbb.portfolio.po.file(portfolio_engine=p, parameters_file_path="~/openbb_terminal/miscellaneous/portfolio_examples/optimization/defaults.ini")\n')),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"Parameters:\n    interval    : 3y\n    log_returns : 0\n    freq        : d\n    maxnan      : 0.05\n    threshold   : 0.3\n    alpha       : 0.05\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"p.get_params()\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"{'interval': '3y',\n 'log_returns': '0',\n 'freq': 'd',\n 'maxnan': '0.05',\n 'threshold': '0.3',\n 'alpha': '0.05'}\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'p.set_params({"risk_free_rate": 0.05}, update=True)\np.get_params()\n')),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"{'interval': '3y',\n'log_returns': '0',\n'freq': 'd',\n'maxnan': '0.05',\n'threshold': '0.3',\n'alpha': '0.05',\n'risk_free_rate': 0.05}\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"weights, performance = openbb.portfolio.po.maxsharpe(portfolio_engine=p)\n")),(0,a.kt)("hr",null))}u.isMDXComponent=!0}}]);