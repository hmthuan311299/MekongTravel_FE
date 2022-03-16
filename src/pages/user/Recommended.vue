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
                    trim
                ></b-form-input>
                <div class="mt-3">
                    <label for="input-name-province" class="input-label">Ảnh đại diện cho địa điểm:</label>
                    <v-file-input
                        type='file'
                        label="Tải ảnh từ máy tính bạn"
                        accept="imgage/*"
                        required
                        @change="handleGetRecommendPicture"
                    ></v-file-input>
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
                <div class="mt-3">
                    <label for="input-name-province" class="input-label">Link bản đồ về địa điểm</label>
                    <b-form-input
                        id="input-name-province"
                        v-model="txtRecommendLinkMap"
                        placeholder=""
                        trim
                    ></b-form-input>
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
import {mapActions} from 'vuex'
export default {
    name: "recommended",
    data: () => ({
        txtRecommendTitle:'',
        txtRecommendDesc:'',
        txtRecommendAddress: '',
        txtRecommendLinkVideo: '',
        txtRecommendLinkMap: '',
        recommendPicture:'',
        recomendImages:'',
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
        ...mapActions(['getProvince']),

        handleCancel(){
            this.$router.push({name: 'userIndex'})
        },
        handleGetRecommendPicture(file){
            console.log(file)
            if(file && file.length){
                this.recommendPicture = file
            }
            
        },
        handleGetRecommendImages(files){
            console.log(files)
            if(files && files.length){
                this.recommendImages = files
            }
            
        },
        handleSubmitRecommended(){
            console.log("txtRecommendTitle", this.txtRecommendTitle);
            console.log("recommendPicture", this.recommendPicture);
            console.log("txtRecommendDesc", this.txtRecommendDesc);
            console.log("txtRecommendAddress", this.txtRecommendAddress);
            console.log("recommendImages", this.recommendImages);
            console.log("txtRecommendLinkVideo", this.txtRecommendLinkVideo);
            console.log("txtRecommendLinkMap", this.txtRecommendLinkMap);

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