import axios_instance from '../../plugins/axios'
export default {
    async getListTA({commit, dispatch, state}){
        try {
            var result = await axios_instance({
                method: 'get',
                url: `touristAttraction`,
            });
            if(result.data && result.data.status==200){
            return{
                ok: true,
                message: result.data.message,
                data: result.data.touristAttraction
            }
            }
        } catch (error) {
            console.log(error.message)
        }
    },
    async getListTAByProvince({commit, dispatch, state}, provinceId){
        try {
            var result = await axios_instance({
                method: 'get',
                url: `/touristAttraction/getListTAByProvinceId/${provinceId}`,
            });
            if(result.data && result.data.status == 200){
                return{
                    ok: true,
                    message: result.data.message,
                    data: result.data.touristAttraction || []
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
    async getTAById({commit}, idTour){
        try {
            var result = await axios_instance({
                method: 'get',
                url: `/touristAttraction/getById/${idTour}`,
            });
            if(result.data && result.data.status == 200){
                return{
                    ok: true,
                    message: result.data.message,
                    data: result.data.touristAttraction || {}
                }
            }
            else{
                return{
                    ok: false,
                    message: result.data.message,
                }
            }
        } catch (error) {
            console.log(error.message);
            return{
                ok: false,
                message: error.message,
            }
        }
    },
    async getimageTA({commit}, idTour){
        try {
            var result = await axios_instance({
                method: 'get',
                url: `/image/getimage/${idTour}`,
            });
            if(result.data && result.data.status == 200){
                return{
                    ok: true,
                    message: result.data.message,
                    data: result.data.image || []
                }
            }
            else{
                return{
                    ok: false,
                    message: result.data.message,
                }
            }
        } catch (error) {
            console.log(error.message);
            return{
                ok: false,
                message: error.message,
            }
        }
    },
    async getTouristAttractionBySearch({commit}, value){
        try {
            var result = await axios_instance({
                method: 'get',
                url: `/touristAttraction/search?valueSearch=${value}`,
            });
            if(result.data && result.data.status == 200){
                commit('set_listTouristAttraction', result.data.touristAttraction)
                return{
                    ok: true,
                    message: result.data.message,
                    listData: result.data.touristAttraction
                }
            }
            else{
                return{
                    ok: false,
                    message: result.data.message,
                }
            }
        } catch (error) {
            console.log(error.message)
        }
    },
}