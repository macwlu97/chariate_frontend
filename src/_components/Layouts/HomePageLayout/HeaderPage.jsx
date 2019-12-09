import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';

// import AutocompleteInput from './Autocomplete_SelectBox';
import Search from './Search';

const useStyles = makeStyles(theme => ({
  mainFeaturedPost: {
    position: 'relative',
    backgroundColor: theme.palette.grey[800],
    color: theme.palette.common.white,
    marginBottom: theme.spacing(4),
    backgroundImage: 'url(https://source.unsplash.com/user/erondu)',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
  },
  overlay: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    backgroundColor: 'rgba(0,0,0,.3)',
  },
  mainFeaturedPostContent: {
    position: 'relative',
    padding: theme.spacing(3),
    [theme.breakpoints.up('md')]: {
      padding: theme.spacing(6),
      paddingRight: 0,
    },
  },
  }));

  export default function HeaderPage() {
    const classes = useStyles();
  
    return (


<Paper className={classes.mainFeaturedPost}>
{/* Increase the priority of the hero background image */}
{
  <img
    style={{ display: 'none' }}
    src="https://source.unsplash.com/user/erondu"
    alt="background"
  />
}
<div className={classes.overlay} />
<Grid container>
<Grid item md={3}></Grid>
  <Grid item md={6}>
    <div className={classes.mainFeaturedPostContent}>
      <Typography component="h1" variant="h1"  align="center" color="inherit" gutterBottom>
      <Box fontFamily="Arial" m={1}>Chariate</Box> 
      </Typography>
      <Typography variant="h3" align="center" color="inherit" paragraph>
      <Box fontFamily="Arial" m={1}>Dowiedz się jak dobrze służyć społeczności!</Box> 
      </Typography>
      <Paper p={0}><Search/>
      {/* <Grid container p={0}> 
      <Grid item md={3}><AutocompleteInput/></Grid>
      <Grid item md={3} p={0}><Search/></Grid></Grid> */}
</Paper>
      
      
    </div>
    
  </Grid>
  <Grid item md={3}>
    
  </Grid>
</Grid>
</Paper>
  );
}