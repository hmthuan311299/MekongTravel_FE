<template>
  <div>
       <p class="text-center m-0 mb-3" >Danh sách tất cả địa điểm</p>
	   <card-touristAttraction v-if="listTA.length" :listTA="listTA"/>
  </div>
</template>

<script>
import CardTouristAttraction from '../../components/CardTouristAttraction.vue'
import {mapActions} from 'vuex'
export default {
    name: 'list-all-ta',
    components:{
        CardTouristAttraction
    },
    methods:{
        ...mapActions(['getListTA'])
    },
    data(){
        return{
            listTA: []
        }
    },
    created(){
        this.getListTA().then(response=>{
		if(response.ok){
			this.listTA = response.data
		}
	})
    }
}
</script>

<style>

</style>