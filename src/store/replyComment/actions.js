import axios_instance from '../../plugins/axios'
export default {
    async getReplyComment({commit}, tourId){
        try {
            var result = await axios_instance({
                method: 'get',
                url: `/replyComment?tourId=${tourId}`,
            });
            //console.log('replyComment', result)
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
    async addReplyComment({commit, dispatch}, {repCommentContent, memberId, tourId, createAt, commentId}){
        try {
            var result = await axios_instance({
                method: 'post',
                url: `/replyComment/add`,
                data:{
                    repCommentContent,
                    createAt,
                    tourId,
                    memberId,
                    commentId
                }
            });
            //console.log(result)
            if(result.data && result.data.status == 200){
                var listData = await dispatch('getReplyComment',tourId)
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
    async deleteReplyComment({commit}, id){
        try {
            var result = await axios_instance({
                method: 'delete',
                url: `/replyComment/delete/${id}`,    
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
            console.log(error.message);
            return{
                ok: false,
                message: error.message,
            }
        }
    },
}