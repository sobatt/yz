
<template>
	<div class="w_mymain">
		<div class="w_brand_header">
			<h3>—— 限时捡漏 ——</h3>
			<div>
				<p>10:00</p>
				<p>15:00</p>
				<p>20:00</p>
			</div>
			<ul>	
				<li>
				<img src="https://goods8.juancdn.com/bao/170401/f/c/58defcc2a43d1f0f4634913e_800x800.jpg?imageMogr2/quality/88!/format/jpg">
				<p>
				<span>¥59.00</span>
				<span>¥259</span>
				</p>
				</li>
				<li>
				<img src="https://goods6.juancdn.com/bao/170320/a/9/58cf6a76ad0a49f42a8b4567_800x800.jpg?imageMogr2/quality/88!/format/jpg">
				<p>
				<span>¥59.00</span>
				<span>¥259</span>
				</p>
				</li>
				<li>
				<img src="https://goods5.juancdn.com/bao/170712/9/b/59659a9d8150a1302407d048_800x800.jpg?iopcmd=convert&Q=88&dst=jpg">
				<p>
				<span>¥59.00</span>
				<span>¥259</span>
				</p>
				</li>
			</ul>
		</div>
		<div class="w_brand_one">
			<h3>—— 一口价专区 ——</h3>
			<swiper :options='swiperOption' ref="mySwiper">
				<swiper-slide>
				<img src="https://goods3.juancdn.com/jas/170804/5/b/5984444f8150a14dc4197960_906x475.jpg?iopcmd=convert&Q=85&dst=jpg">
				</swiper-slide>
				<swiper-slide>
				<img src="https://goods3.juancdn.com/jas/170822/5/c/599c05718150a147ff0bedac_906x475.jpg?iopcmd=convert&Q=85&dst=jpg">
				</swiper-slide>
				<swiper-slide>
				<img src="https://goods3.juancdn.com/jas/170824/5/6/599e293a8150a141a5640d8b_906x475.png?iopcmd=convert&Q=85&dst=jpg">
				</swiper-slide>
				<swiper-slide>
				<img src="https://goods5.juancdn.com/jas/170824/8/8/599e2951a9fcf81c685bb0eb_906x475.jpg?iopcmd=convert&Q=85&dst=jpg">
				</swiper-slide>
				<div class="swiper-pagination"  slot="pagination"></div>
			</swiper>
		</div>
		<div class="w_nav_imglist">
			<img src="https://goods4.juancdn.com/jas/170727/7/7/5979cb2e8150a14bce122750_270x208.png?imageMogr2/quality/85!/format/png&quot">
			<img src="https://goods4.juancdn.com/jas/170727/7/7/5979cb2e8150a14bce122750_270x208.png?imageMogr2/quality/85!/format/png&quot">
			<img src="https://goods4.juancdn.com/jas/170727/7/7/5979cb2e8150a14bce122750_270x208.png?imageMogr2/quality/85!/format/png&quot">
			<img src="https://goods4.juancdn.com/jas/170727/7/7/5979cb2e8150a14bce122750_270x208.png?imageMogr2/quality/85!/format/png&quot">
			<img src="https://goods4.juancdn.com/jas/170727/7/7/5979cb2e8150a14bce122750_270x208.png?imageMogr2/quality/85!/format/png&quot">
			<img src="https://goods4.juancdn.com/jas/170727/7/7/5979cb2e8150a14bce122750_270x208.png?imageMogr2/quality/85!/format/png&quot">
			<img src="https://goods4.juancdn.com/jas/170727/7/7/5979cb2e8150a14bce122750_270x208.png?imageMogr2/quality/85!/format/png&quot">
			<img src="https://goods4.juancdn.com/jas/170727/7/7/5979cb2e8150a14bce122750_270x208.png?imageMogr2/quality/85!/format/png&quot">

		</div>
			<div class="w_tog">
			<h3>——大牌狂欢齐嗨购——</h3>
			<div class="w_tog_goods" v-for="item in brands">
				<img :src="item.cover">
				<ul>
					<li v-for="m in item.sub_data">
					<img :src="m.pic">
					<p><span>{{m.cp}}</span><span>清仓价</span></p>
					<p>{{m.title}}</p>
					</li>
				</ul>	 
			</div>
			</div>
		</div>
</template>

<style type="text/css" scoped>
	 
 	.w_mymain{
 		background:#eee;
 	}
	.w_brand_header{
		background: #999;
	}
	.w_brand_header h3{
		width: 10rem;
		height:68px;
		font-size: 28px;
		text-align: center;
		font-weight: bold;
		padding-top:25px;
		color:#fff;
	}
	.w_brand_header div{
		width: 10rem;
		height:80px; 
		display: flex;
		justify-content: space-around;
	}
	.w_brand_header p{
		width:81.84px;
		height: 80px;
		line-height: 80px;
		font-size:24px;
		font-weight: bold;
		color: #fff; 
	}
	.w_brand_header ul{
		width: 10rem;
		height: 306px;
		padding-top: 20px;
		background:#aaa;
		display: flex;
		padding-left:20px;
		padding-right: 20px;
		justify-content:space-between; 
	}
	.w_brand_header ul li{
		width:222px;
		height: 286px; 
	}
	.w_brand_header ul li img{
		height:222px;
		width: 222px; 
	}
	.w_brand_header ul li p{
		width: 222px;
		height:64px; 
		line-height: 64px;
	}
	.w_brand_header ul li p span{
		display:inline-block;
		height:64px;
		font-size: 24px;
		color: #c00;
		padding-bottom: 20px;
		font-weight:normal; 
	}
	.w_brand_header ul li p span:first-of-type{
		margin-left:30px;
		margin-right:15px; 
		font-size: 28px; 
	}
	.w_brand_header ul li p span:nth-of-type(2){
		text-decoration: line-through;
		color:#ccc;
	}
	.w_brand_one{
		height: 458.63px;
		width: 10rem;
		background:#aaa;
		color: #fff;
	}
	.w_brand_one h3{
		height: 108.33px;
		line-height:108.33px;
		width: 10rem;
		text-align: center;
	}
	.w_brand_one .swiper{
		width:10rem;
		height:350.3px;
		display: flex; 
		overflow-x: hidden;
		margin-bottom: 20px;
	}
	.w_brand_one .swiper-slide{
		width:630px;
		height:330.3px;  
	}
	.w_brand_one .swiper-slide img{
		width:630px;
		height:330.3px;
		margin-left:60px;  
	}
	.w_nav_imglist{
		width: 10rem;
		height:5rem;
		background: #eee;
		display:flex;
		flex-wrap: wrap;
		margin-bottom: 20px;
	}
	.w_nav_imglist img{
		width:2.5rem;
		height:2.5rem;
	}
	.w_tog{
		width:10rem;
		margin-bottom:20px;
	}
	.w_tog h3{
		width:10rem;
		height:88px;
		line-height:88px;
		text-align:center; 
	}
	.w_tog_goods img{
		width:10rem;
		height:290px; 
	}
	.w_tog_goods ul{
		width:10rem;
		height:346px;
		padding-left: 20px;
		padding-right: 20px; 
		display:flex;
		justify-content: space-between;
	}
	.w_tog_goods ul li{
		width:2.96rem;
		height:326px;
	}
	.w_tog_goods ul li img{
		width: 222px;
		height: 222px;
	}
	.w_tog_goods ul li p:first-of-type{
		width:222px; 
		height:48px;
		line-height: 48px;
		text-align: center;
	}
	.w_tog_goods ul li p:first-of-type span:first-of-type{
		width:40.05px;
		height:36px; 
		line-height: 36px;
		margin-right:10px;
	}
	.w_tog_goods ul li p:first-of-type span:nth-of-type(2){
		width:40.05px;
		height:18px; 
		line-height:18px;
		padding-left:10px;
		padding-right:10px;
		background:#c00;
	}
	.w_tog_goods ul li p:nth-of-type(2){
		width:56px;
		height:34px;
		line-height: 34px;
		text-align: center;
		font-size:24px;
		white-space:nowrap;
	}

</style>
<script type="text/javascript">
import {swiper,swiperSlide} from 'vue-awesome-swiper';
	export default{
	data (){
		return {
			brands:[],
			swiperOption :{
    				notNextTick:true,
    				loop: true,
					autoplay: 1000,
			  		pagination:'.swiper-pagination'
    			}
		}
	},
	methods:{
		request(){
			this.$http.get("https://webservice.juanpi.com/api/getBrandClearanceGoods?key=ppqc_jingxuan&type=1&zhouyi_ids=p8_c3_l1_51_1064_18_771_5_128&machining=gsortzxg&page=1&rows=10&dtype=JSON"
		    ).then(function(res){
		    	this.brands=res.data.list;
		    	console.log(this.brands)
			})
		}
	},
	mounted(){
			this.request();
		}
}
</script>