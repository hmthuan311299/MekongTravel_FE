<template>
    <div>
        <h1 class="text-center text-danger">Danh mục Hỗ trợ viên</h1>
        <div class="admin-list-container">
            <div class="admin-list-content" v-for="item in ListItem" :key="item.suppid">
                <div class="admin-list-content-item">
                    <div class="admin-list-item admin-list-item-avatar"><i class="fa-solid fa-user"></i></div>
                    <div class="admin-list-item admin-list-item-name">{{item.suppname}}</div>
                </div>
                <div class="admin-list-content-item">
                    <router-link tag="div" class="admin-list-item admin-list-item-update" :to="{name: 'updateSupporter', params:{ id: item.suppid}}">
                        <i class="fa-solid fa-pen-to-square"></i>
                    </router-link>
                    <div class="admin-list-item admin-list-item-delete" @click="handleDelete(item.suppid)"><i class="fa-solid fa-trash-can"></i></div>
                </div>
            </div>
        </div>
        <FormYesNo :isDisplayYesNoForm="isDisplayYesNoForm" v-on:handleConfirm="handleConfirm"/>
    </div>
</template>

<script>
import SearchBar from '../../components/SearchBar.vue'
import {mapActions, mapMutations} from 'vuex'
import FormYesNo from '../../components/FormYesNo.vue'
export default {
    name: "category-supporter",
    components: {
        FormYesNo, SearchBar
    },
    data(){
        return{
            search: '',
            ListItem: [
                {id : 1, name: 'Hà Minh Thuận'},
                {id : 2,name: 'Nguyễn Văn A'},
                {id : 3,name: 'Nguyễn Văn B'}
            ],
            isDisplayYesNoForm:{
				display: false,
				titleForm: 'Form xác nhận',
				answer: ''
			},
            suppId: ''
        }
    },
    methods:{
        ...mapActions(['getSupporter', 'deleteSupporter']),
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
            "Bạn muốn xóa Hỗ trợ viên này?";
            this.suppId = value;
            console.log(value)
        },
		handleConfirm(value){
			if(value == 'yes'){
				this.isDisplayYesNoForm.titleForm= "";
				this.answer=""
				this.deleteSupporter(this.suppId).then(response=>{
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
                                this.getSupporter().then(response=>{
                                    if(response.ok){
                                        this.ListItem = response.data
                                    }
                                });
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
    created(){
        this.getSupporter().then(response=>{
            if(response.ok){
                this.ListItem = response.data
            }
        });
    }
}
</script>

<style>
.list-container{
    min-width: 500px;
    min-height: 100%;
    max-width: 80%;
    margin: 20px auto;
}

</style>