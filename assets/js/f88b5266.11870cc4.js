"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[56374],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>f});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var u=a.createContext({}),i=function(e){var t=a.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},c=function(e){var t=i(e.components);return a.createElement(u.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,u=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=i(r),m=n,f=p["".concat(u,".").concat(m)]||p[m]||d[m]||o;return r?a.createElement(f,l(l({ref:t},c),{},{components:r})):a.createElement(f,l({ref:t},c))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,l=new Array(o);l[0]=m;var s={};for(var u in t)hasOwnProperty.call(t,u)&&(s[u]=t[u]);s.originalType=e,s[p]="string"==typeof e?e:n,l[1]=s;for(var i=2;i<o;i++)l[i]=r[i];return a.createElement.apply(null,l)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},85162:(e,t,r)=>{r.d(t,{Z:()=>l});var a=r(67294),n=r(86010);const o={tabItem:"tabItem_Ymn6"};function l(e){let{children:t,hidden:r,className:l}=e;return a.createElement("div",{role:"tabpanel",className:(0,n.Z)(o.tabItem,l),hidden:r},t)}},88828:(e,t,r)=>{r.d(t,{Z:()=>o});var a=r(67294),n=r(35742);function o(e){let{title:t}=e;return a.createElement(n.Z,null,a.createElement("title",null,t))}},31792:(e,t,r)=>{r.d(t,{Z:()=>w});var a=r(87462),n=r(67294),o=r(86010),l=r(12466),s=r(16550),u=r(91980),i=r(67392),c=r(50012);function p(e){return function(e){return n.Children.map(e,(e=>{if(!e||(0,n.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:r,attributes:a,default:n}}=e;return{value:t,label:r,attributes:a,default:n}}))}function d(e){const{values:t,children:r}=e;return(0,n.useMemo)((()=>{const e=t??p(r);return function(e){const t=(0,i.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,r])}function m(e){let{value:t,tabValues:r}=e;return r.some((e=>e.value===t))}function f(e){let{queryString:t=!1,groupId:r}=e;const a=(0,s.k6)(),o=function(e){let{queryString:t=!1,groupId:r}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:t,groupId:r});return[(0,u._X)(o),(0,n.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(a.location.search);t.set(o,e),a.replace({...a.location,search:t.toString()})}),[o,a])]}function b(e){const{defaultValue:t,queryString:r=!1,groupId:a}=e,o=d(e),[l,s]=(0,n.useState)((()=>function(e){let{defaultValue:t,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=r.find((e=>e.default))??r[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:o}))),[u,i]=f({queryString:r,groupId:a}),[p,b]=function(e){let{groupId:t}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,o]=(0,c.Nk)(r);return[a,(0,n.useCallback)((e=>{r&&o.set(e)}),[r,o])]}({groupId:a}),h=(()=>{const e=u??p;return m({value:e,tabValues:o})?e:null})();(0,n.useLayoutEffect)((()=>{h&&s(h)}),[h]);return{selectedValue:l,selectValue:(0,n.useCallback)((e=>{if(!m({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);s(e),i(e),b(e)}),[i,b,o]),tabValues:o}}var h=r(72389);const y={tabList:"tabList_TRJ7",tabItem:"tabItem_hGfb"};function v(e){let{className:t,block:r,selectedValue:u,selectValue:i,tabValues:c}=e;const p=[],{blockElementScrollPositionUntilNextRender:d}=(0,l.o5)(),{pathname:m}=(0,s.TH)(),f=e=>{const t=e.currentTarget,r=p.indexOf(t),a=c[r].value;a!==u&&(d(t),i(a))},b=e=>{let t=null;switch(e.key){case"Enter":f(e);break;case"ArrowRight":{const r=p.indexOf(e.currentTarget)+1;t=p[r]??p[0];break}case"ArrowLeft":{const r=p.indexOf(e.currentTarget)-1;t=p[r]??p[p.length-1];break}}t?.focus()};return n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("_group-tab list-none -ml-7 my-6 overflow-auto")},c.map((e=>{let{value:t,label:r,attributes:l}=e;return n.createElement("li",(0,a.Z)({role:"tab",tabIndex:u===t?0:-1,"aria-selected":u===t,key:t,ref:e=>p.push(e),onKeyDown:b,onClick:f},l,{className:(0,o.Z)("font-bold tracking-widest w-fit px-3 inline-flex py-1 uppercase border-b text-lg cursor-pointer",y.tabItem,l?.className,{"border-b-2 pointer-events-none":u===t,"border-b-2 text-[#669dcb] border-[#669dcb]":u===t&&m.startsWith("/terminal"),"border-b-2 text-[#FB923C] border-[#FB923C]":u===t&&m.startsWith("/sdk"),"border-grey-400 text-grey-400 hover:text-[#ffd4b1] hover:border-[#ffd4b1]":u!==t&&m.startsWith("/sdk"),"border-b-2 text-[#FB923C] border-[#FB923C]":u===t&&m.startsWith("/platform"),"border-grey-400 text-grey-400 hover:text-[#ffd4b1] hover:border-[#ffd4b1]":u!==t&&m.startsWith("/platform"),"border-grey-400 text-grey-400 hover:text-[#abd2f1] hover:border-[#abd2f1]":u!==t&&m.startsWith("/terminal")})}),r??t)})))}function k(e){let{lazy:t,children:r,selectedValue:a}=e;if(r=Array.isArray(r)?r:[r],t){const e=r.find((e=>e.props.value===a));return e?(0,n.cloneElement)(e,{className:"margin-top--md"}):null}return n.createElement("div",{className:"margin-top--md"},r.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==a}))))}function g(e){const t=b(e);return n.createElement("div",{className:(0,o.Z)("tabs-container",y.tabList)},n.createElement(v,(0,a.Z)({},e,t)),n.createElement(k,(0,a.Z)({},e,t)))}function w(e){const t=(0,h.Z)();return n.createElement(g,(0,a.Z)({key:String(t)},e))}},70893:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>b,frontMatter:()=>u,metadata:()=>c,toc:()=>d});var a=r(87462),n=(r(67294),r(3905)),o=r(88828),l=r(31792),s=r(85162);const u={title:"platforms",description:"This page contains a directory of all smart contract platforms such as Ethereum, Solana, Cosmos, Polkadot, and Kusama. The page provides source codes and instructs the use of functionalities in two formats model and chart.",keywords:["smart contract platforms","Ethereum","Solana","Cosmos","Polkadot","Kusama","model view","chart view","cryptocurrency","openbb.crypto.ov.platforms()","openbb.crypto.ov.platforms_chart()","CoinPaprika","dataframe export"]},i=void 0,c={unversionedId:"sdk/reference/crypto/ov/platforms",id:"sdk/reference/crypto/ov/platforms",title:"platforms",description:"This page contains a directory of all smart contract platforms such as Ethereum, Solana, Cosmos, Polkadot, and Kusama. The page provides source codes and instructs the use of functionalities in two formats model and chart.",source:"@site/content/sdk/reference/crypto/ov/platforms.md",sourceDirName:"sdk/reference/crypto/ov",slug:"/sdk/reference/crypto/ov/platforms",permalink:"/sdk/reference/crypto/ov/platforms",draft:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/sdk/reference/crypto/ov/platforms.md",tags:[],version:"current",lastUpdatedBy:"Danglewood",lastUpdatedAt:1710625624,formattedLastUpdatedAt:"Mar 16, 2024",frontMatter:{title:"platforms",description:"This page contains a directory of all smart contract platforms such as Ethereum, Solana, Cosmos, Polkadot, and Kusama. The page provides source codes and instructs the use of functionalities in two formats model and chart.",keywords:["smart contract platforms","Ethereum","Solana","Cosmos","Polkadot","Kusama","model view","chart view","cryptocurrency","openbb.crypto.ov.platforms()","openbb.crypto.ov.platforms_chart()","CoinPaprika","dataframe export"]},sidebar:"tutorialSidebar",previous:{title:"news",permalink:"/sdk/reference/crypto/ov/news"},next:{title:"products",permalink:"/sdk/reference/crypto/ov/products"}},p={},d=[{value:"Parameters",id:"parameters",level:2},{value:"Returns",id:"returns",level:2},{value:"Parameters",id:"parameters-1",level:2},{value:"Returns",id:"returns-1",level:2}],m={toc:d},f="wrapper";function b(e){let{components:t,...r}=e;return(0,n.kt)(f,(0,a.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)(o.Z,{title:"crypto.ov.platforms - Reference | OpenBB SDK Docs",mdxType:"HeadTitle"}),(0,n.kt)(l.Z,{mdxType:"Tabs"},(0,n.kt)(s.Z,{value:"model",label:"Model",default:!0,mdxType:"TabItem"},(0,n.kt)("p",null,"List all smart contract platforms like ethereum, solana, cosmos, polkadot, kusama ... ","[Source: CoinPaprika]"),(0,n.kt)("p",null,"Source Code: [",(0,n.kt)("a",{parentName:"p",href:"https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/cryptocurrency/overview/coinpaprika_model.py#L377"},"link"),"]"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-python",metastring:"wordwrap",wordwrap:!0},"openbb.crypto.ov.platforms()\n")),(0,n.kt)("hr",null),(0,n.kt)("h2",{id:"parameters"},"Parameters"),(0,n.kt)("p",null,"This function does not take any parameters."),(0,n.kt)("hr",null),(0,n.kt)("h2",{id:"returns"},"Returns"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"pd.DataFrame"),(0,n.kt)("td",{parentName:"tr",align:null},"index, platform_id")))),(0,n.kt)("hr",null)),(0,n.kt)(s.Z,{value:"view",label:"Chart",mdxType:"TabItem"},(0,n.kt)("p",null,"List all smart contract platforms like ethereum, solana, cosmos, polkadot, kusama."),(0,n.kt)("p",null,"Source Code: [",(0,n.kt)("a",{parentName:"p",href:"https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/cryptocurrency/overview/coinpaprika_view.py#L344"},"link"),"]"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-python",metastring:"wordwrap",wordwrap:!0},'openbb.crypto.ov.platforms_chart(export: str = "", sheet_name: Optional[str] = None)\n')),(0,n.kt)("hr",null),(0,n.kt)("h2",{id:"parameters-1"},"Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Name"),(0,n.kt)("th",{parentName:"tr",align:null},"Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"),(0,n.kt)("th",{parentName:"tr",align:null},"Default"),(0,n.kt)("th",{parentName:"tr",align:null},"Optional"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"export"),(0,n.kt)("td",{parentName:"tr",align:null},"str"),(0,n.kt)("td",{parentName:"tr",align:null},"Export dataframe data to csv,json,xlsx file"),(0,n.kt)("td",{parentName:"tr",align:null}),(0,n.kt)("td",{parentName:"tr",align:null},"True")))),(0,n.kt)("hr",null),(0,n.kt)("h2",{id:"returns-1"},"Returns"),(0,n.kt)("p",null,"This function does not return anything"),(0,n.kt)("hr",null))))}b.isMDXComponent=!0}}]);