import Vue from "vue";
export default {
    set_listTouristAttraction(state, value){
        state.listTouristAttraction = value
    },
    set_currentAndHistoryTA(state, value){
        state.currentTA = value;
        Vue.set(state.historyTA, value.tourid, value)
    },
    set_HistoryTA(state, value){
        var {tourid} = value;
    },
    set_imageTA(state, value){
        state.ImgTA = value
    },
    set_comment(state, value){
        state.listComment  = value
    },
    // set_addcomment(state, value){
    //     // state.listComment.unshift(value)
    // },
    set_evaluate(state, value){
        state.listEvaluate  = value
    },
    set_checkEvaluate(state, value){
        console.log(value)
        state.checkEvaluate  = value
    }
    // set_addEvaluate(state, value){
    //     console.log(value)
    //     state.listEvaluate.unshift(value)
    // }
}