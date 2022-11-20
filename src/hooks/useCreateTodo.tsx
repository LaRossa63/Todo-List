import React, { ChangeEvent, FormEvent, useState } from 'react';
import { nanoid } from 'nanoid';

import { TodoDTO } from 'types/types';
import { TodoService } from 'api';

export const useCreateTodo = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [date, setDate] = useState('');
  const [file, setFile] = useState('');
  const [bytesFile, setBytesFile] = useState<FileList>();

  const handleSubmitForm = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const newTodo: TodoDTO = {
      id: nanoid(),
      title,
      description,
      date,
      completed: false,
      overdue: false,
    };

    TodoService.addTodo(newTodo);

    if (file) {
      TodoService.addFile(newTodo.id, bytesFile);
    }

    clearInput();
  };

  const clearInput = () => {
    setTitle('');
    setDescription('');
    setDate('');
    setFile('');
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
    if (!event.target.files) {
      return;
    }

    setBytesFile(event.target.files[0] as any);

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
