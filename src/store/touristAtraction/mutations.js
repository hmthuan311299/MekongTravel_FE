import Vue from "vue";

export default {
    set_listProvince(state, listProvince){
        state.listProvince = listProvince
    },
    set_province(state, province){
        state.province = province
    },
    set_litsTouristAttraction(state, value){
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
        state.currentImgTA = value
    }

}