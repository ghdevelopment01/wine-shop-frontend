(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{1060:function(t,e,l){"use strict";l.r(e);var r={components:{layout:l(956).a},props:["categoryType"],methods:{onFileChange:function(t){var e=new FileReader;e.onload=function(){document.getElementById("sawImg").src=e.result},e.readAsDataURL(t.target.files[0])}}},o=l(34),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("layout",{scopedSlots:t._u([{key:"content",fn:function(){return[r("div",[r("div",{staticClass:"container-fluid"}),t._v(" "),r("div",{staticClass:"col-md-12"},[r("div",{staticClass:"card"},[r("div",{staticClass:"card-header d-flex justify-content-between align-items-center"},[r("h5",[t._v("Edit Profile")])])])]),t._v(" "),r("div",{staticClass:"container-fluid"},[r("div",{staticClass:"row"},[r("div",{staticClass:"col-xl-4"},[r("div",{staticClass:"card",staticStyle:{height:"100% !important"}},[r("div",{staticClass:"card-body"},[r("div",{staticClass:"profile-details text-center"},[r("input",{staticStyle:{display:"none"},attrs:{type:"file",name:"pic1",id:"pic1"},on:{change:t.onFileChange}}),t._v(" "),r("label",{attrs:{for:"pic1"}},[r("img",{staticClass:"img-fluid rounded-circle blur-up lazyloaded",staticStyle:{cursor:"pointer",width:"225px","object-fit":"cov"},attrs:{src:l(371),for:"sawImg1",id:"sawImg",alt:""}})]),t._v(" "),r("h3",{staticClass:"f-w-600 mb-0"},[t._v("John deo")]),t._v(" "),r("h6",[t._v("johndeo@gmail.com")])])])])]),t._v(" "),r("div",{staticClass:"col-xl-8"},[r("div",{staticClass:"card tab2-card",staticStyle:{height:"100% !important"}},[r("div",{staticClass:"card-body"},[r("ul",{staticClass:"nav nav-tabs tab-coupon mb-0",attrs:{id:"top-tab",role:"tablist"}},[r("div",{staticClass:"tab-content",attrs:{id:"top-tabContent"}},[r("b-tabs",{attrs:{"content-class":"mt-3"}},[r("b-tab",{attrs:{title:"profile","data-feather":"user",active:""}},[r("template",{slot:"title"},[r("feather",{attrs:{type:"user"}}),t._v("Profile\r\n                                                ")],1),t._v(" "),r("b-card-text",[r("div",{staticClass:"tab-pane fade show active",attrs:{id:"top-profile",role:"tabpanel","aria-labelledby":"top-profile-tab"}},[r("h5",{staticClass:"f-w-600"},[t._v("Profile")]),t._v(" "),r("div",{staticClass:"table-responsive profile-table mb-0"},[r("div",{staticClass:"form"},[r("table",{staticClass:"table table-responsive mb-0"},[r("tbody",[r("tr",[r("td",[t._v("First Name:")]),t._v(" "),r("div",{staticClass:"form-group mb-3 row"},[r("input",{staticClass:"form-control",attrs:{placeholder:"First name",id:"validationCustom01",type:"text",required:""}})])]),t._v(" "),r("tr",[r("td",[t._v("Last Name:")]),t._v(" "),r("div",{staticClass:"form-group mb-3 row"},[r("input",{staticClass:"form-control",attrs:{placeholder:"Last name",id:"validationCustom01",type:"text",required:""}})])]),t._v(" "),r("tr",[r("td",[t._v("Email:")]),t._v(" "),r("td",[t._v("johndeo@gmail.com")])])])])])])])])],2)],1)],1)])]),t._v(" "),r("div",[r("b-button",{directives:[{name:"b-modal",rawName:"v-b-modal.modal-1",modifiers:{"modal-1":!0}}],staticClass:"float-right",staticStyle:{margin:"25px"},attrs:{variant:(t.categoryType,"primary")},on:{click:function(e){return t.$router.push("/admin/brand/add-brand")}}},[t._v("Save")])],1)])])])])])]},proxy:!0}])})}),[],!1,null,null,null);e.default=component.exports}}]);