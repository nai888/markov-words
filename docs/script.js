'use strict';var input=document.getElementById("input"),minimum=document.getElementById("min"),maximum=document.getElementById("max"),number=document.getElementById("num"),button=document.getElementById("generate"),result=document.getElementById("result"),inputText=function(){return input.value.toLowerCase().split(/[\n .,\/#!$%\^&\*;:{}=\-_`~\[\]()]/).filter(function(a){return 0<a.length})},errorText="",choose=function(a){return a[Math.floor(a.length*Math.random())]},build=function(a){if(minimum>maximum)return errorText="Maximum length must be greater or equal to minimum length.",!1;for(var b,c=inputText(),d=[],e={},f={},g=0;g<c.length;g++){b=c[g].split(""),d.push(b.slice(0,2).join("")),e[b.slice(-2).join("")]=!0;for(var k=0;k<b.length-1;k++)f.hasOwnProperty(b[k])?f[b[k]].push(b[k+1]):f[b[k]]=[b[k+1]],0<k&&(f.hasOwnProperty(b[k-1]+b[k])?f[b[k-1]+b[k]].push(b[k+1]):f[b[k-1]+b[k]]=[b[k+1]])}var h=function(a){var b=function(a){return 2>a.length?a[a.length-1]:a.slice(-2).join("")};if(0<c.length){for(var g=choose(d),i=g.split(""),j=i,k=b(j);f.hasOwnProperty(k)&&(i=f[k],g=choose(i),j.push(g),k=b(j),!(j.length>=a&&e.hasOwnProperty(k))););return j.length<a?h(a):j.join("")}};return h(a)},makeWords=function(){for(var a=Math.floor,b,c=[],d=!1,e=+minimum.value,f=+maximum.value,g=0;g<num.value;g++)b=e+a((f+1-e)*Math.random()),c.push(build(b));for(var h=0;h<c.length;h++)c[h]||(d=!0);result.innerHTML=d?errorText:c.join(" ")};button.addEventListener("click",makeWords);