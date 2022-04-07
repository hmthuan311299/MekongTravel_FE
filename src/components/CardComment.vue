<template>
  <div v-if="listComment && listComment.length>0" :class="propsClass">
    <div class="user-card-evaluate p-2 mx-1 my-5" v-for=" comment in listComment" :key="comment.commentid">
        <div >
            <div class="user-logo-name-time">
                <div>
                    <img v-if="!comment.memberavatar" src="../assets/user-img/user.png" class="user-avatar-evaluate" alt="">
                    <img v-else :src="`${port_file}${comment.memberavatar}`" class="user-avatar-evaluate" alt="">
                    {{comment.membername}}
                </div>
                <i>{{comment.createat}}</i>
                <i class="fa-solid fa-circle-xmark ml-2 text-danger" @click="handleDelete(comment.commentid)"></i>

            </div>
            <div>
                {{comment.commentcontent}}
            </div>
            <span class="answer">Trả lời</span>
        </div>
    </div>
    <FormYesNo :isDisplayYesNoForm="isDisplayYesNoForm" v-on:handleConfirm="handleConfirm"/> 
  </div>
  <div v-else>
    <p>Địa điểm chưa có bình luận nào</p>
  </div>
  
</template>

<script>
import FormYesNo from '../components/FormYesNo.vue'
import {mapActions, mapState, mapMutations} from 'vuex'
export default {
    data(){
        return{
             listComment:[],
             value: {},
             isDisplayYesNoForm:{
				display: false,
				titleForm: 'Form xác nhận',
				answer: ''
			},
        }
    },
    props:{
        tourId: String,
        propsClass:String
    },
    components:{
        FormYesNo
    },
    methods:{
        ...mapMutations(['setLoadingSuccess', 'setLoadingError', 'setPageLoading']),
        ...mapActions(['getComment', 'deleteComment']),
        handleComment(tourId){
            console.log(tourId)
            this.getComment(tourId).then(response=>{
                if(response.ok){
                    this.listComment = response.data
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
				this.deleteComment(this.value).then(response=>{
                    if(response.ok){
                        this.handleComment(this.tourId);
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
        this.handleComment(this.tourId);
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