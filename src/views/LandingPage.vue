<script setup>
import {onMounted, onUnmounted, ref} from 'vue'
import {LandPageButton, icons, SplashScreen1} from '@/components';

const hours = ref(0);
const minutes = ref(0);
const seconds = ref(0);
const formattedTime = ref(0);

let interval;

// function to update time per second
function updateTime(){
  const date = new Date();

  //add a 0 at the start if the  time value is less than 10 to keep a 2 digit format
  hours.value = String(date.getHours()).padStart(2, '0');
  minutes.value = String(date.getMinutes()).padStart(2, '0');
  seconds.value = String(date.getSeconds()).padStart(2, '0');

  formattedTime.value = `${hours.value}:${minutes.value}:${seconds.value}`;
}

const month = ref(0);
const day = ref(0);
const year = ref(0);
const formattedDate = ref(0);

// function to update the date
function updateDate(){
  const date = new Date();

  month.value = date.toLocaleString('default', {month:'long'});
  day.value = date.getDate();
  year.value = date.getFullYear();

  formattedDate.value = `${month.value} ${day.value}, ${year.value}`;
}

// run the functions as soon as this component mounts
onMounted(()=>{
    updateTime();
    updateDate();

    // can't access the html element in scoped styling, so did it here instead
    document.documentElement.style.overflow = 'hidden';

    // interal to update the time per second
    interval = setInterval(updateTime,1000);
  })

  onUnmounted(()=>{
    // clean the styling and event listeners when component unmounts
    document.documentElement.style.overflow = '';
    clearInterval(interval);
  })


</script>

<template>
  <SplashScreen1/>
  <!-- left part where the colorful background is -->
  <div id="left">
    <img src="@/assets/Ellipse 1.svg" alt="" id="ellipse-1">
    <img src="@/assets/Ellipse 4.svg" alt="" id="ellipse-4">
    <img src="@/assets/Ellipse 3.svg" alt="" id="ellipse-3">
    <div id="brand">
      <img src="@/assets/Pisces Logo.svg" alt="logo" id="logo">
      <!-- <h1 id="pisces">PISCES</h1> -->
       <img src="@/assets/Pisces.svg" alt="Pisces" id="pisces"></img>
      <p id="pisces-definition">PEZA Information System
        Compliance to Environment Standards</p>
    </div>
  </div>

  <!-- right part of the page where the buttons are located -->
  <div id="right">
    <div id="right-header-top">
      <h1 class="header-top">
        Welcome,
      </h1>
      <h1 class="header-top">
        {{formattedTime}}
      </h1>
    </div>
    <div id="right-header-bottom">
      <div id="header-bottom-account">
        <i class="fa-regular fa-circle-user"></i>
        <p class="header-bottom">JUAN DELA CRUZ</p>
      </div>
      <p class="header-bottom">{{formattedDate}}</p>
    </div>
    <div id="buttons-first-row">
      <!-- each button is a component that takes a props for the icon and name of the button -->
      <LandPageButton :icon="icons.dashboard" name="Dashboard"/>
      <LandPageButton :icon="icons.approvalManagement" name="Approval Management"/>
      <LandPageButton :icon="icons.transactions" name="Transactions Log Book"/>
    </div>
    <div id="buttons-second-row">
      <LandPageButton :icon="icons.registeredEstablishment" name="Registered Establishment"/>
      <LandPageButton :icon="icons.personWithGears" name="Compliance Monitoring"/>
    </div>
    <div id="buttons-third-row">
      <div id="buttons-third-row-left">
        <LandPageButton :icon="icons.personWithGears" name="Application Certification"/>
        <LandPageButton :icon="icons.permits" name="Permits"/>
      </div>
      <div id="buttons-third-row-right">
        <div id="buttons-third-row-right-left">
          <LandPageButton :icon="icons.paper" name="Application Registration RWH"/>
          <LandPageButton :icon="icons.paper" name="Application Exit Residual Waste"/>
        </div>
        <div id="buttons-third-row-right-right">
          <LandPageButton :icon="icons.paper" name="Application Exit Hazardous Waste"/>
          <LandPageButton :icon="icons.personWithGears" name="Chemical Importation Evaluation"/>

        </div>
      </div>
    </div>
    <div id="buttons-fourth-row">
      <div id="buttons-fourth-row-left">
        <LandPageButton :icon="icons.personWithGears" name="Request Endorsement LLDA/DENR/EMB"/>
      </div>
      <div id="buttons-fourth-row-right">
        <LandPageButton :icon="icons.personWithGears" name="Administration Settings"/>

        <!-- not the actual link of the button, just need something to return to the website -->
        <router-link to="/"><div id="logout"><img src="@/assets/Logout.svg" alt="" id="logout-icon"></div></router-link>
      </div>
    </div>
  </div>
</template>

<style scoped>
*{
  overflow-y: hidden;
}

#left{
  height: 100vh;  
  top: 0.09vh;   

  background-image: url('@/assets/landpage-gradient.svg');
  background-repeat: no-repeat;
  background-size: contain;
}

#ellipse-1 {
  position: absolute;
  width: 72.5vw; 
  height: 128.98vh;
  top: -47.22vh; 
  left: -9.38vw; 
}
#ellipse-3 {
  position: absolute;
  width: 13.18vw; 
  height: 23.43vh;
  top: 79.81vh; 
  left: 21.88vw; 
}

#ellipse-4 {
  position: fixed;
  width: 21.88vw;
  height: 38.89vh; 
  top: -13.80vh;
  left: 14.94vw; 
  z-index: 999;
}

#logo{
  position: absolute;
  width: 7.19vw; 
  height: 12.96vh;
  top: 14.72vh; 
  left: 2.62vw; 
  z-index: 2;
}
#pisces{
  width: 14.11vw; 
  position: absolute;
  top: 28.77vh; 
  left: 3.38vw; 

}
/* #pisces{
  background: linear-gradient(to right, #002161, #0044c7);
  font-weight: 700;
  font-size: 5vw; 
  line-height: 5.46vh;
  letter-spacing: -0.03em;
  font-family: 'Revue', sans-serif;

  width: 21.72vw; 
  height: 8.89vh; 
  position: absolute;
  top: 27.87vh; 
  left: 3.32vw; 
  
  padding-top: 2vh; 

  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

} */
#pisces-definition{
  font-family: 'Roboto',sans-serif;
  width: 23.75vw; 
  height: 11.11vh;
  position: absolute;
  top: 37.37vh; 
  left:3.38vw;
  
  font-size: 1.62vw;
  line-height: 3.66vh; 
  font-weight: 100;
  
  color: #ffffff;
}

#right {
  position: fixed;
  top: 0;
  left: 27.4vw;
  width: 72.6vw; 
  height: 100vh; 
  background-color: #eff0f4;
  padding: 2% 7% 2% 7%;
}

#right-header-top{
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

.header-top{
  font-family: 'Roboto Slab', sans-serif;
  font-weight: 600;
  font-size: 48px;
  color: #0e3687;
  line-height: 130%;
}

#right-header-bottom{
  display: flex;
  justify-content: space-between;
}
#header-bottom-account{
  display: flex;
  align-items: center;
  gap: 5px;
}
.header-bottom{
  font-family: 'Open Sans', sans-serif;
  font-weight: 300;
  font-size: 24px;
  color: #5c5f66;
}
.fa-regular.fa-circle-user{
  font-size: 24px;
  color: #5c5f66;
}

#buttons-first-row {
  display: flex;
  gap: 1.04vw;
  justify-content: space-between;
  margin-top: 2vh;
  padding: 1vh 0.2vw 5vh 0.2vw;
  height: 18.67vh; 
}

#buttons-second-row {
  display: flex;
  gap: 1.04vw;
  justify-content: space-between;
  margin-top: -3vh;
  padding: 0 0.2vw 5vh 0.2vw;
  height: 15.89vh; 
}

#buttons-third-row {
  display: flex;
  gap: 1.04vw;
  justify-content: space-between;
  margin-top: -3vh;
}

#buttons-third-row-left {
  display: flex;
  gap: 1.04vw;
  width: 49.5%;
  height: 39.33vh;
  padding: 0 0.2vw 5vh 0.2vw;
  flex-shrink: 0;
  flex: 1;
}

#buttons-third-row-right {
  display: flex;
  gap: 1.04vw;
  flex: 1;
}

#buttons-third-row-right-left {
  display: flex;
  flex-direction: column;
  gap: 1.85vh;
  width: 50%;
  height: 39.33vh;
  padding: 0 0.2vw 5vh 0.2vw;
}

#buttons-third-row-right-right {
  display: flex;
  flex-direction: column;
  gap: 1.85vh;
  width: 50%;
  height: 39.33vh;
  padding: 0 0.2vw 5vh 0.2vw;
}

#buttons-fourth-row {
  display: flex;
  gap: 1.04vw;
  margin-top: -2.8vh;
  justify-content: space-between;
}

#buttons-fourth-row-left {
  padding: 0 0.2vw 5vh 0.2vw;
  flex: 1;
}

#buttons-fourth-row-right {
  display: flex;
  gap: 1.04vw;
  padding: 0 0 5vh 0;
  flex: 1;
}

#logout {
  background-color: #c0c5c8;
  border-radius: 0.63vw;
  padding: 1.85vh;
  width: 7.81vw; 
  height: 100%;
  
  display: flex;
  justify-content: center;
  align-items: center;
}
#logout:hover{
  background-color: #5c5f66;
}
</style>