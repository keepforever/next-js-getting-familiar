import MenuIcon from '@material-ui/icons/Menu';
import Link from 'next/link';
// prettier-ignore
import { AppBar, Grid, Toolbar, Typography, Button, IconButton, FormControlLabel, Switch, makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1
    },
    title: {
        flexGrow: 1
    }
}));

const TopNavBar = ({ onToggleTheme = () => {}, themeMode = 'dark' }) => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar>
                    <Grid container>
                        <Link href="/index">
                            <Grid container direction="row" item xs={4} alignItems="center">
                                <Typography style={{ cursor: 'pointer' }} variant="h6" className={classes.title}>
                                    KeepForever
                                </Typography>
                            </Grid>
                        </Link>
                        <Grid direction="row" container item xs={4} alignItems="center">
                            <Typography variant="h6" color="inherit">
                                Test
                            </Typography>
                        </Grid>
                        <Grid direction="row" item container xs={4} justify="flex-end">
                            <FormControlLabel
                                style={{ color: 'white' }}
                                color="secondary"
                                control={<Switch checked={themeMode === 'dark'} onChange={onToggleTheme} />}
                                label={themeMode}
                            />
                        </Grid>
                    </Grid>
                </Toolbar>
            </AppBar>
        </div>
    );
};

export default TopNavBar;
