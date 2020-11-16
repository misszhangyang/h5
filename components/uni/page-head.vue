<template name="page-head">
	<view class="uni-page-head1">
		<view class="uni-page-head-title">{{title}}</view>
	</view>
</template>
<script>
	export default {
		name: "page-head",
		props: {
			title: {
				type: String,
				default: "预演环境业务测试"
			}
		}
	}
</script>
