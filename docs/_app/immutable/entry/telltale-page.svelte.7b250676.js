import{S as F,i as Z,s as H,k as v,l as g,m as b,h as u,n as p,b as h,D as w,d as D,f as z,g as M,I as A,V as C,W as K,X as L,v as U,H as X,Y as J,q as I,r as S,u as T,a as R,c as E,K as Q,M as N,Z as $,e as P,_ as x,O as ee}from"../chunks/index.e36dfafc.js";import{w as te}from"../chunks/index.6bf647b8.js";import{f as V}from"../chunks/index.e905741f.js";const le=(window==null?void 0:window.localStorage.getItem("story_id"))??"1",O=te(le);O.subscribe(o=>{window==null||window.localStorage.setItem("story_id",o),console.log(o)});let W=new Map;W.set("asd",123);console.log(W.get("asd"));let ie=[{id:"1",message:"The greatest story ever.",img:"wave.jpeg",choices:[{id:"2",text:"Begin"}]},{id:"2",message:"What will be your path?",img:"choice.jpeg",choices:[{id:"3",text:"Left"},{id:"4",text:"Right"}]},{id:"3",message:"Wrong! Try again!",img:"choice.jpeg",choices:[{id:"4",text:"Other right"},{id:"4",text:"Right"}]},{id:"4",message:"🤣🤣🤣🤣🤣",html:'<div style="width:480px"><iframe allow="fullscreen" frameBorder="0" height="360" src="https://giphy.com/embed/uhYPkjP03h9RvVdazZ/video" width="480"></iframe></div>',choices:[{id:"1",text:"Reset!"}]}];function j(o,e,i){const s=o.slice();return s[4]=e[i],s}function se(o){let e,i,s,t;return{c(){e=v("p"),i=I("STORY FOR ID "),s=I(o[0]),t=I(" MISSING")},l(l){e=g(l,"P",{});var c=b(e);i=S(c,"STORY FOR ID "),s=S(c,o[0]),t=S(c," MISSING"),c.forEach(u)},m(l,c){h(l,e,c),w(e,i),w(e,s),w(e,t)},p(l,c){c&1&&T(s,l[0])},d(l){l&&u(e)}}}function ae(o){let e,i,s,t=o[1].message+"",l,c,n,r=o[1].img&&Y(o),f=o[1].html&&q(o),k=o[1].choices,m=[];for(let a=0;a<k.length;a+=1)m[a]=B(j(o,k,a));return{c(){r&&r.c(),e=R(),f&&f.c(),i=R(),s=v("p"),l=I(t),c=R(),n=v("div");for(let a=0;a<m.length;a+=1)m[a].c();this.h()},l(a){r&&r.l(a),e=E(a),f&&f.l(a),i=E(a),s=g(a,"P",{});var d=b(s);l=S(d,t),d.forEach(u),c=E(a),n=g(a,"DIV",{class:!0});var _=b(n);for(let y=0;y<m.length;y+=1)m[y].l(_);_.forEach(u),this.h()},h(){p(n,"class","row svelte-1ns60ve")},m(a,d){r&&r.m(a,d),h(a,e,d),f&&f.m(a,d),h(a,i,d),h(a,s,d),w(s,l),h(a,c,d),h(a,n,d);for(let _=0;_<m.length;_+=1)m[_]&&m[_].m(n,null)},p(a,d){if(a[1].img?r?r.p(a,d):(r=Y(a),r.c(),r.m(e.parentNode,e)):r&&(r.d(1),r=null),a[1].html?f?f.p(a,d):(f=q(a),f.c(),f.m(i.parentNode,i)):f&&(f.d(1),f=null),d&2&&t!==(t=a[1].message+"")&&T(l,t),d&6){k=a[1].choices;let _;for(_=0;_<k.length;_+=1){const y=j(a,k,_);m[_]?m[_].p(y,d):(m[_]=B(y),m[_].c(),m[_].m(n,null))}for(;_<m.length;_+=1)m[_].d(1);m.length=k.length}},d(a){r&&r.d(a),a&&u(e),f&&f.d(a),a&&u(i),a&&u(s),a&&u(c),a&&u(n),Q(m,a)}}}function Y(o){let e,i,s;return{c(){e=v("img"),this.h()},l(t){e=g(t,"IMG",{src:!0,alt:!0,class:!0}),this.h()},h(){N(e.src,i=o[1].img)||p(e,"src",i),p(e,"alt",s=o[1].message),p(e,"class","svelte-1ns60ve")},m(t,l){h(t,e,l)},p(t,l){l&2&&!N(e.src,i=t[1].img)&&p(e,"src",i),l&2&&s!==(s=t[1].message)&&p(e,"alt",s)},d(t){t&&u(e)}}}function q(o){let e,i=o[1].html+"",s;return{c(){e=new $(!1),s=P(),this.h()},l(t){e=x(t,!1),s=P(),this.h()},h(){e.a=s},m(t,l){e.m(i,t,l),h(t,s,l)},p(t,l){l&2&&i!==(i=t[1].html+"")&&e.p(i)},d(t){t&&u(s),t&&e.d()}}}function B(o){let e,i=o[4].text+"",s,t,l;function c(){return o[3](o[4])}return{c(){e=v("button"),s=I(i)},l(n){e=g(n,"BUTTON",{});var r=b(e);s=S(r,i),r.forEach(u)},m(n,r){h(n,e,r),w(e,s),t||(l=ee(e,"click",c),t=!0)},p(n,r){o=n,r&2&&i!==(i=o[4].text+"")&&T(s,i)},d(n){n&&u(e),t=!1,l()}}}function G(o){let e,i,s,t;function l(r,f){return r[1]?ae:se}let c=l(o),n=c(o);return{c(){e=v("div"),n.c(),this.h()},l(r){e=g(r,"DIV",{class:!0});var f=b(e);n.l(f),f.forEach(u),this.h()},h(){p(e,"class","container svelte-1ns60ve")},m(r,f){h(r,e,f),n.m(e,null),t=!0},p(r,f){c===(c=l(r))&&n?n.p(r,f):(n.d(1),n=c(r),n&&(n.c(),n.m(e,null)))},i(r){t||(r&&C(()=>{t&&(s&&s.end(1),i=K(e,V,{x:800,duration:750}),i.start())}),t=!0)},o(r){i&&i.invalidate(),r&&(s=L(e,V,{x:-800,duration:750})),t=!1},d(r){r&&u(e),n.d(),r&&s&&s.end()}}}function re(o){let e,i,s=o[0],t=G(o);return{c(){e=v("main"),i=v("div"),t.c(),this.h()},l(l){e=g(l,"MAIN",{class:!0});var c=b(e);i=g(c,"DIV",{class:!0});var n=b(i);t.l(n),n.forEach(u),c.forEach(u),this.h()},h(){p(i,"class","grid svelte-1ns60ve"),p(e,"class","svelte-1ns60ve")},m(l,c){h(l,e,c),w(e,i),t.m(i,null)},p(l,[c]){c&1&&H(s,s=l[0])?(U(),D(t,1,1,X),z(),t=G(l),t.c(),M(t,1),t.m(i,null)):t.p(l,c)},i(l){M(t)},o(l){D(t)},d(l){l&&u(e),t.d(l)}}}function oe(o,e,i){let s,t,l;A(o,O,n=>i(2,l=n));const c=n=>{J(O,l=n.id,l)};return o.$$.update=()=>{o.$$.dirty&4&&i(0,s=l),o.$$.dirty&1&&i(1,t=ie.find(n=>n.id==s))},[s,t,l,c]}class _e extends F{constructor(e){super(),Z(this,e,oe,re,H,{})}}export{_e as default};
