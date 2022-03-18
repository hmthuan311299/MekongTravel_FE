import axios_instance from '../../plugins/axios'
export default {
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
            console.log(memberId)
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
        console.log(memberId)
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
}