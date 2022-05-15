<template>
    <div>
        <div class="user-menu-categoryTA container p-0 mb-4 ">
            <ul class="nav p-0 display-flex-center mt-2">
                <li class="nav-item user-menu-nav-item ">
                    <router-link exact-active-class="user-nav-item-active" tag="a" class="nav-link bg-white" :to="{name: 'statisticPlace'}">Thống kê số địa điểm</router-link>
                </li>
                <li class="nav-item user-menu-nav-item">
                    <router-link exact-active-class="user-nav-item-active" tag="a"  class="nav-link bg-white" :to="{name: 'statisticView'}">Thống kê lượt xem</router-link>
                </li>
                <li class="nav-item user-menu-nav-item">
                    <router-link exact-active-class="user-nav-item-active" tag="a"  class="nav-link bg-white" :to="{name: 'statisticSave'}">Thống kê lưu lại</router-link>
                </li>
                <li class="nav-item user-menu-nav-item">
                    <router-link exact-active-class="user-nav-item-active" tag="a"  class="nav-link bg-white" :to="{name: 'statisticEvaluate'}">Thống kê lượt đánh giá</router-link>
                </li>
            </ul>
        </div>
        <router-view></router-view>
    </div>
</template>

<script>
export default {
    data(){
        return{
            title: "Thống kê số địa điểm tại mỗi tỉnh thành"
        }
    },
}
</script>

<style>

</style>