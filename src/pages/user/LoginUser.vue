<template>
	<div class="pageLogin-user">
		<div class="FormLogin-user">
		<h1 class="pageLogin-Title">Đăng nhập</h1>
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
			<div class="center">
				<v-btn color="success" type="submit" class="mr-4" @click="validate" width="100%">
					<span class="label__btn--login">Đăng nhập</span>
				</v-btn>
			</div>
			<div class="center">
				<a href="">Quên mật khẩu</a> |
				<a href="">Đăng ký tài khoản</a>
			</div>
			<div class="center">
				Đăng nhập nhanh
				<div>
					<i class="fa-brands fa-google icon--size"></i>
				</div>
			</div>
		</v-form>
	</div>
	</div>
</template>

<script>
import {mapActions, mapMutations} from 'vuex'
  export default {
    data: () => ({
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
		...mapActions(['loginMember']),
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
				this.loginMember({
					memberEmail: this.email, 
					memberPass: this.pass
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
								this.$router.push({name:"userIndex"})
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
.pageLogin-user{
	display: flex;
	align-items: center;
	justify-content: center;
	background: url("https://nld.mediacdn.vn/2018/3/2/20180228112510-15199665090941211429364.jpg");
	background-size: cover;
	height: 100vh;
}
:root{
	--form--height-1444: 410px;
	--form--width-1444: 620px;
	--form--height-1024: 400px;
	--form--width-1024: 500px;
	--form--height-768: 400px;
	--form--width-768: 400px;
	--form--height-480: 380px;
	--form--width-480: 350px;
	--form--height-320: 380px;
	--form--width-320: 280px;

}
.FormLogin-user {
	position: relative;
	height: var(--form--height-1444);
	width: var(--form--width-1444);
	background: white;
	border-radius: 20px;
	box-shadow: 3px -3px 3px #aaa;
	animation: 1.5s growth ease;
}
@keyframes growth {
	from{
		top: 30px
	}
	to{
		top: 0px
	}
}
.pageLogin-Title {
	text-align: center;
	background-color: red;
	border-radius: 20px 20px 0px 0px;
	color: white;
	padding: 10px;
}

.FormLogin-user .pageLogin-form{
	padding: 10px;
}
.center{
	text-align: center;
}
.center + .center{
	margin-top: 20px;
}
.icon--size{
	font-size: 30px;
	color: rgb(255, 255, 255);
	padding: 5px;
	background: red;
	border-radius: 5px;
	margin-top: 2px;
}
.label__btn--login{
  	font-size: 17px;
}
.v-label{
  	font-size: 18px !important;
}
.v-btn{
    text-transform: none;
}
@media (max-width:1024px) {
	.v-label{
		font-size: 18px !important;
	}
	.FormLogin-user {
		height: var(--form--height-1024);
		width: var(--form--width-1024);
	}
	.pageLogin-Title {
		font-size: 29px
	}
}
@media (max-width:768px) {
    .v-label{
        font-size: 17px !important;
    }
    .FormLogin-user {
		height: var(--form--height-768);
		width: var(--form--width-768);
    }
    .pageLogin-Title {
        font-size: 28px
    }
}
@media (max-width:480px) {
	.v-label{
		font-size: 16px !important;
		}
	.FormLogin-user {
		height: var(--form--height-480);
		width: var(--form--width-480);
	}
	.pageLogin-Title {
		font-size: 20px
	}
}
@media (max-width:320px) {
	*{
		font-size: 14px;
	}
	.FormLogin-user {
		height: var(--form--height-320);
		width: var(--form--width-320);
	}
	.pageLogin-Title {
		font-size: 20px
	}
}
</style>