import styled from 'styled-components';

export const LoaderBackdrop = styled.div`
  width: 100%;
  height: 100%;
  background-color: var(--bg-main);
`;

export const LoaderStyled = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  transform: -webkit-translate(-50%, -50%);
  transform: -moz-translate(-50%, -50%);
  transform: -ms-translate(-50%, -50%);
  z-index: 999;
`;
