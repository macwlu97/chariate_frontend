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

const onClick = (cityId,type,search_text,_sort) => { 
  
  const redirect = '/search/'+cityId+','+type+','+search_text+','+_sort;
  // const redirect = '/search/'+props.cityId+','+props.type+','+props.search_text+','+props._sort;
  console.log(redirect)
  history.push(redirect);
  console.log('Redirected to /search');
}; 

export default function RecipeReviewCard(props) {
  const classes = useStyles();
  // const [spacing, setSpacing] = React.useState(2);

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
        <Link to={"/search/"+props.cityId+","+props.type+","+props.search_text+",popularity"} onClick={() => onClick(props.cityId,props.type,props.search_text,"popularity")}>Popularność</Link>
        </Typography>
        <Typography component="p">
        <Link to={"/search/"+props.cityId+","+props.type+","+props.search_text+",name"} onClick={() => onClick(props.cityId,props.type,props.search_text,"name")}>Nazwa</Link>
        </Typography>
        <Typography component="p">
        <Link to={"/search/"+props.cityId+","+props.type+","+props.search_text+",date"} onClick={() => onClick(props.cityId,props.type,props.search_text,"date")}>Ostatnio dodane</Link>
        </Typography>

        <Typography component="p" style={{ paddingTop: 10}}>
          Kategoria
        </Typography>
        <Typography component="p">
        <Link to={"/search/"+props.cityId+",0,"+props.search_text+","+props._sort} onClick={() => onClick(props.cityId,0,props.search_text,props._sort)}>Fundacje</Link>
        </Typography>
        <Typography component="p">
        <Link to={"/search/"+props.cityId+",1,"+props.search_text+","+props._sort} onClick={() => onClick(props.cityId,1,props.search_text,props._sort)}>Społeczności</Link>
        </Typography>
        <Typography component="p">
        <Link to={"/search/"+props.cityId+",2,"+props.search_text+","+props._sort} onClick={() => onClick(props.cityId,2,props.search_text,props._sort)}>Wydarzenia</Link>
        </Typography>
        <Typography component="p">
        <Link to={"/search/"+props.cityId+",3,"+props.search_text+","+props._sort} onClick={() => onClick(props.cityId,3,props.search_text,props._sort)}>Zbiórki</Link>
        </Typography>
        <Typography component="p">
        <Link to={"/search/0,5,"+props.search_text+",none"} onClick={() => onClick(0,5,props.search_text,"none")}>Wyczyść filtry</Link>
        </Typography>

        <Typography component="p" style={{ paddingTop: 10}}>
          Lokalizacja
        </Typography>
        <AutocompleteInput search_city={1} setSearch_city={1} />
      </Paper>
    </React.Fragment>
  );
}