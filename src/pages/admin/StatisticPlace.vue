<template>
    <div>
        <h1 class="text-center text-danger">{{statisticTitle}}</h1>
        <template v-if="labels && labels.length">
            <chart-bar  :labels="labels" :datasets="datasets" :options="options" :height="200"></chart-bar>
        </template>
        
    </div>
</template>

<script>
import {mapActions} from 'vuex'
import ChartBar from '../../components/ChartBar.vue'
export default {
    components: {
        ChartBar
    },
    props:{
      statisticTitle: {type: String, default:'Thống kê số địa điểm tại mỗi tỉnh thành'}
    },
    methods:{
        ...mapActions(['statisticTAByProvince'])
    },
    data(){
        return{
            labels: [
                // 'Cần Thơ',
                // 'Long An',
                // 'Đồng Tháp',
                // 'An Giang',
                // 'Tiền Giang',
                // 'Bến Tre',
                // 'Vĩnh Long',
                // 'Trà Vinh',
                // 'Hậu Giang',
                // 'Kiên Giang',
                // 'Sóc Trăng',
                // 'Bạc Liêu',
                // 'Cà Mau',
            ],
            datasets: [{
                label: 'Số địa điểm',
                data: [0],
                backgroundColor: 'rgba(255, 205, 86)',
                borderColor: 'rgb(75, 192, 192)',
                borderWidth: 1
            }],
            options: {responsive: true}
        }
    },
    created(){
        this.statisticTAByProvince().then(response=>{
            if(response.ok){
                response.data.map(item => this.labels.push(item.provincetitle));
                response.data.map(item => this.datasets[0].data.unshift(item.count));
                
            }else{

            }
        }
            
        )
    }
}
</script>

<style>

</style>