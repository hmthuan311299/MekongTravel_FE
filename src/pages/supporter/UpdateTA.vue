<template>
    <div class="container">
        <h1 class="text-center text-danger mt-3">Cập nhật thông tin địa điểm</h1>
        <form @submit.prevent="handleSubmit">
            <div role="group">
                <label for="input-name-province" class="input-label">Tên địa điểm:</label>
                <b-form-input
                    id="input-name-province"
                    :value="currentTA.tourtitle"
                    ref="bInputTitle"
                    @input="title = $refs.bInputTitle.localValue"
                    placeholder=""
                ></b-form-input>
                <div class="mt-3">
                    <h5>Ảnh hiện tại</h5>
                    <img v-if="currentTA.tourpicture" class="img-preview" :src="getUrlPicture" alt="" width="400px" height="240px">
                    <input type="file" accept="image/*" @change="handleGetPicture($event)" ref="inputFile" style="display: none"/>
                    <div class="mt-3">
                        <v-btn color="primary" class="p-4" width="18%" @click="handleCallRefs">
                            <span class="input-label">Thay đổi</span>
                        </v-btn>
                        <v-btn v-if="picture.base64Url" @click="handleRemove" color="error" class="p-4 ml-2" width="18%">
                            <span class="input-label" >Xóa chọn</span>
                        </v-btn>
                    </div>
                </div>           
                <div class="mt-3">
                    <label for="input-desc mt-3" class="input-label">Mô tả địa điểm:</label>
                    <b-form-textarea
                        id="input-desc"
                        rows="8"
                        placeholder=""
                        :value="currentTA.tourdesc"
                        ref="bInputDesc"
                        @input="desc = $refs.bInputDesc.localValue"
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
                        :value="currentTA.touraddress"
                        ref="bInputAddress"
                        placeholder=""
                        @input="address = $refs.bInputAddress.localValue"
                    ></b-form-input>
                </div>
                <!-- <div class="mt-3">
                    <label for="input-name-province" class="input-label">Các hình ảnh của địa điểm:</label>
                    <v-file-input
                        multiple
                        label="Chọn các ảnh từ thiết bị của bạn"
                        @change="handleGetRecommendImages"
                        accept="image/*"
                        required
                    ></v-file-input>
                </div> -->
                <div class="mt-3 display-flex flex-wap" v-if="currentImageTA">
                    <div class="display-flex flexDirection-column  m-2  " v-for="item in currentImageTA" :key="item.imageid">
                        <img :src="`${port_file}${item.imagepath}`" width="200px" height="120px" alt="">
                        <v-btn @click="handleDeleteIMG(item.imageid)" color="error mt-2" class="" width="18%">
                            <span class="input-label" >Xóa</span>
                        </v-btn>
                    </div>
                </div>
                <div class="mt-3">
                    <label for="input-name-province" class="input-label">Link video về địa điểm (nếu có)</label>
                    <b-form-input
                        id="input-name-province"
                        :value="currentTA.tourlinkvideo"
                        placeholder=""
                        trim
                        ref="bInputLinkVideo"
                        @input="linkVideo = $refs.bInputLinkVideo.localValue"
                    ></b-form-input>
                </div>
                <video-embed :src="linkVideo"></video-embed>
                <div class="mt-3">
                    <label for="input-name-province" class="input-label">Link bản đồ về địa điểm</label>
                    <b-form-input
                        id="input-name-province"
                        :value="currentTA.tourmap"
                        placeholder=""
                        trim
                        ref="bInputLinkMap"
                        @input="linkMap = $refs.bInputLinkMap.localValue"
                    ></b-form-input>
                </div>
                <div v-html="linkMap">  
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
import port_file from '../../port_file'
import {mapActions, mapState, mapMutations} from 'vuex'
import { v4 as uuidv4 } from 'uuid';
export default {
    name: "update-TA",
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
        port_file
    }),
    computed: {
        ...mapState({
            currentTA: state=> state.touristAttraction.currentTA,
            currentImageTA: state=> state.touristAttraction.currentImageTA
        }),
        getUrlPicture(){
            if(this.picture.base64Url){
                return this.picture.base64Url
            }
            else{
                return this.port_file + this.currentTA.tourpicture
            }
        },
    },
    created(){
        this.id= this.$route.params.id
        this.getProvince().then(response=>{
            if(response.ok){
                this.listProvince= response.data
            }
        });
        this.getTAById(this.id).then(response=>{
            if(response.ok){
                this.selected= response.data.provinceid
            }
        });
        this.getimageTA(this.id);
    },
    methods:{
        ...mapActions(['getProvince', 'getTAById', 'getimageTA', 'deleteImage']),
        ...mapMutations(['setLoadingSuccess', 'setLoadingError', 'setPageLoading']),
        handleCancel(){
            this.$router.push({name: 'supporter'})
        },
        handleGetRecommendImages(files){
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
        },
        handleGetPicture(e){
            var file = e.target.files[0]
            console.log(file)
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
        handleCallRefs(){
            this.$refs.inputFile.click();
        },
        handleRemove(){
            this.picture.objectFile= null;
            this.picture.base64Url= ''
        },
        handleDeleteIMG(imageId){
            console.log(imageId)
            this.deleteImage({imageId, tourId: this.id}).then(response=>{
                if(response.ok){
                    this.getimageTA(this.id);
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
                        }, 1000);
                    }, 1000);
                }
            })
        }
    },
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
    .display-flex{
        display: flex;
    }
    .flexDirection-column{
        flex-direction: column;
        align-items: center;
    }
    .flex-wap{
        flex-wrap: wrap;
    }
    .justify-content-center{
        justify-content: center;
    }
</style>