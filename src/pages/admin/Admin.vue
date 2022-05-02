<template>
    <b-container fluid class="admin-form-container" v-bind:style="{ 'background-image': 'url(' + image + ')'}">
        <div class="row">
            <div class="col-12 col-md-3 sticky" >
                <div class="sticky">
                    <div class="admin-sidebar_avatar"> 
                    <div class="admin-sidebar_logo admin-sidebar_avatar-item"><i class="fa-solid fa-user admin-sidebar_fs-icon"></i></div>
                    <div class="admin-sidebar_avatar-item">
                        <div class="admin-sidebar_avatar-title">Xin chào Admin</div>
                        <div class="admin-sidebar_fullName">{{admin.adminname}} <router-link :to="{name: 'updateAdmin'}" tag ="i" class="fa-solid fa-pen-to-square admin-sidebar_fullName-edit"></router-link></div>
                    </div>
                </div>
                <b-list-group>
                    <router-link class="b-list-group-item admin-sidebar_fs" :class="{ 'active': getActiveProvince }" tag="b-list-group-item" :to="{name:'admin'}">Danh mục tỉnh thành</router-link>
                    <router-link class="b-list-group-item admin-sidebar_fs" :class="{ 'active': getActiveSupporter }" tag="b-list-group-item" :to="{name:'categorySupporter'}">Danh mục hỗ trợ viên</router-link>
                    <router-link class="b-list-group-item admin-sidebar_fs" :class="{ 'active': getActiveStatistic }" tag="b-list-group-item" :to="{name:'statisticPlace'}">Thống kê</router-link>
                    <router-link class="b-list-group-item admin-sidebar_fs" :class="{ 'active': getActiveChangePass}" tag="b-list-group-item" :to="{name:'adminChangePassword'}">Đổi mật khẩu</router-link>
                    <b-list-group-item class="b-list-group-item admin-sidebar_fs" exactActiveClass="active" @click="handleLogout">Đăng xuất</b-list-group-item>
                </b-list-group>
                </div>
            </div>
            <div class="col-12 col-md-9 admin-content-tab">
                <router-view></router-view>
            </div>
        </div>
        <icon-add v-if="showIconAdd" :pathName="getUrlIconAddByPath"/>
        <FormYesNo :isDisplayYesNoForm="isDisplayYesNoForm" v-on:handleConfirm="handleConfirm"/>
    </b-container>
</template>
<script>
import image from '../../assets/background/Background-4.jpg'
import FormYesNo from '../../components/FormYesNo.vue'
import CategorySupporter from './CategorySupporter.vue'
import AddSupporter from './AddSupporter.vue'
import UpdateSupporter from './UpdateSupporter.vue'
import CategoryProvince from './CategoryProvince.vue'
import AddProvince from './AddProvince.vue'
import IconAdd from '../../components/IconAdd.vue'
import UpdateProvince from '../../pages/admin/UpdateProvince.vue'
import AdminChangePassword from './AdminChangePassword.vue'
import UpdateAdmin from './UpdateAdmin.vue'
import AdminStatistic from './AdminStatistic'
import AdminForgetPassword from './AdminForgetPassword'
import {mapActions, mapState, mapMutations} from 'vuex'
import {setToken_Admin} from "../../helpers/constans";
import {parseJwt} from "../../helpers/"
export default {
    name: 'admin',
    data(){
       return{
            image,
            activeRouterProvince : ['admin', 'categoryProvince', 'addProvince', 'updateProvince'],
            activeRouterSupporter: ['categorySupporter', 'addSupporter', 'updateSupporter'],
            activeRouterStatistic: ['statisticPlace', 'statisticView'],
            activeRouterChangePass: ['adminChangePassword'],
            urlAddProvice: '/admin/categoryProvince/addProvince',
            urlAddSupporter: '/admin/categorySupporter/addSupporter',
            isDisplayYesNoForm:{
                display: false,
                titleForm: 'Form xác nhận',
                answer: ''
            },
       }
    },
    components:{
        CategoryProvince, AddProvince, IconAdd, UpdateProvince,
        AddSupporter, UpdateSupporter, CategorySupporter, AdminChangePassword,
        FormYesNo, UpdateAdmin, AdminStatistic, AdminForgetPassword
    },
    computed:{
        ...mapState({
            admin: state=> state.admin.admin
        }),
        getUrlIconAddByPath(){
            var path = this.$route.name;
            if(path == 'admin' || path == 'categoryProvince' ) return this.urlAddProvice;
            if(path == 'categorySupporter' ) return this.urlAddSupporter;
        },
        getActiveProvince(){
            var result = (this.activeRouterProvince.indexOf(this.$route.name) > -1)
            return Boolean(result);
        },
        getActiveSupporter(){
            var result = (this.activeRouterSupporter.indexOf(this.$route.name) > -1)
            return Boolean(result);
        },
        getActiveStatistic(){
           var result = (this.activeRouterStatistic.indexOf(this.$route.name) > -1)
            return Boolean(result);
        },
        getActiveChangePass(){
            var result = (this.activeRouterChangePass.indexOf(this.$route.name) > -1)
            return Boolean(result);
        },
        showIconAdd(){
            var name = this.$route.name;
            if(name == 'admin' || name == 'categoryProvince' || name == 'categorySupporter' ) return true;
            else false
        }
    },
    methods:{
        ...mapActions(['getAdmin']),
        ...mapMutations(['set_LogoutAdmin']),
        handleLogout(){
				this.isDisplayYesNoForm.display = true;
				this.isDisplayYesNoForm.titleForm= "Xác nhận đăng xuất";
		},
        handleConfirm(value){
			if(value == 'yes'){
                this.set_LogoutAdmin();
				this.isDisplayYesNoForm.titleForm= "";
				this.answer=""
				this.$router.push({name:'adminLogin'})
			}
			else{
				this.isDisplayYesNoForm.display = false;
				this.isDisplayYesNoForm.titleForm= "";
				this.answer=""
			}
		}
	},
    created(){
        var getToken = localStorage.getItem(setToken_Admin) || null;
        if(getToken){
            var value = parseJwt(getToken);
            if(value && value.adminAccount){
                 this.getAdmin();
            }
        }else{
            this.$router.push({name:'adminLogin'})
        }
    }
    
}
</script>

<style>
.admin-form-container{
    min-height: 100vh;
    background-size: cover;
    width: 100%;
}

@media (max-width: 500px){
    .list-content{
        width: 50vh;
        margin: 0 auto;
    }
}
/* List */
.admin-list-container{
    min-width: 500px;
    min-height: 100%;
    max-width: 80%;
    margin: 20px auto;
}
.admin-list-content{
    background: white;
    height: 60px;
    border: 2px solid blue;
    border-radius: 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 5px;
}
.admin-list-content-item{
    margin: 0 20px;
    display: flex;
    align-items: center;
}
.admin-list-item-name{
    
}
.admin-list-item{
    font-size:25px
}
.admin-list-item + .admin-list-item{
    margin-left: 20px
}
.admin-list-content:hover{
    
    position: relative;
    z-index: 10000;
    box-shadow: 6px 6px 6px #aaa;
    transition: 0.5s ease;
}
.supporter-list-item-view{
    color: rgb(32, 106, 204);
}
.admin-list-item-update{
    color: #ffc107;
}
.admin-list-item-delete{
    color: red;
}
.admin-list-item-delete:hover, .admin-list-item-update:hover, .supporter-list-item-view:hover{
    font-size: 27px;
    transition: 0.1s ease;
}

.col-1, .col-2, .col-3, .col-4, .col-5, .col-6, .col-7, .col-8, .col-9, .col-10, .col-11, .col-12, .col, .col-auto, .col-sm-1, .col-sm-2, .col-sm-3, .col-sm-4, .col-sm-5, .col-sm-6, .col-sm-7, .col-sm-8, .col-sm-9, .col-sm-10, .col-sm-11, .col-sm-12, .col-sm, .col-sm-auto, .col-md-1, .col-md-2, .col-md-3, .col-md-4, .col-md-5, .col-md-6, .col-md-7, .col-md-8, .col-md-9, .col-md-10, .col-md-11, .col-md-12, .col-md, .col-md-auto, .col-lg-1, .col-lg-2, .col-lg-3, .col-lg-4, .col-lg-5, .col-lg-6, .col-lg-7, .col-lg-8, .col-lg-9, .col-lg-10, .col-lg-11, .col-lg-12, .col-lg, .col-lg-auto, .col-xl-1, .col-xl-2, .col-xl-3, .col-xl-4, .col-xl-5, .col-xl-6, .col-xl-7, .col-xl-8, .col-xl-9, .col-xl-10, .col-xl-11, .col-xl-12, .col-xl, .col-xl-auto {
    position: relative;
    width: 100%;
    padding-right: 5px !important;
    padding-left: 5px !important;
}
.admin-sidebar_avatar{
    width: 100%;
    background: #EF5122;
    height: 100px;
    display: flex;
    align-items: center;
    border-radius: 20px 20px 0 0 ;
}
.admin-sidebar_fs-icon{
    font-size: 40px
}
.admin-sidebar_fs{
    font-size: 22px
}
.admin-sidebar_avatar-item{
    margin-left: 10px;
}
.admin-sidebar_avatar-title{
    font-size: 13px;
    color:rgb(49, 49, 49)
}
.admin-sidebar_avatar *{
    color: white;
}
.admin-sidebar_fullName{
    font-size: 20px;
}
.b-list-group-item:hover{
    background: rgb(206, 206, 206);
    transition: 0.3s ease;
    opacity: 0.8;
}
.admin-sidebar_fullName-edit:hover{
    font-size: 22px;
    cursor: pointer;
}

</style>