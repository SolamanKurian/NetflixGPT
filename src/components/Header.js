import React from "react";
import { getAuth, signOut, onAuthStateChanged} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { addUser, removeUser } from "../utils/usserSlice";
import { useDispatch } from "react-redux";
import { logo } from "../utils/constant";

const Header = () => {
  let dispatch = useDispatch();
  let navigate = useNavigate();

  useEffect(() => {
    let unsubscribes= onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        navigate("/browes");
      } else {
        // User is signed out
        dispatch(removeUser());
        navigate("/")
      }
    });
    //it will unsubsribe when component unmounts
    return ()=>unsubscribes();
  }, []);

  let user = useSelector((store) => {
    return store.user;
  });

 
  let handleSignOut = () => {
    const auth = getAuth();
    signOut(auth)
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
        navigate("/error");
      });
  };
  return (
    <div className="absolute px-8 py-2 bg-gradient-to-b from-black z-10 w-full flex justify-between">
      <img
        className="w-44"
        src={logo}
        alt="logo"
      ></img>
      {user && (
        <div className="flex">
          <img
            className="w-10 h-10 mt-4 "
            alt="user icon"
            src={user.photoURL}
          ></img>
          <button
            className="bg-red-600 ml-5 text-white font-bold rounded-xl"
            onClick={handleSignOut}
          >
            SignOut
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
