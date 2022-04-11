import {
  ALL_TODOS_MARKED_AS_COMPLETED,
  COMPLETED_TODOS_CLEARED,
} from '../../action-types';

export const markAllTodosAsCompleted = () => {
  return {
    type: ALL_TODOS_MARKED_AS_COMPLETED,
  };
};

export const clearCompletedTodos = () => {
  return {
    type: COMPLETED_TODOS_CLEARED,
  };
};
