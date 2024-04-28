import styled from "styled-components";

export const HeaderStyled = styled.header`
  top: 0;
  left: 0;
  position: sticky;
  z-index: 1100;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 60px;
  padding: 12px 24px;
  font-size: 18px;
  background-color: var(--bg-accent);
  color: var(--text-white);

  & a.active {
    text-decoration: underline;
  }
`;

export const Logo = styled.div`
  display: flex;
  align-items: end;
  font-size: 20px;
`;

export const Navigation = styled.nav`
  display: flex;
  gap: 24px;
`;

export const UserBlock = styled.div`
  display: flex;
  align-items: center;
  gap: 24px;

  & p {
    display: flex;
    align-items: center;
    gap: 8px;
  }
`;
