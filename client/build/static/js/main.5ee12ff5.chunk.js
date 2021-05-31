(this.webpackJsonpredsky=this.webpackJsonpredsky||[]).push([[0],{102:function(e,t,a){},103:function(e,t,a){},129:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),c=a(12),s=a.n(c),i=(a(102),a(103),a(19)),o=a(7),l=a(37),u=a.n(l),d=a(21),j="".concat(window.location.protocol,"//").concat(window.location.hostname,":3001/api");var b=a(163),h=a(174),f=a(164),m=a(131),O=a(165),x=a(166),p=a(167),v=a(168),g=a(169),N=a(170),w=a(177),y=a(82),U=a.n(y),k=a(83),C=a.n(k),S=a(14),M=a(24),D=function(){function e(t,a,r,n,c){Object(S.a)(this,e),this.id=void 0,this.firstName=void 0,this.lastName=void 0,this.email=void 0,this.avatar=void 0,this.id=c,this.firstName=t,this.lastName=a,this.email=r,this.avatar=n,this.updateLatestID()}return Object(M.a)(e,[{key:"updateLatestID",value:function(){e._latestID=Math.max(this.id,e._latestID)}}],[{key:"incrementID",value:function(){return e._latestID+1}},{key:"emptyUser",value:function(){return new e("","","","",this.incrementID())}}]),e}();D._latestID=1;var I=a(20),A=a.n(I),F=a(54),q="".concat(window.location.protocol,"//").concat(window.location.hostname,":3001/api"),L=Object(i.b)({key:"forcereload",default:0}),R=Object(i.c)({key:"users",get:function(){var e=Object(F.a)(A.a.mark((function e(t){return A.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(0,t.get)(L),e.abrupt("return",u.a.get(q+"/users/get/").then((function(e){return Object.entries(e.data).map((function(e){return new D(e[1].firstName,e[1].lastName,e[1].email,e[1].avatar,e[1].id)}))})).catch((function(e){console.log(e)})));case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}),W=a(9),V=a(176),_=a(158),E=a(159),T=a(160),B=a(173),G=a(161),J=a(162),P=a(5),z=function(e){var t=e.user,a=e.open,r=e.handleClose,c=e.reload,s=e.newUser,i=n.a.useState({id:t.id,firstName:t.firstName,lastName:t.lastName,email:t.email,avatar:t.avatar}),l=Object(o.a)(i,2),b=l[0],h=l[1],f=n.a.useState(!s),m=Object(o.a)(f,2),O=m[0],x=m[1],p=n.a.useState(!s),v=Object(o.a)(p,2),g=v[0],N=v[1],w=n.a.useState(!s),y=Object(o.a)(w,2),U=y[0],k=y[1],C=n.a.useState(!s),S=Object(o.a)(C,2),M=S[0],D=S[1],I=n.a.useState(!s),A=Object(o.a)(I,2),F=A[0],q=A[1],L=n.a.useState(!s),R=Object(o.a)(L,2),z=R[0],H=R[1];function K(){x(!s),N(!s),k(!s),D(!s),q(!s),H(!s),c(Math.random()),r()}return Object(P.jsxs)(V.a,{open:a,onRendered:function(){h({id:t.id,firstName:t.firstName,lastName:t.lastName,email:t.email,avatar:t.avatar})},onClose:K,"aria-labelledby":"form-dialog-title",children:[Object(P.jsx)(_.a,{id:"form-dialog-title",children:s?"Add a user":"Update user"}),Object(P.jsxs)(E.a,{children:[Object(P.jsxs)(T.a,{children:["Fill out the form below to ",s?"add a user to":"update the user in"," the user cache."]}),Object(P.jsxs)("form",{autoComplete:"off",children:[Object(P.jsx)(B.a,{autoFocus:!0,margin:"dense",id:"firstName",label:"First Name",defaultValue:t.firstName,onChange:function(e){h(Object(W.a)(Object(W.a)({},b),{},{firstName:e.target.value})),x(!!e.target.value)},onFocus:function(){return D(!0)},error:!O&&M,helperText:"A first name is required",fullWidth:!0,required:!0}),Object(P.jsx)(B.a,{margin:"dense",id:"lastName",label:"Last Name",defaultValue:t.lastName,onChange:function(e){h(Object(W.a)(Object(W.a)({},b),{},{lastName:e.target.value})),N(!!e.target.value)},onFocus:function(){return q(!0)},error:!g&&F,helperText:"A last name is required",fullWidth:!0,required:!0}),Object(P.jsx)(B.a,{margin:"dense",id:"email",label:"Email Address",type:"email",defaultValue:t.email,onChange:function(e){h(Object(W.a)(Object(W.a)({},b),{},{email:e.target.value})),k(!!e.target.value&&e.target.value.indexOf("@")>0)},onFocus:function(){return H(!0)},error:!U&&z,helperText:"An email address is required",fullWidth:!0,required:!0}),Object(P.jsx)(B.a,{margin:"dense",id:"avatar",label:"Avatar Image URL",defaultValue:t.avatar,onChange:function(e){h(Object(W.a)(Object(W.a)({},b),{},{avatar:e.target.value}))},fullWidth:!0})]})]}),Object(P.jsxs)(G.a,{children:[Object(P.jsx)(J.a,{onClick:K,color:"primary",children:"Cancel"}),Object(P.jsxs)(J.a,{disabled:!(O&&g&&U),onClick:function(){s?function(e,t){u.a.post("".concat(j,"/users/new/"),{userData:e}).then((function(){d.b.success("User added successfully"),t(Math.random())})).catch((function(e){d.b.error("User addition failed"),console.error(e),t(Math.random())}))}(b,c):function(e,t){u.a.put("".concat(j,"/users/update/").concat(e.id,"/"),{userData:e}).then((function(){d.b.success("User updated successfully"),t(Math.random())})).catch((function(e){d.b.error("User update failed"),console.error(e),t(Math.random())}))}(b,c),K()},color:"primary",children:[s?"Add":"Update"," User"]})]})]})},H=Object(b.a)((function(e){return{table:{minWidth:650}}}));function K(){var e=H(),t=Object(i.d)(R),a=Object(i.e)(L),r=n.a.useState(!1),c=Object(o.a)(r,2),s=c[0],l=c[1],b=n.a.useState(D.emptyUser()),y=Object(o.a)(b,2),k=y[0],S=y[1];var M=function(){l(!0)};return Object(P.jsxs)(h.a,{m:3,children:[Object(P.jsx)(f.a,{component:m.a,children:Object(P.jsxs)(O.a,{className:e.table,"aria-label":"simple table",children:[Object(P.jsx)(x.a,{children:Object(P.jsxs)(p.a,{children:[Object(P.jsx)(v.a,{}),Object(P.jsx)(v.a,{children:"Portrait"}),Object(P.jsx)(v.a,{children:"User Name"}),Object(P.jsx)(v.a,{children:"Email"})]})}),Object(P.jsx)(g.a,{children:(t||[]).map((function(e){return Object(P.jsxs)(p.a,{children:[Object(P.jsxs)(v.a,{component:"th",scope:"row",children:[Object(P.jsx)(N.a,{onClick:function(){return function(e,t){u.a.delete("".concat(j,"/users/delete/").concat(e.id,"/")).then((function(){d.b.success("User deleted successfully"),t(Math.random())})).catch((function(e){d.b.error("User deletion failed"),console.error(e),t(Math.random())}))}(e,a)},edge:"start",color:"inherit","aria-label":"menu",children:Object(P.jsx)(U.a,{})}),Object(P.jsx)(N.a,{onClick:function(){return function(e){S(e),M()}(e)},edge:"start",color:"inherit","aria-label":"menu",children:Object(P.jsx)(C.a,{})})]}),Object(P.jsx)(v.a,{children:e.avatar?Object(P.jsx)(w.a,{alt:"".concat(e.firstName," ").concat(e.lastName),src:e.avatar}):Object(P.jsx)(P.Fragment,{})}),Object(P.jsxs)(v.a,{children:[e.firstName," ",e.lastName]}),Object(P.jsx)(v.a,{children:e.email})]},e.id)}))})]})}),Object(P.jsx)(z,{user:k,open:s,handleClose:function(){l(!1)},reload:a,newUser:!1})]})}function Q(){var e=n.a.useState(!1),t=Object(o.a)(e,2),a=t[0],r=t[1],c=Object(i.e)(L);return Object(P.jsxs)(h.a,{m:3,className:"right-align",children:[Object(P.jsx)(J.a,{variant:"outlined",color:"primary",onClick:function(){r(!0)},children:"Add User"}),Object(P.jsx)(z,{user:D.emptyUser(),open:a,handleClose:function(){r(!1)},reload:c,newUser:!0})]})}var X=a(171),Y=a(172),Z=a(85),$=Object(b.a)((function(e){return{root:{flexGrow:1},menuButton:{marginRight:e.spacing(2)},title:{flexGrow:1}}}));function ee(){var e=$(),t=Object(i.e)(L);return Object(P.jsx)("div",{className:e.root,children:Object(P.jsx)(X.a,{position:"static",children:Object(P.jsxs)(Y.a,{children:[Object(P.jsx)(Z.a,{variant:"h6",className:e.title,children:"RedSky User Cache Project"}),Object(P.jsx)(J.a,{color:"inherit",onClick:function(){return function(e){u.a.get("".concat(j,"/users/refresh/")).then((function(){d.b.success("Users refreshed successfully"),e(Math.random())})).catch((function(t){d.b.error("User refresh failed"),console.error(t),e(Math.random())}))}(t)},children:"Refresh Users"})]})})})}a(128);var te=function(){return Object(P.jsxs)(i.a,{children:[Object(P.jsx)(ee,{}),Object(P.jsxs)(n.a.Suspense,{fallback:Object(P.jsx)("div",{children:"Loading..."}),children:[Object(P.jsx)(Q,{}),Object(P.jsx)(K,{}),Object(P.jsx)(d.a,{})]})]})};s.a.render(Object(P.jsx)(n.a.StrictMode,{children:Object(P.jsx)(te,{})}),document.getElementById("root"))}},[[129,1,2]]]);
//# sourceMappingURL=main.5ee12ff5.chunk.js.map