<!-- <template>
	<view>123
		<tabar-nav></tabar-nav>
	</view>
</template> -->
<script>
	
	// import { mapGetters, mapActions, mapState,mapMutations } from "vuex";
	// import tabarNav from '@/components/tabar/tabar.vue'
	export default {
		// globalData:{
			
		// },
		onLaunch: async function() {
			uni.getSystemInfo({
				success: function(res) {
					// self.globalData.stautsBarHeight =res.statusBarHeight
					// let modelmes = res.model;
					// if (modelmes.search('iPhone X') != -1) {
					// 	self.globalData.isIphoneX = true;

					// } else if (modelmes.search('iPhone 5') != -1) {
					// 	self.globalData.isIphone5 = true;

					// }
					console.log(res.model);
					console.log(res.pixelRatio);
					console.log(res.windowWidth);
					console.log(res.windowHeight);
					console.log(res.statusBarHeight)
					console.log(res.navigationBarHeight)
					console.log(res.language);
					console.log(res.version);
					console.log(res.platform);
				}
			});
			
			let res = await this.$uniAsync.getSetting()
			/**
			 * 是否授权过，授权则获取用户信息
			 */
			if (res.authSetting['scope.userInfo']) {
				let userInfo = uni.getStorageSync('userInfo') || '';
				if (!userInfo.nickName) {
					let data = await this.$uniAsync.getUserInfo()
					if (data) {
						this.$setStore('userInfo', data.userInfo)
					}
				}
				console.log(res)
			}

		},
		onShow: function() {
			// uni.hideTabBar();
		},
		onHide: function() {
			// console.log('App Hide')
		},



	}
</script>

<style lang="scss">
	::-webkit-scrollbar {
		width: 0px;
		height: 0px;
	}

	::-webkit-scrollbar-track-piece {
		background-color: rgba(0, 0, 0, 0.2);
		-webkit-border-radius: 6px;
	}

	::-webkit-scrollbar-thumb:vertical {
		height: 5px;
		background-color: rgba(125, 125, 125, 0.7);
		-webkit-border-radius: 6px;
	}

	::-webkit-scrollbar-thumb:horizontal {
		width: 5px;
		background-color: rgba(125, 125, 125, 0.7);
		-webkit-border-radius: 6px;
	}

	.navbar-top {
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 100rpx;
		z-index: 999;
	}

	/*#ifdef MP*/

	.uni-navbar__header {
		// padding-top: var(--status-bar-height);
		align-items: center;
		height: 120rpx !important;
		// height:calc( 120rpx - var(--status-bar-height))!important;
	}

	.margin-line {
		height: var(--status-bar-height);
		background-color: #f5f5f5;
	}

	/*#endif*/
	/*#ifdef APP-PLUS*/
	.uni-navbar__header {
		// padding-top: var(--status-bar-height);
		// align-items: center;
		// height: 120rpx!important;
	}

	/*#endif*/
	body,
	page {
		background-color: #f5f5f5;
	}

	uni-image,
	image {
		width: 100%;
		height: 100%;

		img {
			width: 100%;
			height: 100%;
		}
	}

	view,
	scroll-view,
	swiper,
	swiper-item,
	cover-view,
	cover-image,
	icon,
	text,
	rich-text,
	progress,
	button,
	checkbox,
	form,
	input,
	label,
	radio,
	slider,
	switch,
	textarea,
	navigator,
	audio,
	camera,
	image,
	video {
		font-size: 28rpx;
		box-sizing: border-box;
	}

	uni-button[type=default],
	button[type=default] {
		color: #FA436A;
	}

	/* input 样式 */
	.input-placeholder {
		color: #999999;
	}

	.placeholder {
		color: #999999;
	}

	/*#ifndef MP*/
	.container {
		margin-top: 88rpx;
	}

	/*#endif*/
	/*#ifdef MP*/
	.container {
		// margin-top: calc(210rpx - var(--status-bar-height);)
	}

	/*#endif*/
	// .margin-line{
	// 	height:  var(--status-bar-height);
	// }
</style>
