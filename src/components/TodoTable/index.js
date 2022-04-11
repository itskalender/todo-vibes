import AddTodo from '../AddTodo';
import Todos from '../Todos';
import FilterTodo from '../FilterTodo';
import Footer from '../Footer';

function TodoTable() {
  return (
    <div className="todo-table">
      <h1 className="todo-table__header">Todos</h1>
      <AddTodo />
      <Todos />
      <FilterTodo />
      <Footer />
    </div>
  );
}

export default TodoTable;
