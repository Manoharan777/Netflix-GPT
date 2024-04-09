import { useRef, useState } from "react";
import Header from "./Header";
import { validateData } from "../utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../utils/firebase";
const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errMessage, setErrMessage] = useState(null);

  const email = useRef(null);
  const password = useRef(null);
  const fullName = useRef(null);

  const handleFormSubmission = () => {
    const emailValue = email.current.value;
    const passwordValue = password.current.value;
    const fullNameValue = fullName.current ? fullName.current.value : "";

    let message = validateData(emailValue, passwordValue);
    setErrMessage(message);
    if (!isSignInForm && !fullNameValue) {
      return setErrMessage("Name is Required");
    }

    if (message) return; //msg is there return no need to go further process.

    if (!isSignInForm) {
      //sign-up logic
      createUserWithEmailAndPassword(auth, emailValue, passwordValue)
        .then((userCredential) => {
          const user = userCredential.user;
          console.log(user);
        })
        .catch((error) => {
          const errorMessage = error.message;
          setErrMessage(errorMessage);
        });
    } else {
      //sign-in logic
      signInWithEmailAndPassword(auth, emailValue, passwordValue)
        .then((userCredential) => {
          const user = userCredential.user;
          console.log("successfull login", user);
        })
        .catch((error) => {
          const errorMessage = error.message;
          setErrMessage(errorMessage);
        });
    }
  };

  const handleToggleSignIn = () => {
    setIsSignInForm(!isSignInForm);
  };
  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src="https://i.redd.it/zjgs096khv591.jpg"
          alt="netflix-bg"
          className="w-full "
        />
      </div>

      <form
        onSubmit={(e) => e.preventDefault()}
        className="w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80"
      >
        <h1 className="font-bold text-3xl py-4">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInForm && (
          <input
            type="text"
            ref={fullName}
            placeholder="Full Name"
            className="p-4  my-2 w-full rounded-md bg-gray-700"
          />
        )}
        <input
          type="email"
          ref={email}
          placeholder="Email Address"
          className="p-4  my-2 w-full rounded-md bg-gray-700"
        />
        <input
          type="password"
          ref={password}
          placeholder="Password"
          className="p-4 my-2 w-full rounded-md bg-gray-700"
        />
        <p className="text-red-700 font-bold text-xl  ">{errMessage}</p>
        <button
          onClick={handleFormSubmission}
          className="p-4 my-6 bg-red-700  rounded-md w-full"
        >
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
