import{S as W,i as z,s as L,k as g,q as I,a as T,l as y,m as k,r as S,h as m,c as E,n as b,b as p,D as w,I as U,u as O,t as P,d as A,f as B,H as J,J as Q,K as Z,L as $,g as X,B as x,M as ee,N as te,O as M,P as le,e as H,Q as se}from"../../../chunks/index-5bbf6cc6.js";import{w as ie}from"../../../chunks/index-0d64f97e.js";var F;const re=(F=window.localStorage.getItem("story_id"))!=null?F:"1",N=ie(re);N.subscribe(r=>{window.localStorage.setItem("story_id",r),console.log(r)});let ae=[{id:"1",message:"The greatest story ever.",img:"wave.jpeg",choices:[{id:"2",text:"Begin"}]},{id:"2",message:"What will be your path?",img:"choice.jpeg",choices:[{id:"3",text:"Left"},{id:"4",text:"Right"}]},{id:"3",message:"Wrong! Try again!",img:"choice.jpeg",choices:[{id:"4",text:"Other right"},{id:"4",text:"Right"}]},{id:"4",message:"\u{1F923}\u{1F923}\u{1F923}\u{1F923}\u{1F923}",html:'<div style="width:480px"><iframe allow="fullscreen" frameBorder="0" height="360" src="https://giphy.com/embed/uhYPkjP03h9RvVdazZ/video" width="480"></iframe></div>',choices:[{id:"1",text:"Reset!"}]}];function oe(r){const e=r-1;return e*e*e+1}function V(r,{delay:e=0,duration:o=400,easing:s=oe,x:i=0,y:n=0,opacity:u=0}={}){const f=getComputedStyle(r),t=+f.opacity,c=f.transform==="none"?"":f.transform,v=t*(1-u);return{delay:e,duration:o,easing:s,css:(h,l)=>`
			transform: ${c} translate(${(1-h)*i}px, ${(1-h)*n}px);
			opacity: ${t-v*l}`}}function q(r,e,o){const s=r.slice();return s[6]=e[o],s}function ne(r){let e,o,s,i;return{c(){e=g("p"),o=I("STORY FOR ID "),s=I(r[0]),i=I(" MISSING")},l(n){e=y(n,"P",{});var u=k(e);o=S(u,"STORY FOR ID "),s=S(u,r[0]),i=S(u," MISSING"),u.forEach(m)},m(n,u){p(n,e,u),w(e,o),w(e,s),w(e,i)},p(n,u){u&1&&O(s,n[0])},d(n){n&&m(e)}}}function ce(r){let e,o,s,i=r[1].message+"",n,u,f,t=r[1].img&&G(r),c=r[1].html&&K(r),v=r[1].choices,h=[];for(let l=0;l<v.length;l+=1)h[l]=Y(q(r,v,l));return{c(){t&&t.c(),e=T(),c&&c.c(),o=T(),s=g("p"),n=I(i),u=T(),f=g("div");for(let l=0;l<h.length;l+=1)h[l].c();this.h()},l(l){t&&t.l(l),e=E(l),c&&c.l(l),o=E(l),s=y(l,"P",{});var _=k(s);n=S(_,i),_.forEach(m),u=E(l),f=y(l,"DIV",{class:!0});var a=k(f);for(let d=0;d<h.length;d+=1)h[d].l(a);a.forEach(m),this.h()},h(){b(f,"class","row svelte-9syrbu")},m(l,_){t&&t.m(l,_),p(l,e,_),c&&c.m(l,_),p(l,o,_),p(l,s,_),w(s,n),p(l,u,_),p(l,f,_);for(let a=0;a<h.length;a+=1)h[a].m(f,null)},p(l,_){if(l[1].img?t?t.p(l,_):(t=G(l),t.c(),t.m(e.parentNode,e)):t&&(t.d(1),t=null),l[1].html?c?c.p(l,_):(c=K(l),c.c(),c.m(o.parentNode,o)):c&&(c.d(1),c=null),_&2&&i!==(i=l[1].message+"")&&O(n,i),_&6){v=l[1].choices;let a;for(a=0;a<v.length;a+=1){const d=q(l,v,a);h[a]?h[a].p(d,_):(h[a]=Y(d),h[a].c(),h[a].m(f,null))}for(;a<h.length;a+=1)h[a].d(1);h.length=v.length}},d(l){t&&t.d(l),l&&m(e),c&&c.d(l),l&&m(o),l&&m(s),l&&m(u),l&&m(f),te(h,l)}}}function G(r){let e,o,s;return{c(){e=g("img"),this.h()},l(i){e=y(i,"IMG",{src:!0,alt:!0,class:!0}),this.h()},h(){M(e.src,o=r[1].img)||b(e,"src",o),b(e,"alt",s=r[1].message),b(e,"class","svelte-9syrbu")},m(i,n){p(i,e,n)},p(i,n){n&2&&!M(e.src,o=i[1].img)&&b(e,"src",o),n&2&&s!==(s=i[1].message)&&b(e,"alt",s)},d(i){i&&m(e)}}}function K(r){let e,o=r[1].html+"",s;return{c(){e=new le(!1),s=H(),this.h()},l(i){e=se(i,!1),s=H(),this.h()},h(){e.a=s},m(i,n){e.m(o,i,n),p(i,s,n)},p(i,n){n&2&&o!==(o=i[1].html+"")&&e.p(o)},d(i){i&&m(s),i&&e.d()}}}function Y(r){let e,o=r[6].text+"",s,i,n;function u(){return r[5](r[6])}return{c(){e=g("button"),s=I(o)},l(f){e=y(f,"BUTTON",{});var t=k(e);s=S(t,o),t.forEach(m)},m(f,t){p(f,e,t),w(e,s),i||(n=U(e,"click",u),i=!0)},p(f,t){r=f,t&2&&o!==(o=r[6].text+"")&&O(s,o)},d(f){f&&m(e),i=!1,n()}}}function C(r){let e,o,s,i;function n(t,c){return t[1]?ce:ne}let u=n(r),f=u(r);return{c(){e=g("div"),f.c(),this.h()},l(t){e=y(t,"DIV",{class:!0});var c=k(e);f.l(c),c.forEach(m),this.h()},h(){b(e,"class","container svelte-9syrbu")},m(t,c){p(t,e,c),f.m(e,null),i=!0},p(t,c){u===(u=n(t))&&f?f.p(t,c):(f.d(1),f=u(t),f&&(f.c(),f.m(e,null)))},i(t){i||(t&&Q(()=>{s&&s.end(1),o=Z(e,V,{x:800,duration:750}),o.start()}),i=!0)},o(t){o&&o.invalidate(),t&&(s=$(e,V,{x:-800,duration:750})),i=!1},d(t){t&&m(e),f.d(),t&&s&&s.end()}}}function fe(r){let e,o,s,i,n,u,f,t,c,v=r[0],h,l,_=C(r);return{c(){e=g("h1"),o=I("Tjena edith "),s=I(r[3]),i=T(),n=g("button"),u=I("Klicka mig"),f=T(),t=g("main"),c=g("div"),_.c(),this.h()},l(a){e=y(a,"H1",{class:!0});var d=k(e);o=S(d,"Tjena edith "),s=S(d,r[3]),d.forEach(m),i=E(a),n=y(a,"BUTTON",{});var R=k(n);u=S(R,"Klicka mig"),R.forEach(m),f=E(a),t=y(a,"MAIN",{class:!0});var j=k(t);c=y(j,"DIV",{class:!0});var D=k(c);_.l(D),D.forEach(m),j.forEach(m),this.h()},h(){b(e,"class","edith svelte-9syrbu"),b(c,"class","grid svelte-9syrbu"),b(t,"class","svelte-9syrbu")},m(a,d){p(a,e,d),w(e,o),w(e,s),p(a,i,d),p(a,n,d),w(n,u),p(a,f,d),p(a,t,d),w(t,c),_.m(c,null),h||(l=U(n,"click",r[4]),h=!0)},p(a,[d]){d&8&&O(s,a[3]),d&1&&L(v,v=a[0])?(X(),P(_,1,1,x),A(),_=C(a),_.c(),B(_,1),_.m(c,null)):_.p(a,d)},i(a){B(_)},o(a){P(_)},d(a){a&&m(e),a&&m(i),a&&m(n),a&&m(f),a&&m(t),_.d(a),h=!1,l()}}}function ue(r,e,o){let s,i,n;J(r,N,c=>o(2,n=c));let u=0;function f(){o(3,u=u+1)}const t=c=>{ee(N,n=c.id,n)};return r.$$.update=()=>{r.$$.dirty&4&&o(0,s=n),r.$$.dirty&1&&o(1,i=ae.find(c=>c.id==s))},[s,i,n,u,f,t]}class he extends W{constructor(e){super(),z(this,e,ue,fe,L,{})}}export{he as default};