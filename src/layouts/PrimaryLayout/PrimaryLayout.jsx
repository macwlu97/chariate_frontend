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
import PrimaryMenu from './PrimaryMenu'
import PromotedOrg from './PromotedOrg'
import PrimaryBreadcrumb from './PrimaryBreadcrumb'
import FooterPage from './FooterPage';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(1, 2),
  },

  container: {
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
      
      <Container maxWidth="lg" className={classes.root}>
      {/* <PrimaryBreadcrumb/> */}
      <Box className={classes.container}>
      <Paper className={classes.container}>
      <PrimaryMenu />
        <Box my={4}/>
        {props.children}
        <FooterPage/>
      </Paper>
      </Box>
      </Container>
      
    </React.Fragment>
  );
}
