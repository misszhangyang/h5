(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-templace-yunfei-yunfei"],{"59ed":function(t,n,i){var e=i("24fb");n=e(!1),n.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */\r\n/* 页面左右间距 */\r\n/* 文字尺寸 */\r\n/*文字颜色*/\r\n/* 边框颜色 */\r\n/* 图片加载中颜色 */\r\n/* 行为相关颜色 */.yunfei .mbxx[data-v-2a24409c]{font-weight:600;padding:15px 10px}.yunfei .row[data-v-2a24409c]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;position:relative;padding:0 %?30?%;height:%?110?%;background:#fff}.yunfei .row .tit[data-v-2a24409c]{-webkit-flex-shrink:0;flex-shrink:0;width:%?120?%;font-size:%?30?%;color:#303133}.yunfei .row .input[data-v-2a24409c]{-webkit-box-flex:1;-webkit-flex:1;flex:1;font-size:%?30?%;color:#303133}.yunfei .row .icon-shouhuodizhi[data-v-2a24409c]{font-size:%?36?%;color:#909399}.yunfei .b-b[data-v-2a24409c]{border-bottom:1px solid #f9f9f9}.yunfei .BH8[data-v-2a24409c]{background-color:#f5f5f5;height:8px}.yunfei .psdq[data-v-2a24409c]{font-weight:600;padding:10px 10px 5px}.yunfei .shun[data-v-2a24409c]{padding:0 10px 5px;font-size:12px}.yunfei .sheng[data-v-2a24409c]{padding:15px 10px}.yunfei .bao[data-v-2a24409c]{font-size:12px;padding:10px 10px 0}.yunfei .con[data-v-2a24409c]{padding:10px;border-radius:3px;font-size:12px}.yunfei .table table[data-v-2a24409c]{border:1px solid #f0f1f3}.yunfei .table table tr td[data-v-2a24409c]{text-align:center;line-height:35px;height:35px}.yunfei .table table tr td uni-input[data-v-2a24409c]{line-height:35px;font-weight:600}.yunfei .btn[data-v-2a24409c]{padding:40px 10px 0}',""]),t.exports=n},7209:function(t,n,i){"use strict";var e=i("ee27");Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var a=e(i("fa86")),r={data:function(){return{index:-1,picker:["喵喵喵","汪汪汪","哼唧哼唧"],resultInfo:{result:"请选择地区"},form:{name:"",province:"",city:"",county:""}}},components:{wPicker:a.default},methods:{PickerChange:function(t){this.index=t.detail.value},toggleTab:function(){this.$refs["region"].show()},onConfirm:function(t){console.log(t),this.resultInfo=t,this.form.province=t.checkArr[0],this.form.city=t.checkArr[1],this.form.county=t.checkArr[2],console.log(this.form)}}};n.default=r},"7bb0":function(t,n,i){"use strict";i.r(n);var e=i("7ffe"),a=i("e8c1");for(var r in a)"default"!==r&&function(t){i.d(n,t,(function(){return a[t]}))}(r);i("83de");var s,o=i("f0c5"),c=Object(o["a"])(a["default"],e["b"],e["c"],!1,null,"2a24409c",null,!1,e["a"],s);n["default"]=c.exports},"7ffe":function(t,n,i){"use strict";var e={wPicker:i("fa86").default},a=function(){var t=this,n=t.$createElement,i=t._self._c||n;return i("v-uni-view",{staticClass:"yunfei"},[i("v-uni-view",{staticClass:"mbxx b-b"},[t._v("模板信息")]),i("v-uni-view",{staticClass:"cu-form-group b-b"},[i("v-uni-view",{staticClass:"title"},[t._v("模板名称")]),i("v-uni-input",{attrs:{placeholder:"请输入",name:"input"},model:{value:t.form.name,callback:function(n){t.$set(t.form,"name",n)},expression:"form.name"}})],1),i("v-uni-view",{staticClass:"row b-b"},[i("v-uni-text",{staticClass:"tit"},[t._v("发货地")]),i("v-uni-view",{staticClass:"result",on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.toggleTab.apply(void 0,arguments)}}},[t._v(t._s(t.resultInfo.result))]),i("w-picker",{ref:"region",attrs:{mode:"region",defaultVal:["北京市","市辖区","东城区"]},on:{confirm:function(n){arguments[0]=n=t.$handleEvent(n),t.onConfirm.apply(void 0,arguments)}}})],1),i("v-uni-view",{staticClass:"cu-form-group b-b"},[i("v-uni-view",{staticClass:"title"},[t._v("模板类型")]),i("v-uni-picker",{attrs:{value:t.index,range:t.picker},on:{change:function(n){arguments[0]=n=t.$handleEvent(n),t.PickerChange.apply(void 0,arguments)}}},[i("v-uni-view",{staticClass:"picker"},[t._v(t._s(t.index>-1?t.picker[t.index]:"包邮模板"))])],1)],1),i("v-uni-view",{staticClass:"BH8"}),i("v-uni-view",{staticClass:"psdq "},[t._v("配送地区")]),i("v-uni-view",{staticClass:"shun b-b"},[i("v-uni-radio",{staticStyle:{transform:"scale(0.5)"},attrs:{value:"r1"}}),t._v("包邮地区统一顺丰包邮，勾选即同意《顺丰包邮协议》"),i("v-uni-text",{staticClass:"lg text-gray cuIcon-question"})],1),i("v-uni-view",{staticClass:"sheng b-b"},[t._v("24省列表")]),i("v-uni-view",{staticClass:" text-grey bao"},[t._v("包邮省市")]),i("v-uni-view",{staticClass:"padding-sm b-b"},[i("v-uni-view",{staticClass:"con bg-gray text-grey"},[t._v("1、2、3")])],1),i("v-uni-view",{staticClass:"mbxx b-b"},[t._v("默认运费")]),i("v-uni-view",{staticClass:"table"},[i("table",{attrs:{width:"100%",border:!0}},[i("tr",[i("td",[t._v("首件")]),i("td",[t._v("运费")]),i("td",[t._v("续件")]),i("td",[t._v("运费")])]),i("tr",[i("td",[i("v-uni-input")],1),i("td",[i("v-uni-input")],1),i("td",[i("v-uni-input")],1),i("td",[i("v-uni-input")],1)])])]),i("v-uni-view",{staticClass:"btn bg-white flex flex-direction"},[i("v-uni-button",{staticClass:"cu-btn bg-red lg"},[t._v("保存")])],1)],1)},r=[];i.d(n,"b",(function(){return a})),i.d(n,"c",(function(){return r})),i.d(n,"a",(function(){return e}))},"83de":function(t,n,i){"use strict";var e=i("bdf1"),a=i.n(e);a.a},bdf1:function(t,n,i){var e=i("59ed");"string"===typeof e&&(e=[[t.i,e,""]]),e.locals&&(t.exports=e.locals);var a=i("4f06").default;a("77de9281",e,!0,{sourceMap:!1,shadowMode:!1})},e8c1:function(t,n,i){"use strict";i.r(n);var e=i("7209"),a=i.n(e);for(var r in e)"default"!==r&&function(t){i.d(n,t,(function(){return e[t]}))}(r);n["default"]=a.a}}]);