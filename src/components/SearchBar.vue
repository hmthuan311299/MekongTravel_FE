<template>
    <div class="input-group search-bar">
        <input type="text" v-model="search" class="form-control" placeholder="Tìm kiếm" @keyup.enter="handleGetValueSearch">
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
            search: ''
        }
    },
    props:{
    },
    methods:{
        handleGetValueSearch(){
            this.$emit("getValueSearch", this.search)
        }
    }
}
</script>

<style>

</style>