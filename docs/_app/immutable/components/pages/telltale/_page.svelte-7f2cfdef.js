import{S as F,i as L,s as Y,k as v,l as g,m as b,h as d,n as p,b as h,D as w,t as D,d as U,f as O,H as W,P as z,Q as A,R as C,g as J,B as Q,T as Z,q as I,r as S,u as N,a as R,c as T,J as K,L as P,U as X,e as V,V as $,N as x}from"../../../chunks/index-31589446.js";import{w as ee}from"../../../chunks/index-8afd756c.js";import{f as j}from"../../../chunks/index-318ce104.js";const te=(window==null?void 0:window.localStorage.getItem("story_id"))??"1",E=ee(te);E.subscribe(o=>{window==null||window.localStorage.setItem("story_id",o),console.log(o)});let le=[{id:"1",message:"The greatest story ever.",img:"wave.jpeg",choices:[{id:"2",text:"Begin"}]},{id:"2",message:"What will be your path?",img:"choice.jpeg",choices:[{id:"3",text:"Left"},{id:"4",text:"Right"}]},{id:"3",message:"Wrong! Try again!",img:"choice.jpeg",choices:[{id:"4",text:"Other right"},{id:"4",text:"Right"}]},{id:"4",message:"🤣🤣🤣🤣🤣",html:'<div style="width:480px"><iframe allow="fullscreen" frameBorder="0" height="360" src="https://giphy.com/embed/uhYPkjP03h9RvVdazZ/video" width="480"></iframe></div>',choices:[{id:"1",text:"Reset!"}]}];function B(o,e,i){const s=o.slice();return s[4]=e[i],s}function ie(o){let e,i,s,t;return{c(){e=v("p"),i=I("STORY FOR ID "),s=I(o[0]),t=I(" MISSING")},l(l){e=g(l,"P",{});var n=b(e);i=S(n,"STORY FOR ID "),s=S(n,o[0]),t=S(n," MISSING"),n.forEach(d)},m(l,n){h(l,e,n),w(e,i),w(e,s),w(e,t)},p(l,n){n&1&&N(s,l[0])},d(l){l&&d(e)}}}function se(o){let e,i,s,t=o[1].message+"",l,n,c,a=o[1].img&&M(o),f=o[1].html&&q(o),k=o[1].choices,u=[];for(let r=0;r<k.length;r+=1)u[r]=G(B(o,k,r));return{c(){a&&a.c(),e=R(),f&&f.c(),i=R(),s=v("p"),l=I(t),n=R(),c=v("div");for(let r=0;r<u.length;r+=1)u[r].c();this.h()},l(r){a&&a.l(r),e=T(r),f&&f.l(r),i=T(r),s=g(r,"P",{});var m=b(s);l=S(m,t),m.forEach(d),n=T(r),c=g(r,"DIV",{class:!0});var _=b(c);for(let y=0;y<u.length;y+=1)u[y].l(_);_.forEach(d),this.h()},h(){p(c,"class","row svelte-1rcdl96")},m(r,m){a&&a.m(r,m),h(r,e,m),f&&f.m(r,m),h(r,i,m),h(r,s,m),w(s,l),h(r,n,m),h(r,c,m);for(let _=0;_<u.length;_+=1)u[_].m(c,null)},p(r,m){if(r[1].img?a?a.p(r,m):(a=M(r),a.c(),a.m(e.parentNode,e)):a&&(a.d(1),a=null),r[1].html?f?f.p(r,m):(f=q(r),f.c(),f.m(i.parentNode,i)):f&&(f.d(1),f=null),m&2&&t!==(t=r[1].message+"")&&N(l,t),m&6){k=r[1].choices;let _;for(_=0;_<k.length;_+=1){const y=B(r,k,_);u[_]?u[_].p(y,m):(u[_]=G(y),u[_].c(),u[_].m(c,null))}for(;_<u.length;_+=1)u[_].d(1);u.length=k.length}},d(r){a&&a.d(r),r&&d(e),f&&f.d(r),r&&d(i),r&&d(s),r&&d(n),r&&d(c),K(u,r)}}}function M(o){let e,i,s;return{c(){e=v("img"),this.h()},l(t){e=g(t,"IMG",{src:!0,alt:!0,class:!0}),this.h()},h(){P(e.src,i=o[1].img)||p(e,"src",i),p(e,"alt",s=o[1].message),p(e,"class","svelte-1rcdl96")},m(t,l){h(t,e,l)},p(t,l){l&2&&!P(e.src,i=t[1].img)&&p(e,"src",i),l&2&&s!==(s=t[1].message)&&p(e,"alt",s)},d(t){t&&d(e)}}}function q(o){let e,i=o[1].html+"",s;return{c(){e=new X(!1),s=V(),this.h()},l(t){e=$(t,!1),s=V(),this.h()},h(){e.a=s},m(t,l){e.m(i,t,l),h(t,s,l)},p(t,l){l&2&&i!==(i=t[1].html+"")&&e.p(i)},d(t){t&&d(s),t&&e.d()}}}function G(o){let e,i=o[4].text+"",s,t,l;function n(){return o[3](o[4])}return{c(){e=v("button"),s=I(i)},l(c){e=g(c,"BUTTON",{});var a=b(e);s=S(a,i),a.forEach(d)},m(c,a){h(c,e,a),w(e,s),t||(l=x(e,"click",n),t=!0)},p(c,a){o=c,a&2&&i!==(i=o[4].text+"")&&N(s,i)},d(c){c&&d(e),t=!1,l()}}}function H(o){let e,i,s,t;function l(a,f){return a[1]?se:ie}let n=l(o),c=n(o);return{c(){e=v("div"),c.c(),this.h()},l(a){e=g(a,"DIV",{class:!0});var f=b(e);c.l(f),f.forEach(d),this.h()},h(){p(e,"class","container svelte-1rcdl96")},m(a,f){h(a,e,f),c.m(e,null),t=!0},p(a,f){n===(n=l(a))&&c?c.p(a,f):(c.d(1),c=n(a),c&&(c.c(),c.m(e,null)))},i(a){t||(a&&z(()=>{s&&s.end(1),i=A(e,j,{x:800,duration:750}),i.start()}),t=!0)},o(a){i&&i.invalidate(),a&&(s=C(e,j,{x:-800,duration:750})),t=!1},d(a){a&&d(e),c.d(),a&&s&&s.end()}}}function re(o){let e,i,s=o[0],t=H(o);return{c(){e=v("main"),i=v("div"),t.c(),this.h()},l(l){e=g(l,"MAIN",{class:!0});var n=b(e);i=g(n,"DIV",{class:!0});var c=b(i);t.l(c),c.forEach(d),n.forEach(d),this.h()},h(){p(i,"class","grid svelte-1rcdl96"),p(e,"class","svelte-1rcdl96")},m(l,n){h(l,e,n),w(e,i),t.m(i,null)},p(l,[n]){n&1&&Y(s,s=l[0])?(J(),D(t,1,1,Q),U(),t=H(l),t.c(),O(t,1),t.m(i,null)):t.p(l,n)},i(l){O(t)},o(l){D(t)},d(l){l&&d(e),t.d(l)}}}function ae(o,e,i){let s,t,l;W(o,E,c=>i(2,l=c));const n=c=>{Z(E,l=c.id,l)};return o.$$.update=()=>{o.$$.dirty&4&&i(0,s=l),o.$$.dirty&1&&i(1,t=le.find(c=>c.id==s))},[s,t,l,n]}class fe extends F{constructor(e){super(),L(this,e,ae,re,Y,{})}}export{fe as default};