import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
const store = new Vuex.Store({
	state: {
		hasLogin: false || uni.getStorageSync('Logined')
	},
	getters: {
		doneTodos: state => state.hasLogin
	},
	actions: {},
	mutations: {
		LOGIN(state,data){
			state.hasLogin = data;
			uni.setStorageSync('Logined',data)
		},
	},

})
export default store
