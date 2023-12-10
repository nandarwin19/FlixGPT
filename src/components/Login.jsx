import React, { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [isSignInForm, setSignInForm] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const toggleSignInForm = () => {
    setSignInForm(!isSignInForm);
    console.log(isSignInForm);
  };

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  return (
    <div>
      <Header />
      <div className="login-bg flex items-center justify-center">
        <div>
          <form
            action=""
            className="w-88 h-auto bg-black/70 text-white p-12 gap-8 flex flex-col"
          >
            <h1 className="text-2xl font-bold">
              {isSignInForm ? "Sign In" : "Sign Up"}
            </h1>
            {!isSignInForm && (
              <input
                type="text"
                placeholder="Your name"
                className="flex placeholder:text-white/70 bg-[#454545] py-2 px-4 rounded-sm"
              />
            )}
            <input
              type="email"
              value={email}
              onChange={handleEmail}
              placeholder="Email address"
              className="flex placeholder:text-white/70 bg-[#454545] py-2 px-4 rounded-sm"
            />
            <input
              type="password"
              value={password}
              onChange={handlePassword}
              placeholder="Password"
              className="block placeholder:text-white/70 bg-[#454545] py-2 px-4 rounded-sm"
            />
            <button className="w-full bg-[#ff1a1a] py-2 px-4 rounded-sm">
              {isSignInForm ? "Sign In" : "Sign Up"}
            </button>
            <p className="text-[13px] tracking-wide" onClick={toggleSignInForm}>
              {isSignInForm
                ? "New to Netflix? Sign Up Now"
                : "Already registered. Login Now"}
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
