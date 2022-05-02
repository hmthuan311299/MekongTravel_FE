<template>
    <div class="PageLogin-technician" v-bind:style="{ 'background-image': 'url(' + image + ')'}">
        <FormResetPassword @getEmail="getEmail"/>
    </div>
</template>

<script>
import image from '../../assets/background/Background-2.jpg'
import FormResetPassword from '../../components/FormResetPassword.vue'
import {mapActions, mapMutations} from 'vuex'
export default {
    components:{
        FormResetPassword
    },
    data:()=>{
        return{
            image
        }
    },
    methods:{
        ...mapMutations(['setLoadingSuccess', 'setLoadingError', 'setPageLoading']),
        ...mapActions(['SupporterResetPassword']),
        getEmail(value){
            console.log(value)
            this.SupporterResetPassword(value).then(response=>{
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
                            this.$router.push({name:"supporterLogin"})
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
        }
    }
}
</script>

<style>
.PageLogin-technician {
    display: flex;
	align-items: center;
	justify-content: center;
	
	background-size: cover;
    height: 100vh
}
   
</style>