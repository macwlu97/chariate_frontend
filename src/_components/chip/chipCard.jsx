import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Chip from '@material-ui/core/Chip';
import FaceIcon from '@material-ui/icons/Face';
import DoneIcon from '@material-ui/icons/Done';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    // justifyContent: 'center',
    flexWrap: 'wrap',
    '& > *': {
      margin: theme.spacing(0.5),
    },
  },
}));

export default function ChipCard({type, date, time, addDate, city}) {
  const classes = useStyles();

  const handleDelete = () => {
    console.info('You clicked the delete icon.');
  };

  const handleClick = () => {
    console.info('You clicked the Chip.');
  };

  return (
    <div className={classes.root}>
      <Chip size="small" label={type == 0 && "Fundacja" || type == 1 && "Społeczność" || type == 2 && "Wydarzenie" || type == 3 && "Zbiórka"} />
      <Chip
        size="small"
        avatar={<Avatar>OK</Avatar>}
        label="Zweryfikowane"
        clickable
        color="primary"
        onDelete={handleDelete}
        deleteIcon={<DoneIcon />}
      />
      {type == 2 && <Chip
        size="small"
        // avatar={"Start:"}
        label={`Data rozpoczęcia: ${date.concat(" ", time)}`}
        clickable
        color="primary"
        // onDelete={handleDelete}
        // deleteIcon={<DoneIcon />}
      />}
      {type == 3 && <Chip
        size="small"
        avatar={<Avatar>DO:</Avatar>}
        label={date.concat(" ", time)}
        clickable
        color="primary"
        // onDelete={handleDelete}
        // deleteIcon={<DoneIcon />}
      />}

        {[2,3].includes(type) && <Chip
        size="small"
        // avatar={<Avatar>ADD:</Avatar>}
        label={`Dodano: ${addDate}`}
        clickable
        color="primary"
        // onDelete={handleDelete}
        // deleteIcon={<DoneIcon />}
      />}

    {type == 2 && <Chip
        size="small"
        label={`Miasto: ${city}`}
        clickable
        color="primary"
        // onDelete={handleDelete}
        // deleteIcon={<DoneIcon />}
      />}
    </div>
  );
}