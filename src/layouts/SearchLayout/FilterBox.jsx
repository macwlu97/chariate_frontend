import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import { Link } from 'react-router-dom';
import Divider from '@material-ui/core/Divider';
import AutocompleteInput from '../HomePageLayout/Autocomplete_SelectBox';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3, 2),
  },
}));

const onClick = () => {
  const redirect = '/search/3/Fundacja';
  history.push(redirect);
  console.log('Redirected to /search');
}; 

export default function RecipeReviewCard() {
  const classes = useStyles();
  

  return (
    <React.Fragment>
      <Paper className={classes.root}>
        <Typography variant="h4" component="h3" style={{ paddingBottom: 10}}>
          Filtry
        </Typography>
        <Divider light/>
        <Typography component="p" style={{ paddingTop: 10}}>
          Sortuj po
        </Typography>
        <Typography component="p">
        <Link to="/search/3/Fundacja" onClick={onClick}>Popularność</Link>
        </Typography>
        <Typography component="p">
        <Link to="/search/3/Fundacja" onClick={onClick}>Nazwa</Link>
        </Typography>
        <Typography component="p">
        <Link to="/search/3/Fundacja" onClick={onClick}>Ostatnio dodane</Link>
        </Typography>

        <Typography component="p" style={{ paddingTop: 10}}>
          Kategoria
        </Typography>
        <Typography component="p">
        <Link to="/search/3/Fundacja" onClick={onClick}>Fundacje</Link>
        </Typography>
        <Typography component="p">
        <Link to="/search/3/Fundacja" onClick={onClick}>Społeczności</Link>
        </Typography>
        <Typography component="p">
        <Link to="/search/3/Fundacja" onClick={onClick}>Wydarzenia</Link>
        </Typography>
        <Typography component="p">
        <Link to="/search/3/Fundacja" onClick={onClick}>Zbiórki</Link>
        </Typography>

        <Typography component="p" style={{ paddingTop: 10}}>
          Lokalizacja
        </Typography>
        <AutocompleteInput search_city={1} setSearch_city={1} />
      </Paper>
    </React.Fragment>
  );
}