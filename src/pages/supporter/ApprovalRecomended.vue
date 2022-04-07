<template>
    <div class="container">
        <h1 class="text-center text-danger mt-3">Duyệt địa điểm đề xuất</h1>
        <form @submit.prevent="handleSubmit" v-if="recommended">
            <div role="group">
                <div class="text-center bg-warning">
                    Đề xuất bởi {{recommended.membername}}
                </div>
                <label for="input-name-province" class="input-label">Tên địa điểm:</label>
                <b-form-input
                    id="input-name-province"
                    :value="recommended.recommendtitle"
                    ref="bInputTitle"
                    @input="title = $refs.bInputTitle.localValue"
                    placeholder=""
                ></b-form-input>
                <div class="mt-3">
                    <h5>Ảnh hiện tại</h5>
                    <img v-if="recommended.recommendpicture" class="img-preview" :src="getUrlPicture" alt="" width="400px" height="240px">
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
                        v-if="recommended.recommenddesc"
                        id="input-desc"
                        rows="8"
                        placeholder=""
                        :value="recommended.recommenddesc"
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
                        :value="recommended.recommendaddress"
                        ref="bInputAddress"
                        placeholder=""
                        @input="address = $refs.bInputAddress.localValue"
                    ></b-form-input>
                </div>
                <div class=" mt-3" v-if="listIMG">
                    <label class="input-label">Hình ảnh về địa điểm:</label>
                    <div>
                        <b-carousel
                            id="carousel-1"
                            v-model="slide"
                            :interval="4000"
                            controls
                            indicators
                            img-width="854"
                            img-height="480"
                            style="text-shadow: 1px 1px 2px #333;"
                            @sliding-start="onSlideStart"
                            @sliding-end="onSlideEnd"
                        >
                        <b-carousel-slide v-for="(item, index) in listIMG" :key="index">  
                            <template #img>
                                <img
                                    width="100%"
                                    height="600"
                                    :src="`${port_file}${item.reimagepath}`"
                                    alt="image slot"
                                >
                            </template>
                        </b-carousel-slide>
                        </b-carousel>
                    </div>
                </div>
                <div class="col-md-8 mt-3" v-if="recommended.recommendlinkvideo">
                    <label for="input-name-province" class="input-label">Link video về địa điểm:</label>
                    <video-embed :src="recommended.recommendlinkvideo"></video-embed>
                </div>
                <div class="col-md-6 mt-3" v-if="recommended.recommendmap">
                    <label for="input-name-province" class="input-label">Link bản đồ về địa điểm</label>
                    <div class="text-center" v-html="recommended.recommendmap">  
                    </div>
                </div>
                <div class="center mt-3 mb-5">
                    <v-btn color="success" type="submit" class="p-4" width="18%">
                        <span class="input-label">Duyệt</span>
                    </v-btn>
                    <v-btn color="error" class="p-4 ml-2" width="18%" @click="handleDelete">
                        <span class="input-label" >Xóa</span>
                    </v-btn>
                    <v-btn color="error" class="p-4 ml-2" width="30%" @click="handleBlock">
                        <span class="input-label" >Khóa tài khoản này</span>
                    </v-btn>
                </div>
            </div>
        </form>
        <FormYesNo :isDisplayYesNoForm="isDisplayYesNoForm" v-on:handleConfirm="handleConfirm"/>
    </div>
</template>

<script>
import FormYesNo from '../../components/FormYesNo.vue'
import port_file from '../../port_file'
import {mapActions, mapMutations, mapState} from 'vuex'
export default {
    name: "approval-recomended-TA",
    data: () => ({
        slide: 0,
        sliding: null,
        id: 0,
        title:'',
        desc:'',
        address: '',
        linkVideo: '',
        linkMap: '',
        picture:{
            objectFile: null,
            base64Url: '',
        },
        listIMG:[],
        port_file,
        selected: '',
        listProvince: [
          { provinceid: 'A', provincetitle: 'Option A' },
          { provinceid: 'B', provincetitle: 'Option B' },
        ],
        isDisplayYesNoForm:{
				display: false,
				titleForm: 'Form xác nhận',
				answer: ''
			},
    }),
    computed: {
        ...mapState({
            recommended: state=> state.recommended.recommended
        }),
        getUrlPicture(){
            if(this.picture.base64Url){
                return this.picture.base64Url
            }
            else{
                return this.port_file + this.recommended.recommendpicture
            }
        }
    },
    created(){
        this.getProvince().then(response=>{
            if(response.ok){
                this.listProvince= response.data
            }
        });
        this.id= this.$route.params.id
        this.getRecommendedById(this.id).then(response=>{
            if(response.ok){
                this.selected= response.data.provinceid
            }
        });
        this.getIMGRecommendedById(this.id).then(response=>{
            if(response.ok){
                this.listIMG= response.data
            }
        });
    },
    components:{
        FormYesNo
    },
    methods:{
        ...mapActions(['getProvince', 'approvalTA', 'getRecommendedById', 'getIMGRecommendedById', 'setBlockedMember']),
        ...mapMutations(['setLoadingSuccess', 'setLoadingError', 'setPageLoading']),
        handleDelete(){
            this.isDisplayYesNoForm.display = true;
            this.isDisplayYesNoForm.titleForm= 
            "Xác nhận xóa đề xuất?";
            //this.recommendId = value;
        },
        handleBlock(){
            this.isDisplayYesNoForm.display = true;
            this.isDisplayYesNoForm.titleForm= 
            "Khóa người dùng này?";
        },
		handleConfirm(value){
			if(value == 'yes'){
                if(this.isDisplayYesNoForm.titleForm=="Xác nhận xóa đề xuất?"){
                    this.isDisplayYesNoForm.titleForm= "";
                    this.answer=""
                    this.deleteRecommended(this.recommended.recommendid).then(response=>{
                        if(response.ok){
                            this.isDisplayYesNoForm.display = false;
                            this.isDisplayYesNoForm.titleForm= "";
                            this.answer=""
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
                                    this.$router.push({name: 'categoryRecommended'})
                                }, 1200);
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
                                    this.setLoadingError({display: false})
                                    this.isDisplayYesNoForm.display = false;
                                    this.isDisplayYesNoForm.titleForm= "";
                                    this.answer=""
                                }, 1200);
                            }, 1000);
                        }
                    })
                }
                if(this.isDisplayYesNoForm.titleForm=="Khóa người dùng này?"){
                    this.isDisplayYesNoForm.titleForm= "";
                    this.answer=""
                    this.setBlockedMember(this.recommended.memberid).then(response=>{
                        if(response.ok){
                            this.isDisplayYesNoForm.display = false;
                            this.isDisplayYesNoForm.titleForm= "";
                            this.answer=""
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
                                    this.$router.push({name: 'categoryRecommended'})
                                }, 1200);
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
                                    this.setLoadingError({display: false})
                                    this.isDisplayYesNoForm.display = false;
                                    this.isDisplayYesNoForm.titleForm= "";
                                    this.answer=""
                                }, 1200);
                            }, 1000);
                        }
                    })
			    }
			
            }else{
                    this.isDisplayYesNoForm.display = false;
                    this.isDisplayYesNoForm.titleForm= "";
                    this.answer=""
            }
        },
        onSlideStart(slide){
        this.sliding = true
        },
        onSlideEnd(slide) {
            this.sliding = false
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
        handleGetImages(files){
            if(files){
                this.images = files;
            }
        },
        handleSubmit(){
            this.title = this.title ? this.title : this.recommended.recommendtitle;
            this.desc = this.desc ? this.desc : this.recommended.recommenddesc;
            this.address = this.address ? this.address : this.recommended.recommendaddress;
            if(this.title){
                if(this.desc){
                    if(this.address){
                            var value={
                                tourId: this.id,
                                tourTitle: this.title,              
                                tourPicture: this.picture.objectFile,
                                urlCurrentPicture: this.recommended.recommendpicture,
                                tourDesc: this.desc,
                                tourAddress: this.address,
                                tourImages: this.listIMG,
                                tourLinkVideo: this.recommended.recommendlinkvideo,
                                tourLinkMap: this.recommended.recommendmap,
                                provinceId: this.selected,
                            }
                            this.approvalTA(value)
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
                                            this.address  = '',
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
                        this.callFormError("Cần địa chỉ địa điểm");
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


