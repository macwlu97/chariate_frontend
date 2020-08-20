import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { Link } from 'react-router-dom';
import FullScreenInformationDialogEvent from '../information_modal/information_modal_event';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

export default function SimpleTable({event, mode}) {
  const classes = useStyles();
  
  var tableElementsCount = event.items && event.items.results !== undefined && event.items.results.length
  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Nazwa wydarzenia</TableCell>
            <TableCell align="right">Nazwa organizacji</TableCell>
            <TableCell align="right">Dzień rozpoczęcia</TableCell>
            <TableCell align="right">Czas rozpoczęcia</TableCell>
            {mode === 0 && <TableCell align="right">Akcja</TableCell>}
          </TableRow>
        </TableHead>
        <TableBody>
          {event.items && event.items.results !== undefined && event.items.results.map((eventElement, index) => (
            <TableRow key={eventElement.id}>
              <TableCell component="th" scope="row">
              <Button size="small" color="primary"><Link to={`/preview_event/${eventElement.id}`}> {eventElement.name} </Link></Button>
              </TableCell>
              <TableCell align="right">{eventElement.organization_name}</TableCell>
              <TableCell align="right">{eventElement.start_date}</TableCell>
              <TableCell align="right">{eventElement.time_event}</TableCell>
              {mode === 0 && <TableCell align="right"><FullScreenInformationDialogEvent event_id={eventElement.id} headerName={eventElement.organization_name}></FullScreenInformationDialogEvent></TableCell>}
            </TableRow>
          ))}

          {tableElementsCount === 0 && (
            <TableRow key={0}>
              <TableCell component="th" scope="row">
                Brak danych.
              </TableCell>
              <TableCell align="right"></TableCell>
              <TableCell align="right"></TableCell>
              <TableCell align="right"></TableCell>
              {mode === 0 && <TableCell align="right"></TableCell>}
              
            </TableRow>
          )}
        </TableBody>
      </Table>
    </TableContainer>
  );
}