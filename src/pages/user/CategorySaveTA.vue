<template>
  <div>  
      <h2 class="text-white text-center my-5 text-danger">Danh sách địa điểm đã lưu</h2>
        <div class="container">
            <div v-if="listSaveTourist && listSaveTourist.length" class="row">
                <div 
                    v-for="card in listSaveTourist" :key="card.tourid" class="card my-1 col-md-4" style="width: 24rem;" 
                >
                    <img @click="handleRouterPush(card.provincetitle, card.tourid)" :src="`${port_file}${card.tourpicture}`" class="card-img-top" alt="...">
                    <div class="card-body">
                        <div @click="handleRouterPush(card.provincetitle, card.tourid)">
                            <h5 class="card-title">{{card.tourtitle}}</h5>
                            <p class="card-text" style="height: 3rem"><i class="fa-solid fa-map-location text-primary"></i> {{card.touraddress}}</p>
                            <p class="card-text"><i class="fa-solid fa-city text-primary"></i> {{card.provincetitle}}</p>
                            <div class="card-text" v-if="card.avg" style="margin-bottom: 16px">
                                Xếp hạng 
                                <span v-html="getStars(card.avg)"></span>
                                ({{parseFloat(card.avg).toFixed(1)}})
                            </div>
                            <p class="card-text" v-else>
                                Xếp hạng: <i>Hiện tại chưa có đánh giá nào</i>
                            </p>
                        </div>
                        <a  @click="handleDelete({memberId:card.memberid, tourId:card.tourid})" class="mt-3 btn btn-danger text-white w-100">Xóa</a>
                    </div>
                </div>
            </div>
            <template v-else>
                    <h5 class="text-center mt-10">Hiện tại bạn vẫn chưa lưu địa điểm nào hết</h5>
            </template>
        </div>
  </div>
</template>
<script>
import CardTouristAttraction from '../../components/CardTouristAttraction.vue'
import {mapActions, mapState, mapMutations} from 'vuex'
import port_file from '../../port_file'
import {parseJwt} from "../../helpers"
import { setToken } from "../../helpers/constans"
export default {
    name: 'list-ta-provinceid',
    components:{
        CardTouristAttraction
    },
    data(){
        return{
            listSaveTourist:[],
            port_file
        }
    },
    computed:{
        ...mapState({
            currentMember: state=> state.member.currentMember
        })
    },
    methods:{
        getStars(rating) {
			// Round to nearest half
			rating = Math.round(rating * 2) / 2;
			let output = [];
			// Append all the filled whole stars
			for (var i = rating; i >= 1; i--)
				output.push('<i class="fa fa-star" aria-hidden="true" style="color: gold;"></i>&nbsp;');
			// If there is a half a star, append it
			if (i == .5) output.push('<i class="fa-solid fa-star-half-stroke" style="color:yellow;"></i>&nbsp;');
			// Fill the empty stars
			for (let i = (5 - rating); i >= 1; i--)
				output.push('<i class="fa fa-star" aria-hidden="true"></i>&nbsp;');
			return output.join('');
		},
         ...mapMutations(['setLoadingSuccess', 'setLoadingError', 'setPageLoading']),
        ...mapActions(['getListSaveTourist', 'deleteSaveTA']),
        handleDelete({memberId, tourId}){
			this.deleteSaveTA({memberId, tourId}).then(response=>{
                if(response.ok){
                    let value = {
                        display: true,
                        message: response.message
                    }
                    this.setPageLoading(true)
                    setTimeout(()=>{
                        this.setPageLoading(false)
                        this.setLoadingSuccess(value)
                        setTimeout(()=>{
                            this.setLoadingSuccess({display: false});
							this.getListSaveTourist(this.currentMember.memberid).then(response=>{
                                if(response.ok){
                                    this.listSaveTourist = response.data
                                    console.log('this', this.listSaveTourist)
                                }
                            })
                        }, 1200);
                    }, 1000);
                }
                else{
                    let value ={
                        display: true,
                        message: response.message
                    }
                    this.setPageLoading(true)
                    setTimeout(()=>{
                        this.setPageLoading(false)
                        this.setLoadingError(value)
                        setTimeout(()=>{
                            this.setLoadingError({display: false})
                        }, 1200);
                    }, 1000);  
                }
            })
		},
        handleremoveVietnameseProvinceTitle(provinceTitle){
			return removeVietnameseFromString(provinceTitle);
		},
		handleRouterPush(provincetitle, tourid){
			this.$router.push({path: `/province/${this.handleremoveVietnameseProvinceTitle(provincetitle)}/listAllTouristAttraction/detailTouristAttraction/${tourid}`})
		},
    },
    created(){
        var getToken = localStorage.getItem(setToken) || null;
        if(getToken){
            var value = parseJwt(getToken);
            var memberId = value.memberid
            if(memberId){
                this.getListSaveTourist(memberId).then(response=>{
                    if(response.ok){
                        this.listSaveTourist = response.data
                    }
                })
            }
        }
    }
}
</script>

<style>

</style>