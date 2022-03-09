<template>
  <div>
       <p class="text-center m-0 mb-3" >Danh sách tất cả địa điểm</p>
	   <card-touristAttraction :listTA="listTA"/>
  </div>
</template>

<script>
import CardTouristAttraction from '../../components/CardTouristAttraction.vue'
import {mapState} from 'vuex'
export default {
    name: 'list-all-ta',
    components:{
        CardTouristAttraction
    },
    data(){
        return{
            
        }
    },
    computed:{
        ...mapState({
			listTA: state => state.touristAttraction.listTouristAttraction
		})
    }
}
</script>

<style>

</style>