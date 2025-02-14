<script setup>
import {WebHeader, WebFooter} from '@/components';
</script>

<template>
  <WebHeader />
  <div class="body-elements">
    <img src="@/assets/Pisces + Description.svg" alt="" class="pisces">
    <img src="@/assets/EHS.svg" alt="" class="ehs">
    <button class="get-started-button"><span class="get-started">Get Started</span></button>
  </div>
  <WebFooter />

</template>

<style scoped>

.get-started-button {
  width: 9.53vw;
  height: 4.44vh; 
  position: absolute;
  top: 76.4vh;
  left: 14.16vw; 
  border: none;
  border-radius: 1.56vw; 
  padding: 1.57vh 1.4vw; 

  background: linear-gradient(to right, #002161, #0044c7);
  transition: background 1s ease-in-out;
}
.get-started-button:hover {
  background: linear-gradient(to right, #0044c7, #002161);
}
.get-started {
  color: #ffffff;
  font-family: 'Montserrat', serif;
  font-weight: 500;
  font-size: 0.83vw;
  line-height: 1.3vh;
}

.body-elements {
  height: 90.74vh; 
  background-image: url('@/assets/Gradient.svg');
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  background-attachment: fixed;
}

  .ehs {
  width: 42.10vw; 
  height: 88.80vh; 
  position: absolute;
  top: 9vh; 
  right: 0;
}

.pisces {
  position: absolute;
  height: 53.30vh; 
  top: 16vh; 
  left: 5vw; 
  gap: 0;
  opacity: 1;
}
</style>