<template>
	<div>
<header class="w_sousuo_header">
	 <div class="w_sousuo_input">
	 <div>
	 <p></p>
	 <em>—</em>
	 </div>
	 <input  placeholder="浪漫七夕全场2件8折">
	 <span>X</span>
	 </div>
	 <span class="w_sousuo_del" @click="back">取消</span>
	 </header>
	 <div class="w_sousuo_main">
	 	<h3>热搜</h3>
	 	<p>
	 	<span>浪漫七夕全场2件8折</span>
	 	<span>品牌清仓</span>
	 	</p>
	 	<p> 
	 	<span>新人专享60元大礼包</span>
	 	<span>秋季女装</span>
	 	<span>儿童套装</span>
	 	</p>
	 	<p> 
	 	<span>外套女</span>
	 	<span>男装</span>
	 	<span>小白鞋</span>
	 	<span>鞋柜童鞋</span>
	 	<span>书包</span>
	 	</p>
	 	<p>
	 	<span>内裤女</span>
	 	<span>手机</span>
	 	<span>耳饰</span>
	 	<span>拉杆箱</span>	
	 	</p>
	 	<div class="w_sousuo_fenlei">
	 	<h3>常用分类</h3>
	 	<div>
	 	<p><i>鞋类</i></p>
	 	<p><i>居家百货</i></p>
	 	<p><i>运动户外</i></p>
	 	<p><i>美食</i></p>
	 	<p><i>车品文娱</i></p>
	 	</div>
	 	</div>
	 </div>	
	</div>
</template>

<script>
	export default {
		methods : {
			back () {
				window.history.back();
			}
 		}
	}
	
</script>

<style scoped>
	
.w_sousuo_header{
	width: 100%;
	height: 1.0133rem;
	padding-top:0.2667rem;
	padding-bottom:0.1733rem;
	border-bottom: 1px solid #ccc;
	display: flex;  
}
.w_sousuo_input{
	width:8.0803rem;
	height:0.7467rem;
	position: relative; 
	margin-left:0.2667rem;
}
.w_sousuo_input div{
	position:absolute;
	top:0.1333rem;
	left:0.1333rem;
	width:1.0667rem;
	height: 0.7467rem;
	display: flex;
}
.w_sousuo_input div p{
	width:0.3467rem;
	height:0.3467rem;
	border: 1px solid #999;
	border-radius: 50%;
	margin-top:0.0867rem;
	margin-left:0.1333rem;  
}
.w_sousuo_input div em{
	display: inline-block;
	font-size:0.1867rem;
	transform: rotate(45deg);
	font-style: normal;
	margin-left:-0.16rem;
	margin-top:0.24rem; 
}
.w_sousuo_input span{
	display: inline-block;
	position: absolute;
	top:0.2267rem;
	right: 0.1333rem;
	font-size:0.2933rem; 
}
.w_sousuo_header input{
	width:8.0803rem;
	height:0.7467rem; 
	font-size:0.32rem; 
	border: none;
	border-radius:4%;
	background: #eee;
	text-indent:0.8rem;
}
.w_sousuo_header input:placehoder{
	text-indent:0.8rem;
}
.w_sousuo_del{
	margin-left:0.2667rem;
	font-size:0.4rem;
	padding-top:0.14rem;
}
.w_sousuo_main{
	width:9.2537rem;
	margin: 0 auto; 
}
.w_sousuo_main h3{
	height: 0.3867rem;
	line-height: 0.3733rem;
	margin-top:0.4667rem;
	font-size:0.3733rem;
	color:#ddd;
}
.w_sousuo_main p{
	margin-top:0.2667rem;
}
.w_sousuo_main p span{
	display:inline-block;
	padding:0.16rem;
	background:#eee;
	margin-right:0.2rem; 
	border-radius:2%;
	font-size: 0.32rem;
}
.w_sousuo_fenlei div{
	display: flex;
	justify-content: space-between;
}
.w_sousuo_fenlei p{
	height: 1.3331rem;
	line-height: 1.3331rem;
	width: 1.3331rem;
	text-align: center;
	font-size: 0.32rem;
	background:#aaf;
	border-radius: 50%;
}
.w_sousuo_fenlei i{
 	font-style: normal;
 	display: inline-block;
 	width: 0.6667rem;
 	line-height: 0.32rem;
 	margin-top: auto;
 	vertical-align:middle;
}
</style>