<template>
	<div>
		
		<div class="bg" @click="showFn" v-show="show"></div>
		<transition name="slide">
		<div class="cover" v-show="show">
		<!--<ul>
			<li>
				菜单列表111
			</li>
			<li>
				菜单列表111
			</li>
			<li>
				菜单列表111
			</li>
			<li>
				菜单列表111
			</li>
			<li>
				菜单列表111
			</li>
			<li>
				菜单列表111
			</li>
			<li>
				菜单列表111
			</li>
			<li>
				菜单列表111
			</li>
			<li>
				菜单列表111
			</li>
		</ul>-->
		<div id="kong"></div>
		<div class="pricess">
			<p>价格区间（元）</p>
			<input type="text" placeholder="最低价" id="inp1"/>
			<span>-</span>
			<input type="text" placeholder="最高价" id="inp2"/>
		</div>
		
		<div class="fenl">
			<p>分类</p>
		</div>
		<div id="butt" @click="showFn" v-show="show">
			<p>确定</p>
		</div>
		
		
		
	</div>
	</transition>
</div>

	
</template>

<script>
	export default {
		data(){
			return {
				flag:true,
			}
		},
		methods: {
			showFn(){
				this.$store.commit('changeState');
			}
		},
		computed: {
			// 计算属性
			show(){
				// 当前组件访问仓库(vuex)当中的状态
				return this.$store.state.coverState;
			}
		}
	}
</script>

<style scoped>
	
	.cover{
		position: absolute;
		top: 0;
		left: 20%;
		bottom: 0;
		background: #fff;
		right: 0;
	}
	.bg{
		position: absolute;
		top: 0;
		left: 0;
		bottom: 0;
		right: 0;
		background: rgba(0,0,0,0.1);
	}

	.slide-leave-active,.slide-enter-active{
	  transition: transform 0.3s ease;
	}

	.slide-leave-to,.slide-enter{
	  transform: translate3d(100%,0,0);
	}
	.cover #kong{
		height: 0.694444rem;
		background: white;
	}
	.cover .pricess{
		/*height: 0.694444rem;*/
		margin-left: 0.277777rem;
	}
	.cover .pricess p{
		font-size: 0.347222rem;
		margin-bottom: 0.208333rem;
	}
	.cover #inp1{
		font-size: 0.277777rem;
		height: 0.625rem;
		width: 3.388888rem;
		outline: none;
		background:#f4f4f8;
		border: none;
		text-align: center;
	}
	.cover #inp2{
		font-size: 0.277777rem;
		height: 0.625rem;
		width: 3.388888rem;
		outline: none;
		background:#f4f4f8;
		border: none;
		text-align: center;
	}
	.cover .fenl{
		margin-left: 0.277777rem;
		margin-top: 0.694444rem;
		font-size: 0.347222rem;
	}
	#butt{
		height: 0.694444rem;
		line-height: 0.694444rem;
		width: 2.694444rem;
		background: red;
		font-size: 0.416666rem;
		text-align: center;
		color: white;
		position: fixed;
		bottom: 0.138888rem;
		right: 0.138888rem;
	}
</style>