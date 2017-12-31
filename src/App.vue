<template>
  <div id="app">
  	
  	<v-main></v-main>
   <v-footer v-show="$route.meta.navShow"></v-footer>
   	<v-cover></v-cover>
    <v-covers></v-covers>
  </div>
</template>

<script>

	
import vFooter from './components/footer';
import vMain from './components/content';
import vCover from './components/cover/cover';
import vCovers from './components/cover/cover1';

export default {
  name: 'app',
  components: {
    vFooter,
    vMain,
    vCover,
    vCovers
  }
}
</script>

<style>

.footer {
			display: flex;
			justify-content: space-around;
			position: fixed;
			bottom: 0;
			left: 0;
			right: 0;
			height: 125px;
			align-items: center;
			width: 100%;
			border-top: 1px solid silver;
		}
		.footer a {
			text-align: center;
			font-size: 24px;
		}
</style>
