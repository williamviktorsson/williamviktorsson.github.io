import{S,i as q,s as x,k as f,q as _,a as k,l as d,m as g,r as h,h as u,c as y,b as m,E as v,u as E,I as $,J as C}from"../chunks/index.81c2a7b5.js";import{s as H}from"../chunks/singletons.6e4437a3.js";const I=()=>{const s=H;return{page:{subscribe:s.page.subscribe},navigating:{subscribe:s.navigating.subscribe},updated:s.updated}},J={subscribe(s){return I().page.subscribe(s)}};function P(s){var b;let t,r=s[0].status+"",o,n,i,c=((b=s[0].error)==null?void 0:b.message)+"",l;return{c(){t=f("h1"),o=_(r),n=k(),i=f("p"),l=_(c)},l(e){t=d(e,"H1",{});var a=g(t);o=h(a,r),a.forEach(u),n=y(e),i=d(e,"P",{});var p=g(i);l=h(p,c),p.forEach(u)},m(e,a){m(e,t,a),v(t,o),m(e,n,a),m(e,i,a),v(i,l)},p(e,[a]){var p;a&1&&r!==(r=e[0].status+"")&&E(o,r),a&1&&c!==(c=((p=e[0].error)==null?void 0:p.message)+"")&&E(l,c)},i:$,o:$,d(e){e&&u(t),e&&u(n),e&&u(i)}}}function j(s,t,r){let o;return C(s,J,n=>r(0,o=n)),[o]}let A=class extends S{constructor(t){super(),q(this,t,j,P,x,{})}};export{A as default};
