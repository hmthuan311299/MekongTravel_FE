<template>
    <div>
        <h1 class="text-center text-danger">Danh mục Tỉnh Thành</h1>
        <search-bar v-on:getValueSearch="getValueSearch"/>
        <div class="list-container">
            <div class="list-content" v-for="item in ListItem" :key="item.id">
                <div class="list-content-item">
                    <div class="list-item list-item-avatar"><i class="fa-solid fa-city"></i></div>
                    <div class="list-item list-item-name">{{item.name}}</div>
                </div>
                <div class="list-content-item">
                    <router-link tag="div" class="list-item list-item-update" :to="{name: 'updateProvince', params:{ id: item.id}}">
                        <i class="fa-solid fa-pen-to-square"></i>
                    </router-link>
                    <div class="list-item list-item-delete" @click="handleDeleteProvince(item.id)"><i class="fa-solid fa-trash-can"></i></div>
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
        handleUpdateTech(value){
            console.log(value)
        },
        handleDeleteTech(value){
            console.log(value)
        }
    },
     components:{
        SearchBar
    },
}
</script>

<style>
.list-container{
    min-width: 500px;
    min-height: 100%;
    max-width: 80%;
    margin: 20px auto;
}

</style>