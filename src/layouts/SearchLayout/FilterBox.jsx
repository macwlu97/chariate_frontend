import React, {useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import { Link } from 'react-router-dom';
import Divider from '@material-ui/core/Divider';
import AutocompleteInput from './AutocompleteBox';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3, 2),
  },
}));

const onClick = (cityId,type,search_text,_sort) => { 
  
  const redirect = `/search/?city=${props.cityId}&text=${props.search_text}&type=${props.type}&sort=${_sort}`
  // '/search/'+cityId+','+type+','+search_text+','+_sort;
  // const redirect = '/search/'+props.cityId+','+props.type+','+props.search_text+','+props._sort;
  console.log(redirect)
  history.push(redirect);
  console.log('Redirected to /search');
}; 

function RecipeReviewCard(props) {
  const classes = useStyles();
  const [search_city, setSearch_city] = React.useState(props.cityId);

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
        <Link to={`/search/?city=${props.cityId}&text=${props.search_text}&type=${props.type}&sort=popularity`}>Popularność { props._sort=="popularity" && <b>(x)</b> }</Link>
        {/* <Link to={"/search/"+props.cityId+","+props.type+","+props.search_text+",popularity"} onClick={() => onClick(props.cityId,props.type,props.search_text,"popularity")}>Popularność { props._sort=="popularity" && <b>(x)</b> }</Link> */}
        </Typography>
        <Typography component="p">
        <Link to={`/search/?city=${props.cityId}&text=${props.search_text}&type=${props.type}&sort=name`}>Nazwa { props._sort=="name" && <b>(x)</b> } </Link>
        </Typography>
        <Typography component="p">
        <Link to={`/search/?city=${props.cityId}&text=${props.search_text}&type=${props.type}&sort=date`}>Ostatnio dodane { props._sort=="date" && <b>(x)</b> }</Link>
        </Typography>

        <Typography component="p" style={{ paddingTop: 10}}>
          Kategoria
        </Typography>
        <Typography component="p">
        <Link to={`/search/?city=${props.cityId}&text=${props.search_text}&type=0&sort=${props._sort}`} >Fundacje  { props.type==0 && <b>(x)</b> }</Link>
        </Typography>
        <Typography component="p">
        <Link to={`/search/?city=${props.cityId}&text=${props.search_text}&type=1&sort=${props._sort}`} >Społeczności { props.type==1 && <b>(x)</b> }</Link>
        </Typography>
        <Typography component="p">
        <Link to={`/search/?city=${props.cityId}&text=${props.search_text}&type=2&sort=${props._sort}`}>Wydarzenia { props.type==2 && <b>(x)</b> }</Link>
        </Typography>
        <Typography component="p">
        <Link to={`/search/?city=${props.cityId}&text=${props.search_text}&type=3&sort=${props._sort}`} >Zbiórki { props.type==3 && <b>(x)</b> }</Link>
        </Typography>


        <Typography component="p" style={{ paddingTop: 10}}>
          Lokalizacja
        </Typography>
        <AutocompleteInput search_city={search_city} setSearch_city={setSearch_city} search_text={props.search_text} type={props.type} _sort={props._sort}/>

        <Typography component="p" style={{ paddingTop: 10}}>
        <Link to={`/search/?city=0&text=${props.search_text}&type=5&sort=none`}>Wyczyść filtry { props.type==5 && <b>(x)</b> }</Link>
        {/* <Link to={"/search/0,5,"+props.search_text+",none"} onClick={() => onClick(0,5,props.search_text,"none")}>Wyczyść filtry { props.type==5 && <b>(x)</b> }</Link> */}
        </Typography>
      </Paper>
    </React.Fragment>
  );
}

export default RecipeReviewCard