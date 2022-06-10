import { initializeApp } from "firebase/app";
import {getAuth,GoogleAuthProvider,signInWithPopup} from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyDK4RSeYUOuSa1tY03a3sxbwSyV-WeYUx4",
    authDomain: "auth-14c08.firebaseapp.com",
    projectId: "auth-14c08",
    storageBucket: "auth-14c08.appspot.com",
    messagingSenderId: "228347766441",
    appId: "1:228347766441:web:c8f67ee7776e5528b46bb8"
  };

const app=initializeApp(firebaseConfig);

export const auth=getAuth(app);
const provider=new GoogleAuthProvider();

export const signInWithGoogle = () =>{

  signInWithPopup(auth,provider).then((result)=>{
    console.log(result);
  }).catch((error) => {
    console.log(error);
  });

};

