import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  height: 80px;

  display: flex;
  justify-content: center;
  align-items: center;

  background-color: #e9f6ff;
  border-radius: 0 0 30px 30px;
`;

const Text = styled.span`
  font-style: normal;
  font-weight: 400;
  font-size: 38px;
  line-height: 130%;

  color: #29374e;
`;

export const Header = () => {
  return (
    <Container>
      <Text>Список дел</Text>
    </Container>
  );
};
