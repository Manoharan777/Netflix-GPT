import { signOut, onAuthStateChanged } from "firebase/auth";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { auth } from "../utils/firebase";
import { useEffect } from "react";
import { addUser, removeUser } from "../utils/userSlice";
import { addGptMoviesName, addGptMoviesResult, toggleShowGptView } from "../utils/gptSlice";
import { NETFLIX_LOGO, SUPPORTED_LANGUAGES } from "../utils/constants";
import { changeLanguage } from "../utils/configSlice";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const langToggle = useSelector((store) => store.gpt.showGptSearch);
  const user = useSelector((store) => store.user);
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        navigate("/error");
      });
  };

  useEffect(() => {
    let subscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });
    return () => subscribe();
  }, []);

  const handleGptSearch = () => {
    dispatch(toggleShowGptView());
    dispatch(addGptMoviesResult(null));
    dispatch(addGptMoviesName(null));
  };

  const handleLang = (e) => {
    dispatch(changeLanguage(e.target.value));
  };
  return (
    <div className="absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex flex-col md:flex-row justify-between ">
      <img className="w-44 mx-auto md:mx-0" src={NETFLIX_LOGO} alt="logo" />
      {user && (
        <div className="flex p-2  mx-2 items-center">
          {langToggle && (
            <select
              className="p-2 mx-2 py-3 bg-gray-900 text-white rounded-md "
              onChange={handleLang}
            >
              {SUPPORTED_LANGUAGES.map((lang) => (
                <option key={lang.identifier} value={lang.identifier}>
                  {lang.name}
                </option>
              ))}
            </select>
          )}
          <button
            className="p-2 mx-2 bg- bg-purple-800 text-white rounded "
            onClick={handleGptSearch}
          >
            {langToggle ? "Homepage" : "GPT Search"}
          </button>
          <img className="w-12 h-12 p-2" alt="usericon" src={user?.photoURL} />{" "}
          <span className="py-2 m-2 text-white text-lg font-bold">
            {user.displayName}
          </span>
          <button
            onClick={handleSignOut}
            className="font-bold text-white bg-red-600 p-2 m-2 rounded"
          >
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
};
export default Header;
