import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import IconButton from '@material-ui/core/IconButton';
import GroupWorkIcon from '@material-ui/icons/GroupWork';
import PeopleIcon from '@material-ui/icons/People';
import EventIcon from '@material-ui/icons/Event';
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';
import { Link } from 'react-router-dom'

const useStyles = makeStyles(theme => ({
    quick_search: {
        padding: theme.spacing(3, 2),
        fontSize: '48px'
      },
   
    }));

const iconStyles = {
  maxWidth: '100px', 
  maxHeight: '100px', 
  minWidth: '80px', 
  minHeight: '80px'
};
  
    export default function QuickSearch() {
      const classes = useStyles();
    
      return (
      <React.Fragment>
        <Typography variant="h4" align="left" color="inherit" paragraph >
          <Box fontFamily="Arial" m={1} paddingTop={2}>Szybkie wyszukiwanie</Box> 
        </Typography>    
        <Typography variant="h6" align="left" color="inherit" paragraph >
          <Box fontFamily="Arial" m={1} > Odkrywaj fajne akcje podążając za typem!</Box> 
        </Typography>  
     
        <Paper className={classes.quick_search} align="center">
          <Link to="/organization">
            <IconButton>
              <GroupWorkIcon style={{fontSize: '100px'}}/>
              <Typography variant="h4" align="left" color="inherit" paragraph >
                <Box fontFamily="Arial" m={1} paddingTop={2}>Fundacje</Box> 
              </Typography>    
            </IconButton>
          </Link> 

          <Link to="/society">
            <IconButton>
              <PeopleIcon style={{fontSize: '100px'}}/>
              <Typography variant="h4" align="left" color="inherit" paragraph >
                <Box fontFamily="Arial" m={1} paddingTop={2}>Społeczności</Box> 
              </Typography>    
            </IconButton>
          </Link>

          <Link to="/event">
            <IconButton>
              <EventIcon style={{fontSize: '100px'}}/>
              <Typography variant="h4" align="left" color="inherit" paragraph >
                <Box fontFamily="Arial" m={1} paddingTop={2}>Wydarzenia</Box> 
              </Typography>    
            </IconButton>
          </Link>

          <Link to="/fundraisers">
            <IconButton > 
              <AttachMoneyIcon style={{fontSize: '100px'}} />
              <Typography variant="h4" align="left" color="inherit" paragraph >
                <Box fontFamily="Arial" m={1} paddingTop={2}>Zbiórki</Box> 
              </Typography>    
            </IconButton>
          </Link>
        </Paper>
      </React.Fragment>
);
}