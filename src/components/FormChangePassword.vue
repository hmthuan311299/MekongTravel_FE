<template>
    <div class="container-changePassword">
        <div class="box-changePassWord">
            <h2 class="text-white text-center my-3 text-danger">Đổi mật khẩu</h2>
            <v-form class="mx-5 form-changePassword" ref="form">
                <v-text-field
                    v-model="oldPass"
                    label="Mật khẩu cũ"
                    required
                ></v-text-field>
                <v-text-field
                    v-model="newPass"
                    label="Mật khẩu mới"
                    required
                ></v-text-field>
                <v-text-field
                    v-model="reNewPass"
                    label="Nhập lại mật khẩu mới"
                    required
                ></v-text-field>
                <div class="center mt-3">
                    <v-btn color="success" class="p-4" width="18%" @click="handleChangePass()">
                        <span class="input-label">Gửi</span>
                    </v-btn>
                    <v-btn color="error" class="p-4 ml-2" width="18%">
                        <span class="input-label" @click="handleCancel">Trở về</span>
                    </v-btn>
                </div>
            </v-form>
        </div>
    </div>
</template>

<script>
import {mapMutations} from 'vuex'
export default {
    name: 'form-change-password',
    data(){
        return{
            oldPass: '',
            newPass: '',
            reNewPass:''
        }
    },
    methods:{
        ...mapMutations(['setLoadingSuccess', 'setLoadingError', 'setPageLoading']),
        handleChangePass(){
            var {oldPass, newPass, reNewPass} = this;
            if(!oldPass || !newPass || !reNewPass ){
                let value ={
					display: true,
					message: "Dữ liệu nhập vào chưa đúng"
				}
				this.setLoadingError(value)
				setTimeout(()=>{
						this.commentContent='';
						this.setLoadingError({display: false})
				}, 1500);
            }else{
                if(newPass == oldPass){
                    let value ={
                        display: true,
                        message: "Mật khẩu mới không được giống mật khẩu cũ"
                    }
                    this.setLoadingError(value)
                    setTimeout(()=>{
                            this.commentContent='';
                            this.setLoadingError({display: false})
                    }, 1500);
                }else{
                    if(newPass != reNewPass){
                        let value ={
                            display: true,
                            message: "Mật khẩu mới nhập lại không khớp"
                        }
                        this.setLoadingError(value)
                        setTimeout(()=>{
                                this.commentContent='';
                                this.setLoadingError({display: false})
                        }, 1500);
                    }
                    else {
                        this.$emit('handleChangePass', {oldPass, newPass, reNewPass})
                        this.oldPass= '',
                        this.newPass= '',
                        this.reNewPass= ''
                    }
                }
                
            }
            
        },
        handleCancel(){
            this.$router.push({name: 'userIndex'})
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
        border-radius: 20px;
        background: white
    }
    .form-changePassword{
        display:flex;
        flex-direction: column;
        justify-content: center;
    }
</style>