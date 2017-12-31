<template>
<div>
	<div class="L_heder">
			<router-link to='/mine' class="L_back" > 
			<img src="../../../../static/img/arrow_white.png"></router-link>
			<span class="L_deng">登录</span>
			<router-link to="/register" class="L_design" >注册</router-link>
	</div>
		<div class="L_wap-login" >
			<ul class="L_ju-login" >
				<li>卷皮账号登录</li>
				<li>手机快捷登录</li>
			</ul><br>
			<form>
				<input type="text" placeholder="手机号/邮箱/用户名" />
			</form>
			<form>
				<input type="text" placeholder="密码" />
			</form>
			<a class="L_but">登 录</a>
			<div class="L_week">
				<p><span><img src="../../../../static/img/download.png" ></span> 两周内免登录</p>
				<a>忘记密码 ？</a>
			</div>
			<div class="L_use">
				<h4>第三方账号快速登录</h4>
				<div class="L_function">
				<img src="../../../../static/img/tencent.png" />
				<img src="../../../../static/img/taobao.png"/>
				<img src="../../../../static/img/sina.png" />
				</div>
				<div class="L_black">
					<p><span><img src="../../../../static/img/unexpress.png"></span> 全场包邮</p>
					<p><span><img src="../../../../static/img/search.png"></span> 100%人工质检</p>
					<p><span><img src="../../../../static/img/seven.png"></span> 7天放心退</p>
				</div>
			</div>
			
		</div>
</div>
</template>

<script>
</script>

<style scoped>
.L_heder{
	height: 1.173333rem;
	width: 100%;
	background: linear-gradient(150deg,#ff5a61 50%,#fd631c);
	display: flex;
	justify-content: space-around;
	color: #FFFFFF;
}
.L_back{
	height: 1.2rem;
	width: 1.2rem;
}
.L_back img{
	padding: 0.3125rem;
	height: 0.666666rem;
	width: 0.666666rem;
}
.L_deng {
	width: 7.0rem;
	height: 1.173333rem;
	line-height: 1.173333rem;
	text-align: center;
	font-size: 0.48rem;
}
.L_design {
	height: 1.173333rem;
	line-height: 1.173333rem;
	font-size: 0.346666rem;
}
.L_wap-login{
	width: 9.36rem;
	margin: 0 auto;
}
.L_ju-login{
	width: 9.36rem;
	height: 1.173333rem;
	display: flex;
	justify-content: space-around;
}
.L_ju-login li{
	font-size: 0.373333rem;
	
	text-align: center;
	width: 4.68rem;
	height: 1.173333rem;
	line-height: 1.173333rem;
}
.L_ju-login li:first-of-type{
	color:  #ff464e;
	border-bottom: 0.026666rem solid #FF464E;
	display: block;
	height: 1.173333rem;	
}
.L_wap-login form{
	height: 1.28rem;
	width: 9.36rem;
	align-items: center;
	border-bottom: 0.013333rem solid #e0e0e0;
}
.L_wap-login form input{
	height: 1.24rem;
	border: none;
	outline: none;
	font-size: 0.346666rem;
}
.L_but{
	width: 9.36rem;
	height: 1.28rem;
	display: block;
	background: #E0E0E0;
	text-align: center;
	line-height: 1.28rem;
	font-size: 0.48rem;
	color: #FFFFFF;
	margin-top: 0.666666rem;
}
.L_week {
	height: 0.986666rem;
	width: 9.36rem;
	display: flex;
	justify-content: space-between;
	font-size: 0.36rem;
	line-height: 0.986666rem;
	color: #C0C0C0;
}
.L_week span {
	height: 0.346666rem;
	width: 0.346666rem;
	background: #FF464E;
}
.L_week span img{
	height: 0.346666rem;
	width: 0.43rem;
	align-items: center;
}
.L_use{
	width: 9.36rem;
	height: 4.146666rem;
	margin-top: 0.666666rem;
}
.L_use h4{
	text-align: center;
	color: #C0C0C0;
	font-weight: normal;
}
.L_function {
	display: flex;
	justify-content: space-around;
	height: 2rem;
	width: 9.36rem;
	margin-top: 0.666666rem;
	margin-bottom: 0.666666rem;
}
.L_function img {
	width: 1.28rem;
	height: 1.28rem;
}
.L_black{
	height: 0.933333rem;
	width: 9.36rem;
	display: flex;
	justify-content: space-around;
	border-top: 0.013333rem solid #E0E0E0;
	line-height:0.933333rem ;
	color: #C0C0C0;
}
.L_black img{
	vertical-align: middle;
}

</style>