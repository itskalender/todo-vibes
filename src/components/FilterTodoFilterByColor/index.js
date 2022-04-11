import { useSelector, useDispatch } from 'react-redux';

import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

import { changeColorFilters } from '../../store/action-creators';

import { colors } from '../../enums';

function FilterTodoFilterByColor() {
  const colorFilters = useSelector(state => state.filters.colors);
  const dispatch = useDispatch();

  const handleChange = color => {
    dispatch(changeColorFilters(color));
  };

  const renderColorCheckboxes = () =>
    colors.map(colorData => (
      <FormControlLabel
        key={colorData.label}
        control={
          <Checkbox
            size="small"
            sx={{
              color: colorData.codes[900],
              '&.Mui-checked': {
                color: colorData.codes[500],
              },
            }}
            checked={colorFilters[colorData.label]}
            onChange={() => handleChange(colorData.label)}
          />
        }
        label={colorData.label}
      />
    ));

  return (
    <div className="filter-todo__filter-by-color">
      <h5>Filter by Color</h5>
      <FormGroup>{renderColorCheckboxes()}</FormGroup>
    </div>
  );
}

export default FilterTodoFilterByColor;
