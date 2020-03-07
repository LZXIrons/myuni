<template>
	<view class="container">
		<!-- <view class="margin-line">
			
		</view> -->
		<uni-nav-bar class="navbar-top" left-icon="back" left-text=" " title=" 收货地址 "></uni-nav-bar>
		<view class="list">
			<view class="item">
				<view class="r">
					<view class="tit">
						<view class="def">
							默认
						</view>
						贵族皇仕牛排(东城店) B区
					</view>
					<view class="u-box">
						<text>刘晓晓</text>
						<text>18666666666</text>
					</view>
				</view>
				<view class="iconfont icon-xiugai">
					
				</view>
			</view>
			<view class="item">
				<view class="r">
					<view class="tit">
						<view class="def">
							默认
						</view>
						贵族皇仕牛排(东城店) B区
					</view>
					<view class="u-box">
						<text>刘晓晓</text>
						<text>18666666666</text>
					</view>
				</view>
				<view class="iconfont icon-xiugai">
					
				</view>
			</view>
		</view>
		<view class="btn" @click="goManageAddress">
			新增地址
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
			uniNavBar
		},
		methods:{
			goManageAddress(){
				uni.navigateTo({
					url:'../addressManage/addressManage'
				})
			}
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
	uni-page,page{
		// position: relative;
		width: 100%;
		height: 100%;
		background-color: #fff;
		
	}
	.list{
		// margin-top: 120rpx + var(--status-bar-height);
		color: #909399;
		.item{
			display: flex;
			align-items: center;
			justify-content: space-between;
			padding: $paddingBox;
			border-bottom: 2rpx solid #f0f0f0;
			background-color: #fff;
			.r{
		
				.tit{
					display: flex;
					color: #303133;
					.def{
						padding: 1rpx 6rpx;
						border: 2rpx solid #FA436A;
						text-align: center;
						margin-right: 10rpx;
						font-size: $sftSize;
						color: #FA436A;
					}
				}
				.u-box{
					margin: 20rpx 0 0;
					text{
						margin-right: 20rpx;
					}
				}
			}
			.icon-xiugai{
				font-size: 44rpx;
			}
		}
	}
	.btn{
		position: fixed;
		bottom: 0;
		left: calc(50% - 345rpx);
		width: 690rpx;
		height: 80rpx;
		margin: 80rpx  auto;
		line-height: 80rpx;
		border-radius: 10rpx;
		text-align: center;
		color: #fff;
		background-color: #FA436A;
	}
</style>
