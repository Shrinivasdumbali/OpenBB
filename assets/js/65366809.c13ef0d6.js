"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[17351],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>m});var a=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,a,o=function(e,n){if(null==e)return{};var t,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=a.createContext({}),s=function(e){var n=a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},u=function(e){var n=s(e.components);return a.createElement(l.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},d=a.forwardRef((function(e,n){var t=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),d=s(t),m=o,g=d["".concat(l,".").concat(m)]||d[m]||p[m]||r;return t?a.createElement(g,i(i({ref:n},u),{},{components:t})):a.createElement(g,i({ref:n},u))}));function m(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var r=t.length,i=new Array(r);i[0]=d;var c={};for(var l in n)hasOwnProperty.call(n,l)&&(c[l]=n[l]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var s=2;s<r;s++)i[s]=t[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},52541:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>p,frontMatter:()=>r,metadata:()=>c,toc:()=>s});var a=t(87462),o=(t(67294),t(3905));const r={sidebar_position:1,title:"Changing Sources"},i=void 0,c={unversionedId:"guides/advanced/changing_sources",id:"guides/advanced/changing_sources",title:"Changing Sources",description:"Many commands have multiple datasources attached to it. A great example is /stocka/fa/income that allows you to select YahooFinance, Polygon, AlphaVantage, FinancialModelingPrep or EODHD. Many have a default source, for example for income this is Yahoo Finance but you can change the default sources of each command via the sources menu.",source:"@site/content/terminal/guides/advanced/changing_sources.md",sourceDirName:"guides/advanced",slug:"/guides/advanced/changing_sources",permalink:"/terminal/guides/advanced/changing_sources",draft:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/terminal/guides/advanced/changing_sources.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"Changing Sources"},sidebar:"tutorialSidebar",previous:{title:"Trading Hours",permalink:"/terminal/guides/intros/stocks/tradinghours"},next:{title:"Customizing the Terminal",permalink:"/terminal/guides/advanced/customizing_the_terminal"}},l={},s=[],u={toc:s};function p(e){let{components:n,...t}=e;return(0,o.kt)("wrapper",(0,a.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Many commands have multiple datasources attached to it. A great example is ",(0,o.kt)("inlineCode",{parentName:"p"},"/stocka/fa/income")," that allows you to select ",(0,o.kt)("inlineCode",{parentName:"p"},"YahooFinance, Polygon, AlphaVantage, FinancialModelingPrep or EODHD"),". Many have a default source, for example for ",(0,o.kt)("inlineCode",{parentName:"p"},"income")," this is Yahoo Finance but you can change the default sources of each command via the ",(0,o.kt)("inlineCode",{parentName:"p"},"sources")," menu. "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"2022 Nov 23, 06:09 (\ud83e\udd8b) / $ sources \n\n\u256d\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 Data Sources \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u256e\n\u2502                                                                                                                                                                                                                    \u2502\n\u2502 Get and set default data sources:                                                                                                                                                                                  \u2502\n\u2502     get                get available data sources associated with command                                                                                                                                          \u2502\n\u2502     set                set default data source for a command                                                                                                                                                       \u2502\n\u2502                                                                                                                                                                                                                    \u2502\n\u2570\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 OpenBB Terminal v2.0.0rc1 (https://openbb.co) \u2500\u256f\n")),(0,o.kt)("p",null,"For example, if you would like to change the default data provider from the ",(0,o.kt)("inlineCode",{parentName:"p"},"income")," command from the ",(0,o.kt)("inlineCode",{parentName:"p"},"stocks/fa")," menu you can first run the command ",(0,o.kt)("inlineCode",{parentName:"p"},"get")," following by ",(0,o.kt)("inlineCode",{parentName:"p"},"stocks_load"),". This returns the following:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"2022 Nov 23, 06:12 (\ud83e\udd8b) /sources/ $ get stocks_fa_income\n\n\nDefault   : YahooFinance\nAvailable : YahooFinance, Polygon, AlphaVantage, FinancialModelingPrep, EODHD\n\n")),(0,o.kt)("p",null,"Then, with ",(0,o.kt)("inlineCode",{parentName:"p"},"set")," you can change the default data provider. For example, we can change the data provider to ",(0,o.kt)("inlineCode",{parentName:"p"},"Polygon")," with\nthe following:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"2022 Nov 23, 06:12 (\ud83e\udd8b) /sources/ $ set stocks_fa_income Polygon\n\nThe data source was specified successfully.\n\n\n2022 Nov 23, 06:12 (\ud83e\udd8b) /sources/ $ get stocks_fa_income\n\n\nDefault   : Polygon\nAvailable : Polygon, YahooFinance, AlphaVantage, FinancialModelingPrep, EODHD\n\n")))}p.isMDXComponent=!0}}]);