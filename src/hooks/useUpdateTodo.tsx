import React, { useState } from 'react';
import { TodoService } from 'api';
import { ResponseTodoApi } from 'types/types';

export const useUpdateTodo = () => {
  const [id, setId] = useState('');
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [date, setDate] = useState('');
  const [isOpenModal, setIsOpenModal] = useState(false);

  const handleSubmitForm = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    TodoService.updateTodo({ id, title, description, date });
    setIsOpenModal(false);
  };

  const handleChangeTitle = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
  };

  const handleChangeDescription = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setDescription(event.target.value);
  };

  const handleChangeDate = (event: React.ChangeEvent<HTMLInputElement>) => {
    setDate(event.target.value);
  };

  const handleOpenModal = (element: ResponseTodoApi) => {
    if (element) {
      setId(element.id);
      setTitle(element.title);
      setDescription(element.description);
      setDate(element.date);
    }

    setIsOpenModal(true);
  };

  return {
    handleSubmitForm,
    handleChangeTitle,
    handleChangeDescription,
    handleChangeDate,
    handleOpenModal,
    title,
    description,
    date,
    isOpenModal,
  };
};
