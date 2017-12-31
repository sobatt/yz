// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'

import "./assets/reset.css";
import "./assets/flexible.js";


import VueResource from 'vue-resource';
Vue.use(VueResource);

import VueAwesomeSwiper from 'vue-awesome-swiper';
Vue.use(VueAwesomeSwiper);

import Vuex from 'vuex';
Vue.use(Vuex);

let store = new Vuex.Store({
		state : {
			coverState:false,
			coverState1:false,
			//存储状态
			carts : {},
			dingstore : [],
			cartsLength: 0,
			totalNum: 0,
  			totalMoney: 0,
  			stor: {},
		},
		mutations : {	
			changeState(state){
			// state是固定参数
			state.coverState = !state.coverState;
		},
		changeState1(state){
			// state是固定参数
			state.coverState1 = !state.coverState1;
		},
			
			//增加商品
			addCart(state, item) {
			    //判断购物车数组中是否存在该商品
			    if (!state.carts[item.goods_id]) {
			      item.counts = 1;
			      state.carts[item.goods_id] = item;
			    } else {
			      item.counts += 1;
			    }
			},
			  
			//减少商品
			reduce(state, item) {
			//判断购物车数组中的商品数量
			if (item.counts > 1) {
			   	item.counts -= 1;
			   } else {
			     delete state.carts[item.goods_id];
			   }
			},
				
			
			//获取商品总数量
			  getCounts(state) {
			    state.totalNum = 0;
			    for (let key in state.carts){
			        state.totalNum += state.carts[key].counts; 
			    }
			    return state.totalNum;
			  },
			  //计算对象中键值对个数
			  getCartsLength(state) {
			    state.cartsLength = Object.keys(state.carts).length;
			  },

			  //获取商品总价格
			  getMoney(state) {
			    state.totalMoney = 0;
			    for (let key in state.carts) {
			        state.totalMoney += (state.carts[key].cp.split("￥")[0].slice(1, state.carts[key].cp.split("￥")[0].length)) * state.carts[key].counts;
			    }
			    return state.totalMoney;
			  }, 
			  
			  //存储收藏商品
			  storage(state, item) {
			    //判断是否为收藏状态
			    if (item.stor) {
			      state.stor[item.goods_id] = item;
			    } else {
			      delete state.stor[item.goods_id];
			    }
			    localStorage.setItem("store", JSON.stringify(state.stor));
			  },
			  //读取localStorage中的数据，若有则赋值给stor对象
			  getStorage(state) {
			    if (localStorage.getItem("store") != null) {
			      state.stor = JSON.parse(localStorage.getItem("store"));
			    }
			  },
			//获取选好了的商品订单并存入localStorage
			  getDing(state) {
			    state.dingstore = [];
			    for (let key in state.carts) {
			        state.dingstore.push(state.carts[key])
			    }
			    localStorage.setItem("ding", JSON.stringify(state.dingstore));
			  },
			  //读取localStorage中的数据，若有则赋值给dingStor
			  showDing(state) {
			    if (localStorage.getItem("ding") != null) {
			      state.dingstore = JSON.parse(localStorage.getItem("ding"));
			    }
			  },
			  //删除订单
			  delDing(state){
			    localStorage.removeItem("ding");
			    state.dingstore = [];
			  }
			
			
		},
		action : {
			
		}
});



import router from "./router"

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
 	render: h => h(App),
 	router,
  store : store,
 	
})
