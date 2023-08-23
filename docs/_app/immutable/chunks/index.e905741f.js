import{c as b}from"./index.40b40403.js";import{$ as _,a0 as w,R as j}from"./index.e36dfafc.js";function M(n,c){var a={};for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&c.indexOf(t)<0&&(a[t]=n[t]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var e=0,t=Object.getOwnPropertySymbols(n);e<t.length;e++)c.indexOf(t[e])<0&&Object.prototype.propertyIsEnumerable.call(n,t[e])&&(a[t[e]]=n[t[e]]);return a}function q(n,{delay:c=0,duration:a=400,easing:t=b,x:e=0,y:m=0,opacity:i=0}={}){const r=getComputedStyle(n),s=+r.opacity,y=r.transform==="none"?"":r.transform,f=s*(1-i),[o,l]=_(e),[d,p]=_(m);return{delay:c,duration:a,easing:t,css:(g,$)=>`
			transform: ${y} translate(${(1-g)*o}${l}, ${(1-g)*d}${p});
			opacity: ${s-f*$}`}}function B(n,{delay:c=0,duration:a=400,easing:t=b,start:e=0,opacity:m=0}={}){const i=getComputedStyle(n),r=+i.opacity,s=i.transform==="none"?"":i.transform,y=1-e,f=r*(1-m);return{delay:c,duration:a,easing:t,css:(o,l)=>`
			transform: ${s} scale(${1-y*l});
			opacity: ${r-f*l}
		`}}function U(n){var{fallback:c}=n,a=M(n,["fallback"]);const t=new Map,e=new Map;function m(r,s,y){const{delay:f=0,duration:o=u=>Math.sqrt(u)*30,easing:l=b}=w(w({},a),y),d=r.getBoundingClientRect(),p=s.getBoundingClientRect(),g=d.left-p.left,$=d.top-p.top,x=d.width/p.width,k=d.height/p.height,v=Math.sqrt(g*g+$*$),h=getComputedStyle(s),C=h.transform==="none"?"":h.transform,S=+h.opacity;return{delay:f,duration:j(o)?o(v):o,easing:l,css:(u,O)=>`
				opacity: ${u*S};
				transform-origin: top left;
				transform: ${C} translate(${O*g}px,${O*$}px) scale(${u+(1-u)*x}, ${u+(1-u)*k});
			`}}function i(r,s,y){return(f,o)=>(r.set(o.key,f),()=>{if(s.has(o.key)){const l=s.get(o.key);return s.delete(o.key),m(l,f,o)}return r.delete(o.key),c&&c(f,o,y)})}return[i(e,t,!1),i(t,e,!0)]}export{U as c,q as f,B as s};
