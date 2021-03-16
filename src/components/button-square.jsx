import React from 'react';
import {  makeStyles } from '@material-ui/core/styles';
import { Fab } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    button: {
        borderRadius: '10px',
        height: '39px',
        width: '39px',
        backgroundColor: theme.palette.tertiary.main,
        color: '#98A3B3',
        margin: '27px',
        boxShadow: '0px 5px 40px -5px #98A3B3'
    }
  }));

export default function SquareButton(props){
    const classes = useStyles();

    return (
        <Fab  className={classes.button}>
            {props.icon}
        </Fab>
    )
}
