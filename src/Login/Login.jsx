import React, { useContext, useEffect, useState } from "react";
import Footer from "../Home/Footer/Footer";
import Navigationbar from "../Home/NavigationBar/Navigationbar";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import firebaseConfig from "../firebase.config";
import {
  getAuth,
  signOut,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";
import { UserContext } from "../App";
import { Navigate, useNavigate } from "react-router-dom";

const app = initializeApp(firebaseConfig);

const Login = () => {


  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const uEmail = loggedInUser.email ; 
    let Navigate = useNavigate()
  
  const handleGoogleLogin = () => {
    const provider = new GoogleAuthProvider();
    const auth = getAuth();
    signInWithPopup(auth, provider)
      .then((result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result);
        // const token = credential.accessToken;
        const userdata = result.user;
        Navigate('/');
        setLoggedInUser(userdata);
        
      })
      .catch((error) => {
        const errorMessage = error.message;
        alert(errorMessage);
      });
  };

  const handleLogOut = () => {
    const auth = getAuth();
    signOut(auth)
      .then(() => {
        setLoggedInUser("")
        console.log("Sign-out successful.");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <Navigationbar />
      <div className="mt-5 mb-5 loginForm text-center">
       { uEmail ? <button onClick={handleLogOut} className="btn btn-primary">logout</button> 
       :     
      <button onClick={handleGoogleLogin} className="btn btn-primary">login with google </button>}
      </div>
      <Footer />
    </div>
  );
};

export default Login;
