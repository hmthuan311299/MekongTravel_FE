<template>
    <form-change-password @handleChangePass="handleChangePass"/>
</template>

<script>
import {mapActions, mapMutations, mapState} from 'vuex'
import FormChangePassword from '../../components/FormChangePassword.vue'
export default {
  components: { FormChangePassword },
    name: 'user-ChangePassword',
    data(){
        return{
            oldPass: '',
            newPass: '',
            reNewPass:''
        }
    },
    computed:{
        
        ...mapState({memberId: state=> state.member.currentMember.memberid})
    },
    methods:{
        ...mapMutations(['setLoadingSuccess', 'setLoadingError', 'setPageLoading']),
        ...mapActions(['userChangePassword']),
        resetForm(){
            this.oldPass = '',
            this.newPass = '',
            this.reNewPass = ''
        },
        handleChangePass({oldPass, newPass, reNewPass}){
            console.log({oldPass, newPass, reNewPass})
            this.userChangePassword({oldPass, newPass, memberId: this.memberId}).then(response=>{
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
                            this.resetForm;
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
        }
    }
}
</script>

<style>
    .container-changePassword{
        display: flex;
        justify-content: center;
        align-items: center;
        min-height: 80vh;
    }
    .box-changePassWord{
        height: 360px;
        width: 75vmin;
        box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
        border-radius: 20px
    }
    .form-changePassword{
        display:flex;
        flex-direction: column;
        justify-content: center;
    }
</style>