import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
import state from './store/state'
import getters from './store/getters'
import mutations from './store/mutations'
import actions from './store/actions'
import moduleAdmin from './store/admin/moduleAdmin'
import moduleTechnician from './store/technician/moduleTechnician'
import moduleUser from './store/user/moduleUser'
import moduleTouristAttraction from './store/touristAtraction/moduleTouristAttraction'
import moduleProvince from './store/province/moduleProvince'
const store = new Vuex.Store({
    state,
    getters,
    mutations,
    actions,
    modules:{
        admin: moduleAdmin,
        technician: moduleTechnician,
        member: moduleUser,
        touristAttraction: moduleTouristAttraction,
        province: moduleProvince
    }
  })
export default store;