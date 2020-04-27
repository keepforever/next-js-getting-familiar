import { useState } from 'react';
import Link from 'next/link';
import TopNavBar from '../comps/TopNavBar';
import { Paper, ThemeProvider, createMuiTheme, makeStyles } from '@material-ui/core';
import { useDarkMode } from '../utils';

const SiteLayout = ({ children }) => {
    const [theme, handleToggleTheme] = useDarkMode();

    const muiTheme = createMuiTheme({
        palette: {
            type: theme
        }
    });

    return (
        <ThemeProvider theme={muiTheme}>
            <Paper style={{ minHeight: '100vh', borderRadius: 0 }}>
                <TopNavBar onToggleTheme={handleToggleTheme} themeMode={theme} />
                <>{children}</>
            </Paper>
        </ThemeProvider>
    );
};

export default SiteLayout;
