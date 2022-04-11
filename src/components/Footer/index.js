import FavoriteIcon from '@mui/icons-material/Favorite';

function Footer() {
  return (
    <footer className="todo-table__footer">
      Made with{' '}
      <FavoriteIcon
        fontSize="small"
        color="disabled"
        sx={{ '&:hover': { color: 'orangered', cursor: 'pointer' } }}
      />{' '}
      | Kalender | 2022
    </footer>
  );
}

export default Footer;
