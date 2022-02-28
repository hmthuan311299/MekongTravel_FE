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
import LoginSupporter from './pages/supporter/LoginSupporter'
import LoginAdmin from './pages/admin/LoginAdmin.vue'
import Admin from './pages/admin/Admin'
import Supporter from './pages/supporter/Supporter'
import CategoryMember from './pages/admin/CategoryMember'
export default {
  name: "App",
  components: {
    LoginUser,
	  LoginSupporter,
    LoginAdmin,
    Admin,
    Supporter,
    CategoryMember
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
