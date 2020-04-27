import MenuIcon from '@material-ui/icons/Menu';

import {
    AppBar,
    Grid,
    Toolbar,
    Typography,
    Button,
    IconButton,
    FormControlLabel,
    Switch,
    makeStyles
} from '@material-ui/core';

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
                        <Grid direction="row" item xs={6}>
                            <Typography variant="h6" className={classes.title}>
                                KeepForever
                            </Typography>
                        </Grid>
                        <Grid direction="row" item  container xs={6} justify="flex-end">
                            <FormControlLabel
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
