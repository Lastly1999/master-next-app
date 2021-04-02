<template>
  <section>
    <div class="wave wave1"></div>
    <div class="wave wave2"></div>
    <div class="wave wave3"></div>
    <div class="wave wave4"></div>
  </section>
</template>


<style scoped>
section {
  position: relative;
  width: 100%;
  height: 80%;
  overflow: hidden;
  background: url('../../assets/bg1.png') no-repeat;
  background-size: 100% 100%;
}

section .wave {
  width: 100%;
  height: 100px;
  position: absolute;
  bottom: 0;
  left: 0;
  background: url(http://159.75.22.114:8080/photoServer/wave.png);
  background-size: 1000px 100px;
}

section .wave.wave1 {
  animation: animate1 20s linear infinite;
  z-index: 1000;
  opacity: 1;
  animation-delay: 0s;
  bottom: 0;
}

section .wave.wave2 {
  animation: animate2 15s linear infinite;
  z-index: 999;
  opacity: 0.5;
  animation-delay: -5s;
  bottom: 10px;
}

section .wave.wave3 {
  animation: animate1 10s linear infinite;
  z-index: 998;
  opacity: 0.2;
  animation-delay: -7s;
  bottom: 15px;
}

section .wave.wave4 {
  animation: animate2 2s linear infinite;
  z-index: 997;
  opacity: 0.71;
  animation-delay: -5s;
  bottom: 20px;
}

@keyframes animate1 {
  0% {
    background-position-x: 0;
  }

  100% {
    background-position-x: 1000px;
  }
}

@keyframes animate2 {
  0% {
    background-position-x: 0;
  }

  100% {
    background-position-x: -1000px;
  }
}
</style>
