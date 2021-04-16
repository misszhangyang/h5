import Vue from 'vue'
import App from './App'
import Vuex from 'vuex'
import './assets/style/border.css'
import './assets/style/main.css'
import $ from './assets/style/jquery.js'
import http from './common/axios.js'  
import uView from 'uview-ui';
Vue.use(uView);


import json from './json2' //测试用数据
// import cuCustom from './colorui/components/col-custom.vue'  //菜单栏头部组件
// import addressPicker from './colorui/components/col-address-picker.vue'  //地址选择组件
import uniSearchBar from './components/uni-searchbar/uni-searchbar'  //搜素框组件
import uniSentedControl from './components/uni/uni-segmented-control/uni-segmented-control.vue' //分段框选择器组件
import uniSection from './components/uni/uni-section/uni-section.vue' //列表选择组件



// Vue.component('cu-custom',cuCustom)
// Vue.component('address-picker',addressPicker)
Vue.component('uni-search-bar',uniSearchBar)
Vue.component('uni-segmented-control',uniSentedControl)
Vue.component('uni-section',uniSection)




Vue.use(Vuex)

Vue.config.productionTip = false

App.mpType = 'app' 
//统一提示方便全局修改
const msg = (title,  icon='none',duration=2000, mask=false)=>{
	if(Boolean(title) === false){
		return;
	}
	uni.showToast({
		title,
		duration,
		mask,
		icon
	});
} 
Vue.prototype.$api = {msg, json, http,$};  

const app = new Vue({
    ...App
})
app.$mount()

const store = new Vuex.Store({
	state: {
		hasLogin: false,
		userInfo: {},
	},
	mutations: {
		login(state, provider) {
			state.hasLogin = true;
			state.userInfo = provider;
			uni.setStorage({//缓存用户登陆状态
			    key: 'userInfo',  
			    data: provider  
			}) 
			console.log(state.userInfo);
		},
		logout(state) {
			state.hasLogin = false;
			state.userInfo = {};
			uni.removeStorage({  
                key: 'userInfo'  
            })
		}
	},
	actions: {
	
	}
})

export default store
