<template>
    <div class="input-group search-bar">
        <input type="text" v-model="valueSearch" class="form-control" placeholder="Tìm kiếm" @keyup.enter="handleGetValueSearch">
        <div class="input-group-append">
            <button class="btn btn-secondary" type="button" @click="handleGetValueSearch">
                <i class="fa fa-search"></i>
            </button>
        </div>
    </div>
</template>

<script>
export default {
    name: 'search-bar',
    data(){
        return{
            valueSearch: ''
        }
    },
    props:{
    },
    methods:{
        handleGetValueSearch(){
            if(!this.valueSearch){
                alert("Vui lòng nhập từ khóa để tìm kiếm")
            }
            else {
                this.$emit("getValueSearch", this.valueSearch)
            }
        }
    }
}
</script>

<style>
input.form-control{
    height: 7vh;
}
.search-bar {
    width: 80% !important;
    margin: 10px auto;
}
</style>