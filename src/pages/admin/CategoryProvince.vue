<template>
    <div>
        <h1 class="text-center text-danger">Danh mục Tỉnh Thành</h1>
        <search-bar v-on:getValueSearch="getValueSearch"/>
        <div class="admin-list-container">
            <div class="admin-list-content" v-for="item in ListItem" :key="item.id">
                <div class="admin-list-content-item">
                    <div class="admin-list-item admin-list-item-avatar"><i class="fa-solid fa-city"></i></div>
                    <div class="admin-list-item admin-list-item-name">{{item.name}}</div>
                </div>
                <div class="admin-list-content-item">
                    <router-link tag="div" class="admin-list-item admin-list-item-update" :to="{name: 'updateProvince', params:{ id: item.id}}">
                        <i class="fa-solid fa-pen-to-square"></i>
                    </router-link>
                    <div class="admin-list-item admin-list-item-delete" @click="handleDelete(item.id)"><i class="fa-solid fa-trash-can"></i></div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import SearchBar from '../../components/SearchBar.vue'
export default {
    name: "categoryProvince",
    data(){
        return{
            search: '',
            ListItem: [
                {id : 1, name: 'Cần Thơ'},
                {id : 2,name: 'Đồng Tháp'},
                {id : 3,name: 'Vĩnh Long'}
            ]
        }
    },
    methods:{
        getValueSearch(value){
            console.log("search", value);
            this.search = this.search
            if(!this.search){
                alert("vui long nhap lai")
            }
        },
        handleUpdate(value){
            console.log(value)
        },
        handleDelete(value){
            console.log(value)
        }
    },
     components:{
        SearchBar
    },
}
</script>

<style>

</style>