"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[92160],{3905:(t,e,a)=>{a.d(e,{Zo:()=>d,kt:()=>b});var n=a(67294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function o(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function i(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var u=n.createContext({}),s=function(t){var e=n.useContext(u),a=e;return t&&(a="function"==typeof t?t(e):o(o({},e),t)),a},d=function(t){var e=s(t.components);return n.createElement(u.Provider,{value:e},t.children)},p="mdxType",c={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},m=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,l=t.originalType,u=t.parentName,d=i(t,["components","mdxType","originalType","parentName"]),p=s(a),m=r,b=p["".concat(u,".").concat(m)]||p[m]||c[m]||l;return a?n.createElement(b,o(o({ref:e},d),{},{components:a})):n.createElement(b,o({ref:e},d))}));function b(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=a.length,o=new Array(l);o[0]=m;var i={};for(var u in e)hasOwnProperty.call(e,u)&&(i[u]=e[u]);i.originalType=t,i[p]="string"==typeof t?t:r,o[1]=i;for(var s=2;s<l;s++)o[s]=a[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},85162:(t,e,a)=>{a.d(e,{Z:()=>o});var n=a(67294),r=a(86010);const l={tabItem:"tabItem_Ymn6"};function o(t){let{children:e,hidden:a,className:o}=t;return n.createElement("div",{role:"tabpanel",className:(0,r.Z)(l.tabItem,o),hidden:a},e)}},88828:(t,e,a)=>{a.d(e,{Z:()=>l});var n=a(67294),r=a(35742);function l(t){let{title:e}=t;return n.createElement(r.Z,null,n.createElement("title",null,e))}},31792:(t,e,a)=>{a.d(e,{Z:()=>v});var n=a(87462),r=a(67294),l=a(86010),o=a(12466),i=a(16550),u=a(91980),s=a(67392),d=a(50012);function p(t){return function(t){return r.Children.map(t,(t=>{if(!t||(0,r.isValidElement)(t)&&function(t){const{props:e}=t;return!!e&&"object"==typeof e&&"value"in e}(t))return t;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof t.type?t.type:t.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(t).map((t=>{let{props:{value:e,label:a,attributes:n,default:r}}=t;return{value:e,label:a,attributes:n,default:r}}))}function c(t){const{values:e,children:a}=t;return(0,r.useMemo)((()=>{const t=e??p(a);return function(t){const e=(0,s.l)(t,((t,e)=>t.value===e.value));if(e.length>0)throw new Error(`Docusaurus error: Duplicate values "${e.map((t=>t.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(t),t}),[e,a])}function m(t){let{value:e,tabValues:a}=t;return a.some((t=>t.value===e))}function b(t){let{queryString:e=!1,groupId:a}=t;const n=(0,i.k6)(),l=function(t){let{queryString:e=!1,groupId:a}=t;if("string"==typeof e)return e;if(!1===e)return null;if(!0===e&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:e,groupId:a});return[(0,u._X)(l),(0,r.useCallback)((t=>{if(!l)return;const e=new URLSearchParams(n.location.search);e.set(l,t),n.replace({...n.location,search:e.toString()})}),[l,n])]}function f(t){const{defaultValue:e,queryString:a=!1,groupId:n}=t,l=c(t),[o,i]=(0,r.useState)((()=>function(t){let{defaultValue:e,tabValues:a}=t;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(e){if(!m({value:e,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${e}" but none of its children has the corresponding value. Available values are: ${a.map((t=>t.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return e}const n=a.find((t=>t.default))??a[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:e,tabValues:l}))),[u,s]=b({queryString:a,groupId:n}),[p,f]=function(t){let{groupId:e}=t;const a=function(t){return t?`docusaurus.tab.${t}`:null}(e),[n,l]=(0,d.Nk)(a);return[n,(0,r.useCallback)((t=>{a&&l.set(t)}),[a,l])]}({groupId:n}),k=(()=>{const t=u??p;return m({value:t,tabValues:l})?t:null})();(0,r.useLayoutEffect)((()=>{k&&i(k)}),[k]);return{selectedValue:o,selectValue:(0,r.useCallback)((t=>{if(!m({value:t,tabValues:l}))throw new Error(`Can't select invalid tab value=${t}`);i(t),s(t),f(t)}),[s,f,l]),tabValues:l}}var k=a(72389);const g={tabList:"tabList_TRJ7",tabItem:"tabItem_hGfb"};function h(t){let{className:e,block:a,selectedValue:u,selectValue:s,tabValues:d}=t;const p=[],{blockElementScrollPositionUntilNextRender:c}=(0,o.o5)(),{pathname:m}=(0,i.TH)(),b=t=>{const e=t.currentTarget,a=p.indexOf(e),n=d[a].value;n!==u&&(c(e),s(n))},f=t=>{let e=null;switch(t.key){case"Enter":b(t);break;case"ArrowRight":{const a=p.indexOf(t.currentTarget)+1;e=p[a]??p[0];break}case"ArrowLeft":{const a=p.indexOf(t.currentTarget)-1;e=p[a]??p[p.length-1];break}}e?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("_group-tab list-none -ml-7 my-6 overflow-auto")},d.map((t=>{let{value:e,label:a,attributes:o}=t;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:u===e?0:-1,"aria-selected":u===e,key:e,ref:t=>p.push(t),onKeyDown:f,onClick:b},o,{className:(0,l.Z)("font-bold tracking-widest w-fit px-3 inline-flex py-1 uppercase border-b text-lg cursor-pointer",g.tabItem,o?.className,{"border-b-2 pointer-events-none":u===e,"border-b-2 text-[#669dcb] border-[#669dcb]":u===e&&m.startsWith("/terminal"),"border-b-2 text-[#FB923C] border-[#FB923C]":u===e&&m.startsWith("/sdk"),"border-grey-400 text-grey-400 hover:text-[#ffd4b1] hover:border-[#ffd4b1]":u!==e&&m.startsWith("/sdk"),"border-b-2 text-[#FB923C] border-[#FB923C]":u===e&&m.startsWith("/platform"),"border-grey-400 text-grey-400 hover:text-[#ffd4b1] hover:border-[#ffd4b1]":u!==e&&m.startsWith("/platform"),"border-grey-400 text-grey-400 hover:text-[#abd2f1] hover:border-[#abd2f1]":u!==e&&m.startsWith("/terminal")})}),a??e)})))}function y(t){let{lazy:e,children:a,selectedValue:n}=t;if(a=Array.isArray(a)?a:[a],e){const t=a.find((t=>t.props.value===n));return t?(0,r.cloneElement)(t,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},a.map(((t,e)=>(0,r.cloneElement)(t,{key:e,hidden:t.props.value!==n}))))}function N(t){const e=f(t);return r.createElement("div",{className:(0,l.Z)("tabs-container",g.tabList)},r.createElement(h,(0,n.Z)({},t,e)),r.createElement(y,(0,n.Z)({},t,e)))}function v(t){const e=(0,k.Z)();return r.createElement(N,(0,n.Z)({key:String(e)},t))}},11982:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>p,contentTitle:()=>s,default:()=>f,frontMatter:()=>u,metadata:()=>d,toc:()=>c});var n=a(87462),r=(a(67294),a(3905)),l=a(88828),o=a(31792),i=a(85162);const u={title:"bbands",description:"This documentation is about the 'bbands' function in the OpenBB finance library. It allows users to calculate and plot Bollinger Bands for financial data, providing multiple parameters for customization.",keywords:["OpenBB finance library","Bollinger Bands","Financial data analysis","Python financial tools","Technical analysis","Volatility models","Financial chart plotting"]},s=void 0,d={unversionedId:"sdk/reference/ta/bbands",id:"sdk/reference/ta/bbands",title:"bbands",description:"This documentation is about the 'bbands' function in the OpenBB finance library. It allows users to calculate and plot Bollinger Bands for financial data, providing multiple parameters for customization.",source:"@site/content/sdk/reference/ta/bbands.md",sourceDirName:"sdk/reference/ta",slug:"/sdk/reference/ta/bbands",permalink:"/sdk/reference/ta/bbands",draft:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/sdk/reference/ta/bbands.md",tags:[],version:"current",lastUpdatedBy:"montezdesousa",lastUpdatedAt:1709061006,formattedLastUpdatedAt:"Feb 27, 2024",frontMatter:{title:"bbands",description:"This documentation is about the 'bbands' function in the OpenBB finance library. It allows users to calculate and plot Bollinger Bands for financial data, providing multiple parameters for customization.",keywords:["OpenBB finance library","Bollinger Bands","Financial data analysis","Python financial tools","Technical analysis","Volatility models","Financial chart plotting"]},sidebar:"tutorialSidebar",previous:{title:"atr",permalink:"/sdk/reference/ta/atr"},next:{title:"cci",permalink:"/sdk/reference/ta/cci"}},p={},c=[{value:"Parameters",id:"parameters",level:2},{value:"Returns",id:"returns",level:2},{value:"Parameters",id:"parameters-1",level:2},{value:"Returns",id:"returns-1",level:2}],m={toc:c},b="wrapper";function f(t){let{components:e,...a}=t;return(0,r.kt)(b,(0,n.Z)({},m,a,{components:e,mdxType:"MDXLayout"}),(0,r.kt)(l.Z,{title:"ta.bbands - Reference | OpenBB SDK Docs",mdxType:"HeadTitle"}),(0,r.kt)(o.Z,{mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"model",label:"Model",default:!0,mdxType:"TabItem"},(0,r.kt)("p",null,"Calculate Bollinger Bands"),(0,r.kt)("p",null,"Source Code: [",(0,r.kt)("a",{parentName:"p",href:"https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/common/technical_analysis/volatility_model.py#L32"},"link"),"]"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python",metastring:"wordwrap",wordwrap:!0},'openbb.ta.bbands(data: pd.DataFrame, window: int = 15, n_std: float = 2, mamode: str = "ema")\n')),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"parameters"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"),(0,r.kt)("th",{parentName:"tr",align:null},"Optional"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"data"),(0,r.kt)("td",{parentName:"tr",align:null},"pd.DataFrame"),(0,r.kt)("td",{parentName:"tr",align:null},"Dataframe of ohlc prices"),(0,r.kt)("td",{parentName:"tr",align:null},"None"),(0,r.kt)("td",{parentName:"tr",align:null},"False")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"window"),(0,r.kt)("td",{parentName:"tr",align:null},"int"),(0,r.kt)("td",{parentName:"tr",align:null},"Length of window to calculate BB"),(0,r.kt)("td",{parentName:"tr",align:null},"15"),(0,r.kt)("td",{parentName:"tr",align:null},"True")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"n_std"),(0,r.kt)("td",{parentName:"tr",align:null},"float"),(0,r.kt)("td",{parentName:"tr",align:null},"Number of standard deviations to show"),(0,r.kt)("td",{parentName:"tr",align:null},"2"),(0,r.kt)("td",{parentName:"tr",align:null},"True")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"mamode"),(0,r.kt)("td",{parentName:"tr",align:null},"str"),(0,r.kt)("td",{parentName:"tr",align:null},"Method of calculating average"),(0,r.kt)("td",{parentName:"tr",align:null},"ema"),(0,r.kt)("td",{parentName:"tr",align:null},"True")))),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"returns"},"Returns"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"pd.DataFrame"),(0,r.kt)("td",{parentName:"tr",align:null},"Dataframe of bollinger band data")))),(0,r.kt)("hr",null)),(0,r.kt)(i.Z,{value:"view",label:"Chart",mdxType:"TabItem"},(0,r.kt)("p",null,"Plots bollinger bands"),(0,r.kt)("p",null,"Source Code: [",(0,r.kt)("a",{parentName:"p",href:"https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/common/technical_analysis/volatility_view.py#L25"},"link"),"]"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python",metastring:"wordwrap",wordwrap:!0},'openbb.ta.bbands_chart(data: pd.DataFrame, symbol: str = "", window: int = 15, n_std: float = 2, mamode: str = "sma", export: str = "", sheet_name: Optional[str] = None, external_axes: bool = False)\n')),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"parameters-1"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"),(0,r.kt)("th",{parentName:"tr",align:null},"Optional"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"data"),(0,r.kt)("td",{parentName:"tr",align:null},"pd.DataFrame"),(0,r.kt)("td",{parentName:"tr",align:null},"Dataframe of ohlc prices"),(0,r.kt)("td",{parentName:"tr",align:null},"None"),(0,r.kt)("td",{parentName:"tr",align:null},"False")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"symbol"),(0,r.kt)("td",{parentName:"tr",align:null},"str"),(0,r.kt)("td",{parentName:"tr",align:null},"Ticker symbol"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"True")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"window"),(0,r.kt)("td",{parentName:"tr",align:null},"int"),(0,r.kt)("td",{parentName:"tr",align:null},"Length of window to calculate BB"),(0,r.kt)("td",{parentName:"tr",align:null},"15"),(0,r.kt)("td",{parentName:"tr",align:null},"True")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"n_std"),(0,r.kt)("td",{parentName:"tr",align:null},"float"),(0,r.kt)("td",{parentName:"tr",align:null},"Number of standard deviations to show"),(0,r.kt)("td",{parentName:"tr",align:null},"2"),(0,r.kt)("td",{parentName:"tr",align:null},"True")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"mamode"),(0,r.kt)("td",{parentName:"tr",align:null},"str"),(0,r.kt)("td",{parentName:"tr",align:null},"Method of calculating average"),(0,r.kt)("td",{parentName:"tr",align:null},"sma"),(0,r.kt)("td",{parentName:"tr",align:null},"True")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"export"),(0,r.kt)("td",{parentName:"tr",align:null},"str"),(0,r.kt)("td",{parentName:"tr",align:null},"Format of export file"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"True")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"external_axes"),(0,r.kt)("td",{parentName:"tr",align:null},"bool"),(0,r.kt)("td",{parentName:"tr",align:null},"Whether to return the figure object or not, by default False"),(0,r.kt)("td",{parentName:"tr",align:null},"False"),(0,r.kt)("td",{parentName:"tr",align:null},"True")))),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"returns-1"},"Returns"),(0,r.kt)("p",null,"This function does not return anything"),(0,r.kt)("hr",null))))}f.isMDXComponent=!0}}]);