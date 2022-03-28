import axios_instance from '../../plugins/axios'
export default {
    async statisticTAByProvince({commit}){
        try {
            var result = await axios_instance({
                method: 'get',
                url: `/statistic/statisticTAByProvince`,
            });
            console.log(result)
            if(result.data && result.data.status == 200){
                return{
                    ok: true,
                    message: result.data.message,
                    data: result.data.statistic || []
                }
            }
            else{
                return{
                    ok: false,
                    message: result.data.message,
                }
            }
        } catch (error) {
            return{
                ok: false,
                message: error.message,
            }
        }
    },
    
}