
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDCka6qTauwzaqp2l-HY5WIANUgHSFFQLg",
    authDomain: "proyecto-final-react-cd723.firebaseapp.com",
    projectId: "proyecto-final-react-cd723",
    storageBucket: "proyecto-final-react-cd723.appspot.com",
    messagingSenderId: "170400368805",
    appId: "1:170400368805:web:0f6245aec065954777a54c",
    measurementId: "G-W4PHBPFE74"
};


const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app);