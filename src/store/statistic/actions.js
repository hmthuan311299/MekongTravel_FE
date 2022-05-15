import axios_instance from '../../plugins/axios'
export default {
    async statisticTAByProvince({commit}){
        try {
            var result = await axios_instance({
                method: 'get',
                url: `/statistic/TAByProvince`,
            });
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
    async statisticSave({commit}, {provinceId='', year='', month=''}){
        try {
            console.log('provinceId, year, month', provinceId, year, month)
            var result = await axios_instance({
                method: 'get',
                url: `/statistic/save?provinceId=${provinceId}&year=${year}&month=${month}`,
            });
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
    async statisticEvaluate({commit}, {provinceId='', year='', month=''}){
        try {
            console.log('provinceId, year, month', provinceId, year, month)
            var result = await axios_instance({
                method: 'get',
                url: `/statistic/evaluate?provinceId=${provinceId}&year=${year}&month=${month}`,
            });
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
    async statisticView({commit}, {provinceId='', year='', month=''}){
        try {
            console.log('provinceId, year, month', provinceId, year, month)
            var result = await axios_instance({
                method: 'get',
                url: `/statistic/view?provinceId=${provinceId}&year=${year}&month=${month}`,
            });
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