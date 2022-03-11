<template>
  <div class="pageLoading" :class="{'isPageLoading':isPageLoading}">
    <div class="loadingio-spinner-ball-d6bf8x2q54e">
      <div class="ldio-0q9eubndosnh">
        <div></div>
      </div>
    </div>
      <div class="loadingio-spinner-spin-arue3w1mm9r">
        <div class="ldio-xd2f7wtb1sp">
          <div><div></div></div>
          <div><div></div></div>
          <div><div></div></div>
          <div><div></div></div>
          <div><div></div></div>
          <div><div></div></div>
          <div><div></div></div>
          <div><div></div></div>
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
    },props:{
       isPageLoading: {Type:Boolean, default: false},
    }
};
</script>

<style>
.pageLoading{
    position: fixed;
    top:0;
    left: 0;
    right:0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.3);
    opacity: 0;
    display: none;
}
.pageLoading.isPageLoading{
    display: unset;
    opacity: 1;
}
.pageLoading .loadingio-spinner-spin-arue3w1mm9r{
    position: fixed;
    transform: translate(-50%, -50%);
    top: 50%;
    left: 50%;
    z-index: 10000;
}
@keyframes growthLoadingSuccess{
    from{
        width: 200px;
        height:200px;
    }
    to{
        width: 480px;
        height:300px;
    }
}
@keyframes ldio-xd2f7wtb1sp {
  0% {
    opacity: 1;
    backface-visibility: hidden;
    transform: translateZ(0) scale(1.5, 1.5);
  }
  100% {
    opacity: 0;
    backface-visibility: hidden;
    transform: translateZ(0) scale(1, 1);
  }
}
.ldio-xd2f7wtb1sp div > div {
  position: absolute;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background: #fc0000;
  animation: ldio-xd2f7wtb1sp 1s linear infinite;
}
.ldio-xd2f7wtb1sp div:nth-child(1) > div {
  left: 148px;
  top: 88px;
  animation-delay: -0.875s;
}
.ldio-xd2f7wtb1sp > div:nth-child(1) {
  transform: rotate(0deg);
  transform-origin: 160px 100px;
}
.ldio-xd2f7wtb1sp div:nth-child(2) > div {
  left: 130px;
  top: 130px;
  animation-delay: -0.75s;
}
.ldio-xd2f7wtb1sp > div:nth-child(2) {
  transform: rotate(45deg);
  transform-origin: 142px 142px;
}
.ldio-xd2f7wtb1sp div:nth-child(3) > div {
  left: 88px;
  top: 148px;
  animation-delay: -0.625s;
}
.ldio-xd2f7wtb1sp > div:nth-child(3) {
  transform: rotate(90deg);
  transform-origin: 100px 160px;
}
.ldio-xd2f7wtb1sp div:nth-child(4) > div {
  left: 46px;
  top: 130px;
  animation-delay: -0.5s;
}
.ldio-xd2f7wtb1sp > div:nth-child(4) {
  transform: rotate(135deg);
  transform-origin: 58px 142px;
}
.ldio-xd2f7wtb1sp div:nth-child(5) > div {
  left: 28px;
  top: 88px;
  animation-delay: -0.375s;
}
.ldio-xd2f7wtb1sp > div:nth-child(5) {
  transform: rotate(180deg);
  transform-origin: 40px 100px;
}
.ldio-xd2f7wtb1sp div:nth-child(6) > div {
  left: 46px;
  top: 46px;
  animation-delay: -0.25s;
}
.ldio-xd2f7wtb1sp > div:nth-child(6) {
  transform: rotate(225deg);
  transform-origin: 58px 58px;
}
.ldio-xd2f7wtb1sp div:nth-child(7) > div {
  left: 88px;
  top: 28px;
  animation-delay: -0.125s;
}
.ldio-xd2f7wtb1sp > div:nth-child(7) {
  transform: rotate(270deg);
  transform-origin: 100px 40px;
}
.ldio-xd2f7wtb1sp div:nth-child(8) > div {
  left: 130px;
  top: 46px;
  animation-delay: 0s;
}
.ldio-xd2f7wtb1sp > div:nth-child(8) {
  transform: rotate(315deg);
  transform-origin: 142px 58px;
}
.loadingio-spinner-spin-arue3w1mm9r {
  width: 200px;
  height: 200px;
  display: inline-block;
  overflow: hidden;
  background: rgba(NaN, NaN, NaN, 0);
}
.ldio-xd2f7wtb1sp {
  width: 100%;
  height: 100%;
  position: relative;
  transform: translateZ(0) scale(1);
  backface-visibility: hidden;
  transform-origin: 0 0; /* see note above */
}
.ldio-xd2f7wtb1sp div {
  box-sizing: content-box;
}
</style>