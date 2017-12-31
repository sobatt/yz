<template>
<div>
	<swiper :options='swiperOption' ref="mySwiper">	
		<swiper-slide v-for="(item,index) in goods" :key="index"><img :src="item.pic"></swiper-slide> 
		<div class="swiper-pagination"  slot="pagination"></div>
	</swiper>
</div>
	</template>
<style>
	  @import "../../assets/swiper-3.4.2.min.css"; 
	  .swiper-slide img{
		 width:100%; 
	}
</style>

<script>
import {swiper,swiperSlide} from 'vue-awesome-swiper';
 export default({
	    components: {
	    	swiper,
	    	swiperSlide
	    	},
    	data () {
    		return {
    			goods:[],
    			swiperOption :{
    				notNextTick:true,
    				loop: true,
					autoplay: 1000,
			  		pagination:'.swiper-pagination'
    			}
    		
    		}
    		
    	},
    	methods:{
    		request(){
    			this.$http.get(
    			"./static/data/home_banner.json"
    		).then(function(res){
    			this.goods=res.body.banner_ads;
//  			console.log(this.goods)
    		})
    	}
    	},
    	mounted(){
    		this.request();
    	}
    })	
</script>
	
 