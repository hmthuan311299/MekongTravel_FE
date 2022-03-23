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
    async addTA({commit, dispatch}, value){
        try {
            var formData = new FormData();
            formData.append("avatar", value.tourPicture);
            formData.append("tourId", value.tourId);
            formData.append("tourTitle", value.tourTitle);
            formData.append("tourDesc", value.tourDesc);
            formData.append("tourAddress", value.tourAddress);
            formData.append("tourLinkVideo", value.tourLinkVideo);
            formData.append("tourLinkMap", value.tourLinkMap);
            formData.append("provinceId", value.provinceId);
            let config ={
                headers: {
                    'accept':'multipart/form-data',
                }
            }
            var result1 = await axios_instance.post('/touristAttraction/add', formData, config)
            var result2 = await dispatch('addImageTA', value);
            console.log(result1)
            if(result1.data && result1.data.status==200 && result2.ok){
                return {
                    ok: true,
                    message: result1.data.message
                }
            }
            else{
                return {
                    ok: false,
                    message: 'Đã xảy ra lỗi'
                }
            }
        } catch (error) {
            return {
                ok: false,
                message: error.message
            }
        }
    },
    async addImageTA({commit}, value){
        try {
            console.log(value.tourImages, value.tourId)
            let config ={
                headers: {
                    'accept':'multipart/form-data',
                }
            }
            var formData = new FormData();
            formData.append("tourId", value.tourId);
            for (const i of Object.keys(value.tourImages)) {
                formData.append('photos', value.tourImages[i])
            }
            var result = await axios_instance.post('image/add', formData, config);
            console.log("result", result)
            if(result.data && result.data.status==200){
                return {
                    ok: true,
                }
            }
            else{
                return {
                    ok: false,
                }
            }
        } catch (error) {
            return {
                ok: false,
            }
        }
    },
}