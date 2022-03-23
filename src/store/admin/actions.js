import axios_instance from "../../plugins/axios"
export default {
    async adminChangePassword({dispatch, commit}, {oldPass, newPass}){
        try {
            console.log({oldPass, newPass})
            var result = await axios_instance({
                method: 'put',
                url: 'admin/changePassword',
                data:{
                    oldPass, newPass
                }
            })
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
            return{
                ok: false,
                message: error.message,
            }
        }
    },
    async updateAdmin({dispatch, commit}, {adminName, adminEmail}){
        try {
            console.log(adminName, adminEmail)
            var result = await axios_instance({
                method: 'put',
                url: 'admin/update',
                data:{
                    adminName, adminEmail
                }
            })
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
            return{
                ok: false,
                message: error.message,
            }
        }
    },
    async getAdmin({dispatch, commit}){
        try {
            var result = await axios_instance({
                method: 'get',
                url: 'admin',
            })
            console.log(result)
            if(result.data && result.data.status == 200){
                commit('set_admin', result.data.admin)
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
            return{
                ok: false,
                message: error.message,
            }
        }
    },
}