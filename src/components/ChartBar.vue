<script>
import {Bar} from 'vue-chartjs'
export default {
    extends: Bar,
    props:{
        labels: Array,
        datasets: Array,
        options: Object
    },
    watch: {
        labels: function() {
            this.$data._chart.destroy();
            this.displayChart({labels: this.labels, datasets: this.datasets}, this.options)
        }
    },
    methods:{
        displayChart({labels, datasets}, options){
            this.renderChart({labels, datasets}, options)
        }
    },
    mounted(){
        this.displayChart({labels: this.labels, datasets: this.datasets}, this.options)
    }
}
</script>