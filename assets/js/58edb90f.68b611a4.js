"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[97687],{3905:(t,e,a)=>{a.d(e,{Zo:()=>m,kt:()=>h});var n=a(67294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function i(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function l(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?i(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function o(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},i=Object.keys(t);for(n=0;n<i.length;n++)a=i[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(n=0;n<i.length;n++)a=i[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var p=n.createContext({}),d=function(t){var e=n.useContext(p),a=e;return t&&(a="function"==typeof t?t(e):l(l({},e),t)),a},m=function(t){var e=d(t.components);return n.createElement(p.Provider,{value:e},t.children)},g="mdxType",s={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},k=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,i=t.originalType,p=t.parentName,m=o(t,["components","mdxType","originalType","parentName"]),g=d(a),k=r,h=g["".concat(p,".").concat(k)]||g[k]||s[k]||i;return a?n.createElement(h,l(l({ref:e},m),{},{components:a})):n.createElement(h,l({ref:e},m))}));function h(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var i=a.length,l=new Array(i);l[0]=k;var o={};for(var p in e)hasOwnProperty.call(e,p)&&(o[p]=e[p]);o.originalType=t,o[g]="string"==typeof t?t:r,l[1]=o;for(var d=2;d<i;d++)l[d]=a[d];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}k.displayName="MDXCreateElement"},88828:(t,e,a)=>{a.d(e,{Z:()=>i});var n=a(67294),r=a(35742);function i(t){let{title:e}=t;return n.createElement(r.Z,null,n.createElement("title",null,e))}},68094:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>d,contentTitle:()=>o,default:()=>k,frontMatter:()=>l,metadata:()=>p,toc:()=>m});var n=a(87462),r=(a(67294),a(3905)),i=a(88828);const l={title:"Quantitative Analysis",description:"The page provides a comprehensive guide on how to use the 'qa' module of the Terminal's Quantitative Analysis menu for SDK environment. It contains detailed information about the grouping of functions into categories, examples on their usage, and how they provide users more ways to interact with the function library.",keywords:["Quantitative Analysis","SDK Environment","Library of Functions","Code Completion","Statistics","Risk Management","API Integration","Data Relation","Nasdaq Data Link API","Risk-Adjusted Return","openbb.qa"]},o=void 0,p={unversionedId:"sdk/data-available/quantitative-analysis",id:"sdk/data-available/quantitative-analysis",title:"Quantitative Analysis",description:"The page provides a comprehensive guide on how to use the 'qa' module of the Terminal's Quantitative Analysis menu for SDK environment. It contains detailed information about the grouping of functions into categories, examples on their usage, and how they provide users more ways to interact with the function library.",source:"@site/content/sdk/data-available/quantitative-analysis.md",sourceDirName:"sdk/data-available",slug:"/sdk/data-available/quantitative-analysis",permalink:"/sdk/data-available/quantitative-analysis",draft:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/sdk/data-available/quantitative-analysis.md",tags:[],version:"current",lastUpdatedBy:"Danglewood",lastUpdatedAt:1710625624,formattedLastUpdatedAt:"Mar 16, 2024",frontMatter:{title:"Quantitative Analysis",description:"The page provides a comprehensive guide on how to use the 'qa' module of the Terminal's Quantitative Analysis menu for SDK environment. It contains detailed information about the grouping of functions into categories, examples on their usage, and how they provide users more ways to interact with the function library.",keywords:["Quantitative Analysis","SDK Environment","Library of Functions","Code Completion","Statistics","Risk Management","API Integration","Data Relation","Nasdaq Data Link API","Risk-Adjusted Return","openbb.qa"]},sidebar:"tutorialSidebar",previous:{title:"Futures",permalink:"/sdk/data-available/futures"},next:{title:"Technical Analysis",permalink:"/sdk/data-available/ta"}},d={},m=[{value:"How to Use",id:"how-to-use",level:2},{value:"Examples",id:"examples",level:2},{value:"Import Statements",id:"import-statements",level:3},{value:"Get Data",id:"get-data",level:3},{value:"Summary",id:"summary",level:3},{value:"Spread",id:"spread",level:3},{value:"Rolling",id:"rolling",level:3},{value:"Unit Root Test",id:"unit-root-test",level:3}],g={toc:m},s="wrapper";function k(t){let{components:e,...a}=t;return(0,r.kt)(s,(0,n.Z)({},g,a,{components:e,mdxType:"MDXLayout"}),(0,r.kt)(i.Z,{title:"Quantitative Analysis - Intros - Usage | OpenBB SDK Docs",mdxType:"HeadTitle"}),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"qa")," module is the Terminal's Quantitative Analysis menu for the SDK environment. It provides users with more ways to interact with the library of functions, and provides cross-disciplinary utility. To activate the code completion for the menu, enter ",(0,r.kt)("inlineCode",{parentName:"p"},".")," after, ",(0,r.kt)("inlineCode",{parentName:"p"},"openbb.qa"),"."),(0,r.kt)("h2",{id:"how-to-use"},"How to Use"),(0,r.kt)("p",null,"The functions of the ",(0,r.kt)("inlineCode",{parentName:"p"},"qa")," module are grouped into categories, listed below along with a short description."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Path"),(0,r.kt)("th",{parentName:"tr",align:"center"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"right"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"openbb.qa.acf"),(0,r.kt)("td",{parentName:"tr",align:"center"},"Plot"),(0,r.kt)("td",{parentName:"tr",align:"right"},"Plots Auto and Partial Correlation of Returns and Change in Returns")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"openbb.qa.bw"),(0,r.kt)("td",{parentName:"tr",align:"center"},"Plot"),(0,r.kt)("td",{parentName:"tr",align:"right"},"Box and Whisker Plot")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"openbb.qa.calculate_adjusted_var"),(0,r.kt)("td",{parentName:"tr",align:"center"},"Risk"),(0,r.kt)("td",{parentName:"tr",align:"right"},"Calculates VaR, adjusted for skew and kurtosis (Cornish-Fisher-Expansion)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"openbb.qa.cdf"),(0,r.kt)("td",{parentName:"tr",align:"center"},"Plot"),(0,r.kt)("td",{parentName:"tr",align:"right"},"Plots the Cumulative Distribution Function")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"openbb.qa.cusum"),(0,r.kt)("td",{parentName:"tr",align:"center"},"Plot"),(0,r.kt)("td",{parentName:"tr",align:"right"},"Plots the Cumulative Sum Algorithm")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"openbb.qa.decompose"),(0,r.kt)("td",{parentName:"tr",align:"center"},"Plot"),(0,r.kt)("td",{parentName:"tr",align:"right"},"Decomposition in Cyclic-Trend, Season & Residuals of Prices")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"openbb.qa.es"),(0,r.kt)("td",{parentName:"tr",align:"center"},"Statistics"),(0,r.kt)("td",{parentName:"tr",align:"right"},"Expected Shortfall per percentile")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"openbb.qa.kurtosis"),(0,r.kt)("td",{parentName:"tr",align:"center"},"Rolling Metrics"),(0,r.kt)("td",{parentName:"tr",align:"right"},"Rolling Kurtosis of Distribution of Prices")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"openbb.qa.line"),(0,r.kt)("td",{parentName:"tr",align:"center"},"Plot"),(0,r.kt)("td",{parentName:"tr",align:"right"},"Customizable Line Plot, With Annotations")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"openbb.qa.normality"),(0,r.kt)("td",{parentName:"tr",align:"center"},"Statistics"),(0,r.kt)("td",{parentName:"tr",align:"right"},"Normality Statistics and Tests")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"openbb.qa.omega"),(0,r.kt)("td",{parentName:"tr",align:"center"},"Risk"),(0,r.kt)("td",{parentName:"tr",align:"right"},"Omega Ratio (Risk/Return Performance Measure)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"openbb.qa.quantile"),(0,r.kt)("td",{parentName:"tr",align:"center"},"Rolling Metrics"),(0,r.kt)("td",{parentName:"tr",align:"right"},"Rolling Median and Quantile of Prices")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"openbb.qa.qqplot"),(0,r.kt)("td",{parentName:"tr",align:"center"},"Plot"),(0,r.kt)("td",{parentName:"tr",align:"right"},"QQ Plot for Data Against Normal Quantiles")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"openbb.qa.rolling"),(0,r.kt)("td",{parentName:"tr",align:"center"},"Rolling Metrics"),(0,r.kt)("td",{parentName:"tr",align:"right"},"Rolling Mean and Standard Deviation of Prices")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"openbb.qa.sharpe"),(0,r.kt)("td",{parentName:"tr",align:"center"},"Risk"),(0,r.kt)("td",{parentName:"tr",align:"right"},"Sharpe Ratio (Measure of Risk-Adjusted Return)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"openbb.qa.skew"),(0,r.kt)("td",{parentName:"tr",align:"center"},"Rolling Metrics"),(0,r.kt)("td",{parentName:"tr",align:"right"},"Rolling Skewness of Distribution of Prices")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"openbb.qa.sortino"),(0,r.kt)("td",{parentName:"tr",align:"center"},"Risk"),(0,r.kt)("td",{parentName:"tr",align:"right"},"Sortino Ratio Risk Adjustment Metric")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"openbb.qa.spread"),(0,r.kt)("td",{parentName:"tr",align:"center"},"Rolling Metrics"),(0,r.kt)("td",{parentName:"tr",align:"right"},"Rolling Variance and Standard Deviation of Prices")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"openbb.qa.summary"),(0,r.kt)("td",{parentName:"tr",align:"center"},"Statistics"),(0,r.kt)("td",{parentName:"tr",align:"right"},"A Brief Summary of Statistics for the DataFrame")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"openbb.qa.unitroot"),(0,r.kt)("td",{parentName:"tr",align:"center"},"Statistics"),(0,r.kt)("td",{parentName:"tr",align:"right"},"Normality Statistics and Tests")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"openbb.qa.var"),(0,r.kt)("td",{parentName:"tr",align:"center"},"Risk"),(0,r.kt)("td",{parentName:"tr",align:"right"},"Value at Risk")))),(0,r.kt)("h2",{id:"examples"},"Examples"),(0,r.kt)("h3",{id:"import-statements"},"Import Statements"),(0,r.kt)("p",null,"The examples below will assume that the following statements are included in the first block of code:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"import quandl\nimport pandas as pd\nfrom openbb_terminal.sdk import openbb\nfrom openbb_terminal import config_terminal as cfg\n\n# %matplotlib inline (uncomment if using a Jupyter environment)\n")),(0,r.kt)("h3",{id:"get-data"},"Get Data"),(0,r.kt)("p",null,"This example collects data from Nasdaq Data Link, and requires registering for a free API key. Qunadl is the Python client for the Nasdaq Data Link API."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"shiller_pe_rdiff = quandl.get('MULTPL/SHILLER_PE_RATIO_MONTH', collapse = 'monthly', transform = 'rdiff', api_key = cfg.API_KEY_QUANDL)\nshiller_pe_rdiff.rename(columns={'Value':'P/E % Change'}, inplace = True)\nshiller_pe_ratio = quandl.get('MULTPL/SHILLER_PE_RATIO_MONTH', collapse = 'monthly', api_key = cfg.API_KEY_QUANDL)\nshiller_pe_ratio.rename(columns={'Value':'P/E Ratio'}, inplace = True)\n\nsp500_inf_adj = quandl.get('MULTPL/SP500_INFLADJ_MONTH', collapse = 'monthly', api_key = cfg.API_KEY_QUANDL)\nsp500_inf_adj.rename(columns = {'Value': 'S&P Inflation-Adjusted Value'}, inplace = True)\nsp500_inf_adj_rdiff = quandl.get('MULTPL/SP500_INFLADJ_MONTH', collapse = 'monthly', transform = 'rdiff', api_key = cfg.API_KEY_QUANDL)\nsp500_inf_adj_rdiff.rename(columns = {'Value':'S&P 500 % Change'}, inplace = True)\n\nshiller_pe = shiller_pe_ratio.join(shiller_pe_rdiff)\nsp500_inf_adj = sp500_inf_adj.join(sp500_inf_adj_rdiff)\n\nsp500_df = sp500_inf_adj.join(shiller_pe)\n\nsp500_df\n")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Date"),(0,r.kt)("th",{parentName:"tr",align:"right"},"S&P Inflation-Adjusted Value"),(0,r.kt)("th",{parentName:"tr",align:"right"},"S&P 500 % Change"),(0,r.kt)("th",{parentName:"tr",align:"right"},"P/E Ratio"),(0,r.kt)("th",{parentName:"tr",align:"right"},"P/E % Change"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"2022-08-31 00:00:00"),(0,r.kt)("td",{parentName:"tr",align:"right"},"3955"),(0,r.kt)("td",{parentName:"tr",align:"right"},"0.0092504"),(0,r.kt)("td",{parentName:"tr",align:"right"},"29.64"),(0,r.kt)("td",{parentName:"tr",align:"right"},"0.022069")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"2022-09-30 00:00:00"),(0,r.kt)("td",{parentName:"tr",align:"right"},"3585.62"),(0,r.kt)("td",{parentName:"tr",align:"right"},"-0.0933957"),(0,r.kt)("td",{parentName:"tr",align:"right"},"26.84"),(0,r.kt)("td",{parentName:"tr",align:"right"},"-0.0944669")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"2022-10-31 00:00:00"),(0,r.kt)("td",{parentName:"tr",align:"right"},"3871.98"),(0,r.kt)("td",{parentName:"tr",align:"right"},"0.0798635"),(0,r.kt)("td",{parentName:"tr",align:"right"},"28.53"),(0,r.kt)("td",{parentName:"tr",align:"right"},"0.0629657")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"2022-11-30 00:00:00"),(0,r.kt)("td",{parentName:"tr",align:"right"},"3856.1"),(0,r.kt)("td",{parentName:"tr",align:"right"},"-0.00410126"),(0,r.kt)("td",{parentName:"tr",align:"right"},"28.37"),(0,r.kt)("td",{parentName:"tr",align:"right"},"-0.00560813")))),(0,r.kt)("p",null,"This particular data series contains 150 years of monthly values. It is among the longest uninterrupted timeseries available in the public domain, and it is cited frequently in macroeconomic research."),(0,r.kt)("h3",{id:"summary"},"Summary"),(0,r.kt)("p",null,"Get a summary of statistics for each column with ",(0,r.kt)("inlineCode",{parentName:"p"},"qa.summary"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"openbb.qa.summary(sp500_df)\n")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"}),(0,r.kt)("th",{parentName:"tr",align:"right"},"S&P Inflation-Adjusted Value"),(0,r.kt)("th",{parentName:"tr",align:"right"},"S&P 500 % Change"),(0,r.kt)("th",{parentName:"tr",align:"right"},"P/E Ratio"),(0,r.kt)("th",{parentName:"tr",align:"right"},"P/E % Change"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"count"),(0,r.kt)("td",{parentName:"tr",align:"right"},"1823"),(0,r.kt)("td",{parentName:"tr",align:"right"},"1822"),(0,r.kt)("td",{parentName:"tr",align:"right"},"1822"),(0,r.kt)("td",{parentName:"tr",align:"right"},"1821")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"mean"),(0,r.kt)("td",{parentName:"tr",align:"right"},"697.396"),(0,r.kt)("td",{parentName:"tr",align:"right"},"0.0028703"),(0,r.kt)("td",{parentName:"tr",align:"right"},"16.9914"),(0,r.kt)("td",{parentName:"tr",align:"right"},"0.00137084")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"std"),(0,r.kt)("td",{parentName:"tr",align:"right"},"834.501"),(0,r.kt)("td",{parentName:"tr",align:"right"},"0.0424378"),(0,r.kt)("td",{parentName:"tr",align:"right"},"7.07094"),(0,r.kt)("td",{parentName:"tr",align:"right"},"0.0412196")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"min"),(0,r.kt)("td",{parentName:"tr",align:"right"},"80.31"),(0,r.kt)("td",{parentName:"tr",align:"right"},"-0.264738"),(0,r.kt)("td",{parentName:"tr",align:"right"},"4.78"),(0,r.kt)("td",{parentName:"tr",align:"right"},"-0.268992")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"10%"),(0,r.kt)("td",{parentName:"tr",align:"right"},"152.404"),(0,r.kt)("td",{parentName:"tr",align:"right"},"-0.0447494"),(0,r.kt)("td",{parentName:"tr",align:"right"},"9.31"),(0,r.kt)("td",{parentName:"tr",align:"right"},"-0.0449735")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"25%"),(0,r.kt)("td",{parentName:"tr",align:"right"},"203.47"),(0,r.kt)("td",{parentName:"tr",align:"right"},"-0.0172803"),(0,r.kt)("td",{parentName:"tr",align:"right"},"11.7"),(0,r.kt)("td",{parentName:"tr",align:"right"},"-0.0183028")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"50%"),(0,r.kt)("td",{parentName:"tr",align:"right"},"309.83"),(0,r.kt)("td",{parentName:"tr",align:"right"},"0.00553122"),(0,r.kt)("td",{parentName:"tr",align:"right"},"15.895"),(0,r.kt)("td",{parentName:"tr",align:"right"},"0.00446999")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"75%"),(0,r.kt)("td",{parentName:"tr",align:"right"},"778.42"),(0,r.kt)("td",{parentName:"tr",align:"right"},"0.0260009"),(0,r.kt)("td",{parentName:"tr",align:"right"},"20.5575"),(0,r.kt)("td",{parentName:"tr",align:"right"},"0.0246575")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"90%"),(0,r.kt)("td",{parentName:"tr",align:"right"},"1907.87"),(0,r.kt)("td",{parentName:"tr",align:"right"},"0.04505"),(0,r.kt)("td",{parentName:"tr",align:"right"},"26.467"),(0,r.kt)("td",{parentName:"tr",align:"right"},"0.0426357")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"max"),(0,r.kt)("td",{parentName:"tr",align:"right"},"4786.79"),(0,r.kt)("td",{parentName:"tr",align:"right"},"0.514085"),(0,r.kt)("td",{parentName:"tr",align:"right"},"44.19"),(0,r.kt)("td",{parentName:"tr",align:"right"},"0.511986")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"var"),(0,r.kt)("td",{parentName:"tr",align:"right"},"696392"),(0,r.kt)("td",{parentName:"tr",align:"right"},"0.00180097"),(0,r.kt)("td",{parentName:"tr",align:"right"},"49.9982"),(0,r.kt)("td",{parentName:"tr",align:"right"},"0.00169906")))),(0,r.kt)("h3",{id:"spread"},"Spread"),(0,r.kt)("p",null,"Add the variance and standard deviation, over a specified window (three-months), to the DataFrame:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"std,variance = openbb.qa.spread(data = sp500_df['S&P 500 % Change'], window = 3)\nstd.rename(columns = {'STDEV_3':'Three-Month Standard Deviation'}, inplace = True)\nvariance.rename(columns = {'VAR_3': 'Three-Month Variance'}, inplace =True)\nsp500_df = sp500_df.join([std,variance])\nsp500_df.rename_axis('date', inplace = True)\nsp500_df.tail(2)\n")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"date"),(0,r.kt)("th",{parentName:"tr",align:"right"},"S&P Inflation-Adjusted Value"),(0,r.kt)("th",{parentName:"tr",align:"right"},"S&P 500 % Change"),(0,r.kt)("th",{parentName:"tr",align:"right"},"P/E Ratio"),(0,r.kt)("th",{parentName:"tr",align:"right"},"P/E % Change"),(0,r.kt)("th",{parentName:"tr",align:"right"},"Three-Month Standard Deviation"),(0,r.kt)("th",{parentName:"tr",align:"right"},"Three-Month Variance"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"2022-10-31 00:00:00"),(0,r.kt)("td",{parentName:"tr",align:"right"},"3871.98"),(0,r.kt)("td",{parentName:"tr",align:"right"},"0.0798635"),(0,r.kt)("td",{parentName:"tr",align:"right"},"28.53"),(0,r.kt)("td",{parentName:"tr",align:"right"},"0.0629657"),(0,r.kt)("td",{parentName:"tr",align:"right"},"0.0871217"),(0,r.kt)("td",{parentName:"tr",align:"right"},"0.00759019")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"2022-11-30 00:00:00"),(0,r.kt)("td",{parentName:"tr",align:"right"},"3856.1"),(0,r.kt)("td",{parentName:"tr",align:"right"},"-0.00410126"),(0,r.kt)("td",{parentName:"tr",align:"right"},"28.37"),(0,r.kt)("td",{parentName:"tr",align:"right"},"-0.00560813"),(0,r.kt)("td",{parentName:"tr",align:"right"},"0.0866432"),(0,r.kt)("td",{parentName:"tr",align:"right"},"0.00750705")))),(0,r.kt)("p",null,"The rolling mean average and standard deviation is calculated with the ",(0,r.kt)("inlineCode",{parentName:"p"},"rolling")," command. Adding, ",(0,r.kt)("inlineCode",{parentName:"p"},"_chart"),", to this will return an inline chart within a Jupyter Notebook. For the example below, window, ",(0,r.kt)("inlineCode",{parentName:"p"},"60"),", represents a five-year period."),(0,r.kt)("h3",{id:"rolling"},"Rolling"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"openbb.qa.rolling_chart(sp500_df, target = 'P/E Ratio', window = 60, symbol = '')\n")),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/85772166/202975615-4400ae87-9cd7-4481-94f1-dfb69de784d6.png",alt:"openbb.qa.rolling_chart",title:"openbb.qa.rolling_chart"})),(0,r.kt)("h3",{id:"unit-root-test"},"Unit Root Test"),(0,r.kt)("p",null,"Perform a unit root test with ",(0,r.kt)("inlineCode",{parentName:"p"},"unitroot"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"help(openbb.qa.unitroot)\n\n        Parameters\n        ----------\n        data : pd.DataFrame\n            DataFrame of target variable\n        fuller_reg : str\n            Type of regression of ADF test. Can be \u2018c\u2019,\u2019ct\u2019,\u2019ctt\u2019,\u2019nc\u2019 'c' - Constant and t - trend order\n        kpss_reg : str\n            Type of regression for KPSS test.  Can be \u2018c\u2019,\u2019ct'\n\n        Returns\n        -------\n        pd.DataFrame\n            Dataframe with results of ADF test and KPSS test\n\nopenbb.qa.unitroot(sp500_df['P/E % Change'])\n")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"}),(0,r.kt)("th",{parentName:"tr",align:"right"},"ADF"),(0,r.kt)("th",{parentName:"tr",align:"left"},"KPSS"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Test Statistic"),(0,r.kt)("td",{parentName:"tr",align:"right"},"-10.7075"),(0,r.kt)("td",{parentName:"tr",align:"left"},"0.34061374135067696")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"P-Value"),(0,r.kt)("td",{parentName:"tr",align:"right"},"3.3972e-19"),(0,r.kt)("td",{parentName:"tr",align:"left"},"0.1")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"NLags"),(0,r.kt)("td",{parentName:"tr",align:"right"},"20"),(0,r.kt)("td",{parentName:"tr",align:"left"},"2")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Nobs"),(0,r.kt)("td",{parentName:"tr",align:"right"},"1800"),(0,r.kt)("td",{parentName:"tr",align:"left"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"ICBest"),(0,r.kt)("td",{parentName:"tr",align:"right"},"-6491.14"),(0,r.kt)("td",{parentName:"tr",align:"left"})))))}k.isMDXComponent=!0}}]);