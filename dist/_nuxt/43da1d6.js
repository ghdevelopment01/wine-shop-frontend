(window.webpackJsonp=window.webpackJsonp||[]).push([[73],{1107:function(t,e,n){"use strict";n.r(e);var r=n(214),c=n(954),l=n(955),o=n(963),v={components:{Header:r.a,Footer:c.a,Breadcrumbs:l.a,Countdown:o.a},data:function(){return{imagepath:n(411),title:"2019",subtitle:"fashion trends",text:"special offer",imagepath2:n(215),offer_text:"Save <span>30% off</span> Digital Watch"}}},d=n(34),component=Object(d.a)(v,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("Header"),t._v(" "),n("Breadcrumbs",{attrs:{title:"Banner Element"}}),t._v(" "),n("section",{staticClass:"pt-0"},[n("div",{staticClass:"full-banner parallax text-center p-left",style:{"background-image":"url("+t.imagepath+")"}},[n("img",{staticClass:"bg-img d-none",attrs:{src:t.imagepath,alt:""}}),t._v(" "),n("div",{staticClass:"container"},[n("div",{staticClass:"row"},[n("div",{staticClass:"col"},[n("div",{staticClass:"banner-contain"},[n("h2",[t._v(t._s(t.title))]),t._v(" "),n("h3",[t._v(t._s(t.subtitle))]),t._v(" "),n("h4",[t._v(t._s(t.text))])])])])])])]),t._v(" "),n("section",{staticClass:"section-b-space"},[n("div",{staticClass:"container"},[n("div",{staticClass:"row banner-timer",style:{"background-image":"url("+t.imagepath2+")"}},[n("div",{staticClass:"col-md-6"},[n("div",{staticClass:"banner-text"},[n("h2",{domProps:{innerHTML:t._s(t.offer_text)}})])]),t._v(" "),n("div",{staticClass:"col-md-6"},[n("div",{staticClass:"timer-box"},[n("countdown",{attrs:{date:"December 20, 2020"}})],1)])])])]),t._v(" "),n("Footer")],1)}),[],!1,null,null,null);e.default=component.exports},954:function(t,e,n){"use strict";var r={},c=n(34),component=Object(c.a)(r,(function(){var t=this.$createElement;return(this._self._c||t)("div")}),[],!1,null,null,null);e.a=component.exports},955:function(t,e,n){"use strict";var r={props:["title"]},c=n(34),component=Object(c.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"breadcrumb-section"},[n("div",{staticClass:"container"},[n("div",{staticClass:"row"},[n("div",{staticClass:"col-sm-6"},[n("div",{staticClass:"page-title"},[n("h2",[t._v(t._s(t.title))])])]),t._v(" "),n("div",{staticClass:"col-sm-6"},[n("nav",{staticClass:"theme-breadcrumb",attrs:{"aria-label":"breadcrumb"}},[n("ol",{staticClass:"breadcrumb"},[n("li",{staticClass:"breadcrumb-item"},[n("nuxt-link",{attrs:{to:{path:"/"}}},[t._v("Home")])],1),t._v(" "),t.title?n("li",{staticClass:"breadcrumb-item active"},[t._v(t._s(t.title))]):t._e()])])])])])])])}),[],!1,null,null,null);e.a=component.exports},963:function(t,e,n){"use strict";n(41),n(998);var r={mounted:function(){var t=this;window.setInterval((function(){t.now=Math.trunc((new Date).getTime()/1e3)}),1e3)},props:["date"],data:function(){return{timerdate:Math.trunc(new Date(this.date).getTime()/1e3),now:Math.trunc((new Date).getTime()/1e3)}},computed:{seconds:function(){return(this.timerdate-this.now)%60},minutes:function(){return Math.trunc((this.timerdate-this.now)/60)%60},hours:function(){return Math.trunc((this.timerdate-this.now)/60/60)%24},days:function(){return Math.trunc((this.timerdate-this.now)/60/60/24)}}},c=n(34),component=Object(c.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"timer"},[n("p",{attrs:{id:"demo"}},[n("span",[n("span",{staticClass:"timer-num"},[t._v(t._s(t.days))]),t._v(" "),n("span",{staticClass:"padding-l"},[t._v(":")]),t._v(" "),n("span",{staticClass:"timer-cal"},[t._v("Days")])]),t._v(" "),n("span",[n("span",{staticClass:"timer-num"},[t._v(t._s(t.hours))]),t._v(" "),n("span",{staticClass:"padding-l"},[t._v(":")]),t._v(" "),n("span",{staticClass:"timer-cal"},[t._v("Hrs")])]),t._v(" "),n("span",[n("span",{staticClass:"timer-num"},[t._v(t._s(t.minutes))]),t._v(" "),n("span",{staticClass:"padding-l"},[t._v(":")]),t._v(" "),n("span",{staticClass:"timer-cal"},[t._v("Min")])]),t._v(" "),n("span",[n("span",{staticClass:"timer-num"},[t._v(t._s(t.seconds))]),t._v(" "),n("span",{staticClass:"timer-cal"},[t._v("Sec")])])])])])}),[],!1,null,null,null);e.a=component.exports},998:function(t,e,n){var r=n(17),c=Math.ceil,l=Math.floor;r({target:"Math",stat:!0},{trunc:function(t){return(t>0?l:c)(t)}})}}]);