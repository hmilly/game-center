"use strict";(self.webpackChunkwhack_a_mole=self.webpackChunkwhack_a_mole||[]).push([[983],{9569:function(t,e,n){var u=n(7294),r=n(9105);e.Z=function(t){var e=t.name,n=t.text,a=t.start,c=t.setStart,l=t.count,o=(0,u.useState)(60),s=o[0],m=o[1];return(0,u.useEffect)((function(){a&&s>0?setTimeout((function(){return m(s-1)}),1e3):a&&0!==s||(m(60),c(!1))})),u.createElement(r.h,{btnCol:a?"red":"lightgreen"},u.createElement("h1",null,e),u.createElement("p",null,n),u.createElement("button",{onClick:function(){return c(!a)}},a?"Stop game":"Start game"),u.createElement("div",null,u.createElement("p",null,"Time remaining:"),u.createElement("p",null,s),u.createElement("p",null,"Score:"),u.createElement("p",null,l)))}},7614:function(t,e,n){n.r(e),n.d(e,{default:function(){return m}});var u=n(7294),r=n(9973),a=n(9105),c=n(1347),l=n.p+"static/mole-14e71d1f94a05705838023148932ae5b.png",o=function(t){var e=t.count,n=t.setCount,r=t.start,a=(0,u.useState)(0),c=a[0],o=a[1],s=function(){return Math.round(1800*Math.random()+500)};(0,u.useEffect)((function(){if(r&&0===c){var t=s();setTimeout((function(){o(t)}),[t+2e3])}else{if(!r)return;var e=s();setTimeout((function(){o(0)}),e)}}),[c,r]);return u.createElement("li",null,r&&c>0?u.createElement("img",{src:l,onClick:function(){return o(0),void(r&&n(e+=5))},alt:"mole"}):"",u.createElement("span",null,"🕳️"))},s=n(9569),m=function(){var t=(0,u.useState)(!1),e=t[0],n=t[1],l=(0,u.useState)(0),m=l[0],i=l[1];return(0,u.useEffect)((function(){e&&i(0)}),[e]),u.createElement(c.Z,null,u.createElement(a.W,null,u.createElement(s.Z,{name:"Whack-a-Mole",text:"Get him!",start:e,setStart:n,count:m}),u.createElement(r.Ul,null,u.createElement(o,{count:m,setCount:i,start:e}),u.createElement(o,{count:m,setCount:i,start:e}),u.createElement(o,{count:m,setCount:i,start:e}),u.createElement(o,{count:m,setCount:i,start:e}),u.createElement(o,{count:m,setCount:i,start:e}),u.createElement(o,{count:m,setCount:i,start:e}),u.createElement(o,{count:m,setCount:i,start:e}),u.createElement(o,{count:m,setCount:i,start:e}),u.createElement(o,{count:m,setCount:i,start:e}))))}}}]);
//# sourceMappingURL=component---src-pages-whack-mole-js-b1cb00c82a2462654394.js.map