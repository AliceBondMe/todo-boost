import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { selectUser } from "../redux/selectors";
import { FC } from "react";

export interface RestrictedRouteProps {
  component: React.ComponentType<any>;
  redirectTo: string;
}

export const RestrictedRoute: FC<RestrictedRouteProps> = ({
  component: Component,
  redirectTo = "/",
}) => {
  const { id } = useSelector(selectUser);

  return id ? <Navigate to={redirectTo} /> : <Component />;
};
