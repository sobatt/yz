<template>
	<div>
		<header>
			<div class="imgs">
				<img @click="back" src="../../../../static/img/jian1.jpg"/>
				<p>全部分类</p>
			</div>
			<div class="clearFix"></div>
			
		</header>
		
		<div class="search">
				<input type="text" placeholder="搜素商品"/>
		</div>
		<div class="main">
			<div class="main-left">
				<ul>
					<li v-for="(v,i) in menu" :class="i==index?'active':''" @click="fn(i,$event)" >
						{{v}}
					</li>
					<li>女装</li>
					<li>男装</li>
					<li>母婴</li>
					<li>鞋类</li>
					<li>箱包</li>
					<li>居家百货</li>
					<li>家电数码</li>
					<li>内衣配饰</li>
					<li>美妆</li>
					<li>运动户外</li>
					<li>美食</li>
					<li>车品文娱</li>
					<li>内衣配饰</li>
					<li>美妆</li>
					<li>运动户外</li>
					<li>美食</li>
					<li>车品文娱</li>-->
				</ul>
			</div>
			<div class="mian-right">
				<div v-for='(item,index) in goods'>
					<img :src="item.img"/>
					<p>{{item.name}}</p>
				</div>
				<!--<div>
					<img src="../../../../static/img2/img3.jpg"/>
					<p>上衣</p>
				</div>
				<div>
					<img src="../../../../static/img2/img3.jpg"/>
					<p>上衣</p>
				</div>-->
			</div>
		</div>
	</div>
</template>
<script>
	
	export default{
		data(){
			return{
//				cloth:[],
				goods: [],
				menu:['热销榜','优选水果','牛奶面包','天天特价'],
				index: 0
			}
		},
		methods : {
					request(str){
					this.$http({
						url: 'http://h5.yztctech.net/api/axf/apicategory.php',
						params: {
							category: str || '热销榜'
						}
					}).then(function(res){
						// console.log(res);
						this.goods = JSON.parse(res.body).data;
						console.log(this.goods);
					})
				},
				fn(i,event){
					if(event.target.nodeName == "LI"){
						// console.log()
						this.request(event.target.innerText);
						this.index = i;
					}
				},
				back () {
					window.history.back()
				}
			
			
			
			
			
			
			
//					requests () {
//									this.$http.get(
//										'./static/data/boyClothes.json'
//									).then(function(res){
//						//				console.log(11);
//										this.goods = res.data.data;
//										console.log(this.cloth);
//									})
//								}	
					},
		mounted(){
			this.request();
//			this.requests();
		}
	}
	
	
	
</script>
<style scoped>
	body{
	overflow-x: hidden;
}
header{
	height: 1.222222rem;
	border-bottom: 0.013888rem solid gainsboro;
}
header .imgs img{
	height: 0.513888rem;
	width: 0.291666rem;
	float: left;
	margin: 0.333333rem 0 0.333333rem 0.486111rem;
}
header p{
	font-size: 0.555555rem;
	color: #565656;
	font-weight: bold;
	float: left;
	
	margin:0.25rem 0 0.25rem 3.472222rem;;
}
.search{
	height:1.222222rem;
}
.search input{
	height: 0.833333rem;
	width: 9.375rem;
	margin: 0.180555rem 0.277777rem;
	outline: none;
	border: none;
	border: 0.013888rem solid gainsboro;
	font-size:0.333333rem;
	background: url(../../../../static/img/jing.jpg) no-repeat 0.138888rem center;
	background-size: 0.541666rem 0.555555rem;
	text-indent: 2.5em;
}
.main{
	display: flex;
	justify-content: space-around;
}
.main .main-left{
	width: 2.5rem;
	overflow-y: scroll;
	height: 13.194444rem;
}
.main .main-left ul li{
	width: 2.5rem;
	height: 1.208333rem;
	line-height: 1.208333rem;
	border-bottom: 0.013888rem solid gainsboro;
	border-top: 0.013888rem solid gainsboro;
	text-align: center;
	font-size: 0.416666rem;
	font-weight: bold;
	background: #f4f4f8;
	position: relative;
}
.active:before{
	content: "";
	position: absolute;
	width: 10px;
	height: 100%;
	left: 0;top: 0;
	background: yellow;
}

.main .main-left ul li:first-of-type{
	border-top: none;
}
.main .mian-right{
	width: 7.5rem;
	margin-left: 0.277777rem;
	display: flex;
	flex-wrap: wrap;
	overflow-y: scroll;
	height: 13.194444rem;
}
.main .mian-right div{
	height: 2.152777rem;
	width: 2.402777rem;
}
.main .mian-right div img{
	height: 1.527777rem;
	width: 1.527777rem;
	margin: 0 auto;
}
.main .mian-right p{
	margin-top: 0.069444rem;
	text-align: center;
	font-size: 0.375rem;
	text-overflow: ellipsis;
	overflow: hidden;
	white-space: nowrap;
}
</style>