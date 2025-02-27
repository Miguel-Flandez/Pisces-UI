<script setup>
import { WebHeader, WebFooter } from '@/components';
</script>

<template>    
    <WebHeader/>
    <div class="download-container">
        <div class="download-page">
            <div class="breadcrumb">
                <span>Home</span> / <span class="current-page">Downloads</span>
            </div>

            <div class="header-box">
                <h2>Downloads</h2>
                <div class="search-container">
                    <input type="text" placeholder="Search" />
                    <button>Search</button>
                </div>
            </div>

            <div class="content-wrapper">
                <div class="sidebar">
                    <p>Air Quality Management</p>
                    <p>Chemicals Management</p>
                    <p>Environmental Compliance Monitoring</p>
                    <p>General Environment</p>
                    <p>Hazardous Waste Management</p>
                    <p>Industrial Hygiene</p>
                    <p>Occupational, Safety & Health</p>
                    <p>PISCES</p>
                    <p>Solid Waste Management</p>
                </div>

                <div class="main-content">
                    <div class="card">
                        <h2>Air Quality Management</h2>
                        <div class="content-box">
                            <div class="content-columns">
                                <div class="text-with-border">DENR Department Order No. 17</div>
                            </div>
                        </div>
                    </div>

                    <div class="card">
                        <h2>Chemicals Management</h2>
                        <div class="content-box">
                            <div class="content-columns">
                                <div class="text-with-border">PEZA MC #2021-053</div>
                            </div>
                        </div>
                        <div class="content-box">
                            <div class="content-columns">
                                <div class="text-with-border">PEZA MC #2021-064</div>
                            </div>
                        </div>
                        <div class="content-box">
                            <div class="content-columns">
                                <div class="text-with-border">Quicklist of Regulated Substances</div>
                            </div>
                        </div>
                        <div class="content-box">
                            <div class="content-columns">
                                <div class="text-with-border">Chemical Importation Evaluation Form</div>
                            </div>
                        </div>
                        <div class="content-box">
                            <div class="content-columns">
                                <div class="text-with-border">PEZA MC #2024-039</div>
                            </div>
                        </div>
                    </div>

                    <div class="card">
                        <h2>Environmental Compliance Monitoring</h2>
                        <div class="content-box">
                            <div class="content-columns">
                                <div class="text-with-border">PEZA MC 2022-012</div>
                            </div>
                        </div>
                        <div class="content-box">
                            <div class="content-columns">
                                <div class="text-with-border">Sample Solid Waste Management Plan</div>
                            </div>
                        </div>
                        <div class="content-box">
                            <div class="content-columns">
                                <div class="text-with-border">Sample Compliance Action Plan</div>
                            </div>
                        </div>
                        <div class="content-box">
                            <div class="content-columns">
                                <div class="text-with-border">PEZA MC 2022-019</div>
                            </div>
                        </div>
                        <div class="content-box">
                            <div class="content-columns">
                                <div class="text-with-border">PEZA MC 2022-058</div>
                            </div>
                        </div>
                        <div class="content-box">
                            <div class="content-columns">
                                <div class="text-with-border">PEZA MC 2023-009</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <WebFooter/>
    </div>
</template>





<style scoped>
/* General Styles */
.download-container {
  min-height: 100vh;
  background: linear-gradient(to bottom, #ebf8ff, #ffffff);
  display: flex;
  flex-direction: column;
}


/* Ensure content starts immediately under the navbar */
.main-container {
  margin-top: 0; 
}


/* Breadcrumb */
/* Breadcrumb Container */
.breadcrumb {
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 14px;
  color: #777;
  margin: 10px 0; 
  padding: 5px 50px;
  position: relative; 
  top: 30; 
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


.download-page {
  margin-top: 120px; /* Push below navbar */
  padding: 20px;
}

.header-box {
    width: 90%;
    margin: 30px auto;
    background: white; 
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
    border: 2px solid rgb(255, 255, 255); 
}

/* Header Title */
.header-box h2 {
    text-align: left; 
    color: rgb(0, 52, 156); 
    font-weight: bold;
    margin-bottom: 10px;
}

/* Search Box */
.search-container {
    display: flex;
    align-items: center;
    gap: 10px;
    background: #f1f3f5; 
    padding: 5px;
    border-radius: 5px;
}

.search-container input {
    width: 100%;
    padding: 12px;
    border: none;
    background: transparent;
    outline: none;
    font-size: 14px;
}

/* Search Button */
.search-container button {
    padding: 10px 15px;
    background: #002b80; 
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-weight: bold;
}

.search-container button:hover {
    background: #0044cc; 
}

/* Main Content Layout */
.content-wrapper {
    display: flex;
    width: 100%;
    margin: 0 auto 50px auto;
    background: transparent; 
}



 /* Sidebar */
.sidebar {
    width: 500px; 
    background: white; 
     margin-left: 90px;
    height: 1000px;
    padding: 37px 44px;
    color: #3f78b8;
    border-radius: 10px; 
    box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.1); 
}

.sidebar a {
    display: block;
    padding: 10px 15px;
    margin: 8px 0; 
    text-decoration: none;
    font-size: 14px;
    color: #3F78B8;
    background: transparent;
    border-radius: 5px;
    transition: all 0.3s ease-in-out;
}

.sidebar a:hover {
    background: #3F78B8;
    color: white;
    padding-left: 20px; 
}


/* Main Content Layout */
/* Main container */
.main-content {
    width: calc(100% - 300px); 
    max-width: 1500px; 
    margin-right: 73px; 
    margin-left: 20px;
    display: flex;
    flex-direction: column;
    gap: 20px; 
    padding: 20px;
    background: transparent; 
    border-radius: 5px;
    height: 1000px;
}

/* Each section (category card) */
.card {
    background: white; /* Changed to white from #f5f5f5 */
    border-radius: 10px;
    overflow: hidden;
    width: 100%;
    height: 100%;
    box-shadow: none; /* Remove box shadow to match the image */
    position: relative; /* For positioning the pseudo-element */
}

/* Section Header */
.card h2 {
    background: #0E3687; /* Dark blue header */
    color: white;
    padding: 16px;
    font-size: 18px;
    margin: 0;
    text-align: left;
    border-left: none; /* Ensure no border on the header */
}

/* Content area wrapper (all content boxes) */
.card > .content-wrapper {
    padding-left: 31px; /* Maintain padding to align with the line position (no change needed here) */
}

.card::before {
    content: '';
    position: absolute;
    left: 60px; /* Position of the line (unchanged from previous) */
    top: 56px; /* Start below the header (16px padding + 40px header height, adjust if needed) */
    bottom: 0; /* Extend to the bottom of the card */
    width: 1px; /* Thin line to match the image */
    background-color: #ddd; /* Light gray line to match the image */
    z-index: 1; /* Ensure it’s behind the content */
}

/* Content boxes for each item */
.content-box {
    background: white; /* Changed to white from #f5f5f5 */
    padding: 14px 16px;
    font-size: 14px;
    border-bottom: 1px solid #ddd; /* Light gray bottom border to match the image */
    width: 100%;
    min-height: 40px; /* Ensures uniform height */
    display: flex;
    align-items: center; /* Centers text vertically */
    text-decoration: none;
    color: #3F78B8; /* Dark blue text to match the image */
    font-weight: bold;
    transition: background 0.3s;
    position: relative; /* Ensure content stays above the line */
}

/* Container for columns inside content-box */
.content-columns {
    display: flex;
    flex-direction: row;
    width: 100%;
    align-items: center;
}

/* Text column (add padding to create space between line and text) */
.text-with-border {
    flex: 1;
    padding-left: 60px; /* Increased from 10px to 20px to move text further right */
}

/* Remove bottom border for last item in each card */
.content-box:last-child {
    border-bottom: none;
}

.main-content {
  min-height: calc(100vh - 200px); /* Ensures proper spacing */
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
}



/* Footer Styling */
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600&display=swap');

</style>
