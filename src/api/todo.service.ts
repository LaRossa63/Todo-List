import { ref, remove, set, update } from 'firebase/database';

import { TodoDTO } from 'types/types';
import { bd } from './config';

export const TodoService = {
  addTodo(body: TodoDTO) {
    set(ref(bd, body.id), { ...body });
  },

  deleteTodo(id: string) {
    remove(ref(bd, id));
  },

  updateTodo(body: TodoDTO) {
    update(ref(bd, body.id), { ...body });
  },
};
