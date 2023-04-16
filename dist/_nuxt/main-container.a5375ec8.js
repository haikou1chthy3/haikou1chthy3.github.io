import{_ as x,l as h,m as g,a4 as R,a as E,k as S,a5 as F,r as O,a6 as P,o as H,d as G,c as W,j as V,n as j,W as u,q as C,u as f,Y,Z,a7 as z,$ as J,a0 as D,f as Q,a8 as A}from"./_plugin-vue_export-helper.1457150d.js";import{b as X,v as I}from"./nuxt.9babd985.js";import"./app.config.8eaad369.js";import"./defu.72e658dd.js";const ee={},ne={class:"post-block"},te=R('<article data-v-dea561d2><div class="post-content" data-v-dea561d2><header class="post-header animated fadeInDown" data-v-dea561d2><h1 class="post-title" itemprop="name headline" data-v-dea561d2> Nuxt: Introduction </h1><div class="post-meta-container" data-v-dea561d2><div class="post-meta" data-v-dea561d2><span class="post-meta-item" data-v-dea561d2> Nuxt provides both frontend and backend functionality so you can focus on what matters: Creating your web application. </span></div></div></header><h2 data-v-dea561d2>What is Nuxt?</h2><p data-v-dea561d2> Node.js Server Discover the Node.js server preset with Nitro to deploy on any Node hosting. Default output format if none is specified or auto-detected Loads only the required chunks to render the request for optimal cold start timing Useful for deploying Nuxt apps to any Node.js hosting </p><h2 data-v-dea561d2>View engine</h2><p data-v-dea561d2> Nuxt uses Vue.js as a view engine. All Vue 3 capabilities are available in Nuxt. You can read about the details of the Vue integration with Nuxt in the Key Concepts section. </p><h2 data-v-dea561d2>Automation and conventions</h2><p data-v-dea561d2> Nuxt uses conventions and an opinionated directory structure to automate repetitive tasks and allow developers to focus on pushing features. The configuration file can still customize and override its default behaviors. </p><blockquote data-v-dea561d2>npm init vite@latest</blockquote><h2 data-v-dea561d2>What is Nuxt?</h2><p data-v-dea561d2> Node.js Server Discover the Node.js server preset with Nitro to deploy on any Node hosting. Default output format if none is specified or auto-detected Loads only the required chunks to render the request for optimal cold start timing Useful for deploying Nuxt apps to any Node.js hosting </p><h2 data-v-dea561d2>View engine</h2><p data-v-dea561d2> Nuxt uses <a href="#" data-v-dea561d2>Vue.js</a> as a view engine. All Vue 3 capabilities are available in Nuxt. You can read about the details of the Vue integration with Nuxt in the Key Concepts section. </p><h2 data-v-dea561d2>Automation and conventions</h2><p data-v-dea561d2> Nuxt uses conventions and an opinionated directory structure to automate repetitive tasks and allow developers to focus on pushing features. The configuration file can still customize and override its default behaviors. </p></div></article>',1),ae=[te];function oe(e,n){return h(),g("div",ne,ae)}const ie=x(ee,[["render",oe],["__scopeId","data-v-dea561d2"]]);var re=["onActivate","onAddUndo","onBeforeAddUndo","onBeforeExecCommand","onBeforeGetContent","onBeforeRenderUI","onBeforeSetContent","onBeforePaste","onBlur","onChange","onClearUndos","onClick","onContextMenu","onCopy","onCut","onDblclick","onDeactivate","onDirty","onDrag","onDragDrop","onDragEnd","onDragGesture","onDragOver","onDrop","onExecCommand","onFocus","onFocusIn","onFocusOut","onGetContent","onHide","onInit","onKeyDown","onKeyPress","onKeyUp","onLoadContent","onMouseDown","onMouseEnter","onMouseLeave","onMouseMove","onMouseOut","onMouseOver","onMouseUp","onNodeChange","onObjectResizeStart","onObjectResized","onObjectSelected","onPaste","onPostProcess","onPostRender","onPreProcess","onProgressState","onRedo","onRemove","onReset","onSaveContent","onSelectionChange","onSetAttrib","onSetContent","onShow","onSubmit","onUndo","onVisualAid"],se=function(e){return re.map(function(n){return n.toLowerCase()}).indexOf(e.toLowerCase())!==-1},de=function(e,n,t){Object.keys(n).filter(se).forEach(function(a){var i=n[a];typeof i=="function"&&(a==="onInit"?i(e,t):t.on(a.substring(2),function(o){return i(o,t)}))})},le=function(e,n,t,a){var i=e.modelEvents?e.modelEvents:null,o=Array.isArray(i)?i.join(" "):i;E(a,function(c,s){t&&typeof c=="string"&&c!==s&&c!==t.getContent({format:e.outputFormat})&&t.setContent(c)}),t.on(o||"change input undo redo",function(){n.emit("update:modelValue",t.getContent({format:e.outputFormat}))})},ce=function(e,n,t,a,i,o){a.setContent(o()),t.attrs["onUpdate:modelValue"]&&le(n,t,a,i),de(e,t.attrs,a)},L=0,T=function(e){var n=Date.now(),t=Math.floor(Math.random()*1e9);return L++,e+"_"+t+L+String(n)},ue=function(e){return e!==null&&e.tagName.toLowerCase()==="textarea"},M=function(e){return typeof e>"u"||e===""?[]:Array.isArray(e)?e:e.split(" ")},ve=function(e,n){return M(e).concat(M(n))},fe=function(e){return e==null},B=function(){return{listeners:[],scriptId:T("tiny-script"),scriptLoaded:!1}},_e=function(){var e=B(),n=function(i,o,c,s){var r=o.createElement("script");r.referrerPolicy="origin",r.type="application/javascript",r.id=i,r.src=c;var p=function(){r.removeEventListener("load",p),s()};r.addEventListener("load",p),o.head&&o.head.appendChild(r)},t=function(i,o,c){e.scriptLoaded?c():(e.listeners.push(c),i.getElementById(e.scriptId)||n(e.scriptId,i,o,function(){e.listeners.forEach(function(s){return s()}),e.scriptLoaded=!0}))},a=function(){e=B()};return{load:t,reinitialize:a}},pe=_e(),me=function(){return typeof window<"u"?window:global},v=function(){var e=me();return e&&e.tinymce?e.tinymce:null},he={apiKey:String,cloudChannel:String,id:String,init:Object,initialValue:String,inline:Boolean,modelEvents:[String,Array],plugins:[String,Array],tagName:String,toolbar:[String,Array],modelValue:String,disabled:Boolean,tinymceScriptSrc:String,outputFormat:{type:String,validator:function(e){return e==="html"||e==="text"}}},_=globalThis&&globalThis.__assign||function(){return _=Object.assign||function(e){for(var n,t=1,a=arguments.length;t<a;t++){n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e},_.apply(this,arguments)},ge=function(e,n,t,a){return e(a||"div",{id:n,ref:t})},ye=function(e,n,t){return e("textarea",{id:n,visibility:"hidden",ref:t})},be=S({props:he,setup:function(e,n){var t=e.init?_({},e.init):{},a=F(e),i=a.disabled,o=a.modelValue,c=a.tagName,s=O(null),r=null,p=e.id||T("tiny-vue"),w=e.init&&e.init.inline||e.inline,N=!!n.attrs["onUpdate:modelValue"],k=!0,U=e.initialValue?e.initialValue:"",b="",$=function(d){return N?function(){return o!=null&&o.value?o.value:""}:function(){return d?U:b}},y=function(){var d=$(k),l=_(_({},t),{readonly:e.disabled,selector:"#"+p,plugins:ve(t.plugins,e.plugins),toolbar:e.toolbar||t.toolbar,inline:w,setup:function(m){r=m,m.on("init",function(q){return ce(q,e,n,m,o,d)}),typeof t.setup=="function"&&t.setup(m)}});ue(s.value)&&(s.value.style.visibility=""),v().init(l),k=!1};E(i,function(d){var l;r!==null&&(typeof((l=r.mode)===null||l===void 0?void 0:l.set)=="function"?r.mode.set(d?"readonly":"design"):r.setMode(d?"readonly":"design"))}),E(c,function(d){var l;N||(b=r.getContent()),(l=v())===null||l===void 0||l.remove(r),j(function(){return y()})}),P(function(){if(v()!==null)y();else if(s.value&&s.value.ownerDocument){var d=e.cloudChannel?e.cloudChannel:"6",l=e.apiKey?e.apiKey:"no-api-key",m=fe(e.tinymceScriptSrc)?"https://cdn.tiny.cloud/1/"+l+"/tinymce/"+d+"/tinymce.min.js":e.tinymceScriptSrc;pe.load(s.value.ownerDocument,m,y)}}),H(function(){v()!==null&&v().remove(r)}),w||(G(function(){k||y()}),W(function(){var d;N||(b=r.getContent()),(d=v())===null||d===void 0||d.remove(r)}));var K=function(d){var l;b=r.getContent(),(l=v())===null||l===void 0||l.remove(r),t=_(_({},t),d),j(function(){return y()})};return n.expose({rerender:K}),function(){return w?ge(V,p,s,e.tagName):ye(V,p,s)}}});const Ce={id:"sample"},xe=S({__name:"Editor-tinymce",setup(e){const n="fsl1qomauzclkjxzaxr9e5775uvap39m5t1tyxtsiopg505i",t={toolbar_mode:"floating",plugins:"lists link image table code help wordcount",language_url:"/static/tinymce/langs/zh_Hans.js",language:"zh_Hans",selector:"#tiny",a_plugin_option:!0,a_configuration_option:400,content_css:["tinymce-5-dark"],skin:"oxide-dark",height:"960",width:"720"};return P(()=>{const a=X();console.log(a.app)}),(a,i)=>(h(),g("div",null,[u("main",Ce,[C(f(be),{id:"tiny","api-key":n,init:t})])]))}});const Se=x(xe,[["__scopeId","data-v-d26f77ae"]]),we={class:"main-menu menu"},Ne={class:"menu-item"},ke=["href","onClick"],Ee=S({__name:"List",emits:["switch"],setup(e,{emit:n}){const t=O({list:[{lable:"Home",href:"/",icon:"",fn:()=>{}},{lable:"Edit",href:"javascript:void(0)",icon:"",fn:()=>{n("switch")}},{lable:"Tags",href:"/",icon:""},{lable:"Classify",href:"/",icon:""},{lable:"Doc",href:"/",icon:""},{lable:"Search",href:"/",icon:""}]});return(a,i)=>(h(),g("div",null,[u("ul",we,[(h(!0),g(Y,null,Z(f(t).list,(o,c)=>(h(),g("li",Ne,[u("a",{href:o.href,rel:"section",onClick:o.fn},[u("i",{class:z(o.icon)},null,2),J(D(o.lable),1)],8,ke)]))),256))])]))}});const De=x(Ee,[["__scopeId","data-v-570bbf15"]]),Ve={class:"main-container"},je={class:"sub-main-container inline-block"},Ae={class:"sub-header inline-block"},Ie={class:"sub-header-title"},Le={class:"sub-header-subtitle"},Me={class:"sub-main inline-block"},Be=S({__name:"main-container",setup(e){const n=Q({title:"Haikou1chthy3",subtitle:"blog",app:{home:!0,editor:!1}}),t=()=>{n.app.home=!1,n.app.editor=!0};return(a,i)=>{const o=ie,c=Se,s=De;return h(),g("div",Ve,[u("div",{class:z(["main-container inline-block visible-scrollbar p40",{sw:f(n).app.editor}])},[A(C(o,null,null,512),[[I,f(n).app.home]]),A(C(c,null,null,512),[[I,f(n).app.editor]])],2),u("div",je,[u("div",Ae,[u("div",Ie,D(f(n).title),1),u("div",Le,D(f(n).subtitle),1)]),u("div",Me,[C(s,{onSwitch:t})])])])}}});const Ue=x(Be,[["__scopeId","data-v-2251114c"]]);export{Ue as default};