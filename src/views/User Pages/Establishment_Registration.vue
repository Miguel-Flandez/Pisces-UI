<script setup>
import WebFooter from '@/components/WebFooter.vue';
import WebHeader from '@/components/WebHeader.vue';
import { ref } from 'vue';

const activeTab = ref('Establishment Registration');

// Reactive variables for form fields
const companyName = ref('');
const companyAddress = ref('');
const companyEmail = ref('');
const companyLogo = ref(null);

const repName = ref('');
const repDesignation = ref('');
const repContact = ref('');
const repEmail = ref('');


const area = ref('');

const endorsementLetter = ref(null);
const scanId = ref(null);

// Upload handlers
const handleCompanyLogoUpload = (event) => {
  companyLogo.value = event.target.files[0];
};

const handleEndorsementLetterUpload = (event) => {
  endorsementLetter.value = event.target.files[0];
};

const handleScanIdUpload = (event) => {
  scanId.value = event.target.files[0];
};

// Button actions
const cancelForm = () => {
  // Reset or navigate away
  alert('Form canceled.');
};

const submitForm = () => {
  // Handle form submission logic here
  alert('Form submitted!');
};
</script>

<template>
    <WebHeader/>
  <div class="container">
    <!-- Main Content -->
    <main class="content">
      <div class="breadcrumb">
        <a href="#">Home</a> / <span>Establishment Registration</span>
      </div>

      <!-- Establishment Registration Form Container (Grid Layout) -->
  <div class="registration-container">
    <div class="heading-container">
    <h2>Establishment Registration</h2>
  </div>

  <div class="form-sections">
    <!-- Company Information (left cell) -->
    <div class="section-block">
        <h2>Company Information</h2>
        <div class="form-row">
          <label for="industryClassification">Type of Business / Industry Classification</label>
           <select id="industryClassification" class="form-select">
             <option value="" disabled selected>Select</option>
             <option value="technology">Technology</option>
             <!-- add more below-->
            </select>
        </div>
        <div class="form-row">
            <label for="companyName">Name of Company</label>
            <input id="companyName" type="text" v-model="companyName" placeholder="Enter" />
        </div>
        <div class="form-row">
            <label for="companyAddress">Company Address</label>
            <input id="companyAddress" type="text" v-model="companyAddress" placeholder="Enter" />
        </div>
        <div class="form-row">
            <label for="companyEmail">Email Address</label>
            <input id="companyEmail" type="email" v-model="companyEmail" placeholder="Enter" />
        </div>
        <div class="form-row">
    <label for="companyLogo" class="upload-label">Company Logo</label>
    <div class="upload-section company-logo-upload">
        <div class="icon-wrapper">
            <img src="@/assets/doc.png" alt="Document Icon" class="icon" />
        </div>
        <label for="companyLogo" class="upload-button">
            <img src="@/assets/upload.png" alt="Upload Icon" class="upload-icon" />
            Upload
        </label>
        <input id="companyLogo" type="file" @change="handleCompanyLogoUpload" class="hidden-file-input" />
    </div>
</div>

</div>
    <!-- Company Representative Information (right cell) -->
    <div class="section-block">
        <h2>Company Representative Information</h2>
        <div class="form-row">
            <label for="repName">Name</label>
            <input id="repName" type="text" v-model="repName" placeholder="Enter" />
        </div>
        <div class="form-row">
            <label for="repDesignation">Designation</label>
            <input id="repDesignation" type="text" v-model="repDesignation" placeholder="Enter" />
        </div>
        <div class="form-row">
            <label for="repContact">Contact Number</label>
            <input id="repContact" type="text" v-model="repContact" placeholder="Enter" />
        </div>
        <div class="form-row">
            <label for="repEmail">Email Address</label>
            <input id="repEmail" type="email" v-model="repEmail" placeholder="Enter" />
        </div>
    </div>
</div>
    <!-- Site of Operation -->
    <div class="site-operation">
        <h2>Site of Operation</h2>
        <div class="form-row horizontal">
            <div class="form-group">
                <label for="zone">Zone</label>
                <select id="zone" class="form-select">
                    <option value="" disabled selected>Select</option>
                    <option value="zone1">Zone 1</option>
                    <!-- add more below-->
                </select>
            </div>
            <div class="form-group">
                <label for="location">Location</label>
                <select id="location" class="form-select">
                    <option value="" disabled selected>Select</option>
                    <option value="location1">Location 1</option>
                    <!-- add more below-->
                </select>
            </div>
            <div class="form-group">
                <label for="area">Area</label>
                <input id="area" type="text" v-model="area" placeholder="Enter" class="larger-input" />
            </div>
        </div>
    </div>

<!-- PISCES Requirement -->
<div class="piscies-req">
    <h2>PISCES Requirement</h2>
    <div class="form-row horizontal">
        <div class="form-group">
            <label for="endorsementLetter" class="upload-label">Endorsement Letter</label>
            <div class="upload-section">
                <div class="icon-wrapper">
                    <img src="@/assets/doc.png" alt="Document Icon" class="icon" />
                </div>
                <label for="endorsementLetter" class="upload-button">
                    <img src="@/assets/upload.png" alt="Upload Icon" class="upload-icon" />
                    Upload
                </label>
                <input id="endorsementLetter" type="file" @change="handleEndorsementLetterUpload" class="hidden-file-input" />
            </div>
        </div>
        <div class="form-group">
            <label for="scanId" class="upload-label">Scan ID</label>
            <div class="upload-section">
                <div class="icon-wrapper">
                    <img src="@/assets/doc.png" alt="Document Icon" class="icon" />
                </div>
                <label for="scanId" class="upload-button">
                    <img src="@/assets/upload.png" alt="Upload Icon" class="upload-icon" />
                    Upload
                </label>
                <input id="scanId" type="file" @change="handleScanIdUpload" class="hidden-file-input" />
            </div>
        </div>
    </div>
</div>

    <!-- Form Actions (Buttons) spanning full width -->
    <div class="form-actions">
        <button class="cancel-btn" @click="cancelForm">
            <span class="icon">✕</span> Cancel
        </button>
        <button class="submit-btn" @click="submitForm">
            <span class="icon">✓</span> Submit
        </button>
    </div>
</div>
    </main>
  </div>

    <WebFooter/>
</template>

<style scoped>

/* General Styles */
.container {
  font-family: Arial, sans-serif;
  text-align: center;
  padding: 0;
  margin: 0;
  background-color: #f5f7fa;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  position: relative;
}


/* Background */
.registration-container {
  min-height: 100vh;
  background: linear-gradient(to bottom, #e6efff, #f5f9ff); /* Light gradient */
  display: flex;
  flex-direction: column;
  padding: 40px;
}

/* Breadcrumb Styling */
.breadcrumb {
  font-size: 14px;
  display: inline-flex;
  align-items: center;
  margin-bottom: 0px;
  gap: 5px;
  position: absolute;
  top: 26px;
  left: 60px;
  z-index: 10;
  background: transparent !important;
}

.breadcrumb a {
  text-decoration: none;
  color: #6c757d;
  transition: color 0.3s ease;
}

.breadcrumb a:hover {
  color: #0056b3;
}

.breadcrumb span:last-child {
  font-weight: bold;
  color: #0056b3;
}

/* General Styles */
.container {
    font-family: Arial, sans-serif;
    text-align: center;
    padding: 0;
    margin: 0;
    background-color: #f5f7fa;
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    position: relative;
}


/* Establishment Registration Title Styling */
.heading-container {
    text-align: left;
    padding: 30px;
    border-radius: 12px;
    background: #ffffff;
    margin-top: 20px;
    margin-bottom: 20px;
}

.heading-container h2 {
    font-size: 30px;
    font-weight: bold;
    background: linear-gradient(to right, #002161, #0044C7);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    margin-bottom: 10px; /* Adjusted spacing */
}

.form-sections {
    display: flex;
    gap: 20px;
}

.section-block {
    flex: 1;
    background-color: #ffffff;
    text-align: left;
    padding: 15px;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    margin-bottom: 20px;
}

/* Site of Operation and PISCES Requirement below */
.site-operation,
.piscies-req {
  flex: 1;
    background-color: #ffffff;
    text-align: left;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    margin-bottom: 20px;
    width: 100%; /* Ensure full width */
}

/* Form Headers */
.section-block h2,
.piscies-req h2,
.site-operation h2 {
    font-size: 18px;
    font-weight: bold;
    color: #002161;
    margin-bottom: 10px;
}

/* Form Input Fields */
.form-row {
    display: flex;
    flex-direction: column;
    margin-bottom: 15px;
    text-align: left;
    color: #D4D4D8;
    gap: 15px;
}

.form-row.horizontal {
    flex-direction: row;
    gap: 20px; /* Adjust spacing between fields */
}

.form-row.horizontal .form-group {
    flex: 1; /* Ensures each field takes equal width */
    min-width: 300px; /* Set a minimum width for each cell */
}

input[type="text"],
input[type="file"] {
    width: 100%;
    padding: 8px;
    font-size: 14px;
    border: 1px solid #ccc;
    border-radius: 4px;
    background-color: #fff;
}

.larger-input {
    padding: 12px; /* Larger input box */
    font-size: 16px; /* Larger font size */
}

input[type="file"] {
    cursor: pointer;
}

/* Labels */
label {
    font-size: 14px;
    font-weight: bold;
    margin-bottom: 4px;
    display: block;
    color: #333;
}

.form-row label {
    font-weight: bold;
    font-size: 14px;
    margin-bottom: 5px;
    color: #0E3687;
}

.form-select {
    width: 100%;
    padding: 8px 12px;
    font-size: 14px;
    border: 1px solid #ccc;
    border-radius: 4px;
    background-color: #fff;
    cursor: pointer;
    appearance: none; /* Removes default arrow in some browsers */
    -webkit-appearance: none; /* Removes default arrow in Safari */
    -moz-appearance: none; /* Removes default arrow in Firefox */
    background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="%23333"><path d="M7 10l5 5 5-5z"/></svg>'); /* Custom dropdown arrow */
    background-repeat: no-repeat;
    background-position: right 10px center;
    background-size: 12px;
}

.form-select:focus {
    outline: none;
    border-color: #666;
    box-shadow: 0 0 0 2px rgba(0, 0, 0, 0.1);
}

/* Specific styles for Company Logo upload section */
.company-logo-upload {
    width: 200px; /* Reduced width for the cell */
    display: flex;
    align-items: center;
    justify-content: space-between;
    border: 1px solid #ccc;
    border-radius: 4px;
    background-color: #fff;
    padding: 4px; /* Reduced padding */
}

.form-row input {
    padding: 10px;
    border: 1px solid #D4D4D8;
    border-radius: 8px;
    font-size: 14px;
    width: 100%;
    box-sizing: border-box;
}

.upload-label {
    font-size: 14px;
    font-weight: bold;
    margin-bottom: 4px;
}

.upload-section {
  display: flex;
    align-items: center;
    border: 1px solid #ccc;
    border-radius: 4px;
    overflow: hidden;
    width: 93%; /* Make the cell take full width */
    background-color: #fff;
    justify-content: flex-end; /* Move the button to the right */
    padding: 8px; /* Add padding for better spacing */
}

.icon-wrapper {
  background-color: #f0f0f0;
    padding: 4px; /* Reduced padding */
    display: flex;
    align-items: center;
    justify-content: center;
    height: 32px; /* Adjusted height */
    width: 32px; /* Adjusted width */
    border-radius: 4px;
}

.icon {
    width: 16px;
    height: 16px;
}

.upload-button {
  display: flex;
    align-items: center;
    gap: 4px; /* Adds spacing between the icon and text */
    padding: 4px 8px; /* Smaller padding for a smaller button */
    background-color: #ffffff; /* White background */
    color: #333;
    cursor: pointer;
    border: none;
    font-size: 12px; /* Smaller font size */
    border-radius: 4px; /* Rounded corners for the button */
    transition: background-color 0.3s ease; /* Smooth hover transition */
    margin-left: auto; /* Pushes the button to the right */
    width: auto; /* Let the button size adjust to its content */
}

.upload-button:hover {
    background-color: #f5f5f5; /* Light gray on hover */
}

.upload-icon {
  width: 12px; /* Smaller icon */
  height: 12px; /* Smaller icon */
}

.hidden-file-input {
    display: none;
}

/* Form Actions (Buttons) */
.form-actions {
    display: flex;
    justify-content: flex-end;
    gap: 10px;
    margin-top: 20px;
}

.cancel-btn,
.submit-btn {
    display: flex;
    align-items: center; /* Vertically center the icon and text */
    justify-content: center; /* Horizontally center the content */
    gap: 8px; /* Space between icon and text */
    padding: 8px 16px;
    border-radius: 4px;
    cursor: pointer;
    font-size: 14px;
    border: 1px solid transparent; /* Ensure consistent border */
}

.cancel-btn {
    background-color: transparent;
    border-color: #002161; /* Add border color */
    color: #002161;
}

.cancel-btn:hover {
    background-color: rgba(0, 33, 97, 0.1); /* Light hover effect */
}

.submit-btn {
    background-color: #0E3687;
    color: white;
    border: none;
}

.submit-btn:hover {
    background-color: #0c2e6e; /* Darker shade on hover */
}

/* Icon alignment */
.cancel-btn .icon,
.submit-btn .icon {
    font-size: 16px;
    line-height: 1; /* Ensure the icon aligns properly */
    margin: 0; /* Remove any default margin */
}

</style>