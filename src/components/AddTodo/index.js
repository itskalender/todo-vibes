import { useState } from 'react';
import { useDispatch } from 'react-redux';

import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import Button from '@mui/material/Button';

import { addTodo } from '../../store/action-creators';

function AddTodo() {
  const [todo, setTodo] = useState('');
  const dispatch = useDispatch();

  const handleChange = e => {
    setTodo(e.target.value);
  };

  const handleClick = () => {
    dispatch(addTodo(todo));
    setTodo('');
  };

  return (
    <TextField
      fullWidth
      size="small"
      variant="filled"
      label="What needs to be done?"
      autoComplete="off"
      sx={{
        padding: 0,
      }}
      value={todo}
      onChange={handleChange}
      InputProps={{
        endAdornment: (
          <InputAdornment position="end">
            <Button
              size="large"
              color="primary"
              disabled={todo.trim().length === 0 ? true : false}
              onClick={handleClick}
            >
              Add
            </Button>
          </InputAdornment>
        ),
      }}
    />
  );
}

export default AddTodo;
