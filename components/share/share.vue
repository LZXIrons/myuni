<template>
    <view>
<!-- 底部分享弹窗 -->
		<uni-popup ref="showshare" :type="type" @change="change">
			<view class="uni-share">
				<text class="uni-share-title">分享到</text>
				<view class="uni-share-content">
					<view @click="shareWx" class="uni-share-content-box">
						<view class="uni-share-content-image">
							<image src="https://img-cdn-qiniu.dcloud.net.cn/uni-ui/grid-2.png" class="content-image" mode="widthFix" />
						</view>
						<text class="uni-share-content-text">微信好友</text>
					</view>
					<view @click="sharePyq" class="uni-share-content-box">
						<view class="uni-share-content-image">
							<image src="/static/pyq.png" class="content-image" mode="widthFix" />
						</view>
						<text class="uni-share-content-text">朋友圈</text>
					</view>
					<a :href="item.href" v-for="(item, index) in bottomData" :key="index" class="uni-share-content-box">
						<view class="uni-share-content-image">
							<image :src="item.icon" class="content-image" mode="widthFix" />
						</view>
						<text class="uni-share-content-text">{{ item.text }}</text>
					</a>
				</view>
				<text class="uni-share-btn" @click="cancel('share')">取消分享</text>
			</view>
		</uni-popup>
    </view>
</template>

<script>
	import uniPopup from "@/components/uni-popup/uni-popup.vue"
	import api from '@/api/api.js'
	import wx from 'weixin-js-sdk'
    export default {
        data() {
        	return {
        		type: 'bottom',
        		list: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'],
        		content: '顶部弹 popup',
        		bottomData: [
        			{
        				text: '新浪',
        				icon: 'https://img-cdn-qiniu.dcloud.net.cn/uni-ui/grid-1.png',
        				name: 'sina',
						href:"http://v.t.sina.com.cn/share/share.php?url="+api.API_BASE_URL+"&title="+ this.title
        			},
        			
        		]
        	}
        },
		components:{
			uniPopup
		},
		props:{
			isShare:Boolean,
			title:String
		},
		methods:{
			//this.$refs['showshare'].open()
			cancel(type) {
				this.$refs['show' + type].close()
			},
			change(e) {
				console.log('是否打开:' + e.show)
			},
			shareWx(){
				 wx.onMenuShareAppMessage({
				            title: '互联网之子',
				            desc: '在长大的过程中，我才慢慢发现，我身边的所有事，别人跟我说的所有事，那些所谓本来如此，注定如此的事，它们其实没有非得如此，事情是可以改变的。更重要的是，有些事既然错了，那就该做出改变。',
				            link: 'http://movie.douban.com/subject/25785114/',
				            imgUrl: 'https://www.weixinsxy.com/jssdk/images/p2166127561.jpg',
				            trigger: function(res) {
				                // 不要尝试在trigger中使用ajax异步请求修改本次分享的内容，因为客户端分享操作是一个同步操作，这时候使用ajax的回包会还没有返回
				                alert('用户点击发送给朋友');
				            },
				            success: function(res) {
				                alert('已分享');
				            },
				            cancel: function(res) {
				                alert('已取消');
				            },
				            fail: function(res) {
				                alert(JSON.stringify(res));
				            }
				        });
				        alert('已注册获取“发送给朋友”状态事件');
			},
			sharePyq(){

					wx.onMenuShareTimeline({ 
					            title: '互联网之子',
					            link: 'http://movie.douban.com/subject/25785114/',
					            imgUrl: 'http://demo.open.weixin.qq.com/jssdk/images/p2166127561.jpg',
					            trigger: function(res) {
					                // 不要尝试在trigger中使用ajax异步请求修改本次分享的内容，因为客户端分享操作是一个同步操作，这时候使用ajax的回包会还没有返回
					                alert('用户点击分享到朋友圈');
					            },
					            success: function(res) {
					                alert('已分享');
					            },
					            cancel: function(res) {
					                alert('已取消');
					            },
					            fail: function(res) {
					                alert(JSON.stringify(res));
					            }
					        });
					        alert('已注册获取“分享到朋友圈”状态事件');

			}
		},
		watch:{
			isShare(){
				this.$refs['showshare'].open()
			}
		}
		
    }
</script>

<style lang="scss" scoped>
	a{
		text-decoration:none ;
	}
/* 底部分享 */
	.uni-share {
		/* #ifndef APP-NVUE */
		display: flex;
		flex-direction: column;
		/* #endif */
		background-color: #fff;
	}

	.uni-share-title {
		line-height: 60rpx;
		font-size: 24rpx;
		padding: 15rpx 0;
		text-align: center;
	}

	.uni-share-content {
		/* #ifndef APP-NVUE */
		display: flex;
		/* #endif */
		flex-direction: row;
		flex-wrap: wrap;
		justify-content: center;
		padding: 15px;
	}

	.uni-share-content-box {
		/* #ifndef APP-NVUE */
		display: flex;
		/* #endif */
		flex-direction: column;
		align-items: center;
		width: 200rpx;
	}

	.uni-share-content-image {
		/* #ifndef APP-NVUE */
		display: flex;
		/* #endif */
		flex-direction: row;
		justify-content: center;
		align-items: center;
		width: 60rpx;
		height: 60rpx;
		overflow: hidden;
		border-radius: 10rpx;
	}

	.content-image {
		width: 60rpx;
		height: 60rpx;
	}

	.uni-share-content-text {
		font-size: 26rpx;
		color: #333;
		padding-top: 5px;
		padding-bottom: 10px;
	}

	.uni-share-btn {
		height: 90rpx;
		line-height: 90rpx;
		font-size: 14px;
		border-top-color: #f5f5f5;
		border-top-width: 1px;
		border-top-style: solid;
		text-align: center;
		color: #666;
	}
</style>
