<template>
    <div class="PageLogin-admin" v-bind:style="{ 'background-image': 'url(' + image + ')'}">
        <FormResetPassword @getEmail="getEmail"/>
    </div>
</template>

<script>
import image from '../../assets/background/Background-3.jpg'
import FormResetPassword from '../../components/FormResetPassword.vue'
import {mapActions, mapMutations} from 'vuex'
export default {
    data:()=>({
        image
    }),
    components:{
        FormResetPassword
    },
    methods:{
        ...mapMutations(['setLoadingSuccess', 'setLoadingError', 'setPageLoading']),
        ...mapActions(['AdminResetPassword']),
        getEmail(value){
            console.log(value)
            this.AdminResetPassword(value).then(response=>{
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
                            this.$router.push({name:"adminLogin"})
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
.PageLogin-admin {
    display: flex;
	align-items: center;
	justify-content: center;
	background-size: cover;
    height: 100vh
}
   
</style>