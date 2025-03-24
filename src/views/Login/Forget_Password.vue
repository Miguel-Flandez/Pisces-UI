<script setup>
import { ref, onMounted } from 'vue';

// State
const email = ref('');

// Methods
const handleSubmit = () => {
  console.log('Password reset email sent to:', email.value);
};

const disableZoom = () => {
  document.addEventListener('wheel', (e) => {
    if (e.ctrlKey) {
      e.preventDefault();
    }
  }, { passive: false });

  document.addEventListener('touchmove', (e) => {
    if (e.touches.length > 1) {
      e.preventDefault();
    }
  }, { passive: false });
};

// Lifecycle hook
onMounted(() => {
  disableZoom();
});
</script>



<template>
  <div class="forgot-password-container">
    <div class="content-wrapper">
      <!-- Right Side: Forgot Password Form -->
      <div class="right-section">
        <div class="forgot-password-form">
          <div class="header-group">
            <h2>Forgot Password?</h2>
            <p class="subtitle">Enter your email and we'll send you a link to reset your password.</p>
          </div>
          <form @submit.prevent="handleSubmit">
            <div class="form-group">
              <label for="email">Email <span class="required">*</span></label>
              <input type="email" id="email" v-model="email" placeholder="Enter your email" required />
            </div>
            <router-link to="/reset-password"><button type="submit" class="send-email-button">Send Email</button></router-link>
          </form>
          <div class="back-link-container">
            <router-link to="/login" class="back-to-login">
              <span class="back-arrow">←</span> Back to Login
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<style scoped>
/* Disable zooming while preserving design */
.forgot-password-container {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background: url('@/assets/screenshot ng bg.jpg') no-repeat center center;
  background-size: cover;
  position: relative;
  overflow: hidden;
  touch-action: none; /* Disable pinch zoom */
  -webkit-user-scalable: no;
  -ms-user-scalable: no;
  user-scalable: no;
}

.content-wrapper {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 100%;
  max-width: 1500px;
  margin: 0 auto;
  position: relative;
  z-index: 1;
  padding-right: 11rem;
}

.right-section {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: 400px;
}

.forgot-password-form {
  background: transparent;
  padding: 2rem;
  border-radius: 20px;
  box-shadow: none;
  width: 100%;
  max-width: 350px;
  position: relative;
}

.header-group {
  text-align: left;
  margin-bottom: 1.5rem;
  width: 100%;
}

/* Ensure header text retains its design */
.forgot-password-form h2 {
  color: #1e3a8a; /* Blue color preserved */
  font-size: 2rem; /* Font size preserved */
  font-weight: 800; /* Bold weight preserved */
  margin-bottom: 0.2rem;
  line-height: 1.2;
}

.header-group p.subtitle {
  color: black; /* Text color preserved */
  font-size: 0.9rem; /* Font size preserved */
  font-weight: 500; /* Weight preserved */
  margin: 0;
  display: block;
  line-height: 1.2;
  width: 85%;
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
  background: rgba(255, 255, 255, 0.8);
}

.form-group input::placeholder {
  color: #aaa;
  font-size: 0.9rem;
}

/* Ensure button retains its gradient and styling */
.send-email-button {
  width: 100%;
  padding: 0.8rem;
  background: linear-gradient(135deg, #1e3a8a, #0d1a47); /* Gradient preserved */
  color: white; /* Text color preserved */
  border: none;
  border-radius: 8px;
  font-size: 1rem; /* Font size preserved */
  font-weight: 500; /* Weight preserved */
  cursor: pointer;
  transition: background 0.3s;
}

.send-email-button:hover {
  background: linear-gradient(135deg, #0d1a47, #09102b); /* Hover gradient preserved */
}

.back-link-container {
  display: flex;
  justify-content: center;
  margin-top: 1.5rem;
}

.back-to-login {
  color: #1e3a8a;
  text-decoration: none;
  font-size: 0.9rem;
  display: flex;
  align-items: center;
}

.back-arrow {
  margin-right: 0.5rem;
}

/* Responsive Design */
@media (max-width: 768px) {
  .content-wrapper {
    flex-direction: column;
    padding: 1rem;
    justify-content: center;
  }

  .right-section {
    width: 100%;
    max-width: 100%;
  }

  .forgot-password-form {
    max-width: 90%;
  }
}
</style>