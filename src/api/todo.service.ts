import {
  uploadBytes,
  getDownloadURL,
  ref as refStorage,
} from 'firebase/storage';
import { ref, remove, set, update } from 'firebase/database';

import { TodoDTO } from 'types/types';
import { bd, storage } from './config';

export const TodoService = {
  addTodo(body: TodoDTO) {
    set(ref(bd, body.id), { ...body });
  },

  deleteTodo(id: string) {
    remove(ref(bd, id));
  },

  updateTodo({ ...body }: any) {
    update(ref(bd, body.id), { ...body });
  },

  addFile(id: string, file: any) {
    // const fileExtension = file.name.split('.').reverse()[0];

    const fileRef = refStorage(storage, id);

    uploadBytes(fileRef, file);
  },
};
