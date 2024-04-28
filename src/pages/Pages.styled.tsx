import styled from "styled-components";

export const Container = styled.div`
  height: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;

  & img {
    height: 75vh;
    width: auto;
  }
`;

export const MessageBlock = styled.div`
  display: flex;
  justify-content: center;

  & button {
    color: var(--bg-accent-dark);
    font-weight: bold;
  }
`;

export const Header = styled.h2`
  margin-left: 48px;
  margin-bottom: 24px;
`;

export const HomeTextBlock = styled.div`
  width: 500px;
`;

export const HeaderNotFound = styled.h5`
  font-size: 36px;
  width: 400px;
`;
