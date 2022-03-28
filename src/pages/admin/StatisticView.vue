<template>
    <div>
        <h1 class="text-center text-danger">{{statisticTitle}}</h1>
        <div>
            <b-nav pills>
                <b-nav-item-dropdown
                    id="my-nav-dropdown"
                    text="Tất cả"
                    toggle-class="nav-link-custom"
                    right
                >   
                    <b-dropdown-item>Tất cả</b-dropdown-item>
                    <b-dropdown-divider></b-dropdown-divider>
                    <b-dropdown-item v-for="(item, index) in province" :key="index">{{item}}</b-dropdown-item>                   
                </b-nav-item-dropdown>
                <b-nav-item-dropdown
                    id="my-nav-dropdown2"
                    text="Chọn Năm"
                    toggle-class="nav-link-custom"
                    right
                >
                    <b-dropdown-item>2022</b-dropdown-item>
                    <b-dropdown-item>2021</b-dropdown-item>

                </b-nav-item-dropdown>
                <b-nav-item-dropdown
                    id="my-nav-dropdown"
                    text="Chọn tháng"
                    toggle-class="nav-link-custom"
                    right
                >
                    <b-dropdown-item>Tháng 1</b-dropdown-item>
                    <b-dropdown-item>Tháng 2</b-dropdown-item>
                    <b-dropdown-item>Tháng 3</b-dropdown-item>
                    <b-dropdown-item>Tháng 4</b-dropdown-item>
                    <b-dropdown-item>Tháng 5</b-dropdown-item>
                    <b-dropdown-item>Tháng 6</b-dropdown-item>
                    <b-dropdown-item>Tháng 7</b-dropdown-item>
                    <b-dropdown-item>Tháng 8</b-dropdown-item>
                    <b-dropdown-item>Tháng 9</b-dropdown-item>
                    <b-dropdown-item>Tháng 10</b-dropdown-item>
                    <b-dropdown-item>Tháng 11</b-dropdown-item>
                    <b-dropdown-item>Tháng 12</b-dropdown-item>
                </b-nav-item-dropdown>
            </b-nav>
        </div>
        <chart-bar :labels="labels" :datasets="datasets" :options="options" :height="200"></chart-bar>
    </div>
</template>

<script>
import ChartBar from '../../components/ChartBar.vue'
export default {
    components: {
        ChartBar
    },
    props:{
      statisticTitle: {type: String, default:'Thống kê địa điểm có lượt xem nhiều nhất'}
    },
    data(){
        return{
            province: [
                'Cần Thơ',
                'Long An',
                'Đồng Tháp',
                'An Giang',
                'Tiền Giang',
                'Bến Tre',
                'Vĩnh Long',
                'Trà Vinh',
                'Hậu Giang',
                'Kiên Giang',
                'Sóc Trăng',
                'Bạc Liêu',
                'Cà Mau',
            ],
            labels: [
                'Bến Ninh Kiều',
                'Chợ Đêm Bến Ninh Kiều',
                'Chợ Nổi Cái Răng',
                'Nhà cổ Bình Thủy'
            ],
            datasets: [{
                label: 'Số lượt xem',
                data: [500, 120, 50, 20, 0],
                backgroundColor: 'rgba(255, 205, 86)',
                borderColor: 'rgb(75, 192, 192)',
                borderWidth: 2
            }],
            options: {responsive: true}
        }
    }
}
</script>

<style>

</style>