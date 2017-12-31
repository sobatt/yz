<template>
<div class="app">
			<div>
			<div class="banner">
				<img src="../../../../static/img/cup.jpg"/>
				<img src="../../../../static/img/1503304779(1).jpg"/>
			</div>
			<!---->
			<div class="big-price" >
				<span class="span1-1">￥34</span><span class="span1-2">￥23</span><span class="span1-3">拼团价</span><span><img src="../img/heart.png"/></span></br>
				<span class="1-4">距离活动结束还有21天23小时23分钟35秒</span></br>
				<span>11</span>
			</div>
			</div>
			<!---->
			<div class="main-nav">
				<img src="../../../../static/img/hahahaha8.png"/>
			</div>
			<!---->
			<div class="main-2">
				<span>优惠价</span><p>雪花勇闯天涯哈哈哈</p>
			</div>
			<div class="asq"></div>
			<div class="main-3">
				<span class="main-span">VIP</span><p>雪花勇闯天涯哈哈哈</p><span class="main-span2"><img src="../img/back.png"/></span>
			</div>
			<!---->
			<div class="asq"></div>
			<!---->
			<div class="ren">
				<div class="ren1"><img src="../../../../static/img/ren.png"/></div>
				<div class="ren2">上海市.killer</br>仅差一人组团<span>剩余 23:32:35</span></div>
				<div class="ren3">去参团</div>
			</div>
			<!---->
			<div class="xuanze">
				<div class="xuanze1">已选择:红色234L*高23cm</div>
				<div class="xuanze2"><img src="../../../../static/img/back.png"/></div>
			</div>
			<div class="asq"></div>
			<!---->
			<div class="canshu">
				<div class="canshu-item">图文详情</div>
				<div class="canshu-item">产品参数</div>
				<div class="canshu-item">咨询与售后</div>
			</div>
			<!---->
			<div class="fahuo">
				<p><span>商家提醒 :</span> 24小时之内发货</p>
			</div>
			<!---->
			<div class="lest">
				<img src="../../../../static/img/h1.jpg"/>
			</div>
			<div class="lest">
				<img src="../../../../static/img/h2.jpg"/>
			</div>
			<div class="lest">
				<img src="../../../../static/img/h3.jpg"/>
			</div>
			
			
			<!---->
			<div class="kong"></div>
			<div class="footer">
				<div class="footer-item1"><img src="../../../../static/img/home.png"/><p>首页</p></div>
				<div class="footer-item2"><img src="../../../../static/img/car4.png"/>购物车</div>
				<div class="footer-item3"><span>￥9.31</span><br>
					<span>单独购买</span>
				</div>
				<div class="footer-item4">
					<span>￥9.31</span><br>
					<span>加入购物车</span>
				</div>
			</div>
		</div>
</template>

<script>
	
	export default{
		data(){
			return{
				
			}
		},
		methods:{
			request(){
					this.$http({
						url:'api/getOtherInfo',
						params:{
							goods_id:this.$route.params.id,
							sa_id:9927089,
							is_pt_goods:0,
							is_vip:0
						}
						
						
						
						
					}).then(function(res){
							
							
							
//						console.log(res);
						})
				
		},
			
			
			
			
			
			
			
		},
		mounted(){
			this.request();
			console.log(this.$route.params.id)
		}
	}
	
	
	
	
</script>



<style scpoed>
.top{
	display: flex;
	justify-content: flex-end;
}
.top img{
	/*width: 6.25rem;*/
}
.banner{
	position: relative;
}
.banner img{
	width: 100%;
}
.banner img:nth-of-type(2){
	width: 1.175rem;
	position: absolute;
	top:  0.2125rem;
	right: 0.2125rem;
}
/**/
.big-price{
	height: 2.059375rem;
	padding: 0.0015625rem;
}
/**/
.span1-1{
	font-size: 0.625rem;
	color: red;
	margin-left: 0.46875rem;
}
.span1-2{
	font-size: 0.328125rem;
	color: dimgrey;
	text-decoration: line-through;
	margin-left: 0.1125rem;
}
.span1-3{
	display: inline-block;
	width: 1.28125rem;
	background: palevioletred;
	text-align: center;
	line-height: 0.390625rem;
	height: 0.390625rem;
	font-size: 0.328125rem;
	color: white;
	margin-left: 0.1125rem;
}
.big-price span:nth-of-type(4){
	width: 0.703125rem;
}
.big-price span:nth-of-type(4) img{
	width: 0.703125rem;
	float: right;
	margin-right: 0.3125rem;
	/*margin-top: 0.15625rem;*/
}
.big-price span:nth-of-type(5){
	margin-top: 0.45625rem;
	font-size: 0.24375rem;
	color: dimgray;
	margin-left: 0.46875rem;
}
.big-price span:nth-of-type(6){
	display: inline-block;
	margin-top: 0.19005rem;
	margin-left: 0.46875rem;
	color: gray;
	
}
/**/
.main-nav img{
	width: 100%;
}


/**/
.kong{
	height: 1.40625rem;
}
.footer{
	height: 1.40625rem;
	display: flex;
	justify-content: space-around;
	position: fixed;
	bottom: 0;
	left: 0;
	background: white;
}
.footer-item1{
	width: 1.453125rem;
	height: 1.40625rem;
	text-align: center;
	font-size: 0.359375rem;
	
	
}
.footer-item1 img{
	margin-left: 25%;
	font-size: 0.359375rem;
	width: 0.65625rem;
}
.footer-item2{
	width: 1.453125rem;
	height: 1.40625rem;
	text-align: center;
	font-size: 0.359375rem;
}
.footer-item2 img{
	margin-left: 23%;
	width: 0.65625rem;
}
.footer-item3{
	width: 2.84375rem;
	height: 1.40625rem;
	text-align: center;
	/*line-height:  1.40625rem;*/
	font-size: 0.359375rem;
	
	
}
.footer-item3 span:nth-of-type(1){
	margin-top: 0.092375rem;
	display: inline-block;
	/*font-size: 0.359375rem;*/
}
.footer-item3 span:nth-of-type(2){
	margin-top: 0.148125rem;
	display: inline-block;
	/*font-size: 0.359375rem;*/
}
.footer-item4{
	width: 4.21875rem;
	height: 1.40625rem;
	text-align: center;
	/*line-height:  1.40625rem;*/
	background: RGB(255,70,78);
	color: white;
}
.footer-item4 span:nth-of-type(1){
	margin-top: 0.202375rem;
	display: inline-block;
	color: white;
}

.footer-item4 span:nth-of-type(2){
	margin-top: 0.092375rem;
	display: inline-block;
}
/**/
.main-2{
	height: 1.265625rem;
	line-height: 1.265625rem;
	display: flex;
	flex: start;
}
.main-2 span{
	display: inline-block;
	width: 1.0375rem;
	height: 0.575rem;
	background: mediumvioletred;
	font-size: 0.3125rem;
	text-align: center;
	line-height:  0.575rem;
	margin-left: 0.46875rem;
	color: white;
	margin-top: 0.3232rem;
}
.main-2 p{
	width: 7.8125rem;
	margin-left: 0.3125rem;
	overflow: hidden;
	text-overflow:ellipsis;
	white-space: nowrap;
	font-size: 0.375rem;
	color: dimgray;
}
.asq{
	height: 0.3125rem;
	background: antiquewhite;
}
.main-3 {
	width: 9.25rem;
	margin: auto;
	height: 1.265625rem;
	line-height: 1.265625rem;
	display: flex;
	flex: start;
}
.main-span{
	display: inline-block;
	width: 0.7375rem;
	height: 0.275rem;
	/*background: mediumvioletred;*/
	border: 1px solid mediumvioletred;
	color: mediumvioletred;
	font-size: 0.3125rem;
	text-align: center;
	line-height:  0.275rem;
	margin-left: 0.46875rem;
	margin-top: 0.4232rem;
}
.main-3 p{
	width: 7.8125rem;
	margin-left: 0.3125rem;
	overflow: hidden;
	text-overflow:ellipsis;
	white-space: nowrap;
	font-size: 0.359375rem;
	color: dimgray;
}
.main-span2 img{
	margin-top: 0.4232rem;
}
.ren{
	width: 9.25rem;
	height: 1.59375rem;
	margin: auto;
	display: flex;
	justify-content: space-around;
}
.ren img{
	width: 1.078125rem;
	height: 1.078125rem;
}
.ren1{
	width: 1.078125rem;
	height: 1.078125rem;
}
.ren2{
	width: 5.828125rem;
	height: 1.5625rem;
	line-height: 0.6rem;
	margin-left: 0.46875rem;
	/*text-indent: 0.46875rem;*/
	
}
.ren3{
	width: 1.428125rem;
	height: 0.55rem;
	border: 0.015625rem solid mediumvioletred;
	color: mediumvioletred;
	text-align: center;
	line-height:  0.55rem;
	margin-top: 0.46875rem;
}
/**/
.xuanze{
	width: 9.25rem;
	height: 1.265625rem;
	margin: auto;
	display: flex;
	justify-content: space-around;
}
.xuanze1{
	width: 7.8125rem;
	height: 1.265625rem;
	line-height: 1.265625rem;
	font-size: 0.4375rem;
}
.xuanze2{
	width: 0.65625rem;
	height: 0.65625rem;
	/*margin-top: 0.46875rem;*/
	margin-left: 1.06875rem;
}
.xuanze2 img{
	margin-left: 0.4125rem;
}
/**/
.canshu{
	width: 9.25rem;
	display: flex;
	justify-content: space-around;
	margin: auto;
}
.canshu-item{
	width: 3.046875rem;
	height: 0.8310937rem;
	border: 1px solid darkslategray;
	text-align: center;
	line-height: 0.8310937rem;
	font-size: 0.375rem;
	
}
.canshu-item:nth-of-type(1){
	background: darkslategray;
	color: white;
}
/**/
.fahuo{
	width:9.25rem;
	height: 1.3125rem;
	line-height: 1.3125rem;
	margin: auto;
}
.fahuo span{
	color: orangered;
	font-size: 0.390625rem;
}
.fahuo p{
	font-size: 0.34375rem;
}
.lest img{
	width: 100%;
}

</style>
