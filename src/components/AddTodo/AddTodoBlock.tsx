import { FC } from "react";
import { useSelector } from "react-redux";
import { selectUser } from "../../redux/selectors";
import { Link } from "react-router-dom";
import { useShowModal } from "../../hooks/useShowModal";
import { AddTodoModal } from "./AddTodoModal";
import { AddTodoButton } from "./AddTodoModal.styled";

export const AddTodoBlock: FC = () => {
  const { id } = useSelector(selectUser);
  const { isShowModal, openModal, closeModal } = useShowModal();

  return (
    <>
      {!id && <Link to="/auth">Please Sign in to create tasks</Link>}

      <AddTodoButton
        type="button"
        onClick={openModal}
        disabled={!id}
        style={{ marginLeft: "50%" }}
      >
        Add new task
      </AddTodoButton>

      {isShowModal && <AddTodoModal closeModal={closeModal} />}
    </>
  );
};
