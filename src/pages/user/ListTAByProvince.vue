<template>
  <div>
        <div v-if="listTAByProvince && listTAByProvince.length">
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
    },
    created(){
        this.provinceId = this.$route.params.provinceId;
        if(this.provinceId){
            this.getListTAByProvince(this.provinceId).then(response=>{
                if(response.ok){
                    this.listTAByProvince= response.data
                    console.log(response.data)
                }
            })
        }
    }
}
</script>

<style>

</style>