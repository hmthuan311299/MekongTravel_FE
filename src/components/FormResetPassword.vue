<template>
    <div class="container-forgetPassword">
        <div class="box-forgetPassword">
            <h2 class="text-white text-center my-3 text-danger">Nhập Email của bạn</h2>
                <b-form class="mx-5 form-forgetPassword" ref="form" @submit.prevent="handleSubmit">
                    <b-form-group
                        id="input-group-1"
                        label-for="input-1"
                    >
                        <b-form-input
                        id="input-1"
                        v-model="email"
                        type="email"
                        placeholder="Nhập email"
                        required
                        ></b-form-input>
                    </b-form-group>
                <div class="center mt-3">
                    <button-success title="Gửi" @click="handleSubmit" />
                    <button-error title="Trở về" routeName='adminLogin'/>
                </div>
            </b-form>
        </div>
    </div>
</template>
<script>
import ButtonSuccess from './ButtonSuccess.vue'
import ButtonError from './ButtonError.vue'
import {mapMutations} from 'vuex'
export default {
  components: { ButtonError, ButtonSuccess },
    name: 'form-change-password',
    data(){
        return {
            email: '',
      }
    },
    methods:{
        ...mapMutations(['setLoadingSuccess', 'setLoadingError', 'setPageLoading']),
        handleSubmit(){
            if(!this.email){
                let value ={
					display: true,
					message: "Bạn cần nhập email"
				}
				this.setLoadingError(value)
				setTimeout(()=>{
						this.setLoadingError({display: false})
				}, 1500);
            }else{
                this.$emit('getEmail', this.email)
            }
            
        },
    }
}
</script>

<style scoped>

 .container-forgetPassword{
        display: flex;
        justify-content: center;
        align-items: center;
        min-height: 80vh;
    }
    .box-forgetPassword{
        height: 250px;
        width: 75vmin;
        box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
        border-radius: 20px;
        background: white;
        display: flex;
        flex-direction: column;
        justify-content: center;
    }
    .form-forgetPassword{
        display:flex;
        flex-direction: column;
        justify-content: center;
    }
</style>