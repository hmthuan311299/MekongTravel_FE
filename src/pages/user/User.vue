<template>
<b-container fluid>
    <b-navbar toggleable="lg" type="dark" variant="info">
		<router-link tag="b-navbar-brand" :to="{name:'userIndex'}">
			<img src="../../assets/user-img/logo.png" class="user-navbar-logoIndex" alt="">
		</router-link>
		<b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
		<b-collapse id="nav-collapse" is-nav>
			<!-- Right aligned nav items -->
			<b-navbar-nav class="ml-auto user-navbar-right">
				<b-nav-item @click="handleCheckLoginRecommended">Đề xuất mới</b-nav-item>
				<b-nav-item v-if="isMemberLogin">Địa điểm quan tâm</b-nav-item>
				<b-nav-item-dropdown right v-if="isMemberLogin">
					<template #button-content >
						<img src="../../assets/user-img/user.png" class="user-navbar-avatar" alt="">
					</template>				
					<!-- <b-dropdown-item >Thông tin cá nhân</b-dropdown-item> -->
					<router-link tag="b-dropdown-item" to="/member/1/information">Thông tin cá nhân</router-link>
					<router-link tag="b-dropdown-item" to="/member/1/changePass">Đổi mật khẩu</router-link>
					<b-dropdown-item @click="handleLogout">Đăng xuất</b-dropdown-item>
				</b-nav-item-dropdown>
				<router-link tag="b-nav-item" to="/login" v-else>Đăng nhập</router-link>
			</b-navbar-nav>
		</b-collapse>
  	</b-navbar>
	<router-view></router-view>
	<FromYesNo :isDisplayYesNoForm="isDisplayYesNoForm" v-on:handleConfirm="handleConfirm"/>
</b-container>
</template>

<script>
import FromYesNo from '../../components/FormYesNo.vue'
import UserIndex from './UserIndex.vue'
import CategoryTAByProvince from'./CategoryTAByProvince.vue'
import DetailToutistAtraction from './DetailToutistAtraction.vue'
import { mapMutations, mapGetters, mapActions, mapState} from 'vuex'
export default {
    name: 'user',
	data(){
		return{
			isDisplayYesNoForm:{
				display: false,
				titleForm: 'Form xác nhận',
				answer: ''
			},
		}
	},
	components:{
		UserIndex, DetailToutistAtraction, CategoryTAByProvince, FromYesNo
	},
	computed:{
		...mapGetters(['isMemberLogin']),
	},
	methods:{
		...mapMutations(['set_litsTouristAttraction','set_LogoutUser', 'setPageLoading', 'set_YesNoForm', 'set_YesNo']),
		handleLogout(){
			this.set_LogoutUser();
			this.setPageLoading(true)
			setTimeout(()=>{
				this.setPageLoading(false)
			}, 1000);
		},
		handleCheckLoginRecommended(){
			if(this.isMemberLogin){
				this.$router.push('/userRecommendedTA')
			}else{
				this.isDisplayYesNoForm.display = true;
				this.isDisplayYesNoForm.titleForm= "Hãy đăng nhập để thực hiện chức năng này";
			}
		},
		handleConfirm(value){
			if(value == 'yes'){
				this.handleResetYesNoForm;
				this.$router.push('/login')
			}
			else{
				this.isDisplayYesNoForm.display = false;
				this.isDisplayYesNoForm.titleForm= "";
				this.answer=""
			}
		}
	},
	
	
	
}
</script>

<style>
.user-navbar-logoIndex{
	height: var(--user-navbar-logoIndex-1444);
	border-radius: 20px;
	border: 2px solid rgb(248, 86, 22);

}
.user-navbar-logoIndex:hover{
	background: rgb(248, 86, 22);
	transition: 0.3s ease;
}
</style>