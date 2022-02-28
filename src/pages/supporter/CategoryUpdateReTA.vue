<template>
    <div>
        <h1 class="text-center text-danger">Danh mục cập nhật địa điểm</h1>
        <div class="supporter-list-container">
            <div class="supporter-list-content" v-for="item in ListItem" :key="item.id">
                <div class="supporter-list-content-item" style="width: 40%">
                    <div class="supporter-list-item supporter-list-item-avatar"><i class="fa-solid fa-map-location-dot"></i></div>
                    <div class="supporter-list-item supporter-list-item-name">{{item.name}}</div>
                </div>
                <div class="supporter-list-item supporter-list-item-name">{{item.city}}</div>
                <div class="supporter-list-content-item">
                    <router-link tag="div" class="supporter-list-item supporter-list-item-view" :to="{name: 'updateProvince', params:{ id: item.id}}">
                        <i class="fa-solid fa-eye"></i>
                    </router-link>
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
export default {
    name: "categoryUpdateReTA",
    data(){
        return{
            search: '',
            ListItem: [
                {id : 1, name: 'Bến Ninh Kiều', city: 'Cần Thơ'},
                {id : 2, name: 'Chợ nổi cái răng', city: 'Cần Thơ'},
                {id : 4, name: 'Xẻo quýt', city: 'Cần Thơ'}
            ],
        }
    },
    methods:{
        handleUpdate(value){
            console.log(value)
        },
        handleDelete(value){
            console.log(value)
        }
    },
     components:{
    },
}
</script>

<style>

</style>