<template>
  <div>
        <div class="loadingSuccessError" :class="{'isLoadingSuccess': isLoadingSuccess}" >
            <div class="box-loading">
                <i class="fa-solid fa-circle-check loading-icon-success"></i>
                <h5 class="loading-title-success">Thành công</h5>
            </div>
        </div>
        <div class="loadingSuccessError" :class="{'isLoadingError':isLoadingError}" >
            <div class="box-loading">
                <i class="fa-solid fa-circle-xmark loading-icon-error"></i>
                <h5 class="loading-title-error">Đã xảy ra lỗi</h5>
            </div>
        </div>
    
  </div>
</template>

<script>
export default {
    name:"",
    data(){
        return{
            isLoadingSuccess: true,
            isLoadingError: false
        }
    }
}
</script>

<style>
.loadingSuccessError{
     position: fixed;
     top: 0;
     left: 0;
     right: 0;
     bottom: 0;
     background: rgba(0, 0, 0, 0.35);
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
    width: 480px;
    height:300px;
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
    animation: 1.2s ease-in growthLoadingSuccess;
}
@keyframes growthLoadingSuccess{
    from{
        width: 100px;
        height:100px;
    }
    to{
        width: 480px;
        height:300px;
    }
}
.loading-icon-success{
    text-align: center;
    color: rgb(0, 196, 88);
    font-size: 25vh;
    animation: 1.2s ease-in growthIconSuccess;
}
.loading-title-success{
    text-align: center;
    color: rgb(0, 196, 88);
    font-size: 3rem;
    animation: 1.2s ease-in growthTitleSuccess;
}
@keyframes growthLoadingSuccess{
    from{
        width: 100px;
        height:100px;
    }
    to{
        width: 480px;
        height:300px;
    }
}
@keyframes growthIconSuccess{
    from{
        font-size: 12vh;
    }
    to{
        font-size: 25vh;
    }
}
@keyframes growthTitleSuccess{
    from{
        font-size: 1.2rem;
    }
    to{
        font-size: 3rem;
    }
}
/* error */
@keyframes growthLoadingError{
    from{
        width: 100px;
        height:100px;
    }
    to{
        width: 480px;
        height:300px;
    }
}
.loading-icon-error{
    text-align: center;
    color: rgb(253, 55, 55);
    font-size: 25vh;
    animation: 1.2s ease-in growthIconSuccess;
}
.loading-title-error{
    text-align: center;
    color: rgb(253, 55, 55);
    font-size: 3rem;
    animation: 1.2s ease-in growthTitleSuccess;
}
@keyframes growthLoadingError{
    from{
        width: 100px;
        height:100px;
    }
    to{
        width: 480px;
        height:300px;
    }
}
@keyframes growthIconError{
    from{
        font-size: 12vh;
    }
    to{
        font-size: 25vh;
    }
}
@keyframes growthTitleSuccess{
    from{
        font-size: 1.2rem;
    }
    to{
        font-size: 3rem;
    }
}
</style>