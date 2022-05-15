import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

//page supporter
import SupporterLogin from './pages/supporter/Login'
import Supporter from './pages/supporter/Supporter'
import CategoryTA from './pages/supporter/CategoryTA'
import AddTA from './pages/supporter/AddTA'
import CategoryRecommended from './pages/supporter/CategoryRecommended'
import ApprovalRecommended from './pages/supporter/ApprovalRecomended.vue'
import UpdateTA from './pages/supporter/UpdateTA.vue'
import SupporterChangePassword from './pages/supporter/ChangePassword'
import CategoryMember from './pages/supporter/CategoryMember'
import SupporterUpdateInformation from './pages/supporter/UpdateInformation'
import SupporterForgetPassword from './pages/supporter/ForgetPassword'

//page admin
import AdminLogin from './pages/admin/Login'
import Admin from './pages/admin/Admin'
import CategorySupporter from './pages/admin/CategorySupporter'
import CategoryProvince from './pages/admin/CategoryProvince.vue'
import AddProvince from './pages/admin/AddProvince.vue'
import UpdateProvince from './pages/admin/UpdateProvince.vue'
import AddSupporter from './pages/admin/AddSupporter'
import UpdateSupporter from './pages/admin/UpdateSupporter'
import AdminChangePassword from './pages/admin/ChangePassword.vue'
import AdminUpdateInformation from './pages/admin/UpdateInformation'
import CategoryStatistic from './pages/admin/CategoryStatistic'
import StatisticPlace from './pages/admin/StatisticPlace'
import StatisticView from './pages/admin/StatisticView'
import StatisticSave from './pages/admin/StatisticSave'
import StatisticEvaluate from './pages/admin/StatisticEvaluate'
import AdminForgetPassword from './pages/admin/ForgetPassword'

//page user
import UserLogin from './pages/user/Login'
import SignUp from './pages/user/SignUp'
import DetailTA from './pages/user/DetailTA'
import ShowUserPage from'./pages/user/ShowUserPage'
import User from './pages/user/User.vue'
import CategoryTAByProvince from  './pages/user/CategoryTAByProvince'
import UserUpdateInformation from './pages/user/UpdateInformation'
import ResultSearch from './pages/user/ResultSearch'
import UserListAllTA from './pages/user/UserListAllTA'
import ListTAByProvince from './pages/user/ListTAByProvince'
import Recommended from './pages/user/Recommended'
import ListRecommended from './pages/user/ListRecommended'
import CategorySavedPlace from './pages/user/CategorySavedPlace'
import Information from './pages/user/Information'
import UserChangePassWord from './pages/user/ChangePassword'
import ListRankTAByProvince from './pages/user/ListRankTAByProvince'
import ListSuggestionTA from './pages/user/ListSuggestionTA'
import UserForgetPassword from './pages/user/ForgetPassword'

const routes = [
    //User
    { path: '', component: User,
        children:[
            {path: '', component: ShowUserPage,
                children:[
                    {path: '',  component: UserListAllTA, name: "userIndex"},
                    {path: 'search',  component: ResultSearch, name: "userSearch"}
                ]
            },
            {path: 'province/:provinceName/:provinceId',  component: CategoryTAByProvince,
                children:[
                    {path: '', component: ListTAByProvince, name: "categoryTAByProvince"},
                    {path: 'listRank',  component: ListRankTAByProvince , name: "listRank"},
                    {path: 'listSuggestion',  component: ListSuggestionTA, name: "listSuggestion"},
                ]
            },
            {path: 'province/:provinceName/listAllTouristAttraction/detailTouristAttraction/:id',  component: DetailTA, name: "detailToutistAtraction"},
            {path: 'member/recommended',  component: Recommended, name: "recommended"},
            {path: 'member/unapprovedList',  component: ListRecommended, name: "unapprovedList"},
            {path: 'member/approvedList',  component: ListRecommended, name: "approvedList"},
            {path: 'member/categorySavedPlace',  component: CategorySavedPlace, name: "categorySaveTA"},
            {path: 'member/information/:id',  component: Information, name: "userInformation"},
            {path: 'member/information/:id/update', component: UserUpdateInformation, name: "userUpdateInformation"},
            {path: 'member/changePassword',  component: UserChangePassWord, name: "userChangePassword"},
        ]
    },
    { path: '/signUp',  component: SignUp, name: "userSignUp"},
    { path: '/forgetPassword',  component: UserForgetPassword, name: "userForgetPassword"},
    { path: '/login', component: UserLogin, name:"userLogin" },
    //Supporter
    { path: '/supporter/login', component: SupporterLogin, name:"supporterLogin"},
    { path: '/supporter/forgetPassword', component: SupporterForgetPassword, name:"supporterForgetPassword"},
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
                component: AddTA,
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
                path: 'categoryMember',
                name: 'categoryMember',
                component: CategoryMember,
            },
            {
                path: 'categoryBlockedMember',
                name: 'categoryBlockedMember',
                component: CategoryMember,
            },
            {
                path: 'changePassword',
                name: 'supporterChangePassword',
                component: SupporterChangePassword,
            },
            {
                path: 'updateCurrentSupporter',
                name: 'updateCurrentSupporter',
                component: SupporterUpdateInformation,
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
                component: AdminUpdateInformation,
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
                component: CategoryStatistic,
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
                    },
                    {
                        path: 'statisticSave',
                        name: 'statisticSave',
                        component: StatisticSave,
                    },
                    {
                        path: 'statisticEvaluate',
                        name: 'statisticEvaluate',
                        component: StatisticEvaluate,
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

    { path: '/admin/login', component: AdminLogin, name:"adminLogin"},
    { path: '/admin/forgetPassword', component: AdminForgetPassword, name:"adminForgetPassword"},
    
    
]
const router = new VueRouter({
    mode: 'history',
    routes // short for `routes: routes`
})
export default router;
