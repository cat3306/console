(this["webpackJsonpportal-ui"]=this["webpackJsonpportal-ui"]||[]).push([[96],{402:function(e,t,n){"use strict";n(2);var a=n(41),s=n(441),c=n(443),i=n(307),r=n(319),o=n(96),l=n(387),d=n(74),j=n(75),b=n(42),g=n(23),m=n(0),u={toggleList:b.q},x=Object(a.b)((function(e){return{sidebarOpen:e.system.sidebarOpen,operatorMode:e.system.operatorMode,managerObjects:e.objectBrowser.objectManager.objectsToManage}}),u);t.a=x(Object(r.a)((function(e){return Object(i.a)({headerContainer:{width:"100%",minHeight:79,display:"flex",backgroundColor:"#fff",left:0,boxShadow:"rgba(0,0,0,.08) 0 3px 10px"},label:{display:"flex",justifyContent:"flex-start",alignItems:"center"},labelStyle:{color:"#000",fontSize:18,fontWeight:700,marginLeft:34,marginTop:8},rightMenu:{textAlign:"right"},logo:{marginLeft:34,fill:e.palette.primary.main,"& .min-icon":{width:120}}})}))((function(e){var t=e.classes,n=e.label,a=e.actions,i=e.sidebarOpen,r=e.operatorMode,b=e.managerObjects,u=e.toggleList;return Object(m.jsxs)(c.a,{container:!0,className:"".concat(t.headerContainer," page-header"),direction:"row",alignItems:"center",children:[Object(m.jsx)(s.a,{display:{xs:"block",sm:"block",md:"none"},children:Object(m.jsx)(c.a,{item:!0,xs:12,style:{height:10},children:"\xa0"})}),Object(m.jsxs)(c.a,{item:!0,xs:12,sm:12,md:6,className:t.label,children:[!i&&Object(m.jsx)("div",{className:t.logo,children:r?Object(m.jsx)(d.a,{}):Object(m.jsx)(j.a,{})}),Object(m.jsx)(o.a,{variant:"h4",className:t.labelStyle,children:n})]}),Object(m.jsxs)(c.a,{item:!0,xs:12,sm:12,md:6,className:t.rightMenu,children:[a&&a,b&&b.length>0&&Object(m.jsx)(l.a,{color:"primary","aria-label":"Refresh List",component:"span",onClick:function(){u()},size:"large",children:Object(m.jsx)(g.pb,{})})]})]})})))},404:function(e,t,n){"use strict";var a=n(1),s=(n(2),n(443)),c=n(307),i=n(319),r=n(122),o=n(0);t.a=Object(i.a)((function(e){return Object(c.a)(Object(a.a)({},r.s))}))((function(e){var t=e.classes,n=e.className,a=void 0===n?"":n,c=e.children;return Object(o.jsx)("div",{className:t.contentSpacer,children:Object(o.jsx)(s.a,{container:!0,children:Object(o.jsx)(s.a,{item:!0,xs:12,className:a,children:c})})})}))},426:function(e,t,n){"use strict";n(2);var a=n(20),s=n(307),c=n(319),i=n(23),r=n(0);t.a=Object(c.a)((function(e){return Object(s.a)({link:{display:"flex",alignItems:"center",textDecoration:"none",maxWidth:"250px",padding:"2rem 2rem 0rem 2rem",color:e.palette.primary.light,fontSize:".8rem","&:hover":{textDecoration:"underline"}},icon:{marginRight:".3rem",display:"flex",alignItems:"center",justifyContent:"center"}})}))((function(e){var t=e.to,n=e.label,s=e.classes,c=e.className;return Object(r.jsxs)(a.a,{to:t,className:"".concat(s.link," ").concat(c||""),children:[Object(r.jsx)("div",{className:s.icon,children:Object(r.jsx)(i.g,{})}),Object(r.jsx)("div",{className:s.label,children:n})]})}))},511:function(e,t,n){"use strict";n.d(t,"a",(function(){return a})),n.d(t,"c",(function(){return s})),n.d(t,"b",(function(){return c})),n.d(t,"d",(function(){return i}));var a=1006,s=1008,c=1011,i=function(e){var t="ws";return"https:"===e&&(t="wss"),t}},974:function(e,t,n){"use strict";n.r(t);var a=n(16),s=n(1),c=n(2),i=n(507),r=n(41),o=n(113),l="error",d="success",j="inProgress",b=n(307),g=n(319),m=n(511),u=n(122),x=n(443),f=n(385),O=n(402),h=n(32),p=n(482),v=n(426),S=n(657),y=n.n(S),N=n(23),C=n(52),w=n(0),k=Object(g.a)((function(e){return Object(b.a)({titleBar:{borderBottom:"#E5E5E5 1px solid",padding:"30px 25px",fontSize:20,color:"#07193E",fontWeight:"bold",borderRadius:"10px 10px 0px 0px",paddingTop:0},divisorContainer:{padding:25},serversData:{color:"#07193E",fontSize:18,display:"flex",alignItems:"center","& svg":{marginRight:10}},minioVersionContainer:{fontSize:12,color:"#07193E",justifyContent:"center",alignSelf:"center",alignItems:"center",display:"flex"},versionIcon:{color:"#07193E",marginRight:20},loaderAlign:{textAlign:"center"},advancedContainer:{justifyContent:"flex-end",display:"flex"},optionsContainer:{padding:0,marginBottom:25},advancedConfiguration:{color:"#2781B0",fontSize:10,textDecoration:"underline",border:"none",backgroundColor:"transparent",cursor:"pointer",alignItems:"center",display:"flex","&:hover":{color:"#07193E"},"& svg":{width:10,alignSelf:"center",marginLeft:5}},advancedOpen:{transform:"rotateZ(-90deg) translateX(-4px) translateY(2px)"},advancedClosed:{transform:"rotateZ(90deg)"},advancedContent:{backgroundColor:"#F5F7F9",maxHeight:0,transitionDuration:"0.3s",overflow:"hidden",padding:"0 15px","&.open":{maxHeight:400,padding:15}}})}))((function(e){var t=e.title,n=e.children,s=e.classes,i=e.advancedVisible,r=e.advancedContent,o=Object(c.useState)("N/A"),l=Object(a.a)(o,2),d=l[0],j=l[1],b=Object(c.useState)(0),g=Object(a.a)(b,2),m=g[0],u=g[1],f=Object(c.useState)(0),O=Object(a.a)(f,2),h=O[0],v=O[1],S=Object(c.useState)(!0),k=Object(a.a)(S,2),D=k[0],I=k[1],E=Object(c.useState)(!1),M=Object(a.a)(E,2),R=M[0],A=M[1];return Object(c.useEffect)((function(){D&&C.a.invoke("GET","/api/v1/admin/info?defaultOnly=true").then((function(e){var t,n=null===(t=e.servers)||void 0===t?void 0:t.length;if(u(n),e.servers.length>0){j(e.servers[0].version);var a=e.servers.reduce((function(e,t){return e+t.drives.length}),0);v(a)}I(!1)})).catch((function(e){I(!1)}))}),[D]),Object(w.jsxs)(x.a,{item:!0,xs:12,children:[Object(w.jsx)(x.a,{item:!0,xs:12,className:s.titleBar,children:t}),Object(w.jsxs)(x.a,{item:!0,xs:12,children:[Object(w.jsxs)(x.a,{item:!0,xs:12,className:s.optionsContainer,children:[Object(w.jsx)(x.a,{container:!0,className:s.divisorContainer,children:D?Object(w.jsx)(c.Fragment,{children:Object(w.jsx)(x.a,{item:!0,xs:12,className:s.loaderAlign,children:Object(w.jsx)(p.a,{size:25})})}):Object(w.jsxs)(c.Fragment,{children:[Object(w.jsxs)(x.a,{item:!0,xs:12,md:4,className:s.serversData,children:[Object(w.jsx)(N.y,{})," ",Object(w.jsx)("strong",{children:m}),"\xa0nodes,\xa0",Object(w.jsx)("strong",{children:h}),"\xa0 drives"]}),Object(w.jsxs)(x.a,{item:!0,xs:12,md:4,className:s.minioVersionContainer,children:[Object(w.jsx)("span",{className:s.versionIcon,children:Object(w.jsx)(N.Xb,{})})," ","MinIO VERSION\xa0",Object(w.jsx)("strong",{children:d})]}),Object(w.jsx)(x.a,{item:!0,xs:12,md:4,className:s.advancedContainer,children:i&&Object(w.jsxs)("button",{onClick:function(){A(!R)},className:s.advancedConfiguration,children:["Advanced configurations"," ",Object(w.jsx)("span",{className:R?s.advancedOpen:s.advancedClosed,children:Object(w.jsx)(y.a,{})})]})})]})}),r&&Object(w.jsx)(x.a,{xs:12,className:"".concat(s.advancedContent," ").concat(R?"open":""),children:r})]}),n]})]})})),D=n(404),I=Object(r.b)((function(e){return{message:e.healthInfo.message,serverDiagnosticStatus:e.system.serverDiagnosticStatus}}),{healthInfoMessageReceived:o.c,healthInfoResetMessage:o.d,setSnackBarMessage:h.k,setServerDiagStat:h.j});t.default=I(Object(g.a)((function(e){return Object(b.a)(Object(s.a)(Object(s.a)({loading:{paddingTop:8,paddingLeft:40},buttons:{justifyContent:"flex-start",gap:20},localMessage:{fontSize:24,color:"#07193E",fontWeight:"bold",textAlign:"center",marginBottom:10},startDiagnostic:{textAlign:"center",marginBottom:25},progressResult:{textAlign:"center",marginBottom:25},diagNew:{textAlign:"right",margin:25,marginBottom:0}},u.a),Object(u.f)(e.spacing(4))))}))((function(e){var t=e.classes,n=e.healthInfoMessageReceived,s=e.healthInfoResetMessage,r=e.message,o=e.setSnackBarMessage,b=e.setServerDiagStat,g=e.serverDiagnosticStatus,u=Object(c.useState)(!1),h=Object(a.a)(u,2),S=h[0],y=h[1],N=Object(c.useState)(!1),C=Object(a.a)(N,2),I=C[0],E=C[1],M=Object(c.useState)(!0),R=Object(a.a)(M,2),A=R[0],B=R[1],z=Object(c.useState)(""),L=Object(a.a)(z,2),F=L[0],T=L[1],V=Object(c.useState)("New Diagnostic"),W=Object(a.a)(V,2),J=W[0],H=W[1];return Object(c.useEffect)((function(){g!==j?g===d&&I?H("Diagnostic complete"):g!==l||H("Error"):H("Diagnostic in progress...")}),[g,S,I]),Object(c.useEffect)((function(){g===d&&r!=={}&&B(!1),g===j&&B(!0),y(!1)}),[g,r]),Object(c.useEffect)((function(){if(S){s();var e=new URL(window.location.toString()),t=e.port,a=Object(m.d)(e.protocol),c=new i.w3cwebsocket("".concat(a,"://").concat(e.hostname,":").concat(t,"/ws/health-info?deadline=1h")),r=null;null!==c&&(c.onopen=function(){console.log("WebSocket Client Connected"),c.send("ok"),r=setInterval((function(){c.send("ok")}),1e4),E(!0),T("Diagnostic started. Please do not refresh page during diagnosis."),b(j)},c.onmessage=function(e){var t=JSON.parse(e.data.toString());t.timestamp=new Date(t.timestamp.toString()),n(t)},c.onerror=function(e){console.log("error closing websocket:",e.message),c.close(1e3),clearInterval(r),b(l)},c.onclose=function(e){clearInterval(r),e.code===m.b||e.code===m.c||e.code===m.a?(console.log("connection closed by server with code:",e.code),T("An error occurred while getting Diagnostic file."),b(l)):(console.log("connection closed by server"),T("Diagnostic file is ready to be downloaded."),b(d))})}else y(!1)}),[n,s,S,o,b]),Object(w.jsxs)(c.Fragment,{children:[Object(w.jsx)(O.a,{label:"Diagnostic"}),Object(w.jsx)(v.a,{to:"/tools",label:"Return to Tools"}),Object(w.jsx)(D.a,{children:Object(w.jsx)(x.a,{item:!0,xs:12,className:t.boxy,children:Object(w.jsx)(k,{title:J,advancedVisible:!1,children:Object(w.jsxs)(x.a,{container:!0,className:t.buttons,children:[!I&&Object(w.jsx)(x.a,{item:!0,xs:12,className:t.startDiagnostic,children:Object(w.jsx)(f.a,{type:"submit",variant:"contained",color:"primary",disabled:S,onClick:function(){return y(!0)},children:"Start Diagnostic"})},"start-diag"),I&&Object(w.jsxs)(x.a,{item:!0,xs:12,className:t.progressResult,children:[Object(w.jsx)("div",{className:t.localMessage,children:F}),g===j?Object(w.jsx)("div",{className:t.loading,children:Object(w.jsx)(p.a,{size:25})}):Object(w.jsxs)(c.Fragment,{children:[g!==l&&Object(w.jsx)(f.a,{type:"submit",variant:"contained",color:"primary",onClick:function(){!function(e,t){var n=document.createElement("a");n.setAttribute("href","data:text/plain;charset=utf-8,"+encodeURIComponent(t)),n.setAttribute("download",e),n.style.display="none",document.body.appendChild(n),n.click(),document.body.removeChild(n)}("diagnostic.json",JSON.stringify(r,null,2))},disabled:A,children:"Download"}),Object(w.jsx)(x.a,{item:!0,xs:12,className:t.diagNew,children:Object(w.jsx)(f.a,{type:"submit",variant:"contained",color:"primary",disabled:S,onClick:function(){return y(!0)},children:"Start New Diagnostic"})})]})]},"start-download")]})})})})]})})))}}]);
//# sourceMappingURL=96.de52525f.chunk.js.map