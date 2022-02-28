<template>
    <b-container fluid class="admin-form-container">
        <div class="row">
            <div class="col-12 col-md-3">
                <div class="admin-sidebar_avatar"> 
                    <div class="admin-sidebar_logo admin-sidebar_avatar-item"><i class="fa-solid fa-user admin-sidebar_fs-icon"></i></div>
                    <div class="admin-sidebar_avatar-item">
                        <div class="admin-sidebar_avatar-title">Xin chào Admin</div>
                        <div class="admin-sidebar_fullName">Hà Minh Thuận <i class="fa-solid fa-pen-to-square admin-sidebar_fullName-edit"></i></div>
                    </div>
                </div>
                <b-list-group>
                    <router-link class="b-list-group-item admin-sidebar_fs" :class="{ 'active': getActiveProvince }" tag="b-list-group-item" :to="{name:'admin'}">Danh mục tỉnh thành</router-link>
                    <router-link class="b-list-group-item admin-sidebar_fs" :class="{ 'active': getActiveSupporter }" tag="b-list-group-item" :to="{name:'categorySupporter'}">Danh mục hỗ trợ viên</router-link>
                    <router-link class="b-list-group-item admin-sidebar_fs" :class="{ 'active': getActiveMember }" tag="b-list-group-item" :to="{name:'categoryMember'}">Danh mục thành viên</router-link>
                </b-list-group>
            </div>
            <div class="col-12 col-md-9 admin-content-tab">
                <router-view></router-view>
            </div>
        </div>
        <icon-add v-if="!getActiveMember" :pathName="getUrlIconAddByPath"/>
    </b-container>
</template>

<script>
import CategorySupporter from './CategorySupporter.vue'
import AddSupporter from './AddSupporter.vue'
import UpdateSupporter from './UpdateSupporter.vue'
import CategoryProvince from './CategoryProvince.vue'
import AddProvince from './AddProvince.vue'
import IconAdd from '../../components/IconAdd.vue'
import UpdateProvince from '../../pages/admin/UpdateProvince.vue'

export default {
    name: 'admin',
    data(){
       return{
            activeRouterProvince : ['admin', 'categoryProvince', 'addProvince', 'updateProvince'],
            activeRouterSupporter: ['categorySupporter', 'addSupporter', 'updateSupporter'],
            activeRouterMember: ['categoryMember'],
            urlAddProvice: '/admin/categoryProvince/addProvince',
            urlAddSupporter: '/admin/categorySupporter/addSupporter',
            urlUpdateMember: '/admin/categoryMember/updateMember'
       }
    },
    components:{
        CategoryProvince, AddProvince, IconAdd, UpdateProvince,
        AddSupporter, UpdateSupporter, CategorySupporter
    },
    computed:{
        getUrlIconAddByPath(){
            var path = this.$route.name;
            if(path == 'admin' || path == 'categoryProvince' ) return this.urlAddProvice;
            if(path == 'categorySupporter' ) return this.urlAddSupporter;
            if(path == 'categoryMember' ) return this.urlUpdateMember;
        },
        getActiveProvince(){
            var result = (this.activeRouterProvince.indexOf(this.$route.name) > -1)
            return Boolean(result);
        },
        getActiveSupporter(){
            var result = (this.activeRouterSupporter.indexOf(this.$route.name) > -1)
            return Boolean(result);
        },
        getActiveMember(){
           var result = (this.activeRouterMember.indexOf(this.$route.name) > -1)
            return Boolean(result);
        },
    }
}
</script>

<style>
.admin-form-container{
    min-height: 100vh;
    background: url('../../assets/admin-img/background-admin-1.jpg');
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