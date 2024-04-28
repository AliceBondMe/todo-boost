import { useSelector } from "react-redux";
import { selectActiveTodos } from "../redux/selectors";
import { FC } from "react";
import { AddTodoBlock } from "../components/AddTodo/AddTodoBlock";
import { TodoList } from "../components/TodoList/TodoList";

const ActivePage: FC = () => {
  const todos = useSelector(selectActiveTodos);

  return (
    <>
      <AddTodoBlock />

      {!todos.length ? (
        <p>You have no active tasks yet</p>
      ) : (
        <>
          <h2>Here are all of your active tasks:</h2>
          <TodoList todos={todos} />
        </>
      )}
    </>
  );
};

export default ActivePage;
