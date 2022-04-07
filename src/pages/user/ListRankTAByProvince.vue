<template>
    <CardRankSugestionTA :listTA="listTA"/>
</template>
<script>

import port_file from '../../port_file'
import CardRankSugestionTA from '../../components/CardRankSugestionTA.vue'
import {mapActions} from 'vuex'
export default {
    name: 'list-rank',
    components:{
        CardRankSugestionTA
    },
    data(){
        return{
            listTA:[],
            port_file
        }
    },
    computed:{
    },
    methods:{
        ...mapActions(['getRankTAByProvince']),
    },
    created(){
        this.provinceId = this.$route.params.provinceId;
        if(this.provinceId){
            this.getRankTAByProvince(this.provinceId).then(response=>{
                if(response.ok){
                    this.listTA= response.data
                }
            })
        }
    }
}
</script>

<style>

</style>