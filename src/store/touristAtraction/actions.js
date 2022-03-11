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
            commit('set_listTouristAttraction', result.data.touristAttraction)
            }
        } catch (error) {
            console.log(error.message)
        }
    },
    async getListTAByProvince({commit, dispatch, state}, provinceId){
        try {
            var result = await axios_instance({
                method: 'get',
                url: `/touristAttraction/getListTAByProvinceId/1`,
            });
            console.log(result.data)
            if(result.data && result.data.status){
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
            return{
                ok: false,
                message: result.data.message,
            }

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
            if(result.data && result.data.status == 200){
                commit('set_currentAndHistoryTA', result.data.touristAttraction);
                commit('set_HistoryTA', result.data.touristAttraction)
            }
        } catch (error) {
            console.log(error.message)
        }
    },
    async getimageTA({commit}, idTour){
        try {
            var result = await axios_instance({
                method: 'get',
                url: `/image/getimage/${idTour}`,
            });
            if(result.data && result.data.status == 200){
                commit('set_imageTA', result.data.image);
            }
        } catch (error) {
            console.log(error.message)
        }
    },
    async getcomment({commit}, idTour){
        try {
            var result = await axios_instance({
                method: 'get',
                url: `/comment?tourId=${idTour}`,
            });
            if(result.data && result.data.status == 200){
                commit('set_comment', result.data.comment);
            }
        } catch (error) {
            console.log(error.message)
        }
    },
    async getAllDetailTouristAttraction({commit, dispatch, state}, idTour){
        try {
            Promise.all([
                        dispatch('getDetailTouristAttraction', idTour), 
                        dispatch('getimageTA', idTour), 
                        dispatch('getcomment', idTour)
                    ])
        } catch (error) {
            console.log(error.message)
        }
    },
    async getTAandProvinceByProvinceId({commit, dispatch, state}, id){
        try {
            Promise.all([dispatch('getProvinceById', id), dispatch('getListTAByProvince', id)])
        } catch (error) {
            console.log(error.message)
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
    async addComment({commit, dispatch}, {commentContent, memberId, tourId, createAt}){
        try {
            // commit('setPageLoading', true)
            var result = await axios_instance({
                method: 'post',
                url: `/comment/addcomment`,
                data:{
                    commentContent,
                    createAt,
                    tourId,
                    memberId,
                }
            });
            if(result.data && result.data.status == 200){
                commit('set_addcomment', {
                        commentcontent: commentContent,
                        commentid:memberId,
                        createat: createAt,
                        memberavatar:null,
                        memberid: memberId,
                        membername:"Kim Luân",
                        tourid: tourId,
                })
                return{
                    ok: true,
                    message: result.data.message,
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
            return{
                ok: false,
                message: result.data.message,
            }
        }
    },
}