import { fadeInScale } from "../../assets/styles/GlobalStyles";
import styled from "styled-components";

export const ModalContainer = styled.div`
  width: 90%;
  max-height: 90vh;
  border-radius: 20px;
  overflow-y: scroll;
  scroll-behavior: smooth;
  padding: 12px;
  background-color: #ffffff;
  animation: ${fadeInScale} 700ms ease-in-out;
`;

export const Backdrop = styled.div`
  z-index: 1200;
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--backdrop);
`;
