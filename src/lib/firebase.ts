import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDqjLhOWnoF5vEkWgc9OHgLGg4hb9ug7OM",
  authDomain: "shivay-travels.firebaseapp.com",
  projectId: "shivay-travels",
  storageBucket: "shivay-travels.firebasestorage.app",
  messagingSenderId: "102505789223",
  appId: "1:102505789223:web:c976ad14f76903054d9b02",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);