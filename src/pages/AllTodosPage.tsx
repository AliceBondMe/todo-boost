import "react-datepicker/dist/react-datepicker.css";
import { FC, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectTodos, selectUser } from "../redux/selectors";
import { fetchTodos } from "../redux/operations";
import { AppDispatch } from "../redux/store";
import { TodoList } from "../components/TodoList/TodoList";
import { AddTodoBlock } from "../components/AddTodo/AddTodoBlock";
import { Header } from "./Pages.styled";

const AllTodosPage: FC = () => {
  const { id } = useSelector(selectUser);
  const todos = useSelector(selectTodos);
  const dispatch: AppDispatch = useDispatch();

  useEffect(() => {
    if (id) {
      dispatch(fetchTodos(id));
    }
  }, [dispatch, id]);

  return (
    <>
      <AddTodoBlock />

      {!todos.length ? (
        <p>You have no tasks yet</p>
      ) : (
        <>
          <Header>Here are all of your tasks:</Header>
          <TodoList todos={todos} />
        </>
      )}
    </>
  );
};

export default AllTodosPage;
