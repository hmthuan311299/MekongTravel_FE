import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
import state from './store/state'
import getters from './store/getters'
import mutations from './store/mutations'
import actions from './store/actions'
import moduleAdmin from './store/admin/moduleAdmin'
import moduleSupporter from './store/supporter/moduleSupporter'
import moduleUser from './store/user/moduleUser'
import moduleTouristAttraction from './store/touristAtraction/moduleTouristAttraction'
import moduleProvince from './store/province/moduleProvince'
import moduleEvaluate from './store/evaluate/moduleEvaluate'
import moduleComment from './store/comment/moduleComment'
import moduleRecommended from './store/recommended/moduleRecommended'
import moduleSaveTourist from './store/saveTourist/moduleSaveTourist'
import moduleStatistic from './store/statistic/moduleStatistic'
const store = new Vuex.Store({
    state,
    getters,
    mutations,
    actions,
    modules:{
        admin: moduleAdmin,
        supporter: moduleSupporter,
        member: moduleUser,
        touristAttraction: moduleTouristAttraction,
        province: moduleProvince,
        evaluate: moduleEvaluate,
        comment: moduleComment,
        recommended: moduleRecommended,
        saveTourist: moduleSaveTourist,
        statistic: moduleStatistic
    }
  })
export default store;