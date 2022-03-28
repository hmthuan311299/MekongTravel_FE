<template>
    <div>
        <div class="user-menu-categoryTA container p-0 mb-4">
            <ul class="nav p-0 display-flex-center">
                <li class="nav-item user-menu-nav-item ">
                    <router-link exact-active-class="user-nav-item-active" tag="a" class="nav-link" :to="{name: 'statisticPlace'}">Thống kê số địa điểm</router-link>
                </li>
                <li class="nav-item user-menu-nav-item">
                    <router-link exact-active-class="user-nav-item-active" tag="a"  class="nav-link" :to="{name: 'statisticView'}">Thống kê lượt xem</router-link>
                </li>
            </ul>
        </div>
        <router-view></router-view>
    </div>
</template>

<script>
import StatisticPlace from './StatisticPlace.vue'
import StatisticView from './StatisticPlace.vue'
export default {
    data(){
        return{
            title: "Thống kê số địa điểm tại mỗi tỉnh thành"
        }
    },
    components: {
        StatisticPlace, StatisticView
    },
    methods:{
        
    }
}
</script>

<style>

</style>