import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

function ListItemLink(props) {
  return <ListItem button component="a" {...props} />;
}
const flexContainer = {
  display: 'flex',
  flexDirection: 'row',
  padding: 0,
};
const useStyles = makeStyles(theme => ({
    quick_search: {
        padding: theme.spacing(3, 2),
        fontSize: '48px'
      },
    }));
  
    export default function PopularActions() {
      const classes = useStyles();
    
      return (
        <React.Fragment>
    <Typography variant="h4" align="left" color="inherit" paragraph >
        <Box fontFamily="Arial" m={1} paddingTop={2}>Popularne działania w Twojej okolicy</Box> 
      </Typography>    
      <Typography variant="h6" align="left" color="inherit" paragraph >
        <Box fontFamily="Arial" m={1} > Odkrywaj organizacje, akcje i zbiórki poprzez podanie lokalizacji </Box> 
      </Typography>  
     
      <Paper className={classes.quick_search}>
      <Grid container spacing={4}>
      
              {/* <List component="nav" aria-label="secondary mailbox folders"> */}
                {[1,2,3,4,5,6,7,8,9,10].map(post => (
               <React.Fragment>
              <Grid item xs={12} md={4}> 

               <ListItemLink  href="/organization">
                 <ListItemText primary="Warszawa" secondary="(670 miejsc)"/>
               </ListItemLink> </Grid>
               </React.Fragment>
              ))}
               {/* </List> */}
              
              </Grid>
              {/* </Grid> */}
      </Paper>

      </React.Fragment>
);
}