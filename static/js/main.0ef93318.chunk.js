(this["webpackJsonpreact-1"]=this["webpackJsonpreact-1"]||[]).push([[0],{103:function(e,t,n){e.exports={loader:"Loader_loader__3dyN5"}},12:function(e,t,n){"use strict";n.d(t,"a",(function(){return r})),n.d(t,"b",(function(){return s}));var r,a=n(95),c=n.n(a);!function(e){e[e.success=0]="success",e[e.error=1]="error",e[e.captchaIsRequired=10]="captchaIsRequired"}(r||(r={}));var s=c.a.create({withCredentials:!0,baseURL:"https://social-network.samuraijs.com/api/1.0/",headers:{"API-KEY":"94255a0f-3471-4b7b-b59d-a3f0dda8cb88"}})},151:function(e,t,n){"use strict";n.r(t);var r=n(50),a=n(84),c=n(55),s=n(8),i=n.n(s),o=n(18),u=n(34),d=n(4),l=n(12),j=function(e){return l.b.get("profile/"+e).then((function(e){return e.data}))},b=function(e){return l.b.get("profile/status/"+e).then((function(e){return e.data}))},f=function(e){return l.b.put("profile/status",{status:e}).then((function(e){return e.data.resultCode}))},p=function(e){var t=new FormData;return t.append("image",e),l.b.put("profile/photo",t).then((function(e){return e.data}))},A=function(e){return l.b.put("profile",e).then((function(e){return e.data}))},O=function(e){return l.b.post("auth/login",e).then((function(e){return e.data}))},h=function(){return l.b.delete("auth/login").then((function(e){return e.data}))},g=function(){return l.b.get("security/get-captcha-url").then((function(e){return e.data.url}))},x=function(){return l.b.get("auth/me").then((function(e){return e.data}))},m={data:null,isAuth:!1,captcha:void 0,authUserProfile:null},v=function(e,t,n,r){return{type:"app/auth-reducer/ADD_DATA",data:{id:e,login:t,email:n},isAuth:r}},w=function(e){return{type:"app/auth-reducer/ADD_CAPTCHA_URL",path:e}},C=function(e){return{type:"app/auth-reducer/AUTH_USER_PROFILE",userProfile:e}},E=function(e){return{type:"app/auth-reducer/SAVE_PHOTO_SUCCESS",photos:e}},S=function(){return function(){var e=Object(o.a)(i.a.mark((function e(t){var n,r,a,c,s,o;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x();case 2:if((n=e.sent).resultCode!==l.a.success){e.next=10;break}return r=n.data,a=r.id,c=r.login,s=r.email,t(v(a,c,s,!0)),e.next=8,j(a);case 8:o=e.sent,t(C(o));case 10:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},B=function(e){return function(){var t=Object(o.a)(i.a.mark((function t(n){var r,a;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,O(e);case 2:if((r=t.sent).resultCode!==l.a.success){t.next=8;break}n(S()),n(w(void 0)),t.next=14;break;case 8:if(r.resultCode!==l.a.captchaIsRequired){t.next=13;break}return t.next=11,g();case 11:a=t.sent,n(w(a));case 13:return t.abrupt("return",r.messages[0]);case 14:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},I=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:m,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"app/auth-reducer/ADD_DATA":return Object(d.a)(Object(d.a)({},e),{},{data:t.data,isAuth:t.isAuth});case"app/auth-reducer/ADD_CAPTCHA_URL":return Object(d.a)(Object(d.a)({},e),{},{captcha:t.path});case"app/auth-reducer/AUTH_USER_PROFILE":return Object(d.a)(Object(d.a)({},e),{},{authUserProfile:t.userProfile});case"app/auth-reducer/SAVE_PHOTO_SUCCESS":return Object(d.a)(Object(d.a)({},e),{},{authUserProfile:Object(d.a)(Object(d.a)({},e.authUserProfile),{},{photos:t.photos})});default:return e}},P={postData:[{id:1,message:"Hi, how are you?",likeCounter:12},{id:2,message:"It's my firs post",likeCounter:13},{id:3,message:"It's my second post",likeCounter:14},{id:4,message:"It's my third post",likeCounter:15},{id:5,message:"It's my fourth post",likeCounter:16},{id:6,message:"It's my fifth post",likeCounter:17}],newPostText:"",userProfile:null,userStatus:"",isFetching:!1},N=function(e){return{type:"app/profile-reducer/ADD-POST",newPostText:e}},_=function(e){return{type:"app/profile-reducer/SET_USER_PROFILE",profile:e}},y=function(e){return{type:"app/profile-reducer/SET_USER_STATUS",status:e}},T=function(e){return{type:"app/profile-reducer/SAVE_PHOTO_SUCCESS",photos:e}},D=function(e){return{type:"app/profile-reducer/IS_FETCHING",isFetching:e}},Q=function(e){return function(){var t=Object(o.a)(i.a.mark((function t(n){var r;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n(D(!0)),t.next=3,j(e);case 3:r=t.sent,n(_(r)),n(D(!1));case 6:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},k=function(e){return function(){var t=Object(o.a)(i.a.mark((function t(n,r){var a,c;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a=r().authorization.data.id,t.next=3,A(e);case 3:if((c=t.sent).resultCode!==l.a.success){t.next=8;break}n(Q(a)),t.next=9;break;case 8:return t.abrupt("return",c.messages);case 9:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}()},U=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:P,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"app/profile-reducer/ADD-POST":var n={id:5,message:t.newPostText,likeCounter:0};return Object(d.a)(Object(d.a)({},e),{},{postData:[n].concat(Object(u.a)(e.postData)),newPostText:""});case"app/profile-reducer/UPDATE-TEXT-AREA":return Object(d.a)(Object(d.a)({},e),{},{newPostText:t.newText});case"app/profile-reducer/SET_USER_PROFILE":return Object(d.a)(Object(d.a)({},e),{},{userProfile:t.profile});case"app/profile-reducer/SET_USER_STATUS":return Object(d.a)(Object(d.a)({},e),{},{userStatus:t.status});case"app/profile-reducer/SAVE_PHOTO_SUCCESS":return Object(d.a)(Object(d.a)({},e),{},{userProfile:Object(d.a)(Object(d.a)({},e.userProfile),{},{photos:t.photos})});case"app/profile-reducer/IS_FETCHING":return Object(d.a)(Object(d.a)({},e),{},{isFetching:t.isFetching});default:return e}},F=n(94),L=n(96),H="myApp/auth-reducer/INITIALIZE_APP",M={initialized:!1},G=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:M,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case H:return Object(d.a)(Object(d.a)({},e),{},{initialized:!0});default:return e}},R=Object(r.c)({profilePage:U,dialogPage:a.b,friendsItems:c.a,usersPage:F.a,authorization:I,app:G}),J=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__,K=Object(r.d)(R,J(Object(r.a)(L.a)));window.store=K;var Y=K,X=n(0),V=n.n(X),z=n(14),q=n.n(z),Z=(n(93),n(66)),W=n(71),$=n(70),ee=n(16),te=n(2),ne=function(e){return Object(te.jsx)("div",{children:"News"})},re=function(){return Object(te.jsx)("div",{children:"Music"})},ae=function(e){return Object(te.jsx)("div",{children:"Settings"})},ce=n(9),se=n(19),ie=function(e){return e.friendsItems.friendsItems},oe=n(22),ue=n.n(oe),de=function(e){Object(ce.d)(ie);return Object(te.jsx)("div",{children:Object(te.jsx)("div",{className:ue.a.nav,children:Object(te.jsxs)("nav",{children:[Object(te.jsx)("div",{children:Object(te.jsx)(se.b,{className:ue.a.item,activeClassName:ue.a.activeLink,to:"/profile",children:"Profile"})}),Object(te.jsx)("div",{children:Object(te.jsx)(se.b,{className:ue.a.item,activeClassName:ue.a.activeLink,to:"/users",children:"Users"})}),Object(te.jsx)("div",{children:Object(te.jsx)(se.b,{className:ue.a.item,activeClassName:ue.a.activeLink,to:"/dialogs",children:"Messages"})}),Object(te.jsx)("div",{children:Object(te.jsx)(se.b,{className:ue.a.item,activeClassName:ue.a.activeLink,to:"/news",children:"News"})}),Object(te.jsx)("div",{children:Object(te.jsx)(se.b,{className:ue.a.item,activeClassName:ue.a.activeLink,to:"/music",children:"Music"})}),Object(te.jsx)("div",{children:Object(te.jsx)(se.b,{className:ue.a.item,activeClassName:ue.a.activeLink,to:"/settings",children:"Settings"})})]})})})},le=n(59),je=n.n(le),be=n(38),fe=n(187),pe=n(188),Ae=n(106),Oe=n(63),he=n(64),ge=function(e){return e.authorization.authUserProfile},xe=n(185),me=function(){var e,t,n=Object(ce.c)(),r=Object(ce.d)(ge),a=Object(ce.d)(he.d),c=Object(be.a)();return Object(te.jsx)(xe.a,{position:"static",children:Object(te.jsxs)(fe.a,{children:[Object(te.jsx)(pe.a,{className:je.a.headerText,children:"Social Network"}),a&&r?Object(te.jsxs)(se.b,{to:"/profile/",className:je.a.headerUserData,children:[Object(te.jsx)("img",{className:je.a.logo,src:null!==(null===(e=r.photos)||void 0===e?void 0:e.small)?null===(t=r.photos)||void 0===t?void 0:t.small:Oe.a,alt:"profile"}),Object(te.jsx)("span",{children:r.fullName})]}):Object(te.jsx)(se.b,{className:je.a.headerUserData,to:"/login",children:Object(te.jsx)(pe.a,{children:"You are not authorized"})}),Object(te.jsx)(Ae.a,{onClick:function(){n(function(){var e=Object(o.a)(i.a.mark((function e(t){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h();case 2:e.sent.resultCode===l.a.success&&t(v(null,null,null,!1));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())},className:c.LogoutButton,variant:"contained",type:"submit",children:"Logout"})]})})},ve=n(46),we=n(21),Ce=n(20),Ee=n(24),Se=n(33),Be=n(72),Ie=n.n(Be),Pe=function(){var e=Object(ce.d)(he.d),t=Object(ce.d)((function(e){return e.authorization.captcha})),n=Object(ce.c)(),r=function(){var e=Object(o.a)(i.a.mark((function e(t){var r;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n(B(t));case 2:if(void 0===(r=e.sent)){e.next=5;break}return e.abrupt("return",Object(ve.a)({},Se.a,r));case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return!0===e?Object(te.jsx)(ee.a,{to:"/profile"}):Object(te.jsx)(we.b,{onSubmit:r,captcha:t,render:function(e){var n=e.handleSubmit,r=e.submitError;return Object(te.jsx)("div",{children:Object(te.jsxs)("form",{className:Ie.a.loginForm,onSubmit:n,children:[Object(te.jsx)("div",{className:Ie.a.email,children:Object(te.jsx)(we.a,{name:"email",component:Ce.b,validate:Object(Ee.b)(Ee.d,Object(Ee.c)(30))})}),Object(te.jsx)("div",{children:Object(te.jsx)(we.a,{name:"password",component:Ce.b,type:"password",validate:Object(Ee.b)(Ee.d,Object(Ee.c)(30))})}),Object(te.jsxs)("div",{children:[Object(te.jsx)(we.a,{name:"rememberMe",component:"input",type:"checkbox"}),Object(te.jsx)("span",{children:"remember me"})]}),t&&Object(te.jsxs)("div",{children:[Object(te.jsx)("img",{src:t,alt:"captcha"}),Object(te.jsx)(we.a,{name:"captcha",component:Ce.b})]}),r&&Object(te.jsx)("div",{className:Ie.a.error,children:r}),Object(te.jsx)("div",{children:Object(te.jsx)(Ce.a,{children:"Login"})})]})})}})},Ne=n(36),_e=n(81),ye=n(58),Te=n(37),De=n(40),Qe=n.n(De),ke=n(79),Ue=n.n(ke),Fe=n(107),Le=function(e){var t=e.userStatus,n=e.updateStatus,r=Object(X.useState)(!1),a=Object(ye.a)(r,2),c=a[0],s=a[1],i=Object(X.useState)(t),o=Object(ye.a)(i,2),u=o[0],d=o[1];Object(X.useEffect)((function(){d(t)}),[t]);return Object(te.jsx)("div",{className:Ue.a.profileStatus,children:c?Object(te.jsx)("div",{children:Object(te.jsx)(Fe.a,{autoFocus:!0,onChange:function(e){d(e.currentTarget.value)},onBlur:function(){s(!1),n(u)},type:"text",value:u,label:"Status",variant:"outlined"})}):Object(te.jsxs)("div",{className:Ue.a.status,children:[Object(te.jsxs)("span",{onDoubleClick:function(){s(!0)},children:[" ",Object(te.jsx)("b",{children:"Status: "}),u||"No Status"]}),Object(te.jsx)("div",{children:Object(te.jsx)("i",{children:"DoubleClick to change"})})]})})},He=function(e){var t=e.setEditMode,n=e.userProfile,r=(Object(Te.a)(e,["setEditMode","userProfile"]),Object(ce.c)()),a=function(){var e=Object(o.a)(i.a.mark((function e(n){var a;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,r(k(n));case 2:if(void 0===(a=e.sent)){e.next=7;break}return e.abrupt("return",Object(ve.a)({},Se.a,a));case 7:t(!1);case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(te.jsxs)("div",{className:Qe.a.editMode,children:[Object(te.jsx)("h4",{children:"Edit Mode"}),Object(te.jsx)(we.b,{onSubmit:a,initialValues:n,render:function(e){var t=e.handleSubmit,r=e.submitError;return Object(te.jsxs)("form",{onSubmit:t,className:Qe.a.editModeForm,children:[Object(te.jsx)("div",{children:Object(te.jsx)(we.a,{name:"fullName",component:Ce.b,label:"Full Name"})}),Object(te.jsxs)("div",{children:[Object(te.jsx)(we.a,{name:"aboutMe",component:Ce.b,label:"About Me"}),r&&Object(te.jsx)("div",{className:Qe.a.error,children:Object(Ee.a)(r,"AboutMe")})]}),Object(te.jsxs)("div",{children:[Object(te.jsx)(we.a,{name:"lookingForAJobDescription",label:"My professional skill",component:Ce.b}),r&&Object(te.jsx)("div",{className:Qe.a.error,children:Object(Ee.a)(r,"LookingForAJobDescription")})]}),Object(te.jsxs)("div",{children:[Object(te.jsx)("h5",{children:"Contacts:"})," ",null!=n&&Object.keys(n.contacts).map((function(e){return Object(te.jsxs)("div",{children:[Object(te.jsx)(we.a,{name:"contacts."+e,component:Ce.b,label:e}),r&&Object(te.jsx)("div",{className:Qe.a.error,children:Object(Ee.a)(r,e)})]},e)}))]}),Object(te.jsx)(Ce.a,{children:"Save"})]})}})]})},Me=function(e){var t=e.setEditMode,n=e.userProfile,r=e.isOwner,a=Object(be.a)();return null!=n?Object(te.jsxs)("div",{className:Qe.a.info,children:[Object(te.jsx)("h1",{children:n.fullName}),Object(te.jsxs)("div",{children:[n.aboutMe&&Object(te.jsx)("b",{children:"About me:"})," ",n.aboutMe]}),Object(te.jsx)("div",{children:n.lookingForAJobDescription&&Object(te.jsxs)("span",{children:[Object(te.jsx)("b",{children:"My professional skill:"})," ",n.lookingForAJobDescription]})}),Object(te.jsxs)("div",{children:[Object(te.jsx)("b",{children:"Contacts"}),": ",Object.keys(n.contacts).map((function(e){return null!=n.contacts?Object(te.jsx)(Ge,{contactTitle:e,contactValue:n.contacts[e]},e):null}))]}),r&&Object(te.jsx)(Ae.a,{onClick:function(){t(!0)},className:a.LoginButton,variant:"contained",type:"submit",children:"Edit Mode"})]}):null},Ge=function(e){var t=e.contactTitle,n=e.contactValue;return Object(te.jsx)("div",{children:n&&Object(te.jsxs)("span",{children:[Object(te.jsxs)("b",{children:[t,": "]}),Object(te.jsx)("a",{href:n,target:"_blank",rel:"noreferrer",children:n}),"  "]})})},Re=function(e){var t=e.userStatus,n=e.updateStatus,r=Object(Te.a)(e,["userStatus","updateStatus"]),a=Object(X.useState)(!1),c=Object(ye.a)(a,2),s=c[0],i=c[1];return Object(te.jsxs)("div",{children:[Object(te.jsx)(Le,{userStatus:t,updateStatus:n}),s?Object(te.jsx)(He,Object(d.a)({setEditMode:i},r)):Object(te.jsx)(Me,Object(d.a)({setEditMode:i},r))]})},Je=n(80),Ke=n.n(Je),Ye=function(e){var t=e.addNewPost;return Object(te.jsx)("div",{children:Object(te.jsx)(we.b,{onSubmit:function(e){t(e.newPostText),e.newPostText=""},render:function(e){var t=e.handleSubmit;return Object(te.jsxs)("form",{onSubmit:t,className:Ke.a.Textarea,children:[Object(te.jsx)("div",{children:Object(te.jsx)(we.a,{className:Ke.a.inputField,name:"newPostText",component:Ce.b,label:"Something new?",validate:Object(Ee.c)(150)})}),Object(te.jsx)("div",{children:Object(te.jsx)(Ce.a,{children:"Post"})})]})}})})},Xe=n(60),Ve=n.n(Xe),ze=n(53),qe=n.n(ze),Ze=function(e){var t=e.message,n=e.likeCounter;return Object(te.jsx)("div",{children:Object(te.jsxs)("div",{className:qe.a.item,children:[Object(te.jsxs)("div",{className:qe.a.postInfo,children:[Object(te.jsx)("img",{src:"https://ps.w.org/wp-user-avatar/assets/icon-256x256.png?rev=1755722",alt:"postAvatar"}),Object(te.jsxs)("div",{className:qe.a.name,children:[Object(te.jsx)("div",{children:"Oleksandr Tomesh"}),Object(te.jsx)("div",{children:"04/12/2020"})]})]}),Object(te.jsx)("div",{className:qe.a.message,children:t}),Object(te.jsxs)("div",{className:qe.a.like,children:["Like ",n]})]})})},We=function(e){return e.profilePage.userProfile},$e=function(e){return e.authorization.data},et=function(e){return e.profilePage.userStatus},tt=function(e){return e.profilePage.isFetching},nt=function(e){return e.profilePage.postData},rt=function(e){var t=e.isOwner,n=Object(ce.c)(),r=Object(ce.d)(nt);return!0===t?Object(te.jsxs)("div",{className:Ve.a.MyPosts,children:[Object(te.jsx)("div",{className:Ve.a.addNewPost,children:Object(te.jsx)(Ye,{addNewPost:function(e){n(function(e){return function(t){return t(N(e))}}(e))}})}),Object(te.jsx)("div",{className:Ve.a.posts,children:r.map((function(e){return Object(te.jsx)(Ze,{message:e.message,likeCounter:e.likeCounter},e.message)}))})]}):Object(te.jsx)("div",{className:Ve.a.post,children:"This user does not have posts yet"})},at=n(61),ct=n.n(at),st=function(e){var t,n,r=e.isOwner,a=Object(ce.c)(),c=Object(ce.d)(We),s=Object(ce.d)(tt),u=Object(ce.d)(et),d=function(e){a(function(e){return function(){var t=Object(o.a)(i.a.mark((function t(n){var r;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n(D(!0)),t.next=3,p(e);case 3:(r=t.sent).resultCode===l.a.success&&(n(T(r.data.photos)),n(E(r.data.photos))),n(D(!1));case 6:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}(e))};return c?Object(te.jsxs)("div",{className:ct.a.content,children:[Object(te.jsxs)("div",{className:ct.a.profile_info,children:[Object(te.jsxs)("div",{className:ct.a.profile_photo,children:[s?Object(te.jsx)(Ne.a,{}):Object(te.jsx)("img",{src:null!==(null===(t=c.photos)||void 0===t?void 0:t.large)?null===(n=c.photos)||void 0===n?void 0:n.large:Oe.a,alt:"profile"}),Object(te.jsx)("div",{className:ct.a.uploadButton,children:r&&Object(te.jsx)(Ce.c,{onChangeHandler:function(e){var t;(null===(t=e.target.files)||void 0===t?void 0:t.length)&&d(e.target.files[0])},buttonAssign:"Upload Profile Photo"})})]}),Object(te.jsx)(Re,{userProfile:c,userStatus:u,updateStatus:function(e){a(function(e){return function(){var t=Object(o.a)(i.a.mark((function t(n){return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,f(e);case 2:t.sent===l.a.success&&n(y(e));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}(e))},isOwner:r})]}),Object(te.jsx)(rt,{isOwner:r})]}):Object(te.jsx)(Ne.a,{})},it=V.a.memo((function(){var e=Object(ce.c)(),t=Object(ce.d)($e),n=Object(ce.d)(tt),r=function(t){e(function(e){return function(){var t=Object(o.a)(i.a.mark((function t(n){var r;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,b(e);case 2:r=t.sent,n(y(r));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}(t))},a=function(n){var a=parseInt(n);a||null==t||(a=t.id),function(t){e(Q(t))}(a),r(a)},c=Object(ee.h)().userId;return Object(X.useEffect)((function(){a(c)}),[c]),Object(te.jsx)("div",{children:n?Object(te.jsx)(Ne.a,{}):Object(te.jsx)(st,{isOwner:!c})})})),ot=Object(_e.a)(it),ut=n(191),dt=Object(X.lazy)((function(){return n.e(4).then(n.bind(null,218))})),lt=Object(X.lazy)((function(){return Promise.all([n.e(3),n.e(5)]).then(n.bind(null,219))})),jt=function(e){Object(W.a)(n,e);var t=Object($.a)(n);function n(){var e;Object(Z.a)(this,n);for(var r=arguments.length,a=new Array(r),c=0;c<r;c++)a[c]=arguments[c];return(e=t.call.apply(t,[this].concat(a))).componentDidMount=function(){e.props.initialized()},e.render=function(){return e.props.initialized?Object(te.jsxs)(ut.a,{container:!0,direction:"column",spacing:2,children:[Object(te.jsx)(ut.a,{item:!0,xs:12,children:Object(te.jsx)(me,{})}),Object(te.jsxs)(ut.a,{item:!0,container:!0,direction:"row",spacing:2,children:[Object(te.jsx)(ut.a,{item:!0,sm:1}),Object(te.jsx)(ut.a,{item:!0,xs:12,sm:2,children:Object(te.jsx)(de,{})}),Object(te.jsx)(ut.a,{item:!0,sm:8,children:Object(te.jsx)(X.Suspense,{fallback:Object(te.jsx)(Ne.a,{}),children:Object(te.jsxs)(ee.d,{children:[Object(te.jsx)(ee.b,{exact:!0,path:"/",render:function(){return Object(te.jsx)(ee.a,{to:"/profile"})}}),Object(te.jsx)(ee.b,{path:"/login",render:function(){return Object(te.jsx)(Pe,{})}}),Object(te.jsx)(ee.b,{path:"/users",render:function(){return Object(te.jsx)(lt,{})}}),Object(te.jsx)(ee.b,{path:"/dialogs",render:function(){return Object(te.jsx)(dt,{})}}),Object(te.jsx)(ee.b,{path:"/profile/:userId?",render:function(){return Object(te.jsx)(ot,{})}}),Object(te.jsx)(ee.b,{path:"/news",component:ne}),Object(te.jsx)(ee.b,{path:"/music",component:re}),Object(te.jsx)(ee.b,{path:"/settings",component:ae}),Object(te.jsx)(ee.b,{path:"*",render:function(){return Object(te.jsx)("div",{children:"404 NOT FOUND"})}})]})})}),Object(te.jsx)(ut.a,{item:!0,sm:1})]})]}):Object(te.jsx)(Ne.a,{})},e}return n}(V.a.Component),bt=Object(ce.b)((function(e){return{initialized:e.app.initialized}}),{initialized:function(){return function(e){var t=e(S());Promise.all([t]).then((function(){e({type:H})}))}}})(jt),ft=function(e){e&&e instanceof Function&&n.e(6).then(n.bind(null,217)).then((function(t){var n=t.getCLS,r=t.getFID,a=t.getFCP,c=t.getLCP,s=t.getTTFB;n(e),r(e),a(e),c(e),s(e)}))};n(148),n(149);q.a.render(Object(te.jsx)(V.a.StrictMode,{children:Object(te.jsx)(se.a,{children:Object(te.jsx)(ce.a,{store:Y,children:Object(te.jsx)(bt,{})})})}),document.getElementById("root")),ft()},20:function(e,t,n){"use strict";n.d(t,"b",(function(){return u})),n.d(t,"a",(function(){return d})),n.d(t,"c",(function(){return l}));var r=n(4),a=n(37),c=n(38),s=n(107),i=n(106),o=(n(154),n(0),n(2)),u=function(e){var t=Object(c.a)(),n=e.input,i=e.meta,u=(e.children,Object(a.a)(e,["input","meta","children"]));return Object(o.jsx)(s.a,Object(r.a)(Object(r.a)({className:t.textField,variant:"outlined",color:"primary",label:n.name,size:"small",error:i.error&&i.touched,helperText:i.touched?i.error:void 0},n),u))},d=function(e){var t=e.children,n=Object(c.a)();return Object(o.jsx)(i.a,{className:n.LoginButton,variant:"contained",type:"submit",children:t})},l=function(e){var t=e.onChangeHandler,n=e.buttonAssign,r=Object(c.a)();return Object(o.jsxs)("label",{htmlFor:"upload-photo",children:[Object(o.jsx)("input",{style:{display:"none"},id:"upload-photo",name:"upload-photo",type:"file",onChange:t}),Object(o.jsx)(i.a,{className:r.UploadButton,variant:"contained",component:"span",children:n})]})}},22:function(e,t,n){e.exports={nav:"Navbar_nav__slPY0",item:"Navbar_item__dgERQ",activeLink:"Navbar_activeLink__8SB2B",friendsItems:"Navbar_friendsItems__2YQVu",friends:"Navbar_friends___ubY9"}},24:function(e,t,n){"use strict";n.d(t,"d",(function(){return r})),n.d(t,"c",(function(){return a})),n.d(t,"b",(function(){return c})),n.d(t,"a",(function(){return s}));var r=function(e){return e?void 0:"Required"},a=function(e){return function(t){return t&&t.length>e?"Max length is ".concat(e," symbols"):void 0}},c=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(e){return t.reduce((function(t,n){return t||n(e)}),void 0)}},s=function(e,t){var n=t[0].toUpperCase()+t.slice(1);return e&&e.map((function(e){if(e.indexOf(n)>=0)return e}))}},36:function(e,t,n){"use strict";var r=n(103),a=n.n(r),c=n.p+"static/media/Spinner.7593a230.svg",s=(n(0),n(2));t.a=function(){return Object(s.jsx)("div",{className:a.a.loader,children:Object(s.jsx)("img",{src:c,alt:"loader"})})}},38:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var r=n(152),a=Object(r.a)({textField:{width:"100%",marginBottom:"15px"},LoginButton:{width:"10rem",background:"linear-gradient(45deg, gray, #2d2d2d)",color:"white"},LogoutButton:{width:"10rem",background:"white",color:"black"},UploadButton:{background:"linear-gradient(45deg, gray, #2d2d2d)",color:"white"}})},40:function(e,t,n){e.exports={info:"Info_info__2qP2I",editModeForm:"Info_editModeForm__1e2fL",job:"Info_job__1li1e",error:"Info_error__2N64K",editMode:"Info_editMode__32hPv"}},53:function(e,t,n){e.exports={item:"Post_item__1oqx-",postInfo:"Post_postInfo__3ZaLI",name:"Post_name__2LXem",message:"Post_message__2SCuw"}},55:function(e,t,n){"use strict";n.d(t,"b",(function(){return s}));var r=n(34),a=n(4),c={friendsItems:[]},s={addFollowingUser:function(e){return{type:"app/friendsItems-reducer/ADD-FOLLOWING-USER",user:e}},removeUserFromFriendsItems:function(e){return{type:"app/friendsItems-reducer/REMOVE-USER",id:e}}};t.a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:c,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"app/friendsItems-reducer/ADD-FOLLOWING-USER":return Object(a.a)(Object(a.a)({},e),{},{friendsItems:[].concat(Object(r.a)(e.friendsItems),[t.user])});case"app/friendsItems-reducer/REMOVE-USER":return Object(a.a)(Object(a.a)({},e),{},{friendsItems:e.friendsItems.filter((function(e){return e.id!==t.id}))});default:return e}}},59:function(e,t,n){e.exports={headerText:"Header_headerText__11jLN",logo:"Header_logo__2IV0K",headerUserData:"Header_headerUserData__3baIP"}},60:function(e,t,n){e.exports={MyPosts:"MyPosts_MyPosts__39yWW",addNewPost:"MyPosts_addNewPost__2T3iO",post:"MyPosts_post__2TevQ"}},61:function(e,t,n){e.exports={content:"Profile_content__1A_Ne",profile_info:"Profile_profile_info__3sXB9",profile_photo:"Profile_profile_photo__3d9IN",uploadButton:"Profile_uploadButton__xKTjd"}},63:function(e,t,n){"use strict";t.a="data:image/png;base64,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"},64:function(e,t,n){"use strict";n.d(t,"h",(function(){return r})),n.d(t,"f",(function(){return a})),n.d(t,"g",(function(){return c})),n.d(t,"a",(function(){return s})),n.d(t,"e",(function(){return i})),n.d(t,"c",(function(){return o})),n.d(t,"d",(function(){return u})),n.d(t,"b",(function(){return d}));var r=function(e){return e.usersPage.users},a=function(e){return e.usersPage.pageSize},c=function(e){return e.usersPage.totalUsersCount},s=function(e){return e.usersPage.currentPage},i=function(e){return e.usersPage.isFetching},o=function(e){return e.usersPage.followingInProgress},u=function(e){return e.authorization.isAuth},d=function(e){return e.usersPage.filter}},72:function(e,t,n){e.exports={error:"Login_error__2s83K",loginForm:"Login_loginForm__1sbSj",email:"Login_email__1nHbB"}},79:function(e,t,n){e.exports={profileStatus:"ProfileStatus_profileStatus__1aoaG"}},80:function(e,t,n){e.exports={Textarea:"AddNewPost_Textarea__waG-0",inputField:"AddNewPost_inputField__2iN8c"}},81:function(e,t,n){"use strict";var r=n(4),a=n(37),c=n(66),s=n(104),i=n(71),o=n(70),u=n(0),d=n.n(u),l=n(16),j=n(9),b=n(2),f=function(e){return{isAuth:e.authorization.isAuth}};t.a=function(e){var t=function(t){Object(i.a)(u,t);var n=Object(o.a)(u);function u(){return Object(c.a)(this,u),n.apply(this,arguments)}return Object(s.a)(u,[{key:"render",value:function(){var t=this.props,n=t.isAuth,c=Object(a.a)(t,["isAuth"]);return n?Object(b.jsx)(e,Object(r.a)({},c)):Object(b.jsx)(l.a,{to:"/login"})}}]),u}(d.a.Component);return Object(j.b)(f)(t)}},84:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var r=n(34),a=n(4),c="ADD-MESSAGE",s={messageData:[{id:1,message:"Hello World"},{id:2,message:"Here will be message section soon :-)"}],dialogData:[{id:1,name:"User1"},{id:2,name:"User2"},{id:3,name:"User3"},{id:4,name:"User4"},{id:5,name:"User5"},{id:6,name:"User6"},{id:7,name:"User7"}],newMessageText:""},i=function(e){return{type:c,message:e}},o=function(e){return function(t){return t(i(e))}};t.b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:s,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case c:var n={id:5,message:t.message};return Object(a.a)(Object(a.a)({},e),{},{messageData:[].concat(Object(r.a)(e.messageData),[n]),newMessageText:""});default:return e}}},93:function(e,t,n){},94:function(e,t,n){"use strict";n.d(t,"b",(function(){return m})),n.d(t,"c",(function(){return v})),n.d(t,"d",(function(){return w}));var r=n(8),a=n.n(r),c=n(18),s=n(34),i=n(4),o=n(12),u=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:10,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{term:"",friend:null};return o.b.get("users?page=".concat(e,"&count=").concat(t,"&term=").concat(n.term)+(null===n.friend?"":"&friend=".concat(n.friend))).then((function(e){return e.data}))},d=function(e){return o.b.post("follow/".concat(e)).then((function(e){return e.data}))},l=function(e){return o.b.delete("follow/".concat(e)).then((function(e){return e.data}))},j=n(55),b={users:[],pageSize:8,totalUsersCount:0,currentPage:1,isFetching:!1,isFollow:!1,followingInProgress:[],filter:{term:"",friend:null}},f=function(e){return{type:"app/users-reducer/SET-USERS",users:e}},p=function(e){return{type:"app/users-reducer/SELECT-PAGE",currentPage:e}},A=function(e){return{type:"app/users-reducer/SET-FILTER",payload:{filter:e}}},O=function(e){return{type:"app/users-reducer/SET-TOTAL-COUNT",totalCount:e}},h=function(e){return{type:"app/users-reducer/TOGGLE_IS_FETCHING",isFetching:e}},g=function(e,t){return{type:"app/users-reducer/TOGGLE_IS_FOLLOW_FETCHING",isFetching:e,userId:t}},x=function(e,t){return{type:"app/users-reducer/TOGGLE_FOLLOWING",userId:e,userFollowed:t}},m=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{term:"",friend:null};return function(){var r=Object(c.a)(a.a.mark((function r(c){var s;return a.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return c(h(!0)),c(A(n)),r.next=4,u(e,t,n);case 4:s=r.sent,c(h(!1)),c(f(s.items)),c(O(s.totalCount));case 8:case"end":return r.stop()}}),r)})));return function(e){return r.apply(this,arguments)}}()},v=function(e,t,n){return function(){var r=Object(c.a)(a.a.mark((function r(c){var s;return a.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return c(p(e)),c(h(!0)),r.next=4,u(e,t,n);case 4:s=r.sent,c(h(!1)),c(f(s.items));case 7:case"end":return r.stop()}}),r)})));return function(e){return r.apply(this,arguments)}}()},w=function(e,t){return function(){var n=Object(c.a)(a.a.mark((function n(r,c){var s,i;return a.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(r(g(!0,e)),!1!==t){n.next=6;break}return n.next=4,d(e);case 4:n.sent.resultCode===o.a.success&&(s=c(),i=s.usersPage.users.filter((function(t){return t.id===e}))[0],r(x(e,!0)),r(j.b.addFollowingUser(i)));case 6:if(!0!==t){n.next=12;break}return n.next=10,l(e);case 10:n.sent.resultCode===o.a.success&&(r(x(e,!1)),r(j.b.removeUserFromFriendsItems(e)));case 12:r(g(!1,e));case 14:case"end":return n.stop()}}),n)})));return function(e,t){return n.apply(this,arguments)}}()};t.a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:b,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"app/users-reducer/TOGGLE_FOLLOWING":return Object(i.a)(Object(i.a)({},e),{},{users:e.users.map((function(e){return e.id===t.userId?Object(i.a)(Object(i.a)({},e),{},{followed:t.userFollowed}):e}))});case"app/users-reducer/SET-USERS":return Object(i.a)(Object(i.a)({},e),{},{users:t.users});case"app/users-reducer/SET-FILTER":return Object(i.a)(Object(i.a)({},e),{},{filter:t.payload.filter});case"app/users-reducer/SELECT-PAGE":return Object(i.a)(Object(i.a)({},e),{},{currentPage:t.currentPage});case"app/users-reducer/SET-TOTAL-COUNT":return Object(i.a)(Object(i.a)({},e),{},{totalUsersCount:t.totalCount});case"app/users-reducer/TOGGLE_IS_FETCHING":return Object(i.a)(Object(i.a)({},e),{},{isFetching:t.isFetching});case"app/users-reducer/TOGGLE_IS_FOLLOW_FETCHING":return Object(i.a)(Object(i.a)({},e),{},{followingInProgress:t.isFetching?[].concat(Object(s.a)(e.followingInProgress),[t.userId]):e.followingInProgress.filter((function(e){return e!==t.userId}))});default:return e}}}},[[151,1,2]]]);
//# sourceMappingURL=main.0ef93318.chunk.js.map