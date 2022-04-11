import { useDispatch } from 'react-redux';

import Button from '@mui/material/Button';

import {
  markAllTodosAsCompleted,
  clearCompletedTodos,
} from '../../store/action-creators';

function FilterTodoActions() {
  const dispatch = useDispatch();

  const handleChange = () => {
    dispatch(markAllTodosAsCompleted());
  };

  const handleClick = () => {
    dispatch(clearCompletedTodos());
  };

  return (
    <div className="filter-todo__actions">
      <h5>Actions</h5>
      <Button size="small" onClick={handleChange}>
        Mark all completed
      </Button>
      <Button size="small" onClick={handleClick}>
        Clear completed
      </Button>
    </div>
  );
}

export default FilterTodoActions;
