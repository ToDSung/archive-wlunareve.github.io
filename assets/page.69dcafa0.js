var r=Object.defineProperty,e=Object.defineProperties,t=Object.getOwnPropertyDescriptors,n=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,a=Object.prototype.propertyIsEnumerable,s=(e,t,n)=>t in e?r(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;import{m as p}from"./list.92d9d9ee.js";import{k as c,m as i,u as m,o as l,c as d,b as u,n as b}from"./vendor.7435bb7f.js";const f=r=>`${r.charAt(0).toUpperCase()}${r.slice(1)}`,w={name:"MarkdownPage",components:p.reduce(((r,{path:p})=>{const c=p.split(/\/|_/).map((r=>f(r))).join("");return m=((r,e)=>{for(var t in e||(e={}))o.call(e,t)&&s(r,t,e[t]);if(n)for(var t of n(e))a.call(e,t)&&s(r,t,e[t]);return r})({},r),l={[c]:i((()=>function(r){return Promise.reject(new Error("Unknown variable dynamic import: "+r))}(`../../../static/markdown/${p}.md`)))},e(m,t(l));var m,l}),{}),setup(){const r=m().params.path;return{currentArticleComponent:c((()=>r.map((r=>r.split("_"))).flat().map((r=>f(r))).join("")))}}},j={id:"markdown",class:"markdown__wrapper"},v={class:"markdown"};w.render=function(r,e,t,n,o,a){return l(),d("div",j,[u("div",v,[(l(),d(b(n.currentArticleComponent)))])])};export default w;
