import axios_instance from '../../plugins/axios'
export default {
    async getProvince({commit, dispatch, state}){
        try {
            var result = await  axios_instance({
                                    method: 'get',
                                    url: 'province',
                                });
            // console.log(result.data.province);
            if(result.data && result.data.status){
                commit('set_listProvince', result.data.province)
            }
        }catch (error) {
            console.log(error.message)
        }
    },
    async getProvinceById({commit, dispatch, state}, provinceId){
        try {
            var result = await axios_instance({
                                    method: 'get',
                                    url: `province/${provinceId}`,
                                });
            if(result.data && result.data.status){
                commit('set_province', result.data.province)
            }
        }catch (error) {
            console.log(error.message)
        }
    },
    async getListAllTouristAttraction({commit, dispatch, state}){
        try {
            var result = await axios_instance({
                method: 'get',
                url: `touristAttraction`,
            });
            if(result.data && result.data.status){
            commit('set_litsTouristAttraction', result.data.touristAttraction)
            }
        } catch (error) {
            
        }
    },
    async getProvinceAndTouristAttraction({commit, dispatch, state}){
        try {
            await Promise.all([dispatch('getProvince'), dispatch('getListAllTouristAttraction')])
        } catch (error) {
            console.log(error.message)
        }
    },
    async getDetailTouristAttraction({commit}, idTour){
        try {
            var result = await axios_instance({
                method: 'get',
                url: `/touristAttraction/getListTAById/${idTour}`,
            });
            console.log(result.data)
        } catch (error) {
            console.log(error.message)
        }
    }
}