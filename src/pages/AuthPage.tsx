import { AuthForm } from "../components/Auth/AuthForm";
import { useState } from "react";

const RegisterPage = () => {
  const [isLogin, setIsLogin] = useState(true);

  const toggleAuthType = () => {
    setIsLogin((prev) => !prev);
  };

  return (
    <>
      <AuthForm isLogin={isLogin} />
      <div>
        <p>{isLogin ? "Not registered?" : "Already have an account?"}</p>
        <button onClick={toggleAuthType}>
          {isLogin ? "Sign up" : "Sign in"}
        </button>
      </div>
    </>
  );
};

export default RegisterPage;
