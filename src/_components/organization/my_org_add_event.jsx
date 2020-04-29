import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

export default function FormDialogEvent() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        Dodaj wydarzenie
      </Button>
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Dodaj wydarzenie</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Dodaj wydarzenie dla swojej organizacji aby podziałać w swoim regionie!
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Nazwa wydarzenia"
            type="email"
            fullWidth
          />
          <TextField
            id="date"
            margin="dense"
            label="Data wydarzenia"
            type="date"
            defaultValue="2020-06-14"
            // className={classes.textField}
            fullWidth
            InputLabelProps={{
              shrink: true,
            }}
          />
          <TextField
            id="time"
            margin="dense"
            label="Godzina wydarzenia"
            type="time"
            defaultValue="07:30"
            // className={classes.textField}
            fullWidth
            InputLabelProps={{
              shrink: true,
            }}
            inputProps={{
              step: 300, // 5 min
            }}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Anuluj
          </Button>
          <Button onClick={handleClose} color="primary">
            Dodaj wydarzenie
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}