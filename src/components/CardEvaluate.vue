<template>
  <div v-if="listEvaluate.length" :class="propsClass">
    <div class="mb-1" v-for="(item, index) in listEvaluate" :key="index">
        <div class="user-card-evaluate p-2 mx-1 ">
            <div>
                <div class="user-logo-name-time">
                    <div>
                    <img
                        v-if="!item.memberavatar"
                        src="../assets/user-img/user.png"
                        class="user-avatar-evaluate"
                        alt=""
                    />
                    <img
                        v-else
                        :src="`${port_file}${item.memberavatar}`"
                        class="user-avatar-evaluate"
                        alt=""
                    />
                    {{ item.membername }}
                    </div>
                    <div>
                    <i>{{ item.createat }}</i>
                    <i v-if="isSupporter" class="fa-solid fa-circle-xmark ml-2 text-danger" @click="handleDelete({memberId: item.memberid, tourId: item.tourid})"></i>
                    </div>
                </div>
                <div>
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star"></span>
                    <span class="fa fa-star"></span>
                </div>
                <div>
                    {{ item.evaluatecontent }}
                </div>
            </div>
        </div>
    </div>
    <FormYesNo :isDisplayYesNoForm="isDisplayYesNoForm" v-on:handleConfirm="handleConfirm"/> 
  </div>
  <div v-else>
    <p>Địa điểm chưa có đánh giá nào</p>
  </div>
</template>

<script>
import FormYesNo from '../components/FormYesNo.vue'
import port_file from '../port_file'
import {mapActions, mapState, mapMutations} from 'vuex'
export default {
    name: 'card-evaluate',
    data(){
        return{
            listEvaluate:[],
            value: {},
            isDisplayYesNoForm:{
            display: false,
            titleForm: 'Form xác nhận',
            answer: ''
			},
            port_file

        }
    },
    
    props:{
        tourId: String,
        propsClass:String,
        isSupporter: {
            type: Boolean,
            default: false
        }
    },
    components:{
        FormYesNo
    },
    methods:{
        ...mapMutations(['setLoadingSuccess', 'setLoadingError', 'setPageLoading']),
        ...mapActions(['getEvaluate', 'deleteEvaluate']),
        handleEvaluate(tourId){
            this.getEvaluate(tourId).then(response=>{
                if(response.ok){
                    this.listEvaluate = response.data
                }
            })
        },
        handleDelete(value){
            this.isDisplayYesNoForm.display = true;
            this.isDisplayYesNoForm.titleForm="Xác nhận xóa?";
            this.value = value;
            console.log(this.value)
        },
		handleConfirm(value){
			if(value == 'yes'){
				this.isDisplayYesNoForm.titleForm= "";
				this.answer=""
				this.deleteEvaluate({memberId: this.value.memberId, tourId: this.value.tourId}).then(response=>{
                    if(response.ok){
                        this.handleEvaluate(this.tourId);
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
		},
        callFormError(message){
            let value ={
                display: true,
                message: message
            }
            this.setLoadingError(value)
            setTimeout(()=>{
                this.setLoadingError({display: false})
            }, 1200);
        },
    },
    created(){
        this.handleEvaluate(this.tourId);
    }
};
</script>

<style>
.fa-circle-xmark{
    font-size: 1.3rem
}
.fa-circle-xmark:hover{
    cursor: pointer;
    font-size: 1.4rem
}
</style>