import { ErrorMessage, Field, Form, Formik, FormikHelpers } from "formik";
import { FC } from "react";
import * as yup from "yup";
import { db } from "../firebase";
import { useSelector } from "react-redux";
import { selectUser } from "../redux/selectors";
import { addDoc, collection } from "firebase/firestore";
import { Link } from "react-router-dom";
import { nanoid } from "@reduxjs/toolkit";

export interface TodoData {
  title: string;
  text: string;
  deadline: string;
}

const initialValues: TodoData = {
  title: "",
  text: "",
  deadline: "",
};

const validationSchema = yup.object().shape({
  title: yup
    .string()
    .min(3)
    .max(100)
    .required("A Title for new task is required"),
  deadline: yup.string().required("Deadline for new task is required"),
  text: yup.string().max(500),
});

const AllTodosPage: FC = () => {
  const { id } = useSelector(selectUser);

  const handleSubmit = async (
    todoData: TodoData,
    { resetForm }: FormikHelpers<TodoData>
  ) => {
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

    resetForm();
  };

  return (
    <>
      <h2>AllTodosPage</h2>

      {!id && <Link to="/auth">Please Sign in to create tasks</Link>}

      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <Form>
          <Field type="text" name="title" placeholder="Title" required />
          <Field type="text" name="text" placeholder="Description" />
          <Field type="text" name="deadline" placeholder="Deadline" required />

          <button type="submit" disabled={!id}>
            Create new task
          </button>

          <ErrorMessage name="title" component="div" />
          <ErrorMessage name="text" component="div" />
          <ErrorMessage name="deadline" component="div" />
        </Form>
      </Formik>
    </>
  );
};

export default AllTodosPage;
