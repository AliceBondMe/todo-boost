import { FC, SyntheticEvent, useEffect } from "react";
import { createPortal } from "react-dom";
import { Backdrop } from "./AddTodoModal.styled";
import { ErrorMessage, Field, Form, Formik } from "formik";
import "react-datepicker/dist/react-datepicker.css";
import * as yup from "yup";
import { db } from "../../firebase";
import { useSelector } from "react-redux";
import { selectUser } from "../../redux/selectors";
import { addDoc, collection } from "firebase/firestore";
import { nanoid } from "@reduxjs/toolkit";
import ReactDatePicker from "react-datepicker";

const modalRoot = document.querySelector("#modal-root") as HTMLElement;

export interface TodoData {
  title: string;
  text: string;
  deadline: Date | undefined;
}

interface AddTodoModalProps {
  closeModal: () => void;
}

const initialValues: TodoData = {
  title: "",
  text: "",
  deadline: undefined,
};

const validationSchema = yup.object().shape({
  title: yup
    .string()
    .min(3)
    .max(100)
    .required("A Title for new task is required"),
  deadline: yup.date().required("A deadline is required"),
  text: yup.string().max(500),
});

export const AddTodoModal: FC<AddTodoModalProps> = ({ closeModal }) => {
  const { id } = useSelector(selectUser);

  const handleBackdropClose = (e: SyntheticEvent) => {
    if (e.target === e.currentTarget) {
      closeModal();
    }
  };

  useEffect(() => {
    const handleCloseByEsc = (e: KeyboardEvent) => {
      if (e.code === "Escape") {
        closeModal();
      }
    };
    window.addEventListener("keydown", handleCloseByEsc);

    return () => {
      window.removeEventListener("keydown", handleCloseByEsc);
    };
  }, [closeModal]);

  const handleSubmit = async (todoData: TodoData) => {
    try {
      const userTodosRef = collection(db, `users/${id}/todos`);
      await addDoc(userTodosRef, {
        ...todoData,
        completed: false,
        id: nanoid(),
      });
    } catch (error) {
      console.log(error);
    }

    closeModal();
  };

  return createPortal(
    <Backdrop onClick={handleBackdropClose}>
      <button
        type="button"
        aria-label="close modal window"
        onClick={closeModal}
      >
        x
      </button>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ setFieldValue, values }) => (
          <Form>
            <Field type="text" name="title" placeholder="Title" required />
            <Field type="text" name="text" placeholder="Description" />
            <ReactDatePicker
              name="deadline"
              placeholderText="Deadline"
              selected={values.deadline}
              onChange={(date) => setFieldValue("deadline", date)}
              autoComplete="off"
              dateFormat="dd/MM/yyyy"
              calendarStartDay={1}
              required
            />

            <button type="submit">Create new task</button>

            <ErrorMessage name="title" component="div" />
            <ErrorMessage name="text" component="div" />
            <ErrorMessage name="deadline" component="div" />
          </Form>
        )}
      </Formik>
    </Backdrop>,
    modalRoot
  );
};
