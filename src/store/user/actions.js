import axios_instance from "../../plugins/axios"
import {parseJwt} from "../../helpers/"
import { setToken } from "../../helpers/constans";
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
            console.log(setToken)
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
    },
    async getCurrentUserById({commit}, memberid){
        try {
            var result = await axios_instance({
                method: 'get',
                url: `member/${memberid}`,
            })
            if(result.data && result.data.status == 200){
                commit('set_inforUser', result.data.member)
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
    },
    async getKeepLoginUser({dispatch, commit}){
        try {
            var getToken = localStorage.getItem(setToken) || null;
            if(getToken){
                var value = parseJwt(getToken);
                if(value && value.memberid){
                   await dispatch('getCurrentUserById', value.memberid)
                   commit('set_accessToken', getToken)
                }
            }
        } catch (error) {
            console.log(error.message)
        }
    },
    async userChangePassword({dispatch, commit}, {oldPass, newPass, memberId}){
        try {
            console.log({oldPass, newPass, memberId})
            var result = await axios_instance({
                method: 'put',
                url: 'member/changePassword',
                data:{
                    oldPass, newPass, memberId
                }
            })
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
    }
}