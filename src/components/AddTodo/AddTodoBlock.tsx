import { FC } from "react";
import { useSelector } from "react-redux";
import { selectUser } from "../../redux/selectors";
import { Link } from "react-router-dom";
import { useShowModal } from "../../hooks/useShowModal";
import { AddTodoModal } from "./AddTodoModal";

export const AddTodoBlock: FC = () => {
  const { id } = useSelector(selectUser);
  const { isShowModal, openModal, closeModal } = useShowModal();

  return (
    <>
      {!id && <Link to="/auth">Please Sign in to create tasks</Link>}

      <button type="button" onClick={openModal} disabled={!id}>
        Add new task
      </button>

      {isShowModal && <AddTodoModal closeModal={closeModal} />}
    </>
  );
};
