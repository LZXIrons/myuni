<template>
	<view>
		<uni-nav-bar class="navbar-top" left-icon="back" left-text=" "  title="浏览记录"></uni-nav-bar>
		<view class="container">
			<view class="list" >
				<view class="item" v-for="(item,index) in list" :key="index">
					<image :src="item.pic" mode="scaleToFill"></image>
					<view class="right">
						<view class="tit">
							{{item.name}}
						</view>
						<view class="desc">
							{{item.characteristic}}
						</view>
						<view class="price">
							优惠价：{{item.minPrice}}
						</view>
					</view>
				</view>
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
				list:[]
			};
		},
		onLoad() {
			let data = uni.getStorageSync('historyItems');
			console.log(data)
			this.list = data
		},
		components:{
			uniNavBar
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
	.list{
		padding: $paddingBox;
		.item{
			display: flex;
			padding: $paddingBox;
			background-color: #fff;
			border-radius: 10rpx;
			margin-bottom: 20rpx;
			.right{
				margin-left: 20rpx;
				line-height: 1.5;
			}
			img,image{
				width: 160rpx;
				height: 160rpx;
			}
		}
	}
</style>
