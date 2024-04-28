import { useDispatch } from "react-redux";
import { auth } from "../../firebase";
import { FC } from "react";
import { signOut } from "firebase/auth";
import { logout } from "../../redux/slices/authSlice";
import { Button } from "./Auth.styled";

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
    <Button type="button" onClick={handleLogOut}>
      Log Out
    </Button>
  );
};
