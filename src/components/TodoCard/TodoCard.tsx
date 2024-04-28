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
import { ActionButton, Card, TitleBlock } from "./TodoCard.styled";

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
      <Card $isCompleted={isCompleted}>
        <TitleBlock>
          <h6>{title}</h6>
          <button
            type="button"
            aria-label="toggle complete task"
            onClick={handleComplete}
          >
            {isCompleted ? (
              <MdOutlineCheckBox size={32} />
            ) : (
              <MdOutlineCheckBoxOutlineBlank size={32} />
            )}
          </button>
        </TitleBlock>

        <p className="text">{text}</p>
        <p className="deadline">{deadline}</p>

        <div>
          <ActionButton type="button" onClick={openModal}>
            Edit task
          </ActionButton>
          <ActionButton type="button" onClick={handleDelete}>
            Delete task
          </ActionButton>
        </div>
      </Card>

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
