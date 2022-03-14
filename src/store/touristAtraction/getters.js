export default {
    getDetailCurrentTA(state){
        var currentDetailTA = state.currentTA;
        var currentImgTA = state.ImgTA;
        var currentComment = state.listComment;
        var currentEvaluate = state.listEvaluate;
        var checkEvaluate = state.checkEvaluate
        return {currentDetailTA, currentImgTA, currentComment, currentEvaluate, checkEvaluate};
    }
}