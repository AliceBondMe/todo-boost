import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { RestrictedRouteProps } from "./RestrictedRoute";
import { FC } from "react";
import { selectUser } from "../redux/selectors";

export const PrivateRoute: FC<RestrictedRouteProps> = ({
  component: Component,
  redirectTo = "/",
}) => {
  const { id } = useSelector(selectUser);

  return !id ? <Navigate to={redirectTo} /> : <Component />;
};
