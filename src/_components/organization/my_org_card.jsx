import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import FormDialogEvent from './my_org_add_event';
import FormDialogFundraiser from './my_org_add_fundraiser';
import FormDialogManage from './my_org_manage';
import FullScreenInformationDialog from '../information_modal/information_modal';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

export default function OutlinedCard({org_id, name, description, type, type_name, sh_name, city}) {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  return (
    <Card className={classes.root} variant="outlined">
    
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          {type_name} 
        </Typography>
        <Typography variant="h5" component="h2">
        {name} {bull} {sh_name}
          {/* {name} be{bull}nev{bull}o{bull}lent */}
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          {city}
        </Typography>
        <Typography variant="body2" component="p">
            {description}
          <br />
          {/* {'"a benevolent smile"'} */}
        </Typography>
      </CardContent>
      <CardActions>
      <FormDialogEvent org_id={org_id}></FormDialogEvent>
      <FormDialogFundraiser org_id={org_id}></FormDialogFundraiser> 
      <FormDialogManage org_id={org_id}></FormDialogManage> 
      <FullScreenInformationDialog org_id={org_id} headerName={name}></FullScreenInformationDialog>
      {/* <Button size="small">Dodaj zbiórkę</Button> <Button size="small">Zarządzaj informacjami</Button> */}
      </CardActions>
    </Card> 
  );
}