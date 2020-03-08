import tips from './tip'
import Vue from 'vue'
const uniRequest = async (params = {}, url, isLoad = true) => {
	console.log(111)
	if (isLoad) tips.loading()
	let data = params.query || {};
	let method = params.method || 'GET';
	let header = params.header || {
		'Content-Type': 'application/json'
	};
	const res = await new Promise((resolve, reject) => {
		uni.request({
			url: url,
			method: method,
			data: data,
			header: header,
			success: (res) => {
				 resolve(res.data)
			},
			fail: (err) => {
				reject(err)
			},
			complete: (cpl) => {
				// console.log(cpl)
			}
		})
	})
	console.log(222)
	if (isLoad) tips.loaded();
	return res;
	// console.log(111)
	// if (isLoad) tips.loading()
	// let data = params.query || {};
	// let method = params.method || 'GET';
	// let res = await uni.request({
	// 	url: url,
	// 	method: method,
	// 	data: data,
	// 	header: {
	// 		'Content-Type': 'application/json'
	// 	},

	// })
	// console.log(2222)
	// if (isLoad) tips.loaded();
	// return res;
};
export default uniRequest
