import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import { userActions } from '../../_actions';
import { useDispatch } from 'react-redux';
import { alertActions } from '../../_actions';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));

export default function ProfileForm({userInfo}) {
  const classes = useStyles();
  const [passwordField, setPasswordField] = React.useState('');
  const [emailField, setEmailField] = React.useState(userInfo.email);
  const [firstNameField, setFirstNameField] = React.useState(userInfo.first_name);
  const [lastNameField, setLastNameField] = React.useState(userInfo.last_name);
  const dispatch = useDispatch()

  const handleUpdate = () => {
 
    if (typeof(passwordField) == "undefined" || passwordField.length < 8 ) {
      dispatch(alertActions.success('error form field'));
      
    }
    else {
      var toJson = {
        password: passwordField,
      }
      dispatch(userActions.update(toJson))
      // console.log(toJson)
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "passwordField") {
      setPasswordField(value)
    } else {
      console.log("critical error - handle change")
    }
}

  return (
    <Box>
    <form className={classes.root} noValidate autoComplete="off">
        <TextField id="outlined-basic" label="Email" variant="outlined" value={emailField} disabled/> 
        <TextField 
        autoFocus 
        id="password"
        name="passwordField" 
        label="Password"
        type="password"
        variant="outlined"
        value={passwordField}
        onChange={handleChange}
        // autocomplete={}
        />
        <TextField id="outlined-basic" label="Imię" variant="outlined" value={firstNameField} disabled/>
        <TextField id="outlined-basic" label="Nazwisko" variant="outlined" value={lastNameField} disabled/>
     
      <Button onClick={handleUpdate} color="primary">
            Zmień dane.
      </Button>
    </form>
    </Box>
  );
}