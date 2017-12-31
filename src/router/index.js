import Vue from "vue";
//引入路由
import VueRouter from "vue-router";

//将router加入Vue构造函数中
Vue.use(VueRouter);




//引入路由组件
import Home from '@/components/content/home/home';
import So from '@/components/content/search';
import NvZhuang from '@/components/content/nvzhuang_wang';
import Baoyou from '@/components/content/home/baoyou/baoyou_wang';
import Brand from "@/components/content/home/brand/brand_wang";
import Fruits from '@/components/content/home/fruits/fruits_wang';
import Yiyuanpin from '@/components/content/home/yiyuanpin/yiyuanpin_wang';
import Category from '@/components/content/home/Category';


import Shopping from '@/components/content/home/shopping';
import Gooddetail from '@/components/content/home/gooddetail';



import Youxuan1 from "@/components/content/optimization/youxuan1";
import Youxuan from "@/components/content/optimization/youxuan2";
import Store from "@/components/content/optimization/store";
import Merchandise from "@/components/content/optimization/merchandise";
import Live1 from "@/components/content/optimization/live1";
import Live2 from "@/components/content/optimization/live2";




import Global from '@/components/content/global/global';
import MuYin from '@/components/content/global/muyin';
import DaPai from '@/components/content/global/dapai';
import MeiSi from '@/components/content/global/meisi';
import MeiZhuang from '@/components/content/global/meizhuang';
import Search from '@/components/content/global/search';

import Cart1 from '@/components/content/cart/cart1';
import Cart2 from '@/components/content/cart/cart2';
import Mine from '@/components/content/mine/mine';
import Login from '@/components/content/mine/login';
import Register from '@/components/content/mine/register';



export default new VueRouter({
	routes: [
		{
			path:"/home",
			component : Home,
			meta : {
				navShow : true, 
			}
			
		},
		{
			path:"/search",
			component : So,
		},
		{
			path:"/Category",
			component : Category,
		},
		{
			path:"/nvzhuang_wang",
			component:NvZhuang
		},
		{
			path:"/baoyou",
			component:Baoyou,
		},
		{
			path:'/brand',
			component :Brand, 
		},
		{
			path:'/fruits',
			component :Fruits,
			 
		},
		{
			path:"/yiyuanpin",
			component :Yiyuanpin,
		},
	
		{
			path:'/shopping',
			component : Shopping,
		},
		{
//			path : "/gooddetail/:id",
			path : "/gooddetail",
			component : Gooddetail,
		},
		{
			path:'/youxuan1',
			component :Youxuan1,
			meta : {
				navShow : true, 
			}
		},
		{
			path:"/youxuan2",
			component: Youxuan,
			meta: {
				navShow:false,
			}
		},
		
		{
			path:'/store',
			component: Store,
			meta: {
				navShow:true,
			}
		},
		{
			path:'/merchandise',
			component: Merchandise,
			meta: {
				navShow:false,
			}
		},
		{
			path:'/live1',
			component: Live1,
			meta: {
				navShow:false,
			}
		},
		{
			path:'/live2',
			component: Live2,
			meta: {
				navShow:false,
			}
		},
		{
			path:'/global',
			component : Global,
			meta : {
				navShow : true, 
			}
		},
		{
			path:'/muyin',
			component: MuYin,
			meta:{
				navShow:false,
			}
		},
		{
			path:'/dapai',
			component: DaPai,
			meta:{
				navShow:false,
			}
		},{
			path:'/meisi',
			component:MeiSi,
			meta:{
				navShow:false,
			}
		},
		{
			path:'/meizhuang',
			component: MeiZhuang,
			meta:{
				navShow:false,
			}
		},
		{
			path:'/search',
			component: Search,
			meta:{
				navShow:false,
			}
		},
	
		{
			path:"/cart1",
			component : Cart1,
			meta : {
				navShow : true, 
			}
		},
		{
			path:'/cart2',
			component : Cart2,
			meta : {
				navShow : false, 
			}
		},
		{
			path:"/mine",
			component : Mine,
			meta : {
				navShow : true, 
			}
		},
		{
			path:"/login",
			component : Login,
		},
		{
			path:"/register",
			component : Register,
		},
		{
			path:"/",
			redirect:"/home"
		}
	]
})



