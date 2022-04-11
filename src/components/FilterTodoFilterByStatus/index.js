import { useSelector, useDispatch } from 'react-redux';

import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';

import { changeStatusFilter } from '../../store/action-creators';

function FilterTodoFilterByStatus() {
  const statusFilter = useSelector(state => state.filters.status);
  const dispatch = useDispatch();

  const handleChange = (_, status) => {
    if (status !== null) {
      dispatch(changeStatusFilter(status));
    }
  };

  return (
    <div className="filter-todo__filter-by-status">
      <h5>Filter by Status</h5>
      <ToggleButtonGroup
        orientation="vertical"
        size="small"
        color="primary"
        exclusive
        aria-label="color selection"
        value={statusFilter}
        onChange={handleChange}
      >
        <ToggleButton value="All" aria-label="all">
          All
        </ToggleButton>
        <ToggleButton value="Active" aria-label="active">
          Active
        </ToggleButton>
        <ToggleButton value="Completed" aria-label="completed">
          Completed
        </ToggleButton>
      </ToggleButtonGroup>
    </div>
  );
}

export default FilterTodoFilterByStatus;
