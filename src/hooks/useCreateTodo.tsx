import React, { ChangeEvent, FormEvent, useState } from 'react';
import { nanoid } from 'nanoid';

import { TodoDTO } from 'types/types';
import { TodoService } from 'api';

export const useCreateTodo = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [date, setDate] = useState('');
  const [file, setFile] = useState('');

  const handleSubmitForm = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const newTodo: TodoDTO = {
      id: nanoid(),
      title,
      description,
      date,
      file,
      completed: false,
      overdue: false,
    };

    TodoService.addTodo(newTodo);
  };

  const handleChangeTitle = (event: ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
  };

  const handleChangeDescription = (event: ChangeEvent<HTMLInputElement>) => {
    setDescription(event.target.value);
  };

  const handleChangeDate = (event: ChangeEvent<HTMLInputElement>) => {
    setDate(event.target.value);
  };

  const handleChangeFile = (event: ChangeEvent<HTMLInputElement>) => {
    setFile(event.target.value);
  };

  return {
    handleSubmitForm,
    handleChangeTitle,
    handleChangeDescription,
    handleChangeDate,
    handleChangeFile,
    title,
    description,
    date,
    file,
  };
};
