<template>
    <div class="container">
        <ul class="nav p-0 my-3 display-flex-center">
            <router-link :to="{name:'unapprovedList'}" exactActiveClass="user-nav-item-active" tag="li" class="nav-item user-menu-nav-item"><a class="nav-link">Danh sách đang chờ duyệt</a></router-link>
            <router-link :to="{name:'approvedList'}" exactActiveClass="user-nav-item-active" tag="li" class="nav-item user-menu-nav-item"><a class="nav-link">Danh sách đã duyệt</a></router-link>

        </ul>
        <div class="listRecommended">
            <template v-if="listData.length">
                <div class="supporter-list-content" v-for="item in listData" :key="item.recommendid">
                    <div class="supporter-list-content-item" style="width: 45%">
                        <div class="supporter-list-item supporter-list-item-avatar"><i class="fa-solid fa-map-location-dot"></i></div>
                        <div class="supporter-list-item supporter-list-item-name">{{item.recommendtitle}}</div>
                    </div>
                    <div class="supporter-list-item supporter-list-item-name"> <span class="span-fs">{{item.provincetitle}}</span></div>
                    <div v-if="$route.name == 'approvedList'" class="supporter-list-item supporter-list-item-name"> <span class="span-fs-status-approvedList">{{item.status}}</span></div>
                    <div v-else class="supporter-list-item supporter-list-item-name"> <span class="span-fs-status-unapprovedList">{{item.status}}</span></div>
                    <div class="supporter-list-content-item">
                        
                        <div class="supporter-list-item supporter-list-item-delete" @click="handleDelete(item.recommendid)"><i class="fa-solid fa-trash-can"></i></div>
                    </div>
                </div>
            </template>
            <template v-else>
                <h5 class="text-center mt-10">Hiện tại bạn vẫn chưa có đề xuất nào hết</h5>
            </template>
            <FormYesNo :isDisplayYesNoForm="isDisplayYesNoForm" v-on:handleConfirm="handleConfirm"/> 
        </div>
    </div>
</template>

<script>
import FormYesNo from '../../components/FormYesNo.vue'
import {parseJwt} from "../../helpers"
import { setToken } from "../../helpers/constans"
import {mapActions, mapState, mapMutations} from 'vuex'
export default {
    name: 'list-Recommended',
    data(){
        return{
            listData: [],
            recommendId:'',
            isDisplayYesNoForm:{
				display: false,
				titleForm: 'Form xác nhận',
				answer: ''
			},
        }
    },
    components:{
        FormYesNo
    },
    computed:{
        ...mapState({
            memberId: state=>state.member.currentMember.memberid
        })
    },
    methods:{
        ...mapMutations(['setLoadingSuccess', 'setLoadingError', 'setPageLoading']),
        ...mapActions(['getApprovedListByMemberId', 'getUnapprovedListByMemberId','deleteRecommended']),
        handleDelete(value){
            this.isDisplayYesNoForm.display = true;
            this.isDisplayYesNoForm.titleForm= 
            "Xác nhận xóa?";
            this.recommendId = value;
        },
		handleConfirm(value){
			if(value == 'yes'){
				this.isDisplayYesNoForm.titleForm= "";
				this.answer=""
				this.deleteRecommended(this.recommendId).then(response=>{
                    if(response.ok){
                        var newArr = [...this.listData]
                        this.listData = newArr.filter(item => item.recommendid != this.recommendId);
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
    watch:{
		$route (to, from){ 
            if(to.name == 'unapprovedList'){
                this.getUnapprovedListByMemberId(this.memberId).then(response=>{
                    if(response.ok){
                        this.listData = response.data
                    }
                });
            }
            if(to.name == 'approvedList'){
                this.getApprovedListByMemberId(this.memberId).then(response=>{
                    if(response.ok){
                        this.listData = response.data
                    }
                });
            }
		}
	},
    created(){
        var getToken = localStorage.getItem(setToken) || null;
        if(getToken){
            var value = parseJwt(getToken);
            var memberId = value.memberid
            if(memberId){
                if(this.$route.name =='unapprovedList'){
                    console.log(this.$route.name)
                    this.getUnapprovedListByMemberId(memberId).then(response=>{
                        if(response.ok){
                            this.listData = response.data
                        }
                    });
                }
                if(this.$route.name =='approvedList'){
                    console.log(this.$route.name)
                    this.getApprovedListByMemberId(memberId).then(response=>{
                        if(response.ok){
                            this.listData = response.data
                        }
                    });;
                }
            }
        }
    }
}
</script>

<style scoped>
    .span-fs-status-unapprovedList{
        font-size: 2vmin;
        background: rgb(255, 196, 0);
        padding: 3px;
        border-radius: 5px;
    }
    .span-fs-status-approvedList{
        font-size: 2vmin;
        background: rgb(0, 255, 42);
        padding: 3px;
        border-radius: 5px;
        color:rgb(51, 51, 51)
    }
    .supporter-list-content{
    background: white;
    height: 60px;
    border: 2px solid blue;
    border-radius: 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 5px;
}
.supporter-list-content-item{
    margin: 0 20px;
    display: flex;
    align-items: center;
}
.supporter-list-item{
    font-size:25px
}
.supporter-list-item + .supporter-list-item{
    margin-left: 20px
}
.supporter-list-item-city{
    font-size:24px
}
.supporter-list-content:hover{
    position: relative;
    z-index: 10000;
    box-shadow: 6px 6px 6px #aaa;
    transition: 0.5s ease;
}
.supporter-list-item-update{
    color: #ffc107;
}
.supporter-list-item-delete{
    color: red;
}
.supporter-list-item-delete:hover, .supporter-list-item-update:hover{
    font-size: 27px;
    transition: 0.1s ease;
}
</style>