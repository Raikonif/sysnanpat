/* eslint-disable import/no-extraneous-dependencies */
import firebase, { initializeApp } from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import { API_KEY } from "~/service/service.constants";
import { getAuth } from "@firebase/auth";
import { getFirestore } from "@firebase/firestore";

// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
  apiKey: "AIzaSyBmLVui1-Mx_l1g_5JZmn2WYFaUp-wS6AQ",
  authDomain: "pandyapk-31408.firebaseapp.com",
  databaseURL: "https://pandyapk-31408.firebaseio.com",
  projectId: "pandyapk-31408",
  storageBucket: "pandyapk-31408.appspot.com",
  messagingSenderId: "1055530752122",
  appId: "1:1055530752122:web:8a666aa61889ec926883c3",
  measurementId: "G-EC9CPQRDYK",
};

const FirebaseService = initializeApp(firebaseConfig);
const FirebaseAuth = getAuth(FirebaseService);
const Firestore = getFirestore(FirebaseService);

export { FirebaseService, FirebaseAuth, Firestore };
