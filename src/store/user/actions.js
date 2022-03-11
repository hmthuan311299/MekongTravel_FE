import axios_instance from "../../plugins/axios"

export default {
    async loginMember({commit, dispatch}, {memberEmail, memberPass}){
        try {
            var result = await axios_instance({
                method: 'post',
                url: 'member/login',
                data:{
                    memberEmail: memberEmail,
                    memberPass: memberPass
                }
            })
            if(result.data && result.data.status == 200){
                commit('set_currentUser', result.data)
                return{
                    ok: true,
                    message: result.data.message,
                    data: result.data.member
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
    }
}