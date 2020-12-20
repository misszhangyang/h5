<template>
	<view>
		<cu-custom bgColor="bg-gradual-blue" :isBack="true"><block slot="content">消息通知</block></cu-custom>
		<view class="cu-bar bg-white solid-bottom top">
			<view class="action">
				<text class="cuIcon-title text-blue"></text>{{msg}}
			</view>
		</view>
		<view class="bg-white padding-lr">
			<view class="solids-bottom padding-xs flex align-center">
				<view class="padding">60</view>
				<view class="flex-sub text-center">
					<view class="solid-bottom text-xsl padding">
						<text class=" cuIcon-roundcheckfill text-green"></text>
					</view>
					<view class="padding">用于图标、数字等特大显示</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				msg:'',
				ColorList: this.ColorList,
			};
		},
		onLoad(option) {
		    this.msg = JSON.parse(decodeURIComponent(option.item));
		},
		methods: {
			
		}
	}
</script>

<style>
.top{
	margin-top: 80rpx;
}
</style>
