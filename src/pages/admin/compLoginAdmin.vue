<template>
    <div class="PageLogin-admin">
        <div class="FormLogin-admin">
            <div class="logo-login-admin">
                <img class="logo__loginAdmin--size" src="../../assets/admin-img/logo-login-admin.png" alt="">
            </div>
            <div class="form-login-admin">
                <h1 class="pageLoginAdmin-Title">
                    <i class="fa-solid fa-user-gear"></i> Đăng nhập
                </h1>
                <v-form class="pageLogin-form" ref="form" v-model="valid" lazy-validation>
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
                        <v-btn color="blue" class="mr-4" @click="validate" width="100%">
                            <span class="label__btn--login">Đăng nhập</span>
                        </v-btn>
                    </div>
                    <div class="center">
                        <a href="">Lấy lại mật khẩu</a>
                    </div>
                </v-form>
            </div>
	    </div>
    </div>
</template>

<script>
export default {
    name: "comp-login-admin",
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

    methods: {
      validate () {
        this.$refs.form.validate()
      },
    },
}

</script>

<style>
#app {
}
.PageLogin-admin{
    display: flex;
	align-items: center;
	justify-content: center;
	background: url("../../assets/admin-img/background-admin.jpg");
	background-size: cover;
    height: 100vh
}
:root{
    --form__admin--height-1444: 420px;
    --form__admin--width-1444: 820px;
    --logo__loginAdmin-1444: 260px;
    --form--login-admin-height-1444: 360px;
    --form--login-admin-width-1444: 460px;

    --form__admin--height-1024: 380px;
    --form__admin--width-1024: 700px;
    --logo__loginAdmin-1024: 220px;
    --form--login-admin-height-1024: 300px;
    --form--login-admin-width-1024: 380px;
    
    --form__admin--height-768: 350px;
    --form__admin--width-768: 560px;
    --logo__loginAdmin-768: 200px;
    --form--login-admin-height-768: 300px;
    --form--login-admin-width-768: 280px;

    --form__admin--height-480: 400px;
    --form__admin--width-480: 350px;
    --logo__loginAdmin-480: 40px;
    --form--login-admin-height-480: 300px;
    --form--login-admin-width-480: 250px;

    --form__admin--height-320: 380px;
    --form__admin--width-320: 280px;
    --logo__loginAdmin-320: 40px;
    --form--login-admin-height-320: 300px;
    --form--login-admin-width-320: 220px;

}
.FormLogin-admin {
	position: relative;
	height: var(--form__admin--height-1444);
	width: var(--form__admin--width-1444);
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
.logo__loginAdmin--size{
    height: var(--logo__loginAdmin-1444);
    width: var(--logo__loginAdmin-1444);
}
.form-login-admin{
    height: var(--form--login-admin-height-1444);
    width: var(--form--login-admin-width-1444);
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
}
.pageLoginAdmin-Title {
	text-align: center;
	background-color: rgb(255, 0, 0);
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
    .FormLogin-admin {
        height: var(--form__admin--height-1024);
        width:  var(--form__admin--width-1024);
    }
    .logo__loginAdmin--size{
        height: var(--logo__loginAdmin-1024);
        width:  var(--logo__loginAdmin-1024);
    }
	.form-login-admin{
        height: var(--form--login-admin-height-1024);
        width:  var(--form--login-admin-width-1024);
    }
}
@media (max-width:768px) {
    *{
        font-size: 14px;
    }
   .FormLogin-admin {
        height: var(--form__admin--height-768);
        width:  var(--form__admin--width-768);
    }
    .logo__loginAdmin--size{
        height: var(--logo__loginAdmin-768);
        width:  var(--logo__loginAdmin-768);
    }
	.form-login-admin{
        height: var(--form--login-admin-height-768);
        width:  var(--form--login-admin-width-768);
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
   .FormLogin-admin {
        height: var(--form__admin--height-480);
        width:  var(--form__admin--width-480);
        display: flex;
        flex-direction: column;
        justify-content: center;
    }
    .logo__loginAdmin--size{
        height: var(--logo__loginAdmin-480);
        width:  var(--logo__loginAdmin-480);
    }
	.form-login-admin{
        height: var(--form--login-admin-height-480);
        width:  var(--form--login-admin-width-480);
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
	.FormLogin-admin {
        height: var(--form__admin--height-320);
        width:  var(--form__admin--width-320);
        display: flex;
        flex-direction: column;
        justify-content: center;
    }
    .logo__loginAdmin--size{
        height: var(--logo__loginAdmin-320);
        width:  var(--logo__loginAdmin-320);
    }
	.form-login-admin{
        height: var(--form--login-admin-height-320);
        width:  var(--form--login-admin-width-320);
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