import * as yup from "yup";
import { ErrorMessage, Formik, FormikHelpers } from "formik";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth, db } from "../../firebase";
import { FC, useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../../redux/slices/authSlice";
import { doc, setDoc } from "firebase/firestore";
import { AppDispatch } from "../../redux/store";
import {
  Button,
  ErrorsBlock,
  FieldStyled,
  FormStyled,
  Header,
} from "./Auth.styled";

export interface UserAuthData {
  email: string;
  password: string;
}

const initialValues: UserAuthData = {
  email: "",
  password: "",
};

const validationSchema = yup.object().shape({
  email: yup
    .string()
    .email("Please enter valid email")
    .required("An email is required"),
  password: yup
    .string()
    .min(5, "Password must contain 5 or more characters")
    .required("A password is required"),
});

export const AuthForm: FC<{ isLogin: boolean }> = ({ isLogin }) => {
  const [isError, setIsError] = useState(false);
  const dispatch: AppDispatch = useDispatch();

  const handleSubmit = async (
    { email, password }: UserAuthData,
    { resetForm }: FormikHelpers<UserAuthData>
  ) => {
    try {
      const userCredential = isLogin
        ? await signInWithEmailAndPassword(auth, email, password)
        : await createUserWithEmailAndPassword(auth, email, password);

      const user = userCredential.user;

      console.log("user: ", user);

      dispatch(
        login({
          email,
          id: user.uid,
          token: user.refreshToken,
        })
      );

      if (!isLogin) {
        await setDoc(doc(db, "users", user.uid), {
          email,
          uid: user.uid,
        });
      }
    } catch {
      setIsError(true);
    }

    resetForm();
  };

  return (
    <>
      <Header>{isLogin ? "Sign in now" : "Sign up now"}</Header>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <FormStyled>
          <FieldStyled type="email" name="email" placeholder="Email" required />
          <FieldStyled
            type="password"
            name="password"
            placeholder="Password"
            required
          />

          <Button type="submit">{isLogin ? "Log in" : "Register"}</Button>

          <ErrorsBlock>
            <ErrorMessage name="email" component="div" />
            <ErrorMessage name="password" component="div" />
          </ErrorsBlock>
        </FormStyled>
      </Formik>

      {isError && (
        <p>Something went wrong with your authentification. Please try again</p>
      )}
    </>
  );
};
