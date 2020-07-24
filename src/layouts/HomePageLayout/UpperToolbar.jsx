import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import AccountMenu from '../../_components/Account_menu';
import NotificationPopup from '../../_components/NotificationsPopup';
import SearchIcon from '@material-ui/icons/Search';
import { Link } from 'react-router-dom'

const useStyles = makeStyles(theme => ({
    toolbar: {
        borderBottom: `1px solid ${theme.palette.divider}`,
      },
      toolbarTitle: {
        flex: 1,
      },
  }));

export default function UpperToolbar() {
    const classes = useStyles();
  
    return (

<Toolbar className={classes.toolbar}>
{/* <Button size="small">Powiadomienia</Button> */}
{/* <NotificationPopup/> */}
<Typography
  component="h2"
  variant="h5"
  color="inherit"
  align="center"
  noWrap
  className={classes.toolbarTitle}
>
  
</Typography>
{/* <IconButton>
  <SearchIcon />
</IconButton> */}

  <AccountMenu />

<Link to="/login">
<Button variant="outlined" size="small">
  Wyloguj
</Button>
</Link>
</Toolbar>
  );
}