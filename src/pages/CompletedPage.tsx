import { FC } from "react";
import { useSelector } from "react-redux";
import { selectCompletedTodos } from "../redux/selectors";
import { TodoList } from "../components/TodoList/TodoList";

const CompletedPage: FC = () => {
  const todos = useSelector(selectCompletedTodos);

  return (
    <>
      {!todos.length ? (
        <p>You have no completed tasks yet</p>
      ) : (
        <>
          <h2>Here are all of your completed tasks:</h2>
          <TodoList todos={todos} />
        </>
      )}
    </>
  );
};

export default CompletedPage;
