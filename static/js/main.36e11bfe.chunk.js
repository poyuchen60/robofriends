(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{13:function(e,n,t){},15:function(e,n,t){},17:function(e,n,t){"use strict";t.r(n);var r=t(0),o=t.n(r),a=t(5),c=t.n(a),i=(t(13),t(1)),s=t(3),l=t.n(s),u=t(6),d=t(2),f=function(e){var n=e.name,t=e.email,r=e.id;return o.a.createElement("div",{className:"tc grow bg-light-green br3 pa3 ma2 dib bw2 shadow-5"},o.a.createElement("img",{alt:"robots",src:"https://robohash.org/".concat(r,"?size=200x200")}),o.a.createElement("div",null,o.a.createElement("h2",null,n),o.a.createElement("p",null,t)))},h=function(e){var n=e.robots;return o.a.createElement("div",null,n.map(function(e,n){return o.a.createElement(f,{key:n,id:e.id,name:e.name,email:e.email})}))},m=function(e){e.searchfield;var n=e.searchChange;return o.a.createElement("div",{className:"pa2"},o.a.createElement("input",{"aria-label":"robots search",className:"pa3 ba b--green bg-lightest-blue",type:"search",placeholder:"search robots",onChange:n}))},b=function(e){return o.a.createElement("div",{style:{overflow:"auto",border:"5px solid black",height:"400px"}},e.children)},p=(t(15),function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(n.type){case"ROBOTS_FETCH_PEDDING":return Object(d.a)({},e,{isPedding:!0});case"ROBOTS_FETCH_SUCCESS":return Object(d.a)({},e,{isPedding:!1,robots:n.payload});case"ROBOTS_FETCH_ERROR":return Object(d.a)({},e,{isPedding:!1,error:n.payload});default:return e}}),g=function(){var e=Object(u.a)(l.a.mark(function e(n){var t;return l.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n({type:"ROBOTS_FETCH_PEDDING"}),e.prev=1,e.next=4,fetch("https://jsonplaceholder.typicode.com/users").then(function(e){return e.json()});case 4:t=e.sent,n({type:"ROBOTS_FETCH_SUCCESS",payload:t}),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),n({type:"ROBOTS_FETCH_ERROR",payload:e.t0});case 11:case"end":return e.stop()}},e,null,[[1,8]])}));return function(n){return e.apply(this,arguments)}}(),v=function(){var e=Object(r.useState)(""),n=Object(i.a)(e,2),t=n[0],a=n[1],c=Object(r.useState)(0),s=Object(i.a)(c,2),l=s[0],u=s[1],d=Object(r.useReducer)(p,{isPedding:!1,robots:[],error:""}),f=Object(i.a)(d,2),v=f[0],E=v.robots,w=v.isPedding,O=v.error,j=f[1];Object(r.useEffect)(function(){g(j)},[]);var C=Object(r.useMemo)(function(){return o.a.createElement("h1",{className:"f1"},"RoboFriends")},[]),y=Object(r.useMemo)(function(){return E.filter(function(e){return e.name.toLowerCase().includes(t.toLowerCase())})},[E,t]),R=Object(r.useMemo)(function(){return o.a.createElement(h,{robots:y})},[y]);return o.a.createElement("div",{className:"tc"},C,o.a.createElement("button",{onClick:function(){return u(function(e){return e+1})}},"Count: ".concat(l)),o.a.createElement(m,{searchChange:function(e){return a(e.target.value)}}),o.a.createElement(b,null,O?o.a.createElement("h1",null,"Error"):w?o.a.createElement("h1",null,"Loading"):R))},E=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function w(e){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var n=e.installing;n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}}).catch(function(e){console.error("Error during service worker registration:",e)})}t(16);c.a.render(o.a.createElement(v,null),document.getElementById("root")),function(){if("serviceWorker"in navigator){if(new URL("/robofriends",window.location).origin!==window.location.origin)return;window.addEventListener("load",function(){var e="".concat("/robofriends","/service-worker.js");E?function(e){fetch(e).then(function(n){404===n.status||-1===n.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):w(e)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(e):w(e)})}}()},7:function(e,n,t){e.exports=t(17)}},[[7,1,2]]]);
//# sourceMappingURL=main.36e11bfe.chunk.js.map