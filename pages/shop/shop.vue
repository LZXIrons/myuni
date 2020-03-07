<template>
	<view>
		<!-- <uni-nav-bar class="navbar-top" left-icon="back" left-text=" " title="购物车"></uni-nav-bar> -->
		<view class="con container" >
			<view class="empty-cart"  v-if="!showCart">
				<image src="../../static/emptyCart.jpg" mode="scaleToFill"></image>
				<view class="box">
					<text>空空如也</text>
					<navigator class="navigator" url="../login/login">去登陆></navigator>
				</view>
			</view>
			<view class="list" v-else>
					<view class="item" v-for="(item,index) in list" :key="index">
						<image class="item-left" :src="item.image" mode="scaleToFill"></image>
						<view class="item-right">
							<view class="tit">
								{{item.title}}
							</view>
							<view class="attr">
								{{item.attr_val}}
							</view>
							<view class="pic">
								¥{{item.price}}
							</view>
							<uni-number-box  :min="1" :max="item.stock" :value="item.number>item.stock?item.stock:item.number"
								:index="index"
								@eventChange="numberChange"></uni-number-box>
							<view class="del-btn" @click="delHandle(index)">
								X
							</view>
						</view>
						<view class="check-item" :class="item.checked?'active' : ''" @click="isChecked(index)">
							<view class="iconfont icon-xuanzhong"></view>
						</view>
					</view>
					<view class="account-box">
						<view class="checkbox" @click="allCheck" :class="IsallCheck?'active':''">
							<view class="iconfont icon-xuanzhong" ></view>
							<text>{{IsallCheck?'全选':'清空'}}</text>
						</view>
						<view class="total">
							<view class="">
								¥{{totalPrice}}
							</view>
							<view class="">
								已优惠 74.35 元	
							</view>
						</view>
						<navigator class="confirm-btn" url="../createOrder/createOrder">去结算</navigator>
						
					</view>
			</view>
		</view>
	</view>
</template>

<script>
	import uniNavBar from '../../components/uni-nav-bar/uni-nav-bar.vue'
	import uniNumberBox from '../../components/uni-number-box/uni-number-box.vue'
	import api from '@/api/api.js'
	import cartList from '../../json.js'
	export default {
		data() {
			return {
				showCart:false,
				list: cartList.cartList,
				// list:'',
				totalPrice: 0,
				IsallCheck:true
			};
		},
		onShow() {
			let self = this;
			uni.getStorage({
				key:'userInfo',
				success:function(){
					self.showCart = true;
					
				}
			});
			
		},
		onLoad() {
			
			this.list.forEach((item)=>{
				item.checked =true
			})
			this.calcTotal()
		},
		components:{
			uniNavBar,
			uniNumberBox
		},
		watch:{
			// list:function(){
			// 	console.log('change')
			// 	this.list.forEach(item =>{
			// 		if(item.checked){
			// 			this.totalPrice += item.price
			// 		}
			// 	})
			// }
		},
		methods:{
			numberChange(data){
				this.list[data.index].number = data.number
				this.calcTotal()
				console.log(data)
			},
			calcTotal(){
				let total = 0
				this.list.forEach(item =>{
					if(item.checked){
						total += item.price * (item.number>=item.stock?item.stock:item.number)
						// console.log(total)
					}
				})
				this.totalPrice = total.toFixed(2)
			},
			allCheck(){
				const checked = !this.IsallCheck
				let cartList = this.list.map(item=>{
					item.checked = checked;
					return item;
				});
				this.IsallCheck = checked
				this.list = cartList;
				this.calcTotal()
			},
			delHandle(index){
				if(this.list.length -1 === 0){
					this.showCart = false
					return
				}
				const items = this.list;
				items.splice(index,1);
				this.calcTotal()
			},
			isChecked(index){
				let checked = true;
				this.list[index].checked = !this.list[index].checked;
				this.list.forEach((item) =>{
					if( item.checked === true){
						return
					}else{
						checked = false
					}
				})
				// this.list.find((item,id,arr)=>{
				// 	if( item.checked === false){
						
				// 		return checked = false
				// 	}
				// })
				this.IsallCheck = checked
				this.calcTotal();
				// this.$forceUpdate()
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
	.con{
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background-color: #FFFFFF;
		padding-bottom: 378rpx;
		/*#ifdef MP*/
		padding-bottom: 335rpx;
		/*#endif*/
		// margin-bottom: 200rpx;
		overflow: scroll;
		.empty-cart{
			display: flex;
			flex-direction: column;
			align-items: center;
			justify-content: center;
			height: inherit;
			img,image{
				width: 240rpx;
				height: 160rpx;
				margin-bottom: 30rpx;
			}
			.box{
				display: flex;
				color: #C0C4CC;
				.navigator{
					color: #fa436a;
					margin-left: 16rpx;
				}
			}
		}
		.item{
			display: flex;
			align-items: center;
			padding: $paddingBox;
			border-bottom: 2rpx solid #eee;
			position: relative;
			.item-left{
				width: 230rpx;
				height: 230rpx;
			}
			.item-right{
				position: relative;
				flex: 1;
				margin-left: 40rpx;
				line-height: 1.8;
			}
			.del-btn{
				position: absolute;
				width: 50rpx;
				height: 50rpx;
				text-align: center;
				right: 0;
				top: 0;
			}
			.attr{
				color: #909399;
			}
			.check-item{
				position: absolute;
				top: 12rpx;
				left:26rpx;
				color: #C0C4CC;
				.icon-xuanzhong{
					font-size: 48rpx;
					
				}
				&.active{
					color: #FA436A;
				}
			}
		}
		.account-box{
			position: fixed;
			bottom: 150rpx;
			/*#ifdef MP*/
			bottom: 80rpx;
			/*#endif*/ 
			left: 30rpx;
			width: 690rpx;
			height: 100rpx;
			background-color: #fff;
			border-radius: 16rpx;
			display: flex;
			align-items: center;
			box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.5);
			padding: 0 20rpx;
			z-index: 999;
			.checkbox{
				display: flex;
				align-items: center;
				background-color: #C0C4CC;
				color: #fff;
				border-radius: 40rpx;
				width:140rpx;
				position: relative;
				height: 50rpx;
				text-align: right;
				box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.4);
				&.active{
					background-color: #FA436A;
				}
				text{
					margin-left: 12rpx;
				}
				.icon-xuanzhong{
					    font-size: 50rpx;
					    margin-top: 4rpx;
						margin-left: -4rpx;
						border-radius: 50%;
					
				}
			}
			.total{
				flex: 1;
				text-align: right;
			}
			.confirm-btn{
				text-align: center;
				line-height: 70rpx;
				height: 70rpx;
				width: 200rpx;
				border-radius: 32rpx;
				margin-left: 30rpx;
				background-color: #FA436A;
				color: #fff;
			}
		}
	}
</style>
