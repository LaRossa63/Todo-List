import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

import { bd, TodoService } from 'api';
import { ResponseTodoApi } from 'types/types';
import { onValue, ref } from 'firebase/database';
import { ListItem } from './components';
import dayjs from 'dayjs';

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

  useEffect(() => {
    const DayJs = dayjs();

    todoList.forEach((element) => {
      const currentUnixTime = dayjs(DayJs.format('YYYY-MM-DD')).unix();
      const oldUnixTime = dayjs(element.date).unix();

      const betweenUnixTime = currentUnixTime - oldUnixTime >= 0;

      TodoService.updateTodo({ id: element.id, overdue: betweenUnixTime });
    });
  }, [todoList]);

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
