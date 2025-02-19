<!-- Feedback Form code starts -->
<script setup>
import {WebHeader, WebFooter, SaveChangesModal} from '@/components';
import { ref } from 'vue';

const isModalVisible = ref(false);

function showModal(){
  isModalVisible.value = true;
}

</script>

<template>
    <WebHeader/>
  <div class="feedback-container">
    

    <div class="feedback-page">
      <div class="breadcrumb">
        <span>Home</span> / <span class="current-page">Feedback</span>
      </div>
      
      <div class="feedback-header">
        <h2>Feedback</h2>
      </div>
      
      <div class="form-wrapper">
        <div class="feedback-form">
          <form @submit.prevent="submitFeedback">
            <div class="form-group">
              <label for="name">Name</label>
              <input type="text" id="name" placeholder="Enter" required />
            </div>
            <div class="form-group">
              <label for="email">Email Address</label>
              <input type="email" id="email" placeholder="Enter" required />
            </div>
            <div class="form-group">
              <label for="message">Write your Feedback / Suggestion</label>
              <textarea id="message" placeholder="" required></textarea>
            </div>
            <div class="form-buttons">
              <button type="button" class="cancel-btn" @click="cancel">✖ Cancel</button>
              <button type="submit" class="submit-btn" @click="showModal"> Submit ✔</button>
              <SaveChangesModal v-if="isModalVisible" @close="isModalVisible = false"/>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
  <WebFooter/>
</template>



  
<style scoped>
  /* General Styles */
  .feedback-container {
    min-height: 100vh;
    background: linear-gradient(to bottom, #ebf8ff, #ffffff);
    display: flex;
    flex-direction: column;
  }
  
  /* Navbar */
  /* Navbar Styles */
  .navbar {
    background: white;
    width: 95%;
    max-width: 100%;
    padding: 30px 50px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    position: relative;
    top: 0;
    left: 0;
    right: 0;
    z-index: 1000;
    font-family: Arial, sans-serif;
    height: 50px; /* Ensure the navbar has a fixed height */
  }
  
  /* Prevent content from being hidden behind the navbar */

  
  /* Logo & Name */
  .navbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  
  /* Logo Container */
  .logo-container {
    display: flex;
    align-items: center;
    gap: 20px; /* Adds space between the logos */
  }
  
  .peza-logo {
    width: 120px; /* Larger logo */
    height: auto;
  }
  
  .pisces-logo {
    width: 100px; /* Smaller logo */
    height: auto;
  }
  
  /* Navigation Links */
  .navbar .nav-links {
    display: flex;
    gap: 35px;
  }
  
  .navbar .nav-links a {
    text-decoration: none;
    font-size: 16px;
    color: rgb(145, 145, 145);
    font-weight: 500;
    transition: color 0.2s;
  }
  
  .navbar .nav-links a:hover,
  .navbar .nav-links a.active {
    color: #002a6c; /* Highlight on hover */
    font-weight: bold;
  }
  
  /* User Section */
  .navbar .user-section {
    display: flex;
    align-items: center;
    gap: 10px;
  }
  
  .navbar .user-section .icon {
    font-size: 20px;
    color: rgb(145, 145, 145);
    cursor: pointer;
  }
  
  .navbar .user-section .user-name {
    font-size: 16px;
    font-weight: bold;
    color: #002a6c;
  }
  .user-name {
    text-decoration: none; 
    color: inherit; 
    cursor: pointer; 
  }
  
  .icon {
    width: 30px;  /* Adjust size as needed */
    height: 30px;
    vertical-align: middle;
    margin-right: 10px;
  }
  
  /* Fix content overlap issue */
  
  /* Ensure content starts immediately under the navbar */
  .main-container {
    margin-top: 0; 
  }
  
  
  /* Feedback Form */
  /* Breadcrumb */
  /* Breadcrumb Container */
  .breadcrumb {
    display: flex;
    align-items: center;
    gap: 10px;
    font-size: 14px;
    color: #777; /* Light gray like the reference image */
    margin: 10px 0; /* Adjust spacing */
    padding: 5px 50px;
    position: relative; /* Change from absolute to relative */
    top: 30; /* Reset positioning */
    left: 30;
  }
  
  
  
  /* Breadcrumb Links */
  .breadcrumb span {
    color: #888;
  }
  
  .breadcrumb .current-page {
    font-weight: normal;
    color: #3b4991;
  }
  
  /* Moves breadcrumb text up */
  .breadcrumb {
    margin-top: -100px; /* Adjust to move it higher */
  }
  
  
  /* Ensure Feedback Page Content is Visible */
  .feedback-page {
    margin-top: 120px; /* Push below navbar */
    padding: 20px;
  }
  
  
  
  /* Feedback Header */
  .feedback-header {
    background: white;
    width: 100%;
    max-width: 1650px;
    text-align: left;
    padding: 20px 30px;
    font-size: 24px;
    font-weight: bold;
    font-family: Arial, sans-serif; /* Set font to Arial */
    border-radius: 20px;
    box-shadow: 0 6px 8px rgba(0, 0, 0, 0.1);
    margin: 30px auto;
    height: 50px;
    display: flex;
    align-items: center;
  }
  
  /* Feedback Form */
  .feedback-form {
    background: white;
    width: 100%;
    max-width: 1650px; 
    padding: 20px 30px;
    border-radius: 20px;
    box-shadow: 0 6px 8px rgba(0, 0, 0, 0.1);
    margin: 30px auto 250px auto; /* Increased bottom margin */
    height: auto;
    min-height: 150px;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  
  
  /* Form Titles & Labels */
  h2, label {
    color: #1a3e92;
  }
  
  .form-group {
    margin-bottom: 15px;
  }
  
  label {
    font-weight: normal;
    display: block;
    margin-bottom: 5px;
  }
  
  /* Form Inputs */
  input, textarea {
    width: 98%; /* Ensures full width */
    padding: 12px;
    border: 1px solid #ccc;
    border-radius: 6px;
    font-size: 16px;
    background: #f9fbff;
  }
  
  textarea {
    height: 120px;
    resize: none;
  }
  
  /* Form Buttons */
  .form-buttons {
    display: flex;
    justify-content: flex-end;
    gap: 10px;
    margin-top: 20px;
  }
  
  .cancel-btn, .submit-btn {
    padding: 10px 18px;
    border: none;
    border-radius: 6px;
    font-size: 16px;
    cursor: pointer;
    transition: 0.3s;
  }
  
  .cancel-btn {
    background: white;
    border: 1px solid #ccc;
    color: #1a3e92;
  }
  
  .cancel-btn:hover {
    background: #f0f0f0;
  }
  
  .submit-btn {
    background: #1a3e92;
    color: white;
  }
  
  .submit-btn:hover {
    background: #142f73;
  }
  
  /* Page Layout & Responsiveness */

  .main-content {
    min-height: calc(100vh - 200px); /* Ensures proper spacing */
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 20px;
  }

</style>
  