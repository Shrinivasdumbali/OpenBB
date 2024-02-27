"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[20836],{3905:(t,e,a)=>{a.d(e,{Zo:()=>m,kt:()=>c});var r=a(67294);function n(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function i(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,r)}return a}function l(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?i(Object(a),!0).forEach((function(e){n(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function o(t,e){if(null==t)return{};var a,r,n=function(t,e){if(null==t)return{};var a,r,n={},i=Object.keys(t);for(r=0;r<i.length;r++)a=i[r],e.indexOf(a)>=0||(n[a]=t[a]);return n}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(r=0;r<i.length;r++)a=i[r],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(n[a]=t[a])}return n}var p=r.createContext({}),d=function(t){var e=r.useContext(p),a=e;return t&&(a="function"==typeof t?t(e):l(l({},e),t)),a},m=function(t){var e=d(t.components);return r.createElement(p.Provider,{value:e},t.children)},s="mdxType",g={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},u=r.forwardRef((function(t,e){var a=t.components,n=t.mdxType,i=t.originalType,p=t.parentName,m=o(t,["components","mdxType","originalType","parentName"]),s=d(a),u=n,c=s["".concat(p,".").concat(u)]||s[u]||g[u]||i;return a?r.createElement(c,l(l({ref:e},m),{},{components:a})):r.createElement(c,l({ref:e},m))}));function c(t,e){var a=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var i=a.length,l=new Array(i);l[0]=u;var o={};for(var p in e)hasOwnProperty.call(e,p)&&(o[p]=e[p]);o.originalType=t,o[s]="string"==typeof t?t:n,l[1]=o;for(var d=2;d<i;d++)l[d]=a[d];return r.createElement.apply(null,l)}return r.createElement.apply(null,a)}u.displayName="MDXCreateElement"},88828:(t,e,a)=>{a.d(e,{Z:()=>i});var r=a(67294),n=a(35742);function i(t){let{title:e}=t;return r.createElement(n.Z,null,r.createElement("title",null,e))}},74042:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>d,contentTitle:()=>o,default:()=>u,frontMatter:()=>l,metadata:()=>p,toc:()=>m});var r=a(87462),n=(a(67294),a(3905)),i=a(88828);const l={title:"Futures",description:"Learn how to use the Futures module of the OpenBB SDK in a Python script or Jupyter Notebook. This guide includes descriptions of each function and examples of how to access futures forward curve data and chart, search available futures, and fetch and visualize historical data.",keywords:["OpenBB SDK","Python Script","Futures module","Futures Forward Curve Data","Futures Forward Curve Chart","Search Available Futures","Historical OHLC+V Data","Chart Historical Price","Individual Contracts","Jupyter Notebook"]},o=void 0,p={unversionedId:"sdk/data-available/futures",id:"sdk/data-available/futures",title:"Futures",description:"Learn how to use the Futures module of the OpenBB SDK in a Python script or Jupyter Notebook. This guide includes descriptions of each function and examples of how to access futures forward curve data and chart, search available futures, and fetch and visualize historical data.",source:"@site/content/sdk/data-available/futures.md",sourceDirName:"sdk/data-available",slug:"/sdk/data-available/futures",permalink:"/sdk/data-available/futures",draft:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/sdk/data-available/futures.md",tags:[],version:"current",lastUpdatedBy:"montezdesousa",lastUpdatedAt:1709061006,formattedLastUpdatedAt:"Feb 27, 2024",frontMatter:{title:"Futures",description:"Learn how to use the Futures module of the OpenBB SDK in a Python script or Jupyter Notebook. This guide includes descriptions of each function and examples of how to access futures forward curve data and chart, search available futures, and fetch and visualize historical data.",keywords:["OpenBB SDK","Python Script","Futures module","Futures Forward Curve Data","Futures Forward Curve Chart","Search Available Futures","Historical OHLC+V Data","Chart Historical Price","Individual Contracts","Jupyter Notebook"]},sidebar:"tutorialSidebar",previous:{title:"Forex",permalink:"/sdk/data-available/forex"},next:{title:"Quantitative Analysis",permalink:"/sdk/data-available/quantitative-analysis"}},d={},m=[{value:"How to Use",id:"how-to-use",level:2},{value:"Examples",id:"examples",level:2},{value:"Import Statements",id:"import-statements",level:3},{value:"Search",id:"search",level:3},{value:"Curve",id:"curve",level:3},{value:"Historical",id:"historical",level:3}],s={toc:m},g="wrapper";function u(t){let{components:e,...a}=t;return(0,n.kt)(g,(0,r.Z)({},s,a,{components:e,mdxType:"MDXLayout"}),(0,n.kt)(i.Z,{title:"Futures - Intros - Usage | OpenBB SDK Docs",mdxType:"HeadTitle"}),(0,n.kt)("p",null,"The functions from the OpenBB Terminal Futures menu is part of the SDK layer, and provides methods for programmatically accessing the data and charts associated with them. Get started by importing the OpenBB SDK to the Python script or Jupyter Notebook file."),(0,n.kt)("h2",{id:"how-to-use"},"How to Use"),(0,n.kt)("p",null,"Below is a brief description of each function within the Futures module:"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Path"),(0,n.kt)("th",{parentName:"tr",align:"center"},"Type"),(0,n.kt)("th",{parentName:"tr",align:"right"},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"openbb.futures.curve"),(0,n.kt)("td",{parentName:"tr",align:"center"},"Function"),(0,n.kt)("td",{parentName:"tr",align:"right"},"Futures Forward Curve Data")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"openbb.futures.curve_chart"),(0,n.kt)("td",{parentName:"tr",align:"center"},"Function"),(0,n.kt)("td",{parentName:"tr",align:"right"},"Futures Forward Curve Chart")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"openbb.futures.search"),(0,n.kt)("td",{parentName:"tr",align:"center"},"Function"),(0,n.kt)("td",{parentName:"tr",align:"right"},"Search Available Futures")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"openbb.futures.historical"),(0,n.kt)("td",{parentName:"tr",align:"center"},"Function"),(0,n.kt)("td",{parentName:"tr",align:"right"},"Historical OHLC+V Data")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"openbb.futures.historical_chart"),(0,n.kt)("td",{parentName:"tr",align:"center"},"Function"),(0,n.kt)("td",{parentName:"tr",align:"right"},"Chart Historical Price of Individual Contracts")))),(0,n.kt)("h2",{id:"examples"},"Examples"),(0,n.kt)("h3",{id:"import-statements"},"Import Statements"),(0,n.kt)("p",null,"The examples here will assume that the block below is included at the top of the file:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-python"},"from openbb_terminal.sdk import openbb\nimport pandas as pd\n%matplotlib inline\n")),(0,n.kt)("h3",{id:"search"},"Search"),(0,n.kt)("p",null,"Futures can be searched by description, exchange, or category."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-python"},"openbb.futures.search(description = 'Eurodollar')\n")),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"right"}),(0,n.kt)("th",{parentName:"tr",align:"left"},"Ticker"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Exchange"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Category"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"right"},"66"),(0,n.kt)("td",{parentName:"tr",align:"left"},"GE"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Eurodollar Futures"),(0,n.kt)("td",{parentName:"tr",align:"left"},"CME"),(0,n.kt)("td",{parentName:"tr",align:"left"},"currency")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"right"},"67"),(0,n.kt)("td",{parentName:"tr",align:"left"},"GLB"),(0,n.kt)("td",{parentName:"tr",align:"left"},"One-Month Eurodollar Futures"),(0,n.kt)("td",{parentName:"tr",align:"left"},"CME"),(0,n.kt)("td",{parentName:"tr",align:"left"},"currency")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"right"},"152"),(0,n.kt)("td",{parentName:"tr",align:"left"},"SED"),(0,n.kt)("td",{parentName:"tr",align:"left"},"SED (SOFR-Eurodollar) Spread Futures"),(0,n.kt)("td",{parentName:"tr",align:"left"},"CME"),(0,n.kt)("td",{parentName:"tr",align:"left"},"bonds")))),(0,n.kt)("p",null,"The historical front-month price is captured to a DataFrame with:"),(0,n.kt)("h3",{id:"curve"},"Curve"),(0,n.kt)("p",null,"The forward curve data for a symbol is fetched with:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-python"},"eurodollar = openbb.futures.curve('GE')\n")),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Expiration"),(0,n.kt)("th",{parentName:"tr",align:"right"},"Futures"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"2022-11-01 00:00:00"),(0,n.kt)("td",{parentName:"tr",align:"right"},"95.3561")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"2022-12-01 00:00:00"),(0,n.kt)("td",{parentName:"tr",align:"right"},"94.9925")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"2023-01-01 00:00:00"),(0,n.kt)("td",{parentName:"tr",align:"right"},"94.985")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"2023-02-01 00:00:00"),(0,n.kt)("td",{parentName:"tr",align:"right"},"94.9")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"2023-03-01 00:00:00"),(0,n.kt)("td",{parentName:"tr",align:"right"},"94.825")))),(0,n.kt)("p",null,"To display a chart of the data, use ",(0,n.kt)("inlineCode",{parentName:"p"},"curve_chart"),":"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-python"},"openbb.futures.curve_chart(symbol = 'GE')\n")),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/85772166/202352342-eecf872d-8934-42e7-8b53-4e3415bc2993.png",alt:"openbb.futures.curve_chart",title:"openbb.futures.curve_chart"})),(0,n.kt)("h3",{id:"historical"},"Historical"),(0,n.kt)("p",null,"The ",(0,n.kt)("inlineCode",{parentName:"p"},"historical")," function can fetch the historical front-month price:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-python"},"wti_continuous = obb.futures.historical('CL')\n")),(0,n.kt)("p",null,"Or, while actively trading, individual contracts. The example below requests historical data for the December WTI contract from 2023 to 2030, starting at the first recorded trading day of the December 2030 contract."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-python"},"cl_2312 = openbb.futures.historical(symbols = ['CL'], expiry = '2023-12')\ncl_2312 = cl_2312.rename(columns={'Adj Close':'2023-12'})\ncl_2412 = openbb.futures.historical(symbols = ['CL'], expiry = '2024-12')\ncl_2412 = cl_2412.rename(columns={'Adj Close':'2024-12'})\ncl_2512 = openbb.futures.historical(symbols = ['CL'], expiry = '2025-12')\ncl_2512 = cl_2512.rename(columns={'Adj Close':'2025-12'})\ncl_2612 = openbb.futures.historical(symbols = ['CL'], expiry = '2026-12')\ncl_2612 = cl_2612.rename(columns={'Adj Close':'2026-12'})\ncl_2712 = openbb.futures.historical(symbols = ['CL'], expiry = '2027-12')\ncl_2712 = cl_2712.rename(columns={'Adj Close':'2027-12'})\ncl_2812 = openbb.futures.historical(symbols = ['CL'], expiry = '2028-12')\ncl_2812 = cl_2812.rename(columns={'Adj Close':'2028-12'})\ncl_2912 = openbb.futures.historical(symbols = ['CL'], expiry = '2029-12')\ncl_2912 = cl_2912.rename(columns={'Adj Close':'2029-12'})\ncl_3012 = openbb.futures.historical(symbols = ['CL'], expiry = '2030-12')\ncl_3012 = cl_3012.rename(columns={'Adj Close':'2030-12'})\n\nhistorical = pd.DataFrame(data = [cl_2312['2023-12'],cl_2412['2024-12'],cl_2512['2025-12'],cl_2612['2026-12'],cl_2712['2027-12'],cl_2812['2028-12'],cl_2912['2029-12'],cl_3012['2030-12']]).transpose()\nhistorical = historical.dropna()\n\nhistorical\n")),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Date"),(0,n.kt)("th",{parentName:"tr",align:"right"},"2023-12"),(0,n.kt)("th",{parentName:"tr",align:"right"},"2024-12"),(0,n.kt)("th",{parentName:"tr",align:"right"},"2025-12"),(0,n.kt)("th",{parentName:"tr",align:"right"},"2026-12"),(0,n.kt)("th",{parentName:"tr",align:"right"},"2027-12"),(0,n.kt)("th",{parentName:"tr",align:"right"},"2028-12"),(0,n.kt)("th",{parentName:"tr",align:"right"},"2029-12"),(0,n.kt)("th",{parentName:"tr",align:"right"},"2030-12"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"2020-01-24 00:00:00"),(0,n.kt)("td",{parentName:"tr",align:"right"},"49.61"),(0,n.kt)("td",{parentName:"tr",align:"right"},"50.14"),(0,n.kt)("td",{parentName:"tr",align:"right"},"50.7"),(0,n.kt)("td",{parentName:"tr",align:"right"},"51.56"),(0,n.kt)("td",{parentName:"tr",align:"right"},"51.63"),(0,n.kt)("td",{parentName:"tr",align:"right"},"51.63"),(0,n.kt)("td",{parentName:"tr",align:"right"},"51.63"),(0,n.kt)("td",{parentName:"tr",align:"right"},"51.63")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"2020-01-27 00:00:00"),(0,n.kt)("td",{parentName:"tr",align:"right"},"49.94"),(0,n.kt)("td",{parentName:"tr",align:"right"},"50.6"),(0,n.kt)("td",{parentName:"tr",align:"right"},"51.18"),(0,n.kt)("td",{parentName:"tr",align:"right"},"51.05"),(0,n.kt)("td",{parentName:"tr",align:"right"},"51.12"),(0,n.kt)("td",{parentName:"tr",align:"right"},"51.12"),(0,n.kt)("td",{parentName:"tr",align:"right"},"51.12"),(0,n.kt)("td",{parentName:"tr",align:"right"},"51.12")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"2020-01-28 00:00:00"),(0,n.kt)("td",{parentName:"tr",align:"right"},"50.17"),(0,n.kt)("td",{parentName:"tr",align:"right"},"50.78"),(0,n.kt)("td",{parentName:"tr",align:"right"},"51.23"),(0,n.kt)("td",{parentName:"tr",align:"right"},"51.55"),(0,n.kt)("td",{parentName:"tr",align:"right"},"51.62"),(0,n.kt)("td",{parentName:"tr",align:"right"},"51.62"),(0,n.kt)("td",{parentName:"tr",align:"right"},"51.62"),(0,n.kt)("td",{parentName:"tr",align:"right"},"51.62")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"2020-01-29 00:00:00"),(0,n.kt)("td",{parentName:"tr",align:"right"},"50.07"),(0,n.kt)("td",{parentName:"tr",align:"right"},"50.64"),(0,n.kt)("td",{parentName:"tr",align:"right"},"51.13"),(0,n.kt)("td",{parentName:"tr",align:"right"},"51.6"),(0,n.kt)("td",{parentName:"tr",align:"right"},"51.67"),(0,n.kt)("td",{parentName:"tr",align:"right"},"51.67"),(0,n.kt)("td",{parentName:"tr",align:"right"},"51.67"),(0,n.kt)("td",{parentName:"tr",align:"right"},"51.67")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"2020-01-30 00:00:00"),(0,n.kt)("td",{parentName:"tr",align:"right"},"50.27"),(0,n.kt)("td",{parentName:"tr",align:"right"},"50.91"),(0,n.kt)("td",{parentName:"tr",align:"right"},"51.44"),(0,n.kt)("td",{parentName:"tr",align:"right"},"51.49"),(0,n.kt)("td",{parentName:"tr",align:"right"},"51.56"),(0,n.kt)("td",{parentName:"tr",align:"right"},"51.56"),(0,n.kt)("td",{parentName:"tr",align:"right"},"51.56"),(0,n.kt)("td",{parentName:"tr",align:"right"},"51.56")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"2022-11-09 00:00:00"),(0,n.kt)("td",{parentName:"tr",align:"right"},"76.69"),(0,n.kt)("td",{parentName:"tr",align:"right"},"71.62"),(0,n.kt)("td",{parentName:"tr",align:"right"},"68.01"),(0,n.kt)("td",{parentName:"tr",align:"right"},"65.1"),(0,n.kt)("td",{parentName:"tr",align:"right"},"62.52"),(0,n.kt)("td",{parentName:"tr",align:"right"},"60.17"),(0,n.kt)("td",{parentName:"tr",align:"right"},"58.12"),(0,n.kt)("td",{parentName:"tr",align:"right"},"56.49")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"2022-11-10 00:00:00"),(0,n.kt)("td",{parentName:"tr",align:"right"},"77"),(0,n.kt)("td",{parentName:"tr",align:"right"},"71.64"),(0,n.kt)("td",{parentName:"tr",align:"right"},"67.89"),(0,n.kt)("td",{parentName:"tr",align:"right"},"64.86"),(0,n.kt)("td",{parentName:"tr",align:"right"},"62.26"),(0,n.kt)("td",{parentName:"tr",align:"right"},"59.91"),(0,n.kt)("td",{parentName:"tr",align:"right"},"57.86"),(0,n.kt)("td",{parentName:"tr",align:"right"},"56.23")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"2022-11-11 00:00:00"),(0,n.kt)("td",{parentName:"tr",align:"right"},"78.81"),(0,n.kt)("td",{parentName:"tr",align:"right"},"73.1"),(0,n.kt)("td",{parentName:"tr",align:"right"},"69.22"),(0,n.kt)("td",{parentName:"tr",align:"right"},"66.19"),(0,n.kt)("td",{parentName:"tr",align:"right"},"63.6"),(0,n.kt)("td",{parentName:"tr",align:"right"},"61.25"),(0,n.kt)("td",{parentName:"tr",align:"right"},"59.2"),(0,n.kt)("td",{parentName:"tr",align:"right"},"57.57")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"2022-11-14 00:00:00"),(0,n.kt)("td",{parentName:"tr",align:"right"},"77.4"),(0,n.kt)("td",{parentName:"tr",align:"right"},"72.35"),(0,n.kt)("td",{parentName:"tr",align:"right"},"68.89"),(0,n.kt)("td",{parentName:"tr",align:"right"},"66.15"),(0,n.kt)("td",{parentName:"tr",align:"right"},"63.62"),(0,n.kt)("td",{parentName:"tr",align:"right"},"61.25"),(0,n.kt)("td",{parentName:"tr",align:"right"},"59.13"),(0,n.kt)("td",{parentName:"tr",align:"right"},"57.5")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"2022-11-15 00:00:00"),(0,n.kt)("td",{parentName:"tr",align:"right"},"78.82"),(0,n.kt)("td",{parentName:"tr",align:"right"},"73.66"),(0,n.kt)("td",{parentName:"tr",align:"right"},"70.14"),(0,n.kt)("td",{parentName:"tr",align:"right"},"67.36"),(0,n.kt)("td",{parentName:"tr",align:"right"},"64.94"),(0,n.kt)("td",{parentName:"tr",align:"right"},"62.62"),(0,n.kt)("td",{parentName:"tr",align:"right"},"60.49"),(0,n.kt)("td",{parentName:"tr",align:"right"},"58.68")))))}u.isMDXComponent=!0}}]);