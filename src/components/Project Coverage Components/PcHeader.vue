<template>
    <header class="header">
      <img src="@/assets/Pisces + Logo.svg" alt="" class="header-logo">
      <div id="right">
        <img src="@/assets/bell.svg" alt="bell" id="bell">
        <img src="@/assets/user.svg" alt="user" id="user">
        <p id="name">Juan Dela Cruz</p>
        <img src="@/assets/dropdown.svg" alt="dropdown" id="dropdown">
      </div>
      
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
    #right{
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 4px;
        color: #002161;
    }
    #name{
        font-weight: 400px;
        font-size: 20px;
    }
  
    .header-logo {
      width: 15.16vw; /* 291px */
      height: 6.57vh; /* 71px */
    }
  

  </style>