import{_ as M}from"./preload-helper.a4192956.js";import{w as j,d as P}from"./index.d2a4d08c.js";import{a1 as f}from"./scheduler.925eed20.js";var ne=Object.defineProperty,ce=Object.defineProperties,ue=Object.getOwnPropertyDescriptors,D=Object.getOwnPropertySymbols,Q=Object.prototype.hasOwnProperty,U=Object.prototype.propertyIsEnumerable,z=(t,r,e)=>r in t?ne(t,r,{enumerable:!0,configurable:!0,writable:!0,value:e}):t[r]=e,u=(t,r)=>{for(var e in r||(r={}))Q.call(r,e)&&z(t,e,r[e]);if(D)for(var e of D(r))U.call(r,e)&&z(t,e,r[e]);return t},m=(t,r)=>ce(t,ue(r)),T=(t,r)=>{var e={};for(var a in t)Q.call(t,a)&&r.indexOf(a)<0&&(e[a]=t[a]);if(t!=null&&D)for(var a of D(t))r.indexOf(a)<0&&U.call(t,a)&&(e[a]=t[a]);return e},N=["error","warn","debug"],X=({logger:t=console,level:r=N[1],prefix:e="[i18n]: "})=>N.reduce((a,l,i)=>m(u({},a),{[l]:o=>N.indexOf(r)>=i&&t[l](`${e}${o}`)}),{}),d=X({}),de=t=>{d=t},H=t=>{var r=t,{parser:e,key:a,params:l,translations:i,locale:o,fallbackLocale:s}=r,c=T(r,["parser","key","params","translations","locale","fallbackLocale"]);if(!a)return d.warn(`No translation key provided ('${o}' locale). Skipping translation...`),"";if(!o)return d.warn(`No locale provided for '${a}' key. Skipping translation...`),"";let n=(i[o]||{})[a];if(s&&n===void 0&&(d.debug(`No translation provided for '${a}' key in locale '${o}'. Trying fallback '${s}'`),n=(i[s]||{})[a]),n===void 0){if(d.debug(`No translation provided for '${a}' key in fallback '${s}'.`),c.hasOwnProperty("fallbackValue"))return c.fallbackValue;d.warn(`No translation nor fallback found for '${a}' .`)}return e.parse(n,l,o,a)},v=(...t)=>t.length?t.filter(r=>!!r).map(r=>{let e=`${r}`.toLowerCase();try{let[a]=Intl.Collator.supportedLocalesOf(r);if(!a)throw new Error;e=a}catch{d.warn(`'${r}' locale is non-standard.`)}return e}):[],A=(t,r,e)=>{if(r&&Array.isArray(t))return t.map(a=>A(a,r));if(t&&typeof t=="object"){let a=Object.keys(t).reduce((l,i)=>{let o=t[i],s=e?`${e}.${i}`:`${i}`;return o&&typeof o=="object"&&!(r&&Array.isArray(o))?u(u({},l),A(o,r,s)):m(u({},l),{[s]:A(o,r)})},{});return Object.keys(a).length?a:null}return t},fe=t=>t.reduce((r,{key:e,data:a,locale:l})=>{if(!a)return r;let[i]=v(l),o=m(u({},r[i]||{}),{[e]:a});return m(u({},r),{[i]:o})},{}),pe=async t=>{try{let r=await Promise.all(t.map(e=>{var a=e,{loader:l}=a,i=T(a,["loader"]);return new Promise(async o=>{let s;try{s=await l()}catch(c){d.error(`Failed to load translation. Verify your '${i.locale}' > '${i.key}' Loader.`),d.error(c)}o(m(u({loader:l},i),{data:s}))})}));return fe(r)}catch(r){d.error(r)}return{}},he=t=>r=>{try{if(typeof r=="string")return r===t;if(typeof r=="object")return r.test(t)}catch{d.error("Invalid route config!")}return!1},q=(t,r)=>{let e=!0;try{e=Object.keys(t).filter(a=>t[a]!==void 0).every(a=>t[a]===r[a])}catch{}return e},W=1e3*60*60*24,ye=class{constructor(r){this.cachedAt=0,this.loadedKeys={},this.currentRoute=j(),this.config=j(),this.isLoading=j(!1),this.promises=new Set,this.loading={subscribe:this.isLoading.subscribe,toPromise:(e,a)=>{let{fallbackLocale:l}=f(this.config),i=Array.from(this.promises).filter(o=>{let s=q({locale:v(e)[0],route:a},o);return l&&(s=s||q({locale:v(l)[0],route:a},o)),s}).map(({promise:o})=>o);return Promise.all(i)},get:()=>f(this.isLoading)},this.privateRawTranslations=j({}),this.rawTranslations={subscribe:this.privateRawTranslations.subscribe,get:()=>f(this.rawTranslations)},this.privateTranslations=j({}),this.translations={subscribe:this.privateTranslations.subscribe,get:()=>f(this.translations)},this.locales=m(u({},P([this.config,this.privateTranslations],([e,a])=>{if(!e)return[];let{loaders:l=[]}=e,i=l.map(({locale:s})=>s),o=Object.keys(a).map(s=>s);return Array.from(new Set([...v(...i),...v(...o)]))},[])),{get:()=>f(this.locales)}),this.internalLocale=j(),this.loaderTrigger=P([this.internalLocale,this.currentRoute],([e,a],l)=>{var i,o;e!==void 0&&a!==void 0&&!(e===((i=f(this.loaderTrigger))==null?void 0:i[0])&&a===((o=f(this.loaderTrigger))==null?void 0:o[1]))&&(d.debug("Triggering translation load..."),l([e,a]))},[]),this.localeHelper=j(),this.locale={subscribe:this.localeHelper.subscribe,forceSet:this.localeHelper.set,set:this.internalLocale.set,update:this.internalLocale.update,get:()=>f(this.locale)},this.initialized=P([this.locale,this.currentRoute,this.privateTranslations],([e,a,l],i)=>{f(this.initialized)||i(e!==void 0&&a!==void 0&&!!Object.keys(l).length)}),this.translation=P([this.privateTranslations,this.locale,this.isLoading],([e,a,l],i)=>{let o=e[a];o&&Object.keys(o).length&&!l&&i(o)},{}),this.t=m(u({},P([this.config,this.translation],e=>{var[a]=e,l=a,{parser:i,fallbackLocale:o}=l,s=T(l,["parser","fallbackLocale"]);return(c,...n)=>H(u({parser:i,key:c,params:n,translations:this.translations.get(),locale:this.locale.get(),fallbackLocale:o},s.hasOwnProperty("fallbackValue")?{fallbackValue:s.fallbackValue}:{}))})),{get:(e,...a)=>f(this.t)(e,...a)}),this.l=m(u({},P([this.config,this.translations],e=>{var[a,...l]=e,i=a,{parser:o,fallbackLocale:s}=i,c=T(i,["parser","fallbackLocale"]),[n]=l;return(p,h,...b)=>H(u({parser:o,key:h,params:b,translations:n,locale:p,fallbackLocale:s},c.hasOwnProperty("fallbackValue")?{fallbackValue:c.fallbackValue}:{}))})),{get:(e,a,...l)=>f(this.l)(e,a,...l)}),this.getLocale=e=>{let{fallbackLocale:a}=f(this.config)||{},l=e||a;if(!l)return;let i=this.locales.get();return i.find(o=>v(l).includes(o))||i.find(o=>v(a).includes(o))},this.setLocale=e=>{if(e&&e!==f(this.internalLocale))return d.debug(`Setting '${e}' locale.`),this.internalLocale.set(e),this.loading.toPromise(e,f(this.currentRoute))},this.setRoute=e=>{if(e!==f(this.currentRoute)){d.debug(`Setting '${e}' route.`),this.currentRoute.set(e);let a=f(this.internalLocale);return this.loading.toPromise(a,e)}},this.loadConfig=async e=>{await this.configLoader(e)},this.getTranslationProps=async(e=this.locale.get(),a=f(this.currentRoute))=>{let l=f(this.config);if(!l||!e)return[];let i=this.translations.get(),{loaders:o,fallbackLocale:s="",cache:c=W}=l||{},n=Number.isNaN(+c)?W:+c;this.cachedAt?Date.now()>n+this.cachedAt&&(d.debug("Refreshing cache."),this.loadedKeys={},this.cachedAt=0):(d.debug("Setting cache timestamp."),this.cachedAt=Date.now());let[p,h]=v(e,s),b=i[p],V=i[h],w=(o||[]).map(y=>{var k=y,{locale:R}=k,g=T(k,["locale"]);return m(u({},g),{locale:v(R)[0]})}).filter(({routes:y})=>!y||(y||[]).some(he(a))).filter(({key:y,locale:k})=>k===p&&(!b||!(this.loadedKeys[p]||[]).includes(y))||s&&k===h&&(!V||!(this.loadedKeys[h]||[]).includes(y)));if(w.length){this.isLoading.set(!0),d.debug("Fetching translations...");let y=await pe(w);this.isLoading.set(!1);let k=Object.keys(y).reduce((g,$)=>m(u({},g),{[$]:Object.keys(y[$])}),{}),R=w.filter(({key:g,locale:$})=>(k[$]||[]).some(x=>`${x}`.startsWith(g))).reduce((g,{key:$,locale:x})=>m(u({},g),{[x]:[...g[x]||[],$]}),{});return[y,R]}return[]},this.addTranslations=(e,a)=>{if(!e)return;let l=f(this.config),{preprocess:i}=l||{};d.debug("Adding translations...");let o=Object.keys(e||{});this.privateRawTranslations.update(s=>o.reduce((c,n)=>m(u({},c),{[n]:u(u({},c[n]||{}),e[n])}),s)),this.privateTranslations.update(s=>o.reduce((c,n)=>{let p=!0,h=e[n];return typeof i=="function"&&(h=i(h)),(typeof i=="function"||i==="none")&&(p=!1),m(u({},c),{[n]:u(u({},c[n]||{}),p?A(h,i==="preserveArrays"):h)})},s)),o.forEach(s=>{let c=Object.keys(e[s]).map(n=>`${n}`.split(".")[0]);a&&(c=a[s]),this.loadedKeys[s]=Array.from(new Set([...this.loadedKeys[s]||[],...c||[]]))})},this.loader=async([e,a])=>{let l=this.getLocale(e)||void 0;d.debug(`Adding loader promise for '${l}' locale and '${a}' route.`);let i=(async()=>{let o=await this.getTranslationProps(l,a);o.length&&this.addTranslations(...o)})();this.promises.add({locale:l,route:a,promise:i}),i.then(()=>{l&&this.locale.get()!==l&&this.locale.forceSet(l)})},this.loadTranslations=(e,a=f(this.currentRoute)||"")=>{let l=this.getLocale(e);if(l)return this.setRoute(a),this.setLocale(l),this.loading.toPromise(l,a)},this.loaderTrigger.subscribe(this.loader),this.isLoading.subscribe(async e=>{e&&this.promises.size&&(await this.loading.toPromise(),this.promises.clear(),d.debug("Loader promises have been purged."))}),r&&this.loadConfig(r)}async configLoader(r){if(!r)return d.error("No config provided!");let e=r,{initLocale:a,fallbackLocale:l,translations:i,log:o}=e,s=T(e,["initLocale","fallbackLocale","translations","log"]);o&&de(X(o)),[a]=v(a),[l]=v(l),d.debug("Setting config."),this.config.set(u({initLocale:a,fallbackLocale:l,translations:i},s)),i&&this.addTranslations(i),a&&await this.loadTranslations(a)}},Y=Object.defineProperty,me=Object.defineProperties,ge=Object.getOwnPropertyDescriptors,S=Object.getOwnPropertySymbols,Z=Object.prototype.hasOwnProperty,ee=Object.prototype.propertyIsEnumerable,B=(t,r,e)=>r in t?Y(t,r,{enumerable:!0,configurable:!0,writable:!0,value:e}):t[r]=e,O=(t,r)=>{for(var e in r||(r={}))Z.call(r,e)&&B(t,e,r[e]);if(S)for(var e of S(r))ee.call(r,e)&&B(t,e,r[e]);return t},I=(t,r)=>me(t,ge(r)),L=(t,r)=>{var e={};for(var a in t)Z.call(t,a)&&r.indexOf(a)<0&&(e[a]=t[a]);if(t!=null&&S)for(var a of S(t))r.indexOf(a)<0&&ee.call(t,a)&&(e[a]=t[a]);return e},ve=(t,r)=>{for(var e in r)Y(t,e,{get:r[e],enumerable:!0})},ae={};ve(ae,{ago:()=>Pe,currency:()=>Te,date:()=>we,eq:()=>K,gt:()=>te,gte:()=>Oe,lt:()=>re,lte:()=>ke,ne:()=>be,number:()=>$e});var F=(t,r)=>{let{modifierDefaults:e}=r||{},{[t]:a}=e||{};return a||{}},K=({value:t,options:r=[],defaultValue:e=""})=>(r.find(({key:a})=>`${a}`.toLowerCase()===`${t}`.toLowerCase())||{}).value||e,be=({value:t,options:r=[],defaultValue:e=""})=>(r.find(({key:a})=>`${a}`.toLowerCase()!==`${t}`.toLowerCase())||{}).value||e,re=({value:t,options:r=[],defaultValue:e=""})=>(r.sort((a,l)=>+a.key-+l.key).find(({key:a})=>+t<+a)||{}).value||e,te=({value:t,options:r=[],defaultValue:e=""})=>(r.sort((a,l)=>+l.key-+a.key).find(({key:a})=>+t>+a)||{}).value||e,ke=({value:t,options:r=[],defaultValue:e=""})=>K({value:t,options:r,defaultValue:re({value:t,options:r,defaultValue:e})}),Oe=({value:t,options:r=[],defaultValue:e=""})=>K({value:t,options:r,defaultValue:te({value:t,options:r,defaultValue:e})}),$e=({value:t,props:r,defaultValue:e="",locale:a="",parserOptions:l})=>{if(!a)return"";let i=F("number",l),{maximumFractionDigits:o}=i,s=L(i,["maximumFractionDigits"]),c=(r==null?void 0:r.number)||{},{maximumFractionDigits:n=o||2}=c,p=L(c,["maximumFractionDigits"]);return new Intl.NumberFormat(a,O(I(O({},s),{maximumFractionDigits:n}),p)).format(+t||+e)},we=({value:t,props:r,defaultValue:e="",locale:a="",parserOptions:l})=>{if(!a)return"";let i=L(F("date",l),[]),o=L((r==null?void 0:r.date)||{},[]);return new Intl.DateTimeFormat(a,O(O({},i),o)).format(+t||+e)},E=[{key:"second",multiplier:1e3},{key:"minute",multiplier:60},{key:"hour",multiplier:60},{key:"day",multiplier:24},{key:"week",multiplier:7},{key:"month",multiplier:13/3},{key:"year",multiplier:12}],le=(t="",r="")=>new RegExp(`^${t}s?$`).test(r),Le=t=>E.indexOf(E.find(({key:r})=>le(r,t))),je=(t,r)=>E.reduce(([e,a],{key:l,multiplier:i},o)=>{if(le(a,r))return[e,a];if(!a||o===Le(a)+1){let s=Math.round(e/i);if(!a||Math.abs(s)>=1||r!=="auto")return[s,l]}return[e,a]},[t,""]),Pe=({value:t,defaultValue:r="",locale:e="",props:a,parserOptions:l})=>{if(!e)return"";let i=F("ago",l),{format:o,numeric:s}=i,c=L(i,["format","numeric"]),n=(a==null?void 0:a.ago)||{},{format:p=o||"auto",numeric:h=s||"auto"}=n,b=L(n,["format","numeric"]),V=+t||+r,w=je(V,p);return new Intl.RelativeTimeFormat(e,O(I(O({},c),{numeric:h}),b)).format(...w)},Te=({value:t,defaultValue:r="",locale:e="",props:a,parserOptions:l})=>{if(!e)return"";let i=F("currency",l),{ratio:o,currency:s}=i,c=L(i,["ratio","currency"]),n=(a==null?void 0:a.currency)||{},{ratio:p=o||1,currency:h=s}=n,b=L(n,["ratio","currency"]);return new Intl.NumberFormat(e,O(I(O({},c),{style:"currency",currency:h}),b)).format(p*(t||r))},Ve=t=>typeof t=="string"&&/{{(?:(?!{{|}}).)+}}/.test(t),C=t=>typeof t=="string"?t.replace(/\\(?=:|;|{|})/g,""):t,Re=({value:t,props:r,payload:e,parserOptions:a,locale:l})=>`${t}`.replace(/{{\s*(?:(?!{{|}}).)+\s*}}/g,i=>{let o=C(`${i.match(/(?!{|\s).+?(?!\\[:;]).(?=\s*(?:[:;]|}}$))/)}`),s=e==null?void 0:e[o],[,c=""]=i.match(/.+?(?!\\;).;\s*default\s*:\s*([^\s:;].+?(?:\\[:;]|[^;}])*)(?=\s*(?:;|}}$))/i)||[];c=c||(e==null?void 0:e.default)||"";let[,n=""]=i.match(/{{\s*(?:[^;]|(?:\\;))+\s*(?:(?!\\:).[:])\s*(?!\s)((?:\\;|[^;])+?)(?=\s*(?:[;]|}}$))/i)||[];if(s===void 0&&n!=="ne")return c;let p=!!n,{customModifiers:h}=a||{},b=O(O({},ae),h||{});n=Object.keys(b).includes(n)?n:"eq";let V=b[n],w=(i.match(/[^\s:;{](?:[^;]|\\[;])+[^:;}]/gi)||[]).reduce((y,k,R)=>{if(R>0){let g=C(`${k.match(/(?:(?:\\:)|[^:])+/)}`.trim()),$=`${k.match(/(?:(?:\\:)|[^:])+$/)}`.trimStart();if(g&&g!=="default"&&$)return[...y,{key:g,value:$}]}return y},[]);return!p&&!w.length?s:V({value:s,options:w,props:r,defaultValue:c,locale:l,parserOptions:a})}),ie=({value:t,props:r,payload:e,parserOptions:a,locale:l})=>{if(Ve(t)){let i=Re({value:t,payload:e,props:r,parserOptions:a,locale:l});return ie({value:i,payload:e,props:r,parserOptions:a,locale:l})}else return C(t)},xe=t=>({parse:(r,[e,a],l,i)=>(e!=null&&e.default&&r===void 0&&(r=e.default),r===void 0&&(r=i),ie({value:r,payload:e,props:a,parserOptions:t,locale:l}))}),Ae=xe,De=Object.defineProperty,Se=Object.defineProperties,_e=Object.getOwnPropertyDescriptors,_=Object.getOwnPropertySymbols,oe=Object.prototype.hasOwnProperty,se=Object.prototype.propertyIsEnumerable,G=(t,r,e)=>r in t?De(t,r,{enumerable:!0,configurable:!0,writable:!0,value:e}):t[r]=e,Fe=(t,r)=>{for(var e in r||(r={}))oe.call(r,e)&&G(t,e,r[e]);if(_)for(var e of _(r))se.call(r,e)&&G(t,e,r[e]);return t},Ne=(t,r)=>Se(t,_e(r)),Ee=(t,r)=>{var e={};for(var a in t)oe.call(t,a)&&r.indexOf(a)<0&&(e[a]=t[a]);if(t!=null&&_)for(var a of _(t))r.indexOf(a)<0&&se.call(t,a)&&(e[a]=t[a]);return e},J=t=>{var r=t,{parserOptions:e={}}=r,a=Ee(r,["parserOptions"]);return Ne(Fe({},a),{parser:Ae(e)})},Ce=class extends ye{constructor(r){super(r&&J(r)),this.loadConfig=e=>super.configLoader(J(e))}},Ie=Ce;const Ke={loaders:[{locale:"en",key:"common",loader:async()=>(await M(()=>import("./en.8727a4ed.js"),[],import.meta.url)).default},{locale:"si",key:"common",loader:async()=>(await M(()=>import("./si.40bb4e4f.js"),[],import.meta.url)).default}],fallbackValue:void 0},{t:Me,locale:Ge,locales:Je,loading:Qe,setLocale:Ue,setRoute:Xe,translations:Ye}=new Ie(Ke),Ze=P(Me,t=>r=>{const e=t(`common.${r}`);return e||r});export{Xe as a,Ge as l,Ue as s,Ze as t};
