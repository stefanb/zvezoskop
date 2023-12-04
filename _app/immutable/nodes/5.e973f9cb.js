import{i as Me,p as Fe,d as Te}from"../chunks/icon-network.fb881dab.js";import{s as G,p as He,f as I,a as T,g as E,h as V,d as m,c as H,j as D,T as Le,i as y,N as M,K as Ne,M as J,x as A,l as Q,m as X,W as U,k as R,D as Pe,n as Z,e as L,V as Se,S as $e,a3 as ye,R as De}from"../chunks/scheduler.e81bebc8.js";import{S as x,i as ee,f as qe,b as q,d as z,m as B,g as N,t as g,c as P,a as h,e as j}from"../chunks/index.66277aa9.js";import{k as S,A as te,I as we,t as C,J as ne,D as ze,K as re,o as Be}from"../chunks/LocalizedLink.538b624f.js";import{b as je,P as Ie}from"../chunks/Scrolly.67b0c9c1.js";import{l as Ee,t as Ve}from"../chunks/translations.f3f920b5.js";import"../chunks/paths.f3e4aafb.js";import{m as Ye,a as Oe,P as Ae,T as Ce,b as Ge}from"../chunks/Timeline.39a94095.js";function Ke(a,e,l){a=+a,e=+e,l=(s=arguments.length)<2?(e=a,a=0,1):s<3?1:+l;for(var t=-1,s=Math.max(0,Math.ceil((e-a)/l))|0,i=new Array(s);++t<s;)i[t]=a+t*l;return i}async function Re({params:a}){const{id:e}=a,l=Me[e],t=Fe.find(({id:n})=>e===n),s=l[0],i=s.institution_si,o=s.institution_en;return{affiliations:l,partyData:t,title_si:i,title_en:o}}const pt=Object.freeze(Object.defineProperty({__proto__:null,load:Re},Symbol.toStringTag,{value:"Module"}));function se(a,e,l){const t=a.slice();return t[16]=e[l],t}function oe(a,e,l){const t=a.slice();return t[19]=e[l],t[21]=l,t}function ae(a,e,l){const t=a.slice();return t[19]=e[l],t}function fe(a,e){let l,t="",s;return{key:a,first:null,c(){l=I("div"),l.innerHTML=t,this.h()},l(i){l=E(i,"DIV",{class:!0,"data-svelte-h":!0}),Se(l)!=="svelte-1740ud7"&&(l.innerHTML=t),this.h()},h(){D(l,"class","step svelte-1fi8ud3"),$e(()=>e[12].call(l)),U(l,"active",e[19]===e[0]),this.first=l},m(i,o){y(i,l,o),s=ye(l,e[12].bind(l))},p(i,o){e=i,o&9&&U(l,"active",e[19]===e[0])},d(i){i&&m(l),s()}}}function Je(a){let e=[],l=new Map,t,s=S(a[3]);const i=o=>o[19];for(let o=0;o<s.length;o+=1){let n=ae(a,s,o),f=i(n);l.set(f,e[o]=fe(f,n))}return{c(){for(let o=0;o<e.length;o+=1)e[o].c();t=L()},l(o){for(let n=0;n<e.length;n+=1)e[n].l(o);t=L()},m(o,n){for(let f=0;f<e.length;f+=1)e[f]&&e[f].m(o,n);y(o,t,n)},p(o,n){n&13&&(s=S(o[3]),e=te(e,n,i,1,o,s,l,t.parentNode,we,fe,t,ae))},d(o){o&&m(t);for(let n=0;n<e.length;n+=1)e[n].d(o)}}}function ce(a,e){let l,t=e[19]+"",s,i,o,n;function f(){return e[14](e[21])}return{key:a,first:null,c(){l=I("div"),s=Q(t),i=T(),this.h()},l(r){l=E(r,"DIV",{class:!0});var c=V(l);s=X(c,t),i=H(c),c.forEach(m),this.h()},h(){D(l,"class","year svelte-1fi8ud3"),U(l,"selected",+e[19]===e[0]),R(l,"top",`${(e[19]-e[0])*10}vh`),R(l,"opacity",1-Math.abs(e[0]-e[19])*.2),this.first=l},m(r,c){y(r,l,c),M(l,s),M(l,i),o||(n=Pe(l,"click",f),o=!0)},p(r,c){e=r,c&8&&t!==(t=e[19]+"")&&Z(s,t),c&9&&U(l,"selected",+e[19]===e[0]),c&9&&R(l,"top",`${(e[19]-e[0])*10}vh`),c&9&&R(l,"opacity",1-Math.abs(e[0]-e[19])*.2)},d(r){r&&m(l),o=!1,n()}}}function Ue(a){let e,l=a[5]("None")+"",t;return{c(){e=I("div"),t=Q(l),this.h()},l(s){e=E(s,"DIV",{class:!0});var i=V(e);t=X(i,l),i.forEach(m),this.h()},h(){D(e,"class","placeholder svelte-1fi8ud3")},m(s,i){y(s,e,i),M(e,t)},p(s,i){i&32&&l!==(l=s[5]("None")+"")&&Z(t,l)},i:J,o:J,d(s){s&&m(e)}}}function We(a){let e=[],l=new Map,t,s,i=S(ne(a[4],"person_id"));const o=n=>n[16].person_id;for(let n=0;n<i.length;n+=1){let f=se(a,i,n),r=o(f);l.set(r,e[n]=ue(r,f))}return{c(){for(let n=0;n<e.length;n+=1)e[n].c();t=L()},l(n){for(let f=0;f<e.length;f+=1)e[f].l(n);t=L()},m(n,f){for(let r=0;r<e.length;r+=1)e[r]&&e[r].m(n,f);y(n,t,f),s=!0},p(n,f){f&144&&(i=S(ne(n[4],"person_id")),N(),e=te(e,f,o,1,n,i,l,t.parentNode,ze,ue,t,se),P())},i(n){if(!s){for(let f=0;f<i.length;f+=1)h(e[f]);s=!0}},o(n){for(let f=0;f<e.length;f+=1)g(e[f]);s=!1},d(n){n&&m(t);for(let f=0;f<e.length;f+=1)e[f].d(n)}}}function ue(a,e){let l,t,s,i;return t=new Ie({props:{clickable:!0,position:e[16].curr_position,subheading:e[7](e[16]),id:e[16].person_id,name:e[16].person_name,image_link:e[16].image_link,size:"medium",coloredText:!0}}),{key:a,first:null,c(){l=I("div"),q(t.$$.fragment),s=T(),this.h()},l(o){l=E(o,"DIV",{class:!0});var n=V(l);z(t.$$.fragment,n),s=H(n),n.forEach(m),this.h()},h(){D(l,"class","person_label svelte-1fi8ud3"),this.first=l},m(o,n){y(o,l,n),B(t,l,null),M(l,s),i=!0},p(o,n){e=o;const f={};n&16&&(f.position=e[16].curr_position),n&16&&(f.subheading=e[7](e[16])),n&16&&(f.id=e[16].person_id),n&16&&(f.name=e[16].person_name),n&16&&(f.image_link=e[16].image_link),t.$set(f)},i(o){i||(h(t.$$.fragment,o),i=!0)},o(o){g(t.$$.fragment,o),i=!1},d(o){o&&m(l),j(t)}}}function _e(a){let e,l,t,s;const i=[We,Ue],o=[];function n(f,r){return f[4]?0:1}return l=n(a),t=o[l]=i[l](a),{c(){e=I("div"),t.c(),this.h()},l(f){e=E(f,"DIV",{class:!0});var r=V(e);t.l(r),r.forEach(m),this.h()},h(){D(e,"class","item")},m(f,r){y(f,e,r),o[l].m(e,null),s=!0},p(f,r){let c=l;l=n(f),l===c?o[l].p(f,r):(N(),g(o[c],1,1,()=>{o[c]=null}),P(),t=o[l],t?t.p(f,r):(t=o[l]=i[l](f),t.c()),h(t,1),t.m(e,null))},i(f){s||(h(t),s=!0)},o(f){g(t),s=!1},d(f){f&&m(e),o[l].d()}}}function Qe(a){let e,l,t,s,i,o,n,f,r,c=[],k=new Map,_,d,p=a[0],F;function Y(u){a[13](u)}let K={$$slots:{default:[Je]},$$scope:{ctx:a}};a[1]!==void 0&&(K.value=a[1]),l=new je({props:K}),He.push(()=>qe(l,"value",Y));let O=S(a[3]);const v=u=>u[19];for(let u=0;u<O.length;u+=1){let b=oe(a,O,u),w=v(b);k.set(w,c[u]=ce(w,b))}let $=_e(a);return{c(){e=I("div"),q(l.$$.fragment),s=T(),i=I("img"),n=T(),f=I("div"),r=I("div");for(let u=0;u<c.length;u+=1)c[u].c();_=T(),d=I("div"),$.c(),this.h()},l(u){e=E(u,"DIV",{class:!0});var b=V(e);z(l.$$.fragment,b),b.forEach(m),s=H(u),i=E(u,"IMG",{class:!0,src:!0,alt:!0}),n=H(u),f=E(u,"DIV",{class:!0});var w=V(f);r=E(w,"DIV",{class:!0});var le=V(r);for(let W=0;W<c.length;W+=1)c[W].l(le);le.forEach(m),_=H(w),d=E(w,"DIV",{class:!0});var ie=V(d);$.l(ie),ie.forEach(m),w.forEach(m),this.h()},h(){D(e,"class","scroll-tracker svelte-1fi8ud3"),D(i,"class","icon svelte-1fi8ud3"),Le(i.src,o=Te)||D(i,"src",o),D(i,"alt","down"),D(r,"class","left-scroll svelte-1fi8ud3"),D(d,"class","right-scroll svelte-1fi8ud3"),D(f,"class","container svelte-1fi8ud3")},m(u,b){y(u,e,b),B(l,e,null),y(u,s,b),y(u,i,b),y(u,n,b),y(u,f,b),M(f,r);for(let w=0;w<c.length;w+=1)c[w]&&c[w].m(r,null);M(f,_),M(f,d),$.m(d,null),F=!0},p(u,[b]){const w={};b&16777229&&(w.$$scope={dirty:b,ctx:u}),!t&&b&2&&(t=!0,w.value=u[1],Ne(()=>t=!1)),l.$set(w),b&73&&(O=S(u[3]),c=te(c,b,v,1,u,O,k,r,we,ce,null,oe)),b&1&&G(p,p=u[0])?(N(),g($,1,1,J),P(),$=_e(u),$.c(),h($,1),$.m(d,null)):$.p(u,b)},i(u){F||(h(l.$$.fragment,u),h($),F=!0)},o(u){g(l.$$.fragment,u),g($),F=!1},d(u){u&&(m(e),m(s),m(i),m(n),m(f)),j(l);for(let b=0;b<c.length;b+=1)c[b].d();$.d(u)}}}function Xe(a,e,l){let t,s,i;A(a,Ee,v=>l(15,s=v)),A(a,Ve,v=>l(5,i=v));let{items:o}=e,n={},f,r,c,k,_,d=[];const p=v=>{window.scrollTo({top:_*v,behavior:"smooth"})},F=v=>{const $=C(v,"position",s),u=C(v,"institution_department",s);return u!=null&&u.length?`${$}, ${u}`:$};function Y(){_=this.clientHeight,l(2,_)}function K(v){k=v,l(1,k)}const O=v=>p(v);return a.$$set=v=>{"items"in v&&l(8,o=v.items)},a.$$.update=()=>{a.$$.dirty&3840&&(o.forEach(v=>{for(let $=+v.start_year;$<=+v.end_year;$++)$ in n?n[+$].push(v):l(9,n[+$]=[v],n)}),l(10,r=+Ye(Object.keys(n))),l(11,c=+Oe(Object.keys(n))),l(11,c=Math.min(new Date().getFullYear(),c)),l(3,d=Ke(r,c))),a.$$.dirty&1026&&l(0,f=r+k),a.$$.dirty&513&&l(4,t=n[f])},[f,k,_,d,t,i,p,F,o,n,r,c,Y,K,O]}class Ze extends x{constructor(e){super(),ee(this,e,Xe,Qe,G,{items:8})}}function me(a,e,l){const t=a.slice();return t[3]=e[l].type,t[4]=e[l].items,t}function he(a,e,l){const t=a.slice();return t[7]=e[l].person_id,t[8]=e[l].image_link,t[9]=e[l].person_name,t[10]=e[l].curr_position,t}function de(a){let e,l,t=a[1](a[3])+"",s,i,o,n,f,r=S(a[4]),c=[];for(let _=0;_<r.length;_+=1)c[_]=pe(he(a,r,_));const k=_=>g(c[_],1,1,()=>{c[_]=null});return{c(){e=I("div"),l=I("div"),s=Q(t),i=T(),o=I("div");for(let _=0;_<c.length;_+=1)c[_].c();n=T(),this.h()},l(_){e=E(_,"DIV",{class:!0});var d=V(e);l=E(d,"DIV",{class:!0});var p=V(l);s=X(p,t),p.forEach(m),i=H(d),o=E(d,"DIV",{class:!0});var F=V(o);for(let Y=0;Y<c.length;Y+=1)c[Y].l(F);F.forEach(m),n=H(d),d.forEach(m),this.h()},h(){D(l,"class","left svelte-19yq8gm"),D(o,"class","right svelte-19yq8gm"),D(e,"class","container svelte-19yq8gm")},m(_,d){y(_,e,d),M(e,l),M(l,s),M(e,i),M(e,o);for(let p=0;p<c.length;p+=1)c[p]&&c[p].m(o,null);M(e,n),f=!0},p(_,d){if((!f||d&3)&&t!==(t=_[1](_[3])+"")&&Z(s,t),d&1){r=S(_[4]);let p;for(p=0;p<r.length;p+=1){const F=he(_,r,p);c[p]?(c[p].p(F,d),h(c[p],1)):(c[p]=pe(F),c[p].c(),h(c[p],1),c[p].m(o,null))}for(N(),p=r.length;p<c.length;p+=1)k(p);P()}},i(_){if(!f){for(let d=0;d<r.length;d+=1)h(c[d]);f=!0}},o(_){c=c.filter(Boolean);for(let d=0;d<c.length;d+=1)g(c[d]);f=!1},d(_){_&&m(e),De(c,_)}}}function pe(a){let e,l;return e=new Ie({props:{id:a[7],image_link:a[8],imagePlaceholder:re(a[9]),position:a[10],size:"small",clickable:!0}}),{c(){q(e.$$.fragment)},l(t){z(e.$$.fragment,t)},m(t,s){B(e,t,s),l=!0},p(t,s){const i={};s&1&&(i.id=t[7]),s&1&&(i.image_link=t[8]),s&1&&(i.imagePlaceholder=re(t[9])),s&1&&(i.position=t[10]),e.$set(i)},i(t){l||(h(e.$$.fragment,t),l=!0)},o(t){g(e.$$.fragment,t),l=!1},d(t){j(e,t)}}}function ge(a){let e,l,t=!!a[3]&&de(a);return{c(){t&&t.c(),e=L()},l(s){t&&t.l(s),e=L()},m(s,i){t&&t.m(s,i),y(s,e,i),l=!0},p(s,i){s[3]?t?(t.p(s,i),i&1&&h(t,1)):(t=de(s),t.c(),h(t,1),t.m(e.parentNode,e)):t&&(N(),g(t,1,1,()=>{t=null}),P())},i(s){l||(h(t),l=!0)},o(s){g(t),l=!1},d(s){s&&m(e),t&&t.d(s)}}}function xe(a){let e,l,t,s=S(a[0]),i=[];for(let n=0;n<s.length;n+=1)i[n]=ge(me(a,s,n));const o=n=>g(i[n],1,1,()=>{i[n]=null});return{c(){e=I("div"),l=I("div");for(let n=0;n<i.length;n+=1)i[n].c();this.h()},l(n){e=E(n,"DIV",{class:!0});var f=V(e);l=E(f,"DIV",{class:!0});var r=V(l);for(let c=0;c<i.length;c+=1)i[c].l(r);r.forEach(m),f.forEach(m),this.h()},h(){D(l,"class","outer-container svelte-19yq8gm"),D(e,"class","institution-breakdown mobile-hide svelte-19yq8gm")},m(n,f){y(n,e,f),M(e,l);for(let r=0;r<i.length;r+=1)i[r]&&i[r].m(l,null);t=!0},p(n,[f]){if(f&3){s=S(n[0]);let r;for(r=0;r<s.length;r+=1){const c=me(n,s,r);i[r]?(i[r].p(c,f),h(i[r],1)):(i[r]=ge(c),i[r].c(),h(i[r],1),i[r].m(l,null))}for(N(),r=s.length;r<i.length;r+=1)o(r);P()}},i(n){if(!t){for(let f=0;f<s.length;f+=1)h(i[f]);t=!0}},o(n){i=i.filter(Boolean);for(let f=0;f<i.length;f+=1)g(i[f]);t=!1},d(n){n&&m(e),De(i,n)}}}function et(a,e,l){let t,s;A(a,Ve,o=>l(1,s=o));let{affiliations:i}=e;return a.$$set=o=>{"affiliations"in o&&l(2,i=o.affiliations)},a.$$.update=()=>{a.$$.dirty&4&&console.log(i),a.$$.dirty&4&&l(0,t=Object.entries(i).map(([o,n])=>({type:o,items:n})).sort((o,n)=>o.items.length>n.items.length?-1:1))},[t,s,i]}class tt extends x{constructor(e){super(),ee(this,e,et,xe,G,{affiliations:2})}}function ve(a){let e,l,t,s;return e=new tt({props:{affiliations:a[0].partyData.affiliations}}),t=new Ce({}),{c(){q(e.$$.fragment),l=T(),q(t.$$.fragment)},l(i){z(e.$$.fragment,i),l=H(i),z(t.$$.fragment,i)},m(i,o){B(e,i,o),y(i,l,o),B(t,i,o),s=!0},p(i,o){const n={};o&1&&(n.affiliations=i[0].partyData.affiliations),e.$set(n)},i(i){s||(h(e.$$.fragment,i),h(t.$$.fragment,i),s=!0)},o(i){g(e.$$.fragment,i),g(t.$$.fragment,i),s=!1},d(i){i&&m(l),j(e,i),j(t,i)}}}function be(a){let e,l,t,s,i;const o=[it,lt],n=[];function f(r,c){return r[4]==="mobile"?0:1}return l=f(a),t=n[l]=o[l](a),{c(){e=I("div"),t.c(),this.h()},l(r){e=E(r,"DIV",{});var c=V(e);t.l(c),c.forEach(m),this.h()},h(){$e(()=>a[5].call(e))},m(r,c){y(r,e,c),n[l].m(e,null),s=ye(e,a[5].bind(e)),i=!0},p(r,c){let k=l;l=f(r),l===k?n[l].p(r,c):(N(),g(n[k],1,1,()=>{n[k]=null}),P(),t=n[l],t?t.p(r,c):(t=n[l]=o[l](r),t.c()),h(t,1),t.m(e,null))},i(r){i||(h(t),i=!0)},o(r){g(t),i=!1},d(r){r&&m(e),n[l].d(),s()}}}function lt(a){let e,l;return e=new Ge({props:{items:a[0].affiliations,rowGroupingVar:"person_name",getItemLink:rt,getItemLabel:st}}),{c(){q(e.$$.fragment)},l(t){z(e.$$.fragment,t)},m(t,s){B(e,t,s),l=!0},p(t,s){const i={};s&1&&(i.items=t[0].affiliations),e.$set(i)},i(t){l||(h(e.$$.fragment,t),l=!0)},o(t){g(e.$$.fragment,t),l=!1},d(t){j(e,t)}}}function it(a){let e,l;return e=new Ze({props:{items:a[0].affiliations}}),{c(){q(e.$$.fragment)},l(t){z(e.$$.fragment,t)},m(t,s){B(e,t,s),l=!0},p(t,s){const i={};s&1&&(i.items=t[0].affiliations),e.$set(i)},i(t){l||(h(e.$$.fragment,t),l=!0)},o(t){g(e.$$.fragment,t),l=!1},d(t){j(e,t)}}}function ke(a){var f;let e,l,t,s,i;e=new Ae({props:{title:C((f=a[0].affiliations)==null?void 0:f[0],"institution",a[1]),notes:a[2],background:a[4]==="mobile"||a[0].partyData?"#E6E6EB":"#FFF",border:a[4]==="mobile"||a[0].partyData?"#FFF":"#6E7382",hideLegend:!!a[0].partyData,pageContentHeight:a[3]}});let o=a[0].partyData&&ve(a),n=a[4]&&be(a);return{c(){q(e.$$.fragment),l=T(),o&&o.c(),t=T(),n&&n.c(),s=L()},l(r){z(e.$$.fragment,r),l=H(r),o&&o.l(r),t=H(r),n&&n.l(r),s=L()},m(r,c){B(e,r,c),y(r,l,c),o&&o.m(r,c),y(r,t,c),n&&n.m(r,c),y(r,s,c),i=!0},p(r,c){var _;const k={};c&3&&(k.title=C((_=r[0].affiliations)==null?void 0:_[0],"institution",r[1])),c&4&&(k.notes=r[2]),c&17&&(k.background=r[4]==="mobile"||r[0].partyData?"#E6E6EB":"#FFF"),c&17&&(k.border=r[4]==="mobile"||r[0].partyData?"#FFF":"#6E7382"),c&1&&(k.hideLegend=!!r[0].partyData),c&8&&(k.pageContentHeight=r[3]),e.$set(k),r[0].partyData?o?(o.p(r,c),c&1&&h(o,1)):(o=ve(r),o.c(),h(o,1),o.m(t.parentNode,t)):o&&(N(),g(o,1,1,()=>{o=null}),P()),r[4]?n?(n.p(r,c),c&16&&h(n,1)):(n=be(r),n.c(),h(n,1),n.m(s.parentNode,s)):n&&(N(),g(n,1,1,()=>{n=null}),P())},i(r){i||(h(e.$$.fragment,r),h(o),h(n),i=!0)},o(r){g(e.$$.fragment,r),g(o),g(n),i=!1},d(r){r&&(m(l),m(t),m(s)),j(e,r),o&&o.d(r),n&&n.d(r)}}}function nt(a){let e=a[0].route,l,t,s=ke(a);return{c(){s.c(),l=L()},l(i){s.l(i),l=L()},m(i,o){s.m(i,o),y(i,l,o),t=!0},p(i,[o]){o&1&&G(e,e=i[0].route)?(N(),g(s,1,1,J),P(),s=ke(i),s.c(),h(s,1),s.m(l.parentNode,l)):s.p(i,o)},i(i){t||(h(s),t=!0)},o(i){g(s),t=!1},d(i){i&&m(l),s.d(i)}}}const rt=({person_id:a})=>`/people/${a}`,st=({person_id:a,person_name:e,image_link:l,curr_position:t})=>({id:a,image_link:l,name:e,position:t});function ot(a,e,l){let t,s;A(a,Ee,r=>l(1,t=r)),A(a,Be,r=>l(4,s=r));let{data:i}=e,o,n;function f(){n=this.clientHeight,l(3,n)}return a.$$set=r=>{"data"in r&&l(0,i=r.data)},a.$$.update=()=>{if(a.$$.dirty&3){const r=i.affiliations.map(c=>C(c,"notes_institution",t)).filter(c=>(c==null?void 0:c.length)>0);l(2,o=[...new Set(r)])}},[i,t,o,n,s,f]}class gt extends x{constructor(e){super(),ee(this,e,ot,nt,G,{data:0})}}export{gt as component,pt as universal};
