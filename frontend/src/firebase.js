import { initializeApp } from "firebase/app";

import { getFirestore } from "firebase/firestore";

import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAuGHEwo2O8641fzQqroKjZROmr60hbZZE",
  authDomain: "food-app-ec12c.firebaseapp.com",
  databaseURL: "https://food-app-ec12c-default-rtdb.firebaseio.com",
  projectId: "food-app-ec12c",
  storageBucket: "food-app-ec12c.appspot.com",
  messagingSenderId: "364496872974",
  appId: "1:364496872974:web:42dd712c488c632c52be5f",
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);

export const storage = getStorage(app);
