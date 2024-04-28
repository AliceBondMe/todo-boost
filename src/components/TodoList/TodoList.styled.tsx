import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 36px 0 36px;

  & ul {
    display: flex;
    flex-direction: column;
    gap: 12px;
  }

  & img {
    position: fixed;
    top: 25%;
    right: 15%;
    width: 320px;
    height: 320px;
  }
`;
