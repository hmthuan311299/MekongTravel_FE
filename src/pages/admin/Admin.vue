<template>
    <b-container fluid class="form-container-admin">
        <div class="row">
            <div class="col-12 col-md-3">
                <side-bar :itemSideBar="itemSideBar"/>
            </div>
            <div class="col-12 col-md-9 content-tab-admin">
                <router-view></router-view>
            </div>
        </div>
        <icon-add :pathName="getUrlIconAddByPath"/>
    </b-container>
</template>

<script>
import CategoryTech from './CategoryTech.vue'
import SideBar from '../../components/SideBar.vue'
import CategoryProvince from './CategoryProvince.vue'
import AddProvince from './AddProvince.vue'
import IconAdd from '../../components/IconAdd.vue'
import UpdateProvince from '../../pages/admin/UpdateProvince.vue'
export default {
    name: 'admin',
    data(){
       return{
           itemSideBar :[
               {item: "Danh mục tỉnh thành", path: "/admin"},
               {item: "Danh mục kỹ thuật viên", path: "/admin/categoryTech"},
               {item: "Danh mục thành viên", path: "/admin/categoryMember"},
               {item: "Thống kê", path: "/admin/statistic"}
           ],
           urlAddProvice: '/admin/categoryProvince/addProvince',
           urlAddTech: '/admin/categoryTech/addTech',
           urlUpdateMember: '/admin/categoryMember/updateMember',
       }
    },
    components:{
        SideBar, CategoryTech, CategoryProvince, AddProvince, IconAdd, UpdateProvince
    },
    computed:{
        getUrlIconAddByPath(){
            var path = this.$route.name;
            if(path == 'admin' || path == 'categoryProvince' ) return this.urlAddProvice;
            if(path == 'categoryTech' ) return this.urlAddTech;
            if(path == 'categoryMember' ) return this.urlUpdateMember;
        }
    }
}
</script>

<style>

.form-container-admin{
    min-height: 100vh;
    background: url('../../assets/admin-img/background-admin-1.jpg');
    background-size: cover;
    width: 100%;
}
.list-content{
    background: white;
    height: 60px;
    border: 2px solid blue;
    border-radius: 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 5px;
}
@media (max-width: 500px){
    
    .list-content{
        width: 50vh;
        margin: 0 auto;
    }
}
.list-content-item{
    margin: 0 20px;
    display: flex;
    align-items: center;
}
.list-item-name{
    
}
.list-item{
    font-size:25px
}
.list-item + .list-item{
    margin-left: 20px
}
.list-content:hover{
    
    position: relative;
    z-index: 10000;
    box-shadow: 6px 6px 6px #aaa;
    transition: 0.5s ease;
}
.list-item-update{
    color: #ffc107;
}
.list-item-delete{
    color: red;
}
.list-item-delete:hover, .list-item-update:hover{
    font-size: 27px;
    transition: 0.1s ease;
}
</style>