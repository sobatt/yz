
<template>
	 <div class="w_fruits_main">
	 	<div class="w_fruits_header">
	 		<ul>
	 			<li><span>精选</span></li>
	 			<li><span>应季水果</span></li>
	 			<li><span>9.9包邮</span></li>
	 			<li><span>肉蛋水产</span></li>
	 		</ul>
	 	</div>
	 	<div class="w_fruits_nav">
	 		<h3>每日特价</h3>
	 		<ul>
	 			<li v-for="item in goods">
	 				<img :src="item. pic_url">
	 				<p><span>{{item.cprice}}</span><span>{{item.oprice}}</span></p>
	 				<p>{{item.title}}</p>
	 			</li>
	 		</ul>
	 	</div>
	 	<h3 class="w_fruits_title">——超值鲜享——</h3>
	 	<div class="w_fruits_list" v-for="item in fruits">
	 		<img :src="item.pic_url">
	 		<div>
	 			<p>{{item.title_long}}</p>
	 			<p v-if="item.goods_desc" class="w_fruits_desc">{{item.goods_desc}}</p>
	 			<p class="w_fruits_price"><span>¥{{item.cprice}}</span><span>¥{{item.oprice}}</span></p>
	 			<p><span>{{item.goods_buys}}</span><span>马上抢</span></p>
	 		</div>
	 	</div>
	 	</div>
 
</template>

<script type="text/javascript">
	export default{
		data(){
			return{
				goods:[],
				fruits:[]
			}
		},
		methods:{
			request(){
				this.$http.get("https://webservice.juanpi.com/api/getPinFirstPaintInfo?cid=psg_jingxuan&zy_ids=p8_c3_l1_128_18_771_51_5_1064&app_name=zhe&catname=&page=1").then(function(res){
					this.goods=res.data.adsInfo.block[0].multi_block[1].data.child;
					this.fruits=res.data.goodsInfo.goods;
					console.log(this.goods);
					console.log(res.data.goodsInfo.goods);
				})
			}
		},
		mounted(){
			this.request()
		}
	}
</script>
<style type="text/css">
	
</style>
<style type="text/css" scoped>
	 .w_fruits_main{
	 	width: 10rem;
	 	background:#eee;
	 }
	 .w_fruits_header{
	 	background: #fff;
	 	margin-bottom:20px;
	 }
	 .w_fruits_header ul{
	 	width: 10rem;
	 	height:80px;
	 	display: flex;
	 	font-size: 32px;
	 	text-align: center; 
	 }
	  .w_fruits_header ul li{
	  	width: 187.5px;
	  	height: 80px;
	  	line-height: 80px;
	  }
	  .w_fruits_nav h3{
	  	width: 10rem;
	  	height:80px;
	  	line-height: 80px;
	  	background: #fff;
	  	padding-left: 20px;
	  	font-size: 32px;
	  	font-weight: normal;
	  }
	  .w_fruits_nav ul{
	  	width: 10rem;
	  	height:382px; 
	  	background: #fff;
	  	display: flex;
	  	padding-left:20px;
	  	padding-top:20px;
	  	padding-bottom:20px;
	  	overflow-x:scroll; 
	  	margin-bottom:20px;
	  }
	  .w_fruits_nav ul li{
	  	width:260px; 
	  	height:342px;
	  	margin-right:20px;
	  }
	  .w_fruits_nav ul li img{
	  	width:260px;
	  	height: 260px; 
	  }
	   .w_fruits_nav ul li p:first-of-type{
	   	height: 40px;
	   	width: 260px;
	   }
	    .w_fruits_nav ul li p:first-of-type span:first-of-type{
	    	color:#c00;
	    	font-size:26px; 
	    	margin-right:10px;
	    }
	     .w_fruits_nav ul li p:first-of-type span:nth-of-type(2){
	     	font-size:20px;
	     	color: #aaa;
	     	text-decoration:line-through; 
	     }
	    .w_fruits_nav ul li p:nth-of-type(2){
	    	width:260px;
	    	height:31px;
	    	line-height:31px; 
	    }
	    .w_fruits_title{
	    	width: 10rem;
	    	height: 88px;
	    	line-height: 88px;
	    	text-align: center;
	    	font-size:32px;
	    	background: #fff;
	    	font-weight: normal;
	    	border-bottom:1px solid #ddd;
	    } 
	    .w_fruits_list{
	    	width: 10rem;
	    	height: 309px;
	    	padding-left: 20px;
	    	padding-top: 20px;
	    	display: flex;
	    	background:#fff;
	    }
	    .w_fruits_list img{
	    	width:268px;
	    	height: 268px;
	    }
	    .w_fruits_list div{
	    	width:462px;
	    	height: 288px;
	    	margin-left: 20px; 
	    }
	    .w_fruits_list div p:first-of-type{
	    	font-size:28px;
	    	margin-bottom:10px;
	    }
	    .w_fruits_desc{
	    	color:0c0;
	    	font-size:20px;
	    	background:#ebe;
	    	padding:2px 5px;
	  		border-radius:10px;
	  		width:183.56px;
	  		height:34px;
	  		margin-bottom:10px;
	    }
	    .w_fruits_price{
	    	margin-bottom: 10px;
	    }
	    .w_fruits_price span:first-of-type{
	    	margin-right: 10px;
	    	color:#c00;
	    	font-size:32px; 
	    }
	    .w_fruits_list div p:last-of-type{
	    	width:462px;
	    	height:48px;
	    	margin-top:45px;  
	    }
	    .w_fruits_list div p:last-of-type span:first-of-type{
	    	font-size:22px;
	    	color:#999; 
	    }
	     .w_fruits_list div p:last-of-type span:last-of-type{
	    	font-size:26px;
	    	/*margin-left:320px;*/
	    	width:120px;
	    	height: 48px;
	    	line-height:48px;
	    	color:#e00; 
	    	color: #fff;
	    	background: #c00;
	    	padding:5px 20px;
	    	border-radius:40px;
	    	margin-left:190px;
	    }
</style>