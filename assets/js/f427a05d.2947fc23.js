"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[44455],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),d=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=d(e.components);return a.createElement(l.Provider,{value:t},e.children)},p="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},b=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),p=d(n),b=r,m=p["".concat(l,".").concat(b)]||p[b]||s[b]||i;return n?a.createElement(m,o(o({ref:t},u),{},{components:n})):a.createElement(m,o({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=b;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c[p]="string"==typeof e?e:r,o[1]=c;for(var d=2;d<i;d++)o[d]=n[d];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}b.displayName="MDXCreateElement"},88828:(e,t,n)=>{n.d(t,{Z:()=>i});var a=n(67294),r=n(35742);function i(e){let{title:t}=e;return a.createElement(r.Z,null,a.createElement("title",null,t))}},40931:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>c,default:()=>b,frontMatter:()=>o,metadata:()=>l,toc:()=>u});var a=n(87462),r=(n(67294),n(3905)),i=n(88828);const o={title:"load",description:"Experienced in loading crypto currency data for analysis from Yahoo Finance by default or other sources such as 'ccxt' or 'cg'. Ability to select specific interval, start and end dates, and exchange currencies",keywords:["Load crypto currency","Yahoo Finance","ccxt","cg","specific interval","crypto analysis","exchange selection","coin symbol","quote currency"]},c=void 0,l={unversionedId:"terminal/reference/crypto/dd/load",id:"terminal/reference/crypto/dd/load",title:"load",description:"Experienced in loading crypto currency data for analysis from Yahoo Finance by default or other sources such as 'ccxt' or 'cg'. Ability to select specific interval, start and end dates, and exchange currencies",source:"@site/content/terminal/reference/crypto/dd/load.md",sourceDirName:"terminal/reference/crypto/dd",slug:"/terminal/reference/crypto/dd/load",permalink:"/terminal/reference/crypto/dd/load",draft:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/terminal/reference/crypto/dd/load.md",tags:[],version:"current",lastUpdatedBy:"montezdesousa",lastUpdatedAt:1713550349,formattedLastUpdatedAt:"Apr 19, 2024",frontMatter:{title:"load",description:"Experienced in loading crypto currency data for analysis from Yahoo Finance by default or other sources such as 'ccxt' or 'cg'. Ability to select specific interval, start and end dates, and exchange currencies",keywords:["Load crypto currency","Yahoo Finance","ccxt","cg","specific interval","crypto analysis","exchange selection","coin symbol","quote currency"]},sidebar:"tutorialSidebar",previous:{title:"liquidations",permalink:"/terminal/reference/crypto/dd/liquidations"},next:{title:"market",permalink:"/terminal/reference/crypto/dd/market"}},d={},u=[{value:"Usage",id:"usage",level:3},{value:"Parameters",id:"parameters",level:2}],p={toc:u},s="wrapper";function b(e){let{components:t,...n}=e;return(0,r.kt)(s,(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)(i.Z,{title:"crypto/dd/load - Reference | OpenBB Terminal Docs",mdxType:"HeadTitle"}),(0,r.kt)("p",null,"Load crypto currency to perform analysis on. Yahoo Finance is used as default source. Other sources can be used such as 'ccxt' or 'cg' with --source. If you select 'ccxt', you can then select any exchange with --exchange. You can also select a specific interval with --interval."),(0,r.kt)("h3",{id:"usage"},"Usage"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"load -c COIN [-s START] [--exchange {aax,ascendex,bequant,bibox,bigone,binance,binancecoinm,binanceus,binanceusdm,bit2c,bitbank,bitbay,bitcoincom,bitfinex,bitfinex2,bitflyer,bitforex,bitget,bithumb,bitmart,bitmex,bitopro,bitpanda,bitrue,bitso,bitstamp,bitstamp1,bittrex,bitvavo,bkex,bl3p,btcalpha,btcbox,btcex,btcmarkets,btctradeua,btcturk,buda,bw,bybit,bytetrade,cex,coinbaseprime,coinbasepro,coincheck,coinex,coinfalcon,coinmate,coinone,coinspot,crex24,cryptocom,currencycom,delta,deribit,digifinex,eqonex,exmo,flowbtc,fmfwio,ftx,ftxus,gate,gateio,gemini,hitbtc,hitbtc3,hollaex,huobi,huobijp,huobipro,idex,independentreserve,indodax,itbit,kraken,kucoin,kucoinfutures,kuna,latoken,lbank,lbank2,liquid,luno,lykke,mercado,mexc,mexc3,ndax,novadax,oceanex,okcoin,okex,okex5,okx,paymium,phemex,poloniex,probit,qtrade,ripio,stex,therock,tidebit,tidex,timex,tokocrypto,upbit,wavesexchange,whitebit,woo,yobit,zaif,zb,zipmex,zonda}] [-e END] [-i {1,5,15,30,60,240,1440,10080,43200}] [--vs VS]\n")),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"parameters"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"),(0,r.kt)("th",{parentName:"tr",align:null},"Optional"),(0,r.kt)("th",{parentName:"tr",align:null},"Choices"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"coin"),(0,r.kt)("td",{parentName:"tr",align:null},"Coin to get. Must be coin symbol (e.g., btc, eth)"),(0,r.kt)("td",{parentName:"tr",align:null},"None"),(0,r.kt)("td",{parentName:"tr",align:null},"False"),(0,r.kt)("td",{parentName:"tr",align:null},"None")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"start"),(0,r.kt)("td",{parentName:"tr",align:null},"The starting date (format YYYY-MM-DD) of the crypto"),(0,r.kt)("td",{parentName:"tr",align:null},"2019-11-21"),(0,r.kt)("td",{parentName:"tr",align:null},"True"),(0,r.kt)("td",{parentName:"tr",align:null},"None")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"exchange"),(0,r.kt)("td",{parentName:"tr",align:null},"Exchange to search"),(0,r.kt)("td",{parentName:"tr",align:null},"binance"),(0,r.kt)("td",{parentName:"tr",align:null},"True"),(0,r.kt)("td",{parentName:"tr",align:null},"aax, ascendex, bequant, bibox, bigone, binance, binancecoinm, binanceus, binanceusdm, bit2c, bitbank, bitbay, bitcoincom, bitfinex, bitfinex2, bitflyer, bitforex, bitget, bithumb, bitmart, bitmex, bitopro, bitpanda, bitrue, bitso, bitstamp, bitstamp1, bittrex, bitvavo, bkex, bl3p, btcalpha, btcbox, btcex, btcmarkets, btctradeua, btcturk, buda, bw, bybit, bytetrade, cex, coinbaseprime, coinbasepro, coincheck, coinex, coinfalcon, coinmate, coinone, coinspot, crex24, cryptocom, currencycom, delta, deribit, digifinex, eqonex, exmo, flowbtc, fmfwio, ftx, ftxus, gate, gateio, gemini, hitbtc, hitbtc3, hollaex, huobi, huobijp, huobipro, idex, independentreserve, indodax, itbit, kraken, kucoin, kucoinfutures, kuna, latoken, lbank, lbank2, liquid, luno, lykke, mercado, mexc, mexc3, ndax, novadax, oceanex, okcoin, okex, okex5, okx, paymium, phemex, poloniex, probit, qtrade, ripio, stex, therock, tidebit, tidex, timex, tokocrypto, upbit, wavesexchange, whitebit, woo, yobit, zaif, zb, zipmex, zonda")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"end"),(0,r.kt)("td",{parentName:"tr",align:null},"The ending date (format YYYY-MM-DD) of the crypto"),(0,r.kt)("td",{parentName:"tr",align:null},"2022-11-25"),(0,r.kt)("td",{parentName:"tr",align:null},"True"),(0,r.kt)("td",{parentName:"tr",align:null},"None")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"interval"),(0,r.kt)("td",{parentName:"tr",align:null},"The interval of the crypto"),(0,r.kt)("td",{parentName:"tr",align:null},"1440"),(0,r.kt)("td",{parentName:"tr",align:null},"True"),(0,r.kt)("td",{parentName:"tr",align:null},"1, 5, 15, 30, 60, 240, 1440, 10080, 43200")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"vs"),(0,r.kt)("td",{parentName:"tr",align:null},"Quote currency (what to view coin vs). e.g., usdc, usdt, ... if source is ccxt, usd, eur, ... otherwise"),(0,r.kt)("td",{parentName:"tr",align:null},"usdt"),(0,r.kt)("td",{parentName:"tr",align:null},"True"),(0,r.kt)("td",{parentName:"tr",align:null},"None")))),(0,r.kt)("hr",null))}b.isMDXComponent=!0}}]);