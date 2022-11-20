import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';

const portal = document.getElementById('modal') as HTMLElement;

const Container = styled.div`
  width: 100vw;
  height: 100vh;

  display: flex;
  justify-content: center;
  align-items: center;

  position: absolute;
  left: 0;
  top: 0;

  background-color: rgb(0, 0, 0, 0.5);
  z-index: 10;
`;

export const UpdateTodo = () => {
  return ReactDOM.createPortal(<Container>Modal</Container>, portal);
};
