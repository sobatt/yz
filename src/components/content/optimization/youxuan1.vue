<template>
<div class="app">
			<div class="top">
				<div class="top-1">
						<div class="top-min" id="top-min1">同城</div>
				</div>
				<div class="top-1">
					<router-link to='/youxuan2'>
						<div class="top-min" >生活态</div>
					</router-link>
				</div>
			</div>
		<div class="top-serach">
			<img :src="vdata" />
		</div>	
		<div class="top-ban">
			<img :src="vdata2" />
		</div>
		<!---->
		<div class="top-banner">
			<div class="top-banner-item" v-for='i in vdata3.child'>
				<a :href='i.url'><img :src="i.pic" /></a>
			</div>
			
			<div class="top-banner-item" v-for='i in vdata4.child'>
				<a :href='i.url'><img :src="i.pic" /></a>
			</div>
			
		</div>
		<!---->
			<vcouter></vcouter>
		<!---->
		<div class="main">
			<div class="main-item" v-for='i in vdata5.goodslist'>
					<router-link to='merchandise'><img :src="i.pic_url" /></router-link>
				<span class="newprice">￥{{i.cprice}}</span><span class="oldprice">{{i.oprice}}</span></br>
				<p>{{i.title}}</p>
			</div>
		</div>
		<div class="asq"></div>
		<div class="main-p"><p>爆款特卖</p></div>
		<!---->
		<div class="main-2">
			<div class="main-2-item" v-for='i in vdata6.child'><img :src="i.pic"/></div>
		</div>
		<div class="asq"></div>
		<!---->
		<div class="zhuanti"><p>—— 精选专题 ——</p></div>
		<!---->
		<div class="baokuan">
			<img src="../../../../static/img/baokuan.jpg"/>
		</div>
		<!---->
		<div class="main-3">
			<div class="main-3-item" v-for='i in vdata7.lists'>
				<img :src="i.pic_url"/>
				<span>￥{{i.oprice}}</span>
				<p>{{i.title}}</p>
			</div>
		</div>
		<!---->
		<div class="canzhuo">
			<img src="../../../../static/img/canzhuo.png"/>
		</div>
		<div class="asq"></div>
		
		<div class="main-nav">
			<div class="main-nav-item" v-for='i in vdata8'><p>{{i.title}}</p></div>
		</div>
		<div class="main-lest">
			<div class="main-lest-item" v-for='i in vdata9'>
				<img :src="i.pic_url"/>
				<p>{{i.title}}</p>
				<span>￥{{i.oprice}}</span>
			</div>
		</div>-->
</div>
</template>

<script>
	import vcouter from './couter'
	export default {
		components: {
			vcouter
		},
		data(){
			return {
				vdata:  [],
				vdata2: [],
				vdata3: [],
				vdata4: [],
				vdata5: [],
				vdata6: [],
				vdata7: [],
				vdata8: [],
				vdata9: []


			}
		},
	methods: {
		request(){
				this.$http.get(		
					'./static/data/shuju.json'
				).then(function(res){
					this.vdata = res.data.data.block[0].multi_block[0].data[0].child[0].pic;
				});
				this.$http.get(		
					'./static/data/shuju.json'
				).then(function(res){
					this.vdata2 = res.data.data.block[0].multi_block[1].data[0].child[0].pic;

				});
				this.$http.get(		
					'./static/data/shuju.json'
				).then(function(res){
//					console.log(res.data.data.block[0].multi_block[2].data[0].child)
					this.vdata3 = res.data.data.block[0].multi_block[2].data[0];
				});	
				this.$http.get(		
					'./static/data/shuju.json'
				).then(function(res){
//					console.log(res.data.data.block[0].multi_block[4])
					this.vdata4 = res.data.data.block[0].multi_block[3].data[0];
				});
				this.$http.get(		
					'./static/data/shuju2.json'
				).then(function(res){
//					console.log(res.data.data)
					this.vdata5 = res.data.data.goods[0].lists[2];
				});
				this.$http.get(		
					'./static/data/shuju.json'
				).then(function(res){
					this.vdata6 = res.data.data.block[0].multi_block[5].data[0];
				});
				this.$http.get(		
					'./static/data/shuju2.json'
				).then(function(res){
					this.vdata7 = res.data.data.goods[2];
				});
				this.$http.get(		
					'./static/data/shuju3.json'
				).then(function(res){
					this.vdata8 = res.data.data.category;

				});
				this.$http.get(		
					'./static/data/shuju3.json'
				).then(function(res){
					this.vdata9 = res.data.data.goods;

				});

			},

			
	},
		mounted(){
			this.request();
		}
}
</script>

<style scoped>
::-webkit-scrollbar-track-piece{
    background-color:white;
    -webkit-border-radius:0;
}
::-webkit-scrollbar{
    width:8px;
    height:8px;
}
::-webkit-scrollbar-thumb{
    height:50px;
    background-color:white;
    -webkit-border-radius:4px;
    outline:2px solid white;
    outline-offset:-2px;
    border: 2px solid white;
}
::-webkit-scrollbar-thumb:hover{
    height:50px;
    background-color:white;
    -webkit-border-radius:4px;
}

body{
	font-family:"微软雅黑" ;
	overflow-x: hidden;
	
}
.top{
	height: 1.078125rem;
	background: RGB(255,255,255);
	/*background: blue;*/
	display: flex;
}
.top-1{
	height: 1.078125rem;
	width: 50%;
	/*background: red;*/
	justify-content: space-around;
	font-size: 0.43375rem;
}
.top-min{
	width: 1.325rem;
	height: 1.078125rem;
	text-align: center;
	line-height:  1.078125rem;
	margin: auto;
	/*border-bottom: 0.03125rem solid red;*/
}
#top-min1{
	height: 1.008125rem;
	border-bottom:0.017625rem solid red;
}
.top-serach{
	height: 1.203125rem;
}
.top-serach img{
	width: 100%;
}
.top-ban{
	height: 2.1875rem;
}
.top-ban img{
	width: 100%;
}
/**/
.top-banner{
	height: 6.2rem;
	display: flex;
	flex-wrap: wrap;
	background: RGB(244,244,248);
	/*background: black;*/
}
.top-banner-item{
	width: 3.3328125rem;
	height: 2.986875rem ;
	text-align: center;
}
.top-banner-item img{
	width: 3.328125rem;
	height: 2.986875rem ;
}
/**/
.banner-time{
	height: 1.28125rem;
	display: flex;
	flex: start;
	line-height: 1.28125rem;
}
.banner-time1{
	font-size: 0.390625rem;
	margin-left: 0.46875rem;
}
.banner-time2{
	margin-left: 0.3125rem;
}
.banner-time span{
	display: inline-block;
	width: 0.5rem;
	height: 0.5rem;
	line-height:  0.5rem;
	text-align: center;
	background: black;
	color: white;
	border-radius: 0.078125rem;
}
.banner-time span:nth-of-type(4){
	background: red;
}
/**/
.main{
	height: 4.890625rem;
	display: flex;
	/*justify-content: space-around;*/
	/*background: RGB(244,244,248);*/
	overflow-x: scroll;
}
.main-item{
	width: 3.453125rem;
	height: 3.4375rem;
	text-align: center;
	margin-right: 0.046875rem;
}
.main-item img{
	width: 3.453125rem;
}
.oldprice{
	font-size: 0.256875rem;
	text-decoration: line-through
}
.newprice{
	color: orangered;
	font-size: 0.375rem;
}
.main-item p{
	font-size: 0.34375rem;
}
.asq{
	height: 0.3125rem;
	background: RGB(244,244,248);
}
/**/
.main-p{
	height: 1.4375rem;
	font-size: 0.421875rem;
	line-height:  1.4375rem;
	margin-left: 0.46875rem;
}
/**/
.main-2{
	height: 5.890625rem;
	display: flex;
	/*justify-content: space-around;*/
}
.main-2-item{
	width: 5rem;
	height: 5.890625rem;
}
.main-2 img{
	width: 5rem;
	height: 5.890625rem;
}
.zhuanti{
	height: 1.4375rem;
	font-size: 0.421875rem;
	line-height:  1.4375rem;
	text-align: center;
}
.baokuan{
	height: 4.25rem;
}
.baokuan img{
	width: 100%;
}
.main-3{
	height: 4.890625rem;
	display: flex;
	/*justify-content: space-around;*/
	overflow-x: scroll;
}
.main-3-item{
	width: 3.4665625rem;
	height: 4.890625rem;
	text-align: center;
}
.main-3-item img{
	width: 3.4665625rem;
}
.main-3-item span{
	color: red;
}
.main-3-item p{
	margin-top: 0.15625rem;
	font-size: 0.3125rem;
}
/**/
.canzhuo img{
	width: 100%;
	/*height: 4.266666rem;*/
	/*width: 10rem;*/
}
/**/
.main-nav{
	height: 1.875rem;
	display: flex;
	flex-wrap: wrap;
}
.main-nav-item{
	width: 2.5rem;
	height: 0.933125rem;
	/*margin-left: 0.46875rem;*/
	text-align: center;
	line-height:0.933125rem;
	font-size: 0.3125rem;
}
.main-lest{
	height: 7.09375rem;
	display: flex;
	/*justify-content: space-around;*/
	flex-wrap: wrap;
}
.main-lest-item{
	width: 4.9865625rem;
	height: 7.09375rem;
	text-align: center;
}
.main-lest-item span{
	color: orangered;
	float: left;
	margin-left: 0.725rem;
	margin-top: 0.15625rem;
}

</style>