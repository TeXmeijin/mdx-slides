(()=>{"use strict";var e,t,r,n,o,a,i={},l={};function f(e){if(l[e])return l[e].exports;var t=l[e]={exports:{}};return i[e].call(t.exports,t,t.exports,f),t.exports}f.m=i,f.x=e=>{},f.F={},f.E=e=>{Object.keys(f.F).map((t=>{f.F[t](e)}))},f.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return f.d(t,{a:t}),t},t=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__,f.t=function(r,n){if(1&n&&(r=this(r)),8&n)return r;if("object"==typeof r&&r){if(4&n&&r.__esModule)return r;if(16&n&&"function"==typeof r.then)return r}var o=Object.create(null);f.r(o);var a={};e=e||[null,t({}),t([]),t(t)];for(var i=2&n&&r;"object"==typeof i&&!~e.indexOf(i);i=t(i))Object.getOwnPropertyNames(i).forEach((e=>a[e]=()=>r[e]));return a.default=()=>r,f.d(o,a),o},f.d=(e,t)=>{for(var r in t)f.o(t,r)&&!f.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},f.f={},f.e=e=>Promise.all(Object.keys(f.f).reduce(((t,r)=>(f.f[r](e,t),t)),[])),f.u=e=>e+"."+{209:"74acf09a9f8c74077596",352:"f14b251601b2e88e7457",568:"d94930549a131905759f",582:"6c2e868c1321b449d87a",626:"444799f4ede2807ffdab",846:"f33309846df4bd81893f",869:"eca98570be2df517cbbb",921:"fed30f6e7e4b7084d664"}[e]+".bundle.js",f.miniCssF=e=>(({179:"main",736:"vendor"}[e]||e)+"."+{179:"42bc817bc6be7671914e",209:"74acf09a9f8c74077596",352:"f14b251601b2e88e7457",626:"444799f4ede2807ffdab",736:"924d674b8e2e95045c6a",846:"f33309846df4bd81893f"}[e]+".css"),f.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),f.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r={},n="slides:",f.l=(e,t,o,a)=>{if(r[e])r[e].push(t);else{var i,l;if(void 0!==o)for(var d=document.getElementsByTagName("script"),u=0;u<d.length;u++){var s=d[u];if(s.getAttribute("src")==e||s.getAttribute("data-webpack")==n+o){i=s;break}}i||(l=!0,(i=document.createElement("script")).charset="utf-8",i.timeout=120,f.nc&&i.setAttribute("nonce",f.nc),i.setAttribute("data-webpack",n+o),i.src=e),r[e]=[t];var c=(t,n)=>{i.onerror=i.onload=null,clearTimeout(p);var o=r[e];if(delete r[e],i.parentNode&&i.parentNode.removeChild(i),o&&o.forEach((e=>e(n))),t)return t(n)},p=setTimeout(c.bind(null,void 0,{type:"timeout",target:i}),12e4);i.onerror=c.bind(null,i.onerror),i.onload=c.bind(null,i.onload),l&&document.head.appendChild(i)}},f.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},f.p="",o=e=>new Promise(((t,r)=>{var n=f.miniCssF(e),o=f.p+n;if(((e,t)=>{for(var r=document.getElementsByTagName("link"),n=0;n<r.length;n++){var o=(i=r[n]).getAttribute("data-href")||i.getAttribute("href");if("stylesheet"===i.rel&&(o===e||o===t))return i}var a=document.getElementsByTagName("style");for(n=0;n<a.length;n++){var i;if((o=(i=a[n]).getAttribute("data-href"))===e||o===t)return i}})(n,o))return t();((e,t,r,n)=>{var o=document.createElement("link");o.rel="stylesheet",o.type="text/css",o.onerror=o.onload=a=>{if(o.onerror=o.onload=null,"load"===a.type)r();else{var i=a&&("load"===a.type?"missing":a.type),l=a&&a.target&&a.target.href||t,f=new Error("Loading CSS chunk "+e+" failed.\n("+l+")");f.code="CSS_CHUNK_LOAD_FAILED",f.type=i,f.request=l,o.parentNode.removeChild(o),n(f)}},o.href=t,document.head.appendChild(o)})(e,o,t,r)})),a={666:0},f.f.miniCss=(e,t)=>{a[e]?t.push(a[e]):0!==a[e]&&{209:1,352:1,626:1,846:1}[e]&&t.push(a[e]=o(e).then((()=>{a[e]=0}),(t=>{throw delete a[e],t})))},(()=>{var e={666:0},t=[];f.f.j=(t,r)=>{var n=f.o(e,t)?e[t]:void 0;if(0!==n)if(n)r.push(n[2]);else if(/^(209|626)$/.test(t))e[t]=0;else{var o=new Promise(((r,o)=>{n=e[t]=[r,o]}));r.push(n[2]=o);var a=f.p+f.u(t),i=new Error;f.l(a,(r=>{if(f.o(e,t)&&(0!==(n=e[t])&&(e[t]=void 0),n)){var o=r&&("load"===r.type?"missing":r.type),a=r&&r.target&&r.target.src;i.message="Loading chunk "+t+" failed.\n("+o+": "+a+")",i.name="ChunkLoadError",i.type=o,i.request=a,n[1](i)}}),"chunk-"+t,t)}},f.F.j=t=>{if(!(f.o(e,t)&&void 0!==e[t]||/^(209|626)$/.test(t))){e[t]=null;var r=document.createElement("link");f.nc&&r.setAttribute("nonce",f.nc),r.rel="prefetch",r.as="script",r.href=f.p+f.u(t),document.head.appendChild(r)}};var r=e=>{},n=(n,o)=>{for(var a,i,[l,d,u,s]=o,c=0,p=[];c<l.length;c++)i=l[c],f.o(e,i)&&e[i]&&p.push(e[i][0]),e[i]=0;for(a in d)f.o(d,a)&&(f.m[a]=d[a]);for(u&&u(f),n&&n(o);p.length;)p.shift()();return s&&t.push.apply(t,s),r()},o=self.webpackChunkslides=self.webpackChunkslides||[];function a(){for(var r,n=0;n<t.length;n++){for(var o=t[n],a=!0,i=1;i<o.length;i++){var l=o[i];0!==e[l]&&(a=!1)}a&&(t.splice(n--,1),r=f(f.s=o[0]))}return 0===t.length&&(f.x(),f.x=e=>{}),r}o.forEach(n.bind(null,0)),o.push=n.bind(null,o.push.bind(o));var i=f.x;f.x=()=>(f.x=i||(e=>{}),(r=a)())})();f.x()})();