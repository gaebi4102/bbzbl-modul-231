"use strict";(self.webpackChunkbbzbl_modul_231=self.webpackChunkbbzbl_modul_231||[]).push([[920],{2027:(e,t,r)=>{r.r(t),r.d(t,{default:()=>F});var a=r(7294),n=r(2263),l=r(179),s=r(5742),c=r(9960),o=r(5999);const u=["zero","one","two","few","many","other"];function m(e){return u.filter((t=>e.includes(t)))}const h={locale:"en",pluralForms:m(["one","other"]),select:e=>1===e?"one":"other"};function i(){const{i18n:{currentLocale:e}}=(0,n.Z)();return(0,a.useMemo)((()=>{try{return function(e){const t=new Intl.PluralRules(e);return{locale:e,pluralForms:m(t.resolvedOptions().pluralCategories),select:e=>t.select(e)}}(e)}catch(t){return console.error(`Failed to use Intl.PluralRules for locale "${e}".\nDocusaurus will fallback to the default (English) implementation.\nError: ${t.message}\n`),h}}),[e])}function p(){const e=i();return{selectMessage:(t,r)=>function(e,t,r){const a=e.split("|");if(1===a.length)return a[0];a.length>r.pluralForms.length&&console.error(`For locale=${r.locale}, a maximum of ${r.pluralForms.length} plural forms are expected (${r.pluralForms.join(",")}), but the message contains ${a.length}: ${e}`);const n=r.select(t),l=r.pluralForms.indexOf(n);return a[Math.min(l,a.length-1)]}(r,t,e)}}var g=r(6010),d=r(6550),f=r(412);const y=function(){const e=(0,d.k6)(),t=(0,d.TH)(),{siteConfig:{baseUrl:r}}=(0,n.Z)(),a=f.Z.canUseDOM?new URLSearchParams(t.search):null,l=a?.get("q")||"",s=a?.get("ctx")||"",c=a?.get("version")||"",o=e=>{const r=new URLSearchParams(t.search);return e?r.set("q",e):r.delete("q"),r};return{searchValue:l,searchContext:s,searchVersion:c,updateSearchPath:t=>{const r=o(t);e.replace({search:r.toString()})},updateSearchContext:r=>{const a=new URLSearchParams(t.search);a.set("ctx",r),e.replace({search:a.toString()})},generateSearchPageLink:e=>{const t=o(e);return`${r}search?${t.toString()}`}}};var E=r(22),S=r(8202),C=r(2539),I=r(726),x=r(1073),v=r(311),w=r(3926),b=r(1029);const R={searchContextInput:"searchContextInput_mXoe",searchQueryInput:"searchQueryInput_CFBF",searchResultItem:"searchResultItem_U687",searchResultItemPath:"searchResultItemPath_uIbk",searchResultItemSummary:"searchResultItemSummary_oZHr",searchQueryColumn:"searchQueryColumn_q7nx",searchContextColumn:"searchContextColumn_oWAF"};function P(){const{siteConfig:{baseUrl:e}}=(0,n.Z)(),{selectMessage:t}=p(),{searchValue:r,searchContext:l,searchVersion:c,updateSearchPath:u,updateSearchContext:m}=y(),[h,i]=(0,a.useState)(r),[d,f]=(0,a.useState)(),[C,I]=(0,a.useState)(),x=`${e}${c}`,w=(0,a.useMemo)((()=>h?(0,o.I)({id:"theme.SearchPage.existingResultsTitle",message:'Search results for "{query}"',description:"The search page title for non-empty query"},{query:h}):(0,o.I)({id:"theme.SearchPage.emptyResultsTitle",message:"Search the documentation",description:"The search page title for empty query"})),[h]);(0,a.useEffect)((()=>{u(h),d&&(h?d(h,(e=>{I(e)})):I(void 0))}),[h,d]);const P=(0,a.useCallback)((e=>{i(e.target.value)}),[]);return(0,a.useEffect)((()=>{r&&r!==h&&i(r)}),[r]),(0,a.useEffect)((()=>{!async function(){const{wrappedIndexes:e,zhDictionary:t}=await(0,E.w)(x,l);f((()=>(0,S.v)(e,t,100)))}()}),[l,x]),a.createElement(a.Fragment,null,a.createElement(s.Z,null,a.createElement("meta",{property:"robots",content:"noindex, follow"}),a.createElement("title",null,w)),a.createElement("div",{className:"container margin-vert--lg"},a.createElement("h1",null,w),a.createElement("div",{className:"row"},a.createElement("div",{className:(0,g.Z)("col",{[R.searchQueryColumn]:Array.isArray(b.Kc),"col--9":Array.isArray(b.Kc),"col--12":!Array.isArray(b.Kc)})},a.createElement("input",{type:"search",name:"q",className:R.searchQueryInput,"aria-label":"Search",onChange:P,value:h,autoComplete:"off",autoFocus:!0})),Array.isArray(b.Kc)?a.createElement("div",{className:(0,g.Z)("col","col--3","padding-left--none",R.searchContextColumn)},a.createElement("select",{name:"search-context",className:R.searchContextInput,id:"context-selector",value:l,onChange:e=>m(e.target.value)},a.createElement("option",{value:""},b.pQ?(0,o.I)({id:"theme.SearchPage.searchContext.everywhere",message:"everywhere"}):""),b.Kc.map((e=>a.createElement("option",{key:e,value:e},e))))):null),!d&&h&&a.createElement("div",null,a.createElement(v.Z,null)),C&&(C.length>0?a.createElement("p",null,t(C.length,(0,o.I)({id:"theme.SearchPage.documentsFound.plurals",message:"1 document found|{count} documents found",description:'Pluralized label for "{count} documents found". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)'},{count:C.length}))):a.createElement("p",null,(0,o.I)({id:"theme.SearchPage.noResultsText",message:"No documents were found",description:"The paragraph for empty search result"}))),a.createElement("section",null,C&&C.map((e=>a.createElement(_,{key:e.document.i,searchResult:e}))))))}function _(e){let{searchResult:{document:t,type:r,page:n,tokens:l,metadata:s}}=e;const o=0===r,u=2===r,m=(o?t.b:n.b).slice(),h=u?t.s:t.t;o||m.push(n.t);let i="";if(b.vc&&l.length>0){const e=new URLSearchParams;for(const t of l)e.append("_highlight",t);i=`?${e.toString()}`}return a.createElement("article",{className:R.searchResultItem},a.createElement("h2",null,a.createElement(c.Z,{to:t.u+i+(t.h||""),dangerouslySetInnerHTML:{__html:u?(0,C.C)(h,l):(0,I.o)(h,(0,x.m)(s,"t"),l,100)}})),m.length>0&&a.createElement("p",{className:R.searchResultItemPath},(0,w.e)(m)),u&&a.createElement("p",{className:R.searchResultItemSummary,dangerouslySetInnerHTML:{__html:(0,I.o)(t.t,(0,x.m)(s,"t"),l,100)}}))}const F=function(){return a.createElement(l.Z,null,a.createElement(P,null))}}}]);