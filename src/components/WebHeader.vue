<template>
  <header class="header">
    <router-link to="/"><img src="@/assets/Pisces + Logo.svg" alt="" class="header-logo"></router-link>
    <router-link to="/chemical importation tool"><button class="header-links">Chemical Importation Tool</button></router-link>
    <router-link to="/establishment registration"><button class="header-links">Establishment Registration</button></router-link>
    <router-link to="/feedback"><button class="header-links">Feedback</button></router-link>
    <button class="header-links">Bulletin Board</button>
    <button class="header-links">Downloads</button>
    <router-link to="/landing-page"><button class="login">Login</button></router-link>
  </header>
</template>

<style scoped>
  .header {
    background-color: #ffffff;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 9.26vh; /* 100px */
    padding: 2.96vh 2.08vw; /* 32px 40px */
    gap: 2.4vw; /* 46px */
    color: #9ca3af;
    font-family: 'Helvetica';
  }

  .header-logo {
    width: 15.16vw; /* 291px */
    height: 6.57vh; /* 71px */
  }

  .header-links {
    border: none;
    background-color: transparent;
    color: #9ca3af;

    font-family: 'Helvetica', serif;
    font-weight: 400;
    font-size: 1.04vw; /* 20px */
    line-height: 1.63vh; /* 17.6px */
    cursor: pointer;
  }
  .header-links:hover {
    color: #0044c7;
  }

  .login {
    font-family: 'Montserrat', serif;
    font-weight: 500;
    font-size: 0.83vw; /* 16px */
    line-height: 1.3vh; /* 14.08px */
    padding: 1.57vh 1.4vw; /* 17px 27px */
    gap: 0.52vw; /* 10px */
    background-color: #0e3687;
    color: #ffffff;
    border-radius: 0.21vw; /* 4px */
    border: none;
  }
  .login:hover {
    background-color: #0044c7;
  }

</style>