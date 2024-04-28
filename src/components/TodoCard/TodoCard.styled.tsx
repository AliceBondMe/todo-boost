import styled from "styled-components";

interface CardProps {
  $isCompleted: boolean;
}

export const Card = styled.div<CardProps>`
  display: flex;
  flex-direction: column;
  width: 600px;
  min-height: 160px;
  padding: 20px;
  border-radius: 24px;
  background-color: ${({ $isCompleted }) =>
    $isCompleted ? "var(--bg-grey)" : "var(--bg-accent-lighter)"};

  & .deadline {
    align-self: flex-end;
    font-style: bold;
    font-size: 18px;
    color: var(--bg-accent-dark);
  }

  & .text {
    width: 500px;
    overflow-wrap: break-word;
  }
`;

export const TitleBlock = styled.div`
  display: flex;
  justify-content: space-between;

  & button {
    background-color: transparent;
  }

  & svg {
    color: var(--bg-accent-dark);
    transition: color var(--transition-main);

    &:hover {
      color: var(--text-main);
    }
  }

  & h6 {
    font-size: 20px;
    font-style: bold;
  }
`;

export const ActionButton = styled.button`
  padding: 8px;
  margin-right: 12px;
  width: 160px;
  border-radius: 30px;
  border: 1px solid var(--bg-accent-dark);
  background-color: transparent;
  transition: all var(--transition-main);

  &:hover {
    color: var(--text-white);
    background-color: var(--bg-accent-dark);
  }
`;
