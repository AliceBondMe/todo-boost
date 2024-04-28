import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { selectUser } from "../../redux/selectors";
import { LogOut } from "../Auth/LogOut";
import { HeaderStyled, Logo, Navigation, UserBlock } from "./Header.styled";
import { BiSolidCalendarCheck } from "react-icons/bi";
import { FaUserNinja } from "react-icons/fa";

export const Header = () => {
  const { email } = useSelector(selectUser);

  return (
    <HeaderStyled>
      <Logo>
        <BiSolidCalendarCheck size={36} />
        TODO-Boost
      </Logo>
      <Navigation>
        <NavLink to="/">Home</NavLink>
        {!email && <NavLink to="auth">Sign In</NavLink>}
        {email && (
          <>
            <NavLink to="all">All ToDos</NavLink>
            <NavLink to="active">Active</NavLink>
            <NavLink to="completed">Completed</NavLink>
          </>
        )}
      </Navigation>

      {email && (
        <UserBlock>
          <p>
            <FaUserNinja size={22} /> {email}
          </p>
          <LogOut />
        </UserBlock>
      )}
    </HeaderStyled>
  );
};
