import FilterTodoActions from '../FilterTodoActions';
import FilterTodoRemainings from '../FilterTodoRemainings';
import FilterTodoFilterByStatus from '../FilterTodoFilterByStatus';
import FilterTodoFilterByColor from '../FilterTodoFilterByColor';

function FilterTodo() {
  return (
    <div className="filter-todo">
      <FilterTodoActions />
      <FilterTodoRemainings />
      <FilterTodoFilterByStatus />
      <FilterTodoFilterByColor />
    </div>
  );
}

export default FilterTodo;
