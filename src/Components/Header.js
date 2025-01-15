import React from "react";
import { signOut } from "firebase/auth";
import {auth} from "../Utils/firebase";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  const handleSignOut = () => {

    signOut(auth)
      .then(() => {
        // Sign-out successful.
        navigate("/");
      })
      .catch((error) => {
        // An error happened.
        navigate("/error");
      });
  };

  return (
    <div className="absolute w-screen px-8  bg-gradient-to-b from-black z-10 flex justify-between">
      <img
        className="w-44"
        src="https://loodibee.com/wp-content/uploads/Netflix-logo.png"
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
