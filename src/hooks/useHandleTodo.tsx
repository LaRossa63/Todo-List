import React from 'react';
import { ref, getDownloadURL } from 'firebase/storage';
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
    console.log(fileUrl);

    const link = document.createElement('a');
    link.href = fileUrl;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
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
