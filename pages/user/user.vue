<template>
	<view>
		<!-- <uni-nav-bar class="navbar-top" left-icon="back" left-text=" " title="我的"></uni-nav-bar> -->
		<view class="container">
			<view class="user-box">
				<view class="u-top">
					<view class="pic">
						<!-- <image src="../../static/nologin.png" mode="scaleToFill"></image> -->
						<image :src="userInfo?userInfo.avatarUrl : '../../static/nologin.png'" mode="scaleToFill"></image>
						<button type="default" open-type="getUserInfo" @getuserinfo="getUserInfo">点击登录</button>
					</view>
					<view class="bot">
						<view class="item">
							<view>0</view>
							<view>余额</view>
						</view>
						<view class="item b-left">
							<view>0</view>
							<view>冻结</view>
						</view>
						<view class="item b-left">
							<view>0</view>
							<view>积分</view>
						</view>
					</view>
				</view>
				<view class="my-order">
					<view class="flex row">
						<view class="">
							我的订单
						</view>
						<view class="iconfont icon-jiantou">
						</view>
					</view>
					<view class="list">
						<view class="item" @click="goOrder(0)">
							<image src="../../static/topay.png" mode=""></image>
							<view class="">
								待付款
							</view>
						</view>
						<view class="item" @click="goOrder(1)">
							<image src="../../static/fahuo.png" mode=""></image>
							<view class="">
								待发货
							</view>
						</view>
						<view class="item" @click="goOrder(2)">
							<image src="../../static/shouhuo.png" mode=""></image>
							<view class="">
								待收货
							</view>
						</view>
						<view class="item" @click="goOrder(3)">
							<image src="../../static/pj.png" mode=""></image>
							<view class="">
								待评价
							</view>
						</view>
						<view class="item" @click="goOrder(4)">
							<image src="../../static/shouhou.png" mode=""></image>
							<view class="">
								退款
							</view>
						</view>
					</view>
				</view>
				<navigator class="flex row" url="../history/history">
					<view class="">
						浏览记录
					</view>
					<view class="iconfont icon-jiantou">
					</view>
				</navigator>
				<!-- <view class="flex row" >
					
				</view> -->
				<view class="flex row">
					<view class="">
						资金明细
					</view>
					<view class="iconfont icon-jiantou">
					</view>
				</view>
				<view class="flex row">
					<view class="">
						每日签到
					</view>
					<view class="iconfont icon-jiantou">
					</view>
				</view>
				<view class="flex row">
					<view class="">
						积分兑换
					</view>
					<view class="iconfont icon-jiantou">
					</view>
				</view>
				<view class="flex row">
					<view class="">
						收货地址
					</view>
					<view class="iconfont icon-jiantou">
					</view>
				</view>
				<view class="flex row">
					<view class="">
						领券中心
					</view>
					<view class="iconfont icon-jiantou">
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
				userInfo: null
			};
		},

		async onLoad() {
			this.userInfo = this.$getStore('userInfo')
		},
		components: {
			uniNavBar
		},
		methods: {
			async getUserInfo({
				detail
			}) {
				let res = await this.$uniAsync.login()
				console.log(res)
				if (res.code) {
					this.userInfo = detail.userInfo;
					console.log(this.userInfo)
					this.$setStore('userInfo', this.userInfo)
					// let res = await this.$uniAsync.getSetting()
				}

			},
			goOrder(state) {
				uni.navigateTo({
					url: '../order/order?state=' + state
				})
			}
		},

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

	.container {

		// position: absolute;
		// top: 0;
		// left: 0;
		// width: 100%;
		// height: 100%;.
		.u-top {
			padding-top: 40rpx;
			background-color: #fff;
		}

		.pic {
			text-align: center;

			img,
			image {
				width: 140rpx;
				height: 140rpx;
				margin: 0 auto 20rpx;
			}

			button {
				width: 220rpx;
				color: #353535;
				// height: 200rpx;
			}
		}

		.bot {
			display: flex;
			margin-top: 60rpx;
			border-top: 2px solid #eee;
			padding: 30rpx 0;

			.item {
				display: flex;
				flex-direction: column;
				justify-content: center;
				flex: 1;
				text-align: center;


			}

			.b-left {
				border-left: 2rpx solid #eee;
			}
		}

		.my-order {
			margin: 20rpx 0;
			background-color: #FFFFFF;

			.list {
				display: flex;

				.item {
					flex: 1;
					padding: 20rpx;
					text-align: center;
					font-size: 24rpx;

					img,
					image {
						width: 70rpx;
						height: 70rpx;
					}
				}
			}
		}
	}

	.row {
		border-bottom: 2rpx solid #eee;
	}

	.flex {
		display: flex;
		justify-content: space-between;
		align-items: center;
		background-color: #fff;
		padding: $paddingBox;
	}
</style>
