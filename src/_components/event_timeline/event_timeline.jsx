import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Timeline from '@material-ui/lab/Timeline';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineOppositeContent from '@material-ui/lab/TimelineOppositeContent';
import TimelineDot from '@material-ui/lab/TimelineDot';
import FastfoodIcon from '@material-ui/icons/Fastfood';
import LaptopMacIcon from '@material-ui/icons/LaptopMac';
import HotelIcon from '@material-ui/icons/Hotel';
import RepeatIcon from '@material-ui/icons/Repeat';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: '6px 16px',
  },
  secondaryTail: {
    backgroundColor: theme.palette.secondary.main,
  },
}));

export default function EventTimeline({scheduleInformationList}) {
  const classes = useStyles();

  return (
    <Timeline align="alternate">
     {scheduleInformationList && scheduleInformationList.map((scheduleElement, index) =>                            
      <TimelineItem>
        <TimelineSeparator>
        <TimelineDot variant="outlined" color="primary" />
          
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <Paper elevation={3} className={classes.paper}>
            <Typography variant="h6" component="h1">
            {scheduleElement.content}
            </Typography>
            <Typography>punkt nr. {index+1}</Typography>
          </Paper>
        </TimelineContent>
      </TimelineItem>
      )}
      <TimelineItem>
        <TimelineSeparator>
            
        <TimelineDot variant="outlined" color="secondary" />
        
        </TimelineSeparator>
        <TimelineContent></TimelineContent>
      </TimelineItem>
    </Timeline>
  );
}