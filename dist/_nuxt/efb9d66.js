(window.webpackJsonp=window.webpackJsonp||[]).push([[106],{1003:function(e,t,r){"use strict";r(995)},1004:function(e,t,r){var c=r(55)(!1);c.push([e.i,".img-blow[data-v-6ba148d6]{height:250px!important}",""]),e.exports=c},1019:function(e,t,r){"use strict";r.r(t);r(8),r(7),r(5),r(4),r(9),r(6),r(10);var c=r(1),n=r(26),o=r(19);function l(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,r)}return t}var d={data:function(){return{swiperOption:{slidesPerView:4,freeMode:!0,breakpoints:{1200:{slidesPerView:3,spaceBetween:20},991:{slidesPerView:3,spaceBetween:20},586:{slidesPerView:2,spaceBetween:20},0:{slidesPerView:1}}}}},computed:function(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?l(Object(source),!0).forEach((function(t){Object(c.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):l(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}({},Object(n.e)("products",["topProductList"])),methods:{getImageUrl:function(path){return o.baseUrl+"products/"+path},redirectPage:function(e){this.$router.push({path:"/product/"+e})}}},v=d,w=(r(1003),r(34)),component=Object(w.a)(v,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("section",{staticClass:"section-b-space ratio_portrait"},[r("div",{staticClass:"container"},[r("div",{},[r("div",{staticClass:"title4"},[r("h2",{staticClass:"title-inner4"},[e._v("This Item Is One The Best Wines")]),e._v(" "),e._m(0),e._v(" "),e.topProductList?r("div",[r("div",{directives:[{name:"swiper",rawName:"v-swiper:mySwiper",value:e.swiperOption,expression:"swiperOption",arg:"mySwiper"}],staticClass:"col-12"},[r("div",{staticClass:"swiper-wrapper category-m"},e._l(e.topProductList,(function(t,c){return r("div",{key:c,staticClass:"col-12 col-lg-4 col-md-6 swiper-slide m-0"},[r("div",{staticClass:"category-wrapper",on:{click:function(r){return e.redirectPage(t.id)}}},[r("div",[t.product_images?r("div",[r("img",{staticClass:"img-fluid bg-img img-blow",attrs:{src:e.getImageUrl(t.product_images[0].image),alt:""}})]):e._e(),e._v(" "),r("h4",[e._v(e._s(t.product_name))]),e._v(" "),r("div",{domProps:{innerHTML:e._s(t.description)}}),e._v(" "),r("a",{staticClass:"btn btn-outline",attrs:{href:"javascript:void(0)"},on:{click:function(r){return e.redirectPage(t.id)}}},[e._v("view more")])])])])})),0)])]):e._e()])])])])])}),[function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"line"},[t("span")])}],!1,null,"6ba148d6",null);t.default=component.exports},995:function(e,t,r){var content=r(1004);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(56).default)("cd14cebc",content,!0,{sourceMap:!1})}}]);