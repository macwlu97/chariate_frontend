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
import FooterPage from '../../layouts/SearchLayout/FooterPage';


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
  const [cityId, setCityId] = React.useState(0);
  const [search_text, setSearch_text] = React.useState();
  const [type, setType] = React.useState(0);
  const [_sort, set_Sort] = React.useState();
  const [counter, set_Counter] = React.useState();

  const setter = (cityId, text, type, mode) => {
    setCityId(cityId);
    setSearch_text(text);
    setType(type);
    set_Sort(mode);
  }
  
  return (
    <React.Fragment>
      
      <CssBaseline />
      <PrimaryMenu cityId={cityId} search_text={search_text} type={type} _sort={_sort} setter={setCityId}/>
      {/* <Container maxWidth="lg"> */}
      <div style={{ padding: 40 }}>
        <PrimaryBreadcrumb/>
        <Typography variant="h4" component="h3" style={{ paddingTop: 40}}>
          szukasz: {search_text} 
        </Typography>

        ({counter} rezultatów)
        <Grid container className={classes.root} spacing="10">
        <Grid item md={3}>
            <FilterBox cityId={cityId} search_text={search_text} type={type} _sort={_sort} setter={setCityId} />
          </Grid>
          <Grid item md={8} >
          
            {/* <Paper className={classes.root} style={{minHeight: 500}}> */}
              {/* {props.children} */}
              {/* {React.cloneElement(props.children, { setter: setter })} */}
              {React.cloneElement(props.children, { setter: setter , set_Counter: set_Counter})}
            {/* </Paper> */}
          </Grid>
          
        </Grid>
      </div>
      <FooterPage/>
    </React.Fragment>
  );
}
