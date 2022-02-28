<template>
    <div>
        <h1 class="text-center text-danger">Danh mục Kỹ Thuật Viên</h1>
        <search-bar v-on:getValueSearch="getValueSearch"/>
        <div class="admin-list-container">
            <div class="admin-list-content" v-for="item in ListItem" :key="item.id">
                <div class="admin-list-content-item">
                    <div class="admin-list-item admin-list-item-avatar"><i class="fa-solid fa-user"></i></div>
                    <div class="admin-list-item admin-list-item-name">{{item.name}}</div>
                </div>
                <div class="admin-list-content-item">
                    <div class="admin-list-item admin-list-item-update" @click="handleUpdate(item.id)"><i class="fa-solid fa-pen-to-square"></i></div>
                    <div class="admin-list-item admin-list-item-delete" @click="handleDelete(item.id)"><i class="fa-solid fa-trash-can"></i></div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import SearchBar from '../../components/SearchBar.vue'
export default {
    name: "category-supporter",
    data(){
        return{
            search: '',
            ListItem: [
                {id : 1, name: 'Hà Minh Thuận'},
                {id : 2,name: 'Nguyễn Văn A'},
                {id : 3,name: 'Nguyễn Văn B'}
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
.list-container{
    min-width: 500px;
    min-height: 100%;
    max-width: 80%;
    margin: 20px auto;
}

</style>