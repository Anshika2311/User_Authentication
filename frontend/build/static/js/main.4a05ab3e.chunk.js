(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{21:function(e,t,n){},22:function(e,t,n){},23:function(e,t,n){},44:function(e,t,n){"use strict";n.r(t);var r=n(2),c=n.n(r),a=n(15),s=n.n(a),l=(n(21),n(22),n(4)),o=n(3),i=(n(23),n(16)),u=n.n(i),j=n(0);var b=function(){var e,t=Object(r.useState)(""),n=Object(o.a)(t,2),c=n[0],a=n[1],s=Object(r.useState)(""),i=Object(o.a)(s,2),b=i[0],d=i[1],m=Object(r.useState)(""),p=Object(o.a)(m,2),h=p[0],O=p[1],f=Object(r.useState)(""),g=Object(o.a)(f,2),x=g[0],v=g[1],N=Object(r.useState)(""),y=Object(o.a)(N,2),C=y[0],w=y[1],S={profile:{username:x,firstname:c,lastname:b,email:h,password:C}};return Object(j.jsx)("div",{children:Object(j.jsxs)("form",{children:[Object(j.jsx)("h3",{children:"Register"}),Object(j.jsxs)("div",{className:"form-group",children:[Object(j.jsx)("label",{children:"First name"}),Object(j.jsx)("input",{type:"text",className:"form-control",placeholder:"First name",required:!0,value:c,onChange:function(e){return a(e.target.value)}})]}),Object(j.jsxs)("div",{className:"form-group",children:[Object(j.jsx)("label",{children:"Last name"}),Object(j.jsx)("input",{type:"text",className:"form-control",placeholder:"Last name",required:!0,value:b,onChange:function(e){return d(e.target.value)}})]}),Object(j.jsxs)("div",{className:"form-group",children:[Object(j.jsx)("label",{children:"Username"}),Object(j.jsx)("input",{type:"text",className:"form-control",placeholder:"Username",required:!0,value:x,onChange:function(e){return v(e.target.value)}})]}),Object(j.jsxs)("div",{className:"form-group",children:[Object(j.jsx)("label",{children:"Email"}),Object(j.jsx)("input",{type:"email",className:"form-control",placeholder:"Enter email",required:!0,value:h,onChange:function(e){return O(e.target.value)}})]}),Object(j.jsxs)("div",{className:"form-group",children:[Object(j.jsx)("label",{children:"Password"}),Object(j.jsx)("input",{type:"password",className:"form-control",placeholder:"Enter password",required:!0,value:C,onChange:function(e){return w(e.target.value)}})]}),Object(j.jsx)("button",(e={type:"submit",className:"btn btn-dark btn-lg btn-block"},Object(l.a)(e,"type","submit"),Object(l.a)(e,"onClick",(function(e){e.preventDefault(),u.a.post("/api/signup",S).then((function(e){console.log(e)})).catch((function(e){console.log(e)}))})),Object(l.a)(e,"children","Register"),e)),Object(j.jsxs)("p",{className:"forgot-password text-right",children:["Already registered ",Object(j.jsx)("a",{href:"#",children:"log in?"})]})]})})};var d=function(){return Object(j.jsx)("div",{className:"App",children:Object(j.jsx)(b,{})})},m=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,45)).then((function(t){var n=t.getCLS,r=t.getFID,c=t.getFCP,a=t.getLCP,s=t.getTTFB;n(e),r(e),c(e),a(e),s(e)}))};s.a.render(Object(j.jsx)(c.a.StrictMode,{children:Object(j.jsx)(d,{})}),document.getElementById("root")),m()}},[[44,1,2]]]);
//# sourceMappingURL=main.4a05ab3e.chunk.js.map