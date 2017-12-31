<template>
	<div>
		<router-view></router-view>
	<header>
		<p>全球购</p>
		<router-link to='search'>
			<img src="../../../../static/img/1.jpg"/>
		</router-link>
	</header>
	<div class="clearFix"></div>
	<!---->
		<nav>
			<div>
				<router-link to='muyin'>
					<img src="https://goods6.juancdn.com/bao/170117/a/f/587d80c9db01d9ba3e8b4602_200x220.png?imageMogr2/quality/85!/format/png"/>
				</router-link>
				
			</div>
			<div>
				<router-link to='meizhuang'>
					<img src="https://goods1.juancdn.com/bao/170117/0/c/587d80cddb01d9c73e8b45f0_200x220.png?iopcmd=convert&Q=85&dst=webp"/>
				</router-link>
			</div>
			<div>
				<router-link to='meisi'>
					<img src="https://goods5.juancdn.com/bao/170117/8/0/587d80d2db01d96a468b4615_200x220.png?iopcmd=convert&Q=85&dst=webp"/>
				</router-link>
			</div>
			<div>
				<router-link to='dapai'>
					<img src="https://goods6.juancdn.com/bao/170117/b/5/587d80d7db01d9613d8b4602_200x220.png?imageMogr2/quality/85!/format/png"/>
				</router-link>
			</div>
		
		</nav>
	<!---->
		<div class="main"  >
		<div class="mains" v-for='(item,index) in goods' v-if='index<1'>
			<div class="main-img">
				<img :src="item.banner"/>
			</div>
			<div class="main-1">
				<figure v-for='(items,index) in item.data'>
					<img :src="items.img"/>
					<figcaption>
						<p><span>{{items.price}}</span><span>{{items.market_price}}</span></p>
						<p>{{items.name}}</p>
					</figcaption>
				</figure>
				<!--<figure>
					<img src="../img/img6.jpg"/>
					<figcaption>
						<p><span>￥39</span><span>￥209</span></p>
						<p>尤妮佳柔软亲肤卸妆棉</p>
					</figcaption>
				</figure>-->
			</div>
			<div class="blank"></div>
		</div>
		<div class="mains" v-for='(item,index) in goods' v-if='index>0&&index<2'>
			<div class="main-img">
				<img :src="item.banner"/>
			</div>
			<div class="main-1">
				<figure v-for='(items,index) in item.data'>
					<img :src="items.img"/>
					<figcaption>
						<p><span>{{items.price}}</span><span>{{items.market_price}}</span></p>
						<p>{{items.name}}</p>
					</figcaption>
				</figure>
				<!--<figure>
					<img src="../img/img6.jpg"/>
					<figcaption>
						<p><span>￥39</span><span>￥209</span></p>
						<p>尤妮佳柔软亲肤卸妆棉</p>
					</figcaption>
				</figure>-->
			</div>
			<div class="blank"></div>
		</div>
		
		<div class="mains" v-for='(item,index) in goods' v-if='index>1&&index<3'>
			<div class="main-img">
				<img :src="item.banner"/>
			</div>
			<div class="main-1">
				<figure v-for='(items,index) in item.data'>
					<img :src="items.img"/>
					<figcaption>
						<p><span>{{items.price}}</span><span>{{items.market_price}}</span></p>
						<p>{{items.name}}</p>
					</figcaption>
				</figure>
				<!--<figure>
					<img src="../img/img6.jpg"/>
					<figcaption>
						<p><span>￥39</span><span>￥209</span></p>
						<p>尤妮佳柔软亲肤卸妆棉</p>
					</figcaption>
				</figure>-->
			</div>
			<div class="blank"></div>
		</div>
		
		
			
		</div>		
</div>
</template>

<script>
export default{
	
	data(){
		return{
			goods:[]
		}
	},
	methods : {
		request () {
			this.$http.get(
				'./static/data/global.json'
			).then(function(res){
//				console.log(11);
				this.goods = res.data.product;
				console.log(this.goods);
			})
		}
	},
	mounted(){
		this.request();
	}
	
	
	
}



</script>

<style scoped >

body{
	overflow: hidden;
}
header{
	height: 1.222222rem;
	width: 100%;
}
header p{
	float: left;
	font-size: 0.458333rem;
	font-weight: bold;
	color: #2a2a2a;
	padding:0.347222rem 0 0.347222rem  4.555555rem;
}
header img{
	float: right;
	height: 0.666666rem;
	width: 0.666666rem;
	margin: 0.347222rem 0.347222rem 0.347222rem  0;
}
nav{
	height: 2.875rem;
	/*width: 10rem;*/
	width: 100%;
	display: flex;
	justify-content: space-around;
}
nav img{
	width: 2.474166rem;
	height: 2.875rem;
	/*width: 100%;*/
}
.main .main-img img{
	/*height: 5.083333rem;
	width: 10.583333rem;*/
	width: 100%;
	/*margin-bottom: 0.138888rem;*/
	display: block;
}
.main .main-1{
	height: 5rem;
	display: flex;
	/*justify-content: space-around;*/
	overflow-x: scroll;
	margin-bottom: 0.138888rem;
	
}
.main .main-1 figure{
	height: 4.305555rem;
	width: 2.5rem;
	/*float: left;*/
	margin-left: 0.138888rem;
}
.main .main-1 figure img{
	height: 2.5rem;
	width: 2.5rem;
	margin-bottom: 0.138888rem;
}
.main .main-1 figure figcaption {
	width: 2.5rem;
	text-align: center;
	
}

.main .main-1 figure figcaption p{
	width: 2.5rem;
	line-height: 0.555555rem;
	color: #666666;
}
.main .main-1 figure figcaption p:first-of-type span:first-of-type{
	color: blue;
	margin-right: 0.041666rem;
}
.main .main-1 figure figcaption p:first-of-type span:last-of-type{
	text-decoration: line-through;
	color: gainsboro;
}
.blank{
	height: 0.138888rem;
	background: #F4F3F8;
}
</style>