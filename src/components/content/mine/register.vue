<template>
<div>
		<div class="L_regis">
			<router-link to="/mine"><img src="../../../../static/img/arrow_black.png" /></router-link>
			<span>注册</span>
			<span></span>
		</div>
		<div class="L_kk">
			<p class="L_size">请确保你的手机畅通，用于接收验证码短信</p>
			<p class="L_phone1"> <input placeholder="请输入手机号码"/></p>
			<div class="L_phone2">
				<p ><input placeholder="请输入验证码" />
				<span>获取验证码</span></p>
			</div>
			<a class="L_kk_a" >下一步</a>
		</div>
</div>
</template>

<script>
</script>

<style scoped>
.L_regis{
	height: 1.173333rem;
	width: 100%;
	line-height: 1.173333rem;
	display: flex;
	justify-content: space-around;
}
.L_regis img{
	height: 0.666666rem;
	width: 0.666666rem;
	vertical-align: middle;
}
.L_regis span{
	font-size: 0.48rem;
	width: 4.4rem;
	text-align: right;
}
.L_kk{
	width:9.36rem;
	margin: 0 auto;
	color: #a0a0a0;
}
.L_size {
	text-align: center;
	padding: 0.8rem 0;
}
.L_phone1, .L_phone2{
	height:1.28rem ;
	line-height: 1.28rem;
	border-bottom: 0.013333rem solid #E0E0E0;
}
.L_phone1 input {
	height: 1.226666rem;
	border: none;
	outline: none;
	font-size: 0.4rem;
}
.L_phone2 input {
	height: 1.226666rem;
	border: none;
	outline: none;
	font-size: 0.4rem;
}
.L_phone2 p{
	display: flex;
	justify-content: space-between;
	line-height: 1.28rem;
}
.L_phone2 span{
	font-size: 0.373333rem;
}
.L_kk_a{
	height: 1.28rem;
	line-height: 1.28rem;
	width: 9.36rem;
	background: #C0C0C0;
	font-size: 0.48rem;
	color: #FFFFFF;
	display: block;
	text-align: center;
	margin-top: 0.533333rem;
}

</style>