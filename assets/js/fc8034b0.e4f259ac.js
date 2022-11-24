"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[50362],{3905:(t,e,a)=>{a.d(e,{Zo:()=>m,kt:()=>f});var r=a(67294);function n(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function i(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,r)}return a}function p(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?i(Object(a),!0).forEach((function(e){n(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function o(t,e){if(null==t)return{};var a,r,n=function(t,e){if(null==t)return{};var a,r,n={},i=Object.keys(t);for(r=0;r<i.length;r++)a=i[r],e.indexOf(a)>=0||(n[a]=t[a]);return n}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(r=0;r<i.length;r++)a=i[r],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(n[a]=t[a])}return n}var l=r.createContext({}),d=function(t){var e=r.useContext(l),a=e;return t&&(a="function"==typeof t?t(e):p(p({},e),t)),a},m=function(t){var e=d(t.components);return r.createElement(l.Provider,{value:e},t.children)},s={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},k=r.forwardRef((function(t,e){var a=t.components,n=t.mdxType,i=t.originalType,l=t.parentName,m=o(t,["components","mdxType","originalType","parentName"]),k=d(a),f=n,c=k["".concat(l,".").concat(f)]||k[f]||s[f]||i;return a?r.createElement(c,p(p({ref:e},m),{},{components:a})):r.createElement(c,p({ref:e},m))}));function f(t,e){var a=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var i=a.length,p=new Array(i);p[0]=k;var o={};for(var l in e)hasOwnProperty.call(e,l)&&(o[l]=e[l]);o.originalType=t,o.mdxType="string"==typeof t?t:n,p[1]=o;for(var d=2;d<i;d++)p[d]=a[d];return r.createElement.apply(null,p)}return r.createElement.apply(null,a)}k.displayName="MDXCreateElement"},94515:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>l,contentTitle:()=>p,default:()=>s,frontMatter:()=>i,metadata:()=>o,toc:()=>d});var r=a(87462),n=(a(67294),a(3905));const i={title:"Set API keys",sidebar_position:3},p=void 0,o={unversionedId:"guides/basics/keys",id:"guides/basics/keys",title:"Set API keys",description:"Within the keys menu you can define your, often free, API key from various platforms like Alpha Vantage, FRED, IEX, Twitter, DeGiro, Binance and Coinglass. API keys are in essence a set of random characters that is unique to you.",source:"@site/content/terminal/guides/basics/keys.md",sourceDirName:"guides/basics",slug:"/guides/basics/keys",permalink:"/terminal/guides/basics/keys",draft:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/terminal/guides/basics/keys.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{title:"Set API keys",sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Menus & Commands",permalink:"/terminal/guides/basics/menus_commands"},next:{title:"Importing and Exporting Data",permalink:"/terminal/guides/basics/data"}},l={},d=[],m={toc:d};function s(t){let{components:e,...a}=t;return(0,n.kt)("wrapper",(0,r.Z)({},m,a,{components:e,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Within the ",(0,n.kt)("inlineCode",{parentName:"p"},"keys")," menu you can define your, often free, API key from various platforms like Alpha Vantage, FRED, IEX, Twitter, DeGiro, Binance and Coinglass. API keys are in essence a set of random characters that is unique to you."),(0,n.kt)("p",null,"You can access this menu from the homepage with ",(0,n.kt)("inlineCode",{parentName:"p"},"keys")," which will open the menu as shown below:"),(0,n.kt)("a",{target:"_blank",href:"https://user-images.githubusercontent.com/85772166/194684312-f12b7f26-8a04-4efe-bc94-fa516b7186d3.png"},(0,n.kt)("img",{src:"https://user-images.githubusercontent.com/85772166/194684312-f12b7f26-8a04-4efe-bc94-fa516b7186d3.png",width:"800"})),(0,n.kt)("p",null,"Within this menu you are able to set your API keys to access the commands that require that key. You can do so by typing the command followed by the API key, for example: ",(0,n.kt)("inlineCode",{parentName:"p"},"fred a215egade08a8d47cfd49c849658a2be"),". When you press ",(0,n.kt)("inlineCode",{parentName:"p"},"ENTER")," (\u23ce) the terminal will test whether this API key works. If it does, you receive the message ",(0,n.kt)("inlineCode",{parentName:"p"},"defined, test passed")," and if it does not, you receive the message ",(0,n.kt)("inlineCode",{parentName:"p"},"defined, test failed"),"."),(0,n.kt)("p",null,"To figure out where you can obtain the API key, you can enter the command (e.g. ",(0,n.kt)("inlineCode",{parentName:"p"},"av"),") and press ",(0,n.kt)("inlineCode",{parentName:"p"},"ENTER")," (\u23ce) or use the table below. ",(0,n.kt)("strong",{parentName:"p"},"We recommend that you gradually obtain and set keys whenever you wish to use features that require an API key. For example, if you are interested in viewing recent news about a company, you should set the API key from the 'News API'.")),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Command"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,n.kt)("th",{parentName:"tr",align:"left"},"URL"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"av"),(0,n.kt)("td",{parentName:"tr",align:"left"},"AlphaVantage"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://www.alphavantage.co/support/#api-key"},"https://www.alphavantage.co/support/#api-key"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"fmp"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Financial Modelling Prep"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://site.financialmodelingprep.com/developer/docs/"},"https://site.financialmodelingprep.com/developer/docs/"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"quandl"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Quandl"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://www.quandl.com"},"https://www.quandl.com"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"polygon"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Polygon"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://polygon.io"},"https://polygon.io"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"fred"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Federal Reserve Economic Database (FRED)"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://fred.stlouisfed.org"},"https://fred.stlouisfed.org"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"news"),(0,n.kt)("td",{parentName:"tr",align:"left"},"News API"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://newsapi.org/"},"https://newsapi.org/"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"tradier"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Tradier"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://developer.tradier.com"},"https://developer.tradier.com"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"cmc"),(0,n.kt)("td",{parentName:"tr",align:"left"},"CoinMarketCap"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://coinmarketcap.com/"},"https://coinmarketcap.com/"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"finnhub"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Finnhub"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://finnhub.io/"},"https://finnhub.io/"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"iex"),(0,n.kt)("td",{parentName:"tr",align:"left"},"IEX Cloud"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://iexcloud.io/"},"https://iexcloud.io/"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"reddit"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Reddit"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://www.reddit.com/wiki/api"},"https://www.reddit.com/wiki/api"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"twitter"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Twitter"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://developer.twitter.com"},"https://developer.twitter.com"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"rh"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Robinhood"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://robinhood.com/us/en/"},"https://robinhood.com/us/en/"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"degiro"),(0,n.kt)("td",{parentName:"tr",align:"left"},"DeGiro"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://www.degiro.com/"},"https://www.degiro.com/"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"oanda"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Oanda"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://developer.oanda.com"},"https://developer.oanda.com"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"binance"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Binance"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://binance.com"},"https://binance.com"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"bitquery"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Bitquery"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://bitquery.io/"},"https://bitquery.io/"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"si"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Sentiment Investor"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://sentimentinvestor.com"},"https://sentimentinvestor.com"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"cb"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Coinbase"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://help.coinbase.com/en/exchange/managing-my-account/how-to-create-an-api-key"},"https://help.coinbase.com/en/exchange/managing-my-account/how-to-create-an-api-key"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"walert"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Whale Alert"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://docs.whale-alert.io/"},"https://docs.whale-alert.io/"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"glassnode"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Glassnode"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://docs.glassnode.com/basic-api/api-key#how-to-get-an-api-key/"},"https://docs.glassnode.com/basic-api/api-key#how-to-get-an-api-key/"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"coinglass"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Coinglass"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://coinglass.github.io/API-Reference/#api-key"},"https://coinglass.github.io/API-Reference/#api-key"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"ethplorer"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Ethplorer"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/EverexIO/Ethplorer/wiki/Ethplorer-API"},"https://github.com/EverexIO/Ethplorer/wiki/Ethplorer-API"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"smartstake"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Smartstake"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://www.smartstake.io"},"https://www.smartstake.io"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"github"),(0,n.kt)("td",{parentName:"tr",align:"left"},"GitHub"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://docs.github.com/en/rest/guides/getting-started-with-the-rest-api"},"https://docs.github.com/en/rest/guides/getting-started-with-the-rest-api"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"messari"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Messari"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://messari.io/api/docs"},"https://messari.io/api/docs"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"cpanic"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Crypto Panic"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://cryptopanic.com/developers/api/"},"https://cryptopanic.com/developers/api/"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"eodhd"),(0,n.kt)("td",{parentName:"tr",align:"left"},"EODHD"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://eodhistoricaldata.com/"},"https://eodhistoricaldata.com/"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"santiment"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Santiment"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://app.santiment.net/"},"https://app.santiment.net/"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"shroom"),(0,n.kt)("td",{parentName:"tr",align:"left"},"ShroomDK"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://sdk.flipsidecrypto.xyz/shroomdk"},"https://sdk.flipsidecrypto.xyz/shroomdk"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"tokenterminal"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Token Terminal"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://tokenterminal.com/"},"https://tokenterminal.com/"))))))}s.isMDXComponent=!0}}]);