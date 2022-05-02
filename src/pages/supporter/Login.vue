<template>
    <div class="PageLogin-technician" v-bind:style="{ 'background-image': 'url(' + image + ')'}">
        <div class="FormLogin-technician">
            <div class="logo-login-tech">
                <img class="logo__loginTech--size" :src="logoSupporter" alt="">
            </div>
            <div class="form-login-tech">
                <h1 class="pageLoginTech-Title">
                    <i class="fa-solid fa-users"></i> Đăng nhập
                </h1>
                <v-form class="pageLogin-form" ref="form" v-model="valid" lazy-validation @submit.prevent="handleLogin"> 
                    <v-text-field
                        v-model="email"
                        :rules="emailRules"
                        label="E-mail"
                        required
                    ></v-text-field>
                    <v-text-field
                        v-model="pass"
                        label="Password"
                        type="password"
                        required
                    ></v-text-field>
                    <div class="center" style="margin-top: 10px">
                        <button-success title="Đăng nhập" btnWidth="100%"/>
                    </div>
                    <div class="center">
                        <router-link :to="{name: 'supporterForgetPassword'}">Lấy lại mật khẩu</router-link>
                    </div>
                </v-form>
            </div>
	    </div>
    </div>
</template>

<script>
import image from '../../assets/background/Background-2.jpg'
import logoSupporter from '../../assets/technician-img/logo-login-technician.png'
import {mapActions, mapMutations} from 'vuex'
import ButtonSuccess from '../../components/ButtonSuccess.vue'
export default {
    components: { ButtonSuccess }, 
    name: "supporter-login",
    data: () => ({
        image,
        logoSupporter,
        valid: false,
        name: '',
        pass:'',
        email: '',
        emailRules: [
            v => !!v || 'E-mail is required',
            v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
        ],
    }),

    methods:{
		...mapMutations(['setLoadingSuccess', 'setLoadingError', 'setPageLoading']),
		...mapActions(['loginSupporter']),
		validate() {
			this.$refs.form.validate()
		},
		handleLogin(){
			if(!this.valid){
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
				this.loginSupporter({
					suppEmail: this.email, 
					suppPass: this.pass
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
								this.commentContent='';
								this.setLoadingSuccess({display: false})
								this.$router.push({name:"supporter"})
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
								this.commentContent='';
								this.setLoadingError({display: false})
							}, 1500);
						}, 1000);
					}
				})
			}
		}
    },
}

</script>

<style>
#app {
}
.PageLogin-technician{
    display: flex;
	align-items: center;
	justify-content: center;
	background-size: cover;
    height: 100vh
}
:root{
    --form__tech--height-1444: 420px;
    --form__tech--width-1444: 820px;
    --logo__loginTech-1444: 260px;
    --form--login-tech-height-1444: 360px;
    --form--login-tech-width-1444: 460px;

    --form__tech--height-1024: 380px;
    --form__tech--width-1024: 700px;
    --logo__loginTech-1024: 220px;
    --form--login-tech-height-1024: 300px;
    --form--login-tech-width-1024: 380px;
    
    --form__tech--height-768: 350px;
    --form__tech--width-768: 560px;
    --logo__loginTech-768: 200px;
    --form--login-tech-height-768: 300px;
    --form--login-tech-width-768: 280px;

    --form__tech--height-480: 400px;
    --form__tech--width-480: 350px;
    --logo__loginTech-480: 40px;
    --form--login-tech-height-480: 300px;
    --form--login-tech-width-480: 250px;

    --form__tech--height-320: 380px;
    --form__tech--width-320: 280px;
    --logo__loginTech-320: 40px;
    --form--login-tech-height-320: 300px;
    --form--login-tech-width-320: 220px;

}
.FormLogin-technician {
	position: relative;
	height: var(--form__tech--height-1444);
	width: var(--form__tech--width-1444);
	background: white;
	border-radius: 20px;
	box-shadow: 3px -3px 3px #aaa;
	animation: 1.5s growth ease;

    display: flex;
    justify-content: space-around;
    align-items: center;
}
@keyframes growth {
	from{
		top: 30px
	}
	to{
		top: 0px
	}
}
.logo__loginTech--size{
    height: var(--logo__loginTech-1444);
    width: var(--logo__loginTech-1444);
}
.form-login-tech{
    height: var(--form--login-tech-height-1444);
    width: var(--form--login-tech-width-1444);
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
}
.pageLoginTech-Title {
	text-align: center;
	background-color: rgb(255,165,0);
	border-radius: 10px 10px 0px 0px;
	color: white;
	padding: 5px;
    margin-bottom:5px
}
.label__btn--login{
    color: white;
    font-size: 18px !important
}
.v-btn{
    text-transform: none;
}
.v-label{
  	font-size: 18px !important;
}
@media (max-width:1024px) {
    .FormLogin-technician {
        height: var(--form__tech--height-1024);
        width:  var(--form__tech--width-1024);
    }
    .logo__loginTech--size{
        height: var(--logo__loginTech-1024);
        width:  var(--logo__loginTech-1024);
    }
	.form-login-tech{
        height: var(--form--login-tech-height-1024);
        width:  var(--form--login-tech-width-1024);
    }
}
@media (max-width:768px) {
    *{
        font-size: 14px;
    }
   .FormLogin-technician {
        height: var(--form__tech--height-768);
        width:  var(--form__tech--width-768);
    }
    .logo__loginTech--size{
        height: var(--logo__loginTech-768);
        width:  var(--logo__loginTech-768);
    }
	.form-login-tech{
        height: var(--form--login-tech-height-768);
        width:  var(--form--login-tech-width-768);
    }
    .pageLogin-Title{
        font-size: 25px;
    }
    .label__btn--login{
        color: white;
        font-size: 14px !important
    }
    .v-label{
        font-size: 14px !important;
    }
}
@media (max-width:480px) {
   .FormLogin-technician {
        height: var(--form__tech--height-480);
        width:  var(--form__tech--width-480);
        display: flex;
        flex-direction: column;
        justify-content: center;
    }
    .logo__loginTech--size{
        height: var(--logo__loginTech-480);
        width:  var(--logo__loginTech-480);
    }
	.form-login-tech{
        height: var(--form--login-tech-height-480);
        width:  var(--form--login-tech-width-480);
    }
    .pageLogin-Title{
        font-size: 20px;
    }
    .label__btn--login{
        color: white;
        font-size: 14px !important
    }
    .v-label{
        font-size: 14px !important;
    }
}
@media (max-width:320px) {
	.FormLogin-technician {
        height: var(--form__tech--height-320);
        width:  var(--form__tech--width-320);
        display: flex;
        flex-direction: column;
        justify-content: center;
    }
    .logo__loginTech--size{
        height: var(--logo__loginTech-320);
        width:  var(--logo__loginTech-320);
    }
	.form-login-tech{
        height: var(--form--login-tech-height-320);
        width:  var(--form--login-tech-width-320);
    }
    .pageLogin-Title{
        font-size: 20px;
    }
    .label__btn--login{
        color: white;
        font-size: 14px !important
    }
    .v-label{
        font-size: 14px !important;
    }
}
</style>