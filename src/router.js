import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

import compLoginUser from './pages/user/compLoginUser'
import compLoginTech from './pages/technician/compLoginTech'
import compLoginAdmin from './pages/admin/compLoginAdmin'
const routes = [
    { path: '/', component: compLoginUser },
    { path: '/login', component: compLoginUser },
    { path: '/technician/login', component: compLoginTech},
    { path: '/admin/login', component: compLoginAdmin}
]
const router = new VueRouter({
    mode: 'history',
    routes // short for `routes: routes`
})
export default router;
