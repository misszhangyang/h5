(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-certification-one-one"],{1661:function(t,n,i){"use strict";var a=i("4bc1"),s=i.n(a);s.a},"4bc1":function(t,n,i){var a=i("6f61");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var s=i("4f06").default;s("55cba197",a,!0,{sourceMap:!1,shadowMode:!1})},"6f61":function(t,n,i){var a=i("24fb");n=a(!1),n.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */\r\n/* 页面左右间距 */\r\n/* 文字尺寸 */\r\n/*文字颜色*/\r\n/* 边框颜色 */\r\n/* 图片加载中颜色 */\r\n/* 行为相关颜色 */.one .BH5[data-v-228b998f]{background-color:#f3f5f4;height:4px}.one .title[data-v-228b998f]{padding:5px 0 15px;font-weight:600}.one .title span[data-v-228b998f]{color:#e74949;padding-right:5px}.one .position[data-v-228b998f]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;padding:5px 0 0}.one .position uni-input[data-v-228b998f]{text-align:right}.one .bian[data-v-228b998f]{border-bottom:1px solid #f7f7f7;padding:10px 10px 20px}.one .shangc[data-v-228b998f]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between}.one .shangc .sc-l[data-v-228b998f]{width:48%;text-align:center;color:#a1a1a1}.one .shangc .sc-l .sc-l-img[data-v-228b998f]{background-color:#f7f7f7;padding:10px 0}.one .shangc .sc-l .sc-l-img img[data-v-228b998f]{width:140px;height:85px}.one .yyzz[data-v-228b998f]{background-color:#f7f7f7;padding:15px;text-align:center}.one .yyzz img[data-v-228b998f]{width:160px;height:100px}.one .H50[data-v-228b998f]{height:50px}.one .btn[data-v-228b998f]{position:fixed;bottom:0;left:0;padding:10px;width:100%;background-color:#fff;z-index:9}',""]),t.exports=n},"7a56":function(t,n,i){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var a={data:function(){return{numList:[{name:"提交资质"},{name:"选择入驻方式"},{name:"等待审核"}],num:0}},methods:{next:function(){uni.navigateTo({url:"/pages/certification/two/two"})}}};n.default=a},"8c14":function(t,n,i){"use strict";var a,s=function(){var t=this,n=t.$createElement,a=t._self._c||n;return a("v-uni-view",{staticClass:"one"},[a("v-uni-view",{staticClass:"bg-white padding"},[a("v-uni-view",{staticClass:"cu-steps"},t._l(t.numList,(function(n,i){return a("v-uni-view",{key:i,staticClass:"cu-item",class:i>t.num?"":"text-blue"},[a("v-uni-text",{staticClass:"num",attrs:{"data-index":i+1}}),t._v(t._s(n.name))],1)})),1)],1),a("v-uni-view",{staticClass:"BH5"}),a("v-uni-view",{staticClass:"padding-sm"},[a("v-uni-view",{staticClass:"position"},[a("v-uni-view",{staticClass:"title"},[a("span",[t._v("*")]),t._v("商家名称")]),a("v-uni-view",{staticClass:"padding-top-xs"},[a("v-uni-input",{attrs:{placeholder:"请输入商家名称",name:"input"}})],1)],1),a("v-uni-view",{staticClass:"position"},[a("v-uni-view",{staticClass:"title"},[a("span",[t._v("*")]),t._v("商家名称")]),a("v-uni-view",{staticClass:"text-blue padding-top-xs"},[t._v("请选择")])],1)],1),a("v-uni-view",{staticClass:"BH5"}),a("v-uni-view",{staticClass:"bian "},[a("v-uni-view",{staticClass:"title"},[a("span",[t._v("*")]),t._v("身份证"),a("v-uni-text",{staticClass:"text-gray"},[t._v("（请上传经营者身份证照片）")])],1),a("v-uni-view",{staticClass:"shangc"},[a("v-uni-view",{staticClass:"sc-l"},[a("v-uni-view",{staticClass:"sc-l-img"},[a("img",{attrs:{src:i("f03e")}})]),a("br"),t._v("身份证正面")],1),a("v-uni-view",{staticClass:"sc-l"},[a("v-uni-view",{staticClass:"sc-l-img"},[a("img",{attrs:{src:i("f03e")}})]),a("br"),t._v("身份证反面")],1)],1)],1),a("v-uni-view",{staticClass:"bian "},[a("v-uni-view",{staticClass:"title"},[a("span",[t._v("*")]),t._v("营业执照"),a("v-uni-text",{staticClass:"text-gray"},[t._v("（请上传最新中国大陆营业执照正面照）")])],1),a("v-uni-view",{staticClass:"yyzz"},[a("img",{attrs:{src:i("f03e")}})])],1),a("v-uni-view",{staticClass:"H50"}),a("v-uni-view",{staticClass:"btn flex flex-direction"},[a("v-uni-button",{staticClass:"cu-btn lg bg-blue",on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.next.apply(void 0,arguments)}}},[t._v("下一步")])],1)],1)},e=[];i.d(n,"b",(function(){return s})),i.d(n,"c",(function(){return e})),i.d(n,"a",(function(){return a}))},a607:function(t,n,i){"use strict";i.r(n);var a=i("8c14"),s=i("c1f9");for(var e in s)"default"!==e&&function(t){i.d(n,t,(function(){return s[t]}))}(e);i("1661");var c,r=i("f0c5"),o=Object(r["a"])(s["default"],a["b"],a["c"],!1,null,"228b998f",null,!1,a["a"],c);n["default"]=o.exports},c1f9:function(t,n,i){"use strict";i.r(n);var a=i("7a56"),s=i.n(a);for(var e in a)"default"!==e&&function(t){i.d(n,t,(function(){return a[t]}))}(e);n["default"]=s.a},f03e:function(t,n,i){t.exports=i.p+"static/img/shen.c02957ad.png"}}]);