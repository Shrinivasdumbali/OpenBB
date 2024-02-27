"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[14005],{3905:(t,e,a)=>{a.d(e,{Zo:()=>d,kt:()=>c});var r=a(67294);function n(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,r)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){n(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function o(t,e){if(null==t)return{};var a,r,n=function(t,e){if(null==t)return{};var a,r,n={},l=Object.keys(t);for(r=0;r<l.length;r++)a=l[r],e.indexOf(a)>=0||(n[a]=t[a]);return n}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(r=0;r<l.length;r++)a=l[r],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(n[a]=t[a])}return n}var p=r.createContext({}),u=function(t){var e=r.useContext(p),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},d=function(t){var e=u(t.components);return r.createElement(p.Provider,{value:e},t.children)},m="mdxType",s={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},k=r.forwardRef((function(t,e){var a=t.components,n=t.mdxType,l=t.originalType,p=t.parentName,d=o(t,["components","mdxType","originalType","parentName"]),m=u(a),k=n,c=m["".concat(p,".").concat(k)]||m[k]||s[k]||l;return a?r.createElement(c,i(i({ref:e},d),{},{components:a})):r.createElement(c,i({ref:e},d))}));function c(t,e){var a=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var l=a.length,i=new Array(l);i[0]=k;var o={};for(var p in e)hasOwnProperty.call(e,p)&&(o[p]=e[p]);o.originalType=t,o[m]="string"==typeof t?t:n,i[1]=o;for(var u=2;u<l;u++)i[u]=a[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}k.displayName="MDXCreateElement"},88828:(t,e,a)=>{a.d(e,{Z:()=>l});var r=a(67294),n=a(35742);function l(t){let{title:e}=t;return r.createElement(n.Z,null,r.createElement("title",null,e))}},30973:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>u,contentTitle:()=>o,default:()=>k,frontMatter:()=>i,metadata:()=>p,toc:()=>d});var r=a(87462),n=(a(67294),a(3905)),l=a(88828);const i={title:"riskparity",description:"This docusaurus page provides detailed information on how to build a risk parity portfolio using the risk budgeting approach. The user can make use of many available parameters and conditions to customize the portfolio and its conditions as per their requirements.",keywords:["risk parity portfolio","risk budgeting approach","portfolio optimization","portfolio parameters","risk measures","docusaurus documentation","financial data analysis","yfinance data"]},o=void 0,p={unversionedId:"terminal/reference/portfolio/po/riskparity",id:"terminal/reference/portfolio/po/riskparity",title:"riskparity",description:"This docusaurus page provides detailed information on how to build a risk parity portfolio using the risk budgeting approach. The user can make use of many available parameters and conditions to customize the portfolio and its conditions as per their requirements.",source:"@site/content/terminal/reference/portfolio/po/riskparity.md",sourceDirName:"terminal/reference/portfolio/po",slug:"/terminal/reference/portfolio/po/riskparity",permalink:"/terminal/reference/portfolio/po/riskparity",draft:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/terminal/reference/portfolio/po/riskparity.md",tags:[],version:"current",lastUpdatedBy:"montezdesousa",lastUpdatedAt:1709061006,formattedLastUpdatedAt:"Feb 27, 2024",frontMatter:{title:"riskparity",description:"This docusaurus page provides detailed information on how to build a risk parity portfolio using the risk budgeting approach. The user can make use of many available parameters and conditions to customize the portfolio and its conditions as per their requirements.",keywords:["risk parity portfolio","risk budgeting approach","portfolio optimization","portfolio parameters","risk measures","docusaurus documentation","financial data analysis","yfinance data"]},sidebar:"tutorialSidebar",previous:{title:"relriskparity",permalink:"/terminal/reference/portfolio/po/relriskparity"},next:{title:"rpf",permalink:"/terminal/reference/portfolio/po/rpf"}},u={},d=[{value:"Usage",id:"usage",level:3},{value:"Parameters",id:"parameters",level:2},{value:"Examples",id:"examples",level:2}],m={toc:d},s="wrapper";function k(t){let{components:e,...a}=t;return(0,n.kt)(s,(0,r.Z)({},m,a,{components:e,mdxType:"MDXLayout"}),(0,n.kt)(l.Z,{title:"portfolio /po/riskparity - Reference | OpenBB Terminal Docs",mdxType:"HeadTitle"}),(0,n.kt)("p",null,"Build a risk parity portfolio based on risk budgeting approach"),(0,n.kt)("h3",{id:"usage"},"Usage"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-python",metastring:"wordwrap",wordwrap:!0},"riskparity [-rm RISK-MEASURE] [-rc RISK_CONTRIBUTION] [-tr TARGET_RETURN] [-de SMOOTHING_FACTOR_EWMA] [-mt METHOD] [-ct CATEGORIES] [-p PERIOD] [-s START_PERIOD] [-e END_PERIOD] [-lr] [--freq {d,w,m}] [-mn MAX_NAN] [-th THRESHOLD_VALUE] [-r RISK_FREE] [-a SIGNIFICANCE_LEVEL] [-v LONG_ALLOCATION] [--name NAME]\n")),(0,n.kt)("hr",null),(0,n.kt)("h2",{id:"parameters"},"Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Name"),(0,n.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"),(0,n.kt)("th",{parentName:"tr",align:null},"Default"),(0,n.kt)("th",{parentName:"tr",align:null},"Optional"),(0,n.kt)("th",{parentName:"tr",align:null},"Choices"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"risk_measure"),(0,n.kt)("td",{parentName:"tr",align:null},"-rm  --risk-measure"),(0,n.kt)("td",{parentName:"tr",align:null},"Risk measure used to optimize the portfolio. Possible values are: 'MV' : Variance 'MAD' : Mean Absolute Deviation 'MSV' : Semi Variance (Variance of negative returns) 'FLPM' : First Lower Partial Moment 'SLPM' : Second Lower Partial Moment 'CVaR' : Conditional Value at Risk 'EVaR' : Entropic Value at Risk 'UCI' : Ulcer Index of uncompounded returns 'CDaR' : Conditional Drawdown at Risk of uncompounded returns 'EDaR' : Entropic Drawdown at Risk of uncompounded returns"),(0,n.kt)("td",{parentName:"tr",align:null},"MV"),(0,n.kt)("td",{parentName:"tr",align:null},"True"),(0,n.kt)("td",{parentName:"tr",align:null},"MV, MAD, MSV, FLPM, SLPM, CVaR, EVaR, CDaR, EDaR, UCI")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"risk_contribution"),(0,n.kt)("td",{parentName:"tr",align:null},"-rc  --risk-cont"),(0,n.kt)("td",{parentName:"tr",align:null},"vector of risk contribution constraint"),(0,n.kt)("td",{parentName:"tr",align:null},"None"),(0,n.kt)("td",{parentName:"tr",align:null},"True"),(0,n.kt)("td",{parentName:"tr",align:null},"None")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"target_return"),(0,n.kt)("td",{parentName:"tr",align:null},"-tr  --target-return"),(0,n.kt)("td",{parentName:"tr",align:null},"Constraint on minimum level of portfolio's return"),(0,n.kt)("td",{parentName:"tr",align:null},"-1"),(0,n.kt)("td",{parentName:"tr",align:null},"True"),(0,n.kt)("td",{parentName:"tr",align:null},"None")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"smoothing_factor_ewma"),(0,n.kt)("td",{parentName:"tr",align:null},"-de  --d-ewma"),(0,n.kt)("td",{parentName:"tr",align:null},"Smoothing factor for ewma estimators"),(0,n.kt)("td",{parentName:"tr",align:null},"0.94"),(0,n.kt)("td",{parentName:"tr",align:null},"True"),(0,n.kt)("td",{parentName:"tr",align:null},"None")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"nan_fill_method"),(0,n.kt)("td",{parentName:"tr",align:null},"-mt  --method"),(0,n.kt)("td",{parentName:"tr",align:null},"Method used to fill nan values in time series, by default time. Possible values are: 'linear': linear interpolation 'time': linear interpolation based on time index 'nearest': use nearest value to replace nan values 'zero': spline of zeroth order 'slinear': spline of first order 'quadratic': spline of second order 'cubic': spline of third order 'barycentric': builds a polynomial that pass for all points"),(0,n.kt)("td",{parentName:"tr",align:null},"time"),(0,n.kt)("td",{parentName:"tr",align:null},"True"),(0,n.kt)("td",{parentName:"tr",align:null},"linear, time, nearest, zero, slinear, quadratic, cubic, barycentric")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"categories"),(0,n.kt)("td",{parentName:"tr",align:null},"-ct  --categories"),(0,n.kt)("td",{parentName:"tr",align:null},"Show selected categories"),(0,n.kt)("td",{parentName:"tr",align:null}),(0,n.kt)("td",{parentName:"tr",align:null},"True"),(0,n.kt)("td",{parentName:"tr",align:null},"None")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"historic_period"),(0,n.kt)("td",{parentName:"tr",align:null},"-p  --period"),(0,n.kt)("td",{parentName:"tr",align:null},"Period to get yfinance data from. Possible frequency strings are: 'd': means days, for example '252d' means 252 days 'w': means weeks, for example '52w' means 52 weeks 'mo': means months, for example '12mo' means 12 months 'y': means years, for example '1y' means 1 year 'ytd': downloads data from beginning of year to today 'max': downloads all data available for each asset"),(0,n.kt)("td",{parentName:"tr",align:null},"3y"),(0,n.kt)("td",{parentName:"tr",align:null},"True"),(0,n.kt)("td",{parentName:"tr",align:null},"1d, 5d, 1mo, 3mo, 6mo, 1y, 2y, 3y, 5y, 10y, ytd, max")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"start_period"),(0,n.kt)("td",{parentName:"tr",align:null},"-s  --start"),(0,n.kt)("td",{parentName:"tr",align:null},"Start date to get yfinance data from. Must be in 'YYYY-MM-DD' format"),(0,n.kt)("td",{parentName:"tr",align:null}),(0,n.kt)("td",{parentName:"tr",align:null},"True"),(0,n.kt)("td",{parentName:"tr",align:null},"None")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"end_period"),(0,n.kt)("td",{parentName:"tr",align:null},"-e  --end"),(0,n.kt)("td",{parentName:"tr",align:null},"End date to get yfinance data from. Must be in 'YYYY-MM-DD' format"),(0,n.kt)("td",{parentName:"tr",align:null}),(0,n.kt)("td",{parentName:"tr",align:null},"True"),(0,n.kt)("td",{parentName:"tr",align:null},"None")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"log_returns"),(0,n.kt)("td",{parentName:"tr",align:null},"-lr  --log-returns"),(0,n.kt)("td",{parentName:"tr",align:null},"If use logarithmic or arithmetic returns to calculate returns"),(0,n.kt)("td",{parentName:"tr",align:null},"False"),(0,n.kt)("td",{parentName:"tr",align:null},"True"),(0,n.kt)("td",{parentName:"tr",align:null},"None")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"return_frequency"),(0,n.kt)("td",{parentName:"tr",align:null},"--freq"),(0,n.kt)("td",{parentName:"tr",align:null},"Frequency used to calculate returns. Possible values are: 'd': for daily returns 'w': for weekly returns 'm': for monthly returns"),(0,n.kt)("td",{parentName:"tr",align:null},"d"),(0,n.kt)("td",{parentName:"tr",align:null},"True"),(0,n.kt)("td",{parentName:"tr",align:null},"d, w, m")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"max_nan"),(0,n.kt)("td",{parentName:"tr",align:null},"-mn  --maxnan"),(0,n.kt)("td",{parentName:"tr",align:null},"Max percentage of nan values accepted per asset to be considered in the optimization process"),(0,n.kt)("td",{parentName:"tr",align:null},"0.05"),(0,n.kt)("td",{parentName:"tr",align:null},"True"),(0,n.kt)("td",{parentName:"tr",align:null},"None")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"threshold_value"),(0,n.kt)("td",{parentName:"tr",align:null},"-th  --threshold"),(0,n.kt)("td",{parentName:"tr",align:null},"Value used to replace outliers that are higher to threshold in absolute value"),(0,n.kt)("td",{parentName:"tr",align:null},"0.3"),(0,n.kt)("td",{parentName:"tr",align:null},"True"),(0,n.kt)("td",{parentName:"tr",align:null},"None")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"risk_free"),(0,n.kt)("td",{parentName:"tr",align:null},"-r  --risk-free-rate"),(0,n.kt)("td",{parentName:"tr",align:null},"Risk-free rate of borrowing/lending. The period of the risk-free rate must be annual"),(0,n.kt)("td",{parentName:"tr",align:null},"0.05411"),(0,n.kt)("td",{parentName:"tr",align:null},"True"),(0,n.kt)("td",{parentName:"tr",align:null},"None")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"significance_level"),(0,n.kt)("td",{parentName:"tr",align:null},"-a  --alpha"),(0,n.kt)("td",{parentName:"tr",align:null},"Significance level of CVaR, EVaR, CDaR and EDaR"),(0,n.kt)("td",{parentName:"tr",align:null},"0.05"),(0,n.kt)("td",{parentName:"tr",align:null},"True"),(0,n.kt)("td",{parentName:"tr",align:null},"None")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"long_allocation"),(0,n.kt)("td",{parentName:"tr",align:null},"-v  --value"),(0,n.kt)("td",{parentName:"tr",align:null},"Amount to allocate to portfolio"),(0,n.kt)("td",{parentName:"tr",align:null},"1"),(0,n.kt)("td",{parentName:"tr",align:null},"True"),(0,n.kt)("td",{parentName:"tr",align:null},"None")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"name"),(0,n.kt)("td",{parentName:"tr",align:null},"--name"),(0,n.kt)("td",{parentName:"tr",align:null},"Save portfolio with personalized or default name"),(0,n.kt)("td",{parentName:"tr",align:null},"RP_0"),(0,n.kt)("td",{parentName:"tr",align:null},"True"),(0,n.kt)("td",{parentName:"tr",align:null},"None")))),(0,n.kt)("hr",null),(0,n.kt)("h2",{id:"examples"},"Examples"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-python"},"2022 Apr 05, 14:45 (\ud83e\udd8b) /portfolio/po/ $ riskparity\n\n [3 Years] Risk parity portfolio based on risk budgeting approach\nusing volatility as risk measure\n\n     Weights\n\u250f\u2501\u2501\u2501\u2501\u2501\u2501\u2533\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2513\n\u2503      \u2503 Value   \u2503\n\u2521\u2501\u2501\u2501\u2501\u2501\u2501\u2547\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2529\n\u2502 AAPL \u2502 13.42 % \u2502\n\u251c\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524\n\u2502 AMZN \u2502 16.51 % \u2502\n\u251c\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524\n\u2502 BA   \u2502 10.18 % \u2502\n\u251c\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524\n\u2502 FB   \u2502 12.83 % \u2502\n\u251c\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524\n\u2502 MSFT \u2502 14.36 % \u2502\n\u251c\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524\n\u2502 T    \u2502 24.00 % \u2502\n\u251c\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524\n\u2502 TSLA \u2502  8.68 % \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n\nAnnual (by 252) expected return: 28.99%\nAnnual (by \u221a252) volatility: 26.60%\nSharpe ratio: 1.0829\n")),(0,n.kt)("hr",null))}k.isMDXComponent=!0}}]);