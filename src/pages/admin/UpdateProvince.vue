<template>
    <div class="container">
        <h1 class="text-center text-danger">Sửa thông tin Tỉnh Thành</h1>
        <div role="group">
            <label for="input-name-province" class="input-label">Tên tỉnh thành:</label>
            <b-form-input
                id="input-name-province"
                v-model="name"
                placeholder=""
                trim
            ></b-form-input>
            <div class="mt-3">
                <label for="input-desc mt-3" class="input-label">Mô tả tỉnh thành:</label>
                <b-form-textarea
                    id="input-desc"
                    v-model="desc"
                    rows="8"
                    placeholder=""
                    trim
                ></b-form-textarea>
            </div>
            <div class="center mt-3">
                <v-btn color="success" class="p-4" width="18%">
                    <span class="input-label">Xác nhận</span>
                </v-btn>
                <v-btn color="error" class="p-4 ml-2" width="18%" @click="handleCancel">
                    <span class="input-label" >Trở về</span>
                </v-btn>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "update-province",
    data: () => ({
      name: '',
      desc: ''
    }),
    computed: {
        
    },
    methods:{
        handleCancel(){
            this.$router.push({name: 'categoryProvince'})
        }
    }
}
</script>

<style scoped>
    .container{
        padding: 0 100px;
    }
    @media (max-width: 768px) {
        .container{
            padding: 0 20px;
        }
    }
    .input-label{
        font-size: 20px
    }
    /* .input-label{
        font-size: 25px
    } */
    
</style>