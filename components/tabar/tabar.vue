<template>
	<view class="tabar-box">
		<view  v-for="(item,index) in taBar.list" :key="index">
			<view @click="goIssue"  v-if="item.isSpecil" class="tab-warp">
				<image :src="item.selected? item.selectedIconPath : item.iconPath" mode=""></image>
				<view :class="item.selected? 'tab-txt t-hight' : 'tab-txt' "> {{item.text?item.text: ''}}</view>
			</view>
			<view v-else>
				<view @click="getTab(item.tab,item.text)">
					<image :src="item.selected? item.selectedIconPath : item.iconPath" mode=""></image>
					<view :class="item.selected? 'tab-txt t-hight' : 'tab-txt' "> {{item.text}}</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import {
		mapGetters,
		mapActions,
		mapState,
		mapMutations
	} from "vuex";
	export default {
		data() {
			return {
				currentTab:'all',
				demo:{
					a:0,
					b:2
				},
				taBar: {
					list: [{
							"pagePath": "/pages/index/index",
							"iconPath": "/static/all-d.png",
							"selectedIconPath": "/static/all.png",
							"text": "全部",
							"tab": "all"
						}, {
							"pagePath": "/pages/recruit/index",
							"iconPath": "/static/job-d.png",
							"selectedIconPath": "/static/job.png",
							"text": "招聘",
							"tab": "job"
						},
						{
							"pagePath": "/pages/issue/issue",
							"iconPath": "/static/plus.png",
							"selectedIconPath": "/static/plus.png",
							"text": "发布",
							"isSpecil": true,
							"tab": "issue"
						},
						{
							"pagePath": "/pages/prime/index",
							"iconPath": "/static/art-d.png",
							"selectedIconPath": "/static/art.png",
							"text": "精华",
							"tab": "good"
						}, {
							"pagePath": "/pages/weex/index",
							"iconPath": "/static/wd-d.png",
							"selectedIconPath": "/static/wd.png",
							"text": "问答",
							"tab": "ask"
						}
					],
				},
			}
		},
		computed: {
			...mapState(['hasLogin'])
		},
		created() {
			this.editTabbar()
		},
		methods: {
			goIssue(){
				let token = uni.getStorageSync('token');
				if(!token){
					uni.navigateTo({
						url:'/pages/login/login',
					})
					return
				}
				uni.navigateTo({
					url:'/pages/issue/issue',
				})
			},
			editTabbar: function() {
				let tabbar = this.taBar;
				let setTab = this.currentTab;
				// let currentPages = getCurrentPages();
				// let _this = currentPages[currentPages.length - 1];
				// let pagePath = '/' + _this.route;
				// (pagePath.indexOf('/') != 0) && (pagePath = '/' + pagePath);
				for (let i in tabbar.list) {
					tabbar.list[i].selected = false;
					if (tabbar.list[i].tab == setTab) {
						tabbar.list[i].selected = true
					}
					// (tabbar.list[i].pagePath == pagePath) && (tabbar.list[i].selected = true);
				}

				/**	
				 * 强制刷新
				 */
				// this.$set(this.taBar,'list',tabbar.list)
				// this.$forceUpdate()
				/**
				 * 重新赋值
				 */
				this.taBar = [] 
				this.taBar  = tabbar
			},
			getTab:function(tab,text){
					let arg = [];
					arg.push(tab,text)
					this.currentTab = tab;
					this.$emit('currentTab',arg);
					this.editTabbar()
					
				}
		},

	}
</script>

<style lang="scss">
	.tabar-box {
		position: fixed;
		width: 100%;
		height: 100rpx;
		bottom: 0;
		left: 0;
		display: flex;
		justify-content: center;
		align-items: center;
		text-align: center;
		font-size: 32rpx;
		border: 2rpx solid #f2f2f3;
		z-index:998;
		background: #fff;
		navigator,view {
			position: relative;
			flex: 1;
			image {
				width: 50rpx;
				height: 50rpx;
			}

			view.tab-txt {
				margin-top: -8rpx;
				transform: scale(.7);
			}
		}
	}

	.t-hight {
		color: #1296db
	}

	.tab-warp {
		position: absolute;
		left:50%;
		top: 50%;
		width: 120rpx;
		height: 120rpx;
		border-radius: 50%;
		border-top: 2rpx solid #f2f2f3;
		background-color: #fff;
		text-align: center;
		box-sizing: border-box;
		padding: 6rpx;
		margin-left: -60rpx;
		margin-top: -88rpx;
		line-height:50rpx;
		image{
			width: 100rpx!important;
			height: 100rpx!important;
		}
		.tab-txt{
			margin-top:-8px!important ;
		}
	}
</style>
