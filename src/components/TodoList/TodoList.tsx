import { FC } from "react";
import { TodoData } from "../../redux/slices/todosSlice";
import { TodoCard } from "../TodoCard/TodoCard";

interface ListProps {
  todos: TodoData[];
}

export const TodoList: FC<ListProps> = ({ todos }) => {
  return (
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
  );
};
