import { Container, CssBaseline, Paper, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core'
import React from 'react'
import AppDrawer from './AppDrawer';

const useStyles = makeStyles((theme) => ({
    container: {
        display: 'flex',
        marginTop: '60px'
    },
    pageContent:{
        margin: theme.spacing(5),
        padding: theme.spacing(3)
    },
    title: {
        textAlign: 'center'
    },
    divider: {
        marginTop: '20px',
        marginBottom: '20px',
    }
}));

export default function Home() {
    const classes = useStyles();
    return (
        <div className={classes.container}>
            <CssBaseline />
            <AppDrawer />
            <Container>
                <Paper className={classes.pageContent}>
                    <Typography variant="h4" className={classes.title}>Home</Typography>
                </Paper>
            </Container>
        </div>
    )
}
