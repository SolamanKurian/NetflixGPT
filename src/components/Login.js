import React, { useState, useRef } from "react";
import Header from "./Header";
import { checkValidData } from "../utils/validate"
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/usserSlice";
import { profilephoto } from "../utils/constant";

const Login = () => {
  let [isSignInForm, setIsSignForm] = useState(true);
  let [errorMessage, setErrorMessage]= useState(null)
  let email=useRef(null);
  let password=useRef(null);
  let name=useRef(null);
  let dispatch=useDispatch();
  let toggleSignInForm = () => {
    setIsSignForm(!isSignInForm);
  };
  let handleButtonClick=()=>{
    // validate the form data
    let Message = checkValidData(email.current.value,password.current.value);
    setErrorMessage(Message);
    if (Message) return;
  
    if(!isSignInForm){
      //sign up logic
        //sign in or sign up here
    createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
    .then((userCredential) => {
      // Signed up 
      const user = userCredential.user;
      updateProfile(user, {
        displayName: name.current.value, photoURL: profilephoto
      }).then(() => {
        // Profile updated!
        // update store
        const {uid, email, displayName, photoURL} = auth.currentUser;
        dispatch(addUser({uid:uid, email:email, displayName:displayName, photoURL:photoURL}));
      }).catch((error) => {
        // An error occurred
        // ...
      });
  
      
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      setErrorMessage(errorCode+"-"+errorMessage)
      // ..
    });
    }else{
      //sign in logic
      signInWithEmailAndPassword(auth, email.current.value, password.current.value)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    setErrorMessage(errorCode+"-"+errorMessage)
  });
    }

  }
  return (
    <div>
      <Header />
      <div>
        <img
          className="absolute"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/826348c2-cdcb-42a0-bc11-a788478ba5a2/6d20b198-e7ab-4e9f-a1aa-666faa0298f9/IN-en-20240729-POP_SIGNUP_TWO_WEEKS-perspective_WEB_a67d8c9e-8121-4a74-98e4-8005eb2df227_medium.jpg"
          alt="bgimage"
        ></img>
      </div>
      <form onSubmit={(e)=>e.preventDefault()} className="p-12 bg-black absolute w-3/12 my-36 left-0 right-0 mx-auto bg-opacity-80 text-white">
        <h1 className="font-bold text-3xl py-4">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInForm && (
          <input
          ref={name}
            type="text"
            placeholder="Full Name"
            className=" p-4 my-2 w-full  bg-gray-700 rounded-lg"
          ></input>
        )}
        <input
        ref={email}
          type="text"
          placeholder="Email"
          className=" p-4 my-2 w-full bg-gray-700 rounded-lg"
        ></input>
        <input
        ref={password}
          type="password"
          placeholder="Password"
          className=" p-4 my-2 w-full  bg-gray-700 rounded-lg"
        ></input>
        <p className="text-red-500 font-bold text-2xl">{errorMessage}</p>
        <button type="submit" className="p-4 my-4 bg-red-600 w-full rounded-lg" onClick={handleButtonClick}>
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <p className="py-4 cursor-pointer" onClick={toggleSignInForm}>
          {isSignInForm
            ? "New to Netflix? Sign Up Now"
            : "Already Registered? Sign In Now"}
        </p>
      </form>
    </div>
  );
};

export default Login;
