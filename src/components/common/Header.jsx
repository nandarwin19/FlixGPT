import { useEffect, useState } from "react";
import { auth } from "../../utils/firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { addUsers, removeUsers } from "../../utils/userSlice";
import { useDispatch } from "react-redux";
import { SUPPORTED_LANGUAGES } from "../../utils/constants";
import { changeLanguage } from "../../utils/configSlice";
import { togglePopover } from "../../utils/signoutSlice";
import { IoSearch } from "react-icons/io5";
import { FaUser } from "react-icons/fa";
import { FiMenu } from "react-icons/fi";
import { IoClose } from "react-icons/io5";
import PropType from "prop-types";

const LanguageSelector = ({ handleLanguageChange }) => (
  <select
    className="p-1 text-[12px] hidden md:flex md:p-2 md:text-[14px] bg-white text-black"
    onChange={handleLanguageChange}
  >
    {SUPPORTED_LANGUAGES.map((lang) => (
      <option key={lang.identifier} value={lang.identifier}>
        {lang.name}
      </option>
    ))}
  </select>
);

LanguageSelector.propTypes = {
  handleLanguageChange: PropType.func.isRequired,
};

const UserMenu = ({ user, popoverBox, handleSignOut, popOverChange }) => (
  <div className="relative hidden md:flex">
    {user && (
      <img
        src="https://i.pinimg.com/564x/5b/50/e7/5b50e75d07c726d36f397f6359098f58.jpg"
        alt="usericon"
        onClick={popOverChange}
        className="cursor-pointer w-8 h-8 lg:w-12 lg:h-12 rounded-full object-cover p-[1px] shadow-xl bg-white"
      />
    )}
    {popoverBox && (
      <div className="gap-2 hidden md:flex flex-col absolute cursor-pointer font-bold text-white/90 py-8 px-8 w-52 shadow-2xl h-28 mr-2 bg-[#333030] rounded-md top-0 -left-52">
        <div className="w-full flex items-center justify-between">
          <FaUser />
          <p>nwin</p>
        </div>
        <div className="border-b-[1px] border-[#757575]"></div>

        <button onClick={handleSignOut}>Sign Out</button>
      </div>
    )}
  </div>
);

UserMenu.propTypes = {
  user: PropType.object,
  popoverBox: PropType.bool.isRequired,
  handleSignOut: PropType.func.isRequired,
  popOverChange: PropType.func.isRequired,
};

const MobileMenu = ({ toggleMenu, handleMenuToggle, user }) => (
  <div className="flex gap-4 items-center justify-center">
    {user && (
      <div
        className="cursor-pointer md:hidden text-white text-2xl"
        onClick={handleMenuToggle}
      >
        {toggleMenu ? <IoClose /> : <FiMenu />}
      </div>
    )}
  </div>
);

MobileMenu.propTypes = {
  toggleMenu: PropType.bool.isRequired,
  handleMenuToggle: PropType.func.isRequired,
  user: PropType.object,
};

const Header = () => {
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  const dispatch = useDispatch();
  const location = useLocation();
  const popoverBox = useSelector((store) => store.signout.popoverBox);
  const [headerBackground, setHeaderBackground] = useState(false);
  const [toggleMenu, setToggleMenu] = useState(false);

  const changeBackground = () => {
    if (window.scrollY >= 80) {
      setHeaderBackground(true);
    } else {
      setHeaderBackground(false);
    }
  };

  window.addEventListener("scroll", changeBackground);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        navigate("/error");
        console.log(error);
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


  const handleLanguageChange = (e) => {
    // console.log(e.target.value);
    dispatch(changeLanguage(e.target.value));
  };

  const popOverChange = () => {
    dispatch(togglePopover());
  };
  const handleMenuToggle = () => {
    setToggleMenu(!toggleMenu);
  };

  return (
    <div
      className={`${
        headerBackground ? "header-active" : "bg-none"
      } w-full fixed top-0 z-50 p-4 lg:p-0`}
    >
      <div className="mx-auto max-w-[1440px] sm:py-6 py-3 flex items-center justify-between">
        <div className="flex gap-14 items-center justify-center">
          <Link to="/browse">
            <p className="text-[24px] logo md:text-3xl text-red-700 font-bold">
              FlixGPT
            </p>
          </Link>
          <ul className="hidden md:flex gap-8 text-xl text-white/90">
            <Link to="/tvshow">
              <li>TV Show</li>
            </Link>

            <Link to="/trend">
              <li>Trending & Popular</li>
            </Link>
          </ul>
        </div>

        <div className="flex gap-4 items-center justify-center">
          {location.pathname === "/search" && (
            <LanguageSelector handleLanguageChange={handleLanguageChange} />
          )}
          <Link
            to="/search"
            className="w-24 md:w-28 flex items-center justify-center h-10 md:h-12 bg-red-600 rounded text-white cursor-pointer"
          >
            <div className="text-[15px] lg:text-lg flex items-center justify-center gap-2">
              <IoSearch />
              <p>search</p>
            </div>
          </Link>
          <UserMenu
            user={user}
            popoverBox={popoverBox}
            handleSignOut={handleSignOut}
            popOverChange={popOverChange}
          />
          <MobileMenu
            toggleMenu={toggleMenu}
            handleMenuToggle={handleMenuToggle}
            user={user}
          />
        </div>
      </div>
      {toggleMenu && (
        <div className="absolute md:hidden top-18 py-10 px-4 right-5 rounded-lg bg-black/90">
          <ul className="flex flex-col gap-8 cursor-pointer text-[16px] text-white/90">
            <Link to="/tvshow" onClick={handleMenuToggle}>
              <li>TV Show</li>
            </Link>

            <Link to="/trend" onClick={handleMenuToggle}>
              <li>Trending & Popular</li>
            </Link>
            {user && (
              <li
                className="cursor-pointer"
                onClick={() => {
                  handleSignOut();
                  handleMenuToggle();
                }}
              >
                Log out
              </li>
            )}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Header;
