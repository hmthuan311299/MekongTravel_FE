<template>
    <div class="add-new">
        <router-link tag="i"  class="fa-solid fa-circle-plus icon-add" :to="{path: pathName}"></router-link>
    </div>
</template>

<script>
export default {
    props:{
        pathName: String
    }
}
</script>

<style>
    .add-new{
    position: fixed;
    right: 10px;
    bottom: 20px;
    }
    .icon-add{
        color: #007bff;
        font-size: 60px;
    }
    .icon-add:hover{
        cursor: pointer;
        opacity: 0.8;
    }
</style>