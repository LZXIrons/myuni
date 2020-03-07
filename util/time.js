import moment from 'moment'

const formatTime = date => {
	const year = date.getFullYear()
	const month = date.getMonth() + 1
	const day = date.getDate()
	const hour = date.getHours()
	const minute = date.getMinutes()
	const second = date.getSeconds()

	return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}

const formatNumber = n => {
	n = n.toString()
	return n[1] ? n : '0' + n
}
/**
 * moment
 * 
 */

const timeAgo = arg => {
	if (arg) {
		let data = arg.split('T');
		return moment(data[0]).locale('zh-cn').fromNow()
	}
}
/**
 * 倒计时
 */
const addZero = (i) => i < 10 ? "0" + i : i + "";
const countDown = (time) => {
	var nowtime = new Date();
	var endtime = new Date(time);
	var lefttime = parseInt((endtime.getTime() - nowtime.getTime()) / 1000);
	var d = parseInt(lefttime / (24 * 60 * 60))
	var h = parseInt(lefttime / (60 * 60) % 24);
	var m = parseInt(lefttime / 60 % 60);
	var s = parseInt(lefttime % 60);
	d = addZero(d)
	h = addZero(h);
	m = addZero(m);
	s = addZero(s);
	// document.querySelector(".count").innerHTML = `活动倒计时  ${d}天 ${h} 时 ${m} 分 ${s} 秒`;
	if (lefttime <= 0) {
		return d = h = m = s = 0;
	}
	return {days:d,hours:h,minutes:m,seconds:s}
	//setTimeout(countDown, 1000);
}
export default {
	formatTime,
	timeAgo,
	countDown
}
