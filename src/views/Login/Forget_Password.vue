<template>
  <div class="forgot-password-container">
    <div class="circle-helper"></div>
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

      <!-- Right Side: Forgot Password Form -->
      <div class="right-section">
        <div class="forgot-password-form">
          <div class="header-group">
            <h2>Forgot Password?</h2>
            <p class="subtitle">Enter your email and we'll send you a link to reset your password.</p>
          </div>
          <form @submit.prevent="handleResetPassword">
            <div class="form-group">
              <label for="email">Email <span class="required">*</span></label>
              <input 
                type="email" 
                id="email" 
                v-model="email" 
                placeholder="Enter your email" 
                required 
              />
            </div>
            <button type="submit" class="reset-button">Send Email</button>
          </form>
          <div class="back-to-login">
            <a href="#" @click.prevent="$router.push('/login')" class="login-link">
              <img src="@/assets/leftarrow.png" alt="Left Arrow" class="left-arrow-icon" /> Back to Login
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ForgotPasswordPage',
  data() {
    return {
      email: ''
    };
  },
  methods: {
    handleResetPassword() {
      console.log('Resetting password for:', this.email);
    },
    disableZoom() {
      const wheelHandler = (e) => {
        if (e.ctrlKey) {
          e.preventDefault();
        }
      };
      document.addEventListener('wheel', wheelHandler, { passive: false });

      const touchMoveHandler = (e) => {
        if (e.touches.length > 1) {
          e.preventDefault();
        }
      };
      document.addEventListener('touchmove', touchMoveHandler, { passive: false });

      this.wheelHandler = wheelHandler;
      this.touchMoveHandler = touchMoveHandler;
    }
  },
  mounted() {
    this.disableZoom();
  },
  beforeUnmount() {
    document.removeEventListener('wheel', this.wheelHandler);
    document.removeEventListener('touchmove', this.touchMoveHandler);
  }
};
</script>

<style scoped>
/* Set a default font family for consistency */
.forgot-password-container * {
  font-family: 'Roboto', 'Arial', sans-serif;
}

.forgot-password-container {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background: linear-gradient(135deg, rgb(187, 163, 91) 0%, #2a1a5e 50%, #880e4f 100%);
  position: relative;
  overflow: hidden;
}

/* Background circles */
.forgot-password-container::before {
  content: '';
  position: absolute;
  top: -20%;
  left: -50%;
  width: 105%;
  height: 160%;
  background: rgba(211, 209, 209, 0.2);
  border-radius: 50%;
  z-index: 0;
}

.forgot-password-container::after {
  content: '';
  position: absolute;
  bottom: -30%;
  right: -8%;
  width: 30%;
  height: 63%;
  background: rgba(128, 128, 128, 0.3);
  border-radius: 50%;
  z-index: 0;
}

.content-wrapper {
  display: flex;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  position: relative;
  z-index: 1;
}

/* Left section styles remain the same */
.left-section {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-start;
  padding: 0;
  color: #fff;
  position: relative;
  min-height: 100vh;
  width: 10%;
  left: 5rem;
}

.bottom-content {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-left: -15rem;
}

.logo-section {
  text-align: left;
  margin-bottom: 1rem;
  margin-left: -5rem;
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

p {
  color: #fff;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 2rem;
  margin: 0.5rem 0;
  text-align: left;
  font-weight: 100;
  opacity: 0.9;
  margin-left: 7rem;
}

.illustrations {
  width: 130%;
  margin-bottom: 0.2rem;
  position: relative;
}

.illustration-img {
  width: 100%;
  height: auto;
  object-fit: contain;
  opacity: 0.5;
}

/* Right section */
.right-section {
  flex: 1;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 0;
  width: 100%;
  margin-left: 20rem;
  margin-right: -5rem;
  margin-top: 5rem;
}

.forgot-password-form {
  background: white;
  padding: 3rem;
  border-radius: 15px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 500px;
  position: relative;
}

.header-group {
  text-align: left;
  margin-bottom: 1rem;
}

.forgot-password-form h2 {
  color: #1e3a8a;
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 0.2rem;
  line-height: 1.2;
}

.header-group p.subtitle {
  color: #666;
  font-size: 0.9rem;
  font-weight: 400;
  margin: 0;
  line-height: 1.4;
}

.form-group {
  margin-bottom: 1rem;
}

.form-group label {
  display: block;
  color: #333;
  font-size: 0.95rem;
  font-weight: 600;
  margin-bottom: 0.3rem;
}

.form-group .required {
  color: #ff0000;
}

.form-group input {
  width: 100%;
  padding: 0.6rem 0.8rem;
  border: 1px solid #e0e0e0;
  border-radius: 5px;
  font-size: 0.9rem;
  color: #333;
}

.form-group input::placeholder {
  color: #aaa;
  font-size: 0.9rem;
}

.reset-button {
  width: 100%;
  padding: 0.8rem;
  background: #1e3a8a;
  color: white;
  border: none;
  border-radius: 5px;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  transition: background 0.3s;
}

.reset-button:hover {
  background: #0d1a47;
}

.back-to-login {
  text-align: center;
  margin-top: 0.5rem;
}

.login-link {
  color: #1e3a8a;
  font-size: 0.9rem;
  text-decoration: none;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.4rem;
}

.left-arrow-icon {
  width: 12px; /* Adjust size as needed */
  height: auto;
}

.login-link:hover {
  text-decoration: underline;
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

  .forgot-password-form {
    max-width: 100%;
  }

  .forgot-password-container::before {
    top: -10%;
    left: -10%;
    width: 80%;
    height: 80%;
  }

  .forgot-password-container::after {
    bottom: -10%;
    right: -10%;
    width: 70%;
    height: 70%;
  }
}

/* Additional elements */
.version-text {
  font-size: 12px;
  color: #1e3a8a;
  text-align: center;
  margin-top: 1rem;
  font-weight: bold;
}

.manual-link {
  text-align: center;
  margin-top: 0.5rem;
}

.manual-text {
  font-size: 10px;
  color: #333;
  margin: 0;
  text-align: center;
}

.manual-link-here {
  text-decoration: underline;
  color: rgb(68, 158, 255);
}

.circle-helper::before {
  content: '';
  position: absolute;
  top: 23%;
  right: 10%;
  width: 7%;
  height: 13%;
  background: rgba(182, 182, 182, 0.3);
  border-radius: 50%;
  z-index: 0;
}
</style>
