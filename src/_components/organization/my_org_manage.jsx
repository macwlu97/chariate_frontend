import React, {useEffect, useState } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';

import { typeinformationActions } from '../../_actions';
import { useDispatch } from 'react-redux';
import { alertActions } from '../../_actions';

export default function FormDialogManage() {
  const [open, setOpen] = React.useState(false);
  const [openSelect, setOpenSelect] = React.useState(false);

  const [typeinformationObj, setTypeinformationObj] = React.useState({});
  const [typeinformation, setTypeinformation] = React.useState(1);
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(typeinformationActions.getAll(setTypeinformationObj))
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
 
    setOpen(false);
  };

  const handleChange = (e) => {
    // const { name, value } = e.target;
    // if (name === "nameField") {
    //   setNameField({content: value})
    // } else if (name === "dateField") {
    //   // console.log(value)
    //   setDateField({content: value})
    // } else if (name === "timeField") {
    //   // console.log(value)
    //   setTimeField({content: value})
    // } else if (name === "cityOption"){
    //   setCity(value)
    // } else {
    //   console.log("critical error - handle change")
    // }
    console.log(typeinformation)
}


  return (
    <div>
      <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        Zarządzaj informacjami
      </Button>
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Zarządzaj informacjami</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Zarządzaj informacjami dotyczącymi organizacji, której jesteś założycielem
          </DialogContentText>
          {/* <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Nazwa wydarzenia"
            type="email"
            fullWidth
          /> */}
          <Select
          labelId="demo-controlled-open-select-label"
          id="demo-controlled-open-select"
          margin="dense"
          label="Rodzaj informacji"
          open={openSelect}
          onClose={handleCloseSelect}
          onOpen={handleOpenSelect}
          value={typeinformation}
          // value={search_city}
          onChange={handleChange}
          name="typeinformationOption"
        >
          {typeinformationObj.results && typeinformationObj.results.map((typeElement, index) =>
                          <MenuItem key={typeElement.id} value={typeElement.id} >
                            {typeElement.text_field}
                          </MenuItem>
                        )}
              
        </Select>
       
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Anuluj
          </Button>
          <Button onClick={handleClose} color="primary">
            Dodaj informację
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}