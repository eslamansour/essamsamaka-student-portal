(function(t){function e(e){for(var s,i,r=e[0],l=e[1],d=e[2],c=0,m=[];c<r.length;c++)i=r[c],Object.prototype.hasOwnProperty.call(n,i)&&n[i]&&m.push(n[i][0]),n[i]=0;for(s in l)Object.prototype.hasOwnProperty.call(l,s)&&(t[s]=l[s]);u&&u(e);while(m.length)m.shift()();return o.push.apply(o,d||[]),a()}function a(){for(var t,e=0;e<o.length;e++){for(var a=o[e],s=!0,r=1;r<a.length;r++){var l=a[r];0!==n[l]&&(s=!1)}s&&(o.splice(e--,1),t=i(i.s=a[0]))}return t}var s={},n={app:0},o=[];function i(e){if(s[e])return s[e].exports;var a=s[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,i),a.l=!0,a.exports}i.m=t,i.c=s,i.d=function(t,e,a){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(i.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)i.d(a,s,function(e){return t[e]}.bind(null,s));return a},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],l=r.push.bind(r);r.push=e,r=r.slice();for(var d=0;d<r.length;d++)e(r[d]);var u=l;o.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"039a":function(t,e,a){"use strict";var s=a("7174"),n=a.n(s);n.a},"0d2f":function(t,e,a){},"1e0d":function(t,e,a){"use strict";var s=a("21d7"),n=a.n(s);n.a},"21d7":function(t,e,a){},"2bbb":function(t,e,a){"use strict";var s=a("5670"),n=a.n(s);n.a},"2dad":function(t,e,a){},"41c4":function(t,e,a){},5670:function(t,e,a){},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var s=a("2b0e"),n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("nav-bar",{attrs:{accountType:t.accountType}}),a("router-view",{staticClass:"pageContent",class:{"pageContent-Background":"home"==this.$route.name}})],1)},o=[],i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return["login","signup"].includes(t.$route.name)?t._e():a("div",[a("div",{staticClass:"header"},[a("a",{staticClass:"nav-trigger",attrs:{href:"#"},on:{click:t.navToogle}},[a("span")]),a("div",{staticClass:"logoutBtn-div"},[a("b-dropdown",{staticClass:"mt-2 logoutBtn",attrs:{size:"sm",id:"dropdown-1",text:t.username,variant:"outline-secondary"}},[a("b-dropdown-item",{directives:[{name:"b-modal",rawName:"v-b-modal.modal-logout",modifiers:{"modal-logout":!0}}]},[t._v("تسجيل الخروج")])],1)],1)]),["NotFound"].includes(t.$route.name)?t._e():a("div",{staticClass:"side-nav",class:{visible:t.isVisible}},[t._m(0),a("nav",{staticStyle:{height:"-webkit-fill-available","-webkit-box-shadow":"rgb(134 134 134) -6px -1px 4px -6px","-moz-box-shadow":"rgb(134 134 134) -6px -1px 4px -6px","box-shadow":"rgb(134 134 134) -6px -1px 4px -6px"}},[a("ul",[a("li",{on:{click:function(e){t.isVisible=!1}}},[a("router-link",{staticClass:"nav-link",attrs:{to:"/"}},[a("i",{staticClass:"fa fa-home"}),a("span",{staticClass:"hideInSmall"},[t._v("الصفحة الرئيسية")])])],1)])])]),a("b-modal",{attrs:{id:"modal-logout",title:"تسجيل الخروج"},scopedSlots:t._u([{key:"modal-footer",fn:function(){return[a("b-button",{attrs:{size:"sm",variant:"secondary"},on:{click:function(e){return t.$bvModal.hide("modal-logout")}}},[t._v(" الغاء ")]),a("b-button",{attrs:{size:"sm",variant:"primary"},on:{click:function(e){return t.logout()}}},[t._v(" الخروج ")])]},proxy:!0}],null,!1,3463112568)},[a("p",{staticClass:"my-4"},[t._v("هل تريد تسجيل الخروج?")])])],1)},r=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"logo"},[a("span",[t._v("منصة أ/عصام سمكة")])])}],l=a("2f62"),d={token:null,user_name:null,account_type:null},u=d,c={authToken:function(t){return t.token},username:function(t){return t.user_name},accoutType:function(t){return t.account_type}},m=c,p={SET_TOKEN:function(t,e){t.token=e},SET_USERNAME:function(t,e){t.user_name=e},SET_ACCOUNT_TYPE:function(t,e){t.account_type=e},LOGOUT:function(t){t.token=null,t.user_name=null,t.account_type=null}},v=p,f={SET_ACCOUNT_TYPE:function(t,e){var a=t.commit;a("SET_ACCOUNT_TYPE",e)},SET_USERNAME:function(t,e){var a=t.commit;a("SET_USERNAME",e)}},b=f,g=a("0e44");s["default"].use(l["a"]);var h=new l["a"].Store({getters:m,mutations:v,state:u,actions:b,plugins:[Object(g["a"])()]}),w=a("bc3a"),_=a.n(w),C=a("8c4f"),$=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"login-page"},[a("div",{staticClass:"container"},[a("div",{staticClass:"panel panel-default login-panel"},[a("div",[a("b-row",[a("b-col",{attrs:{lg:"12",md:"12"}},[a("div",{staticClass:"panel-heading"},[a("h3",[a("strong",[t._v("منصة أ/ عصام سمكة للرياضيات")])]),a("h5",[a("strong",[t._v("ادخل البيانات لتسجيل الدخول")])])])])],1),a("login")],1)])])])},y=[],T=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("b-form",{on:{submit:function(e){return e.stopPropagation(),e.preventDefault(),t.onSubmit(e)}}},[a("b-container",{staticClass:"bv-example-row"},[a("div",{directives:[{name:"show",rawName:"v-show",value:t.isLoading,expression:"isLoading"}],staticClass:"text-center text-danger my-2",class:{"alert-div-padding":t.isLoading}},[a("b-spinner",{staticClass:"align-middle"})],1),a("b-row",{directives:[{name:"show",rawName:"v-show",value:!t.isLoading,expression:"!isLoading"}]},[a("b-col",{staticClass:"alert-div",attrs:{lg:"12",md:"12"}},[a("b-alert",{attrs:{show:t.alertCountdown,dismissible:"",fade:"",variant:t.alertType},on:{"dismiss-count-down":t.countDownChanged}},[t._v(" "+t._s(t.alertText)+" ")]),a("br"),a("br")],1),a("br"),a("br"),a("b-col",{attrs:{lg:"12",md:"12"}},[a("b-form-group",{attrs:{id:"group-student-email",label:"البريد الالكتروني","label-for":"student-email"}},[a("b-form-input",{attrs:{id:"student-email",name:"student-email",state:t.validateState("email"),"aria-describedby":"input-email"},model:{value:t.$v.form.email.$model,callback:function(e){t.$set(t.$v.form.email,"$model",e)},expression:"$v.form.email.$model"}}),t.$v.form.email.required?t._e():a("b-form-invalid-feedback",{attrs:{id:"input-email"}},[t._v(" البريد الالكتروني مطلوب ")]),t.$v.form.email.email?t._e():a("b-form-invalid-feedback",{attrs:{id:"input-email"}},[t._v(" البريد الالكتروني غير صالح ")])],1)],1),a("b-col",{attrs:{lg:"12",md:"12"}},[a("b-form-group",{attrs:{id:"group-student-password",label:"كلمة المرور","label-for":"student-password"}},[a("b-form-input",{attrs:{id:"student-password",name:"student-password",state:t.validateState("password"),"aria-describedby":"input-password",type:"password"},model:{value:t.$v.form.password.$model,callback:function(e){t.$set(t.$v.form.password,"$model",e)},expression:"$v.form.password.$model"}}),t.$v.form.password.required?t._e():a("b-form-invalid-feedback",{attrs:{id:"input-password"}},[t._v(" كلمة المرور مطلوبه ")])],1)],1),a("b-col",{attrs:{lg:"12",md:"12"}},[a("div",{staticClass:"form-footer"},[a("b-button",{staticClass:"login-btn",attrs:{type:"submit",variant:"primary"}},[t._v(" تسجيل الدخول")])],1),a("br"),a("div",[a("span",{staticClass:"createAccount-link"},[t._v("مستخدم جديد؟"),a("b-button",{staticClass:"mb-1 mr-0 pr-1",attrs:{variant:"link"},on:{click:function(e){return t.goToSignup()}}},[t._v("انشاء حساب")])],1)])])],1)],1)],1)],1)},x=[],L=a("1dce"),k=a.n(L),S=a("b5ae"),E={mixins:[L["validationMixin"]],data:function(){return{isLoading:!1,alertCountdown:0,alertType:"",alertText:"",form:{email:null,password:null}}},validations:{form:{email:{required:S["required"],email:S["email"]},password:{required:S["required"]}}},methods:{getAccountData:function(){var t=this,e=function(e){h.dispatch("SET_USERNAME",e.data.first_name+" "+e.data.last_name),t.$router.push({name:"home"}),t.isLoading=!1},a=function(){t.isLoading=!1,t.alertType="danger",t.alertText="حدث خطأ ما ، حاول قريبًا",t.alertCountdown="3",h.commit("SET_TOKEN",null)};Ct("get","/students/profile",!0,null,e,a)},goToSignup:function(){this.$router.push({name:"signup"})},validateState:function(t){var e=this.$v.form[t],a=e.$dirty,s=e.$error;return a?!s:null},countDownChanged:function(t){this.alertCountdown=t},onSubmit:function(){this.$v.form.$touch(),this.$v.form.$anyError||this.login()},login:function(){var t=this;this.isLoading=!0;var e=function(e){h.commit("SET_TOKEN",e.data.access_token),t.getAccountData()},a=function(){t.isLoading=!1,t.alertType="danger",t.alertText="البريد الالكتروني او كلمة المرور غير صحيحة",t.alertCountdown="3"};Ct("post","/students/login",!1,this.form,e,a)}},created:function(){h.getters.authToken&&this.$router.push({name:"home"})}},O=E,q=(a("039a"),a("2877")),P=Object(q["a"])(O,T,x,!1,null,null,null),M=P.exports,V={components:{login:M}},N=V,I=(a("d6db"),Object(q["a"])(N,$,y,!1,null,null,null)),j=I.exports,D=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"login-page signup-page"},[a("div",{staticClass:"container"},[a("div",{staticClass:"panel panel-default login-panel"},[a("div",[a("b-row",[a("b-col",{attrs:{lg:"12",md:"12"}},[a("div",{staticClass:"panel-heading"},[a("h3",[a("strong",[t._v("منصة أ/ عصام سمكة للرياضيات")])]),a("h5",[a("strong",[t._v("ادخل البيانات لتسجيل حسابك")])])])])],1),a("signup")],1),t._v("ل ")])])])},A=[],U=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("b-form",{on:{submit:function(e){return e.stopPropagation(),e.preventDefault(),t.onSubmit(e)}}},[a("b-container",{staticClass:"bv-example-row"},[a("div",{directives:[{name:"show",rawName:"v-show",value:t.isLoading,expression:"isLoading"}],staticClass:"text-center text-danger my-2",class:{"alert-div-padding":t.isLoading}},[a("b-spinner",{staticClass:"align-middle"})],1),t.loginBtnShow?a("div",{class:{"alert-div-padding":t.loginBtnShow}},[a("b-col",{staticClass:"alert-div",attrs:{lg:"12",md:"12"}},[a("b-alert",{attrs:{show:t.alertCountdown,dismissible:"",fade:"",variant:t.alertType},on:{"dismiss-count-down":t.countDownChanged}},[t._v(" "+t._s(t.alertText)+" ")]),a("br"),a("br")],1),a("br"),a("br"),a("b-button",{staticClass:"login-btn",attrs:{variant:"primary"},on:{click:function(e){return t.goToLogin("login")}}},[t._v(" سجل الدخول الآن ")])],1):a("b-row",{directives:[{name:"show",rawName:"v-show",value:!t.isLoading,expression:"!isLoading"}]},[a("b-col",{staticClass:"alert-div",attrs:{lg:"12",md:"12"}},[a("b-alert",{attrs:{show:t.alertCountdown,dismissible:"",fade:"",variant:t.alertType},on:{"dismiss-count-down":t.countDownChanged}},[t._v(" "+t._s(t.alertText)+" ")]),a("br"),a("br")],1),a("br"),a("br"),a("b-col",{attrs:{lg:"6",md:"12"}},[a("b-form-group",{attrs:{id:"group-user-first_name",label:"الاسم الاول","label-for":"user-first_name"}},[a("b-form-input",{attrs:{id:"user-first_name",name:"user-first_name",state:t.validateState("first_name"),"aria-describedby":"input-first_name"},model:{value:t.$v.form.first_name.$model,callback:function(e){t.$set(t.$v.form.first_name,"$model",e)},expression:"$v.form.first_name.$model"}}),a("b-form-invalid-feedback",{attrs:{id:"input-first_name"}},[t._v(" الاسم الاول مطلوب ")])],1)],1),a("b-col",{attrs:{lg:"6",md:"12"}},[a("b-form-group",{attrs:{id:"group-user-last_name",label:"الاسم الثاني","label-for":"user-last_name"}},[a("b-form-input",{attrs:{id:"user-last_name",name:"user-last_name",state:t.validateState("last_name"),"aria-describedby":"input-last_name"},model:{value:t.$v.form.last_name.$model,callback:function(e){t.$set(t.$v.form.last_name,"$model",e)},expression:"$v.form.last_name.$model"}}),a("b-form-invalid-feedback",{attrs:{id:"input-last_name"}},[t._v(" الاسم الثاني مطلوب ")])],1)],1),a("b-col",{attrs:{lg:"12",md:"12"}},[a("b-form-group",{attrs:{id:"group-user-email",label:"البريد الالكتروني","label-for":"user-email"}},[a("b-form-input",{attrs:{id:"user-email",name:"user-email",state:t.validateState("email"),"aria-describedby":"input-email"},model:{value:t.$v.form.email.$model,callback:function(e){t.$set(t.$v.form.email,"$model",e)},expression:"$v.form.email.$model"}}),t.$v.form.email.required?t._e():a("b-form-invalid-feedback",{attrs:{id:"input-email"}},[t._v(" البريد الالكتروني مطلوب ")]),t.$v.form.email.email?t._e():a("b-form-invalid-feedback",{attrs:{id:"input-email"}},[t._v(" البريد الالكتروني غير صالح ")])],1)],1),a("b-col",{attrs:{lg:"12",md:"12"}},[a("b-form-group",{attrs:{id:"group-user-password",label:"كلمة المرور","label-for":"user-password"}},[a("b-form-input",{attrs:{id:"user-password",name:"user-password",state:t.validateState("password"),"aria-describedby":"input-password",type:"password"},model:{value:t.$v.form.password.$model,callback:function(e){t.$set(t.$v.form.password,"$model",e)},expression:"$v.form.password.$model"}}),t.$v.form.password.required?t._e():a("b-form-invalid-feedback",{attrs:{id:"input-password"}},[t._v(" كلمة المرور مطلوبه ")])],1)],1),a("b-col",{attrs:{lg:"12",md:"12"}},[a("div",{staticClass:"form-footer"},[a("b-button",{staticClass:"login-btn",attrs:{type:"submit",variant:"primary"}},[t._v(" تسجيل ")])],1),a("br"),a("div",[a("span",{staticClass:"createAccount-link"},[t._v("لديك حساب؟"),a("b-button",{staticClass:"mb-1 mr-0 pr-1",attrs:{variant:"link"},on:{click:function(e){return t.goToLogin("login")}}},[t._v("سجل الدخول لحسابك")])],1)])])],1)],1)],1)],1)},z=[],B={mixins:[L["validationMixin"]],data:function(){return{isLoading:!1,loginBtnShow:!1,alertCountdown:0,alertType:"",alertText:"",form:{first_name:null,last_name:null,email:null,password:null}}},validations:{form:{first_name:{required:S["required"]},last_name:{required:S["required"]},email:{required:S["required"],email:S["email"]},password:{required:S["required"]}}},methods:{goToLogin:function(){this.$router.push({name:"login"})},validateState:function(t){var e=this.$v.form[t],a=e.$dirty,s=e.$error;return a?!s:null},countDownChanged:function(t){this.alertCountdown=t},onSubmit:function(){this.$v.form.$touch(),this.$v.form.$anyError||this.signup()},signup:function(){var t=this;this.isLoading=!0;var e=function(){t.alertType="success",t.alertText="تم انشاء الحساب بنجاح ",t.alertCountdown="3",t.isLoading=!1,h.commit("SET_TOKEN",null),t.loginBtnShow=!0},a=function(e){var a="حدث خطأ ما ، حاول قريبًا";"The email has already been taken."==e.response.data.email&&(a="البريد الالكتروني مستخدم من قبل"),t.isLoading=!1,t.alertType="danger",t.alertText=a,t.alertCountdown="3"};Ct("post","/students/create",!1,this.form,e,a)}},created:function(){h.getters.authToken&&this.$router.push({name:"home"})}},R=B,F=(a("8d1b"),Object(q["a"])(R,U,z,!1,null,null,null)),G=F.exports,H={components:{signup:G}},K=H,Y=(a("e42b"),Object(q["a"])(K,D,A,!1,null,null,null)),J=Y.exports,Q=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"page-layout videos"},[a("b-alert",{attrs:{show:t.alertCountdown,dismissible:"",fade:"",variant:t.alertType},on:{"dismiss-count-down":t.countDownChanged}},[t._v(" "+t._s(t.alertText)+" ")]),a("div",{staticClass:"page-header"}),a("div",{directives:[{name:"show",rawName:"v-show",value:t.pageIsLoading,expression:"pageIsLoading"}],staticClass:"text-center text-danger my-2"},[a("b-spinner",{staticClass:"align-middle"})],1),a("div",{directives:[{name:"show",rawName:"v-show",value:!t.pageIsLoading,expression:"!pageIsLoading"}],staticClass:"row asd"},[a("div",{staticClass:"col-md-12"},[a("div",{},[a("div",{},[a("div",{staticClass:"table-responsive"},[a("table",{staticClass:"table table-bordered table-hover"},[t._m(0),a("tbody",[0==t.videos.length&&t.isLoading?a("tr",{staticClass:"no-data-row"},[a("td",{attrs:{colspan:"7"}},[a("div",{staticClass:"text-center >text-danger my-2"},[a("b-spinner",{staticClass:"align-middle"})],1)])]):t._e(),0!=t.videos.length||t.isLoading?t._e():a("tr",{staticClass:"no-data-row"},[a("td",{attrs:{colspan:"7"}},[t._v(" لا يوجد معلومات ")])]),t._l(t.videos,(function(e,s){return a("tr",{key:s},[a("td",[t._v(" "+t._s(++s)+" ")]),a("td",[a("div",{staticClass:"tbl-data"},[t._v(t._s(e.name))])]),a("td",[a("span",{staticClass:"tbl-data"},[t._v(t._s(e.description))])]),a("td",{attrs:{width:"5%"}},[a("div",{staticClass:"form-group row-option"},[a("b-button",{staticClass:"btn btn-primary options-admin-btn request-options-admin-btn",attrs:{type:"button",size:"sm",variant:"primary"},on:{click:function(a){return t.playVideo(e)}}},[a("i",{staticClass:"fas fa-play pl-1"}),t._v(" مشاهدة")])],1)]),a("td",{attrs:{width:"5%"}},[a("div",{staticClass:"form-group row-option"},[a("b-button",{staticClass:"btn btn-primary options-admin-btn request-options-admin-btn",attrs:{type:"button",size:"sm",variant:"outline-primary"},on:{click:function(a){return t.openSendRequestModal(e)}}},[a("i",{staticClass:"fas fa-join"}),t._v(" ارسال طلب")])],1)])])}))],2)])])])])])]),a("b-modal",{attrs:{title:"طلب مشاهدة درس"},scopedSlots:t._u([{key:"modal-footer",fn:function(){return[a("b-button",{attrs:{size:"sm",variant:"secondary"},on:{click:function(e){t.requestVideoModal=!1}}},[t._v(" الغاء ")]),a("b-button",{attrs:{size:"sm",variant:"primary"},on:{click:function(e){return t.sendVideoRequest()}}},[t._v(" ارسل طلب للادارة ")])]},proxy:!0}]),model:{value:t.requestVideoModal,callback:function(e){t.requestVideoModal=e},expression:"requestVideoModal"}},[a("p",{staticClass:"my-4"},[t._v("هل تريد مشاهدة هذا الدرس؟")])])],1)},W=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("thead",[a("tr",[a("th",{attrs:{width:"5%"}},[a("span",{staticClass:"tbl-data"},[t._v("#")])]),a("th",[a("div",{staticClass:"tbl-data"},[t._v("عنوان الدرس")])]),a("th",{attrs:{colspan:"3"}},[a("span",{staticClass:"tbl-data"},[t._v("الوصف")])])])])}],X={name:"Home",data:function(){return{videos:[],isLoading:!0,pageIsLoading:!1,alertType:"",alertText:"",alertCountdown:0,showDismissibleAlert:!1,requestVideoModal:!1,sendPasswordToShowModal:!1,currentVideo:{}}},methods:{openSendRequestModal:function(t){t.id&&(this.requestVideoModal=!0,this.currentVideo=t)},playVideo:function(t){t.id&&this.$router.push({name:"lesson",params:{lessonID:t.id}})},sendVideoRequest:function(){var t=this;if(this.pageIsLoading=!0,this.requestVideoModal=!1,this.currentVideo.id){this.isLoading=!0;var e=function(e){t.requestVideoModal=!1,t.alertType="success",t.alertText="تم ارسال طلب . انتظر كلمة المرور من الادارة",t.alertCountdown="3",t.isLoading=!1,t.pageIsLoading=!1},a=function(e){t.requestVideoModal=!1,t.isLoading=!1,t.pageIsLoading=!1,t.alertType="danger",t.alertText=e.response.data.message,t.alertCountdown="3"};Ct("post","/students/request/media",!0,{media:this.currentVideo.id},e,a)}},loadData:function(){var t=this;this.isLoading=!0,this.pageIsLoading=!0;var e=function(e){t.videos=e.data,t.videos.push(e.data[0]),t.videos.push(e.data[0]),t.videos.push(e.data[0]),t.videos.push(e.data[0]),t.videos.push(e.data[0]),t.videos.push(e.data[0]),t.videos.push(e.data[0]),t.videos.push(e.data[0]),t.videos.push(e.data[0]),t.videos.push(e.data[0]),t.videos.push(e.data[0]),t.videos.push(e.data[0]),t.videos.push(e.data[0]),t.videos.push(e.data[0]),t.videos.push(e.data[0]),t.videos.push(e.data[0]),t.videos.push(e.data[0]),t.videos.push(e.data[0]),t.videos.push(e.data[0]),t.videos.push(e.data[0]),t.isLoading=!1,t.pageIsLoading=!1},a=function(){t.isLoading=!1,t.pageIsLoading=!1,t.alertType="danger",t.alertText="خطأ .. في البريد او كلمه المرور",t.alertCountdown="3"};Ct("get","/medias",!0,null,e,a)},countDownChanged:function(t){this.alertCountdown=t}},created:function(){this.loadData()}},Z=X,tt=(a("9c7f"),Object(q["a"])(Z,Q,W,!1,null,"061afdce",null)),et=tt.exports,at=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"page-layout videos"},[a("b-alert",{attrs:{show:t.alertCountdown,dismissible:"",fade:"",variant:t.alertType},on:{"dismiss-count-down":t.countDownChanged}},[t._v(" "+t._s(t.alertText)+" ")]),a("div",{staticClass:"page-header"}),a("div",{staticClass:"row"},[a("div",{staticClass:"col-md-12"},[a("div",{},[a("div",{directives:[{name:"show",rawName:"v-show",value:t.isLoading,expression:"isLoading"}],staticClass:"text-center text-danger my-2"},[a("b-spinner",{staticClass:"align-middle"})],1),t.passwordFormShow?a("div",{directives:[{name:"show",rawName:"v-show",value:!t.isLoading,expression:"!isLoading"}]},[a("b-form",{on:{submit:function(e){return e.stopPropagation(),e.preventDefault(),t.onSubmit(e)}}},[a("b-form-group",{attrs:{id:"group-student-password",label:"كلمة مرور الدرس","label-for":"student-password"}},[a("b-form-input",{attrs:{id:"student-password",name:"student-password",state:t.validateState("password"),"aria-describedby":"input-password",type:"password"},model:{value:t.$v.lessonPassword.password.$model,callback:function(e){t.$set(t.$v.lessonPassword.password,"$model",e)},expression:"$v.lessonPassword.password.$model"}}),t.$v.lessonPassword.required?t._e():a("b-form-invalid-feedback",{attrs:{id:"input-password"}},[t._v(" كلمة المرور مطلوبة ")])],1),a("b-button",{staticClass:"login-btn",attrs:{size:"sm",type:"submit",variant:"primary"}},[t._v("دخول الدرس")])],1),a("br")],1):a("div",[a("vue-core-video-player",{attrs:{src:t.lessonPath}})],1)])])])],1)},st=[],nt={name:"Home",data:function(){return{videos:[],isLoading:!1,alertType:"",alertText:"",passwordFormShow:!0,alertCountdown:0,currentVideo:{},lessonPassword:{password:null},lessonPath:null}},validations:{lessonPassword:{password:{required:S["required"]}}},methods:{onSubmit:function(){this.$v.lessonPassword.$touch(),this.$v.lessonPassword.$anyError||this.submitPasswordOfLesson()},submitPasswordOfLesson:function(){var t=this;this.isLoading=!0;var e=function(e){t.isLoading=!1,t.passwordFormShow=!1,t.lessonPath="https://api.mressamsamaka.com/storage/"+e.data.path},a=function(e){var a="حدث خطأ ما ، حاول قريبًا";400==e.response.status&&(a=e.response.data.message),t.isLoading=!1,t.alertType="danger",t.alertText=a,t.alertCountdown="3"};Ct("post","/students/request/media/confirm",!0,{media:this.$route.params.lessonID,password:this.lessonPassword.password},e,a)},validateState:function(t){var e=this.$v.lessonPassword[t],a=e.$dirty,s=e.$error;return a?!s:null},countDownChanged:function(t){this.alertCountdown=t}},created:function(){console.log("https://api.mressamsamaka.com/storage/")}},ot=nt,it=(a("8be0"),Object(q["a"])(ot,at,st,!1,null,"956c9a9c",null)),rt=it.exports,lt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"notFound"},[a("h1",[t._v("404")]),a("p",[t._v("الصفحة غير موجودة !")]),a("b-button",{attrs:{variant:"secondary"},on:{click:function(e){return t.goToHome()}}},[t._v("العودة للصفحة الرئيسية")])],1)},dt=[],ut={methods:{goToHome:function(){this.$router.push({name:"home"})}}},ct=ut,mt=(a("1e0d"),Object(q["a"])(ct,lt,dt,!1,null,"6ffa2f40",null)),pt=mt.exports,vt=function(t,e,a){h.getters.authToken?a():(h.commit("LOGOUT"),a({name:"login"}))},ft=function(t,e,a){h.getters.authToken?("admin"!=h.getters.accoutType&&a({name:"home"}),a()):(h.commit("LOGOUT"),a({name:"login"}))},bt=function(t,e,a){h.getters.authToken?("teacher"!=h.getters.accoutType&&a({name:"home"}),a()):(h.commit("LOGOUT"),a({name:"login"}))},gt={isLoggedIn:vt,isAdminLoggedIn:ft,isTeacherLoggedIn:bt};s["default"].use(C["a"]);var ht=[{path:"/",name:"home",component:et,beforeEnter:gt.isLoggedIn},{path:"/lesson/:lessonID",name:"lesson",component:rt,beforeEnter:gt.isLoggedIn},{path:"/login",name:"login",component:j},{path:"/signup",name:"signup",component:J},{path:"*",name:"NotFound",component:pt,beforeEnter:gt.isLoggedIn}],wt=new C["a"]({mode:"history",routes:ht}),_t=wt,Ct=function(t,e,a){var s=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null,n=arguments.length>4&&void 0!==arguments[4]?arguments[4]:null,o=arguments.length>5&&void 0!==arguments[5]?arguments[5]:null,i=arguments.length>6&&void 0!==arguments[6]&&arguments[6],r=null;a&&(r={headers:{authorization:"Bearer "+h.getters.authToken}},i&&(r["responseType"]="arraybuffer"));var l={get:_.a.get,post:_.a.post,delete:_.a.delete,put:_.a.put,patch:_.a.patch},d="https://api.mressamsamaka.com/api"+e,u=null;u=s?l[t](d,s,r):l[t](d,r),u.then((function(t){n&&n(t)})).catch((function(t){o&&(401==t.response.status&&(h.commit("LOGOUT"),_t.push({name:"login"})),o(t))}))},$t={data:function(){return{isVisible:!1,username:null}},components:{},watch:{$route:function(t,e){this.username=this.$store.getters.username}},methods:{navToogle:function(){this.isVisible=!this.isVisible},logout:function(){var t=this,e=function(){h.commit("LOGOUT"),t.$router.push({name:"login"})},a=function(){};Ct("get","/students/logout",!0,null,e,a)}},created:function(){this.username=h.getters.username?h.getters.username:"طالب"}},yt=$t,Tt=(a("2bbb"),Object(q["a"])(yt,i,r,!1,null,"39d82819",null)),xt=Tt.exports,Lt={data:function(){return{form:"",accountType:null}},components:{navBar:xt},created:function(){}},kt=Lt,St=(a("d324"),Object(q["a"])(kt,n,o,!1,null,"3f188b5d",null)),Et=St.exports,Ot=a("5f5b"),qt=a("b1e0"),Pt=(a("f9e3"),a("2dd8"),a("dbc8"),a("0d2f"),a("42ab")),Mt=a.n(Pt);s["default"].use(l["a"]),s["default"].use(Mt.a),s["default"].use(k.a),s["default"].use(Ot["a"],qt["a"],_.a),s["default"].config.productionTip=!1,new s["default"]({router:_t,store:h,render:function(t){return t(Et)}}).$mount("#app")},7174:function(t,e,a){},"8be0":function(t,e,a){"use strict";var s=a("41c4"),n=a.n(s);n.a},"8d1b":function(t,e,a){"use strict";var s=a("2dad"),n=a.n(s);n.a},"9c7f":function(t,e,a){"use strict";var s=a("a551"),n=a.n(s);n.a},a551:function(t,e,a){},a879:function(t,e,a){},cff3:function(t,e,a){},d324:function(t,e,a){"use strict";var s=a("a879"),n=a.n(s);n.a},d6db:function(t,e,a){"use strict";var s=a("e67a"),n=a.n(s);n.a},dbc8:function(t,e,a){},e42b:function(t,e,a){"use strict";var s=a("cff3"),n=a.n(s);n.a},e67a:function(t,e,a){}});
//# sourceMappingURL=app.8e61293a.js.map