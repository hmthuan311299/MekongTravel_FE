<template>
    <div class="admin-list-container" v-if="listMember && listMember.length">
        <div class="admin-list-content" v-for="member in listMember" :key="member.memberid">
            <div class="admin-list-content-item">
                <div class="admin-list-item admin-list-item-avatar"><i class="fa-solid fa-user"></i></div>
                <div class="admin-list-item admin-list-item-name">{{member.membername}}</div>
            </div>
            <div class="admin-list-content-item">
                <div v-if="$route.name=='categoryBlockedMember'" class="admin-list-item admin-list-item-update" @click="handleOpen(member.memberid)"><i class="fa-solid fa-lock-open"></i></div>
                <div v-else class="admin-list-item admin-list-item-update" @click="handleBlock(member.memberid)"><i class="fa-solid fa-ban"></i></div>
                <div class="admin-list-item admin-list-item-delete" @click="handleDelete(member.memberid)"><i class="fa-solid fa-trash-can"></i></div>
            </div>
        </div>
        <FormYesNo :isDisplayYesNoForm="isDisplayYesNoForm" v-on:handleConfirm="handleConfirm"/> 
    </div>
    <div v-else>
        <p class="text-center">Hiện tại chưa có thành viên nào</p>
    </div>
</template>

<script>
import FormYesNo from '../components/FormYesNo.vue'
import {mapActions, mapState, mapMutations} from 'vuex'
export default {
    data(){
        return{
            value: '',
            isDisplayYesNoForm:{
                display: false,
                titleForm: 'Form xác nhận',
                answer: ''
            },
        }
    },
    props:{
        listMember: Array,
    },
    components:{
        FormYesNo
    },
    methods:{
        ...mapMutations(['setLoadingSuccess', 'setLoadingError', 'setPageLoading', 'set_listMember']),
        ...mapActions(['deleteMember', 'setBlockedMember', 'setOpenMember']),
        
        handleDelete(value){
            this.isDisplayYesNoForm.display = true;
            this.isDisplayYesNoForm.titleForm="Bạn muốn xóa người dùng này xóa?";
            this.value = value;
            console.log(value)
        },
        handleBlock(value){
            this.isDisplayYesNoForm.display = true;
            this.isDisplayYesNoForm.titleForm="Bạn muốn khóa người dùng này?";
            this.value = value;
            console.log(value)
        },
        handleOpen(value){
            this.isDisplayYesNoForm.display = true;
            this.isDisplayYesNoForm.titleForm="Mở khóa người dùng này?";
            this.value = value;
            console.log(value)
        },
		handleConfirm(value){
			if(value == 'yes'){
                if(this.isDisplayYesNoForm.titleForm=="Bạn muốn xóa người dùng này xóa?"){
                    this.isDisplayYesNoForm.titleForm= "";
				    this.answer=""
                    this.deleteMember(this.value).then(response=>{
                        if(response.ok){
                            var newArr = this.listMember.filter(item=> item.memberid !== this.value)
                            this.set_listMember(newArr);
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
                if(this.isDisplayYesNoForm.titleForm=="Bạn muốn khóa người dùng này?"){
                    this.isDisplayYesNoForm.titleForm= "";
				    this.answer=""
                    this.setBlockedMember(this.value).then(response=>{
                        if(response.ok){
                            var newArr = this.listMember.filter(item=> item.memberid !== this.value)
                            this.set_listMember(newArr);
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
                if(this.isDisplayYesNoForm.titleForm=="Mở khóa người dùng này?"){
                    this.isDisplayYesNoForm.titleForm= "";
				    this.answer=""
                    this.setOpenMember(this.value).then(response=>{
                        if(response.ok){
                            var newArr = this.listMember.filter(item=> item.memberid !== this.value)
                            this.set_listMember(newArr);
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
			}else{
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
}
</script>

<style>

</style>