import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

import LoginUser from './pages/user/LoginUser'
import LoginTechnician from './pages/technician/LoginTechnician'
import Technician from './pages/technician/Technician'
import LoginAdmin from './pages/admin/LoginAdmin'
import Admin from './pages/admin/Admin'
const routes = [

    //User
    { path: '/', component: LoginUser },
    { path: '/login', component: LoginUser },
    //Technician
    { path: '/technician/login', component: LoginTechnician},
    { path: '/technician', component: Technician},
    //Admin
    { path: '/admin', component: Admin},
    { path: '/admin/login', component: LoginAdmin}
    
]
const router = new VueRouter({
    mode: 'history',
    routes // short for `routes: routes`
})
export default router;
