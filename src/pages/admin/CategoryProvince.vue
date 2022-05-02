<template>
    <div>
        <h1 class="text-center text-danger">Danh mục Tỉnh Thành</h1>
        <div class="admin-list-container">
            <div class="admin-list-content" v-for="item in listProvince" :key="item.provinceid">
                <div class="admin-list-content-item">
                    <div class="admin-list-item admin-list-item-avatar"><i class="fa-solid fa-city"></i></div>
                    <div class="admin-list-item admin-list-item-name">{{item.provincetitle}}</div>
                </div>
                <div class="admin-list-content-item">
                    <router-link tag="div" class="admin-list-item admin-list-item-update" :to="{name: 'updateProvince', params:{ id: item.provinceid}}">
                        <i class="fa-solid fa-pen-to-square"></i>
                    </router-link>
                    <div class="admin-list-item admin-list-item-delete" @click="handleDelete(item.provinceid)"><i class="fa-solid fa-trash-can"></i></div>
                </div>
            </div>
        </div>
        <FormYesNo :isDisplayYesNoForm="isDisplayYesNoForm" v-on:handleConfirm="handleConfirm"/>
    </div>
</template>
<script>
import SearchBar from '../../components/SearchBar.vue'
import FormYesNo from '../../components/FormYesNo.vue'
import {mapActions, mapMutations} from 'vuex';
export default {
    name: "categoryProvince",
    components: {
        FormYesNo, SearchBar
    },
    data(){
        return{
            search: '',
            listProvince:[],
            isDisplayYesNoForm:{
				display: false,
				titleForm: 'Form xác nhận',
				answer: ''
			},
            provinceId: ''
        }
    },
    methods:{
        ...mapActions(['getProvince', 'deleteProvince']),
        ...mapMutations(['setLoadingSuccess', 'setLoadingError', 'setPageLoading']),
        getValueSearch(value){
            console.log("search", value);
            this.search = this.search
            if(!this.search){
                alert("vui long nhap lai")
            }
        },
        handleDelete(value){
            this.isDisplayYesNoForm.display = true;
            this.isDisplayYesNoForm.titleForm= 
            "Xóa tỉnh thành sẽ xóa toàn bộ dữ liệu liên quan đến tỉnh thành như: Địa điểm, đánh giá, bình luận của tỉnh thành này! Bạn có chắc muốn xóa?";
            this.provinceId = value;
        },
		handleConfirm(value){
			if(value == 'yes'){
				this.isDisplayYesNoForm.titleForm= "";
				this.answer=""
				this.deleteProvince(this.provinceId).then(response=>{
                    if(response.ok){
                        this.getProvince().then(response=>{
                            if(response.ok){
                                this.listProvince = response.data
                            }
                        });
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
			else{
				this.isDisplayYesNoForm.display = false;
				this.isDisplayYesNoForm.titleForm= "";
				this.answer=""
			}
		}
    },
    computed:{
	},
	created(){
        this.getProvince().then(response=>{
            if(response.ok){
                this.listProvince = response.data
            }
        });
    },
}
</script>

<style>

</style>