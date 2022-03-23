<template>
  <div class="container">
    <h1 class="text-center text-danger">Sửa thông tin Admin</h1>
    <v-form v-if="admin" ref="form" v-model="valid" lazy-validation @submit.prevent="handleUpdate">
        <v-text-field
			label="Họ Tên"
            :value="admin.adminname"
			ref="vTextName"
			@input="name = $refs.vTextName.internalValue"
            required
        ></v-text-field>
        <v-text-field
            :value="admin.adminemail"
			ref="vTextEmail"
			@input="email = $refs.vTextEmail.internalValue"
            :rules="emailRules"
            label="E-mail"
            required
        ></v-text-field>
        <div class="center mt-3">
            <v-btn color="success" type="submit" class="p-4" width="18%">
                <span class="input-label">Xác nhận</span>
            </v-btn>
            <v-btn color="error" class="p-4 ml-2" width="18%" @click="handleCancel">
                <span class="input-label" >Trở về</span>
            </v-btn>
        </div>
    </v-form>
  </div>
</template>
<script>
import {mapActions, mapState, mapMutations} from 'vuex'
export default {
    data: () => ({
        valid: true,
        emailRules: [
        (v) => !!v || "E-mail is required",
        (v) => /.+@.+\..+/.test(v) || "E-mail must be valid",
        ],
        select: null,
        items: ["Nam", "Nữ"],
        name: "",
        email: "",
        year: "",
        password: "",
        address: "",
        gender: null,
        numberPhone: '',
		
    }),
	computed:{
		...mapState({
            admin: state=> state.admin.admin
        }),
	},
    methods: {
        ...mapActions(['getAdmin','updateAdmin']),
        ...mapMutations(['setLoadingSuccess', 'setLoadingError', 'setPageLoading']),
        handleCancel(){
            this.$router.push({name: 'categoryProvince'})
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
        handleUpdate(){
			this.name = this.name ? this.name : this.admin.adminname
			this.email = this.email ? this.email : this.admin.adminemail
            if(this.name){
                if(this.email){
                    var value = {
                        adminName : this.name,
                        adminEmail: this.email,
                    }
                    this.updateAdmin(value).then(response=>{
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
                                    this.name = '',
                                    this.email = '',
                                    this.getAdmin();
                                }, 1000);
                            }, 1000);
                        }
                    })
                }
                else{
                    this.callFormError("Bạn cần nhập Email")
                }
            }else{
                this.callFormError("Bạn cần nhập họ tên")
            }
        },
    },
    
};
</script>

<style scoped>
.container {
  padding: 0 100px;
}
@media (max-width: 768px) {
  .container {
    padding: 0 20px;
  }
}
.input-label {
  font-size: 20px;
}
/* .input-label{
        font-size: 25px
    } */
</style>