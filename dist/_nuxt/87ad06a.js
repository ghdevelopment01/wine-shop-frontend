(window.webpackJsonp=window.webpackJsonp||[]).push([[60],{1012:function(t,e,r){var content=r(1037);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(56).default)("6900d144",content,!0,{sourceMap:!1})},1013:function(t,e,r){var content=r(1039);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(56).default)("e7cbd086",content,!0,{sourceMap:!1})},1014:function(t,e,r){var content=r(1041);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(56).default)("05c2e72c",content,!0,{sourceMap:!1})},1036:function(t,e,r){"use strict";r(1012)},1037:function(t,e,r){var o=r(55)(!1);o.push([t.i,".pandding-Ticket-dropdown[data-v-65b54945]{color:#ffa800;background:#ffe6b3}.open-Ticket-dropdown[data-v-65b54945],.pandding-Ticket-dropdown[data-v-65b54945]{border-radius:4px;font-size:10px;padding:5px 10px}.open-Ticket-dropdown[data-v-65b54945]{color:#2966f0;background:#b7ccfa}.success-Ticket-dropdown[data-v-65b54945]{border-radius:4px;font-size:10px;padding:5px 10px;color:#29a329;background:#70db70}.notvarified-Ticket-dropdown[data-v-65b54945]{border-radius:4px;font-size:10px;padding:5px 10px;color:red;background:#f99}",""]),t.exports=o},1038:function(t,e,r){"use strict";r(1013)},1039:function(t,e,r){var o=r(55)(!1);o.push([t.i,".ImgUrl[data-v-7129c656]{color:#00f!important;cursor:pointer!important;text-decoration:underline!important}.pandding-Ticket-dropdown[data-v-7129c656]{color:#ffa800;background:#ffe6b3}.open-Ticket-dropdown[data-v-7129c656],.pandding-Ticket-dropdown[data-v-7129c656]{border-radius:4px;display:flex;justify-content:center;font-size:10px;padding:5px 10px;margin:0 auto}.open-Ticket-dropdown[data-v-7129c656]{color:#2966f0;background:#b7ccfa}.success-Ticket-dropdown[data-v-7129c656]{color:#29a329;background:#70db70}.notvarified-Ticket-dropdown[data-v-7129c656],.success-Ticket-dropdown[data-v-7129c656]{border-radius:4px;display:flex;justify-content:center;font-size:10px;padding:5px 10px;margin:0 auto}.notvarified-Ticket-dropdown[data-v-7129c656]{color:red;background:#f99}.pagination-custome ul[data-v-7129c656]{margin-bottom:0!important;padding-right:0!important}.pagination-custome ul li[data-v-7129c656]:before{display:inline-block!important}",""]),t.exports=o},1040:function(t,e,r){"use strict";r(1014)},1041:function(t,e,r){var o=r(55)(!1);o.push([t.i,".pagination-self ul li:before{display:none!important}",""]),t.exports=o},1050:function(t,e,r){"use strict";r.r(e);r(8),r(7),r(5),r(4),r(9),r(6),r(10);var o=r(1),n=(r(28),r(214)),d=r(954),l=r(955),c=(r(18),r(26)),v={data:function(){return{image:"",previewimg:{preview:null},user:{first_name:"",last_name:"",phone:"",email:"",address:"",city:"",state:"",zipcode:"",products:[],total:"",total_product:""},isPaymentBank:!1,isLogin:!1,paypal:{sandbox:"Your_Sendbox_Key"},payment:!1,environment:"sandbox",button_style:{label:"checkout",size:"medium",shape:"pill",color:"blue"},amtchar:""}},props:{value:{type:Boolean,required:!0},order:{default:function(){return[]}}},computed:{modalShow:{get:function(){return this.value},set:function(t){this.$emit("input",t)}}},methods:{getStatus:function(t,e){return"order"==t?1==e?"Pendding":2==e?"Confirm":"Success":1==e?"Not Verified":"Verified"},getVariant:function(t,e){return"order"==t?1==e?"pandding-Ticket-dropdown":2==e?"open-Ticket-dropdown":"success-Ticket-dropdown":1==e?"notvarified-Ticket-dropdown":"success-Ticket-dropdown"}}},f=(r(1036),r(34)),m=Object(f.a)(v,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("section",[r("b-modal",{attrs:{size:"lg"},model:{value:t.modalShow,callback:function(e){t.modalShow=e},expression:"modalShow"}},[r("div",{staticClass:"col-lg-12 col-sm-12 col-xs-12"},[r("div",{staticClass:"checkout-details"},[r("div",{staticClass:"order-box",staticStyle:{"margin-bottom":"0px !important"}},[r("div",{staticClass:"title-box"},[r("div",[t._v("\r\n                            Details\r\n                        ")])]),t._v(" "),r("ul",{staticClass:"qty"},[r("li",{staticClass:"d-flex justify-content-between"},[r("div",{staticStyle:{"font-size":"18px","font-weight":"bold"}},[t._v("Order Id : ")]),t._v(" "),r("span",{staticStyle:{"word-break":"break-all"}},[t._v(t._s(t.order.order_id))])])]),t._v(" "),r("ul",{staticClass:"qty"},[r("li",{staticClass:"d-flex justify-content-between"},[r("div",{staticStyle:{"font-size":"18px","font-weight":"bold"}},[t._v("Order Status : ")]),t._v(" "),r("span",{class:t.getVariant("order",t.order.order_status)},[t._v(t._s(t.getStatus("order",t.order.order_status)))])])]),t._v(" "),r("ul",{staticClass:"qty"},[r("li",{staticClass:"d-flex justify-content-between"},[r("div",{staticStyle:{"font-size":"18px","font-weight":"bold"}},[t._v("Payment Status : ")]),t._v(" "),r("span",{class:t.getVariant("payment",t.order.payment_status)},[t._v(t._s(t.getStatus("payment",t.order.payment_status)))])])]),t._v(" "),r("ul",{staticClass:"qty"},[r("li",{staticClass:"d-flex justify-content-between"},[r("div",{staticStyle:{"font-size":"18px","font-weight":"bold"}},[t._v("Total : ")]),t._v(" "),r("span",[t._v("RM "+t._s(t.order.total))])])]),t._v(" "),r("ul",{staticClass:"qty",staticStyle:{"margin-bottom":"0px !important"}},[r("li",{staticClass:"d-flex justify-content-between"},[r("div",{staticStyle:{"font-size":"18px","font-weight":"bold"}},[t._v("Created at : ")]),t._v(" "),r("span",{staticStyle:{"word-break":"break-all"}},[t._v(t._s(t.order.created_at))])])])])])])])],1)}),[],!1,null,"65b54945",null).exports,w=r(19);function h(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function _(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?h(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):h(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var y={components:{ordershow:m},middleware:["login"],props:["categoryType"],data:function(){return{openModel:!1,orderData:[],tablefields:[{key:"order_id",label:"Order id",sortable:!0},{key:"order_status",label:"Order Status",sortable:!1},{key:"payment_status",label:"Payment Status",sortable:!0},{key:"total",label:"Total",sortable:!0},{key:"file",label:"Image",sortable:!0},{key:"created_at",label:"Order Date",sortable:!1}],filter:null,totalRows:1,currentPage:1,perPage:10,pageOptions:[5,10,15]}},created:function(){this.$store.dispatch("order/getOrderList")},computed:_(_({},Object(c.c)({orders:"order/getOrdersList"})),{},{getOrdersList:function(){return this.orders},sortOptions:function(){return this.tablefields.filter((function(t){return t.sortable})).map((function(t){return{text:t.label,value:t.key}}))},getOrders:function(){return this.totalRows=this.orders.total,this.orders}}),mounted:function(){this.totalRows=this.orders.length},methods:{onFiltered:function(t){this.totalRows=t.length,this.currentPage=this.getOrders.current_page},sawData:function(t){this.openModel=!0,this.orderData=t},sawImg:function(t){window.open(w.baseUrl+"orders/"+t)},getStatus:function(t,e){return"order"==t?1==e?"Pendding":2==e?"Confirm":"Success":1==e?"Not Verified":"Verified"},getVariant:function(t,e){return"order"==t?1==e?"pandding-Ticket-dropdown":2==e?"open-Ticket-dropdown":"success-Ticket-dropdown":1==e?"notvarified-Ticket-dropdown":"success-Ticket-dropdown"},updateData:function(t){this.$store.dispatch("order/getOrderList",t)}}},C=(r(1038),r(1040),Object(f.a)(y,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("div",{staticClass:"container-fluid"},[r("div",{staticClass:"row"},[r("div",{staticClass:"col-md-12"},[r("div",{staticClass:"card"},[t._m(0),t._v(" "),r("div",{staticClass:"card-body"},[r("div",{staticClass:"table-responsive datatable-vue"},[r("b-table",{attrs:{"show-empty":"",stacked:"md",striped:"",hover:"",id:"my-table","head-variant":"light",bordered:"",items:t.getOrdersList.data,fields:t.tablefields,filter:t.filter,"current-page":t.currentPage,"per-page":t.perPage},on:{filtered:t.onFiltered},scopedSlots:t._u([{key:"cell(order_id)",fn:function(e){return[r("div",{staticClass:"ImgUrl",attrs:{href:"javascript:void(0)"},on:{click:function(r){return t.sawData(e.item)}}},[t._v("\n                    "+t._s(e.item.order_id)+"\n                  ")])]}},{key:"cell(order_status)",fn:function(e){return[r("div",{attrs:{href:"javascript:void(0)"},on:{click:function(r){return t.sawImg(e.item)}}},[r("span",{class:t.getVariant("order",e.item.order_status)},[t._v("\n                      "+t._s(t.getStatus("order",e.item.order_status))+"\n                    ")])])]}},{key:"cell(payment_status)",fn:function(e){return[r("div",{attrs:{href:"javascript:void(0)"},on:{click:function(r){return t.sawImg(e.item)}}},[r("div",{class:t.getVariant("payment",e.item.payment_status)},[t._v("\n                      "+t._s(t.getStatus("payment",e.item.payment_status))+"\n                    ")])])]}},{key:"cell(file)",fn:function(e){return[r("a",{staticClass:"ImgUrl",attrs:{href:"javascript:void(0)"},on:{click:function(r){return t.sawImg(e.item.file)}}},[t._v("\n                    "+t._s(e.item.file)+"\n                  ")])]}}])})],1),t._v(" "),t.getOrdersList?r("b-col",{staticClass:"pagination-self my-1 p-0 pagination-justify",attrs:{md:"12"}},[r("b-pagination",{staticClass:"mt-4",attrs:{"total-rows":t.getOrdersList.total,"per-page":t.getOrdersList.per_page},on:{input:t.updateData},model:{value:t.getOrdersList.current_page,callback:function(e){t.$set(t.getOrdersList,"current_page",e)},expression:"getOrdersList.current_page"}})],1):t._e(),t._v(" "),r("ordershow",{attrs:{order:t.orderData},model:{value:t.openModel,callback:function(e){t.openModel=e},expression:"openModel"}})],1)])])])])])}),[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"card-header"},[r("h5",[t._v("Order Detail")])])}],!1,null,"7129c656",null).exports),x=r(959);function k(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function O(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?k(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):k(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var S={props:["categoryType"],middleware:["login"],data:function(){return{password:{currentpassword:"",newpassword:"",confirmpassword:""},name:"",nameState:null,submittedNames:[],changePasswordTab:!1}},components:{Header:n.a,Footer:d.a,Breadcrumbs:l.a,orderdetails:C,ValidationProvider:x.b,ValidationObserver:x.a},computed:O({},Object(c.e)("admin_adminauth",["user"])),methods:O(O(O({},Object(c.b)("order",["getOrderList"])),Object(c.b)("admin_adminauth",["changePassword"])),{},{openChangePassword:function(){console.log(this.$refs.changePass,"-------")},updatePassword:function(){var t=this;this.password.newpassword==this.password.confirmpassword?this.changePassword(this.password).then((function(e){e.data.status&&(t.$toast.success("Change Password Succesfully........."),t.$router.push("/page/account/login"))})).catch((function(t){})):this.$swal({icon:"error",title:"Oops...",text:"New Paasword and Confirm password not match"})},checkFormValidity:function(){var t=this.$refs.form.checkValidity();return this.nameState=t,t},resetModal:function(){this.name="",this.nameState=null},handleOk:function(t){t.preventDefault(),this.handleSubmit()},handleSubmit:function(){var t=this;this.checkFormValidity()&&(this.submittedNames.push(this.name),this.$nextTick((function(){t.$bvModal.hide("modal-prevent-closing")})))}}),created:function(){this.getOrderList()}},P=Object(f.a)(S,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("Breadcrumbs",{attrs:{title:"Dashboard"}}),t._v(" "),t.user&&t.user.user?r("section",{staticClass:"section-b-space",staticStyle:{"background-color":"#ffffff"}},[r("div",{staticClass:"container"},[r("div",{staticClass:"row"},[r("b-card",{class:"dashboardtab",staticStyle:{"box-shadow":"none !important"},attrs:{"no-body":""}},[r("b-tabs",{attrs:{pills:"",card:"",vertical:""}},[r("b-tab",{attrs:{title:"Account Info",active:""}},[r("b-card-text",[r("div",{staticClass:"dashboard-right"},[r("div",{staticClass:"dashboard"},[r("div",{staticClass:"page-title"},[r("h2",[t._v("My Dashboard")])]),t._v(" "),r("div",{staticClass:"welcome-msg"},[r("p",[t._v("Hello, "+t._s(t.user.user.name)+" !")]),t._v(" "),r("p",[t._v("\n                        From your My Account Dashboard you have the ability to\n                        view a snapshot of your recent account activity and\n                        update your account information. Select a link below\n                        to view or edit information.\n                      ")])]),t._v(" "),r("div",{staticClass:"box-account box-info"},[r("div",{staticClass:"box-head"},[r("h2",[t._v("Account Information")])]),t._v(" "),r("div",{staticClass:"row"},[r("div",{staticClass:"col-sm-6"},[r("div",{staticClass:"box"},[r("div",{staticClass:"box-title"},[r("h3",[t._v("Account Information")]),t._v(" "),r("a",{directives:[{name:"b-modal",rawName:"v-b-modal.modal-prevent-closing",modifiers:{"modal-prevent-closing":!0}}],attrs:{href:"javascript:void(0)"}},[t._v("Edit")])]),t._v(" "),r("div",{staticClass:"box-content"},[r("h6",[t._v(t._s(t.user.user.name))]),t._v(" "),r("h6",[t._v(t._s(t.user.user.email))])]),t._v(" "),r("b-modal",{ref:"modal",attrs:{id:"modal-prevent-closing",title:"Submit Your Name"},on:{show:t.resetModal,hidden:t.resetModal,ok:t.handleOk}},[r("form",{ref:"form",on:{submit:function(e){return e.stopPropagation(),e.preventDefault(),t.handleSubmit.apply(null,arguments)}}},[r("b-form-group",{attrs:{label:"Name","label-for":"name-input","invalid-feedback":"Name is required",state:t.nameState}},[r("b-form-input",{attrs:{id:"name-input",state:t.nameState,required:""},model:{value:t.name,callback:function(e){t.name=e},expression:"name"}})],1)],1)])],1)])])])])])])],1),t._v(" "),r("b-tab",{attrs:{title:"My Orders"}},[r("b-card-text",[r("div",{staticClass:"dashboard-right"},[r("div",{staticClass:"dashboard"},[r("div",{staticClass:"page-title"},[r("h2",[t._v("My orders")])]),t._v(" "),r("orderdetails")],1)])])],1),t._v(" "),r("b-tab",{ref:"changePass",attrs:{title:"Change Password"}},[r("b-card-text",[r("div",{staticClass:"dashboard-right"},[r("div",{staticClass:"dashboard"},[r("div",{staticClass:"page-title mb-5"},[r("h2",[t._v("Change password")])]),t._v(" "),r("div",{staticClass:"card-body"},[r("ul",{staticClass:"nav nav-tabs tab-coupon mb-0",attrs:{id:"top-tab",role:"tablist"}},[r("div",{staticClass:"tab-content",attrs:{id:"top-tabContent"}},[r("b-card-text",[r("div",{staticClass:"tab-pane fade show active",attrs:{id:"top-profile",role:"tabpanel","aria-labelledby":"top-profile-tab"}},[r("ValidationObserver",{scopedSlots:t._u([{key:"default",fn:function(e){var o=e.invalid;return[r("div",{staticClass:"form"},[r("ValidationProvider",{attrs:{rules:"required",name:"currentpassword"},scopedSlots:t._u([{key:"default",fn:function(e){var o=e.errors;return[r("div",{staticClass:"form-group mb-3 row"},[r("h5",{staticClass:"f-w-600 col-xl-4 col-sm-4 mb-0",attrs:{for:"validationCustom01"}},[t._v("\n                                        Current Password :\n                                      ")]),t._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:t.password.currentpassword,expression:"password.currentpassword"}],staticClass:"form-control col-xl-6 col-sm-7",attrs:{name:"currentpassword",id:"validationCustom01",type:"password"},domProps:{value:t.password.currentpassword},on:{input:function(e){e.target.composing||t.$set(t.password,"currentpassword",e.target.value)}}}),t._v(" "),r("div",{staticClass:"\n                                          col-xl-8 col-sm-7\n                                          p-0\n                                          ml-0\n                                          validation\n                                        "},[r("span",{staticClass:"validate-error"},[t._v(t._s(o[0]))])])])]}}],null,!0)}),t._v(" "),r("ValidationProvider",{attrs:{rules:"required",name:"newpassword"},scopedSlots:t._u([{key:"default",fn:function(e){var o=e.errors;return[r("div",{staticClass:"form-group mb-3 row"},[r("h5",{staticClass:"f-w-600 col-xl-4 col-sm-4 mb-0",attrs:{for:"validationCustom01"}},[t._v("\n                                        Change Password :\n                                      ")]),t._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:t.password.newpassword,expression:"password.newpassword"}],staticClass:"form-control col-xl-6 col-sm-7",attrs:{name:"newpassword",id:"validationCustom01",type:"password"},domProps:{value:t.password.newpassword},on:{input:function(e){e.target.composing||t.$set(t.password,"newpassword",e.target.value)}}}),t._v(" "),r("div",{staticClass:"\n                                          col-xl-8 col-sm-7\n                                          p-0\n                                          ml-0\n                                          validation\n                                        "},[r("span",{staticClass:"validate-error"},[t._v(t._s(o[0]))])])])]}}],null,!0)}),t._v(" "),r("ValidationProvider",{attrs:{rules:"required",name:"confirmpassword"},scopedSlots:t._u([{key:"default",fn:function(e){var o=e.errors;return[r("div",{staticClass:"form-group mb-3 row"},[r("h5",{staticClass:"f-w-600 col-xl-4 col-sm-4 mb-0",attrs:{for:"validationCustom01"}},[t._v("\n                                        Confirm Password :\n                                      ")]),t._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:t.password.confirmpassword,expression:"password.confirmpassword"}],staticClass:"form-control col-xl-6 col-sm-7",attrs:{name:"confirmpassword",id:"validationCustom01",type:"password"},domProps:{value:t.password.confirmpassword},on:{input:function(e){e.target.composing||t.$set(t.password,"confirmpassword",e.target.value)}}}),t._v(" "),r("div",{staticClass:"\n                                          col-xl-8 col-sm-7\n                                          p-0\n                                          ml-0\n                                          validation\n                                        "},[r("span",{staticClass:"validate-error"},[t._v(t._s(o[0]))])])])]}}],null,!0)}),t._v(" "),r("div",{staticStyle:{display:"flex","justify-content":"flex-end",width:"448px"}},[r("b-button",{staticStyle:{margin:"25px"},attrs:{disabled:o},on:{click:function(e){return t.updatePassword()}}},[t._v("Update")])],1)],1)]}}],null,!1,999315304)})],1)])],1)])])])])])],1)],1)],1)],1)])]):t._e(),t._v(" "),r("Footer")],1)}),[],!1,null,null,null);e.default=P.exports},954:function(t,e,r){"use strict";var o={},n=r(34),component=Object(n.a)(o,(function(){var t=this.$createElement;return(this._self._c||t)("div")}),[],!1,null,null,null);e.a=component.exports},955:function(t,e,r){"use strict";var o={props:["title"]},n=r(34),component=Object(n.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("div",{staticClass:"breadcrumb-section"},[r("div",{staticClass:"container"},[r("div",{staticClass:"row"},[r("div",{staticClass:"col-sm-6"},[r("div",{staticClass:"page-title"},[r("h2",[t._v(t._s(t.title))])])]),t._v(" "),r("div",{staticClass:"col-sm-6"},[r("nav",{staticClass:"theme-breadcrumb",attrs:{"aria-label":"breadcrumb"}},[r("ol",{staticClass:"breadcrumb"},[r("li",{staticClass:"breadcrumb-item"},[r("nuxt-link",{attrs:{to:{path:"/"}}},[t._v("Home")])],1),t._v(" "),t.title?r("li",{staticClass:"breadcrumb-item active"},[t._v(t._s(t.title))]):t._e()])])])])])])])}),[],!1,null,null,null);e.a=component.exports}}]);