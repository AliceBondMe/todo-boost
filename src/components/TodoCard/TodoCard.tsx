import { FC, useEffect, useState } from "react";
import { TodoData } from "../../redux/slices/todosSlice";
import { useShowModal } from "../../hooks/useShowModal";
import { AddTodoModal } from "../AddTodo/AddTodoModal";
import {
  MdOutlineCheckBox,
  MdOutlineCheckBoxOutlineBlank,
} from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "../../redux/store";
import { deleteTodo, editTodoStatus } from "../../redux/operations";
import { selectUser } from "../../redux/selectors";

export const TodoCard: FC<TodoData> = ({
  id,
  title,
  text,
  deadline,
  completed,
}) => {
  const { isShowModal, openModal, closeModal } = useShowModal();
  const [isCompleted, setIsCompleted] = useState(completed);
  const { id: userId } = useSelector(selectUser);
  const dispatch: AppDispatch = useDispatch();

  const handleComplete = () => {
    setIsCompleted((prev) => !prev);
  };

  const handleDelete = () => {
    dispatch(deleteTodo({ id, userId }));
  };

  useEffect(() => {
    dispatch(editTodoStatus({ todo: { id, completed: isCompleted }, userId }));
  }, [dispatch, isCompleted, id, userId]);

  return (
    <>
      <li>
        <h6>{title}</h6>
        <p>{text}</p>
        <p>{deadline}</p>
        <p>{isCompleted ? "completed" : "active"}</p>
        <button
          type="button"
          aria-label="toggle complete task"
          onClick={handleComplete}
        >
          {isCompleted ? (
            <MdOutlineCheckBox />
          ) : (
            <MdOutlineCheckBoxOutlineBlank />
          )}
        </button>
        <button type="button" onClick={openModal}>
          Edit task
        </button>
        <button type="button" onClick={handleDelete}>
          Delete task
        </button>
      </li>

      {isShowModal && (
        <AddTodoModal
          closeModal={closeModal}
          isEdit
          todoId={id}
          title={title}
          text={text}
          deadline={deadline}
        />
      )}
    </>
  );
};
