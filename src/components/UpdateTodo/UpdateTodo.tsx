import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';

import { useUpdateTodoContext } from 'store/Context';

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

const Form = styled.form`
  display: flex;
  flex-direction: column;

  padding: 20px;
  gap: 35px;

  background-color: #fff;
  border-radius: 16px;
`;

const Input = styled.input`
  padding: 10px;
  border: 1px solid gray;
  border-radius: 5px;
`;

const Button = styled.button`
  padding: 10px;

  color: #fff;

  background-color: #0962e8;
`;

export const UpdateTodo = () => {
  const {
    handleSubmitForm,
    handleChangeTitle,
    handleChangeDescription,
    handleChangeDate,
    title,
    description,
    date,
  } = useUpdateTodoContext();

  return ReactDOM.createPortal(
    <Container>
      <Form onSubmit={handleSubmitForm}>
        <Input
          placeholder="Заголовок"
          onChange={handleChangeTitle}
          value={title}
        />

        <Input
          placeholder="Описание"
          onChange={handleChangeDescription}
          value={description}
        />

        <Input type="date" onChange={handleChangeDate} value={date} />

        <Button>Изменить</Button>
      </Form>
    </Container>,
    portal
  );
};
