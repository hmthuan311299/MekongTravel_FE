<template>
  <div>
        <div class="loadingSuccessError" :class="{'isLoadingSuccess': isLoadingSuccess.display}" >
            <div class="box-loading">
                <i class="fa-solid fa-circle-check loading-icon-success"></i>
                <h5 class="loading-title-success px-5 mt-2">{{isLoadingSuccess.message}}</h5>
            </div>
        </div>
        <div class="loadingSuccessError" :class="{'isLoadingError':isLoadingError.display}" >
            <div class="box-loading-error">
                <i class="fa-solid fa-circle-xmark loading-icon-error"></i>
                <h5 class="loading-title-error px-5 mt-2">{{isLoadingError.message}}</h5>
            </div>
        </div>
  </div>
</template>
<script>
export default {
    name:"",
    data(){
        return{
        }
    },
    props:{
        isLoadingSuccess: {
            type: Object,
            default:{
                display: false,
                message: 'Thành công'
            }
        },
        isLoadingError: {
            type: Object,
            default:{
                display: false,
                message: 'Đã có lỗi xảy ra'
            }
        }
    }
}
</script>
<style>
:root{
    --form-weight-noti-before: 350px;
    --form-height-noti-before: 190px;
    --form-weight-noti: 480px;
    --form-height-noti: 300px;
    --speed-display-form: 0.4s;
    --size-icon-noti-before: 14vh;
    --size-icon-noti: 20vh;
    --size-title-noti-before: 4vh;
    --size-title-noti: 4vh
}
.loadingSuccessError{
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
.loadingSuccessError.isLoadingSuccess{
    opacity: 1;
    display: unset;
}
.loadingSuccessError.isLoadingError{
    opacity: 1;
    display: unset;
}
.box-loading{
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
    flex-direction: column;
    justify-content: center;
    align-items: center;
    animation: var(--speed-display-form) ease-in growthLoadingSuccessBox;
}
@keyframes growthLoadingSuccessBox{
    from{
        top: 40%
    }
}
.loading-icon-success{
    text-align: center;
    color: rgb(0, 196, 88);
    font-size: var(--size-icon-noti);
}
.loading-title-success{
    text-align: center;
    color: rgb(0, 196, 88);
    font-size: var(--size-title-noti);
}

.box-loading-error{
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
    flex-direction: column;
    justify-content: center;
    align-items: center;
    animation: 0.5s ease-in growthLoadingError;
}
@keyframes growthLoadingError{
    from{
        top: 40%
    }
}
.loading-icon-error{
    text-align: center;
    color: rgb(253, 55, 55);
    font-size: var(--size-icon-noti) !important;
}
.loading-title-error{
    text-align: center;
    color: rgb(253, 55, 55);
    font-size: var(--size-title-noti);
}
</style>