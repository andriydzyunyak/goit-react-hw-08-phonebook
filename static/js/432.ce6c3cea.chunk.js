"use strict";(self.webpackChunkgoit_react_hw_08_phonebook=self.webpackChunkgoit_react_hw_08_phonebook||[]).push([[432],{8432:function(e,r,a){a.r(r),a.d(r,{default:function(){return h}});var o=a(9434),n=a(301),i=a(5705),s=a(1089),l=a(4554),d=a(6151),t=a(6420),m=a(3329),u=s.Ry().shape({name:s.Z_("Enter your name").required("Name is required"),email:s.Z_("Enter your email").email("Enter a valid email").required("Email is required"),password:s.Z_("Enter your password").min(7,"Password should be of minimum 7 characters length").required("Password is required")});function h(){var e=(0,o.I0)(),r=(0,i.TA)({initialValues:{name:"",email:"",password:""},validationSchema:u,onSubmit:function(r,a){var o=a.resetForm;e(n.z2(r)),o()}});return(0,m.jsxs)(l.Z,{sx:{minWidth:"100%",height:"100vh",margin:"0 auto",paddingTop:2,backgroundColor:"#f4ff77"},children:[(0,m.jsx)(l.Z,{component:"h1",sx:{display:"block",textAlign:"center",pt:"10px",mb:"30px"},children:"Registration Form"}),(0,m.jsx)(l.Z,{sx:{width:340,margin:"0 auto"},children:(0,m.jsxs)("form",{onSubmit:r.handleSubmit,children:[(0,m.jsx)(t.Z,{sx:{mb:"10px",backgroundColor:"#c7f0f8"},fullWidth:!0,id:"name",name:"name",label:"Name",value:r.values.name,onChange:r.handleChange,error:r.touched.name&&Boolean(r.errors.name),helperText:r.touched.name&&r.errors.name}),(0,m.jsx)(t.Z,{sx:{mb:"10px",backgroundColor:"#c7f0f8"},fullWidth:!0,id:"email",name:"email",label:"Email",value:r.values.email,onChange:r.handleChange,error:r.touched.email&&Boolean(r.errors.email),helperText:r.touched.email&&r.errors.email,type:"email"}),(0,m.jsx)(t.Z,{sx:{mb:"10px",backgroundColor:"#c7f0f8"},fullWidth:!0,id:"password",name:"password",label:"Password",value:r.values.password,onChange:r.handleChange,error:r.touched.password&&Boolean(r.errors.password),helperText:r.touched.password&&r.errors.password,type:"password"}),(0,m.jsx)(d.Z,{color:"primary",variant:"contained",fullWidth:!0,type:"submit",children:"Register"})]})})]})}}}]);
//# sourceMappingURL=432.ce6c3cea.chunk.js.map