import {
  TODO_COMPLETENESS_TOGGLED,
  TODO_COLOR_CHANGED,
  DELETE_TODO,
} from '../../action-types';

export function toggleTodoCompleteness(id) {
  return {
    type: TODO_COMPLETENESS_TOGGLED,
    payload: {
      id,
    },
  };
}

export function changeTodoColor(id, color) {
  return {
    type: TODO_COLOR_CHANGED,
    payload: {
      id,
      color,
    },
  };
}

export function deleteTodo(id) {
  return {
    type: DELETE_TODO,
    payload: {
      id,
    },
  };
}
