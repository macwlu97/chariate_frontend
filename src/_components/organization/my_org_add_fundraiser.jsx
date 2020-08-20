import React, {useEffect, useState } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

import { useDispatch } from 'react-redux';
import { alertActions } from '../../_actions';
import { organizationActions } from '../../_actions';

export default function FormDialogFundraiser({org_id}) {
  const [open, setOpen] = React.useState(false);
  const [openSelect, setOpenSelect] = React.useState(false);
  const [nameField, setNameField] = React.useState({content: ''});
  const [descriptionField, setDescriptionField] = React.useState({content: ''});
  const [dateField, setDateField] = React.useState({content: '2020-06-14'});
  const [timeField, setTimeField] = React.useState({content: '07:30'});

  const dispatch = useDispatch()

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleAddFundraiser = () => {
    var today = new Date();
    var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
    var time = today.getHours() + ":" + today.getMinutes();

    var datefieldValue = new Date(dateField.content);
    var diffe = datefieldValue - today;

    if (typeof(nameField.content) == "undefined" || nameField.content.length < 8 ) {
      console.log("nameField error")
      dispatch(alertActions.success('error form field'));
      
    }
    else if (typeof(dateField.content) == "undefined" || dateField.content.length < 2 ) {
      console.log("datefield error")
      dispatch(alertActions.success('error form field'));
      
    }
    else if (typeof(timeField.content) == "undefined" || timeField.content.length < 2 ) {
      console.log("timefield error")
      dispatch(alertActions.success('error form field'));
    }
    else if (typeof(descriptionField.content) == "undefined" || descriptionField.content.length < 30 ) {
      console.log("descriptionField error")
      dispatch(alertActions.success('error form field'));
    } 
    else if (typeof(dateField.content) == "undefined" || dateField.content.length < 2 || diffe < 1) {
      console.log("dateField error")
      dispatch(alertActions.success('error form field'));
    } else {
      
      // var dateTime = date+' '+time;
      var toJson = {
        title: nameField.content,
        organization_id: org_id,
        start_date: date.concat("T", time),
        end_date: dateField.content.concat("T", timeField.content) ,
        description: descriptionField.content,
      }
      dispatch(organizationActions.addFundraiser(toJson))
      // console.log(toJson)
    }
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
    } else if (name === "descriptionField"){
      setDescriptionField({content: value})
    } else {
      console.log("critical error - handle change")
    }
}

  return (
    <div>
      <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        Dodaj zbiórkę
      </Button>
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Dodaj zbiórkę</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Dodaj zbiórkę dla swojej organizacji aby zebrać fundusze na określony cel!
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            name="nameField"
            label="Nazwa zbiórki"
            fullWidth
            value={nameField.content}
            onChange={handleChange}
          />
           <TextField
           margin="dense"
          id="outlined-multiline-static"
          label="Opis zbiórki"
          name="descriptionField"
          multiline
          rows={4}
          defaultValue="Opis"
          variant="outlined"
          fullWidth
          value={descriptionField.content}
          onChange={handleChange}
        />

          <TextField
            id="date"
            name="dateField"
            margin="dense"
            label="Data końca zbiórki"
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
            label="Godzina końca zbiórki"
            type="time"
            defaultValue="07:30"
            onChange={handleChange}
            // className={classes.textField}
            fullWidth
            InputLabelProps={{
              shrink: true,
            }}
            inputProps={{
              step: 300, // 5 min
            }}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Anuluj
          </Button>
          <Button onClick={handleAddFundraiser} color="primary">
            Dodaj zbiórkę
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}