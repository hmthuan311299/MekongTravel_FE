<template>
    <div class="container">
        <h1 class="text-center text-danger">Thêm tỉnh thành mới</h1>
        <form role="group" @submit.prevent="handleSubmit">
            <label for="input-name-province" class="input-label">Tên tỉnh thành:</label>
            <b-form-input
                id="input-name-province"
                v-model="name"
                placeholder=""
            ></b-form-input>
            <div class="mt-3">
                <label for="input-name-province" class="input-label">Ảnh đại diện cho địa điểm:</label>
                <v-file-input
                    type='file'
                    label="Tải ảnh từ máy tính bạn"
                    accept="image/*"
                    required
                    @change="handleGetPicture"
                ></v-file-input>
            </div>
            <div v-if="provincePicture.base64Url">
                <h6>Ảnh xem trước của địa điểm: {{name}}</h6>
                <img class="img-preview" :src="provincePicture.base64Url" alt="" width="320px" height="240px">
            </div>
            <div class="mt-3">
                <label for="input-desc mt-3" class="input-label">Mô tả tỉnh thành:</label>
                <b-form-textarea
                    id="input-desc"
                    v-model="desc"
                    rows="8"
                    placeholder=""
                    trim
                ></b-form-textarea>
            </div>
            <div class="center mt-3">
                <v-btn color="success" type="submit" class="p-4" width="18%">
                    <span class="input-label">Thêm</span>
                </v-btn>
                <v-btn color="error" class="p-4 ml-2" width="18%" @click="handleCancel">
                    <span class="input-label" >Trở về</span>
                </v-btn>
            </div>
        </form>
    </div>
</template>

<script>
import {mapActions, mapState, mapMutations} from 'vuex'
export default {
    name: "add-province",
    data: () => ({
        name: '',
        desc: '',
        provincePicture:{
                objectFile: null,
                base64Url: '',
        },
    }),
    computed: {
        
    },
    methods:{
        ...mapActions(['addProvince']),
        ...mapMutations(['setLoadingSuccess', 'setLoadingError', 'setPageLoading']),
        handleCancel(){
            this.$router.push({name: 'categoryProvince'})
        },
        handleGetPicture(file){
            if(file){
                this.provincePicture.objectFile = file
                const reader = new FileReader();
                reader.addEventListener("load", ()=>{
                    this.provincePicture.base64Url = reader.result;
                }, false);
                if(file) {
                    reader.readAsDataURL(file);
                }
            }
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
        handleSubmit(){
            if(this.name){
                if(this.desc){
                    if(this.provincePicture.objectFile){
                        var value={
                            provinceTitle: this.name,             
                            provincePicture: this.provincePicture.objectFile,
                            provinceDesc: this.desc,
                        }
                        this.addProvince(value)
                        .then(response=>{
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
                                        this.provincePicture.objectFile = '',              
                                        this.desc = '',
                                        this.name  = '',
                                        this.provincePicture.base64Url=''
                                        this.$router.push({name:'categoryProvince'})
                                    }, 1000);
                                }, 1000);
                            }
                        })
                    }else{
                        this.callFormError("Cần thêm hình ảnh cho tỉnh thành");
                    }
                }
                else{
                    this.callFormError("Cần nhập mô tả địa điểm");
                }
            }else{
                this.callFormError("Cần nhập tên địa điểm");
            }
        }
    }
}
</script>

<style scoped>
    .container{
        padding: 0 100px;
    }
    @media (max-width: 768px) {
        .container{
            padding: 0 20px;
        }
    }
    .input-label{
        font-size: 20px
    }
    /* .input-label{
        font-size: 25px
    } */
    
</style>