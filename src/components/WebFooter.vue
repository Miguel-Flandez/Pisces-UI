<script setup>

</script>

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
          <i class="fa-regular fa-phone"></i>
          <p>+632 8551-6561</p>
        </div>
          <div class="info">
            <i class="fa-regular fa-envelope"></i>
            <p>ensd@peza.gov.ph</p>
          </div>
          <div class="info">
            <i class="fa-regular fa-location-dot"></i>
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
    padding: 5.93vh 1.67vw 4% 8.33vw; /* (64px, 32px, 4%, 160px) */
    gap: 3.91vw; /* 75px */
    background-color: #111827;
    display: flex;
  }

  .footer-left p {
    width: 17.24vw; /* 331px */
    height: 1.48vh; /* 16px */
    font-weight: 400;
    font-size: 0.83vw; /* 16px */
    line-height: 1.47vh; /* 15.92px */
    color: #f8fafc;
    font-family: 'Helvetica', serif;
  }

  .footer-left h3 {
    width: 17.24vw; /* 331px */
    height: 1.85vh; /* 20px */
    font-family: 'Helvetica', serif;
    font-weight: 500;
    font-size: 1.04vw; /* 20px */
    line-height: 1.83vh; /* 19.76px */
    color: #f8fafc;
  }

  .footer-middle {
    color: #f8fafc;
  }

  .footer-middle h3 {
    width: 11.3vw; /* 217px */
    height: 2.04vh; /* 22px */
    font-weight: 600;
    font-size: 0.83vw; /* 16px */
    line-height: 2.07vh; /* 22.4px */
    font-family: 'Inter', serif;
    margin-bottom: 2.96vh; /* 32px */
  }

  .info-group {
    display: flex;
    flex-direction: column;
    gap: 0.93vh; /* 10px */
    padding-right: 0.99vw; /* 19px */
    width: 31.41vw; /* 603px */
    height: 12.59vh; /* 136px */
    font-family: 'Helvetica', serif;
  }

  .info {
    display: flex;
    align-items: center;
    gap: 0.93vh; /* 10px */
  }

  .footer-right {
    color: #f8fafc;
  }

  .footer-right h3 {
    width: 22.86vw; /* 439px */
    height: 4.07vh; /* 44px */
    font-family: 'Inter', serif;
    font-weight: 600;
    font-size: 0.83vw; /* 16px */
    line-height: 2.07vh; /* 22.4px */
    margin-bottom: 2.96vh; /* 32px */
  }

  .legal-pages {
    display: flex;
    flex-direction: column;
    gap: 0.93vh; /* 10px */
    width: 31.41vw; /* 603px */
    height: 12.59vh; /* 136px */
    padding-right: 0.99vw; /* 19px */
  }
</style>