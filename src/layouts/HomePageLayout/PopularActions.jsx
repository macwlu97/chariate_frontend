import React, {useEffect, useState } from 'react';
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
import { styled } from "@material-ui/core";

import { cityActions } from '../../_actions';
import { useDispatch, useSelector } from "react-redux";
import { cityService } from '../../_services';

const StyledGrid = styled(Grid)({
  backgroundColor: "blue",
  "&.Mui-selected": {
    backgroundColor: "red"
  }
});

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
      
        padding: theme.spacing(0, 2),
        fontSize: '48px'
      },
    cityGrid: {
        // position: 'relative',
        backgroundColor: theme.palette.grey[800],
        // color: theme.palette.common.white,
        // marginBottom: theme.spacing(4),
        backgroundImage: 'url(https://images.unsplash.com/photo-1519197924294-4ba991a11128?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1049&q=80)',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
      },
    }));
  
    export default function PopularActions(props) {
      const classes = useStyles();

      const allCity = useSelector(state => state.extendedCity);
      const dispatch = useDispatch()
      useEffect(() => {
        dispatch(cityActions.getAllExtended())
      }, [])
    
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

      {allCity.results && allCity.results.map((obj, index) => (
               <React.Fragment>
              <Grid item xs={12} md={4} className={classes.cityGrid} > 
                {/* {city.results && city.results.} */}
               <ListItemLink  href={`/search/?city=${obj.id}&text=&type=5&sort=popularity`}>
                 <ListItemText primary={<Typography variant="h6" style={{ color: '#000000' }}><b style={{  background: '#ffffff', padding: 2 }}>{obj.name}</b></Typography>} secondary={<Typography variant="h6" style={{ color: '#000000'}}><i style={{  background: '#ffffff', padding: 2  }}>({obj.sum_organization} miejsc)</i></Typography>}/>
               </ListItemLink> </Grid>
               </React.Fragment>
              ))}

              </Grid>

       
      {/* {city.results && city.results.map((org, index) =>
                          <MenuItem value={org.id}>
                                {org.name}
                            </MenuItem>
                        )} */}
              {/* <List component="nav" aria-label="secondary mailbox folders"> */}
                {/* {[1,2,3,4,5,6,7,8,9,10].map(post => (
               <React.Fragment>
              <Grid item xs={12} md={4}> 

               <ListItemLink  href="/organization">
                 <ListItemText primary="Warszawa" secondary="(670 miejsc)"/>
               </ListItemLink> </Grid>
               </React.Fragment>
              ))}

              </Grid> */}
               {/* </List> */}
              
             
              {/* </Grid> */}

              
      </Paper>

      </React.Fragment>
);
}