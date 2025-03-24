<template>
  <footer class="footer">
    <div class="footer-left">
      <img src="@/assets/Peza Logo.svg" alt="peza logo" class="footer-logo">
      <p>Republic of the Philippines</p>
      <h3>Philippine Economic Zone Authority</h3>
    </div>

    <div class="footer-middle">
      <h3>Environmental Safety Group</h3>
      <div class="info-group">
        <div class="info">
          <img src="@/assets/phone.svg" alt="" id="phone">
          <p>+632 8551-6561</p>
        </div>
          <div class="info">
            <img src="@/assets/Mail.svg" alt="" id="mail">
            <p>ensd@peza.gov.ph</p>
          </div>
          <div class="info">
            <img src="@/assets/Location.svg" alt="" id="Location Pin">
            <p>8th Floor, Double Dragon Center West Building, DD Meridian Park, Macapagal Avenue, Pasay City 1302</p>
          </div>
        </div>
    </div>

    <div class="footer-right">
      <h3>COPYRIGHT 2025 © Philippine Economic Zone Authority
Online Environment Corner</h3>
        <div class="legal-pages">
          <p>Site Map</p>
          <p>Terms of Use</p>
          <p>Privacy Policy</p>
        </div>
    </div>

  </footer>
</template>

<style scoped>
  .footer {
    width: 100%;
    padding: 3% 1.67% 4% 8.33%; 
    gap: 5%; 
    background-color: #111827;
    display: flex;

  }

  .footer-left p {
    width: 17.24vw;
    height: 1.48vh; 
    font-weight: 400;
    font-size: 0.83vw; 
    line-height: 1.47vh;
    color: #f8fafc;
    font-family: 'Helvetica', serif;
  }

  .footer-left h3 {
    width: 17.24vw; 
    height: 1.85vh; 
    font-family: 'Helvetica', serif;
    font-weight: 500;
    font-size: 1.04vw; 
    line-height: 1.83vh; 
    color: #f8fafc;
  }

  .footer-middle {
    color: #f8fafc;
  }

  .footer-middle h3 {
    width: 11.3vw; 
    height: 2.04vh; 
    font-weight: 600;
    font-size: 0.83vw; 
    line-height: 2.07vh; 
    font-family: 'Inter', serif;
    margin-bottom: 2.96vh; 
  }

  .info-group {
    display: flex;
    flex-direction: column;
    gap: 0.93vh; 
    padding-right: 0.99vw; 
    width: 31.41vw; 
    height: 12.59vh; 
    font-family: 'Helvetica', serif;
  }

  .info {
    display: flex;
    align-items: center;
    gap: 0.93vh; 
  }
  .info img{
    width: 26px;
  }

  .footer-right {
    color: #f8fafc;
  }

  .footer-right h3 {
    width: 22.86vw; 
    height: 4.07vh; 
    font-family: 'Inter', serif;
    font-weight: 600;
    font-size: 0.83vw; 
    line-height: 2.07vh; 
    margin-bottom: 2.96vh; 
  }

  .legal-pages {
    display: flex;
    flex-direction: column;
    gap: 0.93vh; 
    width: 31.41vw; 
    height: 12.59vh; 
    padding-right: 0.99vw; 
  }
</style>