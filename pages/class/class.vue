<template>
	<view>
		<!-- <uni-nav-bar class="navbar-top" left-icon="back" left-text=" " title=" 分类 "></uni-nav-bar> -->
		<view class="container">
			<scroll-view scroll-y="true" class="left">
				<view v-for="item in flist" :key="item.id" class="item" :class="{active: item.id === currentId}" @click="tabtap(item)">
					{{item.name}}
				</view>
				<!-- <view class="item">手机数码</view>
				<view class="item">礼品鲜花</view>
				<view class="item">男装女装</view>
				<view class="item">母婴用品</view> -->
			</scroll-view>
			<scroll-view scroll-y="true" scroll-with-animation class="right" :scroll-top="tabScrollTop"  >
				<view class="list"  v-for="item in slist" :key="item.id" :id="'main-'+item.id">
					<text class="tit">{{item.name}}</text>
					<view class="con">
						<view class="item" @click="goList()" v-for="titem in tlist" :key="titem.id" v-if="titem.pid === item.id">
							<image :src="titem.picture" mode="scaleToFill"></image>
							<text>{{titem.name}}</text>
						</view>
					</view>
				</view>
				
			</scroll-view>
		</view>
	</view>
</template>

<script>
	import uniNavBar from '../../components/uni-nav-bar/uni-nav-bar.vue'
	import api from '@/api/api.js'
	import cateList from '../../json.js'
	export default {
		data() {
			return {
				flist: [],
				slist: [],
				tlist: [],
				tabScrollTop: 0,
				currentId: 1,
			};
		},
		onLoad() {
			this.loadData();
			
		},
		onReady(){
			this.calcSize()
		},
		components:{
			uniNavBar
		},
		methods:{
			async loadData(){
				let list = cateList.cateList;
				console.log(list)
				list.forEach(item=>{
					if(!item.pid){
						this.flist.push(item);  //pid为父级id, 没有pid或者pid=0是一级分类
					}else if(!item.picture){
						this.slist.push(item); //没有图的是2级分类
					}else{
						this.tlist.push(item); //3级分类
					}
				}) 
			},
			//一级分类点击
			tabtap(item){
				// if(!this.sizeCalcState){
				// 	this.calcSize();
				// }
				
				this.currentId = item.id;
				let index = this.slist.findIndex(sitem=>sitem.pid === item.id);
				this.tabScrollTop = this.slist[index].top;
			},
			//计算右侧栏每个tab的高度等信息
			calcSize(){
				let h = 0;
				this.slist.forEach(item=>{
					let view = uni.createSelectorQuery().select("#main-" + item.id);
					view.fields({
						size: true
					}, data => {
						item.top = h;
						h += data.height;
						item.bottom = h;
					}).exec();
				})
				// this.sizeCalcState = true;
			},
			goList(){
				uni.navigateTo({
					url:'../list/list'
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
	// .con{
	// 	position: absolute;
	// 	top: 0;
	// 	left: 0;
	// 	width: 100%;
	// 	height: 100%;
	// 	background-color: #FFFFFF;

	// }
	.container{
		position: fixed;
		width: 100%;
		height: calc(100% - 186rpx);
		display: flex;
		// margin: 88rpx 0;
		/*#ifdef MP*/
		// margin: 120rpx 0;
		height: calc(100% - 100rpx);
		/*#endif*/
		.left{
			display: flex;
			height: inherit;
			flex-direction: column;
			align-items: center;
			justify-content: center;
			width: 200rpx;
			background-color: #fff;
			margin-right: 16rpx;
			// margin-bottom: 200rpx;
			height: 100%;
			.item{
				padding: 22rpx;
				border-bottom: 2rpx solid #f0f0f0;
			}
			.active{
				position: relative;
				background-color: #f8f8f8;
				color: #FA436A;
				&::after{
					content: '';
					position: absolute;
					left: 0;
					bottom: 30rpx;
					width: 8rpx;
					height: 40rpx;
					background-color: #FA436A;
				}
			}
		}
		.right{
			flex: 1;
			// background-color: #fff;
			// margin-bottom: 200rpx;
			.list{
				.tit{
					line-height: 3;
					color: #303133;
				}
				.con{
					padding: $paddingBox;
					display: flex;
					flex-wrap: wrap;
					background-color: #fff;
					// justify-content: space-around;
					.item{
						width: 158rpx;
						height: 158rpx;
						text-align: center;
						margin-bottom: 20rpx;
						img,image{
							width: 120rpx;
							height: 120rpx;
							// margin-bottom: 10rpx;
						}
						text{
							display: block;
						}
					}
				}
			}
		}
	}
</style>