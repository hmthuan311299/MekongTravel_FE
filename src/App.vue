<template>
  <v-app>
		<div id="app">
			<router-view></router-view>
			<!-- <compLoginUser/> -->
		</div>
  </v-app>
</template>

<script>
import LoginUser from "./pages/user/LoginUser.vue";
import LoginTechnician from './pages/technician/LoginTechnician'
import LoginAdmin from './pages/admin/LoginAdmin.vue'
import Admin from './pages/admin/Admin'
export default {
  name: "App",
  components: {
    LoginUser,
	  LoginTechnician,
    LoginAdmin,
    Admin
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
