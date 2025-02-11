
import { signOut,  onAuthStateChanged } from "firebase/auth";
import { React, useEffect } from "react";
import {auth} from "../Utils/firebase";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { addUser, removeUser } from "../Utils/userSlice";
import { useDispatch } from "react-redux";
import {LOGO} from "../Utils/constants";



const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate(); 


  const user = useSelector((store) => store.user);
  const handleSignOut = () => {

    signOut(auth)
      .then(() => {
        // Sign-out successful.
       
      })
      .catch((error) => {
        // An error happened.
        navigate("/error");
      });
  };

  
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        navigate("/browse");
      } else {
        // User is signed out
        dispatch(removeUser());
        navigate("/");
      }
    });
    
    //unsubscribe when component unmounts
    return () => unsubscribe();
  }, []);


  return (
    <div className="absolute w-screen px-8  bg-gradient-to-b from-black z-10 flex justify-between">
      <img
        className="w-44"
        src={LOGO}
        alt="logo"
      />

     {user && (<div className="flex p-2">
        <img
          className="w-12 h-14 mt-10"
          alt="userIcon"
         // src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
          src={user.photoURL}
        />
        <button onClick={handleSignOut} className="font-bold text-white">
          {" "}
          (sign out){" "}
        </button>
      </div>)}
    </div>
  );
};

export default Header;
