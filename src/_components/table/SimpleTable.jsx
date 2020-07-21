import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import FullScreenInformationDialogEvent from '../information_modal/information_modal_event';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

// function createData(name, calories, fat, carbs, protein) {
//   return { name, calories, fat, carbs, protein };
// }

// const rows = [
//   createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
//   createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
//   createData('Eclair', 262, 16.0, 24, 6.0),
//   createData('Cupcake', 305, 3.7, 67, 4.3),
//   createData('Gingerbread', 356, 16.0, 49, 3.9),
// ];
// var rows;
export default function SimpleTable({event}) {
  const classes = useStyles();

  
  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Nazwa wydarzenia</TableCell>
            <TableCell align="right">Nazwa organizacji</TableCell>
            <TableCell align="right">Dzień rozpoczęcia</TableCell>
            <TableCell align="right">Czas rozpoczęcia</TableCell>
            <TableCell align="right">Akcja</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {event.items && event.items.results.map((eventElement, index) => (
            <TableRow key={eventElement.id}>
              <TableCell component="th" scope="row">
                {eventElement.name}
              </TableCell>
              <TableCell align="right">{eventElement.organization_name}</TableCell>
              <TableCell align="right">{eventElement.start_date}</TableCell>
              <TableCell align="right">{eventElement.time_event}</TableCell>
              <TableCell align="right"><FullScreenInformationDialogEvent event_id={eventElement.id} headerName={eventElement.organization_name}></FullScreenInformationDialogEvent></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}