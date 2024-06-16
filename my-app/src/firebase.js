import {initializeApp} from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyAh4RARuxHzMpH53xWUs7JcTreTBYOSRxI",
    authDomain: "salon-booking-aa34f.firebaseapp.com",
    projectId: "salon-booking-aa34f",
    storageBucket: "salon-booking-aa34f.appspot.com",
    messagingSenderId: "44156921441",
    appId: "1:44156921441:web:ae0b2bea22da907ae3ac20",
    measurementId: "G-LND3K29XRP",
    databaseURL: "https://salon-booking-aa34f-default-rtdb.firebaseio.com/",
  };
  
  // Initialize Firebase
  export const app = initializeApp(firebaseConfig);
//   const analytics = getAnalytics(app);