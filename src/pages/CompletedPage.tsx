import { FC } from "react";
import { useSelector } from "react-redux";
import { selectCompletedTodos } from "../redux/selectors";
import { TodoList } from "../components/TodoList/TodoList";
import { Header } from "./Pages.styled";

const CompletedPage: FC = () => {
  const todos = useSelector(selectCompletedTodos);

  return (
    <>
      {!todos.length ? (
        <p>You have no completed tasks yet</p>
      ) : (
        <>
          <Header>Here are all of your completed tasks:</Header>
          <TodoList todos={todos} />
        </>
      )}
    </>
  );
};

export default CompletedPage;
