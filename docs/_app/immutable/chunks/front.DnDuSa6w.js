import{i as L,f as u,t as x,j as R,k as z,g as S}from"./disclose-version.BmIQt7z6.js";import{C as P,s as f,B as T,z as t,D as q,f as G,F as n,G as st}from"./runtime.Bix74eL6.js";import{a as lt}from"./render.DlfULs-I.js";import{o as dt,a as ct,p as H}from"./index-client.B_ai4hZY.js";import{p as i,i as O}from"./preload-helper.CLEiuFWN.js";import{t as M,s as ft,S as ut,T as _t}from"./content.DTFQcm-x.js";import{e as vt,i as gt}from"./each.DETzI6SP.js";/* empty css                                               */var mt=x('<div class="confetti svelte-15ksp55"></div>'),xt=x('<div class="confetti-holder svelte-15ksp55"></div>');function ht(D,e){P(e,!0);let d=i(e,"size",3,10),h=i(e,"x",11,()=>[-.5,.5]),y=i(e,"y",11,()=>[.25,1]),g=i(e,"duration",3,2e3),a=i(e,"infinite",3,!1),o=i(e,"delay",11,()=>[0,50]),c=i(e,"colorRange",11,()=>[0,360]),_=i(e,"colorArray",11,()=>[]),F=i(e,"amount",3,50),v=i(e,"iterationCount",3,1),j=i(e,"fallDistance",3,"100px"),p=i(e,"rounded",3,!1),b=i(e,"cone",3,!1),C=i(e,"noGravity",3,!1),I=i(e,"xSpread",3,.15),w=i(e,"destroyOnComplete",3,!0),m=i(e,"disableForReducedMotion",3,!1),s=G(!1);dt(()=>{!w()||a()||v()=="infinite"||setTimeout(()=>f(s,!0),(g()+o()[1])*v())});function r(k,l){return Math.random()*(l-k)+k}function E(){return _().length?_()[Math.round(Math.random()*(_().length-1))]:`hsl(${Math.round(r(c()[0],c()[1]))}, 75%, 50%)`}var A=L(),J=R(A);O(J,()=>!t(s),k=>{var l=xt();vt(l,73,()=>({length:F()}),gt,(K,Ct,kt)=>{var B=mt();const N=n(j),Q=n(d),U=n(E),V=n(()=>r(-45,45)),W=n(()=>r(-45,45)),X=n(()=>r(-10,10)),Y=n(()=>r(-10,10)),Z=n(()=>r(-10,10)),$=n(()=>r(0,360)),tt=n(()=>r(y()[0],y()[1])),et=n(()=>r(h()[0],h()[1])),it=n(()=>.1*r(2,10)),nt=n(()=>a()?`calc(${g()}ms * var(--scale))`:`${g()}ms`),rt=n(()=>r(o()[0],o()[1])),at=n(()=>a()?"infinite":v()),ot=n(()=>1-I());T(()=>ft(B,"style",`
        --fall-distance: ${t(N)};
        --size: ${t(Q)}px;
        --color: ${t(U)};
        --skew: ${t(V)}deg,${t(W)}deg;
        --rotation-xyz: ${t(X)}, ${t(Y)}, ${t(Z)};
        --rotation-deg: ${t($)}deg;
        --translate-y-multiplier: ${t(tt)};
        --translate-x-multiplier: ${t(et)};
        --scale: ${t(it)};
        --transition-duration: ${t(nt)};
        --transition-delay: ${t(rt)}ms;
        --transition-iteration-count: ${t(at)};
        --x-spread: ${t(ot)}`)),u(K,B)}),T(()=>{M(l,"rounded",p()),M(l,"cone",b()),M(l,"no-gravity",C()),M(l,"reduced-motion",m())}),u(k,l)}),u(D,A),q()}var yt=x(`<div style="
position: fixed;
top: -150px;
left: 0px;
right: 0px;
height: 100%;
width: 100%;
display: flex;
justify-content: center;
pointer-events: none;"><!></div>`),pt=x('<h1 class="glowup text-9xl font-extrabold"> </h1>'),bt=x("<!> <!> <div><!></div>",1);function Tt(D,e){P(e,!0);let d=G(!1),h=5,y=300,g="h-full place-content-center place-items-center",a=G(void 0),o,c=()=>{f(a,H(new Date().toLocaleTimeString([],{hour:"2-digit",minute:"2-digit",second:"2-digit"}))),t(a).replace(":"," "),f(a,H(t(a)))};st(()=>{clearInterval(o),c(),o=setInterval(c,1e3),f(d,!0)}),ct(()=>{console.log("dest"),clearInterval(o),f(d,!1)});var _=L(!0),F=R(_);ut(F,{animate:!0,in:()=>{clearInterval(o),c(),o=setInterval(c,1e3),f(d,!0)},out:()=>{f(d,!1),clearInterval(o)},get class(){return g},children:(v,j)=>{var p=bt(),b=R(p);O(b,()=>t(d),m=>{var s=yt(),r=S(s);ht(r,{x:[-5,5],y:[0,.1],delay:[0,2e3],infinite:!0,get size(){return h},duration:3e3,get amount(){return y},fallDistance:"100vh",destroyOnComplete:!1}),u(m,s)});var C=z(z(b,!0));_t(C,{border:!1,title:"Hybridutveckling med Flutter"});var I=z(z(C,!0)),w=S(I);O(w,()=>t(a),m=>{var s=pt(),r=S(s);T(()=>lt(r,t(a))),u(m,s)}),u(v,p)},$$slots:{default:!0}}),u(D,_),q()}export{Tt as F};
