<template>
    <div>
        <h1 class="text-center text-danger">{{statisticTitle}}</h1>
        <b-nav pills>
            <b-nav-item-dropdown
                id="my-nav-dropdown"
                text="Tất cả"
                toggle-class="nav-link-custom"
                right
            >   
                <b-dropdown-item @click="handleGetProvince('','Tất cả')">Tất cả</b-dropdown-item>
                <b-dropdown-item @click="handleGetProvince(province.provinceid, province.provincetitle)" v-for="province in listProvince" :key="province.provinceid">{{province.provincetitle}}</b-dropdown-item>                   
            </b-nav-item-dropdown>
            <b-nav-item-dropdown
                id="my-nav-dropdown2"
                :text="yearTitle"
                toggle-class="nav-link-custom"
                right
            >
                <b-dropdown-item @click="handleGetYear('', 'Chọn năm')" >Tất cả</b-dropdown-item>
                <b-dropdown-item 
                    @click="handleGetYear(year.yearId, year.yearTitle)" 
                    v-for="year in getListYear" 
                    :key="year.yearId">{{year.yearTitle}}
                </b-dropdown-item>
            </b-nav-item-dropdown>
            <b-nav-item-dropdown
                id="my-nav-dropdown"
                :text="monthTitle"
                toggle-class="nav-link-custom"
                right
            >   
                <b-dropdown-item @click="handleGetMonth('', 'Chọn tháng')" >Tất cả</b-dropdown-item>
                <b-dropdown-item @click="handleGetMonth(month.monthId, month.monthTitle)"  v-for="month in getListMonth" :key="month.monthId">{{month.monthTitle}}</b-dropdown-item>
                
            </b-nav-item-dropdown>
        </b-nav>
        <template v-if="labels && labels.length">
            <chart-bar :labels="labels" :datasets="datasets" :options="options" :height="200"></chart-bar>
        </template>
        <p class="text-center mt-10" v-else>Xin lỗi!! Hiện tại chưa có dữ liệu với tại mục này</p>
    </div>
</template>

<script>
import {mapActions, mapMutations} from 'vuex'
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
            provinceId:'',
            year:'',
            month:'',
            monthTitle:'Chọn tháng',
            yearTitle:'Chọn năm',
            provinceTitle:'Tất cả',
            listProvince: [],
            labels: [],
            datasets: [{
                label: 'Số lượt xem',
                data: [0],
                backgroundColor: 'rgba(255, 205, 86)',
                borderColor: 'rgb(75, 192, 192)',
                borderWidth: 2
            }],
            options: {responsive: true}
        }
    },
    computed:{
        getListMonth(){
            var listMonth = []
            for(let i = 1; i<=12;i++){
                listMonth.push({monthId: i, monthTitle:`Tháng ${i}`})
            }
            return listMonth
        },
        getListYear(){
            var listYear = [];
            var d = new Date();
            for(let i = d.getFullYear(); i>=2021;i--){
                listYear.push({yearId: i, yearTitle:i})
            }
            return listYear
        }
    },
    methods:{
        ...mapMutations(['setLoadingError', 'setPageLoading']),
        ...mapActions(['statisticProvince', 'getProvince']),
        getStatisticProvince(provinceId, year, month){
            this.statisticProvince({provinceId, year, month}).then(response=>{
                if(response.ok){
                    this.labels = [];
                    this.datasets[0].data= [0];
                    response.data.map(item => this.labels.unshift(item.tourtitle));
                    response.data.map(item => this.datasets[0].data.unshift(item.countview));
                }
            })
        },
        handleGetMonth(monthId, monthTitle){
            this.month = monthId;
            this.monthTitle = monthTitle
            if(this.year){
                this.getStatisticProvince(this.provinceId, this.year, this.month)
            }else{
                this.monthTitle ='Chọn tháng';
                this.month= '';
                let value ={
                        display: true,
                        message: "Bạn cần chọn năm trước"
                }
                this.setLoadingError(value)
                setTimeout(()=>{
                    this.setLoadingError({display: false})
                }, 1200); 
            }
        },
        handleGetYear(yearId, yearTitle){
            this.year = yearId;
            this.yearTitle = String(yearTitle)
            this.getStatisticProvince(this.provinceId, this.year, this.month)
            
        },
        handleGetProvince(provinceId, provinceTitle){
            this.provinceId = provinceId;
            this.provinceTitle = provinceTitle
            this.getStatisticProvince(this.provinceId, this.year, this.month)
        }
    },
    created(){
        this.getProvince().then(response=>{
            if(response.ok){
                this.listProvince = response.data  
            }
        })
        this.getStatisticProvince(this.provinceId, this.year, this.month);

    }
}
</script>

<style>

</style>