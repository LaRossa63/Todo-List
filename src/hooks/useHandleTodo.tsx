import React from 'react';

import { getStorage, ref, getDownloadURL } from 'firebase/storage';

import { storage, TodoService } from 'api';

export const useHandleTodo = () => {
  const handleChangeCompleted = (id: string, completed: boolean) => {
    TodoService.updateTodo({ id, completed });
  };

  const handleChangeOverdue = () => {};

  const handleClickDelete = (id: string) => {
    TodoService.deleteTodo(id);
  };

  const handleClickDownloadFile = async (id: string) => {
    const fileUrl = await getDownloadURL(ref(storage, id));

    await fetch(fileUrl);
  };

  const getCurrentStatus = (completed: boolean, overdue: boolean) => {
    if (overdue) {
      return 'просрочен';
    }

    if (completed) {
      return 'выполнено';
    }

    return 'выполняется';
  };

  return {
    handleClickDelete,
    getCurrentStatus,
    handleChangeCompleted,
    handleClickDownloadFile,
    handleChangeOverdue,
  };
};
