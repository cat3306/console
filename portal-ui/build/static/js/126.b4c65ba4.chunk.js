(this["webpackJsonpportal-ui"]=this["webpackJsonpportal-ui"]||[]).push([[126],{411:function(e,t,n){"use strict";var a=n(1),c=n(2),o=n.n(c),s=n(413),i=n(414),r=n(415),l=n(458),u=n(385),b=n(467),d=n(387),j=n(125),O=n.n(j),f=n(307),m=n(319),p=n(122),v=n(0);t.a=Object(m.a)((function(e){return Object(f.a)(Object(a.a)({},p.h))}))((function(e){var t=e.isOpen,n=void 0!==t&&t,c=e.onClose,j=e.onCancel,f=e.onConfirm,m=e.classes,p=void 0===m?{}:m,x=e.title,h=void 0===x?"":x,C=e.isLoading,g=e.confirmationContent,k=e.cancelText,N=void 0===k?"Cancel":k,T=e.confirmText,y=void 0===T?"Confirm":T,B=e.confirmButtonProps,P=void 0===B?{}:B,S=e.cancelButtonProps,w=void 0===S?{}:S;return Object(v.jsxs)(s.a,{open:n,onClose:function(e,t){"backdropClick"!==t&&c()},className:p.root,sx:{"& .MuiPaper-root":{padding:"1rem 2rem 2rem 1rem"}},children:[Object(v.jsxs)(i.a,{className:p.title,children:[Object(v.jsx)("div",{className:p.titleText,children:h}),Object(v.jsx)("div",{className:p.closeContainer,children:Object(v.jsx)(d.a,{"aria-label":"close",className:p.closeButton,onClick:c,disableRipple:!0,size:"small",children:Object(v.jsx)(O.a,{})})})]}),Object(v.jsx)(r.a,{className:p.content,children:g}),Object(v.jsxs)(l.a,{className:p.actions,children:[Object(v.jsx)(u.a,Object(a.a)(Object(a.a)({className:p.cancelButton,onClick:j||c,disabled:C,type:"button"},w),{},{variant:"outlined",color:"primary",children:N})),Object(v.jsx)(b.a,Object(a.a)(Object(a.a)({className:p.confirmButton,type:"button",onClick:f,loading:C,disabled:C,variant:"outlined",color:"secondary",loadingPosition:"start",startIcon:Object(v.jsx)(o.a.Fragment,{}),autoFocus:!0},P),{},{children:y}))]})]})}))},434:function(e,t,n){"use strict";var a=n(16),c=n(2),o=n(52);t.a=function(e,t){var n=Object(c.useState)(!1),s=Object(a.a)(n,2),i=s[0],r=s[1];return[i,function(n,a,c){r(!0),o.a.invoke(n,a,c).then((function(t){r(!1),e(t)})).catch((function(e){r(!1),t(e)}))}]}},901:function(e,t,n){"use strict";n.r(t);var a=n(16),c=n(1),o=(n(2),n(39)),s=n.n(o),i=n(41),r=n(466),l=n(307),u=n(319),b=n(122),d=n(32),j=n(434),O=n(411),f=n(0),m={setErrorSnackMessage:d.e},p=Object(i.b)((function(e){var t=e.system;return{distributedSetup:s()(t,"distributedSetup",!1)}}),m);t.default=Object(u.a)((function(e){return Object(l.a)(Object(c.a)({},b.p))}))(p((function(e){var t=e.deleteOpen,n=e.currentTags,o=e.selectedTag,s=e.onCloseAndUpdate,i=e.bucketName,l=e.setErrorSnackMessage,u=e.classes,b=Object(a.a)(o,2),d=b[0],m=b[1],p=Object(j.a)((function(){return s(!0)}),(function(e){return l(e)})),v=Object(a.a)(p,2),x=v[0],h=v[1];if(!o)return null;return Object(f.jsx)(O.a,{title:"Delete Tag",confirmText:"Delete",isOpen:t,isLoading:x,onConfirm:function(){var e=Object(c.a)({},n);delete e[d],h("PUT","/api/v1/buckets/".concat(i,"/tags"),{tags:e})},onClose:function(){return s(!1)},confirmationContent:Object(f.jsxs)(r.a,{children:["Are you sure you want to delete the tag"," ",Object(f.jsxs)("b",{className:u.wrapText,children:[d," : ",m]})," ","?"]})})})))}}]);
//# sourceMappingURL=126.b4c65ba4.chunk.js.map