<template>
  <div class="pageLogin-user">
    <h1 class="pageLogin-Title">Đăng nhập</h1>
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
			<div class="center">
				<v-btn color="success" class="mr-4" @click="validate" width="100%">
				Đăng nhập
			</v-btn>
			</div>
			<div class="center">
				<a href="">Quên mật khẩu</a> |
				<a href="">Đăng ký tài khoản</a>
			</div>
			<div class="center">
				Đăng nhập nhanh với
				<div>
					
				</div>
			</div>
		</v-form>
  </div>
</template>

<script>
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

    methods: {
      validate () {
        this.$refs.form.validate()
      },
    },
  }
</script>

<style>
#app {
  display: flex;
  align-items: center;
  justify-content: center;
}
.pageLogin-user {
  width: 600px;
  height: 400px;
  background: white;
  border-radius: 20px;
  box-shadow: 3px -3px 3px #aaa;
}
.pageLogin-Title {
  text-align: center;
  background-color: red;
  border-radius: 20px 20px 0px 0px;
  color: white;
  padding: 10px;
}
.pageLogin-user .pageLogin-form{
	padding: 10px;
}
.center{
	text-align: center;
}
.center + .center{
	margin-top: 20px;
}
</style>