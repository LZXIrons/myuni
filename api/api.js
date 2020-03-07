
import uniRequest from '@/util/uniRequest.js'
const API_BASE_URL = 'https://api.it120.cc'
const vb = (params) => uniRequest(params,  'http://vb.360lj.com/api/Product/GetProductInfo?pcodes=722848,3900')
const goods = (params) => uniRequest(params, API_BASE_URL + '/vbmall/shop/goods/list',false)
//查询商品详情信息
const goodsDetail = (params) => uniRequest(params, API_BASE_URL + '/vbmall/shop/goods/detail?id=' + params.id);
export default {
	API_BASE_URL,
	goods,
	goodsDetail,
	vb

}
