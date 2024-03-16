"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[65122],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>h});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=a.createContext({}),d=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},p=function(e){var t=d(e.components);return a.createElement(s.Provider,{value:t},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=d(n),m=o,h=u["".concat(s,".").concat(m)]||u[m]||c[m]||i;return n?a.createElement(h,r(r({ref:t},p),{},{components:n})):a.createElement(h,r({ref:t},p))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,r=new Array(i);r[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:o,r[1]=l;for(var d=2;d<i;d++)r[d]=n[d];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},88828:(e,t,n)=>{n.d(t,{Z:()=>i});var a=n(67294),o=n(35742);function i(e){let{title:t}=e;return a.createElement(o.Z,null,a.createElement("title",null,t))}},18415:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>l,default:()=>m,frontMatter:()=>r,metadata:()=>s,toc:()=>p});var a=n(87462),o=(n(67294),n(3905)),i=n(88828);const r={title:"Introduction",sidebar_position:1,description:"Learn about the OpenBB Platform, an open-source solution built by the community. Understand its use via Python interface and REST API, and acquaint yourself with how to build a custom extension or contribute directly to the platform",keywords:["OpenBB Platform","Open source","Python interface","REST API","Data integration","Data standardization","OpenBB extensions","openbb-core","Python package","High-Level Architecture","Custom extension","Contribution"]},l=void 0,s={unversionedId:"platform/development/index",id:"platform/development/index",title:"Introduction",description:"Learn about the OpenBB Platform, an open-source solution built by the community. Understand its use via Python interface and REST API, and acquaint yourself with how to build a custom extension or contribute directly to the platform",source:"@site/content/platform/development/index.md",sourceDirName:"platform/development",slug:"/platform/development/",permalink:"/platform/development/",draft:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/platform/development/index.md",tags:[],version:"current",lastUpdatedBy:"Danglewood",lastUpdatedAt:1710625624,formattedLastUpdatedAt:"Mar 16, 2024",sidebarPosition:1,frontMatter:{title:"Introduction",sidebar_position:1,description:"Learn about the OpenBB Platform, an open-source solution built by the community. Understand its use via Python interface and REST API, and acquaint yourself with how to build a custom extension or contribute directly to the platform",keywords:["OpenBB Platform","Open source","Python interface","REST API","Data integration","Data standardization","OpenBB extensions","openbb-core","Python package","High-Level Architecture","Custom extension","Contribution"]},sidebar:"tutorialSidebar",previous:{title:"World News",permalink:"/platform/data_models/WorldNews"},next:{title:"Dependency Management",permalink:"/platform/development/dependency_management"}},d={},p=[{value:"Considerations",id:"considerations",level:2},{value:"Quick look into the OpenBB Platform",id:"quick-look-into-the-openbb-platform",level:2},{value:"What is the Standardization Framework?",id:"what-is-the-standardization-framework",level:3},{value:"Standardization Caveats",id:"standardization-caveats",level:4},{value:"Standard QueryParams Example",id:"standard-queryparams-example",level:4},{value:"Standard Data Example",id:"standard-data-example",level:4},{value:"What is an extension?",id:"what-is-an-extension",level:3},{value:"Types of extensions",id:"types-of-extensions",level:4}],u={toc:p},c="wrapper";function m(e){let{components:t,...n}=e;return(0,o.kt)(c,(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)(i.Z,{title:"Introduction - Development | OpenBB Platform Docs",mdxType:"HeadTitle"}),(0,o.kt)("h2",{id:"considerations"},"Considerations"),(0,o.kt)("p",null,"This section provides guidelines for contributing to the OpenBB Platform.\nThroughout it, we will be differentiating between two types of contributors: Developers and Contributors."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"Developers"),": Those who are building new features or new extensions for the OpenBB Platform or leveraging the OpenBB Platform for custom applications."),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"Contributors"),": Those who contribute to the existing codebase, by opening a Pull Request, thus giving back to the community.  This can include bug fixes, enhancements, documentation, and more.")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Why is this distinction important?")),(0,o.kt)("p",null,"The OpenBB Platform has been designed to be the foundation for further development of applications regarding investment research. We anticipate a wide range of creative use cases for it. Some use cases may be highly specific or detail-oriented, solving particular problems that may not necessarily fit within the OpenBB Platform Github repository. This is entirely acceptable and even encouraged. This document provides a comprehensive guide on how to build your own extensions, add new data points, and more."),(0,o.kt)("p",null,"The ",(0,o.kt)("strong",{parentName:"p"},"Developer")," role, as defined in this document, can be thought of as the foundational role. Developers are those who use the OpenBB Platform as is or build upon it."),(0,o.kt)("p",null,"The ",(0,o.kt)("strong",{parentName:"p"},"Contributor")," role refers to those who enhance the OpenBB Platform codebase (either by directly adding to the OpenBB Platform or by creating an ",(0,o.kt)("a",{parentName:"p",href:"/platform/extensions"},"extension"),"). Contributors are willing to go the extra mile, spending additional time on quality assurance, testing, or collaborating with the OpenBB development team to ensure adherence to standards, thereby giving back to the community."),(0,o.kt)("h2",{id:"quick-look-into-the-openbb-platform"},"Quick look into the OpenBB Platform"),(0,o.kt)("p",null,"The OpenBB Platform was built by the Open-Source community and is characterized by its core and extensions. The core handles data integration and standardization, while extensions enable customization and advanced functionalities. The OpenBB Platform is designed to be used from either a REST API or from a Python package."),(0,o.kt)("p",null,"The REST API is built on top of FastAPI and can be started by running the following command from the root:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"uvicorn openbb_core.api.rest_api:app --host 0.0.0.0 --port 8000 --reload\n")),(0,o.kt)("p",null,"The Python interface we provide to users is the ",(0,o.kt)("inlineCode",{parentName:"p"},"openbb")," python package."),(0,o.kt)("p",null,"The code you will find in this package is generated from a script, which is a wrapper around the ",(0,o.kt)("inlineCode",{parentName:"p"},"openbb-core")," with any additional extensions that are installed."),(0,o.kt)("p",null,"When the user runs ",(0,o.kt)("inlineCode",{parentName:"p"},"import openbb"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"from openbb import obb")," or other variants, the script that generates the packaged code is triggered. It detects if there are new extensions installed in the environment and rebuilds the packaged code accordingly. If new extensions are not found, it uses the current packaged version."),(0,o.kt)("p",null,"In the case you wish to manually trigger a rebuild of the package (see more in the contributing information), the following command can be run:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'python -c "import openbb; openbb.build()"\n')),(0,o.kt)("p",null,"The Python interface can be imported with:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"from openbb import obb\n")),(0,o.kt)("p",null,"The remainder of this document will take you through two types of contributions:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Building a custom extension"),(0,o.kt)("li",{parentName:"ol"},"Contributing directly to the OpenBB Platform")),(0,o.kt)("p",null,"Before moving forward, please take a look at the high-level view of the OpenBB Platform architecture. We will go over each bit in this document."),(0,o.kt)("picture",null,(0,o.kt)("source",{media:"(prefers-color-scheme: dark)",srcset:"https://github.com/OpenBB-finance/OpenBBTerminal/assets/48914296/6125cbf2-ff5b-4cd8-b5b8-452cd8d84418"}),(0,o.kt)("img",{alt:"OpenBB Platform High-Level Architecture",src:"https://github.com/OpenBB-finance/OpenBBTerminal/assets/48914296/6125cbf2-ff5b-4cd8-b5b8-452cd8d84418"})),(0,o.kt)("h3",{id:"what-is-the-standardization-framework"},"What is the Standardization Framework?"),(0,o.kt)("p",null,"The Standardization Framework is a set of tools and guidelines that enable the user to query and obtain data in a consistent way across multiple providers."),(0,o.kt)("p",null,"Each data model should inherit from a ",(0,o.kt)("a",{parentName:"p",href:"/platform/data_models"},"standard data")," model that is already defined inside the OpenBB Platform. All standard models are created and maintained by the OpenBB team."),(0,o.kt)("p",null,"Usage of these models will unlock a set of perks that are only available to standardized data, namely:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Can query and output data in a standardized way."),(0,o.kt)("li",{parentName:"ul"},"Can expect extensions that follow standardization to work out-of-the-box."),(0,o.kt)("li",{parentName:"ul"},"Can expect transparently defined schemas for the data that is returned by the API."),(0,o.kt)("li",{parentName:"ul"},"Can expect consistent data types and validation."),(0,o.kt)("li",{parentName:"ul"},"Will work seamlessly with other providers that use the same standard model.")),(0,o.kt)("p",null,"The standard models are defined under the ",(0,o.kt)("inlineCode",{parentName:"p"},"/OpenBBTerminal/openbb_platform/platform/core/provider/standard_models/")," directory."),(0,o.kt)("p",null,"Each standard model defines a ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/OpenBB-finance/OpenBBTerminal/tree/develop/openbb_platform/core/openbb_core/provider/abstract/query_params.py"},(0,o.kt)("inlineCode",{parentName:"a"},"QueryParams"))," and ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/OpenBB-finance/OpenBBTerminal/tree/develop/openbb_platform/core/openbb_core/provider/abstract/data.py"},(0,o.kt)("inlineCode",{parentName:"a"},"Data"))," model, which are used to query and output data. Under the hood, these are just pydantic models, meaning you can leverage all the built-in pydantic features such as validators."),(0,o.kt)("h4",{id:"standardization-caveats"},"Standardization Caveats"),(0,o.kt)("p",null,"The standardization framework is a very powerful tool, but it has some caveats that you should be aware of:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"We standardize fields that are shared between two or more providers. If there is a third provider that doesn't share the same fields, we will declare it as an ",(0,o.kt)("inlineCode",{parentName:"li"},"Optional")," field."),(0,o.kt)("li",{parentName:"ul"},"When mapping the column names from a provider-specific model to the standard model, the CamelCase to snake_case conversion is done automatically. If the column names are not the same, you'll need to manually map them. (e.g. ",(0,o.kt)("inlineCode",{parentName:"li"},"o")," -> ",(0,o.kt)("inlineCode",{parentName:"li"},"open"),")"),(0,o.kt)("li",{parentName:"ul"},"The standard models are created and maintained by the OpenBB team. If you want to add a new field to a standard model, you'll need to open a PR to the OpenBB Platform.")),(0,o.kt)("h4",{id:"standard-queryparams-example"},"Standard QueryParams Example"),(0,o.kt)("p",null,"An example ",(0,o.kt)("inlineCode",{parentName:"p"},"QueryParams")," is shown here, coming from the EquityHistorical standard model:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'class EquityHistoricalQueryParams(QueryParams):\n    """Stock end of day Query."""\n    symbol: str = Field(description=QUERY_DESCRIPTIONS.get("symbol", ""))\n    start_date: Optional[date] = Field(\n        description=QUERY_DESCRIPTIONS.get("start_date", ""), default=None\n    )\n    end_date: Optional[date] = Field(\n        description=QUERY_DESCRIPTIONS.get("end_date", ""), default=None\n    )\n')),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"QueryParams")," is an abstract class that defines what parameters will be needed to make a query to obtain data.  Note that not all possible parameters are defined here, and can be further refined in the provider-specific model."),(0,o.kt)("p",null,"The OpenBB Platform dynamically knows where the standard models begin in the inheritance tree, so you don't need to worry about it."),(0,o.kt)("h4",{id:"standard-data-example"},"Standard Data Example"),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"Data")," model for the EquityHistorical standard model is shown here:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'class EquityHistoricalData(Data):\n    """Stock end of day price Data."""\n\n    date: datetime = Field(description=DATA_DESCRIPTIONS.get("date", ""))\n    open: PositiveFloat = Field(description=DATA_DESCRIPTIONS.get("open", ""))\n    high: PositiveFloat = Field(description=DATA_DESCRIPTIONS.get("high", ""))\n    low: PositiveFloat = Field(description=DATA_DESCRIPTIONS.get("low", ""))\n    close: PositiveFloat = Field(description=DATA_DESCRIPTIONS.get("close", ""))\n    volume: float = Field(description=DATA_DESCRIPTIONS.get("volume", ""))\n    vwap: Optional[PositiveFloat] = Field(description=DATA_DESCRIPTIONS.get("vwap", ""), default=None)\n')),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"Data")," class is an abstract class that tells us the expected output data. Here we can see a ",(0,o.kt)("inlineCode",{parentName:"p"},"vwap")," field that is ",(0,o.kt)("inlineCode",{parentName:"p"},"Optional"),". This is because not all providers share this field while it is shared between two or more providers."),(0,o.kt)("h3",{id:"what-is-an-extension"},"What is an extension?"),(0,o.kt)("p",null,"An extension adds functionality to the OpenBB Platform. It can be a new data source, a new command, a new visualization, etc."),(0,o.kt)("h4",{id:"types-of-extensions"},"Types of extensions"),(0,o.kt)("p",null,"Extensions currently fall into 3 categories:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"OpenBB Extensions - built and maintained by the OpenBB team (e.g. ",(0,o.kt)("inlineCode",{parentName:"li"},"openbb-equity"),")"),(0,o.kt)("li",{parentName:"ol"},"Community Extensions - built by anyone and primarily maintained by OpenBB (e.g. ",(0,o.kt)("inlineCode",{parentName:"li"},"openbb-yfinance"),")"),(0,o.kt)("li",{parentName:"ol"},"Independent Extensions - built and maintained independently by anyone")),(0,o.kt)("p",null,"If you have built an extension and you think that it would be a good community extension, you can open a PR to the OpenBB Platform repository and we will review it."),(0,o.kt)("p",null,"We encourage independent extensions to be shared with the community by publishing them to PyPI."))}m.isMDXComponent=!0}}]);