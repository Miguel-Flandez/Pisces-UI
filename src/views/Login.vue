<script setup>
import { SplashScreen1 } from '@/components';
</script>

<template>
    <SplashScreen1/>
    <div class="login-container">
      <div class="content-wrapper">
        <!-- Left Side: Logos, Text, and Illustrations at the Bottom -->
        <div class="left-section">
          <div class="bottom-content">
            <div class="logo-section">
              <img src="@/assets/Peza3.png" alt="PEZA Logo" class="peza-logo" />
              <img src="@/assets/Pisces.png" alt="PISCES Logo" class="pisces-logo" />
              <p>PEZA Information System Compliance to Environment Standards</p>
            </div>
            <div class="illustrations">
              <img src="@/assets/LoginLogo.png" alt="Illustrations" class="illustration-img" />
            </div>
          </div>
        </div>
  
        <!-- Right Side: Login Form -->
        <div class="right-section">
  <div class="login-form">
    <div class="header-group">
      <h2>Welcome Back</h2>
      <p class="subtitle">Log in your credentials</p>
    </div>
    <form>
      <div class="form-group">
        <label for="email">Email <span class="required">*</span></label>
        <input type="email" id="email" placeholder="Enter your email" required />
      </div>
      <div class="form-group password-group">
        <label for="password">Password <span class="required">*</span></label>
        <div class="password-wrapper">
          <input type="password" id="password" placeholder="Enter your password" required />
          <span class="eye-icon"><i class="fas fa-eye-slash"></i></span> <!-- Font Awesome eye-slash icon -->
        </div>
      </div>
      <div class="forgot-password-wrapper">
        <router-link to="/forgot-password"><p class="forgot-password">Forgot Password?</p></router-link>
      </div>
      <button type="submit" class="login-button">Login</button>
    </form>
    <div class="version-text">v.1.0.0</div>
    <div class="manual-link">
      <p class="manual-text">
        Click <a href="#" target="_blank" class="manual-link-here">here</a> to download the user manual
      </p>
    </div>
  </div>
        </div>
      </div>
    </div>
  </template>
  
  <style scoped>
  .login-container {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    background: linear-gradient(135deg, #4a148c, #880e4f);
    position: relative;
    overflow: hidden;
  }
  
  .content-wrapper {
    display: flex;
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
  }
  /* left section logos */
  .left-section {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: flex-end; 
    align-items: flex-start; 
    padding: 1rem;
    color: #fff;
    position: relative;
    min-height: 100vh; 
    width: 10%; 
  }
  
  .bottom-content {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start; 
  }
  
  .logo-section {
    text-align: left; 
    margin-bottom: 1rem; 
  }
  
  .peza-logo {
    height: 100px; 
    width: auto; 
    margin-bottom: 0.10rem; 
  }
  
  .pisces-logo {
    height: 100px; 
    width: auto; 
    margin-bottom: 0.05rem; 
  }
  
  .illustrations {
    width: 100%;
    margin-bottom: 0.2rem; 
    position: relative; 
  }
  
  .illustration-img {
    width: 100%;
    height: 110%;
    object-fit: contain;
    opacity: 0.5;
  }
  /* right section the login form*/
  .right-section {
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0.5rem;
    width: 50%;
  }
  
  .login-form {
    background: white;
    padding: 2.5rem;
    border-radius: 15px; 
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1); 
    width: 513px;
    position: relative; 
  }
  
  .header-group {
    text-align: left; 
    margin-bottom: 1.5rem; 
    width: 100%; 
  }
  
  .login-form h2 {
    color: #1e3a8a; 
    font-size: 2.2rem; 
    font-weight: 800; 
    margin-bottom: 0.2rem; 
    line-height: 1.2; 
  }
  
  .header-group p {
   text-align: left; 
    margin-bottom: 1.5rem; 
    width: 85%; 
  }
  .header-group p.subtitle {
    color: black; 
    font-size: 1rem; 
    font-weight: 500; 
    margin: 0; 
    display: block;
    line-height: 1.2; 
  }
  
  .login-form .subtitle {
    color: #666;
    font-size: 0.85rem; 
    margin: 0; 
    display: block; 
    line-height: 1.2; 
  }
  
  .form-group {
    margin-bottom: 1.2rem; 
  }
  
  .form-group label {
    display: block;
    color: #1e3a8a; 
    font-size: 0.9rem; 
    font-weight: 500; 
    margin-bottom: 0.4rem; 
  }
  
  .form-group .required {
    color: #ff0000;
  }
  
  .form-group input {
    width: 100%;
    padding: 0.5rem 0.5rem; 
    border: 1px solid #e0e0e0; 
    border-radius: 5px;
    font-size: 0.9rem; 
    color: #333;
  }
  
  .form-group input::placeholder {
    color: #aaa; 
    font-size: 0.9rem;
  }
  
  .password-group {
    position: relative;
  }
  
  .password-wrapper {
    position: relative;
    width: 100%;
  }
  
  .eye-icon {
    position: absolute;
    right: 10px;
    top: 50%;
    transform: translateY(-50%);
    font-size: 0.9rem; 
    color: #1e3a8a; 
    cursor: pointer;
  }
  
  .forgot-password-wrapper {
    width: 100%; 
    text-align: right; 
    margin-bottom: 1rem; 
  }
  
  .forgot-password {
    color: #1e3a8a; 
    font-size: 0.85rem; 
    cursor: pointer;
    display: inline-block; 
    margin: 0; 
  }
  .forgot-password:hover{
    text-decoration: underline;
  }
  
  .login-button {
    width: 100%;
    padding: 0.8rem;
    background: linear-gradient(135deg, #1e3a8a, #0d1a47); 
    color: white;
    border: none;
    border-radius: 8px; 
    font-size: 1rem;
    font-weight: 500; 
    cursor: pointer;
    transition: background 0.3s;
  }
  
  .login-button:hover {
    background: linear-gradient(135deg, #0d1a47, #09102b); 
  }
  
  /* Responsive Design */
  @media (max-width: 768px) {
    .content-wrapper {
      flex-direction: column;
      padding: 1rem;
    }
  
    .left-section,
    .right-section {
      width: 100%;
    }
  
    .bottom-content {
      justify-content: flex-start; 
    }
  
    .illustrations {
      display: none; 
    }
  
    .login-form {
      max-width: 100%;
    }
  }
  /* forms text design */
  .version-text {
      font-size: 12px; 
      color: #1e3a8a; 
      text-align: center; 
      margin-top: 10px; 
      font-weight: bold;
    }
  
    .manual-link {
      text-align: center; 
      margin-top: 5px; 
    }
  
    .manual-text {
      font-size: 10px; 
      color: #333; 
      margin: 0; 
      text-align: center; 
    }
  
    .manual-link-here {
      text-decoration: underline; 
      color:rgb(68, 158, 255); 
    }
  
    .manual-text a {
      text-decoration: none; 
    }
  </style>