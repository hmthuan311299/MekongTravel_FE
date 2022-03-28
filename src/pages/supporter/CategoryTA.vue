<template>
    <div>
        <h1 class="text-center text-danger">Danh mục địa điểm</h1>
        <search-bar v-on:getValueSearch="getValueSearch"/>
        <div class="supporter-list-container" >
            <b-form-select ref="BFormSelect" @change="handleSelect()" v-model="selected" :options="options" class="mb-4" style="width: 25%"></b-form-select>
            <template v-if="renderListTA">
                <div class="supporter-list-content"  v-for="item in renderListTA" :key="item.tourid">
                <div class="supporter-list-content-item" style="width: 45%">
                    <div class="supporter-list-item supporter-list-item-avatar"><i class="fa-solid fa-map-location-dot"></i></div>
                    <div class="supporter-list-item supporter-list-item-name">{{item.tourtitle}}</div>
                </div>
                <div class="supporter-list-item supporter-list-item-name"> <span class="span-fs">{{item.provincetitle}}</span></div>
                <div class="supporter-list-content-item">
                    <router-link tag="div" class="supporter-list-item supporter-list-item-update" :to="{name: 'updateTA', params:{id: item.tourid}}">
                        <i class="fa-solid fa-pen-to-square"></i>
                    </router-link>
                    <div class="supporter-list-item supporter-list-item-delete" @click="handleDelete(item.tourid)"><i class="fa-solid fa-trash-can"></i></div>
                </div>
            </div>
            </template>
        </div>
        <FormYesNo :isDisplayYesNoForm="isDisplayYesNoForm" v-on:handleConfirm="handleConfirm"/>
    </div>
</template>
<script>
import SearchBar from '../../components/SearchBar.vue'
import FormYesNo from '../../components/FormYesNo.vue'
import {mapActions, mapMutations} from 'vuex';
export default {
    name: "categoryTA",
    data(){
        return{
            ListTA: [],
            renderListTA: [],
            selected: null,
            options: [
                { value: null, text: 'Lọc theo tỉnh thành' },
            ],
            isDisplayYesNoForm:{
				display: false,
				titleForm: 'Form xác nhận',
				answer: ''
			},
            tourId: '',
            listProvince: [
                { provinceid: 'A', provincetitle: 'Option A' },
                { provinceid: 'B', provincetitle: 'Option B' }
            ],
        }
    },
    methods:{
        ...mapActions(['getListTA', 'deleteTA', 'getProvince', 'getListTAByProvince', 'getTouristAttractionBySearch']),
        ...mapMutations(['setLoadingSuccess', 'setLoadingError', 'setPageLoading']),
        getValueSearch(value){
            this.getTouristAttractionBySearch(value).then(response=>{
                if(response.ok){
                    this.renderListTA = response.data
                }
            })
        },
        handleUpdate(value){
            console.log(value)
        },
        handleDelete(value){
            this.isDisplayYesNoForm.display = true;
            this.isDisplayYesNoForm.titleForm="Xác nhận xóa địa điểm";
            this.tourId = value;
        },
		handleConfirm(value){
			if(value == 'yes'){
				this.isDisplayYesNoForm.titleForm= "";
				this.answer=""
				this.deleteTA(this.tourId).then(response=>{
                    if(response.ok){
                        this.getListTA().then(response=>{
                            if(response.ok){
                                this.renderListTA = response.data
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
		},
        handleSelect(){
            var id = this.$refs.BFormSelect.localValue;
            var newlistTA = this.ListTA.filter(item=> !id ? item : item.provinceid == id   );
            this.renderListTA = newlistTA;
            console.log(this.renderListTA)
        }
    },
    components:{
        SearchBar,
        FormYesNo
    },
    created(){
        this.getListTA().then(response=>{
            if(response.ok){
                this.ListTA = response.data
                this.renderListTA = response.data
            }
        }),
        this.getProvince().then(response=>{
            if(response.ok){
                response.data.map(item=>{
                    this.options.push({
                        value: item.provinceid, text: item.provincetitle
                    })
                })
            }
        })
    }
}
</script>

<style>
</style>