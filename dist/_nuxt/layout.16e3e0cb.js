import{T as m}from"./nuxt.9babd985.js";import{n as p,q as f,l as r,r as y,k as u}from"./utils.861a55d6.js";import{k as i,e as c,u as d,b as L,j as _}from"./_plugin-vue_export-helper.1457150d.js";const h=i({name:"LayoutLoader",inheritAttrs:!1,props:{name:String},async setup(n,t){const e=await r[n.name]().then(a=>a.default||a);return()=>_(e,t.attrs,t.slots)}}),k=i({name:"NuxtLayout",inheritAttrs:!1,props:{name:{type:[String,Boolean,Object],default:null}},setup(n,t){const e=L("_route"),a=e===p()?f():e,o=c(()=>d(n.name)??a.meta.layout??"default");return()=>{const s=o.value&&o.value in r,l=a.meta.layoutTransition??y;return u(m,s&&l,{default:()=>u(h,s&&{key:o.value,name:o.value,...t.attrs},t.slots).default()}).default()}}});export{k as _};