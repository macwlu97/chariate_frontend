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
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

import Box from '@material-ui/core/Box';

import { typeinformationActions } from '../../_actions';
import { useDispatch } from 'react-redux';
import { alertActions } from '../../_actions';
import { organizationActions } from '../../_actions';
import { Divider } from '@material-ui/core';

export default function FormDialogLogo({org_id}) {
  const [open, setOpen] = React.useState(false);
  const [openSelect, setOpenSelect] = React.useState(false);

  const [fileObj, setFileObj] = React.useState();
  const [fileBinary, setFileBinary] = React.useState();
  const [filenameField, setFilenameField] = React.useState('');

  

  // const reader = new FileReader();

  // // This fires after the blob has been read/loaded.
  // reader.addEventListener('loadend', (e) => {
  //   const text = e.srcElement.result;
  //   setFileBinary(text);
  //   console.log(text);
  // });
  
  function getBase64(file) {
    var reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = function () {
      console.log(reader.result);
      setFileBinary(reader.result)
      // var base64result = reader.result.split(',')[1];
      // setFileObj(base64result)
    };
    reader.onerror = function (error) {
      console.log('Error: ', error);
    };
  }

  const dispatch = useDispatch()

  useEffect(() => {
    // dispatch(typeinformationActions.getAll(setTypeinformationObj))
  }, []);


  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };



  const handleAddCover = () => {
    if (typeof(filenameField) == "undefined" || filenameField.length < 7 ) {
      dispatch(alertActions.success('error form field'));
    } else {
    
    var toJson = {
      organization_id: org_id,
      filename: filenameField,
      
    }
    console.log(toJson)
    dispatch(organizationActions.putCoverImage(toJson,fileObj))
    // setOpen(false);
  }
  };

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "fileOption"){
      
      var fileTarget = files[0]
      const data = new FormData()
      data.append('file',fileTarget )
      console.log(data)
      setFilenameField(fileTarget.name)
      setFileObj(data)
      getBase64(fileTarget);
      
    } else {
        console.log("critical error - handle change")
    }
}


  return (
    <div>
      <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        Logo organizacji
      </Button>
      <Dialog fullWidth open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Logo organizacji</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Zarządzaj logiem dotyczącym organizacji, której jesteś założycielem
          </DialogContentText>
  

  <Button
  variant="contained"
  component="label"
>
  Upload File
  <input
    type="file"
    accept="image/*"
    onChange={handleChange}
    style={{ display: "none" }}
    name="fileOption"
  />
</Button>

<Box component="span" m={1}>
<Typography variant="h5" component="h5">
{typeof(filenameField) == "undefined" || filenameField.length > 7 && `Nazwa pliku: ${filenameField}`}
</Typography>
</Box>

<Divider/>

{typeof(filenameField) == "undefined" || filenameField.length > 7 && 
<Box component="span" m={1}>
<CardMedia
  component="img"
  image={`${fileBinary}`}
  title="Logo organizacji"
/></Box>
}




{/* <input
  accept="image/*"
  // className={classes.input}
  style={{ display: 'none' }}
  id="raised-button-file"
  multiple
  type="file"
/>
<label htmlFor="raised-button-file">
  <Button variant="raised" component="span" >
    Upload
  </Button>
</label> 
         */}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Anuluj
          </Button>
          <Button onClick={handleAddCover} color="primary" disabled={typeof(filenameField) == "undefined" || filenameField.length < 7}>
            Zmień logo
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}