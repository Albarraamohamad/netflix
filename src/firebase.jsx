import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { addDoc, collection, getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBfNMuREzPmXWU5YuRKBO9tyZgTOSj960Q",
  authDomain: "netflix-84c64.firebaseapp.com",
  projectId: "netflix-84c64",
  storageBucket: "netflix-84c64.firebasestorage.app",
  messagingSenderId: "147113268503",
  appId: "1:147113268503:web:ed442907699cd381085352",
  measurementId: "G-T9Q719TCN3",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const db = getFirestore(app);

const signup = async (name, email, password) => {
  try {
    const res = await createUserWithEmailAndPassword(auth, email, password);
    const user = res.user;
    await addDoc(collection(db, "users"), {
      uid: user.uid,
      name,
      authProvider: "local",
      email,
    });
  } catch (error) {
    console.error("Signup Error:", error.message);
    alert(error.message);
  }
};

// ✅ Fix: Pass email and password as parameters
const login = async (email, password) => {
  try {
    await signInWithEmailAndPassword(auth, email, password);
  } catch (error) {
    console.error("Login Error:", error.message);
    alert(error.message);
  }
};

const logout = async () => {
  try {
    await signOut(auth);
  } catch (error) {
    console.error("Logout Error:", error.message);
    alert(error.message);
  }
};

export { auth, db, login, signup, logout };
