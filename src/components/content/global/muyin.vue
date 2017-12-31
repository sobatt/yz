<template>
	<div>
		<header>
			<div class="hLeft">
				<router-link to='global'>
					<img src="../../../../static/img/jian.jpg">
				</router-link >
				
			</div>
			<div class="hCenter">
				<p>进口母婴</p>
			</div>
			<div class="hRight">
				<img src="../../../../static/img/jing.jpg" id="img1"/>
				<img src="../../../../static/img/dian.jpg" id="img2" @click="showFn"/>
			</div>
		</header>
		<div class="clearFix"></div>
		<nav>
			<ul>
				<li>推荐</li>
				<li>价格
					<span>
						<img src="../../../../static/img/shang.jpg"/>
						<img src="../../../../static/img/xia.jpg"/>
					</span>
				</li>
				<li>销量</li>
				<li>上新</li>
				<li>筛选</li>
			</ul>
		</nav>
		<div class="clearFix"></div>
		
		<div class="main">
			
			<div v-for='(item,index) in baby'>
				<router-link to="/'xiangqing'/+'item.goods_id'">
				<img :src="item.pic_url"/>
				<p><span>￥{{item.cprice}}</span><span>￥{{item.oprice}}</span></p>
				<p> {{item.title}}</p>
				</router-link>
			</div>
			
			<!--<div>
				<img src="../../../../static/img1/img2.jpg"/>
				<p><span>￥77.4</span><span>￥220</span></p>
				<p> 小恐龙钙片VD咀嚼片</p>
			</div>
			<div>
				<img src="../../../../static/img1/img2.jpg"/>
				<p><span>￥77.4</span><span>￥220</span></p>
				<p> 小恐龙钙片VD咀嚼片</p>
			</div>
			<div>
				<img src="../../../../static/img1/img2.jpg"/>
				<p><span>￥77.4</span><span>￥220</span></p>
				<p> 小恐龙钙片VD咀嚼片</p>
			</div><div>
				<img src="../../../../static/img1/img2.jpg"/>
				<p><span>￥77.4</span><span>￥220</span></p>
				<p> 小恐龙钙片VD咀嚼片</p>
			</div>
			<div>
				<img src="../../../../static/img1/img2.jpg"/>
				<p><span>￥77.4</span><span>￥220</span></p>
				<p> 小恐龙钙片VD咀嚼片</p>
			</div>-->
		</div>
		<div id="yuan">
			<img src="../../../../static/img/img4.jpg"/>
		</div>
	</div>
</template>
<script type="text/javascript">
	export default{
		data(){
			return{
				baby:[],
			}
		},
		methods:{
			request(){
						this.$http.get('./static/data/global-baby.json'
						).then(function(res){
							
							
							this.baby=res.data.list;
						console.log(res.data.list);
						console.log(res.data.list[0].goods_id)
						})
//						this.$http.get('/api/cate/subcatelist?cate_id=399&pf=8&area=1&bi=222'
//						).then(function(res){
//							
//							
//							
//						console.log(res);
//						})
				
			},
			showFn(){
				// 调用仓库中mutation的方法
				this.$store.commit('changeState');
			},
			
			
			
			
			
			
			
		},
		mounted(){
			this.request();
		}
	}
</script>

<style scoped>
header{
	height: 1.222222rem;
	width: 10rem;
}
header .hLeft{
	float: left;
}
header .hLeft img{
	width: 0.291666rem;
	height:0.513888rem;
	margin: 0.388888rem 0 0.388888rem 0.486111rem;
}
header .hCenter{
	float: left;
}
header .hCenter p{
	font-size: 0.5rem;
	line-height: 1.222222rem;
	font-weight: bold;
	margin-left: 3.263888rem;
}
header .hRight{
	width: 2.083333rem;
	float: right;
	display: flex;
	justify-content: space-around;
}
header .hRight #img1{
	width: 0.566666rem;
	height: 0.566666rem;
	margin: 0.3rem 0 0.3rem 0;
}
header .hRight #img2{
	width: 0.625rem;
	height: 0.263888rem;
	margin: 0.388888rem 0 0.388888rem 0;
}
nav{
	height: 1.111111rem;
	line-height: 1.111111rem;
	border-bottom:0.041666rem solid #F4F3F8;
	border-top: 0.041666rem solid #F4F3F8;
}
nav ul li{
	float: left;
	width: 2rem;
	text-align: center;
}

nav ul li:last-of-type{
	background: url(../../../../static/img/img1.jpg) no-repeat 1.527777rem center;
	
}

nav ul li:nth-of-type(2){
	position: relative;
}
nav ul li:nth-of-type(2) span{
	position: absolute;
	top: 0.416666rem;
	left: 1.527777rem;
	right: 0;
}
nav ul li:nth-of-type(2) span img{
	height: 0.180555rem;
	width: 0.180555rem;
}
.main{
	display: flex;
	flex-wrap: wrap;
}
.main div{
	height: 5.9rem;
	width: 4.972222rem;
	border-bottom: 0.027777rem solid #ebebeb;
	border-right: 0.027777rem solid #ebebeb;
}
.main div:nth-of-type(even){
	border-right: none;
}
.main div img{
	height: 4.861111rem;
	width: 4.861111rem;
}
.main div p:first-of-type span:first-of-type{
	color: blue;
	font-size: 0.416666rem;
	margin-right: 0.069444rem;
}
.main div p:first-of-type span:last-of-type{
	color: ghostwhite;
	font-size: 0.25rem;
	text-decoration: line-through;
	
}
.main div p:last-of-type{
	color: #868686;
	font-size: 0.319444rem;
	margin-top: 0.069444rem;
}
.main div p{
	margin-left: 0.138888rem;
}
#yuan{
	height: 1.138888rem;
	width: 1.138888rem;
	border-radius: 50%;
	border: 0.013888rem solid red;
	background: white;
	position: fixed;
	bottom: 0.208333rem;
	right: 0.208333rem;
}
#yuan img{
	height: 0.666666rem;
	width: 0.666666rem;
	margin: 0.277777rem auto;
	
}
</style>