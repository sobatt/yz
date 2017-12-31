<template>
	<footer class="footer">
			<router-link to="/home">
				<!--<img src="https://goods4.juancdn.com/bao/170411/6/8/58ecae97ad0a49a6408b45df_72x72.png" />-->
				<div class="imgs"></div>
				<p>今日上新</p>
			</router-link>
			<router-link to="/youxuan1">
				<!--<img src="https://goods3.juancdn.com/bao/170817/4/8/59950b0fa9fcf85453614c7f_72x72.png" />-->
				<div class="imgs"></div>
				<p>卷皮优选</p>
			</router-link>
			<router-link to="/global">
				<!--<img src="https://goods8.juancdn.com/bao/170411/e/0/58ecaeb1a43d1f5e550ebeb4_72x72.png" />-->
				<div class="imgs"></div>
				<p>全球购</p>
			</router-link>
			<router-link to="/cart1" >
				<!--<img src="https://goods2.juancdn.com/bao/170411/3/a/58ecaebaa43d1f6f166e6882_72x72.png" />-->
				<div class="imgs"></div>
				<p>购物车</p>
			</router-link>
			<router-link to="/mine">
				<!--<img src="https://goods5.juancdn.com/bao/170411/9/7/58ecaec4a43d1f5e7c6dc860_72x72.png" />-->
				<div class="imgs"></div>
				<p>我的卷皮</p>
			</router-link>
		</footer>
</template>

<script>
	export default {
		data () {
			return {
//				note : {
//					height: 0.64rem;
//					width: 0.64rem;
//					margin-left: .7rem;
//					background: "url(" + require("../../static/img/foot.png" + ");
//					background-size:500%;
//				}
			}
		}
	}
</script>

<style scoped>
	.router-link-active p{
		color: #FF464E;
	}
	.router-link-active div{
		background-position-y: .7rem;
	}
	.imgs{
		height: 0.64rem;
		width: 0.64rem;
		margin-left: .7rem;
		background: url(../../static/img/foot.png);
		background-size:500%;
	}
	a:nth-of-type(2) div{
		background-position-x: -.65rem;
		
	}
	a:nth-of-type(3) div{
		background-position-x: -1.3rem;
		
	}
	a:nth-of-type(4) div{
		background-position-x: -1.93rem;
		
	}
	a:nth-of-type(5) div{
		background-position-x: -2.55rem;
		
	}
	.footer {
			display: flex;
			justify-content: space-around;
			position: fixed;
			bottom: 0;
			left: 0;
			right: 0;
			height: 1.666666rem;
			align-items: center;
			width: 100%;
			background: #fff;
			border-top: 1px solid silver;
		}
		.footer a {
			text-align: center;
			font-size: 0.32rem;
			color:#333 ;
			width: 25%;
		}
</style>