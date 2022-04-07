import { setToken } from "../../helpers/constans";
export default {
    set_currentUser(state, value){
        state.currentMember= value.member;
        state.ACCESS_TOKEN = value.access_token;
        localStorage.setItem(setToken, value.access_token)
    },
    set_LogoutUser(state){
        state.currentMember = {};
        state.ACCESS_TOKEN = '';
        localStorage.removeItem(setToken);
        state.checkEvaluate  = value
    },
    set_currentMember(state, value=''){
        state.currentMember= value;
    },
    set_accessToken(state, value=''){
        state.ACCESS_TOKEN = value;
    },
    set_listMember(state, value){
        state.listMember = value
        console.log(value)
    }
}