import React, { useState, useRef } from "react";
import { ValidFormData } from "./ValidFormData";
import Header from "./Header";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { addUsers } from "../utils/userSlice";
import { USER_AVATAR } from "../utils/constants";

const Login = () => {
  const [isSignInForm, setSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const email = useRef(null);
  const password = useRef(null);
  const name = useRef(null);
  const dispatch = useDispatch();

  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
  // const [name, setName] = useState("");

  const toggleSignInForm = () => {
    setSignInForm(!isSignInForm);
    console.log(isSignInForm);
  };

  const formHandle = (e) => {
    e.preventDefault();
  };

  const handleButtonClick = () => {
    const message = ValidFormData(
      // name.current.value,
      email.current.value,
      password.current.value
    );

    // console.log(message);
    setErrorMessage(message);

    if (message) return;

    if (!isSignInForm) {
      // Sign Up Logic
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
          updateProfile(user, {
            displayName: name.current.value,
            photoURL: USER_AVATAR,
          })
            .then(() => {
              const { uid, email, displayName, photoURL } = auth.currentUser;
              dispatch(
                addUsers({
                  uid: uid,
                  email: email,
                  displayName: displayName,
                  photoURL: photoURL,
                })
              );

              // console.log(user.photoURL); // This should log the photo URL if it is set
            })
            .catch((error) => {
              setErrorMessage(error.message);
            });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
        });
    } else {
      // Sign In Logic
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
        });
    }
  };

  return (
    <div className="min-h-screen w-screen">
      <Header />
      <div className="bg-[#0f0f0f] min-h-screen min-w-full flex items-center justify-center">
        <form
          onSubmit={formHandle}
          className="max-w-sm h-auto bg-black/70 text-white p-12 gap-8 flex flex-col"
        >
          <h1 className="text-2xl font-bold">
            {isSignInForm ? "Sign In" : "Sign Up"}
          </h1>
          {!isSignInForm && (
            <input
              className="flex placeholder:text-white/70 placeholder:text-sm bg-[#454545] py-2 px-4 rounded-sm"
              type="text"
              placeholder="Your name"
              ref={name}
              value="Yooo"
            />
          )}
          <input
            className="flex placeholder:text-white/70 placeholder:text-sm bg-[#454545] py-2 px-4 rounded-sm"
            type="emailPhone"
            ref={email}
            value="Yoo@gmail.com"
            placeholder="Email address"
          />
          <input
            className="flex placeholder:text-white/70 placeholder:text-sm bg-[#454545] py-2 px-4 rounded-sm"
            type="password"
            ref={password}
            value="Yoo@gmail.com1"
            placeholder="Password"
          />
          {errorMessage && <p className="text-red-600">{errorMessage}</p>}
          <button
            onClick={handleButtonClick}
            className="w-full bg-[#ff1a1a] py-2 px-4 rounded-sm"
          >
            {isSignInForm ? "Sign In" : "Sign Up"}
          </button>
          <p onClick={toggleSignInForm} className="text-[13px] tracking-wide">
            {isSignInForm
              ? "New to Netflix? Sign Up Now"
              : "Already registered. Login Now"}
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
