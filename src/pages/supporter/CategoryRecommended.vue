<template>
    <div>
        <h1 class="text-center text-danger">Duyệt đề xuất địa điểm mới</h1>
        <div class="supporter-list-container" v-if="ListTA">
            <div class="supporter-list-content"  v-for="item in ListTA" :key="item.recommendid">
                <div class="supporter-list-content-item" style="width: 45%">
                    <div class="supporter-list-item supporter-list-item-avatar"><i class="fa-solid fa-map-location-dot"></i></div>
                    <div class="supporter-list-item supporter-list-item-name">{{item.recommendtitle}}</div>
                </div>
                <div class="supporter-list-item supporter-list-item-name"> <span class="span-fs">{{item.provincetitle}}</span></div>
                <div class="supporter-list-content-item">
                    <router-link tag="div" class="supporter-list-item supporter-list-item-update" :to="{name: 'approvalRecommended', params:{id: item.recommendid}}">
                        <i class="fa-solid fa-pen-to-square"></i>
                    </router-link>
                    <div class="supporter-list-item supporter-list-item-delete" @click="handleDelete(item.recommendid)"><i class="fa-solid fa-trash-can"></i></div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import {mapActions} from 'vuex';
export default {
    name: "categoryReTA",
    data(){
        return{
            ListTA: [
                
            ],
            recommendId,
            isDisplayYesNoForm:{
				display: false,
				titleForm: 'Form xác nhận',
				answer: ''
			},
        }
    },
    methods:{
        ...mapActions(['getListReTA', 'deleteRecommended']),
        handleUpdate(value){
            console.log(value)
        },
        handleDelete(value){
            this.isDisplayYesNoForm.display = true;
            this.isDisplayYesNoForm.titleForm= 
            "Xác nhận xóa địa điểm";
            this.recommendId = value;
        },
		handleConfirm(value){
			if(value == 'yes'){
				this.isDisplayYesNoForm.titleForm= "";
				this.answer=""
				this.deleteRecommended(this.recommendId).then(response=>{
                    if(response.ok){
                        this.getListReTA().then(response=>{
                            if(response.ok){
                                this.listTA = response.data
                            }
                        });
                        this.isDisplayYesNoForm.display = false;
                        this.isDisplayYesNoForm.titleForm= "";
                        this.answer=""
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
                            }, 1200);
                        }, 1000);
                    }else{
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
                                this.isDisplayYesNoForm.display = false;
                                this.isDisplayYesNoForm.titleForm= "";
                                this.answer=""
                            }, 1200);
                        }, 1000);
                    }
                })
			}
			else{
				this.isDisplayYesNoForm.display = false;
				this.isDisplayYesNoForm.titleForm= "";
				this.answer=""
			}
		}
    },
     components:{
    },
    created(){
        this.getListReTA().then(response=>{
            if(response.ok){
                this.ListTA = response.data
            }
        })
    }
}
</script>

<style>

</style>