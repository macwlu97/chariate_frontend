import React from 'react';
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

const useStyles = makeStyles({
  root: {
    maxWidth: 1045,
    margin: 16,
  },
});

export default function ImgMediaCard({organization}) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
      <Link to={`/preview/0,${organization.id}`}>
        <CardMedia
          component="img"
          alt="Contemplative Reptile"
          height="140"
          image="https://source.unsplash.com/user/erondu"
          title="Contemplative Reptile"
        /></Link>
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {organization.name}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {organization.description}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {organization.type === 3 && organization.end_date}
          </Typography>

          <Typography variant="body2" color="textSecondary" component="p">
          {organization.type === 3 && organization.end_time}
          </Typography>
          
          
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Udostępnij
        </Button>
        <Button size="small" color="primary">
        <Link to={`/preview/0,${organization.id}`}>Obejrzyj profil</Link>
        {/* Obejrzyj profil */}
        </Button>
      </CardActions>
    </Card>
  );
}