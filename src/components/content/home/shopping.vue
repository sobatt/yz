<template>
<div>
	<div class="w_xx_header">
		<a><div id="L_jian" @click="back"></div></a>
		<p>蓝菲女装专场</p>
		<div>
		<span></span>
		<span></span>
		<span></span>
		</div>
	</div>
	<div class="w_desc">
		<div class="w_desc_content">
			<div class="w_content_t">
				<div>
					<img src="https://s1.juancdn.com/brand/161228/0/2/5863124ddb01d9c2228b45fb_180x90.png">
				</div>
				<div>
					<p>蓝菲女装专场</p>
					<p>8.3万人已团</p>
				</div>
				<div>
					<p></p> 
					<p>收藏店铺</p>
				</div>
			</div>
			<div class="w_content_mm">
			<div class="w_content_m1">
				<span>满赠</span>
				<p>满1元即赠30元优惠券，限赠一次,数...</p>
			</div>
			<div class="w_content_m2">
				<span>任远</span>
				<p>69元2件任选</p>
			</div>
			</div>
			<div class="w_content_b">
				<div>
					<span>¥</span>
					<span>13</span>
				</div>
				<div>
					<p>共有2张优惠券</p>
					<p>仅限当前专场使用</p>
				</div>
				<div>
					<span>立即领取</span>
				</div>
			</div>
		</div>
	</div>
	<div class="w_time">
		<div>
			<p>距离结束还剩</p>
			<p>——
			<em>5</em>
			<span>天</span>
			<em>23</em>
			<span>时</span>
			<em>25</em>
			<span>分</span>
			<em>00</em>
			<span>秒</span>
			——</p>
		</div>
	</div>
	<div class="w_goods_index">
			<div>推荐</div>
			<div><a href="">价格</a><a href=""><p></p><p></p></a></div>
			<div><a href="">销量</a></div>
			<div><a href="">筛选</a></div>
	</div>
	<div class="w_shoes_list">
		<div v-for="item in goods" id="lll">
			<!--<router-link :to="'/gooddetail/'+item.goods_id" >-->
			<div v-for="mm in item.sub_data">
			<router-link :to="{path:'/gooddetail',query:{data : mm}}">	
		 	<img :src="mm.pic">
		 	<p class="w_bannerone_price"><span>{{mm.cp}}</span><span>拼</span><span>{{mm.op}}</span></p>
		 	<p>{{mm.title}}</p>
			</router-link>
			</div>
		</div>
	</div>	
	
</div>
</template>

<script>
	export default {
		data () {
			return{
				list : [],
				goods:[],
				i : ''
			}
		},
		methods:{
//			request() {
//				this.$http.get("/api/brand/1669545?shop_id=2809806&sales_hot=54263215_57333298&user_groupids=p8_c3_l1_51_1064_18_771_5_128&page=1&is_ajax=1&order=&sort=&cat_threeids=&price_range=")
//				.then(function(res){
//					console.log(res.body.data.special);
//					this.list = res.body.data.special;
//				})
//				
//			},
			request(){
				this.$http.get("./static/data/home_items.json").then(function(res) {
					this.goods = res.body.list;
				})
			},
			
			back () {
				window.history.back()
			}
		},
		mounted () {
			this.request();
			
			
		}
}	
</script>

<style scoped>
#L_jian{
	position: relative;	
}
#L_jian:after, #L_jian:before {
  border: 0.32rem solid transparent;
  border-right: 0.32rem solid #666;
  width: 0;
  height: 0;
  position: absolute;
  top: 0.066666rem;
  left: 0;
  content: ''
}
#L_jian:after {
  border-right-color:#fff ;
  left: 0.066666rem;
}	
.space{
	width: 100%;
	height:.42667rem;
	background:#eee;
}
.w_xx_header{
	width: 100%;
	height:1.1733rem; 
	display: flex;
	justify-content:space-between;
	align-items: center;
	padding-left:0.32rem;
	padding-right:0.2667rem;
	font-size: 0.48rem; 
}
.w_xx_header div:first-of-type{
	width:0.64rem; 
	height:0.64rem;
	color: #999; 
}
.w_xx_header div:first-of-type img{
	 margin-top: 25%;
}
.w_xx_header div:nth-of-type(2){
	width:0.8rem;
	height: 0.8133rem;
	display: flex;
	justify-content:space-around;
	align-items: center;
}
.w_xx_header div span{
	height:0.1rem;
	width: 0.1rem;
	border-radius: 50%;
	background: #999;
}
.w_desc{
	width: 100%;
	height: 6.5867rem;
	background:#eee;
	padding:0.22rem; 
}
.w_desc_content{
	width:9.4667rem;
	height: 6.0533rem; 
	background: #fff;
	padding-left:0.3333rem;
	padding-top:0.3333rem;  
}
.w_content_t{
	height:1.3067rem;
	width:9.4667rem;
	display: flex;	
}
.w_content_t div:first-of-type{
	width:1.2267rem;
	height: 1.2267rem;
	border: 1px solid #eee;
}
.w_content_t div:first-of-type img{
	width: 1.2rem;
	height:0.6rem;
	margin-left:0.0133rem;
	margin-right:0.0133rem;
	margin-top: 25%; 
}
.w_content_t div:nth-of-type(2){
	height:1.2267rem;
	width: 5.2067rem; 
	margin-left:0.2667rem; 
}
.w_content_t div:nth-of-type(2) p:first-of-type{
	width:5.2067rem;
	height:0.6933rem;
	margin-bottom: 0.1733rem;
	font-size:0.3733rem;
}
.w_content_t div:nth-of-type(2) p:nth-of-type(2){
	width:1.7248rem;
	height:0.36rem;
	font-size:0.32rem;
	color: #333;  
	white-space: nowrap;
}
.w_content_t div:nth-of-type(3){
	height:1.2533rem; 
	width:1.0667rem;
	margin-left:1rem;
}
.w_content_t div:nth-of-type(3) p:first-of-type{
	content: "\e612";
	width:0.64rem;
	height: 0.64rem;
}
.w_content_t div:nth-of-type(3) p:nth-of-type(2){
	width:1.0667rem;
	height: 0.3467rem;
	font-size:0.2667rem; 
	white-space: nowrap;
	text-align: right;
}
.w_content_mm{
	width:9.4667rem;
	height:2.1333rem;
	font-size: 0.32rem;
	padding-top: 0.6rem;
	padding-bottom: 0.6rem; 
}
.w_content_mm div span{
	width:0.9333rem;
	height:0.3867rem;
	line-height:0.3867rem;
	text-align: center;
	margin-top: 0.12rem; 
	margin-bottom: 0.12rem;
	margin-right: 0.2667rem;
	border: 1px solid #c00;
	display: inline-block;
	color: #c00;
}
.w_content_mm div p{
	height: 0.6667rem;
	line-height: 0.6667rem;
	white-space: nowrap;
	display: inline-block;
}
.w_content_b{
	width:8.8933rem;
	height:1.5467rem;
	margin-top:0.3733rem;
	border: 1px solid #c00;
	display:flex;
} 
.w_content_b div:first-of-type{
	width: 2.64rem;
	height: 1.4933rem;
	padding-left: 0.56rem;
	padding-right: 0.5333rem;
}
.w_content_b div:first-of-type span:first-of-type{
	width:0.4267rem;
	height: 0.48rem;
	font-size:0.4267rem;
	margin-top:0.8rem; 
}
.w_content_b div:first-of-type span:nth-of-type(2){
	width: 1.0677rem;
	height:1.0667rem;
	line-height: 1.0667rem;
	font-size:0.96rem;
	font-weight:bold;
	display: inline-block;
	margin-top: 0.2133rem;
	margin-bottom: 0.2133rem;
}
.w_content_b div:nth-of-type(2){
	width: 3.08rem;
	height: 1.4933rem;
	padding-top: 0.3333rem;
	padding-bottom: 0.3333rem;
}
.w_content_b div:nth-of-type(2) p{
	width: 3.08rem;
	height: 0.4133rem;
	line-height:0.4133rem; 
	font-size:0.32rem;
}
.w_content_b div:nth-of-type(3){
	width: 3.0667rem;
	height: 1.4933rem;
	line-height:1.4933rem; 
	padding-left: 0.2667rem;
	padding-right:0.2667rem;
}
.w_content_b div:nth-of-type(3) span{
	font-size:0.3733rem;
	width:2.5333rem;
	height:0.6667rem;
	line-height: 0.6667rem; 
	color: #fff;
	font-weight: bold;
	text-align: center;
	background: #f00;
	display: inline-block;
}
.w_time{
	width:100%;
	height: 1.36rem; 
	padding-top:0.32rem;
	padding-bottom: 0.2667rem; 
	text-align: center;
	background: #ddd;
}
.w_time div p:first-of-type{
 	width: 100%;
 	height: 0.3467rem;
 	line-height:0.3467rem;
 	font-size: 0.2667rem;
 	text-align: center; 
}
.w_time div p:first-of-type{
 	width: 100%;
 	height: 0.3467rem;
 	line-height:0.3467rem;
 	font-size: 0.2667rem;
}
.w_time div p:nth-of-type(2){
	width:4.0533rem;
	height: 0.4267rem;
	font-size: 0.2133rem;
	display: flex;
	white-space: nowrap;
	padding-left:2.9733rem;
	padding-right:2.9733rem;
}
.w_time div p:nth-of-type(2) em{
	font-style: normal;
	 
	height: 0.4133rem;
	line-height: 0.4133rem;
	font-size:0.3733rem;
	margin-left:0.15rem; 
	margin-right:0.15rem; 
	display: inline-block;
}
.w_time div p:nth-of-type(2) span{
	 
	height: 0.4133rem;
	line-height:0.4133rem;
	display: inline-block;
}
.w_goods_index{
	width:100%;
	height:1.08rem;
	padding-top:0.1667rem;
	padding-bottom: 0.1667rem;
	display: flex; 
	font-size:0.3733rem;
	white-space: nowrap;
}
.w_goods_index div{
	width:2.16rem;
	height: 0.7467rem;
	text-align: center; 
}
.w_goods_index div:nth-of-type(2){
	display: flex;
}
.w_goods_index div:nth-of-type(2) p:first-of-type{
	width: 0;
	height: 0;
	border:0.0933rem solid transparent;
	border-bottom: 0.0933rem solid #d00;
	margin-left:0.1867rem; 
	margin-bottom:0.1067rem;
}
.w_goods_index div:nth-of-type(2) p:last-of-type{
	width: 0;
	height: 0;
	border: 0.0933rem solid transparent;
	border-top: 0.0933rem solid #d00;
	margin-left:0.1867rem;
}
.w_goods_index div:last-of-type{
	width:3.3867rem;
	height: 0.7467rem; 
}
.w_goods_index div:last-of-type a{
	/*background:url(/jpwebapp_v1/images_v1/icon/sort_sprite.png)  no-repeat right center;*/
	/*background-size:0.2933rem 0.7467rem; */
	width:1.2rem;
	height:0.7467rem;
	text-align: left;
	white-space: nowrap;
	display: inline-block;
}
.w_shoes_list{
	border-top: 4px solid #eee;
}
.w_shoes_list {
	display: flex;
	flex-wrap: wrap;
	justify-content:space-between;
	width: 100%; 
	/*float: left;*/
}
.w_shoes_list img{
	height: 5rem;
	width: 5rem;
}

.w_shoes_list p{
	width: 100%;
	height: 0.64rem;
	line-height:0.64rem; 
	font-size:0.32rem;
	padding-left:0.24rem; 
}
.w_bannerone_price span{
	margin-top:0.1067rem; 
	display: inline-block;
	height: 0.44rem;
	line-height: 0.44rem;
	text-align: center;
}
.w_bannerone_price span:first-of-type{
	font-size:0.4rem;
	color: #f00;
	margin-right:0.1067rem; 
}
.w_bannerone_price span:nth-of-type(2){
	font-size:0.2667rem;
	color: #fff;
	background: #d00;
	margin-right:0.1067rem;
	width: 0.44rem;
}
.w_bannerone_price span:nth-of-type(3){
	font-size:0.2933rem;
	text-decoration: line-through; 
}
.w_pos1{
	width:1.1133rem;
	height: 1.1667rem;
	position: fixed;
	left:0.2667rem;
	bottom: 0.2667rem; 
	background: rgba(100,100,100,0.2);
	border-radius: 0.2rem;
}
.w_pos2{
	width:1.1133rem;
	height: 1.1667rem;
	position: fixed;
	right:0.2667rem;
	bottom: 0.2667rem; 
	background: #abc;
	border-radius:50%;
}
</style>