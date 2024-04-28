import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import { Container, Main, Wrap } from "./Layout.styled";
import { Header } from "../Header/Header";
import { Loader } from "../Loader/Loader";

const Layout = () => {
  return (
    <>
      <Header />
      <Wrap>
        <Main>
          <Container>
            <Suspense fallback={<Loader />}>
              <Outlet />
            </Suspense>
          </Container>
        </Main>
      </Wrap>
    </>
  );
};

export default Layout;
