<template>
  <v-app>
		<div id="app">
			<router-view></router-view>
			<!-- <compLoginUser/> -->
		</div>
    <Loading/>
  </v-app>
</template>

<script>
import LoadingSuccessError from "./components/LoadingSuccessError.vue"
import Loading from "./components/Loading.vue"
import LoginUser from "./pages/user/LoginUser.vue";
import LoginSupporter from './pages/supporter/LoginSupporter'
import LoginAdmin from './pages/admin/LoginAdmin.vue'
import Admin from './pages/admin/Admin'
import Supporter from './pages/supporter/Supporter'
import User from './pages/user/User.vue'
export default {
  name: "App",
  components: {
    LoginUser,
	  LoginSupporter,
    LoginAdmin,
    Admin,
    Supporter,
    User,
    LoadingSuccessError,
    Loading
  },
  data: () => ({
    //
  }),
  methods:{
    
  },
  
};
</script>
<style>
#app {
  min-height: 100vh;
}
</style>
