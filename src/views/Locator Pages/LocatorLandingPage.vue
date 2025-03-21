<script setup>
import {onMounted, onUnmounted, ref} from 'vue'
import {LandPageButton, icons, SplashScreen1} from '@/components';

// run the functions as soon as this component mounts
onMounted(()=>{

    // can't access the html element in scoped styling, so did it here instead
    document.documentElement.style.overflow = 'hidden';

    window.scrollTo(0, 0);

  })

  onUnmounted(()=>{
    // clean the styling and event listeners when component unmounts
    document.documentElement.style.overflow = '';
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
        Welcome!
      </h1>

    </div>
    <div id="right-header-bottom">
      <div id="header-bottom-account">
            <p class="header-bottom">JUAN DELA CRUZ</p>
        
        <div id="header-icons">
             <img src="@/assets/bell.svg" alt="" id="bell">
             <img src="@/assets/user.svg" alt="" id="user">
             <img src="@/assets/LogoutIcon.svg" alt="" id="logout-icon">
        </div>
      </div>
      <p class="header-bottom">{{formattedDate}}</p>
    </div>
    <div id="buttons-first-row">
      <!-- each button is a component that takes a props for the icon and name of the button -->
      <LandPageButton :icon="icons.paper" className="landpage-button" name="Compliance Monitoring"/>
      <LandPageButton :icon="icons.paper" className="landpage-button"  name="Project Coverage"/>
      <LandPageButton :icon="icons.paper" className="landpage-button"  name="Permits"/>
    </div>
    <div id="buttons-second-row">
      <LandPageButton :icon="icons.paper" className="landpage-button"  name="Residual Waste Haulers (RWH)"/>
      <LandPageButton :icon="icons.paper" className="landpage-button"  name="Application Certification"/>
      <LandPageButton :icon="icons.paper" className="landpage-button"  name="Chemical Importation Evaluation Form"/>
    </div>
    <div id="buttons-third-row">
        <LandPageButton :icon="icons.paper" className="landpage-button"  name="Application Exit Hazardous Waste"/>
        <LandPageButton :icon="icons.paper"  className="landpage-button" name="Application Exit Residual waste"/>
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

  background-image: url('@/assets/LocatorLandingPagebg.png');
  background-repeat:no-repeat;
  background-size: cover;
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
  justify-content: space-between;
  width: 100%;
}

.header-bottom{
  font-family: 'Open Sans', sans-serif;
  font-weight: 300;
  font-size: 24px;
  color: #5c5f66;
}
#header-icons{
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 4px;
}




#buttons-first-row {
  display: flex;
  gap: 1.04vw;
  justify-content: space-between;
  margin-top: 2vh;
  padding: 1vh 0.2vw 5vh 0.2vw;
  height: 26vh;

}

#buttons-second-row {
  display: flex;
  gap: 1.04vw;
  justify-content: space-between;
  margin-top: -3vh;
  padding: 0 0.2vw 5vh 0.2vw;
  height: 26vh;

}

#buttons-third-row {
  display: flex;
  gap: 1.04vw;
  justify-content: space-between;
  margin-top: -3vh;
  height: 26vh;

}

.landpage-button:hover{
    background: linear-gradient(to right ,#7bb0e0, #1c4587) !important;
}

</style>