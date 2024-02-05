"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[48553],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>_});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=n.createContext({}),p=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},c=function(e){var t=p(e.components);return n.createElement(i.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=p(r),m=a,_=d["".concat(i,".").concat(m)]||d[m]||u[m]||o;return r?n.createElement(_,l(l({ref:t},c),{},{components:r})):n.createElement(_,l({ref:t},c))}));function _(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,l=new Array(o);l[0]=m;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s[d]="string"==typeof e?e:a,l[1]=s;for(var p=2;p<o;p++)l[p]=r[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},88828:(e,t,r)=>{r.d(t,{Z:()=>o});var n=r(67294),a=r(35742);function o(e){let{title:t}=e;return n.createElement(a.Z,null,n.createElement("title",null,t))}},8198:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>m,frontMatter:()=>l,metadata:()=>i,toc:()=>c});var n=r(87462),a=(r(67294),r(3905)),o=r(88828);const l={title:"valuation",description:"Marketing website page providing a tool to print valuation data of various stocks based on a set of pre-defined filters, further offering various parametric controls to refine and customize the output.",keywords:["valuation tool","stock market","market filters","financial data","stock parameters","data sort","parameter limit","preset filters","Python commands","investment tool","stock analysis"]},s=void 0,i={unversionedId:"terminal/reference/stocks/screener/valuation",id:"terminal/reference/stocks/screener/valuation",title:"valuation",description:"Marketing website page providing a tool to print valuation data of various stocks based on a set of pre-defined filters, further offering various parametric controls to refine and customize the output.",source:"@site/content/terminal/reference/stocks/screener/valuation.md",sourceDirName:"terminal/reference/stocks/screener",slug:"/terminal/reference/stocks/screener/valuation",permalink:"/terminal/reference/stocks/screener/valuation",draft:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/terminal/reference/stocks/screener/valuation.md",tags:[],version:"current",lastUpdatedBy:"montezdesousa",lastUpdatedAt:1707152475,formattedLastUpdatedAt:"Feb 5, 2024",frontMatter:{title:"valuation",description:"Marketing website page providing a tool to print valuation data of various stocks based on a set of pre-defined filters, further offering various parametric controls to refine and customize the output.",keywords:["valuation tool","stock market","market filters","financial data","stock parameters","data sort","parameter limit","preset filters","Python commands","investment tool","stock analysis"]},sidebar:"tutorialSidebar",previous:{title:"technical",permalink:"/terminal/reference/stocks/screener/technical"},next:{title:"view",permalink:"/terminal/reference/stocks/screener/view"}},p={},c=[{value:"Usage",id:"usage",level:3},{value:"Parameters",id:"parameters",level:2}],d={toc:c},u="wrapper";function m(e){let{components:t,...r}=e;return(0,a.kt)(u,(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)(o.Z,{title:"stocks /screener/valuation - Reference | OpenBB Terminal Docs",mdxType:"HeadTitle"}),(0,a.kt)("p",null,"Prints valuation data of the companies that meet the pre-set filtering."),(0,a.kt)("h3",{id:"usage"},"Usage"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python",metastring:"wordwrap",wordwrap:!0},"valuation [-p Desired preset.] [-l LIMIT] [-r] [-s SORT]\n")),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"parameters"},"Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Name"),(0,a.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"),(0,a.kt)("th",{parentName:"tr",align:null},"Default"),(0,a.kt)("th",{parentName:"tr",align:null},"Optional"),(0,a.kt)("th",{parentName:"tr",align:null},"Choices"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"preset"),(0,a.kt)("td",{parentName:"tr",align:null},"-p  --preset"),(0,a.kt)("td",{parentName:"tr",align:null},"Filter presets"),(0,a.kt)("td",{parentName:"tr",align:null},"top_gainers"),(0,a.kt)("td",{parentName:"tr",align:null},"True"),(0,a.kt)("td",{parentName:"tr",align:null},"rosenwald_gtfo, sp500_communication_services_sector, rosenwald, sexy_year, growth_stocks, sp500_healthcare_sector, top_performers_tech, analyst_strong_buy, 5pct_above_low, golden_cross_penny, oversold_under_3dol, top_performers_all, sp500_technology_sector, cheap_dividend, under_15dol_stocks, oversold, sp500_consumer_defensive_sector, top_performers_healthcare, continued_momentum_scan, undervalue, modified_dreman, sp500_consumer_cyclical_sector, sp500_real_estate_sector, news_scanner, sp500_industrials_sector, sp500_energy_sector, weak_support_and_top_performers, cheap_oversold, modified_neff, sp500_utilities_sector, stocks_strong_support_levels, sdk_guide_preset, bull_runs_over_10pct, sp500_basic_materials_sector, oversold_under_5dol, short_squeeze_scan, potential_reversals, unusual_volume, channel_up_and_low_debt_and_sma_50and200, buffett_like, recent_growth_and_support, death_cross, golden_cross, cheap_bottom_dividend, djia_components, value_stocks, break_out_stocks, sp500_financial_sector, high_vol_and_low_debt, heavy_inst_ins, simplistic_momentum_scanner_under_7dol, top_gainers, top_losers, new_high, new_low, most_volatile, most_active, overbought, downgrades, upgrades, earnings_before, earnings_after, recent_insider_buying, recent_insider_selling, major_news, horizontal_sr, tl_resistance, tl_support, wedge_up, wedge_down, wedge, triangle_ascending, triangle_descending, channel_up, channel_down, channel, double_top, double_bottom, multiple_top, multiple_bottom, head_shoulders, head_shoulders_inverse")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"limit"),(0,a.kt)("td",{parentName:"tr",align:null},"-l  --limit"),(0,a.kt)("td",{parentName:"tr",align:null},"Limit of stocks to print"),(0,a.kt)("td",{parentName:"tr",align:null},"0"),(0,a.kt)("td",{parentName:"tr",align:null},"True"),(0,a.kt)("td",{parentName:"tr",align:null},"None")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"reverse"),(0,a.kt)("td",{parentName:"tr",align:null},"-r  --reverse"),(0,a.kt)("td",{parentName:"tr",align:null},"Data is sorted in descending order by default. Reverse flag will sort it in an ascending way. Only works when raw data is displayed."),(0,a.kt)("td",{parentName:"tr",align:null},"False"),(0,a.kt)("td",{parentName:"tr",align:null},"True"),(0,a.kt)("td",{parentName:"tr",align:null},"None")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"sort"),(0,a.kt)("td",{parentName:"tr",align:null},"-s  --sort"),(0,a.kt)("td",{parentName:"tr",align:null},"Sort elements of the table."),(0,a.kt)("td",{parentName:"tr",align:null},"marketcap"),(0,a.kt)("td",{parentName:"tr",align:null},"True"),(0,a.kt)("td",{parentName:"tr",align:null},"ticker, marketcap, p/e, fwdp/e, peg, p/s, p/b, p/c, p/fcf, epsthisy, epsnexty, epspast5y, epsnext5y, salespast5y, price, change, volume")))),(0,a.kt)("hr",null))}m.isMDXComponent=!0}}]);