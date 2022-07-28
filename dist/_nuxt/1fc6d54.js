(window.webpackJsonp=window.webpackJsonp||[]).push([[66],{1105:function(t,e,r){"use strict";r.r(e);r(15);var l=r(214),o=r(956),n=r(957),c={components:{Header:l.a,Footer:o.a,Breadcrumbs:n.a},data:function(){return{title1:"personal detail",title2:"shipping address",errors:[],fname:null,lname:null,email:null,phone:null,message:null}},methods:{checkForm1:function(t){if(this.errors=[],this.fname||this.errors.push("First name required."),this.lname||this.errors.push("Last name required."),this.email?this.validEmail(this.email)||this.errors.push("Valid email required."):this.errors.push("Email required."),this.phone||this.errors.push("Phone Number required."),this.message||this.errors.push("Message required."),!this.errors.length)return!0;t.preventDefault()},validEmail:function(t){return/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(t)}}},m=r(34),component=Object(m.a)(c,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("Header"),t._v(" "),r("Breadcrumbs",{attrs:{title:"Profile"}}),t._v(" "),r("section",{staticClass:"contact-page register-page"},[r("div",{staticClass:"container"},[r("div",{staticClass:"row"},[r("div",{staticClass:"col-sm-12"},[r("h3",[t._v(t._s(t.title1))]),t._v(" "),r("form",{staticClass:"theme-form",attrs:{method:"post"},on:{submit:t.checkForm1}},[t.errors.length?r("div",[r("ul",{staticClass:"validation-error mb-3"},t._l(t.errors,(function(e,l){return r("li",{key:l},[t._v(t._s(e))])})),0)]):t._e(),t._v(" "),r("div",{staticClass:"form-row"},[r("div",{staticClass:"col-md-6"},[r("label",{attrs:{for:"fname"}},[t._v("First Name")]),t._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:t.fname,expression:"fname"}],staticClass:"form-control",attrs:{type:"text",id:"fname",placeholder:"First Name",name:"fname",required:""},domProps:{value:t.fname},on:{input:function(e){e.target.composing||(t.fname=e.target.value)}}})]),t._v(" "),r("div",{staticClass:"col-md-6"},[r("label",{attrs:{for:"lname"}},[t._v("Last Name")]),t._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:t.lname,expression:"lname"}],staticClass:"form-control",attrs:{type:"text",id:"lname",placeholder:"Last Name",name:"lname",required:""},domProps:{value:t.lname},on:{input:function(e){e.target.composing||(t.lname=e.target.value)}}})]),t._v(" "),r("div",{staticClass:"col-md-6"},[r("label",{attrs:{for:"phone"}},[t._v("Phone number")]),t._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:t.phone,expression:"phone"}],staticClass:"form-control",attrs:{type:"tel",id:"phone",placeholder:"Enter your number",name:"phone",required:""},domProps:{value:t.phone},on:{input:function(e){e.target.composing||(t.phone=e.target.value)}}})]),t._v(" "),r("div",{staticClass:"col-md-6"},[r("label",{attrs:{for:"email"}},[t._v("Email")]),t._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:t.email,expression:"email"}],staticClass:"form-control",attrs:{type:"text",id:"email",placeholder:"Email",name:"email",required:""},domProps:{value:t.email},on:{input:function(e){e.target.composing||(t.email=e.target.value)}}})]),t._v(" "),r("div",{staticClass:"col-md-12"},[r("label",{attrs:{for:"message"}},[t._v("Write Your Message")]),t._v(" "),r("textarea",{directives:[{name:"model",rawName:"v-model",value:t.message,expression:"message"}],staticClass:"form-control",attrs:{placeholder:"Write Your Message",id:"message",name:"message",rows:"6"},domProps:{value:t.message},on:{input:function(e){e.target.composing||(t.message=e.target.value)}}})]),t._v(" "),t._m(0)])])])])])]),t._v(" "),r("section",{staticClass:"contact-page register-page section-b-space"},[r("div",{staticClass:"container"},[r("div",{staticClass:"row"},[r("div",{staticClass:"col-sm-12"},[r("h3",[t._v(t._s(t.title2))]),t._v(" "),r("form",{staticClass:"theme-form",attrs:{method:"post"},on:{submit:t.checkForm2}},[t._m(1)])])])])]),t._v(" "),r("Footer")],1)}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"col-md-12"},[e("input",{staticClass:"btn btn-solid",attrs:{type:"submit",value:"Save"}})])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"form-row"},[r("div",{staticClass:"col-md-6"},[r("label",{attrs:{for:"name"}},[t._v("flat / plot")]),t._v(" "),r("input",{staticClass:"form-control",attrs:{type:"text",id:"home-ploat",placeholder:"company name",required:""}})]),t._v(" "),r("div",{staticClass:"col-md-6"},[r("label",{attrs:{for:"name"}},[t._v("Address *")]),t._v(" "),r("input",{staticClass:"form-control",attrs:{type:"text",id:"address-two",placeholder:"Address",required:""}})]),t._v(" "),r("div",{staticClass:"col-md-6"},[r("label",{attrs:{for:"email"}},[t._v("Zip Code *")]),t._v(" "),r("input",{staticClass:"form-control",attrs:{type:"text",id:"zip-code",placeholder:"zip-code",required:""}})]),t._v(" "),r("div",{staticClass:"col-md-6 select_input"},[r("label",{attrs:{for:"review"}},[t._v("Country *")]),t._v(" "),r("select",{staticClass:"form-control",attrs:{size:"1"}},[r("option",{attrs:{value:"India"}},[t._v("India")]),t._v(" "),r("option",{attrs:{value:"UAE"}},[t._v("UAE")]),t._v(" "),r("option",{attrs:{value:"U.K"}},[t._v("U.K")]),t._v(" "),r("option",{attrs:{value:"US"}},[t._v("US")])])]),t._v(" "),r("div",{staticClass:"col-md-6"},[r("label",{attrs:{for:"review"}},[t._v("City *")]),t._v(" "),r("input",{staticClass:"form-control",attrs:{type:"text",id:"city",placeholder:"City",required:""}})]),t._v(" "),r("div",{staticClass:"col-md-6"},[r("label",{attrs:{for:"review"}},[t._v("Region/State *")]),t._v(" "),r("input",{staticClass:"form-control",attrs:{type:"text",id:"region-state",placeholder:"Region/state",required:""}})]),t._v(" "),r("div",{staticClass:"col-md-12"},[r("button",{staticClass:"btn btn-sm btn-solid",attrs:{type:"submit"}},[t._v("Save setting")])])])}],!1,null,null,null);e.default=component.exports},956:function(t,e,r){"use strict";var l={},o=r(34),component=Object(o.a)(l,(function(){var t=this.$createElement;return(this._self._c||t)("div")}),[],!1,null,null,null);e.a=component.exports},957:function(t,e,r){"use strict";var l={props:["title"]},o=r(34),component=Object(o.a)(l,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("div",{staticClass:"breadcrumb-section"},[r("div",{staticClass:"container"},[r("div",{staticClass:"row"},[r("div",{staticClass:"col-sm-6"},[r("div",{staticClass:"page-title"},[r("h2",[t._v(t._s(t.title))])])]),t._v(" "),r("div",{staticClass:"col-sm-6"},[r("nav",{staticClass:"theme-breadcrumb",attrs:{"aria-label":"breadcrumb"}},[r("ol",{staticClass:"breadcrumb"},[r("li",{staticClass:"breadcrumb-item"},[r("nuxt-link",{attrs:{to:{path:"/"}}},[t._v("Home")])],1),t._v(" "),t.title?r("li",{staticClass:"breadcrumb-item active"},[t._v(t._s(t.title))]):t._e()])])])])])])])}),[],!1,null,null,null);e.a=component.exports}}]);