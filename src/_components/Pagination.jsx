import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Pagination from '@material-ui/lab/Pagination';

const useStyles = makeStyles(theme => ({
  root: {
    '& > *': {
      marginTop: theme.spacing(2),
    },
  },
}));

export default function BasicPagination({setterPage, counter}) {
  const classes = useStyles();
  // const [page, setPage] = React.useState(1);
  const handleChange = (event, value) => {
    setterPage(value)
  };
  const pager = Math.ceil(counter/5)
  // console.log(counter)
  return (
    <div className={classes.root}>
    {/* Page: {page} */}
      <Pagination count={pager} color="primary"  onChange={handleChange}/>
      {/* <Pagination count={10} color="secondary" /> */}
    </div>
  );
}

