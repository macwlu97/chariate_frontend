import React from 'react';
import Typography from '@material-ui/core/Typography';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Link from '@material-ui/core/Link';
import { history } from '../../_helpers';

function handleClick(event) {
  history.push("/");
  // event.preventDefault();
  // console.info('You clicked a breadcrumb.');
}

export default function SimpleBreadcrumbs() {
  return (
    <Breadcrumbs aria-label="breadcrumb">
      <Link color="inherit" to="/" onClick={handleClick}>
        Chariate
      </Link>
      <Link color="inherit" href="/" onClick={handleClick}>
        Home
      </Link>
      <Typography color="textPrimary">Organization</Typography>
    </Breadcrumbs>
  );
}