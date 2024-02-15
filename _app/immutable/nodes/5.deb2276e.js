import{i as Me,p as Te,d as Fe}from"../chunks/icon-network.7f949b65.js";import{s as G,p as ze,f as E,a as F,g as I,h as V,d as m,c as z,j as D,T as je,i as y,L as M,Q as Le,K as U,x as C,l as W,m as X,W as J,k as R,M as Pe,n as Z,e as j,V as He,S as $e,a3 as ye,R as De}from"../chunks/scheduler.37923fd5.js";import{S as x,i as ee,f as Ne,b as N,d as S,m as A,g as L,t as g,c as P,a as h,e as B}from"../chunks/index.165fb32a.js";import{k as H,D as te,J as Se,K as we,t as q,N as ne,E as Ae,O as re,o as Be}from"../chunks/LocalizedLink.236b163d.js";import{b as Oe,P as Ee}from"../chunks/Scrolly.dd7cd71f.js";import{l as Ie,t as Ve}from"../chunks/translations.25683646.js";import"../chunks/paths.f42d1f7c.js";import{m as Ye,a as Ce,P as qe,T as Ge,b as Ke}from"../chunks/Timeline.6f432411.js";function Re(a,e,l){a=+a,e=+e,l=(s=arguments.length)<2?(e=a,a=0,1):s<3?1:+l;for(var t=-1,s=Math.max(0,Math.ceil((e-a)/l))|0,i=new Array(s);++t<s;)i[t]=a+t*l;return i}async function Ue({params:a}){const{id:e}=a,l=Me[e],t=Te.find(({id:n})=>e===n),s=l[0],i=s.institution_si,o=s.institution_en;return{affiliations:l,partyData:t,title_si:i,title_en:o}}const gt=Object.freeze(Object.defineProperty({__proto__:null,load:Ue},Symbol.toStringTag,{value:"Module"}));function se(a,e,l){const t=a.slice();return t[16]=e[l],t}function oe(a,e,l){const t=a.slice();return t[19]=e[l],t[21]=l,t}function ae(a,e,l){const t=a.slice();return t[19]=e[l],t}function fe(a,e){let l,t="",s;return{key:a,first:null,c(){l=E("div"),l.innerHTML=t,this.h()},l(i){l=I(i,"DIV",{class:!0,"data-svelte-h":!0}),He(l)!=="svelte-1740ud7"&&(l.innerHTML=t),this.h()},h(){D(l,"class","step svelte-1fi8ud3"),$e(()=>e[12].call(l)),J(l,"active",e[19]===e[0]),this.first=l},m(i,o){y(i,l,o),s=ye(l,e[12].bind(l))},p(i,o){e=i,o&9&&J(l,"active",e[19]===e[0])},d(i){i&&m(l),s()}}}function Je(a){let e=[],l=new Map,t,s=H(a[3]);const i=o=>o[19];for(let o=0;o<s.length;o+=1){let n=ae(a,s,o),f=i(n);l.set(f,e[o]=fe(f,n))}return{c(){for(let o=0;o<e.length;o+=1)e[o].c();t=j()},l(o){for(let n=0;n<e.length;n+=1)e[n].l(o);t=j()},m(o,n){for(let f=0;f<e.length;f+=1)e[f]&&e[f].m(o,n);y(o,t,n)},p(o,n){n&13&&(s=H(o[3]),e=te(e,n,i,1,o,s,l,t.parentNode,we,fe,t,ae))},d(o){o&&m(t);for(let n=0;n<e.length;n+=1)e[n].d(o)}}}function ce(a,e){let l,t=e[19]+"",s,i,o,n;function f(){return e[14](e[21])}return{key:a,first:null,c(){l=E("div"),s=W(t),i=F(),this.h()},l(r){l=I(r,"DIV",{class:!0});var c=V(l);s=X(c,t),i=z(c),c.forEach(m),this.h()},h(){D(l,"class","year svelte-1fi8ud3"),J(l,"selected",+e[19]===e[0]),R(l,"top",`${(e[19]-e[0])*10}vh`),R(l,"opacity",1-Math.abs(e[0]-e[19])*.2),this.first=l},m(r,c){y(r,l,c),M(l,s),M(l,i),o||(n=Pe(l,"click",f),o=!0)},p(r,c){e=r,c&8&&t!==(t=e[19]+"")&&Z(s,t),c&9&&J(l,"selected",+e[19]===e[0]),c&9&&R(l,"top",`${(e[19]-e[0])*10}vh`),c&9&&R(l,"opacity",1-Math.abs(e[0]-e[19])*.2)},d(r){r&&m(l),o=!1,n()}}}function Qe(a){let e,l=a[5]("None")+"",t;return{c(){e=E("div"),t=W(l),this.h()},l(s){e=I(s,"DIV",{class:!0});var i=V(e);t=X(i,l),i.forEach(m),this.h()},h(){D(e,"class","placeholder svelte-1fi8ud3")},m(s,i){y(s,e,i),M(e,t)},p(s,i){i&32&&l!==(l=s[5]("None")+"")&&Z(t,l)},i:U,o:U,d(s){s&&m(e)}}}function We(a){let e=[],l=new Map,t,s,i=H(ne(a[4],"person_id"));const o=n=>n[16].person_id;for(let n=0;n<i.length;n+=1){let f=se(a,i,n),r=o(f);l.set(r,e[n]=ue(r,f))}return{c(){for(let n=0;n<e.length;n+=1)e[n].c();t=j()},l(n){for(let f=0;f<e.length;f+=1)e[f].l(n);t=j()},m(n,f){for(let r=0;r<e.length;r+=1)e[r]&&e[r].m(n,f);y(n,t,f),s=!0},p(n,f){f&144&&(i=H(ne(n[4],"person_id")),L(),e=te(e,f,o,1,n,i,l,t.parentNode,Ae,ue,t,se),P())},i(n){if(!s){for(let f=0;f<i.length;f+=1)h(e[f]);s=!0}},o(n){for(let f=0;f<e.length;f+=1)g(e[f]);s=!1},d(n){n&&m(t);for(let f=0;f<e.length;f+=1)e[f].d(n)}}}function ue(a,e){let l,t,s,i;return t=new Ee({props:{clickable:!0,position:e[16].curr_position,subheading:e[7](e[16]),id:e[16].person_id,name:e[16].person_name,image_link:e[16].image_link,size:"medium",coloredText:!0}}),{key:a,first:null,c(){l=E("div"),N(t.$$.fragment),s=F(),this.h()},l(o){l=I(o,"DIV",{class:!0});var n=V(l);S(t.$$.fragment,n),s=z(n),n.forEach(m),this.h()},h(){D(l,"class","person_label svelte-1fi8ud3"),this.first=l},m(o,n){y(o,l,n),A(t,l,null),M(l,s),i=!0},p(o,n){e=o;const f={};n&16&&(f.position=e[16].curr_position),n&16&&(f.subheading=e[7](e[16])),n&16&&(f.id=e[16].person_id),n&16&&(f.name=e[16].person_name),n&16&&(f.image_link=e[16].image_link),t.$set(f)},i(o){i||(h(t.$$.fragment,o),i=!0)},o(o){g(t.$$.fragment,o),i=!1},d(o){o&&m(l),B(t)}}}function _e(a){let e,l,t,s;const i=[We,Qe],o=[];function n(f,r){return f[4]?0:1}return l=n(a),t=o[l]=i[l](a),{c(){e=E("div"),t.c(),this.h()},l(f){e=I(f,"DIV",{class:!0});var r=V(e);t.l(r),r.forEach(m),this.h()},h(){D(e,"class","item")},m(f,r){y(f,e,r),o[l].m(e,null),s=!0},p(f,r){let c=l;l=n(f),l===c?o[l].p(f,r):(L(),g(o[c],1,1,()=>{o[c]=null}),P(),t=o[l],t?t.p(f,r):(t=o[l]=i[l](f),t.c()),h(t,1),t.m(e,null))},i(f){s||(h(t),s=!0)},o(f){g(t),s=!1},d(f){f&&m(e),o[l].d()}}}function Xe(a){let e,l,t,s,i,o,n,f,r,c=[],k=new Map,_,d,p=a[0],T;function O(u){a[13](u)}let K={$$slots:{default:[Je]},$$scope:{ctx:a}};a[1]!==void 0&&(K.value=a[1]),l=new Oe({props:K}),ze.push(()=>Ne(l,"value",O));let Y=H(a[3]);const v=u=>u[19];for(let u=0;u<Y.length;u+=1){let b=oe(a,Y,u),w=v(b);k.set(w,c[u]=ce(w,b))}let $=_e(a);return{c(){e=E("div"),N(l.$$.fragment),s=F(),i=E("img"),n=F(),f=E("div"),r=E("div");for(let u=0;u<c.length;u+=1)c[u].c();_=F(),d=E("div"),$.c(),this.h()},l(u){e=I(u,"DIV",{class:!0});var b=V(e);S(l.$$.fragment,b),b.forEach(m),s=z(u),i=I(u,"IMG",{class:!0,src:!0,alt:!0}),n=z(u),f=I(u,"DIV",{class:!0});var w=V(f);r=I(w,"DIV",{class:!0});var le=V(r);for(let Q=0;Q<c.length;Q+=1)c[Q].l(le);le.forEach(m),_=z(w),d=I(w,"DIV",{class:!0});var ie=V(d);$.l(ie),ie.forEach(m),w.forEach(m),this.h()},h(){D(e,"class","scroll-tracker svelte-1fi8ud3"),D(i,"class","icon svelte-1fi8ud3"),je(i.src,o=Fe)||D(i,"src",o),D(i,"alt","down"),D(r,"class","left-scroll svelte-1fi8ud3"),D(d,"class","right-scroll svelte-1fi8ud3"),D(f,"class","container svelte-1fi8ud3")},m(u,b){y(u,e,b),A(l,e,null),y(u,s,b),y(u,i,b),y(u,n,b),y(u,f,b),M(f,r);for(let w=0;w<c.length;w+=1)c[w]&&c[w].m(r,null);M(f,_),M(f,d),$.m(d,null),T=!0},p(u,[b]){const w={};b&16777229&&(w.$$scope={dirty:b,ctx:u}),!t&&b&2&&(t=!0,w.value=u[1],Le(()=>t=!1)),l.$set(w),b&73&&(Y=H(u[3]),c=te(c,b,v,1,u,Y,k,r,we,ce,null,oe)),b&1&&G(p,p=u[0])?(L(),g($,1,1,U),P(),$=_e(u),$.c(),h($,1),$.m(d,null)):$.p(u,b)},i(u){T||(h(l.$$.fragment,u),h($),T=!0)},o(u){g(l.$$.fragment,u),g($),T=!1},d(u){u&&(m(e),m(s),m(i),m(n),m(f)),B(l);for(let b=0;b<c.length;b+=1)c[b].d();$.d(u)}}}function Ze(a,e,l){let t,s,i;C(a,Ie,v=>l(15,s=v)),C(a,Ve,v=>l(5,i=v));let{items:o}=e,n={},f,r,c,k,_,d=[];const p=v=>{window.scrollTo({top:_*v,behavior:"smooth"})},T=v=>{const $=q(v,"position",s),u=q(v,"institution_department",s);return u!=null&&u.length?`${$}, ${u}`:$};function O(){_=this.clientHeight,l(2,_)}function K(v){k=v,l(1,k)}const Y=v=>p(v);return a.$$set=v=>{"items"in v&&l(8,o=v.items)},a.$$.update=()=>{a.$$.dirty&3840&&(o.forEach(v=>{for(let $=+v.start_year;$<=+v.end_year;$++)$ in n?n[+$].push(v):l(9,n[+$]=[v],n)}),l(10,r=+Ye(Object.keys(n))),l(11,c=+Ce(Object.keys(n))),l(11,c=Math.min(Se.getFullYear(),c)),l(3,d=Re(r,c))),a.$$.dirty&1026&&l(0,f=r+k),a.$$.dirty&513&&l(4,t=n[f])},[f,k,_,d,t,i,p,T,o,n,r,c,O,K,Y]}class xe extends x{constructor(e){super(),ee(this,e,Ze,Xe,G,{items:8})}}function me(a,e,l){const t=a.slice();return t[3]=e[l].type,t[4]=e[l].items,t}function he(a,e,l){const t=a.slice();return t[7]=e[l].person_id,t[8]=e[l].image_link,t[9]=e[l].person_name,t[10]=e[l].curr_position,t}function de(a){let e,l,t=a[1](a[3])+"",s,i,o,n,f,r=H(a[4]),c=[];for(let _=0;_<r.length;_+=1)c[_]=pe(he(a,r,_));const k=_=>g(c[_],1,1,()=>{c[_]=null});return{c(){e=E("div"),l=E("div"),s=W(t),i=F(),o=E("div");for(let _=0;_<c.length;_+=1)c[_].c();n=F(),this.h()},l(_){e=I(_,"DIV",{class:!0});var d=V(e);l=I(d,"DIV",{class:!0});var p=V(l);s=X(p,t),p.forEach(m),i=z(d),o=I(d,"DIV",{class:!0});var T=V(o);for(let O=0;O<c.length;O+=1)c[O].l(T);T.forEach(m),n=z(d),d.forEach(m),this.h()},h(){D(l,"class","left svelte-mjvztl"),D(o,"class","right svelte-mjvztl"),D(e,"class","container svelte-mjvztl")},m(_,d){y(_,e,d),M(e,l),M(l,s),M(e,i),M(e,o);for(let p=0;p<c.length;p+=1)c[p]&&c[p].m(o,null);M(e,n),f=!0},p(_,d){if((!f||d&3)&&t!==(t=_[1](_[3])+"")&&Z(s,t),d&1){r=H(_[4]);let p;for(p=0;p<r.length;p+=1){const T=he(_,r,p);c[p]?(c[p].p(T,d),h(c[p],1)):(c[p]=pe(T),c[p].c(),h(c[p],1),c[p].m(o,null))}for(L(),p=r.length;p<c.length;p+=1)k(p);P()}},i(_){if(!f){for(let d=0;d<r.length;d+=1)h(c[d]);f=!0}},o(_){c=c.filter(Boolean);for(let d=0;d<c.length;d+=1)g(c[d]);f=!1},d(_){_&&m(e),De(c,_)}}}function pe(a){let e,l;return e=new Ee({props:{id:a[7],image_link:a[8],imagePlaceholder:re(a[9]),position:a[10],size:"small",clickable:!0}}),{c(){N(e.$$.fragment)},l(t){S(e.$$.fragment,t)},m(t,s){A(e,t,s),l=!0},p(t,s){const i={};s&1&&(i.id=t[7]),s&1&&(i.image_link=t[8]),s&1&&(i.imagePlaceholder=re(t[9])),s&1&&(i.position=t[10]),e.$set(i)},i(t){l||(h(e.$$.fragment,t),l=!0)},o(t){g(e.$$.fragment,t),l=!1},d(t){B(e,t)}}}function ge(a){let e,l,t=!!a[3]&&de(a);return{c(){t&&t.c(),e=j()},l(s){t&&t.l(s),e=j()},m(s,i){t&&t.m(s,i),y(s,e,i),l=!0},p(s,i){s[3]?t?(t.p(s,i),i&1&&h(t,1)):(t=de(s),t.c(),h(t,1),t.m(e.parentNode,e)):t&&(L(),g(t,1,1,()=>{t=null}),P())},i(s){l||(h(t),l=!0)},o(s){g(t),l=!1},d(s){s&&m(e),t&&t.d(s)}}}function et(a){let e,l,t,s=H(a[0]),i=[];for(let n=0;n<s.length;n+=1)i[n]=ge(me(a,s,n));const o=n=>g(i[n],1,1,()=>{i[n]=null});return{c(){e=E("div"),l=E("div");for(let n=0;n<i.length;n+=1)i[n].c();this.h()},l(n){e=I(n,"DIV",{class:!0});var f=V(e);l=I(f,"DIV",{class:!0});var r=V(l);for(let c=0;c<i.length;c+=1)i[c].l(r);r.forEach(m),f.forEach(m),this.h()},h(){D(l,"class","outer-container svelte-mjvztl"),D(e,"class","institution-breakdown mobile-hide svelte-mjvztl")},m(n,f){y(n,e,f),M(e,l);for(let r=0;r<i.length;r+=1)i[r]&&i[r].m(l,null);t=!0},p(n,[f]){if(f&3){s=H(n[0]);let r;for(r=0;r<s.length;r+=1){const c=me(n,s,r);i[r]?(i[r].p(c,f),h(i[r],1)):(i[r]=ge(c),i[r].c(),h(i[r],1),i[r].m(l,null))}for(L(),r=s.length;r<i.length;r+=1)o(r);P()}},i(n){if(!t){for(let f=0;f<s.length;f+=1)h(i[f]);t=!0}},o(n){i=i.filter(Boolean);for(let f=0;f<i.length;f+=1)g(i[f]);t=!1},d(n){n&&m(e),De(i,n)}}}function tt(a,e,l){let t,s;C(a,Ve,o=>l(1,s=o));let{affiliations:i}=e;return a.$$set=o=>{"affiliations"in o&&l(2,i=o.affiliations)},a.$$.update=()=>{a.$$.dirty&4&&console.log(i),a.$$.dirty&4&&l(0,t=Object.entries(i).map(([o,n])=>({type:o,items:n})).sort((o,n)=>o.items.length>n.items.length?-1:1))},[t,s,i]}class lt extends x{constructor(e){super(),ee(this,e,tt,et,G,{affiliations:2})}}function ve(a){let e,l,t,s;return e=new lt({props:{affiliations:a[0].partyData.affiliations}}),t=new Ge({}),{c(){N(e.$$.fragment),l=F(),N(t.$$.fragment)},l(i){S(e.$$.fragment,i),l=z(i),S(t.$$.fragment,i)},m(i,o){A(e,i,o),y(i,l,o),A(t,i,o),s=!0},p(i,o){const n={};o&1&&(n.affiliations=i[0].partyData.affiliations),e.$set(n)},i(i){s||(h(e.$$.fragment,i),h(t.$$.fragment,i),s=!0)},o(i){g(e.$$.fragment,i),g(t.$$.fragment,i),s=!1},d(i){i&&m(l),B(e,i),B(t,i)}}}function be(a){let e,l,t,s,i;const o=[nt,it],n=[];function f(r,c){return r[4]==="mobile"?0:1}return l=f(a),t=n[l]=o[l](a),{c(){e=E("div"),t.c(),this.h()},l(r){e=I(r,"DIV",{});var c=V(e);t.l(c),c.forEach(m),this.h()},h(){$e(()=>a[5].call(e))},m(r,c){y(r,e,c),n[l].m(e,null),s=ye(e,a[5].bind(e)),i=!0},p(r,c){let k=l;l=f(r),l===k?n[l].p(r,c):(L(),g(n[k],1,1,()=>{n[k]=null}),P(),t=n[l],t?t.p(r,c):(t=n[l]=o[l](r),t.c()),h(t,1),t.m(e,null))},i(r){i||(h(t),i=!0)},o(r){g(t),i=!1},d(r){r&&m(e),n[l].d(),s()}}}function it(a){let e,l;return e=new Ke({props:{items:a[0].affiliations,rowGroupingVar:"person_name",getItemLink:st,getItemLabel:ot}}),{c(){N(e.$$.fragment)},l(t){S(e.$$.fragment,t)},m(t,s){A(e,t,s),l=!0},p(t,s){const i={};s&1&&(i.items=t[0].affiliations),e.$set(i)},i(t){l||(h(e.$$.fragment,t),l=!0)},o(t){g(e.$$.fragment,t),l=!1},d(t){B(e,t)}}}function nt(a){let e,l;return e=new xe({props:{items:a[0].affiliations}}),{c(){N(e.$$.fragment)},l(t){S(e.$$.fragment,t)},m(t,s){A(e,t,s),l=!0},p(t,s){const i={};s&1&&(i.items=t[0].affiliations),e.$set(i)},i(t){l||(h(e.$$.fragment,t),l=!0)},o(t){g(e.$$.fragment,t),l=!1},d(t){B(e,t)}}}function ke(a){var f;let e,l,t,s,i;e=new qe({props:{title:q((f=a[0].affiliations)==null?void 0:f[0],"institution",a[1]),notes:a[2],background:a[4]==="mobile"||a[0].partyData?"#E6E6EB":"#FFF",border:a[4]==="mobile"||a[0].partyData?"#FFF":"#6E7382",hideLegend:!!a[0].partyData,pageContentHeight:a[3]}});let o=a[0].partyData&&ve(a),n=a[4]&&be(a);return{c(){N(e.$$.fragment),l=F(),o&&o.c(),t=F(),n&&n.c(),s=j()},l(r){S(e.$$.fragment,r),l=z(r),o&&o.l(r),t=z(r),n&&n.l(r),s=j()},m(r,c){A(e,r,c),y(r,l,c),o&&o.m(r,c),y(r,t,c),n&&n.m(r,c),y(r,s,c),i=!0},p(r,c){var _;const k={};c&3&&(k.title=q((_=r[0].affiliations)==null?void 0:_[0],"institution",r[1])),c&4&&(k.notes=r[2]),c&17&&(k.background=r[4]==="mobile"||r[0].partyData?"#E6E6EB":"#FFF"),c&17&&(k.border=r[4]==="mobile"||r[0].partyData?"#FFF":"#6E7382"),c&1&&(k.hideLegend=!!r[0].partyData),c&8&&(k.pageContentHeight=r[3]),e.$set(k),r[0].partyData?o?(o.p(r,c),c&1&&h(o,1)):(o=ve(r),o.c(),h(o,1),o.m(t.parentNode,t)):o&&(L(),g(o,1,1,()=>{o=null}),P()),r[4]?n?(n.p(r,c),c&16&&h(n,1)):(n=be(r),n.c(),h(n,1),n.m(s.parentNode,s)):n&&(L(),g(n,1,1,()=>{n=null}),P())},i(r){i||(h(e.$$.fragment,r),h(o),h(n),i=!0)},o(r){g(e.$$.fragment,r),g(o),g(n),i=!1},d(r){r&&(m(l),m(t),m(s)),B(e,r),o&&o.d(r),n&&n.d(r)}}}function rt(a){let e=a[0].route,l,t,s=ke(a);return{c(){s.c(),l=j()},l(i){s.l(i),l=j()},m(i,o){s.m(i,o),y(i,l,o),t=!0},p(i,[o]){o&1&&G(e,e=i[0].route)?(L(),g(s,1,1,U),P(),s=ke(i),s.c(),h(s,1),s.m(l.parentNode,l)):s.p(i,o)},i(i){t||(h(s),t=!0)},o(i){g(s),t=!1},d(i){i&&m(l),s.d(i)}}}const st=({person_id:a})=>`/people/${a}`,ot=({person_id:a,person_name:e,image_link:l,curr_position:t})=>({id:a,image_link:l,name:e,position:t});function at(a,e,l){let t,s;C(a,Ie,r=>l(1,t=r)),C(a,Be,r=>l(4,s=r));let{data:i}=e,o,n;function f(){n=this.clientHeight,l(3,n)}return a.$$set=r=>{"data"in r&&l(0,i=r.data)},a.$$.update=()=>{if(a.$$.dirty&3){const r=i.affiliations.map(c=>q(c,"notes_institution",t)).filter(c=>(c==null?void 0:c.length)>0);l(2,o=[...new Set(r)])}},[i,t,o,n,s,f]}class vt extends x{constructor(e){super(),ee(this,e,at,rt,G,{data:0})}}export{vt as component,gt as universal};
