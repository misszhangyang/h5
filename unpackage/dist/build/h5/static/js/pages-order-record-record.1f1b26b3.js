(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-order-record-record"],{"00e0":function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={data:function(){return{TabCur:0,tab:["顾客记录","历史消费"]}},methods:{tabSelect:function(t){this.TabCur=t.currentTarget.dataset.id,this.scrollLeft=60*(t.currentTarget.dataset.id-1)}}};e.default=n},"0668":function(t,e,a){var n=a("1352");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var i=a("4f06").default;i("111bc408",n,!0,{sourceMap:!1,shadowMode:!1})},1352:function(t,e,a){var n=a("24fb");e=n(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */\r\n/* 页面左右间距 */\r\n/* 文字尺寸 */\r\n/*文字颜色*/\r\n/* 边框颜色 */\r\n/* 图片加载中颜色 */\r\n/* 行为相关颜色 */.member .head[data-v-3ad4465e]{padding:20px 10px;display:-webkit-box;display:-webkit-flex;display:flex}.member .head .head-l img[data-v-3ad4465e]{width:45px;height:45px;border-radius:50%}.member .head .head-m[data-v-3ad4465e]{padding:0 10px;-webkit-box-flex:1;-webkit-flex-grow:1;flex-grow:1;padding-top:5px;line-height:20px}.member .head .head-r[data-v-3ad4465e]{padding-top:18px}.member .head .head-r uni-text[data-v-3ad4465e]{padding-right:5px;color:#b7c7d4}.member .BH10[data-v-3ad4465e]{height:10px;background-color:#f3f3f3}.member .beizhu[data-v-3ad4465e]{font-size:12px;padding:20px 10px}.member .H50[data-v-3ad4465e]{height:60px}.member .btn[data-v-3ad4465e]{position:fixed;bottom:0;left:0;background-color:#fff;width:100%}',""]),t.exports=e},"1b39":function(t,e,a){"use strict";a.r(e);var n=a("00e0"),i=a.n(n);for(var r in n)"default"!==r&&function(t){a.d(e,t,(function(){return n[t]}))}(r);e["default"]=i.a},c7da:function(t,e,a){"use strict";var n,i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"member"},[n("v-uni-view",{staticClass:"head"},[n("v-uni-view",{staticClass:"head-l"},[n("img",{attrs:{src:a("0b11")}})]),n("v-uni-view",{staticClass:"head-m"},[t._v("普通会员"),n("br"),n("span",[t._v("13888888888")])]),n("v-uni-view",{staticClass:"head-r"},[n("v-uni-text",{staticClass:"lg cuIcon-comment"}),t._v("消息")],1)],1),n("v-uni-view",{staticClass:"BH10"}),n("v-uni-scroll-view",{staticClass:"bg-white nav text-center",attrs:{"scroll-x":!0}},t._l(t.tab,(function(e,a){return n("v-uni-view",{key:a,staticClass:"cu-item",class:a==t.TabCur?"text-blue cur":"",attrs:{"data-id":a},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.tabSelect.apply(void 0,arguments)}}},[t._v(t._s(e)+t._s(a))])})),1),n("v-uni-view",{staticClass:"beizhu"},[t._v("添加顾客备注，下次导购更轻松哦~")]),n("v-uni-view",{staticClass:"cu-timeline"},[n("v-uni-view",{staticClass:"cu-time"},[t._v("昨天")]),n("v-uni-view",{staticClass:"cu-item cur"},[n("v-uni-view",{staticClass:"content shadow-blur"},[n("v-uni-text",[t._v("2019-1-23 22:22  店长")]),n("br"),t._v("【广州市】快件已到达地球")],1)],1),n("v-uni-view",{staticClass:"cu-item "},[n("v-uni-view",{staticClass:"content "},[n("v-uni-text",[t._v("2019-1-23 22:22  店长")]),n("br"),t._v("这是第一次，我家的铲屎官走了这么久。久到足足有三天！！")],1)],1),n("v-uni-view",{staticClass:"cu-item "},[n("v-uni-view",{staticClass:"content "},[n("v-uni-text",[t._v("2019-1-23 22:22  店长")]),n("br"),t._v("这是第一次，我家的铲屎官走了这么久。久到足足有三天！！")],1)],1)],1),n("v-uni-view",{staticClass:"H50"}),n("v-uni-view",{staticClass:"btn padding flex flex-direction"},[n("v-uni-button",{staticClass:"cu-btn bg-red lg"},[t._v("销售开单")])],1)],1)},r=[];a.d(e,"b",(function(){return i})),a.d(e,"c",(function(){return r})),a.d(e,"a",(function(){return n}))},f649:function(t,e,a){"use strict";a.r(e);var n=a("c7da"),i=a("1b39");for(var r in i)"default"!==r&&function(t){a.d(e,t,(function(){return i[t]}))}(r);a("f9c5");var s,c=a("f0c5"),d=Object(c["a"])(i["default"],n["b"],n["c"],!1,null,"3ad4465e",null,!1,n["a"],s);e["default"]=d.exports},f9c5:function(t,e,a){"use strict";var n=a("0668"),i=a.n(n);i.a}}]);