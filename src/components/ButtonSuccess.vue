<template>
    <v-btn color="success" type="submit" class="p-4" width="18%">
        <span class="input-label">{{title}}</span>
    </v-btn>
</template>

<script>
export default {
    name: 'btn-success',
    props:{
        title: String
    }
}
</script>

<style>
.input-label{
    font-size: 20px
}
</style>