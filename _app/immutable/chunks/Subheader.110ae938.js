import{h as F,d as G}from"./singletons.b926b060.js";import{s as K,q as w,e as M,i as Q,d as R,H as B,L as V,I as W,y as X,z as Y,B as C,J as Z,p as y,r as $,u as x,v as ss,w as es}from"./scheduler.e81bebc8.js";import{S as ts,i as ns,b as P,d as as,m as k,t as v,c as os,a as j,e as q,g as cs}from"./index.66277aa9.js";import{S as T,e as E,g as A,i as _,f as rs}from"./LocalizedLink.56956f74.js";const ds=F("goto"),z=()=>{const t=G;return{page:{subscribe:t.page.subscribe},navigating:{subscribe:t.navigating.subscribe},updated:t.updated}},bs={subscribe(t){return z().page.subscribe(t)}},hs={subscribe(t){return z().navigating.subscribe(t)}};function is(t){let s;const a=t[11].default,r=$(a,t,t[13],null);return{c(){r&&r.c()},l(o){r&&r.l(o)},m(o,u){r&&r.m(o,u),s=!0},p(o,u){r&&r.p&&(!s||u&8192)&&x(r,a,o,o[13],s?es(a,o[13],u,null):ss(o[13]),null)},i(o){s||(j(r,o),s=!0)},o(o){v(r,o),s=!1},d(o){r&&r.d(o)}}}function us(t){let s,a,r;const o=[{tag:t[3]},{use:[t[8],...t[0]]},{class:E({[t[1]]:!0,[t[6]]:!0,...t[5]})},t[7],t[9]];var u=t[2];function m(e,n){let i={$$slots:{default:[is]},$$scope:{ctx:e}};if(n!==void 0&&n&1003)i=A(o,[n&8&&{tag:e[3]},n&257&&{use:[e[8],...e[0]]},n&98&&{class:E({[e[1]]:!0,[e[6]]:!0,...e[5]})},n&128&&_(e[7]),n&512&&_(e[9])]);else for(let g=0;g<o.length;g+=1)i=C(i,o[g]);return{props:i}}return u&&(s=w(u,m(t)),t[12](s)),{c(){s&&P(s.$$.fragment),a=M()},l(e){s&&as(s.$$.fragment,e),a=M()},m(e,n){s&&k(s,e,n),Q(e,a,n),r=!0},p(e,[n]){if(n&4&&u!==(u=e[2])){if(s){cs();const i=s;v(i.$$.fragment,1,0,()=>{q(i,1)}),os()}u?(s=w(u,m(e,n)),e[12](s),P(s.$$.fragment),j(s.$$.fragment,1),k(s,a.parentNode,a)):s=null}else if(u){const i=n&1003?A(o,[n&8&&{tag:e[3]},n&257&&{use:[e[8],...e[0]]},n&98&&{class:E({[e[1]]:!0,[e[6]]:!0,...e[5]})},n&128&&_(e[7]),n&512&&_(e[9])]):{};n&8192&&(i.$$scope={dirty:n,ctx:e}),s.$set(i)}},i(e){r||(s&&j(s.$$.fragment,e),r=!0)},o(e){s&&v(s.$$.fragment,e),r=!1},d(e){e&&R(a),t[12](null),s&&q(s,e)}}}const l={component:T,tag:"div",class:"",classMap:{},contexts:{},props:{}};function ls(t,s,a){const r=["use","class","component","tag","getElement"];let o=B(s,r),{$$slots:u={},$$scope:m}=s,{use:e=[]}=s,{class:n=""}=s,i;const g=l.class,p={},O=[],d=l.contexts,D=l.props;let{component:b=l.component}=s,{tag:S=b===T?l.tag:void 0}=s;Object.entries(l.classMap).forEach(([c,L])=>{const h=V(L);h&&"subscribe"in h&&O.push(h.subscribe(U=>{a(5,p[c]=U,p)}))});const H=rs(W());for(let c in d)d.hasOwnProperty(c)&&X(c,d[c]);Y(()=>{for(const c of O)c()});function I(){return i.getElement()}function J(c){y[c?"unshift":"push"](()=>{i=c,a(4,i)})}return t.$$set=c=>{s=C(C({},s),Z(c)),a(9,o=B(s,r)),"use"in c&&a(0,e=c.use),"class"in c&&a(1,n=c.class),"component"in c&&a(2,b=c.component),"tag"in c&&a(3,S=c.tag),"$$scope"in c&&a(13,m=c.$$scope)},[e,n,b,S,i,p,g,D,H,o,I,u,J,m]}class fs extends ts{constructor(s){super(),ns(this,s,ls,us,K,{use:0,class:1,component:2,tag:3,getElement:10})}get getElement(){return this.$$.ctx[10]}}const N=Object.assign({},l);function f(t){return new Proxy(fs,{construct:function(s,a){return Object.assign(l,N,t),new s(...a)},get:function(s,a){return Object.assign(l,N,t),s[a]}})}const Es=f({class:"mdc-deprecated-list-item__text",tag:"span"});f({class:"mdc-deprecated-list-item__primary-text",tag:"span"});f({class:"mdc-deprecated-list-item__secondary-text",tag:"span"});f({class:"mdc-deprecated-list-item__meta",tag:"span"});f({class:"mdc-deprecated-list-group",tag:"div"});f({class:"mdc-deprecated-list-group__subheader",tag:"h3"});export{Es as T,f as c,ds as g,hs as n,bs as p};
