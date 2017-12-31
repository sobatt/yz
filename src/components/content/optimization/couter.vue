

<template>
	<div class="banner-time">
		<div class="banner-time1"><p>今日优先折扣</p></div>
		<div class="banner-time2">
			<span class="a">23</span>:<span class="b">
				23</span>:<span class="c">12</span>:<span class="d">3</span></div>
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
				vtime: [],
			}
		},
//		props: ['endtime'],
		methods: {
			request(){
					this.$http.get(		
						'./static/data/shuju.json'
					).then(function(res){
//						console.log(res.data.data.block[0].multi_block[4].data.end_time);
						this.vtime = res.data.data.block[0].multi_block[4].data.end_time;
						})
					},
					formate(vtime){
					let hour = parseInt(vtime/1000/3600);
					let min = parseInt((vtime/1000 - hour * 3600)/60);
					let sec = parseInt(vtime/1000 - hour * 3600 - min * 60)
					return hour + '小时' + min + '分钟' + sec + '秒';
							}
					},
					computed:{
					'time': function(){
						return this.formate(new Date(this.endtime).getTime() - this.now);
//						console.log(time)
						}	
					},
				ready(){
					let self = this;
//					console.log(this)
					setInterval(function(){
					self.now = new Date().getTime();
					}, 1000);
				},
				mounted(){
					this.request();
				}
	}
</script>

<!--<script>
export default{
	data(){
		return {
			time: '',
			now: 0
		};
	},
	props: ['endtime'],
	methods:{
		
		
		formate(time){
			let hour = parseInt(time/1000/3600);
			let min = parseInt((time/1000 - hour * 3600)/60);
			let sec = parseInt(time/1000 - hour * 3600 - min * 60)
			return hour + '小时' + min + '分钟' + sec + '秒';
		}
	},
	computed:{
		'time': function(){
			return this.formate(new Date(this.endtime).getTime() - this.now);
		}	},
	ready(){
		let self = this;
		setInterval(function(){
			self.now = new Date().getTime();
		}, 1000);
	}
}
</script>-->
<style>
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
	/*width: 0.5rem;*/
	height: 0.5rem;
	line-height:  0.5rem;
	text-align: center;
	background: black;
	color: white;
	border-radius: 0.078125rem;
}
.banner-time span:nth-of-type(4){
	background: red;
}.orange{
	color: orange;
}
</style>