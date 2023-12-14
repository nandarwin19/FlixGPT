import React, { useEffect } from "react";
import logo from "./../utils/logo.png";
import { auth } from "../utils/firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { addUsers, removeUsers } from "../utils/userSlice";
import { useDispatch } from "react-redux";

const Header = () => {
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  const dispatch = useDispatch();

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        navigate("/error");
      });
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUsers({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        navigate("/browse");
      } else {
        dispatch(removeUsers());
        navigate("/");
      }
    });

    // Unsubscribe when component unmounts 
    return () => unsubscribe();
  }, []);

  return (
    <div className="w-full bg-gradient-to-b absolute top-0 from-black">
      <div className=" max-container flex items-center justify-between">
        <img src={logo} alt="" className="w-48 h-18" />
        <div className="flex">
          {user && (
            <img
              // src="https://i.pinimg.com/564x/5b/50/e7/5b50e75d07c726d36f397f6359098f58.jpg"
              src={user.photoURL}
              alt="usericon"
              className="w-12 h-12"
            />
          )}
          <button onClick={handleSignOut} className="font-bold text-white">
            (Sign Out)
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
