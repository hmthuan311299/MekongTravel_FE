import axios_instance from '../../plugins/axios'
export default {
    async getEvaluate({commit}, tourId){
        try {
            var result = await axios_instance({
                method: 'get',
                url: `/evaluate?tourId=${tourId}`,
            });
            if(result.data && result.data.status == 200){
                // commit('set_evaluate', result.data.evaluate);
                // console.log("đ", result.data.evaluate)
                return{
                    ok: true,
                    message: result.data.message,
                    data: result.data.evaluate
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
            if(result.data && result.data.status == 200){
                var listEvaluate = await dispatch("getEvaluate", tourId);
                return{
                    ok: true,
                    message: result.data.message,
                    data: listEvaluate.data
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
    async checkEvaluate({commit}, {memberId, tourId}){
        try {
            
            var result = await axios_instance({
                method: 'get',
                url: `/evaluate/check?memberId=${memberId}&tourId=${tourId}`,
            });
            console.log('checkEvaluate',result)
            if(result.data && result.data.status == 200){
                return{
                    ok: true,
                    message: result.data.message,
                    data: result.data.evaluate
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