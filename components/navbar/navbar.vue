<template>
	<view class="nav-box">
		<!-- #ifdef MP -->
		<view  v-if="!hasLogin && !showBack" class="item iconfont iconemizhifeiji"  @click="gologin"></view>
		<view :class="showUser?'item':'none'" v-else>
			<view class="iconfont iconyonghu" v-if="showUser"   @click="gouser">
				
			</view>
		</view>
		<view class="item iconfont iconback" v-if="isShow" @click="goback"></view>
		<text class="item text">{{navText}}</text>
		<!-- #endif -->
		<!-- #ifndef MP -->
		<view class="iconfont iconshouyeshouye" @click="gohome" v-if="!isShow"></view>
		<view class="iconfont iconback" @click="goback" v-else></view>
		<text class="text">{{navText}}</text>
		<view v-if="!hasLogin" class="iconfont iconemizhifeiji"  @click="gologin"></view>
		<view v-else>
			<view class="iconfont iconyonghu" v-if="showUser"   @click="gouser">
				
			</view>
		</view>
		<!-- #endif-->
	</view>
</template>

<script>
	import {
		mapGetters,
		mapActions,
		mapState,
		mapMutations
	} from "vuex";
	export default{
		data(){
			return{
				isShow:true,
				showUser:true,
				showBack:false
			}
		},
		props:['navText'],
		created() {
			
			var pages = getCurrentPages();
			var page = pages[pages.length - 1];
			var route = page.route;
			if(route == "pages/user/user"){
				this.showUser = false;
				//this.isShow= false;
			}
			if(route == "pages/login/login"){
				this.showBack = true
			}
			if(route == "pages/index/index"){
				this.isShow = false;
			}
			if (pages.length > 1){
				this.isShow= true;
				this.showUser = false;
				this.showBack = true
			}else{
				this.isShow = false;
			} 
			console.log(route)
		},
		computed: {
			...mapState(['hasLogin']),
		},
		methods:{
			...mapMutations(['LOGIN']),
			gologin(){
				let token =uni.getStorageSync('token');
				if(!token){
					uni.navigateTo({
						url:'/pages/login/login'
					})
					
				}
			},
			gouser(){
				uni.navigateTo({
					url:'/pages/user/user'
				})
			},
			goback(){
				uni.navigateBack()
			},
			gohome(){
				uni.switchTab({
					url:'/pages/index/index'
				})
			}
		}
	}
</script>

<style>
	.nav-box{
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		background: #fff;
		display: flex;
		align-items: center;
		/*#ifndef MP*/
		justify-content: space-between;
		height: 88rpx;
		/*#endif*/
		/*#ifdef MP*/
		/*justify-content: center;*/
		height: 120rpx;
		/*#endif*/
		padding: 0 30rpx;
		box-sizing: border-box;
		box-shadow: 0 0 10rpx rgba(0,0,0,.2);
		z-index: 100;
	
	}
	/* .nav-box .item{
		flex:1
	} */
	/*#ifdef MP*/
	.nav-box .item, .nav-box .text{
		flex:1;
		padding-top: 20rpx;
		/* text-align: center; */
	}
	/*#endif*/
	.nav-box view{
		font-size: 60rpx;
	}
	.iconemizhifeiji{
		font-size: 40rpx!important;
		color: #007AFF;
	}
	.item.none{
		display: none;
	}
</style>
