<template>
    <div class="container">
        <h1 class="text-center text-danger mt-3">Đề Xuất Địa Điểm Mới</h1>
        <form @submit.prevent="handleSubmitRecommended">
            <div role="group">
                <label for="input-name-province" class="input-label">Tên địa điểm:</label>
                <b-form-input
                    id="input-name-province"
                    v-model="txtRecommendTitle"
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
                <div v-if="recommendPicture.base64Url">
                    <h6>Ảnh xem trước của địa điểm: {{txtRecommendTitle}}</h6>
                    <img class="img-preview" :src="recommendPicture.base64Url" alt="" width="320px" height="240px">
                </div>            
                <div class="mt-3">
                    <label for="input-desc mt-3" class="input-label">Mô tả địa điểm:</label>
                    <b-form-textarea
                        id="input-desc"
                        v-model="txtRecommendDesc"
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
                        v-model="txtRecommendAddress"
                        placeholder=""
                        trim
                    ></b-form-input>
                </div>
                <div class="mt-3">
                    <label for="input-name-province" class="input-label">Các hình ảnh của địa điểm:</label>
                    <v-file-input
                        multiple
                        label="Chọn các ảnh từ thiết bị của bạn"
                        @change="handleGetRecommendImages"
                        accept="image/*"
                        required
                    ></v-file-input>
                </div>
                <div class="mt-3">
                    <label for="input-name-province" class="input-label">Link video về địa điểm (nếu có)</label>
                    <b-form-input
                        id="input-name-province"
                        v-model="txtRecommendLinkVideo"
                        placeholder=""
                        trim
                    ></b-form-input>
                </div>
                <video-embed :src="txtRecommendLinkVideo"></video-embed>
                <div class="mt-3">
                    <label for="input-name-province" class="input-label">Link bản đồ về địa điểm</label>
                    <b-form-input
                        id="input-name-province"
                        v-model="txtRecommendLinkMap"
                        placeholder=""
                        trim
                    ></b-form-input>
                </div>
                <div v-html="txtRecommendLinkMap">  
                </div>
                <div class="center mt-3 mb-5">
                    <v-btn color="success" type="submit" class="p-4" width="18%">
                        <span class="input-label">Thêm</span>
                    </v-btn>
                    <v-btn color="error" class="p-4 ml-2" width="18%" @click="handleCancel">
                        <span class="input-label" >Trở về</span>
                    </v-btn>
                </div>
            </div>
        </form>
    </div>
</template>

<script>
import {mapActions, mapState, mapMutations} from 'vuex'
import { v4 as uuidv4 } from 'uuid';
export default {
    name: "recommended",
    data: () => ({
        recommendId: uuidv4(),
        txtRecommendTitle:'',
        txtRecommendDesc:'',
        txtRecommendAddress: '',
        txtRecommendLinkVideo: '',
        txtRecommendLinkMap: '',
        recommendPicture:{
            objectFile: null,
            base64Url: '',
        },
        recommendImages:[],
        selected: '',
        listProvince: [
          { provinceid: 'A', provincetitle: 'Option A' },
          { provinceid: 'B', provincetitle: 'Option B' },
        ],
    }),
    computed: {
        ...mapState({
            memberId: state=>state.member.currentMember.memberid
        }),
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
        ...mapActions(['getProvince', 'addRecommended']),
        ...mapMutations(['setLoadingSuccess', 'setLoadingError', 'setPageLoading']),
        handleCancel(){
            this.$router.push({name: 'userIndex'})
        },
        handleGetPicture(file){
            if(file){
                this.recommendPicture.objectFile = file
                const reader = new FileReader();
                reader.addEventListener("load", ()=>{
                    this.recommendPicture.base64Url = reader.result;
                }, false);
                if(file) {
                    reader.readAsDataURL(file);
                }
            }
        },
        handleGetRecommendImages(files){
            if(files){
                this.recommendImages = files;
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
        handleSubmitRecommended(){
            if(this.txtRecommendTitle){
                if(this.txtRecommendDesc){
                    if(this.recommendImages){
                        if(this.txtRecommendLinkMap){
                            var value={
                                recommendId: this.recommendId,
                                recommendTitle: this.txtRecommendTitle,              
                                recommendPicture: this.recommendPicture.objectFile,
                                recommendDesc: this.txtRecommendDesc,
                                recommendAddress: this.txtRecommendAddress,
                                recommendImages: this.recommendImages,
                                recommendLinkVideo: this.txtRecommendLinkVideo,
                                recommendLinkMap: this.txtRecommendLinkMap,
                                provinceId: this.selected,
                                memberId: this.memberId
                            }
                            this.addRecommended(value)
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
                                            this.recommendId = '',
                                            this.txtRecommendTitle = '',              
                                            this.recommendPicture.objectFile = null,
                                            this.txtRecommendDesc = '',
                                            this.txtRecommendAddress  = '',
                                            this.recommendImages  = [],
                                            this.txtRecommendLinkVideo= '',
                                            this.txtRecommendLinkMap  = '',
                                            this.recommendPicture.base64Url=''
                                            this.$router.push({name:'unapprovedList'})
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