import Vue from 'vue'
import App from './App'
import store from './store'
import Util from './util'
import tips from './util/tip'
import formatTime from './util/time.js'
//import wxConfig from 'util/wxconfig.js'
import iconfont from './static/iconfont.css'

Vue.prototype.$Tips = tips;
Vue.prototype.$formatTime = formatTime;
Vue.config.productionTip = false;
Vue.use(Util);
App.mpType = 'app'

const app = new Vue({
    ...App,
	store
})
app.$mount()
