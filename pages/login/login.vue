<template>
	<view>
		<!-- <uni-nav-bar class="navbar-top" left-icon="back" left-text=" " title="登陆"></uni-nav-bar> -->
		<view class="container">
			<view class="u-top">
				<view class="pic">
					<image src="../../static/nologin.png" mode="scaleToFill"></image>
				</view>
			</view>
			<view class="box">
				<input type="number" placeholder="请输入手机号码" maxlength="11"/>
				<input type="password" placeholder="8-18位不含特殊字符的数字、字母组合" maxlength="20"/>
				<button type="default" @click="logined">登陆</button>
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
			uniNavBar
		},
		methods:{
			logined(){
				uni.setStorage({
					key:'userInfo',
					data:{
						'tel':18620840656,
						'name':'lee',
						'pic':'http://img.61ef.cn/news/201409/28/2014092805595807.jpg'
					},
					success() {
						uni.switchTab({
							url:'../shop/shop'
						})
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
	.container{
		position: fixed;
		height: 100%;
		width: 100%;
		top: 0;
		left: 0;
		background-color: #fff;
		.u-top{
			padding-top: 240rpx;
			background-color: #fff;
		}
		.pic{
			text-align: center;
			img,image{
				width:140rpx;
				height: 140rpx;
				margin: 0 auto 20rpx;
			}
			button{
				width: 220rpx;
				color: #353535;
				// height: 200rpx;
			}
		}
		.box{
			padding: $paddingBox;
			input{
				border-bottom: 2rpx solid #f0f0f0;
				margin-bottom: 40rpx;
				height: 70rpx;
			}
			button{
				width: 400rpx;
				color: #fff;
				background-color: #FA436A;
				margin-top: 56rpx;
			}
		}
}
</style>
