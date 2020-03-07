<template>
	<view class="content">
		<!-- <uni-nav-bar class="navbar-top" left-icon="back" left-text=" "  title="我的订单"></uni-nav-bar> -->
		<view class="container">
			<view class="navbar">
				<view class="item" :class="tabCurIndex === index?'active':''" @click="tabClick(index)" v-for="(item,index) in navItems" :key="index">
					{{item.text}}
				</view>
			</view>
			<swiper :current="tabCurIndex" class="swiper-box" :duration="300" @change="changeTab">
				<swiper-item   v-for="(tabItem,tabIndex) in navItems" :key="tabIndex">
					<scroll-view class="list-scroll-content" scroll-y  @scrolltolower="loadData">
						<view class="order-box">
							<view class="item" v-for="(item,index) in tabItem.orderList" :key="index">
								<view class="tit">
									<view class="time">
										{{item.time}}
									</view>
									<view class="right">
										<view class="state">
											<view class="txt">
												订单已关闭
											</view>
											<view class="iconfont icon-biaoqing">
												<span></span>
											</view>
										</view>
									</view>
								</view>
								<view class="cen">
									<view class="list" >
										<scroll-view class="goods-box" v-if="item.goodsList.length > 1" scroll-x="true" >
											<image v-for="(pitem,pid) in item.goodsList" :key="pid" :src="pitem.image" mode="scaleToFill" ></image>
										</scroll-view>
										<view v-for="(pitem,pid) in item.goodsList" :key="pid" class="goods-box-single" v-else>
											<image  :src="pitem.image" mode="scaleToFill" ></image>
											<view class="right">
												<view class="titl">
													{{pitem.title}}
												</view>
												<view class="attr">
													{{pitem.attr}}
												</view>
												<view class="price">
													￥ {{pitem.price}}
												</view>
											</view>
										</view>
									</view>
									<view class="price-box">
										共 {{item.goodsList.length}} 件商品 实付款
									</view>
								</view>
								<view class="bot">
									<view class="cle btn">取消订单</view>
									<view class="recom btn">立即支付</view>
								</view>
							</view>
						</view>
					</scroll-view>
				</swiper-item>
				
			</swiper>
		</view>
	</view>
</template>

<script>
	import uniNavBar from '../../components/uni-nav-bar/uni-nav-bar.vue'
	import api from '@/api/api.js'
	import orderList from '../../json.js'
	export default {
		data() {
			return {
				navItems:[{
						state: 0,
						text: '待付款',
						loadingType: 'loaded',
						orderList: []
					},
					{
						state: 1,
						text: '待发货',
						loadingType: 'more',
						orderList: []
					},
					{
						state: 2,
						text: '待收货',
						loadingType: 'more',
						orderList: []
					},
					{
						state: 3,
						text: '待评价',
						loadingType: 'more',
						orderList: []
					},
					{
						state: 4,
						text: '售后',
						loadingType: 'more',
						orderList: []
					}
				],
				// curNav:0,
				list:[0,1,2,3,4],
				tabCurIndex:0,
				orderList:orderList.orderList,
				isGetData:true
			};
		},
		onLoad(options) {
			this.tabCurIndex = +options.state;
			this.loadAllData()
		},
		components:{
			uniNavBar
		},
		methods:{
			tabClick(index){
				this.tabCurIndex = index;
				// this.loadData()
			},
			changeTab(e){
				this.tabCurIndex = e.target.current
				this.loadData('tabChange')
			},
			loadData(source){
				// this.tabCurIndex = Number(source);
				// let state = this.navItems[index].state
				// let isLoad = this.isGetData;
				let index = this.tabCurIndex;
				let listData = this.navItems;
				if(source === 'tabChange' ) return
				let _list = listData[index].orderList
				_list.forEach((item)=>{
					_list.push(item)
				})
				// this.$forceUpdate()
			},
			loadAllData(){
				let listData = this.navItems;
				this.orderList.forEach((item)=>{
					this.navItems.forEach((nitem,id) =>{
						if(item.state === nitem.state){
						  listData[id].orderList.push(item)
						}
					})
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
	::-webkit-scrollbar {
	    width:30rpx!important;
	    height: 20rpx!important;
	}
	.content{
		height: 100%;
	}
	/deep/.uni-navbar--border{
		border-bottom: 0!important;
	}
	.navbar{
		// display: flex;
		// text-align: center;
		// background-color: $dftColor;
			display: flex;
			height: 80rpx;
			// padding: 0 10rpx;
			background: #fff;
			box-shadow: 0 2rpx 10rpx rgba(0, 0, 0, 0.06);
			position: relative;
			z-index: 10;
		.item{
			position: relative;
			color: #303133;
			padding: $paddingBox;
			flex: 1;
			font-size: 30rpx;
			&.active{
				color: #FA436A;
				&::after{
					position: absolute;
					bottom: 0rpx;
					left: 36rpx;
					content: '';
					width: 80rpx;
					height: 4rpx;
					background-color: #FA436A;
				}
			}
		}
	}
	.order-box{
		// background-color: #fff;
		// display: flex;
		// flex-direction: column;
		// padding-left: 30upx;
		// background: #fff;
		// margin-top: 16upx;
		.item{
			background-color: #fff;
			margin-top: 20rpx;
			padding: 0 30rpx;
		}
		.tit{
			display: flex;
			align-items: center;
			justify-content: space-between;
			height: 80rpx;

			border-bottom:2rpx solid #E4E7ED;
			.right{
				flex: 1;
				display: flex;
				justify-content: flex-end;
			}
			.state{
				display: flex;
				align-items: center;
				color: rgb(144, 147, 153);
				.txt{
					
				}
				.icon-biaoqing{
					position: relative;
					font-size: 50rpx;
					margin:0 16rpx;
					&::after{
						content: '';
						position: absolute;
						width: 2rpx;
						height:30rpx;
						background-color: #DCDFE6;
						left: 0;
						top:10rpx;
					}
				}
			}
		}
		.cen{
			// padding: 20rpx 0;
			// height: 160rpx;
			.list{
				display: flex;
				.goods-box{
					// height: 160rpx;
					padding: 20rpx 0;
					white-space: nowrap;
				}
				.goods-box-single{
					display: flex;
					line-height: 1.5;
					padding: 20rpx 0;
					.titl{
						white-space: nowrap;
						overflow: hidden;
						text-overflow: ellipsis;
						width: 560rpx;
					}
				}
			}
			img,image{
				width: 120rpx;
				height: 120rpx;
				margin-right: 24rpx;
			}
			.price-box{
				padding: 10rpx 0 20rpx;
				text-align: right;
			}
		}
		.bot{
			display: flex;
			justify-content: flex-end;
			padding: 20rpx 0 20rpx;
			border-top: 2rpx solid #E4E7ED;
			.btn{
				margin-left: 20rpx;
				border-radius: 40rpx;
				text-align: center;
				height: 60rpx;
				line-height: 60rpx;
				width: 160rpx;
				border: 2rpx solid rgba(0,0,0,.2);
				&.recom{
					background: #fff9f9;
					color: #fa436a;
					border: 2rpx solid #f7bcc8;
				}
			}
		}
	}
	uni-swiper,.swiper-box{
		height: calc(100% - 40px);
	}
	.list-scroll-content{
		height: 100%;
	}
	page,.container{
		// height: 1000rpx;
		height: 100%;
	}
	.uni-swiper-item{
		height: auto;
	}
</style>
