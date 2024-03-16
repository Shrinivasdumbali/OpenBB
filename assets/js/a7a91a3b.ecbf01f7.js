"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[45601],{3905:(t,e,r)=>{r.d(e,{Zo:()=>s,kt:()=>k});var a=r(67294);function n(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function l(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,a)}return r}function i(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?l(Object(r),!0).forEach((function(e){n(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function o(t,e){if(null==t)return{};var r,a,n=function(t,e){if(null==t)return{};var r,a,n={},l=Object.keys(t);for(a=0;a<l.length;a++)r=l[a],e.indexOf(r)>=0||(n[r]=t[r]);return n}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)r=l[a],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(n[r]=t[r])}return n}var u=a.createContext({}),d=function(t){var e=a.useContext(u),r=e;return t&&(r="function"==typeof t?t(e):i(i({},e),t)),r},s=function(t){var e=d(t.components);return a.createElement(u.Provider,{value:e},t.children)},p="mdxType",m={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},c=a.forwardRef((function(t,e){var r=t.components,n=t.mdxType,l=t.originalType,u=t.parentName,s=o(t,["components","mdxType","originalType","parentName"]),p=d(r),c=n,k=p["".concat(u,".").concat(c)]||p[c]||m[c]||l;return r?a.createElement(k,i(i({ref:e},s),{},{components:r})):a.createElement(k,i({ref:e},s))}));function k(t,e){var r=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var l=r.length,i=new Array(l);i[0]=c;var o={};for(var u in e)hasOwnProperty.call(e,u)&&(o[u]=e[u]);o.originalType=t,o[p]="string"==typeof t?t:n,i[1]=o;for(var d=2;d<l;d++)i[d]=r[d];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}c.displayName="MDXCreateElement"},85162:(t,e,r)=>{r.d(e,{Z:()=>i});var a=r(67294),n=r(86010);const l={tabItem:"tabItem_Ymn6"};function i(t){let{children:e,hidden:r,className:i}=t;return a.createElement("div",{role:"tabpanel",className:(0,n.Z)(l.tabItem,i),hidden:r},e)}},88828:(t,e,r)=>{r.d(e,{Z:()=>l});var a=r(67294),n=r(35742);function l(t){let{title:e}=t;return a.createElement(n.Z,null,a.createElement("title",null,e))}},31792:(t,e,r)=>{r.d(e,{Z:()=>v});var a=r(87462),n=r(67294),l=r(86010),i=r(12466),o=r(16550),u=r(91980),d=r(67392),s=r(50012);function p(t){return function(t){return n.Children.map(t,(t=>{if(!t||(0,n.isValidElement)(t)&&function(t){const{props:e}=t;return!!e&&"object"==typeof e&&"value"in e}(t))return t;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof t.type?t.type:t.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(t).map((t=>{let{props:{value:e,label:r,attributes:a,default:n}}=t;return{value:e,label:r,attributes:a,default:n}}))}function m(t){const{values:e,children:r}=t;return(0,n.useMemo)((()=>{const t=e??p(r);return function(t){const e=(0,d.l)(t,((t,e)=>t.value===e.value));if(e.length>0)throw new Error(`Docusaurus error: Duplicate values "${e.map((t=>t.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(t),t}),[e,r])}function c(t){let{value:e,tabValues:r}=t;return r.some((t=>t.value===e))}function k(t){let{queryString:e=!1,groupId:r}=t;const a=(0,o.k6)(),l=function(t){let{queryString:e=!1,groupId:r}=t;if("string"==typeof e)return e;if(!1===e)return null;if(!0===e&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:e,groupId:r});return[(0,u._X)(l),(0,n.useCallback)((t=>{if(!l)return;const e=new URLSearchParams(a.location.search);e.set(l,t),a.replace({...a.location,search:e.toString()})}),[l,a])]}function h(t){const{defaultValue:e,queryString:r=!1,groupId:a}=t,l=m(t),[i,o]=(0,n.useState)((()=>function(t){let{defaultValue:e,tabValues:r}=t;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(e){if(!c({value:e,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${e}" but none of its children has the corresponding value. Available values are: ${r.map((t=>t.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return e}const a=r.find((t=>t.default))??r[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:e,tabValues:l}))),[u,d]=k({queryString:r,groupId:a}),[p,h]=function(t){let{groupId:e}=t;const r=function(t){return t?`docusaurus.tab.${t}`:null}(e),[a,l]=(0,s.Nk)(r);return[a,(0,n.useCallback)((t=>{r&&l.set(t)}),[r,l])]}({groupId:a}),b=(()=>{const t=u??p;return c({value:t,tabValues:l})?t:null})();(0,n.useLayoutEffect)((()=>{b&&o(b)}),[b]);return{selectedValue:i,selectValue:(0,n.useCallback)((t=>{if(!c({value:t,tabValues:l}))throw new Error(`Can't select invalid tab value=${t}`);o(t),d(t),h(t)}),[d,h,l]),tabValues:l}}var b=r(72389);const g={tabList:"tabList_TRJ7",tabItem:"tabItem_hGfb"};function y(t){let{className:e,block:r,selectedValue:u,selectValue:d,tabValues:s}=t;const p=[],{blockElementScrollPositionUntilNextRender:m}=(0,i.o5)(),{pathname:c}=(0,o.TH)(),k=t=>{const e=t.currentTarget,r=p.indexOf(e),a=s[r].value;a!==u&&(m(e),d(a))},h=t=>{let e=null;switch(t.key){case"Enter":k(t);break;case"ArrowRight":{const r=p.indexOf(t.currentTarget)+1;e=p[r]??p[0];break}case"ArrowLeft":{const r=p.indexOf(t.currentTarget)-1;e=p[r]??p[p.length-1];break}}e?.focus()};return n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("_group-tab list-none -ml-7 my-6 overflow-auto")},s.map((t=>{let{value:e,label:r,attributes:i}=t;return n.createElement("li",(0,a.Z)({role:"tab",tabIndex:u===e?0:-1,"aria-selected":u===e,key:e,ref:t=>p.push(t),onKeyDown:h,onClick:k},i,{className:(0,l.Z)("font-bold tracking-widest w-fit px-3 inline-flex py-1 uppercase border-b text-lg cursor-pointer",g.tabItem,i?.className,{"border-b-2 pointer-events-none":u===e,"border-b-2 text-[#669dcb] border-[#669dcb]":u===e&&c.startsWith("/terminal"),"border-b-2 text-[#FB923C] border-[#FB923C]":u===e&&c.startsWith("/sdk"),"border-grey-400 text-grey-400 hover:text-[#ffd4b1] hover:border-[#ffd4b1]":u!==e&&c.startsWith("/sdk"),"border-b-2 text-[#FB923C] border-[#FB923C]":u===e&&c.startsWith("/platform"),"border-grey-400 text-grey-400 hover:text-[#ffd4b1] hover:border-[#ffd4b1]":u!==e&&c.startsWith("/platform"),"border-grey-400 text-grey-400 hover:text-[#abd2f1] hover:border-[#abd2f1]":u!==e&&c.startsWith("/terminal")})}),r??e)})))}function f(t){let{lazy:e,children:r,selectedValue:a}=t;if(r=Array.isArray(r)?r:[r],e){const t=r.find((t=>t.props.value===a));return t?(0,n.cloneElement)(t,{className:"margin-top--md"}):null}return n.createElement("div",{className:"margin-top--md"},r.map(((t,e)=>(0,n.cloneElement)(t,{key:e,hidden:t.props.value!==a}))))}function N(t){const e=h(t);return n.createElement("div",{className:(0,l.Z)("tabs-container",g.tabList)},n.createElement(y,(0,a.Z)({},t,e)),n.createElement(f,(0,a.Z)({},t,e)))}function v(t){const e=(0,b.Z)();return n.createElement(N,(0,a.Z)({key:String(e)},t))}},3418:(t,e,r)=>{r.r(e),r.d(e,{assets:()=>p,contentTitle:()=>d,default:()=>h,frontMatter:()=>u,metadata:()=>s,toc:()=>m});var a=r(87462),n=(r(67294),r(3905)),l=r(88828),i=r(31792),o=r(85162);const u={title:"search",description:"Learn how to perform an equity search to find a company or stock ticker.  Understand the query parameters, such as search by ticker symbol and search provider.  Explore the various filters available, including market cap, price, beta, volume,  dividend, ETF, sector, industry, country, and exchange. Limit and structure the  results accordingly. Get access to the returned data, provider information, warnings,  chart, and metadata.",keywords:["equity search","company search","stock ticker search","query parameter","search by ticker symbol","search provider","market cap filter","price filter","beta filter","volume filter","dividend filter","ETF filter","sector filter","industry filter","country filter","exchange filter","limit results","data structure","results","provider","warnings","chart","metadata","symbol","name","dpm_name","post_station","market cap","sector","industry","beta","price","last annual dividend","volume","exchange","exchange_name","country","is_etf","actively trading","cik"]},d=void 0,s={unversionedId:"platform/reference/equity/search",id:"platform/reference/equity/search",title:"search",description:"Learn how to perform an equity search to find a company or stock ticker.  Understand the query parameters, such as search by ticker symbol and search provider.  Explore the various filters available, including market cap, price, beta, volume,  dividend, ETF, sector, industry, country, and exchange. Limit and structure the  results accordingly. Get access to the returned data, provider information, warnings,  chart, and metadata.",source:"@site/content/platform/reference/equity/search.md",sourceDirName:"platform/reference/equity",slug:"/platform/reference/equity/search",permalink:"/platform/reference/equity/search",draft:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/platform/reference/equity/search.md",tags:[],version:"current",lastUpdatedBy:"Danglewood",lastUpdatedAt:1710625624,formattedLastUpdatedAt:"Mar 16, 2024",frontMatter:{title:"search",description:"Learn how to perform an equity search to find a company or stock ticker.  Understand the query parameters, such as search by ticker symbol and search provider.  Explore the various filters available, including market cap, price, beta, volume,  dividend, ETF, sector, industry, country, and exchange. Limit and structure the  results accordingly. Get access to the returned data, provider information, warnings,  chart, and metadata.",keywords:["equity search","company search","stock ticker search","query parameter","search by ticker symbol","search provider","market cap filter","price filter","beta filter","volume filter","dividend filter","ETF filter","sector filter","industry filter","country filter","exchange filter","limit results","data structure","results","provider","warnings","chart","metadata","symbol","name","dpm_name","post_station","market cap","sector","industry","beta","price","last annual dividend","volume","exchange","exchange_name","country","is_etf","actively trading","cik"]},sidebar:"tutorialSidebar",previous:{title:"screener",permalink:"/platform/reference/equity/screener"},next:{title:"Regulators",permalink:"/platform/reference/regulators/"}},p={},m=[{value:"Examples",id:"examples",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Returns",id:"returns",level:2},{value:"Data",id:"data",level:2}],c={toc:m},k="wrapper";function h(t){let{components:e,...r}=t;return(0,n.kt)(k,(0,a.Z)({},c,r,{components:e,mdxType:"MDXLayout"}),(0,n.kt)(l.Z,{title:"equity/search - Reference | OpenBB Platform Docs",mdxType:"HeadTitle"}),(0,n.kt)("p",null,"Search for stock symbol, CIK, LEI, or company name."),(0,n.kt)("h2",{id:"examples"},"Examples"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-python"},"from openbb import obb\nobb.equity.search(provider='intrinio')\n")),(0,n.kt)("hr",null),(0,n.kt)("h2",{id:"parameters"},"Parameters"),(0,n.kt)(i.Z,{mdxType:"Tabs"},(0,n.kt)(o.Z,{value:"standard",label:"standard",mdxType:"TabItem"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Name"),(0,n.kt)("th",{parentName:"tr",align:null},"Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"),(0,n.kt)("th",{parentName:"tr",align:null},"Default"),(0,n.kt)("th",{parentName:"tr",align:null},"Optional"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"query"),(0,n.kt)("td",{parentName:"tr",align:null},"str"),(0,n.kt)("td",{parentName:"tr",align:null},"Search query."),(0,n.kt)("td",{parentName:"tr",align:null}),(0,n.kt)("td",{parentName:"tr",align:null},"True")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"is_symbol"),(0,n.kt)("td",{parentName:"tr",align:null},"bool"),(0,n.kt)("td",{parentName:"tr",align:null},"Whether to search by ticker symbol."),(0,n.kt)("td",{parentName:"tr",align:null},"False"),(0,n.kt)("td",{parentName:"tr",align:null},"True")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"use_cache"),(0,n.kt)("td",{parentName:"tr",align:null},"bool"),(0,n.kt)("td",{parentName:"tr",align:null},"Whether to use the cache or not."),(0,n.kt)("td",{parentName:"tr",align:null},"True"),(0,n.kt)("td",{parentName:"tr",align:null},"True")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"provider"),(0,n.kt)("td",{parentName:"tr",align:null},"Literal","['intrinio', 'sec']"),(0,n.kt)("td",{parentName:"tr",align:null},"The provider to use for the query, by default None. If None, the provider specified in defaults is selected or 'intrinio' if there is no default."),(0,n.kt)("td",{parentName:"tr",align:null},"intrinio"),(0,n.kt)("td",{parentName:"tr",align:null},"True"))))),(0,n.kt)(o.Z,{value:"intrinio",label:"intrinio",mdxType:"TabItem"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Name"),(0,n.kt)("th",{parentName:"tr",align:null},"Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"),(0,n.kt)("th",{parentName:"tr",align:null},"Default"),(0,n.kt)("th",{parentName:"tr",align:null},"Optional"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"query"),(0,n.kt)("td",{parentName:"tr",align:null},"str"),(0,n.kt)("td",{parentName:"tr",align:null},"Search query."),(0,n.kt)("td",{parentName:"tr",align:null}),(0,n.kt)("td",{parentName:"tr",align:null},"True")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"is_symbol"),(0,n.kt)("td",{parentName:"tr",align:null},"bool"),(0,n.kt)("td",{parentName:"tr",align:null},"Whether to search by ticker symbol."),(0,n.kt)("td",{parentName:"tr",align:null},"False"),(0,n.kt)("td",{parentName:"tr",align:null},"True")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"use_cache"),(0,n.kt)("td",{parentName:"tr",align:null},"bool"),(0,n.kt)("td",{parentName:"tr",align:null},"Whether to use the cache or not."),(0,n.kt)("td",{parentName:"tr",align:null},"True"),(0,n.kt)("td",{parentName:"tr",align:null},"True")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"provider"),(0,n.kt)("td",{parentName:"tr",align:null},"Literal","['intrinio', 'sec']"),(0,n.kt)("td",{parentName:"tr",align:null},"The provider to use for the query, by default None. If None, the provider specified in defaults is selected or 'intrinio' if there is no default."),(0,n.kt)("td",{parentName:"tr",align:null},"intrinio"),(0,n.kt)("td",{parentName:"tr",align:null},"True")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"active"),(0,n.kt)("td",{parentName:"tr",align:null},"bool"),(0,n.kt)("td",{parentName:"tr",align:null},"When true, return companies that are actively traded (having stock prices within the past 14 days). When false, return companies that are not actively traded or never have been traded."),(0,n.kt)("td",{parentName:"tr",align:null},"True"),(0,n.kt)("td",{parentName:"tr",align:null},"True")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"limit"),(0,n.kt)("td",{parentName:"tr",align:null},"int"),(0,n.kt)("td",{parentName:"tr",align:null},"The number of data entries to return."),(0,n.kt)("td",{parentName:"tr",align:null},"10000"),(0,n.kt)("td",{parentName:"tr",align:null},"True"))))),(0,n.kt)(o.Z,{value:"sec",label:"sec",mdxType:"TabItem"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Name"),(0,n.kt)("th",{parentName:"tr",align:null},"Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"),(0,n.kt)("th",{parentName:"tr",align:null},"Default"),(0,n.kt)("th",{parentName:"tr",align:null},"Optional"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"query"),(0,n.kt)("td",{parentName:"tr",align:null},"str"),(0,n.kt)("td",{parentName:"tr",align:null},"Search query."),(0,n.kt)("td",{parentName:"tr",align:null}),(0,n.kt)("td",{parentName:"tr",align:null},"True")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"is_symbol"),(0,n.kt)("td",{parentName:"tr",align:null},"bool"),(0,n.kt)("td",{parentName:"tr",align:null},"Whether to search by ticker symbol."),(0,n.kt)("td",{parentName:"tr",align:null},"False"),(0,n.kt)("td",{parentName:"tr",align:null},"True")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"use_cache"),(0,n.kt)("td",{parentName:"tr",align:null},"bool"),(0,n.kt)("td",{parentName:"tr",align:null},"Whether to use the cache or not."),(0,n.kt)("td",{parentName:"tr",align:null},"True"),(0,n.kt)("td",{parentName:"tr",align:null},"True")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"provider"),(0,n.kt)("td",{parentName:"tr",align:null},"Literal","['intrinio', 'sec']"),(0,n.kt)("td",{parentName:"tr",align:null},"The provider to use for the query, by default None. If None, the provider specified in defaults is selected or 'intrinio' if there is no default."),(0,n.kt)("td",{parentName:"tr",align:null},"intrinio"),(0,n.kt)("td",{parentName:"tr",align:null},"True")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"is_fund"),(0,n.kt)("td",{parentName:"tr",align:null},"bool"),(0,n.kt)("td",{parentName:"tr",align:null},"Whether to direct the search to the list of mutual funds and ETFs."),(0,n.kt)("td",{parentName:"tr",align:null},"False"),(0,n.kt)("td",{parentName:"tr",align:null},"True")))))),(0,n.kt)("hr",null),(0,n.kt)("h2",{id:"returns"},"Returns"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-python",metastring:"wordwrap",wordwrap:!0},"OBBject\n    results : EquitySearch\n        Serializable results.\n    provider : Literal['intrinio', 'sec']\n        Provider name.\n    warnings : Optional[List[Warning_]]\n        List of warnings.\n    chart : Optional[Chart]\n        Chart object.\n    extra : Dict[str, Any]\n        Extra info.\n\n")),(0,n.kt)("hr",null),(0,n.kt)("h2",{id:"data"},"Data"),(0,n.kt)(i.Z,{mdxType:"Tabs"},(0,n.kt)(o.Z,{value:"standard",label:"standard",mdxType:"TabItem"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Name"),(0,n.kt)("th",{parentName:"tr",align:null},"Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"symbol"),(0,n.kt)("td",{parentName:"tr",align:null},"str"),(0,n.kt)("td",{parentName:"tr",align:null},"Symbol representing the entity requested in the data.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"name"),(0,n.kt)("td",{parentName:"tr",align:null},"str"),(0,n.kt)("td",{parentName:"tr",align:null},"Name of the company."))))),(0,n.kt)(o.Z,{value:"intrinio",label:"intrinio",mdxType:"TabItem"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Name"),(0,n.kt)("th",{parentName:"tr",align:null},"Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"symbol"),(0,n.kt)("td",{parentName:"tr",align:null},"str"),(0,n.kt)("td",{parentName:"tr",align:null},"Symbol representing the entity requested in the data.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"name"),(0,n.kt)("td",{parentName:"tr",align:null},"str"),(0,n.kt)("td",{parentName:"tr",align:null},"Name of the company.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"cik"),(0,n.kt)("td",{parentName:"tr",align:null},"str"),(0,n.kt)("td",{parentName:"tr",align:null})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"lei"),(0,n.kt)("td",{parentName:"tr",align:null},"str"),(0,n.kt)("td",{parentName:"tr",align:null},"The Legal Entity Identifier (LEI) of the company.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"intrinio_id"),(0,n.kt)("td",{parentName:"tr",align:null},"str"),(0,n.kt)("td",{parentName:"tr",align:null},"The Intrinio ID of the company."))))),(0,n.kt)(o.Z,{value:"sec",label:"sec",mdxType:"TabItem"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Name"),(0,n.kt)("th",{parentName:"tr",align:null},"Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"symbol"),(0,n.kt)("td",{parentName:"tr",align:null},"str"),(0,n.kt)("td",{parentName:"tr",align:null},"Symbol representing the entity requested in the data.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"name"),(0,n.kt)("td",{parentName:"tr",align:null},"str"),(0,n.kt)("td",{parentName:"tr",align:null},"Name of the company.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"cik"),(0,n.kt)("td",{parentName:"tr",align:null},"str"),(0,n.kt)("td",{parentName:"tr",align:null},"Central Index Key")))))))}h.isMDXComponent=!0}}]);