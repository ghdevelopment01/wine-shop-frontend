(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{1091:function(t,e,o){"use strict";o.r(e);o(8),o(7),o(5),o(4),o(9),o(6),o(10);var r=o(1),n=o(956),c=o(26),l=o(959);function d(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(object);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,o)}return e}function m(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?d(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):d(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var v={components:{layout:n.a,ValidationProvider:l.b,ValidationObserver:l.a},data:function(){return{category:{name:"",description:""}}},methods:m(m({},Object(c.b)({setCategory:"category/setCategory"})),{},{saveCategory:function(){var t=this;this.setCategory(this.category).then((function(e){e.data.status&&(t.$toast.success("Add Category Successfully..!"),t.$router.push("/admin/category"))}))}})},f=o(34),component=Object(f.a)(v,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("layout",{scopedSlots:t._u([{key:"content",fn:function(){return[o("div",{staticClass:"row"},[o("div",{staticClass:"col-sm-12"},[o("div",{staticClass:"card"},[o("div",{staticClass:"card-header"},[o("h5",[t._v("Add Category")])]),t._v(" "),o("div",{staticClass:"card-body"},[o("div",{staticClass:"row product-adding"},[o("div",{staticClass:"col-xl-7"},[o("ValidationObserver",{scopedSlots:t._u([{key:"default",fn:function(e){var r=e.invalid;return[o("form",{staticClass:"needs-validation add-product-form",attrs:{novalidate:""}},[o("div",{staticClass:"form"},[o("ValidationProvider",{attrs:{rules:"required",name:"name"},scopedSlots:t._u([{key:"default",fn:function(e){var r=e.errors;return[o("div",{staticClass:"form-group mb-0 row"},[o("label",{staticClass:"col-xl-3 col-sm-4 mb-0",attrs:{for:"validationCustom01"}},[t._v("Name :")]),t._v(" "),o("input",{directives:[{name:"model",rawName:"v-model",value:t.category.name,expression:"category.name"}],staticClass:"form-control col-xl-8 col-sm-7",attrs:{name:"name",placeholder:"Name",id:"validationCustom01",type:"text",required:""},domProps:{value:t.category.name},on:{input:function(e){e.target.composing||t.$set(t.category,"name",e.target.value)}}})]),t._v(" "),o("div",{staticClass:"form-group mb-3 row"},[o("label",{staticClass:"col-xl-3 col-sm-4 mb-0",attrs:{for:"validationCustom01"}}),t._v(" "),o("div",{staticClass:"col-xl-8 col-sm-7 p-0 ml-0 validation"},[o("span",{staticClass:"validate-error"},[t._v(t._s(r[0]))])])])]}}],null,!0)}),t._v(" "),o("div",{staticClass:"form-group mb-0 row"},[o("label",{staticClass:"col-xl-3 col-md-4"},[t._v("Description :")]),t._v(" "),o("textarea",{directives:[{name:"model",rawName:"v-model",value:t.category.description,expression:"category.description"}],staticClass:"form-control col-xl-8 col-sm-7",attrs:{name:"description",required:""},domProps:{value:t.category.description},on:{input:function(e){e.target.composing||t.$set(t.category,"description",e.target.value)}}})]),t._v(" "),o("div",{staticClass:"form-group mb-3 row"},[o("label",{staticClass:"col-xl-3 col-sm-4 mb-0",attrs:{for:"validationCustom01"}})])],1),t._v(" "),o("div",{staticClass:"offset-xl-3 offset-sm-4"},[o("button",{staticClass:"btn btn-primary",class:r?"btn-solid-disabled":"btn-solid",attrs:{type:"button",disabled:r},on:{click:t.saveCategory}},[t._v("Add")]),t._v(" "),o("button",{staticClass:"btn btn-light ml-1",attrs:{type:"button"},on:{click:function(e){return t.$router.push("/admin/category")}}},[t._v("\r\n                                                Discard\r\n                                            ")])])])]}}])})],1)])])])])])]},proxy:!0}])})}),[],!1,null,null,null);e.default=component.exports}}]);