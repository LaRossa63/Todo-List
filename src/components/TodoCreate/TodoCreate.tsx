import { useCreateTodo } from 'hooks';
import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  width: 400px;

  margin: 0 auto;
  margin-top: 50px;
  padding: 20px 0;

  background-color: #fff;
  border-radius: 16px;
`;

const Form = styled.form`
  width: 400px;

  display: flex;
  flex-direction: column;
  align-items: center;

  gap: 30px;
`;

const Input = styled.input`
  width: 250px;

  padding: 17px;

  font-weight: 400;
  font-size: 14px;
  line-height: 16px;
  letter-spacing: 0.04em;

  color: #a6abb9;

  background-color: #f6f7fb;
  border-radius: 30px;
`;

const InputDate = styled.input`
  font-weight: 400;
  font-size: 14px;
  line-height: 16px;
  letter-spacing: 0.04em;

  width: fit-content;

  padding: 17px;

  background-color: #f6f7fb;
  border-radius: 30px;
`;

const InputFile = styled.input`
  width: 300px;
`;

const Button = styled.button`
  font-weight: 400;
  font-size: 18px;
  line-height: 140%;
  align-items: center;

  width: fit-content;

  display: flex;
  text-align: center;

  padding: 5px 10px;

  background-color: #0962e8;
  border-radius: 8px;

  color: #ffffff;
`;

export const TodoCreate = () => {
  const {
    handleSubmitForm,
    handleChangeTitle,
    handleChangeDescription,
    handleChangeDate,
    handleChangeFile,
    title,
    description,
    date,
    file,
  } = useCreateTodo();

  return (
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
        <InputDate type="date" onChange={handleChangeDate} value={date} />
        <InputFile type="file" onChange={handleChangeFile} value={file} />

        <Button>Добавить дело</Button>
      </Form>
    </Container>
  );
};
