<template>
    <CardRankSugestionTA :listTA="listTA"/>
</template>
<script>
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
        }
    },
    computed:{
    },
    methods:{
        ...mapActions(['getSuggestionTAByProvince']),
    },
    created(){
        this.provinceId = this.$route.params.provinceId;
        if(this.provinceId){
            this.getSuggestionTAByProvince(this.provinceId).then(response=>{
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