"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[41904],{3905:(e,t,r)=>{r.d(t,{Zo:()=>m,kt:()=>u});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=a.createContext({}),d=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},m=function(e){var t=d(e.components);return a.createElement(s.Provider,{value:t},e.children)},l="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,m=c(e,["components","mdxType","originalType","parentName"]),l=d(r),p=n,u=l["".concat(s,".").concat(p)]||l[p]||f[p]||o;return r?a.createElement(u,i(i({ref:t},m),{},{components:r})):a.createElement(u,i({ref:t},m))}));function u(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=p;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c[l]="string"==typeof e?e:n,i[1]=c;for(var d=2;d<o;d++)i[d]=r[d];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}p.displayName="MDXCreateElement"},26515:(e,t,r)=>{r.d(t,{Z:()=>s});var a=r(39960),n=r(86010),o=r(67294),i=r(16550),c=r(48334);function s(e){let{title:t,url:r,description:s,command:d}=e;const{pathname:m}=(0,i.TH)(),l=m.replace(/\/v\d+/,""),f=!l.includes("/reference")&&!l.includes("/widgets-library/")&&!l.includes("/data_models");return o.createElement(a.Z,{className:(0,n.Z)("rounded border-2 hover:!text-black dark:hover:!text-white !no-underline p-6 cursor-pointer relative overflow-hidden hover:-translate-y-2 transform transition-all duration-300 ease-in-out font-bold shadow-md",{"hover:bg-[#669DCB] border-[#669DCB] dark:hover:bg-[#004A87] dark:border-[#004A87]":l.startsWith("/terminal")||l.startsWith("/pro"),"hover:bg-[#b186bb] border-[#b186bb] dark:hover:bg-[#3a204f] dark:border-[#3a204f]":l.startsWith("/bot"),"hover:bg-[#F5B166] border-[#F5B166] dark:hover:bg-[#511d11] dark:border-[#511d11]":l.startsWith("/sdk")||l.startsWith("/platform"),"hover:bg-[#16A34A] border-[#16A34A] dark:hover:bg-[#14532D] dark:border-[#14532D]":l.startsWith("/excel"),header_docs:!(l.startsWith("/terminal")||l.startsWith("/pro")||l.startsWith("/excel")||l.startsWith("/sdk")||l.startsWith("/platform")||l.startsWith("/bot"))}),to:r},o.createElement("div",{className:"absolute top-0 right-0 left-0 bottom-0"}),o.createElement("div",{className:"flex items-center"},o.createElement("p",{className:"py-2 font-bold text-lg my-0"},t,""),f&&o.createElement(c.Z,{className:"ml-auto mr-4"})),s?o.createElement("p",{className:"text-grey-900 dark:text-grey-200 text-xs font-medium mt-2 mb-0"},s):null)}},57102:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>d,contentTitle:()=>c,default:()=>p,frontMatter:()=>i,metadata:()=>s,toc:()=>m});var a=r(87462),n=(r(67294),r(3905)),o=r(26515);const i={},c="Forecasting",s={unversionedId:"terminal/reference/forecast/index",id:"terminal/reference/forecast/index",title:"Forecasting",description:"Commands",source:"@site/content/terminal/reference/forecast/index.mdx",sourceDirName:"terminal/reference/forecast",slug:"/terminal/reference/forecast/",permalink:"/terminal/reference/forecast/",draft:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/terminal/reference/forecast/index.mdx",tags:[],version:"current",lastUpdatedBy:"Danglewood",lastUpdatedAt:1710625624,formattedLastUpdatedAt:"Mar 16, 2024",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"search",permalink:"/terminal/reference/futures/search"},next:{title:"anom",permalink:"/terminal/reference/forecast/anom"}},d={},m=[{value:"Commands",id:"commands",level:3}],l={toc:m},f="wrapper";function p(e){let{components:t,...r}=e;return(0,n.kt)(f,(0,a.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"forecasting"},"Forecasting"),(0,n.kt)("h3",{id:"commands"},"Commands"),(0,n.kt)("ul",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 -ml-6"},(0,n.kt)(o.Z,{title:"Anom",description:"Perform a Quantile Anomaly detection on a given dataset:...",url:"/terminal/reference/forecast/anom",command:!0,mdxType:"ReferenceCard"}),(0,n.kt)(o.Z,{title:"Atr",description:"Add Average True Range to dataset of specific stock ticker.",url:"/terminal/reference/forecast/atr",command:!0,mdxType:"ReferenceCard"}),(0,n.kt)(o.Z,{title:"Autoarima",description:"Perform Automatic ARIMA forecast:...",url:"/terminal/reference/forecast/autoarima",command:!0,mdxType:"ReferenceCard"}),(0,n.kt)(o.Z,{title:"Autoces",description:"Perform Automatic Complex Exponential Smoothing forecast: https://nixtla.github.io/statsforecast/models.html#autoces",url:"/terminal/reference/forecast/autoces",command:!0,mdxType:"ReferenceCard"}),(0,n.kt)(o.Z,{title:"Autoets",description:"Perform Automatic ETS (Error, Trend, Seasonality) forecast:...",url:"/terminal/reference/forecast/autoets",command:!0,mdxType:"ReferenceCard"}),(0,n.kt)(o.Z,{title:"Autoselect",description:"Perform Automatic Statistical Forecast (select best statistical model from AutoARIMA, AutoETS, AutoCES, MSTL, ...)",url:"/terminal/reference/forecast/autoselect",command:!0,mdxType:"ReferenceCard"}),(0,n.kt)(o.Z,{title:"Brnn",description:"Perform BRNN forecast (Vanilla RNN, LSTM, GRU):...",url:"/terminal/reference/forecast/brnn",command:!0,mdxType:"ReferenceCard"}),(0,n.kt)(o.Z,{title:"Clean",description:"Clean a dataset by filling and dropping NaN values.",url:"/terminal/reference/forecast/clean",command:!0,mdxType:"ReferenceCard"}),(0,n.kt)(o.Z,{title:"Combine",description:"Combine two entire datasets, or add specific columns. Add specificcolumns with the syntax: <datasetX.column2>",url:"/terminal/reference/forecast/combine",command:!0,mdxType:"ReferenceCard"}),(0,n.kt)(o.Z,{title:"Corr",description:"Plot correlation coefficients.",url:"/terminal/reference/forecast/corr",command:!0,mdxType:"ReferenceCard"}),(0,n.kt)(o.Z,{title:"Delete",description:"The column you want to delete from a dataset.",url:"/terminal/reference/forecast/delete",command:!0,mdxType:"ReferenceCard"}),(0,n.kt)(o.Z,{title:"Delta",description:"Add %Change (Delta) to dataset based on specific column.",url:"/terminal/reference/forecast/delta",command:!0,mdxType:"ReferenceCard"}),(0,n.kt)(o.Z,{title:"Desc",description:"Show descriptive statistics of a dataset",url:"/terminal/reference/forecast/desc",command:!0,mdxType:"ReferenceCard"}),(0,n.kt)(o.Z,{title:"Ema",description:"Add exponential moving average to dataset based on specific column.",url:"/terminal/reference/forecast/ema",command:!0,mdxType:"ReferenceCard"}),(0,n.kt)(o.Z,{title:"Expo",description:"Perform Probabilistic Exponential Smoothing forecast:...",url:"/terminal/reference/forecast/expo",command:!0,mdxType:"ReferenceCard"}),(0,n.kt)(o.Z,{title:"Export",description:"Export dataset to Excel",url:"/terminal/reference/forecast/export",command:!0,mdxType:"ReferenceCard"}),(0,n.kt)(o.Z,{title:"Linregr",description:"Perform a linear regression forecast:...",url:"/terminal/reference/forecast/linregr",command:!0,mdxType:"ReferenceCard"}),(0,n.kt)(o.Z,{title:"Load",description:"Load custom dataset (from previous export, custom imports).",url:"/terminal/reference/forecast/load",command:!0,mdxType:"ReferenceCard"}),(0,n.kt)(o.Z,{title:"Mom",description:"Add momentum to dataset based on specific column.",url:"/terminal/reference/forecast/mom",command:!0,mdxType:"ReferenceCard"}),(0,n.kt)(o.Z,{title:"Mstl",description:"Perform Multiple Seasonalities and Trend using Loess (MSTL) forecast:...",url:"/terminal/reference/forecast/mstl",command:!0,mdxType:"ReferenceCard"}),(0,n.kt)(o.Z,{title:"Nbeats",description:"Perform NBEATS forecast (Neural Bayesian Estimation of Time Series):...",url:"/terminal/reference/forecast/nbeats",command:!0,mdxType:"ReferenceCard"}),(0,n.kt)(o.Z,{title:"Nhits",description:"Perform nhits forecast: https://unit8co.github.io/darts/generated_api/darts.models.forecasting.tft_model.html",url:"/terminal/reference/forecast/nhits",command:!0,mdxType:"ReferenceCard"}),(0,n.kt)(o.Z,{title:"Plot",description:"Plot data based on the index",url:"/terminal/reference/forecast/plot",command:!0,mdxType:"ReferenceCard"}),(0,n.kt)(o.Z,{title:"Regr",description:"Perform a regression forecast:...",url:"/terminal/reference/forecast/regr",command:!0,mdxType:"ReferenceCard"}),(0,n.kt)(o.Z,{title:"Rename",description:"The column you want to rename from a dataset.",url:"/terminal/reference/forecast/rename",command:!0,mdxType:"ReferenceCard"}),(0,n.kt)(o.Z,{title:"Rnn",description:"Perform RNN forecast (Vanilla RNN, LSTM, GRU):...",url:"/terminal/reference/forecast/rnn",command:!0,mdxType:"ReferenceCard"}),(0,n.kt)(o.Z,{title:"Roc",description:"Add rate of change to dataset based on specific column.",url:"/terminal/reference/forecast/roc",command:!0,mdxType:"ReferenceCard"}),(0,n.kt)(o.Z,{title:"Rsi",description:"Add rsi to dataset based on specific column.",url:"/terminal/reference/forecast/rsi",command:!0,mdxType:"ReferenceCard"}),(0,n.kt)(o.Z,{title:"Rwd",description:"Perform Random Walk with Drift forecast: https://nixtla.github.io/statsforecast/models.html#randomwalkwithdrift",url:"/terminal/reference/forecast/rwd",command:!0,mdxType:"ReferenceCard"}),(0,n.kt)(o.Z,{title:"Season",description:"The seasonality for a given column",url:"/terminal/reference/forecast/season",command:!0,mdxType:"ReferenceCard"}),(0,n.kt)(o.Z,{title:"Seasonalnaive",description:"Perform SeasonalNaive forecasting: https://nixtla.github.io/statsforecast/models.html#seasonalnaive",url:"/terminal/reference/forecast/seasonalnaive",command:!0,mdxType:"ReferenceCard"}),(0,n.kt)(o.Z,{title:"Setndays",description:"Set the number of days to forecast",url:"/terminal/reference/forecast/setndays",command:!0,mdxType:"ReferenceCard"}),(0,n.kt)(o.Z,{title:"Show",description:"Show a portion of the DataFrame",url:"/terminal/reference/forecast/show",command:!0,mdxType:"ReferenceCard"}),(0,n.kt)(o.Z,{title:"Signal",description:"Add price signal to dataset based on closing price. 1 if the signal is that short term price will go up as...",url:"/terminal/reference/forecast/signal",command:!0,mdxType:"ReferenceCard"}),(0,n.kt)(o.Z,{title:"Sto",description:"Add in Stochastic Oscillator %K and %D",url:"/terminal/reference/forecast/sto",command:!0,mdxType:"ReferenceCard"}),(0,n.kt)(o.Z,{title:"Tcn",description:"Perform TCN forecast: https://unit8co.github.io/darts/generated_api/darts.models.forecasting.tcn_model.html",url:"/terminal/reference/forecast/tcn",command:!0,mdxType:"ReferenceCard"}),(0,n.kt)(o.Z,{title:"Tft",description:"Perform TFT forecast (Temporal Fusion Transformer):...",url:"/terminal/reference/forecast/tft",command:!0,mdxType:"ReferenceCard"}),(0,n.kt)(o.Z,{title:"Theta",description:"Perform Theta forecast: https://unit8co.github.io/darts/generated_api/darts.models.forecasting.theta.html",url:"/terminal/reference/forecast/theta",command:!0,mdxType:"ReferenceCard"}),(0,n.kt)(o.Z,{title:"Timegpt",description:"TODO: Update me",url:"/terminal/reference/forecast/timegpt",command:!0,mdxType:"ReferenceCard"}),(0,n.kt)(o.Z,{title:"Trans",description:"Perform Transformer Forecast:...",url:"/terminal/reference/forecast/trans",command:!0,mdxType:"ReferenceCard"}),(0,n.kt)(o.Z,{title:"Which",description:"Show library versions of required packages.",url:"/terminal/reference/forecast/which",command:!0,mdxType:"ReferenceCard"}),(0,n.kt)(o.Z,{title:"Whisper",description:"Utilize Whisper Model to transcribe a video. Currently only supports Youtube URLS: https://github.com/openai/whisper",url:"/terminal/reference/forecast/whisper",command:!0,mdxType:"ReferenceCard"})))}p.isMDXComponent=!0}}]);