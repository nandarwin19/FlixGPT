import React, { useEffect, useState } from "react";
import logo from "./../utils/logo.png";
import { auth } from "../utils/firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { addUsers, removeUsers } from "../utils/userSlice";
import { useDispatch } from "react-redux";
import { toggleGptSearchView } from "../utils/gptSlice";
import { SUPPORTED_LANGUAGES } from "../utils/constants";
import { changeLanguage } from "../utils/configSlice";
import { togglePopover } from "../utils/signoutSlice";
import { IoSearch } from "react-icons/io5";

const Header = () => {
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  const dispatch = useDispatch();
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);
  const popoverBox = useSelector((store) => store.signout.popoverBox);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        navigate("/error");
      });
    dispatch(togglePopover(false));
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
    dispatch(togglePopover());
  };

  return (
    <div className="w-full bg-gradient-to-b absolute top-0 from-black z-50 p-4 lg:p-0">
      <div className=" max-container flex items-center justify-between">
        <Link to="/browse">
          <img src={logo} alt="" className="w-18 h-8 lg:w-48 lg:h-18" />
        </Link>

        <div className="flex gap-4">
          {showGptSearch && (
            <select
              className="p-1 text-[11px] md:p-2 md:text-[14px] bg-white text-black"
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
            className="w-18 p-1 lg:px-3 lg:py-2 bg-red-600 rounded text-white"
          >
            <p className="text-[12px] lg:text-[16px]">
              {showGptSearch ? (
                "Homepage"
              ) : (
                // <div className="flex items-center justify-center gap-2 bg-[#fff]">
                <div className="flex items-center justify-center gap-2">
                  <IoSearch /> <p>search</p>
                </div>
              )}
            </p>
          </button>
          <div className="relative">
            {user && (
              <img
                src="https://i.pinimg.com/564x/5b/50/e7/5b50e75d07c726d36f397f6359098f58.jpg"
                // src={user.photoURL}
                alt="usericon"
                onClick={popOverChange}
                className="cursor-pointer w-8 h-8 lg:w-12 lg:h-12 rounded-full object-cover p-[1px] shadow-xl bg-white"
              />
            )}
            {popoverBox && (
              <button
                onClick={handleSignOut}
                className="absolute font-bold text-black w-44 shadow-2xl h-24 mr-2 bg-white rounded-xl top-0 -left-44"
              >
                Sign Out
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
