<template>
    <div class="pageLogin-user" v-bind:style="{ 'background-image': 'url(' + image + ')'}">
        <div class="container-changePassword">
            <div class="box-changePassWord">
                <h2 class="text-white text-center my-3 text-danger">Đăng ký tài khoản</h2>
                <v-form class="mx-5 form-changePassword" ref="form" @submit.prevent="handleSignUp()">
                    <v-text-field
                        v-model="name"
                        label="Tên"
                        required
                    ></v-text-field>
                    <v-text-field
                        v-model="email"
                        :rules="emailRules"
                        label="E-mail"
                        required
                    ></v-text-field>
                    <v-text-field
                        v-model="pass"
                        type="Password"
                        label="Mật khẩu"
                        required
                    ></v-text-field>
                    <v-text-field
                        v-model="rePass"
                        type="Password"
                        label="Nhập lại mật khẩu mới"
                        required
                    ></v-text-field>
                    <div class="center mt-3">
                        <button-success title="Gửi" btnWidth="50%" btnType="submit"/>
                        <button-error title="Trở về" routeName='userLogin'/>
                    </div>
                </v-form>
            </div>
        </div>
    </div>
</template>

<script>
import image from '../../assets/background/Background-1.jpg'
import ButtonSuccess from '../../components/ButtonSuccess.vue'
import ButtonError from '../../components/ButtonError.vue'
import {mapActions, mapMutations} from 'vuex'
  export default {
    components:{
        ButtonSuccess, ButtonError
    },
    
    data: () => ({
        image,
        valid: false,
        name: '',
        pass:'',
        email: '',
        rePass:'',
        emailRules: [
            v => !!v || 'E-mail is required',
            v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
        ],
    }),

    methods:{
		...mapMutations(['setLoadingSuccess', 'setLoadingError', 'setPageLoading']),
		...mapActions(['signUpMember']),
		validate() {
			this.$refs.form.validate()
		},
		handleSignUp(){
            var {name, pass, email, rePass} = this
			if(!name || !pass || !email || !rePass){
				let value ={
					display: true,
					message: "Dữ liệu nhập vào chưa đúng"
				}
				this.setLoadingError(value)
				setTimeout(()=>{
						this.setLoadingError({display: false})
				}, 1500);
			}else{
				if(pass == rePass){
                    this.signUpMember({
					memberEmail: email, 
					memberPass: pass,
                    memberName: name
                    }).then(response=>{
                        if(response.ok){
                            let value ={
                                display: true,
                                message: response.message
                            }
                            this.setPageLoading(true)
                            setTimeout(()=>{
                                this.setPageLoading(false)
                                this.setLoadingSuccess(value)
                                setTimeout(()=>{
                                    this.setLoadingSuccess({display: false})
                                    this.$router.push({name:"userLogin"})
                                }, 1500);
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
                                }, 1500);
                            }, 1000);
                        }
                    })
                }else{
                    let value ={
					display: true,
					message: "Mật khẩu không khớp"
                    }
                    this.setLoadingError(value)
                    setTimeout(()=>{
                            this.setLoadingError({display: false})
                    }, 1200);
                }
			}
		}
    },
  }

</script>

<style scoped>
.box-changePassWord{
    height: 450px
}
</style>