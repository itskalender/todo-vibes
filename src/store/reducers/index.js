import { initialState } from '../initial-state';

import {
  TODO_ADDED,
  TODO_COLOR_CHANGED,
  TODO_COMPLETENESS_TOGGLED,
  DELETE_TODO,
  ALL_TODOS_MARKED_AS_COMPLETED,
  COMPLETED_TODOS_CLEARED,
  STATUS_FILTER_CHANGED,
  COLOR_FILTERS_CHANGED,
} from '../action-types';

import { getID } from '../../utils';

function reducer(state = initialState, action) {
  switch (action.type) {
    case TODO_ADDED: {
      const newTodo = {
        id: getID(),
        completed: false,
        text: action.payload.text,
        color: 'Red',
      };

      return {
        ...state,
        todos: [...state.todos, newTodo],
      };
    }
    case TODO_COMPLETENESS_TOGGLED: {
      const nextTodos = state.todos.map(todo => {
        if (todo.id === action.payload.id) {
          return {
            ...todo,
            completed: !todo.completed,
          };
        }

        return todo;
      });

      return {
        ...state,
        todos: nextTodos,
      };
    }
    case TODO_COLOR_CHANGED: {
      const nextTodos = state.todos.map(todo => {
        if (todo.id === action.payload.id) {
          return {
            ...todo,
            color: action.payload.color,
          };
        }

        return todo;
      });

      return {
        ...state,
        todos: nextTodos,
      };
    }
    case DELETE_TODO: {
      const nextTodos = state.todos.filter(
        todo => todo.id !== action.payload.id
      );

      return {
        ...state,
        todos: nextTodos,
      };
    }
    case ALL_TODOS_MARKED_AS_COMPLETED: {
      const nextTodos = state.todos.map(todo => {
        return {
          ...todo,
          completed: true,
        };
      });

      return {
        ...state,
        todos: nextTodos,
      };
    }
    case COMPLETED_TODOS_CLEARED: {
      const nextTodos = state.todos.filter(todo => todo.completed === false);

      return {
        ...state,
        todos: nextTodos,
      };
    }
    case STATUS_FILTER_CHANGED: {
      return {
        ...state,
        filters: {
          ...state.filters,
          status: action.payload.status,
        },
      };
    }
    case COLOR_FILTERS_CHANGED: {
      const nextColors = {
        ...state.filters.colors,
        [action.payload.color]: !state.filters.colors[action.payload.color],
      };

      return {
        ...state,
        filters: {
          ...state.filters,
          colors: nextColors,
        },
      };
    }
    default: {
      return state;
    }
  }
}

export default reducer;
