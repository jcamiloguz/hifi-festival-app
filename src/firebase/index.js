import { getAnalytics } from "firebase/analytics"
import { initializeApp } from "firebase/app"
const firebaseConfig = {
  apiKey: "AIzaSyB5KAbp3JTLUEsj5d8fRGc-qMMOHffhshM",
  authDomain: "hifi-festival.firebaseapp.com",
  projectId: "hifi-festival",
  storageBucket: "hifi-festival.appspot.com",
  messagingSenderId: "889917000980",
  appId: "1:889917000980:web:366a782e3d92d052a60601",
  measurementId: "G-XSMZC79M98",
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
getAnalytics(app)
