(window["webpackJsonpmarkov-words"]=window["webpackJsonpmarkov-words"]||[]).push([[0],[,function(e,t,n){e.exports={text:"form_text__1E_v6",options:"form_options__3lfSz",generate:"form_generate__1Br-P",results:"form_results__3J2XQ",num:"form_num__1o_QM"}},,function(e,t,n){},function(e,t,n){},function(e,t,n){e.exports={footer:"pageFooter_footer__19AKf"}},,,,function(e,t,n){e.exports=n(17)},,,,,function(e,t,n){},,,function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(7),c=n.n(o),i=(n(14),n(15),n(16),n(3)),l=n.n(i),s=function(){return r.a.createElement("header",{className:l.a.header},r.a.createElement("h1",{className:l.a.title},"Markov Word Generator"))},u=n(8),m=n(2),f=n(4),h=n.n(f),p=function(e){return r.a.createElement("div",{className:h.a.results},r.a.createElement("p",{className:h.a.result},e.results))},g=n(1),b=n.n(g);function d(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,a)}return n}function v(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?d(n,!0).forEach(function(t){Object(u.a)(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):d(n).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}var w=function(){var e=Object(a.useState)(""),t=Object(m.a)(e,2),n=t[0],o=t[1],c=Object(a.useState)(3),i=Object(m.a)(c,2),l=i[0],s=i[1],u=Object(a.useState)(10),f=Object(m.a)(u,2),h=f[0],g=f[1],d=Object(a.useState)(100),w=Object(m.a)(d,2),O=w[0],j=w[1],E=Object(a.useState)([]),y=Object(m.a)(E,2),_=y[0],k=y[1],S=Object(a.useState)([]),x=Object(m.a)(S,2),N=x[0],P=x[1],C=Object(a.useState)(!1),A=Object(m.a)(C,2),W=A[0],M=A[1],B=Object(a.useState)({}),D=Object(m.a)(B,2),G=D[0],I=D[1],L=Object(a.useState)(!1),J=Object(m.a)(L,2),R=J[0],T=J[1],U=Object(a.useState)({}),F=Object(m.a)(U,2),Q=F[0],$=F[1],q=Object(a.useState)(!1),z=Object(m.a)(q,2),H=z[0],K=z[1],X=Object(a.useState)(""),V=Object(m.a)(X,2),Y=V[0],Z=V[1];Object(a.useEffect)(function(){k(n.toLowerCase().split(/[\n ."\u201c\u201d\u2018\u2019,\/#!$#%@^&*;:{}\u2013\u2014=_`~[\]()0-9]/).filter(function(e){return e.length>0})),M(!1),T(!1),K(!1)},[n]),Object(a.useEffect)(function(){W&&R&&H&&ne()},[W,R,H]);var ee=function(e){return e[Math.floor(e.length*Math.random())]},te=function e(t){for(var n=function(e){return e.length<2?e[e.length-1]:e.slice(-2).join("")},a=ee(N),r=a.split(""),o=r,c=n(o);Q.hasOwnProperty(c)&&(r=Q[c],a=ee(r),o.push(a),c=n(o),!(o.length>=t&&G.hasOwnProperty(c))););return o.length<t?e(t):o.join("")},ne=function(){if(W&&R&&H){var e=[];if(l>h)e.push("Maximum length must be greater or equal to minimum length.");else if(0===_.length)e.push("No input provided.");else if(0===N.length||""===N[0])e.push("Internal error.");else for(var t=0;t<O;t++){var n=l+Math.floor((h+1-l)*Math.random());e.push(te(n))}Z(e.join(" "))}else!function(){if(!W||!R||!H){for(var e=[],t={},n={},a=0;a<_.length;a++){var r=_[a].split("");e.push(r.slice(0,2).join("")),t[r.slice(-2).join("")]=!0;for(var o=0;o<r.length-1;o++)n.hasOwnProperty(r[o])?n[r[o]].push(r[o+1]):n[r[o]]=[r[o+1]],o>0&&(n.hasOwnProperty(r[o-1]+r[o])?n[r[o-1]+r[o]].push(r[o+1]):n[r[o-1]+r[o]]=[r[o+1]])}P([].concat(e)),I(v({},t)),$(v({},n))}M(!0),T(!0),K(!0)}()};return r.a.createElement("main",{className:b.a.main},r.a.createElement("textarea",{id:b.a.textInput,className:b.a.text,name:"text input",placeholder:"Enter as many words as you can. The more the better.",value:n,onChange:function(e){return o(e.target.value)}}),r.a.createElement("div",{id:b.a.options,className:b.a.options},r.a.createElement("label",null,"minimum length:"," ",r.a.createElement("input",{id:b.a.min,className:b.a.num,name:"minimum length",type:"number",min:"1",max:"10",value:l,onChange:function(e){return s(+e.target.value)}})),r.a.createElement("label",null,"maximum length:"," ",r.a.createElement("input",{id:b.a.max,className:b.a.num,name:"maximum length",type:"number",min:"3",max:"20",value:h,onChange:function(e){return g(+e.target.value)}})),r.a.createElement("label",null,"number of words:"," ",r.a.createElement("input",{id:b.a.num,className:b.a.num,name:"number of words",type:"number",min:"1",max:"9999",value:O,onChange:function(e){return j(+e.target.value)}}))),r.a.createElement("button",{id:b.a.generate,className:b.a.generate,name:"generate",onClick:ne},"Generate"),r.a.createElement(p,{results:Y}))},O=n(5),j=n.n(O),E=function(){return r.a.createElement("footer",{className:j.a.footer},r.a.createElement("p",{className:j.a.copyright},"Built by Ian A. Cook, copyright 2019 under the AGPL-3.0 license. See the project on ",r.a.createElement("a",{href:"https://github.com/nai888/markov-words",target:"_blank",rel:"noopener noreferrer"},"GitHub"),"."))},y=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(s,null),r.a.createElement(w,null),r.a.createElement(E,null))},_=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function k(e,t){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}}).catch(function(e){console.error("Error during service worker registration:",e)})}c.a.render(r.a.createElement(y,null),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/markov-words",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",function(){var t="".concat("/markov-words","/service-worker.js");_?(!function(e,t){fetch(e).then(function(n){var a=n.headers.get("content-type");404===n.status||null!=a&&-1===a.indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):k(e,t)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(t,e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")})):k(t,e)})}}()}],[[9,1,2]]]);
//# sourceMappingURL=main.b4fa9663.chunk.js.map