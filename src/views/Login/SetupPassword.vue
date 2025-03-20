<script setup>
import { ref } from 'vue';

const password = ref('');
const confirmPassword = ref('');

function handleSetUp() {
  console.log('Set up password attempt with:', password.value, confirmPassword.value);

  if (password.value !== confirmPassword.value) {
    console.log('Passwords do not match!');
    // Add error handling here
  } else {
    console.log('Password set up successful');
    // Add success logic here
  }
}
</script>

<template>
    <div class="Set_Password-container">
      <!-- Decorative background circles -->
      <div class="background-circle circle-1"></div>
      <div class="background-circle circle-2"></div>
      <div class="big-circle-background"></div>
  
      <div class="content-wrapper">
        <!-- Left Side: Branding Section -->
        <div class="branding-section">
          <div class="logo-section">
            <div class="logo-title-container">
              <img src="@/assets/Peza3.png" alt="PEZA Logo" class="peza-logo" />
              <img src="@/assets/Pisces.png" alt="PISCES Logo" class="pisces-title-image" />
            </div>
            <div class="subtitle-container">
              <p class="subtitle">PEZA Information System</p>
              <p class="subtitle">Compliance to Environment</p>
              <p class="subtitle">Standards</p>
            </div>
          </div>
          <div class="globe-container">
            <img src="@/assets/LoginLogo.png" alt="Illustrations" class="globe-image" />
          </div>
        </div>
  
        <!-- Right Side: Set Up Password Form -->
        <div class="form-section">
          <div class="form-card">
            <h2 class="form-title">SET UP Password</h2>
            
            <form @submit.prevent="handleSetUp">
              <div class="form-group">
                <label for="password" class="form-label">Password <span class="required">*</span></label>
                <div class="input-wrapper">
                  <input 
                    type="password" 
                    id="password" 
                    v-model="password" 
                    placeholder="Enter your password" 
                    class="form-input"
                    required 
                  />
                  <span class="toggle-password">👁️</span>
                </div>
              </div>
              <div class="form-group">
                <label for="confirmPassword" class="form-label">Confirm Password <span class="required">*</span></label>
                <div class="input-wrapper">
                  <input 
                    type="password" 
                    id="confirmPassword" 
                    v-model="confirmPassword" 
                    placeholder="Enter your password" 
                    class="form-input"
                    required 
                  />
                  <span class="toggle-password">👁️</span>
                </div>
              </div>
              <button type="submit" class="set-password-btn">Set password</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'SetUpPassword',
    data() {
      return {
        password: '',
        confirmPassword: ''
      };
    },
    methods: {
      handleSetUp() {
        console.log('Set up password attempt with:', this.password, this.confirmPassword);
        if (this.password !== this.confirmPassword) {
          console.log('Passwords do not match!');
          // Add error handling here
        } else {
          console.log('Password set up successful');
          // Add success logic here
        }
      }
    }
  };
  </script>
  
  <style scoped>
  .Set_Password-container {
    display: flex;
    width: 100%;
    height: 100vh;
    background: linear-gradient(135deg, #4a148c, #880e4f);
    overflow: hidden;
    position: relative;
    justify-content: center;
    align-items: center;
  }
  
  /* Background decorative circles */
  .background-circle {
    position: absolute;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.1);
  }
  
  .circle-1 {
    width: 300px;
    height: 300px;
    top: -100px;
    right: -80px;
  }
  
  .circle-2 {
    width: 400px;
    height: 400px;
    bottom: -150px;
    right: -100px;
    background: rgba(255, 255, 255, 0.05);
  }
  
  /* Big circle background */
  .big-circle-background {
    position: fixed;
    top: 50%;
    left: 0;
    transform: translateY(-50%);
    width: 60vw;
    height: 120vw;
    border-radius: 50%;
    background: linear-gradient(135deg, rgba(150, 140, 170, 0.3), rgba(100, 90, 120, 0.2));
    z-index: 0;
  }
  
  .content-wrapper {
    display: flex;
    width: 90%;
    max-width: 1200px;
    height: 80%;
    position: relative;
    z-index: 1;
  }
  
  /* Branding Section */
  .branding-section {
    width: 50%;
    display: flex;
    flex-direction: column;
    padding: 2rem;
    color: white;
    position: relative;
    z-index: 2;
  }
  
  .logo-section {
    display: flex;
    flex-direction: column;
    margin-bottom: 2rem;
  }
  
  .logo-title-container {
    display: flex;
    align-items: center;
    margin-bottom: 0.5rem;
  }
  
  .peza-logo {
    width: 130px;
    height: 130px;
    margin-right: 1rem;
  }
  
  .pisces-title-image {
    height: auto;
    width: 280px;
    margin: 0;
  }
  
  .subtitle-container {
    margin-left: 130px;
  }
  
  .subtitle {
    font-size: 20px;
    color: white;
    margin: 0;
    line-height: 1.3;
    text-align: left;
    font-weight: 300;
  }
  
  .globe-container {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-grow: 1;
    margin-top: 2rem;
  }
  
  .globe-image {
    width: 100%;
    max-width: 500px;
    height: auto;

  }
  
  /* Form Section */
  .form-section {
    width: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    z-index: 2;
  }
  
  .form-card {
    background: white;
    padding: 2.5rem;
    border-radius: 8px;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
    width: 100%;
    max-width: 400px;
    border: 2px solid #4a148c; /* Border color matching the theme */
  }
  
  .form-title {
    color: #0a3d91;
    font-size: 24px;
    font-weight: bold;
    margin-bottom: 1.5rem;
    text-align: left;
    text-transform: uppercase; /* Match the uppercase title in the image */
  }
  
  .form-group {
    margin-bottom: 1.5rem;
  }
  
  .form-label {
    display: block;
    margin-bottom: 0.5rem;
    font-size: 14px;
    color: #0a3d91;
    font-weight: 500;
  }
  
  .required {
    color: red;
  }
  
  .input-wrapper {
    position: relative;
    width: 100%;
  }
  
  .form-input {
    width: 100%;
    padding: 0.75rem;
    border: 1px solid #ddd;
    border-radius: 4px;
    font-size: 14px;
    color: #666;
  }
  
  .toggle-password {
    position: absolute;
    right: 10px;
    top: 50%;
    transform: translateY(-50%);
    cursor: pointer;
    font-size: 16px;
    color: #666;
  }
  
  .set-password-btn {
    width: 100%;
    padding: 0.75rem;
    background-color: #0a3d91;
    color: white;
    border: none;
    border-radius: 4px;
    font-size: 16px;
    cursor: pointer;
    transition: background-color 0.3s;
    text-transform: capitalize; /* Match the button text style in the image */
  }
  
  .set-password-btn:hover {
    background-color: #072e6d;
  }
  
  /* Responsive Design */
  @media (max-width: 1200px) {
    .pisces-title-image {
      width: 240px;
    }
    .peza-logo {
      width: 120px;
      height: 120px;
    }
    .subtitle-container {
      margin-left: 120px;
    }
    .globe-image {
      max-width: 450px;
    }
  }
  
  @media (max-width: 992px) {
    .content-wrapper {
      flex-direction: column;
      height: auto;
    }
    .branding-section, .form-section {
      width: 100%;
    }
    .branding-section {
      padding-bottom: 0;
    }
    .form-section {
      padding-top: 1rem;
    }
    .globe-container {
      margin-top: 1rem;
      margin-bottom: 1rem;
    }
    .globe-image {
      margin-bottom: 0;
      max-width: 350px;
    }
    .big-circle-background {
      width: 70vw;
      height: 140vw;
    }
  }
  
  @media (max-width: 768px) {
    .globe-container {
      display: none;
    }
    .Set_Password-container {
      padding: 1rem;
    }
    .form-card {
      padding: 1.5rem;
    }
    .peza-logo {
      width: 100px;
      height: 100px;
    }
    .pisces-title-image {
      width: 200px;
    }
    .subtitle-container {
      margin-left: 100px;
    }
    .subtitle {
      font-size: 18px;
    }
    .big-circle-background {
      width: 80vw;
      height: 160vw;
      left: -40vw;
    }
  }
  
  @media (max-width: 576px) {
    .logo-title-container {
      flex-direction: column;
      align-items: center;
    }
    .logo-section {
      align-items: center;
    }
    .subtitle-container {
      margin-left: 0;
      text-align: center;
    }
    .subtitle {
      text-align: center;
      font-size: 16px;
    }
    .peza-logo {
      width: 100px;
      height: 100px;
      margin-right: 0;
      margin-bottom: 1rem;
    }
    .pisces-title-image {
      width: 220px;
    }
    .big-circle-background {
      width: 100vw;
      height: 200vw;
      left: -50vw;
    }
  }
  </style>