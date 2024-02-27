"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[49893],{3905:(e,t,o)=>{o.d(t,{Zo:()=>c,kt:()=>f});var n=o(67294);function r(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function a(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function l(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?a(Object(o),!0).forEach((function(t){r(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function i(e,t){if(null==e)return{};var o,n,r=function(e,t){if(null==e)return{};var o,n,r={},a=Object.keys(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||(r[o]=e[o]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var p=n.createContext({}),s=function(e){var t=n.useContext(p),o=t;return e&&(o="function"==typeof e?e(t):l(l({},t),e)),o},c=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var o=e.components,r=e.mdxType,a=e.originalType,p=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),m=s(o),d=r,f=m["".concat(p,".").concat(d)]||m[d]||u[d]||a;return o?n.createElement(f,l(l({ref:t},c),{},{components:o})):n.createElement(f,l({ref:t},c))}));function f(e,t){var o=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=o.length,l=new Array(a);l[0]=d;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[m]="string"==typeof e?e:r,l[1]=i;for(var s=2;s<a;s++)l[s]=o[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,o)}d.displayName="MDXCreateElement"},88828:(e,t,o)=>{o.d(t,{Z:()=>a});var n=o(67294),r=o(35742);function a(e){let{title:t}=e;return n.createElement(r.Z,null,n.createElement("title",null,t))}},89065:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>l,metadata:()=>p,toc:()=>c});var n=o(87462),r=(o(67294),o(3905)),a=o(88828);const l={title:"show",description:"This documentation page talks about the 'show' function from OpenBB's portfolio optimization module. It details how to display portfolio optimization results using categories and portfolio engines.",keywords:["portfolio optimization","portfolio engine","show function","investment categories","usage examples","weights","performance","get available categories","set categories dict"]},i=void 0,p={unversionedId:"sdk/reference/portfolio/po/show",id:"sdk/reference/portfolio/po/show",title:"show",description:"This documentation page talks about the 'show' function from OpenBB's portfolio optimization module. It details how to display portfolio optimization results using categories and portfolio engines.",source:"@site/content/sdk/reference/portfolio/po/show.md",sourceDirName:"sdk/reference/portfolio/po",slug:"/sdk/reference/portfolio/po/show",permalink:"/sdk/reference/portfolio/po/show",draft:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/sdk/reference/portfolio/po/show.md",tags:[],version:"current",lastUpdatedBy:"montezdesousa",lastUpdatedAt:1709061006,formattedLastUpdatedAt:"Feb 27, 2024",frontMatter:{title:"show",description:"This documentation page talks about the 'show' function from OpenBB's portfolio optimization module. It details how to display portfolio optimization results using categories and portfolio engines.",keywords:["portfolio optimization","portfolio engine","show function","investment categories","usage examples","weights","performance","get available categories","set categories dict"]},sidebar:"tutorialSidebar",previous:{title:"riskparity",permalink:"/sdk/reference/portfolio/po/riskparity"},next:{title:"bench",permalink:"/sdk/reference/portfolio/bench"}},s={},c=[{value:"Parameters",id:"parameters",level:2},{value:"Returns",id:"returns",level:2},{value:"Examples",id:"examples",level:2}],m={toc:c},u="wrapper";function d(e){let{components:t,...o}=e;return(0,r.kt)(u,(0,n.Z)({},m,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)(a.Z,{title:"portfolio.po.show - Reference | OpenBB SDK Docs",mdxType:"HeadTitle"}),(0,r.kt)("p",null,"Show portfolio optimization results"),(0,r.kt)("p",null,"Source Code: [",(0,r.kt)("a",{parentName:"p",href:"https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/portfolio/portfolio_optimization/po_model.py#L2196"},"link"),"]"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python",metastring:"wordwrap",wordwrap:!0},"openbb.portfolio.po.show(portfolio_engine: portfolio_optimization.po_engine.PoEngine, category: Optional[str] = None)\n")),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"parameters"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"),(0,r.kt)("th",{parentName:"tr",align:null},"Optional"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"portfolio_engine"),(0,r.kt)("td",{parentName:"tr",align:null},"PoEngine"),(0,r.kt)("td",{parentName:"tr",align:null},"Portfolio optimization engine",(0,r.kt)("br",null),"Use ",(0,r.kt)("inlineCode",{parentName:"td"},"portfolio.po.load")," to load a portfolio engine"),(0,r.kt)("td",{parentName:"tr",align:null},"None"),(0,r.kt)("td",{parentName:"tr",align:null},"False")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"category"),(0,r.kt)("td",{parentName:"tr",align:null},"str"),(0,r.kt)("td",{parentName:"tr",align:null},"Category to show, by default None",(0,r.kt)("br",null),"After loading a portfolio with ",(0,r.kt)("inlineCode",{parentName:"td"},"portfolio.po.load")," you can use",(0,r.kt)("br",null),"the object method ",(0,r.kt)("inlineCode",{parentName:"td"},"get_available_categories()")," to get a list of available categories.",(0,r.kt)("br",null),"You can also use the object method ",(0,r.kt)("inlineCode",{parentName:"td"},"set_categories_dict()")," to set a custom dictionary",(0,r.kt)("br",null),'of categories. The dictionary must contain "CURRENT_INVESTED_AMOUNT" and "CURRENT_WEIGHTS"',(0,r.kt)("br",null),"as keys as shown in the example below."),(0,r.kt)("td",{parentName:"tr",align:null},"None"),(0,r.kt)("td",{parentName:"tr",align:null},"True")))),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"returns"},"Returns"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Union[pd.DataFrame, Tuple","[pd.DataFrame, pd.DataFrame]","]"),(0,r.kt)("td",{parentName:"tr",align:null},"Portfolio weights and categories")))),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"examples"},"Examples"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"from openbb_terminal.sdk import openbb\nd = {\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'"SECTOR": {\n                "AAPL": "INFORMATION TECHNOLOGY",\n                "MSFT": "INFORMATION TECHNOLOGY",\n                "AMZN": "CONSUMER DISCRETIONARY",\n            },\n            "CURRENCY": {\n                "AAPL": "USD",\n                "MSFT": "USD",\n                "AMZN": "USD",\n            },\n            "CURRENT_INVESTED_AMOUNT": {\n                "AAPL": "100000.0",\n                "MSFT": "200000.0",\n                "AMZN": "300000.0",\n            },\n        }\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"p = openbb.portfolio.po.load(symbols_categories=d)\nweights, performance = openbb.portfolio.po.equal(portfolio_engine=p)\np.get_available_categories()\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"['SECTOR', 'CURRENCY']\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'weights_df, category_df = openbb.portfolio.po.show(portfolio_engine=p, category="SECTOR")\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'from openbb_terminal.sdk import openbb\np = openbb.portfolio.po.load(symbols_file_path="~/openbb_terminal/miscellaneous/portfolio_examples/allocation/60_40_Portfolio.xlsx")\nweights, performance = openbb.portfolio.po.equal(portfolio_engine=p)\np.get_available_categories()\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"['ASSET_CLASS',\n 'SECTOR',\n 'INDUSTRY',\n 'COUNTRY',\n 'CURRENCY']\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'weights_df, category_df = openbb.portfolio.po.show(portfolio_engine=p, category="ASSET_CLASS")\n')),(0,r.kt)("hr",null))}d.isMDXComponent=!0}}]);