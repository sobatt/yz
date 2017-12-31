<template>
<div>
<div class="w_nav">
		<router-link to="/home">上新</router-link>
		<router-link to="/nvzhuang_wang">女装</router-link>
		<router-link to="/nvzhuang_wang">鞋包</router-link>
		<router-link to="/nvzhuang_wang">母婴</router-link>
		<router-link to="/nvzhuang_wang">数码</router-link>
		<router-link to="/nvzhuang_wang">居家</router-link>
		<router-link to="/nvzhuang_wang">男士</router-link>
		<router-link to="/nvzhuang_wang">美妆</router-link>
		<router-link to="/nvzhuang_wang">美食</router-link>
		<router-link to="/nvzhuang_wang">精品配饰</router-link>
</div>
</div>
</template>
<style scoped>
.w_nav{
	height:1.0133rem;
	/*width: 100%;*/
	font-size: 0.3733rem; 
	white-space:nowrap;
    overflow-x: auto;
    background: #fff; 
}
::-webkit-scrollbar{height:4px;}
::-webkit-scrollbar-track{background-color:#fff;}
::-webkit-scrollbar-thumb{background-color:#ddd;} 
::-moz-scrollbar{height:4px;}
::-moz-scrollbar-track{background-color:#fff;}
::-moz-scrollbar-thumb{background-color:#ddd;} 
::-ms-scrollbar{height:4px;}
::-ms-scrollbar-track{background-color:#fff;}
::-ms-scrollbar-thumb{background-color:#ddd;} 
.w_nav a{
	display:inline-block;
	height:1.0133rem;
	line-height:1.0133rem; 
	width:1.0129rem; 
	padding: 0 0.21333rem;
    /*margin: 0.29867rem;*/
    
}
.w_nav a:hover{
	color: #FF464E;
    border-bottom: 4px solid #ff464e;
}

</style>

<script>
	export default {
		data () {
			return {
				flag :false
			}
			
		}
	}
</script>