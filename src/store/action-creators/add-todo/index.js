import { TODO_ADDED } from '../../action-types';

export function addTodo(text) {
  return {
    type: TODO_ADDED,
    payload: {
      text,
    },
  };
}
