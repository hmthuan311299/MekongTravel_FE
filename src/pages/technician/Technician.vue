<template>
    <b-container fluid>
        <div class="row">
            <item-side-bar/>
            <div class="col-md-10 content-tab-admin">
                <search-bar v-on:getValueSearch="getValueSearch"/>
            </div>
        </div>
    </b-container>
</template>

<script>
import SideBar from '../../components/SideBar.vue'
import SearchBar from '../../components/SearchBar.vue'
export default {
    name: 'technician',
    data(){
       return{
           search: ''
       }
    },
    components:{
        SideBar,
        SearchBar
    },
    methods:{
        getValueSearch(value){
            console.log("search tech", value);
            this.search = this.search
            if(!this.search){
                alert("vui long nhap lai")
            }
        }
    }
}
</script>

<style>


.search-bar {
    width: 80% !important;
    margin: 10px auto;
}
</style>