"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[79772],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=u(n),m=r,h=d["".concat(s,".").concat(m)]||d[m]||c[m]||i;return n?a.createElement(h,o(o({ref:t},p),{},{components:n})):a.createElement(h,o({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var u=2;u<i;u++)o[u]=n[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},61200:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>m,frontMatter:()=>l,metadata:()=>u,toc:()=>c});var a=n(87462),r=(n(67294),n(3905)),i=n(65099),o=n(85162);const l={title:"Requirements",sidebar_position:1},s=void 0,u={unversionedId:"quickstart/requirements",id:"quickstart/requirements",title:"Requirements",description:"The OpenBB SDK is a set of tools for financial and data analysis. The purpose of this page is to outline some of the background information required to get the most out of the software.",source:"@site/content/sdk/quickstart/requirements.md",sourceDirName:"quickstart",slug:"/quickstart/requirements",permalink:"/sdk/quickstart/requirements",draft:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/sdk/quickstart/requirements.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"Requirements",sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Introduction",permalink:"/sdk/"},next:{title:"Installation",permalink:"/sdk/quickstart/installation"}},p={},c=[{value:"Minimum System Requirements",id:"minimum-system-requirements",level:3},{value:"Python",id:"python",level:2},{value:"Virtual Environments",id:"virtual-environments",level:3},{value:"GitHub",id:"github",level:3},{value:"View-Model-Control",id:"view-model-control",level:3}],d={toc:c};function m(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"The OpenBB SDK is a set of tools for financial and data analysis. The purpose of this page is to outline some of the background information required to get the most out of the software."),(0,r.kt)("h3",{id:"minimum-system-requirements"},"Minimum System Requirements"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"4GB RAM or more"),(0,r.kt)("li",{parentName:"ul"},"5GB free storage"),(0,r.kt)("li",{parentName:"ul"},"A code editor or Jupyter Notebook"),(0,r.kt)("li",{parentName:"ul"},"Internet connection")),(0,r.kt)("admonition",{title:"NOTES ON THE INTERNET CONNECTIVITY",type:"note"},(0,r.kt)("p",{parentName:"admonition"},"Installation of the SDK with all the toolkits would require downloading around 4GB of data. Querying data does not require a lot of bandwidth but you will certainly have a more pleasant experience if you will be on a fast internet line. 4G networks provide a good enough experience so if you're traveling your personal hot-spot will do. While it's technically possible to use a subset of the functionality in off-line mode, you will not be able to use any data that is queried from the APIs of data providers and services.")),(0,r.kt)("admonition",{title:"OS Specific Requirements",type:"info"},(0,r.kt)(i.Z,{mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"MacOS",label:"MacOS",mdxType:"TabItem"},(0,r.kt)("div",{class:"gdoc-page"}),(0,r.kt)("p",null,"The OpenBB platform requires MacOS Catalina or higher. The oldest Mac configuration known to work is a MacPro 3,1 (OS Catalina) and functions relying on the Intel Math Kernel (Forecast models like RNN) are not compatible with the CPU."),(0,r.kt)("p",null,"Portfolio Optimization Toolkit and Forecasting Toolkit on Apple Silicon: To install the Forecasting toolkit on M1/M2 macs you need to use the x86_64 version of conda and install certain dependencies from conda-forge. Further Instructions can be found in the Installation section"),(0,r.kt)("div",{class:"gdoc-columns"})),(0,r.kt)(o.Z,{value:"Windows",label:"Windows",mdxType:"TabItem"},(0,r.kt)("div",{class:"gdoc-page"}),(0,r.kt)("p",null,"Windows 10 or higher is required."),(0,r.kt)("div",{class:"gdoc-columns"})),(0,r.kt)(o.Z,{value:"Linux",label:"Linux",mdxType:"TabItem"},(0,r.kt)("div",{class:"gdoc-page"}),(0,r.kt)("p",null,"The OpenBB platform can be installed on a variety of Linux distributions. Due to the large number of system configuration variables, we are unable to verify compatibility across all distributions. It is known to work with up-do-date versions of Ubuntu, Debian and Raspberry Pi. Any 32-bit distributions are incompatible. Generally, if the system installs Miniconda3 then the OpenBB Terminal should also be installable."),(0,r.kt)("div",{class:"gdoc-columns"})))),(0,r.kt)("h2",{id:"python"},"Python"),(0,r.kt)("h3",{id:"virtual-environments"},"Virtual Environments"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://docs.conda.io/en/latest/miniconda.html"},"Miniconda3")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://packaging.python.org/en/latest/tutorials/installing-packages/"},"Installing Python Packages"))),(0,r.kt)("p",null,"Virtual Python environments are containers for Python applications, and allows the operating system to remain unchanged. The OpenBB SDK is built on top of 300+ open-source libraries. The dependency tree is complex and the components are carefully selected to work with each other. This makes it critical to install the OpenBB SDK in an isolated, dedicated, virtual environment. We recommend a Conda virtual environment because this is currently the only package manager compatible with every function. Consequently, installations within a ",(0,r.kt)("inlineCode",{parentName:"p"},"venv")," or other container will lack the ML and forecast features. The Forecast menu will not be installed unless:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Miniconda3 is installed and the version is specifically x86/x64 architecture, regardless of the CPU-type."),(0,r.kt)("li",{parentName:"ul"},"CMake must be installed within the environment created for the OpenBB installation.",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"conda install -c conda-forge cmake"))))),(0,r.kt)("p",null,"It is not recommended to install in a Global environment, such as Homebrew or ",(0,r.kt)("inlineCode",{parentName:"p"},"usr/local/bin/python3"),". Create and activate a new environment before installing the OpenBB SDK."),(0,r.kt)("h3",{id:"github"},"GitHub"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/OpenBB-finance/OpenBBTerminal"},"GitHub")," is where the OpenBB source code is maintained. Cloning the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/OpenBB-finance/OpenBBTerminal.git"},"repository")," is recommended for those wishing to develop functions, inspect the source code, or be on the bleeding-edge of development. Syncing the local folder - ",(0,r.kt)("inlineCode",{parentName:"p"},"git pull")," - to the main branch of the repository will keep the installation up-to-date, and ",(0,r.kt)("inlineCode",{parentName:"p"},"git checkout")," provides a way to test development or contributor branches. GitHub can also be used as a personal storage vault and take advantage of automated actions. It's a great place to build, store, and maintain small databases for free."),(0,r.kt)("p",null,"Users encountering bugs are encouraged to report them ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/OpenBB-finance/OpenBBTerminal/issues/new/choose"},"here")," by creating a new issue, if no open issue for the bug already exists."),(0,r.kt)("h3",{id:"view-model-control"},"View-Model-Control"),(0,r.kt)("p",null,"OpenBB uses a ",(0,r.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Model%E2%80%93view%E2%80%93controller"},"View-Model-Control")," format for creating functionality in the terminal."),(0,r.kt)("p",null,"For example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"openbb.economy.ycrv()\n")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"right"}),(0,r.kt)("th",{parentName:"tr",align:"right"},"Maturity"),(0,r.kt)("th",{parentName:"tr",align:"right"},"Rate"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"right"},"0"),(0,r.kt)("td",{parentName:"tr",align:"right"},"0.0833333"),(0,r.kt)("td",{parentName:"tr",align:"right"},"3.93")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"right"},"1"),(0,r.kt)("td",{parentName:"tr",align:"right"},"0.25"),(0,r.kt)("td",{parentName:"tr",align:"right"},"4.34")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"right"},"2"),(0,r.kt)("td",{parentName:"tr",align:"right"},"0.5"),(0,r.kt)("td",{parentName:"tr",align:"right"},"4.61")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"right"},"..."),(0,r.kt)("td",{parentName:"tr",align:"right"},"..."),(0,r.kt)("td",{parentName:"tr",align:"right"},"...")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"right"},"8"),(0,r.kt)("td",{parentName:"tr",align:"right"},"10"),(0,r.kt)("td",{parentName:"tr",align:"right"},"3.82")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"right"},"9"),(0,r.kt)("td",{parentName:"tr",align:"right"},"20"),(0,r.kt)("td",{parentName:"tr",align:"right"},"4.13")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"right"},"10"),(0,r.kt)("td",{parentName:"tr",align:"right"},"30"),(0,r.kt)("td",{parentName:"tr",align:"right"},"3.92")))),(0,r.kt)("p",null,"Then the view:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"openbb.economy.ycrv_chart()\n")),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/85772166/203185342-f019414d-24e2-4d8a-a718-10eeedb59e8c.png",alt:"Screenshot 2022-11-21 at 4 29 17 PM"})))}m.isMDXComponent=!0},85162:(e,t,n)=>{n.d(t,{Z:()=>o});var a=n(67294),r=n(86010);const i="tabItem_Ymn6";function o(e){let{children:t,hidden:n,className:o}=e;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(i,o),hidden:n},t)}},65099:(e,t,n)=>{n.d(t,{Z:()=>m});var a=n(87462),r=n(67294),i=n(86010),o=n(72389),l=n(67392),s=n(7094),u=n(12466);const p="tabItem_hGfb";var c=n(16550);function d(e){var t;const{lazy:n,block:o,defaultValue:d,values:m,groupId:h,className:b}=e,f=r.Children.map(e.children,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),g=m??f.map((e=>{let{props:{value:t,label:n,attributes:a}}=e;return{value:t,label:n,attributes:a}})),k=(0,l.l)(g,((e,t)=>e.value===t.value));if(k.length>0)throw new Error(`Docusaurus error: Duplicate values "${k.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const y=null===d?d:d??(null==(t=f.find((e=>e.props.default)))?void 0:t.props.value)??f[0].props.value;if(null!==y&&!g.some((e=>e.value===y)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${y}" but none of its children has the corresponding value. Available values are: ${g.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:v,setTabGroupChoices:N}=(0,s.U)(),[w,O]=(0,r.useState)(y),T=[],{blockElementScrollPositionUntilNextRender:B}=(0,u.o5)();if(null!=h){const e=v[h];null!=e&&e!==w&&g.some((t=>t.value===e))&&O(e)}const x=e=>{const t=e.currentTarget,n=T.indexOf(t),a=g[n].value;a!==w&&(B(t),O(a),null!=h&&N(h,String(a)))},E=e=>{var t;let n=null;switch(e.key){case"Enter":x(e);break;case"ArrowRight":{const t=T.indexOf(e.currentTarget)+1;n=T[t]??T[0];break}case"ArrowLeft":{const t=T.indexOf(e.currentTarget)-1;n=T[t]??T[T.length-1];break}}null==(t=n)||t.focus()},{pathname:q}=(0,c.TH)();return r.createElement("div",null,r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("_group-tab list-none lg:-ml-7 my-6")},g.map((e=>{let{value:t,label:n,attributes:o}=e;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:w===t?0:-1,"aria-selected":w===t,key:t,ref:e=>T.push(e),onKeyDown:E,onClick:x},o,{className:(0,i.Z)("font-bold tracking-widest w-fit px-3 inline-flex py-1 uppercase text-sm border-b",p,null==o?void 0:o.className,{"border-b-2 pointer-events-none":w===t,"cursor-pointer":w!==t,"border-b-2 text-[#669dcb] border-[#669dcb]":w===t&&q.startsWith("/terminal"),"border-b-2 text-[#FB923C] border-[#FB923C]":w===t&&q.startsWith("/sdk"),"border-grey-600 text-grey-600 hover:text-[#ffd4b1] hover:border-[#ffd4b1]":w!==t&&q.startsWith("/sdk"),"border-grey-600 text-grey-600 hover:text-[#abd2f1] hover:border-[#abd2f1]":w!==t&&q.startsWith("/terminal")})}),n??t)})),r.createElement("li",{className:"w-full border-b border-grey-600 pointer-events-none py-1 mb-[9.5px]"})),n?(0,r.cloneElement)(f.filter((e=>e.props.value===w))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},f.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==w})))))}function m(e){const t=(0,o.Z)();return r.createElement(d,(0,a.Z)({key:String(t)},e))}}}]);