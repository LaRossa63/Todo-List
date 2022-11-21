import { uploadBytes, ref as refStorage } from 'firebase/storage';
import { ref, remove, set, update } from 'firebase/database';

import { TodoDTO } from 'types/types';
import { bd, storage } from './config';

type UpdateTodo = Pick<TodoDTO, 'id'> & Partial<TodoDTO>;

export const TodoService = {
  addTodo(body: TodoDTO) {
    set(ref(bd, body.id), { ...body });
  },

  deleteTodo(id: string) {
    remove(ref(bd, id));
  },

  updateTodo({ ...body }: UpdateTodo) {
    update(ref(bd, body.id), { ...body });
  },

  addFile(id: string, file: any) {
    const fileRef = refStorage(storage, id);

    uploadBytes(fileRef, file);
  },
};
