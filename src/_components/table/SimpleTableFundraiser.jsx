import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import FullScreenInformationDialogFundraiser from '../information_modal/information_modal_fundraiser';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';

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
export default function SimpleTableFundraiser({fundraiser, mode}) {
  const classes = useStyles();

  var tableElementsCount = fundraiser.items && fundraiser.items.results !== undefined && fundraiser.items.results.length
  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Nazwa zbiórki</TableCell>
            <TableCell align="right">Nazwa zbiórki</TableCell>
            <TableCell align="right">Dzień zakończenia</TableCell>
            <TableCell align="right">Czas zakończenia</TableCell>
            {mode === 0 && <TableCell align="right">Akcja</TableCell>}
          </TableRow>
        </TableHead>
        <TableBody>
          {fundraiser.items && fundraiser.items.results !== undefined && fundraiser.items.results.map((fundraiserElement, index) => (
            <TableRow key={fundraiserElement.id}>
              <TableCell component="th" scope="row">
                <Button size="small" color="primary"><Link to={`/preview_fundraiser/${fundraiserElement.id}`}> {fundraiserElement.name} </Link></Button>
              </TableCell>
              <TableCell align="right">{fundraiserElement.organization_name}</TableCell>
              <TableCell align="right">{fundraiserElement.start_date}</TableCell>
              <TableCell align="right">{fundraiserElement.time_fundraising}</TableCell>
              {mode === 0 &&<TableCell align="right"><FullScreenInformationDialogFundraiser fundraiser_id={fundraiserElement.id} headerName={fundraiserElement.organization_name}></FullScreenInformationDialogFundraiser>
              </TableCell>}
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