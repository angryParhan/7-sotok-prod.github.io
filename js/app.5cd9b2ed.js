(function(t){function e(e){for(var s,o,r=e[0],c=e[1],l=e[2],p=0,m=[];p<r.length;p++)o=r[p],Object.prototype.hasOwnProperty.call(i,o)&&i[o]&&m.push(i[o][0]),i[o]=0;for(s in c)Object.prototype.hasOwnProperty.call(c,s)&&(t[s]=c[s]);u&&u(e);while(m.length)m.shift()();return n.push.apply(n,l||[]),a()}function a(){for(var t,e=0;e<n.length;e++){for(var a=n[e],s=!0,r=1;r<a.length;r++){var c=a[r];0!==i[c]&&(s=!1)}s&&(n.splice(e--,1),t=o(o.s=a[0]))}return t}var s={},i={app:0},n=[];function o(e){if(s[e])return s[e].exports;var a=s[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,o),a.l=!0,a.exports}o.m=t,o.c=s,o.d=function(t,e,a){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(o.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)o.d(a,s,function(e){return t[e]}.bind(null,s));return a},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],c=r.push.bind(r);r.push=e,r=r.slice();for(var l=0;l<r.length;l++)e(r[l]);var u=c;n.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"0aca":function(t,e,a){t.exports=a.p+"img/logo.273a9b05.png"},"0b7b":function(t,e,a){"use strict";var s=a("9c5a"),i=a.n(s);i.a},"234d":function(t,e,a){t.exports=a.p+"img/kleverbeluj.440cf15a.jpg"},2657:function(t,e,a){t.exports=a.p+"img/lucerna.000aa258.jpg"},"34c4":function(t,e,a){"use strict";var s=a("82c2"),i=a.n(s);i.a},"37d2":function(t,e,a){},"3fc9":function(t,e,a){},"44a9":function(t,e,a){t.exports=a.p+"img/navBar-mobile.5aa45fe2.svg"},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var s=a("2b0e"),i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("navbar"),a("transition",{attrs:{name:"fade",mode:"out-in"}},[a("router-view")],1)],1)},n=[],o=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("section",[s("header",{staticClass:"header"},[s("nav",{staticClass:"nav"},[s("div",{staticClass:"nav__item-first"},[s("img",{staticClass:"nav__logo",attrs:{src:a("0aca"),alt:"logo"},on:{click:t.logoRedirect}}),s("div",{staticClass:"logo_items"},[s("ul",{staticClass:"items-wrapper"},[s("router-link",{class:{active:"Home"===t.activeTab},attrs:{to:"/",tag:"li"}},[t._v("Головна")]),s("router-link",{class:{active:"About"===t.activeTab},attrs:{to:"/about",tag:"li"}},[t._v("Про нас")]),s("router-link",{class:{active:"Goods"===t.activeTab},attrs:{to:"/goods",tag:"li"}},[t._v("Товари")]),s("router-link",{class:{active:"Delivery"===t.activeTab},attrs:{to:"/delivery-info",tag:"li"}},[t._v("Оплата і доставка")]),s("router-link",{staticClass:"last",class:{active:"Contacts"===t.activeTab},attrs:{to:"/contacts",tag:"li"}},[t._v("Контакти")])],1)])]),s("div",{staticClass:"nav__item-second"},[s("div",{staticClass:"basket-wrapper"},[s("router-link",{class:{"basket-active":t.busketItems},attrs:{to:"/basket",tag:"picture","data-basketItems":t.busketItems}},[s("img",{staticClass:"basket active",attrs:{src:a("6a6a"),alt:""}})])],1),t._m(0),t._m(1),s("img",{staticClass:"navbar__mobile",attrs:{src:a("44a9"),alt:""},on:{click:t.showXSmenu}})])]),s("transition",{attrs:{name:"fade"}},[t.XSmenuDone?s("div",{staticClass:"nav__right-block-slide-wrapper",on:{click:function(e){return e.target!==e.currentTarget?null:t.closeMenu(e)}}}):t._e()]),s("Animated",{attrs:{enter:"slideInRight",leave:"slideOutRight",duration:"300"}},[t.XSmenu?s("div",{staticClass:"nav__right-block-slide"},[s("img",{staticClass:"close-btn",attrs:{src:a("a6aa"),alt:""},on:{click:t.closeMenu}}),s("ul",[s("router-link",{class:{active:"Home"===t.activeTab},attrs:{to:"/",tag:"li"}},[t._v("Головна")]),s("router-link",{class:{active:"About"===t.activeTab},attrs:{to:"/about",tag:"li"}},[t._v("Про нас")]),s("router-link",{class:{active:"Goods"===t.activeTab},attrs:{to:"/goods",tag:"li"}},[t._v("Товари")]),s("router-link",{class:{active:"Delivery"===t.activeTab},attrs:{to:"/delivery-info",tag:"li"}},[t._v("Оплата і доставка")]),s("router-link",{class:{active:"Contacts"===t.activeTab},attrs:{to:"/contacts",tag:"li"}},[t._v("Контакти")])],1)]):t._e()])],1)])},r=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("a",{staticClass:"callback-phone",attrs:{href:"tel:+380994007301"}},[t._v("+38 (050) 190-93-37 "),a("span",{staticClass:"phone__description"},[t._v("Зателефонувати")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("a",{attrs:{href:"tel:+380994007301"}},[s("img",{staticClass:"navbar__mobile__callback",attrs:{src:a("f481"),alt:""}})])}],c=(a("b0c0"),{name:"Navbar",data:function(){return{XSmenu:!1,XSmenuDone:!1,basketActive:!1,activeTab:""}},mounted:function(){this.activeTab=this.$router.currentRoute.name,console.log(this.busketItems)},computed:{busketItems:function(){return this.$store.getters.getBusketItems.length}},watch:{$route:function(t){var e=this;this.activeTab=t.name,this.XSmenu&&setTimeout((function(){e.closeMenu()}),100)}},methods:{logoRedirect:function(){"Home"!==this.$router.currentRoute.name&&this.$router.push({name:"Home"})},showXSmenu:function(){this.XSmenuDone=!0,this.XSmenu=!0},closeMenu:function(){var t=this;this.XSmenu=!1,setTimeout((function(){t.XSmenuDone=!1}),100)}}}),l=c,u=(a("6ec0"),a("2877")),p=Object(u["a"])(l,o,r,!1,null,"443d92e7",null),m=p.exports,f={name:"App",created:function(){this.$store.commit("setState")},components:{navbar:m}},d=f,v=(a("a168"),Object(u["a"])(d,i,n,!1,null,"6e88e61b",null)),b=v.exports,h=a("8c4f"),g=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"home"},[a("gretings-part",{attrs:{msg:"Welcome to Your Vue.js App"}})],1)},_=[],C=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",{staticClass:"home-page"},[a("div",{staticClass:"home-page__wrapper"},[a("div",{staticClass:"home-page__item home-page__title"},[a("div",{staticClass:"title-wrapper"},[a("h1",{staticClass:"title"},[t._v("Насіння різноманітних рослин для газону, фермерства та пасічництва.")]),a("span",{staticClass:"delivery"},[t._v("Доставка Новою Поштою по всій Україні.")]),a("div",{staticClass:"goods-btn-wrapper"},[a("router-link",{staticClass:"goods-btn",attrs:{to:"/goods",tag:"p"}},[t._v("Перейти до покупок")])],1)])]),a("div",{staticClass:"home-page__item home-page__bg"})])])},k=[],y={name:"HelloWorld",methods:{},components:{}},w=y,I=(a("0b7b"),Object(u["a"])(w,C,k,!1,null,"46892658",null)),P=I.exports,x={name:"Home",components:{GretingsPart:P}},O=x,D=Object(u["a"])(O,g,_,!1,null,null,null),S=D.exports,$=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",[a("div",{staticClass:"goods-block container"},[a("div",{staticClass:"goods-block__seeds-wrapper"},t._l(t.shopItems,(function(e,s){return a("div",{key:s,staticClass:"goods-block__item-card"},[a("img",{staticClass:"product-title-img",attrs:{src:e.img,alt:""}}),a("p",{staticClass:"title"},[t._v(t._s(e.title))]),a("p",{staticClass:"description"},[a("span",[t._v("Назначение:")]),t._v(" "+t._s(e.description))]),a("div",{staticClass:"btn-price-wrapper"},[a("p",{staticClass:"price"},[a("span",{staticClass:"helper"}),t._v("Цена: "+t._s(e.price)+" грн/кг")]),a("div",{staticClass:"btns"},[a("p",{staticClass:"btn btn-more"},[t._v("Детальніше")]),a("p",{staticClass:"btn buy-btn",on:{click:function(a){return t.buyAction(e)}}},[t._v("Купити")])])])])})),0)]),t.buyPopUpShow?a("buyPopUp",{on:{cancel:function(e){t.buyPopUpShow=!1},confirm:t.goToBasket}}):t._e()],1)},j=[],N=a("5530"),T=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("transition",{attrs:{name:"modal"}},[a("div",{staticClass:"modal-mask"},[a("div",{staticClass:"modal-wrapper",on:{click:function(e){return e.target!==e.currentTarget?null:t.$emit("cancel")}}},[a("div",{staticClass:"modal-container"},[a("h2",{staticClass:"message"},[t._v(t._s(t.confirmMessage))]),a("div",{staticClass:"buttons__block"},[a("button",{staticClass:"btn btn_cancel",on:{click:function(e){return t.$emit("cancel")}}},[t._v("< Продовжити вибір товарів")]),a("button",{staticClass:"btn btn_confirm",on:{click:function(e){return t.$emit("confirm")}}},[t._v("Оформити замовлення")])])])])])])},A=[],B={name:"modalWindow",props:{confirmMessage:{type:String,default:"Дякуємо, товар додано у корзину"}}},E=B,q=(a("34c4"),Object(u["a"])(E,T,A,!1,null,"2619467d",null)),M=q.exports,H={name:"goods",components:{buyPopUp:M},data:function(){return{buyPopUpShow:!1}},mounted:function(){console.log("items",this.shopItems)},computed:{shopItems:function(){return this.$store.getters.getShopItems}},methods:{buyAction:function(t){var e=Object(N["a"])({},t);this.$store.commit("addEllToBasket",e),this.buyPopUpShow=!0,console.log("Busket",this.$store.getters.getBusketItems)},goToBasket:function(){this.$router.push("/basket")}}},X=H,R=(a("6c1b"),Object(u["a"])(X,$,j,!1,null,"2a4730a8",null)),J=R.exports,U=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",{staticClass:"container"},[0===t.basketItems.length?a("p",[t._v("Корзина пуста")]):a("div",{staticClass:"basket-table"},[t._m(0),a("table",{staticClass:"table table-head"},t._l(t.basketItems,(function(e,s){return a("tr",{key:s},[a("td",{staticClass:"title"},[t._v(" "+t._s(e.title)+" ")]),a("td",{staticClass:"quantity"},[a("span",{staticClass:"minus-quantity quantity-btn",on:{click:function(a){return t.minusAction(e.id)}}},[t._v("-")]),t._v(" "+t._s(e.quantity)+" "),a("span",{staticClass:"plus-quantity quantity-btn",on:{click:function(a){return t.plusAction(e.id)}}},[t._v("+")])]),a("td",{staticClass:"price"},[t._v(" "+t._s(e.price)+" ")]),a("td",{staticClass:"delete-button"},[a("svg",{staticClass:"delete-item svg-inline--fa fa-trash fa-w-14",attrs:{"aria-hidden":"true",focusable:"false","data-prefix":"fas","data-icon":"trash",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 448 512"},on:{click:function(a){return t.deleteItem(e.id)}}},[a("path",{attrs:{fill:"#A8B6C7",d:"M432 32H312l-9.4-18.7A24 24 0 0 0 281.1 0H166.8a23.72 23.72 0 0 0-21.4 13.3L136 32H16A16 16 0 0 0 0 48v32a16 16 0 0 0 16 16h416a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16zM53.2 467a48 48 0 0 0 47.9 45h245.8a48 48 0 0 0 47.9-45L416 128H32z"}})])])])})),0),a("div",{staticClass:"total-price-wrapper"},[a("p",{staticClass:"total-price"},[t._v("Разом: "+t._s(t.totalPrice)+" грн")])])]),a("h2",{staticClass:"form-title"},[t._v("Оформлення замовлення")]),a("form",{attrs:{action:"../../server/mail.php",method:"post"}},[a("div",{staticClass:"buy-form"},[a("div",{staticClass:"form-item input-item"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.personalData.name,expression:"personalData.name"}],staticClass:"name-input",class:{used:t.personalData.name.length},attrs:{type:"text",name:"name"},domProps:{value:t.personalData.name},on:{input:function(e){e.target.composing||t.$set(t.personalData,"name",e.target.value)}}}),a("label",[t._v("ПІБ")])]),a("div",{staticClass:"form-item input-item"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.personalData.phone,expression:"personalData.phone"},{name:"mask",rawName:"v-mask",value:"+38 (###) ###-##-##",expression:"'+38 (###) ###-##-##'"}],class:{used:t.personalData.phone.length},attrs:{type:"text",name:"phone"},domProps:{value:t.personalData.phone},on:{input:function(e){e.target.composing||t.$set(t.personalData,"phone",e.target.value)}}}),a("label",[t._v("Телефон")])]),a("div",{directives:[{name:"click-outside",rawName:"v-click-outside",value:t.hideDropDawn,expression:"hideDropDawn"}],staticClass:"form-item input-item"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.currentCity,expression:"currentCity"}],class:{used:t.currentCity.length},attrs:{type:"text",name:"delivery",autocomplete:"off"},domProps:{value:t.currentCity},on:{focus:function(e){t.showDropdawn=!0},input:function(e){e.target.composing||(t.currentCity=e.target.value)}}}),a("label",[t._v("Місто/село")]),t.showDropdawn?a("div",{staticClass:"dropdown-items"},[a("ul",{staticClass:"search-block"},t._l(t.sortedCity,(function(e,s){return a("li",{key:s,staticClass:"cityItem",on:{click:function(a){return t.selectAction(e)}}},[t._v(" "+t._s(e.Description)+" ")])})),0)]):t._e()]),a("select",{staticClass:"selectPostOffice",class:{"disabled-color":t.NovaPoshtaPostOffices.length<1},attrs:{name:"postOffice",disabled:t.NovaPoshtaPostOffices.length<1}},[a("option",{attrs:{disabled:"",selected:"selected"}},[t._v("Місто доставки")]),t._l(t.NovaPoshtaPostOffices,(function(e,s){return a("option",{key:s},[t._v(t._s(e.Description))])}))],2),a("input",{attrs:{type:"text",name:"basket",hidden:""},domProps:{value:t.basketItems}}),a("input",{attrs:{type:"text",name:"totalPrice",hidden:""},domProps:{value:t.totalPrice}}),t._m(1)])])])},F=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("table",{staticClass:"table table-head"},[a("tr",{staticClass:"table-title-part"},[a("th",{staticClass:"table-title"},[t._v(" Назва товару ")]),a("th",{staticClass:"table-quantity"},[t._v(" Кількість (кг) ")]),a("th",{staticClass:"table-price"},[t._v(" Ціна (грн/кг) ")]),a("th",{staticClass:"table-empty"})])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"goods-btn-wrapper"},[a("button",{staticClass:"goods-btn",attrs:{type:"submit"}},[t._v("Купити")])])}],G=(a("4de4"),a("c975"),a("498a"),a("b85c")),L=a("511c"),Q=a.n(L),W=a("e67d"),z=a.n(W),V={name:"Basket",data:function(){return{totalPrice:0,NavaPoshtaItems:[],currentCity:"",showDropdawn:!1,NovaPoshtaPostOffices:[],personalData:{name:"",phone:"",city:"",postOffice:""}}},directives:{ClickOutside:z.a},created:function(){this.totalPriceCount(),this.getDataFromNPApi()},computed:{basketItems:function(){return this.$store.getters.getBusketItems},filteredCity:function(){var t=this;return this.NavaPoshtaItems.filter((function(e){return-1!==e.Description.toLowerCase().indexOf(t.currentCity.trim().toLowerCase())}))},sortedCity:function(){return this.currentCity.trim().length>1?this.filteredCity.sort((function(t,e){return t.Description.length>e.Description.length?1:-1})):this.filteredCity}},watch:{basketItems:function(){console.log("bum"),this.totalPriceCount()},currentCity:function(){this.NovaPoshtaPostOffices.length>0&&(this.NovaPoshtaPostOffices=[])}},methods:{getDataFromNPApi:function(){var t=this,e="e2466eeb335cb4638e194df59b42dc88",a=function(e){t.NavaPoshtaItems=e.data,console.log(t.NavaPoshtaItems)},s=new Q.a;s.getCities(a,e)},getPostOffices:function(t){var e=this,a="e2466eeb335cb4638e194df59b42dc88",s=function(t){console.log("city",t),e.NovaPoshtaPostOffices=t.data},i={CityRef:t},n=new Q.a;n.getWarehouses(s,a,i)},deleteItem:function(t){this.$store.commit("removeElFromBasket",t)},minusAction:function(t){this.$store.commit("minusQuantity",t),this.totalPriceCount()},plusAction:function(t){this.$store.commit("plusQuantity",t),this.totalPriceCount()},totalPriceCount:function(){var t,e=0,a=Object(G["a"])(this.basketItems);try{for(a.s();!(t=a.n()).done;){var s=t.value;e+=s.price*s.quantity,console.log("Price",e,"itemPrice",s.price,"dd",s.quantity)}}catch(i){a.e(i)}finally{a.f()}this.totalPrice=e},selectAction:function(t){this.currentCity=t.Description,this.personalData.city=t.Description,this.getPostOffices(t.Ref),console.log(this.personalData),this.showDropdawn=!1},hideDropDawn:function(){this.showDropdawn=!1}}},Y=V,K=(a("e3c6"),Object(u["a"])(Y,U,F,!1,null,"0439a81c",null)),Z=K.exports;s["a"].use(h["a"]);var tt=[{path:"/",name:"Home",component:S},{path:"/goods",name:"Goods",component:J},{path:"/basket",name:"Basket",component:Z}],et=new h["a"]({routes:tt}),at=et,st=a("2f62"),it=(a("c740"),a("a434"),"Basket-storage"),nt={state:{basketItems:[]},mutations:{setState:function(t){t.basketItems=JSON.parse(localStorage.getItem(it)||[]),console.log("here")},addEllToBasket:function(t,e){var a=t.basketItems.findIndex((function(t){return t.id===e.id}));-1!==a?t.basketItems[a].quantity++:(e.quantity=1,t.basketItems.push(e)),localStorage.setItem(it,JSON.stringify(t.basketItems))},removeElFromBasket:function(t,e){var a=t.basketItems.findIndex((function(t){return t.id===e}));t.basketItems.splice(a,1),localStorage.setItem(it,JSON.stringify(t.basketItems))},plusQuantity:function(t,e){var a=t.basketItems.findIndex((function(t){return t.id===e}));t.basketItems[a].quantity++,localStorage.setItem(it,JSON.stringify(t.basketItems))},minusQuantity:function(t,e){var a=t.basketItems.findIndex((function(t){return t.id===e}));t.basketItems[a].quantity>1&&(t.basketItems[a].quantity--,localStorage.setItem(it,JSON.stringify(t.basketItems)))}},getters:{getBusketItems:function(t){return t.basketItems}}},ot={state:{shopItems:[{id:"f331a425",title:"Семена клевера белого",description:"декорация ландшафта, выращивание на зеленый корм, сено.",price:299,img:a("234d")},{id:"f5d40aca",title:"Семена люцерны",description:"подходит для сидерации и зеленого корма.",price:85,img:a("2657")},{id:"f3b642cf",title:"Семена выки яровой",description:"выращивание для сена и зеленого корма.",price:20,img:a("76af")},{id:"f4b8b6b2",title:"Семена клевера красного",description:"полезно для медоносности и почвы. Выращивание на зеленый корм и сено.",price:75,img:a("c13b")},{id:"f4e196f9",title:"Семена райграса газонного",description:"подходит для газона, сидерации, зеленого корма.",price:65,img:a("a26f")},{id:"f4f103g9",title:"Семена горчицы желтой",description:"выращивание на зеленый корм, для борьбы с сорняками, удобрения почвы.",price:20,img:a("f3ae")}]},mutations:{},getters:{getShopItems:function(t){return t.shopItems}}};s["a"].use(st["a"]);var rt=new st["a"].Store({modules:{basket:nt,shopItems:ot}}),ct=a("41fb"),lt=a.n(ct),ut=a("b6d0");a("f5df1"),a("b603");s["a"].use(ut["a"]),s["a"].use(lt.a),s["a"].config.productionTip=!1,new s["a"]({router:at,store:rt,render:function(t){return t(b)}}).$mount("#app")},"60f4":function(t,e,a){},"6a6a":function(t,e,a){t.exports=a.p+"img/basket.cd8dc329.svg"},"6c1b":function(t,e,a){"use strict";var s=a("60f4"),i=a.n(s);i.a},"6ec0":function(t,e,a){"use strict";var s=a("b1c0"),i=a.n(s);i.a},"76af":function(t,e,a){t.exports=a.p+"img/vukajarova.e0e017d2.jpg"},"82c2":function(t,e,a){},"9c5a":function(t,e,a){},a168:function(t,e,a){"use strict";var s=a("3fc9"),i=a.n(s);i.a},a26f:function(t,e,a){t.exports=a.p+"img/rajgras.fa4b209e.jpg"},a6aa:function(t,e,a){t.exports=a.p+"img/close-btn.28b94d77.svg"},b1c0:function(t,e,a){},b603:function(t,e,a){},c13b:function(t,e,a){t.exports=a.p+"img/kleverkrasnuj.7c428a9c.jpg"},e3c6:function(t,e,a){"use strict";var s=a("37d2"),i=a.n(s);i.a},f3ae:function(t,e,a){t.exports=a.p+"img/girczucia.99d7f822.jpg"},f481:function(t,e,a){t.exports=a.p+"img/phone-icon.718b1fcd.svg"}});
//# sourceMappingURL=app.5cd9b2ed.js.map