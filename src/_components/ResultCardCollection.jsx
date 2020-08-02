import React, {useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { Link } from 'react-router-dom';
import ChipCard from './chip/chipCard';
import { useDispatch } from 'react-redux';
import { organizationActions } from '../_actions';

const useStyles = makeStyles({
  root: {
    maxWidth: 1045,
    margin: 16,
  },
});

export default function ImgMediaCardCollections({organization}) {
  const classes = useStyles();
  const dispatch = useDispatch()
  const [fileBinary, setFileBinary] = React.useState();
  let img_organization_id;
  let type_href;
  if ([0,1].includes(organization.type)){
    img_organization_id = organization.id;
    type_href = `/preview_organization/${organization.id}`;
  } else if (organization.type === 2){
    img_organization_id = organization.organization.id;
    type_href = `/preview_event/${organization.id}`;
  } else if (organization.type === 3){
    img_organization_id = organization.organization.id;
    type_href = `/preview_fundraiser/${organization.id}`;
  }
  
  useEffect(() => {
    dispatch(organizationActions.getCoverImage(setFileBinary, img_organization_id))
  }, []);

  let cover_image;
  if (typeof(fileBinary) !== "undefined"){
    cover_image = `${fileBinary}`
  } else {
    cover_image = "https://www.oferty-biznesowe.pl/media/thumbnail/company/9632618.jpg"
  }
  // {(typeof(fileBinary) !== "undefined") && `${fileBinary}` }
  // https://www.oferty-biznesowe.pl/media/thumbnail/company/9632618.jpg
  return (
    <Card className={classes.root}>
      <CardActionArea>
      <Link to={type_href}>
        <CardMedia
          component="img"
          alt="Contemplative Reptile"
          height="140"
          image={cover_image}
          title="Contemplative Reptile"
        />
      </Link>
        
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {organization.name}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {organization.description}
          </Typography>

          
        </CardContent>
      </CardActionArea>
      
      <CardActions>
      <ChipCard 
        type={organization.type} 
        // date={organization.type === 2 && organization.start_date || organization.type === 3 && organization.end_date} 
        // time={organization.type === 2 && organization.start_time || organization.type === 3 && organization.end_time}
        addDate={[2,3].includes(organization.type) && organization.add_date}
        // city={organization.type === 2 && organization.city.name}
      />
        <Button size="small" color="primary">
          Udostępnij
        </Button>
        <Button size="small" color="primary">
          <Link to={type_href}>Więcej informacji</Link>
        </Button>
      </CardActions>
    </Card>
  );
}