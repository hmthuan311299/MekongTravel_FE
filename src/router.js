import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

//page supported
import LoginUser from './pages/user/LoginUser'
import LoginSupporter from './pages/supporter/LoginSupporter'
import Supporter from './pages/supporter/Supporter'
import CategoryTA from './pages/supporter/CategoryTA'
import AddTouristAttraction from './pages/supporter/AddTouristAttraction'
import CategoryReTA from './pages/supporter/CategoryReTA'
import CategoryUpdateTA from './pages/supporter/CategoryUpdateTA'
import ApprovalRecommendedTA from './pages/supporter/ApprovalRecomendedTA.vue'
//page admin
import LoginAdmin from './pages/admin/LoginAdmin'
import Admin from './pages/admin/Admin'
import CategorySupporter from './pages/admin/CategorySupporter'
import CategoryProvince from './pages/admin/CategoryProvince.vue'
import CategoryMember from './pages/admin/CategoryMember.vue'
import AddProvince from './pages/admin/AddProvince.vue'
import UpdateProvince from './pages/admin/UpdateProvince.vue'
import AddSupporter from './pages/admin/AddSupporter'
import UpdateSupporter from './pages/admin/UpdateSupporter'
const routes = [

    //User
    { path: '/', component: LoginUser },
    { path: '/login', component: LoginUser },
    //Technician
    { path: '/supporter/login', component: LoginSupporter},
    { path: '/supporter', component: Supporter, name: 'supporter',
        children: [
            {
                path: '',
                name: 'supporter',
                component: CategoryTA,
            },
            {
                path: '/supporter/categoryTA',
                name: 'categoryTA',
                component: CategoryTA,
            },
            {
                path: '/supporter/categoryTA/addTA',
                name: 'addTA',
                component: AddTouristAttraction,
            },
            {
                path: 'supporter/categoryReTA',
                name: 'categoryReTA',
                component: CategoryReTA,
            },
            {
                path: 'supporter/categoryReTA/edit/:id',
                name: 'editReTA',
                component: ApprovalRecommendedTA,
            },
            {
                path: 'supporter/categoryUpdateTA',
                name: 'categoryUpdateTA',
                component: CategoryUpdateTA,
            },
        ]
    },
    //Admin
    { path: '/admin', component: Admin, name: 'admin',
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
                name:'addProvince',
                component: AddProvince,
            },
            {
                path: 'categoryProvince/update/:id',
                name: 'updateProvince',
                component: UpdateProvince,
            },
            {
                path: 'categorySupporter',
                name: 'categorySupporter',
                component: CategorySupporter,
            },
            {
                path: 'categorySupporter/AddSupporter',
                name: 'addSupporter',
                component: AddSupporter,
            },
            {
                path: 'categorySupporter/update/:id',
                name: 'updateSupporter',
                component: UpdateSupporter,
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
