import React, { useCallback } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';

import AutocompleteInput from './Autocomplete_SelectBox';
import Search from './Search';

import { history } from '../../_helpers';

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
    const [search_city, setSearch_city] = React.useState(0);
    const [search_text, setSearch_text] = React.useState('Organizacja');

    const onClick = () => {
      
      const redirect = `/search/?city=${search_city}&text=${search_text}&type=5&sort=none`;
      history.push(redirect);
      console.log('Redirected to /organization');
    };

    const onKeyPress = (e) => {
      if(e.key === 'Enter'){
        const redirect = `/search/?city=${search_city}&text=${search_text}&type=5&sort=none`;
        history.push(redirect);
        console.log('Redirected to /organization');
      }
    };
  //   const memoizedHandleClick = useCallback(
  //   () => {
  //     console.log({search_city})
  //     // const redirect = '/search/'+search_city+'/'+search_text;
  //     // history.push(redirect);
  //     console.log('Redirected to /organization');

  //   },
  //   [], // Tells React to memoize regardless of arguments.
  // );
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

      <Grid container spacing={1}>  
      <Grid item md={3}>
      
     <AutocompleteInput search_city={search_city} setSearch_city={setSearch_city} />
     {/* <AutocompleteInput></AutocompleteInput> */}
    
    </Grid>
    {/* <Grid item md={1}></Grid> */}
<Grid item md={3}>
       
<Search search_text={search_text} setSearch_text={setSearch_text} onClick={(onClick)} onKeyPress={(onKeyPress)}/>

</Grid>
      </Grid>
   
    
    
    
    
    </div>
  </Grid>
  <Grid item md={3}>
    
  </Grid>
</Grid>
</Paper>
  );
}