"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[13126],{3905:(t,e,a)=>{a.d(e,{Zo:()=>p,kt:()=>b});var r=a(67294);function n(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,r)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){n(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function u(t,e){if(null==t)return{};var a,r,n=function(t,e){if(null==t)return{};var a,r,n={},l=Object.keys(t);for(r=0;r<l.length;r++)a=l[r],e.indexOf(a)>=0||(n[a]=t[a]);return n}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(r=0;r<l.length;r++)a=l[r],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(n[a]=t[a])}return n}var o=r.createContext({}),d=function(t){var e=r.useContext(o),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},p=function(t){var e=d(t.components);return r.createElement(o.Provider,{value:e},t.children)},s="mdxType",m={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},c=r.forwardRef((function(t,e){var a=t.components,n=t.mdxType,l=t.originalType,o=t.parentName,p=u(t,["components","mdxType","originalType","parentName"]),s=d(a),c=n,b=s["".concat(o,".").concat(c)]||s[c]||m[c]||l;return a?r.createElement(b,i(i({ref:e},p),{},{components:a})):r.createElement(b,i({ref:e},p))}));function b(t,e){var a=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var l=a.length,i=new Array(l);i[0]=c;var u={};for(var o in e)hasOwnProperty.call(e,o)&&(u[o]=e[o]);u.originalType=t,u[s]="string"==typeof t?t:n,i[1]=u;for(var d=2;d<l;d++)i[d]=a[d];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}c.displayName="MDXCreateElement"},85162:(t,e,a)=>{a.d(e,{Z:()=>i});var r=a(67294),n=a(86010);const l={tabItem:"tabItem_Ymn6"};function i(t){let{children:e,hidden:a,className:i}=t;return r.createElement("div",{role:"tabpanel",className:(0,n.Z)(l.tabItem,i),hidden:a},e)}},31792:(t,e,a)=>{a.d(e,{Z:()=>v});var r=a(87462),n=a(67294),l=a(86010),i=a(12466),u=a(16550),o=a(91980),d=a(67392),p=a(50012);function s(t){return function(t){return n.Children.map(t,(t=>{if(!t||(0,n.isValidElement)(t)&&function(t){const{props:e}=t;return!!e&&"object"==typeof e&&"value"in e}(t))return t;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof t.type?t.type:t.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(t).map((t=>{let{props:{value:e,label:a,attributes:r,default:n}}=t;return{value:e,label:a,attributes:r,default:n}}))}function m(t){const{values:e,children:a}=t;return(0,n.useMemo)((()=>{const t=e??s(a);return function(t){const e=(0,d.l)(t,((t,e)=>t.value===e.value));if(e.length>0)throw new Error(`Docusaurus error: Duplicate values "${e.map((t=>t.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(t),t}),[e,a])}function c(t){let{value:e,tabValues:a}=t;return a.some((t=>t.value===e))}function b(t){let{queryString:e=!1,groupId:a}=t;const r=(0,u.k6)(),l=function(t){let{queryString:e=!1,groupId:a}=t;if("string"==typeof e)return e;if(!1===e)return null;if(!0===e&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:e,groupId:a});return[(0,o._X)(l),(0,n.useCallback)((t=>{if(!l)return;const e=new URLSearchParams(r.location.search);e.set(l,t),r.replace({...r.location,search:e.toString()})}),[l,r])]}function g(t){const{defaultValue:e,queryString:a=!1,groupId:r}=t,l=m(t),[i,u]=(0,n.useState)((()=>function(t){let{defaultValue:e,tabValues:a}=t;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(e){if(!c({value:e,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${e}" but none of its children has the corresponding value. Available values are: ${a.map((t=>t.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return e}const r=a.find((t=>t.default))??a[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:e,tabValues:l}))),[o,d]=b({queryString:a,groupId:r}),[s,g]=function(t){let{groupId:e}=t;const a=function(t){return t?`docusaurus.tab.${t}`:null}(e),[r,l]=(0,p.Nk)(a);return[r,(0,n.useCallback)((t=>{a&&l.set(t)}),[a,l])]}({groupId:r}),f=(()=>{const t=o??s;return c({value:t,tabValues:l})?t:null})();(0,n.useLayoutEffect)((()=>{f&&u(f)}),[f]);return{selectedValue:i,selectValue:(0,n.useCallback)((t=>{if(!c({value:t,tabValues:l}))throw new Error(`Can't select invalid tab value=${t}`);u(t),d(t),g(t)}),[d,g,l]),tabValues:l}}var f=a(72389);const k={tabList:"tabList_TRJ7",tabItem:"tabItem_hGfb"};function y(t){let{className:e,block:a,selectedValue:o,selectValue:d,tabValues:p}=t;const s=[],{blockElementScrollPositionUntilNextRender:m}=(0,i.o5)(),{pathname:c}=(0,u.TH)(),b=t=>{const e=t.currentTarget,a=s.indexOf(e),r=p[a].value;r!==o&&(m(e),d(r))},g=t=>{let e=null;switch(t.key){case"Enter":b(t);break;case"ArrowRight":{const a=s.indexOf(t.currentTarget)+1;e=s[a]??s[0];break}case"ArrowLeft":{const a=s.indexOf(t.currentTarget)-1;e=s[a]??s[s.length-1];break}}e?.focus()};return n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("_group-tab list-none -ml-7 my-6 overflow-auto")},p.map((t=>{let{value:e,label:a,attributes:i}=t;return n.createElement("li",(0,r.Z)({role:"tab",tabIndex:o===e?0:-1,"aria-selected":o===e,key:e,ref:t=>s.push(t),onKeyDown:g,onClick:b},i,{className:(0,l.Z)("font-bold tracking-widest w-fit px-3 inline-flex py-1 uppercase border-b text-lg cursor-pointer",k.tabItem,i?.className,{"border-b-2 pointer-events-none":o===e,"border-b-2 text-[#669dcb] border-[#669dcb]":o===e&&c.startsWith("/terminal"),"border-b-2 text-[#FB923C] border-[#FB923C]":o===e&&c.startsWith("/sdk"),"border-grey-400 text-grey-400 hover:text-[#ffd4b1] hover:border-[#ffd4b1]":o!==e&&c.startsWith("/sdk"),"border-b-2 text-[#FB923C] border-[#FB923C]":o===e&&c.startsWith("/platform"),"border-grey-400 text-grey-400 hover:text-[#ffd4b1] hover:border-[#ffd4b1]":o!==e&&c.startsWith("/platform"),"border-grey-400 text-grey-400 hover:text-[#abd2f1] hover:border-[#abd2f1]":o!==e&&c.startsWith("/terminal")})}),a??e)})))}function N(t){let{lazy:e,children:a,selectedValue:r}=t;if(a=Array.isArray(a)?a:[a],e){const t=a.find((t=>t.props.value===r));return t?(0,n.cloneElement)(t,{className:"margin-top--md"}):null}return n.createElement("div",{className:"margin-top--md"},a.map(((t,e)=>(0,n.cloneElement)(t,{key:e,hidden:t.props.value!==r}))))}function h(t){const e=g(t);return n.createElement("div",{className:(0,l.Z)("tabs-container",k.tabList)},n.createElement(y,(0,r.Z)({},t,e)),n.createElement(N,(0,r.Z)({},t,e)))}function v(t){const e=(0,f.Z)();return n.createElement(h,(0,r.Z)({key:String(e)},t))}},50855:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>p,contentTitle:()=>o,default:()=>b,frontMatter:()=>u,metadata:()=>d,toc:()=>s});var r=a(87462),n=(a(67294),a(3905)),l=a(31792),i=a(85162);const u={title:"Equity Undervalued Large Caps",description:"Get undervalued large cap Equities"},o=void 0,d={unversionedId:"platform/data_models/EquityUndervaluedLargeCaps",id:"platform/data_models/EquityUndervaluedLargeCaps",title:"Equity Undervalued Large Caps",description:"Get undervalued large cap Equities",source:"@site/content/platform/data_models/EquityUndervaluedLargeCaps.md",sourceDirName:"platform/data_models",slug:"/platform/data_models/EquityUndervaluedLargeCaps",permalink:"/platform/data_models/EquityUndervaluedLargeCaps",draft:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/platform/data_models/EquityUndervaluedLargeCaps.md",tags:[],version:"current",lastUpdatedBy:"montezdesousa",lastUpdatedAt:1707152475,formattedLastUpdatedAt:"Feb 5, 2024",frontMatter:{title:"Equity Undervalued Large Caps",description:"Get undervalued large cap Equities"},sidebar:"tutorialSidebar",previous:{title:"Equity Undervalued Growth",permalink:"/platform/data_models/EquityUndervaluedGrowth"},next:{title:"Equity Valuation Multiples",permalink:"/platform/data_models/EquityValuationMultiples"}},p={},s=[{value:"Implementation details",id:"implementation-details",level:2},{value:"Class names",id:"class-names",level:3},{value:"Import Statement",id:"import-statement",level:3},{value:"Parameters",id:"parameters",level:2},{value:"Data",id:"data",level:2}],m={toc:s},c="wrapper";function b(t){let{components:e,...a}=t;return(0,n.kt)(c,(0,r.Z)({},m,a,{components:e,mdxType:"MDXLayout"}),(0,n.kt)("hr",null),(0,n.kt)("h2",{id:"implementation-details"},"Implementation details"),(0,n.kt)("h3",{id:"class-names"},"Class names"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Model name"),(0,n.kt)("th",{parentName:"tr",align:null},"Parameters class"),(0,n.kt)("th",{parentName:"tr",align:null},"Data class"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"EquityUndervaluedLargeCaps")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"EquityUndervaluedLargeCapsQueryParams")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"EquityUndervaluedLargeCapsData"))))),(0,n.kt)("h3",{id:"import-statement"},"Import Statement"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-python"},"from openbb_core.provider.standard_models. import (\nEquityUndervaluedLargeCapsData,\nEquityUndervaluedLargeCapsQueryParams,\n)\n")),(0,n.kt)("h2",{id:"parameters"},"Parameters"),(0,n.kt)(l.Z,{mdxType:"Tabs"},(0,n.kt)(i.Z,{value:"standard",label:"Standard",mdxType:"TabItem"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Name"),(0,n.kt)("th",{parentName:"tr",align:null},"Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"),(0,n.kt)("th",{parentName:"tr",align:null},"Default"),(0,n.kt)("th",{parentName:"tr",align:null},"Optional"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"sort"),(0,n.kt)("td",{parentName:"tr",align:null},"str"),(0,n.kt)("td",{parentName:"tr",align:null},"Sort order. Possible values: 'asc', 'desc'. Default: 'desc'."),(0,n.kt)("td",{parentName:"tr",align:null},'"desc"'),(0,n.kt)("td",{parentName:"tr",align:null},"True")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"provider"),(0,n.kt)("td",{parentName:"tr",align:null},"Literal","['yfinance']"),(0,n.kt)("td",{parentName:"tr",align:null},"The provider to use for the query, by default None. If None, the provider specified in defaults is selected or 'yfinance' if there is no default."),(0,n.kt)("td",{parentName:"tr",align:null},'"yfinance"'),(0,n.kt)("td",{parentName:"tr",align:null},"True")))))),(0,n.kt)("h2",{id:"data"},"Data"),(0,n.kt)(l.Z,{mdxType:"Tabs"},(0,n.kt)(i.Z,{value:"standard",label:"Standard",mdxType:"TabItem"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Name"),(0,n.kt)("th",{parentName:"tr",align:null},"Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"provider"),(0,n.kt)("td",{parentName:"tr",align:null},"Literal","['openbb']"),(0,n.kt)("td",{parentName:"tr",align:null},"The data provider for the data.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"symbol"),(0,n.kt)("td",{parentName:"tr",align:null},"str"),(0,n.kt)("td",{parentName:"tr",align:null},"Symbol representing the entity requested in the data.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"name"),(0,n.kt)("td",{parentName:"tr",align:null},"str"),(0,n.kt)("td",{parentName:"tr",align:null},"Name of the entity.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"price"),(0,n.kt)("td",{parentName:"tr",align:null},"float"),(0,n.kt)("td",{parentName:"tr",align:null},"Last price.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"change"),(0,n.kt)("td",{parentName:"tr",align:null},"float"),(0,n.kt)("td",{parentName:"tr",align:null},"Change in price value.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"percent_change"),(0,n.kt)("td",{parentName:"tr",align:null},"float"),(0,n.kt)("td",{parentName:"tr",align:null},"Percent change.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"volume"),(0,n.kt)("td",{parentName:"tr",align:null},"float"),(0,n.kt)("td",{parentName:"tr",align:null},"The trading volume."))))),(0,n.kt)(i.Z,{value:"yfinance",label:"yfinance",mdxType:"TabItem"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Name"),(0,n.kt)("th",{parentName:"tr",align:null},"Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"provider"),(0,n.kt)("td",{parentName:"tr",align:null},"Literal","['openbb']"),(0,n.kt)("td",{parentName:"tr",align:null},"The data provider for the data.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"symbol"),(0,n.kt)("td",{parentName:"tr",align:null},"str"),(0,n.kt)("td",{parentName:"tr",align:null},"Symbol representing the entity requested in the data.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"name"),(0,n.kt)("td",{parentName:"tr",align:null},"str"),(0,n.kt)("td",{parentName:"tr",align:null},"Name of the entity.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"price"),(0,n.kt)("td",{parentName:"tr",align:null},"float"),(0,n.kt)("td",{parentName:"tr",align:null},"Last price.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"change"),(0,n.kt)("td",{parentName:"tr",align:null},"float"),(0,n.kt)("td",{parentName:"tr",align:null},"Change in price value.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"percent_change"),(0,n.kt)("td",{parentName:"tr",align:null},"float"),(0,n.kt)("td",{parentName:"tr",align:null},"Percent change.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"volume"),(0,n.kt)("td",{parentName:"tr",align:null},"float"),(0,n.kt)("td",{parentName:"tr",align:null},"The trading volume.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"market_cap"),(0,n.kt)("td",{parentName:"tr",align:null},"float"),(0,n.kt)("td",{parentName:"tr",align:null},"Market Cap.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"avg_volume_3_months"),(0,n.kt)("td",{parentName:"tr",align:null},"float"),(0,n.kt)("td",{parentName:"tr",align:null},"Average volume over the last 3 months in millions.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"pe_ratio_ttm"),(0,n.kt)("td",{parentName:"tr",align:null},"float"),(0,n.kt)("td",{parentName:"tr",align:null},"PE Ratio (TTM).")))))))}b.isMDXComponent=!0}}]);