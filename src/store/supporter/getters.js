export default {
    isSupporterLogin: (state)=>{
        return state.ACCESS_TOKEN ? true : false;
    }
}