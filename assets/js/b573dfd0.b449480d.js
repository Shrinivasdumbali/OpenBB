"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[78135],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>g});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),d=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=d(e.components);return r.createElement(l.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=d(n),h=o,g=p["".concat(l,".").concat(h)]||p[h]||u[h]||i;return n?r.createElement(g,a(a({ref:t},c),{},{components:n})):r.createElement(g,a({ref:t},c))}));function g(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:o,a[1]=s;for(var d=2;d<i;d++)a[d]=n[d];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}h.displayName="MDXCreateElement"},88828:(e,t,n)=>{n.d(t,{Z:()=>i});var r=n(67294),o=n(35742);function i(e){let{title:t}=e;return r.createElement(o.Z,null,r.createElement("title",null,t))}},20630:(e,t,n)=>{n.d(t,{Z:()=>i});var r=n(67294),o=n(15569);function i(e){let{youtubeLink:t,videoLegend:n="Tutorial video"}=e;const[i,a]=(0,r.useState)(!0);return r.createElement("div",{style:{textAlign:"center"}},r.createElement("div",{className:"flex flex-col sm:flex-row items-center justify-center"},r.createElement("p",null,n),r.createElement("div",{style:{transform:"scale(0.7)"}},r.createElement(o.Toggle,{isOn:i,handleChange:()=>a(!i)}))),i&&r.createElement("div",{style:{position:"relative",paddingBottom:"56.25%",height:"0",overflow:"hidden",maxWidth:"100%"}},r.createElement("iframe",{id:t,style:{position:"absolute",top:"0",left:"0",width:"100%",height:"100%",display:"block",margin:"0 auto"},src:t,title:"YouTube video player",frameBorder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",allowFullScreen:!0})))}},16982:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>g,frontMatter:()=>s,metadata:()=>d,toc:()=>p});var r=n(87462),o=(n(67294),n(3905)),i=n(88828),a=n(20630);const s={title:"Grouping Mechanism",sidebar_position:1,description:"Learn about the powerful grouping mechanism in OpenBB Terminal Pro. Understand how widgets can be grouped based on equity categories and tickers, and also how the watchlist widget's unique grouping property works.",keywords:["Grouping","Widgets","Ticker","Symbol","Dashboard","Watchlist","Relationship"]},l=void 0,d={unversionedId:"pro/dashboards/grouping",id:"pro/dashboards/grouping",title:"Grouping Mechanism",description:"Learn about the powerful grouping mechanism in OpenBB Terminal Pro. Understand how widgets can be grouped based on equity categories and tickers, and also how the watchlist widget's unique grouping property works.",source:"@site/content/pro/dashboards/grouping.md",sourceDirName:"pro/dashboards",slug:"/pro/dashboards/grouping",permalink:"/pro/dashboards/grouping",draft:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/pro/dashboards/grouping.md",tags:[],version:"current",lastUpdatedBy:"Danglewood",lastUpdatedAt:1710625624,formattedLastUpdatedAt:"Mar 16, 2024",sidebarPosition:1,frontMatter:{title:"Grouping Mechanism",sidebar_position:1,description:"Learn about the powerful grouping mechanism in OpenBB Terminal Pro. Understand how widgets can be grouped based on equity categories and tickers, and also how the watchlist widget's unique grouping property works.",keywords:["Grouping","Widgets","Ticker","Symbol","Dashboard","Watchlist","Relationship"]},sidebar:"tutorialSidebar",previous:{title:"Dashboards",permalink:"/pro/dashboards/"},next:{title:"Templates",permalink:"/pro/dashboards/templates"}},c={},p=[{value:"Watchlist and grouping",id:"watchlist-and-grouping",level:3}],u={toc:p},h="wrapper";function g(e){let{components:t,...n}=e;return(0,o.kt)(h,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)(i.Z,{title:"Grouping | OpenBB Terminal Pro Docs",mdxType:"HeadTitle"}),(0,o.kt)(a.Z,{youtubeLink:"https://www.youtube.com/embed/cOH8qjOBWTI?si=I_NLm7UP4vgNBjo4",videoLegend:"Short introduction to grouping",mdxType:"TutorialVideo"}),(0,o.kt)("p",null,"The grouping mechanism is extremely powerful as it allows widgets to be grouped together through one of their parameters based on the category they belong to."),(0,o.kt)("p",null,"For instance, for the equity category, widgets can be connected through their ticker / symbol. Examples are: AAPL to simbolize Apple, TSLA for Tesla and so on."),(0,o.kt)("img",{className:"pro-border-gradient",width:"800",alt:"grouping",src:"https://github.com/OpenBB-finance/OpenBBTerminal/assets/25267873/f0cbeb52-c7cd-4e03-9eba-5ef35e1665b6"}),(0,o.kt)("p",null,"This is an example of 3 widgets that belong to the same group, note the dark yellow 1 on the top right."),(0,o.kt)("p",null,"In addition, when clicking on the grouping icon you can see that they are grouped around the MSFT ticker."),(0,o.kt)("p",null,"This means that if a user changes the ticker on any of these widgets, the remaining ones will get updated accordingly."),(0,o.kt)("p",null,"Also note that the grouping is visible on the sidebar, immediately under the dashboard naming."),(0,o.kt)("p",null,"A trick that you can use to group up widgets together faster is using the SHIFT while clicking on each widget, once creating a group in one of them - the grouping will replicate throughout selected widgets."),(0,o.kt)("h3",{id:"watchlist-and-grouping"},"Watchlist and grouping"),(0,o.kt)("p",null,"The watchlist widget has a special property in relation to grouping. Since this widget doesn't have a single symbol but many, users can select the row of their ticker of interest, and widgets that are grouped with the watchlist will get updated accordingly."),(0,o.kt)("img",{className:"pro-border-gradient",width:"800",alt:"watchlist",src:"https://github.com/OpenBB-finance/OpenBBTerminal/assets/25267873/d36380df-743a-4676-bec4-6bd34567e661"}),(0,o.kt)("p",null,"If a user selects a new ticker in another widget that is grouped with the watchlist, that ticker will be added to the watchlist and will become the one selected by default."))}g.isMDXComponent=!0},15569:(e,t,n)=>{e.exports=n(42285)},42285:(e,t,n)=>{var r,o=(r=n(67294))&&"object"==typeof r&&"default"in r?r.default:r;!function(e,t){void 0===t&&(t={});var n=t.insertAt;if("undefined"!=typeof document){var r=document.head||document.getElementsByTagName("head")[0],o=document.createElement("style");o.type="text/css","top"===n&&r.firstChild?r.insertBefore(o,r.firstChild):r.appendChild(o),o.styleSheet?o.styleSheet.cssText=e:o.appendChild(document.createTextNode(e))}}("/* The switch - the box around the slider */\n.switch {\n  position: relative;\n  display: inline-block;\n  width: 60px;\n  height: 34px;\n}\n\n/* Hide default HTML checkbox */\n.switch input {\n  opacity: 0;\n  width: 0;\n  height: 0;\n}\n\n/* The slider */\n.slider {\n  position: absolute;\n  cursor: pointer;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-color: #ccc;\n  -webkit-transition: 0.4s;\n  transition: 0.4s;\n}\n\n.slider:before {\n  position: absolute;\n  content: '';\n  height: 26px;\n  width: 26px;\n  left: 4px;\n  bottom: 4px;\n  background-color: white;\n  -webkit-transition: 0.4s;\n  transition: 0.4s;\n}\n\ninput:checked + .slider {\n  background-color: #2196f3;\n}\n\ninput:focus + .slider {\n  box-shadow: 0 0 1px #2196f3;\n}\n\ninput:checked + .slider:before {\n  -webkit-transform: translateX(26px);\n  -ms-transform: translateX(26px);\n  transform: translateX(26px);\n}\n\n/* Rounded sliders */\n.slider.round {\n  border-radius: 34px;\n}\n\n.slider.round:before {\n  border-radius: 50%;\n}\n"),t.Toggle=function(e){return o.createElement("label",{"data-testid":"Toggle-label",className:"switch"},o.createElement("input",{checked:e.isOn,"data-testid":"Toggle",onChange:e.handleChange,type:"checkbox"}),o.createElement("span",{className:"slider round"}))}}}]);