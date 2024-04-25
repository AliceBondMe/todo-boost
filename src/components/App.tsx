import React, { lazy } from "react";
import { Route, Routes } from "react-router";
import Layout from "./Layout/Layout";
import { GlobalStyle } from "../assets/styles/GlobalStyles";

const RegisterPage = lazy(() => import("../pages/RegisterPage"));
const LoginPage = lazy(() => import("../pages/LoginPage"));
const HomePage = lazy(() => import("../pages/HomePage"));
const AllTodosPage = lazy(() => import("../pages/AllTodosPage"));
const TodayPage = lazy(() => import("../pages/TodayPage"));
const CompletedPage = lazy(() => import("../pages/CompletedPage"));
const NotFoundPage = lazy(() => import("../pages/NotFoundPage"));

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/all" element={<AllTodosPage />} />
          <Route path="/today" element={<TodayPage />} />
          <Route path="/completed" element={<CompletedPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
      <GlobalStyle />;
    </>
  );
}

export default App;
