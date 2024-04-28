import { ErrorMessage, Field, Form } from "formik";
import { fadeInScale } from "../../assets/styles/GlobalStyles";
import styled from "styled-components";
import ReactDatePicker from "react-datepicker";
import { Button } from "../Auth/Auth.styled";

export const ModalContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 600px;
  min-height: 400px;
  border-radius: 20px;
  padding: 20px;
  background-color: #ffffff;
  animation: ${fadeInScale} 700ms ease-in-out;

  & button {
    align-self: end;
    background-color: transparent;
  }

  & svg {
    color: var(--bg-accent-dark);
    transition: color var(--transition-main);

    &:hover {
      color: var(--text-main);
    }
  }
`;

export const Backdrop = styled.div`
  z-index: 1200;
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--backdrop);
`;

export const FormStyled = styled(Form)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 16px;
  gap: 20px;

  & button {
    align-self: center;
  }
`;

export const FieldStyled = styled(Field)`
  width: 480px;
  padding: 12px;
  border-radius: 12px;
  border: none;
  background-color: var(--bg-accent-lighter);

  &:focus {
    outline: 2px solid var(--bg-accent);
  }
`;

export const DatePickerStyled = styled(ReactDatePicker)`
  width: 480px;
  padding: 12px;
  border-radius: 12px;
  border: none;
  background-color: var(--bg-accent-lighter);

  &:focus {
    outline: 2px solid var(--bg-accent);
  }
`;

export const ErrorMessageStyled = styled(ErrorMessage)`
  color: var(--bg-accent-dark);
`;

export const AddTodoButton = styled(Button)`
  position: fixed;
  bottom: 40px;
`;
