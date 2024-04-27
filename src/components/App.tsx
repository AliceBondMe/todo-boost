import React, { lazy } from "react";
import { Route, Routes } from "react-router";
import Layout from "./Layout/Layout";
import { GlobalStyle } from "../assets/styles/GlobalStyles";

const AuthPage = lazy(() => import("../pages/AuthPage"));
const HomePage = lazy(() => import("../pages/HomePage"));
const AllTodosPage = lazy(() => import("../pages/AllTodosPage"));
const ActivePage = lazy(() => import("../pages/ActivePage"));
const CompletedPage = lazy(() => import("../pages/CompletedPage"));
const NotFoundPage = lazy(() => import("../pages/NotFoundPage"));

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="/auth" element={<AuthPage />} />
          <Route path="/all" element={<AllTodosPage />} />
          <Route path="/active" element={<ActivePage />} />
          <Route path="/completed" element={<CompletedPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
      <GlobalStyle />;
    </>
  );
}

export default App;
