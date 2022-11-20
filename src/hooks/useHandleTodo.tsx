import { TodoService } from 'api';
import React, { useState } from 'react';

export const useHandleTodo = () => {
  const [isOpenModal, setIsOpenModal] = useState(false);

  const handleSubmitForm = (event: React.FormEvent<HTMLFormElement>) => {
    // event.preventDefaults();

    setIsOpenModal(false);
  };

  const handleOpenModal = () => {
    setIsOpenModal(true);
  };

  const handleClickDelete = (id: string) => {
    TodoService.deleteTodo(id);
  };

  const getCurrentStatus = (completed: boolean, overdue: boolean) => {
    if (completed) {
      return 'выполнено';
    }

    if (overdue) {
      return 'просрочен';
    }

    return 'выполняется';
  };

  return {
    handleSubmitForm,
    handleOpenModal,
    handleClickDelete,
    getCurrentStatus,
    isOpenModal,
  };
};
