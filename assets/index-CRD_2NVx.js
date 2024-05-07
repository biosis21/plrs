import{R as y,r as A,j as e,u as ue,a as se,i as xe,b as W,t as Z}from"./index-CWHtcSx4.js";let pe={data:""},he=t=>typeof window=="object"?((t?t.querySelector("#_goober"):window._goober)||Object.assign((t||document.head).appendChild(document.createElement("style")),{innerHTML:" ",id:"_goober"})).firstChild:t||pe,ge=/(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,me=/\/\*[^]*?\*\/|  +/g,Q=/\n+/g,B=(t,r)=>{let s="",i="",x="";for(let a in t){let u=t[a];a[0]=="@"?a[1]=="i"?s=a+" "+u+";":i+=a[1]=="f"?B(u,a):a+"{"+B(u,a[1]=="k"?"":r)+"}":typeof u=="object"?i+=B(u,r?r.replace(/([^,])+/g,d=>a.replace(/(^:.*)|([^,])+/g,f=>/&/.test(f)?f.replace(/&/g,d):d?d+" "+f:f)):a):u!=null&&(a=/^--/.test(a)?a:a.replace(/[A-Z]/g,"-$&").toLowerCase(),x+=B.p?B.p(a,u):a+":"+u+";")}return s+(r&&x?r+"{"+x+"}":x)+i},S={},re=t=>{if(typeof t=="object"){let r="";for(let s in t)r+=s+re(t[s]);return r}return t},ve=(t,r,s,i,x)=>{let a=re(t),u=S[a]||(S[a]=(f=>{let l=0,c=11;for(;l<f.length;)c=101*c+f.charCodeAt(l++)>>>0;return"go"+c})(a));if(!S[u]){let f=a!==t?t:(l=>{let c,h,g=[{}];for(;c=ge.exec(l.replace(me,""));)c[4]?g.shift():c[3]?(h=c[3].replace(Q," ").trim(),g.unshift(g[0][h]=g[0][h]||{})):g[0][c[1]]=c[2].replace(Q," ").trim();return g[0]})(t);S[u]=B(x?{["@keyframes "+u]:f}:f,s?"":"."+u)}let d=s&&S.g?S.g:null;return s&&(S.g=S[u]),((f,l,c,h)=>{h?l.data=l.data.replace(h,f):l.data.indexOf(f)===-1&&(l.data=c?f+l.data:l.data+f)})(S[u],r,i,d),u},je=(t,r,s)=>t.reduce((i,x,a)=>{let u=r[a];if(u&&u.call){let d=u(s),f=d&&d.props&&d.props.className||/^go/.test(d)&&d;u=f?"."+f:d&&typeof d=="object"?d.props?"":B(d,""):d===!1?"":d}return i+x+(u??"")},"");function n(t){let r=this||{},s=t.call?t(r.p):t;return ve(s.unshift?s.raw?je(s,[].slice.call(arguments,1),r.p):s.reduce((i,x)=>Object.assign(i,x&&x.call?x(r.p):x),{}):s,he(r.target),r.g,r.o,r.k)}n.bind({g:1});n.bind({k:1});function ne(t){var r,s,i="";if(typeof t=="string"||typeof t=="number")i+=t;else if(typeof t=="object")if(Array.isArray(t)){var x=t.length;for(r=0;r<x;r++)t[r]&&(s=ne(t[r]))&&(i&&(i+=" "),i+=s)}else for(s in t)t[s]&&(i&&(i+=" "),i+=s);return i}function b(){for(var t,r,s=0,i="",x=arguments.length;s<x;s++)(t=arguments[s])&&(r=ne(t))&&(i&&(i+=" "),i+=r);return i}const ye=t=>{try{const r=localStorage.getItem(t);return typeof r=="string"?JSON.parse(r):void 0}catch{return}};function G(t,r){const[s,i]=y.useState();y.useEffect(()=>{const a=ye(t);i(typeof a>"u"||a===null?typeof r=="function"?r():r:a)},[r,t]);const x=y.useCallback(a=>{i(u=>{let d=a;typeof a=="function"&&(d=a(u));try{localStorage.setItem(t,JSON.stringify(d))}catch{}return d})},[t]);return[s,x]}const $e=typeof window>"u";function _(t){return t.status==="success"&&t.isFetching?"blue":t.status==="pending"?"yellow":t.status==="error"?"red":t.status==="success"?"green":"gray"}function be(t,r){const s=t.find(i=>i.routeId===r.id);return s?_(s):"gray"}function oe(){const t=y.useRef(!1),r=y.useCallback(()=>t.current,[]);return y[$e?"useEffect":"useLayoutEffect"](()=>(t.current=!0,()=>{t.current=!1}),[]),r}const ke=t=>{const r=Object.getOwnPropertyNames(Object(t)),s=typeof t=="bigint"?`${t.toString()}n`:t;try{return JSON.stringify(s,r)}catch{return"unable to stringify"}};function X(t){const r=oe(),[s,i]=y.useState(t),x=y.useCallback(a=>{Ce(()=>{r()&&i(a)})},[r]);return[s,x]}function Ce(t){Promise.resolve().then(t).catch(r=>setTimeout(()=>{throw r}))}function we(t,r=[s=>s]){return t.map((s,i)=>[s,i]).sort(([s,i],[x,a])=>{for(const u of r){const d=u(s),f=u(x);if(typeof d>"u"){if(typeof f>"u")continue;return 1}if(d!==f)return d>f?1:-1}return i-a}).map(([s])=>s)}const j={colors:{inherit:"inherit",current:"currentColor",transparent:"transparent",black:"#000000",white:"#ffffff",neutral:{50:"#f9fafb",100:"#f2f4f7",200:"#eaecf0",300:"#d0d5dd",400:"#98a2b3",500:"#667085",600:"#475467",700:"#344054",800:"#1d2939",900:"#101828"},darkGray:{50:"#525c7a",100:"#49536e",200:"#414962",300:"#394056",400:"#313749",500:"#292e3d",600:"#212530",700:"#191c24",800:"#111318",900:"#0b0d10"},gray:{50:"#f9fafb",100:"#f2f4f7",200:"#eaecf0",300:"#d0d5dd",400:"#98a2b3",500:"#667085",600:"#475467",700:"#344054",800:"#1d2939",900:"#101828"},blue:{25:"#F5FAFF",50:"#EFF8FF",100:"#D1E9FF",200:"#B2DDFF",300:"#84CAFF",400:"#53B1FD",500:"#2E90FA",600:"#1570EF",700:"#175CD3",800:"#1849A9",900:"#194185"},green:{25:"#F6FEF9",50:"#ECFDF3",100:"#D1FADF",200:"#A6F4C5",300:"#6CE9A6",400:"#32D583",500:"#12B76A",600:"#039855",700:"#027A48",800:"#05603A",900:"#054F31"},red:{50:"#fef2f2",100:"#fee2e2",200:"#fecaca",300:"#fca5a5",400:"#f87171",500:"#ef4444",600:"#dc2626",700:"#b91c1c",800:"#991b1b",900:"#7f1d1d",950:"#450a0a"},yellow:{25:"#FFFCF5",50:"#FFFAEB",100:"#FEF0C7",200:"#FEDF89",300:"#FEC84B",400:"#FDB022",500:"#F79009",600:"#DC6803",700:"#B54708",800:"#93370D",900:"#7A2E0E"},purple:{25:"#FAFAFF",50:"#F4F3FF",100:"#EBE9FE",200:"#D9D6FE",300:"#BDB4FE",400:"#9B8AFB",500:"#7A5AF8",600:"#6938EF",700:"#5925DC",800:"#4A1FB8",900:"#3E1C96"},teal:{25:"#F6FEFC",50:"#F0FDF9",100:"#CCFBEF",200:"#99F6E0",300:"#5FE9D0",400:"#2ED3B7",500:"#15B79E",600:"#0E9384",700:"#107569",800:"#125D56",900:"#134E48"},pink:{25:"#fdf2f8",50:"#fce7f3",100:"#fbcfe8",200:"#f9a8d4",300:"#f472b6",400:"#ec4899",500:"#db2777",600:"#be185d",700:"#9d174d",800:"#831843",900:"#500724"},cyan:{25:"#ecfeff",50:"#cffafe",100:"#a5f3fc",200:"#67e8f9",300:"#22d3ee",400:"#06b6d4",500:"#0891b2",600:"#0e7490",700:"#155e75",800:"#164e63",900:"#083344"}},alpha:{100:"ff",90:"e5",80:"cc",70:"b3",60:"99",50:"80",40:"66",30:"4d",20:"33",10:"1a",0:"00"},font:{size:{"2xs":"calc(var(--tsrd-font-size) * 0.625)",xs:"calc(var(--tsrd-font-size) * 0.75)",sm:"calc(var(--tsrd-font-size) * 0.875)",md:"var(--tsrd-font-size)",lg:"calc(var(--tsrd-font-size) * 1.125)",xl:"calc(var(--tsrd-font-size) * 1.25)","2xl":"calc(var(--tsrd-font-size) * 1.5)","3xl":"calc(var(--tsrd-font-size) * 1.875)","4xl":"calc(var(--tsrd-font-size) * 2.25)","5xl":"calc(var(--tsrd-font-size) * 3)","6xl":"calc(var(--tsrd-font-size) * 3.75)","7xl":"calc(var(--tsrd-font-size) * 4.5)","8xl":"calc(var(--tsrd-font-size) * 6)","9xl":"calc(var(--tsrd-font-size) * 8)"},lineHeight:{"3xs":"calc(var(--tsrd-font-size) * 0.75)","2xs":"calc(var(--tsrd-font-size) * 0.875)",xs:"calc(var(--tsrd-font-size) * 1)",sm:"calc(var(--tsrd-font-size) * 1.25)",md:"calc(var(--tsrd-font-size) * 1.5)",lg:"calc(var(--tsrd-font-size) * 1.75)",xl:"calc(var(--tsrd-font-size) * 2)","2xl":"calc(var(--tsrd-font-size) * 2.25)","3xl":"calc(var(--tsrd-font-size) * 2.5)","4xl":"calc(var(--tsrd-font-size) * 2.75)","5xl":"calc(var(--tsrd-font-size) * 3)","6xl":"calc(var(--tsrd-font-size) * 3.25)","7xl":"calc(var(--tsrd-font-size) * 3.5)","8xl":"calc(var(--tsrd-font-size) * 3.75)","9xl":"calc(var(--tsrd-font-size) * 4)"},weight:{thin:"100",extralight:"200",light:"300",normal:"400",medium:"500",semibold:"600",bold:"700",extrabold:"800",black:"900"},fontFamily:{sans:"ui-sans-serif, Inter, system-ui, sans-serif, sans-serif",mono:"ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace"}},breakpoints:{xs:"320px",sm:"640px",md:"768px",lg:"1024px",xl:"1280px","2xl":"1536px"},border:{radius:{none:"0px",xs:"calc(var(--tsrd-font-size) * 0.125)",sm:"calc(var(--tsrd-font-size) * 0.25)",md:"calc(var(--tsrd-font-size) * 0.375)",lg:"calc(var(--tsrd-font-size) * 0.5)",xl:"calc(var(--tsrd-font-size) * 0.75)","2xl":"calc(var(--tsrd-font-size) * 1)","3xl":"calc(var(--tsrd-font-size) * 1.5)",full:"9999px"}},size:{0:"0px",.25:"calc(var(--tsrd-font-size) * 0.0625)",.5:"calc(var(--tsrd-font-size) * 0.125)",1:"calc(var(--tsrd-font-size) * 0.25)",1.5:"calc(var(--tsrd-font-size) * 0.375)",2:"calc(var(--tsrd-font-size) * 0.5)",2.5:"calc(var(--tsrd-font-size) * 0.625)",3:"calc(var(--tsrd-font-size) * 0.75)",3.5:"calc(var(--tsrd-font-size) * 0.875)",4:"calc(var(--tsrd-font-size) * 1)",4.5:"calc(var(--tsrd-font-size) * 1.125)",5:"calc(var(--tsrd-font-size) * 1.25)",5.5:"calc(var(--tsrd-font-size) * 1.375)",6:"calc(var(--tsrd-font-size) * 1.5)",6.5:"calc(var(--tsrd-font-size) * 1.625)",7:"calc(var(--tsrd-font-size) * 1.75)",8:"calc(var(--tsrd-font-size) * 2)",9:"calc(var(--tsrd-font-size) * 2.25)",10:"calc(var(--tsrd-font-size) * 2.5)",11:"calc(var(--tsrd-font-size) * 2.75)",12:"calc(var(--tsrd-font-size) * 3)",14:"calc(var(--tsrd-font-size) * 3.5)",16:"calc(var(--tsrd-font-size) * 4)",20:"calc(var(--tsrd-font-size) * 5)",24:"calc(var(--tsrd-font-size) * 6)",28:"calc(var(--tsrd-font-size) * 7)",32:"calc(var(--tsrd-font-size) * 8)",36:"calc(var(--tsrd-font-size) * 9)",40:"calc(var(--tsrd-font-size) * 10)",44:"calc(var(--tsrd-font-size) * 11)",48:"calc(var(--tsrd-font-size) * 12)",52:"calc(var(--tsrd-font-size) * 13)",56:"calc(var(--tsrd-font-size) * 14)",60:"calc(var(--tsrd-font-size) * 15)",64:"calc(var(--tsrd-font-size) * 16)",72:"calc(var(--tsrd-font-size) * 18)",80:"calc(var(--tsrd-font-size) * 20)",96:"calc(var(--tsrd-font-size) * 24)"},shadow:{xs:(t="rgb(0 0 0 / 0.1)")=>"0 1px 2px 0 rgb(0 0 0 / 0.05)",sm:(t="rgb(0 0 0 / 0.1)")=>`0 1px 3px 0 ${t}, 0 1px 2px -1px ${t}`,md:(t="rgb(0 0 0 / 0.1)")=>`0 4px 6px -1px ${t}, 0 2px 4px -2px ${t}`,lg:(t="rgb(0 0 0 / 0.1)")=>`0 10px 15px -3px ${t}, 0 4px 6px -4px ${t}`,xl:(t="rgb(0 0 0 / 0.1)")=>`0 20px 25px -5px ${t}, 0 8px 10px -6px ${t}`,"2xl":(t="rgb(0 0 0 / 0.25)")=>`0 25px 50px -12px ${t}`,inner:(t="rgb(0 0 0 / 0.05)")=>`inset 0 2px 4px 0 ${t}`,none:()=>"none"},zIndices:{hide:-1,auto:"auto",base:0,docked:10,dropdown:1e3,sticky:1100,banner:1200,overlay:1300,modal:1400,popover:1500,skipLink:1600,toast:1700,tooltip:1800}},ee=({expanded:t,style:r={}})=>e.jsx("span",{className:F().expander,children:e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"12",fill:"none",viewBox:"0 0 24 24",className:b(F().expanderIcon(t)),children:e.jsx("path",{stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M9 18l6-6-6-6"})})});function ze(t,r){if(r<1)return[];let s=0;const i=[];for(;s<t.length;)i.push(t.slice(s,s+r)),s=s+r;return i}const Fe=({handleEntry:t,label:r,value:s,subEntries:i=[],subEntryPages:x=[],type:a,expanded:u=!1,toggleExpanded:d,pageSize:f,renderer:l})=>{const[c,h]=A.useState([]),[g,v]=A.useState(void 0),m=()=>{v(s())};return e.jsx("div",{className:F().entry,children:x.length?e.jsxs(e.Fragment,{children:[e.jsxs("button",{className:F().expandButton,onClick:()=>d(),children:[e.jsx(ee,{expanded:u}),r,e.jsxs("span",{className:F().info,children:[String(a).toLowerCase()==="iterable"?"(Iterable) ":"",i.length," ",i.length>1?"items":"item"]})]}),u?x.length===1?e.jsx("div",{className:F().subEntries,children:i.map((w,C)=>t(w))}):e.jsx("div",{className:F().subEntries,children:x.map((w,C)=>e.jsx("div",{children:e.jsxs("div",{className:F().entry,children:[e.jsxs("button",{className:b(F().labelButton,"labelButton"),onClick:()=>h(k=>k.includes(C)?k.filter(N=>N!==C):[...k,C]),children:[e.jsx(ee,{expanded:c.includes(C)})," ","[",C*f," ..."," ",C*f+f-1,"]"]}),c.includes(C)?e.jsx("div",{className:F().subEntries,children:w.map(k=>t(k))}):null]})},C))}):null]}):a==="function"?e.jsx(e.Fragment,{children:e.jsx(M,{renderer:l,label:e.jsxs("button",{onClick:m,className:F().refreshValueBtn,children:[e.jsx("span",{children:r})," 🔄"," "]}),value:g,defaultExpanded:{}})}):e.jsxs(e.Fragment,{children:[e.jsxs("span",{children:[r,":"]})," ",e.jsx("span",{className:F().value,children:ke(s)})]})})};function Re(t){return Symbol.iterator in t}function M({value:t,defaultExpanded:r,renderer:s=Fe,pageSize:i=100,filterSubEntries:x,...a}){const[u,d]=A.useState(!!r),f=A.useCallback(()=>d(v=>!v),[]);let l=typeof t,c=[];const h=v=>{const m=r===!0?{[v.label]:!0}:r==null?void 0:r[v.label];return{...v,defaultExpanded:m}};Array.isArray(t)?(l="array",c=t.map((v,m)=>h({label:m.toString(),value:v}))):t!==null&&typeof t=="object"&&Re(t)&&typeof t[Symbol.iterator]=="function"?(l="Iterable",c=Array.from(t,(v,m)=>h({label:m.toString(),value:v}))):typeof t=="object"&&t!==null&&(l="object",c=Object.entries(t).map(([v,m])=>h({label:v,value:m}))),c=x?x(c):c;const g=ze(c,i);return s({handleEntry:v=>e.jsx(M,{value:t,renderer:s,filterSubEntries:x,...a,...v},v.label),type:l,subEntries:c,subEntryPages:g,value:t,expanded:u,toggleExpanded:f,pageSize:i,...a})}const Se=()=>{const{colors:t,font:r,size:s,alpha:i,shadow:x,border:a}=j,{fontFamily:u,lineHeight:d,size:f}=r;return{entry:n`
      font-family: ${u.mono};
      font-size: ${f.xs};
      line-height: ${d.sm};
      outline: none;
      word-break: break-word;
    `,labelButton:n`
      cursor: pointer;
      color: inherit;
      font: inherit;
      outline: inherit;
      background: transparent;
      border: none;
      padding: 0;
    `,expander:n`
      display: inline-flex;
      align-items: center;
      justify-content: center;
      width: ${s[3]};
      height: ${s[3]};
      padding-left: 3px;
      box-sizing: content-box;
    `,expanderIcon:l=>l?n`
          transform: rotate(90deg);
          transition: transform 0.1s ease;
        `:n`
        transform: rotate(0deg);
        transition: transform 0.1s ease;
      `,expandButton:n`
      display: flex;
      gap: ${s[1]};
      align-items: center;
      cursor: pointer;
      color: inherit;
      font: inherit;
      outline: inherit;
      background: transparent;
      border: none;
      padding: 0;
    `,value:n`
      color: ${t.purple[400]};
    `,subEntries:n`
      margin-left: ${s[2]};
      padding-left: ${s[2]};
      border-left: 2px solid ${t.darkGray[400]};
    `,info:n`
      color: ${t.gray[500]};
      font-size: ${f["2xs"]};
      padding-left: ${s[1]};
    `,refreshValueBtn:n`
      appearance: none;
      border: 0;
      cursor: pointer;
      background: transparent;
      color: inherit;
      padding: 0;
      font-family: ${u.mono};
      font-size: ${f.xs};
    `}};let I=null;function F(){return I||(I=Se(),I)}function te(){const t=y.useId();return e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",enableBackground:"new 0 0 634 633",viewBox:"0 0 634 633",children:e.jsxs("g",{transform:"translate(1)",children:[e.jsxs("linearGradient",{id:`a-${t}`,x1:"-641.486",x2:"-641.486",y1:"856.648",y2:"855.931",gradientTransform:"matrix(633 0 0 -633 406377 542258)",gradientUnits:"userSpaceOnUse",children:[e.jsx("stop",{offset:"0",stopColor:"#6bdaff"}),e.jsx("stop",{offset:"0.319",stopColor:"#f9ffb5"}),e.jsx("stop",{offset:"0.706",stopColor:"#ffa770"}),e.jsx("stop",{offset:"1",stopColor:"#ff7373"})]}),e.jsx("circle",{cx:"316.5",cy:"316.5",r:"316.5",fill:`url(#a-${t})`,fillRule:"evenodd",clipRule:"evenodd"}),e.jsx("defs",{children:e.jsx("filter",{id:`b-${t}`,width:"454",height:"396.9",x:"-137.5",y:"412",filterUnits:"userSpaceOnUse",children:e.jsx("feColorMatrix",{values:"1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0"})})}),e.jsx("mask",{id:`c-${t}`,width:"454",height:"396.9",x:"-137.5",y:"412",maskUnits:"userSpaceOnUse",children:e.jsx("g",{filter:`url(#b-${t})`,children:e.jsx("circle",{cx:"316.5",cy:"316.5",r:"316.5",fill:"#FFF",fillRule:"evenodd",clipRule:"evenodd"})})}),e.jsx("ellipse",{cx:"89.5",cy:"610.5",fill:"#015064",fillRule:"evenodd",stroke:"#00CFE2",strokeWidth:"25",clipRule:"evenodd",mask:`url(#c-${t})`,rx:"214.5",ry:"186"}),e.jsx("defs",{children:e.jsx("filter",{id:`d-${t}`,width:"454",height:"396.9",x:"316.5",y:"412",filterUnits:"userSpaceOnUse",children:e.jsx("feColorMatrix",{values:"1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0"})})}),e.jsx("mask",{id:`e-${t}`,width:"454",height:"396.9",x:"316.5",y:"412",maskUnits:"userSpaceOnUse",children:e.jsx("g",{filter:`url(#d-${t})`,children:e.jsx("circle",{cx:"316.5",cy:"316.5",r:"316.5",fill:"#FFF",fillRule:"evenodd",clipRule:"evenodd"})})}),e.jsx("ellipse",{cx:"543.5",cy:"610.5",fill:"#015064",fillRule:"evenodd",stroke:"#00CFE2",strokeWidth:"25",clipRule:"evenodd",mask:`url(#e-${t})`,rx:"214.5",ry:"186"}),e.jsx("defs",{children:e.jsx("filter",{id:`f-${t}`,width:"454",height:"396.9",x:"-137.5",y:"450",filterUnits:"userSpaceOnUse",children:e.jsx("feColorMatrix",{values:"1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0"})})}),e.jsx("mask",{id:`g-${t}`,width:"454",height:"396.9",x:"-137.5",y:"450",maskUnits:"userSpaceOnUse",children:e.jsx("g",{filter:`url(#f-${t})`,children:e.jsx("circle",{cx:"316.5",cy:"316.5",r:"316.5",fill:"#FFF",fillRule:"evenodd",clipRule:"evenodd"})})}),e.jsx("ellipse",{cx:"89.5",cy:"648.5",fill:"#015064",fillRule:"evenodd",stroke:"#00A8B8",strokeWidth:"25",clipRule:"evenodd",mask:`url(#g-${t})`,rx:"214.5",ry:"186"}),e.jsx("defs",{children:e.jsx("filter",{id:`h-${t}`,width:"454",height:"396.9",x:"316.5",y:"450",filterUnits:"userSpaceOnUse",children:e.jsx("feColorMatrix",{values:"1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0"})})}),e.jsx("mask",{id:`i-${t}`,width:"454",height:"396.9",x:"316.5",y:"450",maskUnits:"userSpaceOnUse",children:e.jsx("g",{filter:`url(#h-${t})`,children:e.jsx("circle",{cx:"316.5",cy:"316.5",r:"316.5",fill:"#FFF",fillRule:"evenodd",clipRule:"evenodd"})})}),e.jsx("ellipse",{cx:"543.5",cy:"648.5",fill:"#015064",fillRule:"evenodd",stroke:"#00A8B8",strokeWidth:"25",clipRule:"evenodd",mask:`url(#i-${t})`,rx:"214.5",ry:"186"}),e.jsx("defs",{children:e.jsx("filter",{id:`j-${t}`,width:"454",height:"396.9",x:"-137.5",y:"486",filterUnits:"userSpaceOnUse",children:e.jsx("feColorMatrix",{values:"1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0"})})}),e.jsx("mask",{id:`k-${t}`,width:"454",height:"396.9",x:"-137.5",y:"486",maskUnits:"userSpaceOnUse",children:e.jsx("g",{filter:`url(#j-${t})`,children:e.jsx("circle",{cx:"316.5",cy:"316.5",r:"316.5",fill:"#FFF",fillRule:"evenodd",clipRule:"evenodd"})})}),e.jsx("ellipse",{cx:"89.5",cy:"684.5",fill:"#015064",fillRule:"evenodd",stroke:"#007782",strokeWidth:"25",clipRule:"evenodd",mask:`url(#k-${t})`,rx:"214.5",ry:"186"}),e.jsx("defs",{children:e.jsx("filter",{id:`l-${t}`,width:"454",height:"396.9",x:"316.5",y:"486",filterUnits:"userSpaceOnUse",children:e.jsx("feColorMatrix",{values:"1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0"})})}),e.jsx("mask",{id:`m-${t}`,width:"454",height:"396.9",x:"316.5",y:"486",maskUnits:"userSpaceOnUse",children:e.jsx("g",{filter:`url(#l-${t})`,children:e.jsx("circle",{cx:"316.5",cy:"316.5",r:"316.5",fill:"#FFF",fillRule:"evenodd",clipRule:"evenodd"})})}),e.jsx("ellipse",{cx:"543.5",cy:"684.5",fill:"#015064",fillRule:"evenodd",stroke:"#007782",strokeWidth:"25",clipRule:"evenodd",mask:`url(#m-${t})`,rx:"214.5",ry:"186"}),e.jsx("defs",{children:e.jsx("filter",{id:`n-${t}`,width:"176.9",height:"129.3",x:"272.2",y:"308",filterUnits:"userSpaceOnUse",children:e.jsx("feColorMatrix",{values:"1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0"})})}),e.jsx("mask",{id:`o-${t}`,width:"176.9",height:"129.3",x:"272.2",y:"308",maskUnits:"userSpaceOnUse",children:e.jsx("g",{filter:`url(#n-${t})`,children:e.jsx("circle",{cx:"316.5",cy:"316.5",r:"316.5",fill:"#FFF",fillRule:"evenodd",clipRule:"evenodd"})})}),e.jsxs("g",{mask:`url(#o-${t})`,children:[e.jsx("path",{fill:"none",stroke:"#000",strokeLinecap:"round",strokeLinejoin:"bevel",strokeWidth:"11",d:"M436 403.2l-5 28.6m-140-90.3l-10.9 62m52.8-19.4l-4.3 27.1"}),e.jsxs("linearGradient",{id:`p-${t}`,x1:"-645.656",x2:"-646.499",y1:"854.878",y2:"854.788",gradientTransform:"matrix(-184.159 -32.4722 11.4608 -64.9973 -128419.844 34938.836)",gradientUnits:"userSpaceOnUse",children:[e.jsx("stop",{offset:"0",stopColor:"#ee2700"}),e.jsx("stop",{offset:"1",stopColor:"#ff008e"})]}),e.jsx("path",{fill:`url(#p-${t})`,fillRule:"evenodd",d:"M344.1 363l97.7 17.2c5.8 2.1 8.2 6.2 7.1 12.1-1 5.9-4.7 9.2-11 9.9l-106-18.7-57.5-59.2c-3.2-4.8-2.9-9.1.8-12.8 3.7-3.7 8.3-4.4 13.7-2.1l55.2 53.6z",clipRule:"evenodd"}),e.jsx("path",{fill:"#D8D8D8",fillRule:"evenodd",stroke:"#FFF",strokeLinecap:"round",strokeLinejoin:"bevel",strokeWidth:"7",d:"M428.3 384.5l.9-6.5m-33.9 1.5l.9-6.5m-34 .5l.9-6.1m-38.9-16.1l4.2-3.9m-25.2-16.1l4.2-3.9",clipRule:"evenodd"})]}),e.jsx("defs",{children:e.jsx("filter",{id:`q-${t}`,width:"280.6",height:"317.4",x:"73.2",y:"113.9",filterUnits:"userSpaceOnUse",children:e.jsx("feColorMatrix",{values:"1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0"})})}),e.jsx("mask",{id:`r-${t}`,width:"280.6",height:"317.4",x:"73.2",y:"113.9",maskUnits:"userSpaceOnUse",children:e.jsx("g",{filter:`url(#q-${t})`,children:e.jsx("circle",{cx:"316.5",cy:"316.5",r:"316.5",fill:"#FFF",fillRule:"evenodd",clipRule:"evenodd"})})}),e.jsxs("g",{mask:`url(#r-${t})`,children:[e.jsxs("linearGradient",{id:`s-${t}`,x1:"-646.8",x2:"-646.8",y1:"854.844",y2:"853.844",gradientTransform:"matrix(-100.1751 48.8587 -97.9753 -200.879 19124.773 203538.61)",gradientUnits:"userSpaceOnUse",children:[e.jsx("stop",{offset:"0",stopColor:"#a17500"}),e.jsx("stop",{offset:"1",stopColor:"#5d2100"})]}),e.jsx("path",{fill:`url(#s-${t})`,fillRule:"evenodd",d:"M192.3 203c8.1 37.3 14 73.6 17.8 109.1 3.8 35.4 2.8 75.2-2.9 119.2l61.2-16.7c-15.6-59-25.2-97.9-28.6-116.6-3.4-18.7-10.8-51.8-22.2-99.6l-25.3 4.6",clipRule:"evenodd"}),e.jsxs("linearGradient",{id:`t-${t}`,x1:"-635.467",x2:"-635.467",y1:"852.115",y2:"851.115",gradientTransform:"matrix(92.6873 4.8575 2.0257 -38.6535 57323.695 36176.047)",gradientUnits:"userSpaceOnUse",children:[e.jsx("stop",{offset:"0",stopColor:"#2f8a00"}),e.jsx("stop",{offset:"1",stopColor:"#90ff57"})]}),e.jsx("path",{fill:`url(#t-${t})`,fillRule:"evenodd",stroke:"#2F8A00",strokeWidth:"13",d:"M195 183.9s-12.6-22.1-36.5-29.9c-15.9-5.2-34.4-1.5-55.5 11.1 15.9 14.3 29.5 22.6 40.7 24.9 16.8 3.6 51.3-6.1 51.3-6.1z",clipRule:"evenodd"}),e.jsxs("linearGradient",{id:`u-${t}`,x1:"-636.573",x2:"-636.573",y1:"855.444",y2:"854.444",gradientTransform:"matrix(109.9945 5.7646 6.3597 -121.3507 64719.133 107659.336)",gradientUnits:"userSpaceOnUse",children:[e.jsx("stop",{offset:"0",stopColor:"#2f8a00"}),e.jsx("stop",{offset:"1",stopColor:"#90ff57"})]}),e.jsx("path",{fill:`url(#u-${t})`,fillRule:"evenodd",stroke:"#2F8A00",strokeWidth:"13",d:"M194.9 184.5s-47.5-8.5-83.2 15.7c-23.8 16.2-34.3 49.3-31.6 99.3 30.3-27.8 52.1-48.5 65.2-61.9 19.8-20 49.6-53.1 49.6-53.1z",clipRule:"evenodd"}),e.jsxs("linearGradient",{id:`v-${t}`,x1:"-632.145",x2:"-632.145",y1:"854.174",y2:"853.174",gradientTransform:"matrix(62.9558 3.2994 3.5021 -66.8246 37035.367 59284.227)",gradientUnits:"userSpaceOnUse",children:[e.jsx("stop",{offset:"0",stopColor:"#2f8a00"}),e.jsx("stop",{offset:"1",stopColor:"#90ff57"})]}),e.jsx("path",{fill:`url(#v-${t})`,fillRule:"evenodd",stroke:"#2F8A00",strokeWidth:"13",d:"M195 183.9c-.8-21.9 6-38 20.6-48.2 14.6-10.2 29.8-15.3 45.5-15.3-6.1 21.4-14.5 35.8-25.2 43.4-10.7 7.5-24.4 14.2-40.9 20.1z",clipRule:"evenodd"}),e.jsxs("linearGradient",{id:`w-${t}`,x1:"-638.224",x2:"-638.224",y1:"853.801",y2:"852.801",gradientTransform:"matrix(152.4666 7.9904 3.0934 -59.0251 94939.86 55646.855)",gradientUnits:"userSpaceOnUse",children:[e.jsx("stop",{offset:"0",stopColor:"#2f8a00"}),e.jsx("stop",{offset:"1",stopColor:"#90ff57"})]}),e.jsx("path",{fill:`url(#w-${t})`,fillRule:"evenodd",stroke:"#2F8A00",strokeWidth:"13",d:"M194.9 184.5c31.9-30 64.1-39.7 96.7-29 32.6 10.7 50.8 30.4 54.6 59.1-35.2-5.5-60.4-9.6-75.8-12.1-15.3-2.6-40.5-8.6-75.5-18z",clipRule:"evenodd"}),e.jsxs("linearGradient",{id:`x-${t}`,x1:"-637.723",x2:"-637.723",y1:"855.103",y2:"854.103",gradientTransform:"matrix(136.467 7.1519 5.2165 -99.5377 82830.875 89859.578)",gradientUnits:"userSpaceOnUse",children:[e.jsx("stop",{offset:"0",stopColor:"#2f8a00"}),e.jsx("stop",{offset:"1",stopColor:"#90ff57"})]}),e.jsx("path",{fill:`url(#x-${t})`,fillRule:"evenodd",stroke:"#2F8A00",strokeWidth:"13",d:"M194.9 184.5c35.8-7.6 65.6-.2 89.2 22 23.6 22.2 37.7 49 42.3 80.3-39.8-9.7-68.3-23.8-85.5-42.4-17.2-18.5-32.5-38.5-46-59.9z",clipRule:"evenodd"}),e.jsxs("linearGradient",{id:`y-${t}`,x1:"-631.79",x2:"-631.79",y1:"855.872",y2:"854.872",gradientTransform:"matrix(60.8683 3.19 8.7771 -167.4773 31110.818 145537.61)",gradientUnits:"userSpaceOnUse",children:[e.jsx("stop",{offset:"0",stopColor:"#2f8a00"}),e.jsx("stop",{offset:"1",stopColor:"#90ff57"})]}),e.jsx("path",{fill:`url(#y-${t})`,fillRule:"evenodd",stroke:"#2F8A00",strokeWidth:"13",d:"M194.9 184.5c-33.6 13.8-53.6 35.7-60.1 65.6-6.5 29.9-3.6 63.1 8.7 99.6 27.4-40.3 43.2-69.6 47.4-88 4.2-18.3 5.5-44.1 4-77.2z",clipRule:"evenodd"}),e.jsx("path",{fill:"none",stroke:"#2F8A00",strokeLinecap:"round",strokeWidth:"8",d:"M196.5 182.3c-14.8 21.6-25.1 41.4-30.8 59.4-5.7 18-9.4 33-11.1 45.1"}),e.jsx("path",{fill:"none",stroke:"#2F8A00",strokeLinecap:"round",strokeWidth:"8",d:"M194.8 185.7c-24.4 1.7-43.8 9-58.1 21.8-14.3 12.8-24.7 25.4-31.3 37.8m99.1-68.9c29.7-6.7 52-8.4 67-5 15 3.4 26.9 8.7 35.8 15.9m-110.8-5.9c20.3 9.9 38.2 20.5 53.9 31.9 15.7 11.4 27.4 22.1 35.1 32"})]}),e.jsx("defs",{children:e.jsx("filter",{id:`z-${t}`,width:"532",height:"633",x:"50.5",y:"399",filterUnits:"userSpaceOnUse",children:e.jsx("feColorMatrix",{values:"1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0"})})}),e.jsx("mask",{id:`A-${t}`,width:"532",height:"633",x:"50.5",y:"399",maskUnits:"userSpaceOnUse",children:e.jsx("g",{filter:`url(#z-${t})`,children:e.jsx("circle",{cx:"316.5",cy:"316.5",r:"316.5",fill:"#FFF",fillRule:"evenodd",clipRule:"evenodd"})})}),e.jsxs("linearGradient",{id:`B-${t}`,x1:"-641.104",x2:"-641.278",y1:"856.577",y2:"856.183",gradientTransform:"matrix(532 0 0 -633 341484.5 542657)",gradientUnits:"userSpaceOnUse",children:[e.jsx("stop",{offset:"0",stopColor:"#fff400"}),e.jsx("stop",{offset:"1",stopColor:"#3c8700"})]}),e.jsx("ellipse",{cx:"316.5",cy:"715.5",fill:`url(#B-${t})`,fillRule:"evenodd",clipRule:"evenodd",mask:`url(#A-${t})`,rx:"266",ry:"316.5"}),e.jsx("defs",{children:e.jsx("filter",{id:`C-${t}`,width:"288",height:"283",x:"391",y:"-24",filterUnits:"userSpaceOnUse",children:e.jsx("feColorMatrix",{values:"1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0"})})}),e.jsx("mask",{id:`D-${t}`,width:"288",height:"283",x:"391",y:"-24",maskUnits:"userSpaceOnUse",children:e.jsx("g",{filter:`url(#C-${t})`,children:e.jsx("circle",{cx:"316.5",cy:"316.5",r:"316.5",fill:"#FFF",fillRule:"evenodd",clipRule:"evenodd"})})}),e.jsx("g",{mask:`url(#D-${t})`,children:e.jsxs("g",{transform:"translate(397 -24)",children:[e.jsxs("linearGradient",{id:`E-${t}`,x1:"-1036.672",x2:"-1036.672",y1:"880.018",y2:"879.018",gradientTransform:"matrix(227 0 0 -227 235493 199764)",gradientUnits:"userSpaceOnUse",children:[e.jsx("stop",{offset:"0",stopColor:"#ffdf00"}),e.jsx("stop",{offset:"1",stopColor:"#ff9d00"})]}),e.jsx("circle",{cx:"168.5",cy:"113.5",r:"113.5",fill:`url(#E-${t})`,fillRule:"evenodd",clipRule:"evenodd"}),e.jsxs("linearGradient",{id:`F-${t}`,x1:"-1017.329",x2:"-1018.602",y1:"658.003",y2:"657.998",gradientTransform:"matrix(30 0 0 -1 30558 771)",gradientUnits:"userSpaceOnUse",children:[e.jsx("stop",{offset:"0",stopColor:"#ffa400"}),e.jsx("stop",{offset:"1",stopColor:"#ff5e00"})]}),e.jsx("path",{fill:"none",stroke:`url(#F-${t})`,strokeLinecap:"round",strokeLinejoin:"bevel",strokeWidth:"12",d:"M30 113H0"}),e.jsxs("linearGradient",{id:`G-${t}`,x1:"-1014.501",x2:"-1015.774",y1:"839.985",y2:"839.935",gradientTransform:"matrix(26.5 0 0 -5.5 26925 4696.5)",gradientUnits:"userSpaceOnUse",children:[e.jsx("stop",{offset:"0",stopColor:"#ffa400"}),e.jsx("stop",{offset:"1",stopColor:"#ff5e00"})]}),e.jsx("path",{fill:"none",stroke:`url(#G-${t})`,strokeLinecap:"round",strokeLinejoin:"bevel",strokeWidth:"12",d:"M33.5 79.5L7 74"}),e.jsxs("linearGradient",{id:`H-${t}`,x1:"-1016.59",x2:"-1017.862",y1:"852.671",y2:"852.595",gradientTransform:"matrix(29 0 0 -8 29523 6971)",gradientUnits:"userSpaceOnUse",children:[e.jsx("stop",{offset:"0",stopColor:"#ffa400"}),e.jsx("stop",{offset:"1",stopColor:"#ff5e00"})]}),e.jsx("path",{fill:"none",stroke:`url(#H-${t})`,strokeLinecap:"round",strokeLinejoin:"bevel",strokeWidth:"12",d:"M34 146l-29 8"}),e.jsxs("linearGradient",{id:`I-${t}`,x1:"-1011.984",x2:"-1013.257",y1:"863.523",y2:"863.229",gradientTransform:"matrix(24 0 0 -13 24339 11407)",gradientUnits:"userSpaceOnUse",children:[e.jsx("stop",{offset:"0",stopColor:"#ffa400"}),e.jsx("stop",{offset:"1",stopColor:"#ff5e00"})]}),e.jsx("path",{fill:"none",stroke:`url(#I-${t})`,strokeLinecap:"round",strokeLinejoin:"bevel",strokeWidth:"12",d:"M45 177l-24 13"}),e.jsxs("linearGradient",{id:`J-${t}`,x1:"-1006.673",x2:"-1007.946",y1:"869.279",y2:"868.376",gradientTransform:"matrix(20 0 0 -19 20205 16720)",gradientUnits:"userSpaceOnUse",children:[e.jsx("stop",{offset:"0",stopColor:"#ffa400"}),e.jsx("stop",{offset:"1",stopColor:"#ff5e00"})]}),e.jsx("path",{fill:"none",stroke:`url(#J-${t})`,strokeLinecap:"round",strokeLinejoin:"bevel",strokeWidth:"12",d:"M67 204l-20 19"}),e.jsxs("linearGradient",{id:`K-${t}`,x1:"-992.85",x2:"-993.317",y1:"871.258",y2:"870.258",gradientTransform:"matrix(13.8339 0 0 -22.8467 13825.796 20131.938)",gradientUnits:"userSpaceOnUse",children:[e.jsx("stop",{offset:"0",stopColor:"#ffa400"}),e.jsx("stop",{offset:"1",stopColor:"#ff5e00"})]}),e.jsx("path",{fill:"none",stroke:`url(#K-${t})`,strokeLinecap:"round",strokeLinejoin:"bevel",strokeWidth:"12",d:"M94.4 227l-13.8 22.8"}),e.jsxs("linearGradient",{id:`L-${t}`,x1:"-953.835",x2:"-953.965",y1:"871.9",y2:"870.9",gradientTransform:"matrix(7.5 0 0 -24.5 7278 21605)",gradientUnits:"userSpaceOnUse",children:[e.jsx("stop",{offset:"0",stopColor:"#ffa400"}),e.jsx("stop",{offset:"1",stopColor:"#ff5e00"})]}),e.jsx("path",{fill:"none",stroke:`url(#L-${t})`,strokeLinecap:"round",strokeLinejoin:"bevel",strokeWidth:"12",d:"M127.5 243.5L120 268"}),e.jsxs("linearGradient",{id:`M-${t}`,x1:"244.504",x2:"244.496",y1:"871.898",y2:"870.898",gradientTransform:"matrix(.5 0 0 -24.5 45.5 21614)",gradientUnits:"userSpaceOnUse",children:[e.jsx("stop",{offset:"0",stopColor:"#ffa400"}),e.jsx("stop",{offset:"1",stopColor:"#ff5e00"})]}),e.jsx("path",{fill:"none",stroke:`url(#M-${t})`,strokeLinecap:"round",strokeLinejoin:"bevel",strokeWidth:"12",d:"M167.5 252.5l.5 24.5"})]})})]})})}function Ne(t){const{className:r,...s}=t;return e.jsxs("button",{...s,className:b(o().logo,r),children:[e.jsx("div",{className:o().tanstackLogo,children:"TANSTACK"}),e.jsx("div",{className:o().routerLogo,children:"React Router v1"})]})}const Y=y.createContext(void 0),Ue=()=>{const t=y.useContext(Y);if(!t)throw new Error("useDevtoolsOnClose must be used within a TanStackRouterDevtools component");return t};function Oe({initialIsOpen:t,panelProps:r={},closeButtonProps:s={},toggleButtonProps:i={},position:x="bottom-left",containerElement:a="footer",router:u}){const[d,f]=y.useState(),l=y.useRef(null),[c,h]=G("tanstackRouterDevtoolsOpen",t),[g,v]=G("tanstackRouterDevtoolsHeight",null),[m,w]=X(!1),[C,k]=X(!1),N=oe(),$=(z,U)=>{if(U.button!==0)return;k(!0);const D={originalHeight:(z==null?void 0:z.getBoundingClientRect().height)??0,pageY:U.pageY},E=ce=>{const fe=D.pageY-ce.pageY,q=D.originalHeight+fe;v(q),q<70?h(!1):h(!0)},L=()=>{k(!1),document.removeEventListener("mousemove",E),document.removeEventListener("mouseUp",L)};document.addEventListener("mousemove",E),document.addEventListener("mouseup",L)},P=c??!1;y.useEffect(()=>{w(c??!1)},[c,m,w]),y.useEffect(()=>{var z;if(m){const U=(z=d==null?void 0:d.parentElement)==null?void 0:z.style.paddingBottom,D=()=>{var E;const L=(E=l.current)==null?void 0:E.getBoundingClientRect().height;d!=null&&d.parentElement&&(d.parentElement.style.paddingBottom=`${L}px`)};if(D(),typeof window<"u")return window.addEventListener("resize",D),()=>{window.removeEventListener("resize",D),d!=null&&d.parentElement&&typeof U=="string"&&(d.parentElement.style.paddingBottom=U)}}},[m,d==null?void 0:d.parentElement]),y.useEffect(()=>{if(d){const z=d,U=getComputedStyle(z).fontSize;z.style.setProperty("--tsrd-font-size",U)}},[d]);const{style:O={},...p}=r,{style:R={},onClick:le,...De}=s,{style:Me={},onClick:J,...de}=i;if(!N())return null;const K=g??500;return e.jsxs(a,{ref:f,className:"TanStackRouterDevtools",children:[e.jsx(Y.Provider,{value:{onCloseClick:le??(()=>{})},children:e.jsx(ae,{ref:l,...p,router:u,className:b(o().devtoolsPanelContainer,o().devtoolsPanelContainerVisibility(!!c),o().devtoolsPanelContainerResizing(C),o().devtoolsPanelContainerAnimation(m,K+16)),style:{height:K,...O},isOpen:m,setIsOpen:h,handleDragStart:z=>$(l.current,z)})}),e.jsxs("button",{type:"button",...de,"aria-label":"Open TanStack Router Devtools",onClick:z=>{h(!0),J&&J(z)},className:b(o().mainCloseBtn,o().mainCloseBtnPosition(x),o().mainCloseBtnAnimation(!P)),children:[e.jsxs("div",{className:o().mainCloseBtnIconContainer,children:[e.jsx("div",{className:o().mainCloseBtnIconOuter,children:e.jsx(te,{})}),e.jsx("div",{className:o().mainCloseBtnIconInner,children:e.jsx(te,{})})]}),e.jsx("div",{className:o().mainCloseBtnDivider,children:"-"}),e.jsx("div",{className:o().routerLogoCloseButton,children:"TanStack Router"})]})]})}const Le=y.forwardRef(function(r,s){return e.jsx(Y.Provider,{value:{onCloseClick:()=>{}},children:e.jsx(ae,{ref:s,...r})})});function ie({router:t,route:r,isRoot:s,activeId:i,setActiveId:x}){var a;const u=se({router:t}),d=u.pendingMatches||u.matches,f=u.matches.find(c=>c.routeId===r.id),l=y.useMemo(()=>{try{if(f!=null&&f.params){const c=f.params,h=r.path||Z(r.id);if(h.startsWith("$")){const g=h.slice(1);if(c[g])return`(${c[g]})`}}return""}catch{return""}},[f,r]);return e.jsxs("div",{children:[e.jsxs("div",{role:"button","aria-label":`Open match details for ${r.id}`,onClick:()=>{f&&x(i===r.id?"":r.id)},className:b(o().routesRowContainer(r.id===i,!!f)),children:[e.jsx("div",{className:b(o().matchIndicator(be(d,r)))}),e.jsxs("div",{className:b(o().routesRow(!!f)),children:[e.jsxs("div",{children:[e.jsxs("code",{className:o().code,children:[s?W:r.path||Z(r.id)," "]}),e.jsx("code",{className:o().routeParamInfo,children:l})]}),e.jsx(V,{match:f,router:t})]})]}),(a=r.children)!=null&&a.length?e.jsx("div",{className:o().nestedRouteRow(!!s),children:[...r.children].sort((c,h)=>c.rank-h.rank).map(c=>e.jsx(ie,{router:t,route:c,activeId:i,setActiveId:x},c.id))}):null]})}const ae=y.forwardRef(function(r,s){var i;const{isOpen:x=!0,setIsOpen:a,handleDragStart:u,router:d,...f}=r,{onCloseClick:l}=Ue(),{className:c,...h}=f,g=ue({warn:!1}),v=d??g,m=se({router:v});xe(v);const[w,C]=G("tanstackRouterDevtoolsShowMatches",!0),[k,N]=G("tanstackRouterDevtoolsActiveRouteId",""),$=y.useMemo(()=>[...m.pendingMatches??[],...m.matches,...m.cachedMatches].find(R=>R.routeId===k||R.id===k),[k,m.cachedMatches,m.matches,m.pendingMatches]),P=Object.keys(m.location.search).length,O={...v,state:v.state};return e.jsxs("div",{ref:s,className:b(o().devtoolsPanel,"TanStackRouterDevtoolsPanel",c),...h,children:[u?e.jsx("div",{className:o().dragHandle,onMouseDown:u}):null,e.jsx("button",{className:o().panelCloseBtn,onClick:p=>{a(!1),l(p)},children:e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:"10",height:"6",fill:"none",viewBox:"0 0 10 6",className:o().panelCloseBtnIcon,children:e.jsx("path",{stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"1.667",d:"M1 1l4 4 4-4"})})}),e.jsxs("div",{className:o().firstContainer,children:[e.jsx("div",{className:o().row,children:e.jsx(Ne,{"aria-hidden":!0,onClick:p=>{a(!1),l(p)}})}),e.jsx("div",{className:o().routerExplorerContainer,children:e.jsx("div",{className:o().routerExplorer,children:e.jsx(M,{label:"Router",value:Object.fromEntries(we(Object.keys(O),["state","routesById","routesByPath","flatRoutes","options"].map(p=>R=>R!==p)).map(p=>[p,O[p]]).filter(p=>typeof p[1]!="function"&&!["__store","basepath","injectedHtml","subscribers","latestLoadPromise","navigateTimeout","resetNextScroll","tempLocationKey","latestLocation","routeTree","history"].includes(p[0]))),defaultExpanded:{state:{},context:{},options:{}},filterSubEntries:p=>p.filter(R=>typeof R.value!="function")})})})]}),e.jsxs("div",{className:o().secondContainer,children:[e.jsxs("div",{className:o().matchesContainer,children:[e.jsxs("div",{className:o().detailsHeader,children:[e.jsx("span",{children:"Pathname"}),m.location.maskedLocation?e.jsx("div",{className:o().maskedBadgeContainer,children:e.jsx("span",{className:o().maskedBadge,children:"masked"})}):null]}),e.jsxs("div",{className:o().detailsContent,children:[e.jsx("code",{children:m.location.pathname}),m.location.maskedLocation?e.jsx("code",{className:o().maskedLocation,children:m.location.maskedLocation.pathname}):null]}),e.jsxs("div",{className:o().detailsHeader,children:[e.jsxs("div",{className:o().routeMatchesToggle,children:[e.jsx("button",{type:"button",onClick:()=>{C(!1)},disabled:!w,className:b(o().routeMatchesToggleBtn(!w,!0)),children:"Routes"}),e.jsx("button",{type:"button",onClick:()=>{C(!0)},disabled:w,className:b(o().routeMatchesToggleBtn(!!w,!1)),children:"Matches"})]}),e.jsx("div",{className:o().detailsHeaderInfo,children:e.jsx("div",{children:"age / staleTime / gcTime"})})]}),e.jsx("div",{className:b(o().routesContainer),children:w?e.jsx("div",{children:(m.pendingMatches||m.matches).map((p,R)=>e.jsxs("div",{role:"button","aria-label":`Open match details for ${p.id}`,onClick:()=>N(k===p.id?"":p.id),className:b(o().matchRow(p===$)),children:[e.jsx("div",{className:b(o().matchIndicator(_(p)))}),e.jsx("code",{className:o().matchID,children:`${p.routeId===W?W:p.pathname}`}),e.jsx(V,{match:p,router:v})]},p.id||R))}):e.jsx(ie,{router:v,route:v.routeTree,isRoot:!0,activeId:k,setActiveId:N})})]}),m.cachedMatches.length?e.jsxs("div",{className:o().cachedMatchesContainer,children:[e.jsxs("div",{className:o().detailsHeader,children:[e.jsx("div",{children:"Cached Matches"}),e.jsx("div",{className:o().detailsHeaderInfo,children:"age / staleTime / gcTime"})]}),e.jsx("div",{children:m.cachedMatches.map(p=>e.jsxs("div",{role:"button","aria-label":`Open match details for ${p.id}`,onClick:()=>N(k===p.id?"":p.id),className:b(o().matchRow(p===$)),children:[e.jsx("div",{className:b(o().matchIndicator(_(p)))}),e.jsx("code",{className:o().matchID,children:`${p.id}`}),e.jsx(V,{match:p,router:v})]},p.id))})]}):null]}),$?e.jsxs("div",{className:o().thirdContainer,children:[e.jsx("div",{className:o().detailsHeader,children:"Match Details"}),e.jsx("div",{children:e.jsxs("div",{className:o().matchDetails,children:[e.jsx("div",{className:o().matchStatus($.status,$.isFetching),children:e.jsx("div",{children:$.status==="success"&&$.isFetching?"fetching":$.status})}),e.jsxs("div",{className:o().matchDetailsInfoLabel,children:[e.jsx("div",{children:"ID:"}),e.jsx("div",{className:o().matchDetailsInfo,children:e.jsx("code",{children:$.id})})]}),e.jsxs("div",{className:o().matchDetailsInfoLabel,children:[e.jsx("div",{children:"State:"}),e.jsx("div",{className:o().matchDetailsInfo,children:(i=m.pendingMatches)!=null&&i.find(p=>p.id===$.id)?"Pending":m.matches.find(p=>p.id===$.id)?"Active":"Cached"})]}),e.jsxs("div",{className:o().matchDetailsInfoLabel,children:[e.jsx("div",{children:"Last Updated:"}),e.jsx("div",{className:o().matchDetailsInfo,children:$.updatedAt?new Date($.updatedAt).toLocaleTimeString():"N/A"})]})]})}),$.loaderData?e.jsxs(e.Fragment,{children:[e.jsx("div",{className:o().detailsHeader,children:"Loader Data"}),e.jsx("div",{className:o().detailsContent,children:e.jsx(M,{label:"loaderData",value:$.loaderData,defaultExpanded:{}})})]}):null,e.jsx("div",{className:o().detailsHeader,children:"Explorer"}),e.jsx("div",{className:o().detailsContent,children:e.jsx(M,{label:"Match",value:$,defaultExpanded:{}})})]}):null,P?e.jsxs("div",{className:o().fourthContainer,children:[e.jsx("div",{className:o().detailsHeader,children:"Search Params"}),e.jsx("div",{className:o().detailsContent,children:e.jsx(M,{value:m.location.search,defaultExpanded:Object.keys(m.location.search).reduce((p,R)=>(p[R]={},p),{})})})]}):null]})});function V({match:t,router:r}){const s=y.useReducer(()=>({}),()=>({}))[1];if(y.useEffect(()=>{const d=setInterval(()=>{s()},1e3);return()=>{clearInterval(d)}},[s]),!t)return null;const i=r.looseRoutesById[t.routeId];if(!i.options.loader)return null;const x=Date.now()-t.updatedAt,a=i.options.staleTime??r.options.defaultStaleTime??0,u=i.options.gcTime??r.options.defaultGcTime??30*60*1e3;return e.jsxs("div",{className:b(o().ageTicker(x>a)),children:[e.jsx("div",{children:H(x)}),e.jsx("div",{children:"/"}),e.jsx("div",{children:H(a)}),e.jsx("div",{children:"/"}),e.jsx("div",{children:H(u)})]})}function H(t){const r=["s","min","h","d"],s=[t/1e3,t/6e4,t/36e5,t/864e5];let i=0;for(let a=1;a<s.length&&!(s[a]<1);a++)i=a;return new Intl.NumberFormat(navigator.language,{compactDisplay:"short",notation:"compact",maximumFractionDigits:0}).format(s[i])+r[i]}const Be=()=>{const{colors:t,font:r,size:s,alpha:i,shadow:x,border:a}=j,{fontFamily:u,lineHeight:d,size:f}=r;return{devtoolsPanelContainer:n`
      direction: ltr;
      position: fixed;
      bottom: 0;
      right: 0;
      z-index: 99999;
      width: 100%;
      max-height: 90%;
      border-top: 1px solid ${t.gray[700]};
      transform-origin: top;
    `,devtoolsPanelContainerVisibility:l=>n`
        visibility: ${l?"visible":"hidden"};
      `,devtoolsPanelContainerResizing:l=>l?n`
          transition: none;
        `:n`
        transition: all 0.4s ease;
      `,devtoolsPanelContainerAnimation:(l,c)=>l?n`
          pointer-events: auto;
          transform: translateY(0);
        `:n`
        pointer-events: none;
        transform: translateY(${c}px);
      `,logo:n`
      cursor: pointer;
      display: flex;
      flex-direction: column;
      background-color: transparent;
      border: none;
      font-family: ${u.sans};
      gap: ${j.size[.5]};
      padding: 0px;
      &:hover {
        opacity: 0.7;
      }
      &:focus-visible {
        outline-offset: 4px;
        border-radius: ${a.radius.xs};
        outline: 2px solid ${t.blue[800]};
      }
    `,tanstackLogo:n`
      font-size: ${r.size.md};
      font-weight: ${r.weight.bold};
      line-height: ${r.lineHeight.xs};
      white-space: nowrap;
      color: ${t.gray[300]};
    `,routerLogo:n`
      font-weight: ${r.weight.semibold};
      font-size: ${r.size.xs};
      background: linear-gradient(to right, #84cc16, #10b981);
      background-clip: text;
      -webkit-background-clip: text;
      line-height: 1;
      -webkit-text-fill-color: transparent;
      white-space: nowrap;
    `,devtoolsPanel:n`
      display: flex;
      font-size: ${f.sm};
      font-family: ${u.sans};
      background-color: ${t.darkGray[700]};
      color: ${t.gray[300]};

      @media (max-width: 700px) {
        flex-direction: column;
      }
      @media (max-width: 600px) {
        font-size: ${f.xs};
      }
    `,dragHandle:n`
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 4px;
      cursor: row-resize;
      z-index: 100000;
      &:hover {
        background-color: ${t.purple[400]}${i[90]};
      }
    `,firstContainer:n`
      flex: 1 1 500px;
      min-height: 40%;
      max-height: 100%;
      overflow: auto;
      border-right: 1px solid ${t.gray[700]};
      display: flex;
      flex-direction: column;
    `,routerExplorerContainer:n`
      overflow-y: auto;
      flex: 1;
    `,routerExplorer:n`
      padding: ${j.size[2]};
    `,row:n`
      display: flex;
      align-items: center;
      padding: ${j.size[2]} ${j.size[2.5]};
      gap: ${j.size[2.5]};
      border-bottom: ${t.darkGray[500]} 1px solid;
      align-items: center;
    `,detailsHeader:n`
      font-family: ui-sans-serif, Inter, system-ui, sans-serif, sans-serif;
      position: sticky;
      top: 0;
      z-index: 2;
      background-color: ${t.darkGray[600]};
      padding: 0px ${j.size[2]};
      font-weight: ${r.weight.medium};
      font-size: ${r.size.xs};
      min-height: ${j.size[8]};
      line-height: ${r.lineHeight.xs};
      text-align: left;
      display: flex;
      align-items: center;
    `,maskedBadge:n`
      background: ${t.yellow[900]}${i[70]};
      color: ${t.yellow[300]};
      display: inline-block;
      padding: ${j.size[0]} ${j.size[2.5]};
      border-radius: ${a.radius.full};
      font-size: ${r.size.xs};
      font-weight: ${r.weight.normal};
      border: 1px solid ${t.yellow[300]};
    `,maskedLocation:n`
      color: ${t.yellow[300]};
    `,detailsContent:n`
      padding: ${j.size[1.5]} ${j.size[2]};
      display: flex;
      align-items: center;
      font-size: ${r.size.xs};
    `,routeMatchesToggle:n`
      display: flex;
      align-items: center;
      border: 1px solid ${t.gray[500]};
      border-radius: ${a.radius.sm};
      overflow: hidden;
    `,routeMatchesToggleBtn:(l,c)=>{const g=[n`
        appearance: none;
        border: none;
        font-size: 12px;
        padding: 4px 8px;
        background: transparent;
        cursor: pointer;
        font-family: ${u.sans};
        font-weight: ${r.weight.medium};
      `];if(l){const v=n`
          background: ${t.darkGray[400]};
          color: ${t.gray[300]};
        `;g.push(v)}else{const v=n`
          color: ${t.gray[500]};
          background: ${t.darkGray[800]}${i[20]};
        `;g.push(v)}return c&&g.push(n`
          border-right: 1px solid ${j.colors.gray[500]};
        `),g},detailsHeaderInfo:n`
      flex: 1;
      justify-content: flex-end;
      display: flex;
      align-items: center;
      font-weight: ${r.weight.normal};
      color: ${t.gray[400]};
    `,matchRow:l=>{const h=[n`
        display: flex;
        border-bottom: 1px solid ${t.darkGray[400]};
        cursor: pointer;
        align-items: center;
        padding: ${s[1]} ${s[2]};
        gap: ${s[2]};
        font-size: ${f.xs};
        color: ${t.gray[300]};
      `];if(l){const g=n`
          background: ${t.darkGray[500]};
        `;h.push(g)}return h},matchIndicator:l=>{const h=[n`
        flex: 0 0 auto;
        width: ${s[3]};
        height: ${s[3]};
        background: ${t[l][900]};
        border: 1px solid ${t[l][500]};
        border-radius: ${a.radius.full};
        transition: all 0.25s ease-out;
        box-sizing: border-box;
      `];if(l==="gray"){const g=n`
          background: ${t.gray[700]};
          border-color: ${t.gray[400]};
        `;h.push(g)}return h},matchID:n`
      flex: 1;
      line-height: ${d.xs};
    `,ageTicker:l=>{const h=[n`
        display: flex;
        gap: ${s[1]};
        font-size: ${f.xs};
        color: ${t.gray[400]};
        font-variant-numeric: tabular-nums;
        line-height: ${d.xs};
      `];if(l){const g=n`
          color: ${t.yellow[400]};
        `;h.push(g)}return h},secondContainer:n`
      flex: 1 1 500px;
      min-height: 40%;
      max-height: 100%;
      overflow: auto;
      border-right: 1px solid ${t.gray[700]};
      display: flex;
      flex-direction: column;
    `,thirdContainer:n`
      flex: 1 1 500px;
      overflow: auto;
      display: flex;
      flex-direction: column;
      height: 100%;
      border-right: 1px solid ${t.gray[700]};

      @media (max-width: 700px) {
        border-top: 2px solid ${t.gray[700]};
      }
    `,fourthContainer:n`
      flex: 1 1 500px;
      min-height: 40%;
      max-height: 100%;
      overflow: auto;
      display: flex;
      flex-direction: column;
    `,routesContainer:n`
      overflow-x: auto;
      overflow-y: visible;
    `,routesRowContainer:(l,c)=>{const g=[n`
        display: flex;
        border-bottom: 1px solid ${t.darkGray[400]};
        align-items: center;
        padding: ${s[1]} ${s[2]};
        gap: ${s[2]};
        font-size: ${f.xs};
        color: ${t.gray[300]};
        cursor: ${c?"pointer":"default"};
        line-height: ${d.xs};
      `];if(l){const v=n`
          background: ${t.darkGray[500]};
        `;g.push(v)}return g},routesRow:l=>{const h=[n`
        flex: 1 0 auto;
        display: flex;
        justify-content: space-between;
        align-items: center;
        font-size: ${f.xs};
        line-height: ${d.xs};
      `];if(!l){const g=n`
          color: ${t.gray[400]};
        `;h.push(g)}return h},routeParamInfo:n`
      color: ${t.gray[400]};
      font-size: ${f.xs};
      line-height: ${d.xs};
    `,nestedRouteRow:l=>n`
        margin-left: ${l?0:s[3.5]};
        border-left: ${l?"":`solid 1px ${t.gray[700]}`};
      `,code:n`
      font-size: ${f.xs};
      line-height: ${d.xs};
    `,matchesContainer:n`
      flex: 1 1 auto;
      overflow-y: auto;
    `,cachedMatchesContainer:n`
      flex: 1 1 auto;
      overflow-y: auto;
      max-height: 50%;
    `,maskedBadgeContainer:n`
      flex: 1;
      justify-content: flex-end;
      display: flex;
    `,matchDetails:n`
      display: flex;
      flex-direction: column;
      padding: ${j.size[2]};
      font-size: ${j.font.size.xs};
      color: ${j.colors.gray[300]};
      line-height: ${j.font.lineHeight.sm};
    `,matchStatus:(l,c)=>{const g=c&&l==="success"?c==="beforeLoad"?"purple":"blue":{pending:"yellow",success:"green",error:"red",notFound:"purple",redirected:"gray"}[l];return n`
        display: flex;
        justify-content: center;
        align-items: center;
        height: 40px;
        border-radius: ${j.border.radius.sm};
        font-weight: ${j.font.weight.normal};
        background-color: ${j.colors[g][900]}${j.alpha[90]};
        color: ${j.colors[g][300]};
        border: 1px solid ${j.colors[g][600]};
        margin-bottom: ${j.size[2]};
        transition: all 0.25s ease-out;
      `},matchDetailsInfo:n`
      display: flex;
      justify-content: flex-end;
      flex: 1;
    `,matchDetailsInfoLabel:n`
      display: flex;
    `,mainCloseBtn:n`
      background: ${t.darkGray[700]};
      padding: ${s[1]} ${s[2]} ${s[1]} ${s[1.5]};
      border-radius: ${a.radius.md};
      position: fixed;
      z-index: 99999;
      display: inline-flex;
      width: fit-content;
      cursor: pointer;
      appearance: none;
      border: 0;
      gap: 8px;
      align-items: center;
      border: 1px solid ${t.gray[500]};
      font-size: ${r.size.xs};
      cursor: pointer;
      transition: all 0.25s ease-out;

      &:hover {
        background: ${t.darkGray[500]};
      }
    `,mainCloseBtnPosition:l=>n`
        ${l==="top-left"?`top: ${s[2]}; left: ${s[2]};`:""}
        ${l==="top-right"?`top: ${s[2]}; right: ${s[2]};`:""}
        ${l==="bottom-left"?`bottom: ${s[2]}; left: ${s[2]};`:""}
        ${l==="bottom-right"?`bottom: ${s[2]}; right: ${s[2]};`:""}
      `,mainCloseBtnAnimation:l=>l?n`
          opacity: 1;
          pointer-events: auto;
          visibility: visible;
        `:n`
        opacity: 0;
        pointer-events: none;
        visibility: hidden;
      `,routerLogoCloseButton:n`
      font-weight: ${r.weight.semibold};
      font-size: ${r.size.xs};
      background: linear-gradient(to right, #98f30c, #00f4a3);
      background-clip: text;
      -webkit-background-clip: text;
      line-height: 1;
      -webkit-text-fill-color: transparent;
      white-space: nowrap;
    `,mainCloseBtnDivider:n`
      width: 1px;
      background: ${j.colors.gray[600]};
      height: 100%;
      border-radius: 999999px;
      color: transparent;
    `,mainCloseBtnIconContainer:n`
      position: relative;
      width: ${s[5]};
      height: ${s[5]};
      background: pink;
      border-radius: 999999px;
      overflow: hidden;
    `,mainCloseBtnIconOuter:n`
      width: ${s[5]};
      height: ${s[5]};
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      filter: blur(3px) saturate(1.8) contrast(2);
    `,mainCloseBtnIconInner:n`
      width: ${s[4]};
      height: ${s[4]};
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    `,panelCloseBtn:n`
      position: absolute;
      cursor: pointer;
      z-index: 100001;
      display: flex;
      align-items: center;
      justify-content: center;
      outline: none;
      background-color: ${t.darkGray[700]};
      &:hover {
        background-color: ${t.darkGray[500]};
      }

      top: 0;
      right: ${s[2]};
      transform: translate(0, -100%);
      border-right: ${t.darkGray[300]} 1px solid;
      border-left: ${t.darkGray[300]} 1px solid;
      border-top: ${t.darkGray[300]} 1px solid;
      border-bottom: none;
      border-radius: ${a.radius.sm} ${a.radius.sm} 0px 0px;
      padding: ${s[1]} ${s[1.5]} ${s[.5]} ${s[1.5]};

      &::after {
        content: ' ';
        position: absolute;
        top: 100%;
        left: -${s[2.5]};
        height: ${s[1.5]};
        width: calc(100% + ${s[5]});
      }
    `,panelCloseBtnIcon:n`
      color: ${t.gray[400]};
      width: ${s[2]};
      height: ${s[2]};
    `}};let T=null;function o(){return T||(T=Be(),T)}export{Oe as TanStackRouterDevtools,Le as TanStackRouterDevtoolsPanel};
