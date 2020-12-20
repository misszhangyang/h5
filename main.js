import Vue from 'vue'
import App from './App'
import Vuex from 'vuex'
import './assets/style/border.css'
import './assets/style/main.css'
import $ from './assets/style/jquery.js'
import http from './common/axios.js'  
import json from './json2' //测试用数据
import cuCustom from './colorui/components/cu-custom.vue'  //菜单栏头部组件
import addressPicker from './colorui/components/address-picker.vue'  //地址选择组件

Vue.component('cu-custom',cuCustom)
Vue.component('address-picker',addressPicker)

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
