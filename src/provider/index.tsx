import { FC } from 'react';

import { UpdateTodoContext } from 'store/Context';
import { useUpdateTodo } from 'hooks';
import { BaseStyled } from 'theme/BaseStyled';

interface Props {
  children: React.ReactNode;
}

export const AppProvider: FC<Props> = ({ children }) => {
  return (
    <>
      <UpdateTodoContext.Provider value={useUpdateTodo()}>
        <BaseStyled>{children}</BaseStyled>
      </UpdateTodoContext.Provider>
    </>
  );
};
