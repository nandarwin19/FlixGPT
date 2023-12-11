// import React, { useState, useRef } from "react";
// import { ValidFormData } from "./ValidFormData";
// import Header from "./Header";

// const Login = () => {
//   const [isSignInForm, setSignInForm] = useState(true);
//   const emailPhone = useRef(null);
//   const password = useRef(null);
//   const name = useRef(null);
//   const [error, setError] = useState(null);
//   // const [email, setEmail] = useState("");
//   // const [password, setPassword] = useState("");
//   // const [name, setName] = useState("");

//   const toggleSignInForm = () => {
//     setSignInForm(!isSignInForm);
//     console.log(isSignInForm);
//   };

//   // const handleEmail = (e) => {
//   //   setEmail(e.target.value);
//   // };

//   // const handlePassword = (e) => {
//   //   setPassword(e.target.value);
//   // };

//   // const handleName = (e) => {
//   //   setName(e.target.value);
//   // };

//   const formHandle = (e) => {
//     e.preventDefault();
//     const message = ValidFormData(
//       emailPhone.current.value,
//       password.current.value
//     );
//     console.log(message);
//     setError(message);
//   };

//   return (
//     <div>
//       <Header />
//       <div className="login-bg flex items-center justify-center">
//         <form
//           onSubmit={formHandle}
//           className="w-88 h-auto bg-black/70 text-white p-12 gap-8 flex flex-col"
//         >
//           <h1 className="text-2xl font-bold">
//             {isSignInForm ? "Sign In" : "Sign Up"}
//           </h1>
//           {!isSignInForm && (
//             <input
//               className="flex placeholder:text-white/70 bg-[#454545] py-2 px-4 rounded-sm"
//               type="text"
//               placeholder="Your name"
//               ref={name}
//               // onChange={handleName}
//             />
//           )}
//           <input
//             className="flex placeholder:text-white/70 bg-[#454545] py-2 px-4 rounded-sm"
//             type="emailPhone"
//             ref={emailPhone}
//             // onChange={handleEmail}
//             placeholder="Email address or phone number"
//           />
//           <input
//             className="flex placeholder:text-white/70 bg-[#454545] py-2 px-4 rounded-sm"
//             type="password"
//             ref={password}
//             // onChange={handlePassword}
//             placeholder="Password"
//           />
//           {error && <p className="text-red-600">{error}</p>}
//           <button className="w-full bg-[#ff1a1a] py-2 px-4 rounded-sm">
//             {isSignInForm ? "Sign In" : "Sign Up"}
//           </button>
//           <p onClick={toggleSignInForm} className="text-[13px] tracking-wide">
//             {isSignInForm
//               ? "New to Netflix? Sign Up Now"
//               : "Already registered. Login Now"}
//           </p>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default Login;

// Login.jsx
import React, { useState, useRef } from "react";
import { ValidFormData } from "./ValidFormData";
import Header from "./Header";

const Login = () => {
  const [isSignInForm, setSignInForm] = useState(true);
  const emailPhone = useRef(null);
  const password = useRef(null);
  const name = useRef(null);
  const [emailPhoneError, setEmailPhoneError] = useState(null);
  const [passwordError, setPasswordError] = useState(null);

  const toggleSignInForm = () => {
    setSignInForm(!isSignInForm);
    console.log(isSignInForm);
  };

  const formHandle = (e) => {
    e.preventDefault();
    const emailPhoneValue = emailPhone.current.value;
    const passwordValue = password.current.value;

    const emailPhoneError = ValidFormData(emailPhoneValue, passwordValue);
    if (emailPhoneError) {
      setEmailPhoneError(emailPhoneError);
      setPasswordError(null); // Clear password error if any
      return;
    }

    // Other form submission logic here
  };

  return (
    <div>
      <Header />
      <div className="login-bg flex items-center justify-center">
        <form
          onSubmit={formHandle}
          className="w-88 h-auto bg-black/70 text-white p-12 gap-8 flex flex-col"
        >
          {/* ... (other form inputs) */}
          <input
            className="flex placeholder:text-white/70 bg-[#454545] py-2 px-4 rounded-sm"
            type="text" // Change type to "text"
            ref={emailPhone}
            placeholder="Email address or phone number"
          />
          {emailPhoneError && <p className="text-red-600">{emailPhoneError}</p>}
          <input
            className="flex placeholder:text-white/70 bg-[#454545] py-2 px-4 rounded-sm"
            type="password"
            ref={password}
            placeholder="Password"
          />
          {passwordError && <p className="text-red-600">{passwordError}</p>}
          <button className="w-full bg-[#ff1a1a] py-2 px-4 rounded-sm">
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
