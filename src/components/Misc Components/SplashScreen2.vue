<script setup>
import { ref, onMounted } from 'vue';

// Create a reactive reference for controlling the splash screen visibility
const showSplash = ref(true);

// Use the `onMounted` lifecycle hook to hide the splash screen after 3 seconds
onMounted(() => {
  setTimeout(() => {
    showSplash.value = false;
  }, 2000);
});
</script>


<template>
  <!-- Splash screen container that is displayed when the app starts -->
  <div v-if="showSplash" class="splash-screen">
    <div class="splash-content">
      <!-- PEZA Logo -->
      <img src="@/assets/LogoPeza.png" alt="PEZA Logo" class="peza-logo" />

      <!-- Container for PISCES Logo and text -->
      <div class="pisces-container">
        <img src="@/assets/Pisces.png" alt="PISCES Logo" class="pisces-logo" />
        <p class="pisces-text">
          PEZA Information System <br />
          Compliance to Environment Standards
        </p>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* Styles for the splash screen */
.splash-screen {
  position: fixed; 
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: white; 
  display: flex;
  align-items: center; 
  justify-content: center; 
  z-index: 9999; 
}

/* Container for logo and text */
.splash-content {
  display: flex;
  align-items: center;
  gap: 10px; /* Space between elements */
}

/* PEZA logo styles */
.peza-logo {
  width: 80px;
  height: auto;
}

/* Container for PISCES logo and text */
.pisces-container {
  display: flex;
  flex-direction: column;
  align-items: flex-start; 
}

/* PISCES logo styles */
.pisces-logo {
  width: 140px;
  height: auto;
}

/* Text under the PISCES logo */
.pisces-text {
  font-size: 14px;
  color: #0057B8; /* PISCES Blue */
  text-align: left;
  margin-top: 5px;
  font-weight: bold;
}
</style>
