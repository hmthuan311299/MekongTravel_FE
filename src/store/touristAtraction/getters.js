export default {
    getDetailCurrentTA(state){
        var currentDetailTA = state.currentTA;
        var currentImgTA = state.ImgTA;
        var currentComment = state.listComment;
        return {currentDetailTA, currentImgTA, currentComment};
    }
}