import{S as C,i as D,s as I,k as m,q as v,a as x,l as p,m as g,r as b,h as u,c as A,b as E,D as d,H as P,K,n as q,u as B}from"../chunks/index.e36dfafc.js";function L(o,a,h){const s=o.slice();return s[1]=a[h],s}function S(o){let a,h,s,n=o[1].meta.title+"",r,l,e,i=o[1].meta.date+"",t,c;return{c(){a=m("li"),h=m("h2"),s=m("a"),r=v(n),e=v(`
      Published `),t=v(i),c=x(),this.h()},l(_){a=p(_,"LI",{});var f=g(a);h=p(f,"H2",{});var k=g(h);s=p(k,"A",{href:!0});var H=g(s);r=b(H,n),H.forEach(u),k.forEach(u),e=b(f,`
      Published `),t=b(f,i),c=A(f),f.forEach(u),this.h()},h(){q(s,"href",l="/blog/"+o[1].path)},m(_,f){E(_,a,f),d(a,h),d(h,s),d(s,r),d(a,e),d(a,t),d(a,c)},p(_,f){f&1&&n!==(n=_[1].meta.title+"")&&B(r,n),f&1&&l!==(l="/blog/"+_[1].path)&&q(s,"href",l),f&1&&i!==(i=_[1].meta.date+"")&&B(t,i)},d(_){_&&u(a)}}}function U(o){let a,h,s,n,r=o[0].posts,l=[];for(let e=0;e<r.length;e+=1)l[e]=S(L(o,r,e));return{c(){a=m("h1"),h=v("Blog"),s=x(),n=m("ul");for(let e=0;e<l.length;e+=1)l[e].c()},l(e){a=p(e,"H1",{});var i=g(a);h=b(i,"Blog"),i.forEach(u),s=A(e),n=p(e,"UL",{});var t=g(n);for(let c=0;c<l.length;c+=1)l[c].l(t);t.forEach(u)},m(e,i){E(e,a,i),d(a,h),E(e,s,i),E(e,n,i);for(let t=0;t<l.length;t+=1)l[t]&&l[t].m(n,null)},p(e,[i]){if(i&1){r=e[0].posts;let t;for(t=0;t<r.length;t+=1){const c=L(e,r,t);l[t]?l[t].p(c,i):(l[t]=S(c),l[t].c(),l[t].m(n,null))}for(;t<l.length;t+=1)l[t].d(1);l.length=r.length}},i:P,o:P,d(e){e&&u(a),e&&u(s),e&&u(n),K(l,e)}}}function j(o,a,h){let{data:s}=a;return o.$$set=n=>{"data"in n&&h(0,s=n.data)},[s]}class y extends C{constructor(a){super(),D(this,a,j,U,I,{data:0})}}export{y as default};
