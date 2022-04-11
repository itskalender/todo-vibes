import { getID } from '../../utils';

export const initialState = {
  todos: [
    {
      id: getID(),
      completed: false,
      text: 'Buy more milk',
      color: 'Green',
    },
    {
      id: getID(),
      completed: true,
      text: 'Wash the car',
      color: 'Blue',
    },
    {
      id: getID(),
      completed: false,
      text: 'Prepare for meeting',
      color: 'Purple',
    },
  ],
  filters: {
    status: 'All',
    colors: {
      Green: true,
      Blue: true,
      Orange: true,
      Purple: true,
      Red: true,
    },
  },
};
