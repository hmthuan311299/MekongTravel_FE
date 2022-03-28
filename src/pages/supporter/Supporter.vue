<template>
    <b-container fluid class="supporter-form-container">
        <div class="row">
            <div class="col-12 col-md-3">
                <div class="sticky">
                    <div class="supporter-sidebar_avatar"> 
                    <div class="supporter-sidebar_logo supporter-sidebar_avatar-item"><i class="fa-solid fa-user supporter-sidebar_fs-icon"></i></div>
                    <div class="supporter-sidebar_avatar-item">
                        <div class="supporter-sidebar_avatar-title">Xin chào!</div>
                        <div class="supporter-sidebar_fullName">Nguyễn Văn A <i class="fa-solid fa-pen-to-square sidebar_fullName-edit"></i></div>
                    </div>
                    </div>
                    <b-list-group>
                        <router-link class="b-list-group-item supporter-sidebar_fs" :class="{ 'active': getActiveTA }" tag="b-list-group-item" :to="{name:'supporter'}">Danh mục địa điểm</router-link>
                        <router-link class="b-list-group-item supporter-sidebar_fs" :class="{ 'active': getActiveReTA }" tag="b-list-group-item" :to="{name:'categoryRecommended'}">Duyệt đề xuất địa điểm mới <span v-if="ListTA && ListTA.length" class="noti-recommended">{{ListTA.length}}</span></router-link>
                        <router-link class="b-list-group-item supporter-sidebar_fs" :class="{ 'active': getActiveCategoryMember }" tag="b-list-group-item" :to="{name:'supporter'}">Danh mục thành viên</router-link>
                        <router-link class="b-list-group-item supporter-sidebar_fs" :class="{ 'active': getActiveChangePass}" tag="b-list-group-item" :to="{name:'supporterChangePassword'}">Đổi mật khẩu</router-link>
                        <b-list-group-item class="b-list-group-item supporter-sidebar_fs" exactActiveClass="active" @click="handleLogout">Đăng xuất</b-list-group-item>
                    </b-list-group>
               </div>
            </div>
            <div class="col-12 col-md-9 supporter-content-tab">
                <router-view></router-view>
            </div>
            <IconAdd v-if="showIconAdd" :pathName="getUrlIconAddByPath"/>
            <FormYesNo :isDisplayYesNoForm="isDisplayYesNoForm" v-on:handleConfirm="handleConfirm"/>
        </div>
    </b-container>
</template>

<script>
import {mapActions} from 'vuex'
//import component
import FormYesNo from '../../components/FormYesNo.vue'
import IconAdd from '../../components/IconAdd.vue'
import SearchBar from '../../components/SearchBar.vue'
//import Page
import ApprovalRecommended from './ApprovalRecomended.vue'
import CategoryTA from './CategoryTA.vue'
import AddTouristAttraction from './AddTouristAttraction.vue'
import CategoryRecommended from './CategoryRecommended.vue'
import SupporterChangePassword from './SupporterChangePassword.vue'
import UpdateTA from './UpdateTA.vue'
export default {
    name: 'supporter',
    data(){
        return {
            search: '',
            activeRouterTA : ['supporter', 'categoryTA', 'addTouristAttraction', 'updateTA'],
            activeRouterReTA: ['categoryRecommended', 'updateRecommended'],
            urlAddTA: '/supporter/categoryTA/add',
            activeRouterChangePass: ['supporterChangePassword'],
            activeCategoryMember: ['categoryMember'],
            // urlAddReTA: 'supporter/categoryReTA/edit/:id',
            isDisplayYesNoForm:{
				display: false,
				titleForm: 'Form xác nhận',
				answer: ''
			},
            ListTA: [],
        }
    },
    components:{
        SearchBar, CategoryTA, CategoryRecommended, ApprovalRecommended
        ,IconAdd, AddTouristAttraction, SupporterChangePassword, FormYesNo,
        UpdateTA
    },
    methods:{
        ...mapActions(['getListReTA']),
        getValueSearch(value){
            console.log("search", value);
            this.search = value
            if(!this.search){
                alert("vui long nhap lai")
            }
        },
        handleLogout(){
				this.isDisplayYesNoForm.display = true;
				this.isDisplayYesNoForm.titleForm= "Xác nhận đăng xuất";
		},
        handleConfirm(value){
			if(value == 'yes'){
				this.isDisplayYesNoForm.titleForm= "";
				this.answer=""
				this.$router.push({name:'supporterLogin'})
			}
			else{
				this.isDisplayYesNoForm.display = false;
				this.isDisplayYesNoForm.titleForm= "";
				this.answer=""
			}
		}
    },
    computed:{
        showIconAdd(){
            var name = this.$route.name;
            if(name == 'categoryTA' || name == 'supporter' ) return true;
            else false
        },
        getUrlIconAddByPath(){
            var path = this.$route.name;
            if(path == 'supporter' || path == 'categoryTA' ) return this.urlAddTA;
        },
        getActiveTA(){
            var result = (this.activeRouterTA.indexOf(this.$route.name) > -1)
            return Boolean(result);
        },
        getActiveReTA(){
            var result = (this.activeRouterReTA.indexOf(this.$route.name) > -1)
            return Boolean(result);
        },
        getActiveCategoryMember(){
           var result = (this.activeCategoryMember.indexOf(this.$route.name) > -1)
            return Boolean(result);
        },
        getUrlIconAddByPath(){
            if(this.$route.name == 'supporter' || 'categoryTA'){
                return this.urlAddTA;
            }
        },
        getActiveChangePass(){
            var result = (this.activeRouterChangePass.indexOf(this.$route.name) > -1)
            return Boolean(result);
        },
    },
    created(){
        this.getListReTA().then(response=>{
            if(response.ok){
                this.ListTA = response.data
            }
        })
    }
}
</script>
<style>
.noti-recommended{
    background-color: rgb(255, 107, 8);
    padding: 2px 5px;
    border-radius: 5px
}
.supporter-form-container{
    min-height: 100vh;
    background: url('../../assets/admin-img/background-admin-1.jpg');
    background-size: cover;
    width: 100%;
}
@media (max-width: 500px){
    .supporter-list-content{
        width: 50vh;
        margin: 0 auto;
    }
}
/* List */
.supporter-list-container{
    min-width: 500px;
    min-height: 100%;
    max-width: 80%;
    margin: 20px auto;
}
.supporter-list-content{
    background: white;
    height: 60px;
    border: 2px solid blue;
    border-radius: 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 5px;
}
.supporter-list-content-item{
    margin: 0 20px;
    display: flex;
    align-items: center;
}
.supporter-list-item{
    font-size:25px
}
.supporter-list-item + .supporter-list-item{
    margin-left: 20px
}
.supporter-list-item-city{
    font-size:24px
}
.supporter-list-content:hover{
    position: relative;
    z-index: 10000;
    box-shadow: 6px 6px 6px #aaa;
    transition: 0.5s ease;
}
.supporter-list-item-update{
    color: #ffc107;
}
.supporter-list-item-delete{
    color: red;
}
.supporter-list-item-delete:hover, .supporter-list-item-update:hover{
    font-size: 27px;
    transition: 0.1s ease;
}

.col-1, .col-2, .col-3, .col-4, .col-5, .col-6, .col-7, .col-8, .col-9, .col-10, .col-11, .col-12, .col, .col-auto, .col-sm-1, .col-sm-2, .col-sm-3, .col-sm-4, .col-sm-5, .col-sm-6, .col-sm-7, .col-sm-8, .col-sm-9, .col-sm-10, .col-sm-11, .col-sm-12, .col-sm, .col-sm-auto, .col-md-1, .col-md-2, .col-md-3, .col-md-4, .col-md-5, .col-md-6, .col-md-7, .col-md-8, .col-md-9, .col-md-10, .col-md-11, .col-md-12, .col-md, .col-md-auto, .col-lg-1, .col-lg-2, .col-lg-3, .col-lg-4, .col-lg-5, .col-lg-6, .col-lg-7, .col-lg-8, .col-lg-9, .col-lg-10, .col-lg-11, .col-lg-12, .col-lg, .col-lg-auto, .col-xl-1, .col-xl-2, .col-xl-3, .col-xl-4, .col-xl-5, .col-xl-6, .col-xl-7, .col-xl-8, .col-xl-9, .col-xl-10, .col-xl-11, .col-xl-12, .col-xl, .col-xl-auto {
    position: relative;
    width: 100%;
    padding-right: 5px !important;
    padding-left: 5px !important;
}
.supporter-sidebar_avatar{
    width: 100%;
    background: #EF5122;
    height: 100px;
    display: flex;
    align-items: center;
    border-radius: 20px 20px 0 0 ;
}
.supporter-sidebar_fs-icon{
    font-size: 40px
}
.supporter-sidebar_fs{
    font-size: 22px
}
.supporter-sidebar_avatar-item{
    margin-left: 10px;
}
.supporter-sidebar_avatar-title{
    font-size: 13px;
    color:rgb(49, 49, 49)
}
.supporter-sidebar_avatar *{
    color: white;
}
.supporter-sidebar_fullName{
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
.custom-select {
    /* height: calc(1.5em + 0.75rem + 13px) !important; */
    height: 7vh !important;
}
</style>