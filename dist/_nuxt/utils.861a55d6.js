import{s as pt,u as F,e as T,f as Xe,n as mt,b as U,k as Ee,j as ee,p as ue,r as gt,a as yt,g as Rt}from"./_plugin-vue_export-helper.1457150d.js";import{u as te}from"./nuxt.9babd985.js";const vt=/#/g,Et=/&/g,_t=/=/g,Ye=/\+/g,Pt=/%5e/gi,wt=/%60/gi,St=/%7c/gi,Ct=/%20/gi;function At(e){return encodeURI(""+e).replace(St,"|")}function me(e){return At(typeof e=="string"?e:JSON.stringify(e)).replace(Ye,"%2B").replace(Ct,"+").replace(vt,"%23").replace(Et,"%26").replace(wt,"`").replace(Pt,"^")}function fe(e){return me(e).replace(_t,"%3D")}function Ze(e=""){try{return decodeURIComponent(""+e)}catch{return""+e}}function kt(e){return Ze(e.replace(Ye," "))}function Ot(e=""){const t={};e[0]==="?"&&(e=e.slice(1));for(const n of e.split("&")){const r=n.match(/([^=]+)=?(.*)/)||[];if(r.length<2)continue;const s=Ze(r[1]);if(s==="__proto__"||s==="constructor")continue;const a=kt(r[2]||"");typeof t[s]<"u"?Array.isArray(t[s])?t[s].push(a):t[s]=[t[s],a]:t[s]=a}return t}function bt(e,t){return(typeof t=="number"||typeof t=="boolean")&&(t=String(t)),t?Array.isArray(t)?t.map(n=>`${fe(e)}=${me(n)}`).join("&"):`${fe(e)}=${me(t)}`:fe(e)}function Lt(e){return Object.keys(e).filter(t=>e[t]!==void 0).map(t=>bt(t,e[t])).join("&")}const $t=/^\w{2,}:([/\\]{1,2})/,Tt=/^\w{2,}:([/\\]{2})?/,xt=/^[/\\]{2}[^/\\]+/;function _e(e,t={}){return typeof t=="boolean"&&(t={acceptRelative:t}),t.strict?$t.test(e):Tt.test(e)||(t.acceptRelative?xt.test(e):!1)}const It=/\/$|\/\?/;function ge(e="",t=!1){return t?It.test(e):e.endsWith("/")}function Je(e="",t=!1){if(!t)return(ge(e)?e.slice(0,-1):e)||"/";if(!ge(e,!0))return e||"/";const[n,...r]=e.split("?");return(n.slice(0,-1)||"/")+(r.length>0?`?${r.join("?")}`:"")}function Nt(e="",t=!1){if(!t)return e.endsWith("/")?e:e+"/";if(ge(e,!0))return e||"/";const[n,...r]=e.split("?");return n+"/"+(r.length>0?`?${r.join("?")}`:"")}function Mt(e=""){return e.startsWith("/")}function jt(e=""){return(Mt(e)?e.slice(1):e)||"/"}function Yn(e,t){if(et(t)||_e(e))return e;const n=Je(t);return e.startsWith(n)?e:Ht(n,e)}function Zn(e,t){if(et(t))return e;const n=Je(t);if(!e.startsWith(n))return e;const r=e.slice(n.length);return r[0]==="/"?r:"/"+r}function Jn(e,t){const n=Pe(e),r={...Ot(n.search),...t};return n.search=Lt(r),Ut(n)}function et(e){return!e||e==="/"}function Bt(e){return e&&e!=="/"}function Ht(e,...t){let n=e||"";for(const r of t.filter(s=>Bt(s)))n=n?Nt(n)+jt(r):r;return n}function Pe(e="",t){if(!_e(e,{acceptRelative:!0}))return t?Pe(t+e):Te(e);const[n="",r,s=""]=(e.replace(/\\/g,"/").match(/([^/:]+:)?\/\/([^/@]+@)?(.*)/)||[]).splice(1),[a="",h=""]=(s.match(/([^#/?]*)(.*)?/)||[]).splice(1),{pathname:m,search:i,hash:l}=Te(h.replace(/\/(?=[A-Za-z]:)/,""));return{protocol:n,auth:r?r.slice(0,Math.max(0,r.length-1)):"",host:a,pathname:m,search:i,hash:l}}function Te(e=""){const[t="",n="",r=""]=(e.match(/([^#?]*)(\?[^#]*)?(#.*)?/)||[]).splice(1);return{pathname:t,search:n,hash:r}}function Ut(e){const t=e.pathname+(e.search?(e.search.startsWith("?")?"":"?")+e.search:"")+e.hash;return e.protocol?e.protocol+"//"+(e.auth?e.auth+"@":"")+e.host+t:t}const er={meta:[{name:"viewport",content:"width=device-width, initial-scale=1"},{charset:"utf-8"}],link:[],style:[],script:[],noscript:[]},tr=!1,nr=!1,rr=!1,sr="__nuxt";/*!
  * vue-router v4.1.6
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */const D=typeof window<"u";function Vt(e){return e.__esModule||e[Symbol.toStringTag]==="Module"}const w=Object.assign;function he(e,t){const n={};for(const r in t){const s=t[r];n[r]=x(s)?s.map(e):e(s)}return n}const X=()=>{},x=Array.isArray,Dt=/\/$/,Gt=e=>e.replace(Dt,"");function de(e,t,n="/"){let r,s={},a="",h="";const m=t.indexOf("#");let i=t.indexOf("?");return m<i&&m>=0&&(i=-1),i>-1&&(r=t.slice(0,i),a=t.slice(i+1,m>-1?m:t.length),s=e(a)),m>-1&&(r=r||t.slice(0,m),h=t.slice(m,t.length)),r=qt(r??t,n),{fullPath:r+(a&&"?")+a+h,path:r,query:s,hash:h}}function Kt(e,t){const n=t.query?e(t.query):"";return t.path+(n&&"?")+n+(t.hash||"")}function xe(e,t){return!t||!e.toLowerCase().startsWith(t.toLowerCase())?e:e.slice(t.length)||"/"}function Qt(e,t,n){const r=t.matched.length-1,s=n.matched.length-1;return r>-1&&r===s&&G(t.matched[r],n.matched[s])&&tt(t.params,n.params)&&e(t.query)===e(n.query)&&t.hash===n.hash}function G(e,t){return(e.aliasOf||e)===(t.aliasOf||t)}function tt(e,t){if(Object.keys(e).length!==Object.keys(t).length)return!1;for(const n in e)if(!zt(e[n],t[n]))return!1;return!0}function zt(e,t){return x(e)?Ie(e,t):x(t)?Ie(t,e):e===t}function Ie(e,t){return x(t)?e.length===t.length&&e.every((n,r)=>n===t[r]):e.length===1&&e[0]===t}function qt(e,t){if(e.startsWith("/"))return e;if(!e)return t;const n=t.split("/"),r=e.split("/");let s=n.length-1,a,h;for(a=0;a<r.length;a++)if(h=r[a],h!==".")if(h==="..")s>1&&s--;else break;return n.slice(0,s).join("/")+"/"+r.slice(a-(a===r.length?1:0)).join("/")}var Z;(function(e){e.pop="pop",e.push="push"})(Z||(Z={}));var Y;(function(e){e.back="back",e.forward="forward",e.unknown=""})(Y||(Y={}));function Wt(e){if(!e)if(D){const t=document.querySelector("base");e=t&&t.getAttribute("href")||"/",e=e.replace(/^\w+:\/\/[^\/]+/,"")}else e="/";return e[0]!=="/"&&e[0]!=="#"&&(e="/"+e),Gt(e)}const Ft=/^[^#]+#/;function Xt(e,t){return e.replace(Ft,"#")+t}function Yt(e,t){const n=document.documentElement.getBoundingClientRect(),r=e.getBoundingClientRect();return{behavior:t.behavior,left:r.left-n.left-(t.left||0),top:r.top-n.top-(t.top||0)}}const re=()=>({left:window.pageXOffset,top:window.pageYOffset});function Zt(e){let t;if("el"in e){const n=e.el,r=typeof n=="string"&&n.startsWith("#"),s=typeof n=="string"?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!s)return;t=Yt(s,e)}else t=e;"scrollBehavior"in document.documentElement.style?window.scrollTo(t):window.scrollTo(t.left!=null?t.left:window.pageXOffset,t.top!=null?t.top:window.pageYOffset)}function Ne(e,t){return(history.state?history.state.position-t:-1)+e}const ye=new Map;function Jt(e,t){ye.set(e,t)}function en(e){const t=ye.get(e);return ye.delete(e),t}let tn=()=>location.protocol+"//"+location.host;function nt(e,t){const{pathname:n,search:r,hash:s}=t,a=e.indexOf("#");if(a>-1){let m=s.includes(e.slice(a))?e.slice(a).length:1,i=s.slice(m);return i[0]!=="/"&&(i="/"+i),xe(i,"")}return xe(n,e)+r+s}function nn(e,t,n,r){let s=[],a=[],h=null;const m=({state:f})=>{const g=nt(e,location),v=n.value,A=t.value;let C=0;if(f){if(n.value=g,t.value=f,h&&h===v){h=null;return}C=A?f.position-A.position:0}else r(g);s.forEach(E=>{E(n.value,v,{delta:C,type:Z.pop,direction:C?C>0?Y.forward:Y.back:Y.unknown})})};function i(){h=n.value}function l(f){s.push(f);const g=()=>{const v=s.indexOf(f);v>-1&&s.splice(v,1)};return a.push(g),g}function o(){const{history:f}=window;f.state&&f.replaceState(w({},f.state,{scroll:re()}),"")}function u(){for(const f of a)f();a=[],window.removeEventListener("popstate",m),window.removeEventListener("beforeunload",o)}return window.addEventListener("popstate",m),window.addEventListener("beforeunload",o),{pauseListeners:i,listen:l,destroy:u}}function Me(e,t,n,r=!1,s=!1){return{back:e,current:t,forward:n,replaced:r,position:window.history.length,scroll:s?re():null}}function rn(e){const{history:t,location:n}=window,r={value:nt(e,n)},s={value:t.state};s.value||a(r.value,{back:null,current:r.value,forward:null,position:t.length-1,replaced:!0,scroll:null},!0);function a(i,l,o){const u=e.indexOf("#"),f=u>-1?(n.host&&document.querySelector("base")?e:e.slice(u))+i:tn()+e+i;try{t[o?"replaceState":"pushState"](l,"",f),s.value=l}catch(g){console.error(g),n[o?"replace":"assign"](f)}}function h(i,l){const o=w({},t.state,Me(s.value.back,i,s.value.forward,!0),l,{position:s.value.position});a(i,o,!0),r.value=i}function m(i,l){const o=w({},s.value,t.state,{forward:i,scroll:re()});a(o.current,o,!0);const u=w({},Me(r.value,i,null),{position:o.position+1},l);a(i,u,!1),r.value=i}return{location:r,state:s,push:m,replace:h}}function sn(e){e=Wt(e);const t=rn(e),n=nn(e,t.state,t.location,t.replace);function r(a,h=!0){h||n.pauseListeners(),history.go(a)}const s=w({location:"",base:e,go:r,createHref:Xt.bind(null,e)},t,n);return Object.defineProperty(s,"location",{enumerable:!0,get:()=>t.location.value}),Object.defineProperty(s,"state",{enumerable:!0,get:()=>t.state.value}),s}function or(e){return e=location.host?e||location.pathname+location.search:"",e.includes("#")||(e+="#"),sn(e)}function on(e){return typeof e=="string"||e&&typeof e=="object"}function rt(e){return typeof e=="string"||typeof e=="symbol"}const M={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},st=Symbol("");var je;(function(e){e[e.aborted=4]="aborted",e[e.cancelled=8]="cancelled",e[e.duplicated=16]="duplicated"})(je||(je={}));function K(e,t){return w(new Error,{type:e,[st]:!0},t)}function N(e,t){return e instanceof Error&&st in e&&(t==null||!!(e.type&t))}const Be="[^/]+?",cn={sensitive:!1,strict:!1,start:!0,end:!0},an=/[.+*?^${}()[\]/\\]/g;function ln(e,t){const n=w({},cn,t),r=[];let s=n.start?"^":"";const a=[];for(const l of e){const o=l.length?[]:[90];n.strict&&!l.length&&(s+="/");for(let u=0;u<l.length;u++){const f=l[u];let g=40+(n.sensitive?.25:0);if(f.type===0)u||(s+="/"),s+=f.value.replace(an,"\\$&"),g+=40;else if(f.type===1){const{value:v,repeatable:A,optional:C,regexp:E}=f;a.push({name:v,repeatable:A,optional:C});const P=E||Be;if(P!==Be){g+=10;try{new RegExp(`(${P})`)}catch($){throw new Error(`Invalid custom RegExp for param "${v}" (${P}): `+$.message)}}let b=A?`((?:${P})(?:/(?:${P}))*)`:`(${P})`;u||(b=C&&l.length<2?`(?:/${b})`:"/"+b),C&&(b+="?"),s+=b,g+=20,C&&(g+=-8),A&&(g+=-20),P===".*"&&(g+=-50)}o.push(g)}r.push(o)}if(n.strict&&n.end){const l=r.length-1;r[l][r[l].length-1]+=.7000000000000001}n.strict||(s+="/?"),n.end?s+="$":n.strict&&(s+="(?:/|$)");const h=new RegExp(s,n.sensitive?"":"i");function m(l){const o=l.match(h),u={};if(!o)return null;for(let f=1;f<o.length;f++){const g=o[f]||"",v=a[f-1];u[v.name]=g&&v.repeatable?g.split("/"):g}return u}function i(l){let o="",u=!1;for(const f of e){(!u||!o.endsWith("/"))&&(o+="/"),u=!1;for(const g of f)if(g.type===0)o+=g.value;else if(g.type===1){const{value:v,repeatable:A,optional:C}=g,E=v in l?l[v]:"";if(x(E)&&!A)throw new Error(`Provided param "${v}" is an array but it is not repeatable (* or + modifiers)`);const P=x(E)?E.join("/"):E;if(!P)if(C)f.length<2&&(o.endsWith("/")?o=o.slice(0,-1):u=!0);else throw new Error(`Missing required param "${v}"`);o+=P}}return o||"/"}return{re:h,score:r,keys:a,parse:m,stringify:i}}function un(e,t){let n=0;for(;n<e.length&&n<t.length;){const r=t[n]-e[n];if(r)return r;n++}return e.length<t.length?e.length===1&&e[0]===40+40?-1:1:e.length>t.length?t.length===1&&t[0]===40+40?1:-1:0}function fn(e,t){let n=0;const r=e.score,s=t.score;for(;n<r.length&&n<s.length;){const a=un(r[n],s[n]);if(a)return a;n++}if(Math.abs(s.length-r.length)===1){if(He(r))return 1;if(He(s))return-1}return s.length-r.length}function He(e){const t=e[e.length-1];return e.length>0&&t[t.length-1]<0}const hn={type:0,value:""},dn=/[a-zA-Z0-9_]/;function pn(e){if(!e)return[[]];if(e==="/")return[[hn]];if(!e.startsWith("/"))throw new Error(`Invalid path "${e}"`);function t(g){throw new Error(`ERR (${n})/"${l}": ${g}`)}let n=0,r=n;const s=[];let a;function h(){a&&s.push(a),a=[]}let m=0,i,l="",o="";function u(){l&&(n===0?a.push({type:0,value:l}):n===1||n===2||n===3?(a.length>1&&(i==="*"||i==="+")&&t(`A repeatable param (${l}) must be alone in its segment. eg: '/:ids+.`),a.push({type:1,value:l,regexp:o,repeatable:i==="*"||i==="+",optional:i==="*"||i==="?"})):t("Invalid state to consume buffer"),l="")}function f(){l+=i}for(;m<e.length;){if(i=e[m++],i==="\\"&&n!==2){r=n,n=4;continue}switch(n){case 0:i==="/"?(l&&u(),h()):i===":"?(u(),n=1):f();break;case 4:f(),n=r;break;case 1:i==="("?n=2:dn.test(i)?f():(u(),n=0,i!=="*"&&i!=="?"&&i!=="+"&&m--);break;case 2:i===")"?o[o.length-1]=="\\"?o=o.slice(0,-1)+i:n=3:o+=i;break;case 3:u(),n=0,i!=="*"&&i!=="?"&&i!=="+"&&m--,o="";break;default:t("Unknown state");break}}return n===2&&t(`Unfinished custom RegExp for param "${l}"`),u(),h(),s}function mn(e,t,n){const r=ln(pn(e.path),n),s=w(r,{record:e,parent:t,children:[],alias:[]});return t&&!s.record.aliasOf==!t.record.aliasOf&&t.children.push(s),s}function gn(e,t){const n=[],r=new Map;t=De({strict:!1,end:!0,sensitive:!1},t);function s(o){return r.get(o)}function a(o,u,f){const g=!f,v=yn(o);v.aliasOf=f&&f.record;const A=De(t,o),C=[v];if("alias"in o){const b=typeof o.alias=="string"?[o.alias]:o.alias;for(const $ of b)C.push(w({},v,{components:f?f.record.components:v.components,path:$,aliasOf:f?f.record:v}))}let E,P;for(const b of C){const{path:$}=b;if(u&&$[0]!=="/"){const B=u.record.path,I=B[B.length-1]==="/"?"":"/";b.path=u.record.path+($&&I+$)}if(E=mn(b,u,A),f?f.alias.push(E):(P=P||E,P!==E&&P.alias.push(E),g&&o.name&&!Ve(E)&&h(o.name)),v.children){const B=v.children;for(let I=0;I<B.length;I++)a(B[I],E,f&&f.children[I])}f=f||E,(E.record.components&&Object.keys(E.record.components).length||E.record.name||E.record.redirect)&&i(E)}return P?()=>{h(P)}:X}function h(o){if(rt(o)){const u=r.get(o);u&&(r.delete(o),n.splice(n.indexOf(u),1),u.children.forEach(h),u.alias.forEach(h))}else{const u=n.indexOf(o);u>-1&&(n.splice(u,1),o.record.name&&r.delete(o.record.name),o.children.forEach(h),o.alias.forEach(h))}}function m(){return n}function i(o){let u=0;for(;u<n.length&&fn(o,n[u])>=0&&(o.record.path!==n[u].record.path||!ot(o,n[u]));)u++;n.splice(u,0,o),o.record.name&&!Ve(o)&&r.set(o.record.name,o)}function l(o,u){let f,g={},v,A;if("name"in o&&o.name){if(f=r.get(o.name),!f)throw K(1,{location:o});A=f.record.name,g=w(Ue(u.params,f.keys.filter(P=>!P.optional).map(P=>P.name)),o.params&&Ue(o.params,f.keys.map(P=>P.name))),v=f.stringify(g)}else if("path"in o)v=o.path,f=n.find(P=>P.re.test(v)),f&&(g=f.parse(v),A=f.record.name);else{if(f=u.name?r.get(u.name):n.find(P=>P.re.test(u.path)),!f)throw K(1,{location:o,currentLocation:u});A=f.record.name,g=w({},u.params,o.params),v=f.stringify(g)}const C=[];let E=f;for(;E;)C.unshift(E.record),E=E.parent;return{name:A,path:v,params:g,matched:C,meta:vn(C)}}return e.forEach(o=>a(o)),{addRoute:a,resolve:l,removeRoute:h,getRoutes:m,getRecordMatcher:s}}function Ue(e,t){const n={};for(const r of t)r in e&&(n[r]=e[r]);return n}function yn(e){return{path:e.path,redirect:e.redirect,name:e.name,meta:e.meta||{},aliasOf:void 0,beforeEnter:e.beforeEnter,props:Rn(e),children:e.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in e?e.components||null:e.component&&{default:e.component}}}function Rn(e){const t={},n=e.props||!1;if("component"in e)t.default=n;else for(const r in e.components)t[r]=typeof n=="boolean"?n:n[r];return t}function Ve(e){for(;e;){if(e.record.aliasOf)return!0;e=e.parent}return!1}function vn(e){return e.reduce((t,n)=>w(t,n.meta),{})}function De(e,t){const n={};for(const r in e)n[r]=r in t?t[r]:e[r];return n}function ot(e,t){return t.children.some(n=>n===e||ot(e,n))}const ct=/#/g,En=/&/g,_n=/\//g,Pn=/=/g,wn=/\?/g,at=/\+/g,Sn=/%5B/g,Cn=/%5D/g,it=/%5E/g,An=/%60/g,lt=/%7B/g,kn=/%7C/g,ut=/%7D/g,On=/%20/g;function we(e){return encodeURI(""+e).replace(kn,"|").replace(Sn,"[").replace(Cn,"]")}function bn(e){return we(e).replace(lt,"{").replace(ut,"}").replace(it,"^")}function Re(e){return we(e).replace(at,"%2B").replace(On,"+").replace(ct,"%23").replace(En,"%26").replace(An,"`").replace(lt,"{").replace(ut,"}").replace(it,"^")}function Ln(e){return Re(e).replace(Pn,"%3D")}function $n(e){return we(e).replace(ct,"%23").replace(wn,"%3F")}function Tn(e){return e==null?"":$n(e).replace(_n,"%2F")}function ne(e){try{return decodeURIComponent(""+e)}catch{}return""+e}function xn(e){const t={};if(e===""||e==="?")return t;const r=(e[0]==="?"?e.slice(1):e).split("&");for(let s=0;s<r.length;++s){const a=r[s].replace(at," "),h=a.indexOf("="),m=ne(h<0?a:a.slice(0,h)),i=h<0?null:ne(a.slice(h+1));if(m in t){let l=t[m];x(l)||(l=t[m]=[l]),l.push(i)}else t[m]=i}return t}function Ge(e){let t="";for(let n in e){const r=e[n];if(n=Ln(n),r==null){r!==void 0&&(t+=(t.length?"&":"")+n);continue}(x(r)?r.map(a=>a&&Re(a)):[r&&Re(r)]).forEach(a=>{a!==void 0&&(t+=(t.length?"&":"")+n,a!=null&&(t+="="+a))})}return t}function In(e){const t={};for(const n in e){const r=e[n];r!==void 0&&(t[n]=x(r)?r.map(s=>s==null?null:""+s):r==null?r:""+r)}return t}const Nn=Symbol(""),Ke=Symbol(""),Se=Symbol(""),Ce=Symbol(""),ve=Symbol("");function W(){let e=[];function t(r){return e.push(r),()=>{const s=e.indexOf(r);s>-1&&e.splice(s,1)}}function n(){e=[]}return{add:t,list:()=>e,reset:n}}function j(e,t,n,r,s){const a=r&&(r.enterCallbacks[s]=r.enterCallbacks[s]||[]);return()=>new Promise((h,m)=>{const i=u=>{u===!1?m(K(4,{from:n,to:t})):u instanceof Error?m(u):on(u)?m(K(2,{from:t,to:u})):(a&&r.enterCallbacks[s]===a&&typeof u=="function"&&a.push(u),h())},l=e.call(r&&r.instances[s],t,n,i);let o=Promise.resolve(l);e.length<3&&(o=o.then(i)),o.catch(u=>m(u))})}function pe(e,t,n,r){const s=[];for(const a of e)for(const h in a.components){let m=a.components[h];if(!(t!=="beforeRouteEnter"&&!a.instances[h]))if(Mn(m)){const l=(m.__vccOpts||m)[t];l&&s.push(j(l,n,r,a,h))}else{let i=m();s.push(()=>i.then(l=>{if(!l)return Promise.reject(new Error(`Couldn't resolve component "${h}" at "${a.path}"`));const o=Vt(l)?l.default:l;a.components[h]=o;const f=(o.__vccOpts||o)[t];return f&&j(f,n,r,a,h)()}))}}return s}function Mn(e){return typeof e=="object"||"displayName"in e||"props"in e||"__vccOpts"in e}function Qe(e){const t=U(Se),n=U(Ce),r=T(()=>t.resolve(F(e.to))),s=T(()=>{const{matched:i}=r.value,{length:l}=i,o=i[l-1],u=n.matched;if(!o||!u.length)return-1;const f=u.findIndex(G.bind(null,o));if(f>-1)return f;const g=ze(i[l-2]);return l>1&&ze(o)===g&&u[u.length-1].path!==g?u.findIndex(G.bind(null,i[l-2])):f}),a=T(()=>s.value>-1&&Un(n.params,r.value.params)),h=T(()=>s.value>-1&&s.value===n.matched.length-1&&tt(n.params,r.value.params));function m(i={}){return Hn(i)?t[F(e.replace)?"replace":"push"](F(e.to)).catch(X):Promise.resolve()}return{route:r,href:T(()=>r.value.href),isActive:a,isExactActive:h,navigate:m}}const jn=Ee({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:Qe,setup(e,{slots:t}){const n=Xe(Qe(e)),{options:r}=U(Se),s=T(()=>({[qe(e.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[qe(e.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const a=t.default&&t.default(n);return e.custom?a:ee("a",{"aria-current":n.isExactActive?e.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:s.value},a)}}}),Bn=jn;function Hn(e){if(!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)&&!e.defaultPrevented&&!(e.button!==void 0&&e.button!==0)){if(e.currentTarget&&e.currentTarget.getAttribute){const t=e.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(t))return}return e.preventDefault&&e.preventDefault(),!0}}function Un(e,t){for(const n in t){const r=t[n],s=e[n];if(typeof r=="string"){if(r!==s)return!1}else if(!x(s)||s.length!==r.length||r.some((a,h)=>a!==s[h]))return!1}return!0}function ze(e){return e?e.aliasOf?e.aliasOf.path:e.path:""}const qe=(e,t,n)=>e??t??n,Vn=Ee({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(e,{attrs:t,slots:n}){const r=U(ve),s=T(()=>e.route||r.value),a=U(Ke,0),h=T(()=>{let l=F(a);const{matched:o}=s.value;let u;for(;(u=o[l])&&!u.components;)l++;return l}),m=T(()=>s.value.matched[h.value]);ue(Ke,T(()=>h.value+1)),ue(Nn,m),ue(ve,s);const i=gt();return yt(()=>[i.value,m.value,e.name],([l,o,u],[f,g,v])=>{o&&(o.instances[u]=l,g&&g!==o&&l&&l===f&&(o.leaveGuards.size||(o.leaveGuards=g.leaveGuards),o.updateGuards.size||(o.updateGuards=g.updateGuards))),l&&o&&(!g||!G(o,g)||!f)&&(o.enterCallbacks[u]||[]).forEach(A=>A(l))},{flush:"post"}),()=>{const l=s.value,o=e.name,u=m.value,f=u&&u.components[o];if(!f)return We(n.default,{Component:f,route:l});const g=u.props[o],v=g?g===!0?l.params:typeof g=="function"?g(l):g:null,C=ee(f,w({},v,t,{onVnodeUnmounted:E=>{E.component.isUnmounted&&(u.instances[o]=null)},ref:i}));return We(n.default,{Component:C,route:l})||C}}});function We(e,t){if(!e)return null;const n=e(t);return n.length===1?n[0]:n}const Dn=Vn;function cr(e){const t=gn(e.routes,e),n=e.parseQuery||xn,r=e.stringifyQuery||Ge,s=e.history,a=W(),h=W(),m=W(),i=pt(M);let l=M;D&&e.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const o=he.bind(null,c=>""+c),u=he.bind(null,Tn),f=he.bind(null,ne);function g(c,p){let d,y;return rt(c)?(d=t.getRecordMatcher(c),y=p):y=c,t.addRoute(y,d)}function v(c){const p=t.getRecordMatcher(c);p&&t.removeRoute(p)}function A(){return t.getRoutes().map(c=>c.record)}function C(c){return!!t.getRecordMatcher(c)}function E(c,p){if(p=w({},p||i.value),typeof c=="string"){const R=de(n,c,p.path),O=t.resolve({path:R.path},p),q=s.createHref(R.fullPath);return w(R,O,{params:f(O.params),hash:ne(R.hash),redirectedFrom:void 0,href:q})}let d;if("path"in c)d=w({},c,{path:de(n,c.path,p.path).path});else{const R=w({},c.params);for(const O in R)R[O]==null&&delete R[O];d=w({},c,{params:u(c.params)}),p.params=u(p.params)}const y=t.resolve(d,p),S=c.hash||"";y.params=o(f(y.params));const k=Kt(r,w({},c,{hash:bn(S),path:y.path})),_=s.createHref(k);return w({fullPath:k,hash:S,query:r===Ge?In(c.query):c.query||{}},y,{redirectedFrom:void 0,href:_})}function P(c){return typeof c=="string"?de(n,c,i.value.path):w({},c)}function b(c,p){if(l!==c)return K(8,{from:p,to:c})}function $(c){return Q(c)}function B(c){return $(w(P(c),{replace:!0}))}function I(c){const p=c.matched[c.matched.length-1];if(p&&p.redirect){const{redirect:d}=p;let y=typeof d=="function"?d(c):d;return typeof y=="string"&&(y=y.includes("?")||y.includes("#")?y=P(y):{path:y},y.params={}),w({query:c.query,hash:c.hash,params:"path"in y?{}:c.params},y)}}function Q(c,p){const d=l=E(c),y=i.value,S=c.state,k=c.force,_=c.replace===!0,R=I(d);if(R)return Q(w(P(R),{state:typeof R=="object"?w({},S,R.state):S,force:k,replace:_}),p||d);const O=d;O.redirectedFrom=p;let q;return!k&&Qt(r,y,d)&&(q=K(16,{to:O,from:y}),Le(y,y,!0,!1)),(q?Promise.resolve(q):Ae(O,y)).catch(L=>N(L)?N(L,2)?L:ce(L):oe(L,O,y)).then(L=>{if(L){if(N(L,2))return Q(w({replace:_},P(L.to),{state:typeof L.to=="object"?w({},S,L.to.state):S,force:k}),p||O)}else L=Oe(O,y,!0,_,S);return ke(O,y,L),L})}function ft(c,p){const d=b(c,p);return d?Promise.reject(d):Promise.resolve()}function Ae(c,p){let d;const[y,S,k]=Gn(c,p);d=pe(y.reverse(),"beforeRouteLeave",c,p);for(const R of y)R.leaveGuards.forEach(O=>{d.push(j(O,c,p))});const _=ft.bind(null,c,p);return d.push(_),V(d).then(()=>{d=[];for(const R of a.list())d.push(j(R,c,p));return d.push(_),V(d)}).then(()=>{d=pe(S,"beforeRouteUpdate",c,p);for(const R of S)R.updateGuards.forEach(O=>{d.push(j(O,c,p))});return d.push(_),V(d)}).then(()=>{d=[];for(const R of c.matched)if(R.beforeEnter&&!p.matched.includes(R))if(x(R.beforeEnter))for(const O of R.beforeEnter)d.push(j(O,c,p));else d.push(j(R.beforeEnter,c,p));return d.push(_),V(d)}).then(()=>(c.matched.forEach(R=>R.enterCallbacks={}),d=pe(k,"beforeRouteEnter",c,p),d.push(_),V(d))).then(()=>{d=[];for(const R of h.list())d.push(j(R,c,p));return d.push(_),V(d)}).catch(R=>N(R,8)?R:Promise.reject(R))}function ke(c,p,d){for(const y of m.list())y(c,p,d)}function Oe(c,p,d,y,S){const k=b(c,p);if(k)return k;const _=p===M,R=D?history.state:{};d&&(y||_?s.replace(c.fullPath,w({scroll:_&&R&&R.scroll},S)):s.push(c.fullPath,S)),i.value=c,Le(c,p,d,_),ce()}let z;function ht(){z||(z=s.listen((c,p,d)=>{if(!$e.listening)return;const y=E(c),S=I(y);if(S){Q(w(S,{replace:!0}),y).catch(X);return}l=y;const k=i.value;D&&Jt(Ne(k.fullPath,d.delta),re()),Ae(y,k).catch(_=>N(_,12)?_:N(_,2)?(Q(_.to,y).then(R=>{N(R,20)&&!d.delta&&d.type===Z.pop&&s.go(-1,!1)}).catch(X),Promise.reject()):(d.delta&&s.go(-d.delta,!1),oe(_,y,k))).then(_=>{_=_||Oe(y,k,!1),_&&(d.delta&&!N(_,8)?s.go(-d.delta,!1):d.type===Z.pop&&N(_,20)&&s.go(-1,!1)),ke(y,k,_)}).catch(X)}))}let se=W(),be=W(),J;function oe(c,p,d){ce(c);const y=be.list();return y.length?y.forEach(S=>S(c,p,d)):console.error(c),Promise.reject(c)}function dt(){return J&&i.value!==M?Promise.resolve():new Promise((c,p)=>{se.add([c,p])})}function ce(c){return J||(J=!c,ht(),se.list().forEach(([p,d])=>c?d(c):p()),se.reset()),c}function Le(c,p,d,y){const{scrollBehavior:S}=e;if(!D||!S)return Promise.resolve();const k=!d&&en(Ne(c.fullPath,0))||(y||!d)&&history.state&&history.state.scroll||null;return mt().then(()=>S(c,p,k)).then(_=>_&&Zt(_)).catch(_=>oe(_,c,p))}const ae=c=>s.go(c);let ie;const le=new Set,$e={currentRoute:i,listening:!0,addRoute:g,removeRoute:v,hasRoute:C,getRoutes:A,resolve:E,options:e,push:$,replace:B,go:ae,back:()=>ae(-1),forward:()=>ae(1),beforeEach:a.add,beforeResolve:h.add,afterEach:m.add,onError:be.add,isReady:dt,install(c){const p=this;c.component("RouterLink",Bn),c.component("RouterView",Dn),c.config.globalProperties.$router=p,Object.defineProperty(c.config.globalProperties,"$route",{enumerable:!0,get:()=>F(i)}),D&&!ie&&i.value===M&&(ie=!0,$(s.location).catch(S=>{}));const d={};for(const S in M)d[S]=T(()=>i.value[S]);c.provide(Se,p),c.provide(Ce,Xe(d)),c.provide(ve,i);const y=c.unmount;le.add(c),c.unmount=function(){le.delete(c),le.size<1&&(l=M,z&&z(),z=null,i.value=M,ie=!1,J=!1),y()}}};return $e}function V(e){return e.reduce((t,n)=>t.then(()=>n()),Promise.resolve())}function Gn(e,t){const n=[],r=[],s=[],a=Math.max(t.matched.length,e.matched.length);for(let h=0;h<a;h++){const m=t.matched[h];m&&(e.matched.find(l=>G(l,m))?r.push(m):n.push(m));const i=e.matched[h];i&&(t.matched.find(l=>G(l,i))||s.push(i))}return[n,r,s]}function ar(){return U(Ce)}const Kn=()=>{var e;return(e=te())==null?void 0:e.$router},ir=()=>Rt()?U("_route",te()._route):te()._route,lr=e=>e,Qn=()=>{try{if(te()._processingMiddleware)return!0}catch{return!0}return!1},ur=(e,t)=>{e||(e="/");const n=typeof e=="string"?e:e.path||"/",r=_e(n,!0);if(r&&!(t!=null&&t.external))throw new Error("Navigating to external URL is not allowed by default. Use `navigateTo (url, { external: true })`.");if(r&&Pe(n).protocol==="script:")throw new Error("Cannot navigate to an URL with script protocol.");if(!r&&Qn())return e;const s=Kn();return r?(t!=null&&t.replace?location.replace(n):location.href=n,Promise.resolve()):t!=null&&t.replace?s.replace(e):s.push(e)},zn="modulepreload",qn=function(e,t){return e.startsWith(".")?new URL(e,t).href:e},Fe={},H=function(t,n,r){if(!n||n.length===0)return t();const s=document.getElementsByTagName("link");return Promise.all(n.map(a=>{if(a=qn(a,r),a in Fe)return;Fe[a]=!0;const h=a.endsWith(".css"),m=h?'[rel="stylesheet"]':"";if(!!r)for(let o=s.length-1;o>=0;o--){const u=s[o];if(u.href===a&&(!h||u.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${a}"]${m}`))return;const l=document.createElement("link");if(l.rel=h?"stylesheet":zn,h||(l.as="script",l.crossOrigin=""),l.href=a,document.head.appendChild(l),h)return new Promise((o,u)=>{l.addEventListener("load",o),l.addEventListener("error",()=>u(new Error(`Unable to preload CSS for ${a}`)))})})).then(()=>t())},fr={aside:()=>H(()=>import("./aside.f906b979.js"),["./aside.f906b979.js","./_plugin-vue_export-helper.1457150d.js","./aside.080dd94c.css"],import.meta.url).then(e=>e.default||e),container:()=>H(()=>import("./container.75428499.js"),["./container.75428499.js","./layout.16e3e0cb.js","./nuxt.9babd985.js","./_plugin-vue_export-helper.1457150d.js","./container.f6deda77.css"],import.meta.url).then(e=>e.default||e),default:()=>H(()=>import("./default.75dc306c.js"),["./default.75dc306c.js","./_plugin-vue_export-helper.1457150d.js"],import.meta.url).then(e=>e.default||e),header:()=>H(()=>import("./header.dfe8d820.js"),["./header.dfe8d820.js","./_plugin-vue_export-helper.1457150d.js","./header.b5e7dfa4.css"],import.meta.url).then(e=>e.default||e),"main-container":()=>H(()=>import("./main-container.a5375ec8.js"),["./main-container.a5375ec8.js","./_plugin-vue_export-helper.1457150d.js","./nuxt.9babd985.js","./app.config.8eaad369.js","./defu.72e658dd.js","./main-container.db0b1aec.css"],import.meta.url).then(e=>e.default||e),main:()=>H(()=>import("./main.328d69a0.js"),["./main.328d69a0.js","./layout.16e3e0cb.js","./nuxt.9babd985.js","./_plugin-vue_export-helper.1457150d.js"],import.meta.url).then(e=>e.default||e),"sub-container":()=>H(()=>import("./sub-container.3b102d98.js"),["./sub-container.3b102d98.js","./_plugin-vue_export-helper.1457150d.js","./sub-container.e3a27334.css"],import.meta.url).then(e=>e.default||e)},Wn=Ee({name:"FragmentWrapper",setup(e,{slots:t}){return()=>{var n;return(n=t.default)==null?void 0:n.call(t)}}}),hr=(e,t,n)=>({default:()=>t?ee(e,t===!0?{}:t,n):ee(Wn,{},n)});export{Dn as R,H as _,Jn as a,er as b,nr as c,lr as d,or as e,sn as f,cr as g,Zn as h,_e as i,Ht as j,hr as k,fr as l,rr as m,ir as n,sr as o,Pe as p,ar as q,tr as r,ur as s,Kn as u,Yn as w};