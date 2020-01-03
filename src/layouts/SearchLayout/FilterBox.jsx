import React, {useEffect } from 'react';
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

function RecipeReviewCard(props) {
  const classes = useStyles();
  const [search_city, setSearch_city] = React.useState(props.cityId);
  // const [spacing, setSpacing] = React.useState(2);
  useEffect(() => {
    // () => onClick(search_city,0,props.search_text,props._sort)
    // onClick(search_city,props.type,props.search_text,props._sort)
    props.setter(search_city)
}, [search_city]);

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
        <Link to={"/search/"+props.cityId+","+props.type+","+props.search_text+",popularity"} onClick={() => onClick(props.cityId,props.type,props.search_text,"popularity")}>Popularność { props._sort=="popularity" && <b>(x)</b> }</Link>
        </Typography>
        <Typography component="p">
        <Link to={"/search/"+props.cityId+","+props.type+","+props.search_text+",name"} onClick={() => onClick(props.cityId,props.type,props.search_text,"name")}>Nazwa { props._sort=="name" && <b>(x)</b> } </Link>
        </Typography>
        <Typography component="p">
        <Link to={"/search/"+props.cityId+","+props.type+","+props.search_text+",date"} onClick={() => onClick(props.cityId,props.type,props.search_text,"date")}>Ostatnio dodane { props._sort=="date" && <b>(x)</b> }</Link>
        </Typography>

        <Typography component="p" style={{ paddingTop: 10}}>
          Kategoria
        </Typography>
        <Typography component="p">
        <Link to={"/search/"+props.cityId+",0,"+props.search_text+","+props._sort} onClick={() => onClick(props.cityId,0,props.search_text,props._sort)}>Fundacje  { props.type==0 && <b>(x)</b> }</Link>
        </Typography>
        <Typography component="p">
        <Link to={"/search/"+props.cityId+",1,"+props.search_text+","+props._sort} onClick={() => onClick(props.cityId,1,props.search_text,props._sort)}>Społeczności { props.type==1 && <b>(x)</b> }</Link>
        </Typography>
        <Typography component="p">
        <Link to={"/search/"+props.cityId+",2,"+props.search_text+","+props._sort} onClick={() => onClick(props.cityId,2,props.search_text,props._sort)}>Wydarzenia { props.type==2 && <b>(x)</b> }</Link>
        </Typography>
        <Typography component="p">
        <Link to={"/search/"+props.cityId+",3,"+props.search_text+","+props._sort} onClick={() => onClick(props.cityId,3,props.search_text,props._sort)}>Zbiórki { props.type==3 && <b>(x)</b> }</Link>
        </Typography>


        <Typography component="p" style={{ paddingTop: 10}}>
          Lokalizacja
        </Typography>
        <AutocompleteInput search_city={search_city} setSearch_city={setSearch_city} />

        <Typography component="p" style={{ paddingTop: 10}}>
        <Link to={"/search/0,5,"+props.search_text+",none"} onClick={() => onClick(0,5,props.search_text,"none")}>Wyczyść filtry { props.type==5 && <b>(x)</b> }</Link>
        </Typography>
      </Paper>
    </React.Fragment>
  );
}

export default RecipeReviewCard