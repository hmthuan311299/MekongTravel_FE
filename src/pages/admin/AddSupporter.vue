<template>
  <div class="container">
    <h1 class="text-center text-danger">Thêm Hỗ trợ viên</h1>
    <v-form ref="form" v-model="valid" lazy-validation @submit.prevent="handleAdd">
        <v-text-field
            v-model="name"
            label="Họ Tên"
            required
        ></v-text-field>
        <v-text-field
            v-model="email"
            :rules="emailRules"
            label="E-mail"
            required
        ></v-text-field>
        <v-text-field
            v-model="password"
            label="Mật khẩu"
            required
        ></v-text-field>
        <v-text-field
            v-model="address"
            label="Địa chỉ"
            required
        ></v-text-field>
        <v-text-field
            v-model="year"
            label="Năm sinh"
            required
        ></v-text-field>
        <v-select
            v-model="gender"
            :items="items"
            :rules="[(v) => !!v || 'Item is required']"
            label="Giới tính"
            required
        ></v-select>
        <v-text-field
          v-model="numberPhone"
          label="Số điện thoại (Không bắt buộc)"
        ></v-text-field>
        <div class="center mt-3">
            <v-btn color="success" type="submit" class="p-4" width="18%">
                <span class="input-label">Thêm</span>
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
        numberPhone: ''
    }),
    methods: {
            ...mapActions(['addSupporter']),
            ...mapMutations(['setLoadingSuccess', 'setLoadingError', 'setPageLoading']),
            handleCancel(){
                this.$router.push({name: 'categorySupporter'})
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
            handleAdd(){
                if(this.name){
                    if(this.email){
                        if(this.password){
                            if(this.address){
                                if(this.gender){
                                    var value = {
                                        suppName : this.name,
                                        suppEmail: this.email,
                                        suppPass: this.password,
                                        suppGender: this.gender,
                                        suppAddress: this.address,
                                        suppYearOfBirth: this.year,
                                        suppPhone: this.numberPhone
                                    }
                                    this.addSupporter(value).then(response=>{
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
                                                    this.password = '',
                                                    this.gender = '',
                                                    this.address = '',
                                                    this.year = '',
                                                    this.numberPhone = ''
                                                    this.$router.push({name:'categorySupporter'})
                                                }, 1000);
                                            }, 1000);
                                        }
                                    })
                                }else{
                                    this.callFormError("Bạn cần chọn giới tính")
                                }
                            }else{
                                this.callFormError("Bạn cần nhập địa chỉ")
                            }
                        }else{
                            this.callFormError("Bạn cần nhập mật khẩu")
                        }
                    }
                    else{
                        this.callFormError("Bạn cần nhập Email")
                    }
                }else{
                    this.callFormError("Bạn cần nhập họ tên")
                }
            }
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