import { FC } from 'react';

import { queryClient } from 'api';
import { BaseStyled } from 'theme/BaseStyled';
import { QueryClientProvider } from 'react-query';

interface Props {
  children: React.ReactNode;
}

export const AppProvider: FC<Props> = ({ children }) => {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <BaseStyled>{children}</BaseStyled>
      </QueryClientProvider>
    </>
  );
};
