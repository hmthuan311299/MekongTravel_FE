import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

//page supported
import LoginUser from './pages/user/LoginUser'
import LoginSupporter from './pages/supporter/LoginSupporter'
import Supporter from './pages/supporter/Supporter'
import CategoryTA from './pages/supporter/CategoryTA'
import AddTouristAttraction from './pages/supporter/AddTouristAttraction'
import CategoryRecommended from './pages/supporter/CategoryRecommended'
import ApprovalRecommended from './pages/supporter/ApprovalRecomended.vue'
import UpdateTA from './pages/supporter/UpdateTA.vue'
import SupporterChangePassword from './pages/supporter/SupporterChangePassword'

//page admin
import LoginAdmin from './pages/admin/LoginAdmin'
import Admin from './pages/admin/Admin'
import CategorySupporter from './pages/admin/CategorySupporter'
import CategoryProvince from './pages/admin/CategoryProvince.vue'
import AddProvince from './pages/admin/AddProvince.vue'
import UpdateProvince from './pages/admin/UpdateProvince.vue'
import AddSupporter from './pages/admin/AddSupporter'
import UpdateSupporter from './pages/admin/UpdateSupporter'
import AdminChangePassword from './pages/admin/AdminChangePassword.vue'
import UpdateAdmin from './pages/admin/UpdateAdmin'
import AdminStatistic from './pages/admin/AdminStatistic'
import StatisticPlace from './pages/admin/StatisticPlace'
import StatisticView from './pages/admin/StatisticView'
//page user
import DetailToutistAtraction from './pages/user/DetailToutistAtraction'
import UserIndex from'./pages/user/UserIndex'
import User from './pages/user/User.vue'
import CategoryTAByProvince from './pages/user/CategoryTAByProvince'
import CardTouristAttraction from './components/CardTouristAttraction'
import UserSearch from './pages/user/UserSearch'
import UserListAllTA from './pages/user/UserListAllTA'
import ListTAByProvince from './pages/user/ListTAByProvince'
import Recommended from './pages/user/Recommended'
import ListRecommended from './pages/user/ListRecommended'
import CategorySaveTA from './pages/user/CategorySaveTA'
import UserInformation from './pages/user/UserInformation'
import UserChangePassWord from './pages/user/UserChangePassword'
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
            {path: 'member/approvedList',  component: ListRecommended, name: "approvedList"},
            {path: 'member/categorySaveTA',  component: CategorySaveTA, name: "categorySaveTA"},
            {path: 'member/information',  component: UserInformation, name: "userInformation"},
            {path: 'member/changePassword',  component: UserChangePassWord, name: "userChangePassword"}
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
                path: 'categoryTA',
                name: 'categoryTA',
                component: CategoryTA,
            },
            {
                path: 'categoryTA/add',
                name: 'addTouristAttraction',
                component: AddTouristAttraction,
            },
            {
                path: 'categoryRecommended',
                name: 'categoryRecommended',
                component: CategoryRecommended,
            },
            {
                path: 'categoryRecommended/edit/:id',
                name: 'approvalRecommended',
                component: ApprovalRecommended,
            },
            {
                path: 'categoryTA/update/:id',
                name: 'updateTA',
                component: UpdateTA,
            },
            {
                path: 'changePassword',
                name: 'supporterChangePassword',
                component: SupporterChangePassword,
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
                path: 'update',
                name: 'updateAdmin',
                component: UpdateAdmin,
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
                path: 'categoryStatistic',
                name: 'categoryStatistic',
                component: AdminStatistic,
                children: [
                    {
                        path: '',
                        name: 'statisticPlace',
                        component: StatisticPlace,
                    },
                    {
                        path: 'statisticView',
                        name: 'statisticView',
                        component: StatisticView,
                    }
                ]
            },
            
            {
                path: 'changePassword',
                name: 'adminChangePassword',
                component: AdminChangePassword,
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
