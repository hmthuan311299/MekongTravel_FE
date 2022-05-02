<template>
    <v-btn color="success" :type="btnType" class="p-4 mr-1" :width="btnWidth">
        <span class="input-label">{{title}}</span>
    </v-btn>
</template>

<script>
export default {
    name: 'btn-success',
    props:{
        title: String,
        btnWidth: {
            type:String,
            default: '45%'
        },
        btnType:{
            type:String,
            default:'submit'
        }
    }
}
</script>

<style>
.input-label{
    font-size: 20px
}
</style>