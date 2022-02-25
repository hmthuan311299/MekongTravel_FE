import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

import LoginUser from './pages/user/LoginUser'
import LoginTechnician from './pages/technician/LoginTechnician'
import Technician from './pages/technician/Technician'
import LoginAdmin from './pages/admin/LoginAdmin'
import Admin from './pages/admin/Admin'
import CategoryTech from './pages/admin/CategoryTech'
import CategoryProvince from './pages/admin/CategoryProvince.vue'
import CategoryMember from './pages/admin/CategoryMember.vue'
import AddProvince from './pages/admin/AddProvince.vue'
import UpdateProvince from './pages/admin/UpdateProvince.vue'
const routes = [

    //User
    { path: '/', component: LoginUser },
    { path: '/login', component: LoginUser },
    //Technician
    { path: '/technician/login', component: LoginTechnician},
    { path: '/technician', component: Technician},

    //Admin
    { path: '/admin', component: Admin,
        children: [
            {
                path: '',
                name: 'admin',
                component: CategoryProvince,
            },
            {
                path: 'categoryProvince',
                name: 'categoryProvince',
                component: CategoryProvince,
            },
            {
                path: 'categoryProvince/addProvince',
                component: AddProvince,
            },
            {
                path: 'categoryProvince/update/:id',
                name: 'updateProvince',
                component: UpdateProvince,
            },
            {
                path: 'categoryTech',
                name: 'categoryTech',
                component: CategoryTech,
            },
            {
                path: 'categoryMember',
                name: 'categoryMember',
                component: CategoryMember,
            },
        ],
    },
    { path: '/admin/login', component: LoginAdmin}
    
]
const router = new VueRouter({
    mode: 'history',
    routes // short for `routes: routes`
})
export default router;
