(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{54:function(e,t,s){},55:function(e,t,s){},6:function(e,t,s){e.exports={profile_content:"Profile_profile_content__3p62x",Title:"Profile_Title__JJ3qP",Description:"Profile_Description__362mr",title:"Profile_title__3durw",Profile_Buttons_:"Profile_Profile_Buttons___2hSiS",profile:"Profile_profile__1BRog",user_profile:"Profile_user_profile__1GMX1",username:"Profile_username__2wzpM",name:"Profile_name__3JE8R",firstname:"Profile_firstname__tAwPS",email:"Profile_email__IwCbR",card:"Profile_card__1FQL_",chip:"Profile_chip__1rwRQ",avatar:"Profile_avatar__2BsyK",role:"Profile_role__UGatK",Posts:"Profile_Posts__1iZvd",content:"Profile_content__1TXER",Date:"Profile_Date__3JNR-",Likes:"Profile_Likes__1T_YA",container:"Profile_container__2lPes",update:"Profile_update__2UWUw",delete:"Profile_delete__2zoeh",Image:"Profile_Image__3dOhK",Buttons:"Profile_Buttons__2fTRi",thumbsUp:"Profile_thumbsUp__3PqY2"}},79:function(e,t,s){},86:function(e,t,s){},87:function(e,t,s){},88:function(e,t,s){},89:function(e,t,s){"use strict";s.r(t);var a=s(2),c=s.n(a),n=s(19),o=s.n(n),r=(s(54),s(21)),l=s(10),i=s(9),d=(s(55),s(12)),j=s.n(d),u=s.p+"static/media/Pix_lune.db70b55c.jpg",m=s(22),h=(s(27),s(20)),b=s.n(h),p=(s(79),s(1));var x=function(){var e=Object(l.f)();return Object(p.jsxs)("div",{className:"Navbar",children:[Object(p.jsx)("a",{href:"/",children:"Home"}),Object(p.jsx)("a",{href:"/Post",children:"New Post +"}),Object(p.jsx)("a",{href:"/Profile",children:"Profile"}),Object(p.jsx)("a",{href:"",onClick:function(){localStorage.clear(),e.push("/login")},children:"Logout"})]})};var O=function(){var e=Object(a.useState)([]),t=Object(i.a)(e,2),s=t[0],n=t[1],o=Object(a.useState)(!1),r=Object(i.a)(o,2),l=r[0],d=r[1],h=Object(a.useState)([]),O=Object(i.a)(h,2),g=O[0],f=O[1],v=Object(a.useState)(localStorage.getItem("role")),N=Object(i.a)(v,1)[0];return console.log(N),c.a.useEffect((function(){j.a.get("https://groupomania626.herokuapp.com/posts/all",{headers:{Authorization:localStorage.getItem("authToken")}}).then((function(e){if(console.log(e.data),n(e.data),!e)return"No posts !"}))}),[l]),Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)(x,{}),Object(p.jsxs)("div",{children:[Object(p.jsxs)("div",{className:"hfilters",children:[Object(p.jsx)("label",{htmlFor:"hfilter",className:"hfilterLabel",children:"Rechercher les posts d'un utilisateur"}),Object(p.jsx)("input",{id:"hfilter",type:"text",placeholder:"Ex: Jacques Lachery ou jlachery",onChange:function(){var e=document.getElementById("hfilter").value;e.length>2?j.a.post("https://groupomania626.herokuapp.com/auth/filter",{search:e},{headers:{Authorization:localStorage.getItem("authToken")}}).then((function(e){e.data.result?f(e.data.content):f(e.data.message)})):f([])}}),Object(p.jsxs)("span",{className:"clearFilters",onClick:function(){d(!l)},children:[Object(p.jsx)(m.a,{})," Clear filter"]})]}),Object(p.jsx)("div",{className:"userHolder",children:g.map((function(e,t){return Object(p.jsx)("div",{"data-user":e.userId,onClick:k,children:e.username+" - "+e.firstname+" "+e.name},t)}))}),Object(p.jsxs)("div",{children:[Object(p.jsx)(b.a,{query:"only screen and (max-width: 767px)",children:Object(p.jsxs)("div",{className:"hcontainer visible-xs-block",id:"marker-xs",children:[s.map((function(e,t){return Object(p.jsx)("li",{className:"h",children:Object(p.jsxs)("div",{className:"hPosts",id:"marker1-xs",children:[Object(p.jsx)("input",{type:"hidden",className:"hidPost",placeholder:e.idposts}),Object(p.jsx)("input",{type:"hidden",className:"hidAuthor",placeholder:e.postuserid}),Object(p.jsxs)("div",{className:"Image",children:[e.imageurl,Object(p.jsx)("img",{className:"himg",alt:"post",src:u})]}),Object(p.jsx)("div",{className:"hTitle visible-xs-block",id:"marker-xs",children:e.title}),Object(p.jsxs)("div",{className:"hAuthor",children:[" by @",e.username]}),Object(p.jsx)("div",{className:"hDescription",children:e.description}),Object(p.jsxs)("div",{className:"hDate",children:["created in ",e.date]}),Object(p.jsxs)("div",{className:"hLikes",children:[e.likes.split(",").length,Object(p.jsx)(m.b,{"data-post":e.idposts,"data-likes":e.likes,className:"thumbsUp",onClick:_})]}),"ADMIN"===N?Object(p.jsx)(p.Fragment,{children:Object(p.jsx)("button",{className:"Buttons btn btn-danger delete col-md-8 offset-md-2 mt-4 visible-xs-block","data-post":e.idposts,onClick:y,children:"Delete"})}):""]})},t)})),";"]})}),Object(p.jsx)(b.a,{query:"only screen and (min-width: 768px) and (max-width : 991px)",children:Object(p.jsxs)("div",{className:"hcontainer",class:"visible-sm-block",id:"marker-sm",children:[s.map((function(e,t){return Object(p.jsx)("li",{className:"h",children:Object(p.jsxs)("div",{className:"hPosts",id:"marker1-sm",children:[Object(p.jsx)("input",{type:"hidden",className:"hidPost",placeholder:e.idposts}),Object(p.jsx)("input",{type:"hidden",className:"hidAuthor",placeholder:e.postuserid}),Object(p.jsxs)("div",{className:"Image",children:[e.imageurl,Object(p.jsx)("img",{className:"himg",alt:"post",src:u})]}),Object(p.jsx)("div",{className:"hTitle",children:e.title}),Object(p.jsxs)("div",{className:"hAuthor",children:[" by @",e.username]}),Object(p.jsx)("div",{className:"hDescription",children:e.description}),Object(p.jsxs)("div",{className:"hDate",children:["created in ",e.date]}),Object(p.jsxs)("div",{className:"hLikes",children:[e.likes.split(",").length,Object(p.jsx)(m.b,{"data-post":e.idposts,"data-likes":e.likes,className:"thumbsUp",onClick:_}),"ADMIN"===N?Object(p.jsx)(p.Fragment,{children:Object(p.jsx)("button",{className:"Buttons btn btn-danger delete col-md-8 offset-md-2 mt-4 visible-xs-block","data-post":e.idposts,onClick:y,children:"Delete"})}):""]})]})},t)})),";"]})}),Object(p.jsx)(b.a,{query:"only screen and (min-width: 992px)",children:Object(p.jsxs)("div",{className:"hcontainer visible-md-block",id:"marker-md",children:[s.map((function(e,t){return Object(p.jsx)("li",{className:"h",children:Object(p.jsxs)("div",{className:"hPosts",id:"marker1-md",children:[Object(p.jsx)("input",{id:"home",type:"hidden",className:"hidPost",placeholder:e.idposts}),Object(p.jsx)("input",{id:"home",type:"hidden",className:"hidAuthor",placeholder:e.postuserid}),Object(p.jsxs)("div",{className:"Image",children:[e.imageurl,Object(p.jsx)("img",{className:"himg",alt:"post",src:u})]}),Object(p.jsx)("div",{className:"hTitle",children:e.title}),Object(p.jsxs)("div",{className:"hAuthor",children:[" by @",e.username]}),Object(p.jsx)("div",{className:"hDescription",children:e.description}),Object(p.jsxs)("div",{className:"hDate",children:["created in ",e.date]}),Object(p.jsxs)("div",{className:"hLikes","data-post":e.idposts,"data-likes":e.likes,onClick:_,children:[e.likes.split(",").length,e.likes.includes(localStorage.getItem("userid"))?Object(p.jsx)(m.b,{className:"thumbsUpLiked"}):Object(p.jsx)(m.b,{className:"thumbsUp"})]}),console.log(N),"ADMIN"===N?Object(p.jsx)(p.Fragment,{children:Object(p.jsx)("button",{className:"Buttons btn btn-danger delete col-md-8 offset-md-2 mt-4 visible-xs-block","data-post":e.idposts,onClick:y,children:"Delete"})}):""]})},t)})),";"]})})]})]})]});function k(e){f([]),document.getElementById("hfilter").value="";var t=e.target.getAttribute("data-user");j.a.post("https://groupomania626.herokuapp.com/posts/fromUser",{userid:t},{headers:{Authorization:localStorage.getItem("authToken")}}).then((function(e){n(e.data)}))}function _(e){e.preventDefault(),console.log(e.currentTarget);var t=e.currentTarget.getAttribute("data-post"),s=e.currentTarget.getAttribute("data-likes"),a=localStorage.getItem("userid");console.log(t),console.log(s),j.a.post("https://groupomania626.herokuapp.com/posts/like",{postId:t,userid:a,likes:s},{headers:{Authorization:localStorage.getItem("authToken")}}).then((function(e){console.log("??"),d(!l)})).catch((function(e){throw console.log(e),e}))}function y(e){var t;window.confirm("Are you sure you want to delete this post ?")&&(t=e.target.getAttribute("data-post"),j.a.delete("https://groupomania626.herokuapp.com/posts/delete/".concat(t),{headers:{Authorization:localStorage.getItem("authToken")}}).then((function(){d(!l)})))}},g=(s(86),s.p+"static/media/icon.df011b71.svg");var f=function(){var e=Object(a.useState)(""),t=Object(i.a)(e,2),s=t[0],c=t[1],n=Object(a.useState)(""),o=Object(i.a)(n,2),r=o[0],d=o[1],u=Object(a.useState)(""),m=Object(i.a)(u,2),h=m[0],b=m[1],x=Object(a.useState)(""),O=Object(i.a)(x,2),f=O[0],v=O[1],N=Object(a.useState)(""),k=Object(i.a)(N,2),_=k[0],y=k[1],P=Object(l.f)();return Object(p.jsx)("div",{className:"Register",children:Object(p.jsxs)("div",{className:"RegisterForm",children:[Object(p.jsx)("img",{src:g,alt:"logo groupomania"}),Object(p.jsx)("label",{children:"username"}),Object(p.jsx)("input",{type:"email",onChange:function(e){y(e.target.value)}}),Object(p.jsx)("label",{children:"email"}),Object(p.jsx)("input",{type:"email",onChange:function(e){v(e.target.value)}}),Object(p.jsx)("label",{children:"password"}),Object(p.jsx)("input",{type:"password",onChange:function(e){c(e.target.value)}}),Object(p.jsx)("label",{children:"name"}),Object(p.jsx)("input",{type:"text",onChange:function(e){d(e.target.value)}}),Object(p.jsx)("label",{children:"firstname"}),Object(p.jsx)("input",{type:"text",onChange:function(e){b(e.target.value)}}),Object(p.jsx)("button",{onClick:function(){j.a.post("https://groupomania626.herokuapp.com/auth/signup",{password:s,name:r,firstname:h,email:f,username:_}).then((function(e){P.push("/login")}))},children:"Register"})]})})},v=(s(87),s.p+"static/media/icon-above-font.73d73abe.svg"),N=s(92),k=s(93);var _=function(){var e=Object(a.useState)(""),t=Object(i.a)(e,2),s=t[0],c=t[1],n=Object(a.useState)(""),o=Object(i.a)(n,2),r=o[0],d=o[1],u=Object(a.useState)(""),m=Object(i.a)(u,2),h=m[0],x=m[1],O=Object(l.f)();function g(){var e={username:r,password:h};j.a.post("https://groupomania626.herokuapp.com/auth/login",e).then((function(e){e.data.result&&e.data.token?(localStorage.setItem("userid",e.data.userid),localStorage.setItem("username",e.data.username),localStorage.setItem("isLoggedIn","true"),localStorage.setItem("authToken",e.data.token),localStorage.setItem("role",e.data.role),O.push("/")):(localStorage.getItem("isLoggedIn",!1),c(e.data.message))})).catch((function(e){throw console.log(e),e}))}function f(){O.push("/register")}return Object(p.jsxs)("div",{className:"Login",children:[Object(p.jsx)(N.a,{className:"lalert",variant:"danger",children:Object(p.jsx)(N.a.Heading,{children:s})}),Object(p.jsx)(b.a,{query:"only screen and (max-width: 767px)",children:Object(p.jsxs)(k.a,{className:"LoginForm",class:"form-horizontal visible-xs-block",id:"marker-xs",children:[Object(p.jsx)("img",{src:v,alt:"logo groupomania"}),Object(p.jsxs)("div",{className:"form-group",children:[Object(p.jsx)("label",{className:"col-xs-2 control-label",children:"username"}),Object(p.jsx)("input",{className:"username form-control",type:"text",placeholder:"Username",value:r,onChange:function(e){return d(e.target.value)}})]}),Object(p.jsxs)("div",{className:"form-group",children:[Object(p.jsx)("label",{className:"col-xs-2 control-label",children:"Password"}),Object(p.jsx)("input",{className:"password form-control",placeholder:"Password",type:"password",value:h,onChange:function(e){return x(e.target.value)}})]}),Object(p.jsx)("div",{className:"col-xs-offset-2 col-xs-10",children:Object(p.jsx)("button",{type:"button",className:"btn btn-secondary mt-4",onClick:g,children:"Login"})}),Object(p.jsx)("div",{className:"col-xs-offset-2 col-xs-10",children:Object(p.jsx)("button",{type:"button",className:"btn btn-secondary mt-4",onClick:f,children:"Register"})})]})}),Object(p.jsx)(b.a,{query:"only screen and (min-width: 768px) and (max-width:991px)",children:Object(p.jsxs)(k.a,{className:"LoginForm",class:"form-horizontal visible-sm-block",id:"marker-sm",children:[Object(p.jsx)("img",{src:v,alt:"logo groupomania"}),Object(p.jsxs)("div",{className:"form-group",children:[Object(p.jsx)("label",{className:" col-sm-2 control-label",children:"username"}),Object(p.jsx)("input",{className:"username form-control",type:"text",placeholder:"Username",onChange:function(e){return d(e.target.value)}})]}),Object(p.jsxs)("div",{className:"form-group",children:[Object(p.jsx)("label",{className:" col-sm-2 control-label",children:"Password"}),Object(p.jsx)("input",{className:"password form-control",placeholder:"Password",type:"password",onChange:function(e){return x(e.target.value)}})]}),Object(p.jsx)("div",{className:"col-sm-offset-2 col-sm-10",children:Object(p.jsx)("button",{type:"button",className:"btn btn-secondary",onClick:g,children:"Login"})}),Object(p.jsx)("div",{className:"col-sm-offset-2 col-sm-10",children:Object(p.jsx)("button",{type:"button",className:"btn btn-secondary",onClick:f,children:"Register"})})]})}),Object(p.jsx)(b.a,{query:"only screen and (min-width: 992px)",children:Object(p.jsxs)(k.a,{className:"LoginForm",class:"form-horizontal visible-md-block",id:"marker-md",children:[Object(p.jsx)("img",{src:v,alt:"logo groupomania"}),Object(p.jsxs)("div",{className:"form-group",children:[Object(p.jsx)("label",{className:"col-md-2 control-label",children:"username"}),Object(p.jsx)("input",{className:"username form-control username",type:"text",placeholder:"Username",onChange:function(e){return d(e.target.value)}})]}),Object(p.jsxs)("div",{className:"form-group",children:[Object(p.jsx)("label",{className:" col-md-2 control-label",children:"Password"}),Object(p.jsx)("input",{className:"password form-control password",placeholder:"Password",type:"password",onChange:function(e){return x(e.target.value)}})]}),Object(p.jsx)("div",{className:"col-md-offset-2 col-md-10",children:Object(p.jsx)("button",{className:"btn btn-secondary",type:"button",onClick:g,children:"Login"})}),Object(p.jsx)("div",{className:"col-md-offset-2 col-md-10",children:Object(p.jsx)("button",{className:"btn btn-secondary",type:"button",onClick:f,children:"Register"})})]})})]})},y=(s(88),s(46)),P=s(91);var S=function(){var e=Object(a.useState)(""),t=Object(i.a)(e,2),s=(t[0],t[1]),c=Object(a.useState)(""),n=Object(i.a)(c,2),o=n[0],r=n[1],d=Object(a.useState)(""),u=Object(i.a)(d,2),m=u[0],h=u[1],b=Object(a.useState)(""),O=Object(i.a)(b,2),g=O[0],f=O[1],v=Object(l.f)();return Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)(x,{}),Object(p.jsx)("div",{className:"Post",children:Object(p.jsx)("div",{className:"PostForm justify-content-center",children:Object(p.jsxs)(k.a,{children:[Object(p.jsx)("h1",{className:"mt-4",children:"Create a new post"}),Object(p.jsxs)(k.a.Group,{className:"justify-items-center",as:y.a,md:"4",controlId:"exampleForm.Input1",onChange:function(e){r(e.target.value)},children:[Object(p.jsx)(k.a.Label,{className:"text-center",children:"Tiltle"}),Object(p.jsx)(k.a.Control,{className:"text-center",type:"text",rows:3})]}),Object(p.jsxs)(k.a.Group,{as:y.a,md:"4",controlId:"exampleForm.ControlTextarea1",onChange:function(e){h(e.target.value)},children:[Object(p.jsx)(k.a.Label,{className:"text-center",children:"Message"}),Object(p.jsx)(k.a.Control,{className:"text-center",as:"textarea",rows:3})]}),Object(p.jsxs)(k.a.Group,{controlId:"formFileSm",className:"mb-3",children:[Object(p.jsx)(k.a.Label,{children:"Image Upload"}),Object(p.jsx)(k.a.Control,{type:"file",onChange:function(e){f(e.target.value)}})]}),Object(p.jsx)(P.a,{className:"text-center col-md-4 mt-4",variant:"secondary",size:"sm",onClick:function(){j.a.post("https://groupomania626.herokuapp.com/posts/create",{postUserId:localStorage.getItem("userid"),title:o,description:m,image:g},{headers:{Authorization:localStorage.getItem("authToken")}}).then((function(e){s(e.data),v.push("/")}))},children:"Upload"})]})})})]})},I=s(6),w=s.n(I),C=s.p+"static/media/icon-left-font-monochrome-black.5fa0e785.png",T=s.p+"static/media/plage.c9de9a20.jpg",A=s(47);var D=function(e){var t=Object(l.f)(),s=Object(a.useState)([]),n=Object(i.a)(s,2),o=n[0],r=n[1],d=Object(a.useState)([]),u=Object(i.a)(d,2),m=u[0],h=u[1],b=Object(a.useState)(-1),O=Object(i.a)(b,2),g=O[0],f=O[1],v=Object(a.useState)(""),N=Object(i.a)(v,2),k=N[0],_=N[1],y=Object(a.useState)(""),P=Object(i.a)(y,2),S=P[0],I=P[1],D=Object(a.useState)(!1),F=Object(i.a)(D,2),L=F[0],U=F[1];return c.a.useEffect((function(){j.a.post("https://groupomania626.herokuapp.com/auth/infos",{userid:localStorage.getItem("userid")},{headers:{Authorization:localStorage.getItem("authToken")}}).then((function(e){console.log(e),h(e.data)}))}),[]),c.a.useEffect((function(){j.a.post("https://groupomania626.herokuapp.com/posts/fromUser",{userid:localStorage.getItem("userid")},{headers:{Authorization:localStorage.getItem("authToken")}}).then((function(e){r(e.data)}))}),[L]),Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)(x,{}),Object(p.jsxs)("div",{className:w.a.profile_content,children:[m.map((function(e,t){return Object(p.jsx)("div",{children:Object(p.jsxs)("div",{className:w.a.profile,children:[Object(p.jsxs)("div",{className:w.a.user_profile,children:[Object(p.jsx)("img",{className:w.a.avatar,src:C,alt:"Groupomania avatar"}),Object(p.jsx)("div",{className:w.a.chip,children:Object(p.jsx)(A.a,{className:"".concat(w.a.chip," ").concat(w.a.icon)})}),Object(p.jsxs)("div",{className:w.a.card,children:[Object(p.jsxs)("div",{className:w.a.username,children:["username : ",e.username]}),Object(p.jsxs)("div",{className:w.a.name,children:["name : ",e.name]}),Object(p.jsxs)("div",{className:w.a.firstname,children:["firstname : ",e.firstname]}),Object(p.jsxs)("div",{className:w.a.email,children:["email :",e.email]}),Object(p.jsxs)("div",{className:w.a.role,children:["role : ",e.role]})]})]}),Object(p.jsx)("button",{className:"".concat(w.a.Buttons," ").concat(w.a.delete),onClick:E,children:"Delete Your Account"})]})},t)})),Object(p.jsx)("div",{className:w.a.container,children:o.map((function(e,t){return Object(p.jsxs)("div",{id:"Post".concat(e.idposts),className:w.a.Posts,children:[Object(p.jsx)("input",{type:"hidden",placeholder:e.idposts}),Object(p.jsx)("input",{type:"hidden",placeholder:e.postuserid}),Object(p.jsx)("div",{className:w.a.Title,children:g!==e.idposts?Object(p.jsx)(p.Fragment,{children:Object(p.jsx)("div",{className:"postTitle",children:e.title})}):Object(p.jsx)(p.Fragment,{children:Object(p.jsx)("div",{className:"postTitle",contentEditable:"true",children:e.title})})}),Object(p.jsx)("div",{className:w.a.Image,children:Object(p.jsx)("img",{src:T,alt:"poster"})}),Object(p.jsx)("div",{className:w.a.Description,children:g!==e.idposts?Object(p.jsx)(p.Fragment,{children:Object(p.jsx)("div",{className:"postDesc",children:e.description})}):Object(p.jsx)(p.Fragment,{children:Object(p.jsx)("div",{className:"postDesc",contentEditable:"true",children:e.description})})}),Object(p.jsxs)("div",{className:w.a.Date,children:["created on ",e.date]}),Object(p.jsxs)("div",{className:w.a.Likes,children:["likes : ",e.likes]}),g!==e.idposts?Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)("button",{className:"".concat(w.a.Buttons," ").concat(w.a.update),"data-post":e.idposts,onClick:z,children:"Update"}),Object(p.jsx)("button",{className:"".concat(w.a.Buttons," ").concat(w.a.delete),"data-post":e.idposts,onClick:R,children:"Delete"})]}):Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)("button",{className:"".concat(w.a.Buttons," ").concat(w.a.update),"data-post":e.idposts,onClick:q,children:"Save changes"}),Object(p.jsx)("button",{className:"".concat(w.a.Buttons," ").concat(w.a.delete),"data-post":e.idposts,onClick:B,children:"Cancel changes"})]})]},t)}))})]})]});function z(e){var t=e.target.getAttribute("data-post");_(document.querySelector("#Post"+t+" .postTitle").innerText),I(document.querySelector("#Post"+t+" .postDesc").innerText),f(parseInt(t))}function B(e){var t=e.target.getAttribute("data-post");document.querySelector("#Post"+t+" .postTitle").innerText=k,document.querySelector("#Post"+t+" .postDesc").innerText=S,_(""),I(""),f(-1)}function q(e){var t=e.target.getAttribute("data-post"),s=document.querySelector("#Post"+t+" .postTitle").innerText,a=document.querySelector("#Post"+t+" .postDesc").innerText;j.a.put("https://groupomania626.herokuapp.com/posts/update",{postId:t,postTitle:s,postDesc:a},{headers:{Authorization:localStorage.getItem("authToken")}}).then((function(e){f(-1),U(!0)}))}function R(e){var s;window.confirm("Are you sure you want to delete this post ?")&&(console.log(e.target.getAttribute("data-post")),s=e.target.getAttribute("data-post"),j.a.delete("https://groupomania626.herokuapp.com/posts/delete/".concat(s),{headers:{Authorization:localStorage.getItem("authToken")}}).then((function(){t.go(0)})))}function E(){var e;if(window.confirm("Are you sure you want to delete this post ?")){var s=localStorage.getItem("userid");e=s,j.a.delete("https://groupomania626.herokuapp.com/auth/delete/".concat(e),{headers:{Authorization:localStorage.getItem("authToken")}}).then((function(){localStorage.clear(),t.push("/login")}))}}};var F=function(){return Object(p.jsx)(p.Fragment,{children:Object(p.jsx)(r.a,{children:Object(p.jsxs)(l.c,{children:[Object(p.jsx)(l.a,{path:"/",exact:!0,render:function(){return Object(p.jsx)(O,{})}}),Object(p.jsx)(l.a,{path:"/login",exact:!0,render:function(){return Object(p.jsx)(_,{})}}),Object(p.jsx)(l.a,{path:"/register",exact:!0,render:function(){return Object(p.jsx)(f,{})}}),Object(p.jsx)(l.a,{path:"/post",exact:!0,render:function(){return Object(p.jsx)(S,{})}}),Object(p.jsx)(l.a,{path:"/profile",exact:!0,render:function(){return Object(p.jsx)(D,{})}})]})})})};o.a.render(Object(p.jsx)(c.a.StrictMode,{children:Object(p.jsx)(F,{class:"App"})}),document.getElementById("root"))}},[[89,1,2]]]);
//# sourceMappingURL=main.69e028f6.chunk.js.map