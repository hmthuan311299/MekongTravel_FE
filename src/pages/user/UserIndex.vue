<template>
  <div>
      <search-bar v-on:getValueSearch="getValueSearch"/>
	<div>
		<p class="text-center m-0" >Tìm kiếm nhanh qua tỉnh thành</p>
		<div class="user-list-province">
			<router-link  
				v-for="item in listProvince" :key="item.provinceid" class="user-list-province-item" 
				:to ="{name:'categoryTAByProvince', params:{'provinceName': handleremoveVietnameseProvinceTitle(item.provincetitle),
															'provinceId':  item.provinceid
				}}"
			>
				{{item.provincetitle}}
			</router-link>
		</div>
	</div>
	<hr>
	<router-view></router-view>
  </div>
</template>

<script>
import UserSearch from './UserSearch'
import UserListAllTA from './UserListAllTA'
import SearchBar from '../../components/SearchBar.vue'
import {mapActions, mapState} from 'vuex';
import {removeVietnameseFromString} from '../../helpers'
export default {
    name: 'user-index',
	data(){
		return{
			// listDataSearch: ''
		}
	},
	methods:{
		...mapActions(['getProvinceAndTouristAttraction', 'getTouristAttractionBySearch']),
		getValueSearch(value){
			this.$router.push({name:'userSearch', query:{valueSearch: value}})
        },
		handleremoveVietnameseProvinceTitle(provinceTitle){
			return removeVietnameseFromString(provinceTitle);
		},
		getProvinceId(provinceid){
			this.provinceid= provinceid
		},
	},
	components:{
		SearchBar, UserSearch, UserListAllTA
	},
	computed:{
		...mapState({
			listProvince: state => state.touristAttraction.listProvince,
			
		})
	},
	created(){
    this.getProvinceAndTouristAttraction();
  }
}
</script>

<style>
.navbar-dark .navbar-nav .nav-link:hover {
    color: rgba(255, 255, 255, 0.8) !important;
}
.navbar-dark .navbar-nav .nav-link {
    color: rgba(255, 255, 255) !important;
	font-size: 1.3rem;
}
:root{
	--user-navbar-avatar-1444: 40px;
	--user-navbar-logoIndex-1444: 60px
}
.user-navbar-avatar{
	width: var(--user-navbar-avatar-1444);
	height: var(--user-navbar-avatar-1444);
	border-radius: 10px 
}
.user-navbar-right{
	display: flex;
	align-items: center;
}

.user-list-province{
	display: flex;
	justify-content: center;
	flex-wrap: wrap;
	width: 80%;
	margin: 0 auto;
}
.user-list-province-item{
	margin: 20px 20px;
	display: flex;
	justify-content: center;
	align-items: center;
	min-width: 25px;
	width: 100px;
	height: 7vh;
	color: rgb(52, 129, 245);
	border: 1px solid rgb(52, 129, 245);
	font-weight: bold;
	border-radius: 8px;
}
.user-list-province-item:hover{
	cursor: pointer;
	color: rgb(52, 129, 245, 0.8);
	box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
	transition: 0.5s ease;
	text-decoration: none;
}

</style>