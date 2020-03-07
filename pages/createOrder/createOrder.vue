<template>
	<view>
		<uni-nav-bar class="navbar-top" left-icon="back" left-text=" " title="创建订单"></uni-nav-bar>
		<!-- #ifdef MP -->
		<view class="margin-line">
			
		</view>
		<!-- #endif -->
		<view class="address-section" @click="goAdaddress">
			<view class="iconfont icon-weizhi">

			</view>
			<view class="txt">
				<view class="">
					<text class="name">许小星</text>
					<text>13853989563</text>
				</view>
				<view class="address">
					山东省济南市历城区 149号
				</view>
			</view>
			<view class="iconfont icon-jiantou">

			</view>
		</view>
		<view class="line">
			<image src="../../static/address.png" mode="scaleToFill"></image>
		</view>
		<view class="goods-section">
			<view class="tit">
				<image src="../../static/banner2.jpg" mode="scaleToFill"></image>
				<text class="cs">商店小铺</text>
			</view>
			<view class="item">
				<image src="../../static/banner2.jpg" mode="scaleToFill"></image>
				<view class="txt">
					<view class="">
						古黛妃 短袖t恤女夏装2019新款
					</view>
					<view class="type">
						春装款 L
					</view>
					<view class="number">
						￥17.8<text>x 1</text>
					</view>
				</view>
			</view>
			<view class="item">
				<image src="../../static/banner1.jpg" mode="scaleToFill"></image>
				<view class="txt">
					<view class="">
						古黛妃 短袖t恤女夏装2019新款
					</view>
					<view class="type">
						春装款 L
					</view>
					<view class="number">
						￥17.8<text>x 1</text>
					</view>
				</view>
			</view>
		</view>
		<view class="b-list">
			<view class="item">
				<view class="r">
					<text class="icon">券</text>
					<text>优惠券</text>
				</view>
				<view class="l ht" @click="isPoup = !isPoup">
					选择优惠券
				</view>
			</view>
			<view class="item">
				<view class="r re">
					<text class="icon">减</text>
					<text>商家促销</text>
				</view>
				<view class="l be">
					暂无可用优惠
				</view>
			</view>
		</view>
		<view class="p-list">
			<view class="item">
				<view class="r">
					商品金额
				</view>
				<view class="l">
					￥179.88
				</view>
			</view>
			<view class="item">
				<view class="r">
					优惠金额
				</view>
				<view class="l ht">
					-￥35
				</view>
			</view>
			<view class="item">
				<view class="r">
					运费
				</view>
				<view class="l">
					免运费
				</view>
			</view>
			<view class="item">
				<view class="r">
					备注
				</view>
				<input type="text" placeholder="请填写备注信息" />
			</view>
		</view>
		<view class="bot-box">
			<view class="p">
				<text>实付款</text>￥475
			</view>
			<view class="btn" @click="goPay()">
				提交订单
			</view>
		</view>
		
		<view class="poup" v-if="isPoup">
			<view class="mask" @click="isPoup = !isPoup">
				
			</view>
			<view class="con">
				<view class="item">
					<view class="r">
						<view class="tit">
							新用户专享优惠券
						</view>
						<view class="date">
							有效期至2019-06-30
						</view>
						<view class="dec">
							限新用户使用
						</view>
					</view>
					<view class="l">
						<view class="p">
							￥5
						</view>
						<view class="dec">
							满30可用
						</view>
					</view>
				</view>
				<view class="item">
					<view class="r">
						<view class="tit">
							新用户专享优惠券
						</view>
						<view class="date">
							有效期至2019-06-30
						</view>
						<view class="dec">
							限新用户使用
						</view>
					</view>
					<view class="l">
						<view class="p">
							￥10
						</view>
						<view class="dec">
							满50可用
						</view>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import uniNavBar from '../../components/uni-nav-bar/uni-nav-bar.vue'
	// import api from '@/api/api.js'
	export default {
		data() {
			return {
				isPoup: false
			};
		},
		onLoad() {

		},
		components: {
			uniNavBar
		},
		methods: {
			goPay(){
				uni.navigateTo({
					url:'../pay/pay'
				})
			},
			goAdaddress(){
				uni.navigateTo({
					url:'../adAddress/adAddress'
				})
			}
		}
	}
</script>

<style lang="scss">
	$paddingBox:20rpx 30rpx;

	.address-section {
		display: flex;
		align-items: center;
		background-color: #fff;
		padding: $paddingBox;
		line-height: 2;
		margin-top: 88rpx;
		.icon-weizhi {
			color: #888;
		}

		.txt {
			margin-left: 40rpx;
			flex: 1;

			.name {
				font-size: 32rpx;
				margin-right: 20rpx;
			}
		}

		.address {
			color: #909399;
		}
	}

	.line {
		// position: absolute;
		// top: 0;
		width: 100%;
		height: 4rpx;

		img,
		image {
			position: absolute;
			height: inherit;
		}
	}

	.goods-section {
		padding: $paddingBox;
		background-color: #fff;
		margin-top: 20rpx;

		.tit {
			position: relative;
			display: flex;
			align-items: center;

			// border-bottom: 2rpx solid #f0f0f0;
			img,
			image {
				width: 50rpx;
				height: 50rpx;
				border-radius: 50%;
				margin-right: 20rpx;
			}

			&::after {
				content: '';
				position: absolute;
				bottom: -20rpx;
				left: -30rpx;
				width: 100%;
				padding: 0 30rpx;
				height: inherit;
				border-bottom: 2rpx solid #E4E7ED;
			}
		}

		.item {
			display: flex;
			// align-items: center;
			padding: 20px 0;

			img,
			image {
				margin-right: 20rpx;
				width: 140rpx;
				height: 140rpx;
				border-radius: 5rpx;
			}

			.txt {

				// line-height: 2;
				.type {
					line-height: 2;
					color: #909399;
				}

				.number {
					text {
						margin-left: 20rpx;
						color: #606266;
					}
				}
			}
		}
	}

	.b-list,
	.p-list {
		margin: 20rpx 0;

		.item {
			border-bottom: 2rpx solid #E4E7ED;
			display: flex;
			align-items: center;
			justify-content: space-between;
			padding: 30rpx;
			background-color: #FFFFFF;

			.r {
				display: flex;

				.icon {
					// display: block;
					width: 32rpx;
					height: 32rpx;
					text-align: center;
					border-radius: 6rpx;
					font-size: 24rpx;
					margin-right: 20rpx;
					background-color: #f85e52;
					color: #fff;
				}
			}

			.re .icon {
				background-color: #ffaa0e;
			}

			.be {
				color: #909399;
			}

			.ht {
				color: #FA436A;
			}
		}
	}

	.p-list {
		color: #909399;
		margin-bottom: 200rpx;

		.l {
			color: #303133;
		}

		input {
			color: #301333;
			height: 100rpx;
			flex: 1;
			margin-left: 40rpx;
		}
	}

	.bot-box {
		position: fixed;
		bottom: 0;
		left: 0;
		width: 100%;
		height: 100rpx;
		display: flex;
		align-items: center;
		background-color: #fff;

		.p {
			font-size: 36rpx;
			flex-grow: 2;
			margin-left: 20rpx;
			// height: inherit;
			color: #FA436A;

			text {
				margin-right: 20rpx;
				color: #606266;
			}
		}

		.btn {
			width: 280rpx;
			height: inherit;
			line-height: 100rpx;
			text-align: center;
			background-color: #FA436A;
			color: #fff;
		}
	}

	.poup {
		position: fixed;
		height: 100%;
		width: 100%;
		top: 0;
		left: 0;
		.mask {
			position: fixed;
			height: inherit;
			width: inherit;
			z-index: 99;
			background: rgba(1, 1, 1, .3);
			animation: maskMove .2s linear;
		}
		
		.con{
			position: fixed;
			z-index: 999;
			width: inherit;
			bottom: 0;
			padding:20rpx 30rpx;
			background-color:#f3f3f3;
			animation: conMove .2s linear;
			.item{
				display: flex;
				justify-content: space-between;
				padding:30rpx;
				margin-bottom: 16rpx;
				background-color: #fff;
				color: #606266;
				line-height: 1.5;
				.r{
					color: #909399;
					.tit{
						font-size:32rpx;
						color: #303133;
					}
					.date{
						margin-bottom: 40rpx;
					}
				}
				.l{
					text-align: right;
					.p{
						font-size: 40rpx;
						color: #FA436A;
					}
				}
			}
		}

		@keyframes maskMove {
			0% {
				opacity: 0;
			}

			100% {
				opacity: 1;
			}
		}

		@keyframes conMove {
			0% {
				transform: translateY(120%);
			}

			100% {
				transform: translateY(0);
			}
		}
	}
</style>
