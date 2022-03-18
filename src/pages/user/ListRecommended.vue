<template>
    <div class="container">
        <ul class="nav p-0 my-3 display-flex-center">
            <router-link :to="{name:'unapprovedList'}" exactActiveClass="user-nav-item-active" tag="li" class="nav-item user-menu-nav-item"><a class="nav-link">Danh sách đang chờ duyệt</a></router-link>
            <router-link :to="{name:'approvedList'}" exactActiveClass="user-nav-item-active" tag="li" class="nav-item user-menu-nav-item"><a class="nav-link">Danh sách đã duyệt</a></router-link>

        </ul>
        <div class="listRecommended">
            <template v-if="listData.length">
                <div class="supporter-list-content">
                    <div class="supporter-list-content-item" style="width: 45%">
                        <div class="supporter-list-item supporter-list-item-avatar"><i class="fa-solid fa-map-location-dot"></i></div>
                        <div class="supporter-list-item supporter-list-item-name">Bến Ninh Kiều</div>
                    </div>
                    <div class="supporter-list-item supporter-list-item-name"> <span class="span-fs">Cần Thơ</span></div>
                    <div class="supporter-list-item supporter-list-item-name"> <span class="span-fs-status">Đang xem xét</span></div>
                    <div class="supporter-list-content-item">
                        <!-- <router-link tag="div" class="supporter-list-item supporter-list-item-update" :to="{name: 'updateProvince'}">
                            <i class="fa-solid fa-pen-to-square"></i>
                        </router-link> -->
                        <div class="supporter-list-item supporter-list-item-delete" @click="handleDelete()"><i class="fa-solid fa-trash-can"></i></div>
                    </div>
                </div>
            </template>
            <template v-else>
                <h5 class="text-center mt-10">Hiện tại bạn vẫn chưa có đề xuất nào hết</h5>
            </template>
        </div>
    </div>
</template>

<script>
import {parseJwt} from "../../helpers"
import { setToken } from "../../helpers/constans"
import {mapActions, mapState} from 'vuex'
export default {
    name: 'list-Recommended',
    data(){
        return{
            listData: []
        }
    },
    computed:{
        ...mapState({
            memberId: state=>state.member.currentMember.memberid
        })
    },
    methods:{
        ...mapActions(['getApprovedListByMemberId', 'getUnapprovedListByMemberId'])
    },
    created(){
        // console.log("sss")
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
    .span-fs-status{
        font-size: 2vmin;
        background: rgb(247, 231, 18)
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