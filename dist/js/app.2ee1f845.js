(function(t){function e(e){for(var n,o,r=e[0],l=e[1],d=e[2],c=0,m=[];c<r.length;c++)o=r[c],Object.prototype.hasOwnProperty.call(s,o)&&s[o]&&m.push(s[o][0]),s[o]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(t[n]=l[n]);u&&u(e);while(m.length)m.shift()();return i.push.apply(i,d||[]),a()}function a(){for(var t,e=0;e<i.length;e++){for(var a=i[e],n=!0,r=1;r<a.length;r++){var l=a[r];0!==s[l]&&(n=!1)}n&&(i.splice(e--,1),t=o(o.s=a[0]))}return t}var n={},s={app:0},i=[];function o(e){if(n[e])return n[e].exports;var a=n[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,o),a.l=!0,a.exports}o.m=t,o.c=n,o.d=function(t,e,a){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(o.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)o.d(a,n,function(e){return t[e]}.bind(null,n));return a},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],l=r.push.bind(r);r.push=e,r=r.slice();for(var d=0;d<r.length;d++)e(r[d]);var u=l;i.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"039a":function(t,e,a){"use strict";var n=a("7174"),s=a.n(n);s.a},"03e4":function(t,e,a){"use strict";var n=a("bd1b"),s=a.n(n);s.a},"0829":function(t,e,a){},"0d2f":function(t,e,a){},"1e0d":function(t,e,a){"use strict";var n=a("21d7"),s=a.n(n);s.a},"202e":function(t,e,a){"use strict";var n=a("ebaa"),s=a.n(n);s.a},"21d7":function(t,e,a){},"2dad":function(t,e,a){},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var n=a("2b0e"),s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("nav-bar",{attrs:{accountType:t.accountType}}),a("router-view",{staticClass:"pageContent",class:{"pageContent-Background":"home"==this.$route.name}})],1)},i=[],o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return["login","signup"].includes(t.$route.name)?t._e():a("div",[a("div",{staticClass:"header"},[a("a",{staticClass:"nav-trigger",attrs:{href:"#"},on:{click:t.navToogle}},[a("span")]),a("div",[a("b-badge",{staticClass:"navigation-btn",attrs:{variant:"light"}},[t._v(t._s(t.username))])],1)]),["NotFound"].includes(t.$route.name)?t._e():a("div",{staticClass:"side-nav",class:{visible:t.isVisible}},[t._m(0),a("nav",{staticStyle:{height:"-webkit-fill-available","-webkit-box-shadow":"rgb(134 134 134) -6px -1px 4px -6px","-moz-box-shadow":"rgb(134 134 134) -6px -1px 4px -6px","box-shadow":"rgb(134 134 134) -6px -1px 4px -6px"}},[a("ul",[a("li",{on:{click:function(e){t.isVisible=!1}}},[a("router-link",{staticClass:"nav-link",attrs:{to:"/"}},[a("i",{staticClass:"fa fa-home"}),a("span",{staticClass:"hideInSmall"},[t._v("الصفحة الرئيسية")])])],1)])])])])},r=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"logo"},[a("span",[t._v("منصة أ/عصام سمكة")])])}],l=a("2f62"),d={token:null,user_name:null,account_type:null},u=d,c={authToken:function(t){return t.token},username:function(t){return t.user_name},accoutType:function(t){return t.account_type}},m=c,p={SET_TOKEN:function(t,e){t.token=e},SET_USERNAME:function(t,e){t.user_name=e},SET_ACCOUNT_TYPE:function(t,e){t.account_type=e},LOGOUT:function(t){t.token=null,t.user_name=null,t.account_type=null}},f=p,v={SET_ACCOUNT_TYPE:function(t,e){var a=t.commit;a("SET_ACCOUNT_TYPE",e)},SET_USERNAME:function(t,e){var a=t.commit;a("SET_USERNAME",e)}},b=v,g=a("0e44");n["default"].use(l["a"]);var h=new l["a"].Store({getters:m,mutations:f,state:u,actions:b,plugins:[Object(g["a"])()]}),w={data:function(){return{isVisible:!1,username:null}},components:{},watch:{$route:function(t,e){this.username=this.$store.getters.username}},methods:{navToogle:function(){this.isVisible=!this.isVisible}},created:function(){this.username=h.getters.username?h.getters.username:"طالب"}},_=w,y=(a("03e4"),a("2877")),C=Object(y["a"])(_,o,r,!1,null,"6a8191b8",null),T=C.exports,$={data:function(){return{form:"",accountType:null}},components:{navBar:T},created:function(){}},x=$,L=(a("d324"),Object(y["a"])(x,s,i,!1,null,"3f188b5d",null)),k=L.exports,S=a("bc3a"),E=a.n(S),O=a("8c4f"),V=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"login-page"},[a("div",{staticClass:"container"},[a("div",{staticClass:"panel panel-default login-panel"},[a("div",[a("b-row",[a("b-col",{attrs:{lg:"12",md:"12"}},[a("div",{staticClass:"panel-heading"},[a("h3",[a("strong",[t._v("منصة أ/ عصام سمكة للرياضيات")])]),a("h5",[a("strong",[t._v("ادخل البيانات لتسجيل الدخول")])])])])],1),a("login")],1)])])])},q=[],M=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("b-form",{on:{submit:function(e){return e.stopPropagation(),e.preventDefault(),t.onSubmit(e)}}},[a("b-container",{staticClass:"bv-example-row"},[a("div",{directives:[{name:"show",rawName:"v-show",value:t.isLoading,expression:"isLoading"}],staticClass:"text-center text-danger my-2",class:{"alert-div-padding":t.isLoading}},[a("b-spinner",{staticClass:"align-middle"})],1),a("b-row",{directives:[{name:"show",rawName:"v-show",value:!t.isLoading,expression:"!isLoading"}]},[a("b-col",{staticClass:"alert-div",attrs:{lg:"12",md:"12"}},[a("b-alert",{attrs:{show:t.alertCountdown,dismissible:"",fade:"",variant:t.alertType},on:{"dismiss-count-down":t.countDownChanged}},[t._v(" "+t._s(t.alertText)+" ")]),a("br"),a("br")],1),a("br"),a("br"),a("b-col",{attrs:{lg:"12",md:"12"}},[a("b-form-group",{attrs:{id:"group-student-email",label:"البريد الالكتروني","label-for":"student-email"}},[a("b-form-input",{attrs:{id:"student-email",name:"student-email",state:t.validateState("email"),"aria-describedby":"input-email"},model:{value:t.$v.form.email.$model,callback:function(e){t.$set(t.$v.form.email,"$model",e)},expression:"$v.form.email.$model"}}),t.$v.form.email.required?t._e():a("b-form-invalid-feedback",{attrs:{id:"input-email"}},[t._v(" البريد الالكتروني مطلوب ")]),t.$v.form.email.email?t._e():a("b-form-invalid-feedback",{attrs:{id:"input-email"}},[t._v(" البريد الالكتروني غير صالح ")])],1)],1),a("b-col",{attrs:{lg:"12",md:"12"}},[a("b-form-group",{attrs:{id:"group-student-password",label:"كلمة المرور","label-for":"student-password"}},[a("b-form-input",{attrs:{id:"student-password",name:"student-password",state:t.validateState("password"),"aria-describedby":"input-password",type:"password"},model:{value:t.$v.form.password.$model,callback:function(e){t.$set(t.$v.form.password,"$model",e)},expression:"$v.form.password.$model"}}),t.$v.form.password.required?t._e():a("b-form-invalid-feedback",{attrs:{id:"input-password"}},[t._v(" كلمة المرور مطلوبه ")])],1)],1),a("b-col",{attrs:{lg:"12",md:"12"}},[a("div",{staticClass:"form-footer"},[a("b-button",{staticClass:"login-btn",attrs:{type:"submit",variant:"primary"}},[t._v(" تسجيل الدخول")])],1),a("br"),a("div")])],1)],1)],1)],1)},P=[],I=function(t,e,a){var n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null,s=arguments.length>4&&void 0!==arguments[4]?arguments[4]:null,i=arguments.length>5&&void 0!==arguments[5]?arguments[5]:null,o=arguments.length>6&&void 0!==arguments[6]&&arguments[6],r=null;a&&(r={headers:{authorization:"Bearer "+h.getters.authToken}},o&&(r["responseType"]="arraybuffer"));var l={get:E.a.get,post:E.a.post,delete:E.a.delete,put:E.a.put,patch:E.a.patch},d="https://api.mressamsamaka.com/api"+e,u=null;u=n?l[t](d,n,r):l[t](d,r),u.then((function(t){s&&s(t)})).catch((function(t){i&&(401==t.response.status&&(h.commit("LOGOUT"),Ot.push({name:"login"})),i(t))}))},D=a("1dce"),N=a.n(D),j=a("b5ae"),A={mixins:[D["validationMixin"]],data:function(){return{isLoading:!1,alertCountdown:0,alertType:"",alertText:"",form:{email:null,password:null}}},validations:{form:{email:{required:j["required"],email:j["email"]},password:{required:j["required"]}}},methods:{getAccountData:function(){var t=this,e=function(e){h.dispatch("SET_USERNAME",e.data.first_name+" "+e.data.last_name),t.$router.push({name:"home"}),t.isLoading=!1},a=function(){t.isLoading=!1,t.alertType="danger",t.alertText="حدث خطأ ما ، حاول قريبًا",t.alertCountdown="3",h.commit("SET_TOKEN",null)};I("get","/students/profile",!0,null,e,a)},validateState:function(t){var e=this.$v.form[t],a=e.$dirty,n=e.$error;return a?!n:null},countDownChanged:function(t){this.alertCountdown=t},onSubmit:function(){this.$v.form.$touch(),this.$v.form.$anyError||this.login()},login:function(){var t=this;this.isLoading=!0;var e=function(e){h.commit("SET_TOKEN",e.data.access_token),t.getAccountData()},a=function(e){var a="البريد الالكتروني او كلمة المرور غير صحيحة";e.response.data.message&&(a=e.response.data.message),t.isLoading=!1,t.alertType="danger",t.alertText=a,t.alertCountdown="3"};I("post","/students/login",!1,this.form,e,a)}},created:function(){h.getters.authToken&&this.$router.push({name:"home"})}},U=A,R=(a("039a"),Object(y["a"])(U,M,P,!1,null,null,null)),H=R.exports,z={components:{login:H}},B=z,G=(a("d6db"),Object(y["a"])(B,V,q,!1,null,null,null)),W=G.exports,K=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"login-page signup-page"},[a("div",{staticClass:"container"},[a("div",{staticClass:"panel panel-default login-panel"},[a("div",[a("b-row",[a("b-col",{attrs:{lg:"12",md:"12"}},[a("div",{staticClass:"panel-heading"},[a("h3",[a("strong",[t._v("منصة أ/ عصام سمكة للرياضيات")])]),a("h5",[a("strong",[t._v("ادخل البيانات لتسجيل حسابك")])])])])],1),a("signup")],1)])])])},F=[],Y=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("b-form",{on:{submit:function(e){return e.stopPropagation(),e.preventDefault(),t.onSubmit(e)}}},[a("b-container",{staticClass:"bv-example-row"},[a("div",{directives:[{name:"show",rawName:"v-show",value:t.isLoading,expression:"isLoading"}],staticClass:"text-center text-danger my-2",class:{"alert-div-padding":t.isLoading}},[a("b-spinner",{staticClass:"align-middle"})],1),t.loginBtnShow?a("div",{class:{"alert-div-padding":t.loginBtnShow}},[a("b-col",{staticClass:"alert-div",attrs:{lg:"12",md:"12"}},[a("b-alert",{attrs:{show:t.alertCountdown,dismissible:"",fade:"",variant:t.alertType},on:{"dismiss-count-down":t.countDownChanged}},[t._v(" "+t._s(t.alertText)+" ")]),a("br"),a("br")],1),a("br"),a("br"),a("b-button",{staticClass:"login-btn",attrs:{variant:"primary"},on:{click:function(e){return t.goToLogin("login")}}},[t._v(" سجل الدخول الآن ")])],1):a("b-row",{directives:[{name:"show",rawName:"v-show",value:!t.isLoading,expression:"!isLoading"}]},[a("b-col",{staticClass:"alert-div",attrs:{lg:"12",md:"12"}},[a("b-alert",{attrs:{show:t.alertCountdown,dismissible:"",fade:"",variant:t.alertType},on:{"dismiss-count-down":t.countDownChanged}},[t._v(" "+t._s(t.alertText)+" ")]),a("br"),a("br")],1),a("br"),a("br"),a("b-col",{attrs:{lg:"6",md:"12"}},[a("b-form-group",{attrs:{id:"group-user-first_name",label:"الاسم الاول","label-for":"user-first_name"}},[a("b-form-input",{attrs:{id:"user-first_name",name:"user-first_name",state:t.validateState("first_name"),"aria-describedby":"input-first_name"},model:{value:t.$v.form.first_name.$model,callback:function(e){t.$set(t.$v.form.first_name,"$model",e)},expression:"$v.form.first_name.$model"}}),a("b-form-invalid-feedback",{attrs:{id:"input-first_name"}},[t._v(" الاسم الاول مطلوب ")])],1)],1),a("b-col",{attrs:{lg:"6",md:"12"}},[a("b-form-group",{attrs:{id:"group-user-last_name",label:"الاسم الثاني","label-for":"user-last_name"}},[a("b-form-input",{attrs:{id:"user-last_name",name:"user-last_name",state:t.validateState("last_name"),"aria-describedby":"input-last_name"},model:{value:t.$v.form.last_name.$model,callback:function(e){t.$set(t.$v.form.last_name,"$model",e)},expression:"$v.form.last_name.$model"}}),a("b-form-invalid-feedback",{attrs:{id:"input-last_name"}},[t._v(" الاسم الثاني مطلوب ")])],1)],1),a("b-col",{attrs:{lg:"12",md:"12"}},[a("b-form-group",{attrs:{id:"group-user-email",label:"البريد الالكتروني","label-for":"user-email"}},[a("b-form-input",{attrs:{id:"user-email",name:"user-email",state:t.validateState("email"),"aria-describedby":"input-email"},model:{value:t.$v.form.email.$model,callback:function(e){t.$set(t.$v.form.email,"$model",e)},expression:"$v.form.email.$model"}}),t.$v.form.email.required?t._e():a("b-form-invalid-feedback",{attrs:{id:"input-email"}},[t._v(" البريد الالكتروني مطلوب ")]),t.$v.form.email.email?t._e():a("b-form-invalid-feedback",{attrs:{id:"input-email"}},[t._v(" البريد الالكتروني غير صالح ")])],1)],1),a("b-col",{attrs:{lg:"12",md:"12"}},[a("b-form-group",{attrs:{id:"group-user-password",label:"كلمة المرور","label-for":"user-password"}},[a("b-form-input",{attrs:{id:"user-password",name:"user-password",state:t.validateState("password"),"aria-describedby":"input-password",type:"password"},model:{value:t.$v.form.password.$model,callback:function(e){t.$set(t.$v.form.password,"$model",e)},expression:"$v.form.password.$model"}}),t.$v.form.password.required?t._e():a("b-form-invalid-feedback",{attrs:{id:"input-password"}},[t._v(" كلمة المرور مطلوبه ")])],1)],1),a("b-col",{attrs:{lg:"12",md:"12"}},[a("div",{staticClass:"form-footer"},[a("b-button",{staticClass:"login-btn",attrs:{type:"submit",variant:"primary"}},[t._v(" تسجيل ")])],1),a("br"),a("div",[a("span",{staticClass:"createAccount-link"},[t._v("لديك حساب؟"),a("b-button",{staticClass:"mb-1 mr-0 pr-1",attrs:{variant:"link"},on:{click:function(e){return t.goToLogin("login")}}},[t._v("سجل الدخول لحسابك")])],1)])])],1)],1)],1)],1)},J=[],Q={mixins:[D["validationMixin"]],data:function(){return{isLoading:!1,loginBtnShow:!1,alertCountdown:0,alertType:"",alertText:"",form:{first_name:null,last_name:null,email:null,password:null}}},validations:{form:{first_name:{required:j["required"]},last_name:{required:j["required"]},email:{required:j["required"],email:j["email"]},password:{required:j["required"]}}},methods:{goToLogin:function(){this.$router.push({name:"login"})},validateState:function(t){var e=this.$v.form[t],a=e.$dirty,n=e.$error;return a?!n:null},countDownChanged:function(t){this.alertCountdown=t},onSubmit:function(){this.$v.form.$touch(),this.$v.form.$anyError||this.signup()},signup:function(){var t=this;this.isLoading=!0;var e=function(){t.alertType="success",t.alertText="تم انشاء الحساب بنجاح ",t.alertCountdown="3",t.isLoading=!1,h.commit("SET_TOKEN",null),t.loginBtnShow=!0},a=function(e){var a="حدث خطأ ما ، حاول قريبًا";"The email has already been taken."==e.response.data.email&&(a="البريد الالكتروني مستخدم من قبل"),t.isLoading=!1,t.alertType="danger",t.alertText=a,t.alertCountdown="3"};I("post","/students/create",!1,this.form,e,a)}},created:function(){h.getters.authToken&&this.$router.push({name:"home"})}},X=Q,Z=(a("8d1b"),Object(y["a"])(X,Y,J,!1,null,null,null)),tt=Z.exports,et={components:{signup:tt}},at=et,nt=(a("e42b"),Object(y["a"])(at,K,F,!1,null,null,null)),st=(nt.exports,function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"page-layout videos"},[a("b-alert",{attrs:{show:t.alertCountdown,dismissible:"",fade:"",variant:t.alertType},on:{"dismiss-count-down":t.countDownChanged}},[t._v(" "+t._s(t.alertText)+" ")]),a("div",{staticClass:"page-header"}),a("div",{directives:[{name:"show",rawName:"v-show",value:t.pageIsLoading,expression:"pageIsLoading"}],staticClass:"text-center text-danger my-2"},[a("b-spinner",{staticClass:"align-middle"})],1),a("div",{directives:[{name:"show",rawName:"v-show",value:!t.pageIsLoading,expression:"!pageIsLoading"}],staticClass:"row asd"},[a("div",{staticClass:"col-md-12"},[a("div",{},[a("div",{},[a("div",{staticClass:"table-responsive"},[a("table",{staticClass:"table table-bordered table-hover"},[t._m(0),a("tbody",[0==t.videos.length&&t.isLoading?a("tr",{staticClass:"no-data-row"},[a("td",{attrs:{colspan:"7"}},[a("div",{staticClass:"text-center >text-danger my-2"},[a("b-spinner",{staticClass:"align-middle"})],1)])]):t._e(),0!=t.videos.length||t.isLoading?t._e():a("tr",{staticClass:"no-data-row"},[a("td",{attrs:{colspan:"7"}},[t._v(" لا يوجد معلومات ")])]),t._l(t.videos,(function(e,n){return a("tr",{key:n},[a("td",[t._v(" "+t._s(++n)+" ")]),a("td",[a("div",{staticClass:"tbl-data"},[t._v(t._s(e.name))])]),a("td",[a("span",{staticClass:"tbl-data"},[t._v(t._s(e.description))])]),a("td",{attrs:{width:"5%"}},[a("div",{staticClass:"form-group row-option"},[a("b-button",{staticClass:"btn btn-primary options-admin-btn request-options-admin-btn",attrs:{type:"button",size:"sm",variant:"primary"},on:{click:function(a){return t.playVideo(e)}}},[t._v("مشاهدة")])],1)]),a("td",{attrs:{width:"5%"}},[a("div",{staticClass:"form-group row-option"},[a("b-button",{staticClass:"btn btn-primary options-admin-btn request-options-admin-btn",attrs:{type:"button",size:"sm",variant:"outline-primary"},on:{click:function(a){return t.openSendRequestModal(e)}}},[t._v("ارسال طلب")])],1)])])}))],2)])])])])])]),a("b-modal",{attrs:{title:"طلب مشاهدة درس"},scopedSlots:t._u([{key:"modal-footer",fn:function(){return[a("b-button",{attrs:{size:"sm",variant:"secondary"},on:{click:function(e){t.requestVideoModal=!1}}},[t._v(" الغاء ")]),a("b-button",{attrs:{size:"sm",variant:"primary"},on:{click:function(e){return t.sendVideoRequest()}}},[t._v(" ارسل طلب للادارة ")])]},proxy:!0}]),model:{value:t.requestVideoModal,callback:function(e){t.requestVideoModal=e},expression:"requestVideoModal"}},[a("p",{staticClass:"my-4"},[t._v("هل تريد مشاهدة هذا الدرس؟")])])],1)}),it=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("thead",[a("tr",[a("th",{attrs:{width:"5%"}},[a("span",{staticClass:"tbl-data"},[t._v("#")])]),a("th",[a("div",{staticClass:"tbl-data"},[t._v("عنوان الدرس")])]),a("th",{attrs:{colspan:"3"}},[a("span",{staticClass:"tbl-data"},[t._v("الوصف")])])])])}],ot={name:"Home",data:function(){return{videos:[],isLoading:!0,pageIsLoading:!1,alertType:"",alertText:"",alertCountdown:0,showDismissibleAlert:!1,requestVideoModal:!1,sendPasswordToShowModal:!1,currentVideo:{}}},methods:{openSendRequestModal:function(t){t.id&&(this.requestVideoModal=!0,this.currentVideo=t)},playVideo:function(t){t.id&&this.$router.push({name:"lesson",params:{lessonID:t.id}})},sendVideoRequest:function(){var t=this;if(this.pageIsLoading=!0,this.requestVideoModal=!1,this.currentVideo.id){this.isLoading=!0;var e=function(e){t.requestVideoModal=!1,t.alertType="success",t.alertText="تم ارسال طلب . انتظر كلمة المرور من الادارة",t.alertCountdown="3",t.isLoading=!1,t.pageIsLoading=!1},a=function(e){t.requestVideoModal=!1,t.isLoading=!1,t.pageIsLoading=!1,t.alertType="danger",t.alertText=e.response.data.message,t.alertCountdown="3"};I("post","/students/request/media",!0,{media:this.currentVideo.id},e,a)}},loadData:function(){var t=this;this.isLoading=!0,this.pageIsLoading=!0;var e=function(e){t.videos=e.data,t.isLoading=!1,t.pageIsLoading=!1},a=function(){t.isLoading=!1,t.pageIsLoading=!1,t.alertType="danger",t.alertText="خطأ .. في البريد او كلمه المرور",t.alertCountdown="3"};I("get","/medias",!0,null,e,a)},countDownChanged:function(t){this.alertCountdown=t}},created:function(){this.loadData()}},rt=ot,lt=(a("f90e"),Object(y["a"])(rt,st,it,!1,null,"7440c25b",null)),dt=lt.exports,ut=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"page-layout videos",attrs:{id:"vApp"}},[a("b-alert",{attrs:{show:t.alertCountdown,dismissible:"",fade:"",variant:t.alertType},on:{"dismiss-count-down":t.countDownChanged}},[t._v(" "+t._s(t.alertText)+" ")]),a("div",{staticClass:"page-header"}),a("div",{staticClass:"row"},[a("div",{staticClass:"col-md-12"},[t.mobileView?a("div",{attrs:{id:""}},[a("div",{directives:[{name:"show",rawName:"v-show",value:t.isLoading,expression:"isLoading"}],staticClass:"text-center text-danger my-2"},[a("b-spinner",{staticClass:"align-middle"})],1),a("div",{directives:[{name:"show",rawName:"v-show",value:!t.isLoading,expression:"!isLoading"}],staticClass:"holder"},[t.videoIsSuccess?a("div",{staticClass:"notPortraitModa"},[a("div",{class:{bar1:!0}}),a("div",{class:{bar:!t.mobileView}}),a("div",{class:{"bar-t":t.mobileView}}),a("div",{class:{"bar-b":t.mobileView}}),a("div",{class:{"bar-b":t.mobileView,"bar-dark":t.pressPlay}}),a("div",{class:{"bar-l":t.mobileView}}),a("div",{class:{"bar-r":t.mobileView}}),a("div",{class:{bar2:!t.mobileView}}),a("iframe",{staticClass:"frame youtube-video",attrs:{id:"youtube-video",width:"100%",height:"500",src:"https://www.youtube.com/embed/"+t.lessonPath+"?enablejsapi=1&modestbranding=1&version=3&autoplay=0&showinfo=0",frameborder:"0",allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:""}})]):a("div",[a("h3",[t._v("طلبك قيد اﻻنتظار, من فضلك انتظر موافقة الادارة")]),a("br")])]),t.videoIsSuccess&&t.pressPlay?a("div",{staticClass:"mt-4 play-lesson-btn"},[a("h3",[t._v(" "+t._s(t.lessonName)+" ")]),a("p",[t._v(t._s(t.lessonDescription))]),a("b-button",{attrs:{variant:"light"},on:{click:function(e){return t.playLesson()}}},[a("i",{staticClass:"fas fa-play pl-2"}),t._v(" ابدأ الدرس")])],1):t._e()]):a("div",[a("h3",[t._v("مشاهدة الدرس مسموحة على جهازك المحمول فقط !!!")]),a("br")])])])],1)},ct=[],mt=(a("a4d3"),a("e01a"),a("caad"),a("c975"),a("b0c0"),a("12a8"),a("d3b7"),a("ac1f"),a("2532"),a("3ca3"),a("5319"),a("ddb0"),a("2b3d"),a("1157")),pt=a.n(mt),ft={name:"Home",data:function(){return{videos:[],isLoading:!1,alertType:"",alertText:"",alertCountdown:0,currentVideo:{},lessonPath:null,lessonName:null,lessonDescription:null,mobileView:!0,isPaused:!1,videoIsSuccess:!1,pressPlay:!0}},methods:{loadData:function(){var t=this;this.isLoading=!0;var e=function(e){if(e.data.path.includes("https://www.youtube.com/")){var a=new URL(e.data.path);t.lessonPath=a.searchParams.get("v"),t.lessonName=e.data.name,t.lessonDescription=e.data.description,t.isLoading=!1,t.videoIsSuccess=!0,t.mobileView&&(window.onresize=function(){if(window.outerHeight-window.innerHeight>100){var t,e=new Image,a=document.querySelector("#app"),n=a.innerHTML;e.__defineGetter__("id",(function(){t=""})),this.pressPlay=!0,setInterval((function(){window.location.href.includes("lesson")&&(t=n,console.clear(),window.location.replace("/"),a.innerHTML=t)}),2e3)}})}else t.isLoading=!1,t.alertType="danger",t.alertText="خطأ - قم بأبلاغ الادارة",t.alertCountdown="3"},a=function(e){var a="حدث خطأ ما ، حاول قريبًا";400==e.response.status&&(a=e.response.data.message),t.isLoading=!1,t.alertType="danger",t.alertText=a,t.alertCountdown="3"};I("post","/students/request/media/confirm",!0,{media:this.$route.params.lessonID},e,a)},countDownChanged:function(t){this.alertCountdown=t},playLesson:function(){this.pressPlay=!1,pt()(".youtube-video")[0].contentWindow.postMessage('{"event":"command","func":"playVideo","args":""}',"*")}},created:function(){var t=window.navigator.userAgent,e=window.navigator.platform,a=["Macintosh","MacIntel","MacPPC","Mac68K"],n=["Win32","Win64","Windows","WinCE"],s=["iPhone","iPad","iPod"],i=null;-1!==a.indexOf(e)?(i="Mac OS",this.mobileView=!1):-1!==s.indexOf(e)?(i="iOS",this.mobileView=!0):-1!==n.indexOf(e)?(i="Windows",this.mobileView=!1):/Android/.test(t)?(i="Android",this.mobileView=!0):!i&&/Linux/.test(e)&&(i="Linux",this.mobileView=!1),this.isLoading=!1,pt()(document).on("keydown",(function(t){9==t.keyCode&&t.preventDefault()})),this.mobileView&&this.loadData()}},vt=ft,bt=(a("202e"),Object(y["a"])(vt,ut,ct,!1,null,"5fbac672",null)),gt=bt.exports,ht=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"notFound"},[a("h1",[t._v("404")]),a("p",[t._v("الصفحة غير موجودة !")]),a("b-button",{attrs:{variant:"secondary"},on:{click:function(e){return t.goToHome()}}},[t._v("العودة للصفحة الرئيسية")])],1)},wt=[],_t={methods:{goToHome:function(){this.$router.push({name:"home"})}}},yt=_t,Ct=(a("1e0d"),Object(y["a"])(yt,ht,wt,!1,null,"6ffa2f40",null)),Tt=Ct.exports,$t=function(t,e,a){h.getters.authToken?a():(h.commit("LOGOUT"),a({name:"login"}))},xt=function(t,e,a){h.getters.authToken?("admin"!=h.getters.accoutType&&a({name:"home"}),a()):(h.commit("LOGOUT"),a({name:"login"}))},Lt=function(t,e,a){h.getters.authToken?("teacher"!=h.getters.accoutType&&a({name:"home"}),a()):(h.commit("LOGOUT"),a({name:"login"}))},kt={isLoggedIn:$t,isAdminLoggedIn:xt,isTeacherLoggedIn:Lt};n["default"].use(O["a"]);var St=[{path:"/",name:"home",component:dt,beforeEnter:kt.isLoggedIn},{path:"/lesson/:lessonID",name:"lesson",component:gt,beforeEnter:kt.isLoggedIn},{path:"/login",name:"login",component:W},{path:"*",name:"NotFound",component:Tt,beforeEnter:kt.isLoggedIn}],Et=new O["a"]({mode:"history",routes:St}),Ot=Et,Vt=a("5f5b"),qt=a("b1e0"),Mt=(a("f9e3"),a("2dd8"),a("dbc8"),a("0d2f"),a("42ab")),Pt=a.n(Mt);n["default"].use(l["a"]),n["default"].use(Pt.a),n["default"].use(N.a),n["default"].use(Vt["a"],qt["a"],E.a),n["default"].config.productionTip=!1,new n["default"]({router:Ot,store:h,render:function(t){return t(k)}}).$mount("#app")},7174:function(t,e,a){},"8d1b":function(t,e,a){"use strict";var n=a("2dad"),s=a.n(n);s.a},a879:function(t,e,a){},bd1b:function(t,e,a){},cff3:function(t,e,a){},d324:function(t,e,a){"use strict";var n=a("a879"),s=a.n(n);s.a},d6db:function(t,e,a){"use strict";var n=a("e67a"),s=a.n(n);s.a},dbc8:function(t,e,a){},e42b:function(t,e,a){"use strict";var n=a("cff3"),s=a.n(n);s.a},e67a:function(t,e,a){},ebaa:function(t,e,a){},f90e:function(t,e,a){"use strict";var n=a("0829"),s=a.n(n);s.a}});
//# sourceMappingURL=app.2ee1f845.js.map