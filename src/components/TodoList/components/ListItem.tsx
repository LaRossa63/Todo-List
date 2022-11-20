import React, { FC } from 'react';
import styled from 'styled-components';

import { DeleteIcon, DownloadIcon, UpdateIcon } from 'images';
import { ResponseTodoApi } from 'types/types';
import { useHandleTodo } from 'hooks';
import { UpdateTodo } from 'components';

interface Props {
  element: ResponseTodoApi;
}

const Item = styled.li`
  width: 100%;
  height: fit-content;

  display: flex;
  justify-content: space-between;

  padding: 10px 20px;

  background-color: #fff;
  border-radius: 16px;
`;

const ContainerText = styled.div`
  display: flex;
  flex-direction: column;

  gap: 15px;
`;

const Title = styled.span`
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 140%;
  color: #000;
`;

const Description = styled.p``;

const ContainerStatus = styled.div`
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 140%;
  color: #29374e;

  display: flex;
  flex-direction: column;

  gap: 15px;
`;

const Status = styled.span``;

const Date = styled.span``;

const ContainerControls = styled.div`
  display: flex;
  align-items: center;

  gap: 15px;
`;

export const ListItem: FC<Props> = ({ element }) => {
  const { handleOpenModal, getCurrentStatus, handleClickDelete, isOpenModal } =
    useHandleTodo();

  return (
    <>
      <Item key={element.id}>
        <ContainerText>
          <Title>{element.title}</Title>
          <Description>{element.description}</Description>
        </ContainerText>

        <ContainerStatus>
          <Status>
            Статус: {getCurrentStatus(element.completed, element.overdue)}
          </Status>

          <Date>Закончить до {element.date}</Date>
        </ContainerStatus>

        <ContainerControls>
          <DownloadIcon />
          <UpdateIcon onClick={handleOpenModal} />
          <DeleteIcon onClick={() => handleClickDelete(element.id)} />
        </ContainerControls>

        {isOpenModal && <UpdateTodo />}
      </Item>
    </>
  );
};
