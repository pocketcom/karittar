import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';


export default function Header() {

  return (
    <>
      <AppBar position="static">
        <Toolbar variant="dense">
          <Typography className="headerName" variant="h6" color="inherit">
               karitter
          </Typography>
        </Toolbar>
      </AppBar>
      </>
  );
}