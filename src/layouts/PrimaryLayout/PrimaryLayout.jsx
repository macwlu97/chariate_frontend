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
import Box from '@material-ui/core/Box';
// import UpperToolbar from './UpperToolbar';
// import HeaderPage from './HeaderPage';
// import Collections from './Collections';
// import QuickSearch from './QuickSearch';
// import PopularActions from './PopularActions';
// import FooterPage from './FooterPage';
// import Markdown from './Markdown';
// import post1 from './blog-post.1.md';
// import post2 from './blog-post.2.md';
// import post3 from './blog-post.3.md';
import PrimaryMenu from './PrimaryMenu'
import PromotedOrg from './PromotedOrg'
import PrimaryBreadcrumb from './PrimaryBreadcrumb'
import FooterPage from './FooterPage';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3, 2),
  },
}));

export default function PrimaryLayout(props) {
  const classes = useStyles();
  const [spacing, setSpacing] = React.useState(2);
  const handleChange = event => {
    setSpacing(Number(event.target.value));
  };

  return (
    <React.Fragment>
      
      <CssBaseline />
      <PrimaryMenu />
      <Container maxWidth="lg" className={classes.root}>
      <PrimaryBreadcrumb/>
      <Box className={classes.root}>
      <Paper className={classes.root}>
        {props.children}
      </Paper>
      </Box>
      </Container>
      {/* <div style={{ padding: 40 }}> */}
        
        {/* <Grid container > */}
          {/* <Grid item md={8} > */}
            
          {/* </Grid> */}
        {/* </Grid> */}
      {/* </div> */}

      {/* <div style={{ padding: 40 }}>
        <PrimaryBreadcrumb/>
        <Grid container className={classes.root} spacing="10">
          <Grid item md={8} >
            <Paper className={classes.root} style={{minHeight: 500}}>
              {props.children}
            </Paper>
          </Grid>
          <Grid item md={3}>
            <PromotedOrg/> 
          </Grid>
        </Grid>
      </div> */}
      <FooterPage/>
    </React.Fragment>
  );
}
