<template>
  <div>  
      <h2 class="text-white text-center my-5 text-danger">Danh sách địa điểm đã lưu</h2>
        <div v-if="listSaveTourist && listSaveTourist.length">
            <div 
                v-for="card in listSaveTourist" :key="card.tourid" class="card mb-3" style="width: 24rem;" 
            >
                <img @click="handleRouterPush(card.provincetitle, card.tourid)" :src="`${port_file}${card.tourpicture}`" class="card-img-top" alt="...">
                <div class="card-body">
                    <div @click="handleRouterPush(card.provincetitle, card.tourid)">
                        <h5 class="card-title">{{card.tourtitle}}</h5>
                        <p class="card-text" style="height: 3rem"><i class="fa-solid fa-map-location text-primary"></i> {{card.touraddress}}</p>
                        <p class="card-text"><i class="fa-solid fa-city text-primary"></i> {{card.provincetitle}}</p>
                        <p class="card-text">Xếp hạng
                            <span class="fa fa-star checked"></span>
                            <span class="fa fa-star checked"></span>
                            <span class="fa fa-star checked"></span>
                            <span class="fa fa-star"></span>
                            <span class="fa fa-star"></span>
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
                        console.log('this.listSaveTourist', this.listSaveTourist)
                    }
                })
            }
        }
    }
}
</script>

<style>

</style>