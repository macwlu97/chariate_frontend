import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles(theme => ({
  root: {
    // padding: '2px 4px',
    // display: 'flex',
    // alignItems: 'center',
    // width: 400, //560
    height: 50
  },
  button: {
    display: 'block',
    marginTop: theme.spacing(2),
  },
  formControl: {
    margin: theme.spacing(1),
    marginTop: theme.spacing(2),
    minWidth: 120,
  },
}));

export default function ControlledOpenSelect({search_city, setSearch_city}) {
  const classes = useStyles();
  
  const [open, setOpen] = React.useState(false);

  const handleChange = event => {
    setSearch_city(event.target.value);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  return (
    <div>
      <Paper  component="form" className={classes.root}>
      <FormControl className={classes.formControl}>
        <Select
          labelId="demo-controlled-open-select-label"
          id="demo-controlled-open-select"
          open={open}
          onClose={handleClose}
          onOpen={handleOpen}
          value={search_city}
          onChange={handleChange}
        >
          <MenuItem value={10}>Warszawa</MenuItem>
          <MenuItem value={20}>Poznań</MenuItem>
          <MenuItem value={30}>Gdańsk</MenuItem>
        </Select>
      </FormControl>
      </Paper>
    </div>
  );
}