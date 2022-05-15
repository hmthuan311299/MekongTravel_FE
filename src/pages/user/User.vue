<template>
<b-container fluid>
    <b-navbar toggleable="lg" type="dark" variant="info">
		<router-link tag="b-navbar-brand" :to="{name:'userIndex'}">
			<img :src="logo" class="user-navbar-logoIndex" alt="">
		</router-link>
		<b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
		<b-collapse id="nav-collapse" is-nav>
			<!-- Right aligned nav items -->
			<b-navbar-nav class="ml-auto user-navbar-right">
				<b-nav-item-dropdown text="Đề Xuất Mới" right>
					<b-dropdown-item @click="handleCheckLoginListRecommended">Đề xuất của tôi</b-dropdown-item>
					<b-dropdown-item @click="handleCheckLoginRecommended" >Tạo đề xuất mới</b-dropdown-item>
				</b-nav-item-dropdown>
				<router-link :to="{name: 'categorySaveTA'}" tag='b-nav-item' v-if="isMemberLogin">Địa điểm quan tâm</router-link>
				<b-nav-item-dropdown right v-if="isMemberLogin">
					<template #button-content v-if="!member.memberavatar" >
						<img :src="logoUser" class="user-navbar-avatar" alt="">
					</template>
					<template #button-content v-else>
						<img :src="`${port_file}${member.memberavatar}`" class="user-navbar-avatar" alt="">
					</template>				
					<!-- <b-dropdown-item >Thông tin cá nhân</b-dropdown-item> -->
					<router-link tag="b-dropdown-item" :to="{name: 'userInformation', params:{id:member.memberid}}">Thông tin cá nhân</router-link>
					<router-link tag="b-dropdown-item" :to="{name: 'userChangePassword'}">Đổi mật khẩu</router-link>
					<b-dropdown-item @click="handleLogout">Đăng xuất</b-dropdown-item>
				</b-nav-item-dropdown>
				<router-link tag="b-nav-item" to="/login" v-else>Đăng nhập</router-link>
			</b-navbar-nav>
		</b-collapse>
  	</b-navbar>
	<router-view></router-view>
	<FormYesNo :isDisplayYesNoForm="isDisplayYesNoForm" v-on:handleConfirm="handleConfirm"/>
</b-container>
</template>
<script>
import logo from "../../assets/user-img/logo.png"
import logoUser from '../../assets/user-img/user.png'
import port_file from '../../port_file'
import FormYesNo from '../../components/FormYesNo.vue'
import { mapMutations, mapGetters, mapState} from 'vuex'
export default {
    name: 'user',
	data(){
		return{
			isDisplayYesNoForm:{
				display: false,
				titleForm: 'Form xác nhận',
				answer: '',
			},
			port_file,
			logo,
			logoUser
		}
	},
	components:{
		FormYesNo, 
	},
	computed:{
		...mapGetters(['isMemberLogin']),
		...mapState({
			member: state=> state.member.currentMember
		})
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
				this.$router.push('/member/recommended')
			}else{
				this.isDisplayYesNoForm.display = true;
				this.isDisplayYesNoForm.titleForm= "Hãy đăng nhập để thực hiện chức năng này";
			}
		},
		handleCheckLoginListRecommended(){
			if(this.isMemberLogin){
				this.$router.push('/member/unapprovedList')
			}else{
				this.isDisplayYesNoForm.display = true;
				this.isDisplayYesNoForm.titleForm= "Hãy đăng nhập để thực hiện chức năng này";
			}
		},
		handleConfirm(value){
			if(value == 'yes'){
				this.isDisplayYesNoForm.titleForm= "";
				this.answer=""
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
/* .container-fluid .bg-info{
    background-color: #0065c1!important;
} */
</style>