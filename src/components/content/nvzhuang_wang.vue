<template>
	<div>
		<header class="w_nzhead">
 		<p>卷皮</p>
 		<div>
			<img src="../../../static/img/1.jpg">
		</div>
 		</header>
 		<List></List>
		<div class="w_nzbanner">
		<a href="">
			<img src="https://goods5.juancdn.com/jas/170818/9/b/599636d9a9fcf8ab177f7cec_200x212.png?iopcmd=convert&Q=88&dst=webp">
		</a>
		<a href="">
			<img src="https://goods5.juancdn.com/jas/170818/9/b/599636d9a9fcf8ab177f7cec_200x212.png?iopcmd=convert&Q=88&dst=webp">
		</a>
		<a href="">
			<img src="https://goods5.juancdn.com/jas/170818/9/b/599636d9a9fcf8ab177f7cec_200x212.png?iopcmd=convert&Q=88&dst=webp">
		</a>
		<a href="">
			<img src="https://goods5.juancdn.com/jas/170818/9/b/599636d9a9fcf8ab177f7cec_200x212.png?iopcmd=convert&Q=88&dst=webp">
		</a>
		<a href="">
			<img src="https://goods5.juancdn.com/jas/170818/9/b/599636d9a9fcf8ab177f7cec_200x212.png?iopcmd=convert&Q=88&dst=webp">
		</a>
		<a href="">
			<img src="https://goods5.juancdn.com/jas/170818/9/b/599636d9a9fcf8ab177f7cec_200x212.png?iopcmd=convert&Q=88&dst=webp">
		</a>
		<a href="">
			<img src="https://goods5.juancdn.com/jas/170818/9/b/599636d9a9fcf8ab177f7cec_200x212.png?iopcmd=convert&Q=88&dst=webp">
		</a>
		<a href="">
			<img src="https://goods5.juancdn.com/jas/170818/9/b/599636d9a9fcf8ab177f7cec_200x212.png?iopcmd=convert&Q=88&dst=webp">
		</a>
	</div>
<div class="w_main">
	<div class="space"></div>
<div class="w_goods">
	<div class="w_title">
		<img src="https://goods1.juancdn.com/bao/170310/0/f/58c20db7a43d1f63427015d8_750x96.jpg?iopcmd=convert&Q=88&dst=webp">
	</div>
<div class="w_goods" v-for="item in goods">
	
	<div class="w_goods_title">
		<div>
			<img :src="item.logo_url">
		</div>
		<div>
			<p>{{item.title}}</p>
			<p>{{item.coupon_tips}}</p>
		</div>
		<div>
			<span>{{item.mkt_info}}</span>
		</div>
	</div>
	<div class="w_goodslist">
		<div v-for="mm in item.sub_data">
			<img :src="mm.pic">
			<p><span>{{mm.cp}}</span><span>{{mm.op}}</span></p>
			<p>{{mm.title}}</p>
		</div>
	</div>
	
	<div class="space"></div>
	</div>
	</div>
	</div>
</div>
</template>
<style scoped>
.w_nzhead{
	width: 100%;
	height:1.1733rem;
	line-height:1.1733rem; 
	border-bottom: 1px solid #ccc;
	position: relative;
}
.w_nzhead p{
	text-align:center;
	color:#d00; 
	font-weight:bold;
	font-size: 0.64rem;
}
.w_nzhead div{ 
	width:44px;
	height:38px;
	position: absolute;
	top:0.1rem;
	right:0.4rem;
}  
.w_nzhead div img{
	width:44px;
	height:38px;
}
.w_nzbanner{
	width:100%;
	display:flex;
	flex-wrap: wrap;
	justify-content:space-around; 
}
.w_nzbanner a{
	width:25%;
	height:2.65rem; 
} 
.w_nzbanner a img{
	width:2.5rem;
	height:2.65rem; 
} 
.w_title{
	width: 100%;
	height:1.28rem;
}
.w_title img{
	width: 100%;
	height:1.28rem; 
}
.w_goods_title{
	width: 100%;
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
 	margin-left: 0.25rem;
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
import List from "./list_wang";
	export default{
		components:{
			List
		},
		data(){
			return{
				menu:[],
				goods:[]
			}
		},
		methods:{
			request(){
				this.$http.get("./static/data/nvzhuang.json").then(function(res){
					this.goods = res.body.list;
					console.log(res.body.list);
				});
				this.$http.get("./static/data/nvzhuang1.json").then(function(res){
					this.menu = res.body.module_ads.multi_block;
					console.log(res.body.module_ads.multi_block);
				})
			}
		},
		mounted(){
			this.request()
		}
	}
	
</script>