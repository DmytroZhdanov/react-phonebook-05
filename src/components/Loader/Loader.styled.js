import styled from '@emotion/styled';

export const Backdrop = styled.div`
  position: absolute;
  height: 100vh;
  width: 100vw;
  background-color: rgba(200, 200, 200, 0.5);
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  justify-content: center
  align-items: center;
`;

export const Container = styled.div`
  margin: auto;
`;
