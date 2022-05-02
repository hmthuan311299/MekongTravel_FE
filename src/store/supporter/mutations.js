import { setToken_Supporter } from "../../helpers/constans";

export default {
    set_SupporterById(state, supporter){
        state.supporterById= supporter;
    },
    set_currentSupporter(state, value){
        state.currentSupporter= value.supporter;
        state.ACCESS_TOKEN = value.access_token;
        localStorage.setItem(setToken_Supporter, value.access_token)
    },
    set_inforSupporter(state, value=''){
        state.currentSupporter= value;
    },
    set_accessTokenSupporter(state, value=''){
        state.ACCESS_TOKEN = value;
    },
    set_LogoutSupporter(state){
        state.currentSupporter = {};
        state.ACCESS_TOKEN = '';
        localStorage.removeItem(setToken_Supporter);
    },
}