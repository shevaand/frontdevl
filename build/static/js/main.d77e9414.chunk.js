(this["webpackJsonpreact-firebase-authentication"]=this["webpackJsonpreact-firebase-authentication"]||[]).push([[0],{13:function(e,t,n){e.exports={nav:"navigate_nav__2TJda",item:"navigate_item__1zQqa",activeLink:"navigate_activeLink__GwDD3",signin:"navigate_signin__3AsEh",signitem:"navigate_signitem__2sz_z"}},17:function(e,t,n){},20:function(e,t,n){e.exports={previewComponent:"style_previewComponent__1otxd",fileInput:"style_fileInput__27gtu",imgPreview:"style_imgPreview__289oD"}},27:function(e,t,n){e.exports={group:"style_group__2rPoO",input:"style_input__2tek4",label:"style_label__ZaTtA",bar:"style_bar__lWHvN"}},33:function(e,t,n){e.exports={content:"app_content__vh4-3",wrappContent:"app_wrappContent__1FevO"}},48:function(e,t,n){e.exports={form:"style_form__3v0TP"}},49:function(e,t,n){e.exports={signinforms:"style_signinforms__ttvd1"}},51:function(e,t,n){e.exports=n(99)},84:function(e,t,n){},99:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),s=n(29),o=n.n(s),i=n(14),u=n(41),l=n(24),c=n(7),m={authUser:null},p=function(e,t){return Object(c.a)({},e,{authUser:t.authUser})};var d=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:m,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"AUTH_USER_SET":return p(e,t);default:return e}},h=n(12),f={users:null},g=function(e,t){return Object(c.a)({},e,{users:t.users})},b=function(e,t){return Object(c.a)({},e,{users:Object(c.a)({},e.users,Object(h.a)({},t.uid,t.user))})};var E=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:f,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"USERS_SET":return g(e,t);case"USER_SET":return b(e,t);default:return e}},v={messages:null,limit:5},S=function(e,t){return Object(c.a)({},e,{messages:t.messages})},O=function(e,t){return Object(c.a)({},e,{limit:t.limit})};var j=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:v,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"MESSAGES_SET":return S(e,t);case"MESSAGES_LIMIT_SET":return O(e,t);default:return e}},y={posts:null,limit:5},C=function(e,t){return Object(c.a)({},e,{posts:t.posts})},w=function(e,t){return Object(c.a)({},e,{limit:t.limit})};var k=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:y,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"POSTS_SET":return C(e,t);case"POSTS_LIMIT_SET":return w(e,t);default:return e}},M=Object(l.b)({sessionState:d,userState:E,messageState:j,postState:k}),P=Object(l.c)(M);n(84),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var I=n(10),T=n(19),x=n(33),U=n.n(x),_=r.a.createContext(null),A=n(2),L=n(3),D=n(5),N=n(4),R=n(6),W=r.a.createContext(null),F=function(e){return function(t){return r.a.createElement(W.Consumer,null,(function(n){return r.a.createElement(e,Object.assign({},t,{firebase:n}))}))}},V=W,H=n(21),G=n.n(H),z=(n(90),n(92),{apiKey:"AIzaSyA6-SYxARHb6r37jMDOQPCHw89K2A2rxRg",authDomain:"testing-205e2.firebaseapp.com",databaseURL:"https://testing-205e2.firebaseio.com/",projectId:"testing-205e2",storageBucket:"testing-205e2.appspot.com",messagingSenderId:"756063168153"}),B=function e(){var t=this;Object(A.a)(this,e),this.doCreateUserWithEmailAndPassword=function(e,n){return t.auth.createUserWithEmailAndPassword(e,n)},this.doSignInWithEmailAndPassword=function(e,n){return t.auth.signInWithEmailAndPassword(e,n)},this.doSignInWithGoogle=function(){return t.auth.signInWithPopup(t.googleProvider)},this.doSignInWithFacebook=function(){return t.auth.signInWithPopup(t.facebookProvider)},this.doSignOut=function(){return t.auth.signOut()},this.doPasswordReset=function(e){return t.auth.sendPasswordResetEmail(e)},this.doSendEmailVerification=function(){return t.auth.currentUser.sendEmailVerification({url:"https://testing-205e2.firebaseapp.com/home"})},this.doPasswordUpdate=function(e){return t.auth.currentUser.updatePassword(e)},this.onAuthUserListener=function(e,n){return t.auth.onAuthStateChanged((function(a){a?t.user(a.uid).once("value").then((function(t){var n=t.val();n.roles||(n.roles=[]),a=Object(c.a)({uid:a.uid,email:a.email,emailVerified:a.emailVerified,providerData:a.providerData},n),e(a)})):n()}))},this.user=function(e){return t.db.ref("users/".concat(e))},this.users=function(){return t.db.ref("users")},this.message=function(e){return t.db.ref("messages/".concat(e))},this.messages=function(){return t.db.ref("messages")},this.post=function(e){return t.db.ref("posts/".concat(e))},this.posts=function(){return t.db.ref("posts")},G.a.initializeApp(z),this.serverValue=G.a.database.ServerValue,this.emailAuthProvider=G.a.auth.EmailAuthProvider,this.auth=G.a.auth(),this.db=G.a.database(),this.googleProvider=new G.a.auth.GoogleAuthProvider,this.facebookProvider=new G.a.auth.FacebookAuthProvider},J=function(e){var t=function(t){function n(e){var t;return Object(A.a)(this,n),(t=Object(D.a)(this,Object(N.a)(n).call(this,e))).state={authUser:JSON.parse(localStorage.getItem("authUser"))},t}return Object(R.a)(n,t),Object(L.a)(n,[{key:"componentDidMount",value:function(){var e=this;this.listener=this.props.firebase.onAuthUserListener((function(t){localStorage.setItem("authUser",JSON.stringify(t)),e.setState({authUser:t})}),(function(){localStorage.removeItem("authUser"),e.setState({authUser:null})}))}},{key:"componentWillUnmount",value:function(){this.listener()}},{key:"render",value:function(){return r.a.createElement(_.Provider,{value:this.state.authUser},r.a.createElement(e,this.props))}}]),n}(r.a.Component);return F(t)},q=n(8),K=function(e){return function(t){var n=function(n){function a(){return Object(A.a)(this,a),Object(D.a)(this,Object(N.a)(a).apply(this,arguments))}return Object(R.a)(a,n),Object(L.a)(a,[{key:"componentDidMount",value:function(){var t=this;this.listener=this.props.firebase.onAuthUserListener((function(n){e(n)||t.props.history.push("/signin")}),(function(){return t.props.history.push("/signin")}))}},{key:"componentWillUnmount",value:function(){this.listener()}},{key:"render",value:function(){var n=this;return r.a.createElement(_.Consumer,null,(function(a){return e(a)?r.a.createElement(t,n.props):null}))}}]),a}(r.a.Component);return Object(q.a)(T.f,F)(n)}},Q=function(e){var t=function(t){function n(e){var t;return Object(A.a)(this,n),(t=Object(D.a)(this,Object(N.a)(n).call(this,e))).onSendEmailVerification=function(){t.props.firebase.doSendEmailVerification("hello").then((function(){return t.setState({isSent:!0})}))},t.state={isSent:!1},t}return Object(R.a)(n,t),Object(L.a)(n,[{key:"render",value:function(){var t=this;return r.a.createElement(_.Consumer,null,(function(n){return function(e){return e&&!e.emailVerified&&e.providerData.map((function(e){return e.providerId})).includes("password")}(n)?r.a.createElement("div",null,t.state.isSent?r.a.createElement("p",null,"E-Mail confirmation sent: Check you E-Mails (Spam folder included) for a confirmation E-Mail. Refresh this page once you confirmed your E-Mail."):r.a.createElement("p",null,"Verify your E-Mail: Check you E-Mails (Spam folder included) for a confirmation E-Mail or send another confirmation E-Mail."),r.a.createElement("button",{type:"button",onClick:t.onSendEmailVerification,disabled:t.state.isSent},"Send confirmation E-Mail")):r.a.createElement(e,t.props)}))}}]),n}(r.a.Component);return F(t)},Y=F((function(e){var t=e.firebase;return r.a.createElement("button",{type:"button",onClick:t.doSignOut},r.a.createElement(I.c,{to:"/signin"},"Sign Out"))})),Z=n(13),$=n.n(Z),X=function(e){var t=e.authUser;return r.a.createElement("nav",{className:$.a.nav},r.a.createElement("div",{className:"".concat($.a.item," ").concat($.a.active)},r.a.createElement(I.c,{to:"/post",activeClassName:$.a.activeLink},"Posts")),r.a.createElement("div",{className:$.a.item},r.a.createElement(I.c,{to:"/message",activeClassName:$.a.activeLink},"Messages")),r.a.createElement("div",{className:$.a.item},r.a.createElement(I.c,{to:"/account",activeClassName:$.a.activeLink},"Account")),t.roles.includes("ADMIN")&&r.a.createElement("div",{className:$.a.item},r.a.createElement(I.c,{to:"/admin",activeClassName:$.a.activeLink},"Admin")),r.a.createElement("div",{className:$.a.item},r.a.createElement(Y,null)))},ee=function(){return r.a.createElement("nav",{className:$.a.signin},r.a.createElement("div",{className:$.a.signitem},r.a.createElement(I.c,{to:"/signin",activeClassName:$.a.activeLink},"Sign In")))},te=function(){return r.a.createElement(_.Consumer,null,(function(e){return e?r.a.createElement(X,{authUser:e}):r.a.createElement(ee,null)}))},ne=n(20),ae=n.n(ne),re=function(e){function t(e){var n;return Object(A.a)(this,t),(n=Object(D.a)(this,Object(N.a)(t).call(this,e))).onToggleEditMode=function(){n.setState((function(e){return{editMode:!e.editMode,editText:n.props.post.text,editHead:n.props.post.head,editImages:n.props.post.images}}))},n.onChangeEditImage=function(e){e.preventDefault();var t=new FileReader,a=e.target.files[0];t.onload=function(){n.setState({file:a,editImages:t.result})},t.readAsDataURL(a)},n.onChangeEditHead=function(e){n.setState({editHead:e.target.value})},n.onChangeEditText=function(e){n.setState({editText:e.target.value})},n.onSaveEditPost=function(){n.props.onEditPost(n.props.post,n.state.editHead,n.state.editImages,n.state.editText),n.setState({editMode:!1})},n.state={editMode:!1,editText:n.props.post.text,editHead:n.props.post.head,editImages:n.props.post.images},n}return Object(R.a)(t,e),Object(L.a)(t,[{key:"render",value:function(){var e=this.props,t=e.post,n=e.onRemovePost,a=this.state,s=a.editMode,o=a.editText,i=a.editHead,u=(a.images,a.editImages),l=null;return l=u?r.a.createElement("img",{src:u,value:u,onChange:this.onChangeEditImage}):r.a.createElement("img",{src:t.images}),r.a.createElement("li",null,s?r.a.createElement(r.a.Fragment,null,r.a.createElement("input",{type:"text",value:i,onChange:this.onChangeEditHead}),r.a.createElement("div",{className:ae.a.previewComponent},r.a.createElement("input",{className:ae.a.fileInput,type:"file",onChange:this.onChangeEditImage}),r.a.createElement("div",{className:ae.a.imgPreview},l)),r.a.createElement("input",{type:"text",value:o,onChange:this.onChangeEditText})):r.a.createElement("span",null,r.a.createElement("strong",null,t.user.username||t.user.userId)," ",r.a.createElement("p",null,t.head),r.a.createElement("img",{src:t.images}),r.a.createElement("p",null,t.text),t.editedAt&&r.a.createElement("span",null,"(Edited)")),s?r.a.createElement("span",null,r.a.createElement("button",{onClick:this.onSaveEditPost},"Save"),r.a.createElement("button",{onClick:this.onToggleEditMode},"Reset")):r.a.createElement("button",{onClick:this.onToggleEditMode},"Edit"),!s&&r.a.createElement("button",{type:"button",onClick:function(){return n(t.uid)}},"Delete"))}}]),t}(a.Component),se=function(e){var t=e.posts,n=e.onEditPost,a=e.onRemovePost;return r.a.createElement("ul",null,t.reverse().map((function(e){return r.a.createElement(re,{key:e.uid,post:e,onEditPost:n,onRemovePost:a})})))},oe=function(e){function t(e){var n;return Object(A.a)(this,t),(n=Object(D.a)(this,Object(N.a)(t).call(this,e))).onListenForPosts=function(){n.props.firebase.posts().orderByChild("createdAt").limitToLast(n.props.limit).on("value",(function(e){n.props.onSetPosts(e.val()),n.setState({loading:!1})}))},n.onChangeText=function(e){n.setState({text:e.target.value})},n.onChangeImage=function(e){e.preventDefault();var t=new FileReader,a=e.target.files[0];t.onload=function(){n.setState({file:a,images:t.result})},t.readAsDataURL(a)},n.onChangeHead=function(e){n.setState({head:e.target.value})},n.onCreatePost=function(e,t){n.props.firebase.posts().push({head:n.state.head,images:n.state.images,text:n.state.text,userId:t.uid,createdAt:n.props.firebase.serverValue.TIMESTAMP}),n.setState({head:"",images:"",text:""}),e.preventDefault()},n.onEditPost=function(e,t,a,r){n.props.firebase.post(e.uid).set(Object(c.a)({},e,{head:t,images:a,text:r,editedAt:n.props.firebase.serverValue.TIMESTAMP}))},n.onRemovePost=function(e){n.props.firebase.post(e).remove()},n.onNextPage=function(){n.props.onSetPostsLimit(n.props.limit+5)},n.state={head:"",text:"",file:"",images:"",loading:!1},n}return Object(R.a)(t,e),Object(L.a)(t,[{key:"componentDidMount",value:function(){this.props.posts.length||this.setState({loading:!0}),this.onListenForPosts()}},{key:"componentDidUpdate",value:function(e){e.limit!==this.props.limit&&this.onListenForPosts()}},{key:"componentWillUnmount",value:function(){this.props.firebase.posts().off()}},{key:"render",value:function(){var e=this,t=this.props,n=t.users,a=t.posts,s=this.state,o=s.head,i=s.text,u=s.loading,l=s.images,m=s.image,p=null;return p=l?r.a.createElement("img",{src:l,value:m,onChange:this.onChangeImage}):r.a.createElement("div",{className:"previewText"},"Please select an Image for Preview"),r.a.createElement(_.Consumer,null,(function(t){return r.a.createElement("div",null,!a&&r.a.createElement("div",null,"There are no posts ..."),r.a.createElement("form",{onSubmit:function(n){return e.onCreatePost(n,t)}},r.a.createElement("input",{type:"text",value:o,onChange:e.onChangeHead}),r.a.createElement("div",{className:ae.a.previewComponent},r.a.createElement("input",{className:ae.a.fileInput,type:"file",onChange:e.onChangeImage}),r.a.createElement("div",{className:ae.a.imgPreview},p)),r.a.createElement("input",{type:"text",value:i,onChange:e.onChangeText}),r.a.createElement("button",{type:"submit"},"Send")),u&&r.a.createElement("div",null,"Loading ..."),a&&r.a.createElement(se,{posts:a.map((function(e){return Object(c.a)({},e,{user:n?n[e.userId]:{userId:e.userId}})})),onEditPost:e.onEditPost,onRemovePost:e.onRemovePost}),!u&&a&&r.a.createElement("button",{type:"button",onClick:e.onNextPage},"More"))}))}}]),t}(a.Component),ie=Object(q.a)(F,Object(i.b)((function(e){return{posts:Object.keys(e.postState.posts||{}).map((function(t){return Object(c.a)({},e.postState.posts[t],{uid:t})})),limit:e.postState.limit}}),(function(e){return{onSetPosts:function(t){return e({type:"POSTS_SET",posts:t})},onSetPostsLimit:function(t){return e({type:"POSTS_LIMIT_SET",limit:t})}}})))(oe),ue=function(e){function t(){return Object(A.a)(this,t),Object(D.a)(this,Object(N.a)(t).apply(this,arguments))}return Object(R.a)(t,e),Object(L.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.props.firebase.users().on("value",(function(t){e.props.onSetUsers(t.val())}))}},{key:"componentWillUnmount",value:function(){this.props.firebase.users().off()}},{key:"render",value:function(){var e=this.props.users;return r.a.createElement("div",null,r.a.createElement("h1",null,"Post Page"),r.a.createElement("p",null,"The Start Post"),r.a.createElement(ie,{users:e}))}}]),t}(a.Component),le=Object(q.a)(F,Object(i.b)((function(e){return{users:e.userState.users}}),(function(e){return{onSetUsers:function(t){return e({type:"USERS_SET",users:t})}}})),Q,K((function(e){return!!e})))(ue),ce=n(27),me=n.n(ce),pe=function(e){function t(){return Object(A.a)(this,t),Object(D.a)(this,Object(N.a)(t).apply(this,arguments))}return Object(R.a)(t,e),Object(L.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:me.a.group},r.a.createElement("input",{className:me.a.input,name:this.props.name,value:this.props.value,checked:this.props.checked,onChange:this.props.onChange,type:this.props.type,required:!0}),r.a.createElement("span",{className:me.a.bar}),r.a.createElement("label",{className:me.a.label},this.props.labelname))}}]),t}(a.Component),de=n(17),he=n.n(de),fe={username:"",email:"",passwordOne:"",passwordTwo:"",isAdmin:!1,error:null},ge=function(e){function t(e){var n;return Object(A.a)(this,t),(n=Object(D.a)(this,Object(N.a)(t).call(this,e))).onSubmit=function(e){var t=n.state,a=t.username,r=t.email,s=t.passwordOne,o=t.isAdmin,i=[];o&&i.push("ADMIN"),n.props.firebase.doCreateUserWithEmailAndPassword(r,s).then((function(e){return n.props.firebase.user(e.user.uid).set({username:a,email:r,roles:i})})).then((function(){return n.props.firebase.doSendEmailVerification()})).then((function(){n.setState(Object(c.a)({},fe)),n.props.history.push("/message")})).catch((function(e){"auth/email-already-in-use"===e.code&&(e.message="\n  An account with this E-Mail address already exists.\n  Try to login with this account instead. If you think the\n  account is already used from one of the social logins, try\n  to sign in with one of them. Afterward, associate your accounts\n  on your personal account page.\n"),n.setState({error:e})})),e.preventDefault()},n.onChange=function(e){n.setState(Object(h.a)({},e.target.name,e.target.value))},n.onChangeCheckbox=function(e){n.setState(Object(h.a)({},e.target.name,e.target.checked))},n.state=Object(c.a)({},fe),n}return Object(R.a)(t,e),Object(L.a)(t,[{key:"render",value:function(){var e=this.state,t=e.username,n=e.email,a=e.passwordOne,s=e.passwordTwo,o=e.isAdmin,i=e.error,u=a!==s||""===a||""===n||""===t;return r.a.createElement("form",{onSubmit:this.onSubmit},r.a.createElement(pe,{divclass:he.a.group,name:"username",value:t,onChange:this.onChange,type:"text",spanclass:he.a.bar,labelname:"Full Name"}),r.a.createElement(pe,{divclass:he.a.group,name:"email",value:n,onChange:this.onChange,type:"text",spanclass:he.a.bar,labelname:"Email Address"}),r.a.createElement(pe,{divclass:he.a.group,name:"passwordOne",value:a,onChange:this.onChange,type:"password",spanclass:he.a.bar,labelname:"Password"}),r.a.createElement(pe,{divclass:he.a.group,name:"passwordTwo",value:s,onChange:this.onChange,type:"password",spanclass:he.a.bar,labelname:"Confirm Password"}),r.a.createElement("div",null,r.a.createElement("label",{className:he.a.admincheck},"Admin:",r.a.createElement("input",{name:"isAdmin",type:"checkbox",checked:o,onChange:this.onChangeCheckbox}))),r.a.createElement("button",{disabled:u,type:"submit"},"Sign Up"),i&&r.a.createElement("p",null,i.message))}}]),t}(a.Component),be=function(){return r.a.createElement("p",null,"Don't have an account? ",r.a.createElement(I.b,{to:"/signup"},"Sign Up"))},Ee=Object(T.f)(F(ge)),ve=function(){return r.a.createElement("div",null,r.a.createElement("h1",null,"SignUp"),r.a.createElement(Ee,null))},Se=n(48),Oe=n.n(Se),je={email:"",error:null},ye=function(e){function t(e){var n;return Object(A.a)(this,t),(n=Object(D.a)(this,Object(N.a)(t).call(this,e))).onSubmit=function(e){var t=n.state.email;n.props.firebase.doPasswordReset(t).then((function(){n.setState(Object(c.a)({},je))})).catch((function(e){n.setState({error:e})})),e.preventDefault()},n.onChange=function(e){n.setState(Object(h.a)({},e.target.name,e.target.value))},n.state=Object(c.a)({},je),n}return Object(R.a)(t,e),Object(L.a)(t,[{key:"render",value:function(){var e=this.state,t=e.email,n=e.error,a=""===t;return r.a.createElement("form",{onSubmit:this.onSubmit,className:Oe.a.form},r.a.createElement(pe,{name:"email",value:this.state.email,onChange:this.onChange,type:"text",labelname:"Email Address"}),r.a.createElement("button",{disabled:a,type:"submit"},"Restore password"),n&&r.a.createElement("p",null,n.message))}}]),t}(a.Component),Ce=function(){return r.a.createElement("p",null,r.a.createElement(I.b,{to:"/pw-forget"},"Forgot Password?"))},we=function(){return r.a.createElement("div",null,r.a.createElement("h1",null,"PasswordForget"),r.a.createElement(ke,null))},ke=F(ye),Me=n(49),Pe=n.n(Me),Ie={email:"",password:"",error:null},Te="\n  An account with an E-Mail address to\n  this social account already exists. Try to login from\n  this account instead and associate your social accounts on\n  your personal account page.\n",xe=function(e){function t(e){var n;return Object(A.a)(this,t),(n=Object(D.a)(this,Object(N.a)(t).call(this,e))).onSubmit=function(e){var t=n.state,a=t.email,r=t.password;n.props.firebase.doSignInWithEmailAndPassword(a,r).then((function(){n.setState(Object(c.a)({},Ie)),n.props.history.push("/message")})).catch((function(e){n.setState({error:e})})),e.preventDefault()},n.onChange=function(e){n.setState(Object(h.a)({},e.target.name,e.target.value))},n.state=Object(c.a)({},Ie),n}return Object(R.a)(t,e),Object(L.a)(t,[{key:"render",value:function(){var e=this.state,t=e.email,n=e.password,a=e.error,s=""===n||""===t;return r.a.createElement("form",{onSubmit:this.onSubmit,className:Pe.a.signinforms},r.a.createElement(pe,{name:"email",value:t,onChange:this.onChange,type:"text",labelname:"Email Address"}),r.a.createElement(pe,{name:"password",value:n,onChange:this.onChange,type:"password",labelname:"Password"}),r.a.createElement("button",{disabled:s,type:"submit"},"Sign In"),a&&r.a.createElement("p",null,a.message))}}]),t}(a.Component),Ue=function(e){function t(e){var n;return Object(A.a)(this,t),(n=Object(D.a)(this,Object(N.a)(t).call(this,e))).onSubmit=function(e){n.props.firebase.doSignInWithGoogle().then((function(e){return n.props.firebase.user(e.user.uid).set({username:e.user.displayName,email:e.user.email,roles:{}})})).then((function(){n.setState({error:null}),n.props.history.push("/message")})).catch((function(e){"auth/account-exists-with-different-credential"===e.code&&(e.message=Te),n.setState({error:e})})),e.preventDefault()},n.state={error:null},n}return Object(R.a)(t,e),Object(L.a)(t,[{key:"render",value:function(){var e=this.state.error;return r.a.createElement("form",{onSubmit:this.onSubmit},r.a.createElement("button",{type:"submit"},"Sign In with Google"),e&&r.a.createElement("p",null,e.message))}}]),t}(a.Component),_e=function(e){function t(e){var n;return Object(A.a)(this,t),(n=Object(D.a)(this,Object(N.a)(t).call(this,e))).onSubmit=function(e){n.props.firebase.doSignInWithFacebook().then((function(e){return n.props.firebase.user(e.user.uid).set({username:e.additionalUserInfo.profile.name,email:e.additionalUserInfo.profile.email,roles:{}})})).then((function(){n.setState({error:null}),n.props.history.push("/message")})).catch((function(e){"auth/account-exists-with-different-credential"===e.code&&(e.message=Te),n.setState({error:e})})),e.preventDefault()},n.state={error:null},n}return Object(R.a)(t,e),Object(L.a)(t,[{key:"render",value:function(){var e=this.state.error;return r.a.createElement("form",{onSubmit:this.onSubmit},r.a.createElement("button",{type:"submit"},"Sign In with Facebook"),e&&r.a.createElement("p",null,e.message))}}]),t}(a.Component),Ae=Object(q.a)(T.f,F)(xe),Le=Object(q.a)(T.f,F)(Ue),De=Object(q.a)(T.f,F)(_e),Ne=function(){return r.a.createElement("div",null,r.a.createElement("h1",null,"SignIn"),r.a.createElement(Ae,null),r.a.createElement(Le,null),r.a.createElement(De,null),r.a.createElement(Ce,null),r.a.createElement(be,null))},Re=function(e){function t(e){var n;return Object(A.a)(this,t),(n=Object(D.a)(this,Object(N.a)(t).call(this,e))).onToggleEditMode=function(){n.setState((function(e){return{editMode:!e.editMode,editText:n.props.message.text}}))},n.onChangeEditText=function(e){n.setState({editText:e.target.value})},n.onSaveEditText=function(){n.props.onEditMessage(n.props.message,n.state.editText),n.setState({editMode:!1})},n.state={editMode:!1,editText:n.props.message.text},n}return Object(R.a)(t,e),Object(L.a)(t,[{key:"render",value:function(){var e=this.props,t=e.message,n=e.onRemoveMessage,a=this.state,s=a.editMode,o=a.editText;return r.a.createElement("li",null,s?r.a.createElement("input",{type:"text",value:o,onChange:this.onChangeEditText}):r.a.createElement("span",null,r.a.createElement("strong",null,t.user.username||t.user.userId)," ",t.text," ",t.editedAt&&r.a.createElement("span",null,"(Edited)")),s?r.a.createElement("span",null,r.a.createElement("button",{onClick:this.onSaveEditText},"Save"),r.a.createElement("button",{onClick:this.onToggleEditMode},"Reset")):r.a.createElement("button",{onClick:this.onToggleEditMode},"Edit"),!s&&r.a.createElement("button",{type:"button",onClick:function(){return n(t.uid)}},"Delete"))}}]),t}(a.Component),We=function(e){var t=e.messages,n=e.onEditMessage,a=e.onRemoveMessage;return r.a.createElement("ul",null,t.map((function(e){return r.a.createElement(Re,{key:e.uid,message:e,onEditMessage:n,onRemoveMessage:a})})))},Fe=function(e){function t(e){var n;return Object(A.a)(this,t),(n=Object(D.a)(this,Object(N.a)(t).call(this,e))).onListenForMessages=function(){n.props.firebase.messages().orderByChild("createdAt").limitToLast(n.props.limit).on("value",(function(e){n.props.onSetMessages(e.val()),n.setState({loading:!1})}))},n.onChangeText=function(e){n.setState({text:e.target.value})},n.onCreateMessage=function(e,t){n.props.firebase.messages().push({text:n.state.text,userId:t.uid,createdAt:n.props.firebase.serverValue.TIMESTAMP}),n.setState({text:""}),e.preventDefault()},n.onEditMessage=function(e,t){n.props.firebase.message(e.uid).set(Object(c.a)({},e,{text:t,editedAt:n.props.firebase.serverValue.TIMESTAMP}))},n.onRemoveMessage=function(e){n.props.firebase.message(e).remove()},n.onNextPage=function(){n.props.onSetMessagesLimit(n.props.limit+5)},n.state={text:"",loading:!1},n}return Object(R.a)(t,e),Object(L.a)(t,[{key:"componentDidMount",value:function(){this.props.messages.length||this.setState({loading:!0}),this.onListenForMessages()}},{key:"componentDidUpdate",value:function(e){e.limit!==this.props.limit&&this.onListenForMessages()}},{key:"componentWillUnmount",value:function(){this.props.firebase.messages().off()}},{key:"render",value:function(){var e=this,t=this.props,n=t.users,a=t.messages,s=this.state,o=s.text,i=s.loading;return r.a.createElement(_.Consumer,null,(function(t){return r.a.createElement("div",null,!i&&a&&r.a.createElement("button",{type:"button",onClick:e.onNextPage},"More"),i&&r.a.createElement("div",null,"Loading ..."),a&&r.a.createElement(We,{messages:a.map((function(e){return Object(c.a)({},e,{user:n?n[e.userId]:{userId:e.userId}})})),onEditMessage:e.onEditMessage,onRemoveMessage:e.onRemoveMessage}),!a&&r.a.createElement("div",null,"There are no messages ..."),r.a.createElement("form",{onSubmit:function(n){return e.onCreateMessage(n,t)}},r.a.createElement("input",{type:"text",value:o,onChange:e.onChangeText}),r.a.createElement("button",{type:"submit"},"Send")))}))}}]),t}(a.Component),Ve=Object(q.a)(F,Object(i.b)((function(e){return{messages:Object.keys(e.messageState.messages||{}).map((function(t){return Object(c.a)({},e.messageState.messages[t],{uid:t})})),limit:e.messageState.limit}}),(function(e){return{onSetMessages:function(t){return e({type:"MESSAGES_SET",messages:t})},onSetMessagesLimit:function(t){return e({type:"MESSAGES_LIMIT_SET",limit:t})}}})))(Fe),He=function(e){function t(){return Object(A.a)(this,t),Object(D.a)(this,Object(N.a)(t).apply(this,arguments))}return Object(R.a)(t,e),Object(L.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.props.firebase.users().on("value",(function(t){e.props.onSetUsers(t.val())}))}},{key:"componentWillUnmount",value:function(){this.props.firebase.users().off()}},{key:"render",value:function(){var e=this.props.users;return r.a.createElement("div",null,r.a.createElement("h1",null,"Home Page"),r.a.createElement("p",null,"The Home Page is accessible by every signed in user."),r.a.createElement(Ve,{users:e}))}}]),t}(a.Component),Ge=Object(q.a)(F,Object(i.b)((function(e){return{users:e.userState.users}}),(function(e){return{onSetUsers:function(t){return e({type:"USERS_SET",users:t})}}})),Q,K((function(e){return!!e})))(He),ze={passwordOne:"",passwordTwo:"",error:null},Be=function(e){function t(e){var n;return Object(A.a)(this,t),(n=Object(D.a)(this,Object(N.a)(t).call(this,e))).onSubmit=function(e){var t=n.state.passwordOne;n.props.firebase.doPasswordUpdate(t).then((function(){n.setState(Object(c.a)({},ze))})).catch((function(e){n.setState({error:e})})),e.preventDefault()},n.onChange=function(e){n.setState(Object(h.a)({},e.target.name,e.target.value))},n.state=Object(c.a)({},ze),n}return Object(R.a)(t,e),Object(L.a)(t,[{key:"render",value:function(){var e=this.state,t=e.passwordOne,n=e.passwordTwo,a=e.error,s=t!==n||""===t;return r.a.createElement("form",{onSubmit:this.onSubmit},r.a.createElement(pe,{name:"passwordOne",value:t,onChange:this.onChange,type:"password",labelname:"New Password"}),r.a.createElement(pe,{name:"passwordTwo",value:n,onChange:this.onChange,type:"password",labelname:"Confirm New Password"}),r.a.createElement("button",{disabled:s,type:"submit"},"Change Password"),a&&r.a.createElement("p",null,a.message))}}]),t}(a.Component),Je=F(Be),qe=[{id:"password",provider:null},{id:"google.com",provider:"googleProvider"},{id:"facebook.com",provider:"facebookProvider"}],Ke=function(e){function t(e){var n;return Object(A.a)(this,t),(n=Object(D.a)(this,Object(N.a)(t).call(this,e))).fetchSignInMethods=function(){n.props.firebase.auth.fetchSignInMethodsForEmail(n.props.authUser.email).then((function(e){return n.setState({activeSignInMethods:e,error:null})})).catch((function(e){return n.setState({error:e})}))},n.onSocialLoginLink=function(e){n.props.firebase.auth.currentUser.linkWithPopup(n.props.firebase[e]).then(n.fetchSignInMethods).catch((function(e){return n.setState({error:e})}))},n.onDefaultLoginLink=function(e){var t=n.props.firebase.emailAuthProvider.credential(n.props.authUser.email,e);n.props.firebase.auth.currentUser.linkAndRetrieveDataWithCredential(t).then(n.fetchSignInMethods).catch((function(e){return n.setState({error:e})}))},n.onUnlink=function(e){n.props.firebase.auth.currentUser.unlink(e).then(n.fetchSignInMethods).catch((function(e){return n.setState({error:e})}))},n.state={activeSignInMethods:[],error:null},n}return Object(R.a)(t,e),Object(L.a)(t,[{key:"componentDidMount",value:function(){this.fetchSignInMethods()}},{key:"render",value:function(){var e=this,t=this.state,n=t.activeSignInMethods,a=t.error;return r.a.createElement("div",null,"Sign In Methods:",r.a.createElement("ul",null,qe.map((function(t){var a=1===n.length,s=n.includes(t.id);return r.a.createElement("li",{key:t.id},"password"===t.id?r.a.createElement(Ye,{onlyOneLeft:a,isEnabled:s,signInMethod:t,onLink:e.onDefaultLoginLink,onUnlink:e.onUnlink}):r.a.createElement(Qe,{onlyOneLeft:a,isEnabled:s,signInMethod:t,onLink:e.onSocialLoginLink,onUnlink:e.onUnlink}))}))),a&&a.message)}}]),t}(a.Component),Qe=function(e){var t=e.onlyOneLeft,n=e.isEnabled,a=e.signInMethod,s=e.onLink,o=e.onUnlink;return n?r.a.createElement("button",{type:"button",onClick:function(){return o(a.id)},disabled:t},"Deactivate ",a.id):r.a.createElement("button",{type:"button",onClick:function(){return s(a.provider)}},"Link ",a.id)},Ye=function(e){function t(e){var n;return Object(A.a)(this,t),(n=Object(D.a)(this,Object(N.a)(t).call(this,e))).onSubmit=function(e){e.preventDefault(),n.props.onLink(n.state.passwordOne),n.setState({passwordOne:"",passwordTwo:""})},n.onChange=function(e){n.setState(Object(h.a)({},e.target.name,e.target.value))},n.state={passwordOne:"",passwordTwo:""},n}return Object(R.a)(t,e),Object(L.a)(t,[{key:"render",value:function(){var e=this.props,t=e.onlyOneLeft,n=e.isEnabled,a=e.signInMethod,s=e.onUnlink,o=this.state,i=o.passwordOne,u=o.passwordTwo,l=i!==u||""===i;return n?r.a.createElement("button",{type:"button",onClick:function(){return s(a.id)},disabled:t},"Deactivate ",a.id):r.a.createElement("form",{onSubmit:this.onSubmit},r.a.createElement(pe,{name:"passwordOne",value:i,onChange:this.onChange,type:"password",labelname:"New Password"}),r.a.createElement(pe,{name:"passwordTwo",value:u,onChange:this.onChange,type:"password",labelname:"Confirm New Password"}),r.a.createElement("button",{disabled:l,type:"submit"},"Link ",a.id))}}]),t}(a.Component),Ze=F(Ke),$e=Object(q.a)(Q,K((function(e){return!!e})))((function(){return r.a.createElement(_.Consumer,null,(function(e){return r.a.createElement("div",null,r.a.createElement("h1",null,"Account: ",e.email),r.a.createElement(ke,null),r.a.createElement(Je,null),r.a.createElement(Ze,{authUser:e}))}))})),Xe=function(e){function t(e){var n;return Object(A.a)(this,t),(n=Object(D.a)(this,Object(N.a)(t).call(this,e))).state={loading:!1},n}return Object(R.a)(t,e),Object(L.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.props.users.length||this.setState({loading:!0}),this.props.firebase.users().on("value",(function(t){e.props.onSetUsers(t.val()),e.setState({loading:!1})}))}},{key:"componentWillUnmount",value:function(){this.props.firebase.users().off()}},{key:"render",value:function(){var e=this.props.users,t=this.state.loading;return r.a.createElement("div",null,r.a.createElement("h2",null,"Users"),t&&r.a.createElement("div",null,"Loading ..."),r.a.createElement("ul",null,e.map((function(e){return r.a.createElement("li",{key:e.uid},r.a.createElement("span",null,r.a.createElement("strong",null,"ID:")," ",e.uid),r.a.createElement("span",null,r.a.createElement("strong",null,"E-Mail:")," ",e.email),r.a.createElement("span",null,r.a.createElement("strong",null,"Username:")," ",e.username),r.a.createElement("span",null,r.a.createElement(I.b,{to:"".concat("/admin","/").concat(e.uid)},"Details")))}))))}}]),t}(a.Component),et=Object(q.a)(F,Object(i.b)((function(e){return{users:Object.keys(e.userState.users||{}).map((function(t){return Object(c.a)({},e.userState.users[t],{uid:t})}))}}),(function(e){return{onSetUsers:function(t){return e({type:"USERS_SET",users:t})}}})))(Xe),tt=function(e){function t(e){var n;return Object(A.a)(this,t),(n=Object(D.a)(this,Object(N.a)(t).call(this,e))).onSendPasswordResetEmail=function(){n.props.firebase.doPasswordReset(n.props.user.email)},n.state={loading:!1},n}return Object(R.a)(t,e),Object(L.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.props.user||(this.setState({loading:!0}),this.props.firebase.user(this.props.match.params.id).on("value",(function(t){e.props.onSetUser(t.val(),e.props.match.params.id),e.setState({loading:!1})})))}},{key:"componentWillUnmount",value:function(){this.props.firebase.user(this.props.match.params.id).off()}},{key:"render",value:function(){var e=this.props.user,t=this.state.loading;return r.a.createElement("div",null,r.a.createElement("h2",null,"User (",this.props.match.params.id,")"),t&&r.a.createElement("div",null,"Loading ..."),e&&r.a.createElement("div",null,r.a.createElement("span",null,r.a.createElement("strong",null,"ID:")," ",e.uid),r.a.createElement("span",null,r.a.createElement("strong",null,"E-Mail:")," ",e.email),r.a.createElement("span",null,r.a.createElement("strong",null,"Username:")," ",e.username),r.a.createElement("span",null,r.a.createElement("button",{type:"button",onClick:this.onSendPasswordResetEmail},"Send Password Reset"))))}}]),t}(a.Component),nt=Object(q.a)(F,Object(i.b)((function(e,t){return{user:(e.userState.users||{})[t.match.params.id]}}),(function(e){return{onSetUser:function(t,n){return e({type:"USER_SET",user:t,uid:n})}}})))(tt),at=Object(q.a)(Q,K((function(e){return e&&e.roles.includes("ADMIN")})))((function(){return r.a.createElement("div",null,r.a.createElement("h1",null,"Admin"),r.a.createElement("p",null,"The Admin Page is accessible by every signed in admin user."),r.a.createElement(T.c,null,r.a.createElement(T.a,{exact:!0,path:"/admin/:id",component:nt}),r.a.createElement(T.a,{exact:!0,path:"/admin",component:et})))})),rt=J((function(){return r.a.createElement(I.a,null,r.a.createElement("div",{className:U.a.content},r.a.createElement(te,null),r.a.createElement("div",{className:U.a.wrappContent},r.a.createElement(T.a,{exact:!0,path:"/post",component:le}),r.a.createElement(T.a,{path:"/signup",component:ve}),r.a.createElement(T.a,{path:"/signin",component:Ne}),r.a.createElement(T.a,{path:"/pw-forget",component:we}),r.a.createElement(T.a,{path:"/message",component:Ge}),r.a.createElement(T.a,{path:"/account",component:$e}),r.a.createElement(T.a,{path:"/admin",component:at}))))}));o.a.render(r.a.createElement(i.a,{store:P},r.a.createElement(V.Provider,{value:new B},r.a.createElement(u.Planets,null),r.a.createElement(rt,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[51,1,2]]]);
//# sourceMappingURL=main.d77e9414.chunk.js.map