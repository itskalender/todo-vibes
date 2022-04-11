import { useSelector } from 'react-redux';

import Todo from '../Todo';

import { getFilteredTodos } from '../../utils';

function Todos() {
  const todos = useSelector(getFilteredTodos);
  const hasAnyTodo = todos.length !== 0;

  const renderTodos = () =>
    todos.map(todo => (
      <Todo
        key={todo.id}
        id={todo.id}
        completed={todo.completed}
        text={todo.text}
        color={todo.color}
      />
    ));

  const renderWarningMessage = () => {
    return <p className="no-todo-message">There is no todo to display</p>;
  };

  return (
    <div className="todos">
      {hasAnyTodo ? renderTodos() : renderWarningMessage()}
    </div>
  );
}

export default Todos;
