import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

import { bd, TodoService } from 'api';
import { ResponseTodoApi } from 'types/types';
import { onValue, ref } from 'firebase/database';
import { ListItem } from './components';

const Container = styled.div`
  margin-top: 50px;
`;

const List = styled.ul`
  display: flex;
  flex-direction: column;

  gap: 20px;
`;

export const TodoList = () => {
  const [todoList, setTodoList] = useState<ResponseTodoApi[]>([]);

  useEffect(() => {
    onValue(ref(bd), (snapshot) => {
      const response = snapshot.val();

      if (response) {
        setTodoList(Object.values(response));
      }
    });
  }, []);

  return (
    <Container>
      <List>
        {todoList &&
          todoList.map((element) => (
            <ListItem key={element.id} element={element} />
          ))}
      </List>
    </Container>
  );
};
