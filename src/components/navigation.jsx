import React from 'react';
import {  makeStyles } from '@material-ui/core/styles';
import { BottomNavigation, Fab } from '@material-ui/core';

// placeholder icons to be replaced with correct icons later
//filled
import {
    HomeIcon,
    AssignmentIcon,
    DateRangeIcon,
    PersonOutlineIcon
} from '@material-ui/icons';
//outlined
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';
import AssignmentOutlinedIcon from '@material-ui/icons/AssignmentOutlined';
import DateRangeOutlinedIcon from '@material-ui/icons/DateRangeOutlined';
import PersonOutlineOutlinedIcon from '@material-ui/icons/PersonOutlineOutlined';

const useStyles = makeStyles((theme) => ({
    root: {
        transitionDuration: '0s !important',
        position: 'absolute',
        bottom: 0,
        borderRadius: '0px 0px 40px 40px',
        width: '323px',
        height: '105px',
        justifyContent: 'space-around',
        alignItems: 'center'
    },
    button: {
        //background/action circle too small - FIX
        boxShadow: 'none',
        color: theme.palette.iconColor,
        backgroundColor: 'transparent',
        height: '36px',
        width: '36px',
        fontSize: '27px',
        "&:hover": {
            backgroundColor: '#F9F9FE'
          },
        '&:focus': {
            boxShadow: 'none',
            color: theme.palette.secondary.main,
            backgroundColor: '#F2F6FC',
            borderRadius: '50%',
          },
    }
  }));

export default function Navigation() {
    const classes = useStyles();
    const [value, setValue] = React.useState('home');

    //finish onChange implementation
    const handleChange = (e, newValue) => {
        setValue(newValue);
    };

    return(
        <BottomNavigation onChange={handleChange} value={value} className={classes.root}>
            <Fab className={classes.button} value="home"><HomeOutlinedIcon /></Fab>
            <Fab className={classes.button} value="notes"><AssignmentOutlinedIcon /></Fab>
            <Fab className={classes.button} value='calendar'><DateRangeOutlinedIcon /></Fab>
            <Fab className={classes.button} value='profile'><PersonOutlineOutlinedIcon /></Fab>
        </BottomNavigation>
    )
}
