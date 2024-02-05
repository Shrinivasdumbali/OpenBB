"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[84047],{3905:(D,R,U)=>{U.d(R,{Zo:()=>a,kt:()=>E});var P=U(67294);function S(D,R,U){return R in D?Object.defineProperty(D,R,{value:U,enumerable:!0,configurable:!0,writable:!0}):D[R]=U,D}function e(D,R){var U=Object.keys(D);if(Object.getOwnPropertySymbols){var P=Object.getOwnPropertySymbols(D);R&&(P=P.filter((function(R){return Object.getOwnPropertyDescriptor(D,R).enumerable}))),U.push.apply(U,P)}return U}function t(D){for(var R=1;R<arguments.length;R++){var U=null!=arguments[R]?arguments[R]:{};R%2?e(Object(U),!0).forEach((function(R){S(D,R,U[R])})):Object.getOwnPropertyDescriptors?Object.defineProperties(D,Object.getOwnPropertyDescriptors(U)):e(Object(U)).forEach((function(R){Object.defineProperty(D,R,Object.getOwnPropertyDescriptor(U,R))}))}return D}function A(D,R){if(null==D)return{};var U,P,S=function(D,R){if(null==D)return{};var U,P,S={},e=Object.keys(D);for(P=0;P<e.length;P++)U=e[P],R.indexOf(U)>=0||(S[U]=D[U]);return S}(D,R);if(Object.getOwnPropertySymbols){var e=Object.getOwnPropertySymbols(D);for(P=0;P<e.length;P++)U=e[P],R.indexOf(U)>=0||Object.prototype.propertyIsEnumerable.call(D,U)&&(S[U]=D[U])}return S}var B=P.createContext({}),K=function(D){var R=P.useContext(B),U=R;return D&&(U="function"==typeof D?D(R):t(t({},R),D)),U},a=function(D){var R=K(D.components);return P.createElement(B.Provider,{value:R},D.children)},N="mdxType",G={inlineCode:"code",wrapper:function(D){var R=D.children;return P.createElement(P.Fragment,{},R)}},n=P.forwardRef((function(D,R){var U=D.components,S=D.mdxType,e=D.originalType,B=D.parentName,a=A(D,["components","mdxType","originalType","parentName"]),N=K(U),n=S,E=N["".concat(B,".").concat(n)]||N[n]||G[n]||e;return U?P.createElement(E,t(t({ref:R},a),{},{components:U})):P.createElement(E,t({ref:R},a))}));function E(D,R){var U=arguments,S=R&&R.mdxType;if("string"==typeof D||S){var e=U.length,t=new Array(e);t[0]=n;var A={};for(var B in R)hasOwnProperty.call(R,B)&&(A[B]=R[B]);A.originalType=D,A[N]="string"==typeof D?D:S,t[1]=A;for(var K=2;K<e;K++)t[K]=U[K];return P.createElement.apply(null,t)}return P.createElement.apply(null,U)}n.displayName="MDXCreateElement"},88828:(D,R,U)=>{U.d(R,{Z:()=>e});var P=U(67294),S=U(35742);function e(D){let{title:R}=D;return P.createElement(S.Z,null,P.createElement("title",null,R))}},64561:(D,R,U)=>{U.r(R),U.d(R,{assets:()=>K,contentTitle:()=>A,default:()=>n,frontMatter:()=>t,metadata:()=>B,toc:()=>a});var P=U(87462),S=(U(67294),U(3905)),e=U(88828);const t={title:"load",description:"This page documents how to load historical exchange rate data from Alpha Advantage and YahooFinance. It provides code usage standards in Python and explains the parameters for the source, the resolution, the interval, and the start date of data.",keywords:["load historical exchange rate data","Alpha Advantage","YahooFinance","resolution of data","intervals of intraday data","start date of data","currency pairs"]},A=void 0,B={unversionedId:"terminal/reference/forex/load",id:"terminal/reference/forex/load",title:"load",description:"This page documents how to load historical exchange rate data from Alpha Advantage and YahooFinance. It provides code usage standards in Python and explains the parameters for the source, the resolution, the interval, and the start date of data.",source:"@site/content/terminal/reference/forex/load.md",sourceDirName:"terminal/reference/forex",slug:"/terminal/reference/forex/load",permalink:"/terminal/reference/forex/load",draft:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/terminal/reference/forex/load.md",tags:[],version:"current",lastUpdatedBy:"montezdesousa",lastUpdatedAt:1707152475,formattedLastUpdatedAt:"Feb 5, 2024",frontMatter:{title:"load",description:"This page documents how to load historical exchange rate data from Alpha Advantage and YahooFinance. It provides code usage standards in Python and explains the parameters for the source, the resolution, the interval, and the start date of data.",keywords:["load historical exchange rate data","Alpha Advantage","YahooFinance","resolution of data","intervals of intraday data","start date of data","currency pairs"]},sidebar:"tutorialSidebar",previous:{title:"fwd",permalink:"/terminal/reference/forex/fwd"},next:{title:"quote",permalink:"/terminal/reference/forex/quote"}},K={},a=[{value:"Usage",id:"usage",level:3},{value:"Parameters",id:"parameters",level:2}],N={toc:a},G="wrapper";function n(D){let{components:R,...U}=D;return(0,S.kt)(G,(0,P.Z)({},N,U,{components:R,mdxType:"MDXLayout"}),(0,S.kt)(e.Z,{title:"forex /load - Reference | OpenBB Terminal Docs",mdxType:"HeadTitle"}),(0,S.kt)("p",null,"Load historical exchange rate data.Available data sources are Alpha Advantage and YahooFinanceBy default main source used for analysis is YahooFinance (yf). To change it use --source av"),(0,S.kt)("h3",{id:"usage"},"Usage"),(0,S.kt)("pre",null,(0,S.kt)("code",{parentName:"pre",className:"language-python",metastring:"wordwrap",wordwrap:!0},"load [-t TICKER] [-r {i,d,w,m}] [-i {1min,5min,15min,30min,60min,90min,1hour,1day,5day,1week,1month,3month}] [-s START_DATE] [-e END]\n")),(0,S.kt)("hr",null),(0,S.kt)("h2",{id:"parameters"},"Parameters"),(0,S.kt)("table",null,(0,S.kt)("thead",{parentName:"table"},(0,S.kt)("tr",{parentName:"thead"},(0,S.kt)("th",{parentName:"tr",align:null},"Name"),(0,S.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,S.kt)("th",{parentName:"tr",align:null},"Description"),(0,S.kt)("th",{parentName:"tr",align:null},"Default"),(0,S.kt)("th",{parentName:"tr",align:null},"Optional"),(0,S.kt)("th",{parentName:"tr",align:null},"Choices"))),(0,S.kt)("tbody",{parentName:"table"},(0,S.kt)("tr",{parentName:"tbody"},(0,S.kt)("td",{parentName:"tr",align:null},"ticker"),(0,S.kt)("td",{parentName:"tr",align:null},"-t  --ticker"),(0,S.kt)("td",{parentName:"tr",align:null},"Currency pair to load."),(0,S.kt)("td",{parentName:"tr",align:null},"None"),(0,S.kt)("td",{parentName:"tr",align:null},"True"),(0,S.kt)("td",{parentName:"tr",align:null},"OSOCHF, GBPXCD, PENCOP, MURUSD, EURTTD, ZARUGX, JPYCHF, PKRZAR, EURNZD, BNDGBP, SEKUSD, CHFINR, NOKDKK, PHPDKK, ZARRUB, ZARCAD, GBPPAB, ZARMAD, AUDCNY, GBPTRY, CHFTHB, NIOGBP, UYUUSD, ZARMXN, USDFJD, PLNCZK, MWKZAR, GBPKHR, MADAUD, GBPSEK, MYRINR, HKDSEK, XAUHKD, USDMYR, GBPXAG, GBPEGP, MALCHF, NADUSD, EURTRY, BRLHKD, EGPZAR, GBPIDR, USDXPF, EURUYU, PENCAD, CHFBRL, USDILS, MYRPKR, BMDEUR, USDAED, GBPINR, GBPNPR, LKRZAR, GBPMYR, EURPHP, BGNGBP, GBPAFN, BRLGBP, QARUSD, TWDUSD, AUDJPY, ISKDKK, USDDKK, CLPBRL, EURBHD, XPTUSD, ZARUSD, BGNDKK, PKRSGD, THBCHF, QARPKR, DKKAED, USDJPY, XAUINR, EURDJF, USDMOP, KMFUSD, PLNUSD, GBPCOP, XAGCNY, GBPPGK, EURKHR, USDCNY, ZARHKD, ZARRON, ZARQAR, SAREUR, XPFGBP, GBPDJF, GBPGNF, AUDPHP, JPYHUF, USDQAR, BIFGBP, GYDUSD, VNDGBP, GBPBBD, USDNAD, HUFZAR, USDBZD, GBPMWK, EURAFN, AMDEUR, LKRUSD, BRIUSD, RUBGBP, GHSEUR, ZARTRY, EURTWD, ZARCNY, CADMYR, LRDGBP, YERUSD, LSLEUR, TZSUSD, CLPAUD, MXNZAR, TWDPKR, AUDHUF, NOKINR, HKDJPY, AUDPLN, RONCHF, GBPAED, NZDKRW, YERGBP, CHFAUN, DOPUSD, NPREUR, GHSZAR, CLPGBP, MYRNZD, EURQAR, CADHKD, AEDDKK, USDHUF, SGDBRL, MVRGBP, AEDSGD, HUFUSD, AUDTHB, USDBND, JPYVND, GTQUSD, INRAED, BAMGBP, LYDGBP, GBPGTQ, JPYPLN, XAGBRL, USDRWF, GBPHTG, KRUUSD, CZKNZD, EURVND, GBPSVC, EURBIF, CHFNZD, INRSEK, ETBUSD, SARKWD, CHFMYR, AEDSEK, ILSNOK, GBPBND, IQDGBP, EURKES, JODUSD, EGPEUR, GBPMMK, EURBGN, USDCAD, SGDTRY, USDNBL, GBPKMF, AEDNZD, HRKEUR, AUDBGN, NOKSGD, LAKGBP, USDGHS, CHFSEK, USDCVE, AEDILS, EURSAR, XAGCAD, CZKMXN, AUDCHF, RSDGBP, USDCHF, OMRGBP, MWKUSD, EURTND, EURARS, EURSZL, JPYRUB, PLNDKK, CHFTRY, PLNCHF, GBPUSD, GBPHUF, EURAED, NZDCAD, COPGBP, RWFZAR, SEKTWD, GBPKYD, HUFCHF, EURGHS, EURPGK, USDBIF, DKKSGD, IDRCAD, CNHEUR, EURHKD, EURCAD, PHPJPY, ILSCHF, IDRTWD, GBPPHP, PKRJPY, AUDXAG, EURRUB, USDXPD, EURBBD, USDTMT, CZKUSD, KESEUR, ZARNAD, CLPARS, JODILS, HKDCAD, UGXEUR, GBPRSD, ZARHUF, GBPRON, KMFGBP, TRYXAG, BRLKRW, USDSDG, USDGBP, MMKGBP, MYRTHB, EURDZD, JPYCNY, HNLEUR, EURMVR, ARECHF, USDBOB, CNYUSD, NPRGBP, ZARXAU, MXNCZK, AUDUSD, EURKWD, GBPBDT, EURMOP, VNDJPY, DOEUSD, NZDHKD, EURMXN, AEDJOD, ZARDKK, SGDIDR, RUBSEK, MXNAUD, SEKHKD, IDRINR, ARSSGD, QAREUR, DKKISK, USDCLP, DKKMXN, ARSCAD, GBPXPD, CZKSEK, EURRWF, GBPLBP, TNDUSD, DKKUAH, GBPBTN, MXNPEN, PENMXN, PKRTWD, BDTEUR, NBLUSD, CADARS, ISKEUR, COPEUR, CYPZAR, NOKSEK, DKKTWD, IDRMYR, CHFISK, USDSHP, PYGGBP, MDLGBP, SEKKRW, LKREUR, GYDGBP, KWDUSD, CADPEN, GBPHRK, USDNZD, KZTEUR, SZLUSD, PLNJPY, GBPSGD, EURYER, BWPUSD, THBINR, PKRKWD, MADEUR, GBPMUR, TTDUSD, EURAUD, PKRNZD, TWDTHB, ZARBRL, EUREGP, USDKWD, GBPTHB, DKKCZK, AFNGBP, JPYNGN, HKDBRL, EURSEK, NZDUSD, BMDGBP, KWDEUR, JPYXAG, BRLZAR, GBPHKD, BIFUSD, CZKEUR, GTQEUR, KRWINR, EURPLN, GBPDOP, SEKZAR, USDVND, XPTEUR, HKDINR, COPMXN, CNYKRW, UAHGBP, THBHKD, CHFHUF, GBPBZD, RONGBP, USDNPR, BAMUSD, BHDPKR, CADKYD, EURRSD, MXNRUB, CHFSGD, SCREUR, USDTWD, BMDBBD, ILSAUD, BRLRSD, XAGEUR, BTNGBP, ILSAED, BOBGBP, NOKPLN, PHPUSD, NGNUSD, CZKZAR, COPDKK, GBPZAR, DOECHF, USDXPT, GBPXPF, CHFARE, NZDZAR, NGNEUR, XAURUB, EURJPY, UGXGBP, TWDAUD, EGPJPY, ARSGBP, ARSJPY, INRCAD, BTNEUR, HTGGBP, LRDUSD, EURLAK, AUDIDR, SGDNZD, EURILS, THBXAU, CHFBRI, GBPMOP, EURMUR, RUBAUD, HTGEUR, KHRGBP, KRWBRL, USDJOD, AMDGBP, MKDGBP, DOPGBP, SARXAG, HKDCNY, EURNIO, HTGUSD, XAGARS, USDRSD, AUDRUB, CHFHKD, USDDOE, ZARPHP, GBPRWF, INRGBP, BWPZAR, EURBZD, JPYMXN, INRDKK, ZARPKR, DJFEUR, BRLCOP, CNHGBP, DKKNOK, TWDCHF, GBPARS, BRLSEK, XAGHKD, PENCLP, ZARKRW, EURUSD, NOKILS, THBDKK, MYRDKK, DKKBGN, ZARSZL, KWDAED, CADAUD, GBPRUB, ZARNOK, INRCNY, JPYMYR, MXNJPY, MYRKRW, PKRAUD, CADHRK, GBPJPY, SEKNOK, CHFVRN, PKRHKD, EURSCR, GBPLRD, EURHRK, PHPAUD, GBPTWD, KRWCHF, AUDHKD, EURIDR, DKKTRY, EURDOP, CADGBP, HNLUSD, VNDUSD, AUDTWD, SARUSD, CHFBWP, SZLCHF, GBPKZT, ZARMYR, XPFUSD, THBMYR, PKRQAR, BHDEUR, USDBBD, IDRCHF, EURZAR, PGKUSD, JMDEUR, AUDLTL, EURETB, MYRCHF, USDSEK, EURMWK, PABGBP, KWDPKR, GBPCLP, EURUZS, EURXAU, GBPLKR, MYRUSD, USDTRY, INRUSD, KHRUSD, USDXAG, BMDKYD, ARSCLP, MADZAR, PLNHRK, BSDGBP, GNFGBP, DKKPHP, PLNAUD, NOKJPY, TJSUSD, DJFUSD, QARZAR, CUPGBP, SEKEUR, GBPXPT, MWKEUR, NOKZAR, TWDGBP, HKDTHB, JPYEGP, MDLEUR, HRKAUD, DKKCOP, USDKRU, USDBWP, EURNAD, CNYTWD, ILSPLN, THBGBP, HUFCAD, HKDPLN, MYRGBP, AUDHRK, CHFOSO, INRNZD, INRXAG, IQDEUR, GBPBMD, TWDMYR, CNYNZD, MVREUR, USDLYD, JPYTWD, EURMZN, EURGBP, MXNEUR, PLNZAR, EURCNY, CHFRON, JPYARS, XAUBRL, GBPMXN, PABEUR, GBPMAD, GBPBIF, EURCHF, TRYGBP, PYGUSD, GBPUAH, SDGEUR, GBPBGN, NIOEUR, RONZAR, AUDCLP, EURSDG, PKREGP, TRYNZD, SZLEUR, MYRZAR, EURPAB, CADXAU, AUDPKR, CNYXAG, DKKCNY, USDINR, GYDEUR, MALUSD, SEKCHF, GBPBAM, JPYPKR, ILSCAD, RUBXAU, CADUSD, COPBRL, HUFNZD, TRYCHF, AUDPGK, LYDUSD, HUFDKK, EGPUSD, TWDJPY, CHFILS, PENBRL, HUFJPY, USDSZL, MADUSD, RWFUSD, MURGBP, USDHKD, HKDXAG, GNFUSD, EURRON, OMRUSD, GBPLYD, BNDUSD, GBPLSL, EURCDF, VNDEUR, USDBHD, OMRAED, KRWCAD, JPYNZD, NSOCHF, ZARCHF, USDTZS, JPYAED, GBPSLL, SEKJPY, SEKCAD, GBPNGN, GBPVND, BBDEUR, LBPGBP, NOKNZD, PENEUR, ZARLKR, KZTGBP, NOKEUR, CADKRW, EURMGA, NZDIDR, CHFMAL, CADILS, SGDZAR, AEDCAD, USDBRL, GBPDKK, ILSJPY, AUDTRY, VRNCHF, SEKAUD, PLNEUR, XCDGBP, ZARAUD, CDFEUR, SARGBP, GBPCZK, IQDUSD, PGKEUR, TZSZAR, QARGBP, DKKPLN, GBPPKR, USDUAH, USDNOK, GBPCNY, USDRUB, HKDEUR, ARSXAG, XPDUSD, USDMUR, PHPEUR, KRWHKD, MXNSGD, THBCNY, XAUJPY, EUROMR, IDRHKD, GBPCAD, USDISK, IDRKRW, JPYTHB, GBPCHF, SGDAED, USDMVR, BRLCLP, HKDGBP, TZSEUR, USDDOP, CZKPLN, IDRCNY, SARJPY, NZDSGD, AUDZAR, USDUYU, ZARBWP, TWDDKK, CHFNBL, MXNPLN, USDBSD, GBPCNH, EURMDL, SGDGBP, KRWCNY, PLNMXN, DKKCAD, CNHAUD, TRYZAR, PGKAUD, RUBDKK, TRYDKK, RUBCHF, JPYKRW, TRYJPY, AEDEUR, GBPBRL, PYGEUR, USDPHP, USDBRI, USDARS, ILSEUR, EURTHB, USDXAU, NPRUSD, EURPYG, SARAED, SVCUSD, CHFFRN, TWDHKD, AFNEUR, ZARIDR, AUDNZD, CLPPEN, CHFZAR, MXNCOP, CADSEK, PLNILS, JPYSGD, DKKTHB, HKDAUD, AUDAED, ZARNZD, GBPTTD, ETBGBP, CHFKRW, AUDSEK, SOSGBP, USDEGP, BDTGBP, AEDCHF, CADAED, THBUSD, USDZAR, INRHKD, SVCGBP, GBPGHS, SEKILS, TMTUSD, USDMMK, ZMWUSD, USDMAL, THBZAR, EURSLL, RUBEUR, MYRSGD, ZARGBP, USDOSO, GBPSZL, JMDGBP, KRWZAR, EURBRL, NZDGBP, NZDMXN, RSDJPY, GBPFJD, AEDJPY, KRWUSD, HKDMXN, SGDTHB, AEDUSD, MUREUR, ALLUSD, XAUKRW, NOKAUD, DKKUSD, CNYMYR, CHFSZL, NGNGBP, EURHTG, KYDBMD, PLNTRY, SARXAU, CADVND, AUDINR, NADEUR, USDUGX, SGDCHF, ZARINR, UAHUSD, CHFIDR, USDDZD, EGPGBP, PKRGBP, ARSBRL, MMKEUR, USDIDR, BHDAED, MGAUSD, ZARTWD, AUDMXN, AEDOMR, EURTJS, SARPKR, CHFDOE, BBDGBP, BGNCAD, MXNHKD, AUDCNH, SZLGBP, PKRAED, JPYBDT, SEKDKK, EURLKR, LTLAUD, BDTJPY, NSOUSD, CADNZD, JPYTRY, BRLARS, BRLUSD, ARSZAR, USDNSO, USDMAD, HRKCAD, USDTTD, AUDBRL, USDYER, AWGGBP, EURNGN, MYRHKD, NZDCZK, ALLEUR, BRLXAG, SCRGBP, USDTND, EURNOK, ZARARS, KESUSD, CHFGBP, MGAEUR, EURNPR, DKKSEK, IDRGBP, ARSHKD, GHSGBP, ILSGBP, OMRZAR, INRXAU, XAUCAD, ZARJPY, MXNDKK, HKDTWD, GBPHNL, AUDXAU, KRUCHF, CADJPY, RWFEUR, JPYEUR, SGDARS, INREUR, COPUSD, USDALL, EURISK, GBPQAR, LKRGBP, BIFEUR, SGDAUD, NZDAUD, EURPKR, XAUTRY, EURUAH, PLNNZD, EURXPT, EURZMW, BSDUSD, IDREUR, NZDTWD, MXNNZD, PKRSAR, ILSJOD, SLLGBP, GBPNIO, NZDAED, ZAREUR, GTQGBP, CHFTWD, CZKJPY, SGDINR, MOPEUR, LAKEUR, AUDKRW, USDGNF, XAUUSD, THBPKR, DZDEUR, CLPMXN, NGNZAR, RSDEUR, CADHUF, CNHUSD, HRKPLN, CHFEUR, HKDZAR, CADTHB, MYRJPY, SGDSEK, JPYZAR, KRWIDR, CNYZAR, ILSUSD, KHREUR, ZARPLN, THBAUD, CNYHKD, KRWXAU, USDHRK, DKKHKD, ZARAED, GBPKWD, CADSGD, AUDMYR, RUBNOK, GBPSCR, SEKRUB, USDUZS, GBPNZD, THBJPY, DKKNZD, HUFAUD, DKKMYR, CADIDR, BBDBMD, RUBKRW, KRWNZD, USDGYD, PKREUR, CHFDKK, GBPSOS, BRLEUR, CNYBGN, HKDUSD, CHFMXN, AEDBHD, USDTJS, BRLXAU, USDAUN, GNFEUR, UYUGBP, QARAED, ETBEUR, PENGBP, USDJMD, USDNIO, MYRTWD, RWFGBP, GBPLAK, SGDCAD, CVEUSD, HKDIDR, JPYPHP, EURPEN, RUBMXN, CNYSGD, EURCNH, RSDBRL, USDLSL, NZDMYR, DKKEUR, PENARS, ZARCYP, JPYINR, ARSEUR, PGKGBP, GBPIQD, USDMDL, MYRIDR, MYRCAD, UGXZAR, UYUEUR, CUPUSD, USDSOS, DOPEUR, BHDUSD, MXNCAD, NZDDKK, BZDGBP, PLNHKD, EURBWP, BWPEUR, EURDKK, TWDCAD, KYDGBP, KRWGBP, LSLGBP, CZKDKK, SGDMYR, PLNGBP, CADZAR, GBPAWG, GBPXAU, SGDPKR, KRWSGD, AUDNOK, PHPGBP, USDRON, XAGMXN, CHFKRU, KRWMYR, CNYJPY, PKRUSD, LBPUSD, CHFVRL, DZDUSD, GBPPYG, BOBEUR, MXNGBP, GBPBHD, AUDGBP, HKDNZD, AEDAUD, DKKZAR, BRLCAD, FJDUSD, EURKRW, JPYIDR, GBPEUR, ZARTZS, INRTHB, CADEUR, BRLMXN, XAGRUB, SEKINR, EURBOB, SGDUSD, USDKES, ZARSGD, YEREUR, USDTHB, USDSGD, EURGYD, AUDILS, GBPTND, BGNAUD, EURTZS, GBPCDF, MYREUR, USDPAB, TTDGBP, VNDCAD, TWDIDR, USDETB, JPYSEK, MDLUSD, PLNSGD, EURBND, EURCZK, USDLBP, USDCDF, THBIDR, COPARS, EURUGX, USDSVC, ARSXAU, EURJMD, USDPGK, TNDEUR, AUDEUR, CADXAG, TWDEUR, XPTGBP, USDCOP, GBPCUP, PKRMYR, JPYBRL, USDBAM, JPYCZK, GBPJMD, NZDEUR, XAGZAR, MZNEUR, LBPEUR, GBPMKD, SGDJPY, JMDUSD, XAUZAR, RUBXAG, USDNGN, INRAUD, USDKZT, CHFNOK, BGNEUR, TRYUSD, USDSLL, NZDPLN, AUDMAD, GBPNOK, IDRSGD, BMDCAD, USDMKD, FJDAUD, KRWAUD, INRMYR, CDFUSD, AEDPKR, AUNCHF, USDKRW, MXNBRL, ILSZAR, EURSGD, JPYDKK, USDAUD, BRLPEN, PABUSD, NGNJPY, ZARCZK, EURKYD, EURBSD, CADBMD, XAUGBP, ZARRWF, TWDKRW, TTDEUR, DZDGBP, SDGUSD, OSOUSD, RUBPLN, USDHNL, ZARNGN, XPDEUR, AEDSAR, NOKRUB, HKDXAU, IDRAUD, XAGJPY, USDBDT, TNDGBP, BBDUSD, PLNHUF, KESGBP, IDRJPY, AUNUSD, MKDUSD, BRLAUD, THBKRW, KZTUSD, SEKNZD, GBPYER, NZDPKR, AUDDKK, UAHDKK, MXNARS, INRNOK, ZMWZAR, SEKSGD, NZDCNY, CADBRL, DJFGBP, GBPILS, USDKMF, HKDMYR, CADTWD, EURMKD, USDCNH, USDAWG, SEKAED, KWDGBP, CHFNSO, XAGGBP, ZARSEK, JPYILS, INRIDR, SEKGBP, XAUSAR, CDFGBP, KRWXAG, RUBJPY, SCRUSD, NOKAED, NZDCHF, ARSAUD, BGNCNY, EURFJD, ZARCOP, NZDTHB, UZSEUR, EURGTQ, RUBZAR, UZSUSD, CUPEUR, SGDKRW, BWPGBP, INRCHF, EGPPKR, PLNNOK, COPZAR, XAUARS, XAGINR, THBSGD, EURINR, EURAMD, XAUMXN, CHFARS, EURCUP, LRDEUR, TRYEUR, VRLCHF, THBCAD, INRTWD, FRNCHF, CHFRUB, GBPUGX, NZDTRY, CLPEUR, KYDEUR, GBPMDL, USDLRD, FJDGBP, TWDCNY, EURCOP, USDHTG, CLPJPY, JPYCLP, FJDEUR, CNYTHB, AEDINR, EURIQD, RONUSD, PKRDKK, CNYXAU, GHSUSD, CNYGBP, USDGTQ, TWDSGD, HUFPLN, BGNUSD, EURLRD, TJSEUR, EURBMD, USDLAK, NZDINR, NZDJPY, USDDJF, EURLBP, SGDTWD, BRLCHF, LAKUSD, SOSUSD, SEKCZK, JPYRSD, UGXUSD, USDOMR, INRSGD, IDRZAR, NOKGBP, BDTUSD, NZDHUF, BZDUSD, KRWJPY, CNYAUD, THBTWD, MWKGBP, NZDSEK, EURJOD, ZARXAG, KRWEUR, AWGUSD, INRJPY, EURMYR, AUDCZK, MXNXAU, NZDNOK, TNDZAR, KYDUSD, ZARMWK, THBEUR, SEKPLN, XAGTRY, TRYAUD, HRKGBP, MMKUSD, EURMAD, USDMWK, EURSOS, INRKRW, BRLJPY, GBPDZD, GBPETB, JPYNOK, CADINR, EURBDT, KWDSAR, TRYXAU, XAGUSD, USDSCR, ZARILS, USDIQD, ALLGBP, IDRNZD, USDKYD, DKKCHF, CHFUSD, GBPMGA, HKDPKR, HNLGBP, BOBUSD, XAUTHB, DKKAUD, RONEUR, MYRCNY, AUDFJD, UAHEUR, ARSPEN, NOKCHF, HRKUSD, AEDGBP, ARSCOP, CADBGN, EURGNF, AEDKWD, HKDDKK, CNYDKK, HKDCHF, MOPGBP, GBPAUD, NOKUSD, NIOUSD, USDCZK, SOSEUR, AEDQAR, MYRAUD, NBLCHF, ARSMXN, MXNUSD, HKDARS, JODEUR, USDZMW, JODGBP, SGDMXN, USDPYG, USDLKR, BRICHF, BRLSGD, SGDHKD, XAUAUD, GBPPEN, COPPEN, MGAGBP, RSDUSD, EURXPD, JPYSAR, BZDEUR, CZKAUD, SEKBRL, AUDARS, XAGKRW, USDPLN, SGDNOK, GBPOMR, PLNRUB, THBNZD, ISKGBP, USDEUR, ZMWEUR, ZARTHB, KESZAR, JODAED, XPDGBP, MKDEUR, HKDSGD, XAUCNY, GBPKES, BWPCHF, EURHNL, AEDZAR, ZAROMR, AUDSGD, AEDNOK, INRZAR, PLNSEK, CHFAED, GBPJOD, JPYUSD, XAUEUR, GBPISK, JPYCAD, CADMXN, IDRUSD, MXNCLP, DKKRUB, MOPUSD, EURHUF, RUBUSD, OMREUR, GBPSAR, ZARZMW, EURXAG, EURMMK, CNYIDR, CNYEUR, MXNCHF, CLPUSD, MVRUSD, BHDGBP, HKDKRW, PKRBHD, CHFPLN, NADZAR, SHPUSD, SGDEUR, GBPALL, JPYXAU, ZARTND, DKKINR, SGDCNY, USDMGA, DKKJPY, GBPAMD, TRYPLN, SLLEUR, USDMXN, USDBGN, CZKGBP, XAGSAR, ISKCHF, EURALL, GBPGYD, KRWSEK, EURLSL, PHPZAR, CHFJPY, EURKZT, SZLZAR, TWDINR, TWDNZD, ARSUSD, GBPBWP, ZARGHS, JPYGBP, PKRTHB, KRWTHB, GBPMVR, ARSCHF, ILSSEK, USDSAR, BNDEUR, ZARKES, LYDEUR, GBPPLN, ZAREGP, TWDZAR, BSDEUR, EURCLP, GBPKRW, JPYAUD, GBPBSD, CHFAUD, HUFGBP, KRWTWD, GBPUYU, MXNXAG, USDKHR, DKKPKR, AUDCAD, KRWRUB, XAGAUD, MADGBP, ISKUSD, SLLUSD, DKKHUF, USDPKR, GBPBOB, USDCUP, SGDPLN, EURBTN, PENUSD, KYDCAD, DKKGBP, CADDKK, LSLUSD, TWDSEK, JPYHKD, CNYINR, USDPEN, EURLYD, HUFEUR, TRYSGD, SGDDKK, IDRTHB")),(0,S.kt)("tr",{parentName:"tbody"},(0,S.kt)("td",{parentName:"tr",align:null},"resolution"),(0,S.kt)("td",{parentName:"tr",align:null},"-r  --resolution"),(0,S.kt)("td",{parentName:"tr",align:null},"[Alphavantage only]"," Resolution of data. Can be intraday, daily, weekly or monthly"),(0,S.kt)("td",{parentName:"tr",align:null},"d"),(0,S.kt)("td",{parentName:"tr",align:null},"True"),(0,S.kt)("td",{parentName:"tr",align:null},"i, d, w, m")),(0,S.kt)("tr",{parentName:"tbody"},(0,S.kt)("td",{parentName:"tr",align:null},"interval"),(0,S.kt)("td",{parentName:"tr",align:null},"-i  --interval"),(0,S.kt)("td",{parentName:"tr",align:null},"Interval of intraday data. Options: ","[YahooFinance]"," 1min, 2min, 5min, 15min, 30min, 60min, 90min, 1hour, 1day, 5day, 1week, 1month, 3month. ","[AlphaVantage]"," 1min, 5min, 15min, 30min, 60min"),(0,S.kt)("td",{parentName:"tr",align:null},"1day"),(0,S.kt)("td",{parentName:"tr",align:null},"True"),(0,S.kt)("td",{parentName:"tr",align:null},"1min, 5min, 15min, 30min, 60min, 90min, 1hour, 1day, 5day, 1week, 1month, 3month")),(0,S.kt)("tr",{parentName:"tbody"},(0,S.kt)("td",{parentName:"tr",align:null},"start_date"),(0,S.kt)("td",{parentName:"tr",align:null},"-s  --start"),(0,S.kt)("td",{parentName:"tr",align:null},"The starting date (format YYYY-MM-DD) of the forex pair"),(0,S.kt)("td",{parentName:"tr",align:null},"datetime.now() - timedelta(days=365)"),(0,S.kt)("td",{parentName:"tr",align:null},"True"),(0,S.kt)("td",{parentName:"tr",align:null},"None")),(0,S.kt)("tr",{parentName:"tbody"},(0,S.kt)("td",{parentName:"tr",align:null},"end"),(0,S.kt)("td",{parentName:"tr",align:null},"-e  --end"),(0,S.kt)("td",{parentName:"tr",align:null},"The ending date (format YYYY-MM-DD) of the forex pair"),(0,S.kt)("td",{parentName:"tr",align:null},"2024-02-05"),(0,S.kt)("td",{parentName:"tr",align:null},"True"),(0,S.kt)("td",{parentName:"tr",align:null},"None")))),(0,S.kt)("hr",null))}n.isMDXComponent=!0}}]);