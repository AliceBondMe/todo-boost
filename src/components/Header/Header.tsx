import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { selectUser } from "../../redux/selectors";
import { LogOut } from "../Auth/LogOut";

export const Header = () => {
  const { email } = useSelector(selectUser);

  return (
    <header>
      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="auth">Sign In</NavLink>
        <NavLink to="all">All ToDos</NavLink>
        <NavLink to="active">Active</NavLink>
        <NavLink to="completed">Completed</NavLink>
      </nav>

      {email && (
        <div>
          <p>{email}</p>
          <LogOut />
        </div>
      )}
    </header>
  );
};
