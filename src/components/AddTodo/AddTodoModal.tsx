import { FC, SyntheticEvent, useEffect } from "react";
import { createPortal } from "react-dom";
import { Backdrop } from "./AddTodoModal.styled";
import { ErrorMessage, Field, Form, Formik } from "formik";
import "react-datepicker/dist/react-datepicker.css";
import * as yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { selectUser } from "../../redux/selectors";
import { nanoid } from "@reduxjs/toolkit";
import ReactDatePicker from "react-datepicker";
import { AppDispatch } from "../../redux/store";
import { addTodo, editTodo } from "../../redux/operations";
import { formatDate, formatDateToObject } from "../../helpers/formatDate";

const modalRoot = document.querySelector("#modal-root") as HTMLElement;

export interface TodoDataOut {
  title: string;
  text: string;
  deadline: Date | undefined;
}

interface AddTodoModalProps {
  closeModal: () => void;
  isEdit?: boolean;
  todoId?: string;
  title?: string;
  text?: string;
  deadline?: string;
}

const validationSchema = yup.object().shape({
  title: yup
    .string()
    .min(3)
    .max(100)
    .required("A Title for new task is required"),
  deadline: yup.date().required("A deadline is required"),
  text: yup.string().max(500),
});

export const AddTodoModal: FC<AddTodoModalProps> = ({
  closeModal,
  isEdit = false,
  todoId,
  title,
  text,
  deadline,
}) => {
  const dispatch: AppDispatch = useDispatch();
  const { id: userId } = useSelector(selectUser);

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

  const handleSubmit = async (todoData: TodoDataOut) => {
    const todoPayload = {
      userId,
      todo: {
        ...todoData,
        deadline: formatDate(todoData.deadline),
        completed: false,
        id: isEdit ? (todoId as string) : nanoid(),
      },
    };

    isEdit ? dispatch(editTodo(todoPayload)) : dispatch(addTodo(todoPayload));

    closeModal();
  };

  const initialValues: TodoDataOut = {
    title: isEdit ? (title as string) : "",
    text: isEdit ? (text as string) : "",
    deadline: isEdit ? formatDateToObject(deadline) : undefined,
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

            <button type="submit">
              {isEdit ? "Edit task" : "Create new task"}
            </button>

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
