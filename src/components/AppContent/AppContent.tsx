import styled from 'styled-components';

import { Header, TodoCreate, TodoList } from 'components';

const Container = styled.div`
  width: 100%;
  max-width: 1000px;

  height: 100%;

  padding: 0 20px;
  margin: 0 auto;
`;

export const AppContent = () => {
  return (
    <Container>
      <Header />

      <TodoCreate />
      <TodoList />
    </Container>
  );
};
