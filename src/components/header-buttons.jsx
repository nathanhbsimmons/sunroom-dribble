
import React from 'react';
import {  makeStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';
import { BsGrid } from "react-icons/bs";
import SquareButton from './button-square'

const useStyles = makeStyles((theme) => ({
    root: {
    //   flexGrow: 1,
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center'
    },
}));

export default function HeaderButtons(props) {
    const classes = useStyles();

    return(
        <Grid className={classes.root} >
            <SquareButton icon={<BsGrid style={{ fontSize: '26px' }}/>}/>
                {props.info ? props.info : null}
            <SquareButton icon={props.icon}/>
        </Grid>
    )
}
