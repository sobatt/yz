<template>
<div>
	<Slide></Slide>
	<div class="w_col_imglist">
		<router-link to="/baoyou">
		 <a href="">
		 	<img src="https://goods7.juancdn.com/jas/170809/d/a/598a7410a9fcf82db74d8e01_270x267.png?iopcmd=convert&Q=88&dst=webp">
		 </a>
		 </router-link>
		 <router-link to="/brand">
		 <a href="">
		 	<img src="https://goods5.juancdn.com/jas/170816/9/9/5994336fa9fcf81cc96d0ab4_270x267.png?iopcmd=convert&Q=88&dst=webp">
		 </a>
		 </router-link>
		 <router-link to="/fruits">
		 <a href="">
		 	<img src="https://goods3.juancdn.com/jas/170809/4/1/598a743b8150a1268e7a6c3c_270x267.png?iopcmd=convert&Q=88&dst=webp">
		 </a>
		 </router-link>
		 <router-link to="/yiyuanpin">
		 <a href="">
		 	<img src="https://goods8.juancdn.com/jas/170809/e/8/598a7504a9fcf866ab51bcfe_270x267.png?imageMogr2/quality/88!/format/png">
		 </a>
		 </router-link>
	</div>
	
</template>

	<style>
 
.w_banner,.w_banner img{
	/*width: 100%;*/
	height:3.8667rem; 
}
.w_col_imglist{
	/*width:100%;*/
	height:2.4727rem;
	padding: 0;
	margin: 0; 
	display: flex;
	justify-content: space-around;
}
.w_col_imglist a{
	width:25%;
	height:100%; 
}
.w_col_imglist a img{
	width:2.5rem; 
	height:2.4721rem;
}
.space{
	/*width: 100%;*/
	height:.42667rem;
	background:#eee;
}
.w_store{
	/*width: 100%;*/
	height:6.074rem; 
	display: flex;
}
.w_store_l,.w_store_r{
	width: 5.0rem;
	height: 6.074rem;
}
.w_store_l a img{
	width: 5.0rem;
	height: 6.074rem;
}
.w_store_r a:first-of-type img,.w_store_r a:nth-of-type(2) img{
	width: 5.0rem;
	height: 3.0319rem;
}
.w_title{
	/*width: 100%;*/
	height:1.28rem;
}
.w_title img{
	/*width: 100%;*/
	height:1.28rem; 
}
.w_goods_title{
	/*width: 100%;*/
	height:1.4933rem; 
	padding: .42667rem .512rem;
	display:flex;
	font-size: .3733rem; 
	position: relative;
}
.w_goods_title div:first-of-type{
	width:0.96rem;
    height:0.96rem;
    margin-right: .34133rem;
    border: .02133rem solid #ebebeb;
    padding-top:0.2rem;
}
.w_goods_title div:first-of-type img{
	width:0.9333rem;
	height: 0.4533rem; 
}
.w_goods_title div:nth-of-type(2){
	font-size: .512rem;
}
.w_goods_title div:nth-of-type(2) p{
	overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    font-size:0.32rem; 
}
.w_goods_title div:nth-of-type(2) p:nth-of-type(2){
	 color: #999;
}
.w_goods_title div:nth-of-type(3){
	color: #999;
	position: absolute;
    top: .42667rem;
    right: .512rem;
    height: 1.536rem;
}
.w_goods_title div:nth-of-type(3) span{
	display: inline-block;
    font-size:0.3733rem;
    margin-top:0.2rem; 
}
.w_goodslist{
	display: flex;
}
.w_goodslist div{
 	width:5.0rem;
 	height: 5.8931rem; 
}
.w_goodslist div img{
 	width: 4.36rem;
 	height: 4.36rem;
 	margin-left: auto;
 	margin-right: auto;
}
.w_goodslist div p{
	padding-left:.512rem; 
}
.w_goodslist div p:first-of-type{
	margin-top:0.08rem;
	margin-bottom: 0.0533rem; 
}
.w_goodslist div p:first-of-type span:first-of-type{
	color: #c00;
	margin-right:0.0667rem; 
}
.w_goodslist div p:first-of-type span:nth-of-type(2){
	font-size:0.24rem;
	text-decoration: line-through;
}
</style>
<script>
import Slide from "./slide_wang";
export default {
 	components:{
 		Slide
 	},
	data (){
		return {
			goods:[]
		}
	},
	methods:{
		request(){
			this.$http.get("./static/data/home_items.json").then(function(res){
				this.goods=res.body.list;
				console.log(this.goods);
			})
		}
	},
	mounted(){
			this.request();
		}
}
</script>