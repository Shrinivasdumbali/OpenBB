"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[47194],{3905:(t,e,n)=>{n.d(e,{Zo:()=>s,kt:()=>c});var a=n(67294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},l=Object.keys(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var p=a.createContext({}),d=function(t){var e=a.useContext(p),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},s=function(t){var e=d(t.components);return a.createElement(p.Provider,{value:e},t.children)},m="mdxType",u={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},b=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,l=t.originalType,p=t.parentName,s=o(t,["components","mdxType","originalType","parentName"]),m=d(n),b=r,c=m["".concat(p,".").concat(b)]||m[b]||u[b]||l;return n?a.createElement(c,i(i({ref:e},s),{},{components:n})):a.createElement(c,i({ref:e},s))}));function c(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=n.length,i=new Array(l);i[0]=b;var o={};for(var p in e)hasOwnProperty.call(e,p)&&(o[p]=e[p]);o.originalType=t,o[m]="string"==typeof t?t:r,i[1]=o;for(var d=2;d<l;d++)i[d]=n[d];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}b.displayName="MDXCreateElement"},88828:(t,e,n)=>{n.d(e,{Z:()=>l});var a=n(67294),r=n(35742);function l(t){let{title:e}=t;return a.createElement(r.Z,null,a.createElement("title",null,e))}},78098:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>d,contentTitle:()=>o,default:()=>b,frontMatter:()=>i,metadata:()=>p,toc:()=>s});var a=n(87462),r=(n(67294),n(3905)),l=n(88828);const i={title:"Data Extensions",sidebar_position:1,description:"Learn about the OpenBB Platform and its extension framework that allows seamless integration of modules like 'openbb-yfinance'. Discover how installations and removals automatically update the router when the Python interpreter is refreshed. This page lists the data provider extensions available.",keywords:["OpenBB Platform","extension framework","yFinance","install openbb-yfinance","Python interpreter","PyPI","openbb-qa","data","vendors","providers","install","free","subscription"]},o=void 0,p={unversionedId:"platform/extensions/data_extensions",id:"platform/extensions/data_extensions",title:"Data Extensions",description:"Learn about the OpenBB Platform and its extension framework that allows seamless integration of modules like 'openbb-yfinance'. Discover how installations and removals automatically update the router when the Python interpreter is refreshed. This page lists the data provider extensions available.",source:"@site/content/platform/extensions/data_extensions.md",sourceDirName:"platform/extensions",slug:"/platform/extensions/data_extensions",permalink:"/platform/extensions/data_extensions",draft:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/platform/extensions/data_extensions.md",tags:[],version:"current",lastUpdatedBy:"Danglewood",lastUpdatedAt:1710625624,formattedLastUpdatedAt:"Mar 16, 2024",sidebarPosition:1,frontMatter:{title:"Data Extensions",sidebar_position:1,description:"Learn about the OpenBB Platform and its extension framework that allows seamless integration of modules like 'openbb-yfinance'. Discover how installations and removals automatically update the router when the Python interpreter is refreshed. This page lists the data provider extensions available.",keywords:["OpenBB Platform","extension framework","yFinance","install openbb-yfinance","Python interpreter","PyPI","openbb-qa","data","vendors","providers","install","free","subscription"]},sidebar:"tutorialSidebar",previous:{title:"OpenBB Platform Extensions",permalink:"/platform/extensions/"},next:{title:"Toolkits",permalink:"/platform/extensions/toolkit_extensions"}},d={},s=[{value:"Provider Coverage",id:"provider-coverage",level:2},{value:"Installation",id:"installation",level:2},{value:"Available Data Extensions",id:"available-data-extensions",level:2},{value:"Core <code>openbb</code> Providers",id:"core-openbb-providers",level:3},{value:"Community Providers",id:"community-providers",level:3}],m={toc:s},u="wrapper";function b(t){let{components:e,...n}=t;return(0,r.kt)(u,(0,a.Z)({},m,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)(l.Z,{title:"Data - Extensions | OpenBB Platform Docs",mdxType:"HeadTitle"}),(0,r.kt)("p",null,"Data extensions will expand the breadth and coverage of the data available in the OpenBB Platform. Each source (provider) is its own independent extension, even if there is only one endpoint accessible. This allows every data source to be inserted or removed, at any time, without disturbing the operation of the Core components."),(0,r.kt)("p",null,"Functions will appear in the Python Interface and Fast API only if a supported provider, for that specific endpoint, is installed. Additional Python libraries will be installed, where required, by the extension."),(0,r.kt)("h2",{id:"provider-coverage"},"Provider Coverage"),(0,r.kt)("p",null,"The total installed coverage can be determined through the Python interface, as a dictionary."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"from openbb import obb\nobb.coverage.providers\n")),(0,r.kt)("h2",{id:"installation"},"Installation"),(0,r.kt)("p",null,"All data extensions are installed with similar syntax. Published data extensions will have names beginning with ",(0,r.kt)("inlineCode",{parentName:"p"},"openbb"),". For example, yFinance."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-console"},"pip install openbb-yfinance\n")),(0,r.kt)("p",null,"Additions and removals update the router automatically to reflect the changes when the Python interpreter is refreshed. Below is a list of data provider extensions."),(0,r.kt)("p",null,"Uninstall any extension with ",(0,r.kt)("inlineCode",{parentName:"p"},"pip uninstall"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-console"},"pip uninstall openbb-yfinance\n")),(0,r.kt)("h2",{id:"available-data-extensions"},"Available Data Extensions"),(0,r.kt)("h3",{id:"core-openbb-providers"},"Core ",(0,r.kt)("inlineCode",{parentName:"h3"},"openbb")," Providers"),(0,r.kt)("p",null,"These packages are what will be installed when ",(0,r.kt)("inlineCode",{parentName:"p"},"pip install openbb")," is run"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Extension Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Installation Command"),(0,r.kt)("th",{parentName:"tr",align:null},"Minimum Subscription Type Required"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"openbb-benzinga"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://www.benzinga.com/apis/en-ca/"},"Benzinga")," data connector"),(0,r.kt)("td",{parentName:"tr",align:null},"pip install openbb-benzinga"),(0,r.kt)("td",{parentName:"tr",align:null},"Paid")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"openbb-fmp"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://site.financialmodelingprep.com/developer/"},"FMP")," data connector"),(0,r.kt)("td",{parentName:"tr",align:null},"pip install openbb-fmp"),(0,r.kt)("td",{parentName:"tr",align:null},"Free")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"openbb-fred"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://fred.stlouisfed.org/"},"FRED")," data connector"),(0,r.kt)("td",{parentName:"tr",align:null},"pip install openbb-fred"),(0,r.kt)("td",{parentName:"tr",align:null},"Free")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"openbb-intrinio"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://intrinio.com/pricing"},"Intrinio")," data connector"),(0,r.kt)("td",{parentName:"tr",align:null},"pip install openbb-intrinio"),(0,r.kt)("td",{parentName:"tr",align:null},"Paid")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"openbb-oecd"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://data.oecd.org/"},"OECD")," data connector"),(0,r.kt)("td",{parentName:"tr",align:null},"pip install openbb-oecd"),(0,r.kt)("td",{parentName:"tr",align:null},"Free")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"openbb-polygon"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://polygon.io/"},"Polygon")," data connector"),(0,r.kt)("td",{parentName:"tr",align:null},"pip install openbb-polygon"),(0,r.kt)("td",{parentName:"tr",align:null},"Free")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"openbb-sec"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://www.sec.gov/edgar/sec-api-documentation"},"SEC")," data connector"),(0,r.kt)("td",{parentName:"tr",align:null},"pip install openbb-sec"),(0,r.kt)("td",{parentName:"tr",align:null},"None")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"openbb-tiingo"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://www.tiingo.com/about/pricing"},"Tiingo")," data connector"),(0,r.kt)("td",{parentName:"tr",align:null},"pip install openbb-tiingo"),(0,r.kt)("td",{parentName:"tr",align:null},"Free")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"openbb-tradingeconomics"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://tradingeconomics.com/api"},"TradingEconomics")," data connector"),(0,r.kt)("td",{parentName:"tr",align:null},"pip install openbb-tradingeconomics"),(0,r.kt)("td",{parentName:"tr",align:null},"Paid")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"openbb-yfinance"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://finance.yahoo.com/"},"Yahoo Finance")," data connector"),(0,r.kt)("td",{parentName:"tr",align:null},"pip install openbb-yfinance"),(0,r.kt)("td",{parentName:"tr",align:null},"None")))),(0,r.kt)("h3",{id:"community-providers"},"Community Providers"),(0,r.kt)("p",null,"These packages are not installed when ",(0,r.kt)("inlineCode",{parentName:"p"},"pip install openbb")," is run.  They are available for installation separately or by running ",(0,r.kt)("inlineCode",{parentName:"p"},"pip install openbb[all]")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Extension Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Installation Command"),(0,r.kt)("th",{parentName:"tr",align:null},"Minimum Subscription Type Required"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"openbb-alpha-vantage"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://www.alphavantage.co/"},"Alpha Vantage")," data connector"),(0,r.kt)("td",{parentName:"tr",align:null},"pip install openbb-alpha-vantage"),(0,r.kt)("td",{parentName:"tr",align:null},"Free")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"openbb-biztoc"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://api.biztoc.com/#biztoc-default"},"Biztoc")," News data connector"),(0,r.kt)("td",{parentName:"tr",align:null},"pip install openbb-biztoc"),(0,r.kt)("td",{parentName:"tr",align:null},"Free")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"openbb-cboe"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://www.cboe.com/delayed_quotes/"},"Cboe")," data connector"),(0,r.kt)("td",{parentName:"tr",align:null},"pip install openbb-cboe"),(0,r.kt)("td",{parentName:"tr",align:null},"None")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"openbb-ecb"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://data.ecb.europa.eu/"},"ECB")," data connector"),(0,r.kt)("td",{parentName:"tr",align:null},"pip install openbb-ecb"),(0,r.kt)("td",{parentName:"tr",align:null},"None")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"openbb-federal-reserve"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://www.federalreserve.gov/"},"Federal Reserve")," data connector"),(0,r.kt)("td",{parentName:"tr",align:null},"pip install openbb-federal-reserve"),(0,r.kt)("td",{parentName:"tr",align:null},"None")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"openbb-finra"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://www.finra.org/finra-data"},"FINRA")," data connector"),(0,r.kt)("td",{parentName:"tr",align:null},"pip install openbb-finra"),(0,r.kt)("td",{parentName:"tr",align:null},"None / Free")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"openbb-finviz"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://finviz.com"},"Finviz")," data connector"),(0,r.kt)("td",{parentName:"tr",align:null},"pip install openbb-finviz"),(0,r.kt)("td",{parentName:"tr",align:null},"None")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"openbb-government-us"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://data.gov"},"US Government")," data connector"),(0,r.kt)("td",{parentName:"tr",align:null},"pip install openbb-us-government"),(0,r.kt)("td",{parentName:"tr",align:null},"None")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"openbb-nasdaq"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://data.nasdaq.com/"},"Nasdaq Data Link")," connector"),(0,r.kt)("td",{parentName:"tr",align:null},"pip install openbb-nasdaq"),(0,r.kt)("td",{parentName:"tr",align:null},"None / Free")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"openbb-seeking-alpha"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://seekingalpha.com/"},"Seeking Alpha")," data connector"),(0,r.kt)("td",{parentName:"tr",align:null},"pip install openbb-seeking-alpha"),(0,r.kt)("td",{parentName:"tr",align:null},"None")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"openbb-stockgrid"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://stockgrid.io"},"Stockgrid")," data connector"),(0,r.kt)("td",{parentName:"tr",align:null},"pip install openbb-stockgrid"),(0,r.kt)("td",{parentName:"tr",align:null},"None")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"openbb-tmx"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://money.tmx.com"},"TMX")," data connector"),(0,r.kt)("td",{parentName:"tr",align:null},"pip install openbb-tmx"),(0,r.kt)("td",{parentName:"tr",align:null},"None")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"openbb-tradier"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://tradier.com"},"Tradier")," data connector"),(0,r.kt)("td",{parentName:"tr",align:null},"pip install openbb-tradier"),(0,r.kt)("td",{parentName:"tr",align:null},"None")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"openbb-wsj"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://www.wsj.com/"},"Wall Street Journal")," data connector"),(0,r.kt)("td",{parentName:"tr",align:null},"pip install openbb-wsj"),(0,r.kt)("td",{parentName:"tr",align:null},"None")))),(0,r.kt)("p",null,"Have you published a data provider extension and want it featured on this list? Tell us about it! Open a pull request on ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/OpenBB-finance/OpenBBTerminal/"},"GitHub")," to submit an extension for inclusion. Code contributions, for new and existing, data providers are always welcome."),(0,r.kt)("p",null,"Search ",(0,r.kt)("a",{parentName:"p",href:"https://pypi.org/search/?q=openbb-"},"PyPI")," to find more extensions."))}b.isMDXComponent=!0}}]);