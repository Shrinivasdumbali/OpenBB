"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[83522],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>u});var a=r(67294);function s(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){s(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,s=function(e,t){if(null==e)return{};var r,a,s={},n=Object.keys(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||(s[r]=e[r]);return s}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(s[r]=e[r])}return s}var c=a.createContext({}),l=function(e){var t=a.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},d=function(e){var t=l(e.components);return a.createElement(c.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},f=a.forwardRef((function(e,t){var r=e.components,s=e.mdxType,n=e.originalType,c=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),p=l(r),f=s,u=p["".concat(c,".").concat(f)]||p[f]||m[f]||n;return r?a.createElement(u,o(o({ref:t},d),{},{components:r})):a.createElement(u,o({ref:t},d))}));function u(e,t){var r=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var n=r.length,o=new Array(n);o[0]=f;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[p]="string"==typeof e?e:s,o[1]=i;for(var l=2;l<n;l++)o[l]=r[l];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}f.displayName="MDXCreateElement"},62872:(e,t,r)=>{r.d(t,{Z:()=>i});var a=r(39960),s=r(86010),n=r(67294),o=r(16550);function i(e){let{title:t,url:r,description:i,command:c}=e;const{pathname:l}=(0,o.TH)(),d=l.replace(/\/v\d+/,"");return n.createElement(a.Z,{className:(0,s.Z)("rounded border-2 !no-underline border-grey-600 p-6 cursor-pointer relative overflow-hidden hover:shadow-2xl hover:-translate-y-2 transform transition-all duration-300 ease-in-out font-bold shadow-2xl",{header_docs_terminal:d.startsWith("/terminal"),"bg-gradient-to-r from-[#541c12] to-[rgba(84, 29, 19, 1)]":d.startsWith("/sdk")||d.startsWith("/platform"),"bg-gradient-to-r from-grey-800 to-purple-800":d.startsWith("/bot"),header_docs:!(d.startsWith("/terminal")||d.startsWith("/sdk")||d.startsWith("/platform")||d.startsWith("/bot"))}),to:r},n.createElement("div",{className:"absolute top-0 right-0 left-0 bottom-0 bg-gradient-to-t from-black to-transparent"}),n.createElement("p",{className:"py-2 font-bold text-lg my-0"},t,""),i?n.createElement("p",{className:"text-grey-200 text-xs mt-2 mb-0"},i):null)}},29308:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>f,frontMatter:()=>o,metadata:()=>c,toc:()=>d});var a=r(87462),s=(r(67294),r(3905)),n=r(62872);const o={},i="reference",c={unversionedId:"sdk/reference/index",id:"sdk/reference/index",title:"reference",description:"<ReferenceCard",source:"@site/content/sdk/reference/index.mdx",sourceDirName:"sdk/reference",slug:"/sdk/reference/",permalink:"/sdk/reference/",draft:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/sdk/reference/index.mdx",tags:[],version:"current",lastUpdatedBy:"montezdesousa",lastUpdatedAt:1713550349,formattedLastUpdatedAt:"Apr 19, 2024",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Technical Analysis",permalink:"/sdk/data-available/ta"},next:{title:"global_cases",permalink:"/sdk/reference/alt/covid/global_cases"}},l={},d=[],p={toc:d},m="wrapper";function f(e){let{components:t,...r}=e;return(0,s.kt)(m,(0,a.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"reference"},"reference"),(0,s.kt)("ul",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 -ml-6"},(0,s.kt)(n.Z,{title:"alt",description:"global_cases global_deaths ov slopes stat github_data history ross search summary top _make_request _retry_session",url:"reference/alt",mdxType:"ReferenceCard"}),(0,s.kt)(n.Z,{title:"crypto",description:"candles chart find load price active all_binance_trading_pairs balance basic binance_available_quotes_for_each_coin candles change check_valid_binance_str close coin coin_market_chart eb events ex exchanges fr get_mt gh gov headlines inv links mcapdom mkt mt news nonzero ob oi pi pr ps rm show_available_pairs_for_given_symbol stats team tk tokenomics trades trading_pairs trading_pair_info twitter anchor_data aterra ayr dtvl gacc gdapps gov_proposals ldapps luna_supply newsletters sinfo sratio sreturn stvl validators vaults categories_keys coins coins_for_given_exchange coin_list cpsearch gainers losers top_coins top_dapps top_dexes top_games top_nfts trending collections fp stats baas balance btc_supply btc_transac dex_trades_monthly dvcp erc20_tokens gwei hist holders hr info lt prices query_graph th token_decimals top ttcp tv tx ueat whales altindex btcrb categories cbpairs coin_list contracts cr crypto_hack crypto_hacks crypto_hack_slugs defi derivatives ewf exchanges exmarkets exrates globe hm hold indexes info markets news platforms products stables wf wfpe apy il",url:"reference/crypto",mdxType:"ReferenceCard"}),(0,s.kt)(n.Z,{title:"econometrics",description:"bgod bols bpag clean coint comparison dwat fdols fe get_regression_data granger load norm ols options panel pols re root",url:"reference/econometrics",mdxType:"ReferenceCard"}),(0,s.kt)(n.Z,{title:"economy",description:"available_indices bigmac country_codes cpi currencies events fred fred_ids fred_notes future futures gdp gdpc get_groups glbonds index_cmd indices inf macro macro_countries macro_parameters overview perfmap performance search_index spectrum treasury treasury_maturities tyld unemp usbonds valuation ycrv",url:"reference/economy",mdxType:"ReferenceCard"}),(0,s.kt)(n.Z,{title:"etf",description:"candle etf_by_category etf_by_name holdings ld ln load news overview summary symbols weights mover screen",url:"reference/etf",mdxType:"ReferenceCard"}),(0,s.kt)(n.Z,{title:"fixedincome",description:"",url:"reference/fixedincome",mdxType:"ReferenceCard"}),(0,s.kt)(n.Z,{title:"forecast",description:"atr autoarima autoces autoets autoselect brnn clean combine corr delete delta desc ema expo export linregr load mom mstl nbeats nhits plot regr rename rnn roc rsi rwd season seasonalnaive show signal sto tcn tft theta trans",url:"reference/forecast",mdxType:"ReferenceCard"}),(0,s.kt)(n.Z,{title:"forex",description:"candle fwd get_currency_list load quote calendar cancel candles close listorders openpositions opentrades order orderbook pending positionbook price summary",url:"reference/forex",mdxType:"ReferenceCard"}),(0,s.kt)(n.Z,{title:"futures",description:"curve historical search",url:"reference/futures",mdxType:"ReferenceCard"}),(0,s.kt)(n.Z,{title:"keys",description:"av binance bitquery cmc coinbase coinglass cpanic degiro eodhd ethplorer finnhub fmp fred get_keys_info github glassnode iex messari mykeys news oanda polygon quandl reddit rh santiment set_keys si smartstake stocksera tokenterminal tradier twitter walert",url:"reference/keys",mdxType:"ReferenceCard"}),(0,s.kt)(n.Z,{title:"portfolio",description:"bench distr dret es holdp holdv load maxdd mret om perf rbeta rsharpe rsort rvol show summary var yret assets countries regions sectors calmar commonsense gaintopain information jensens kelly kurtosis maxdrawdown payoff profitfactor rsquare sharpe skew sortino tail trackerr volatility blacklitterman dividend ef equal file get_properties hcp herc hrp load load_bl_views maxdecorr maxdiv maxret maxsharpe maxutil minrisk mktcap nco plot property relriskparity riskparity show",url:"reference/portfolio",mdxType:"ReferenceCard"}),(0,s.kt)(n.Z,{title:"qa",description:"acf bw calculate_adjusted_var cdf cusum decompose es hist kurtosis line normality omega qqplot quantile rolling sharpe skew sortino spread summary unitroot var",url:"reference/qa",mdxType:"ReferenceCard"}),(0,s.kt)(n.Z,{title:"stocks",description:"candle load process_candle quote search tob bullbear cnews getdd headlines hist infer mentions messages popular queries redditsent regions rise sentiment snews spac spacc stalker text_sent trend trending watchlist wsb balance cashflow hcorr hist income scorr screener sentiment similar volume analyst arktrades customer est news pt rating rot sec supplier active arkord asc dividends fipo gainers gtech hotpenny ipo losers lowfloat news pipo rtat trending ugs ulc upcoming ctb dpotc ftd hsi pos prom psi_q psi_sg shorted sidtc spos analysis balance cal cash data dcf divs dupont earnings enterprise fama_coe fama_raw fraud growth historical_5 hq income info key metrics mgmt mktcap overview profile quote ratios score shrs similar_dfs splits sust website contracts government_trading gtrades histcont lastcontracts lasttrades lobbying qtrcontracts topbuys toplobbying topsells act lins print_insider_data chains dte expirations generate_data grhist hist hist_ce info last_price pcr process_chains unu vsurf check_presets screener_output beta capm fama_raw historical_5 historical screener_data countries cpci cpcs cpic cpis cps filter_stocks industries maketcap sectors stocks_data recom summary view all check_if_open closed exchange open",url:"reference/stocks",mdxType:"ReferenceCard"}),(0,s.kt)(n.Z,{title:"ta",description:"ad adosc adx aroon atr bbands cci cg clenow demark donchian ema fib fisher hma kc ma macd obv rsi sma stoch vwap wma zlma",url:"reference/ta",mdxType:"ReferenceCard"}),(0,s.kt)(n.Z,{title:"news",description:"test",url:"reference/news",mdxType:"ReferenceCard"})))}f.isMDXComponent=!0}}]);