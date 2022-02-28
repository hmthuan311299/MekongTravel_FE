<template>
    <div>
        <h1 class="text-center text-danger">Danh mục địa điểm</h1>
        <search-bar v-on:getValueSearch="getValueSearch"/>
        
        <div class="supporter-list-container">
            <b-form-select v-model="selected" :options="options" class="mb-4" style="width: 25%"></b-form-select>
            <div class="supporter-list-content"  v-for="item in ListItem" :key="item.id">
                <div class="supporter-list-content-item" style="width: 45%">
                    <div class="supporter-list-item supporter-list-item-avatar"><i class="fa-solid fa-map-location-dot"></i></div>
                    <div class="supporter-list-item supporter-list-item-name">{{item.name}}</div>
                </div>
                <div class="supporter-list-item supporter-list-item-name"> <span class="span-fs">{{item.city}}</span></div>
                <div class="supporter-list-content-item">
                    <router-link tag="div" class="supporter-list-item supporter-list-item-update" :to="{name: 'updateProvince', params:{ id: item.id}}">
                        <i class="fa-solid fa-pen-to-square"></i>
                    </router-link>
                    <div class="supporter-list-item supporter-list-item-delete" @click="handleDelete(item.id)"><i class="fa-solid fa-trash-can"></i></div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import SearchBar from '../../components/SearchBar.vue'
export default {
    name: "categoryTA",
    data(){
        return{
            search: '',
            ListItem: [
                {id : 1, name: 'Bến Ninh Kiều', city: 'Cần Thơ'},
                {id : 2, name: 'Chợ nổi cái răng', city: 'Cần Thơ'},
                {id : 4, name: 'Xẻo quýt', city: 'Cần Thơ'}
            ],
            selected: null,
            options: [
                { value: null, text: 'Lọc theo tỉnh thành' },
                { value: 'Cần Thơ', text: 'Cần Thơ' },
                { value: 'b', text: 'Selected Option' },
                { value: { C: '3PO' }, text: 'This is an option with object value' },
                { value: 'd', text: 'This one is disabled', disabled: true }
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