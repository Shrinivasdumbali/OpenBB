"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[47197],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>h});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var i=a.createContext({}),u=function(e){var t=a.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},d=function(e){var t=u(e.components);return a.createElement(i.Provider,{value:t},e.children)},p="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),p=u(r),m=n,h=p["".concat(i,".").concat(m)]||p[m]||c[m]||o;return r?a.createElement(h,l(l({ref:t},d),{},{components:r})):a.createElement(h,l({ref:t},d))}));function h(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,l=new Array(o);l[0]=m;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s[p]="string"==typeof e?e:n,l[1]=s;for(var u=2;u<o;u++)l[u]=r[u];return a.createElement.apply(null,l)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},85162:(e,t,r)=>{r.d(t,{Z:()=>l});var a=r(67294),n=r(86010);const o={tabItem:"tabItem_Ymn6"};function l(e){let{children:t,hidden:r,className:l}=e;return a.createElement("div",{role:"tabpanel",className:(0,n.Z)(o.tabItem,l),hidden:r},t)}},88828:(e,t,r)=>{r.d(t,{Z:()=>o});var a=r(67294),n=r(35742);function o(e){let{title:t}=e;return a.createElement(n.Z,null,a.createElement("title",null,t))}},31792:(e,t,r)=>{r.d(t,{Z:()=>N});var a=r(87462),n=r(67294),o=r(86010),l=r(12466),s=r(16550),i=r(91980),u=r(67392),d=r(50012);function p(e){return function(e){return n.Children.map(e,(e=>{if(!e||(0,n.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:r,attributes:a,default:n}}=e;return{value:t,label:r,attributes:a,default:n}}))}function c(e){const{values:t,children:r}=e;return(0,n.useMemo)((()=>{const e=t??p(r);return function(e){const t=(0,u.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,r])}function m(e){let{value:t,tabValues:r}=e;return r.some((e=>e.value===t))}function h(e){let{queryString:t=!1,groupId:r}=e;const a=(0,s.k6)(),o=function(e){let{queryString:t=!1,groupId:r}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:t,groupId:r});return[(0,i._X)(o),(0,n.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(a.location.search);t.set(o,e),a.replace({...a.location,search:t.toString()})}),[o,a])]}function f(e){const{defaultValue:t,queryString:r=!1,groupId:a}=e,o=c(e),[l,s]=(0,n.useState)((()=>function(e){let{defaultValue:t,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=r.find((e=>e.default))??r[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:o}))),[i,u]=h({queryString:r,groupId:a}),[p,f]=function(e){let{groupId:t}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,o]=(0,d.Nk)(r);return[a,(0,n.useCallback)((e=>{r&&o.set(e)}),[r,o])]}({groupId:a}),b=(()=>{const e=i??p;return m({value:e,tabValues:o})?e:null})();(0,n.useLayoutEffect)((()=>{b&&s(b)}),[b]);return{selectedValue:l,selectValue:(0,n.useCallback)((e=>{if(!m({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);s(e),u(e),f(e)}),[u,f,o]),tabValues:o}}var b=r(72389);const y={tabList:"tabList_TRJ7",tabItem:"tabItem_hGfb"};function g(e){let{className:t,block:r,selectedValue:i,selectValue:u,tabValues:d}=e;const p=[],{blockElementScrollPositionUntilNextRender:c}=(0,l.o5)(),{pathname:m}=(0,s.TH)(),h=e=>{const t=e.currentTarget,r=p.indexOf(t),a=d[r].value;a!==i&&(c(t),u(a))},f=e=>{let t=null;switch(e.key){case"Enter":h(e);break;case"ArrowRight":{const r=p.indexOf(e.currentTarget)+1;t=p[r]??p[0];break}case"ArrowLeft":{const r=p.indexOf(e.currentTarget)-1;t=p[r]??p[p.length-1];break}}t?.focus()};return n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("_group-tab list-none -ml-7 my-6 overflow-auto")},d.map((e=>{let{value:t,label:r,attributes:l}=e;return n.createElement("li",(0,a.Z)({role:"tab",tabIndex:i===t?0:-1,"aria-selected":i===t,key:t,ref:e=>p.push(e),onKeyDown:f,onClick:h},l,{className:(0,o.Z)("font-bold tracking-widest w-fit px-3 inline-flex py-1 uppercase border-b text-lg cursor-pointer",y.tabItem,l?.className,{"border-b-2 pointer-events-none":i===t,"border-b-2 text-[#669dcb] border-[#669dcb]":i===t&&m.startsWith("/terminal"),"border-b-2 text-[#FB923C] border-[#FB923C]":i===t&&m.startsWith("/sdk"),"border-grey-400 text-grey-400 hover:text-[#ffd4b1] hover:border-[#ffd4b1]":i!==t&&m.startsWith("/sdk"),"border-b-2 text-[#FB923C] border-[#FB923C]":i===t&&m.startsWith("/platform"),"border-grey-400 text-grey-400 hover:text-[#ffd4b1] hover:border-[#ffd4b1]":i!==t&&m.startsWith("/platform"),"border-grey-400 text-grey-400 hover:text-[#abd2f1] hover:border-[#abd2f1]":i!==t&&m.startsWith("/terminal")})}),r??t)})))}function v(e){let{lazy:t,children:r,selectedValue:a}=e;if(r=Array.isArray(r)?r:[r],t){const e=r.find((e=>e.props.value===a));return e?(0,n.cloneElement)(e,{className:"margin-top--md"}):null}return n.createElement("div",{className:"margin-top--md"},r.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==a}))))}function k(e){const t=f(e);return n.createElement("div",{className:(0,o.Z)("tabs-container",y.tabList)},n.createElement(g,(0,a.Z)({},e,t)),n.createElement(v,(0,a.Z)({},e,t)))}function N(e){const t=(0,b.Z)();return n.createElement(k,(0,a.Z)({key:String(t)},e))}},84445:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>u,default:()=>f,frontMatter:()=>i,metadata:()=>d,toc:()=>c});var a=r(87462),n=(r(67294),r(3905)),o=r(88828),l=r(31792),s=r(85162);const i={title:"short_interest",description:"Learn how to get reported Short Volume and Days to Cover data using the OBB.equity.shorts.short_interest function in Python. This page provides information on the parameters, returns, and available data fields such as settlement date, symbol, issue name, market class, current short position, previous short position, average daily volume, days to cover, change, and change percentage.",keywords:["Get reported Short Volume and Days to Cover data","OBB.equity.shorts.short_interest","symbol","provider","Short Volume","Days to Cover","data","parameters","returns","data","settlement_date","symbol","issue_name","market_class","current_short_position","previous_short_position","avg_daily_volume","days_to_cover","change","change_pct"]},u=void 0,d={unversionedId:"platform/reference/equity/shorts/short_interest",id:"platform/reference/equity/shorts/short_interest",title:"short_interest",description:"Learn how to get reported Short Volume and Days to Cover data using the OBB.equity.shorts.short_interest function in Python. This page provides information on the parameters, returns, and available data fields such as settlement date, symbol, issue name, market class, current short position, previous short position, average daily volume, days to cover, change, and change percentage.",source:"@site/content/platform/reference/equity/shorts/short_interest.md",sourceDirName:"platform/reference/equity/shorts",slug:"/platform/reference/equity/shorts/short_interest",permalink:"/platform/reference/equity/shorts/short_interest",draft:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/platform/reference/equity/shorts/short_interest.md",tags:[],version:"current",frontMatter:{title:"short_interest",description:"Learn how to get reported Short Volume and Days to Cover data using the OBB.equity.shorts.short_interest function in Python. This page provides information on the parameters, returns, and available data fields such as settlement date, symbol, issue name, market class, current short position, previous short position, average daily volume, days to cover, change, and change percentage.",keywords:["Get reported Short Volume and Days to Cover data","OBB.equity.shorts.short_interest","symbol","provider","Short Volume","Days to Cover","data","parameters","returns","data","settlement_date","symbol","issue_name","market_class","current_short_position","previous_short_position","avg_daily_volume","days_to_cover","change","change_pct"]},sidebar:"tutorialSidebar",previous:{title:"fails_to_deliver",permalink:"/platform/reference/equity/shorts/fails_to_deliver"},next:{title:"short_volume",permalink:"/platform/reference/equity/shorts/short_volume"}},p={},c=[{value:"Example",id:"example",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Returns",id:"returns",level:2},{value:"Data",id:"data",level:2}],m={toc:c},h="wrapper";function f(e){let{components:t,...r}=e;return(0,n.kt)(h,(0,a.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)(o.Z,{title:"equity /shorts/short_interest - Reference | OpenBB Platform Docs",mdxType:"HeadTitle"}),(0,n.kt)("p",null,"Get reported Short Volume and Days to Cover data."),(0,n.kt)("h2",{id:"example"},"Example"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-python"},"from openbb import obb\nobb.equity.shorts.short_interest()\n")),(0,n.kt)("hr",null),(0,n.kt)("h2",{id:"parameters"},"Parameters"),(0,n.kt)(l.Z,{mdxType:"Tabs"},(0,n.kt)(s.Z,{value:"standard",label:"Standard",mdxType:"TabItem"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Name"),(0,n.kt)("th",{parentName:"tr",align:null},"Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"),(0,n.kt)("th",{parentName:"tr",align:null},"Default"),(0,n.kt)("th",{parentName:"tr",align:null},"Optional"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"symbol"),(0,n.kt)("td",{parentName:"tr",align:null},"Union[str, List","[str]","]"),(0,n.kt)("td",{parentName:"tr",align:null},"Symbol to get data for."),(0,n.kt)("td",{parentName:"tr",align:null},"None"),(0,n.kt)("td",{parentName:"tr",align:null},"True")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"provider"),(0,n.kt)("td",{parentName:"tr",align:null},"Literal","['finra']"),(0,n.kt)("td",{parentName:"tr",align:null},"The provider to use for the query, by default None. If None, the provider specified in defaults is selected or 'finra' if there is no default."),(0,n.kt)("td",{parentName:"tr",align:null},'"finra"'),(0,n.kt)("td",{parentName:"tr",align:null},"True")))))),(0,n.kt)("hr",null),(0,n.kt)("h2",{id:"returns"},"Returns"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-python",metastring:"wordwrap",wordwrap:!0},"OBBject\n    results : List[EquityShortInterest]\n        Serializable results.\n\n    provider : Optional[Literal['finra']]\n        Provider name.\n\n    warnings : Optional[List[Warning_]]\n        List of warnings.\n\n    chart : Optional[Chart]\n        Chart object.\n\n    extra: Dict[str, Any]\n        Extra info.\n")),(0,n.kt)("hr",null),(0,n.kt)("h2",{id:"data"},"Data"),(0,n.kt)(l.Z,{mdxType:"Tabs"},(0,n.kt)(s.Z,{value:"standard",label:"Standard",mdxType:"TabItem"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Name"),(0,n.kt)("th",{parentName:"tr",align:null},"Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"provider"),(0,n.kt)("td",{parentName:"tr",align:null},"Literal","['openbb']"),(0,n.kt)("td",{parentName:"tr",align:null},"The data provider for the data.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"settlement_date"),(0,n.kt)("td",{parentName:"tr",align:null},"date"),(0,n.kt)("td",{parentName:"tr",align:null},"The mid-month short interest report is based on short positions held by members on the settlement date of the 15th of each month. If the 15th falls on a weekend or another non-settlement date, the designated settlement date will be the previous business day on which transactions settled. The end-of-month short interest report is based on short positions held on the last business day of the month on which transactions settle. Once the short position reports are received, the short interest data is compiled for each equity security and provided for publication on the 7th business day after the reporting settlement date.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"symbol"),(0,n.kt)("td",{parentName:"tr",align:null},"str"),(0,n.kt)("td",{parentName:"tr",align:null},"Symbol representing the entity requested in the data.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"issue_name"),(0,n.kt)("td",{parentName:"tr",align:null},"str"),(0,n.kt)("td",{parentName:"tr",align:null},"Unique identifier of the issue.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"market_class"),(0,n.kt)("td",{parentName:"tr",align:null},"str"),(0,n.kt)("td",{parentName:"tr",align:null},"Primary listing market.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"current_short_position"),(0,n.kt)("td",{parentName:"tr",align:null},"float"),(0,n.kt)("td",{parentName:"tr",align:null},"The total number of shares in the issue that are reflected on the books and records of the reporting firms as short as defined by Rule 200 of Regulation SHO as of the current cycle\u2019s designated settlement date.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"previous_short_position"),(0,n.kt)("td",{parentName:"tr",align:null},"float"),(0,n.kt)("td",{parentName:"tr",align:null},"The total number of shares in the issue that are reflected on the books and records of the reporting firms as short as defined by Rule 200 of Regulation SHO as of the previous cycle\u2019s designated settlement date.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"avg_daily_volume"),(0,n.kt)("td",{parentName:"tr",align:null},"float"),(0,n.kt)("td",{parentName:"tr",align:null},"Total Volume or Adjusted Volume in case of splits / Total trade days between (previous settlement date + 1) to (current settlement date). The NULL values are translated as zero.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"days_to_cover"),(0,n.kt)("td",{parentName:"tr",align:null},"float"),(0,n.kt)("td",{parentName:"tr",align:null},"The number of days of average share volume it would require to buy all of the shares that were sold short during the reporting cycle. Formula: Short Interest / Average Daily Share Volume, Rounded to Hundredths. 1.00 will be displayed for any values equal or less than 1 (i.e., Average Daily Share is equal to or greater than Short Interest). N/A will be displayed If the days to cover is Zero (i.e., Average Daily Share Volume is Zero).")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"change"),(0,n.kt)("td",{parentName:"tr",align:null},"float"),(0,n.kt)("td",{parentName:"tr",align:null},"Change in Shares Short from Previous Cycle: Difference in short interest between the current cycle and the previous cycle.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"change_pct"),(0,n.kt)("td",{parentName:"tr",align:null},"float"),(0,n.kt)("td",{parentName:"tr",align:null},"Change in Shares Short from Previous Cycle as a percent.")))))))}f.isMDXComponent=!0}}]);