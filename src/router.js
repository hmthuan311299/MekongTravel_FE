import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

import LoginUser from './pages/user/LoginUser'
import LoginTechnician from './pages/technician/LoginTechnician'
import LoginAdmin from './pages/admin/LoginAdmin'
const routes = [
    { path: '/', component: LoginUser },
    { path: '/login', component: LoginUser },
    { path: '/technician/login', component: LoginTechnician},
    { path: '/admin/login', component: LoginAdmin}
]
const router = new VueRouter({
    mode: 'history',
    routes // short for `routes: routes`
})
export default router;
