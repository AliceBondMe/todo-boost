import { FC, useEffect } from "react";
import { Container, HeaderNotFound } from "./Pages.styled";
import notFound from "../assets/images/not-found.png";
import { useNavigate } from "react-router";

const NotFoundPage: FC = () => {
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      navigate("/");
    }, 4000);
  }, [navigate]);

  return (
    <Container>
      <HeaderNotFound>
        You will be automatically redirected to Home page
      </HeaderNotFound>

      <img src={notFound} alt="Page not found" />
    </Container>
  );
};

export default NotFoundPage;
