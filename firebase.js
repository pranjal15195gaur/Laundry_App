import {initializeApp} from 'firebase/app';


const firebaseConfig = {
    apiKey: "AIzaSyD0Kq5KhGyBPvhkwuMxZ5Fam7KdMHHwwk0",
    authDomain: "laundry-app-ea776.firebaseapp.com",
    projectId: "laundry-app-ea776",
    storageBucket: "laundry-app-ea776.appspot.com",
    messagingSenderId: "367769972274",
    appId: "1:367769972274:web:a5effad9cb3be96d8d962b",
    measurementId: "G-HPLSVYVMV5",
    databaseURL: "https://laundry-app-ea776-default-rtdb.firebaseio.com/",
  };

  export const app = initializeApp(firebaseConfig)