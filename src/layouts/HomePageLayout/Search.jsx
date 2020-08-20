import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import DirectionsIcon from '@material-ui/icons/Directions';

const useStyles = makeStyles(theme => ({
  root: {
    padding: '2px 4px',
    display: 'flex',
    alignItems: 'center',
    width: 400, //560
    height: 50
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
  },
  iconButton: {
    padding: 10,
  },
  divider: {
    height: 28,
    margin: 4,
  },
}));

export default function CustomizedInputBase({search_text, setSearch_text, onClick, onKeyPress}) {
  const classes = useStyles();
  

  return (
    <Paper component="form" className={classes.root}>
      <InputBase
        className={classes.input}
        placeholder="Wpisz frazę"
        inputProps={{ 'aria-label': 'search google maps' }}
        onChange={(event) => setSearch_text(event.target.value)}
        onKeyPress={onKeyPress}
      />
      <IconButton  className={classes.iconButton} aria-label="search" onClick={onClick}>
        <SearchIcon/>
      </IconButton>
    </Paper>
  );
}