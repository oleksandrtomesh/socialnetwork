(this["webpackJsonpreact-1"]=this["webpackJsonpreact-1"]||[]).push([[3],{162:function(e,t,s){"use strict";function r(e,t){for(var s=0;s<t.length;s++){var r=t[s];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function n(e,t,s){return t&&r(e.prototype,t),s&&r(e,s),e}s.d(t,"a",(function(){return n}))},163:function(e,t,s){"use strict";var r=s(4),n=s(49),o=s(162),i=s(51),a=s(50),c=s(2),l=s(0),u=s.n(l),j=s(13),d=s(24),b=function(e){return{isAuth:e.authorization.isAuth}};t.a=function(e){var t=function(t){Object(i.a)(l,t);var s=Object(a.a)(l);function l(){return Object(n.a)(this,l),s.apply(this,arguments)}return Object(o.a)(l,[{key:"render",value:function(){return this.props.isAuth?Object(c.jsx)(e,Object(r.a)({},this.props)):Object(c.jsx)(j.a,{to:"/login"})}}]),l}(u.a.Component);return Object(d.b)(b)(t)}},165:function(e,t,s){e.exports={info:"Info_info__2qP2I",editModeForm:"Info_editModeForm__1e2fL",job:"Info_job__1li1e",error:"Info_error__2N64K",editMode:"Info_editMode__32hPv",lookingForAJob:"Info_lookingForAJob__2YK0L"}},171:function(e,t,s){e.exports={profileStatus:"ProfileStatus_profileStatus__1aoaG"}},172:function(e,t,s){e.exports={Textarea:"AddNewPost_Textarea__waG-0",inputField:"AddNewPost_inputField__2iN8c"}},173:function(e,t,s){e.exports={MyPosts:"MyPosts_MyPosts__39yWW",addNewPost:"MyPosts_addNewPost__2T3iO",post:"MyPosts_post__2TevQ"}},174:function(e,t,s){e.exports={item:"Post_item__1oqx-",postInfo:"Post_postInfo__3ZaLI",name:"Post_name__2LXem",message:"Post_message__2SCuw"}},175:function(e,t,s){e.exports={content:"Profile_content__1A_Ne",profile_info:"Profile_profile_info__3sXB9",profile_photo:"Profile_profile_photo__3d9IN",uploadButton:"Profile_uploadButton__xKTjd"}},184:function(e,t,s){"use strict";s.r(t);var r=s(4),n=s(49),o=s(162),i=s(51),a=s(50),c=s(2),l=s(0),u=s.n(l),j=s(24),d=s(13),b=s(163),f=s(53),h=s(59);var p=s(71);function O(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e)){var s=[],r=!0,n=!1,o=void 0;try{for(var i,a=e[Symbol.iterator]();!(r=(i=a.next()).done)&&(s.push(i.value),!t||s.length!==t);r=!0);}catch(c){n=!0,o=c}finally{try{r||null==a.return||a.return()}finally{if(n)throw o}}return s}}(e,t)||Object(p.a)(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var x=s(165),m=s.n(x),v=s(171),P=s.n(v),_=s(129),g=function(e){var t=O(Object(l.useState)(!1),2),s=t[0],r=t[1],n=O(Object(l.useState)(e.userStatus),2),o=n[0],i=n[1];Object(l.useEffect)((function(){i(e.userStatus)}),[e.userStatus]);return Object(c.jsx)("div",{className:P.a.profileStatus,children:s?Object(c.jsx)("div",{children:Object(c.jsx)(_.a,{autoFocus:!0,onChange:function(e){i(e.currentTarget.value)},onBlur:function(){r(!1),e.updateStatus(o)},type:"text",value:o,label:"Status",variant:"outlined"})}):Object(c.jsxs)("div",{className:P.a.status,children:[Object(c.jsxs)("span",{onDoubleClick:function(){r(!0)},children:[" ",Object(c.jsx)("b",{children:"Status: "}),o||"No Status"]}),Object(c.jsx)("div",{children:Object(c.jsx)("i",{children:"DoubleClick to change"})})]})})},N=s(12),y=s.n(N),S=s(54),w=s(20),k=s(38),I=s(36),M=s(45),A=s(32),F=function(e){var t=function(){var t=Object(w.a)(y.a.mark((function t(s){var r;return y.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.saveProfileInfo(s);case 2:if(void 0===(r=t.sent)){t.next=7;break}return t.abrupt("return",Object(S.a)({},I.a,r));case 7:e.setEditMode(!1);case 8:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();return Object(c.jsxs)("div",{className:m.a.editMode,children:[Object(c.jsx)("h4",{children:"Edit Mode"}),Object(c.jsx)(k.b,{onSubmit:t,initialValues:e.userProfile,render:function(t){var s=t.handleSubmit,r=t.submitError;return Object(c.jsxs)("form",{onSubmit:s,className:m.a.editModeForm,children:[Object(c.jsx)("div",{children:Object(c.jsx)(k.a,{name:"fullName",component:M.b,label:"Full Name"})}),Object(c.jsxs)("div",{children:[Object(c.jsx)(k.a,{name:"aboutMe",component:M.b,label:"About Me"}),r&&Object(c.jsx)("div",{className:m.a.error,children:Object(A.a)(r,"AboutMe")})]}),Object(c.jsxs)("div",{className:m.a.lookingForAJob,children:[Object(c.jsx)("b",{children:"Looking for job: "}),Object(c.jsx)(k.a,{name:"lookingForAJob",component:"input",type:"checkbox"})]}),Object(c.jsxs)("div",{children:[Object(c.jsx)(k.a,{name:"lookingForAJobDescription",label:"My professional skill",component:M.b}),r&&Object(c.jsx)("div",{className:m.a.error,children:Object(A.a)(r,"LookingForAJobDescription")})]}),Object(c.jsxs)("div",{children:[Object(c.jsx)("h5",{children:"Contacts:"})," ",Object.keys(e.userProfile.contacts).map((function(e){return Object(c.jsxs)("div",{children:[Object(c.jsx)(k.a,{name:"contacts."+e,component:M.b,label:e}),r&&Object(c.jsx)("div",{className:m.a.error,children:Object(A.a)(r,e)})]},e)}))]}),Object(c.jsx)(M.a,{children:"Save"})]})}})]})},T=s(39),C=s(90),D=function(e){var t=Object(T.a)();return Object(c.jsxs)("div",{className:m.a.info,children:[Object(c.jsx)("h1",{children:e.userProfile.fullName}),Object(c.jsxs)("div",{children:[e.userProfile.aboutMe&&Object(c.jsx)("b",{children:"About me:"})," ",e.userProfile.aboutMe]}),Object(c.jsxs)("div",{children:[Object(c.jsx)("b",{children:"Looking for job: "}),e.userProfile.lookingForAJob?"Yes":"No"]}),Object(c.jsx)("div",{children:e.userProfile.lookingForAJobDescription&&Object(c.jsxs)("span",{children:[Object(c.jsx)("b",{children:"My professional skill:"})," ",e.userProfile.lookingForAJobDescription]})}),Object(c.jsxs)("div",{children:[Object(c.jsx)("b",{children:"Contacts"}),": ",Object.keys(e.userProfile.contacts).map((function(t){return Object(c.jsx)(J,{contactTitle:t,contactValue:e.userProfile.contacts[t]},t)}))]}),e.isOwner&&Object(c.jsx)(C.a,{onClick:function(){e.setEditMode(!0)},className:t.LoginButton,variant:"contained",type:"submit",children:"Edit Mode"})]})},J=function(e){var t=e.contactTitle,s=e.contactValue;return Object(c.jsx)("div",{children:s&&Object(c.jsxs)("span",{children:[Object(c.jsxs)("b",{children:[t,":"]}),Object(c.jsx)("a",{href:s,target:"_blank",rel:"noreferrer",children:s}),"  "]})})},U=function(e){var t=O(Object(l.useState)(!1),2),s=t[0],n=t[1];return Object(c.jsxs)("div",{children:[Object(c.jsx)(g,{userStatus:e.userStatus,updateStatus:e.updateStatus}),s?Object(c.jsx)(F,Object(r.a)({saveProfileInfo:e.saveProfileInfo,setEditMode:n},e)):Object(c.jsx)(D,Object(r.a)({setEditMode:n},e))]})},E=s(172),L=s.n(E),z=function(e){return Object(c.jsx)("div",{children:Object(c.jsx)(k.b,{onSubmit:function(t){e.addNewPost(t.newPostText),t.newPostText=""},render:function(e){var t=e.handleSubmit;return Object(c.jsxs)("form",{onSubmit:t,className:L.a.Textarea,children:[Object(c.jsx)("div",{children:Object(c.jsx)(k.a,{className:L.a.inputField,name:"newPostText",component:M.b,label:"Something new?",validate:Object(A.c)(150)})}),Object(c.jsx)("div",{children:Object(c.jsx)(M.a,{type:"submit",children:"Post"})})]})}})})},B=s(173),K=s.n(B),V=s(174),q=s.n(V),G=function(e){return Object(c.jsx)("div",{children:Object(c.jsxs)("div",{className:q.a.item,children:[Object(c.jsxs)("div",{className:q.a.postInfo,children:[Object(c.jsx)("img",{src:"https://ps.w.org/wp-user-avatar/assets/icon-256x256.png?rev=1755722",alt:"postAvatar"}),Object(c.jsxs)("div",{className:q.a.name,children:[Object(c.jsx)("div",{children:"Oleksandr Tomesh"}),Object(c.jsx)("div",{children:"04/12/2020"})]})]}),Object(c.jsx)("div",{className:q.a.message,children:e.message}),Object(c.jsxs)("div",{className:q.a.like,children:["Like ",e.likeCounter]})]})})},W=function(e){return!0===e.isOwner?Object(c.jsxs)("div",{className:K.a.MyPosts,children:[Object(c.jsx)("div",{className:K.a.addNewPost,children:Object(c.jsx)(z,{addNewPost:e.addNewPost})}),Object(c.jsx)("div",{className:K.a.posts,children:e.postData.map((function(e){return Object(c.jsx)(G,{message:e.message,likeCounter:e.likeCounter},e.message)}))})]}):Object(c.jsx)("div",{className:K.a.post,children:"This user does not have posts yet"})},X=Object(j.b)((function(e){return{postData:e.profilePage.postData,newPostText:e.profilePage.newPostText,users:e.usersPage.users,authorizedUserId:e.authorization.data}}),{addNewPost:f.a})(W),Y=s(175),H=s.n(Y),Q=s(67),Z=function(e){return e.userProfile?Object(c.jsxs)("div",{className:H.a.content,children:[Object(c.jsxs)("div",{className:H.a.profile_info,children:[Object(c.jsxs)("div",{className:H.a.profile_photo,children:[e.isProfileFetching?Object(c.jsx)(h.a,{}):Object(c.jsx)("img",{src:null!==e.userProfile.photos.large?e.userProfile.photos.large:Q.a,alt:"profile"}),Object(c.jsx)("div",{className:H.a.uploadButton,children:e.isOwner&&Object(c.jsx)(M.c,{onChangeHandler:function(t){t.target.files.length&&e.saveUserPhoto(t.target.files[0])},buttonAssign:"Upload Profile Photo"})})]}),Object(c.jsx)(U,{userProfile:e.userProfile,userStatus:e.userStatus,updateStatus:e.updateStatus,saveProfileInfo:e.saveProfileInfo,isOwner:e.isOwner})]}),Object(c.jsx)(X,{isOwner:e.isOwner})]}):Object(c.jsx)(h.a,{})},R=s(37),$=function(e){Object(i.a)(s,e);var t=Object(a.a)(s);function s(){var e;Object(n.a)(this,s);for(var o=arguments.length,i=new Array(o),a=0;a<o;a++)i[a]=arguments[a];return(e=t.call.apply(t,[this].concat(i))).render=function(){return Object(c.jsx)("div",{children:e.props.isProfileFetching?Object(c.jsx)(h.a,{}):Object(c.jsx)(Z,Object(r.a)({isOwner:!e.props.match.params.userId},e.props))})},e}return Object(o.a)(s,[{key:"refreshProfile",value:function(){var e=this.props.match.params.userId;e||(e=this.props.authorizedUserId.id),this.props.setUserProfile(e),this.props.setStatus(e)}},{key:"componentDidMount",value:function(){this.refreshProfile()}},{key:"componentDidUpdate",value:function(e){this.props.match.params.userId!==e.match.params.userId&&this.refreshProfile()}}]),s}(u.a.Component);t.default=Object(R.d)(Object(j.b)((function(e){return{userProfile:e.profilePage.userProfile,authUserId:e.authorization,userStatus:e.profilePage.userStatus,authorizedUserId:e.authorization.data,isProfileFetching:e.profilePage.isFetching}}),{setUserProfile:f.g,setStatus:f.f,updateStatus:f.h,saveUserPhoto:f.e,saveProfileInfo:f.d,isFetching:f.c}),d.g,b.a)($)}}]);
//# sourceMappingURL=3.91c5b470.chunk.js.map