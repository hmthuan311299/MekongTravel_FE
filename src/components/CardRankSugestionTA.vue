<template>
  <div class="box-listRank">
        <div v-if="listTA && listTA.length">
           <div v-for="(item,index) in listTA" :key="index" @click="handleRouterPush(item.provincetitle, item.tourid)" class="display-flex mt-2 box-listRank-border">
               <img 
                    :src="`${port_file}${item.tourpicture}`" 
                    alt=""
                    width="200px"
                    height="140px"
                />
                <div class="m-2">
                    <h5 class="listRank-title text-danger">{{item.tourtitle}}</h5>
                    <p class="card-text" v-if="item.avg">
                        Xếp hạng: {{format_NumberEvaluate(item.avg)}} <span class="fa fa-star checked"></span>
                        ({{item.numbereval}} đánh giá)
                    </p>
                    <i class="card-text" v-else>
                        (Hiện tại chưa có đánh giá nào)
                    </i>
                    <p class="mt-1"><i class="fa-solid fa-location-dot"></i> {{item.touraddress}}</p>
                </div>
           </div>
        </div>
        <div v-else>
            <p class="text-center m-0 mb-3">Xin lối! hiện tại chưa có dữ liệu tại tỉnh thành này</p>
        </div>
  </div>
</template>

<script>
import port_file from '../port_file'
import {removeVietnameseFromString} from '../helpers'
import CardTouristAttraction from '../components/CardTouristAttraction.vue'
import {mapActions} from 'vuex'
export default {
    name: 'card-rank-suggest',
    components:{
        CardTouristAttraction
    },
    data(){
        return{
            
            port_file
        }
    },
    props:{
        listTA:Array, default: [],
    },
    computed:{
    },
    methods:{
        ...mapActions(['getRankTAByProvince']),
        format_NumberEvaluate(value){
            var num = parseFloat(value)
            return num.toFixed(1);
        },
        handleremoveVietnameseProvinceTitle(provinceTitle){
			return removeVietnameseFromString(provinceTitle);
		},
        handleRouterPush(provincetitle, tourid){
			this.$router.push({path: `/province/${this.handleremoveVietnameseProvinceTitle(provincetitle)}/listAllTouristAttraction/detailTouristAttraction/${tourid}`})
		},
    },
}
</script>

<style>
.box-listRank{
    width: 100vmin;
    margin: 0 auto
}
.listRank-title{
    font-size: 4vmin
}
.display-flex{
    display: flex;
}
.box-listRank-border{
    border: 1px solid black;
    padding: 3px;
    border-radius: 5px
}
</style>e>