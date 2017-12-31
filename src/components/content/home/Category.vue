<template>
	<div>
		<div class="cate-top">
			<span id="l">全部分类</span>
			<a href="javascript:history.go(-1)"><</a>
		</div>
		<div class="search">
			<input type="text" placeholder="搜索商品">
		</div>
		<div class="category">
			<div>
				<ul class="category-left">
					<li v-for="(item,index) in lists" :key="index" @click="selectCategory(index)" :class="{'color-red':activeIndex==index}">{{item.name}}</li>
				</ul>
			</div>
			<div>
				<div class="category-right">
					<div v-for="(item,index) in (lists[num]&&lists[num].secondCateList)" :key="index">
						<img :src="'https://s2.juancdn.com'+item.icon">
						<span>{{item.name}}</span>
					</div>
				</div>
			</div>
		</div> 
	</div>
</template>

<script>
//导出使用组件
export default {
	data(){
		return {
			lists:[],
			num:0,
			activeIndex:0
		}
	},
	components:{
	    
	},
	methods: {
		
		selectCategory:function(index){
			//切换分类及对应的样式
			this.num=index;
			this.activeIndex=index;
		},
		getDate:function(){
			this.$http.get('./static/json/category.json')
			.then((res)=>{
				//axios方式请求数据
				this.lists = res.data;
			})
		}
	},
	created(){
		this.getDate();
	}
}
</script>

<style scoped>
.cate-top{
	height: 1.186666rem;
	border-bottom: 0.013333rem solid #ebebeb;
	text-align: center;
	line-height: 1.186666rem;
}
#l{
	font-size: 0.48rem;
}
.cate-top a{
	position: absolute;
	left: 0.133333rem;
	top: 0;
	width: 0.586666rem;
	height: 0.666666rem;
	text-align:center;
	font-size: 0.666666rem;
	font-family: 'iconfont';
}
.search{
	height: 0.813333rem;
	margin: 0.133333rem;
    border: 1px solid #bbb;
    border-radius: 5px;
    background-color: #fff;
    padding: 0.04rem 0;
    font-size: 0.173333rem;
    background-image: url(../../../../static/img/search1.png);
    background-repeat: no-repeat;
	background-size: 0.586666rem 0.586666rem;
	background-position: 5px center;
}
.search input{
	box-sizing: border-box;
	width: 8.24rem;
	height: 0.64rem;
	margin-left: 0.666666rem;
	border: none;
	outline-style: none;
	padding: 0;
	color: #999; 
	font-size: 0.32rem;
    background-color: transparent;
}
.category{
	font-size: 0;
}
.category>div:nth-of-type(1){
	width: 25%;
	font-size: 0.48rem;
	text-indent: 0.48rem;
	float: left;
}
.category>div:nth-of-type(2){
	width: 75%;
	font-size: 0.32rem;
	float: right;
}
.category-left li{
	height: 1.213333rem;
	line-height: 1.213333rem;
    border-bottom: 1px solid #ebebeb;
    cursor: pointer;
    background: #f9f9f9;
}
.color-red{
	color: #ff464e;
    border-left: 4px solid #ff464e;
    background-color: #fff;
}
.category-right{
	font-size: 0;
}
.category-right>div{
	box-sizing: border-box;
	padding: 0 10px;
	width: 33.33%;
	display: inline-block;
}
.category-right>div img{
	width: 100%;
}
.category-right>div span{
	font-size: 0.32rem;
	display: block;
	text-align: center;
	color: #333;
}
</style>