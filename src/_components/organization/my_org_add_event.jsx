import React, {useEffect, useState } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Select from '@material-ui/core/Select';
import { cityActions } from '../../_actions';
import { useDispatch } from 'react-redux';
import MenuItem from '@material-ui/core/MenuItem';
import { alertActions } from '../../_actions';
import { organizationActions } from '../../_actions';

export default function FormDialogEvent({org_id}) {
  const [open, setOpen] = React.useState(false);
  const [openSelect, setOpenSelect] = React.useState(false);
  const [nameField, setNameField] = React.useState({content: ''});
  const [dateField, setDateField] = React.useState({content: '2020-06-14'});
  const [timeField, setTimeField] = React.useState({content: '07:30'});

  const [cityObj, setCityObj] = React.useState({});
  const [city, setCity] = React.useState(1);
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(cityActions.getAll(setCityObj))
  }, []);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleCloseSelect = () => {
    setOpenSelect(false);
  };
  
  const handleOpenSelect = () => {
    setOpenSelect(true);
  };

  const handleAddEvent = () => {
 
    if (typeof(nameField.content) == "undefined" || nameField.content.length < 8 ) {
      dispatch(alertActions.success('error form field'));
      
    }
    else if (typeof(dateField.content) == "undefined" || dateField.content.length < 2 ) {
      dispatch(alertActions.success('error form field'));
      
    }
    else if (typeof(timeField.content) == "undefined" || timeField.content.length < 2 ) {
      dispatch(alertActions.success('error form field'));
    }
    else if (typeof(city) == "undefined" && city) {
      dispatch(alertActions.success('error form field'));
    } else {
      var toJson = {
        title: nameField.content,
        organization_id: org_id,
        start_date: dateField.content.concat("T", timeField.content) ,
        end_date: "1970-01-01T00:00",
        city_id: city,
      }
      dispatch(organizationActions.addEvent(toJson))
      // console.log(toJson)
    }
    // console.log(nameField.content)
    // console.log(dateField.content)
    // console.log(timeField.content)
    // console.log(city)
    setOpen(false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "nameField") {
      setNameField({content: value})
    } else if (name === "dateField") {
      // console.log(value)
      setDateField({content: value})
    } else if (name === "timeField") {
      // console.log(value)
      setTimeField({content: value})
    } else if (name === "cityOption"){
      setCity(value)
    } else {
      console.log("critical error - handle change")
    }
}


  return (
    <div>
      <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        Dodaj wydarzenie
      </Button>
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Dodaj wydarzenie</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Dodaj wydarzenie dla swojej organizacji aby podziałać w swoim regionie!
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            name="nameField"
            label="Nazwa wydarzenia"
            fullWidth
            value={nameField.content}
            onChange={handleChange}
          />
          <TextField
            id="date"
            name="dateField"
            margin="dense"
            label="Data wydarzenia"
            type="date"
            defaultValue="2020-06-14"
            onChange={handleChange}
            // className={classes.textField}
            fullWidth
            InputLabelProps={{
              shrink: true,
            }}
          />
          <TextField
            id="time"
            name="timeField"
            margin="dense"
            label="Godzina wydarzenia"
            type="time"
            defaultValue="07:30"
            onChange={handleChange}
            // className={classes.textField}
            fullWidth
            // ampm={false}
            InputLabelProps={{
              shrink: true,
            }}
            inputProps={{
              step: 300, // 5 min
            }}
          />
          
          <Select
          labelId="demo-controlled-open-select-label"
          id="demo-controlled-open-select"
          margin="dense"
          label="Miasto"
          open={openSelect}
          onClose={handleCloseSelect}
          onOpen={handleOpenSelect}
          value={city}
          // value={search_city}
          onChange={handleChange}
          name="cityOption"
        >
        {/* <MenuItem value={0}>Polska</MenuItem> */}
     {cityObj.results && cityObj.results.map((org, index) =>
                          <MenuItem key={org.id} value={org.id} >
                            {org.name}
                          </MenuItem>
                        )}
              
        </Select>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Anuluj
          </Button>
          <Button onClick={handleAddEvent} color="primary">
            Dodaj wydarzenie
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}