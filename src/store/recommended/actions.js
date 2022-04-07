import axios_instance from '../../plugins/axios'
export default {
    async getListReTA({commit, dispatch, state}){
        try {
            var result = await axios_instance({
                method: 'get',
                url: `recommendedPlace`,
            });
            console.log(result)
            if(result.data && result.data.status==200){
            return{
                ok: true,
                message: result.data.message,
                data: result.data.recommended
            }
            }
        } catch (error) {
            console.log(error.message)
        }
    },
    async addRecommended({commit, dispatch}, value){
        try {
            var formData = new FormData();
            formData.append("avatar", value.recommendPicture);
            formData.append("recommendId", value.recommendId);
            formData.append("recommendTitle", value.recommendTitle);
            formData.append("recommendDesc", value.recommendDesc);
            formData.append("recommendAddress", value.recommendAddress);
            formData.append("recommendLinkVideo", value.recommendLinkVideo);
            formData.append("recommendLinkMap", value.recommendLinkMap);
            formData.append("provinceId", value.provinceId);
            formData.append("memberId", value.memberId);
            let config ={
                headers: {
                    'accept':'multipart/form-data',
                }
            }
            var result1 = await axios_instance.post('/recommendedPlace/add', formData, config)
            var result2 = await dispatch('addRecommendedImage', value);
            if(result1.data && result1.data.status==200 && result2.ok){
                return {
                    ok: true,
                    message:'Đề xuất thành công'
                }
            }
            else{
                return {
                    ok: false,
                    message:'Đã có lỗi xảy ra'
                }
            }
        } catch (error) {
            console.log(error.message)
            return {
                ok: false,
                message: error.message
            }
        }
    },
    async addRecommendedImage({commit}, value){
        try {
            let config ={
                headers: {
                    'accept':'multipart/form-data',
                }
            }
            var formData = new FormData();
            formData.append("recommendId", value.recommendId);
            for (const i of Object.keys(value.recommendImages)) {
                formData.append('photos', value.recommendImages[i])
            }
            var result = await axios_instance.post('imgRecommended/add', formData, config);
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
    async getApprovedListByMemberId({commit}, memberId){
        try {
            var result = await axios_instance({
                method: 'get',
                url: `/recommendedPlace/approvedListByMemberId?memberId=${memberId}`,
            });
            console.log(result)
            if(result.data && result.data.status == 200){
                return{
                    ok: true,
                    message: result.data.message,
                    data: result.data.recommended || []
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
    async getUnapprovedListByMemberId({commit}, memberId){
        try {
            var result = await axios_instance({
                method: 'get',
                url: `/recommendedPlace/unapprovedListByMemberId?memberId=${memberId}`,
            });
            console.log(result)
            if(result.data && result.data.status == 200){
                return{
                    ok: true,
                    message: result.data.message,
                    data: result.data.recommended || []
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
    async getRecommendedById({commit}, id){
        try {
            console.log('getRecommendedById')
            var result = await axios_instance({
                method: 'get',
                url: `recommendedPlace/${id}`,
            });
            console.log(result)
            if(result.data && result.data.status==200){
                commit('set_Recommended', result.data.recommended)
                return{
                    ok: true,
                    message: result.data.message,
                    data: result.data.recommended
                }
            }
        } catch (error) {
            console.log(error.message)
        }
    },
    async getIMGRecommendedById({commit, dispatch, state}, id){
        try {
            console.log('getRecommendedById')
            var result = await axios_instance({
                method: 'get',
                url: `imgRecommended/${id}`,
            });
            console.log(result)
            if(result.data && result.data.status==200){
                return{
                    ok: true,
                    message: result.data.message,
                    data: result.data.image
                }
            }
        } catch (error) {
            console.log(error.message)
        }
    },
    async updateStatusRecommended({commit, dispatch, state}, value){
        try {
            if(value.tourPicture){
                var formData = new FormData();
                formData.append("avatar", value.tourPicture);
                formData.append("recommendTitle", value.tourTitle);
                formData.append("recommendDesc", value.tourDesc);
                formData.append("recommendAddress", value.tourAddress);
                // formData.append("tourId", value.tourId);
                // formData.append("tourLinkVideo", value.tourLinkVideo);
                // formData.append("tourLinkMap", value.tourLinkMap);
                formData.append("provinceId", value.provinceId);
                let config ={
                    headers: {
                        'accept':'multipart/form-data',
                    }
                }
                var result = await axios_instance.put(`/recommendedPlace/approvedBySupporterHavePicture/${value.tourId}`, formData, config)
                console.log(result);
            }else{
                var result = await axios_instance({
                    method: 'put',
                    url: `/recommendedPlace/approvedBySupporter/${value.tourId}`,
                    data:{
                        recommendTitle: value.tourTitle,
                        recommendDesc: value.tourDesc,
                        recommendAddress: value.tourAddress,
                        provinceId: value.provinceId,
                    }
                });
            }
        } catch (error) {
            
        }
    },
    async deleteRecommended({commit}, recommendId){
        try {
            console.log(recommendId);
            var result = await axios_instance({
                method: 'delete',
                url: `recommendedPlace/delete/${recommendId}`,
            });
            console.log(result);
            if(result.data && result.data.status){
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
        }catch (error) {
            console.log(error.message);
            return{
                ok: false,
                message: error.message,
            }
        }
    },
    async deleteRecommendedByMemberId({commit}, memberId){
        try {
            var result = await axios_instance({
                method: 'delete',
                url: `recommendedPlace/deleteByMemberId/${memberId}`,
            });
            if(result.data && result.data.status){
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
        }catch (error) {
            console.log(error.message);
            return{
                ok: false,
                message: error.message,
            }
        }
    },
}