import React from 'react';
import {  makeStyles } from '@material-ui/core/styles';
import { Grid, Box, Typography, Button } from '@material-ui/core';
import LocationOnIcon from '@material-ui/icons/LocationOn';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',

    },
    button: {
        height: '15px',
        backgroundColor: 'transparent',
        boxShadow:'none',
        fontSize: '9px',
        fontWeight: 'bold',
        textTransform: 'capitalize'
    },
}));

export default function HeaderLocation(props) {
    const classes = useStyles();

    return(
        <Grid className={classes.root} >
            <Typography style={{fontSize: '9px'}}>Current location</Typography>
            <Button
            variant="contained"
            color="primary"
            className={classes.button}
            startIcon={<LocationOnIcon color="secondary" style={{ fontSize: '9px'}}/>}
          >
            Semarang, INA
          </Button>
        </Grid>
    )
}
