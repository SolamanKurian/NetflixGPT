import React from "react";
import { getAuth, signOut, onAuthStateChanged } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { addUser, removeUser } from "../utils/usserSlice";
import { useDispatch } from "react-redux";
import { logo } from "../utils/constant";
import { toggleGPTsearchView } from "../utils/gptSlice";
import { SUPPORTING_LANG } from "../utils/constant";
import { changeLanguage } from "../utils/configSlice";

const Header = () => {
  let dispatch = useDispatch();
  let navigate = useNavigate();
  let showGptSearch=useSelector((store)=>store.gpt.showGptSearch)
  useEffect(() => {
    let unsubscribes = onAuthStateChanged(auth, (user) => {
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
        navigate("/");
      }
    });
    //it will unsubsribe when component unmounts
    return () => unsubscribes();
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

  let handleGptSearchClick = () => {
    // toggle gpt search

    dispatch(toggleGPTsearchView());
  };
  let handleLanguageChange = (e) => {
    dispatch(changeLanguage(e.target.value));
  };

  return (
    <div className="absolute px-8 py-2 bg-gradient-to-b from-black z-10 w-full flex flex-col md:flex-row bg-black sm:bg-blue-800 md:bg-green-950">
      <img className="w-44 mx-auto md:mx-0" src={logo} alt="logo"></img>
      {user && (
        <div className="flex">
{showGptSearch && (<select className="bg-gray-500" onChange={handleLanguageChange}>
            {SUPPORTING_LANG.map((lang) => (
              <option key={lang.indentifier} value={lang.indentifier}>
                {lang.name}
              </option>
            ))}
          </select>
          
        )}
          

          <button
            className="p-4 bg-blue-700 mr-4 rounded-xl"
            onClick={handleGptSearchClick}
          >
            {showGptSearch?"Home Page":"GPT Search"}
          </button>
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
