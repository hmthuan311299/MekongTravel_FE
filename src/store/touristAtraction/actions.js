import axios_instance from '../../plugins/axios'
export default {
    async getListTA({commit, dispatch, state}){
        try {
            var result = await axios_instance({
                method: 'get',
                url: `touristAttraction`,
            });
            if(result.data && result.data.status==200){
            //commit('set_listTouristAttraction', result.data.touristAttraction)
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
            console.log(result.data)
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
    async getAllDetailTouristAttraction({commit, dispatch, state}, {tourId, memberId}){
        try {
            console.log(memberId)
            if(memberId){
                Promise.all([
                    dispatch('getDetailTouristAttraction', tourId), 
                    dispatch('getimageTA', tourId), 
                    dispatch('getcomment', tourId),
                    dispatch('getEvaluate', tourId),
                    dispatch('checkEvaluate', {tourId, memberId})
                ])
            }
            else{
                Promise.all([
                    dispatch('getDetailTouristAttraction', tourId), 
                    dispatch('getimageTA', tourId), 
                    dispatch('getcomment', tourId),
                    dispatch('getEvaluate', tourId),
                ])
            }
            
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
    async addComment({commit, dispatch}, {commentContent, memberId, tourId, createAt, memberName, memberAvatar}){
        try {
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
                message: error.message,
            }
        }
    },
    async getEvaluate({commit}, idTour){
        try {
            var result = await axios_instance({
                method: 'get',
                url: `/evaluate?tourId=${idTour}`,
            });
            if(result.data && result.data.status == 200){
                commit('set_evaluate', result.data.evaluate);
            }
        } catch (error) {
            console.log(error.message)
        }
    },
    async checkEvaluate({commit}, {memberId, tourId}){
        try {
            console.log(memberId, tourId)
            var result = await axios_instance({
                method: 'get',
                url: `/evaluate/check?memberId=${memberId}&tourId=${tourId}`,
            });
            console.log(result)
            if(result.data && result.data.status == 200){
                commit('set_checkEvaluate', result.data.evaluate);
            }
        } catch (error) {
            console.log(error.message)
        }
    },
    async addEvaluate({commit, dispatch}, {numberStar, evaluateContent, memberId, tourId, createAt, memberName, memberAvatar}){
        try {
            // commit('setPageLoading', true)
            var result = await axios_instance({
                method: 'post',
                url: `/evaluate/add`,
                data:{
                    evaluateStar:numberStar,
                    evaluateContent,
                    createAt,
                    tourId,
                    memberId,
                }
            });
            console.log(numberStar, evaluateContent, memberId, tourId, createAt, memberName);
            console.log(result)
            if(result.data && result.data.status == 200){
                // commit('set_addEvaluate', {
                //         evaluatecontent: evaluateContent,
                //         evaluatestar:numberStar,
                //         createat: createAt,
                //         memberavatar:memberAvatar,
                //         memberid: memberId,
                //         membername: memberName,
                //         tourid: tourId,
                // })
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