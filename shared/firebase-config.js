
// shared/firebase-config.js -- Shri Raghvendra Sweets ADMIN
import { initializeApp, getApps, getApp }
  from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import {
  getFirestore, collection, doc,
  getDoc, getDocs, setDoc, addDoc,
  updateDoc, deleteDoc,
  query, where, orderBy,
  onSnapshot, increment, serverTimestamp
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";
import {
  getAuth, setPersistence, browserLocalPersistence,
  signInWithEmailAndPassword, signOut
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";

const FIREBASE_CONFIG = {
  apiKey:            "AIzaSyCaNchJ9j7Q_FGhAeAvU1HygKYhiwYFQ6I",
  authDomain:        "raghvendra-sweets.firebaseapp.com",
  projectId:         "raghvendra-sweets",
  storageBucket:     "raghvendra-sweets.firebasestorage.app",
  messagingSenderId: "825608590420",
  appId:             "1:825608590420:web:a8a5c06e068eb4f1b809c1"
};

const app = getApps().length ? getApp() : initializeApp(FIREBASE_CONFIG);
export const db   = getFirestore(app);
export const auth = getAuth(app);

setPersistence(auth, browserLocalPersistence)
  .catch(function(e) { console.warn("Persistence:", e); });

export {
  collection, doc,
  getDoc, getDocs,
  setDoc, addDoc,
  updateDoc, deleteDoc,
  query, where, orderBy,
  onSnapshot, increment, serverTimestamp
};
export { signInWithEmailAndPassword, signOut };
export const SHOP_ID = "raghvendra-sweets";





















