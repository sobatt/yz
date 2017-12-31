<template>
	<template>
<ul>
<template v-for='item in listdata'>
	
	<li v-if='item.endTime'>
		{{item.text}}  <counter :endtime='item.endTime'></counter>
	</li>
	<li v-else>
		{{item.text}}
	</li>
</template>
</ul>
</template>
<script>
import counter from './counter.vue';
export default {
	props: ['listdata'],
	components:{
		counter: counter
	}
}	
</script>

