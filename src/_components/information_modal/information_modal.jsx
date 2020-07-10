import React, {useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import ListItemText from '@material-ui/core/ListItemText';
import ListItem from '@material-ui/core/ListItem';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import CloseIcon from '@material-ui/icons/Close';
import Slide from '@material-ui/core/Slide';
import TextField from '@material-ui/core/TextField';
import { organizationActions } from '../../_actions';
import { useDispatch } from 'react-redux';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';

const useStyles = makeStyles((theme) => ({
  appBar: {
    position: 'relative',
  },
  title: {
    marginLeft: theme.spacing(2),
    flex: 1,
  },
  buttonStyle: {
    marginLeft: theme.spacing(2),
    // flex: 1,
  },
}));

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function FullScreenInformationDialog({org_id, headerName}) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const dispatch = useDispatch()
  const [informationObj, setInformationObj] = React.useState({});
  const [information, setInformation] = React.useState();
  const [edited, setEdited] = React.useState(0);
  const [updated, setUpdated] = React.useState(0);
  const [contentField, setContentField] = React.useState({content: ''});

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    dispatch(organizationActions.getAllInformation(setInformationObj, org_id))
  }, [updated]);

  const handleEditItem = (itemId, content) => {
    console.log(itemId)
    setEdited(itemId)
    setContentField({content: content})
  };

  const handleEditInformation = () => {
    setUpdated(1)
    // if (typeof(contentField.content) == "undefined" || contentField.content.length < 3 ) {
    //   dispatch(alertActions.success('error form field'));
    // } 
    var toJson = {
      content: contentField.content,
      information_id: edited,
    }
    // console.log(toJson)
    dispatch(organizationActions.putInformation(toJson))
    setEdited(0)
    setTimeout(function () {
      setUpdated(0)
    }, 1000);
    
  };

  const handleDeleteInformation = (itemId) => {
    setUpdated(1)
    var toJson = {
      information_id: itemId,
    }
    // console.log(toJson)
    dispatch(organizationActions.deleteInformation(toJson))
    
    setTimeout(function () {
      setUpdated(0)
    }, 1000);
    
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "contentField") {
      setContentField({content: value})
    } else {
        console.log("critical error - handle change")
    }
  }

  return (
    <div>
      <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        Zarządzaj informacjami
      </Button>
      <Dialog fullScreen open={open} onClose={handleClose} TransitionComponent={Transition}>
        <AppBar className={classes.appBar}>
          <Toolbar>
            <IconButton edge="start" color="inherit" onClick={handleClose} aria-label="close">
              <CloseIcon />
            </IconButton>
            <Typography variant="h6" className={classes.title}>
              Zarządzanie organizacją: {headerName}
            </Typography>
            <Button autoFocus color="inherit" onClick={handleClose}>
              Zamknij 
              {/* zapisz */}
            </Button>
          </Toolbar>
        </AppBar>
        {/* <List>
          <ListItem button>
            <ListItemText primary="Phone ringtone" secondary="Titania" />
          </ListItem>
          <Divider />
          <ListItem button>
            <ListItemText primary="Default notification ringtone" secondary="Tethys" />
          </ListItem>
        </List> */}
        {informationObj.results &&
          <List>
          {informationObj.results.map((informationElement, index) =>
            <React.Fragment>
              {edited !== informationElement.id &&
              <ListItem key={index} >
                <ListItemText primary={informationElement.name} secondary={informationElement.content} onClick={() => handleEditItem(informationElement.id, informationElement.content)}/>
                <Button variant="contained" className={classes.buttonStyle} onClick={() => handleEditItem(informationElement.id, informationElement.content)}>Edytuj</Button>

                <Button variant="contained" className={classes.buttonStyle} onClick={() => handleDeleteInformation(informationElement.id)}>Usuń</Button>
              </ListItem>}

              {edited === informationElement.id &&
              <ClickAwayListener onClickAway={() => handleEditItem(0, '')}>
              <ListItem key={index}>
              {/* Rodzaj informacji: {informationElement.name} */}
              <TextField
                margin="dense"
                id="outlined-multiline-static"
                label={informationElement.name}
                name="contentField"
                multiline
                rows={4}
                defaultValue={informationElement.content}
                variant="outlined"
                fullWidth
                value={contentField.content}
                onChange={handleChange}
              />
              {updated === 0 && <Button onClick={handleEditInformation} className={classes.buttonStyle} color="primary" disabled={typeof(contentField.content) == "undefined" || contentField.content.length < 10}>
                Edytuj informację
              </Button>}
              {updated === 1 && "Aktualizacja danych.."}
              {typeof(contentField.content) == "undefined" || contentField.content.length < 10 && "Min. 10 znaków"}
              </ListItem>
              </ClickAwayListener>}

            <Divider />
            </React.Fragment>
            )}
          </List>
        }

        
                    {/* <ul>
                        
                            <OutlinedCard org_id={org.id} name={org.name} description={org.description} type={org.type} type_name={org.type_name} sh_name={org.sh_name} city={org.city}></OutlinedCard>
                        )}
                    </ul> */}
                
      </Dialog>
    </div>
  );
}