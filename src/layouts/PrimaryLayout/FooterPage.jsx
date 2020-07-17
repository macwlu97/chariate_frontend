import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';

function Copyright() {
    return (
      <Typography variant="body2" color="textSecondary" align="center">
        {' Copyright © '}
        <Link color="inherit" href="https://material-ui.com/">
           <br/> Chariate
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
    );
  }
  

const useStyles = makeStyles(theme => ({
    footer: {
        backgroundColor: theme.palette.background.paper,
        marginTop: theme.spacing(1),
        padding: theme.spacing(6, 0),
      },
    }));
  
    export default function FooterPage() {
      const classes = useStyles();
    
      return (
        <React.Fragment>
    {/* Footer */}
    <footer className={classes.footer}>
        <Container maxWidth="lg">
          <Typography variant="h6" align="center" gutterBottom>
            {/* Chariate */}
          </Typography>
          <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
            {/* Something here to give the footer a purpose! */}
          </Typography>
          <Copyright />
        </Container>
      </footer>
      {/* End footer */}
      </React.Fragment>
);
}