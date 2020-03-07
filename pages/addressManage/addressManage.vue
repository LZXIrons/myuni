<template>
	<view class="container">
		<uni-nav-bar class="navbar-top" left-icon="back" left-text=" " title=" 新增收货地址 "></uni-nav-bar>
		<!-- #ifdef MP -->
		<!-- <view class="margin-line">
			
		</view> -->
		<!-- #endif -->
		<form class="form-box" @submit="formSubmit" @reset="formReset">
			<view class="item">
				<text>联系人</text>
				<input type="text" placeholder="收货人姓名" />
			</view>
			<view class="item">
				<text>手机</text>
				<input type="text" placeholder="收货人手机号码" />
			</view>
			<view class="item">
				<text>地址</text>
				<text class="map"   @click="chooseLocation">{{addressData.addressName}}</text>
				<text class="iconfont icon-dingwei"></text>
			</view>
			<view class="item">
				<text>门牌号</text>
				<input type="text" placeholder="楼号门 , 门牌" />
			</view>
			<view class="item set-def">
				<text>设为默认</text>
				<switch class="s"  />
			</view>
			<button class="submit" form-type="submit">提交</button>
			<button class="reset" form-type="reset">重置</button>
		</form>
	</view>
</template>

<script>
	import uniNavBar from '../../components/uni-nav-bar/uni-nav-bar.vue'
	import api from '@/api/api.js'
	export default {
		data() {
			return {
				addressData: {
					name: '',
					mobile: '',
					addressName: '在地图选择',
					address: '',
					area: '',
					default: false
				}
			};
		},
		onLoad() {
			
		},
		components:{
			uniNavBar
		},
		methods:{
			formReset(){
				this.addressData = {}
			},
			chooseLocation(){
				uni.chooseLocation({
					success: (data)=> {
						this.addressData.addressName = data.name;
						this.addressData.address = data.name;
					}
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
		
		
	}
	.form-box{
		display: block;
		margin-top: 20rpx;
		.item{
			display: flex;
			align-items: center;
			border-bottom: 2rpx solid #f0f0f0;
			padding: $paddingBox;
			background: #fff;
			height: 110rpx;
			text{
				width: 120rpx;
			}
			.map{
				width: 100%;
			}
			.icon-dingwei{
				text-align: right;
				font-size:50rpx;
			}
		}
		.set-def{
			margin: 20rpx 0 20rpx;
			.s{
				display: flex;
				justify-content: flex-end;
				flex: 1;
				transform: translateX(16upx) scale(.9);
			}
			/deep/.uni-switch-input-checked{
				background-color: #FA436A!important;
				border-color: #FA436A!important;
			}
		}
		button{
			width: 690rpx;
			margin: 50rpx  auto 0;
			padding: 8rpx 0;
		}
		.submit{
			background: #FA436A;
			color: #fff;
		}
		.reset{
			
		}
	}
</style>
