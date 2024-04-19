"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[45930],{3905:(t,e,a)=>{a.d(e,{Zo:()=>d,kt:()=>c});var n=a(67294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function o(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var u=n.createContext({}),s=function(t){var e=n.useContext(u),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},d=function(t){var e=s(t.components);return n.createElement(u.Provider,{value:e},t.children)},p="mdxType",m={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},k=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,l=t.originalType,u=t.parentName,d=o(t,["components","mdxType","originalType","parentName"]),p=s(a),k=r,c=p["".concat(u,".").concat(k)]||p[k]||m[k]||l;return a?n.createElement(c,i(i({ref:e},d),{},{components:a})):n.createElement(c,i({ref:e},d))}));function c(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=a.length,i=new Array(l);i[0]=k;var o={};for(var u in e)hasOwnProperty.call(e,u)&&(o[u]=e[u]);o.originalType=t,o[p]="string"==typeof t?t:r,i[1]=o;for(var s=2;s<l;s++)i[s]=a[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}k.displayName="MDXCreateElement"},88828:(t,e,a)=>{a.d(e,{Z:()=>l});var n=a(67294),r=a(35742);function l(t){let{title:e}=t;return n.createElement(r.Z,null,n.createElement("title",null,e))}},88560:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>s,contentTitle:()=>o,default:()=>k,frontMatter:()=>i,metadata:()=>u,toc:()=>d});var n=a(87462),r=(a(67294),a(3905)),l=a(88828);const i={title:"hcp",description:"The page provides details on hierarchical clustering based portfolios (HCP) in the OpenBBTerminal, a python tool for advanced investment strategies. It describes parameters for portfolio optimization including risk measures, covariance estimations, and clustering techniques. The return outcomes include portfolio weights and stock returns.",keywords:["portfolio optimization","hierarchical clustering","stock returns","Hierarchical Risk Parity","Nested Clustered Optimization","covariance matrix","risk measures","stocks","portfolio management"]},o=void 0,u={unversionedId:"sdk/reference/portfolio/po/hcp",id:"sdk/reference/portfolio/po/hcp",title:"hcp",description:"The page provides details on hierarchical clustering based portfolios (HCP) in the OpenBBTerminal, a python tool for advanced investment strategies. It describes parameters for portfolio optimization including risk measures, covariance estimations, and clustering techniques. The return outcomes include portfolio weights and stock returns.",source:"@site/content/sdk/reference/portfolio/po/hcp.md",sourceDirName:"sdk/reference/portfolio/po",slug:"/sdk/reference/portfolio/po/hcp",permalink:"/sdk/reference/portfolio/po/hcp",draft:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/sdk/reference/portfolio/po/hcp.md",tags:[],version:"current",lastUpdatedBy:"montezdesousa",lastUpdatedAt:1713550349,formattedLastUpdatedAt:"Apr 19, 2024",frontMatter:{title:"hcp",description:"The page provides details on hierarchical clustering based portfolios (HCP) in the OpenBBTerminal, a python tool for advanced investment strategies. It describes parameters for portfolio optimization including risk measures, covariance estimations, and clustering techniques. The return outcomes include portfolio weights and stock returns.",keywords:["portfolio optimization","hierarchical clustering","stock returns","Hierarchical Risk Parity","Nested Clustered Optimization","covariance matrix","risk measures","stocks","portfolio management"]},sidebar:"tutorialSidebar",previous:{title:"get_properties",permalink:"/sdk/reference/portfolio/po/get_properties"},next:{title:"herc",permalink:"/sdk/reference/portfolio/po/herc"}},s={},d=[{value:"Parameters",id:"parameters",level:2},{value:"Returns",id:"returns",level:2}],p={toc:d},m="wrapper";function k(t){let{components:e,...a}=t;return(0,r.kt)(m,(0,n.Z)({},p,a,{components:e,mdxType:"MDXLayout"}),(0,r.kt)(l.Z,{title:"portfolio.po.hcp - Reference | OpenBB SDK Docs",mdxType:"HeadTitle"}),(0,r.kt)("p",null,"Builds hierarchical clustering based portfolios"),(0,r.kt)("p",null,"Source Code: [",(0,r.kt)("a",{parentName:"p",href:"https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/portfolio/portfolio_optimization/optimizer_model.py#L1903"},"link"),"]"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"openbb.portfolio.po.hcp(symbols: List[str], kwargs: Any)\n")),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"parameters"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"),(0,r.kt)("th",{parentName:"tr",align:null},"Optional"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"symbols"),(0,r.kt)("td",{parentName:"tr",align:null},"List","[str]"),(0,r.kt)("td",{parentName:"tr",align:null},"List of portfolio stocks"),(0,r.kt)("td",{parentName:"tr",align:null},"None"),(0,r.kt)("td",{parentName:"tr",align:null},"False")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"interval"),(0,r.kt)("td",{parentName:"tr",align:null},"str"),(0,r.kt)("td",{parentName:"tr",align:null},'interval to get stock data, by default "3mo"'),(0,r.kt)("td",{parentName:"tr",align:null},"None"),(0,r.kt)("td",{parentName:"tr",align:null},"True")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"start_date"),(0,r.kt)("td",{parentName:"tr",align:null},"str"),(0,r.kt)("td",{parentName:"tr",align:null},"If not using interval, start date string (YYYY-MM-DD)"),(0,r.kt)("td",{parentName:"tr",align:null},"None"),(0,r.kt)("td",{parentName:"tr",align:null},"True")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"end_date"),(0,r.kt)("td",{parentName:"tr",align:null},"str"),(0,r.kt)("td",{parentName:"tr",align:null},"If not using interval, end date string (YYYY-MM-DD). If empty use last",(0,r.kt)("br",null),"weekday."),(0,r.kt)("td",{parentName:"tr",align:null},"None"),(0,r.kt)("td",{parentName:"tr",align:null},"True")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"log_returns"),(0,r.kt)("td",{parentName:"tr",align:null},"bool"),(0,r.kt)("td",{parentName:"tr",align:null},"If True calculate log returns, else arithmetic returns. Default value",(0,r.kt)("br",null),"is False"),(0,r.kt)("td",{parentName:"tr",align:null},"None"),(0,r.kt)("td",{parentName:"tr",align:null},"True")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"freq"),(0,r.kt)("td",{parentName:"tr",align:null},"str"),(0,r.kt)("td",{parentName:"tr",align:null},"The frequency used to calculate returns. Default value is 'D'. Possible",(0,r.kt)("br",null),"values are:",(0,r.kt)("br",null),(0,r.kt)("br",null),"- 'D' for daily returns.",(0,r.kt)("br",null),"- 'W' for weekly returns.",(0,r.kt)("br",null),"- 'M' for monthly returns."),(0,r.kt)("td",{parentName:"tr",align:null},"None"),(0,r.kt)("td",{parentName:"tr",align:null},"True")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"maxnan"),(0,r.kt)("td",{parentName:"tr",align:null},"float"),(0,r.kt)("td",{parentName:"tr",align:null},"Max percentage of nan values accepted per asset to be included in",(0,r.kt)("br",null),"returns."),(0,r.kt)("td",{parentName:"tr",align:null},"None"),(0,r.kt)("td",{parentName:"tr",align:null},"True")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"threshold"),(0,r.kt)("td",{parentName:"tr",align:null},"float"),(0,r.kt)("td",{parentName:"tr",align:null},"Value used to replace outliers that are higher to threshold."),(0,r.kt)("td",{parentName:"tr",align:null},"None"),(0,r.kt)("td",{parentName:"tr",align:null},"True")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"method"),(0,r.kt)("td",{parentName:"tr",align:null},"str"),(0,r.kt)("td",{parentName:"tr",align:null},"Method used to fill nan values. Default value is 'time'. For more information see ",(0,r.kt)("inlineCode",{parentName:"td"},"interpolate <https://pandas.pydata.org/docs/reference/api/pandas.DataFrame.interpolate.html>"),"__."),(0,r.kt)("td",{parentName:"tr",align:null},"None"),(0,r.kt)("td",{parentName:"tr",align:null},"True")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"model"),(0,r.kt)("td",{parentName:"tr",align:null},"str"),(0,r.kt)("td",{parentName:"tr",align:null},"The hierarchical cluster portfolio model used for optimize the",(0,r.kt)("br",null),"portfolio. The default is 'HRP'. Possible values are:",(0,r.kt)("br",null),(0,r.kt)("br",null),"- 'HRP': Hierarchical Risk Parity.",(0,r.kt)("br",null),"- 'HERC': Hierarchical Equal Risk Contribution.",(0,r.kt)("br",null),"- 'NCO': Nested Clustered Optimization."),(0,r.kt)("td",{parentName:"tr",align:null},"None"),(0,r.kt)("td",{parentName:"tr",align:null},"True")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"codependence"),(0,r.kt)("td",{parentName:"tr",align:null},"str"),(0,r.kt)("td",{parentName:"tr",align:null},"The codependence or similarity matrix used to build the distance",(0,r.kt)("br",null),"metric and clusters. The default is 'pearson'. Possible values are:",(0,r.kt)("br",null),(0,r.kt)("br",null),"- 'pearson': pearson correlation matrix. Distance formula:",(0,r.kt)("br",null),"    .. math:: D",(0,r.kt)("em",{parentName:"td"},"{i,j} = \\sqrt{0.5(1-\\rho^{pearson}"),"{i,j})}",(0,r.kt)("br",null),"- 'spearman': spearman correlation matrix. Distance formula:",(0,r.kt)("br",null),"    .. math:: D",(0,r.kt)("em",{parentName:"td"},"{i,j} = \\sqrt{0.5(1-\\rho^{spearman}"),"{i,j})}",(0,r.kt)("br",null),"- 'abs",(0,r.kt)("em",{parentName:"td"},"pearson': absolute value pearson correlation matrix. Distance formula:",(0,r.kt)("br",null),"    .. math:: D"),"{i,j} = \\sqrt{(1-"),(0,r.kt)("td",{parentName:"tr",align:null},"\\rho^{pearson}_{i,j}"),(0,r.kt)("td",{parentName:"tr",align:null},")}",(0,r.kt)("br",null),"- 'abs",(0,r.kt)("em",{parentName:"td"},"spearman': absolute value spearman correlation matrix. Distance formula:",(0,r.kt)("br",null),"    .. math:: D"),"{i,j} = \\sqrt{(1-")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"covariance"),(0,r.kt)("td",{parentName:"tr",align:null},"str"),(0,r.kt)("td",{parentName:"tr",align:null},"The method used to estimate the covariance matrix:",(0,r.kt)("br",null),"The default is 'hist'. Possible values are:",(0,r.kt)("br",null),(0,r.kt)("br",null),"- 'hist': use historical estimates.",(0,r.kt)("br",null),"- 'ewma1': use ewma with adjust=True. For more information see ",(0,r.kt)("inlineCode",{parentName:"td"},"EWM <https://pandas.pydata.org/pandas-docs/stable/user_guide/window.html#exponentially-weighted-window>"),(0,r.kt)("strong",{parentName:"td"},".",(0,r.kt)("br",null),"- 'ewma2': use ewma with adjust=False. For more information see ",(0,r.kt)("inlineCode",{parentName:"strong"},"EWM <https://pandas.pydata.org/pandas-docs/stable/user_guide/window.html#exponentially-weighted-window>")),".",(0,r.kt)("br",null),"- 'ledoit': use the Ledoit and Wolf Shrinkage method.",(0,r.kt)("br",null),"- 'oas': use the Oracle Approximation Shrinkage method.",(0,r.kt)("br",null),"- 'shrunk': use the basic Shrunk Covariance method.",(0,r.kt)("br",null),"- 'gl': use the basic Graphical Lasso Covariance method.",(0,r.kt)("br",null),"- 'jlogo': use the j-LoGo Covariance method. For more information see: ",(0,r.kt)("inlineCode",{parentName:"td"},"c-jLogo"),".",(0,r.kt)("br",null),"- 'fixed': denoise using fixed method. For more information see chapter 2 of ",(0,r.kt)("inlineCode",{parentName:"td"},"c-MLforAM"),".",(0,r.kt)("br",null),"- 'spectral': denoise using spectral method. For more information see chapter 2 of ",(0,r.kt)("inlineCode",{parentName:"td"},"c-MLforAM"),".",(0,r.kt)("br",null),"- 'shrink': denoise using shrink method. For more information see chapter 2 of ",(0,r.kt)("inlineCode",{parentName:"td"},"c-MLforAM"),"."),(0,r.kt)("td",{parentName:"tr",align:null},"None"),(0,r.kt)("td",{parentName:"tr",align:null},"True")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"objective"),(0,r.kt)("td",{parentName:"tr",align:null},"str"),(0,r.kt)("td",{parentName:"tr",align:null},"Objective function used by the NCO model.",(0,r.kt)("br",null),"The default is 'MinRisk'. Possible values are:",(0,r.kt)("br",null),(0,r.kt)("br",null),"- 'MinRisk': Minimize the selected risk measure.",(0,r.kt)("br",null),"- 'Utility': Maximize the risk averse utility function.",(0,r.kt)("br",null),"- 'Sharpe': Maximize the risk adjusted return ratio based on the selected risk measure.",(0,r.kt)("br",null),"- 'ERC': Equally risk contribution portfolio of the selected risk measure."),(0,r.kt)("td",{parentName:"tr",align:null},"None"),(0,r.kt)("td",{parentName:"tr",align:null},"True")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"risk_measure"),(0,r.kt)("td",{parentName:"tr",align:null},"str"),(0,r.kt)("td",{parentName:"tr",align:null},"The risk measure used to optimize the portfolio. If model is 'NCO',",(0,r.kt)("br",null),"the risk measures available depends on the objective function.",(0,r.kt)("br",null),"The default is 'MV'. Possible values are:",(0,r.kt)("br",null),(0,r.kt)("br",null),"- 'MV': Variance.",(0,r.kt)("br",null),"- 'MAD': Mean Absolute Deviation.",(0,r.kt)("br",null),"- 'MSV': Semi Standard Deviation.",(0,r.kt)("br",null),"- 'FLPM': First Lower Partial Moment (Omega Ratio).",(0,r.kt)("br",null),"- 'SLPM': Second Lower Partial Moment (Sortino Ratio).",(0,r.kt)("br",null),"- 'VaR': Value at Risk.",(0,r.kt)("br",null),"- 'CVaR': Conditional Value at Risk.",(0,r.kt)("br",null),"- 'TG': Tail Gini.",(0,r.kt)("br",null),"- 'EVaR': Entropic Value at Risk.",(0,r.kt)("br",null),"- 'WR': Worst Realization (Minimax).",(0,r.kt)("br",null),"- 'RG': Range of returns.",(0,r.kt)("br",null),"- 'CVRG': CVaR range of returns.",(0,r.kt)("br",null),"- 'TGRG': Tail Gini range of returns.",(0,r.kt)("br",null),"- 'MDD': Maximum Drawdown of uncompounded cumulative returns (Calmar Ratio).",(0,r.kt)("br",null),"- 'ADD': Average Drawdown of uncompounded cumulative returns.",(0,r.kt)("br",null),"- 'DaR': Drawdown at Risk of uncompounded cumulative returns.",(0,r.kt)("br",null),"- 'CDaR': Conditional Drawdown at Risk of uncompounded cumulative returns.",(0,r.kt)("br",null),"- 'EDaR': Entropic Drawdown at Risk of uncompounded cumulative returns.",(0,r.kt)("br",null),"- 'UCI': Ulcer Index of uncompounded cumulative returns.",(0,r.kt)("br",null),"- 'MDD_Rel': Maximum Drawdown of compounded cumulative returns (Calmar Ratio).",(0,r.kt)("br",null),"- 'ADD_Rel': Average Drawdown of compounded cumulative returns.",(0,r.kt)("br",null),"- 'DaR_Rel': Drawdown at Risk of compounded cumulative returns.",(0,r.kt)("br",null),"- 'CDaR_Rel': Conditional Drawdown at Risk of compounded cumulative returns.",(0,r.kt)("br",null),"- 'EDaR_Rel': Entropic Drawdown at Risk of compounded cumulative returns.",(0,r.kt)("br",null),"- 'UCI_Rel': Ulcer Index of compounded cumulative returns."),(0,r.kt)("td",{parentName:"tr",align:null},"None"),(0,r.kt)("td",{parentName:"tr",align:null},"True")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"risk_free_rate"),(0,r.kt)("td",{parentName:"tr",align:null},"float"),(0,r.kt)("td",{parentName:"tr",align:null},"Risk free rate, must be in annual frequency.",(0,r.kt)("br",null),"Used for 'FLPM' and 'SLPM'. The default is 0."),(0,r.kt)("td",{parentName:"tr",align:null},"None"),(0,r.kt)("td",{parentName:"tr",align:null},"True")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"risk_aversion"),(0,r.kt)("td",{parentName:"tr",align:null},"float"),(0,r.kt)("td",{parentName:"tr",align:null},"Risk aversion factor of the 'Utility' objective function.",(0,r.kt)("br",null),"The default is 1."),(0,r.kt)("td",{parentName:"tr",align:null},"None"),(0,r.kt)("td",{parentName:"tr",align:null},"True")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"alpha"),(0,r.kt)("td",{parentName:"tr",align:null},"float"),(0,r.kt)("td",{parentName:"tr",align:null},"Significance level of VaR, CVaR, EDaR, DaR, CDaR, EDaR, Tail Gini of losses.",(0,r.kt)("br",null),"The default is 0.05."),(0,r.kt)("td",{parentName:"tr",align:null},"None"),(0,r.kt)("td",{parentName:"tr",align:null},"True")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"a_sim"),(0,r.kt)("td",{parentName:"tr",align:null},"float"),(0,r.kt)("td",{parentName:"tr",align:null},"Number of CVaRs used to approximate Tail Gini of losses. The default is 100."),(0,r.kt)("td",{parentName:"tr",align:null},"None"),(0,r.kt)("td",{parentName:"tr",align:null},"True")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"beta"),(0,r.kt)("td",{parentName:"tr",align:null},"float"),(0,r.kt)("td",{parentName:"tr",align:null},"Significance level of CVaR and Tail Gini of gains. If None it duplicates alpha value.",(0,r.kt)("br",null),"The default is None."),(0,r.kt)("td",{parentName:"tr",align:null},"None"),(0,r.kt)("td",{parentName:"tr",align:null},"True")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"b_sim"),(0,r.kt)("td",{parentName:"tr",align:null},"float"),(0,r.kt)("td",{parentName:"tr",align:null},"Number of CVaRs used to approximate Tail Gini of gains. If None it duplicates a_sim value.",(0,r.kt)("br",null),"The default is None."),(0,r.kt)("td",{parentName:"tr",align:null},"None"),(0,r.kt)("td",{parentName:"tr",align:null},"True")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"linkage"),(0,r.kt)("td",{parentName:"tr",align:null},"str"),(0,r.kt)("td",{parentName:"tr",align:null},"Linkage method of hierarchical clustering. For more information see ",(0,r.kt)("inlineCode",{parentName:"td"},"linkage <https://docs.scipy.org/doc/scipy/reference/generated/scipy.<br/>cluster.hierarchy.linkage.html?highlight=linkage#scipy.cluster.hierarchy.linkage>"),"__.",(0,r.kt)("br",null),"The default is 'single'. Possible values are:",(0,r.kt)("br",null),(0,r.kt)("br",null),"- 'single'.",(0,r.kt)("br",null),"- 'complete'.",(0,r.kt)("br",null),"- 'average'.",(0,r.kt)("br",null),"- 'weighted'.",(0,r.kt)("br",null),"- 'centroid'.",(0,r.kt)("br",null),"- 'median'.",(0,r.kt)("br",null),"- 'ward'.",(0,r.kt)("br",null),"- 'dbht': Direct Bubble Hierarchical Tree."),(0,r.kt)("td",{parentName:"tr",align:null},"None"),(0,r.kt)("td",{parentName:"tr",align:null},"True")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"k"),(0,r.kt)("td",{parentName:"tr",align:null},"int"),(0,r.kt)("td",{parentName:"tr",align:null},"Number of clusters. This value is took instead of the optimal number",(0,r.kt)("br",null),"of clusters calculated with the two difference gap statistic.",(0,r.kt)("br",null),"The default is None."),(0,r.kt)("td",{parentName:"tr",align:null},"None"),(0,r.kt)("td",{parentName:"tr",align:null},"True")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"max_k"),(0,r.kt)("td",{parentName:"tr",align:null},"int"),(0,r.kt)("td",{parentName:"tr",align:null},"Max number of clusters used by the two difference gap statistic",(0,r.kt)("br",null),"to find the optimal number of clusters. The default is 10."),(0,r.kt)("td",{parentName:"tr",align:null},"None"),(0,r.kt)("td",{parentName:"tr",align:null},"True")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"bins_info"),(0,r.kt)("td",{parentName:"tr",align:null},"str"),(0,r.kt)("td",{parentName:"tr",align:null},"Number of bins used to calculate variation of information. The default",(0,r.kt)("br",null),"value is 'KN'. Possible values are:",(0,r.kt)("br",null),(0,r.kt)("br",null),"- 'KN': Knuth's choice method. For more information see ",(0,r.kt)("inlineCode",{parentName:"td"},"knuth_bin_width <https://docs.astropy.org/en/stable/api/astropy.stats.knuth_bin_width.html>"),(0,r.kt)("strong",{parentName:"td"},".",(0,r.kt)("br",null),"- 'FD': Freedman\u2013Diaconis' choice method. For more information see ",(0,r.kt)("inlineCode",{parentName:"strong"},"freedman_bin_width <https://docs.astropy.org/en/stable/api/astropy.stats.freedman_bin_width.html>")),".",(0,r.kt)("br",null),"- 'SC': Scotts' choice method. For more information see ",(0,r.kt)("inlineCode",{parentName:"td"},"scott_bin_width <https://docs.astropy.org/en/stable/api/astropy.stats.scott_bin_width.html>"),"__.",(0,r.kt)("br",null),"- 'HGR': Hacine-Gharbi and Ravier' choice method."),(0,r.kt)("td",{parentName:"tr",align:null},"None"),(0,r.kt)("td",{parentName:"tr",align:null},"True")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"alpha_tail"),(0,r.kt)("td",{parentName:"tr",align:null},"float"),(0,r.kt)("td",{parentName:"tr",align:null},"Significance level for lower tail dependence index. The default is 0.05."),(0,r.kt)("td",{parentName:"tr",align:null},"None"),(0,r.kt)("td",{parentName:"tr",align:null},"True")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"leaf_order"),(0,r.kt)("td",{parentName:"tr",align:null},"bool"),(0,r.kt)("td",{parentName:"tr",align:null},"Indicates if the cluster are ordered so that the distance between",(0,r.kt)("br",null),"successive leaves is minimal. The default is True."),(0,r.kt)("td",{parentName:"tr",align:null},"None"),(0,r.kt)("td",{parentName:"tr",align:null},"True")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"d_ewma"),(0,r.kt)("td",{parentName:"tr",align:null},"float"),(0,r.kt)("td",{parentName:"tr",align:null},"The smoothing factor of ewma methods.",(0,r.kt)("br",null),"The default is 0.94."),(0,r.kt)("td",{parentName:"tr",align:null},"None"),(0,r.kt)("td",{parentName:"tr",align:null},"True")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"value"),(0,r.kt)("td",{parentName:"tr",align:null},"float"),(0,r.kt)("td",{parentName:"tr",align:null},"Amount of money to allocate. The default is 1."),(0,r.kt)("td",{parentName:"tr",align:null},"None"),(0,r.kt)("td",{parentName:"tr",align:null},"True")))),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"returns"},"Returns"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Tuple[Optional","[dict]",", pd.DataFrame]"),(0,r.kt)("td",{parentName:"tr",align:null},"Dictionary of portfolio weights,",(0,r.kt)("br",null),"DataFrame of stock returns.")))),(0,r.kt)("hr",null))}k.isMDXComponent=!0}}]);