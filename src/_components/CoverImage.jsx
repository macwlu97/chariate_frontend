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

export default function CoverImage({org_id, type}) {
  const classes = useStyles();
  const dispatch = useDispatch()
  const [fileBinary, setFileBinary] = React.useState();
  // let img_object_id;
  
  useEffect(() => {
    dispatch(organizationActions.getCoverImage(setFileBinary, org_id))
  }, [org_id]);

  let cover_image;
  if (typeof(fileBinary) !== "undefined"){
    cover_image = `${fileBinary}`
  } else {
    cover_image = "https://www.oferty-biznesowe.pl/media/thumbnail/company/9632618.jpg"
  }

  return (
    <CardMedia
    component="img"
    image={cover_image}
    title="Cover Image"
    height={200}
    />
  );
}