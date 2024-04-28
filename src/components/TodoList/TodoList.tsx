import { FC } from "react";
import { TodoData } from "../../redux/slices/todosSlice";
import { TodoCard } from "../TodoCard/TodoCard";
import paperNotes from "../../assets/images/paper-pile.png";
import { Container } from "./TodoList.styled";

interface ListProps {
  todos: TodoData[];
}

export const TodoList: FC<ListProps> = ({ todos }) => {
  return (
    <Container>
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
      <img src={paperNotes} alt="pile of paper notes" />
    </Container>
  );
};
