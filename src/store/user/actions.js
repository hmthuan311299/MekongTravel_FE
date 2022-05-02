import axios_instance from "../../plugins/axios"
import {parseJwt} from "../../helpers/"
import { setToken } from "../../helpers/constans";
export default {
    async getMember({commit}){
        try {
            var result = await axios_instance({
                method: 'get',
                url: `/member`,
            });
            
            if(result.data && result.data.status == 200){
                commit('set_listMember', result.data.member);
                return{
                    ok: true,
                    message: result.data.message,
                    data: result.data.member || []
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
    async getMemberBySearch({commit}, value){
        try { 
            var result = await axios_instance({
                method: 'get',
                url: `/member/search?search=${value}`,
            });
            
            if(result.data && result.data.status == 200){
                commit('set_listMember', result.data.member);
                return{
                    ok: true,
                    message: result.data.message,
                    data: result.data.member || []
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
    async getMemberById({commit}, id){
        try {
            var result = await axios_instance({
                method: 'get',
                url: `/member/${id}`,
            });
            if(result.data && result.data.status == 200){
                return{
                    ok: true,
                    message: result.data.message,
                    data: result.data.member || []
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
    async getBlockedMember({commit}){
        try {
            var result = await axios_instance({
                method: 'get',
                url: `/member/blocked`,
            });
            
            if(result.data && result.data.status == 200){
                commit('set_listMember', result.data.member);
                return{
                    ok: true,
                    message: result.data.message,
                    data: result.data.member || []
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
    },
    async getCurrentUserById({commit}, memberid){
        try {
            var result = await axios_instance({
                method: 'get',
                url: `member/${memberid}`,
            })
            if(result.data && result.data.status == 200){
                commit('set_currentMember', result.data.member)
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
    },
    async deleteMember({commit, dispatch}, memberId){
        try {
            var result = await axios_instance({
                method: 'delete',
                url: `member/delete/${memberId}`,
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
    async setBlockedMember({commit, dispatch}, memberId){
        try {
            var result = await axios_instance({
                method: 'get',
                url: `member/setBlocked/${memberId}`,
            });
            await dispatch('deleteRecommendedByMemberId', memberId)
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
    async setOpenMember({commit, dispatch}, memberId){
        try {
            var result = await axios_instance({
                method: 'get',
                url: `member/setOpen/${memberId}`,
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
    async updateMember({commit, dispatch}, value){
        console.log(value)
        try {
            if(value.memberAvatar){
                var formData = new FormData();
                formData.append("avatar", value.memberAvatar);
                formData.append("memberName", value.memberName);
                formData.append("memberAddress", value.memberAddress);
                formData.append("memberGender", value.memberGender);
                formData.append("memberPhone", value.memberPhone);
                formData.append("memberYearOfBirth", value.memberYearOfBirth);
                let config ={
                    headers: {
                        'accept':'multipart/form-data',
                    }
                }
                var result = await axios_instance.put(`/member/updateHavePicture/${value.memberId}`, formData, config)
                console.log(result);
                if(result.data && result.data.status==200){
                    return {
                        ok: true,
                        message: result.data.message
                    }
                }
                else{
                    return {
                        ok: false,
                        message: 'Đã xảy ra lỗi'
                    }
                }
            }else{
                var result = await axios_instance({
                    method: 'put',
                    url: `/member/update/${value.memberId}`,
                    data:{
                        memberName: value.memberName,              
                        memberAddress: value.memberAddress,
                        memberGender: value.memberGender,
                        memberPhone: value.memberPhone,
                        memberYearOfBirth: value.memberYearOfBirth
                    }
                });
                console.log(result);
                if(result.data && result.data.status==200){
                    return {
                        ok: true,
                        message: result.data.message
                    }
                }
                else{
                    return {
                        ok: false,
                        message: 'Đã xảy ra lỗi'
                    }
                }
            }
        }catch (error) {
            console.log(error.message)
            return{
                ok: false,
                message: error.message,
            }
        }
    },
    async userResetPassword({dispatch, commit}, email){
        try {
            commit('setPageLoading', true)
            var result = await axios_instance({
                method: 'post',
                url: 'member/forgetPass',
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
    async signUpMember({dispatch, commit}, {memberEmail, memberPass, memberName}){
        try {
            console.log(memberEmail, memberPass, memberName)
            var result = await axios_instance({
                method: 'post',
                url: `/member/sign-up`,
                data:{
                    memberEmail, memberPass, memberName
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
    }
}