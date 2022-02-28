<template>
    <div class="container">
        <h1 class="text-center text-danger">Thêm địa điểm mới</h1>
        <div role="group">
            <label for="input-name-province" class="input-label">Tên địa điểm:</label>
            <b-form-input
                id="input-name-province"
                v-model="name"
                placeholder=""
                trim
            ></b-form-input>
            <div class="mt-3">
                <label for="input-name-province" class="input-label">Ảnh đại diện cho địa điểm:</label>
                <v-file-input
                    accept="image/*"
                    label="Tải ảnh từ máy tính bạn"
                    required
                ></v-file-input>
            </div>
            <div class="mt-3">
                <label for="input-desc mt-3" class="input-label">Mô tả địa điểm:</label>
                <b-form-textarea
                    id="input-desc"
                    v-model="desc"
                    rows="8"
                    placeholder=""
                    trim
                ></b-form-textarea>
            </div>
            <div class="mt-3">
                <label for="input-name-province" class="input-label">Tỉnh thành:</label>
                <b-form-select
                    v-model="selected"
                    :options="options"
                    class="mb-3"
                    value-field="item"
                    text-field="name"
                    disabled-field="notEnabled"
                ></b-form-select>
            </div>
            <div class="mt-3">
                <label for="input-name-province" class="input-label">Địa chỉ địa điểm:</label>
                <b-form-input
                    id="input-name-province"
                    v-model="name"
                    placeholder=""
                    trim
                ></b-form-input>
            </div>
            <div class="mt-3">
                <label for="input-name-province" class="input-label">Các hình ảnh của địa điểm:</label>
                <v-file-input
                    multiple
                    label="Chọn các ảnh từ thiết bị của bạn"
                ></v-file-input>
            </div>
            <div class="mt-3">
                <label for="input-name-province" class="input-label">Link video về địa điểm (nếu có)</label>
                <b-form-input
                    id="input-name-province"
                    v-model="name"
                    placeholder=""
                    trim
                ></b-form-input>
            </div>
            <div class="mt-3">
                <label for="input-name-province" class="input-label">Link bản đồ về địa điểm</label>
                <b-form-input
                    id="input-name-province"
                    v-model="name"
                    placeholder=""
                    trim
                ></b-form-input>
            </div>
            <div class="center mt-3">
                <v-btn color="success" class="p-4" width="18%">
                    <span class="input-label">Thêm</span>
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
    name: "add-TA",
    data: () => ({
        name: '',
        desc: '',
        selected: 'A',
        options: [
          { item: 'A', name: 'Option A' },
          { item: 'B', name: 'Option B' },
          { item: 'D', name: 'Option C', notEnabled: true },
          { item: { d: 1 }, name: 'Option D' }
        ]
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