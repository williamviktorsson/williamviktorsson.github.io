var nt=Array.isArray,tt=Array.from,et=Object.isFrozen,rt=Object.defineProperty,st=Object.getOwnPropertyDescriptor,xn=Object.getOwnPropertyDescriptors,ot=Object.prototype,ut=Array.prototype,Cn=Object.getPrototypeOf;const R=2,rn=4,C=8,sn=16,T=32,K=64,m=128,M=256,E=512,y=1024,I=2048,x=4096,g=8192,gn=16384,on=32768,lt=65536,un=1<<18,Q=Symbol("$state"),it=Symbol("$state.frozen"),ft=Symbol("");function ln(n){return n===this.v}function bn(n,t){return n!=n?t==t:n!==t||n!==null&&typeof n=="object"||typeof n=="function"}function fn(n){return!bn(n,this.v)}const at=1,ct=2,_t=4,pt=8,vt=16,dt=64,ht=1,Et=2,yt=4,Tt=8,At=1,wt=2,mt=4,St="[",Pn="]",Ot="",Rt=`${Pn}!`,It={},Fn=Symbol(),Dt=["beforeinput","click","change","dblclick","contextmenu","focusin","focusout","input","keydown","keyup","mousedown","mousemove","mouseout","mouseover","mouseup","pointerdown","pointermove","pointerout","pointerover","pointerup","touchend","touchmove","touchstart"],Nt=["touchstart","touchmove","touchend"],kt={formnovalidate:"formNoValidate",ismap:"isMap",nomodule:"noModule",playsinline:"playsInline",readonly:"readOnly"};function xt(n,t="exclude-on"){return n.endsWith("capture")?t=="exclude-on"?n!=="gotpointercapture"&&n!=="lostpointercapture":n!=="ongotpointercapture"&&n!=="onlostpointercapture":!1}function Ln(n){throw new Error("effect_in_teardown")}function Mn(){throw new Error("effect_in_unowned_derived")}function qn(n){throw new Error("effect_orphan")}function Hn(){throw new Error("effect_update_depth_exceeded")}function Ct(){throw new Error("hydration_failed")}function gt(n){throw new Error("props_invalid_value")}function Yn(){throw new Error("state_unsafe_mutation")}function an(n){return{f:0,v:n,reactions:null,equals:ln,version:0}}function bt(n){var e;const t=an(n);return t.equals=fn,d!==null&&d.l!==null&&((e=d.l).s??(e.s=[])).push(t),t}function Pt(n,t){var e=n.v!==Fn;return e&&c!==null&&V()&&c.f&R&&Yn(),n.equals(t)||(n.v=t,n.version=Sn(),W(n,y,!0),V()&&e&&a!==null&&a.f&E&&!(a.f&T)&&(p!==null&&p.includes(n)?(h(a,y),j(a)):w===null?$n([n]):w.push(n))),t}function cn(n){a===null&&c===null&&qn(),c!==null&&c.f&m&&Mn(),G&&Ln()}function X(n,t){var e=t.last;e===null?t.last=t.first=n:(e.next=n,n.prev=e,t.last=n)}function b(n,t,e,r=!0){var s=(n&K)!==0,o={ctx:d,deps:null,nodes:null,f:n|y,first:null,fn:t,last:null,next:null,parent:s?null:a,prev:null,teardown:null,transitions:null};if(e){var i=N;try{J(!0),Y(o),o.f|=gn}finally{J(i)}}else t!==null&&j(o);var u=e&&o.deps===null&&o.first===null&&o.nodes===null&&o.teardown===null;return!u&&!s&&r&&(a!==null&&X(o,a),c!==null&&c.f&R&&X(o,c)),o}function Ft(n){const t=b(C,null,!1);return h(t,E),t.teardown=n,t}function Lt(n){cn();var t=a!==null&&(a.f&C)!==0&&d!==null&&!d.m;if(t){var e=d;(e.e??(e.e=[])).push(n)}else{var r=_n(n);return r}}function Mt(n){return cn(),pn(n)}function qt(n){const t=b(K,n,!0);return()=>{$(t)}}function _n(n){return b(rn,n,!1)}function pn(n){return b(C,n,!0)}function Ht(n){return pn(n)}function Yt(n,t,e){const r=b(C|sn|t,e,!0);return n!==null&&(r.nodes={start:null,anchor:null,end:n}),r}function jt(n,t=!0){return b(C|T,n,!0,t)}function vn(n){var t=n.teardown;if(t!==null){const e=G,r=c;nn(!0),tn(null);try{t.call(null)}finally{nn(e),tn(r)}}}function $(n,t=!0){var e=!1;if((t||n.f&un)&&n.nodes!==null){for(var r=dn(n),s=n.nodes.end;r!==null;){var o=r===s?null:r.nextSibling;r.remove(),r=o}e=!0}if(Z(n,t&&!e),H(n,0),h(n,g),n.transitions)for(const u of n.transitions)u.stop();vn(n);var i=n.parent;i!==null&&n.f&T&&i.first!==null&&hn(n),n.next=n.prev=n.teardown=n.ctx=n.deps=n.parent=n.fn=n.nodes=null}function dn(n){var t=n.nodes,e=t.start;if(e===void 0)return t.anchor;if(e!==null)return e;for(var r=n.first;r&&(r.nodes===null||r.f&un);)r=r.next;return r!==null&&r.nodes!==null?dn(r):t.end}function hn(n){var t=n.parent,e=n.prev,r=n.next;e!==null&&(e.next=r),r!==null&&(r.prev=e),t!==null&&(t.first===n&&(t.first=r),t.last===n&&(t.last=e))}function Ut(n,t){var e=[];En(n,e,!0),jn(e,()=>{$(n),t&&t()})}function jn(n,t){var e=n.length;if(e>0){var r=()=>--e||t();for(var s of n)s.out(r)}else t()}function En(n,t,e){if(!(n.f&x)){if(n.f^=x,n.transitions!==null)for(const i of n.transitions)(i.is_global||e)&&t.push(i);for(var r=n.first;r!==null;){var s=r.next,o=(r.f&on)!==0||(r.f&T)!==0;En(r,t,o?e:!1),r=s}}}function Bt(n){yn(n,!0)}function yn(n,t){if(n.f&x){n.f^=x,F(n)&&Y(n);for(var e=n.first;e!==null;){var r=e.next,s=(e.f&on)!==0||(e.f&T)!==0;yn(e,s?t:!1),e=r}if(n.transitions!==null)for(const o of n.transitions)(o.is_global||t)&&o.in()}}const Vt=()=>{};function zt(n){return n()}function Un(n){for(var t=0;t<n.length;t++)n[t]()}let q=!1,B=[];function Tn(){q=!1;const n=B.slice();B=[],Un(n)}function Kt(n){q||(q=!0,queueMicrotask(Tn)),B.push(n)}function Bn(){q&&Tn()}function Vn(n){let t=R|y;a===null&&(t|=m);const e={deps:null,deriveds:null,equals:ln,f:t,first:null,fn:n,last:null,reactions:null,v:null,version:0};if(c!==null&&c.f&R){var r=c;r.deriveds===null?r.deriveds=[e]:r.deriveds.push(e)}return e}function $t(n){const t=Vn(n);return t.equals=fn,t}function An(n){Z(n);var t=n.deriveds;if(t!==null){n.deriveds=null;for(var e=0;e<t.length;e+=1)zn(t[e])}}function wn(n){An(n);var t=On(n),e=(D||n.f&m)&&n.deps!==null?I:E;h(n,e),n.equals(t)||(n.v=t,n.version=Sn(),W(n,y,!1))}function zn(n){An(n),H(n,0),h(n,g),n.first=n.last=n.deps=n.reactions=n.fn=null}const mn=0,Kn=1;let L=mn,P=!1,N=!1,G=!1;function J(n){N=n}function nn(n){G=n}let O=[],k=0,c=null;function tn(n){c=n}let a=null,p=null,_=0,w=null;function $n(n){w=n}let Gn=0,D=!1,d=null;function Sn(){return Gn++}function V(){return d!==null&&d.l===null}function F(n){var S;var t=n.f,e=(t&y)!==0;if(e)return!0;var r=(t&m)!==0,s=(t&M)!==0;if(t&I){var o=n.deps;if(o!==null)for(var i=o.length,u,l=0;l<i;l++){var f=o[l];!e&&F(f)&&wn(f);var v=f.version;if(r){if(v>n.version)return!0;!D&&!((S=f==null?void 0:f.reactions)!=null&&S.includes(n))&&(f.reactions??(f.reactions=[])).push(n)}else{if(n.f&y)return!0;s&&(v>n.version&&(e=!0),u=f.reactions,u===null?f.reactions=[n]:u.includes(n)||u.push(n))}}r||h(n,E),s&&(n.f^=M)}return e}function Zn(n,t,e){throw n}function On(n){const t=p,e=_,r=w,s=c,o=D;p=null,_=0,w=null,c=n.f&(T|K)?null:n,D=!N&&(n.f&m)!==0;try{let i=(0,n.fn)(),u=n.deps;if(p!==null){let l;if(u!==null){const f=u.length,v=_===0?p:u.slice(0,_).concat(p),A=v.length>16&&f-_>1?new Set(v):null;for(l=_;l<f;l++){const U=u[l];(A!==null?!A.has(U):!v.includes(U))&&Rn(n,U)}}if(u!==null&&_>0)for(u.length=_+p.length,l=0;l<p.length;l++)u[_+l]=p[l];else n.deps=u=p;if(!D)for(l=_;l<u.length;l++){const f=u[l],v=f.reactions;v===null?f.reactions=[n]:v[v.length-1]!==n&&!v.includes(n)&&v.push(n)}}else u!==null&&_<u.length&&(H(n,_),u.length=_);return i}finally{p=t,_=e,w=r,c=s,D=o}}function Rn(n,t){const e=t.reactions;let r=0;if(e!==null){r=e.length-1;const s=e.indexOf(n);s!==-1&&(r===0?t.reactions=null:(e[s]=e[r],e.pop()))}r===0&&t.f&R&&(h(t,I),t.f&(m|M)||(t.f^=M),H(t,0))}function H(n,t){const e=n.deps;if(e!==null){const r=t===0?null:e.slice(0,t);let s;for(s=t;s<e.length;s++){const o=e[s];(r===null||!r.includes(o))&&Rn(n,o)}}}function Z(n,t=!0){let e=n.first;n.first=null,n.last=null;for(var r;e!==null;)r=e.next,$(e,t),e=r}function Y(n){var t=n.f;if(!(t&g)){h(n,E);var e=n.ctx,r=a,s=d;a=n,d=e;try{t&sn||Z(n),vn(n);var o=On(n);n.teardown=typeof o=="function"?o:null}catch(i){Zn(i)}finally{a=r,d=s}}}function In(){k>1e3&&(k=0,Hn()),k++}function Dn(n){var t=n.length;if(t!==0){In();var e=N;N=!0;try{for(var r=0;r<t;r++){var s=n[r];if(s.first===null&&!(s.f&T))en([s]);else{var o=[];Nn(s,o),en(o)}}}finally{N=e}}}function en(n){var t=n.length;if(t!==0)for(var e=0;e<t;e++){var r=n[e];!(r.f&(g|x))&&F(r)&&(Y(r),r.deps===null&&r.first===null&&r.nodes===null&&(r.teardown===null?hn(r):r.fn=null))}}function Wn(){if(P=!1,k>1001)return;const n=O;O=[],Dn(n),P||(k=0)}function j(n){L===mn&&(P||(P=!0,queueMicrotask(Wn)));for(var t=n;t.parent!==null;){t=t.parent;var e=t.f;if(e&T){if(!(e&E))return;h(t,I)}}O.push(t)}function Nn(n,t){var e=n.first,r=[];n:for(;e!==null;){var s=e.f,o=(s&(g|x))===0,i=s&T,u=(s&E)!==0,l=e.first;if(o&&(!i||!u)){if(i&&h(e,E),s&C){if(!i&&F(e)&&(Y(e),l=e.first),l!==null){e=l;continue}}else if(s&rn)if(i||u){if(l!==null){e=l;continue}}else r.push(e)}var f=e.next;if(f===null){let A=e.parent;for(;A!==null;){if(n===A)break n;var v=A.next;if(v!==null){e=v;continue n}A=A.parent}}e=f}for(var S=0;S<r.length;S++)l=r[S],t.push(l),Nn(l,t)}function kn(n,t=!0){var e=L,r=O;try{In();const o=[];L=Kn,O=o,P=!1,t&&Dn(r);var s=n==null?void 0:n();return Bn(),(O.length>0||o.length>0)&&kn(),k=0,s}finally{L=e,O=r}}async function Gt(){await Promise.resolve(),kn()}function Qn(n){const t=n.f;if(t&g)return n.v;if(c!==null){const e=(c.f&m)!==0,r=c.deps;p===null&&r!==null&&r[_]===n&&!(e&&a!==null)?_++:(r===null||_===0||r[_-1]!==n)&&(p===null?p=[n]:p[p.length-1]!==n&&p.push(n)),w!==null&&a!==null&&a.f&E&&!(a.f&T)&&w.includes(n)&&(h(a,y),j(a))}return t&R&&F(n)&&wn(n),n.v}function W(n,t,e){var r=n.reactions;if(r!==null)for(var s=V(),o=r.length,i=0;i<o;i++){var u=r[i],l=u.f;if(!(l&y||(!e||!s)&&u===a)){h(u,t);var f=(l&I)!==0,v=(l&m)!==0;(l&E||f&&v)&&(u.f&R?W(u,I,e):j(u))}}}function Zt(n){const t=c;try{return c=null,n()}finally{c=t}}const Xn=~(y|I|E);function h(n,t){n.f=n.f&Xn|t}function Jn(n){return typeof n=="object"&&n!==null&&typeof n.f=="number"}function Wt(n,t=!1,e){d={p:d,c:null,e:null,m:!1,s:n,x:null,l:null},t||(d.l={s:null,u:null,r1:[],r2:an(!1)})}function Qt(n){const t=d;if(t!==null){n!==void 0&&(t.x=n);const r=t.e;if(r!==null){t.e=null;for(var e=0;e<r.length;e++)_n(r[e])}d=t.p,t.m=!0}return n||{}}function Xt(n){if(!(typeof n!="object"||!n||n instanceof EventTarget)){if(Q in n)z(n);else if(!Array.isArray(n))for(let t in n){const e=n[t];typeof e=="object"&&e&&Q in e&&z(e)}}}function z(n,t=new Set){if(typeof n=="object"&&n!==null&&!(n instanceof EventTarget)&&!t.has(n)){t.add(n),n instanceof Date&&n.getTime();for(let r in n)try{z(n[r],t)}catch{}const e=Cn(n);if(e!==Object.prototype&&e!==Array.prototype&&e!==Map.prototype&&e!==Set.prototype&&e!==Date.prototype){const r=xn(e);for(let s in r){const o=r[s].get;if(o)try{o.call(n)}catch{}}}}}function Jt(n){return Jn(n)?Qn(n):n}export{_n as $,an as A,ct as B,dn as C,En as D,on as E,jn as F,et as G,St as H,x as I,_t as J,pt as K,vt as L,ft as M,xt as N,kt as O,Nt as P,Cn as Q,Dt as R,Q as S,xn as T,Mt as U,Lt as V,Un as W,Zt as X,zt as Y,Xt as Z,Vt as _,jt as a,Fn as a0,Gt as a1,Vn as a2,it as a3,ot as a4,ut as a5,st as a6,pn as a7,gt as a8,lt as a9,yt as aa,fn as ab,ht as ac,Et as ad,$t as ae,Tt as af,Pn as ag,Ot as ah,un as ai,At as aj,wt as ak,mt as al,bn as am,Yt as b,Ft as c,$ as d,rt as e,kn as f,Qn as g,It as h,nt as i,Ct as j,tt as k,qt as l,bt as m,Qt as n,d as o,Wt as p,Kt as q,Rt as r,Bt as s,Ht as t,Jt as u,Ut as v,a as w,Pt as x,at as y,dt as z};
