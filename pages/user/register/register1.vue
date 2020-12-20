<template>
	<view class="container" v-if="status == 'login'">
		<view class="left-bottom-sign"></view>
		<view class="back-btn yticon icon-zuojiantou-up" @click="navBack"></view>
		<view class="right-top-sign"></view>
		<!-- 设置白色背景防止软键盘把下部绝对定位元素顶上来盖住输入框等 -->
		<view class="wrapper">
			<view class="left-top-sign">FORGET</view>
			<view class="welcome">
				在线预约
			</view>
			<!-- <view class="cu-bar margin-top bg-white">
				<view class="action">
					<radio-group @change="SetBorderSize">
						<label class="margin-left-sm">
							<radio class="radio yellow" value="" checked></radio>
							<text class="margin-left-sm">员工</text>
						</label>
						<label class="margin-left-sm">
							<radio class="radio yellow" value="s"></radio>
							<text class="margin-left-sm">店主</text>
						</label>
					</radio-group>
				</view>
			</view> -->
			<view class="input-content">
				<view class="input-item">
					<text class="tit">姓名<span style="color: red;">*</span></text>
					<input 
						type="number" 
						:value="mobile" 
						placeholder="请输入姓名"
						maxlength="11"
						data-key="mobile"
						@input="inputChange"
					/>
				</view>
				<view class="input-item">
					<text class="tit">地址<span style="color: red;">*</span></text>
					<address-picker  @change="change">{{address}}</address-picker>
					<!-- <input class="address-input"><address-picker  @change="change">{{address}}</address-picker></input> -->
				</view>
				<view class="input-item">
					<text class="tit">详细地址<span style="color: red;">*</span></text>
					<input 
						type="mobile" 
						value="" 
						placeholder-class="input-empty"
						maxlength="20"
						password 
						placeholder="请输入详细地址"
						data-key="password"
						@input="inputChange"
						@confirm="toLogin"
						style="width: 100%;"
					/>
				</view>
				<view class="input-item">
					<text class="tit">详细地址<span style="color: red;">*</span></text>
					<input 
						type="mobile" 
						value="" 
						placeholder-class="input-empty"
						maxlength="20"
						password 
						placeholder="请输入详细地址"
						data-key="password"
						@input="inputChange"
						@confirm="toLogin"
						style="width: 100%;"
					/>
				</view>
				<view class="input-item">
					<text class="tit">推荐人编号</text>
					<input 
						type="mobile" 
						value="" 
						placeholder-class="input-empty"
						maxlength="20"
						password 
						data-key="password"
						@input="inputChange"
						@confirm="toLogin"
						style="width: 100%;"
					/>
				</view>
			</view>
			<!-- <button class="check-btn" @click="toReset" :disabled="cheaking">获取验证码</button> -->
			<button class="confirm-btn" @click="toReset" :disabled="logining">提交预约</button>
		</view>
	</view>
</template>

<script>
import {  
        pmapMutations, mapMutations
    } from 'vuex';
	
	export default{
		data(){
			return {
				mobile: '',
				password: '',
				logining: false,
				status: 'login',
				cheaking: true,
				address: '请选择地址'
			}
		},
		onLoad(){
			
		},
		methods: {
			...mapMutations(['login']),
			inputChange(e){
				const key = e.currentTarget.dataset.key;
				this[key] = e.detail.value;
			},
			navBack(){
				uni.navigateBack();
			},
			toReset(){
				this.$api.msg('去重置');
			},
			toForget(){
				// this.$api.msg('去忘记密码页面');
				uni.navigateTo({
					url: '/pages/index/index'
				})  
			},
			change(data) {
				this.address = data.data.join('')
				console.log(data.data.join(''))
			},
			async toLogin(){
				this.logining = true;
				const {mobile, password} = this;
				/* 数据验证模块
				if(!this.$api.match({
					mobile,
					password
				})){
					this.logining = false;
					return;
				}
				*/
				const sendData = {
					mobile,
					password
				};
				const result = await this.$api.json.userInfo;
				if(result.status === 1){
					this.login(result.data);
                    uni.navigateBack();  
				}else{
					this.$api.msg(result.msg);
					this.logining = false;
				}
			}
		},

	}
</script>
<style lang='scss'>
page{
		background: #fff;
	}
	.container{
		padding-top: 115px;
		position:relative;
		width: 100vw;
		height: 100vh;
		overflow: hidden;
		background: #fff;
	}
	.wrapper{
		position:relative;
		z-index: 90;
		background: #fff;
		padding-bottom: 40upx;
	}
	.back-btn{
		position:absolute;
		left: 40upx;
		z-index: 9999;
		padding-top: var(--status-bar-height);
		top: 40upx;
		font-size: 40upx;
		color: $font-color-dark;
	}
	.left-top-sign{
		font-size: 120upx;
		color: $page-color-base;
		position:relative;
		left: -16upx;
	}
	.right-top-sign{
		position:absolute;
		top: 80upx;
		right: -30upx;
		z-index: 95;
		&:before, &:after{
			display:block;
			content:"";
			width: 400upx;
			height: 80upx;
			background: #b4f3e2;
		}
		&:before{
			transform: rotate(50deg);
			border-radius: 0 50px 0 0;
		}
		&:after{
			position: absolute;
			right: -198upx;
			top: 0;
			transform: rotate(-50deg);
			border-radius: 50px 0 0 0;
			/* background: pink; */
		}
	}
	.left-bottom-sign{
		position:absolute;
		left: -270upx;
		bottom: -320upx;
		border: 100upx solid #d0d1fd;
		border-radius: 50%;
		padding: 180upx;
	}
	.welcome{
		position:relative;
		left: 50upx;
		top: -90upx;
		font-size: 46upx;
		color: #555;
		text-shadow: 1px 0px 1px rgba(0,0,0,.3);
	}
	.input-content{
		padding: 0 60upx;
	}
	.input-item{
		display:flex;
		flex-direction: column;
		align-items:flex-start;
		justify-content: center;
		padding: 0 30upx;
		background:$page-color-light;
		height: 120upx;
		border-radius: 4px;
		/* margin-bottom: 50upx; */
		&:last-child{
			margin-bottom: 0;
		}
		.tit{
			height: 50upx;
			line-height: 56upx;
			font-size: $font-sm+2upx;
			color: $font-color-base;
		}
		input{
			height: 60upx;
			font-size: $font-base + 2upx;
			color: $font-color-dark;
			width: 100%;
		}	
	}
	
	.input-item {
		input{
			background: #E8F0FE;
		}
	}
	
	.input-check-item{
		display:flex;
		flex-direction: column;
		align-items:flex-start;
		justify-content: center;
		padding: 0 30upx;
		background:$page-color-light;
		height: 120upx;
		border-radius: 4px;
		margin-bottom: 50upx;
		&:last-child{
			margin-bottom: 0;
		}
		.tit{
			height: 50upx;
			line-height: 56upx;
			font-size: $font-sm+2upx;
			color: $font-color-base;
		}
		input{
			height: 60upx;
			font-size: $font-base + 2upx;
			color: $font-color-dark;
			width: 100%;
		}	
	}
	
	.address-input{
		height: 0upx;
		font-size: $font-base + 2upx;
		color: $font-color-dark;
		width: 100%;
	}
	
	.check-btn{
		margin-left: 2%;
		width: 25%;
		height: 33px;
		line-height: 33upx;
		margin-top: -9%;
		margin-right: 11%;
		float: right;
		background: #1cbbb4  !important;
		color: #fff !important;
		font-size: 10px;
		padding-top: 16rpx;
		/* &:after{
			border-radius: 100px;
		} */
	}

	.confirm-btn{
		margin-left: 9%;
		width: 600upx;
		height: 76upx;
		line-height: 76upx;
		border-radius: 50px;
		margin-top: 70upx;
		margin: 70upx auto;
		background: $uni-color-primary;
		color: #fff;
		font-size: $font-lg;
		&:after{
			border-radius: 100px;
		}
	}
	.forget-section{
		font-size: $font-sm+2upx;
		color: $font-color-spec;
		text-align: center;
		margin-top: 40upx;
	}
	.register-section{
		position:absolute;
		left: 0;
		bottom: 50upx;
		width: 100%;
		font-size: $font-sm+2upx;
		color: $font-color-base;
		text-align: center;
		text{
			color: $font-color-spec;
			margin-left: 10upx;
		}
	}
	.action{
		margin: 0 auto !important;
		margin-bottom: 5% !important;
		margin-top: -10% !important
	}
</style>
