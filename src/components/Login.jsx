import React, { useState, useRef } from "react";
import { ValidFormData } from "./ValidFormData";
import Header from "./Header";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import {useDispatch} from "react-redux";
import { addUsers } from "../utils/userSlice";

const Login = () => {
  const navigate = useNavigate();
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
            photoURL:
              "https://th-thumbnailer.cdn-si-edu.com/bgmkh2ypz03IkiRR50I-UMaqUQc=/1000x750/filters:no_upscale():focal(1061x707:1062x708)/https://tf-cmsv2-smithsonianmag-media.s3.amazonaws.com/filer_public/55/95/55958815-3a8a-4032-ac7a-ff8c8ec8898a/gettyimages-1067956982.jpg",
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
              navigate("/browse");

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
          console.log(user);
          navigate("/browse");
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
        });
    }
  };

  return (
    <div>
      <Header />
      <div className="login-bg flex items-center justify-center">
        <form
          onSubmit={formHandle}
          className="w-88 h-auto bg-black/70 text-white p-12 gap-8 flex flex-col"
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
              // onChange={handleName}
            />
          )}
          <input
            className="flex placeholder:text-white/70 placeholder:text-sm bg-[#454545] py-2 px-4 rounded-sm"
            type="emailPhone"
            ref={email}
            // onChange={handleEmail}
            placeholder="Email address"
          />
          <input
            className="flex placeholder:text-white/70 placeholder:text-sm bg-[#454545] py-2 px-4 rounded-sm"
            type="password"
            ref={password}
            // onChange={handlePassword}
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
