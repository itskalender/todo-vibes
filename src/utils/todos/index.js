export function getFilteredTodos(state) {
  return state.todos.filter(todo => {
    const { status, colors } = state.filters;

    let statusFilter, colorsFilter;

    if (status === 'All') {
      statusFilter = true;
    } else if (status === 'Active') {
      statusFilter = todo.completed !== true;
    } else {
      statusFilter = todo.completed === true;
    }

    colorsFilter = colors[todo.color];

    return statusFilter && colorsFilter;
  });
}
