import tips from './tip'
import Vue from 'vue'
const uniRequest = async (params = {}, url, isLoad = true) => {
	console.log(Vue)
	if (isLoad) tips.loading()
	let data = params.query || {};
	let method = params.method || 'GET';
	let res = await uni.request({
		url: url,
		method: method,
		data: data,
		header: {
			'Content-Type': 'application/json'
		},

	})
	if (isLoad) tips.loaded();
	return res;
};
export default uniRequest
