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
import DetailToutistAtraction from './pages/user/DetailToutistAtraction'
//page user
import UserIndex from'./pages/user/UserIndex'
import User from './pages/user/User.vue'
import CategoryTAByProvince from './pages/user/CategoryTAByProvince'
import CardTouristAttraction from './components/CardTouristAttraction'
import UserSearch from './pages/user/UserSearch'
import UserListAllTA from './pages/user/UserListAllTA'
import ListTAByProvince from './pages/user/ListTAByProvince'
import Recommended from './pages/user/Recommended'
import ListRecommended from './pages/user/ListRecommended'
const routes = [
    //User
    { path: '', component: User,
        children:[
            {path: '', component: UserIndex,
                children:[
                    {path: '',  component: UserListAllTA, name: "userIndex"},
                    {path: 'search',  component: UserSearch, name: "userSearch"}
                ]
            },
            {path: 'province/:provinceName/:provinceId',  component: CategoryTAByProvince,
                children:[
                    {path: '', component: ListTAByProvince, name: "categoryTAByProvince"},
                    {path: 'listAllTouristAttraction',  component: CardTouristAttraction , name: "categoryListAllTAByProvince"},
                    {path: 'listRankTouristAttraction',  component: CategoryTAByProvince, name: "CategoryRankTAByProvince"},
                ]
            },
            {path: 'province/:provinceName/listAllTouristAttraction/detailTouristAttraction/:id',  component: DetailToutistAtraction, name: "detailToutistAtraction"},
            {path: 'member/recommended',  component: Recommended, name: "recommended"},
            {path: 'member/unapprovedList',  component: ListRecommended, name: "unapprovedList"},
            {path: 'member/approvedList',  component: ListRecommended, name: "approvedList"}
        ]
    },
    { path: '/login', component: LoginUser, name:"userLogin" },
    //Technician
    { path: '/supporter/login', component: LoginSupporter, name:"supporterLogin"},
    { path: '/supporter', component: Supporter,
        children: [
            {
                path: '',
                name: 'supporter',
                component: CategoryTA,
            },
            {
                path: 'supporter/categoryTA',
                name: 'categoryTA',
                component: CategoryTA,
            },
            {
                path: 'supporter/categoryTA/addTA',
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

    { path: '/admin/login', component: LoginAdmin, name:"adminLogin"}
    
]
const router = new VueRouter({
    mode: 'history',
    routes // short for `routes: routes`
})
export default router;
