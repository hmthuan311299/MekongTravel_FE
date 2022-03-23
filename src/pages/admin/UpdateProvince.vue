<template>
    <div class="container">
        <h1 class="text-center text-danger">Sửa thông tin tỉnh thành</h1>
        <form role="group" @submit.prevent="handleSubmit" v-if="currProvince">
            <label for="input-name-province" class="input-label">Tên tỉnh thành:</label>
            <b-form-input v-if="currProvince.provincetitle"
                id="input-name-province"
                :value ="currProvince.provincetitle || ''"
                placeholder=""
                ref="bInputName"
                v-on:input="name = $refs.bInputName.localValue"
            ></b-form-input>
            <div class="mt-3">
                <h5>Ảnh hiện tại</h5>
                <img v-if="currProvince.provincepicture" class="img-preview" :src="getUrlPicture" alt="" width="400px" height="240px">
                <input type="file" accept="image/*" @change="handleGetPicture($event)" ref="inputFile" style="display: none"/>
                <div class="mt-3">
                    <v-btn color="primary" class="p-4" width="18%" @click="handleCallRefs">
                        <span class="input-label">Thay đổi</span>
                    </v-btn>
                    <v-btn v-if="provincePicture.base64Url" @click="handleRemove" color="error" class="p-4 ml-2" width="18%">
                        <span class="input-label" >Xóa chọn</span>
                    </v-btn>
                </div>
            </div>
            <div class="mt-3">
                <label for="input-desc mt-3" class="input-label">Mô tả tỉnh thành:</label>
                <b-form-textarea
                    v-if="currProvince.provincedesc"
                    id="input-desc"
                    rows="8"
                    placeholder=""
                    :value="currProvince.provincedesc"
                    ref="bInputDesc"
                    @input="desc = $refs.bInputDesc.localValue"
                ></b-form-textarea>
            </div>
            <div class="center mt-3">
                <v-btn color="success" type="submit" class="p-4" width="18%">
                    <span class="input-label">Gửi</span>
                </v-btn>
                <v-btn color="error" class="p-4 ml-2" width="18%" @click="handleCancel">
                    <span class="input-label" >Trở về</span>
                </v-btn>
            </div>
        </form>
    </div>
</template>

<script>
import port_file from '../../port_file'
import {mapActions, mapState, mapMutations} from 'vuex'
export default {
    name: "update-province",
    data: () => ({
        name: '',
        desc: '',
        provincePicture:{
                objectFile: null,
                base64Url: '',
        },
        provinceId: 1,
        port_file
    }),
    computed: {
        ...mapState({
            currProvince: state=> state.province.currProvince
        }),
        getUrlPicture(){
            if(this.provincePicture.base64Url){
                return this.provincePicture.base64Url
            }
            else{
                return this.port_file + this.currProvince.provincepicture
            }
        }
    },
    methods:{
        ...mapActions(['updateProvince', 'getProvinceById']),
        ...mapMutations(['setLoadingSuccess', 'setLoadingError', 'setPageLoading']),
        handleCancel(){
            this.$router.push({name: 'categoryProvince'})
        },
        handleGetPicture(e){
            var file = e.target.files[0]
            console.log(file)
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
            this.name= this.name || this.currProvince.provincetitle;
            this.desc= this.desc || this.currProvince.provincedesc
            if(this.name){
                if(this.desc){
                    var value={
                        provinceTitle: this.name,             
                        provincePicture: this.provincePicture.objectFile,
                        provinceDesc: this.desc,
                        provinceId: this.currProvince.provinceid
                    }
                    this.updateProvince(value)
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
                }
                else{
                    this.callFormError("Cần nhập mô tả địa điểm");
                }
            }else{
                this.callFormError("Cần nhập tên địa điểm");
            }
        },
        handleCallRefs(){
            this.$refs.inputFile.click();
        },
        handleRemove(){
            this.provincePicture.objectFile= null;
            this.provincePicture.base64Url= ''
        }
    },
    created(){
        this.provinceId = this.$route.params.id;
        if(this.provinceId){
            this.getProvinceById(this.provinceId)
        }
    }
}
</script>

<style scoped>
    .container{
        padding: 0 100px;
    }
    .input-label{
        font-size: 20px
    }
    @media (max-width: 768px) {
        .container{
            padding: 0 20px;
        }
    }
    
    /* .input-label{
        font-size: 25px
    } */
    
</style>