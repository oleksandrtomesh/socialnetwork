(this["webpackJsonpreact-1"]=this["webpackJsonpreact-1"]||[]).push([[6],{205:function(e,t,c){"use strict";c.r(t);var r=c(50),s=c(0),n=c.n(s),a=c(9),i=c(72),j=c(86),u=c(57),b=c(181),l=c(144),o=c(180),d=c(145),h=c(190),m=c(42),O=c(2),x=function(){var e=Object(a.c)(),t=Object(a.d)((function(e){return e.chat.status}));return Object(s.useEffect)((function(){return e(Object(j.c)()),function(){e(Object(j.d)())}}),[]),Object(O.jsxs)("div",{children:["error"===t&&Object(O.jsx)("div",{children:"Some error ocurred. Please refresh tha page"}),Object(O.jsxs)(b.a,{container:!0,direction:"column",spacing:2,children:[Object(O.jsx)(b.a,{item:!0,children:Object(O.jsx)(l.a,{square:!0,children:Object(O.jsx)(g,{})})}),Object(O.jsx)(b.a,{item:!0,children:Object(O.jsx)(v,{})})]})]})},g=n.a.memo((function(){var e=Object(a.d)((function(e){return e.chat.messages})),t=Object(s.useRef)(null),c=Object(s.useState)(!1),n=Object(r.a)(c,2),i=n[0],j=n[1];return Object(s.useEffect)((function(){var e;i&&(null===(e=t.current)||void 0===e||e.scrollIntoView({behavior:"smooth"}))}),[e]),Object(O.jsxs)("div",{onScroll:function(e){var t=e.currentTarget;Math.abs(t.scrollHeight-t.scrollTop-t.clientHeight)<500?!i&&j(!0):i&&j(!1)},style:{overflowY:"scroll",height:"500px",padding:"1rem 0 0 1rem"},children:[e.map((function(e){return Object(O.jsx)(f,{message:e},e.id)})),Object(O.jsx)("div",{ref:t})]})})),f=n.a.memo((function(e){var t=e.message;return Object(O.jsxs)("div",{children:[Object(O.jsx)("img",{src:t.photo?t.photo:u.a,style:{width:"30px",marginRight:"1rem"},alt:"user chat avatar"}),Object(O.jsx)("b",{children:t.userName}),Object(O.jsx)("br",{}),Object(O.jsx)(o.a,{children:t.message}),Object(O.jsx)("hr",{})]})})),v=function(){var e=Object(a.d)((function(e){return e.chat.status})),t=Object(h.d)({initialValues:{message:""},onSubmit:function(e,t){var c=t.setSubmitting,r=t.resetForm;e&&(Object(j.b)(e.message),r({}),c(!1))}});return Object(O.jsx)(l.a,{square:!0,style:{padding:"1rem"},children:Object(O.jsx)("form",{onSubmit:t.handleSubmit,children:Object(O.jsxs)(b.a,{container:!0,direction:"row",spacing:2,children:[Object(O.jsx)(b.a,{item:!0,xs:12,sm:9,children:Object(O.jsx)(d.a,{fullWidth:!0,variant:"outlined",size:"small",id:"message",name:"message",label:"Type your message",value:t.values.message,onChange:t.handleChange})}),Object(O.jsx)(b.a,{item:!0,xs:12,sm:3,children:Object(O.jsx)(m.a,{disabled:"ready"!==e||t.isSubmitting,children:"Send"})})]})})})};t.default=Object(i.a)((function(){return Object(O.jsx)(O.Fragment,{children:Object(O.jsx)(x,{})})}))}}]);
//# sourceMappingURL=6.849baab5.chunk.js.map