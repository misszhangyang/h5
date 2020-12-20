<template>
	<view class="reseller">
		<view class="top">
			 <view class="uni-flex uni-column">
				 <view  style="width: 100%;height:35%;">
					 <view class="title-head">
					 	<navigator url="/pages/user/record/record">
					 		<view class="jl">预演环境业务测试</view>
							<view style="font-size: 15px; margin-top: 20px;">今日收入(元)</view>
					 	</navigator>
					 </view>
				 </view> 
				<view class="BH-TOP"></view>
				<view style="display: block;width:90%;margin:0 auto; height:50%; background: #FFFFFF;border: 1px solid #FFFFFF; border-radius: 5px;margin-bottom:30px;">
						<view class="middle-top">
							<view class="flex">
								<view class="flex-sub  padding-sm margin-xs top-text">0.00</view>
								<view class="flex-sub  padding-sm margin-xs top-right">
									<navigator url="/pages/user/record/record">
										<view class="jl">详情>></view>
									</navigator>
								</view>
							</view>
						</view>
						<view class="BH">
							--------------------------------------------------------------------
						</view>
						<view class="middle-bottom" style="margin-right: 75px;">
							<view class="flex">
								<view class="flex-sub  padding-sm margin-xs ">
									<view>昨日收益</view>
									<view class="bottom-text">0</view>
								</view>
								<view class="flex-sub  padding-sm margin-xs">
									<view>累计已提</view>
									<view class="bottom-text">0</view>
								</view>
							</view>
						</view>
					
					</view>
					<view  style="width: 100%;height:15%;display: block;background:#FFFFFF;">
						<view class="flex">
							<view class=" padding-top  margin-xs ">
								 <img src="@/imgs/6.jpg" style="margin-left: 30%;">
							</view>
							<view class="flex-sub  padding-middle  margin-xs ">
								<swiper class="swiper" vertical="true" autoplay="false" duration="500" interval="5000">
										 <swiper-item v-for="(item, index) in msg" :key="index">
											  <navigator :url="'/pages/user/notice/text?item='+ encodeURIComponent(JSON.stringify(item))">
											     <view>第{{item}}个会员充值成功</view>
											  </navigator>
										 </swiper-item>
								 </swiper>
							</view>
							<view class="padding-top margin-xs">
								 <img src="@/imgs/6.jpg" style="float: right;margin-right: 30%;">
							</view>
						</view>
					</view>
				</view>
		</view>
		<view class="icon">
			<view class="ico" v-for="item of list">
				<navigator :url="item.url">
					<view class="tubiao">
						<img class="img" :src="item.img"></img>
					</view>
					<view class="tt">
						<view class="text">{{item.title}}</view>
					</view>
				</navigator>
			</view>
		</view>
		<view class="kong"></view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				msg:[
					"1",
					"2"
				],
				list: [{
						title: '推广名片',
						img: require("@/imgs/mp.png"),
						url: "/pages/user/spread/spread"
					},
					{
						title: '推广人统计',
						img: require("@/imgs/tj.png"),
						url: "/pages/user/agent/agent"
					},
					{
						title: '佣金明细',
						img: require("@/imgs/q.png"),
						url: "/pages/user/mingxi/mingxi"
					},
					{
						title: '推广排名',
						img: require("@/imgs/dd.png"),
						url: "/pages/user/sort/sort"
					},
				]
			}
		},
		components: {},
		methods: {
			jump_cash() {
				uni.navigateTo({
					url: '/pages/user/cash/cash',
				});
			}
		},
		onPullDownRefresh() {
			setTimeout(function() {
				uni.stopPullDownRefresh();
			}, 2000);
		}
	}
</script>

<style lang="less">
	page {
		background-color: #F5F5F5;
	}

	.reseller {
		background-color: #F5F5F5;
		min-height: 100vh;
		font-size: 14px;

		.top {
			color: #FFFFFF;
			display: flex;
			justify-content: space-between;
			position: relative;
			width: 100%;
			height: 350px;
			background: #29b105; 
			//linear-gradient(top, #4EC28E, #1C9C63);
			.title {
				background-color: #FFFFFF
			}
			.uni-flex {
				width: 100%;
				display: flex;
				flex-direction: row;
			}
			
			.uni-column {
				flex-direction: column;
			}
			
			.flex-item {
				width: 100%;
				height: 200rpx;
				text-align: center;
				line-height: 200rpx;
			}
			
			.flex-item-V {
				width: 100%;
				height: 150rpx;
				text-align: center;
				line-height: 150rpx;
			}
			
			.middle-top{
				width: 100%;
				height: 40%;
				margin-top: 2%;
			
				.flex {
					/* #ifndef APP-NVUE */
					display: flex;
					/* #endif */
					flex-direction: row;
					margin-left: 10%;
				}
				
				.flex-bottom {
					/* #ifndef APP-NVUE */
					display: flex;
					/* #endif */
					flex-direction: row;
					margin-left: 10%;
				}
				
				
				
				.flex-sub {
					width: calc(100% - 96upx - 60upx - 20upx);
				}
				
				.top-text{
					font-size: 40px;
					color: #000000;
					font-weight: 500;
				}
				
				.top-right{
					margin: auto 0;
					color: #FAAC17;
					margin: auto 0 !important;
				}
				
				.bg-grey {
					background-color: #8799a3;
					color: #ffffff;
				}
				
				.padding-sm {
					padding: 20upx;
				}
				
				.margin-xs {
					margin: 10upx;
				}
			}
			
			.middle-bottom{
				width: 100%;
				height: 55%;
				color: #9B9B9B;
				margin-left: 10%;
				.bottom-text{
					font-size: 30px;
					margin-top: 10px;
					margin-left: 10px
				}
			}

			.num {
				font-size: 15px;
				line-height: 25px;
				text-align: center;
				margin-top: 33%;
				width: 33%;

			}
		}

		.jilu {
			font-size: 15px;
			position: absolute;
			left: 65%;
			margin-top: 23%;
		}

		.title-head {
			font-size: 20px;
			position: absolute;
			left: 5%;
			top: 7%;
		}

		.tixian {
			display: flex;
			justify-content: center;
			background-color: #F5F5F5;
			width: 55%;
			height: 60px;
			border-radius: 60px;
			position: absolute;
			bottom: -30px;
			left: 23%;

			.btn {
				margin-top: 7%;
				text-align: center;
				width: 85%;
				background-color: #1C9C63;
				height: 40px;
				border: none;
				border-radius: 50px;
				line-height: 40px;
				color: #FFFFFF;
			}
		}

		.icon {
			display: flex;
			justify-content: space-between;
			flex-wrap: wrap;

			margin-left: 3%;
			margin-right: 3%;
			margin-top: 5%;

			.ico {
				border-radius: 10px;
				border: 1px solid #C0C0C0;
				width: 49%;
				height: 100px;
				margin-top: 10px;
				display: flex;
				border: none;
				font-size: 15px;
				flex-direction: column;
				background-color: #FFFFFF;

				.img {
					width: 32px;
					height: 32px;
				}

				.tubiao {
					margin-top: 20px;
					text-align: center;
				}

				.text {
					color: #8F8F94;
					padding-top: 5px;
					text-align: center;

				}
			}
		}
		
		.swiper{
		   margin-top: 3%;
		   font-size: 13px;
		   text-align: center;
		   padding: auto 0;
		}
		
		
		.kong {
			height: 100px;
		}

		.BH {
			background-color: #9B9B9B;;
			height: 1px;
		}
		
		.BH-TOP {
			background-color: #9B9B9B;;
			height: 5px;
			margin-left: 2%;
			margin-right: 2%;
		}

		.head-title {
			font-size: 20px;
			width: 300px;
			margin-top: 10px
		}
		
		.padding-top{
			padding: 5rpx;
		}
		
		.padding-middle{
			padding: 10rpx;
			color: #9B9B9B;
		}
	}
</style>
