import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, sendPasswordResetEmail, updatePassword } from "firebase/auth";

const config = {
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: process.env.REACT_APP_AUTH_DOMAIN,
    databaseURL: process.env.REACT_APP_DATABASE_URL,
    projectId: process.env.REACT_APP_PROJECT_ID,
    storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_ID,
};

class Firebase {
    constructor() {
      initializeApp(config);

      this.auth = getAuth();
    }

    // *** Auth API ***
    doCreateUserWithEmailAndPassword = (email, password) =>
      createUserWithEmailAndPassword(this.auth, email, password);

    doSignInWithEmailAndPassword = (email, password) =>
      signInWithEmailAndPassword(this.auth, email, password);

    doSignOut = () => signOut(this.auth);

    doPasswordReset = email => sendPasswordResetEmail(this.auth, email);

    doPasswordUpdate = password =>
      updatePassword(this.auth.currentUser, password);
  }
  
export default Firebase;