<template>
	<view>
		<!-- #ifdef MP -->
		<view class="mp-search-box">
			<input class="ser-input" type="text" placeholder="输入关键字搜索" confirm-type="搜索" @confirm="searchKey" />
		</view>
		<!-- #endif -->
		<!-- #ifndef MP -->
		<view class="nav-header">
			<view class="left">
				<view class="">
					<text>北京</text>
					<text class="iconfont icon-jiantou"></text>
				</view>
			</view>
			<view class="center">
				<text class="iconfont icon-iconfontzhizuobiaozhun22"></text>
				<input type="text" placeholder="输入搜索关键词" />
			</view>
			<view class="right">
				<view class="iconfont icon-tongzhi">

				</view>
			</view>
		</view>
		<!-- #endif -->
		<view class="swiper-box">
			<!-- 标题栏和状态栏占位符 -->
			<!-- <view class="titleNview-placing"></view> -->
			<!-- #ifndef MP -->
			<view class="background-item" :style="{background:banners[swiperCurrent].background}"></view>
			<!-- #endif -->
			<swiper @change="changeItem" :autoplay="true" :interval="3000" :duration="1000">
				<swiper-item class="carousel-item" v-for="(item,index) in banners" :key="index">
					<view class="swiper-item">
						<image class="item-img" :src="item.src"></image>
					</view>
				</swiper-item>
			</swiper>
			<view class="swiper-dots">
				<text class="item">{{swiperCurrent+1}}</text>
				<text class="sign">/</text>
				<text class="item">{{banners.length}}</text>
			</view>
		</view>
		<view class="nav-head-box">
			 <!-- <button open-type='contact' class="kefuBtn">我的客服</button> -->
			<view v-for="(item,index) in classImg" :key="index">
				<image :src="item.src"></image>
				<view>{{item.text}}</view>
			</view>

		</view>
		<view class="gd-1">
			<image src="/static/gd1.jpg" mode="scaleToFill"></image>
		</view>
		<view class="seckill-section">
			<view class="s-header">
				<image src="../../static/secskill-img.jpg"></image>
				<view class="times">
					<view class="">
						零点抢购
					</view>
					<view class="h item">
						{{downTime.hours}}
					</view>
					<view class="m item">
						{{downTime.minutes}}
					</view>
					<view class="s item">
						{{downTime.seconds}}
					</view>
				</view>
				<view class="iconfont icon-jiantou">

				</view>
			</view>
			<scroll-view scroll-x="true">
				<view class="scroll-box">
					<view class="item"  @click="goDetail(item.id)" v-for="(item,index) in goods" :key="index">
						<image :src="item.pic" mode="scaleToFill"></image>
						<view class="name">
							{{item.name}}
						</view>
						<view class="price">
							￥{{item.minPrice}}
						</view>
					</view>
				</view>
			</scroll-view>
		</view>
		<!-- 		<view class="f-head">
			<image src="../../static/h1.png" mode=""></image>
			<view class="tit-box">
				<text class="tit">精品团购</text>
				<text class="tit2">Boutique Group Buying</text>
			</view>
			<text class="iconfont icon-jiantou"></text>
		</view> -->
		<view class="f-head">
			<image src="../../static/h1.png" mode=""></image>
			<view class="tit-box">
				<text class="tit">分类精选</text>
				<text class="tit2">Competitive Products For You</text>
			</view>
			<text class="iconfont icon-jiantou"></text>
		</view>
		<view class="hot-floor">
			<view class="floor-img-box">
				<image class="floor-img" src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1553409398864&di=4a12763adccf229133fb85193b7cc08f&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201703%2F19%2F20170319150032_MNwmn.jpeg "
				 mode="scaleToFill"></image>
			</view>
			<scroll-view scroll-x="true" class="floor-list">
				<view class="scroll-box">
					<view class="item" @click="goDetail(item.id)" v-for="(item,index) in goods" :key="index">
						<image :src="item.pic" mode="scaleToFill"></image>
						<view class="name">
							{{item.name}}
						</view>
						<view class="price">
							￥{{item.minPrice}}
						</view>
					</view>
				</view>
			</scroll-view>
		</view>
		<view class="hot-floor">
			<view class="floor-img-box">
				<image class="floor-img" src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1553409984228&di=dee176242038c2d545b7690b303d65ea&imgtype=0&src=http%3A%2F%2Fhbimg.b0.upaiyun.com%2F5ef4da9f17faaf4612f0d5046f4161e556e9bbcfdb5b-rHjf00_fw658"
				 mode="scaleToFill"></image>
			</view>
			<scroll-view scroll-x="true" class="floor-list">
				<view class="scroll-box">
					<view class="item"  @click="goDetail(item.id)" v-for="(item,index) in goods" :key="index">
						<image :src="item.pic" mode="scaleToFill"></image>
						<view class="name">
							{{item.name}}
						</view>
						<view class="price">
							￥{{item.minPrice}}
						</view>
					</view>
				</view>
			</scroll-view>
		</view>
		<view class="hot-floor">
			<view class="floor-img-box">
				<image class="floor-img" src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1553409794730&di=12b840ec4f5748ef06880b85ff63e34e&imgtype=0&src=http%3A%2F%2Fimg.zcool.cn%2Fcommunity%2F01dc03589ed568a8012060c82ac03c.jpg%40900w_1l_2o_100sh.jpg"
				 mode="scaleToFill"></image>
			</view>
			<scroll-view scroll-x="true" class="floor-list">
				<view class="scroll-box">
					<view class="item"  @click="goDetail(item.id)" v-for="(item,index) in goods" :key="index">
						<image :src="item.pic" mode="scaleToFill"></image>
						<view class="name">
							{{item.name}}
						</view>
						<view class="price">
							￥{{item.minPrice}}
						</view>
					</view>
				</view>
			</scroll-view>
		</view>
		<view class="f-head">
			<image src="../../static/h1.png" mode=""></image>
			<view class="tit-box">
				<text class="tit">猜你喜欢</text>
				<text class="tit2">Guess You Like It</text>
			</view>
			<text class="iconfont icon-jiantou"></text>
		</view>
		<view class="you-like">
			<view class="item" @click="goDetail(item.id)" v-for="(item,index) in goods" :key="index">
				<image :src="item.pic" mode="scaleToFill"></image>
				<view class="name">
					{{item.name}}
				</view>
				<view class="price">
					￥{{item.minPrice}}
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	var qqMap = require("@/libs/qqmap-wx-jssdk.js");
	var qqmapsdk;
	import api from '@/api/api.js'
	export default {
		data() {
			return {
				banners: [{
						src: "/static/banner3.jpg",
						background: "rgb(203, 87, 60)",
					},
					{
						src: "/static/banner2.jpg",
						background: "rgb(205, 215, 218)",
					},
					{
						src: "/static/banner4.jpg",
						background: "rgb(183, 73, 69)",
					}
				],
				swiperCurrent: 0,
				classImg: [{
						src: "/static/c1.png",
						text: '环球美食'
					},
					{
						src: "/static/c2.png",
						text: '个护美妆'
					},
					{
						src: "/static/c3.png",
						text: '营养保健'
					},
					{
						src: "/static/c4.png",
						text: '家居厨卫'
					},
					{
						src: "/static/c5.png",
						text: '速食生鲜'
					}
				],
				goods: [],
				downTime: {},
				isLoad:true
			};
		},
		components:{
			
		},
		onLoad() {
			console.log("开始了")
			qqmapsdk = new qqMap({
				key: '5WRBZ-IJJ6W-J54RP-RKQNR-FFWRJ-WOFFZ'
			});
			let self =this;
			uni.getLocation({
			    type: 'wgs84',
			    success: function (res) {
			        console.log('当前位置的经度：' + res.longitude);
			        console.log('当前位置的纬度：' + res.latitude);
					self.getArea(res.longitude,res.latitude)
			    }
			});
			setInterval(() => {
				self.downTime = self.$formatTime.countDown("2020/12/31 00:00:00")
			}, 1000)
			this.gteGoods();
			
		},
		onShow(){


		},
		methods: {
			getArea(jd,wd){
				// 坐标转化为详细地址
				qqmapsdk.reverseGeocoder({
							location:  wd + ',' +jd,
				            success: function (res) {
				                console.log(res.result.address_component.city);
				            },
				            fail: function (res) {
				                console.log(res);
				            },
				        complete: function (res) {
				            console.log(res);
				        }
				    });
			},
			async gteGoods() {
				
				if(!this.isLoad) return
				this.isLoad = false
				const [error, data] = await this.$awaitWrap(api.goods({
					method: 'post',
					query: {
						categoryId: 69310,
						nameLike: '',
						page: 1,
						pageSize: 10
					}
				}))
				this.isLoad = true
				// const [error, data] = await api.vb()
				//  console.log('err',error)
				//  console.log('data', data)
				if (data[1]) {
					data[1].data.data.forEach(item => {
						this.goods.push(item)
					})
					
				} else {
					 console.log('err',error)
				}
			},
			onRight() {
				console.log(123)
			},
			changeItem(e) {
				const index = e.detail.current;
				this.swiperCurrent = index;

			},
			goDetail(id){
				uni.navigateTo({
					url:'/pages/detail/detail?id=' + id
				})
			},
			searchKey(e){
				console.log(e)
			}
		},
		onReachBottom(){
			this.gteGoods()
		}
	}
</script>

<style lang="scss" scoped>
	// ::-webkit-scrollbar {
	//     width:0px;
	//     height: 0px;
	// }
	.titleNview-placing {
		height: var(--status-bar-height);
		/*#ifdef MP*/
		padding-top: 44px;
		/*#endif*/
		box-sizing: content-box;
	}

	/*#ifndef MP*/
	.carousel-item {
		padding: 0 28rpx;
		box-sizing: border-box;
	}

	/*#endif*/
	/*#ifdef APP-PLUS*/
	.nav-header{
		margin-top: var(--status-bar-height);
		// align-items: center;
		// height: 120rpx!important;
	}
	/*#endif*/
	.nav-header {
		display: flex;
		align-items: center;
		justify-content: space-between;
		position: absolute;
		width: 100%;
		height: 100rpx;
		padding: 20rpx;
		box-sizing: border-box;
		top: 0rpx;
		left: 0;
		z-index: 11;
		color: #fff;
		font-size: 28rpx;

		.icon-jiantou {
			transform: rotate(90deg);
			display: inline-block;

		}

		&>.center {
			display: flex;
			height: 60rpx;
			line-height: 60rpx;
			border-radius: 20px;
			background-color: #f8f8f8;
			opacity: .5;
			padding-left: 16rpx;
			align-items: center;

			.icon-iconfontzhizuobiaozhun22 {
				color: #000;
				line-height: 33px;
			}

			input {
				height: inherit;
				font-size: 28rpx;
				width: 500rpx;
				color: #000;
			}
		}

		&>.right {
			font-size: 32rpx;
			text-align: right;
		}
	}

	/*#ifndef MP*/
	/deep/.uni-swiper-wrapper,
	.item-img {
		border-radius: 10rpx;
	}

	/*#endif*/
	.swiper-box {
		position: relative;
	}

	.background-item {
		height: 426rpx;
	}

	.search-box {
		display: flex;
		border-radius: 10rpx;
		background-color: #f8f8f8;
		opacity: .5;
		height: 60rpx;
		border-radius: 20px;
		line-height: 60rpx;
		flex: 1;
		margin: 0 12rpx;

		.uni-icons {
			margin: 0 20rpx;
		}

		input {
			height: inherit;
			font-size: 28rpx;
		}
	}

	/* #ifdef MP */
	.mp-search-box {
		position: absolute;
		left: 0;
		// top: 150rpx;
		top:50rpx;
		z-index: 9999;
		width: 100%;
		padding: 0 80rpx;
		box-sizing: border-box;

		.ser-input {
			flex: 1;
			height: 56upx;
			line-height: 56upx;
			text-align: center;
			font-size: 28upx;
			color: #fff;
			border-radius: 20px;
			background: rgba(255, 255, 255, .6);
		}
	}

	/* #endif */

	uni-swiper,
	swiper {
		position: absolute;
		// padding: 0 15px;
		top: 100rpx;
		z-index: 10;
		width: 100%;
		left: 0;
		box-sizing: border-box;
		height: 350rpx;

		uni-image,
		image {
			width: 100%;
			height: 100%;

			img {
				width: 100%;
				height: 100%;
			}
		}
	}

	/*#ifdef MP*/
	swiper {
		position: static;
	}

	/*#endif*/
	/deep/.swiper-dots {
		color: #fff;
	}

	.swiper-item {
		width: 100%;
		height: 100%;
	}

	.swiper-dots {
		position: absolute;
		bottom: -6rpx;
		/*#ifdef MP*/
		bottom: 40rpx;
		/*#endif*/
		left: 50rpx;
		z-index: 20;
		font-size: 24rpx;
		display: flex;
		text-align: center;
		color: #fff;

		.item {
			width: 40rpx;
			height: 40rpx;
			line-height: 40rpx;
			border-radius: 50%;
			background: rgba(255, 255, 255, 0.5);
		}

		.sign {
			position: absolute;
			left: 32rpx;
			top: 4rpx;
			font-size: 12px;
		}
	}

	$boxPadding:30rpx;
	$dftSize:28rpx;
	$sftSize:24rpx;
	$mftSize:32rpx;
	$bftSize:36rpx;
	$bgc:#fff;
	$bdr:10rpx;
	$bC:#fa436a;
	$mbt:20rpx;

	.nav-head-box {
		display: flex;
		justify-content: space-between;
		flex-wrap: nowrap;
		/*#ifndef MP*/
		margin: 30rpx 0 0 0;
		/*#endif*/
		/*#ifdef MP*/
		position: relative;
		margin-top: -20rpx;
		border-radius: 16rpx 16rpx 0 0;
		/*#endif*/
		padding: 30rpx $boxPadding;
		text-align: center;
		font-size: $dftSize;
		background-color: $bgc;
		z-index: 30;

		image {
			opacity: .7;
			width: 88rpx;
			height: 88rpx;
			border-radius: 50%;
			margin-bottom: 10rpx;
		}
	}

	.gd-1 {
		background-color: $bgc;
		height: 210rpx;
		padding: 10rpx 0;
		margin-bottom: 10rpx;
	}

	.seckill-section {
		padding: $boxPadding;
		background-color: $bgc;
	}

	.s-header {
		display: flex;
		margin: 30rpx 0;
		height: 60rpx;
		align-items: center;

		.times {
			display: flex;
			margin-left: 20rpx;
			text-align: center;
			color: #909399;
		}

		.item {
			margin: 0 10rpx;
			width: 40rpx;
			height: 40rpx;
			background-color: #000;
			border-radius: 10rpx;
			color: #fff;
		}

		.icon-jiantou {
			flex-grow: 2;
			text-align: right;
		}

		image {
			width: 140rpx;
			height: 30rpx;
			margin-right: 20rpx;
		}
	}

	.scroll-box {
		display: flex;
		flex-wrap: nowrap;

		image {
			text-align: center;
			width: 160rpx;
			height: 160rpx;
			border-radius: $bdr;
		}

		.item {
			margin: 0 10rpx;
			width: 160rpx;
		}

	}

	.name {
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
	}

	.price {
		color: $bC;
	}

	.f-head {
		display: flex;
		padding: $boxPadding;
		background-color: $bgc;
		margin-top: $bdr;
		align-items: center;

		image {
			width: 80rpx;
			height: 80rpx;

		}

		.tit-box {
			display: flex;
			flex-direction: column;
			margin-left: $bdr;
			flex: 1;
			line-height: 1.5;

			.tit {
				font-size: 34rpx;
			}

			.tit2 {
				color: #909399;
			}
		}
	}

	.floor-img {
		height: 320rpx;
	}

	.floor-list {
		padding: $mbt;
		background-color: $bgc;
		margin-top: -140rpx;
		position: relative;
		z-index: 2;
		margin-left: 30rpx;
		box-shadow: 2rpx 2rpx 5px rgba(0, 0, 0, 0.2);
	}

	.hot-floor {
		margin-bottom: $mbt;
		overflow: hidden;
	}

	.you-like {
		display: flex;
		justify-content: space-between;
		flex-wrap: wrap;
		padding: 0 $boxPadding;
		background-color: $bgc;

		.item {
			width: 320rpx;
			margin-bottom: 20rpx;
			line-height: 2;

			.name {
				font-size: $mftSize;
			}

			image {
				width: 300rpx;
				height: 330rpx;
			}
		}
	}
</style>
