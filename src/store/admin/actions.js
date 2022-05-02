import axios_instance from "../../plugins/axios"
import { setToken_Admin } from "../../helpers/constans";
import {parseJwt} from "../../helpers/"
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
                commit('set_admin', result.data)
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
    async AdminResetPassword({dispatch, commit}, email){
        try {
            commit('setPageLoading', true)
            var result = await axios_instance({
                method: 'post',
                url: 'admin/forgetPass',
                data:{
                    email
                }
            })
            commit('setPageLoading', false)
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
            commit('setPageLoading', false)
            return{
                ok: false,
                message: error.message,
            }
        }
    },
    async loginAdmin({commit, dispatch}, {adminAccount, adminPass}){
        try {
            var result = await axios_instance({
                method: 'post',
                url: 'admin/login',
                data:{
                    adminAccount,
                    adminPass
                }
            })
            if(result.data && result.data.status == 200){
                commit('set_admin', result.data);
                commit('set_ACCESS_TOKEN', result.data)
                return{
                    ok: true,
                    message: result.data.message,
                    data: result.data.admin
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
    async getKeepLoginAdmin({dispatch, commit}){
        try {
            var getToken = localStorage.getItem(setToken_Admin) || null;
            if(getToken){
                var value = parseJwt(getToken);
                if(value && value.adminAccount){
                   await dispatch('getAdmin')
                }
            }
        } catch (error) {
            console.log(error.message)
        }
    },
}