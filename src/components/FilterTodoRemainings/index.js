import { useSelector } from 'react-redux';

function FilterTodoRemainings() {
  const remainingTodos = useSelector(state =>
    state.todos.filter(todos => todos.completed === false)
  );

  return (
    <div className="filter-todo__remainings">
      <h5>Remaining Todos</h5>
      <p>{remainingTodos.length} todo left</p>
    </div>
  );
}

export default FilterTodoRemainings;
