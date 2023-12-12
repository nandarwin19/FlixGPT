import React, { useState, useRef } from "react";
import { ValidFormData } from "./ValidFormData";
import Header from "./Header";

const Login = () => {
  const [isSignInForm, setSignInForm] = useState(true);
  const emailPhone = useRef(null);
  const password = useRef(null);
  const name = useRef(null);
  const [error, setError] = useState(null);
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
      name.current.value,
      emailPhone.current.value,
      password.current.value
    );
    // console.log(message);
    setError(message);

    if (message) return;

    // Sign In Sign Up Logic 
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
            ref={emailPhone}
            // onChange={handleEmail}
            placeholder="Email address or phone number"
          />
          <input
            className="flex placeholder:text-white/70 placeholder:text-sm bg-[#454545] py-2 px-4 rounded-sm"
            type="password"
            ref={password}
            // onChange={handlePassword}
            placeholder="Password"
          />
          {error && <p className="text-red-600">{error}</p>}
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
