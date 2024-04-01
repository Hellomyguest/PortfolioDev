import{k as s,au as ve,J as be,an as K,ad as se,am as ye,_ as ke,c as J,av as re,as as Ce,g as we,m as Se,r as $e,f as ie,aa as Pe,C as xe,o as De,a2 as je,e as Ee,aw as _e,u as Ie,a as Oe,b,j as T,S as Ae,ax as ae}from"./index-9730dd99.js";import{P as q}from"./ParagraphTitle-ab75bdea.js";import{a as Be,C as L,I as M}from"./CollapsableTimeline.module-c26143ba.js";import"./index-e92ec54c.js";var Ne={percent:0,prefixCls:"rc-progress",strokeColor:"#2db7f5",strokeLinecap:"round",strokeWidth:1,trailColor:"#D9D9D9",trailWidth:1,gapPosition:"bottom"},We=function(){var t=s.useRef([]),r=s.useRef(null);return s.useEffect(function(){var o=Date.now(),n=!1;t.current.forEach(function(c){if(c){n=!0;var i=c.style;i.transitionDuration=".3s, .3s, .3s, .06s",r.current&&o-r.current<100&&(i.transitionDuration="0s, 0s")}}),n&&(r.current=Date.now())}),t.current},ce=0,Fe=be();function Te(){var e;return Fe?(e=ce,ce+=1):e="TEST_OR_SSR",e}const Le=function(e){var t=s.useState(),r=ve(t,2),o=r[0],n=r[1];return s.useEffect(function(){n("rc_progress_".concat(Te()))},[]),e||o};var le=function(t){var r=t.bg,o=t.children;return s.createElement("div",{style:{width:"100%",height:"100%",background:r}},o)};function de(e,t){return Object.keys(e).map(function(r){var o=parseFloat(r),n="".concat(Math.floor(o*t),"%");return"".concat(e[r]," ").concat(n)})}var Me=s.forwardRef(function(e,t){var r=e.prefixCls,o=e.color,n=e.gradientId,c=e.radius,i=e.style,a=e.ptg,l=e.strokeLinecap,u=e.strokeWidth,d=e.size,g=e.gapDegree,h=o&&K(o)==="object",y=h?"#FFF":void 0,v=d/2,f=s.createElement("circle",{className:"".concat(r,"-circle-path"),r:c,cx:v,cy:v,stroke:y,strokeLinecap:l,strokeWidth:u,opacity:a===0?0:1,style:i,ref:t});if(!h)return f;var p="".concat(n,"-conic"),S=g?"".concat(180+g/2,"deg"):"0deg",k=de(o,(360-g)/360),C=de(o,1),m="conic-gradient(from ".concat(S,", ").concat(k.join(", "),")"),x="linear-gradient(to ".concat(g?"bottom":"top",", ").concat(C.join(", "),")");return s.createElement(s.Fragment,null,s.createElement("mask",{id:p},f),s.createElement("foreignObject",{x:0,y:0,width:d,height:d,mask:"url(#".concat(p,")")},s.createElement(le,{bg:x},s.createElement(le,{bg:m}))))}),R=100,te=function(t,r,o,n,c,i,a,l,u,d){var g=arguments.length>10&&arguments[10]!==void 0?arguments[10]:0,h=o/100*360*((360-i)/360),y=i===0?0:{bottom:0,top:180,left:90,right:-90}[a],v=(100-n)/100*r;u==="round"&&n!==100&&(v+=d/2,v>=r&&(v=r-.01));var f=R/2;return{stroke:typeof l=="string"?l:void 0,strokeDasharray:"".concat(r,"px ").concat(t),strokeDashoffset:v+g,transform:"rotate(".concat(c+h+y,"deg)"),transformOrigin:"".concat(f,"px ").concat(f,"px"),transition:"stroke-dashoffset .3s ease 0s, stroke-dasharray .3s ease 0s, stroke .3s, stroke-width .06s ease .3s, opacity .3s ease 0s",fillOpacity:0}},Ke=["id","prefixCls","steps","strokeWidth","trailWidth","gapDegree","gapPosition","trailColor","strokeLinecap","style","className","strokeColor","percent"];function ue(e){var t=e??[];return Array.isArray(t)?t:[t]}var Re=function(t){var r=se(se({},Ne),t),o=r.id,n=r.prefixCls,c=r.steps,i=r.strokeWidth,a=r.trailWidth,l=r.gapDegree,u=l===void 0?0:l,d=r.gapPosition,g=r.trailColor,h=r.strokeLinecap,y=r.style,v=r.className,f=r.strokeColor,p=r.percent,S=ye(r,Ke),k=R/2,C=Le(o),m="".concat(C,"-gradient"),x=k-i/2,I=Math.PI*2*x,B=u>0?90+u/2:-90,P=I*((360-u)/360),N=K(c)==="object"?c:{count:c,space:2},E=N.count,O=N.space,z=ue(p),$=ue(f),w=$.find(function(X){return X&&K(X)==="object"}),D=w&&K(w)==="object",_=D?"butt":h,Z=te(I,P,0,100,B,u,d,g,_,i),oe=We(),me=function(){var H=0;return z.map(function(W,A){var Q=$[A]||$[$.length-1],F=te(I,P,H,W,B,u,d,Q,_,i);return H+=W,s.createElement(Me,{key:A,color:Q,ptg:W,radius:x,prefixCls:n,gradientId:m,style:F,strokeLinecap:_,strokeWidth:i,gapDegree:u,ref:function(ee){oe[A]=ee},size:R})}).reverse()},fe=function(){var H=Math.round(E*(z[0]/100)),W=100/E,A=0;return new Array(E).fill(null).map(function(Q,F){var G=F<=H-1?$[0]:g,ee=G&&K(G)==="object"?"url(#".concat(m,")"):void 0,ne=te(I,P,A,W,B,u,d,G,"butt",i,O);return A+=(P-ne.strokeDashoffset+O)*100/P,s.createElement("circle",{key:F,className:"".concat(n,"-circle-path"),r:x,cx:k,cy:k,stroke:ee,strokeWidth:i,opacity:1,style:ne,ref:function(he){oe[F]=he}})})};return s.createElement("svg",ke({className:J("".concat(n,"-circle"),v),viewBox:"0 0 ".concat(R," ").concat(R),style:y,id:o,role:"presentation"},S),!E&&s.createElement("circle",{className:"".concat(n,"-circle-trail"),r:x,cx:k,cy:k,stroke:g,strokeLinecap:_,strokeWidth:a||i,style:Z}),E?fe():me())};function j(e){return!e||e<0?0:e>100?100:e}function V(e){let{success:t,successPercent:r}=e,o=r;return t&&"progress"in t&&(o=t.progress),t&&"percent"in t&&(o=t.percent),o}const ze=e=>{let{percent:t,success:r,successPercent:o}=e;const n=j(V({success:r,successPercent:o}));return[n,j(j(t)-n)]},Xe=e=>{let{success:t={},strokeColor:r}=e;const{strokeColor:o}=t;return[o||re.green,r||null]},Y=(e,t,r)=>{var o,n,c,i;let a=-1,l=-1;if(t==="step"){const u=r.steps,d=r.strokeWidth;typeof e=="string"||typeof e>"u"?(a=e==="small"?2:14,l=d??8):typeof e=="number"?[a,l]=[e,e]:[a=14,l=8]=e,a*=u}else if(t==="line"){const u=r==null?void 0:r.strokeWidth;typeof e=="string"||typeof e>"u"?l=u||(e==="small"?6:8):typeof e=="number"?[a,l]=[e,e]:[a=-1,l=8]=e}else(t==="circle"||t==="dashboard")&&(typeof e=="string"||typeof e>"u"?[a,l]=e==="small"?[60,60]:[120,120]:typeof e=="number"?[a,l]=[e,e]:(a=(n=(o=e[0])!==null&&o!==void 0?o:e[1])!==null&&n!==void 0?n:120,l=(i=(c=e[0])!==null&&c!==void 0?c:e[1])!==null&&i!==void 0?i:120));return[a,l]},He=3,Ge=e=>He/e*100,qe=e=>{const{prefixCls:t,trailColor:r=null,strokeLinecap:o="round",gapPosition:n,gapDegree:c,width:i=120,type:a,children:l,success:u,size:d=i}=e,[g,h]=Y(d,"circle");let{strokeWidth:y}=e;y===void 0&&(y=Math.max(Ge(g),6));const v={width:g,height:h,fontSize:g*.15+6},f=s.useMemo(()=>{if(c||c===0)return c;if(a==="dashboard")return 75},[c,a]),p=n||a==="dashboard"&&"bottom"||void 0,S=Object.prototype.toString.call(e.strokeColor)==="[object Object]",k=Xe({success:u,strokeColor:e.strokeColor}),C=J(`${t}-inner`,{[`${t}-circle-gradient`]:S}),m=s.createElement(Re,{percent:ze(e),strokeWidth:y,trailWidth:y,strokeColor:k,strokeLinecap:o,trailColor:r,prefixCls:t,gapDegree:f,gapPosition:p});return s.createElement("div",{className:C,style:v},g<=20?s.createElement(Ce,{title:l},s.createElement("span",null,m)):s.createElement(s.Fragment,null,m,l))},Ve=qe,U="--progress-line-stroke-color",ge="--progress-percent",pe=e=>{const t=e?"100%":"-100%";return new Pe(`antProgress${e?"RTL":"LTR"}Active`,{"0%":{transform:`translateX(${t}) scaleX(0)`,opacity:.1},"20%":{transform:`translateX(${t}) scaleX(0)`,opacity:.5},to:{transform:"translateX(0) scaleX(1)",opacity:0}})},Ue=e=>{const{componentCls:t,iconCls:r}=e;return{[t]:Object.assign(Object.assign({},$e(e)),{display:"inline-block","&-rtl":{direction:"rtl"},"&-line":{position:"relative",width:"100%",fontSize:e.fontSize},[`${t}-outer`]:{display:"inline-block",width:"100%"},[`&${t}-show-info`]:{[`${t}-outer`]:{marginInlineEnd:`calc(-2em - ${ie(e.marginXS)})`,paddingInlineEnd:`calc(2em + ${ie(e.paddingXS)})`}},[`${t}-inner`]:{position:"relative",display:"inline-block",width:"100%",overflow:"hidden",verticalAlign:"middle",backgroundColor:e.remainingColor,borderRadius:e.lineBorderRadius},[`${t}-inner:not(${t}-circle-gradient)`]:{[`${t}-circle-path`]:{stroke:e.defaultColor}},[`${t}-success-bg, ${t}-bg`]:{position:"relative",background:e.defaultColor,borderRadius:e.lineBorderRadius,transition:`all ${e.motionDurationSlow} ${e.motionEaseInOutCirc}`},[`${t}-bg`]:{overflow:"hidden","&::after":{content:'""',background:{_multi_value_:!0,value:["inherit",`var(${U})`]},height:"100%",width:`calc(1 / var(${ge}) * 100%)`,display:"block"}},[`${t}-success-bg`]:{position:"absolute",insetBlockStart:0,insetInlineStart:0,backgroundColor:e.colorSuccess},[`${t}-text`]:{display:"inline-block",width:"2em",marginInlineStart:e.marginXS,color:e.colorText,lineHeight:1,whiteSpace:"nowrap",textAlign:"start",verticalAlign:"middle",wordBreak:"normal",[r]:{fontSize:e.fontSize}},[`&${t}-status-active`]:{[`${t}-bg::before`]:{position:"absolute",inset:0,backgroundColor:e.colorBgContainer,borderRadius:e.lineBorderRadius,opacity:0,animationName:pe(),animationDuration:e.progressActiveMotionDuration,animationTimingFunction:e.motionEaseOutQuint,animationIterationCount:"infinite",content:'""'}},[`&${t}-rtl${t}-status-active`]:{[`${t}-bg::before`]:{animationName:pe(!0)}},[`&${t}-status-exception`]:{[`${t}-bg`]:{backgroundColor:e.colorError},[`${t}-text`]:{color:e.colorError}},[`&${t}-status-exception ${t}-inner:not(${t}-circle-gradient)`]:{[`${t}-circle-path`]:{stroke:e.colorError}},[`&${t}-status-success`]:{[`${t}-bg`]:{backgroundColor:e.colorSuccess},[`${t}-text`]:{color:e.colorSuccess}},[`&${t}-status-success ${t}-inner:not(${t}-circle-gradient)`]:{[`${t}-circle-path`]:{stroke:e.colorSuccess}}})}},Je=e=>{const{componentCls:t,iconCls:r}=e;return{[t]:{[`${t}-circle-trail`]:{stroke:e.remainingColor},[`&${t}-circle ${t}-inner`]:{position:"relative",lineHeight:1,backgroundColor:"transparent"},[`&${t}-circle ${t}-text`]:{position:"absolute",insetBlockStart:"50%",insetInlineStart:0,width:"100%",margin:0,padding:0,color:e.circleTextColor,fontSize:e.circleTextFontSize,lineHeight:1,whiteSpace:"normal",textAlign:"center",transform:"translateY(-50%)",[r]:{fontSize:e.circleIconFontSize}},[`${t}-circle&-status-exception`]:{[`${t}-text`]:{color:e.colorError}},[`${t}-circle&-status-success`]:{[`${t}-text`]:{color:e.colorSuccess}}},[`${t}-inline-circle`]:{lineHeight:1,[`${t}-inner`]:{verticalAlign:"bottom"}}}},Ye=e=>{const{componentCls:t}=e;return{[t]:{[`${t}-steps`]:{display:"inline-block","&-outer":{display:"flex",flexDirection:"row",alignItems:"center"},"&-item":{flexShrink:0,minWidth:e.progressStepMinWidth,marginInlineEnd:e.progressStepMarginInlineEnd,backgroundColor:e.remainingColor,transition:`all ${e.motionDurationSlow}`,"&-active":{backgroundColor:e.defaultColor}}}}}},Ze=e=>{const{componentCls:t,iconCls:r}=e;return{[t]:{[`${t}-small&-line, ${t}-small&-line ${t}-text ${r}`]:{fontSize:e.fontSizeSM}}}},Qe=e=>({circleTextColor:e.colorText,defaultColor:e.colorInfo,remainingColor:e.colorFillSecondary,lineBorderRadius:100,circleTextFontSize:"1em",circleIconFontSize:`${e.fontSize/e.fontSizeSM}em`}),et=we("Progress",e=>{const t=e.calc(e.marginXXS).div(2).equal(),r=Se(e,{progressStepMarginInlineEnd:t,progressStepMinWidth:t,progressActiveMotionDuration:"2.4s"});return[Ue(r),Je(r),Ye(r),Ze(r)]},Qe);var tt=globalThis&&globalThis.__rest||function(e,t){var r={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(r[o]=e[o]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var n=0,o=Object.getOwnPropertySymbols(e);n<o.length;n++)t.indexOf(o[n])<0&&Object.prototype.propertyIsEnumerable.call(e,o[n])&&(r[o[n]]=e[o[n]]);return r};const rt=e=>{let t=[];return Object.keys(e).forEach(r=>{const o=parseFloat(r.replace(/%/g,""));isNaN(o)||t.push({key:o,value:e[r]})}),t=t.sort((r,o)=>r.key-o.key),t.map(r=>{let{key:o,value:n}=r;return`${n} ${o}%`}).join(", ")},ot=(e,t)=>{const{from:r=re.blue,to:o=re.blue,direction:n=t==="rtl"?"to left":"to right"}=e,c=tt(e,["from","to","direction"]);if(Object.keys(c).length!==0){const a=rt(c),l=`linear-gradient(${n}, ${a})`;return{background:l,[U]:l}}const i=`linear-gradient(${n}, ${r}, ${o})`;return{background:i,[U]:i}},nt=e=>{const{prefixCls:t,direction:r,percent:o,size:n,strokeWidth:c,strokeColor:i,strokeLinecap:a="round",children:l,trailColor:u=null,success:d}=e,g=i&&typeof i!="string"?ot(i,r):{[U]:i,background:i},h=a==="square"||a==="butt"?0:void 0,y=n??[-1,c||(n==="small"?6:8)],[v,f]=Y(y,"line",{strokeWidth:c}),p={backgroundColor:u||void 0,borderRadius:h},S=Object.assign(Object.assign({width:`${j(o)}%`,height:f,borderRadius:h},g),{[ge]:j(o)/100}),k=V(e),C={width:`${j(k)}%`,height:f,borderRadius:h,backgroundColor:d==null?void 0:d.strokeColor},m={width:v<0?"100%":v,height:f};return s.createElement(s.Fragment,null,s.createElement("div",{className:`${t}-outer`,style:m},s.createElement("div",{className:`${t}-inner`,style:p},s.createElement("div",{className:`${t}-bg`,style:S}),k!==void 0?s.createElement("div",{className:`${t}-success-bg`,style:C}):null)),l)},st=nt,it=e=>{const{size:t,steps:r,percent:o=0,strokeWidth:n=8,strokeColor:c,trailColor:i=null,prefixCls:a,children:l}=e,u=Math.round(r*(o/100)),g=t??[t==="small"?2:14,n],[h,y]=Y(g,"step",{steps:r,strokeWidth:n}),v=h/r,f=new Array(r);for(let p=0;p<r;p++){const S=Array.isArray(c)?c[p]:c;f[p]=s.createElement("div",{key:p,className:J(`${a}-steps-item`,{[`${a}-steps-item-active`]:p<=u-1}),style:{backgroundColor:p<=u-1?S:i,width:v,height:y}})}return s.createElement("div",{className:`${a}-steps-outer`},f,l)},at=it;var ct=globalThis&&globalThis.__rest||function(e,t){var r={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(r[o]=e[o]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var n=0,o=Object.getOwnPropertySymbols(e);n<o.length;n++)t.indexOf(o[n])<0&&Object.prototype.propertyIsEnumerable.call(e,o[n])&&(r[o[n]]=e[o[n]]);return r};const lt=["normal","exception","active","success"],dt=s.forwardRef((e,t)=>{const{prefixCls:r,className:o,rootClassName:n,steps:c,strokeColor:i,percent:a=0,size:l="default",showInfo:u=!0,type:d="line",status:g,format:h,style:y}=e,v=ct(e,["prefixCls","className","rootClassName","steps","strokeColor","percent","size","showInfo","type","status","format","style"]),f=s.useMemo(()=>{var $,w;const D=V(e);return parseInt(D!==void 0?($=D??0)===null||$===void 0?void 0:$.toString():(w=a??0)===null||w===void 0?void 0:w.toString(),10)},[a,e.success,e.successPercent]),p=s.useMemo(()=>!lt.includes(g)&&f>=100?"success":g||"normal",[g,f]),{getPrefixCls:S,direction:k,progress:C}=s.useContext(xe),m=S("progress",r),[x,I,B]=et(m),P=s.useMemo(()=>{if(!u)return null;const $=V(e);let w;const D=h||(Z=>`${Z}%`),_=d==="line";return h||p!=="exception"&&p!=="success"?w=D(j(a),j($)):p==="exception"?w=_?s.createElement(je,null):s.createElement(Ee,null):p==="success"&&(w=_?s.createElement(Be,null):s.createElement(_e,null)),s.createElement("span",{className:`${m}-text`,title:typeof w=="string"?w:void 0},w)},[u,a,f,p,d,m,h]),N=Array.isArray(i)?i[0]:i,E=typeof i=="string"||Array.isArray(i)?i:void 0;let O;d==="line"?O=c?s.createElement(at,Object.assign({},e,{strokeColor:E,prefixCls:m,steps:c}),P):s.createElement(st,Object.assign({},e,{strokeColor:N,prefixCls:m,direction:k}),P):(d==="circle"||d==="dashboard")&&(O=s.createElement(Ve,Object.assign({},e,{strokeColor:N,prefixCls:m,progressStatus:p}),P));const z=J(m,`${m}-status-${p}`,`${m}-${d==="dashboard"&&"circle"||c&&"steps"||d}`,{[`${m}-inline-circle`]:d==="circle"&&Y(l,"circle")[0]<=20,[`${m}-show-info`]:u,[`${m}-${l}`]:typeof l=="string",[`${m}-rtl`]:k==="rtl"},C==null?void 0:C.className,o,n,I,B);return x(s.createElement("div",Object.assign({ref:t,style:Object.assign(Object.assign({},C==null?void 0:C.style),y),className:z,role:"progressbar","aria-valuenow":f},De(v,["trailColor","strokeWidth","width","gapDegree","gapPosition","strokeLinecap","success","successPercent"])),O))}),ut=dt,pt="/Portfolio/assets/Flanagan-693f02c1.jpg",gt="/Portfolio/assets/Fowler-81f2c5f8.jpg",mt="/Portfolio/assets/Haverbeke-f8000ee7.webp",ft="/Portfolio/assets/Horstmann-b384ae2d.jpeg",ht="/Portfolio/assets/Simpson1-1b7d7197.jpg",vt="/Portfolio/assets/Simpson2-1c160b4e.jpg",bt="/Portfolio/assets/Simpson3-aeb10157.jpg",yt="/Portfolio/assets/Simpson4-351759a9.jpg",kt="/Portfolio/assets/Simpson5-3c053d92.jpg",Ct="/Portfolio/assets/Simpson6-5e93e852.jpg",wt="/Portfolio/assets/Knuth1-a953698b.jpg",St="/Portfolio/assets/Knuth2-18b730e9.jpg",$t="/Portfolio/assets/Knuth3-5cc89594.jpg",Pt="/Portfolio/assets/Knuth4-17b65bf3.jpg",xt="/Portfolio/assets/Bhargava-475be6cd.jpg",Dt="/Portfolio/assets/Plachta-01ebb697.jpg",jt="/Portfolio/assets/Nordman-a277b00e.jpg",Et=[{title:`Node.js, Express, MongoDB & More: The Complete Bootcamp
Jonas Schmedtmann, Udemy`,link:"https://www.udemy.com/course/nodejs-express-mongodb-bootcamp/"}],_t=[{title:`Школа разработки интерфейсов
06.06.2023
Академия Яндекса`,link:"https://academy.yandex.ru/schools/frontend"},{title:`React and TypeScript
Steve Kinney, FrontendMasters`,link:"https://frontendmasters.com/courses/react-typescript/"}],It=[{cover:gt,link:"https://martinfowler.com/books/refactoring.html"},{cover:ft,link:"https://horstmann.com/javascript-impatient/"},{cover:bt,link:"https://www.oreilly.com/library/view/you-dont-know/9781491905142/"},{cover:yt,link:"https://www.oreilly.com/library/view/you-dont-know/9781491905159/"},{cover:kt,link:"https://www.oreilly.com/library/view/you-dont-know/9781491905197/"},{cover:Ct,link:"https://www.oreilly.com/library/view/you-dont-know/9781491905241/"},{cover:wt,link:"https://www.amazon.com/Art-Computer-Programming-Vol-Fundamental/dp/0201896834/ref=sr_1_4?qid=1682326850&refinements=p_27%3ADonald+Knuth&s=books&sr=1-4&text=Donald+Knuth"},{cover:St,link:"https://www.amazon.com/Art-Computer-Programming-Seminumerical-Algorithms/dp/0201896842/ref=sr_1_7?qid=1682326617&refinements=p_27%3ADonald+Knuth&s=books&sr=1-7&text=Donald+Knuth"},{cover:$t,link:"https://www.amazon.com/Art-Computer-Programming-Sorting-Searching-ebook/dp/B01AY4ZHLI/ref=sr_1_12?qid=1682326617&refinements=p_27%3ADonald+Knuth&s=books&sr=1-12&text=Donald+Knuth"},{cover:Pt,link:"https://www.amazon.com/Art-Computer-Programming-Combinatorial-Information/dp/0201038064/ref=sr_1_3?qid=1682326617&refinements=p_27%3ADonald+Knuth&s=books&sr=1-3&text=Donald+Knuth"},{cover:xt,link:"https://www.amazon.com/Grokking-Algorithms-illustrated-programmers-curious/dp/1617292230"},{cover:Dt,link:"https://www.amazon.com/Grokking-Functional-Programming-Michal-Plachta/dp/1617291838/ref=sr_1_6?crid=3F9CCMG7C1J0X&keywords=plachta&qid=1682326986&s=books&sprefix=plachta%2Cstripbooks-intl-ship%2C201&sr=1-6"},{cover:jt,link:"https:,//www.amazon.com/Grokking-Simplicity-software-functional-thinking/dp/1617296201/ref=sr_1_1?crid=OOVVF8SWU7EM&keywords=normand+eric&qid=1682327092&s=books&sprefix=normand+eri%2Cstripbooks-intl-ship%2C174&sr=1-1"}],Ot=[{cover:pt,link:"https://www.oreilly.com/library/view/javascript-the-definitive/9781491952016/"},{cover:mt,link:"https://nostarch.com/ejs3"},{cover:ht,link:"https://www.oreilly.com/library/view/you-dont-know/9781491924471/"},{cover:vt,link:"https://www.oreilly.com/library/view/you-dont-know/9781449335571/"}],At=[{title:`Неделя фронтенда
17.03.2023
Хабр карьера`,link:"https://www.youtube.com/watch?v=3ab195pqY50&ab_channel=Habr"},{title:`Intern Frontend Meetup
18.04.2023
Яндекс`,link:"https://www.youtube.com/watch?v=Fq8McBvfkWg&ab_channel=%D0%90%D0%BA%D0%B0%D0%B4%D0%B5%D0%BC%D0%B8%D1%8F%D0%AF%D0%BD%D0%B4%D0%B5%D0%BA%D1%81%D0%B0"},{title:`Как найти первую работу в IT и не облажаться!
24.04.2023
Хабр карьера`,link:"https://start.habr.com/"}],Lt=()=>{const{t:e}=Ie(),{isScreenSm:t}=Oe(),r=[{key:"1",label:e("growthPage.courses.scheduled"),children:b(L,{isScreenSm:t,cards:Et.map(n=>b(M,{title:n.title,link:n.link}))})},{key:"2",label:e("growthPage.courses.done"),children:b(L,{isScreenSm:t,cards:_t.map(n=>b(M,{title:n.title,link:n.link}))})}],o=[{key:"1",label:e("growthPage.books.scheduled"),children:b(L,{isScreenSm:t,cards:It.map(n=>b(M,{noPadding:!0,cover:n.cover,link:n.link}))})},{key:"2",label:e("growthPage.books.done"),children:b(L,{isScreenSm:t,cards:Ot.map(n=>b(M,{noPadding:!0,cover:n.cover,link:n.link}))})}];return T(Ae,{direction:"vertical",style:{width:"100%"},children:[T("div",{children:[b(q,{children:e("growthPage.leetCode")}),b(ut,{percent:3.2,strokeColor:{"0%":"#108ee9","100%":"#87d068"}})]}),T("div",{children:[b(q,{children:e("growthPage.courses.title")}),b(ae,{defaultActiveKey:"1",items:r})]}),T("div",{children:[b(q,{children:e("growthPage.events")}),b(L,{isScreenSm:t,cards:At.map(n=>b(M,{title:n.title,link:n.link}))})]}),T("div",{children:[b(q,{children:e("growthPage.books.title")}),b(ae,{defaultActiveKey:"1",items:o})]})]})};export{Lt as GrowthPage};
