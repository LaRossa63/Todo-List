import { FC } from 'react';

import { BaseStyled } from 'theme/BaseStyled';

interface Props {
  children: React.ReactNode;
}

export const AppProvider: FC<Props> = ({ children }) => {
  return (
    <>
      <BaseStyled>{children}</BaseStyled>
    </>
  );
};
