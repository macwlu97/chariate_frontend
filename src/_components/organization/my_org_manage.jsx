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
import Box from '@material-ui/core/Box';

import { typeinformationActions } from '../../_actions';
import { useDispatch } from 'react-redux';
import { alertActions } from '../../_actions';
import { organizationActions } from '../../_actions';

export default function FormDialogManage({org_id}) {
  const [open, setOpen] = React.useState(false);
  const [openSelect, setOpenSelect] = React.useState(false);

  const [openMode, setOpenMode] = React.useState(false);
  const [openModeSelect, setOpenModeSelect] = React.useState(false);

  const [openFundraiser, setOpenFundraiser] = React.useState(false);
  const [openFundraiserSelect, setOpenFundraiserSelect] = React.useState(false);

  const [openEvent, setOpenEvent] = React.useState(false);
  const [openEventSelect, setOpenEventSelect] = React.useState(false);

  const [typeinformationObj, setTypeinformationObj] = React.useState({});
  const [typeinformation, setTypeinformation] = React.useState(0);

  const [organizationFundraisingObj, setOrganizationFundraisingObj] = React.useState(0);
  const [organizationFundraising, setOrganizationFundraising] = React.useState(0);

  const [organizationEventObj, setOrganizationEventObj] = React.useState(0);
  const [organizationEvent, setOrganizationEvent] = React.useState(0);

  const [modeObj, setModeObj] = React.useState({});
  const [mode, setMode] = React.useState('Organizacja');

  const [contentField, setContentField] = React.useState({content: ''});

  const dispatch = useDispatch()

  let informationOrganization, informationEvent, informationFundraiser;

  useEffect(() => {
    dispatch(typeinformationActions.getAll(setTypeinformationObj))
    dispatch(organizationActions.getOrganizationFundraising(org_id, setOrganizationFundraisingObj))
    dispatch(organizationActions.getOrganizationEvent(org_id, setOrganizationEventObj))
  }, []);


  const handleClickOpen = () => {
    setOpen(true);
    setContentField({content: ''})
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

  const handleCloseSelectMode = () => {
    setOpenModeSelect(false);
    setTypeinformation(0)
  };
  
  const handleOpenSelectMode = () => {
    setOpenModeSelect(true);
  };

  const handleCloseSelectFundraiser = () => {
    setOpenFundraiserSelect(false);
  };
  
  const handleOpenSelectFundraiser = () => {
    setOpenFundraiserSelect(true);
  };

  const handleCloseSelectEvent = () => {
    setOpenEventSelect(false);
  };
  
  const handleOpenSelectEvent = () => {
    setOpenEventSelect(true);
  };

  const handleAddInformation = () => {
    if (typeof(contentField.content) == "undefined" || contentField.content.length < 3 ) {
      dispatch(alertActions.success('error form field'));
    } 
    console.log(mode)
    if (mode === "Organizacja") {
      var toJson = {
        content: contentField.content,
        organization_id: org_id,
        type_info_id: typeinformation
      }
      dispatch(organizationActions.addInformation(toJson, mode))

    } else if (mode === "Event" && organizationEvent !== 0) {
      var toJson = {
        content: contentField.content,
        event_id: organizationEvent,
        type_info_id: typeinformation
      }
      dispatch(organizationActions.addInformation(toJson, mode))

    } else if (mode === "Fundraising" && organizationFundraising !== 0){
      var toJson = {
        content: contentField.content,
        fundraising_id: organizationFundraising,
        type_info_id: typeinformation
      }
      dispatch(organizationActions.addInformation(toJson, mode))

    }
    // console.log(toJson)
    
    setOpen(false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
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
    if (name === "contentField") {
      setContentField({content: value})
    } else if (name === "typeinformationOption"){
      setTypeinformation(value)
    } else if (name === "modeOption"){
      setMode(value)
    } else if (name === "fundraiserOption"){
      setOrganizationFundraising(value)
    } else if (name === "eventOption"){
      setOrganizationEvent(value)
    } else {
        console.log("critical error - handle change")
    }
    // console.log(typeinformation)
}

// getInformation = typeinformationObj.results && typeinformationObj.results.map((typeElement, index) => {
// <MenuItem key={typeElement.id} value={typeElement.id} >
//   {typeElement.text_field}
// </MenuItem>
// }
// )

let informationOrganizationList;
informationOrganizationList = (typeinformationObj.results && typeinformationObj.results.filter(el => el.mode === 0))
informationOrganization = informationOrganizationList && informationOrganizationList.map((typeElement, index) => 
<MenuItem key={typeElement.id} value={typeElement.id} >
  {typeElement.text_field}
</MenuItem>
)

let informationEventList;
informationEventList = (typeinformationObj.results && typeinformationObj.results.filter(el => el.mode === 1))
informationEvent = informationEventList && informationEventList.map((typeElement, index) => 
<MenuItem key={typeElement.id} value={typeElement.id}>
  {typeElement.text_field}
</MenuItem>
)

let informationFundraiserList;
informationFundraiserList = (typeinformationObj.results && typeinformationObj.results.filter(el => el.mode === 2))
informationFundraiser = informationFundraiserList && informationFundraiserList.map((typeElement, index) => 
<MenuItem key={typeElement.id} value={typeElement.id} >
  {typeElement.text_field}
</MenuItem>
)


  return (
    <div>
      <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        Dodaj informację
      </Button>
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Zarządzaj informacjami</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Zarządzaj informacjami dotyczącymi organizacji, której jesteś założycielem
          </DialogContentText>
          <Box>Tryb: <Select
          labelId="demo-controlled-open-select-labelmode"
          id="demo-controlled-open-selectmode"
          margin="dense"
          label="Tryb"
          open={openModeSelect}
          onClose={handleCloseSelectMode}
          onOpen={handleOpenSelectMode}
          value={mode}
          onChange={handleChange}
          name="modeOption"
        >
          
          <MenuItem key={1} value={`Organizacja`} >
            Organizacja
          </MenuItem>
          <MenuItem key={2} value={`Event`} >
            Event
          </MenuItem>
          <MenuItem key={3} value={`Fundraising`} >
            Zbiórka
          </MenuItem>

                        
              
        </Select></Box>

        {(mode === "Event") && <Box my={1}>
          Event:  <Select
          labelId="demo-controlled-open-select-label"
          id="demo-controlled-open-select"
          margin="dense"
          label="Event"
          open={openEventSelect}
          onClose={handleCloseSelectEvent}
          onOpen={handleOpenSelectEvent}
          value={organizationEvent}
          // value={search_city}
          onChange={handleChange}
          name="eventOption"
        >
          {organizationEvent === 0 && <MenuItem value={0}>Wybierz event</MenuItem>}
          {organizationEventObj.results && organizationEventObj.results.map((typeElement, index) =>
                          <MenuItem key={typeElement.id} value={typeElement.id} >
                            {typeElement.name}
                          </MenuItem>
                        )}
              
        </Select>
        </Box>}

        {(mode === "Fundraising") && <Box my={1}>
          Zbiórka:  <Select
          labelId="demo-controlled-open-select-label"
          id="demo-controlled-open-select"
          margin="dense"
          label="Zbiórka"
          open={openFundraiserSelect}
          onClose={handleCloseSelectFundraiser}
          onOpen={handleOpenSelectFundraiser}
          value={organizationFundraising}
          // value={search_city}
          onChange={handleChange}
          name="fundraiserOption"
        >
          {organizationFundraising === 0 && <MenuItem value={0}>Wybierz zbiórkę</MenuItem>}
          {organizationFundraisingObj.results && organizationFundraisingObj.results.map((typeElement, index) =>
                          <MenuItem key={typeElement.id} value={typeElement.id} >
                            {typeElement.name}
                          </MenuItem>
                        )}
              
        </Select>
        </Box>}

        <Box my={1}></Box>
        <Box>Rodzaj informacji:  <Select
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
          {/* {typeinformationObj.results && typeinformationObj.results.map((typeElement, index) =>
                          <MenuItem key={typeElement.id} value={typeElement.id} >
                            {typeElement.text_field}
                          </MenuItem>
                        )} */}
          {typeinformation === 0 && <MenuItem value={0}>Wybierz informację</MenuItem>}
          {(mode === "Organizacja" && informationOrganization) 
          || (mode === "Event" && informationEvent) 
          || (mode === "Fundraiser" && informationFundraiser)}
        </Select>
        </Box>
        <TextField
           margin="dense"
          id="outlined-multiline-static"
          label="Treść"
          name="contentField"
          multiline
          rows={4}
          // defaultValue="Opis"
          variant="outlined"
          fullWidth
          value={contentField.content}
          onChange={handleChange}
        />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Anuluj
          </Button>
          <Button onClick={handleAddInformation} color="primary">
            Dodaj informację
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}