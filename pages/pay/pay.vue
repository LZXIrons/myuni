<template>
	<view>
		<uni-nav-bar class="navbar-top" left-icon="back" left-text=" "  title="支付"></uni-nav-bar>
		<view class="container">
			<view class="price-box">
				<view class="tit">
					支付金额
				</view>
				<view class="price">
					￥38.88
				</view>
			</view>
			<view class="pay-type">
				<view class="iconfont icon-weixinzhifu">
					
				</view>
				<view class="con">
					<view class="tit">
						微信支付
					</view>
					<view class="">
						推荐使用微信支付
					</view>
				</view>
				<view>
					   <label class="radio"><radio value="r1" /></label>
				</view>
			</view>
			<navigator url="../paySuccess/paySuccess" class="btn">确认支付</navigator>
				<!-- <view class="btn">
					确认支付
				</view> -->
		
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
	.container{
		position: fixed;
		width: 100%;
		height: 100%;
		background-color: #fff;
		// display: flex;
		// flex-direction: column;
		// // justify-content: center;
	}
	.price-box{
		height: 264rpx;
		display: flex;
		flex-direction: column;
		justify-content: center;
		text-align: center;
		.tit{
			color: $textColor;
		}
		.price{
			margin-top: 12rpx;
			font-size: 40rpx;
		}
	}
	.pay-type{
		display: flex;
		align-items: center;
		padding: $paddingBox;
		position: relative;
		flex-wrap: nowrap;
		&::after{
			position: absolute;
			width: 100%;
			height: 2rpx;
			content: '';
			bottom: 0;
			left: 0;
			background-color: #f0f0f0;
		}
		.icon-weixinzhifu{
			font-size: 40rpx;
			color: #4CD964;
			margin-right: 40rpx;
		}
		.con{
			flex: 1;
			color: $textColor;
			line-height: 1.5;
			.tit{
				font-size: 32rpx;
				color: #303133;
			}
		}
		.radio{
			// width: 80rpx;
			// height: 80rpx;
			// border: 2rpx solid #d1d1d1;
			// border-radius:50% ;
		}
	}

	.btn{
		width: 630rpx;
		height: 80rpx;
		margin: 80rpx  auto 0;
		line-height: 80rpx;
		border-radius: 10rpx;
		text-align: center;
		color: #fff;
		background-color: #FA436A;
	}
</style>
