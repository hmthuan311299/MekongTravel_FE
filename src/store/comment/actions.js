import axios_instance from '../../plugins/axios'
export default {
    async getComment({commit}, tourId){
        try {
            var result = await axios_instance({
                method: 'get',
                url: `/comment?tourId=${tourId}`,
            });
            console.log(result)
            if(result.data && result.data.status == 200){
                return{
                    ok: true,
                    message: result.data.message,
                    data: result.data.comment || []
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
                var listData = await dispatch('getComment',tourId)
                return{
                    ok: true,
                    message: result.data.message,
                    data: listData.data
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
}