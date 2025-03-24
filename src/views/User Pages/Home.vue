<script setup>
import {WebHeader, WebFooter, SplashScreen1} from '@/components';
</script>

<template>
  <!-- Splash Screen to hide unloaded assets -->
  <SplashScreen1/>

  <!-- Header Component for Webpage -->
  <WebHeader />
  <div class="body-elements">
    <div id="left">
      <img src="@/assets/Pisces + Description.svg" alt="pisces" class="pisces">
      <router-link to="/landing-page"><button class="get-started-button"><span class="get-started">Get Started</span></button></router-link>
    </div>
    <img src="@/assets/EHS.svg" alt="EHS" class="ehs">
    
  </div>

  <!-- Footer Component for Webpage -->
  <WebFooter />

</template>

<!-- sizing converted into viewport percentages so it remains clean zoomed in or out -->
<style scoped>

.body-elements {
  height: 90.74vh; 
  background-image: url('@/assets/Gradient.svg');
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  background-attachment: fixed;
  position: relative;
  padding: 0;
  display: flex;
  justify-content: space-between;
  text-overflow: clip;
}

.ehs {
  position: relative;
  margin: 0;
  /* position: absolute;
  right: 0;
  top: 0;  */
}

#left{
  position: relative;
  padding: 0;
  left: 5vw;
  top:8vh;
  display: flex;
  flex-direction: column;
}
.pisces {
  /* position: absolute;*/
  height: 53.30vh;
  gap: 0;
  opacity: 1;
}
.get-started-button {
  width: 9.53vw;   /* 183 / 1920 * 100 */
  height: 4.44vh;  /* 48 / 1080 * 100 */

  /* position: absolute;
  top: 60.4vh;
  left: 9.16vw;  */
  margin: 6.48vh auto auto 18%;
/* 
70px / 1080 = 6.48vh 
165px / 1920 = 8.59vw 
*/

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

 

</style>