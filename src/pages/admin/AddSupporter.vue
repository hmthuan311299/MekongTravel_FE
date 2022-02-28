<template>
  <div class="container">
    <h1 class="text-center text-danger">Thêm kỹ thuật viên</h1>
    <v-form ref="form" v-model="valid" lazy-validation>
        <v-text-field
            v-model="name"
            label="Name"
            required
        ></v-text-field>
        <v-text-field
            v-model="email"
            :rules="emailRules"
            label="E-mail"
            required
        ></v-text-field>
        <v-text-field
            v-model="techPass"
            label="Password"
            required
        ></v-text-field>
        <v-select
            v-model="select"
            :items="items"
            :rules="[(v) => !!v || 'Item is required']"
            label="Giới tính"
            required
        ></v-select>
        <v-text-field
          v-model="phoneNumber"
          label="Phone Number"
        ></v-text-field>
        <div class="center mt-3">
            <v-btn color="success" class="p-4" width="18%">
                <span class="input-label">Thêm</span>
            </v-btn>
            <v-btn color="error" class="p-4 ml-2" width="18%" @click="handleCancel">
                <span class="input-label" >Trở về</span>
            </v-btn>
        </div>
    </v-form>
  </div>
</template>

<script>
export default {
  data: () => ({
    valid: true,
    name: "",
    email: "",
    emailRules: [
      (v) => !!v || "E-mail is required",
      (v) => /.+@.+\..+/.test(v) || "E-mail must be valid",
    ],
    select: null,
    items: ["Nam", "Nữ"],
    phoneNumber:'',
    techPass: ''
  }),
  methods: {
    handleCancel(){
        this.$router.push({name: 'categorySupporter'})
    }
  },
};
</script>

<style scoped>
.container {
  padding: 0 100px;
}
@media (max-width: 768px) {
  .container {
    padding: 0 20px;
  }
}
.input-label {
  font-size: 20px;
}
/* .input-label{
        font-size: 25px
    } */
</style>