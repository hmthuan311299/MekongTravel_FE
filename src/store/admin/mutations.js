import { setToken_Admin } from "../../helpers/constans";
export default {
    set_admin(state, value){
        state.admin= value.admin;
        
    },
    set_ACCESS_TOKEN(state, value){
        state.ACCESS_TOKEN = value.access_token;
        localStorage.setItem(setToken_Admin, value.access_token)
    },
    set_LogoutAdmin(state){
        state.admin = {};
        state.ACCESS_TOKEN = null;
        localStorage.removeItem(setToken_Admin);
    },
}