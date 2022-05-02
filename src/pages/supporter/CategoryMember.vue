<template>
    <div>
        <h1 class="text-center text-danger">Danh mục Thành Viên</h1>
        <search-bar v-on:getValueSearch="getValueSearch"/>
        <div class="user-menu-categoryTA container p-0 mb-4">
            <ul class="nav p-0 display-flex-center">
                <li class="nav-item user-menu-nav-item ">
                    <router-link exact-active-class="user-nav-item-active" tag="a" class="nav-link" :to="{name: 'categoryMember'}">Danh sách thành viên</router-link>
                </li>
                <li class="nav-item user-menu-nav-item">
                    <router-link exact-active-class="user-nav-item-active" tag="a"  class="nav-link" :to="{name: 'categoryBlockedMember'}">Thành viên bị khóa</router-link>
                </li>
            </ul>
        </div>
        <card-member :listMember="listMember"/>
    </div>
</template>

<script>
import {mapActions, mapState, mapMutations} from 'vuex'
import CardMember from '../../components/CardMember.vue'
import SearchBar from '../../components/SearchBar.vue'
export default {
    components: { CardMember, SearchBar},
    data(){
        return{
            search: '',
            
        }
    },
    computed:{
        ...mapState({
            listMember: state => state.member.listMember
        })
    },
    methods:{
        ...mapActions(['getMember', 'getBlockedMember', 'getMemberBySearch']),
        handleGetListMember(){
            this.getMember()
        },
        handleGetListBlockedMember(){
            this.getBlockedMember()
        },
        getValueSearch(value){
            this.getMemberBySearch(value);
        },
    },
    created(){
        this.handleGetListMember();
        if(this.$route.name =='categoryMember'){
             this.handleGetListMember();
        }
        if(this.$route.name =='categoryBlockedMember'){
            this.handleGetListBlockedMember();
        }
    },
    watch:{
		$route (to, from){ 
            if(to.name == 'categoryMember'){
                this.handleGetListMember();
            }
            if(to.name == 'categoryBlockedMember'){
                this.handleGetListBlockedMember();
            }
		}
	},
}
</script>

<style>

</style>