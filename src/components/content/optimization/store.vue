<template>
<div class="app">
			<div class="top">
				<div class="top-1"></div>
				<router-link to='/youxuan1'><div class="top-2">厨房餐具</div></router-link>
			</div>
			<div class="top-nav">
				<div class="nav-item" v-for='i in vstore1'><p>{{i.title}}</p></div>
				
			</div>
			<!---->
			<div class="main-lest">
			<div class="main-lest-item" v-for='i in vstore'>
				<img :src="i.pic_url"/>
				<p>{{i.title}}</p>
				<span>￥{{i.cprice}}</span>
			</div>
		</div>
	</div>	
</template>

<script>
	export default{
		data(){
			return {
				vstore: [],
				vstore1: []

			}
		},
		methods: {
			request(){
				this.$http.get(
					'./static/data/store.json'
				).then(function(res){
				this.vstore = res.data.data.goods;
				});
				this.$http.get(
					'./static/data/store.json'
				).then(function(res){
				this.vstore1 = res.data.data.category;
				})
			}
		},
		mounted(){
			this.request();
		}
	}
</script>

<style scoped>
body{
	font-family: "微软雅黑";
	color:dimgray;
}
.top{
	height: 1.171875rem;
	background: RGB(255,255,255);
	/*background: blue;*/
	/*display: flex;*/
	text-align: center;
	line-height: 1.171875rem;
	display: flex;
	line-height: 1.078125rem;
}
.top-1{
	width: 0.625rem;
	background: url(../../../../static/img/back.png) no-repeat;
	/*background-position:0.3125rem 0;*/
	transform: translateY(-50%) rotate(180deg);
	margin-top: 0.46875rem;
}
.top-2{
	width: 2.03125rem;
	margin: auto;
	font-size: 0.40625rem;
	margin-top: 0.10825rem;
}
/**/
.top-nav{
	height: 1.0625rem;
	display: flex;
	justify-content: space-around;
	line-height: 1.0625rem;
	font-size: 0.41375rem;
}
.nav-item{
	width: 3.328125rem;
	text-align: center;
}
.nav-item p:nth-of-type(1){
	/*width: 1.015625rem;*/
	/*border-bottom: 0.015625rem solid red;*/
	padding-bottom: 0.15625rem;
}
/**/
.main-lest{
	height: 7.09375rem;
	display: flex;
	/*justify-content: space-around;*/
	flex-wrap: wrap;
}
.main-lest-item{
	width: 4.9995625rem;
	height: 7.09375rem;
	text-align: center;
}
.main-lest-item img{
	width: 4.953125rem;
}
.main-lest-item span{
	color: orangered;
	float: left;
	margin-left: 0.725rem;
	margin-top: 0.15625rem;
}

</style>
