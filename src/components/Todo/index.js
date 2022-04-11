import { useDispatch } from 'react-redux';

import Checkbox from '@mui/material/Checkbox';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import IconButton from '@mui/material/IconButton';
import ClearIcon from '@mui/icons-material/Clear';

import { colors } from '../../enums';

import {
  toggleTodoCompleteness,
  changeTodoColor,
  deleteTodo,
} from '../../store/action-creators';

function Todo({ id, completed, text, color }) {
  const dispatch = useDispatch();
  const selectedColor =
    colors.find(colorData => colorData.label === color) || colors[4];

  const handleTodoCompletenessToggling = id => {
    dispatch(toggleTodoCompleteness(id));
  };

  const handleTodoColorChange = (id, color) => {
    dispatch(changeTodoColor(id, color));
  };

  const handleTodoRemoval = id => {
    dispatch(deleteTodo(id));
  };

  const renderColorMenuItems = () => {
    return colors.map(color => (
      <MenuItem key={color.label} value={color.label}>
        {color.label}
      </MenuItem>
    ));
  };

  return (
    <div className="todo">
      <div className="todo__info">
        <Checkbox
          size="small"
          checked={completed}
          sx={{
            color: selectedColor.codes[900],
            '&.Mui-checked': {
              color: selectedColor.codes[500],
            },
          }}
          onChange={() => {
            handleTodoCompletenessToggling(id);
          }}
        />
        <p>{text}</p>
      </div>
      <div className="todo__actions">
        <FormControl size="small" sx={{ minWidth: 120, marginRight: 1 }}>
          <InputLabel id="select-label">Color</InputLabel>
          <Select
            labelId="select-label"
            id="select"
            value={color}
            label="Color"
            onChange={e => {
              handleTodoColorChange(id, e.target.value);
            }}
          >
            {renderColorMenuItems()}
          </Select>
        </FormControl>
        <IconButton
          aria-label="delete"
          onClick={() => {
            handleTodoRemoval(id);
          }}
        >
          <ClearIcon />
        </IconButton>
      </div>
    </div>
  );
}

export default Todo;
