import React from 'react';
import {  makeStyles } from '@material-ui/core/styles';
import {
    TextField,
    InputAdornment,
    Paper,
    Grid,
    Card,
    Button,
    IconButton,
    Typography
} from '@material-ui/core';
import { white } from 'material-ui/styles/colors';
import { RiSearchLine } from "react-icons/ri";
import { BiSliderAlt } from "react-icons/bi";
import contact from '../images/gaga.jpeg'
import Navigation from './navigation';
import HeaderButtons from './header-buttons';
import HeaderLocation from './header-location'
import SquareButton from './button-square'

const useStyles = makeStyles((theme) => ({
    //revisit and see what repeating values can be bifurcated and placed in the global theme
    root: {
      flexGrow: 1,
    },
    paper: {
        height: '701px',
        width: '323px',
        backgroundColor: theme.palette.primary.main,
        borderRadius: '40px',
        position: 'relative',
        marginTop: '20px',
        boxShadow: '0px 10px 40px -15px #98A3B3'
    },
    search: {
        padding: '7.5px 0px 7.5px 0px',
        backgroundColor: white,
        borderRadius: '10px',
        minWidth: '269px',
        color: theme.palette.iconColor,
        boxShadow: '0px 10px 40px -15px #98A3B3',
        verticalAlign: 'middle'
    },
    resize: {
        fontSize: '9px',
        paddingTop: '7.5px'
    },
    contactCard: {
        borderRadius: '20px',
        backgroundColor: theme.palette.secondary.main,
        height: '155px',
        margin: '19px 27px 19px 27px'
    },
    grid: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        margin: '19px 27px 19px 27px',
    },
    sectionHeader: {
        fontSize: '14px',
        fontWeight: 'bold'
    },
    imageIcon: {
        width: '82%',
        borderRadius: '8px'
    },
    textButton: {
        fontSize: '9px',
        textTransform: 'capitalize',
        paddingRight: '0px',
        justifyContent: 'flex-end',
        fontWeight: 'bold'
    }
}));

export default function ScreenOne() {
    const classes = useStyles();

    return(
        <Grid container  className={classes.root}>
            <Paper  className={classes.paper}>
                <HeaderButtons
                    icon={<img src={contact} className={classes.imageIcon} alt="current contact" />}
                    info={<HeaderLocation/>}
                />

                {/*icon is too far from text*/}
                <TextField
                autoFocus='true'
                className={classes.search}
                InputProps={{
                    classes: {
                        input: classes.resize
                    },
                    placeholder: 'Search a doctor or health issue',
                    disableUnderline: true,
                    startAdornment: (
                        <InputAdornment position="start">
                            <RiSearchLine style={{
                                color: '#0857DE',
                                fontSize: '20px',
                                padding: '17px'
                            }}/>
                        </InputAdornment>
                    ),
                }}/>

                {/*button too wide - FIX*/}
                <Grid className={classes.grid}>
                    <Typography className={classes.sectionHeader}>Upcoming Schedule</Typography>
                    <Button color="secondary" className={classes.textButton}>See all</Button>
                </Grid>

                {/*eventually split this out as a reusable component??*/}
                <Card id='shadow-duplicate' className={classes.contactCard}>
                    <SquareButton/>
                    <SquareButton/>
                </Card>

                <Grid className={classes.grid}>
                    <Typography className={classes.sectionHeader}>Let's find your doctor</Typography>
                    {/*button action animation/bground is off due to padding change...FIX*/}}
                    <IconButton color="secondary" style={{fontSize: '20px', paddingRight: '0px'}}  component="span">
                        <BiSliderAlt />
                    </IconButton>
                </Grid>

                <Navigation/>
            </Paper>
        </Grid>
    )

}
