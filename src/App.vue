<template>
  <v-app>
		<div id="app">
			<router-view></router-view>
			<!-- <compLoginUser/> -->
		</div>
  </v-app>
</template>

<script>
import compLoginUser from "./pages/user/compLoginUser.vue";
import compLoginTech from './pages/technician/compLoginTech'
export default {
  name: "App",
  components: {
    compLoginUser,
	compLoginTech
  },

  data: () => ({
    //
  }),
};
</script>
<style>
#app {
  min-height: 100vh;
}
</style>
