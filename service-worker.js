/* Qwik Service Worker */
const appBundles=[["q-0e7cc176.js",[21],["cjkE0lwjeN0"]],["q-11f2ad87.js",[21,36]],["q-1c397476.js",[21],["gB0B0jP0GDc"]],["q-1e68828a.js",[21,23,46],["bMWpvi7RRp0","iUyZsGEFR6c","TRzHBx4J0vk"]],["q-1ed54893.js",[21,36],["gfgbsab0fbw","ON0IfQ0ZafA","wBRkqUk1l98"]],["q-21af6472.js",[21,36],["02wMImzEAbk","fX0bDjeJa0E","TxCFOy819ag"]],["q-2815cc95.js",[21,36],["uGIfwHgHwWQ"]],["q-319f0241.js",[21]],["q-3491e01f.js",[21]],["q-36d38e2f.js",[21]],["q-388c584e.js",[21]],["q-38e1e1b7.js",[21],["CimbSl0qXwY"]],["q-394fcdfa.js",[21,36],["5mfjbpny43c","74O3RRaKF7E","GyX4F0k7TzY"]],["q-3d9fa759.js",[21],["9AkOlFL4o4U","PzsgC9JdCLI","vP5lWfKhuIc"]],["q-3ee40835.js",[21],["qydlcJ0TIrU"]],["q-429aa5b1.js",[21]],["q-45aab3b6.js",[]],["q-490bae66.js",[21],["gytQY3Tt2No","hjVZiqtdGRA"]],["q-58f6817b.js",[21,23,32],["DI4Z5YgfXYE","FDAvGbgP96s","ZvhrqPClqFs"]],["q-5fd6a308.js",[]],["q-63be0f60.js",[21]],["q-794ea8db.js",[]],["q-812c00c5.js",[21],["LqXgoF7Oy9A","Yz2NUIzn9Z4"]],["q-85e6c4df.js",[]],["q-86df0199.js",[21,36],["AKetNByE5TM","KnNE9eL0qfc"]],["q-87143227.js",[21],["0E3cr3GMJKA"]],["q-8e068fe4.js",[21]],["q-900111e5.js",[21]],["q-90ca997f.js",[21,36],["gWiU0J3YNLY","ZzsY4z095kk"]],["q-96979bc2.js",[21],["A5bZC7WO00A"]],["q-99e99453.js",[21,36],["00MAp2tGV0E","BqHZvgYJP9g"]],["q-a340a5df.js",[21],["7hPiOqp6HV0"]],["q-a54f640a.js",[21,23]],["q-a6056f7a.js",[21]],["q-abf446af.js",[21],["80CGCsN4UEw"]],["q-b93c087f.js",[21]],["q-be56caa7.js",[21],["vgNegdacmcE"]],["q-c04b63da.js",[21]],["q-c175a0a1.js",[21]],["q-c24dbca3.js",[21],["crp5PYqmBUM"]],["q-cdbf5645.js",[21]],["q-d9588fc0.js",[21,36],["5g4B0Gd1Wck","8gdLBszqbaM","kzjavhDI3L0"]],["q-e4b09e3f.js",[21]],["q-f612ff83.js",[21]],["q-f893938b.js",[21]],["q-fe545f9e.js",[21]],["q-ff34fc18.js",[21,23]]];
const libraryBundleIds=[5];
const linkBundles=[[/^\/$/,[27,13,9,39]],[/^\/docs\/craft\/some-else\/crm\/?$/,[27,13,8,15,31]],[/^\/docs\/craft\/some-else\/erp\/?$/,[27,13,8,38,14]],[/^\/docs\/craft\/some-else\/oa\/?$/,[27,13,8,44,25]],[/^\/docs\/craft\/aide\/?$/,[27,13,8,32,18]],[/^\/docs\/craft\/blog\/?$/,[27,13,8,46,3]],[/^\/docs\/craft\/fish-or-lotus\/?$/,[27,13,8,37,11]],[/^\/docs\/craft\/neod\/?$/,[27,13,8,45,0]],[/^\/docs\/craft\/some-else\/?$/,[27,13,8,7,12]],[/^\/docs\/craft\/todo\/?$/,[27,13,8,10]],[/^\/docs\/devops\/cicd\/?$/,[27,13,8,20,2]],[/^\/docs\/devops\/kits\/?$/,[27,13,8,33,34]],[/^\/docs\/advanced\/?$/,[27,13,8,35]],[/^\/docs\/getting-started\/?$/,[27,13,8,1]],[/^\/about-us\/?$/,[27,13,40]],[/^\/docs\/?$/,[27,13,8,42]]];
const m="QwikBuild",k=new Set,g=new Map,u=[],E=(e,n)=>n.filter(s=>!e.some(i=>s.endsWith(i[0]))),q=(e,n)=>!!n&&!v(e)&&!v(n),v=e=>{const n=e.headers.get("Cache-Control")||"";return n.includes("no-cache")||n.includes("max-age=0")},C=(e,n)=>e.some(s=>n.endsWith("/"+s[0])),U=(e,n)=>e.find(s=>s[0]===n),b=(e,n)=>n.map(s=>e[s]?e[s][0]:null),W=(e,n)=>n.map(s=>e.get(s)).filter(s=>s!=null),p=e=>{const n=new Map;for(const s of e){const i=s[2];if(i)for(const c of i)n.set(c,s[0])}return n},A=(e,n,s,i)=>new Promise((c,h)=>{const t=i.url,r=s.get(t);if(r)r.push([c,h]);else{const o=l=>{const a=s.get(t);if(a){s.delete(t);for(const[d]of a)d(l.clone())}else c(l.clone())},f=l=>{const a=s.get(t);if(a){s.delete(t);for(const[d,L]of a)L(l)}else h(l)};s.set(t,[[c,h]]),e.match(t).then(l=>{if(q(i,l))o(l);else return n(i).then(async a=>{a.ok&&await e.put(t,a.clone()),o(a)})}).catch(l=>e.match(t).then(a=>{a?o(a):f(l)}))}}),y=(e,n,s,i,c,h=!1)=>{const t=()=>{for(;u.length>0&&g.size<6;){const o=u.shift(),f=new Request(o);k.has(o)?t():(k.add(o),A(n,s,g,f).finally(t))}},r=o=>{try{const f=U(e,o);if(f){const l=b(e,f[1]),a=new URL(o,i).href,d=u.indexOf(a);d>-1?h&&(u.splice(d,1),u.unshift(a)):h?u.unshift(a):u.push(a),l.forEach(r)}}catch(f){console.error(f)}};Array.isArray(c)&&c.forEach(r),t()},w=(e,n,s,i,c,h,t)=>{try{y(e,i,c,h,b(e,n))}catch(r){console.error(r)}for(const r of t)try{for(const o of s){const[f,l]=o;if(f.test(r)){y(e,i,c,h,b(e,l));break}}}catch(o){console.error(o)}},B=(e,n,s,i)=>{try{const c=i.href.split("/"),h=c[c.length-1];c[c.length-1]="";const t=new URL(c.join("/"));y(e,n,s,t,[h],!0)}catch(c){console.error(c)}},N=(e,n,s,i)=>{const c=e.fetch.bind(e),h=p(n);e.addEventListener("fetch",t=>{const r=t.request;if(r.method==="GET"){const o=new URL(r.url);C(n,o.pathname)&&t.respondWith(e.caches.open(m).then(f=>(B(n,f,c,o),A(f,c,g,r))))}}),e.addEventListener("message",async({data:t})=>{if(t.type==="qprefetch"&&typeof t.base=="string"){const r=await e.caches.open(m),o=new URL(t.base,e.origin);Array.isArray(t.links)&&w(n,s,i,r,c,o,t.links),Array.isArray(t.bundles)&&y(n,r,c,o,t.bundles),Array.isArray(t.symbols)&&y(n,r,c,o,W(h,t.symbols))}}),e.addEventListener("activate",async()=>{try{const t=await e.caches.open(m),o=(await t.keys()).map(l=>l.url),f=E(n,o);await Promise.all(f.map(l=>t.delete(l)))}catch(t){console.error(t)}})},x=()=>{typeof self<"u"&&typeof appBundles<"u"&&N(self,appBundles,libraryBundleIds,linkBundles)};x();addEventListener("install",()=>self.skipWaiting());addEventListener("activate",()=>self.clients.claim());
