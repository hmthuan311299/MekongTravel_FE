import axios_instance from '../../plugins/axios'
export default {
    async getListSaveTourist({commit, dispatch, state}, memberId){
        try {
            var result = await axios_instance({
                method: 'get',
                url: `/saveTA?memberId=${memberId}`,
            });
            console.log(result)
            if(result.data && result.data.status == 200){
                return{
                    ok: true,
                    message: result.data.message,
                    data: result.data.saveTA
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
    async addSaveTA({commit, dispatch, state}, {memberId, tourId, createAt}){
        try {
            var result = await axios_instance({
                method: 'post',
                url: `saveTA/add`,
                data:{
                    memberId, tourId, createAt
                }
            });
            if(result.data && result.data.status==200){
                return{
                    ok: true,
                    message: result.data.message,
                }
            }else{
                return{
                    ok: false,
                    message: result.data.message,
                }
            }
        } catch (error) {
            console.log(error.message);
            return{
                ok: false,
                message: result.data.message,
            }
        }
    },
    async checkSaveTouristAttraction({commit, dispatch, state}, {memberId, tourId}){
        try {
            var result = await axios_instance({
                method: 'post',
                url: `saveTA/check`,
                data:{
                    memberId, tourId
                }
            });
            console.log(result)
            if(result.data && result.data.status==200){
                return{
                    ok: true,
                    message: result.data.message,
                    data: result.data.saveTA
                }
            }else{
                return{
                    ok: false,
                    message: result.data.saveTA,
                }
            }
        } catch (error) {
            console.log(error.message);
            return{
                ok: false,
                message: result.data.message,
            }
        }
    },
    async deleteSaveTA({commit, dispatch, state}, {memberId, tourId}){
        try {
            var result = await axios_instance({
                method: 'delete',
                url: `saveTA/delete`,
                data:{
                    memberId, tourId
                }
            });
            if(result.data && result.data.status==200){
                return{
                    ok: true,
                    message: result.data.message,
                    data: result.data.saveTA
                }
            }else{
                return{
                    ok: false,
                    message: result.data.message,
                }
            }
        } catch (error) {
            console.log(error.message);
            return{
                ok: false,
                message: result.data.message,
            }
        }
    },
    
}