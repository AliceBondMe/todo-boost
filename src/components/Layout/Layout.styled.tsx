import styled from "styled-components";

export const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  min-height: calc(100vh - 100px);
  margin: 0;
  overflow-x: hidden;
`;

export const Main = styled.main`
  flex: 1;
`;

export const Container = styled.div`
  width: 100%;
  height: 100%;
  padding: 12px;

  @media screen and (min-width: 768px) {
    padding: 32px 64px;
  }
`;
