import{S as G,i as S,s as V,k as p,l as _,m,h as u,n as f,b as E,D as h,B as k,I as A,a as y,c as I,J as g,K as b,L as M,M as B}from"../../../chunks/index-fd610874.js";function $(n,s,a){const r=n.slice();return r[5]=s[a],r[7]=a,r}function D(n){let s,a,r,t,l,c,e,i,v;function q(){return n[2](n[5])}function w(){return n[3](n[5])}return{c(){s=p("div"),a=p("img"),t=y(),l=p("img"),e=y(),this.h()},l(d){s=_(d,"DIV",{class:!0});var o=m(s);a=_(o,"IMG",{class:!0,src:!0,alt:!0}),t=I(o),l=_(o,"IMG",{class:!0,src:!0,alt:!0}),e=I(o),o.forEach(u),this.h()},h(){f(a,"class","front svelte-g73vgp"),g(a.src,r=n[5].img)||f(a,"src",r),f(a,"alt",""),f(l,"class","back svelte-g73vgp"),g(l.src,c="front.webp")||f(l,"src",c),f(l,"alt",""),f(s,"class","card svelte-g73vgp"),b(s,"flipped",n[5].flipped)},m(d,o){E(d,s,o),h(s,a),h(s,t),h(s,l),h(s,e),i||(v=[M(s,"click",q),M(s,"keypress",w)],i=!0)},p(d,o){n=d,o&1&&!g(a.src,r=n[5].img)&&f(a,"src",r),o&1&&b(s,"flipped",n[5].flipped)},d(d){d&&u(s),i=!1,B(v)}}}function C(n){let s,a,r=n[0],t=[];for(let l=0;l<r.length;l+=1)t[l]=D($(n,r,l));return{c(){s=p("main"),a=p("div");for(let l=0;l<t.length;l+=1)t[l].c();this.h()},l(l){s=_(l,"MAIN",{class:!0});var c=m(s);a=_(c,"DIV",{class:!0});var e=m(a);for(let i=0;i<t.length;i+=1)t[i].l(e);e.forEach(u),c.forEach(u),this.h()},h(){f(a,"class","row svelte-g73vgp"),f(s,"class","svelte-g73vgp")},m(l,c){E(l,s,c),h(s,a);for(let e=0;e<t.length;e+=1)t[e].m(a,null)},p(l,[c]){if(c&3){r=l[0];let e;for(e=0;e<r.length;e+=1){const i=$(l,r,e);t[e]?t[e].p(i,c):(t[e]=D(i),t[e].c(),t[e].m(a,null))}for(;e<t.length;e+=1)t[e].d(1);t.length=r.length}},i:k,o:k,d(l){l&&u(s),A(t,l)}}}function J(n,s,a){let r=[];for(let e=0;e<4;e++)r.push({id:5,img:"/notrick.gif",flipped:!1,completed:!1});function t(e){a(0,r)}return[r,t,e=>{t()},e=>{t()}]}class L extends G{constructor(s){super(),S(this,s,J,C,V,{})}}export{L as default};
