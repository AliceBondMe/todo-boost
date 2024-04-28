import "react-datepicker/dist/react-datepicker.css";
import { FC, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectTodos, selectUser } from "../redux/selectors";
import { Link } from "react-router-dom";
import { fetchTodos } from "../redux/operations";
import { AppDispatch } from "../redux/store";
import { useShowModal } from "../hooks/useShowModal";
import { AddTodoModal } from "../components/AddTodo/AddTodoModal";
import { TodoCard } from "../components/TodoCard/TodoCard";

export interface Deadline {
  seconds: number;
  nanoseconds: number;
}

const AllTodosPage: FC = () => {
  const { id } = useSelector(selectUser);
  const todos = useSelector(selectTodos);
  const dispatch: AppDispatch = useDispatch();
  const { isShowModal, openModal, closeModal } = useShowModal();

  useEffect(() => {
    if (id) {
      dispatch(fetchTodos(id));
    }
  }, [dispatch, id]);

  return (
    <>
      <h2>AllTodosPage</h2>

      {!id && <Link to="/auth">Please Sign in to create tasks</Link>}

      <button type="button" onClick={openModal} disabled={!id}>
        Add new task
      </button>

      <ul>
        {todos.map(({ id, title, text, deadline, completed }) => (
          <TodoCard
            key={id}
            id={id}
            title={title}
            text={text}
            deadline={deadline}
            completed={completed}
          />
        ))}
      </ul>

      {isShowModal && <AddTodoModal closeModal={closeModal} />}
    </>
  );
};

export default AllTodosPage;
