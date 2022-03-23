import axios_instance from '../../plugins/axios'
export default {
    async getSupporter({commit}, tourId){
        try {
            var result = await axios_instance({
                method: 'get',
                url: `/supporter`,
            });
            console.log(result)
            if(result.data && result.data.status == 200){
                return{
                    ok: true,
                    message: result.data.message,
                    data: result.data.supporter || []
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
    async deleteSupporter({commit, dispatch}, suppId){
        try {
            console.log(suppId);
            var result = await axios_instance({
                method: 'delete',
                url: `supporter/delete/${suppId}`,
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
    async addSupporter({commit}, {suppEmail, suppPass, suppName, suppAddress, suppGender, suppYearOfBirth, suppPhone}){
        try {
            console.log(suppEmail, suppPass, suppName, suppAddress, suppGender, suppYearOfBirth, suppPhone)
            var result = await axios_instance({
                method: 'post',
                url: `/supporter/sign-up`,
                data:{
                    suppEmail, suppPass, suppName, suppAddress, suppGender, suppYearOfBirth, suppPhone
                }
            });
            console.log(result)
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
    async getSupporterById({commit}, suppId){
        try {
            var result = await axios_instance({
                method: 'get',
                url: `/supporter/${suppId}`,
            });
            console.log(result)
            if(result.data && result.data.status == 200){
                commit('set_SupporterById', result.data.supporter)
                return{
                    ok: true,
                    message: result.data.message,
                    data: result.data.supporter || []
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
    async updateSupporterByAdmin({commit}, {suppId, suppEmail, suppName, suppAddress, suppGender, suppYearOfBirth, suppPhone}){
        try {
            console.log(suppEmail, suppName, suppAddress, suppGender, suppYearOfBirth, suppPhone)
            var result = await axios_instance({
                method: 'put',
                url: `/supporter/updateByAdmin/${suppId}`,
                data:{
                    suppEmail, suppName, suppAddress, suppGender, suppYearOfBirth, suppPhone
                }
            });
            console.log(result)
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
}