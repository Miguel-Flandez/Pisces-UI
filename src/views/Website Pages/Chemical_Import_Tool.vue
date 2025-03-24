<script setup>
import WebFooter from '@/components/Website Components/WebFooter.vue';
import WebHeader from '@/components/Website Components/WebHeader.vue';
import { ref } from 'vue';

// Reactive variable to hold the search query
const searchQuery = ref('');
const activeTab = ref('Chemical Importation Tool');

// Function triggered when clicking the search button
const searchChemical = () => {
  console.log(`Searching for: ${searchQuery.value}`);
  // Implement API call here if needed
};
</script>

<template>
  <WebHeader/>
  <div class="container">  
    <!-- Main Content -->
    <main class="content">
      <div class="breadcrumb">
        <a href="#">Home</a> / <span>Chemical Importation Tool</span>
      </div>
      <div class="search-container">
        <h1 class="title">Chemical Importation Tool</h1>
        <div class="search-box">
          <input v-model="searchQuery" type="text" placeholder="Enter the CAS # or the Chemical Name to verify..." />
          <button @click="searchChemical">Search</button>
        </div>
        <p class="note">
          <strong>NOTE:</strong> This tool is based on the existing requirements of the Philippine Drug Enforcement Agency (PDEA), Dangerous Drug Board (DDB), Philippine National Police – Firearms and Explosives Office (PNP-FEO), and Department of Environment and Natural Resources – Environmental Management Bureau (DENR – EMB) as of 29 Nov 2024.
        </p>
        </div>
    </main>
  </div>
  <WebFooter/>
</template>

<style scoped>

/* General Styles */
.container {
  font-family: Helvetica, sans-serif;
  text-align: center;
  padding: 0;
  margin: 0;
  background-color: #f5f7fa;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  position: relative; /* Needed for breadcrumb positioning */
}


/* Background Image */
.content {
  position: relative;
  background: linear-gradient(to bottom, #e6efff, #f5f9ff); /* Light gradient */
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  box-shadow: none;
}
/* Overlay Image */
.content::before {
  content: "";
  position: absolute;
  bottom: 0;
  left: 50%;
  /* Fixed dimensions in px */
  width: 1200px;
  height: 400px;
  
  background-image: url('@/assets/bgimg.png');
  background-size: contain;
  background-position: center bottom;
  background-repeat: no-repeat;
  background-attachment: fixed;
  opacity: 0.6;
  z-index: 1;
  transform: translateX(-50%);
}

/* Breadcrumb Styling */
.breadcrumb {
  font-size: 14px;
  padding: 5px 0;
  display: flex;
  align-items: center;
  gap: 5px;
  background: none;
  z-index: 1; /* Ensures breadcrumb stays on top */
  position: absolute;
  top: 40px; /* Adjust based on your header height */
  left: 90px;
}

/* Breadcrumb Links - Not Highlighted (Gray) */
.breadcrumb a {
  text-decoration: none;
  color: #6c757d; /* Gray color */
  font-weight: normal;
}

.breadcrumb a:hover {
  text-decoration: underline;
}

/* Active (Last) Breadcrumb - Highlighted in Blue */
.breadcrumb span:last-child {
  font-weight: bold;
  color: #0056b3; /* Blue color */
}


/* Search Box */
.search-container {
  background: white;
  padding: 40px;
  border-radius: 10px;
  width: 80%;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  text-align: left;

  position: absolute;
  top: 100px; /* Adjust this to move it higher or lower */
  left: 50%;
  transform: translateX(-50%); /* Keeps it centered horizontally */
}

.title {
  font-size: 22px;
  font-weight: bold;
  color: #0056b3;
}

.search-box {
  display: flex;
  align-items: center;
  margin-top: 15px;
  border: 1px solid #ccc;
  border-radius: 5px;
  background: #f1f1f1;
  overflow: hidden; /* Ensures the button stays within the search box */
}

.search-box input {
  padding: 14px; /* Increased padding to make the input field bigger */
  flex-grow: 1; /* Allows the input to take up remaining space */
  border: none;
  background: transparent;
  outline: none; /* Removes the default focus outline */
  font-size: 16px; /* Font size for the input field */
  font-family: Arial, sans-serif; /* Customizable font family */
}

.search-box button {
  padding: 12px 24px; /* Padding to make the button a bit bigger */
  background-color: #0E3687;
  border-radius: 5px;
  color: white;
  border: none;
  cursor: pointer;
  font-size: 14px; /* Reduced font size for the button */
  font-family: Montserrat, sans-serif; /* Customizable font family */
  margin-left: -30px; /* Moves the button to the left */
}

.search-box button:hover {
  background-color: #003f7f;
}

.note {
  font-size: 14px;
  margin-top: 20px;
}

</style>
