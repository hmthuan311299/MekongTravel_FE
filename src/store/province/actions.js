import axios_instance from '../../plugins/axios'
export default {
    async getProvince({commit, dispatch, state}){
        try {
            var result = await  axios_instance({
                                method: 'get',
                                url: 'province',
                            });
            if(result.data && result.data.status==200){
                //commit('set_listProvince', result.data.province)
                return{
                    ok: true,
                    message: result.data.message,
                    data: result.data.province
                }
            }
            else{
                return{
                    ok: false,
                    message: result.data.message,
                }
            }
        }catch (error) {
            console.log(error.message)
            return{
                ok: false,
                message: error.message,
            }
        }
    },
    async getProvinceById({commit, dispatch, state}, provinceId){
        try {
            var result = await axios_instance({
                method: 'get',
                url: `province/${provinceId}`,
            });
            if(result.data && result.data.status){
                //commit('set_province', result.data.province);
                return{
                    ok: true,
                    message: result.data.message,
                    data: result.data.province
                }
            }
        }catch (error) {
            console.log(error.message)
        }
    },
}