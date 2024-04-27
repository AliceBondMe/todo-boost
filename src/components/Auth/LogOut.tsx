import { useDispatch } from "react-redux";
import { auth } from "../../firebase";
import { FC } from "react";
import { signOut } from "firebase/auth";
import { logout } from "../../redux/slices/authSlice";

export const LogOut: FC = () => {
  const dispatch = useDispatch();

  const handleLogOut = () => {
    signOut(auth)
      .then(() => {
        dispatch(logout());
      })
      .catch((error) => {
        console.log("error", error);
      });
  };

  return (
    <button type="button" onClick={handleLogOut}>
      Log Out
    </button>
  );
};
