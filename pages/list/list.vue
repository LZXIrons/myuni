<template>
	<view>
		<!-- <uni-nav-bar class="navbar-top" left-icon="back" left-text=" " title=" 商品列表 "></uni-nav-bar> -->
		<view class="container">
			<view class="navbar">
				<view class="item " :class="Index === 0? 'current' : ''" @click="tabClick(0)">
					综合排序
				</view>
				<view class="item " :class="Index === 1? 'current' : ''" @click="tabClick(1)">
					销量优先
				</view>
				<view class="item " :class="Index === 2? 'current' : ''" @click="tabClick(2)">
					价格
				</view>
				<view class="iconfont icon-fenlei" @click="isShow = !isShow">
					<span></span>
					<!-- t -->
				</view>
			</view>
			<view class="list">
				<view class="item" @click="goDesc()">
					<image src="../../static/u=1620020012,789258862&fm=26&gp=0.jpg" mode=""></image>
					<view class="tit">
						巧谷2019春夏季新品新款女装
					</view>
					<view class="price">
						<text class="l">￥78</text>
						<text class="r">已售 16</text>
					</view>
				</view>
				<view class="item" @click="goDesc()">
					<image src="../../static/u=1620020012,789258862&fm=26&gp=0.jpg" mode=""></image>
					<view class="tit">
						巧谷2019春夏季新品新款女装
					</view>
					<view class="price">
						<text class="l">￥78</text>
						<text class="r">已售 16</text>
					</view>
				</view>
				<view class="item" @click="goDesc()">
					<image src="../../static/u=1620020012,789258862&fm=26&gp=0.jpg" mode=""></image>
					<view class="tit">
						巧谷2019春夏季新品新款女装
					</view>
					<view class="price">
						<text class="l">￥78</text>
						<text class="r">已售 16</text>
					</view>
				</view>
				<view class="item" @click="goDesc()">
					<image src="../../static/u=1620020012,789258862&fm=26&gp=0.jpg" mode=""></image>
					<view class="tit">
						巧谷2019春夏季新品新款女装
					</view>
					<view class="price">
						<text class="l">￥78</text>
						<text class="r">已售 16</text>
					</view>
				</view>
				<view class="item" @click="goDesc()">
					<image src="../../static/u=1620020012,789258862&fm=26&gp=0.jpg" mode=""></image>
					<view class="tit">
						巧谷2019春夏季新品新款女装
					</view>
					<view class="price">
						<text class="l">￥78</text>
						<text class="r">已售 16</text>
					</view>
				</view>
				<view class="item" @click="goDesc()">
					<image src="../../static/u=1620020012,789258862&fm=26&gp=0.jpg" mode=""></image>
					<view class="tit">
						巧谷2019春夏季新品新款女装
					</view>
					<view class="price">
						<text class="l">￥78</text>
						<text class="r">已售 16</text>
					</view>
				</view>
			</view>
		</view>
		<view class="cate-mask" v-if="isShow">
			<view class="content" :class="isShow? 'show':''">
				<scroll-view class="list" scroll-y="true" >
					<view class="item" @click="isShow = !isShow">
						<view class="father">
							奶粉
						</view>
						<view class="child">
							有机奶粉
						</view>
					</view>
					<view class="item" @click="isShow = !isShow">
						<view class="father">
							奶粉
						</view>
						<view class="child">
							有机奶粉
						</view>
					</view>
					<view class="item" @click="isShow = !isShow">
						<view class="father">
							奶粉
						</view>
						<view class="child">
							有机奶粉
						</view>
					</view>
					<view class="item" @click="isShow = !isShow">
						<view class="father">
							奶粉
						</view>
						<view class="child">
							有机奶粉
						</view>
					</view>
					<view class="item" @click="isShow = !isShow">
						<view class="father">
							奶粉
						</view>
						<view class="child">
							有机奶粉
						</view>
					</view>
					<view class="item" @click="isShow = !isShow">
						<view class="father">
							奶粉
						</view>
						<view class="child">
							有机奶粉
						</view>
					</view>
				</scroll-view>
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
				Index:0,
				isShow:false
			};
		},
		onLoad() {
			
		},
		components:{
			uniNavBar
		},
		methods:{
			tabClick(item){
				this.Index = item
			},
			goDesc(){
				uni.navigateTo({
					url:'../detail/detail?id=208860'
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
		position: absolute;
		width: 100%;
		height: 100%;
		background-color: $dftColor;
		.navbar{
			display: flex;
			align-items: center;
			height: 86rpx;
			.item{
				text-align: center;
				flex: 1;
			}
			.current{
				position: relative;
				color: #FA436A;
				&::after{
					content: '';
					position: absolute;
					width: 120rpx;
					height: 4rpx;
					background-color: #FA436A;
					left: 50rpx;
					bottom: -20rpx;
				}
			}
			.icon-fenlei{
				width: 90rpx;
				position: relative;
				text-align: center;
				font-size: 40rpx;
				&::after{
					content: '';
					position: absolute;
					left: 10rpx;
					bottom: 4rpx;
					width: 2rpx;
					height: 40rpx;
					background-color: #808080;
				}
			}
		}
		.list{
			display: flex;
			justify-content: space-between;
			padding: $paddingBox;
			flex-wrap: wrap;
			.item{
				width: 48%;
				margin-bottom: 20rpx;
				line-height: 2;
				img,image{
					height: 362rpx;
				}
				.tit{
					font-size: $mftSize;
					// line-height: 1.5;
					width: 100%;
					white-space: nowrap;
					text-overflow: ellipsis;
					overflow: hidden;
				}
				.price{
					display: flex;
					justify-content: space-between;
					.l{
						color: #FA436A;
					}
					.r{
						color: #909399;
					}
				}
			}
		}
	}
	.cate-mask{
		position: fixed;
		width: 100%;
		height: 100%;
		top: 88rpx;
		/* #ifdef MP*/
		top:120rpx;
		/* #endif */
		background-color: rgba(0,0,0,.4);
		z-index: 95;
		transition:.3s;
		// &.show{
				
		// }
		// &.none{
		// 	display: none;
		// }
		.content{
			z-index: 99;
			width: 630rpx;
			height: 100%;
			right: 0;
			position: fixed;
			transition:.3s;
			transform: translateX(100%);
			&.show{
			transform: translateX(0);
			}
			.list{
				height: 100%;
				background-color: #fff;

			}
			.item{
				// line-height: 2;
				.father,.child{
					border-bottom:  2rpx solid #E4E7ED;
					padding: $paddingBox;
				}
				.father{
					color:#303133;
					font-size: 32rpx;
					background-color: #f8f8f8;
				}
				.child{
					color: #555;
					background-color: #fff;
				}
			}
		}
		
	}
</style>
