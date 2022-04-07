import axios_instance from '../../plugins/axios'
export default {
    async getListTA({commit, dispatch, state}){
        try {
            var result = await axios_instance({
                method: 'get',
                url: `touristAttraction`,
            });
            if(result.data && result.data.status==200){
            return{
                ok: true,
                message: result.data.message,
                data: result.data.touristAttraction
            }
            }
        } catch (error) {
            console.log(error.message)
        }
    },
    async getListTAByProvince({commit, dispatch, state}, provinceId){
        try {
            var result = await axios_instance({
                method: 'get',
                url: `/touristAttraction/getByProvince/${provinceId}`,
            });
            if(result.data && result.data.status == 200){
                return{
                    ok: true,
                    message: result.data.message,
                    data: result.data.touristAttraction || []
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
    async getTAById({commit}, idTour){
        try {
            var result = await axios_instance({
                method: 'get',
                url: `/touristAttraction/getById/${idTour}`,
            });
            if(result.data && result.data.status == 200){
                commit("set_currentTA", result.data.touristAttraction)
                return{
                    ok: true,
                    message: result.data.message,
                    data: result.data.touristAttraction || {}
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
    async getimageTA({commit}, idTour){
        try {
            var result = await axios_instance({
                method: 'get',
                url: `/image/getimage/${idTour}`,
            });
            if(result.data && result.data.status == 200){
                commit('set_currentImageTA', result.data.image)
                return{
                    ok: true,
                    message: result.data.message,
                    data: result.data.image || []
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
    async getTouristAttractionBySearch({commit}, value){
        try {
            var result = await axios_instance({
                method: 'get',
                url: `/touristAttraction/search?valueSearch=${value}`,
            });
            console.log(result)
            if(result.data && result.data.status == 200){
                commit('set_listTouristAttraction', result.data.touristAttraction)
                return{
                    ok: true,
                    message: result.data.message,
                    data: result.data.touristAttraction
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
        }
    },
    async addTA({commit, dispatch}, value){
        try {
            var formData = new FormData();
            formData.append("avatar", value.tourPicture);
            formData.append("tourId", value.tourId);
            formData.append("tourTitle", value.tourTitle);
            formData.append("tourDesc", value.tourDesc);
            formData.append("tourAddress", value.tourAddress);
            formData.append("tourLinkVideo", value.tourLinkVideo);
            formData.append("tourLinkMap", value.tourLinkMap);
            formData.append("provinceId", value.provinceId);
            let config ={
                headers: {
                    'accept':'multipart/form-data',
                }
            }
            var result1 = await axios_instance.post('/touristAttraction/add', formData, config)
            var result2 = await dispatch('addImageTA', value);
            console.log(result1)
            if(result1.data && result1.data.status==200 && result2.ok){
                return {
                    ok: true,
                    message: result1.data.message
                }
            }
            else{
                return {
                    ok: false,
                    message: 'Đã xảy ra lỗi'
                }
            }
        } catch (error) {
            return {
                ok: false,
                message: error.message
            }
        }
    },
    async addImageTA({commit}, value){
        try {
            console.log(value.tourImages, value.tourId)
            let config ={
                headers: {
                    'accept':'multipart/form-data',
                }
            }
            var formData = new FormData();
            formData.append("tourId", value.tourId);
            for (const i of Object.keys(value.tourImages)) {
                formData.append('photos', value.tourImages[i])
            }
            var result = await axios_instance.post('image/add', formData, config);
            console.log("result", result)
            if(result.data && result.data.status==200){
                return {
                    ok: true,
                }
            }
            else{
                return {
                    ok: false,
                }
            }
        } catch (error) {
            return {
                ok: false,
            }
        }
    },
    async approvalTA({commit, dispatch}, value){
        try {
            if(value.tourPicture){
                var formData = new FormData();
                formData.append("avatar", value.tourPicture);
                formData.append("tourId", value.tourId);
                formData.append("tourTitle", value.tourTitle);
                formData.append("tourDesc", value.tourDesc);
                formData.append("tourAddress", value.tourAddress);
                formData.append("tourLinkVideo", value.tourLinkVideo);
                formData.append("tourLinkMap", value.tourLinkMap);
                formData.append("provinceId", value.provinceId);
                let config ={
                    headers: {
                        'accept':'multipart/form-data',
                    }
                }
                var result = await axios_instance.post('/touristAttraction/approval1', formData, config)
                console.log(result);
                await dispatch('approvalIMG', value);
                await dispatch('updateStatusRecommended', value)
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
                    method: 'post',
                    url: `/touristAttraction/approval2`,
                    data:{
                        tourId: value.tourId,
                        tourTitle: value.tourTitle,              
                        path: value.urlCurrentPicture,
                        tourDesc: value.tourDesc,
                        tourAddress: value.tourAddress,
                        tourLinkVideo: value.tourLinkVideo,
                        tourLinkMap: value.tourLinkMap,
                        provinceId: value.provinceId,
                    }
                });
                console.log(result);
                await dispatch('approvalIMG', value);
                await dispatch('updateStatusRecommended', value)
                if(result.data && result.data.status==200){
                    // 
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
    async approvalIMG({commit}, value){
        try {
            console.log('value.tourImages', value.tourImages)
            var result = await axios_instance({
                method: 'post',
                url: `image/approval`,
                data:{
                    tourId: value.tourId,
                    tourImages: value.tourImages
                }
            });
            console.log("result", result)
            if(result.data && result.data.status==200){
                return {
                    ok: true,
                }
            }
            else{
                return {
                    ok: false,
                }
            }
        } catch (error) {
            return {
                ok: false,
            }
        }
    },
    async deleteTA({commit}, tourId){
        try {
            console.log(tourId);
            var result = await axios_instance({
                method: 'delete',
                url: `touristAttraction/delete/${tourId}`,
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
    async countView({commit, dispatch}, {createAt, tourId}){
        try {
            console.log(createAt, tourId)
            var result = await axios_instance({
                method: 'post',
                url: `/view/countView`,
                data:{
                    createAt,
                    tourId,
                }
            });
            console.log(result)
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
        } catch (error) {
            return {
                ok: false,
                message: error.message
            }
        }
    },
    async deleteImage({commit}, listIdDelete){
        try {
            for(var i = 0; i<listIdDelete.length; i++){
                var result = await axios_instance({
                    method: 'delete',
                    url: `image/delete/${listIdDelete[i]}`,
                });
            }
            console.log(result);
            
        }catch (error) {
        }
    },
    async updateTA({commit, dispatch}, value){
        try {
            if(value.tourPicture){
                var formData = new FormData();
                formData.append("avatar", value.tourPicture);
                formData.append("tourTitle", value.tourTitle);
                formData.append("tourDesc", value.tourDesc);
                formData.append("tourAddress", value.tourAddress);
                formData.append("tourLinkVideo", value.tourLinkVideo);
                formData.append("tourLinkMap", value.tourLinkMap);
                formData.append("provinceId", value.provinceId);
                let config ={
                    headers: {
                        'accept':'multipart/form-data',
                    }
                }
                var result = await axios_instance.put(`/touristAttraction/updateHavePicture/${value.tourId}`, formData, config)
                console.log(result);
                if(value.tourImages && value.tourImages.length){
                    await dispatch('addImageTA', value);
                }
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
                    url: `/touristAttraction/update/${value.tourId}`,
                    data:{
                        tourId: value.tourId,
                        tourTitle: value.tourTitle,              
                        path: value.urlCurrentPicture,
                        tourDesc: value.tourDesc,
                        tourAddress: value.tourAddress,
                        tourLinkVideo: value.tourLinkVideo,
                        tourLinkMap: value.tourLinkMap,
                        provinceId: value.provinceId,
                    }
                });
                console.log(result);
                if(value.tourImages && value.tourImages.length){
                    await dispatch('addImageTA', value);
                }
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
    async getRankTAByProvince({commit, dispatch, state}, provinceId){
        try {
            var result = await axios_instance({
                method: 'get',
                url: `/touristAttraction/rank/${provinceId}`,
            });
            console.log('rank', result)
            if(result.data && result.data.status == 200){
                return{
                    ok: true,
                    message: result.data.message,
                    data: result.data.touristAttraction || []
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
    async getSuggestionTAByProvince({commit, dispatch, state}, provinceId){
        try {
            var result = await axios_instance({
                method: 'get',
                url: `/touristAttraction/suggestion/${provinceId}`,
            });
            console.log(result)
            if(result.data && result.data.status == 200){
                return{
                    ok: true,
                    message: result.data.message,
                    data: result.data.touristAttraction || []
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