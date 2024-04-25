import { NavLink } from "react-router-dom";

export const Header = () => {
  return (
    <header>
      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="register">Register</NavLink>
        <NavLink to="login">Login</NavLink>
        <NavLink to="all">All ToDos</NavLink>
        <NavLink to="today">Today</NavLink>
        <NavLink to="completed">Completed</NavLink>
      </nav>
    </header>
  );
};
