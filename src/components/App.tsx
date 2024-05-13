import { lazy, useEffect } from "react";
import { Route, Routes } from "react-router";
import Layout from "./Layout/Layout";
import { GlobalStyle } from "../assets/styles/GlobalStyles";
import { RestrictedRoute } from "../routes/RestrictedRoute";
import { PrivateRoute } from "../routes/PrivateRoute";
import { AppDispatch } from "../redux/store";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase";
import { useDispatch } from "react-redux";
import { refresh } from "../redux/slices/authSlice";

const AuthPage = lazy(() => import("../pages/AuthPage"));
const HomePage = lazy(() => import("../pages/HomePage"));
const AllTodosPage = lazy(() => import("../pages/AllTodosPage"));
const ActivePage = lazy(() => import("../pages/ActivePage"));
const CompletedPage = lazy(() => import("../pages/CompletedPage"));
const NotFoundPage = lazy(() => import("../pages/NotFoundPage"));

function App() {
  const dispatch: AppDispatch = useDispatch();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const id = user.uid;
        const email = user.email;
        dispatch(refresh({ email, id }));
      }
    });
  }, [dispatch]);

  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route
            path="/auth"
            element={<RestrictedRoute redirectTo="/all" component={AuthPage} />}
          />
          <Route
            path="/all"
            element={
              <PrivateRoute component={AllTodosPage} redirectTo="/auth" />
            }
          />
          <Route
            path="/active"
            element={<PrivateRoute component={ActivePage} redirectTo="/auth" />}
          />
          <Route
            path="/completed"
            element={
              <PrivateRoute component={CompletedPage} redirectTo="/auth" />
            }
          />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
      <GlobalStyle />;
    </>
  );
}

export default App;
