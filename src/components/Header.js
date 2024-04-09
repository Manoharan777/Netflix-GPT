import { signOut } from "firebase/auth";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { auth } from "../utils/firebase";

const Header = () => {
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        navigate("/error");
      });
  };
  return (
    <div className="absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between">
      <img
        className="w-44"
        src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
        alt="logo"
      />
      {user && (
        <div className="flex p-2 items-center">
          <img className="w-12 h-12 p-2" alt="usericon" src={user?.photoURL} /> <span className="py-2 m-2 text-white text-lg font-bold">{user.displayName}</span>
          <button onClick={handleSignOut} className="font-bold text-white bg-red-600 p-2 m-2 rounded">
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
};
export default Header;