<template>
    <div class="container">
        <h1 class="text-center text-danger mt-3">Thêm địa điểm mới</h1>
        <form @submit.prevent="handleSubmit">
            <div role="group">
                <label for="input-name-province" class="input-label">Tên địa điểm:</label>
                <b-form-input
                    id="input-name-province"
                    v-model="title"
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
                <div v-if="picture.base64Url">
                    <h6>Ảnh xem trước của địa điểm: {{title}}</h6>
                    <img class="img-preview" :src="picture.base64Url" alt="" width="320px" height="240px">
                </div>            
                <div class="mt-3">
                    <label for="input-desc mt-3" class="input-label">Mô tả địa điểm:</label>
                    <b-form-textarea
                        id="input-desc"
                        v-model="desc"
                        rows="8"
                        placeholder=""
                        trim
                    ></b-form-textarea>
                </div>
                <div class="mt-3">
                    <label for="input-name-province" class="input-label">Tỉnh thành:</label>
                    <b-form-select
                        v-model="selected"
                        :options="listProvince"
                        class="mb-3"
                        value-field="provinceid"
                        text-field="provincetitle"
                        disabled-field="notEnabled"
                    ></b-form-select>
                </div>
                <div class="mt-3">
                    <label for="input-name-province" class="input-label">Địa chỉ địa điểm:</label>
                    <b-form-input
                        id="input-name-province"
                        v-model="address"
                        placeholder=""
                        trim
                    ></b-form-input>
                </div>
                <div class="mt-3">
                    <label for="input-name-province" class="input-label">Các hình ảnh của địa điểm:</label>
                    <v-file-input
                        multiple
                        label="Chọn các ảnh từ thiết bị của bạn"
                        @change="handleGetImages"
                        accept="image/*"
                        required
                    ></v-file-input>
                </div>
                <div class="mt-3">
                    <label for="input-name-province" class="input-label">Link video về địa điểm (nếu có)</label>
                    <b-form-input
                        id="input-name-province"
                        v-model="linkVideo"
                        placeholder=""
                        trim
                    ></b-form-input>
                </div>
                <video-embed :src="linkVideo"></video-embed>
                <div class="mt-3">
                    <label for="input-name-province" class="input-label">Link bản đồ về địa điểm</label>
                    <b-form-input
                        id="input-name-province"
                        v-model="linkMap"
                        placeholder=""
                        trim
                    ></b-form-input>
                </div>
                <div v-html="linkMap">  
                </div>
                <div class="center mt-3 mb-5">
                    <button-success title="Thêm"/>
                    <button-error title="Trở về" routeName="supporter"/>
                </div>
            </div>
        </form>
    </div>
</template>

<script>
import ButtonError from '../../components/ButtonError.vue'
import ButtonSuccess from '../../components/ButtonSuccess.vue'
import {mapActions, mapState, mapMutations} from 'vuex'
import { v4 as uuidv4 } from 'uuid';
export default {
    components:{
        ButtonError,
        ButtonSuccess
    },
    name: "recommended",
    data: () => ({
        id: uuidv4(),
        title:'',
        desc:'',
        address: '',
        linkVideo: '',
        linkMap: '',
        picture:{
            objectFile: null,
            base64Url: '',
        },
        images:[],
        selected: '',
        listProvince: [
          { provinceid: 'A', provincetitle: 'Option A' },
          { provinceid: 'B', provincetitle: 'Option B' },
        ],
    }),
    computed: {
    
    },
    created(){
        this.getProvince().then(response=>{
            if(response.ok){
                this.listProvince= response.data
                if(this.listProvince.length){
                    this.selected=this.listProvince[0].provinceid
                }
            }
        });
    },
    methods:{
        ...mapActions(['getProvince', 'addTA']),
        ...mapMutations(['setLoadingSuccess', 'setLoadingError', 'setPageLoading']),
        handleCancel(){
            this.$router.push({name: 'supporter'})
        },
        handleGetPicture(file){
            if(file){
                this.picture.objectFile = file
                const reader = new FileReader();
                reader.addEventListener("load", ()=>{
                    this.picture.base64Url = reader.result;
                }, false);
                if(file) {
                    reader.readAsDataURL(file);
                }
            }
        },
        handleGetImages(files){
            if(files){
                this.images = files;
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
            if(this.title){
                if(this.desc){
                    if(this.images){
                        if(this.linkMap){
                            var value={
                                tourId: this.id,
                                tourTitle: this.title,              
                                tourPicture: this.picture.objectFile,
                                tourDesc: this.desc,
                                tourAddress: this.address,
                                tourImages: this.images,
                                tourLinkVideo: this.linkVideo,
                                tourLinkMap: this.linkMap,
                                provinceId: this.selected,
                            }
                            this.addTA(value)
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
                                            this.id = '',
                                            this.title = '',              
                                            this.picture.objectFile = null,
                                            this.desc = '',
                                            this.txtAddress  = '',
                                            this.images  = [],
                                            this.linkVideo= '',
                                            this.linkMap  = '',
                                            this.picture.base64Url=''
                                            this.$router.push({name:'categoryTA'})
                                        }, 1000);
                                    }, 1000);
                                }else{
                                    let value ={
                                        display: true,
                                        message: response.message
                                    }
                                    this.setPageLoading(true)
                                    setTimeout(()=>{
                                        this.setPageLoading(false)
                                        this.setLoadingError(value)
                                        setTimeout(()=>{
                                            this.commentContent='';
                                            this.setLoadingError({display: false})
                                        }, 1500);
                                    }, 1000);
                                }
                            })
                        }else{
                            this.callFormError("Cần thêm đường dẫn Google Map địa điểm");
                        }
                    }else{
                        this.callFormError("Cần thêm hình ảnh địa điểm");
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
    .img-preview{
        border: 1px solid black
    }
</style>