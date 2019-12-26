import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';
import Container from '@material-ui/core/Container';

import PrimaryMenu from './SearchMenu'
import FilterBox from './FilterBox'
import PrimaryBreadcrumb from './SearchBreadcrumb'


const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3, 2),
  },
}));

export default function SearchLayout(props) {
  const classes = useStyles();
  const [spacing, setSpacing] = React.useState(2);
  const handleChange = event => {
    setSpacing(Number(event.target.value));
  };

  return (
    <React.Fragment>
      
      <CssBaseline />
      <PrimaryMenu />
      {/* <Container maxWidth="lg"> */}
      <div style={{ padding: 40 }}>
        <PrimaryBreadcrumb/>
        <Grid container className={classes.root} spacing="10">
        <Grid item md={3}>
            <FilterBox/> 
          </Grid>
          <Grid item md={8} >
            {/* <Paper className={classes.root} style={{minHeight: 500}}> */}
              {props.children}
            {/* </Paper> */}
          </Grid>
          
        </Grid>
      </div>
    </React.Fragment>
  );
}
