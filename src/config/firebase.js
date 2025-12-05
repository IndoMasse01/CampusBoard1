import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCp4vDld10gdRUb3zQTbvX4rPvc39I00mw",
  authDomain: "campusboard1-dfa1f.firebaseapp.com",
  projectId: "campusboard1-dfa1f",
  storageBucket: "campusboard1-dfa1f.firebasestorage.app",
  messagingSenderId: "101871980890",
  appId: "1:101871980890:web:968a67d84bf476d077e363",
  measurementId: "G-QW7DPKWLSL"
};

let app, auth, db;

// Inisialisasi aman (mencegah error jika config kosong saat development)
try {
  if (firebaseConfig.apiKey) {
    app = initializeApp(firebaseConfig);
    auth = getAuth(app);
    db = getFirestore(app);
  } else {
    console.warn("Firebase Config belum diisi. Aplikasi berjalan dalam Mode Demo Terbatas.");
  }
} catch (e) {
  console.error("Error initializing Firebase:", e);
}

export { auth, db };