<template>
    <div> 
        <b-container>
            <h1 class="text-white text-center bg-warning my-2 user-provinceTitle">{{province.provincetitle}}</h1>
            <template v-if="province">
                <h3>Giới thiệu chung</h3>
                <div class="user-introProvince" >
                    <img :src="handleGetURLProvincePicture" class="user-img-introProvince" alt="">
                    <div class="ml-3">
                        <p>{{province.provincedesc}}</p>
                    </div>
                </div>
            </template>
            <hr/>
        </b-container>
        <h4 class="text-center user-provinceTitle">Các địa điểm du lịch ở {{province.provincetitle}}</h4>
        <div class="user-menu-categoryTA container p-0 mb-4">
            <ul class="nav p-0 display-flex-center">
                <li class="nav-item user-menu-nav-item user-nav-item-active">
                    <a class="nav-link " href="#">Danh sách địa điểm</a>
                </li>
                <li class="nav-item user-menu-nav-item">
                    <a class="nav-link" href="#">Bảng xếp hạng</a>
                </li>
                <li class="nav-item user-menu-nav-item">
                    <a class="nav-link" href="#">Gợi ý cho tôi</a>
                </li>
            </ul>
        </div>
        <router-view></router-view>
    </div>
</template>

<script>
import port_file from '../../port_file'
import ListTAByProvince from './ListTAByProvince.vue'
import {mapActions, mapState} from 'vuex'
export default {
    name:'',
    components:{
        ListTAByProvince
    },
    data(){
        return{
            provinceId: this.$route.params.provinceId,
            port_file,
            
        }
    },
    computed:{
        ...mapState({
            province: state => state.touristAttraction.province
        })
        ,handleGetURLProvincePicture(){
            return `${this. port_file}${this.province.provincepicture}`
        }
    },
    methods:{
        ...mapActions(['getProvinceById'])
    },
    created(){
        this.provinceId = this.$route.params.provinceId
        this.getProvinceById(this.provinceId)
    },

}
</script>

<style>
.user-img-introProvince{
    width: 40%;
    height: 28%;
}
.user-introProvince{
    display: flex;
}
.user-provinceTitle{
    border-radius: 1rem;
}
.user-menu-nav-item{
    border: blue 1px solid;
    border-radius: 3px;
}
.user-menu-nav-item + .user-menu-nav-item{
    margin-left: 0.3rem
}
.user-menu-nav-item:hover{
    box-shadow: rgba(0, 0, 0, 0.4) 0px 3px 6px;
	transition: 0.5s ease
}
.user-nav-item-active{
    box-shadow: rgba(0, 0, 0, 0.5) 0px 3px 6px;
}
.display-flex-center{
    display: flex;
    justify-content: center;
}
</style>