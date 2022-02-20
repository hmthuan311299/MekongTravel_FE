<template>
  <v-app>
    <div id="app">
        <comp-login-user/>
    </div>
  </v-app>
</template>

<script>
import compLoginUser from './pages/user/compLoginUser.vue'
export default {
  name: 'App',
  components: {
    compLoginUser
  },

  data: () => ({
    //
  }),
};
</script>
<style>
#app{
  background: rgb(167, 167, 175);
  min-height: 100vh;
}
</style>
