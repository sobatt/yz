<template>
<div class="L_userCenter">
			<!-- 头 -->
			<div class="L_bg" :style="L_bg">
			<div class="L_center">
				<div id ="L_jian" @click='back'></div>
				<p>个人中心</p>
			</div>
			<div class="L_class">
				<router-link to="/register">注册</router-link>
				<i class="L_line"></i>
				<router-link to="/login">登录</router-link>			
			</div>
			</div>
			
			<!-- 中-->
			<div class="L_order">
				<a class="L_bew">
					<span>我的订单</span>
					<span id="L_jin">全部订单</span>
				</a>		
			</div>
			<ul class="L_list">
				<a><li><img src="../../../../static/img/dai.jpg"/><p>代付款</p></li></a>
				<a><li><img src="../../../../static/img/tuan.jpg"/><p>待成团</p></li></a>
				<a><li><img src="../../../../static/img/huo.jpg"/><p>代收货</p></li></a>
				<a><li><img src="../../../../static/img/tui.jpg"/><p>退款/售后</p></li></a>
			</ul>
			<div class="L_blodline"></div>
			<div class="L_order">
				<a class="L_bew">
					<span>我的收藏</span>
					<span id="L_jin"></span>
				</a>		
			</div>
			<div class="L_order">
				<a class="L_bew">
					<span>我的拼团</span>
					<span id="L_jin"></span>
				</a>		
			</div>
			<div class="L_order">
				<a class="L_bew">
					<span>VIP钻石卡</span>
					<span id="L_jin">钻石卡享9折【再送199元大礼包】</span>
				</a>		
			</div>
			<div class="L_order">
				<a class="L_bew">
					<span>我的免单券</span>
					<span id="L_jin">0张</span>
				</a>		
			</div>
			<div class="L_order">
				<a class="L_bew">
					<span>我的优惠券</span>
					<span id="L_jin"></span>
				</a>		
			</div>
			<div class="L_blodline"></div>
			<div class="L_order">
				<a class="L_bew">
					<span>客服中心</span>
					<span id="L_jin"></span>
				</a>		
			</div>
			<div class="L_order">
				<a class="L_bew">
					<span>关于卷皮</span>
					<span id="L_jin"></span>
				</a>		
			</div>
			<div class="L_blodline"></div>
			<ul class="L_bottom">
				<li>返回首页</li>
				<li>客户端</li>
				<li>电脑版</li>
			</ul>
		</div>
</template>

<script>
	
	export default {
		data (){
			return {
				L_bg : {
					height: "3.84rem",
					background: "url("+ require("../../../../static/img/user_center_bg.png") + ")",
					backgroundRepeat: "no-repeat",
				}
			}
		},
		methods : {
			back() {
				window.history.back()
			}
		}
	}
</script>

<style>
.L_userCenter{
	height:19.413333rem;
	width: 100%;
	margin-bottom: 0.4rem;
}
/*.L_bg{
	height: 3.84rem;
	background: url(/static/img/user_center_bg.png) no-repeat left center;
}*/
.L_center{
	height: 1.173333rem;
	width: 100%;	
}
#L_jian{
	position: relative;	
}
#L_jian:after, #L_jian:before {
  border: 0.32rem solid transparent;
  border-right: 0.32rem solid #fff;
  width: 0;
  height: 0;
  position: absolute;
  top: 0.266666rem;
  left: 0.373333rem;
  content: ''
}
#L_jian:after {
  border-right-color:#ff464e ;
  left: 0.44rem;
}
.L_center p{
	font-size: 0.48rem;
	color: #fff;
	height: 1.173333rem;
	line-height: 1.173333rem;
	text-align: center;
}
.L_class{
	height: 2.666666rem;
	width: 100%;
	display: flex;
	line-height: 2.666666rem;
	justify-content: space-around;
}
.L_class a{
	color: #FFFFFF;
	font-size: 0.48rem;
	width: 4.666666rem;
	text-align: center;
}
.L_line{
	height: 0.533333rem;
	width: 0.04rem;
	background: #fff;
	margin-top: 1rem;
}
.L_order{
	height: 1.28rem;
	line-height: 1.28rem;
	width: 9.2rem;
	margin: 0 auto;
	font-size: 0.373333rem;
	border-bottom: 0.013333rem solid #E0E0E0;
	color: #333;
}
.L_order span{
	font-size: 0.4rem;
}
#L_jin{
  position: relative;
  margin-right: 0.32rem;
  font-size: 0.373333rem;
}
#L_jin:after, #L_jin:before {
  border: 0.16rem solid transparent;
  border-left: 0.16rem solid #fff;
  width: 0;
  height: 0;
  position: absolute;
  top: 0.48rem;
  right: -35px;
  content: ''
}
#L_jin:before {
  border-left-color: #333;
  right: -39px;
}
.L_bew{
	display: flex;
	justify-content: space-between;
}
.L_list{
	display: flex;
	justify-content: space-around;
	width: 100%;
	text-align: center;
	padding: 0.4rem 0;
}
.L_list img{
	height: 0.746666rem;
	width: 0.746666rem;
}
.L_blodline{
	background: #E0E0E0;
	height: 0.3rem;
	width: 100%;
}
.L_bottom{
	display: flex;
	justify-content: space-around;
	height: 1.093333rem;
	line-height: 1.093333rem;
}
</style>