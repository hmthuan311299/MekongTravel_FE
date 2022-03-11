export default {
    isMemberLogin: (state)=>{
        return state.ACCESS_TOKEN ? true : false;
    }
}