import { useState } from "react";
import Header from "./Header";

const Login = () => {
const [isSignInForm,setIsSignInForm] = useState(true);


    const handleToggleSignIn = () => {
setIsSignInForm(!isSignInForm);
    }
  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src="https://i.redd.it/zjgs096khv591.jpg"
          alt="netflix-bg"
          className="w-full"
        />
      </div>

      <form className="w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80">
        <h1 className="font-bold text-3xl py-4">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInForm && (
          <input
            type="text"
            placeholder="Full Name"
            className="p-4  my-2 w-full rounded-md bg-gray-700"
          />
        )}
        <input
          type="email"
          placeholder="Email Address"
          className="p-4  my-2 w-full rounded-md bg-gray-700"
        />
        <input
          type="password"
          placeholder="Password"
          className="p-4 my-2 w-full rounded-md bg-gray-700"
        />
        <button className="p-4 my-6 bg-red-700  rounded-md w-full">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <span className="text-gray-300 text-lg">
          {isSignInForm ? "New to Netflix? " : "Already Registered? "}
        </span>
        <span
          onClick={handleToggleSignIn}
          className="font-semibold text-lg cursor-pointer"
        >
          {isSignInForm ? "Sign up now" : "Sign in now"}
        </span>
      </form>
    </div>
  );
};

export default Login;
