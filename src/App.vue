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
import UserLogin from "./pages/user/Login.vue";
import SupporterLogin from './pages/supporter/Login.vue'
import AdminLogin from './pages/admin/Login.vue'
import Admin from './pages/admin/Admin'
import Supporter from './pages/supporter/Supporter'
import User from './pages/user/User.vue'
import {mapState, mapActions, mapMutations} from 'vuex'
export default {
  name: "App",
  components: {
    UserLogin,
    SupporterLogin,
    AdminLogin,
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
      console.log(to)
      document.title = to.name || 'Some Default Title';
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
