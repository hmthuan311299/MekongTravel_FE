export default {
    setLoadingSuccess(state, {display= false, message="Đã có lỗi xảy ra"}){
        state.isLoadingSuccess.display= display;
        state.isLoadingSuccess.message= message;
    },
    setLoadingError(state, {display= false, message="Đã có lỗi xảy ra"}){
        state.isLoadingError.display= display;
        state.isLoadingError.message= message;
    },
    setPageLoading(state, display= false){
        state.isPageLoading= display;
    },
    // set_YesNoForm(state, {display, titleForm=''}){
    //     state.isDisplayYesNoForm = {display, titleForm};
    // },
    // set_YesNo(state, value=''){
    //     state.isYesNo = value;
    // }
}