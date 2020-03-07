<template>
	<view>
		<!-- <uni-nav-bar class="navbar-top" left-icon=" " left-text=" " title="分类"></uni-nav-bar> -->
		<view class="con">
			<view class="empty-cart">
				
			</view>
		</view>
	</view>
</template>

<script>
	import uniNavBar from '../../components/uni-nav-bar/uni-nav-bar.vue'
	import api from '@/api/api.js'
	export default {
		data() {
			return {
				
			};
		},
		onLoad() {
			
		},
		components:{
			
		},
		methods:{
			
		}
	}
</script>

<style lang="scss" scoped>
	$textHColor:#fa436a;
	$dftColor:#fff;
	$sideSize:30rpx;
	$dftSize:28rpx;
	$sftSize:24rpx;
	$mftSize:32rpx;
	$bftSize:36rpx;
	$lineHight:1.5;
	$textColor:#909399;
	$paddingBox:20rpx 30rpx;
	.con{
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background-color: #FFFFFF;
		.empty-cart{
			display: flex;
			flex-direction: column;
			align-items: center;
			justify-content: center;
		}
	}
</style>
