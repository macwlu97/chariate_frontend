import React, {useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import AccountCircle from '@material-ui/icons/AccountCircle';
// import AutocompleteInput from './AutocompleteBox';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import Paper from '@material-ui/core/Paper';
import { cityActions } from '../../../_actions';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

const useStyles = makeStyles(theme => ({
  margin: {
    margin: theme.spacing(1),
  },
  root: {
    height: 50
  },
  paper_element: {
    height: 50,
    width: 150
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

export default function InputWithIcon({nameField, setNameField, shortNameField, setShortNameField, 
  descriptionField, setDescriptionField, city, setCity}) {
  const classes = useStyles();

  const [cityObj, setCityObj] = React.useState({});
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(cityActions.getAll(setCityObj))
  }, []);

  const [open, setOpen] = React.useState(false);

  const handleChange = (e) => {
        const { name, value } = e.target;
        if (name === "nameField") {
          setNameField({namefield: value})
        } else if (name === "shortNameField"){
          setShortNameField({shortNameField: value})
        } else if (name === "descriptionField"){
          setDescriptionField({descriptionField: value})
        } else if (name === "cityOption"){
          setCity(e.target.value)
        } else {
          console.log("critical error - handle change")
        }
    }

  const handleClose = () => {
    setOpen(false);
  };
  
  const handleOpen = () => {
    setOpen(true);
  };

  return (
    <div>
      <div><FormControl className={classes.margin}>
        <InputLabel htmlFor="input-with-icon-adornment">Nazwa</InputLabel>
        <Input
          id="input-with-icon-adornment"
          name="nameField"
          startAdornment={
            <InputAdornment position="start">
              <AccountCircle />
            </InputAdornment>
          }
          value={nameField.namefield}
          onChange={handleChange}
        />
        {!nameField.namefield &&
              <div className="help-block">Name is required</div>
            }
      </FormControl>
</div>
     <div> <FormControl className={classes.margin}>
        <InputLabel htmlFor="input-with-icon-adornment">Skrót nazwy</InputLabel>
        <Input
          id="input-with-icon-adornment"
          name="shortNameField"
          startAdornment={
            <InputAdornment position="start">
              <AccountCircle />
            </InputAdornment>
          }
          value={shortNameField.shortNameField}
          onChange={handleChange}
        />
        {!shortNameField.shortNameField &&
              <div className="help-block">Short name is required</div>
            }
      </FormControl>
</div>
      <div> <FormControl className={classes.margin}>
        <InputLabel htmlFor="input-with-icon-adornment">Opis</InputLabel>
        <Input
          id="input-with-icon-adornment"
          name="descriptionField"
          startAdornment={
            <InputAdornment position="start">
              <AccountCircle />
            </InputAdornment>
          }
          multiline='true'
          rows='10'
          value={descriptionField.descriptionField}
          onChange={handleChange}
        />
        {!descriptionField.descriptionField &&
              <div className="help-block">Description is required</div>
            }
      </FormControl></div>

      <div>
      <Paper  component="form" className={classes.paper_element}>
      
      <FormControl className={classes.formControl}>
        <Select
          labelId="demo-controlled-open-select-label"
          id="demo-controlled-open-select"
          open={open}
          onClose={handleClose}
          onOpen={handleOpen}
          value={city}
          // value={search_city}
          onChange={handleChange}
          name="cityOption"
        >
     {cityObj.results && cityObj.results.map((org, index) =>
                          <MenuItem key={org.id} value={org.id} >
                            {org.name}
                          </MenuItem>
                        )}
              
        </Select>
      </FormControl>
      </Paper>
    </div>
    </div>
  );
}