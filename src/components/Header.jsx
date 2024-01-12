import React, { useEffect, useState } from "react";
import logo from "./../utils/logo.png";
import { auth } from "../utils/firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { addUsers, removeUsers } from "../utils/userSlice";
import { useDispatch } from "react-redux";
import { toggleGptSearchView } from "../utils/gptSlice";
import { SUPPORTED_LANGUAGES } from "../utils/constants";
import { changeLanguage } from "../utils/configSlice";

const Header = () => {
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  const dispatch = useDispatch();
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);
  const [popover, setPopover] = useState(false);

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

  const handleGptSearchClick = () => {
    // Toggle GPT Search
    dispatch(toggleGptSearchView());
  };

  const handleLanguageChange = (e) => {
    // console.log(e.target.value);
    dispatch(changeLanguage(e.target.value));
  };

  const popOverChange = () => {
    setPopover(!popover);
  };

  return (
    <div className="w-full bg-gradient-to-b absolute top-0 from-black z-10">
      <div className=" max-container flex items-center justify-between">
        <img src={logo} alt="" className="w-48 h-18" />

        <div className="flex gap-4">
          {showGptSearch && (
            <select
              className="p-2 bg-white text-black"
              onChange={handleLanguageChange}
            >
              {SUPPORTED_LANGUAGES.map((lang) => (
                <option key={lang.identifier} value={lang.identifier}>
                  {lang.name}
                </option>
              ))}
            </select>
          )}
          <button
            onClick={handleGptSearchClick}
            className="px-3 py-2 bg-red-600 rounded text-white"
          >
            {showGptSearch ? "Homepage" : "GPT Search"}
          </button>
          <div className="relative">
            {user && (
              <img
                src="https://i.pinimg.com/564x/5b/50/e7/5b50e75d07c726d36f397f6359098f58.jpg"
                // src={user.photoURL}
                alt="usericon"
                onClick={popOverChange}
                className="w-12 h-12 rounded-full object-cover p-[1px] shadow-xl bg-white"
              />
            )}
            {popover ? (
              <button
                onClick={handleSignOut}
                className="absolute font-bold text-white w-40 h-20 bg-red-600 rounded-lg top-0 -left-44"
              >
                Sign Out
              </button>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
