import{p as r,w as d,m as n,f as c}from"./q-fce9f7f4.js";const a=[{text:"Qwik City App ⚡️",id:"qwik-city-app-️",level:1},{text:"Project Structure",id:"project-structure",level:2},{text:"Add Integrations and deployment",id:"add-integrations-and-deployment",level:2},{text:"Development",id:"development",level:2},{text:"Preview",id:"preview",level:2},{text:"Production",id:"production",level:2},{text:"Static Site Generator (Node.js)",id:"static-site-generator-nodejs",level:2}],s=void 0;function t(i){const e=Object.assign({h1:"h1",a:"a",span:"span",ul:"ul",li:"li",hr:"hr",h2:"h2",p:"p",pre:"pre",code:"code",blockquote:"blockquote"},i.components);return n(c,{children:[n(e.h1,{id:"qwik-city-app-️",children:[n(e.a,{"aria-hidden":"true",tabindex:"-1",href:"#qwik-city-app-️",children:n(e.span,{class:"icon icon-link"})}),"Qwik City App ⚡️"]}),`
`,n(e.ul,{children:[`
`,n(e.li,{children:n(e.a,{href:"https://qwik.builder.io/",children:"Qwik Docs"})}),`
`,n(e.li,{children:n(e.a,{href:"https://qwik.builder.io/chat",children:"Discord"})}),`
`,n(e.li,{children:n(e.a,{href:"https://github.com/BuilderIO/qwik",children:"Qwik GitHub"})}),`
`,n(e.li,{children:n(e.a,{href:"https://twitter.com/QwikDev",children:"@QwikDev"})}),`
`,n(e.li,{children:n(e.a,{href:"https://vitejs.dev/",children:"Vite"})}),`
`]}),`
`,n(e.hr,{}),`
`,n(e.h2,{id:"project-structure",children:[n(e.a,{"aria-hidden":"true",tabindex:"-1",href:"#project-structure",children:n(e.span,{class:"icon icon-link"})}),"Project Structure"]}),`
`,n(e.p,{children:["This project is using Qwik with ",n(e.a,{href:"https://qwik.builder.io/qwikcity/overview/",children:"QwikCity"}),". QwikCity is just an extra set of tools on top of Qwik to make it easier to build a full site, including directory-based routing, layouts, and more."]}),`
`,n(e.p,{children:"Inside your project, you'll see the following directory structure:"}),`
`,n(e.pre,{children:n(e.code,{children:`├── public/
│   └── ...
└── src/
    ├── components/
    │   └── ...
    └── routes/
        └── ...
`})}),`
`,n(e.ul,{children:[`
`,n(e.li,{children:[`
`,n(e.p,{children:[n(e.code,{children:"src/routes"}),": Provides the directory based routing, which can include a hierarchy of ",n(e.code,{children:"layout.tsx"})," layout files, and an ",n(e.code,{children:"index.tsx"})," file as the page. Additionally, ",n(e.code,{children:"index.ts"})," files are endpoints. Please see the ",n(e.a,{href:"https://qwik.builder.io/qwikcity/routing/overview/",children:"routing docs"})," for more info."]}),`
`]}),`
`,n(e.li,{children:[`
`,n(e.p,{children:[n(e.code,{children:"src/components"}),": Recommended directory for components."]}),`
`]}),`
`,n(e.li,{children:[`
`,n(e.p,{children:[n(e.code,{children:"public"}),": Any static assets, like images, can be placed in the public directory. Please see the ",n(e.a,{href:"https://vitejs.dev/guide/assets.html#the-public-directory",children:"Vite public directory"})," for more info."]}),`
`]}),`
`]}),`
`,n(e.h2,{id:"add-integrations-and-deployment",children:[n(e.a,{"aria-hidden":"true",tabindex:"-1",href:"#add-integrations-and-deployment",children:n(e.span,{class:"icon icon-link"})}),"Add Integrations and deployment"]}),`
`,n(e.p,{children:["Use the ",n(e.code,{children:"npm run qwik add"})," command to add additional integrations. Some examples of integrations include: Cloudflare, Netlify or Express server, and the ",n(e.a,{href:"https://qwik.builder.io/qwikcity/guides/static-site-generation/",children:"Static Site Generator (SSG)"}),"."]}),`
`,n(e.pre,{children:n(e.code,{class:"language-shell",children:[n(e.span,{class:"token function",children:"npm"})," run qwik ",n(e.span,{class:"token function",children:"add"})," ",n(e.span,{class:"token comment",children:"# or `yarn qwik add`"}),`
`]})}),`
`,n(e.h2,{id:"development",children:[n(e.a,{"aria-hidden":"true",tabindex:"-1",href:"#development",children:n(e.span,{class:"icon icon-link"})}),"Development"]}),`
`,n(e.p,{children:["Development mode uses ",n(e.a,{href:"https://vitejs.dev/",children:"Vite's development server"}),". During development, the ",n(e.code,{children:"dev"})," command will server-side render (SSR) the output."]}),`
`,n(e.pre,{children:n(e.code,{class:"language-shell",children:[n(e.span,{class:"token function",children:"npm"})," start ",n(e.span,{class:"token comment",children:"# or `yarn start`"}),`
`]})}),`
`,n(e.blockquote,{children:[`
`,n(e.p,{children:["Note: during dev mode, Vite may request a significant number of ",n(e.code,{children:".js"})," files. This does not represent a Qwik production build."]}),`
`]}),`
`,n(e.h2,{id:"preview",children:[n(e.a,{"aria-hidden":"true",tabindex:"-1",href:"#preview",children:n(e.span,{class:"icon icon-link"})}),"Preview"]}),`
`,n(e.p,{children:["The preview command will create a production build of the client modules, a production build of ",n(e.code,{children:"src/entry.preview.tsx"}),", and run a local server. The preview server is only for convenience to locally preview a production build, and it should not be used as a production server."]}),`
`,n(e.pre,{children:n(e.code,{class:"language-shell",children:[n(e.span,{class:"token function",children:"npm"})," run preview ",n(e.span,{class:"token comment",children:"# or `yarn preview`"}),`
`]})}),`
`,n(e.h2,{id:"production",children:[n(e.a,{"aria-hidden":"true",tabindex:"-1",href:"#production",children:n(e.span,{class:"icon icon-link"})}),"Production"]}),`
`,n(e.p,{children:"The production build will generate client and server modules by running both client and server build commands. Additionally, the build command will use Typescript to run a type check on the source code."}),`
`,n(e.pre,{children:n(e.code,{class:"language-shell",children:[n(e.span,{class:"token function",children:"npm"})," run build ",n(e.span,{class:"token comment",children:"# or `yarn build`"}),`
`]})}),`
`,n(e.h2,{id:"static-site-generator-nodejs",children:[n(e.a,{"aria-hidden":"true",tabindex:"-1",href:"#static-site-generator-nodejs",children:n(e.span,{class:"icon icon-link"})}),"Static Site Generator (Node.js)"]}),`
`,n(e.pre,{children:n(e.code,{children:`npm run build.server
`})})]})}function l(i={}){const{wrapper:e}=i.components||{};return e?n(e,Object.assign({},i,{children:n(t,i)})):t(i)}const h=()=>r(d,{children:r(l,{},3,null)},3,"_L1VLGtM");export{h as default,s as frontmatter,a as headings};
