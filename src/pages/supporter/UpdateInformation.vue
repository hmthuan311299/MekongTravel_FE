<template>
  <div class="container">
    <h1 class="text-center text-danger">Sửa thông tin</h1>
    <v-form v-if="currentSupporter" ref="form" v-model="valid" lazy-validation @submit.prevent="handleUpdate">
        <v-text-field
			label="Họ Tên"
            :value="currentSupporter.suppname"
			ref="vTextName"
			@input="name = $refs.vTextName.internalValue"
            required
        ></v-text-field>
        <v-text-field
            :value="currentSupporter.suppaddress"
			ref="vTextAddress"
			@input="address = $refs.vTextAddress.internalValue"
            label="Địa chỉ"
            required
        ></v-text-field>
        <v-text-field
            :value="currentSupporter.suppyearofbirth"
			ref="vTextYear"
			@input="year = $refs.vTextYear.internalValue"
            label="Năm sinh"
            required
        ></v-text-field>
        <v-select
            :value="currentSupporter.suppgender"
			ref="vTextGender"
			@input="gender = $refs.vTextGender.internalValue"
            :items="items"
            :rules="[(v) => !!v || 'Item is required']"
            label="Giới tính"
            required
        ></v-select>
        <v-text-field
            :value="currentSupporter.suppphone || ''"
			ref="vTextPhone"
			@input="numberPhone = $refs.vTextPhone.internalValue"
          label="Số điện thoại (Không bắt buộc)"
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
            currentSupporter: state=> state.supporter.currentSupporter
        }),
	},
    methods: {
        ...mapActions(['updateSupporter']),
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
        handleUpdate(){
			this.name = this.name ? this.name : this.currentSupporter.suppname
			this.email = this.email ? this.email : this.currentSupporter.suppemail
			this.address = this.address ? this.address : this.currentSupporter.suppaddress
			this.year = this.year ? this.year : this.currentSupporter.suppyearofbirth
			this.gender = this.gender ? this.gender : this.currentSupporter.suppgender
			this.numberPhone = this.numberPhone ? this.numberPhone : this.currentSupporter.suppphone
            if(this.name){
                if(this.email){
					if(this.address){
						if(this.gender){
							var value = {
								suppName : this.name,
								suppEmail: this.email,
								suppPass: this.password,
								suppGender: this.gender,
								suppAddress: this.address,
								suppYearOfBirth: this.year,
								suppPhone: this.numberPhone,
								suppId: this.currentSupporter.suppid
							}
							this.updateSupporter(value).then(response=>{
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
											this.gender = '',
											this.address = '',
											this.year = '',
											this.numberPhone = ''
											this.$router.push({name:'supporter'})
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