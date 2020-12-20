<template>
	<view class="mingxi">
		<cu-custom bgColor="bg-gradual-blue" :isBack="true"><block slot="content">选择注册方式</block></cu-custom>
		<view class="ticheng">
			<block v-for="(item,index) of list" :key="index">
				<li class="tc" @click="jump(item.id)">
					<view class="tc_l">
						<span>在线预约-{{item.card.bank_num.substr(item.card.bank_num.length-4)}}</span><br/>
						<span class="smallText">预约客户经理上门服务，一站搞定POS、条码等多样化 收款需求！{{item.create_time}}</span>
					</view>
					 <view class="tc_2">
						 <img src="@/imgs/5.png" style="float: right;margin-right: 30%;">
					</view> 
				</li>
			</block>
		</view>
	</view>
</template>

<script>
	import uniIcon from "@/components/uni/uni-icon/uni-icon.vue"
	export default {
		data() {
			return {
				list:[],
				num:0,
			};
		},
		onLoad() {  
			this._load()
		},
		components: {uniIcon},
		methods:{
			_load(){ 
				this.list=this.$api.json.get_tx_log
			},
			jump_cash(){
				uni.navigateTo({
					url:'/pages/user/fenxiao/tixian/tixian'
				})
			},
			jump(id){
				//申请提现成功页面
				// uni.navigateTo({
				// 	url:'/pages/user/fenxiao/success/success?id='+id
				// })
				uni.navigateTo({
					url:'/pages/user/register/register1'
				})
			},
			change(e){
				this.num=e 
			}
		}
	}
</script>

<style lang="less">
.mingxi{
	.head{display: flex;margin: 10px 0;margin-top: 45px;}
	.head_l{display: flex;width: 85%;justify-content: space-around;}
	.head_r{width: 15%;text-align: center;}
	.head_l_1{border: 1px solid #F2F2F2;padding: 0px 15px;line-height: 25px;}
	.head_btn{margin:10px 20px 0;border: 1px solid #F2F2F2;padding: 0px 15px;line-height: 25px;}
	.ling{color: #E1461D;border: 1px solid #E1461D;padding: 0px 15px;line-height: 25px;}
	.shouyi{border-top: 1px solid #EBEBEB;border-bottom:1px solid #EBEBEB; background-color: #FAFAFA;display: flex;height: 30px;
	line-height: 30px;padding: 3px 10px;margin-top: 15px;}
	.sy_l{width: 50%;}
	.sy_l span{font-weight: bold;}
	.ticheng li:nth-of-type(odd){ background-color: #EEEEEE;} 
	.ticheng li:nth-of-type(even){background-color: #fff;} 
	.tc{
		width: 80%;
		margin: 10px auto;
		height: 90%;
		display: flex;justify-content: space-between;padding: 10px;line-height: 25px;font-size: 14px;}
	.tc_l{color: #9A9A9A;}
	.tc_l span{font-size: 14px;font-weight: bold;color: #000;}
	.tc_2{color: #E1461D;}
	.tc_2 span{color: #9A9A9A;}
	.smallText{
		color: #626262 !important;
		font-size: 8rpx !important;
	}
}
</style>
