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
				<b-nav-item>Đề xuất mới</b-nav-item>
				<b-nav-item>Địa điểm quan tâm</b-nav-item>
				<b-nav-item-dropdown right>
				<template #button-content>
					<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTe7mWcFQ-e97tkOw1TN2252vi4gLuYMTbvXQ&usqp=CAU" class="user-navbar-avatar" alt="">
				</template>
				<b-dropdown-item >Thông tin cá nhân</b-dropdown-item>
				<b-dropdown-item >Đổi mật khẩu</b-dropdown-item>
				</b-nav-item-dropdown>
			</b-navbar-nav>
		</b-collapse>
  	</b-navbar>
	<router-view></router-view>
</b-container>
</template>

<script>
import UserIndex from './UserIndex.vue'
import CategoryTAByProvince from'./CategoryTAByProvince.vue'
import DetailToutistAtraction from './DetailToutistAtraction.vue'
import { mapMutations } from 'vuex'
export default {
    name: 'user',
	data(){
		return{
			
		}
	},
	methods:{
		...mapMutations('set_litsTouristAttraction', [])
	},
	components:{
		UserIndex, DetailToutistAtraction, CategoryTAByProvince
	},
	computed:{
	},
	watch:{
       $route (to, from){
		   
        }
   }
	
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