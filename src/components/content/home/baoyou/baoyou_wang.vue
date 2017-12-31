
<template>
	<div id="ad">
	<div class="w_baoyou_header">
		<div>
			<img src="https://goods1.juancdn.com/jas/170815/1/f/599263598150a13db6324659_1080x418.jpg?iopcmd=convert&Q=88&dst=jpg">
		</div>
	</div>
	<div class="w_baoyou_title">
		<ul>
			<li>精选</li>
			<li>生活家</li>
			<li>美美哒</li>
			<li>萌宝乐</li>
		</ul>
	</div>
	<div class="w_baoyou_jingxuan">
		<img src="https://s2.juancdn.com/bao/170821/7/6/599a96158150a162c67493f8_750x120.png?iopcmd=convert&Q=88&dst=webp">
	</div>
	<div class="w_baoyou_imglist">
		<ul>
			<li v-for="item in goods"> 
			<img :src=item.img>
			<p>{{item.brand}}</p>
			<p>
			<span>{{item.state}}</span>
			<span>¥16.9</span>
			<span>398</span>
			</p>
			<p>立即购买</p>
			</li>
		</ul>
	</div>
	</div>
</template>
<style type="text/css" scoped>
	.w_baoyou_header,.w_baoyou_header div,.w_baoyou_header div img{
	width: 100%;
	height:5.6533rem; 
	/*background: green;*/
}
.w_baoyou_title{
	width: 100%;
	height:1.16rem; 
	background:#aad;
	font-size: 0.48rem;
	color: #fff; 
 }
.w_baoyou_title ul{
	display: flex;
	flex-wrap: wrap;
}
.w_baoyou_title ul li{
	width: 2.4933rem;
	height: 1.16rem;
	line-height: 1.16rem;
	text-align: center;
}
.w_baoyou_jingxuan,.w_baoyou_jingxuan img{
	width:100%;
	height: 1.6rem; 
}
.w_baoyou_imglist ul{
	display: flex;
	flex-wrap: wrap;
}
.w_baoyou_imglist li{
	width:4.64rem;
	height:7.08rem;
	background: #fff;
	border: 1px solid #aaa;
	margin : 0 0.2rem 0.24rem 0.2rem;
	  
}
.w_baoyou_imglist ul li:nth-of-type(even){
	margin-left: 0;
}
.w_baoyou_imglist li img{
	width: 4.64rem;
	height: 4.64rem;
}
.w_baoyou_imglist li p:first-of-type{
	height:0.6133rem;
	width: 4.64rem;
	padding-top:0.16rem;
	text-align: center;
}
.w_baoyou_imglist li p:nth-of-type(2){
	width:4.64rem;
	height:0.5467rem;
	display: flex;
}
.w_baoyou_imglist li p:nth-of-type(2) span:first-of-type{
	margin-left:0.8rem;
	color: #d00;
	font-size:0.2667rem;
	margin-top:0.1867rem;
}
.w_baoyou_imglist li p:nth-of-type(2) span:nth-of-type(2){
	margin-left: 0.1333rem;
	color: #d00;
	font-size:0.48rem; 

}
.w_baoyou_imglist li p:nth-of-type(2) span:nth-of-type(3){
	margin-left: 0.1333rem;
	color: #aaa;
	text-decoration: line-through;
	margin-top: 0.1333rem;
}
.w_baoyou_imglist li p:nth-of-type(3){
	background:#c00;
	height: 0.6933rem;
	line-height: 0.6933rem;
	width: 4.2133rem;
	font-size: 0.32rem;
	color: #fff; 
	margin-left:0.2133rem; 
	margin-top: 0.24rem;
	text-align:center;
}

</style>
<script type="text/javascript">
	export default {
	data (){
		return {
			goods:[]
		}
	},
	methods:{
		request(){
			this.$http({
				url:"./static/data/today.json"
		    }).then(function(res){
		    	this.goods=res.data.product;
		    	console.log(this.goods)
	
			})
		}
	},
	mounted(){
			this.request();
		}
}
</script>