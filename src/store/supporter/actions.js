import axios_instance from '../../plugins/axios'
import {setToken_Supporter} from "../../helpers/constans";
import {parseJwt} from "../../helpers/"
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
    async supporterChangePassword({dispatch, commit}, {oldPass, newPass, suppId}){
        try {
            console.log({oldPass, newPass, suppId})
            var result = await axios_instance({
                method: 'put',
                url: 'supporter/changePassword',
                data:{
                    oldPass, newPass, suppId
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
    },
    async loginSupporter({commit, dispatch}, {suppEmail, suppPass}){
        try {
            var result = await axios_instance({
                method: 'post',
                url: 'supporter/login',
                data:{
                    suppEmail: suppEmail,
                    suppPass: suppPass
                }
            })
            console.log(setToken_Supporter)
            if(result.data && result.data.status == 200){
                commit('set_currentSupporter', result.data)
                return{
                    ok: true,
                    message: result.data.message,
                    data: result.data.supporter
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
    async getCurrentSupporterById({commit}, suppId){
        try {
            var result = await axios_instance({
                method: 'get',
                url: `/supporter/${suppId}`,
            });
            console.log(result)
            if(result.data && result.data.status == 200){
                commit('set_inforSupporter', result.data.supporter)
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
    async getKeepLoginSupporter({dispatch, commit}){
        try {
            var getToken = localStorage.getItem(setToken_Supporter) || null;
            console.log(getToken)
            if(getToken){
                var value = parseJwt(getToken);
                if(value && value.suppId){
                   await dispatch('getCurrentSupporterById', value.suppId)
                }
            }
        } catch (error) {
            console.log(error.message)
        }
    },
}