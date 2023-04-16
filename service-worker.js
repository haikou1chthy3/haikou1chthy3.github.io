/* Qwik Service Worker */
const appBundles=[["q-03759b76.js",[9]],["q-11b787e6.js",[9,12],["5g4B0Gd1Wck","8gdLBszqbaM","kzjavhDI3L0"]],["q-2f3ebd3a.js",[9]],["q-3183533f.js",[9,12],["02wMImzEAbk","fX0bDjeJa0E","TxCFOy819ag"]],["q-33ae95e0.js",[9,12],["AKetNByE5TM","KnNE9eL0qfc"]],["q-34be6a62.js",[9,12],["00MAp2tGV0E","BqHZvgYJP9g"]],["q-40122e83.js",[9],["gytQY3Tt2No","hjVZiqtdGRA"]],["q-45aab3b6.js",[]],["q-49111ea8.js",[9]],["q-503014d1.js",[]],["q-545c6572.js",[9],["crp5PYqmBUM"]],["q-6b882659.js",[9]],["q-7435e816.js",[9],["vgNegdacmcE"]],["q-78ad77bc.js",[9]],["q-79bf8436.js",[9,12],["uGIfwHgHwWQ"]],["q-8a45eec5.js",[9,12],["gfgbsab0fbw","ON0IfQ0ZafA"]],["q-a6b6a302.js",[9]],["q-a88d4262.js",[9]],["q-aa0c1e0f.js",[9],["9AkOlFL4o4U","PzsgC9JdCLI","vP5lWfKhuIc"]],["q-af40ff04.js",[9]],["q-b22c595d.js",[9],["LqXgoF7Oy9A","Yz2NUIzn9Z4"]],["q-dcd611e0.js",[9]],["q-e41f666f.js",[9,12],["gWiU0J3YNLY","ZzsY4z095kk"]],["q-f24bbf1d.js",[]]];
const libraryBundleIds=[3];
const linkBundles=[[/^\/$/,[21,18,16,10]],[/^\/docs\/advanced\/?$/,[21,18,19,2]],[/^\/docs\/getting-started\/?$/,[21,18,19,17]],[/^\/about-us\/?$/,[21,18,8]],[/^\/docs\/?$/,[21,18,19,11]]];
const m="QwikBuild",k=new Set,g=new Map,u=[],E=(e,n)=>n.filter(s=>!e.some(i=>s.endsWith(i[0]))),q=(e,n)=>!!n&&!v(e)&&!v(n),v=e=>{const n=e.headers.get("Cache-Control")||"";return n.includes("no-cache")||n.includes("max-age=0")},C=(e,n)=>e.some(s=>n.endsWith("/"+s[0])),U=(e,n)=>e.find(s=>s[0]===n),b=(e,n)=>n.map(s=>e[s]?e[s][0]:null),W=(e,n)=>n.map(s=>e.get(s)).filter(s=>s!=null),p=e=>{const n=new Map;for(const s of e){const i=s[2];if(i)for(const c of i)n.set(c,s[0])}return n},A=(e,n,s,i)=>new Promise((c,h)=>{const t=i.url,r=s.get(t);if(r)r.push([c,h]);else{const o=l=>{const a=s.get(t);if(a){s.delete(t);for(const[d]of a)d(l.clone())}else c(l.clone())},f=l=>{const a=s.get(t);if(a){s.delete(t);for(const[d,L]of a)L(l)}else h(l)};s.set(t,[[c,h]]),e.match(t).then(l=>{if(q(i,l))o(l);else return n(i).then(async a=>{a.ok&&await e.put(t,a.clone()),o(a)})}).catch(l=>e.match(t).then(a=>{a?o(a):f(l)}))}}),y=(e,n,s,i,c,h=!1)=>{const t=()=>{for(;u.length>0&&g.size<6;){const o=u.shift(),f=new Request(o);k.has(o)?t():(k.add(o),A(n,s,g,f).finally(t))}},r=o=>{try{const f=U(e,o);if(f){const l=b(e,f[1]),a=new URL(o,i).href,d=u.indexOf(a);d>-1?h&&(u.splice(d,1),u.unshift(a)):h?u.unshift(a):u.push(a),l.forEach(r)}}catch(f){console.error(f)}};Array.isArray(c)&&c.forEach(r),t()},w=(e,n,s,i,c,h,t)=>{try{y(e,i,c,h,b(e,n))}catch(r){console.error(r)}for(const r of t)try{for(const o of s){const[f,l]=o;if(f.test(r)){y(e,i,c,h,b(e,l));break}}}catch(o){console.error(o)}},B=(e,n,s,i)=>{try{const c=i.href.split("/"),h=c[c.length-1];c[c.length-1]="";const t=new URL(c.join("/"));y(e,n,s,t,[h],!0)}catch(c){console.error(c)}},N=(e,n,s,i)=>{const c=e.fetch.bind(e),h=p(n);e.addEventListener("fetch",t=>{const r=t.request;if(r.method==="GET"){const o=new URL(r.url);C(n,o.pathname)&&t.respondWith(e.caches.open(m).then(f=>(B(n,f,c,o),A(f,c,g,r))))}}),e.addEventListener("message",async({data:t})=>{if(t.type==="qprefetch"&&typeof t.base=="string"){const r=await e.caches.open(m),o=new URL(t.base,e.origin);Array.isArray(t.links)&&w(n,s,i,r,c,o,t.links),Array.isArray(t.bundles)&&y(n,r,c,o,t.bundles),Array.isArray(t.symbols)&&y(n,r,c,o,W(h,t.symbols))}}),e.addEventListener("activate",async()=>{try{const t=await e.caches.open(m),o=(await t.keys()).map(l=>l.url),f=E(n,o);await Promise.all(f.map(l=>t.delete(l)))}catch(t){console.error(t)}})},x=()=>{typeof self<"u"&&typeof appBundles<"u"&&N(self,appBundles,libraryBundleIds,linkBundles)};x();addEventListener("install",()=>self.skipWaiting());addEventListener("activate",()=>self.clients.claim());
