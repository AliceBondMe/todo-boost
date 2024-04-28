import { AuthForm } from "../components/Auth/AuthForm";
import { useState } from "react";
import womanImage from "../assets/images/woman-paper-calendar.png";
import { Container, MessageBlock } from "./Pages.styled";

const RegisterPage = () => {
  const [isLogin, setIsLogin] = useState(true);

  const toggleAuthType = () => {
    setIsLogin((prev) => !prev);
  };

  return (
    <Container>
      <img src={womanImage} alt="Woman with schedule" />
      <div>
        <AuthForm isLogin={isLogin} />
        <MessageBlock>
          <p>{isLogin ? "Not registered?" : "Already have an account?"}</p>
          <button onClick={toggleAuthType}>
            {isLogin ? "Sign up" : "Sign in"}
          </button>
        </MessageBlock>
      </div>
    </Container>
  );
};

export default RegisterPage;
