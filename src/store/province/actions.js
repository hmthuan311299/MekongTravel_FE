import axios_instance from '../../plugins/axios'
export default {
    async getProvince({commit, dispatch, state}){
        try {
            var result = await  axios_instance({
                                method: 'get',
                                url: 'province',
                            });
            if(result.data && result.data.status==200){
                //commit('set_listProvince', result.data.province)
                return{
                    ok: true,
                    message: result.data.message,
                    data: result.data.province
                }
            }
            else{
                return{
                    ok: false,
                    message: result.data.message,
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
    async getProvinceById({commit}, provinceId){
        try {
            var result = await axios_instance({
                method: 'get',
                url: `province/${provinceId}`,
            });
            if(result.data && result.data.status){
                commit('set_currentProvince', result.data.province)
                return{
                    ok: true,
                    message: result.data.message,
                    data: result.data.province
                }
            }
        }catch (error) {
            console.log(error.message)
        }
    },
    async addProvince({commit, dispatch}, value){
        try {
            console.log(value)
            var formData = new FormData();
            formData.append("avatar", value.provincePicture);
            formData.append("provinceTitle", value.provinceTitle);
            formData.append("provinceDesc", value.provinceDesc);
            let config ={
                headers: {
                    'accept':'multipart/form-data',
                }
            }
            var result = await axios_instance.post('/province/add', formData, config)
            if(result.data && result.data.status==200){
                return {
                    ok: true,
                    message: result.data.message
                }
            }
            else{
                return {
                    ok: false,
                    message: result.data.message
                }
            }
        } catch (error) {
            console.log(error.message)
            return {
                ok: false,
                message: error.message
            }
        }
    },
    async updateProvince({commit, dispatch}, value){
        try {
            console.log(value)
            var formData = new FormData();
            if(value.provincePicture){
                formData.append("avatar", value.provincePicture);
                formData.append("provinceTitle", value.provinceTitle);
                formData.append("provinceDesc", value.provinceDesc);
                let config ={
                    headers: {
                        'accept':'multipart/form-data',
                    }
                }
                var result = await axios_instance.put(`/province/updateHavePicture/${value.provinceId}`, formData, config)
                if(result.data && result.data.status==200){
                    return {
                        ok: true,
                        message: result.data.message
                    }
                }
                else{
                    return {
                        ok: false,
                        message: result.data.message
                    }
                }
            }else{
                var result = await axios_instance({
                    method: 'put',
                    url: `/province/update/${value.provinceId}`,
                    data:{
                        provinceTitle: value.provinceTitle,
                        provinceDesc: value.provinceDesc,
                    }
                });
                if(result.data && result.data.status == 200){
                    commit('set_currentProvince', result.data.province)
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
            }
            
        } catch (error) {
            console.log(error.message)
            return {
                ok: false,
                message: error.message
            }
        }
    },
    async deleteProvince({commit, dispatch}, provinceId){
        try {
            console.log(provinceId);
            var result = await axios_instance({
                method: 'delete',
                url: `province/delete/${provinceId}`,
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
}