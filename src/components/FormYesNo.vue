<template>
  <div>
        <div class="FormYesNo" :class="{'isDisplay':isDisplayYesNoForm.display}" >
            <div class="box-YesNo">
                <h4 class="px-6">{{isDisplayYesNoForm.titleForm}}</h4>
                <div>
                    <button type="button" @click="handleConfirm('yes')" class="btn btn-success btn-yesno">Đồng ý</button>
                    <button type="button" @click="handleConfirm('no')" class="btn btn-danger btn-yesno">Trở về</button>
                </div>
            </div>
        </div>
  </div>
</template>
<script>
import {mapMutations} from 'vuex'
export default {
    name:"",
    props:{
        isDisplayYesNoForm: {
            type: Object,
            default: {
                display: false,
                titleForm: "Xác nhận",
                answer: ''
            }
        },
    },
    methods:{
        ...mapMutations(['set_YesNo','set_YesNoForm']),
        handleConfirm(answer){
           this.$emit('handleConfirm', answer);
        }
    }
}
</script>
<style>
.FormYesNo{
     position: fixed;
     top: 0;
     left: 0;
     right: 0;
     bottom: 0;
     background: rgba(0, 0, 0, 0.5);
     z-index: 10000;
     opacity: 0;
     display: none;
}
.FormYesNo.isDisplay{
    opacity: 1;
    display: unset;
}
/* error */
.box-YesNo{
    width: var(--form-weight-noti);
    height: var(--form-height-noti);
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    background-color: white;
    border-radius:20px;
    position: fixed;
    transform: translate(-50%, -50%);
    top: 50%;
    left: 50%;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    flex-direction: column;
    animation: 0.5s ease-in growthLoadingYesNo;
}
@keyframes growthLoadingYesNo{
    from{
        top: 40%
    }
    
}
.btn-yesno{
    font-size: 200% !important;
    margin: 0 1rem ;
}

</style>