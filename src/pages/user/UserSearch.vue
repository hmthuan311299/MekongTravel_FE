<template>
  <div v-if="valueSearch">
        <div v-if="listTABySearch">
            <p class="text-center m-0 mb-3" >Có <span class="text-primary">{{listTABySearch.length}}</span> địa điểm với từ khóa: <span class="text-primary">{{valueSearch}}</span></p>
            <card-touristAttraction :listTA="listTABySearch"/>
        </div>
        <div v-else>
            <p class="text-center m-0 mb-3">Xin lối chúng tôi không tìm địa điểm nào với từ khóa: {{valueSearch}}</p>
        </div>
  </div>
</template>

<script>
import CardTouristAttraction from '../../components/CardTouristAttraction.vue'
import {mapState, mapActions} from 'vuex'
export default {
    name: 'list-search-ta',
    components:{
        CardTouristAttraction
    },
    data(){
        return{
            valueSearch: this.$route.query.valueSearch,
            listTABySearch:[]
        }
    },
    computed:{},
    methods:{
        ...mapActions(['getTouristAttractionBySearch']),
        handleSearch(valueSearch){
            if(valueSearch){
                this.getTouristAttractionBySearch(valueSearch).then(response=>{
                    if(response.ok){
                        this.listTABySearch = response.data
                    }
                })
            }
            else{
                this.$router.push({name:'userIndex'})
            }
        }
    },
    watch:{
        '$route'(to, form){
            this.valueSearch= to.query.valueSearch
            this.handleSearch(this.valueSearch)
        }
    },
    created(){
        this.valueSearch = this.$route.query.valueSearch;
        this.handleSearch(this.valueSearch);

    }
}
</script>

<style>

</style>