import { Field, Form } from "formik";
import styled from "styled-components";

export const Button = styled.button`
  padding: 12px 39px;
  justify-content: center;
  align-items: center;
  gap: 8px;
  border-radius: 30px;
  border: 1px solid var(--border-main);
  background-color: var(--bg-accent);
  color: var(--text-white);
  transition: background-color var(--transition-main);

  &:hover {
    background-color: var(--bg-accent-dark);
  }
`;

export const FormStyled = styled(Form)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 32px;
  padding: 40px;
  border-radius: 30px;
  background-color: var(--bg-accent-light);
  margin-bottom: 20px;
`;

export const FieldStyled = styled(Field)`
  width: 400px;
  padding: 16px;
  border-radius: 12px;
  border: none;
  background-color: var(--bg-main);

  &:focus {
    outline: 2px solid var(--bg-accent);
  }
`;

export const ErrorsBlock = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: var(--bg-accent-dark);
`;

export const Header = styled.h2`
  font-size: 32px;
  margin-bottom: 32px;
  text-align: center;
`;
