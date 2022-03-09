<template>
  <div>
        <div v-if="listTAByProvince.length">
            <card-touristAttraction :listTA="listTAByProvince"/>
        </div>
        <div v-else>
            <p class="text-center m-0 mb-3">Xin lối! hiện tại chưa có địa điểm nào ở tỉnh thành này</p>
        </div>
  </div>
</template>
<script>
import CardTouristAttraction from '../../components/CardTouristAttraction.vue'
import {mapActions} from 'vuex'
export default {
    name: 'list-ta-provinceid',
    components:{
        CardTouristAttraction
    },
    data(){
        return{
            listTAByProvince:[]
        }
    },
    computed:{
    },
    methods:{
        ...mapActions(['getListTAByProvince']),
        handleGetListByProvinceId(provinceId){
            console.log(provinceId)
            if(provinceId){
                this.getListTAByProvince(provinceId).then(response=>{
                    if(response.ok){
                        this.listTAByProvince= response.listData
                    }
                })
            }
            else{
                this.$router.push({name:'userIndex'})
            }
        }
    },
    watch:{
        '$route'(to, from){
            this.provinceId= to.params.provinceId
            this.handleGetListByProvinceId(this.provinceId)
        }
    },
    created(){
        this.provinceId = this.$route.params.provinceId;
        this.handleGetListByProvinceId(this.provinceId);

    }
}
</script>

<style>

</style>