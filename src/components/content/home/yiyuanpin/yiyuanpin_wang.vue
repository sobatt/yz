<template>
	<div>
		<header class="w_yiyuanpin_header">
		<p><span>—</span><span>为你推荐</span><span
		>—</span></p>
		<div class="w_yiyuan_imgs_col">
			<ul>
				<li v-for="item in goods.data">
					<img :src="item.img">
					<p>¥{{item.price}}</p>
				</li>
			</ul>
		</div>
	</header>
	<div class="w_main_title"><p><span>—</span><span>好货推荐</span><span
		>—</span></p></div>
	<div class="w_yiyuanpin_imglist">
		<div v-for="item in clothes.data">
			<img :src="item.img">
			<p><span>¥{{item.price}}</span>
			<span>¥{{item.markt_price}}</span></p>
			<p>{{item.name}}</p>
		</div>
	</div>
	</div>
</template>
<style type="text/css" scoped>
.w_yiyuanpin_header{
	width:10rem;
	height:4.6533rem;  
}
.w_yiyuanpin_header p{
	width: 100%;
	height:1.3067rem;
	font-size:0.4267rem;
	text-align: center;
}
.w_yiyuanpin_header p span{
	margin-right:4%;
	display: inline-block;
	height: 1.3067rem;
	line-height: 1.3067rem;
}
.w_yiyuan_imgs_col{
	width:10rem;
	/*height:4.6533rem; */

}
.w_yiyuan_imgs_col ul{
	width: 10rem;
	/*height:3.3464rem; */
	display: flex;
	overflow-x:scroll;
	white-space:nowrap;
}
.w_yiyuan_imgs_col li{
	width:2.7767rem;
	height:3.3464rem;
	text-align: center;
	margin-left:10px; 
	margin-right:10px;
}
.w_yiyuan_imgs_col li img{
	width:2.4992rem;
	height:2.4992rem; 
}
.w_yiyuan_imgs_col li p{
	width: 2.4992rem;
	height:0.3867rem;
	line-height:0.3867rem;
	font-size:0.3733rem; 
}
.w_main_title p{
	width:10rem;
	height:1.3067rem;
	font-size:0.4267rem;
	text-align: center;
}
.w_main_title p span{
	margin-right:4%;
	display: inline-block;
	height: 1.3067rem;
	line-height: 1.3067rem;
}
.w_yiyuanpin_imglist{
	width:10rem;
	display:flex;
	flex-wrap: wrap;
	/*white-space:nowrap;*/
	height: 500px;
}
.w_yiyuanpin_imglist div{
	width:5rem;
	height:6.7423rem; 
	border:1px solid #ccc;
}
.w_yiyuanpin_imglist div img{
	width:5.0rem;
	height:5.0rem;
}
.w_yiyuanpin_imglist div p:first-of-type{
	width:5rem;
	height:0.5692rem;
	margin-left:0.5rem;  
}
.w_yiyuanpin_imglist div p:first-of-type span:first-of-type{
	display: inline-block;
	color:#c00;
	font-size:0.4rem; 
	margin-top: 0.3rem;
}
.w_yiyuanpin_imglist div p:first-of-type span:nth-of-type(2){
	display: inline-block;
	font-size:0.2rem;
	text-decoration:line-through;
	margin-left:0.1rem;
}
.w_yiyuanpin_imglist div p:nth-of-type(2){
	width:5rem;
	height:0.7997rem; 
	font-size:0.3rem; 
	margin-left:0.5rem; 
	margin-top: 0.2rem;
}
</style>
<script type="text/javascript">
	export default {
	data(){
		return{
			clothes:[],
			goods:[]
		}
	},
	methods:{
		request(){
			this.$http({
				url:"./static/data/limitTime.json"
		    }).then(function(res){
		    	this.clothes=res.data;
		    	console.log(this.clothes);
		    	
		    this.$http.get("./static/data/live.json").then(function(res){
		    	this.goods=res.data;
		    	console.log(this.goods);
		    })
	
			})
		}
	},
	mounted(){
			this.request();
		}
}
</script>