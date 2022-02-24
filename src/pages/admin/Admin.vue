<template>
    <b-container fluid class="form-container-admin">
        <div class="row">
            <div class="col-md-3">
                <side-bar :itemSideBar="itemSideBar"/>
            </div>
            <div class="col-md-9 content-tab-admin">
                <router-view></router-view>
            </div>
        </div>
    </b-container>
</template>

<script>
import CategoryTech from './CategoryTech.vue'
import SideBar from '../../components/SideBar.vue'
import CategoryProvince from './CategoryProvince.vue'
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
       }
    },
    components:{
        SideBar, CategoryTech, CategoryProvince
    },
    
}
</script>

<style>
.form-container-admin{
    min-height: 100vh;
    background: url('../../assets/admin-img/background-admin-1.jpg');
    background-size: cover;
}
.list-content{
    width: 100%;
    height: 60px;
    border: 2px solid black;
    border-radius: 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 5px;
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
    background: white;
    position: relative;
    z-index: 10000;
    box-shadow: 6px 6px 6px #aaa;
    transition: 0.5s ease;
}
.list-item-update{
    color: blue;
}
.list-item-delete{
    color: red;
}
.list-item-delete:hover, .list-item-update:hover{
    font-size: 27px;
    transition: 0.1s ease;
}
</style>