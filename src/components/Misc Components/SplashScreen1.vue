<script setup>
import { ref, onMounted} from 'vue';

// Define the event emitter for the parent component

// Create a reactive reference for controlling the splash screen visibility
const showSplash = ref(true);

// Use the `onMounted` lifecycle hook to hide the splash screen after 3 seconds
onMounted(() => {
  setTimeout(() => {
    showSplash.value = false;
  }, 1000);
});
</script>

<template>
  <!-- Splash screen container, displayed at the start -->
  <div v-if="showSplash" class="splash-screen">
    <div class="splash-content">
      <!-- Logo image -->
      <img src='@/assets/LogoPeza.png' alt="PISCES Logo" class="logo" />

      <!-- Welcome title -->
      <h1 class="title">Welcome to PISCES</h1>

      <!-- Loading animation -->
      <div class="loader"></div>
    </div>
  </div>
</template>

<style scoped>
/* Full-screen splash screen */
.splash-screen {
  position: fixed; /* Ensures the splash screen covers the entire viewport */
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgb(255, 255, 255); /* White background */
  display: flex;
  justify-content: center; 
  align-items: center; 
  z-index: 9999; 
  transition: opacity 0.5s ease-in-out; 
}

/* Container for splash screen elements */
.splash-content {
  text-align: center; 
}

/* Logo styling */
.logo {
  width: 120px; 
  height: auto; 
  margin-bottom: 20px; 
}

/* Title styling */
.title {
  color: #0057B8; 
  font-size: 24px; 
  font-weight: bold; 
}

/* Loader animation (spinning circle) */
.loader {
  margin: 20px auto; /* Centers the loader */
  width: 40px;
  height: 40px;
  border: 4px solid #fff; 
  border-top: 4px solid #0044c7; 
  border-radius: 50%; 
  animation: spin 1s linear infinite; 
}

/* Loader spinning animation */
@keyframes spin {
  0% { transform: rotate(0deg); } 
  100% { transform: rotate(360deg); } 
}
</style>
