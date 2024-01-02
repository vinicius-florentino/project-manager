import * as React from 'react';
import Snackbar from '@mui/material/Snackbar';
import Slide from '@mui/material/Slide';
import { createTheme } from "@mui/material/styles";
import { MuiThemeMod } from "../../css/muiTheme";
import { SnackbarContent } from '@mui/material';


function TransitionLeft(props) {
  return <Slide {...props} direction="left" />;
}

export default function DirectionSnackbar({ msg }) {
  const [open, setOpen] = React.useState(false);
  const theme = createTheme(MuiThemeMod);

  React.useEffect(() => {
    if (msg) {
      setOpen(true);
    }
  }, [msg]);

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Snackbar
      open={open}
      onClose={handleClose}
      anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
      TransitionComponent={TransitionLeft}
    >
    <SnackbarContent style={{
      backgroundColor: theme.palette.primary.main}}
      message={msg}
    />
    </Snackbar>
  );
}
