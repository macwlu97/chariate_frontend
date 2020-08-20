import React, {useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import { cityActions } from '../../_actions';
import { useDispatch } from 'react-redux';
import { cityService } from '../../_services';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom'
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

function ControlledOpenSelect({search_city, setSearch_city, search_text, type, _sort}) {
  const classes = useStyles();
  const [city, setCity] = useState({});
  const dispatch = useDispatch()

    useEffect(() => {
      dispatch(cityActions.getAll(setCity))
  }, []);

  const [open, setOpen] = React.useState(false);
  
  const handleChange = event => {
    setSearch_city(event.target.value);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    // dispatch(cityActions.getAll(setCity))
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
                 
      <MenuItem value={0} component={Link} to={`/search/?city=0&text=${search_text}&type=${type}&sort=${_sort}`}>Polska</MenuItem>
     {city.results && city.results.map((org, index) =>
        <MenuItem value={org.id} component={Link} to={`/search/?city=${org.id}&text=${search_text}&type=${type}&sort=${_sort}`}>
        {/* onClick={() => onClick(org.id,type,search_text,_sort)} */}
          {org.name}
        </MenuItem>
      )}
              
        </Select>
      </FormControl>
      </Paper>
    </div>
  );
}

export default ControlledOpenSelect