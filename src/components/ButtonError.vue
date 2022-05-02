<template>
    <v-btn color="error" class="p-4 ml-1" :width="btnWidth" @click="handleCancel">
        <span class="input-label" >{{title}}</span>
    </v-btn>
</template>

<script>
export default {
    name: 'btn-success',
    props:{
        title: String,
        routeName: String,
        btnWidth: {
            type:String,
            default: '45%'
        },
    },
    methods:{
        handleCancel(){
            this.$router.push({name: this.routeName})
        },
    }
}
</script>

<style>
.input-label{
    font-size: 20px
}
</style>