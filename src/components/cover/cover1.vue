<template>
	
		<div class="bg" @click="showFn"  v-show="show">
			<router-link to='home'>
					<div>
						首页
					</div>
				</router-link >
			
			

		</div>
	
</template>

<script>
	export default {
		data(){
			return {
				
			}
		},
		methods: {
			showFn(){
				this.$store.commit('changeState1');
			}
		},
		computed: {
			// 计算属性
			show(){
				// 当前组件访问仓库(vuex)当中的状态
				return this.$store.state.coverState1;
			}
		}
	}
</script>

<style scoped>
	.bg{
		position: absolute;
		top: 0.894444rem;
		right: 0;
		height: 1.388888rem;
		width: 1.388888rem;
		background: rgba(50,200,100,0.1);
		font-size: 0.416666rem;
		text-align: center;
		line-height: 1.388888rem;
	}
</style>