<template>
<div class="app">
			<div class="top">
				<div class="top-1">
					<router-link to='/youxuan1'>
						<div class="top-min">同城</div>
					</router-link>

				</div>
				<div class="top-1"><div class="top-min" id="top-min1">生活态</div></div>
			</div>
			<div class="top-nav">
				<router-link to='/youxuan2'>
					<div class="nav-item" ><span class="nav-1">全部</span></div>
				</router-link>		
				<router-link to='/live1'>
						<div class="nav-item" id="nav-item"><span class="nav-2">精选</span></div>
					</router-link>
				<router-link to='/live2'>	
					<div class="nav-item"><span class="nav-3">妙招</span></div>
				</router-link>
				
			
			</div>
			<!---->
			<div class="lazy" v-for='i in vlive1'>
				<img :src="i.image"/>
			</div>
			
</div>			
</template>

<script>
		export default{
			data(){
				return {
					vlive: [],
					vlive1: []
					}
				},
				methods: {
					request(){
						this.$http.get(
							'./static/data/live1.json'
						)
						.then(function(res){
							this.vlive1=res.data.data.ad_list;
							});
						}
					},
				mounted(){
					this.request();
					}
			}		

</script>

<style scoped>
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
}
.top-min:hover{
	border-bottom: 0.03125rem solid red;
}
#top-min1{
	border-bottom: 0.015625rem solid red;
}
.top-nav{
	height: 1.03125rem;
	background:  RGB(244,244,248);
	box-shadow: 0.046875rem 0.046875rem 0.046875rem lightgray;
	display: flex;
	flex: start;
	line-height: 1.03125rem;
}
/**/
.nav-item{
	/*width: 2.0625rem;*/
	height: 0.63125rem;
	line-height: 0.63125rem;
	margin-left: 0.46875rem;
	text-align: center;
	border: 0.015625rem solid gray;
	border-radius: 0.1875rem;
	margin-top: 0.22625rem;
	font-size: 0.34375rem;
	color: grey;
}

#nav-item{
	color: red;
	border: 0.015625rem solid red;
}
/*.top-nav span{
	
	height: 0.5625rem;
	text-align: center;
	margin-left: 0.46875rem;
	border: 0.015625rem solid darkgrey;
	font-size: 0.328125rem;
}*/
.nav-item:nth-of-type(1){
	width: 1.09375rem;
	/*height: 1.03125rem;*/
}
.nav-item:nth-of-type(2){
	width:1.934375rem;
	/*height: 1.03125rem;*/
}
.nav-item:nth-of-type(3){
	width:1.40625rem;
	/*height: 1.03125rem;*/
}
/**/
.lazy{
	margin-top: 0.15625rem;
	height: 7.698125rem;
	background: RGB(242,242,242);
	/*background: black;*/
}
.lazy img{
	width: 100%;
}

</style>

