import{_ as n,a as H,R as S,g as U,k as $,r as N,n as h,q as j,Z as C,b as l,T as q,p as Q,e as z,G as b,$ as W}from "./q-9235fbf5.js";import{t as P,l as M,a as T,r as G,b as J,c as X,u as Z,d as F,e as Y,C as B,D as K,R as tt,f as et,g as ot,h as at}from "./q-4fade4e5.js";const I=()=>n(()=>import("./q-ea14db1d.js"),["build/q-ea14db1d.js","build/q-9235fbf5.js"]),p=()=>n(()=>import("./q-ded81da2.js"),["build/q-ded81da2.js","build/q-9235fbf5.js"]),O=[[/^\/$/,[p,()=>n(()=>import("./q-4e6a296c.js"),["build/q-4e6a296c.js","build/q-9235fbf5.js"])]],[/^\/docs\/advanced\/?$/,[p,I,()=>n(()=>import("./q-693c6b29.js"),["build/q-693c6b29.js","build/q-9235fbf5.js"])]],[/^\/docs\/getting-started\/?$/,[p,I,()=>n(()=>import("./q-d3b510ea.js"),["build/q-d3b510ea.js","build/q-9235fbf5.js"])]],[/^\/about-us\/?$/,[p,()=>n(()=>import("./q-f4290a3c.js"),["build/q-f4290a3c.js","build/q-9235fbf5.js"])]],[/^\/docs\/?$/,[p,I,()=>n(()=>import("./q-6fa1b874.js"),["build/q-6fa1b874.js","build/q-9235fbf5.js"])]]],y=[["/docs/",()=>n(()=>import("./q-f24bbf1d.js"),[])]];const k=!0;const nt=async(t, i)=>{const[c,o,a]=H();t===void 0?(t=o.value,o.value=""):i&&(o.value="");const u=new URL(t,a.url);t=P(u),!(!i&&o.value===t)&&(o.value=t,M(u,S()),T(O,y,k,u.pathname),c.value=void 0,a.isNavigating=!0)},st=({track:t})=>{const[i,c,o,a,u,g,_,s]=H();async function v(){const[R,m]=t(()=>[_.value,i.value]),D=U("");let e=new URL(R,s.url),E,w=null;{e.pathname.endsWith("/")||(e.pathname+="/");let f=T(O,y,k,e.pathname);const d=S(),L=E=await M(e,d,!0,m);if(!L){_.untrackedValue=P(e);return}const A=L.href,r=new URL(A,e.href);r.pathname!==e.pathname&&(e=r,f=T(O,y,k,e.pathname)),w=await f}if(w){const[f,d,L]=w,A=d[d.length-1];s.url=e,s.params={...f},_.untrackedValue=P(e);const r=G(E,s,d,D);c.headings=A.headings,c.menu=L,o.value=$(d),a.links=r.links,a.meta=r.meta,a.styles=r.styles,a.title=r.title,a.frontmatter=r.frontmatter;{const V=E==null?void 0:E.loaders;V&&Object.assign(g,V),J.clear(),X(window,e,_),s.isNavigating=!1}}}v()},rt=()=>{const t=Z();if(!(t!=null&&t.params))throw new Error("Missing Qwik City Env Data");const i=N("url");if(!i)throw new Error("Missing Qwik URL Env Data");const c=new URL(i),o=h({url:c,params:t.params,isNavigating:!1}),a=j(h(t.response.loaders)),u=C(P(c)),g=h(F),_=h({headings:void 0,menu:void 0}),s=C(),v=t.response.action,R=v?t.response.loaders[v]:void 0,m=C(R?{id:v,data:t.response.formData,output:{result:R,status:t.response.status}}:void 0),D=b(()=>n(()=>Promise.resolve().then(()=>x),void 0),"s_fX0bDjeJa0E",[m,u,o]);return l(Y,_),l(B,s),l(K,g),l(tt,o),l(et,D),l(ot,a),l(at,m),q(b(()=>n(()=>Promise.resolve().then(()=>x),void 0),"s_02wMImzEAbk",[m,_,s,g,t,a,u,o])),Q(z,null,3,"qY_0")},x=Object.freeze(Object.defineProperty({__proto__:null,_hW:W,s_02wMImzEAbk:st,s_TxCFOy819ag:rt,s_fX0bDjeJa0E:nt},Symbol.toStringTag,{value:"Module"}));export{W as _hW,st as s_02wMImzEAbk,rt as s_TxCFOy819ag,nt as s_fX0bDjeJa0E};
