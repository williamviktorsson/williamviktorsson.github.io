import{c as h}from"./index-30738e50.js";import{Y as O,E as C}from"./index-edc758cc.js";function S(o,c){var a={};for(var t in o)Object.prototype.hasOwnProperty.call(o,t)&&c.indexOf(t)<0&&(a[t]=o[t]);if(o!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,t=Object.getOwnPropertySymbols(o);r<t.length;r++)c.indexOf(t[r])<0&&Object.prototype.propertyIsEnumerable.call(o,t[r])&&(a[t[r]]=o[t[r]]);return a}function P(o,{delay:c=0,duration:a=400,easing:t=h,x:r=0,y:p=0,opacity:i=0}={}){const e=getComputedStyle(o),s=+e.opacity,y=e.transform==="none"?"":e.transform,f=s*(1-i);return{delay:c,duration:a,easing:t,css:(n,l)=>`
			transform: ${y} translate(${(1-n)*r}px, ${(1-n)*p}px);
			opacity: ${s-f*l}`}}function q(o,{delay:c=0,duration:a=400,easing:t=h,start:r=0,opacity:p=0}={}){const i=getComputedStyle(o),e=+i.opacity,s=i.transform==="none"?"":i.transform,y=1-r,f=e*(1-p);return{delay:c,duration:a,easing:t,css:(n,l)=>`
			transform: ${s} scale(${1-y*l});
			opacity: ${e-f*l}
		`}}function B(o){var{fallback:c}=o,a=S(o,["fallback"]);const t=new Map,r=new Map;function p(e,s,y){const{delay:f=0,duration:n=u=>Math.sqrt(u)*30,easing:l=h}=O(O({},a),y),d=s.getBoundingClientRect(),g=e.left-d.left,m=e.top-d.top,w=e.width/d.width,x=e.height/d.height,k=Math.sqrt(g*g+m*m),$=getComputedStyle(s),_=$.transform==="none"?"":$.transform,v=+$.opacity;return{delay:f,duration:C(n)?n(k):n,easing:l,css:(u,b)=>`
				opacity: ${u*v};
				transform-origin: top left;
				transform: ${_} translate(${b*g}px,${b*m}px) scale(${u+(1-u)*w}, ${u+(1-u)*x});
			`}}function i(e,s,y){return(f,n)=>(e.set(n.key,{rect:f.getBoundingClientRect()}),()=>{if(s.has(n.key)){const{rect:l}=s.get(n.key);return s.delete(n.key),p(l,f,n)}return e.delete(n.key),c&&c(f,n,y)})}return[i(r,t,!1),i(t,r,!0)]}export{B as c,P as f,q as s};
