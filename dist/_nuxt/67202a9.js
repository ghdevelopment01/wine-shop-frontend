(window.webpackJsonp=window.webpackJsonp||[]).push([[103],{1128:function(t,e,r){"use strict";r.r(e);r(7),r(9),r(6),r(10);var c=r(1),l=(r(8),r(5),r(4),r(26)),o=r(214),n=r(954),d=r(955),v=r(963),_=r(965);function m(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function f(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?m(Object(source),!0).forEach((function(e){Object(c.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):m(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var C={components:{Header:o.a,Footer:n.a,Breadcrumbs:d.a,Timer:v.a,relatedProduct:_.a},data:function(){return{counter:1,activeColor:"",selectedSize:"",qty:"",size:[],productTYpe:"",productId:"",swiperOption:{slidesPerView:1,spaceBetween:20,freeMode:!0},swiperOption1:{direction:"vertical",slidesPerView:3,spaceBetween:15,freeMode:!0,centeredSlides:!1}}},computed:f(f(f({},Object(l.e)({currency:function(t){return t.products.currency}})),Object(l.c)({curr:"products/changeCurrency"})),{},{getDetail:function(){return this.$store.getters["products/getProductById"](1)},swiper:function(){return this.$refs.mySwiper.swiper}}),mounted:function(){this.uniqColor=this.getDetail.variants[0].color,this.sizeVariant(this.getDetail.variants[0].image_id),this.activeColor=this.uniqColor,this.changeSizeVariant(this.getDetail.variants[0].size)},methods:{priceCurrency:function(){this.$store.dispatch("products/changeCurrency")},addToWishlist:function(t){this.$store.dispatch("products/addToWishlist",t)},discountedPrice:function(t){return t.price-t.price*t.discount/100},Color:function(t){for(var e=[],i=0;i<Object.keys(t).length;i++)-1===e.indexOf(t[i].color)&&e.push(t[i].color);return e},addToCart:function(t,e){t.quantity=e||1,this.$store.dispatch("cart/addToCart",t)},buyNow:function(t,e){t.quantity=e||1,this.$store.dispatch("cart/addToCart",t),this.$router.push("/page/account/checkout")},increment:function(){this.counter++},decrement:function(){this.counter>1&&this.counter--},changeSizeVariant:function(t){this.selectedSize=t},getImgUrl:function(path){return r(334)("./"+path)},slideTo:function(t){this.swiper.slideTo(t,1e3,!1)},sizeVariant:function(t,e,r){var c=this;this.swiper.slideTo(e,1e3,!1),this.size=[],this.activeColor=r,this.getDetail.variants.filter((function(e){t===e.image_id&&c.size.push(e.size)}))}}},h=r(34),component=Object(h.a)(C,(function(){var t=this,e=t.$createElement,c=t._self._c||e;return c("div",[c("Header"),t._v(" "),c("Breadcrumbs",{attrs:{title:t.getDetail.title}}),t._v(" "),c("section",[c("div",{staticClass:"collection-wrapper"},[c("div",{staticClass:"container"},[c("div",{staticClass:"row"},[c("div",{staticClass:"col-lg-3 col-sm-10 col-xs-12 order-up"},[c("div",{directives:[{name:"swiper",rawName:"v-swiper:mySwiper",value:t.swiperOption,expression:"swiperOption",arg:"mySwiper"}],ref:"mySwiper"},[c("div",{staticClass:"swiper-wrapper"},t._l(t.getDetail.images,(function(e,r){return c("div",{key:r,staticClass:"swiper-slide"},[c("img",{staticClass:"img-fluid bg-img",attrs:{src:t.getImgUrl(e.src),id:e.image_id,alt:e.alt}})])})),0)])]),t._v(" "),c("div",{staticClass:"col-lg-1 col-sm-2 col-xs-12"},[c("div",{staticClass:"row"},[c("div",{staticClass:"col-12"},[c("div",{directives:[{name:"swiper",rawName:"v-swiper:mySwiper1",value:t.swiperOption1,expression:"swiperOption1",arg:"mySwiper1"}]},[c("div",{staticClass:"swiper-wrapper slider-right-nav"},t._l(t.getDetail.images,(function(e,r){return c("div",{key:r,staticClass:"swiper-slide"},[c("img",{staticClass:"img-fluid bg-img",attrs:{src:t.getImgUrl(e.src),id:e.image_id,alt:"product.alt"},on:{click:function(e){return t.slideTo(r)}}})])})),0)])])])]),t._v(" "),c("div",{staticClass:"col-lg-4"},[c("div",{staticClass:"product-right product-description-box"},[c("h2",[t._v(t._s(t.getDetail.title))]),t._v(" "),c("div",{staticClass:"border-product"},[c("h6",{staticClass:"product-title"},[t._v("product details")]),t._v(" "),c("p",[t._v(t._s(t.getDetail.description.substring(0,200)+"...."))])]),t._v(" "),t.getDetail.stock<8?c("div",{staticClass:"pro_inventory"},[c("p",{staticClass:"active"},[t._v(" Hurry! We have only "+t._s(t.getDetail.stock)+" product in stock. ")]),t._v(" "),t._m(0)]):t._e(),t._v(" "),c("div",{staticClass:"single-product-tables border-product detail-section"},[c("table",[c("tbody",[c("tr",[c("td",[t._v("Product Type:")]),t._v(" "),c("td",[t._v(t._s(t.getDetail.type))])]),t._v(" "),c("tr",[c("td",[t._v("Brand:")]),t._v(" "),c("td",[t._v(t._s(t.getDetail.brand))])]),t._v(" "),t._m(1)])])]),t._v(" "),c("div",{staticClass:"border-product"},[c("h6",{staticClass:"product-title"},[t._v("share it")]),t._v(" "),c("div",{staticClass:"product-icon"},[t._m(2),t._v(" "),c("form",{staticClass:"d-inline-block"},[c("button",{staticClass:"wishlist-btn",on:{click:function(e){return t.addToWishlist(t.product)}}},[c("i",{staticClass:"fa fa-heart"}),c("span",{staticClass:"title-font"},[t._v("Add To WishList")])])])])]),t._v(" "),c("div",{staticClass:"border-product"},[c("h6",{staticClass:"product-title"},[t._v("100% SECURE PAYMENT")]),t._v(" "),c("div",{staticClass:"payment-card-bottom"},[c("ul",[c("li",[c("a",{attrs:{href:"javascript:void(0)"}},[c("img",{attrs:{src:r(368),alt:""}})])]),t._v(" "),c("li",[c("a",{attrs:{href:"javascript:void(0)"}},[c("img",{attrs:{src:r(366),alt:""}})])]),t._v(" "),c("li",[c("a",{attrs:{href:"javascript:void(0)"}},[c("img",{attrs:{src:r(367),alt:""}})])]),t._v(" "),c("li",[c("a",{attrs:{href:"javascript:void(0)"}},[c("img",{attrs:{src:r(364),alt:""}})])]),t._v(" "),c("li",[c("a",{attrs:{href:"javascript:void(0)"}},[c("img",{attrs:{src:r(365),alt:""}})])])])])])])]),t._v(" "),c("div",{staticClass:"col-lg-4"},[c("div",{staticClass:"product-right product-form-box"},[t.getDetail.sale?c("h4",[c("del",[t._v(t._s(t._f("currency")(t.getDetail.price*t.curr.curr,t.curr.symbol)))]),t._v(" "),c("span",[t._v(t._s(t.getDetail.discount)+"% off")])]):t._e(),t._v(" "),t.getDetail.sale?c("h3",[t._v(t._s(t._f("currency")(t.discountedPrice(t.getDetail)*t.curr.curr,t.curr.symbol)))]):c("h3",[t._v(t._s(t._f("currency")(t.getDetail.price*t.curr.curr,t.curr.symbol)))]),t._v(" "),c("ul",{staticClass:"color-variant"},t._l(t.Color(t.getDetail.variants),(function(e,r){return c("li",{key:r,class:{active:t.activeColor==e}},[c("a",{class:[e],style:{"background-color":e},on:{click:function(c){return t.sizeVariant(t.getDetail.variants[r].image_id,r,e)}}})])})),0),t._v(" "),c("div",{staticClass:"product-description border-product"},[c("h6",{staticClass:"product-title"},[t._v("Time Reminder")]),t._v(" "),c("Timer",{attrs:{date:"December 20, 2020"}}),t._v(" "),c("h6",{staticClass:"product-title three-col-text"},[t._v("\n                          select size\n                          "),c("span",[c("a",{directives:[{name:"b-modal",rawName:"v-b-modal.modal-1",modifiers:{"modal-1":!0}}],attrs:{href:"javascript:void(0)"}},[t._v("size chart")])])]),c("div",{staticClass:"size-box"},[c("ul",t._l(t.size,(function(e,r){return c("li",{key:r,staticClass:"product-title",class:{active:t.selectedSize==e}},[c("a",{attrs:{href:"javascript:void(0)"},on:{click:function(r){return t.changeSizeVariant(e)}}},[t._v(t._s(e))])])})),0)]),t._v(" "),t.counter<=t.getDetail.stock?c("h5",{staticClass:"avalibility"},[c("span",[t._v("In Stock")])]):t._e(),t._v(" "),t.counter>t.getDetail.stock?c("h5",{staticClass:"avalibility"},[c("span",[t._v("Out of Stock")])]):t._e(),t._v(" "),c("h6",{staticClass:"product-title"},[t._v("quantity")]),t._v(" "),c("div",{staticClass:"qty-box"},[c("div",{staticClass:"input-group"},[c("span",{staticClass:"input-group-prepend"},[c("button",{staticClass:"btn quantity-left-minus",attrs:{type:"button","data-type":"minus","data-field":""},on:{click:function(e){return t.decrement()}}},[c("i",{staticClass:"ti-angle-left"})])]),t._v(" "),c("input",{directives:[{name:"model",rawName:"v-model",value:t.counter,expression:"counter"}],staticClass:"form-control input-number",attrs:{type:"text",name:"quantity",disabled:t.counter>t.getDetail.stock},domProps:{value:t.counter},on:{input:function(e){e.target.composing||(t.counter=e.target.value)}}}),t._v(" "),c("span",{staticClass:"input-group-prepend"},[c("button",{staticClass:"btn quantity-right-plus",attrs:{type:"button","data-type":"plus","data-field":""},on:{click:function(e){return t.increment()}}},[c("i",{staticClass:"ti-angle-right"})])])])])],1),t._v(" "),c("div",{staticClass:"product-buttons"},[c("nuxt-link",{attrs:{to:{path:"/page/account/cart"}}},[c("button",{staticClass:"btn btn-solid",attrs:{title:"Add to cart",disabled:t.counter>t.getDetail.stock},on:{click:function(e){return t.addToCart(t.getDetail,t.counter)}}},[t._v("Add To Cart")])]),t._v(" "),c("button",{staticClass:"btn btn-solid",attrs:{title:"buy now",disabled:t.counter>t.getDetail.stock},on:{click:function(e){return t.buyNow(t.getDetail,t.counter)}}},[t._v("Buy Now")])],1)])])])])]),t._v(" "),c("section",{staticClass:"tab-product m-0"},[c("div",{staticClass:"container"},[c("div",{staticClass:"row"},[c("div",{staticClass:"col-sm-12 col-lg-12"},[c("b-tabs",{attrs:{card:""}},[c("b-tab",{attrs:{title:"Description",active:""}},[c("b-card-text",[t._v(t._s(t.getDetail.description))])],1),t._v(" "),c("b-tab",{attrs:{title:"Details"}},[c("b-card-text",[t._v("\n                          "+t._s(t.getDetail.description)+"\n                          "),c("div",{staticClass:"single-product-tables"},[c("table",[c("tbody",[c("tr",[c("td",[t._v("Febric")]),t._v(" "),c("td",[t._v("Chiffon")])]),t._v(" "),c("tr",[c("td",[t._v("Color")]),t._v(" "),c("td",[t._v("Red")])]),t._v(" "),c("tr",[c("td",[t._v("Material")]),t._v(" "),c("td",[t._v("Crepe printed")])])])]),t._v(" "),c("table",[c("tbody",[c("tr",[c("td",[t._v("Length")]),t._v(" "),c("td",[t._v("50 Inches")])]),t._v(" "),c("tr",[c("td",[t._v("Size")]),t._v(" "),c("td",[t._v("S, M, L .XXL")])])])])])])],1),t._v(" "),c("b-tab",{attrs:{title:"Video"}},[c("b-card-text",[c("div",{staticClass:"mt-3 text-center"},[c("iframe",{attrs:{width:"560",height:"315",src:"https://www.youtube.com/embed/BUWzX78Ye_8",allow:"autoplay; encrypted-media",allowfullscreen:""}})])])],1),t._v(" "),c("b-tab",{attrs:{title:"Write Review"}},[c("b-card-text",[c("form",{staticClass:"theme-form"},[c("div",{staticClass:"form-row"},[c("div",{staticClass:"col-md-12"},[c("div",{staticClass:"media"},[c("label",[t._v("Rating")]),t._v(" "),c("div",{staticClass:"media-body ml-3"},[c("div",{staticClass:"rating three-star"},[c("i",{staticClass:"fa fa-star"}),t._v(" "),c("i",{staticClass:"fa fa-star"}),t._v(" "),c("i",{staticClass:"fa fa-star"}),t._v(" "),c("i",{staticClass:"fa fa-star"}),t._v(" "),c("i",{staticClass:"fa fa-star"})])])])]),t._v(" "),c("div",{staticClass:"col-md-6"},[c("label",{attrs:{for:"name"}},[t._v("Name")]),t._v(" "),c("input",{staticClass:"form-control",attrs:{type:"text",id:"name",placeholder:"Enter Your name",required:""}})]),t._v(" "),c("div",{staticClass:"col-md-6"},[c("label",{attrs:{for:"email"}},[t._v("Email")]),t._v(" "),c("input",{staticClass:"form-control",attrs:{type:"text",id:"email",placeholder:"Email",required:""}})]),t._v(" "),c("div",{staticClass:"col-md-12"},[c("label",{attrs:{for:"review"}},[t._v("Review Title")]),t._v(" "),c("input",{staticClass:"form-control",attrs:{type:"text",id:"review",placeholder:"Enter your Review Subjects",required:""}})]),t._v(" "),c("div",{staticClass:"col-md-12"},[c("label",{attrs:{for:"review"}},[t._v("Review Title")]),t._v(" "),c("textarea",{staticClass:"form-control",attrs:{placeholder:"Wrire Your Testimonial Here",id:"exampleFormControlTextarea1",rows:"6"}})]),t._v(" "),c("div",{staticClass:"col-md-12"},[c("button",{staticClass:"btn btn-solid",attrs:{type:"submit"}},[t._v("Submit YOur Review")])])])])])],1)],1)],1)])])])]),t._v(" "),c("relatedProduct",{attrs:{productTYpe:t.productTYpe,productId:t.productId}}),t._v(" "),c("Footer")],1)}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"inventory-scroll"},[e("span",{staticStyle:{width:"95%"}})])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("tr",[r("td",[t._v("Material:")]),t._v(" "),r("td",[t._v("Crepe printed")])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("ul",{staticClass:"product-social"},[r("li",[r("a",{attrs:{href:"javascript:void(0)"}},[r("i",{staticClass:"fa fa-facebook"})])]),t._v(" "),r("li",[r("a",{attrs:{href:"javascript:void(0)"}},[r("i",{staticClass:"fa fa-google-plus"})])]),t._v(" "),r("li",[r("a",{attrs:{href:"javascript:void(0)"}},[r("i",{staticClass:"fa fa-twitter"})])]),t._v(" "),r("li",[r("a",{attrs:{href:"javascript:void(0)"}},[r("i",{staticClass:"fa fa-instagram"})])]),t._v(" "),r("li",[r("a",{attrs:{href:"javascript:void(0)"}},[r("i",{staticClass:"fa fa-rss"})])])])}],!1,null,null,null);e.default=component.exports},954:function(t,e,r){"use strict";var c={},l=r(34),component=Object(l.a)(c,(function(){var t=this.$createElement;return(this._self._c||t)("div")}),[],!1,null,null,null);e.a=component.exports},955:function(t,e,r){"use strict";var c={props:["title"]},l=r(34),component=Object(l.a)(c,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("div",{staticClass:"breadcrumb-section"},[r("div",{staticClass:"container"},[r("div",{staticClass:"row"},[r("div",{staticClass:"col-sm-6"},[r("div",{staticClass:"page-title"},[r("h2",[t._v(t._s(t.title))])])]),t._v(" "),r("div",{staticClass:"col-sm-6"},[r("nav",{staticClass:"theme-breadcrumb",attrs:{"aria-label":"breadcrumb"}},[r("ol",{staticClass:"breadcrumb"},[r("li",{staticClass:"breadcrumb-item"},[r("nuxt-link",{attrs:{to:{path:"/"}}},[t._v("Home")])],1),t._v(" "),t.title?r("li",{staticClass:"breadcrumb-item active"},[t._v(t._s(t.title))]):t._e()])])])])])])])}),[],!1,null,null,null);e.a=component.exports}}]);