import { FC } from "react";
import { formatDate } from "../../helpers/formatDate";
import { TodoData } from "../../redux/slices/todosSlice";

export const TodoCard: FC<TodoData> = ({
  id,
  title,
  text,
  deadline,
  completed,
}) => {
  return (
    <li>
      <h6>{title}</h6>
      <p>{text}</p>
      <p>{formatDate(deadline)}</p>
      <p>{completed ? "completed" : "active"}</p>
      <button type="button">Finish task</button>
      <button type="button">Edit task</button>
      <button type="button">Delete task</button>
    </li>
  );
};
