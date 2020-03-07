<template>
	<view class="content">
		<!-- <uni-nav-bar class="navbar-top" left-icon="back" left-text=" "  title="商品详情"></uni-nav-bar> -->
		<swiper :indicator-dots="true" :autoplay="true" :interval="3000" :duration="1000">
			<swiper-item class="carousel-item" v-for="(item,index) in banners" :key="index">
				<view class="swiper-item">
					<image class="item-img" :src="item.pic" mode="<scaleToFill></scaleToFill>"></image>
				</view>
			</swiper-item>
		</swiper>
		<view class="goods-title">
			<view class="name">
				{{goodsInfo.name}}
			</view>
			<view class="price-box">
				<view class="min-price">
					￥{{goodsInfo.minPrice}}
				</view>
				<view class="origin-price">
					￥{{goodsInfo.originalPrice}}
				</view>
				<view class="discount">
					{{(goodsInfo.minPrice / goodsInfo.originalPrice).toFixed(2) *100/10}}  折
				</view>
			</view>
			<view class="bot-row">
				<text>销量: 108</text>
				<text>库存: 4690</text>
				<text>浏览量: 768</text>
			</view>
		</view>
		<view class="share-section">
			<view class="share-icon">
				<view class="iconfont icon-star">
					
				</view>
				<view class="turn">
					返
				</view>
			</view>
			<view class="tit">
				该商品分享可领49减10红包
			</view>
			<view class="btn">
				立即分享
				<text class="iconfont icon-jiantou"></text>
			</view>
		</view>
		<view class="c-row">
			<view class="txt">购买类型</view>
			<view class="selected-txt ct" @click="isPoup = !isPoup"><text>XXL</text><text>草木绿</text></view>
			<view class="iconfont icon-jiantou"></view>
		</view>
		<view class="c-row">
			<view class="txt">优惠券</view>
			<view class="ct red">领取优惠券</view>
			<view class="iconfont icon-jiantou"></view>
		</view>
		<view class="c-row">
			<view class="txt">促销活动</view>
			<view class="ct">
				<view>新人首单送20元无门槛代金券</view>
				<view>订单满50减10</view>
				<view>订单满100减30</view>
				<view>单笔购买满两件免邮费</view>
			</view>
			
		</view>
		<view class="c-row">
			<view class="txt">服务</view>
			<view class="ct">
				<text>7天无理由退换货 ·假一赔十 </text>
			</view>
			<view class="iconfont icon-jiantou"></view>
		</view>
		<view class="eva-section">
			<view class="eva-tit">
				<view class="">
					<text>评价</text>
					<text>(86)</text>
				</view>
				<view>
					好评率
					<text class="iconfont icon-jiantou"></text>
				</view>
			</view>
			<view class="eva-con">
				<image class="pic" src="../../static/banner1.jpg" mode="scaleToFill"></image>
				<view class="">
					<view class="name">
						leoLEE
					</view>
					<view class="content">
						商品收到了，79元两件，质量不错，试了一下有点瘦，但是加个外罩很漂亮，我很喜欢
					</view>
					<view class="bot">
						<view class="atr" >
							购买类型：XL 红色
						</view>
						<view class="time">
							2019-04-01 19:21
						</view>
					</view>
				</view>
				
			</view>
		</view>
		<view class="detail-desc">
			<view class="tit">
				<text class="line"></text>
				<text class="c">图文详情</text>
				<text class="line"></text>
			</view>
			<view class="de-html" v-html="detailDesc"></view>
			<!-- #ifndef MP -->
			<!-- #endif -->
			<!-- #ifdef MP -->
			<!-- <rich-text :nodes="detailDesc" ></rich-text> -->
			<!-- #endif -->
		</view>
		<view class="page-bottom">
			<view class="item">
				<view class="iconfont icon-shouye"></view>
				<navigator class="txt" url="../home/home" open-type="switchTab">首页</navigator>
				<!-- <view >
					首页
				</view> -->
			</view>
			<view class="item">
				<view class="iconfont icon-cart"></view>
				<navigator class="txt" url="../shop/shop" open-type="switchTab">购物车</navigator>
				<!-- <view class="txt">
					购物车
				</view> -->
			</view>
			<view class="item"  :class="isCollect? 'active': ''">
				<view class="iconfont icon-shoucang"></view>
				<view class="txt" @click="isCollect = !isCollect">
					收藏
				</view>
			</view>
			<view class="action-btn">
				<text @click="goOrder()">立即购买</text>
				<view class="line">
					
				</view>
				<text>加入购物车</text>
			</view>
		</view>
		<view v-if="isPoup" class="poup">
			<view class="mask">
				
			</view>
			<view class="con">
				<view class="info">
					<image :src="banners[0].pic" mode=""></image>
					<view class="tit">
						<view class="price">
							￥{{goodsInfo.minPrice}}
						</view>
						<view class="store">
							<view class="">
								<text>库存：</text>1888件
							</view>
							<view class="">
								<text>已选：</text>XS白色
							</view>
						</view>
					</view>
				</view>
				<view class="cen">
					<view class="t">
						尺寸
					</view>
					<view class="list">
						<view class="item">
							XS
						</view>
						<view class="item">
							S
						</view>
						<view class="item">
							M
						</view>
						<view class="item">
							L
						</view>
						<view class="item">
							XL
						</view>
						<view class="item">
							XXL
						</view>
					</view>
				</view>
				<view class="bot">
					<view class="t">
						颜色
					</view>
					<view class="list">
						<view class="item">
							白色
						</view>
						<view class="item">
							珊瑚粉
						</view>
						<view class="item">
							草木绿
						</view>
					</view>
					
				</view>
				<view class="btn" @click="isPoup = !isPoup">
					完成
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
				banners:[],
				goodsInfo:{},
				detailDesc:'',
				isPoup:false,
				isCollect:false
			};
		},
		onLoad(option) {
			this.getGoodsDetail(option.id)
		},
		components:{
			uniNavBar
		},
		methods:{
			async getGoodsDetail(id){
				const [error, data] = await this.$awaitWrap(api.goodsDetail({
					method: 'get',
					query: {
						id:id
					}
				}))
				if(data[1]){
					data[1].data.data.pics.forEach((item)=>{
						this.banners.push(item)
					})
					this.goodsInfo = data[1].data.data.basicInfo
					// this.detailDesc = this.$richStyle(data[1].data.data.content)
					
					this.detailDesc =data[1].data.data.content.replace(/<img/gi, "<img style='width:100%;'")
				}else{
					console.log(data.errrMsg)
				}
				this.setHistory()
			},
			goOrder(){
				uni.navigateTo({
					url:'../createOrder/createOrder'
				})
			},
			setHistory(){
				let preView = uni.getStorageSync('historyItems');
				console.log(preView)
				let data = this.goodsInfo
				if(preView){
					const isExist = preView.find((item) =>{
						return data.id == item.id
					})
					if(!isExist){
						preView.unshift(data);
						uni.setStorageSync('historyItems',preView)
					}
				}else{
					
					uni.setStorageSync('historyItems',[data])
				}
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
	.content{
		padding-bottom: 128rpx;
		.active{
			color: #FA436A!important;
		}
	}
.navbar-top{
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 100rpx;
	z-index: 999;
}
.carousel-item {
	img{
		height: 748rpx;
	}
	image{
		height: 748rpx;
	}
}
uni-swiper,swiper{
	height: 748rpx;
}
.goods-title{
	padding: 20rpx $sideSize;
	background-color: #fff;
	.name{
		font-size: $mftSize;
	}
}
.price-box{
	display: flex;
	align-items: center;
	margin: 20rpx 0;
	.min-price{
		color: $textHColor;
		font-size: $bftSize;
	}
	.origin-price{
		text-decoration: line-through;
		color: $textColor;
		margin: 0 10rpx;
	}
	.discount{
		background-color: $textHColor;
		color: #fff;
		width: 60rpx;
		height: 30rpx;
		border-radius: 6rpx;
		text-align: center;
		font-size:$sftSize;
	}
}
.bot-row{
	display: flex;
	line-height: $lineHight;
	color: $textColor;
	text,uni-text{
		flex: 1;
	}
}
.share-section{
	display: flex;
	align-items: center;
	padding: 12rpx 30rpx;
	height: 74rpx;
	background:-webkit-linear-gradient(left, #fdf5f6, #fceef6);
}
.share-icon{
	display: flex;
	align-items: center;
	width: 70rpx;
	height: 30rpx;
	border: 2rpx solid #FA436A;
	color: #FA436A;
	margin-right: 10rpx;
	.icon-star{
		width: 30rpx;
		color: #fff;
		background-color: #fa436a;
	}
	.icon-star,.turn{
		text-align: center;
		font-size: 24rpx!important;
	}
	.turn{
		width: 40rpx;
	}
}
.tit{
	color: #606266;
}
.btn{
	text-align: right;
	flex-grow: 2;
	color: #fa436a;
}
.c-row{
	display: flex;
	align-items: center;
	padding:20rpx 30rpx;
	background-color: $dftColor;
	border-bottom: 2rpx solid #f0f0f0;
	.txt{
		width: 140rpx;
	}
	.selected-txt,.ct{
		flex: 1;
	}
	.red{
		color: #fa436a;
	}
}
.eva-section{
	padding: 20rpx 30rpx;
	background-color: #fff;
	margin-top: 16rpx;
	.eva-tit{
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
	.eva-con{
		display: flex;
		margin-top: 30rpx;
		.pic{
			width:80rpx;
			height: 80rpx;
			border-radius: 50%;
			margin-right: 18rpx;
			flex-shrink: 0;
		}
		.name{
			color: #606266;
		}
		.content{
			color: #303133;
			margin: 30rpx 0;
		}
		.bot{
			display: flex;
			justify-content: space-between;
			color: #909399;
		}
	}
}
/deep/.detail-desc{
	margin-top: 30rpx;
	text-align: center;
	overflow: hidden;
	.tit{
		display: flex;
		justify-content: center;
		align-items: center;
		height: 100rpx;
		background-color: #fff;
	}
	.c{
		margin: 0 15rpx;
	}
	.line{
		height: 2rpx;
		width:50rpx;
		background-color: #303133;
	}
	img{
			width: 100%;
			// overflow: hidden;
		}

	// .de-html{
	// 	// display: flex;
	// 	// justify-content: center;
	// }
	
	.p_class{
	}
}
.page-bottom{
	position: fixed;
	bottom: 30rpx;
	left: 30rpx;
	display: flex;
	align-items: center;
	width: 690rpx;
	height: 100rpx;
	padding: 0 10rpx;
	border-radius: 16rpx;
	background-color: #fff;
	box-shadow: 0 0 20rpx rgba(0,0,0,.5);
	.iconfont{
		font-size: 40rpx;
	}
	.item{
		width:96rpx;
		text-align: center;
		color: #606266;
		.txt{
			font-size: 24rpx;
		}
	}
	.action-btn{
		display: flex;
		flex: 1;
		margin-left: 20rpx;
		justify-content: center;
		align-items: center;
		color: #fff;
		height: 76rpx;
		border-radius: 200rpx;
		background: linear-gradient(to right, #ffac30, #fa436a, #F56C6C);
		.line{
			height: 20rpx;
			width: 2rpx;
			margin:0 20rpx;
			background-color: #fff;
		}
	}
}
.poup{
	position: fixed;
	height: 100%;
	width: 100%;
	top: 0;
	left: 0;
	.mask{
		position: fixed;
		height: inherit;
		width: inherit;
		z-index: 99;
		background: rgba(1,1,1,.3);
		animation: maskMove .2s linear;
	}
	@keyframes maskMove{
		0%{
			opacity: 0;
		}
		100%{
			opacity: 1;
		}
	}
	@keyframes conMove{
		0%{
			transform: translateY(120%);
		}
		100%{
			transform: translateY(0);
		}
	}	
	.con{
		position: fixed;
		z-index: 999;
		width: inherit;
		bottom: 0;
		padding: 10rpx 30rpx;
		background-color: #fff;
		animation: conMove .2s linear;
		
		.info{
			display: flex;
			line-height:1.5;
			// top: -40rpx;
			// position: absolute;
			//margin-bottom: 20rpx;
			img,image{
				width: 180rpx;
				height: 180rpx;
				border-radius: 10rpx;
				position: absolute;
				top:-40rpx;
				margin-right: 20rpx;
			}
			.tit{
				margin-left: 200rpx;
			}
			.price{
				color: #fa436a;
			}
			.store{
				
			}
		}
		.list{
			display: flex;
			.item{
				padding: 10rpx 20rpx;
				text-align: center;
				margin: 0 10rpx;
				border-radius: 50%;
				background-color: #eee;
			}
		}
		.t{
			margin: 20rpx 0;
		}
	}
	.btn{
		margin: 40rpx 0;
		background-color: #FA436A;
		color: #FFFFFF;
		padding: 20rpx 0;
		border-radius: 50rpx;
		text-align: center;
		line-height: 1.2;
	}
}
</style>
