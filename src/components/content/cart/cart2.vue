<template>
	<div>
<div class="L_cart2_hader">
			<a><span id="L_jian" @click="back"></span></a>
			购物车<span>编辑</span>
		</div>
		<div class="L_cart2_mian">
			<div class="L_cart2_dian">
				<div class="L_cart2_jian" >
					<img src="../../../../static/img/download.png">
					<img src="../../../../static/img/dian.jpg" />
					<span>美丽优选小店</span>
					<img src="../../../../static/img/arrow_right.ddbb0258.png" />
				</div>
				<div class="L_cart2_good">
					<p class="L_cart2_favourable">
						<span>满减</span>购满30元，可减5元
						<span>去凑单<img src="../../../../static/img/arrow_red.ea05ec5b.png"/></span>			
					</p>
					<div class="L_cart2_packages" v-for="item in carts">
						<span class="L_cart2_packspan1" ><img src="../../../../static/img/download.png" /></span>
						<figure><img :src="item.pic" /></figure>
						<div class="L_cart2_p">
							<p>{{ item.title }}</p>
							<p><span class="L_cart2_sp1">{{item.cp}}</span>{{item.op}}
								<span id="L_kaui1" @click="reduce(item)"> - </span>
								<span id="L_kuai2" :n="num">{{item.counts}}</span> 
								<span id="L_kuai3" @click="add(item)"> + </span> </p>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div class="L_cart2_footer">
			<p><span ><img src="../../../../static/img/download.png"/></span>全选</p>
			<div class="L_cart2_price">
				<p id="L_ll">合计<span>{{totalMoney}}元</span></p>
			</div>
			<p id="L_jie" @click="getDing">去结算</p>
		</div>
		</div>
</template>

<script>
	export default {
		data () {
			return {
				carts : this.$store.state.carts,
				num: 0
			}
		},
		methods : {
			add(item) {
				this.num++;
				this.$store.commit("addCart", item); 
				this.$store.commit("getCounts");
      			this.$store.commit("getMoney");
      			this.$store.commit("getCartsLength");
      			console.log(this.$store.state.dingstore)
			},
			reduce(item) {
				this.num++;
				this.$store.commit("reduce", item);
				this.$store.commit("getCounts");
      			this.$store.commit("getMoney");
      			this.$store.commit("getCartsLength");
			},
			
			//获取订单
			getDing() {
			     this.$store.commit("getDing")
			},
			//返回上层页面
			back () {
				window.history.back()
			}
		},
		computed: {
		    //商品总数
		    totalNum() {
		      return this.$store.state.totalNum;
		      console.log(cartData);
		    },
		    //商品总价
		    totalMoney() {
		      return this.$store.state.totalMoney;
		    },
		    //购物车是否为空
		    isEmpty() {
		      return this.$store.state.cartsLength;
		    }
		  },
		mounted () {
			console.log(this.$store.state.totalMoney)
		},
		updated () {
//			getData();
		}
	}
	
</script>

<style scoped>
	
.L_cart2_hader{
				height: 1.173333rem;
				line-height: 1.173333rem;
				text-align: right;
				width: 100%;
				font-size: 0.48rem;
			}
.L_cart2_hader span{
				margin: 0 0.266666rem 0 3.066666rem;
			}
.L_cart2_mian{
				height:15.333333rem ;
				background:#f4f4f8;
				width: 100%;
			}
#L_jian{
	position: relative;	
}
#L_jian:after, #L_jian:before {
  border: 0.32rem solid transparent;
  border-right: 0.32rem solid #666;
  width: 0;
  height: 0;
  position: absolute;
  top: 0.03rem;
  left: -300px;
  content: ''
}
#L_jian:after {
  border-right-color:#fff ;
  left: -296px;
}
.L_cart2_jian{
	height: 1.186666rem;
	line-height: 1.146666rem;
	background: #FFFFFF;
	border-top: 0.013333rem solid #C0C0C0;
	border-bottom: 0.013333rem solid #C0C0C0;
	display: flex;
	justify-content: flex-start;
	font-size: 0.4rem;
}
.L_cart2_jian img{
	height: 0.533333rem;
	width: 0.533333rem;
	margin: 0.266666rem;
}
.L_cart2_jian img:first-of-type{
	background: #ff464e;
	border-radius: 0.586666rem;
}

.L_cart2_favourable{
	height: 0.96rem;
	line-height: 0.96rem;
	background: #fff;
	text-indent: 1.2rem;
}
.L_cart2_favourable span:first-of-type{
	color: #ff464e;
	border: 0.013333rem solid #FF464E;
	margin-right: 0.16rem;
}
.L_cart2_favourable span:last-of-type{
	color: #ff464e;
	font-size: 0.346666rem;
	margin-left: 2.666666rem;
}
.L_cart2_favourable span:last-of-type img{
	vertical-align: middle;
}
.L_cart2_packages{
	background: #FFFFFF;
	display: flex;
	justify-content: flex-start;
}
.L_cart2_packspan1{
	height: 0.533333rem;
	width: 0.533333rem;
	background: #FF464E;
	border-radius: 0.266666rem;
	margin: 1.366666rem 0 0 0.266666rem;
}
.L_cart2_packages span img {
	height: 0.533333rem;
	width: 0.533333rem;
}
.L_cart2_packages figure img{
	height: 2.4rem;
	width: 2.4rem;
}
.L_cart2_p{
	margin-top: 0.266666rem;
	font-size: 0.373333rem;
	color: #666;
}
.L_cart2_p p:nth-of-type(2){
	color: #C0C0C0;
}
.L_cart2_p p:last-of-type{
	margin-top: 0.933333rem;
	font-size: 0.24rem;
}
.L_cart2_sp1{
	color:#FF5A61 ;
	font-size: 0.32rem;
}
#L_kaui1, #L_kuai3{
	height: 0.613333rem;
	width: 0.613333rem;
	background: #f0f0f0;
	display: inline-block;
	text-align: center;
	line-height: 0.613333rem;
	margin: 0 0.266666rem;
	font-size: 0.32rem;
}
#L_kaui1{
	margin-left: 1.333333rem;
}
#L_kuai2{
	font-size: 0.32rem;
}
#L_kuai3{
	color: #FF464E;
}
.L_cart2_footer{
	display: flex;
	justify-content: space-around;
	text-align: center;
	font-size: 0.48rem;
	color: #A0A0A0;
	/*position: absolute;
	z-index: 99;*/
}
.L_cart2_footer>p{
	height: 1.293333rem;
	line-height: 1.293333rem;
}
.L_cart2_footer img{
	height: 0.533333rem;
	width: 0.533333rem;
	background: #FF464E;
	border-radius: 0.266666rem;
	vertical-align: middle;
	margin: 0.4rem;
}
.L_cart2_price{
	height: 1.293333rem;
	width: 4.36rem;
	margin-top:0.266666rem ;
}
#L_ll{
	font-size: 0.373333rem;
	text-align: right;
}
#L_ll span{
	color: #FF464E;
}
#L_L{
	font-size:0.293333rem ;
	text-align: right;
}
#L_jie{
	height: 1.293333rem;
	width: 3rem;
	background: #ff464e;
	color: #fff;
}
</style>