import{i as Te,p as Fe,d as ze}from"../chunks/icon-network.d1477e6d.js";import{s as U,p as je,f as E,a as L,g as I,h as V,d as m,c as N,j as D,T as Le,i as k,L as M,Q as Ne,K as R,x as C,l as W,m as X,W as J,k as K,M as Pe,n as Z,e as F,U as He,S as ye,a4 as De,R as we}from"../chunks/scheduler.aae51f71.js";import{S as x,i as ee,f as Se,b as H,d as S,m as A,g as z,t as g,c as j,a as h,e as B}from"../chunks/index.2a093dce.js";import{k as P,D as te,I as Ae,J as Ee,t as q,K as ne,E as Be,N as re,o as Ye}from"../chunks/LocalizedLink.6ea05423.js";import{b as Oe,P as Ie}from"../chunks/Scrolly.280b9389.js";import{l as Ve,t as Me}from"../chunks/translations.f8fb10b8.js";import"../chunks/paths.30c006c4.js";import{m as Ce,a as qe,P as Ue,T as Ge,b as Ke}from"../chunks/Timeline.7e438134.js";function Re(a,e,l){a=+a,e=+e,l=(r=arguments.length)<2?(e=a,a=0,1):r<3?1:+l;for(var t=-1,r=Math.max(0,Math.ceil((e-a)/l))|0,i=new Array(r);++t<r;)i[t]=a+t*l;return i}async function Je({params:a}){const{id:e}=a,l=Te[e]||[],t=Fe.find(({id:n})=>e===n),r=(l==null?void 0:l[0])||{},i=r.institution_si,o=r.institution_en;return{affiliations:l,partyData:t,title_si:i,title_en:o}}const vt=Object.freeze(Object.defineProperty({__proto__:null,load:Je},Symbol.toStringTag,{value:"Module"}));function se(a,e,l){const t=a.slice();return t[16]=e[l],t}function oe(a,e,l){const t=a.slice();return t[19]=e[l],t[21]=l,t}function ae(a,e,l){const t=a.slice();return t[19]=e[l],t}function fe(a,e){let l,t="",r;return{key:a,first:null,c(){l=E("div"),l.innerHTML=t,this.h()},l(i){l=I(i,"DIV",{class:!0,"data-svelte-h":!0}),He(l)!=="svelte-1740ud7"&&(l.innerHTML=t),this.h()},h(){D(l,"class","step svelte-1fi8ud3"),ye(()=>e[12].call(l)),J(l,"active",e[19]===e[0]),this.first=l},m(i,o){k(i,l,o),r=De(l,e[12].bind(l))},p(i,o){e=i,o&9&&J(l,"active",e[19]===e[0])},d(i){i&&m(l),r()}}}function Qe(a){let e=[],l=new Map,t,r=P(a[3]);const i=o=>o[19];for(let o=0;o<r.length;o+=1){let n=ae(a,r,o),f=i(n);l.set(f,e[o]=fe(f,n))}return{c(){for(let o=0;o<e.length;o+=1)e[o].c();t=F()},l(o){for(let n=0;n<e.length;n+=1)e[n].l(o);t=F()},m(o,n){for(let f=0;f<e.length;f+=1)e[f]&&e[f].m(o,n);k(o,t,n)},p(o,n){n&13&&(r=P(o[3]),e=te(e,n,i,1,o,r,l,t.parentNode,Ee,fe,t,ae))},d(o){o&&m(t);for(let n=0;n<e.length;n+=1)e[n].d(o)}}}function ce(a,e){let l,t=e[19]+"",r,i,o,n;function f(){return e[14](e[21])}return{key:a,first:null,c(){l=E("div"),r=W(t),i=L(),this.h()},l(s){l=I(s,"DIV",{class:!0});var c=V(l);r=X(c,t),i=N(c),c.forEach(m),this.h()},h(){D(l,"class","year svelte-1fi8ud3"),J(l,"selected",+e[19]===e[0]),K(l,"top",`${(e[19]-e[0])*10}vh`),K(l,"opacity",1-Math.abs(e[0]-e[19])*.2),this.first=l},m(s,c){k(s,l,c),M(l,r),M(l,i),o||(n=Pe(l,"click",f),o=!0)},p(s,c){e=s,c&8&&t!==(t=e[19]+"")&&Z(r,t),c&9&&J(l,"selected",+e[19]===e[0]),c&9&&K(l,"top",`${(e[19]-e[0])*10}vh`),c&9&&K(l,"opacity",1-Math.abs(e[0]-e[19])*.2)},d(s){s&&m(l),o=!1,n()}}}function We(a){let e,l=a[5]("None")+"",t;return{c(){e=E("div"),t=W(l),this.h()},l(r){e=I(r,"DIV",{class:!0});var i=V(e);t=X(i,l),i.forEach(m),this.h()},h(){D(e,"class","placeholder svelte-1fi8ud3")},m(r,i){k(r,e,i),M(e,t)},p(r,i){i&32&&l!==(l=r[5]("None")+"")&&Z(t,l)},i:R,o:R,d(r){r&&m(e)}}}function Xe(a){let e=[],l=new Map,t,r,i=P(ne(a[4],"person_id"));const o=n=>n[16].person_id;for(let n=0;n<i.length;n+=1){let f=se(a,i,n),s=o(f);l.set(s,e[n]=ue(s,f))}return{c(){for(let n=0;n<e.length;n+=1)e[n].c();t=F()},l(n){for(let f=0;f<e.length;f+=1)e[f].l(n);t=F()},m(n,f){for(let s=0;s<e.length;s+=1)e[s]&&e[s].m(n,f);k(n,t,f),r=!0},p(n,f){f&144&&(i=P(ne(n[4],"person_id")),z(),e=te(e,f,o,1,n,i,l,t.parentNode,Be,ue,t,se),j())},i(n){if(!r){for(let f=0;f<i.length;f+=1)h(e[f]);r=!0}},o(n){for(let f=0;f<e.length;f+=1)g(e[f]);r=!1},d(n){n&&m(t);for(let f=0;f<e.length;f+=1)e[f].d(n)}}}function ue(a,e){let l,t,r,i;return t=new Ie({props:{clickable:!0,position:e[16].curr_position,subheading:e[7](e[16]),id:e[16].person_id,name:e[16].person_name,image_link:e[16].image_link,size:"medium",coloredText:!0}}),{key:a,first:null,c(){l=E("div"),H(t.$$.fragment),r=L(),this.h()},l(o){l=I(o,"DIV",{class:!0});var n=V(l);S(t.$$.fragment,n),r=N(n),n.forEach(m),this.h()},h(){D(l,"class","person_label svelte-1fi8ud3"),this.first=l},m(o,n){k(o,l,n),A(t,l,null),M(l,r),i=!0},p(o,n){e=o;const f={};n&16&&(f.position=e[16].curr_position),n&16&&(f.subheading=e[7](e[16])),n&16&&(f.id=e[16].person_id),n&16&&(f.name=e[16].person_name),n&16&&(f.image_link=e[16].image_link),t.$set(f)},i(o){i||(h(t.$$.fragment,o),i=!0)},o(o){g(t.$$.fragment,o),i=!1},d(o){o&&m(l),B(t)}}}function _e(a){let e,l,t,r;const i=[Xe,We],o=[];function n(f,s){return f[4]?0:1}return l=n(a),t=o[l]=i[l](a),{c(){e=E("div"),t.c(),this.h()},l(f){e=I(f,"DIV",{class:!0});var s=V(e);t.l(s),s.forEach(m),this.h()},h(){D(e,"class","item")},m(f,s){k(f,e,s),o[l].m(e,null),r=!0},p(f,s){let c=l;l=n(f),l===c?o[l].p(f,s):(z(),g(o[c],1,1,()=>{o[c]=null}),j(),t=o[l],t?t.p(f,s):(t=o[l]=i[l](f),t.c()),h(t,1),t.m(e,null))},i(f){r||(h(t),r=!0)},o(f){g(t),r=!1},d(f){f&&m(e),o[l].d()}}}function Ze(a){let e,l,t,r,i,o,n,f,s,c=[],$=new Map,_,d,p=a[0],T;function Y(u){a[13](u)}let G={$$slots:{default:[Qe]},$$scope:{ctx:a}};a[1]!==void 0&&(G.value=a[1]),l=new Oe({props:G}),je.push(()=>Se(l,"value",Y));let O=P(a[3]);const v=u=>u[19];for(let u=0;u<O.length;u+=1){let b=oe(a,O,u),w=v(b);$.set(w,c[u]=ce(w,b))}let y=_e(a);return{c(){e=E("div"),H(l.$$.fragment),r=L(),i=E("img"),n=L(),f=E("div"),s=E("div");for(let u=0;u<c.length;u+=1)c[u].c();_=L(),d=E("div"),y.c(),this.h()},l(u){e=I(u,"DIV",{class:!0});var b=V(e);S(l.$$.fragment,b),b.forEach(m),r=N(u),i=I(u,"IMG",{class:!0,src:!0,alt:!0}),n=N(u),f=I(u,"DIV",{class:!0});var w=V(f);s=I(w,"DIV",{class:!0});var le=V(s);for(let Q=0;Q<c.length;Q+=1)c[Q].l(le);le.forEach(m),_=N(w),d=I(w,"DIV",{class:!0});var ie=V(d);y.l(ie),ie.forEach(m),w.forEach(m),this.h()},h(){D(e,"class","scroll-tracker svelte-1fi8ud3"),D(i,"class","icon svelte-1fi8ud3"),Le(i.src,o=ze)||D(i,"src",o),D(i,"alt","down"),D(s,"class","left-scroll svelte-1fi8ud3"),D(d,"class","right-scroll svelte-1fi8ud3"),D(f,"class","container svelte-1fi8ud3")},m(u,b){k(u,e,b),A(l,e,null),k(u,r,b),k(u,i,b),k(u,n,b),k(u,f,b),M(f,s);for(let w=0;w<c.length;w+=1)c[w]&&c[w].m(s,null);M(f,_),M(f,d),y.m(d,null),T=!0},p(u,[b]){const w={};b&16777229&&(w.$$scope={dirty:b,ctx:u}),!t&&b&2&&(t=!0,w.value=u[1],Ne(()=>t=!1)),l.$set(w),b&73&&(O=P(u[3]),c=te(c,b,v,1,u,O,$,s,Ee,ce,null,oe)),b&1&&U(p,p=u[0])?(z(),g(y,1,1,R),j(),y=_e(u),y.c(),h(y,1),y.m(d,null)):y.p(u,b)},i(u){T||(h(l.$$.fragment,u),h(y),T=!0)},o(u){g(l.$$.fragment,u),g(y),T=!1},d(u){u&&(m(e),m(r),m(i),m(n),m(f)),B(l);for(let b=0;b<c.length;b+=1)c[b].d();y.d(u)}}}function xe(a,e,l){let t,r,i;C(a,Ve,v=>l(15,r=v)),C(a,Me,v=>l(5,i=v));let{items:o}=e,n={},f,s,c,$,_,d=[];const p=v=>{window.scrollTo({top:_*v,behavior:"smooth"})},T=v=>{const y=q(v,"position",r),u=q(v,"institution_department",r);return u!=null&&u.length?`${y}, ${u}`:y};function Y(){_=this.clientHeight,l(2,_)}function G(v){$=v,l(1,$)}const O=v=>p(v);return a.$$set=v=>{"items"in v&&l(8,o=v.items)},a.$$.update=()=>{a.$$.dirty&3840&&(o.forEach(v=>{for(let y=+v.start_year;y<=+v.end_year;y++)y in n?n[+y].push(v):l(9,n[+y]=[v],n)}),l(10,s=+Ce(Object.keys(n))),l(11,c=+qe(Object.keys(n))),l(11,c=Math.min(Ae.getFullYear(),c)),l(3,d=Re(s,c))),a.$$.dirty&1026&&l(0,f=s+$),a.$$.dirty&513&&l(4,t=n[f])},[f,$,_,d,t,i,p,T,o,n,s,c,Y,G,O]}class et extends x{constructor(e){super(),ee(this,e,xe,Ze,U,{items:8})}}function me(a,e,l){const t=a.slice();return t[3]=e[l].type,t[4]=e[l].items,t}function he(a,e,l){const t=a.slice();return t[7]=e[l].person_id,t[8]=e[l].image_link,t[9]=e[l].person_name,t[10]=e[l].curr_position,t}function de(a){let e,l,t=a[1](a[3])+"",r,i,o,n,f,s=P(a[4]),c=[];for(let _=0;_<s.length;_+=1)c[_]=pe(he(a,s,_));const $=_=>g(c[_],1,1,()=>{c[_]=null});return{c(){e=E("div"),l=E("div"),r=W(t),i=L(),o=E("div");for(let _=0;_<c.length;_+=1)c[_].c();n=L(),this.h()},l(_){e=I(_,"DIV",{class:!0});var d=V(e);l=I(d,"DIV",{class:!0});var p=V(l);r=X(p,t),p.forEach(m),i=N(d),o=I(d,"DIV",{class:!0});var T=V(o);for(let Y=0;Y<c.length;Y+=1)c[Y].l(T);T.forEach(m),n=N(d),d.forEach(m),this.h()},h(){D(l,"class","left svelte-mjvztl"),D(o,"class","right svelte-mjvztl"),D(e,"class","container svelte-mjvztl")},m(_,d){k(_,e,d),M(e,l),M(l,r),M(e,i),M(e,o);for(let p=0;p<c.length;p+=1)c[p]&&c[p].m(o,null);M(e,n),f=!0},p(_,d){if((!f||d&3)&&t!==(t=_[1](_[3])+"")&&Z(r,t),d&1){s=P(_[4]);let p;for(p=0;p<s.length;p+=1){const T=he(_,s,p);c[p]?(c[p].p(T,d),h(c[p],1)):(c[p]=pe(T),c[p].c(),h(c[p],1),c[p].m(o,null))}for(z(),p=s.length;p<c.length;p+=1)$(p);j()}},i(_){if(!f){for(let d=0;d<s.length;d+=1)h(c[d]);f=!0}},o(_){c=c.filter(Boolean);for(let d=0;d<c.length;d+=1)g(c[d]);f=!1},d(_){_&&m(e),we(c,_)}}}function pe(a){let e,l;return e=new Ie({props:{id:a[7],image_link:a[8],imagePlaceholder:re(a[9]),position:a[10],size:"small",clickable:!0}}),{c(){H(e.$$.fragment)},l(t){S(e.$$.fragment,t)},m(t,r){A(e,t,r),l=!0},p(t,r){const i={};r&1&&(i.id=t[7]),r&1&&(i.image_link=t[8]),r&1&&(i.imagePlaceholder=re(t[9])),r&1&&(i.position=t[10]),e.$set(i)},i(t){l||(h(e.$$.fragment,t),l=!0)},o(t){g(e.$$.fragment,t),l=!1},d(t){B(e,t)}}}function ge(a){let e,l,t=!!a[3]&&de(a);return{c(){t&&t.c(),e=F()},l(r){t&&t.l(r),e=F()},m(r,i){t&&t.m(r,i),k(r,e,i),l=!0},p(r,i){r[3]?t?(t.p(r,i),i&1&&h(t,1)):(t=de(r),t.c(),h(t,1),t.m(e.parentNode,e)):t&&(z(),g(t,1,1,()=>{t=null}),j())},i(r){l||(h(t),l=!0)},o(r){g(t),l=!1},d(r){r&&m(e),t&&t.d(r)}}}function tt(a){let e,l,t,r=P(a[0]),i=[];for(let n=0;n<r.length;n+=1)i[n]=ge(me(a,r,n));const o=n=>g(i[n],1,1,()=>{i[n]=null});return{c(){e=E("div"),l=E("div");for(let n=0;n<i.length;n+=1)i[n].c();this.h()},l(n){e=I(n,"DIV",{class:!0});var f=V(e);l=I(f,"DIV",{class:!0});var s=V(l);for(let c=0;c<i.length;c+=1)i[c].l(s);s.forEach(m),f.forEach(m),this.h()},h(){D(l,"class","outer-container svelte-mjvztl"),D(e,"class","institution-breakdown mobile-hide svelte-mjvztl")},m(n,f){k(n,e,f),M(e,l);for(let s=0;s<i.length;s+=1)i[s]&&i[s].m(l,null);t=!0},p(n,[f]){if(f&3){r=P(n[0]);let s;for(s=0;s<r.length;s+=1){const c=me(n,r,s);i[s]?(i[s].p(c,f),h(i[s],1)):(i[s]=ge(c),i[s].c(),h(i[s],1),i[s].m(l,null))}for(z(),s=r.length;s<i.length;s+=1)o(s);j()}},i(n){if(!t){for(let f=0;f<r.length;f+=1)h(i[f]);t=!0}},o(n){i=i.filter(Boolean);for(let f=0;f<i.length;f+=1)g(i[f]);t=!1},d(n){n&&m(e),we(i,n)}}}function lt(a,e,l){let t,r;C(a,Me,o=>l(1,r=o));let{affiliations:i}=e;return a.$$set=o=>{"affiliations"in o&&l(2,i=o.affiliations)},a.$$.update=()=>{a.$$.dirty&4&&console.log(i),a.$$.dirty&4&&l(0,t=Object.entries(i).map(([o,n])=>({type:o,items:n})).sort((o,n)=>o.items.length>n.items.length?-1:1))},[t,r,i]}class it extends x{constructor(e){super(),ee(this,e,lt,tt,U,{affiliations:2})}}function ve(a){var f;let e,l,t,r,i;e=new Ue({props:{title:q((f=a[0].affiliations)==null?void 0:f[0],"institution",a[1]),notes:a[2],background:a[4]==="mobile"||a[0].partyData?"#E6E6EB":"#FFF",border:a[4]==="mobile"||a[0].partyData?"#FFF":"#6E7382",hideLegend:!!a[0].partyData,pageContentHeight:a[3]}});let o=a[0].partyData&&be(a),n=a[4]&&ke(a);return{c(){H(e.$$.fragment),l=L(),o&&o.c(),t=L(),n&&n.c(),r=F()},l(s){S(e.$$.fragment,s),l=N(s),o&&o.l(s),t=N(s),n&&n.l(s),r=F()},m(s,c){A(e,s,c),k(s,l,c),o&&o.m(s,c),k(s,t,c),n&&n.m(s,c),k(s,r,c),i=!0},p(s,c){var _;const $={};c&3&&($.title=q((_=s[0].affiliations)==null?void 0:_[0],"institution",s[1])),c&4&&($.notes=s[2]),c&17&&($.background=s[4]==="mobile"||s[0].partyData?"#E6E6EB":"#FFF"),c&17&&($.border=s[4]==="mobile"||s[0].partyData?"#FFF":"#6E7382"),c&1&&($.hideLegend=!!s[0].partyData),c&8&&($.pageContentHeight=s[3]),e.$set($),s[0].partyData?o?(o.p(s,c),c&1&&h(o,1)):(o=be(s),o.c(),h(o,1),o.m(t.parentNode,t)):o&&(z(),g(o,1,1,()=>{o=null}),j()),s[4]?n?(n.p(s,c),c&16&&h(n,1)):(n=ke(s),n.c(),h(n,1),n.m(r.parentNode,r)):n&&(z(),g(n,1,1,()=>{n=null}),j())},i(s){i||(h(e.$$.fragment,s),h(o),h(n),i=!0)},o(s){g(e.$$.fragment,s),g(o),g(n),i=!1},d(s){s&&(m(l),m(t),m(r)),B(e,s),o&&o.d(s),n&&n.d(s)}}}function be(a){let e,l,t,r;return e=new it({props:{affiliations:a[0].partyData.affiliations}}),t=new Ge({}),{c(){H(e.$$.fragment),l=L(),H(t.$$.fragment)},l(i){S(e.$$.fragment,i),l=N(i),S(t.$$.fragment,i)},m(i,o){A(e,i,o),k(i,l,o),A(t,i,o),r=!0},p(i,o){const n={};o&1&&(n.affiliations=i[0].partyData.affiliations),e.$set(n)},i(i){r||(h(e.$$.fragment,i),h(t.$$.fragment,i),r=!0)},o(i){g(e.$$.fragment,i),g(t.$$.fragment,i),r=!1},d(i){i&&m(l),B(e,i),B(t,i)}}}function ke(a){let e,l,t,r,i;const o=[rt,nt],n=[];function f(s,c){return s[4]==="mobile"?0:1}return l=f(a),t=n[l]=o[l](a),{c(){e=E("div"),t.c(),this.h()},l(s){e=I(s,"DIV",{});var c=V(e);t.l(c),c.forEach(m),this.h()},h(){ye(()=>a[5].call(e))},m(s,c){k(s,e,c),n[l].m(e,null),r=De(e,a[5].bind(e)),i=!0},p(s,c){let $=l;l=f(s),l===$?n[l].p(s,c):(z(),g(n[$],1,1,()=>{n[$]=null}),j(),t=n[l],t?t.p(s,c):(t=n[l]=o[l](s),t.c()),h(t,1),t.m(e,null))},i(s){i||(h(t),i=!0)},o(s){g(t),i=!1},d(s){s&&m(e),n[l].d(),r()}}}function nt(a){let e,l;return e=new Ke({props:{items:a[0].affiliations,rowGroupingVar:"person_name",getItemLink:ot,getItemLabel:at}}),{c(){H(e.$$.fragment)},l(t){S(e.$$.fragment,t)},m(t,r){A(e,t,r),l=!0},p(t,r){const i={};r&1&&(i.items=t[0].affiliations),e.$set(i)},i(t){l||(h(e.$$.fragment,t),l=!0)},o(t){g(e.$$.fragment,t),l=!1},d(t){B(e,t)}}}function rt(a){let e,l;return e=new et({props:{items:a[0].affiliations}}),{c(){H(e.$$.fragment)},l(t){S(e.$$.fragment,t)},m(t,r){A(e,t,r),l=!0},p(t,r){const i={};r&1&&(i.items=t[0].affiliations),e.$set(i)},i(t){l||(h(e.$$.fragment,t),l=!0)},o(t){g(e.$$.fragment,t),l=!1},d(t){B(e,t)}}}function $e(a){let e,l,t=a[0].affiliations.length!==0&&ve(a);return{c(){t&&t.c(),e=F()},l(r){t&&t.l(r),e=F()},m(r,i){t&&t.m(r,i),k(r,e,i),l=!0},p(r,i){r[0].affiliations.length!==0?t?(t.p(r,i),i&1&&h(t,1)):(t=ve(r),t.c(),h(t,1),t.m(e.parentNode,e)):t&&(z(),g(t,1,1,()=>{t=null}),j())},i(r){l||(h(t),l=!0)},o(r){g(t),l=!1},d(r){r&&m(e),t&&t.d(r)}}}function st(a){let e=a[0].route,l,t,r=$e(a);return{c(){r.c(),l=F()},l(i){r.l(i),l=F()},m(i,o){r.m(i,o),k(i,l,o),t=!0},p(i,[o]){o&1&&U(e,e=i[0].route)?(z(),g(r,1,1,R),j(),r=$e(i),r.c(),h(r,1),r.m(l.parentNode,l)):r.p(i,o)},i(i){t||(h(r),t=!0)},o(i){g(r),t=!1},d(i){i&&m(l),r.d(i)}}}const ot=({person_id:a})=>`/people/${a}`,at=({person_id:a,person_name:e,image_link:l,curr_position:t})=>({id:a,image_link:l,name:e,position:t});function ft(a,e,l){let t,r;C(a,Ve,s=>l(1,t=s)),C(a,Ye,s=>l(4,r=s));let{data:i}=e,o,n;function f(){n=this.clientHeight,l(3,n)}return a.$$set=s=>{"data"in s&&l(0,i=s.data)},a.$$.update=()=>{if(a.$$.dirty&3){const s=i.affiliations.map(c=>q(c,"notes_institution",t)).filter(c=>(c==null?void 0:c.length)>0);l(2,o=[...new Set(s)])}},[i,t,o,n,r,f]}class bt extends x{constructor(e){super(),ee(this,e,ft,st,U,{data:0})}}export{bt as component,vt as universal};
