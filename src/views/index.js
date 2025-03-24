// 3. at the top, import your page, use the other imports as reference
// 4. at the the bottom, export your page
// 5. go to the router/index.js file


// User Imports
import Home from './Website Pages/Home.vue';
import Chemical_Import_Tool from './Website Pages/Chemical_Import_Tool.vue';
import Establishment_Registration from './Website Pages/Establishment_Registration.vue';
import Feedback from './Website Pages/Feedback.vue';
import BulletinBoard from './Website Pages/BulletinBoard.vue';
import Downloads from './Website Pages/Downloads.vue';
import LandingPage from './User Pages/LandingPage.vue';
import Login from './Login/Login.vue';
import ForgotPassword from './Login/ForgotPassword.vue';
import ResetPassword from './Login/ResetPassword.vue';
import SetupPassword from './Login/SetupPassword.vue';

// Locator Imports
import LocatorLandingPage from './Locator Pages/LocatorLandingPage.vue';
// import here

// Project Coverage Imports
import ProjectCoverage from './Project Coverage/ProjectCoverage.vue';


// export here
export { 
  // User Exports
  Home, 
  Chemical_Import_Tool, 
  Establishment_Registration, 
  Feedback, 
  BulletinBoard, 
  Downloads,
  Login,
  ForgotPassword,
  ResetPassword,
  SetupPassword,
  LandingPage,

  // Locator Exports
  LocatorLandingPage,

  // Project Coverage Exports
  ProjectCoverage
};
