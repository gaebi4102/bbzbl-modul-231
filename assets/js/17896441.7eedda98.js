"use strict";(self.webpackChunkbbzbl_modul_431=self.webpackChunkbbzbl_modul_431||[]).push([[7918],{8390:(e,t,n)=>{n.d(t,{Z:()=>d});var l=n(6566),r=n(640),a=n(2991),c=n(7294);const s="container_B1kA",i="timeline_Ypeg",u="event_Xi2w",m="active_ZY81";n(2263);var o=n(6010);const b=e=>{let{title:t,children:n}=e;const l=()=>{const e=new Date;return Number(`${e.getHours()}${e.getMinutes()}`)},[r,a]=(0,c.useState)(l());setInterval((()=>{a(l())}),3600);return c.createElement("div",{className:s},t&&c.createElement("h1",null,c.createElement("div",null,t)),c.createElement("ul",{className:i},c.Children.map(n,((e,t)=>((e,t)=>{const n=Number(e.replace(":",""));if(t){const e=Number(t.replace(":",""));return n<=r&&r<e}return n<=r})(e?.props.time,n[t+1]?.props.time)?c.cloneElement(e,{active:!0}):c.cloneElement(e)))))},d={...l.Z,YouTube:r.Z,DocCardList:a.Z,Timeline:b,Event:e=>{let{time:t,active:n,children:l}=e;return c.createElement("li",{className:(0,o.Z)(u,n?m:""),"data-date":t},l)}}}}]);