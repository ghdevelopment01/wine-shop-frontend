(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{1092:function(t,r,e){"use strict";e.r(r);e(8),e(7),e(5),e(4),e(9),e(6),e(10);var o=e(1),l=e(958),n=e(29),d=e(964);function c(object,t){var r=Object.keys(object);if(Object.getOwnPropertySymbols){var e=Object.getOwnPropertySymbols(object);t&&(e=e.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),r.push.apply(r,e)}return r}function m(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?c(Object(source),!0).forEach((function(r){Object(o.a)(t,r,source[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):c(Object(source)).forEach((function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(source,r))}))}return t}var v={components:{layout:l.a,ValidationProvider:d.b,ValidationObserver:d.a},middleware:["auth"],data:function(){return{image:"",brand:{brandName:"",brandDescription:"",logo:null}}},methods:m(m({},Object(n.b)({setBrand:"brand/setBrand"})),{},{fileselected:function(t){this.brand.logo=this.$refs.file.files[0];var r=t.target.files.item(0),e=new FileReader;e.addEventListener("load",this.imageloaded),e.readAsDataURL(r)},imageloaded:function(t){this.image=t.target.result},submit:function(){var t=this;this.setBrand(this.brand).then((function(r){r.data.status&&(t.$toast.success("Add Brand Successfully..!"),t.$router.push("/admin/brand"))}))}})},f=e(34),component=Object(f.a)(v,(function(){var t=this,r=t.$createElement,e=t._self._c||r;return e("layout",{scopedSlots:t._u([{key:"content",fn:function(){return[e("div",{staticClass:"row"},[e("div",{staticClass:"col-sm-12"},[e("div",{staticClass:"card"},[e("div",{staticClass:"card-header"},[e("h5",[t._v("Add Brand")])]),t._v(" "),e("div",{staticClass:"card-body"},[e("div",{staticClass:"row product-adding"},[e("div",{staticClass:"col-xl-7"},[e("ValidationObserver",{scopedSlots:t._u([{key:"default",fn:function(r){var o=r.invalid;return[e("form",{staticClass:"needs-validation add-product-form",attrs:{novalidate:"",enctype:"multipart/form-data"}},[e("div",{staticClass:"form"},[e("ValidationProvider",{attrs:{rules:"required",name:"brandName"},scopedSlots:t._u([{key:"default",fn:function(r){var o=r.errors;return[e("div",{staticClass:"form-group mb-0 row"},[e("label",{staticClass:"col-xl-3 col-sm-4 mb-0",attrs:{for:"validationCustom01"}},[t._v("Name :")]),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.brand.brandName,expression:"brand.brandName"}],staticClass:"form-control col-xl-8 col-sm-7",attrs:{name:"brandName",placeholder:"Name",id:"validationCustom01",type:"text",required:""},domProps:{value:t.brand.brandName},on:{input:function(r){r.target.composing||t.$set(t.brand,"brandName",r.target.value)}}})]),t._v(" "),e("div",{staticClass:"form-group mb-3 row"},[e("label",{staticClass:"col-xl-3 col-sm-4 mb-0",attrs:{for:"validationCustom01"}}),t._v(" "),e("div",{staticClass:"col-xl-8 col-sm-7 p-0 ml-0 validation"},[e("span",{staticClass:"validate-error"},[t._v(t._s(o[0]))])])])]}}],null,!0)}),t._v(" "),e("ValidationProvider",{attrs:{rules:"required",name:"logo"},scopedSlots:t._u([{key:"default",fn:function(r){var o=r.errors;return[e("div",{staticClass:"form-group mb-0 row"},[e("label",{staticClass:"col-xl-3 col-sm-4 mb-0",attrs:{for:"validationCustom02"}},[t._v("Logo :")]),t._v(" "),e("input",{ref:"file",staticClass:"form-control col-xl-8 col-sm-7",attrs:{name:"logo",id:"validationCustom02",type:"file",required:""},on:{change:t.fileselected}})]),t._v(" "),e("div",{staticClass:"form-group mb-3 row"},[e("label",{staticClass:"col-xl-3 col-sm-4 mb-0",attrs:{for:"validationCustom01"}}),t._v(" "),e("div",{staticClass:"col-xl-8 col-sm-7 p-0 ml-0 validation"},[e("span",{staticClass:"validate-error"},[t._v(t._s(o[0]))])])])]}}],null,!0)}),t._v(" "),e("div",{staticClass:"form-group mb-3 row"},[e("label",{staticClass:"col-xl-3 col-sm-4 mb-0",attrs:{for:"validationCustom02"}}),t._v(" "),t.image?e("img",{attrs:{src:t.image,width:"100px",height:"100px"}}):t._e()]),t._v(" "),e("ValidationProvider",{attrs:{rules:"required",name:"detail"},scopedSlots:t._u([{key:"default",fn:function(r){var o=r.errors;return[e("div",{staticClass:"form-group mb-0 d-flex"},[e("label",{staticClass:"col-xl-3 col-sm-4"},[t._v("Detail :")]),t._v(" "),e("div",{staticClass:" col-xl-8 col-sm-7 editor-vue"},[e("vue-editor",{attrs:{name:"detail"},model:{value:t.brand.brandDescription,callback:function(r){t.$set(t.brand,"brandDescription",r)},expression:"brand.brandDescription"}})],1)]),t._v(" "),e("div",{staticClass:"form-group mb-3 row"},[e("label",{staticClass:"col-xl-3 col-sm-4 mb-0",attrs:{for:"validationCustom01"}}),t._v(" "),e("div",{staticClass:"col-xl-8 col-sm-7 p-0 ml-2 validation"},[e("span",{staticClass:"validate-error"},[t._v(t._s(o[0]))])])])]}}],null,!0)}),t._v(" "),e("div",{staticClass:"form-group row"},[e("label",{staticClass:"col-xl-3 col-md-4"}),t._v(" "),e("button",{staticClass:"btn btn-primary",class:o?"btn-solid-disabled":"btn-solid",attrs:{type:"button",disabled:o},on:{click:function(r){return t.submit()}}},[t._v("Add")]),t._v(" "),e("button",{staticClass:"btn btn-light ml-1",attrs:{type:"button"},on:{click:function(r){return t.$router.push("/admin/brand")}}},[t._v("\r\n                                                    Discard\r\n                                                ")])])],1)])]}}])})],1)])])])])])]},proxy:!0}])})}),[],!1,null,null,null);r.default=component.exports}}]);