"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[62149],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>h});var n=a(67294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=p(a),u=o,h=d["".concat(s,".").concat(u)]||d[u]||m[u]||r;return a?n.createElement(h,i(i({ref:t},c),{},{components:a})):n.createElement(h,i({ref:t},c))}));function h(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=a.length,i=new Array(r);i[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:o,i[1]=l;for(var p=2;p<r;p++)i[p]=a[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},88828:(e,t,a)=>{a.d(t,{Z:()=>r});var n=a(67294),o=a(35742);function r(e){let{title:t}=e;return n.createElement(o.Z,null,n.createElement("title",null,t))}},34185:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var n=a(87462),o=(a(67294),a(3905)),r=a(88828);const i={title:"OBBject",sidebar_position:3,description:"This page provides information about the OBBject class in the OpenBB Platform.  This class provides the interface to interact with commands",keywords:["OBBject","Python","Development","OpenBB Platform","Results","Commands","Pandas","DataFrame","Polars","Numpy","extensions"]},l=void 0,s={unversionedId:"platform/development/obbject",id:"platform/development/obbject",title:"OBBject",description:"This page provides information about the OBBject class in the OpenBB Platform.  This class provides the interface to interact with commands",source:"@site/content/platform/development/obbject.md",sourceDirName:"platform/development",slug:"/platform/development/obbject",permalink:"/platform/development/obbject",draft:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/platform/development/obbject.md",tags:[],version:"current",lastUpdatedBy:"montezdesousa",lastUpdatedAt:1713550349,formattedLastUpdatedAt:"Apr 19, 2024",sidebarPosition:3,frontMatter:{title:"OBBject",sidebar_position:3,description:"This page provides information about the OBBject class in the OpenBB Platform.  This class provides the interface to interact with commands",keywords:["OBBject","Python","Development","OpenBB Platform","Results","Commands","Pandas","DataFrame","Polars","Numpy","extensions"]},sidebar:"tutorialSidebar",previous:{title:"Architecture Overview",permalink:"/platform/development/architecture_overview"},next:{title:"How To Guides",permalink:"/platform/development/how-to/"}},p={},c=[{value:"Example",id:"example",level:2},{value:"OBBject Methods",id:"obbject-methods",level:2},{value:"to_dataframe()",id:"to_dataframe",level:3},{value:"to_dict(orient)",id:"to_dictorient",level:3},{value:"Others",id:"others",level:3},{value:"to_numpy()",id:"to_numpy",level:4},{value:"to_polars()",id:"to_polars",level:4},{value:"show()",id:"show",level:4},{value:"OBBject Extensions",id:"obbject-extensions",level:2}],d={toc:c},m="wrapper";function u(e){let{components:t,...a}=e;return(0,o.kt)(m,(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)(r.Z,{title:"OBBject - Developer Guidelines - Development | OpenBB Platform Docs",mdxType:"HeadTitle"}),(0,o.kt)("p",null,"The OBBject (OpenBB Object) is at the heart of developing around the OpenBB Platform. Every command will return this class as the command output. This class contains the following attributes:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"results",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"This contains serializable data that was obtained by running the command."))),(0,o.kt)("li",{parentName:"ul"},"provider",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"The name of the provider that was used to obtain the data."))),(0,o.kt)("li",{parentName:"ul"},"warnings",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Any warnings that were generated by the command."))),(0,o.kt)("li",{parentName:"ul"},"extra",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Additional metadata about the command run, including any arguments, the route, the timestamp, etc.")))),(0,o.kt)("p",null,"Additionally, the OBBject class contains a class variable, ",(0,o.kt)("inlineCode",{parentName:"p"},"accessors"),", which is used to register extensions to the class. This is done by using the ",(0,o.kt)("inlineCode",{parentName:"p"},"@obbject_accessor")," decorator. This decorator will register the class as an accessor to the OBBject class, and will be available on every OBBject returned by a command."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'\nfrom openbb import obb\nres = obb.equity.price.historical("AAPL")\nres.accessors\n')),(0,o.kt)("p",null,"An example with the ",(0,o.kt)("inlineCode",{parentName:"p"},"openbb-charting")," extension would output:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-console"},"{'charting'}\n")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Find more about ",(0,o.kt)("inlineCode",{parentName:"p"},"OBBject")," extensions ",(0,o.kt)("a",{parentName:"p",href:"how-to/add_obbject_extension"},"here"),".")),(0,o.kt)("h2",{id:"example"},"Example"),(0,o.kt)("p",null,"In the python interface, the OBBject class is returned by every command. The following example shows how to access the results of a command:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'from openbb import obb\n\nobbject = obb.equity.price.historical("AAPL", provider="fmp")\n\ndisplay(obbject)\n')),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-console"},"OBBject\n\nid: 0655d06a-8797-7310-8000-4daaa1d47936\nresults: [{'date': datetime.datetime(2023, 11, 21, 0, 0), 'open': 191.41, 'high': 1...\nprovider: fmp\nwarnings: None\nchart: None\nextra: {'metadata': {'arguments': {'provider_choices': {'provider': 'fmp'}, 'standa...\n")),(0,o.kt)("p",null,"The output type is ",(0,o.kt)("inlineCode",{parentName:"p"},"<class 'openbb_core.app.model.obbject.OBBject'>"),"."),(0,o.kt)("p",null,"If we look at the results attribute, we see that we are returned a list of the Data models used, i.e"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"obbject.results[0]\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-console"},"FMPEquityHistoricalData(date=2023-11-21 00:00:00, open=191.41, high=191.5, low=189.74, close=190.375, volume=24029603, vwap=190.54, label=November 21, 23, adj_close=190.375, unadjusted_volume=24029603.0, change=-1.03, change_percent=-0.5407241, change_over_time=-0.005407241)\n")),(0,o.kt)("p",null,"In general, this will not be how you want to ingest or modify your data, so to help with this we have provided some methods."),(0,o.kt)("h2",{id:"obbject-methods"},"OBBject Methods"),(0,o.kt)("p",null,"We understand that there is no one size fits all solution for data ingestion and manipulation, so we have provided a few methods to help with this and handle the conversion from Obbject to your preferred data type. These methods are accessed by running ",(0,o.kt)("inlineCode",{parentName:"p"},"obbject.<method>"),"."),(0,o.kt)("h3",{id:"to_dataframe"},"to_dataframe()"),(0,o.kt)("p",null,"One of the most popular libraries for python data manipulation, this method will return a pandas dataframe with the results. We have designed this function to work with various data structures we have encountered. Given the time series nature of the data, we set the index to be ",(0,o.kt)("inlineCode",{parentName:"p"},"date")," if that column appears in the models."),(0,o.kt)("p",null,"This also has the shorter alias ",(0,o.kt)("inlineCode",{parentName:"p"},"to_df()"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'type(obb.equity.price.historical("AAPL", provider="fmp").to_dataframe())\n')),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-console"},"<class 'pandas.core.frame.DataFrame'>\n")),(0,o.kt)("h3",{id:"to_dictorient"},"to_dict(orient)"),(0,o.kt)("p",null,"A very common data structure is to return the data in a dictionary. This model provides an interface to do so, with options to return the dictionary in different orientations, just as in the pandas ",(0,o.kt)("inlineCode",{parentName:"p"},"to_dict()")," method. The default method will return a dictionary that allows you to index to obtain data:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'to_dict = obb.equity.price.historical("AAPL", provider="fmp").to_dict()["open"][:10]\n')),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-console"},"[150.16, 148.13, 149.45, 148.31, 145.14, 144.29, 141.4, 148.21, 145.96, 147.77]\n")),(0,o.kt)("p",null,"Orienting as records will give you a list of dictionaries, commonly used in JSON data structures:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'obb.equity.price.historical("AAPL", provider="fmp").to_dict("records")[0]\n')),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"{'date': datetime.date(2023, 3, 6),\n 'open': 153.79,\n 'high': 156.3,\n 'low': 153.46,\n 'close': 153.83,\n 'volume': 87558000,\n 'vwap': 154.53,\n 'label': 'March 06, 23',\n 'adj_close': 153.01,\n 'unadjusted_volume': 87558000.0,\n 'change': 0.04,\n 'change_percent': 0.02600949,\n 'change_over_time': 0.0002600949}\n")),(0,o.kt)("h3",{id:"others"},"Others"),(0,o.kt)("p",null,"In addition to these two highly used methods, we have also provided the following methods:"),(0,o.kt)("h4",{id:"to_numpy"},"to_numpy()"),(0,o.kt)("p",null,"Returns numpy arrays of the results. Note that this loses the column names, so you will need to index the array to obtain the data."),(0,o.kt)("h4",{id:"to_polars"},"to_polars()"),(0,o.kt)("p",null,"Growing in popularity, polars is a blazingly fast dataframe library. This method will return a polars dataframe. Note that we do not include polars in the core dependency tree, so it needs to be installed separately."),(0,o.kt)("h4",{id:"show"},"show()"),(0,o.kt)("p",null,"When a charting extension is installed, this method will display the chart if it was computed during the execution of the command, by setting the ",(0,o.kt)("inlineCode",{parentName:"p"},"chart")," parameter to ",(0,o.kt)("inlineCode",{parentName:"p"},"True"),"."),(0,o.kt)("h2",{id:"obbject-extensions"},"OBBject Extensions"),(0,o.kt)("p",null,"OBBject extensions registers an accessor in each OBBject that is returned when a command is executed."),(0,o.kt)("p",null,"This ",(0,o.kt)("a",{parentName:"p",href:"how-to/add_obbject_extension"},"page")," details the process for extending the OBBject class."))}u.isMDXComponent=!0}}]);