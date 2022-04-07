<template>
  <v-app>
		<div id="app">
			<router-view></router-view>
			<!-- <compLoginUser/> -->
		</div>
    <Loading :isPageLoading="isPageLoading"/>
    <LoadingSuccessError :isLoadingSuccess="isLoadingSuccess" :isLoadingError="isLoadingError"/>
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
import {mapState, mapActions, mapMutations} from 'vuex'
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
    Loading,
  },
  data: () => ({
    //
  }),
  computed:{
    ...mapState({
      'isLoadingSuccess': state=> state.isLoadingSuccess,
      'isLoadingError': state=>state.isLoadingError,
      'isPageLoading': state=>state.isPageLoading,
      'isDisplayYesNoForm': state=>state.isDisplayYesNoForm
    })
  },
  methods:{
    ...mapMutations(['setPageLoading']),
    ...mapActions(['getKeepLoginUser', 'getKeepLoginSupporter'])
  },
  created(){
    this.getKeepLoginUser()
    this.getKeepLoginSupporter()
  },
  watch:{
		$route(to, from){
      var pageNoteLoading = ['userLogin', 'supporterLogin', 'adminLogin','userChangePassword']
      if(pageNoteLoading.indexOf(to.name) == -1){
        this.setPageLoading(true)
        setTimeout(()=>{
          this.setPageLoading(false)
        }, 500);
      }
		}
	}
}
</script>
<style>
#app {
  min-height: 100vh;
}
.sticky{
    position: sticky;
    top: 0;
}
</style>
