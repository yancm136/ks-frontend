/*
 * @Author: yan.chaoming
 * @Date: 2017-12-26 09:23:33
 * @Last Modified by: yan.chaoming
 * @Last Modified time: 2018-05-29 15:25:27
 */

import * as interfaces from "../common/interfaces.js";
import {Get, Post,_axios} from "@common";

let timer = null;

let state = {
	CONFIG: null,
	member: {},  //用户信息
	cartTotalAmount: 0, // 购物车商品总数
};

let getters = {
	[interfaces.GET_MEMBER]: state => state.member,
	[interfaces.GET_MEMBER_ISLOGIN]: (state) => state.member['loginName'],
	[interfaces.GET_TOTAL_AMOUNT]: (state) => state.cartTotalAmount,
};

let mutations = {
	[interfaces.SET_MEMBER]: (state, member) => {
		state.member = member;
	},
	updateMember: function (state, member) {
		state.member = member;
	}
};

let actions = {
	[interfaces.ACTION_LOGIN]({commit}, params) {
		return Post(CONFIG.BASE_URL+ "login.do", params.member).then(function (rep) {
			let datas = rep.data
			if (datas.data && (datas.data.checkStatus == "1" || datas.data.checkStatus == 1)) {
				commit("updateMember", datas.data);
				//params.isAutomaticLogin 是否自动登陆属性
				//由于sessionStorage 多标签页不能共享，暂时使用localstorage
				if (1) {
					window.localStorage.setItem('token',datas.token);
				}else{
					sessionStorage.setItem('token',datas.token)
				}
			}
			// debugger
			return rep;
		});
	},
	
	[interfaces.ACTION_KEEP_SESSION]: ({commit}) => {
		if(!timer)
			timer = window.setInterval(keepSession(commit), 600000);
		return keepSession(commit);
	},
	[interfaces.ACTION_LOGOUT]: function () {
		window.localStorage.removeItem('token');
		window.sessionStorage.removeItem('token');
		return Get(CONFIG.BASE_URL+  '/logout.do');
	},
	getTotalAmount({commit, state}, amount) {
		state.cartTotalAmount = amount;
	}
	
};

var keepSession = function (commit) {
	let stamp = new Date().getTime();
	return Get(CONFIG.BASE_URL+ 'checkToken.do?stamp='+stamp)
		.then(function (rep) {
			let datas = rep.data;
			let _member = datas.data || {};
			commit("updateMember", _member);
			return _member
		});
};

export default {
	namespaced: true,
	name: "login",
	state,
	getters,
	actions,
	mutations
};
