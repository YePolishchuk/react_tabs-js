(this["webpackJsonpreact_tabs-js"]=this["webpackJsonpreact_tabs-js"]||[]).push([[0],{12:function(t,e,n){},14:function(t,e,n){"use strict";n.r(e);var c=n(3),a=n.n(c),i=n(5),s=n(1),d=(n(10),n(11),n(12),n(4)),r=n.n(d),b=n(0),o=function(t){var e=t.tabs,n=t.currentTabId,c=t.setCurrentTabId,a=e.find((function(t){return t.id===n}))||e[0];return Object(b.jsxs)("div",{"data-cy":"TabsComponent",children:[Object(b.jsx)("div",{className:"tabs is-boxed",children:Object(b.jsx)("ul",{children:e.map((function(t){return Object(b.jsx)("li",{className:r()({"is-active":t.id===a.id}),"data-cy":"Tab",children:Object(b.jsx)("a",{href:"#".concat(t.id),"data-cy":"TabLink",onClick:function(){n!==t.id&&c(t)},children:t.title})},t.id)}))})}),Object(b.jsx)("div",{className:"block","data-cy":"TabContent",children:a.content})]})},l=[{id:"tab-1",title:"Tab 1",content:"Some text 1"},{id:"tab-2",title:"Tab 2",content:"Some text 2"},{id:"tab-3",title:"Tab 3",content:"Some text 3"}],j=function(){var t=Object(s.useState)(l[0].id),e=Object(i.a)(t,2),n=e[0],c=e[1],a=l.find((function(t){return t.id===n}));return Object(b.jsxs)("div",{className:"section",children:[Object(b.jsx)("h1",{className:"title",children:"Selected tab is ".concat(a.title)}),Object(b.jsx)(o,{tabs:l,currentTabId:n,setCurrentTabId:function(t){return c(t.id)}})]})};a.a.render(Object(b.jsx)(j,{}),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.a2562733.chunk.js.map