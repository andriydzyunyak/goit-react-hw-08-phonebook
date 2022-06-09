"use strict";(self.webpackChunkgoit_react_hw_08_phonebook=self.webpackChunkgoit_react_hw_08_phonebook||[]).push([[432],{8432:function(e,n,r){r.r(n),r.d(n,{default:function(){return w}});var a=r(1413),o=r(885),i=r(9434),t=r(301),s=r(5705),l=r(1089),d=r(2791),c=r(4554),u=r(6151),h=r(4273),m=r(3466),p=r(3400),v=r(3746),f=r(165),b=r(3329),Z=l.Ry().shape({name:l.Z_("Enter your name").required("Name is required"),email:l.Z_("Enter your email").email("Enter a valid email").required("Email is required"),password:l.Z_("Enter your password").min(7,"Password should be of minimum 7 characters length").required("Password is required")});function w(){var e=(0,i.I0)(),n=(0,s.TA)({initialValues:{name:"",email:"",password:""},validationSchema:Z,onSubmit:function(n,r){r.resetForm;e(t.z2(n))}}),r=(0,d.useState)({showPassword:!1}),l=(0,o.Z)(r,2),w=l[0],x=l[1];return(0,b.jsxs)(c.Z,{sx:{minWidth:"100%",height:"100vh",margin:"0 auto",paddingTop:2,backgroundColor:"#f4ff77"},children:[(0,b.jsx)(c.Z,{component:"h1",sx:{display:"block",textAlign:"center",pt:"10px",mb:"30px"},children:"Registration Form"}),(0,b.jsx)(c.Z,{sx:{width:340,margin:"0 auto"},children:(0,b.jsxs)("form",{onSubmit:n.handleSubmit,children:[(0,b.jsx)(h.Z,{sx:{mb:"10px",backgroundColor:"#c7f0f8"},fullWidth:!0,id:"name",name:"name",label:"Name",value:n.values.name,onChange:n.handleChange,error:n.touched.name&&Boolean(n.errors.name),helperText:n.touched.name&&n.errors.name,required:!0}),(0,b.jsx)(h.Z,{sx:{mb:"10px",backgroundColor:"#c7f0f8"},fullWidth:!0,id:"email",name:"email",label:"Email",value:n.values.email,onChange:n.handleChange,error:n.touched.email&&Boolean(n.errors.email),helperText:n.touched.email&&n.errors.email,type:"email",required:!0}),(0,b.jsx)(h.Z,{sx:{mb:"10px",backgroundColor:"#c7f0f8"},InputProps:{endAdornment:(0,b.jsx)(m.Z,{position:"end",children:(0,b.jsx)(p.Z,{"aria-label":"toggle password visibility",onClick:function(){x((0,a.Z)((0,a.Z)({},w),{},{showPassword:!w.showPassword}))},onMouseDown:function(e){e.preventDefault()},edge:"end",children:w.showPassword?(0,b.jsx)(f.Z,{}):(0,b.jsx)(v.Z,{})})})},fullWidth:!0,id:"password",name:"password",label:"Password",value:n.values.password,onChange:n.handleChange("password"),error:n.touched.password&&Boolean(n.errors.password),helperText:n.touched.password&&n.errors.password,type:w.showPassword?"text":"password",required:!0}),(0,b.jsx)(u.Z,{color:"primary",variant:"contained",fullWidth:!0,type:"submit",children:"Register"})]})})]})}},3746:function(e,n,r){var a=r(5318);n.Z=void 0;var o=a(r(5649)),i=r(3329),t=(0,o.default)((0,i.jsx)("path",{d:"M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"}),"Visibility");n.Z=t},165:function(e,n,r){var a=r(5318);n.Z=void 0;var o=a(r(5649)),i=r(3329),t=(0,o.default)((0,i.jsx)("path",{d:"M12 7c2.76 0 5 2.24 5 5 0 .65-.13 1.26-.36 1.83l2.92 2.92c1.51-1.26 2.7-2.89 3.43-4.75-1.73-4.39-6-7.5-11-7.5-1.4 0-2.74.25-3.98.7l2.16 2.16C10.74 7.13 11.35 7 12 7zM2 4.27l2.28 2.28.46.46C3.08 8.3 1.78 10.02 1 12c1.73 4.39 6 7.5 11 7.5 1.55 0 3.03-.3 4.38-.84l.42.42L19.73 22 21 20.73 3.27 3 2 4.27zM7.53 9.8l1.55 1.55c-.05.21-.08.43-.08.65 0 1.66 1.34 3 3 3 .22 0 .44-.03.65-.08l1.55 1.55c-.67.33-1.41.53-2.2.53-2.76 0-5-2.24-5-5 0-.79.2-1.53.53-2.2zm4.31-.78 3.15 3.15.02-.16c0-1.66-1.34-3-3-3l-.17.01z"}),"VisibilityOff");n.Z=t},3466:function(e,n,r){r.d(n,{Z:function(){return P}});var a=r(4942),o=r(3366),i=r(7462),t=r(2791),s=r(8182),l=r(4419),d=r(4036),c=r(890),u=r(3840),h=r(2930),m=r(7630),p=r(1217);function v(e){return(0,p.Z)("MuiInputAdornment",e)}var f,b=(0,r(5878).Z)("MuiInputAdornment",["root","filled","standard","outlined","positionStart","positionEnd","disablePointerEvents","hiddenLabel","sizeSmall"]),Z=r(1046),w=r(3329),x=["children","className","component","disablePointerEvents","disableTypography","position","variant"],g=(0,m.ZP)("div",{name:"MuiInputAdornment",slot:"Root",overridesResolver:function(e,n){var r=e.ownerState;return[n.root,n["position".concat((0,d.Z)(r.position))],!0===r.disablePointerEvents&&n.disablePointerEvents,n[r.variant]]}})((function(e){var n=e.theme,r=e.ownerState;return(0,i.Z)({display:"flex",height:"0.01em",maxHeight:"2em",alignItems:"center",whiteSpace:"nowrap",color:(n.vars||n).palette.action.active},"filled"===r.variant&&(0,a.Z)({},"&.".concat(b.positionStart,"&:not(.").concat(b.hiddenLabel,")"),{marginTop:16}),"start"===r.position&&{marginRight:8},"end"===r.position&&{marginLeft:8},!0===r.disablePointerEvents&&{pointerEvents:"none"})})),P=t.forwardRef((function(e,n){var r=(0,Z.Z)({props:e,name:"MuiInputAdornment"}),a=r.children,m=r.className,p=r.component,b=void 0===p?"div":p,P=r.disablePointerEvents,j=void 0!==P&&P,y=r.disableTypography,E=void 0!==y&&y,C=r.position,z=r.variant,k=(0,o.Z)(r,x),S=(0,h.Z)()||{},_=z;z&&S.variant,S&&!_&&(_=S.variant);var M=(0,i.Z)({},r,{hiddenLabel:S.hiddenLabel,size:S.size,disablePointerEvents:j,position:C,variant:_}),q=function(e){var n=e.classes,r=e.disablePointerEvents,a=e.hiddenLabel,o=e.position,i=e.size,t=e.variant,s={root:["root",r&&"disablePointerEvents",o&&"position".concat((0,d.Z)(o)),t,a&&"hiddenLabel",i&&"size".concat((0,d.Z)(i))]};return(0,l.Z)(s,v,n)}(M);return(0,w.jsx)(u.Z.Provider,{value:null,children:(0,w.jsx)(g,(0,i.Z)({as:b,ownerState:M,className:(0,s.Z)(q.root,m),ref:n},k,{children:"string"!==typeof a||E?(0,w.jsxs)(t.Fragment,{children:["start"===C?f||(f=(0,w.jsx)("span",{className:"notranslate",children:"\u200b"})):null,a]}):(0,w.jsx)(c.Z,{color:"text.secondary",children:a})}))})}))}}]);
//# sourceMappingURL=432.025457e1.chunk.js.map