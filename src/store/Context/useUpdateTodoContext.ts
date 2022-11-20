import React, { createContext, useContext } from 'react';
import { ResponseTodoApi } from 'types/types';

interface Props {
  handleSubmitForm: (event: React.FormEvent<HTMLFormElement>) => void;
  handleChangeTitle: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleChangeDescription: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleChangeDate: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleOpenModal: (element: ResponseTodoApi) => void;
  title: string;
  description: string;
  date: string;
  isOpenModal: boolean;
}

const defaultValue: Props = {
  handleSubmitForm: () => {},
  handleChangeTitle: () => {},
  handleChangeDescription: () => {},
  handleChangeDate: () => {},
  handleOpenModal: () => {},
  title: '',
  description: '',
  date: '',
  isOpenModal: false,
};

export const UpdateTodoContext = createContext(defaultValue);

export const useUpdateTodoContext = () => useContext(UpdateTodoContext);
