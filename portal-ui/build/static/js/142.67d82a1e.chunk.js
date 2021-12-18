(this["webpackJsonpportal-ui"]=this["webpackJsonpportal-ui"]||[]).push([[142],{443:function(e,c,s){"use strict";var t=s(13),j=s(5),b=s(4),n=s(3),r=s(2),i=(s(12),s(8)),x=s(25),m=s(372),a=s(94),o=s(9),O=s(14);var d=r.createContext(),l=s(70),h=s(95);function u(e){return Object(l.a)("MuiGrid",e)}var p=["auto",!0,1,2,3,4,5,6,7,8,9,10,11,12],g=Object(h.a)("MuiGrid",["root","container","item","zeroMinWidth"].concat(Object(t.a)([0,1,2,3,4,5,6,7,8,9,10].map((function(e){return"spacing-xs-".concat(e)}))),Object(t.a)(["column-reverse","column","row-reverse","row"].map((function(e){return"direction-xs-".concat(e)}))),Object(t.a)(["nowrap","wrap-reverse","wrap"].map((function(e){return"wrap-xs-".concat(e)}))),Object(t.a)(p.map((function(e){return"grid-xs-".concat(e)}))),Object(t.a)(p.map((function(e){return"grid-sm-".concat(e)}))),Object(t.a)(p.map((function(e){return"grid-md-".concat(e)}))),Object(t.a)(p.map((function(e){return"grid-lg-".concat(e)}))),Object(t.a)(p.map((function(e){return"grid-xl-".concat(e)}))))),I=s(0),v=["className","columns","columnSpacing","component","container","direction","item","lg","md","rowSpacing","sm","spacing","wrap","xl","xs","zeroMinWidth"];function f(e){var c=parseFloat(e);return"".concat(c).concat(String(e).replace(String(c),"")||"px")}function S(e,c){var s=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if(!c||!e||e<=0)return[];if("string"===typeof e&&!Number.isNaN(Number(e))||"number"===typeof e)return[s["spacing-xs-".concat(String(e))]||"spacing-xs-".concat(String(e))];var t=e.xs,j=e.sm,b=e.md,n=e.lg,r=e.xl;return[Number(t)>0&&(s["spacing-xs-".concat(String(t))]||"spacing-xs-".concat(String(t))),Number(j)>0&&(s["spacing-sm-".concat(String(j))]||"spacing-sm-".concat(String(j))),Number(b)>0&&(s["spacing-md-".concat(String(b))]||"spacing-md-".concat(String(b))),Number(n)>0&&(s["spacing-lg-".concat(String(n))]||"spacing-lg-".concat(String(n))),Number(r)>0&&(s["spacing-xl-".concat(String(r))]||"spacing-xl-".concat(String(r)))]}var w=Object(o.a)("div",{name:"MuiGrid",slot:"Root",overridesResolver:function(e,c){var s=e.ownerState,j=s.container,b=s.direction,n=s.item,r=s.lg,i=s.md,x=s.sm,m=s.spacing,a=s.wrap,o=s.xl,O=s.xs,d=s.zeroMinWidth;return[c.root,j&&c.container,n&&c.item,d&&c.zeroMinWidth].concat(Object(t.a)(S(m,j,c)),["row"!==b&&c["direction-xs-".concat(String(b))],"wrap"!==a&&c["wrap-xs-".concat(String(a))],!1!==O&&c["grid-xs-".concat(String(O))],!1!==x&&c["grid-sm-".concat(String(x))],!1!==i&&c["grid-md-".concat(String(i))],!1!==r&&c["grid-lg-".concat(String(r))],!1!==o&&c["grid-xl-".concat(String(o))]])}})((function(e){var c=e.ownerState;return Object(n.a)({boxSizing:"border-box"},c.container&&{display:"flex",flexWrap:"wrap",width:"100%"},c.item&&{margin:0},c.zeroMinWidth&&{minWidth:0},"nowrap"===c.wrap&&{flexWrap:"nowrap"},"reverse"===c.wrap&&{flexWrap:"wrap-reverse"})}),(function(e){var c=e.theme,s=e.ownerState,t=Object(x.d)({values:s.direction,breakpoints:c.breakpoints.values});return Object(x.b)({theme:c},t,(function(e){var c={flexDirection:e};return 0===e.indexOf("column")&&(c["& > .".concat(g.item)]={maxWidth:"none"}),c}))}),(function(e){var c=e.theme,s=e.ownerState,t=s.container,b=s.rowSpacing,n={};if(t&&0!==b){var r=Object(x.d)({values:b,breakpoints:c.breakpoints.values});n=Object(x.b)({theme:c},r,(function(e){var s=c.spacing(e);return"0px"!==s?Object(j.a)({marginTop:"-".concat(f(s))},"& > .".concat(g.item),{paddingTop:f(s)}):{}}))}return n}),(function(e){var c=e.theme,s=e.ownerState,t=s.container,b=s.columnSpacing,n={};if(t&&0!==b){var r=Object(x.d)({values:b,breakpoints:c.breakpoints.values});n=Object(x.b)({theme:c},r,(function(e){var s=c.spacing(e);return"0px"!==s?Object(j.a)({width:"calc(100% + ".concat(f(s),")"),marginLeft:"-".concat(f(s))},"& > .".concat(g.item),{paddingLeft:f(s)}):{}}))}return n}),(function(e){var c=e.theme,s=e.ownerState;return c.breakpoints.keys.reduce((function(e,t){return function(e,c,s,t){var j=t[s];if(j){var b={};if(!0===j)b={flexBasis:0,flexGrow:1,maxWidth:"100%"};else if("auto"===j)b={flexBasis:"auto",flexGrow:0,flexShrink:0,maxWidth:"none",width:"auto"};else{var r=Object(x.d)({values:t.columns,breakpoints:c.breakpoints.values}),i="object"===typeof r?r[s]:r,m="".concat(Math.round(j/i*1e8)/1e6,"%"),a={};if(t.container&&t.item&&0!==t.columnSpacing){var o=c.spacing(t.columnSpacing);if("0px"!==o){var O="calc(".concat(m," + ").concat(f(o),")");a={flexBasis:O,maxWidth:O}}}b=Object(n.a)({flexBasis:m,flexGrow:0,maxWidth:m},a)}0===c.breakpoints.values[s]?Object.assign(e,b):e[c.breakpoints.up(s)]=b}}(e,c,t,s),e}),{})})),F=r.forwardRef((function(e,c){var s,j=Object(O.a)({props:e,name:"MuiGrid"}),x=Object(m.a)(j),o=x.className,l=x.columns,h=x.columnSpacing,p=x.component,g=void 0===p?"div":p,f=x.container,F=void 0!==f&&f,k=x.direction,W=void 0===k?"row":k,M=x.item,N=void 0!==M&&M,L=x.lg,C=void 0!==L&&L,B=x.md,A=void 0!==B&&B,z=x.rowSpacing,T=x.sm,D=void 0!==T&&T,R=x.spacing,y=void 0===R?0:R,G=x.wrap,P=void 0===G?"wrap":G,U=x.xl,H=void 0!==U&&U,J=x.xs,E=void 0!==J&&J,V=x.zeroMinWidth,X=void 0!==V&&V,q=Object(b.a)(x,v),K=z||y,Q=h||y,Y=r.useContext(d),Z=l||Y||12,$=Object(n.a)({},x,{columns:Z,container:F,direction:W,item:N,lg:C,md:A,sm:D,rowSpacing:K,columnSpacing:Q,wrap:P,xl:H,xs:E,zeroMinWidth:X}),_=function(e){var c=e.classes,s=e.container,j=e.direction,b=e.item,n=e.lg,r=e.md,i=e.sm,x=e.spacing,m=e.wrap,o=e.xl,O=e.xs,d={root:["root",s&&"container",b&&"item",e.zeroMinWidth&&"zeroMinWidth"].concat(Object(t.a)(S(x,s)),["row"!==j&&"direction-xs-".concat(String(j)),"wrap"!==m&&"wrap-xs-".concat(String(m)),!1!==O&&"grid-xs-".concat(String(O)),!1!==i&&"grid-sm-".concat(String(i)),!1!==r&&"grid-md-".concat(String(r)),!1!==n&&"grid-lg-".concat(String(n)),!1!==o&&"grid-xl-".concat(String(o))])};return Object(a.a)(d,u,c)}($);return s=Object(I.jsx)(w,Object(n.a)({ownerState:$,className:Object(i.a)(_.root,o),as:g,ref:c},q)),12!==Z?Object(I.jsx)(d.Provider,{value:Z,children:s}):s}));c.a=F},950:function(e,c,s){"use strict";s.r(c);var t=s(1),j=(s(2),s(122)),b=s(307),n=s(319),r=s(443),i=s(23),x=s(144),m=s(161),a=s(0);c.default=Object(n.a)((function(e){return Object(b.a)(Object(t.a)(Object(t.a)({},Object(j.f)(e.spacing(4))),{},{root:{fontSize:12,wordWrap:"break-word"}}))}))((function(e){var c=e.classes;return Object(a.jsx)("div",{className:c.container,children:Object(a.jsxs)(r.a,{container:!0,spacing:4,textAlign:"center",className:c.root,children:[Object(a.jsxs)(r.a,{item:!0,xs:3,sm:2,md:1,children:[Object(a.jsx)(i.a,{})," ",Object(a.jsx)("br",{}),"AccountIcon"]}),Object(a.jsxs)(r.a,{item:!0,xs:3,sm:2,md:1,children:[Object(a.jsx)(i.b,{})," ",Object(a.jsx)("br",{}),"AddFolderIcon"]}),Object(a.jsxs)(r.a,{item:!0,xs:3,sm:2,md:1,children:[Object(a.jsx)(i.c,{})," ",Object(a.jsx)("br",{}),"AddIcon"]}),Object(a.jsxs)(r.a,{item:!0,xs:3,sm:2,md:1,children:[Object(a.jsx)(i.d,{})," ",Object(a.jsx)("br",{}),"AllBucketsIcon"]}),Object(a.jsxs)(r.a,{item:!0,xs:3,sm:2,md:1,children:[Object(a.jsx)(i.e,{})," ",Object(a.jsx)("br",{}),"ArrowIcon"]}),Object(a.jsxs)(r.a,{item:!0,xs:3,sm:2,md:1,children:[Object(a.jsx)(i.f,{})," ",Object(a.jsx)("br",{}),"ArrowRightIcon"]}),Object(a.jsxs)(r.a,{item:!0,xs:3,sm:2,md:1,children:[Object(a.jsx)(i.g,{})," ",Object(a.jsx)("br",{}),"BackSettingsIcon"]}),Object(a.jsxs)(r.a,{item:!0,xs:3,sm:2,md:1,children:[Object(a.jsx)(i.h,{})," ",Object(a.jsx)("br",{}),"BucketsIcon"]}),Object(a.jsxs)(r.a,{item:!0,xs:3,sm:2,md:1,children:[Object(a.jsx)(i.i,{})," ",Object(a.jsx)("br",{}),"CalendarIcon"]}),Object(a.jsxs)(r.a,{item:!0,xs:3,sm:2,md:1,children:[Object(a.jsx)(i.j,{})," ",Object(a.jsx)("br",{}),"CircleIcon"]}),Object(a.jsxs)(r.a,{item:!0,xs:3,sm:2,md:1,children:[Object(a.jsx)(i.k,{})," ",Object(a.jsx)("br",{}),"ClustersIcon"]}),Object(a.jsxs)(r.a,{item:!0,xs:3,sm:2,md:1,children:[Object(a.jsx)(i.l,{})," ",Object(a.jsx)("br",{}),"CollapseIcon"]}),Object(a.jsxs)(r.a,{item:!0,xs:3,sm:2,md:1,children:[Object(a.jsx)(i.m,{})," ",Object(a.jsx)("br",{}),"ComputerLineIcon"]}),Object(a.jsxs)(r.a,{item:!0,xs:3,sm:2,md:1,children:[Object(a.jsx)(i.n,{})," ",Object(a.jsx)("br",{}),"ConfigurationsListIcon"]}),Object(a.jsxs)(r.a,{item:!0,xs:3,sm:2,md:1,children:[Object(a.jsx)(i.o,{})," ",Object(a.jsx)("br",{}),"ConsoleIcon"]}),Object(a.jsxs)(r.a,{item:!0,xs:3,sm:2,md:1,children:[Object(a.jsx)(i.p,{})," ",Object(a.jsx)("br",{}),"ConsoleLogo"]}),Object(a.jsxs)(r.a,{item:!0,xs:3,sm:2,md:1,children:[Object(a.jsx)(i.q,{})," ",Object(a.jsx)("br",{}),"CopyIcon"]}),Object(a.jsxs)(r.a,{item:!0,xs:3,sm:2,md:1,children:[Object(a.jsx)(i.r,{})," ",Object(a.jsx)("br",{}),"CreateIcon"]}),Object(a.jsxs)(r.a,{item:!0,xs:3,sm:2,md:1,children:[Object(a.jsx)(i.s,{})," ",Object(a.jsx)("br",{}),"DashboardIcon"]}),Object(a.jsxs)(r.a,{item:!0,xs:3,sm:2,md:1,children:[Object(a.jsx)(i.t,{})," ",Object(a.jsx)("br",{}),"DeleteIcon"]}),Object(a.jsxs)(r.a,{item:!0,xs:3,sm:2,md:1,children:[Object(a.jsx)(i.u,{})," ",Object(a.jsx)("br",{}),"DiagnosticsIcon"]}),Object(a.jsxs)(r.a,{item:!0,xs:3,sm:2,md:1,children:[Object(a.jsx)(i.v,{})," ",Object(a.jsx)("br",{}),"DocumentationIcon"]}),Object(a.jsxs)(r.a,{item:!0,xs:3,sm:2,md:1,children:[Object(a.jsx)(i.w,{})," ",Object(a.jsx)("br",{}),"DownloadIcon"]}),Object(a.jsxs)(r.a,{item:!0,xs:3,sm:2,md:1,children:[Object(a.jsx)(i.x,{})," ",Object(a.jsx)("br",{}),"DownloadStatIcon"]}),Object(a.jsxs)(r.a,{item:!0,xs:3,sm:2,md:1,children:[Object(a.jsx)(i.y,{})," ",Object(a.jsx)("br",{}),"DrivesIcon"]}),Object(a.jsxs)(r.a,{item:!0,xs:3,sm:2,md:1,children:[Object(a.jsx)(i.z,{})," ",Object(a.jsx)("br",{}),"EditIcon"]}),Object(a.jsxs)(r.a,{item:!0,xs:3,sm:2,md:1,children:[Object(a.jsx)(i.A,{})," ",Object(a.jsx)("br",{}),"EgressIcon"]}),Object(a.jsxs)(r.a,{item:!0,xs:3,sm:2,md:1,children:[Object(a.jsx)(i.B,{})," ",Object(a.jsx)("br",{}),"FileBookIcon"]}),Object(a.jsxs)(r.a,{item:!0,xs:3,sm:2,md:1,children:[Object(a.jsx)(i.C,{})," ",Object(a.jsx)("br",{}),"FileCloudIcon"]}),Object(a.jsxs)(r.a,{item:!0,xs:3,sm:2,md:1,children:[Object(a.jsx)(i.D,{})," ",Object(a.jsx)("br",{}),"FileCodeIcon"]}),Object(a.jsxs)(r.a,{item:!0,xs:3,sm:2,md:1,children:[Object(a.jsx)(i.E,{})," ",Object(a.jsx)("br",{}),"FileConfigIcon"]}),Object(a.jsxs)(r.a,{item:!0,xs:3,sm:2,md:1,children:[Object(a.jsx)(i.F,{})," ",Object(a.jsx)("br",{}),"FileDbIcon"]}),Object(a.jsxs)(r.a,{item:!0,xs:3,sm:2,md:1,children:[Object(a.jsx)(i.G,{})," ",Object(a.jsx)("br",{}),"FileFontIcon"]}),Object(a.jsxs)(r.a,{item:!0,xs:3,sm:2,md:1,children:[Object(a.jsx)(i.H,{})," ",Object(a.jsx)("br",{}),"FileImageIcon"]}),Object(a.jsxs)(r.a,{item:!0,xs:3,sm:2,md:1,children:[Object(a.jsx)(i.I,{})," ",Object(a.jsx)("br",{}),"FileLinkIcon"]}),Object(a.jsxs)(r.a,{item:!0,xs:3,sm:2,md:1,children:[Object(a.jsx)(i.J,{})," ",Object(a.jsx)("br",{}),"FileLockIcon"]}),Object(a.jsxs)(r.a,{item:!0,xs:3,sm:2,md:1,children:[Object(a.jsx)(i.K,{})," ",Object(a.jsx)("br",{}),"FileMissingIcon"]}),Object(a.jsxs)(r.a,{item:!0,xs:3,sm:2,md:1,children:[Object(a.jsx)(i.L,{})," ",Object(a.jsx)("br",{}),"FileMusicIcon"]}),Object(a.jsxs)(r.a,{item:!0,xs:3,sm:2,md:1,children:[Object(a.jsx)(i.M,{})," ",Object(a.jsx)("br",{}),"FilePdfIcon"]}),Object(a.jsxs)(r.a,{item:!0,xs:3,sm:2,md:1,children:[Object(a.jsx)(i.N,{})," ",Object(a.jsx)("br",{}),"FilePptIcon"]}),Object(a.jsxs)(r.a,{item:!0,xs:3,sm:2,md:1,children:[Object(a.jsx)(i.O,{})," ",Object(a.jsx)("br",{}),"FileTxtIcon"]}),Object(a.jsxs)(r.a,{item:!0,xs:3,sm:2,md:1,children:[Object(a.jsx)(i.P,{})," ",Object(a.jsx)("br",{}),"FileVideoIcon"]}),Object(a.jsxs)(r.a,{item:!0,xs:3,sm:2,md:1,children:[Object(a.jsx)(i.Q,{})," ",Object(a.jsx)("br",{}),"FileWorldIcon"]}),Object(a.jsxs)(r.a,{item:!0,xs:3,sm:2,md:1,children:[Object(a.jsx)(i.R,{})," ",Object(a.jsx)("br",{}),"FileXlsIcon"]}),Object(a.jsxs)(r.a,{item:!0,xs:3,sm:2,md:1,children:[Object(a.jsx)(i.S,{})," ",Object(a.jsx)("br",{}),"FileZipIcon"]}),Object(a.jsxs)(r.a,{item:!0,xs:3,sm:2,md:1,children:[Object(a.jsx)(i.T,{})," ",Object(a.jsx)("br",{}),"FolderIcon"]}),Object(a.jsxs)(r.a,{item:!0,xs:3,sm:2,md:1,children:[Object(a.jsx)(i.U,{})," ",Object(a.jsx)("br",{}),"GroupsIcon"]}),Object(a.jsxs)(r.a,{item:!0,xs:3,sm:2,md:1,children:[Object(a.jsx)(i.V,{})," ",Object(a.jsx)("br",{}),"HealIcon"]}),Object(a.jsxs)(r.a,{item:!0,xs:3,sm:2,md:1,children:[Object(a.jsx)(i.W,{})," ",Object(a.jsx)("br",{}),"HelpIcon"]}),Object(a.jsxs)(r.a,{item:!0,xs:3,sm:2,md:1,children:[Object(a.jsx)(i.X,{})," ",Object(a.jsx)("br",{}),"HistoryIcon"]}),Object(a.jsxs)(r.a,{item:!0,xs:3,sm:2,md:1,children:[Object(a.jsx)(i.Y,{})," ",Object(a.jsx)("br",{}),"IAMPoliciesIcon"]}),Object(a.jsxs)(r.a,{item:!0,xs:3,sm:2,md:1,children:[Object(a.jsx)(m.a,{})," ",Object(a.jsx)("br",{}),"JSONIcon"]}),Object(a.jsxs)(r.a,{item:!0,xs:3,sm:2,md:1,children:[Object(a.jsx)(i.ab,{})," ",Object(a.jsx)("br",{}),"LambdaBalloonIcon"]}),Object(a.jsxs)(r.a,{item:!0,xs:3,sm:2,md:1,children:[Object(a.jsx)(i.bb,{})," ",Object(a.jsx)("br",{}),"LambdaIcon"]}),Object(a.jsxs)(r.a,{item:!0,xs:3,sm:2,md:1,children:[Object(a.jsx)(i.cb,{})," ",Object(a.jsx)("br",{}),"LambdaNotificationsIcon"]}),Object(a.jsxs)(r.a,{item:!0,xs:3,sm:2,md:1,children:[Object(a.jsx)(i.db,{})," ",Object(a.jsx)("br",{}),"LicenseIcon"]}),Object(a.jsxs)(r.a,{item:!0,xs:3,sm:2,md:1,children:[Object(a.jsx)(i.eb,{})," ",Object(a.jsx)("br",{}),"LockIcon"]}),Object(a.jsxs)(r.a,{item:!0,xs:3,sm:2,md:1,children:[Object(a.jsx)(i.gb,{})," ",Object(a.jsx)("br",{}),"LogoutIcon"]}),Object(a.jsxs)(r.a,{item:!0,xs:3,sm:2,md:1,children:[Object(a.jsx)(i.hb,{})," ",Object(a.jsx)("br",{}),"LogsIcon"]}),Object(a.jsxs)(r.a,{item:!0,xs:3,sm:2,md:1,children:[Object(a.jsx)(i.ib,{})," ",Object(a.jsx)("br",{}),"MirroringIcon"]}),Object(a.jsxs)(r.a,{item:!0,xs:3,sm:2,md:1,children:[Object(a.jsx)(i.jb,{})," ",Object(a.jsx)("br",{}),"MultipleBucketsIcon"]}),Object(a.jsxs)(r.a,{item:!0,xs:3,sm:2,md:1,children:[Object(a.jsx)(i.kb,{})," ",Object(a.jsx)("br",{}),"NewAccountIcon"]}),Object(a.jsxs)(r.a,{item:!0,xs:3,sm:2,md:1,children:[Object(a.jsx)(i.lb,{})," ",Object(a.jsx)("br",{}),"NextArrowIcon"]}),Object(a.jsxs)(r.a,{item:!0,xs:3,sm:2,md:1,children:[Object(a.jsx)(i.mb,{})," ",Object(a.jsx)("br",{}),"ObjectBrowser1Icon"]}),Object(a.jsxs)(r.a,{item:!0,xs:3,sm:2,md:1,children:[Object(a.jsx)(i.nb,{})," ",Object(a.jsx)("br",{}),"ObjectBrowserFolderIcon"]}),Object(a.jsxs)(r.a,{item:!0,xs:3,sm:2,md:1,children:[Object(a.jsx)(i.ob,{})," ",Object(a.jsx)("br",{}),"ObjectBrowserIcon"]}),Object(a.jsxs)(r.a,{item:!0,xs:3,sm:2,md:1,children:[Object(a.jsx)(i.pb,{})," ",Object(a.jsx)("br",{}),"ObjectManagerIcon"]}),Object(a.jsxs)(r.a,{item:!0,xs:3,sm:2,md:1,children:[Object(a.jsx)(i.qb,{})," ",Object(a.jsx)("br",{}),"OpenListIcon"]}),Object(a.jsxs)(r.a,{item:!0,xs:3,sm:2,md:1,children:[Object(a.jsx)(i.rb,{})," ",Object(a.jsx)("br",{}),"OperatorLogo"]}),Object(a.jsxs)(r.a,{item:!0,xs:3,sm:2,md:1,children:[Object(a.jsx)(i.sb,{})," ",Object(a.jsx)("br",{}),"PermissionIcon"]}),Object(a.jsxs)(r.a,{item:!0,xs:3,sm:2,md:1,children:[Object(a.jsx)(i.tb,{})," ",Object(a.jsx)("br",{}),"PreviewIcon"]}),Object(a.jsxs)(r.a,{item:!0,xs:3,sm:2,md:1,children:[Object(a.jsx)(i.ub,{})," ",Object(a.jsx)("br",{}),"PrometheusIcon"]}),Object(a.jsxs)(r.a,{item:!0,xs:3,sm:2,md:1,children:[Object(a.jsx)(i.vb,{})," ",Object(a.jsx)("br",{}),"RecoverIcon"]}),Object(a.jsxs)(r.a,{item:!0,xs:3,sm:2,md:1,children:[Object(a.jsx)(i.wb,{})," ",Object(a.jsx)("br",{}),"RedoIcon"]}),Object(a.jsxs)(r.a,{item:!0,xs:3,sm:2,md:1,children:[Object(a.jsx)(i.xb,{})," ",Object(a.jsx)("br",{}),"RefreshIcon"]}),Object(a.jsxs)(r.a,{item:!0,xs:3,sm:2,md:1,children:[Object(a.jsx)(i.yb,{})," ",Object(a.jsx)("br",{}),"RemoveIcon"]}),Object(a.jsxs)(r.a,{item:!0,xs:3,sm:2,md:1,children:[Object(a.jsx)(i.zb,{})," ",Object(a.jsx)("br",{}),"ReportedUsageIcon"]}),Object(a.jsxs)(r.a,{item:!0,xs:3,sm:2,md:1,children:[Object(a.jsx)(i.Ab,{})," ",Object(a.jsx)("br",{}),"SearchIcon"]}),Object(a.jsxs)(r.a,{item:!0,xs:3,sm:2,md:1,children:[Object(a.jsx)(i.Bb,{})," ",Object(a.jsx)("br",{}),"SelectMultipleIcon"]}),Object(a.jsxs)(r.a,{item:!0,xs:3,sm:2,md:1,children:[Object(a.jsx)(i.Cb,{})," ",Object(a.jsx)("br",{}),"ServersIcon"]}),Object(a.jsxs)(r.a,{item:!0,xs:3,sm:2,md:1,children:[Object(a.jsx)(i.Db,{})," ",Object(a.jsx)("br",{}),"ServiceAccountIcon"]}),Object(a.jsxs)(r.a,{item:!0,xs:3,sm:2,md:1,children:[Object(a.jsx)(i.Eb,{})," ",Object(a.jsx)("br",{}),"ServiceAccountsIcon"]}),Object(a.jsxs)(r.a,{item:!0,xs:3,sm:2,md:1,children:[Object(a.jsx)(i.Fb,{})," ",Object(a.jsx)("br",{}),"SettingsIcon"]}),Object(a.jsxs)(r.a,{item:!0,xs:3,sm:2,md:1,children:[Object(a.jsx)(i.Gb,{})," ",Object(a.jsx)("br",{}),"ShareIcon"]}),Object(a.jsxs)(r.a,{item:!0,xs:3,sm:2,md:1,children:[Object(a.jsx)(i.Hb,{})," ",Object(a.jsx)("br",{}),"SpeedtestIcon"]}),Object(a.jsxs)(r.a,{item:!0,xs:3,sm:2,md:1,children:[Object(a.jsx)(i.Ib,{})," ",Object(a.jsx)("br",{}),"StorageIcon"]}),Object(a.jsxs)(r.a,{item:!0,xs:3,sm:2,md:1,children:[Object(a.jsx)(i.Jb,{})," ",Object(a.jsx)("br",{}),"SyncIcon"]}),Object(a.jsxs)(r.a,{item:!0,xs:3,sm:2,md:1,children:[Object(a.jsx)(i.Kb,{})," ",Object(a.jsx)("br",{}),"TenantsIcon"]}),Object(a.jsxs)(r.a,{item:!0,xs:3,sm:2,md:1,children:[Object(a.jsx)(i.Lb,{})," ",Object(a.jsx)("br",{}),"TenantsOutlineIcon"]}),Object(a.jsxs)(r.a,{item:!0,xs:3,sm:2,md:1,children:[Object(a.jsx)(i.Mb,{})," ",Object(a.jsx)("br",{}),"TiersIcon"]}),Object(a.jsxs)(r.a,{item:!0,xs:3,sm:2,md:1,children:[Object(a.jsx)(i.Nb,{})," ",Object(a.jsx)("br",{}),"ToolsIcon"]}),Object(a.jsxs)(r.a,{item:!0,xs:3,sm:2,md:1,children:[Object(a.jsx)(i.Ob,{})," ",Object(a.jsx)("br",{}),"TotalObjectsIcon"]}),Object(a.jsxs)(r.a,{item:!0,xs:3,sm:2,md:1,children:[Object(a.jsx)(i.Pb,{})," ",Object(a.jsx)("br",{}),"TraceIcon"]}),Object(a.jsxs)(r.a,{item:!0,xs:3,sm:2,md:1,children:[Object(a.jsx)(i.Qb,{})," ",Object(a.jsx)("br",{}),"TrashIcon"]}),Object(a.jsxs)(r.a,{item:!0,xs:3,sm:2,md:1,children:[Object(a.jsx)(i.Rb,{})," ",Object(a.jsx)("br",{}),"UploadFile"]}),Object(a.jsxs)(r.a,{item:!0,xs:3,sm:2,md:1,children:[Object(a.jsx)(i.Sb,{})," ",Object(a.jsx)("br",{}),"UploadFolderIcon"]}),Object(a.jsxs)(r.a,{item:!0,xs:3,sm:2,md:1,children:[Object(a.jsx)(i.Tb,{})," ",Object(a.jsx)("br",{}),"UploadIcon"]}),Object(a.jsxs)(r.a,{item:!0,xs:3,sm:2,md:1,children:[Object(a.jsx)(i.Ub,{})," ",Object(a.jsx)("br",{}),"UploadStatIcon"]}),Object(a.jsxs)(r.a,{item:!0,xs:3,sm:2,md:1,children:[Object(a.jsx)(i.Vb,{})," ",Object(a.jsx)("br",{}),"UptimeIcon"]}),Object(a.jsxs)(r.a,{item:!0,xs:3,sm:2,md:1,children:[Object(a.jsx)(i.Wb,{})," ",Object(a.jsx)("br",{}),"UsersIcon"]}),Object(a.jsxs)(r.a,{item:!0,xs:3,sm:2,md:1,children:[Object(a.jsx)(i.Xb,{})," ",Object(a.jsx)("br",{}),"VersionIcon"]}),Object(a.jsxs)(r.a,{item:!0,xs:3,sm:2,md:1,children:[Object(a.jsx)(x.a,{})," ",Object(a.jsx)("br",{}),"WarnIcon"]}),Object(a.jsxs)(r.a,{item:!0,xs:3,sm:2,md:1,children:[Object(a.jsx)(i.Yb,{})," ",Object(a.jsx)("br",{}),"WarpIcon"]}),Object(a.jsxs)(r.a,{item:!0,xs:3,sm:2,md:1,children:[Object(a.jsx)(i.Zb,{})," ",Object(a.jsx)("br",{}),"WatchIcon"]})]})})}))}}]);
//# sourceMappingURL=142.67d82a1e.chunk.js.map