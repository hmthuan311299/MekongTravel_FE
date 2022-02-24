<template>
    <div>
        <div class="sidebar_avatar"> 
            <div class="sidebar_logo sidebar_avatar-item"><i class="fa-solid fa-user sidebar_fs-icon"></i></div>
            <div class="sidebar_avatar-item">
                <div class="sidebar_avatar-title">Xin chào Admin</div>
                <div class="sidebar_fullName">Hà Minh Thuận <i class="fa-solid fa-pen-to-square sidebar_fullName-edit"></i></div>
            </div>
        </div>
        <b-list-group>
            <router-link class="b-list-group-item sidebar_fs" exactActiveClass="active" v-for="(item, index) in itemSideBar" :key="index" tag="b-list-group-item" :to="item.path">{{item.item}}</router-link>
        </b-list-group>
    </div>
</template>

<script>
export default {
    name: 'side-bar',
    props:{
        itemSideBar: Array
    }
}
</script>

<style>
.col-1, .col-2, .col-3, .col-4, .col-5, .col-6, .col-7, .col-8, .col-9, .col-10, .col-11, .col-12, .col, .col-auto, .col-sm-1, .col-sm-2, .col-sm-3, .col-sm-4, .col-sm-5, .col-sm-6, .col-sm-7, .col-sm-8, .col-sm-9, .col-sm-10, .col-sm-11, .col-sm-12, .col-sm, .col-sm-auto, .col-md-1, .col-md-2, .col-md-3, .col-md-4, .col-md-5, .col-md-6, .col-md-7, .col-md-8, .col-md-9, .col-md-10, .col-md-11, .col-md-12, .col-md, .col-md-auto, .col-lg-1, .col-lg-2, .col-lg-3, .col-lg-4, .col-lg-5, .col-lg-6, .col-lg-7, .col-lg-8, .col-lg-9, .col-lg-10, .col-lg-11, .col-lg-12, .col-lg, .col-lg-auto, .col-xl-1, .col-xl-2, .col-xl-3, .col-xl-4, .col-xl-5, .col-xl-6, .col-xl-7, .col-xl-8, .col-xl-9, .col-xl-10, .col-xl-11, .col-xl-12, .col-xl, .col-xl-auto {
    position: relative;
    width: 100%;
    padding-right: 5px !important;
    padding-left: 5px !important;
}
.sidebar_avatar{
    width: 100%;
    background: #EF5122;
    height: 100px;
    display: flex;
    align-items: center;
    border-radius: 20px 20px 0 0 ;
}
.sidebar_fs-icon{
    font-size: 40px
}
.sidebar_fs{
    font-size: 22px
}
.sidebar_avatar-item{
    margin-left: 10px;
}
.sidebar_avatar-title{
    font-size: 13px;
    color:rgb(49, 49, 49)
}
.sidebar_avatar *{
    color: white;
}
.sidebar_fullName{
    font-size: 20px;
}
.b-list-group-item:hover{
    background: rgb(206, 206, 206);
    transition: 0.3s ease;
    opacity: 0.8;
}
.sidebar_fullName-edit:hover{
    font-size: 22px;
    cursor: pointer;
}
</style>