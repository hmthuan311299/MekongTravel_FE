import { Access_token } from "../../helpers";
export default {
    set_currentUser(state, value){
        state.currentMember= value.member;
        state.ACCESS_TOKEN = value.access_token;
        localStorage.setItem(Access_token, value.access_token)
    },
    set_LogoutUser(state){
        state.currentMember = {};
        state.ACCESS_TOKEN = '';
        localStorage.removeItem(Access_token);
    },
    
}